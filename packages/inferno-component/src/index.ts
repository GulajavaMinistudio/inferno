/**
 * @module Inferno-Component
 */ /** TypeDoc Comment */

// Make sure u use EMPTY_OBJ from 'inferno', otherwise it'll be a different reference
import {
  createVNode,
  EMPTY_OBJ,
  internal_DOMNodeMap,
  internal_patch,
  options,
  Props,
  VNode
} from "inferno";
import {
  combineFrom,
  ERROR_MSG,
  isArray,
  isFunction,
  isInvalid,
  isNull,
  isNullOrUndef,
  isStringOrNumber,
  NO_OP,
  throwError
} from "inferno-shared";
import VNodeFlags from "inferno-vnode-flags";

let noOp = ERROR_MSG;

if (process.env.NODE_ENV !== "production") {
  noOp =
    "Inferno Error: Can only update a mounted or mounting component. This usually means you called setState() or forceUpdate() on an unmounted component. This is a no-op.";
}

const componentCallbackQueue: Map<any, Function[]> = new Map();

export interface ComponentLifecycle<P, S> {
  componentDidMount?(): void;
  componentWillMount?(): void;
  componentWillReceiveProps?(nextProps: P, nextContext: any): void;
  shouldComponentUpdate?(nextProps: P, nextState: S, nextContext: any): boolean;
  componentWillUpdate?(nextProps: P, nextState: S, nextContext: any): void;
  componentDidUpdate?(prevProps: P, prevState: S, prevContext: any): void;
  componentWillUnmount?(): void;
}

const resolvedPromise = Promise.resolve();

function addToQueue(
  component: Component<any, any>,
  force: boolean,
  callback?: Function
): void {
  let queue: any = componentCallbackQueue.get(component);

  if (queue === void 0) {
    queue = [];
    componentCallbackQueue.set(component, queue);
    resolvedPromise.then(() => {
      componentCallbackQueue.delete(component);
      component._updating = true;
      applyState(component, force, () => {
        for (let i = 0, len = queue.length; i < len; i++) {
          queue[i].call(component);
        }
      });
      component._updating = false;
    });
  }
  if (!isNullOrUndef(callback)) {
    queue.push(callback);
  }
}

function queueStateChanges<P, S>(
  component: Component<P, S>,
  newState: S,
  callback?: Function
): void {
  if (isFunction(newState)) {
    newState = newState(component.state, component.props, component.context);
  }
  const pending = component._pendingState;

  if (isNullOrUndef(pending)) {
    component._pendingState = newState;
  } else {
    for (const stateKey in newState) {
      pending[stateKey] = newState[stateKey];
    }
  }

  if (!component._pendingSetState && !component._blockRender) {
    if (!component._updating) {
      component._pendingSetState = true;
      component._updating = true;
      applyState(component, false, callback);
      component._updating = false;
    } else {
      addToQueue(component, false, callback);
    }
  } else {
    component._pendingSetState = true;
    if (isFunction(callback) && component._blockRender) {
      (component._lifecycle as any).addListener(callback.bind(component));
    }
  }
}

function applyState<P, S>(
  component: Component<P, S>,
  force: boolean,
  callback?: Function
): void {
  if (component._unmounted) {
    return;
  }
  if (force || !component._blockRender) {
    component._pendingSetState = false;
    const pendingState = component._pendingState;
    const prevState = component.state;
    const nextState = combineFrom(prevState, pendingState) as any;
    const props = component.props as P;
    const context = component.context;

    component._pendingState = null;
    let nextInput: VNode;
    const renderOutput = component._updateComponent(
      prevState as S,
      nextState,
      props,
      props,
      context,
      force,
      true
    );
    let didUpdate = true;

    if (isInvalid(renderOutput)) {
      nextInput = createVNode(VNodeFlags.Void, null);
    } else if (renderOutput === NO_OP) {
      nextInput = component._lastInput;
      didUpdate = false;
    } else if (isStringOrNumber(renderOutput)) {
      nextInput = createVNode(
        VNodeFlags.Text,
        null,
        null,
        renderOutput
      ) as VNode;
    } else if (isArray(renderOutput)) {
      if (process.env.NODE_ENV !== "production") {
        throwError(
          "a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object."
        );
      }
      return throwError();
    } else {
      nextInput = renderOutput;
    }

    const lastInput = component._lastInput as VNode;
    let vNode = component._vNode as VNode;
    const parentDom =
      (lastInput.dom && lastInput.dom.parentNode) ||
      (lastInput.dom = vNode.dom);

    if (nextInput.flags & VNodeFlags.Component) {
      nextInput.parentVNode = vNode;
    }
    component._lastInput = nextInput as VNode;
    if (didUpdate) {
      let childContext;

      if (!isNullOrUndef(component.getChildContext)) {
        childContext = component.getChildContext();
      }

      if (isNullOrUndef(childContext)) {
        childContext = component._childContext;
      } else {
        childContext = combineFrom(context, childContext as any);
      }

      const lifeCycle = component._lifecycle as any;
      internal_patch(
        lastInput,
        nextInput as VNode,
        parentDom as Element,
        lifeCycle,
        childContext,
        component._isSVG,
        false
      );

      // If this component was unmounted by its parent, do nothing. This is no-op
      if (component._unmounted) {
        return;
      }

      lifeCycle.trigger();

      if (!isNullOrUndef(component.componentDidUpdate)) {
        component.componentDidUpdate(props, prevState as S, context);
      }
      if (!isNull(options.afterUpdate)) {
        options.afterUpdate(vNode);
      }
    }
    const dom = (vNode.dom = (nextInput as VNode).dom as Element);
    if (options.findDOMNodeEnabled) {
      internal_DOMNodeMap.set(component, (nextInput as VNode).dom);
    }

    while (!isNullOrUndef((vNode = vNode.parentVNode as any))) {
      if ((vNode.flags & VNodeFlags.Component) > 0) {
        vNode.dom = dom;
      }
    }
  } else {
    component.state = component._pendingState as any;
    component._pendingState = null;
  }
  if (isFunction(callback)) {
    callback.call(component);
  }
}

export default class Component<P, S> implements ComponentLifecycle<P, S> {
  public static defaultProps: {};
  public state: S | null = null;
  public props: P & Props;
  public context: any;
  public _blockRender = false;
  public _blockSetState = true;
  public _pendingSetState = false;
  public _pendingState: S | null = null;
  public _lastInput: any = null;
  public _vNode: VNode | null = null;
  public _unmounted = false;
  public _lifecycle = null;
  public _childContext = null;
  public _isSVG = false;
  public _updating = true;

  constructor(props?: P, context?: any) {
    /** @type {object} */
    this.props = props || (EMPTY_OBJ as P);

    /** @type {object} */
    this.context = context || EMPTY_OBJ; // context should not be mutable
  }

  // LifeCycle methods
  public componentDidMount?(): void;

  public componentWillMount?(): void;

  public componentWillReceiveProps?(nextProps: P, nextContext: any): void;

  public shouldComponentUpdate?(
    nextProps: P,
    nextState: S,
    nextContext: any
  ): boolean;

  public componentWillUpdate?(
    nextProps: P,
    nextState: S,
    nextContext: any
  ): void;

  public componentDidUpdate?(
    prevProps: P,
    prevState: S,
    prevContext: any
  ): void;

  public componentWillUnmount?(): void;

  public getChildContext?(): void;

  public forceUpdate(callback?: Function) {
    if (this._unmounted) {
      return;
    }

    applyState(this, true, callback);
  }

  public setState(newState: { [k in keyof S]?: S[k] }, callback?: Function) {
    if (this._unmounted) {
      return;
    }
    if (!this._blockSetState) {
      queueStateChanges(this, newState, callback);
    } else {
      if (process.env.NODE_ENV !== "production") {
        throwError(
          "cannot update state via setState() in componentWillUpdate() or constructor."
        );
      }
      throwError();
    }
  }

  public _updateComponent(
    prevState: S,
    nextState: S,
    prevProps: P & Props,
    nextProps: P & Props,
    context: any,
    force: boolean,
    fromSetState: boolean
  ): VNode | string {
    if (this._unmounted === true) {
      if (process.env.NODE_ENV !== "production") {
        throwError(noOp);
      }
      throwError();
    }
    if (
      prevProps !== nextProps ||
      nextProps === EMPTY_OBJ ||
      prevState !== nextState ||
      force
    ) {
      if (prevProps !== nextProps || nextProps === EMPTY_OBJ) {
        if (!isNullOrUndef(this.componentWillReceiveProps) && !fromSetState) {
          this._blockRender = true;
          this.componentWillReceiveProps(nextProps, context);
          // If this component was removed during its own update do nothing...
          if (this._unmounted) {
            return NO_OP;
          }
          this._blockRender = false;
        }
        if (this._pendingSetState) {
          nextState = combineFrom(nextState, this._pendingState) as any;
          this._pendingSetState = false;
          this._pendingState = null;
        }
      }

      /* Update if scu is not defined, or it returns truthy value or force */
      if (
        force ||
        isNullOrUndef(this.shouldComponentUpdate) ||
        (this.shouldComponentUpdate &&
          this.shouldComponentUpdate(nextProps, nextState, context))
      ) {
        if (!isNullOrUndef(this.componentWillUpdate)) {
          this._blockSetState = true;
          this.componentWillUpdate(nextProps, nextState, context);
          this._blockSetState = false;
        }

        this.props = nextProps;
        this.state = nextState;
        this.context = context;

        if (options.beforeRender) {
          options.beforeRender(this);
        }
        const render = this.render(nextProps, nextState, context);

        if (options.afterRender) {
          options.afterRender(this);
        }

        return render;
      } else {
        this.props = nextProps;
        this.state = nextState;
        this.context = context;
      }
    }
    return NO_OP;
  }

  // tslint:disable-next-line:no-empty
  public render(nextProps?: P, nextState?, nextContext?): any {}
}
