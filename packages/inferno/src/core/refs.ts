import { isFunction, warning } from 'inferno-shared';

export function createRef() {
  return {
    current: null
  };
}

export function forwardRef(render) {
  if (process.env.NODE_ENV === 'production') {
    return {
      render
    };
  }

  if (!isFunction(render)) {
    warning(`forwardRef requires a render function but was given ${render === null ? 'null' : typeof render}.`);

    return;
  }

  const fwRef = {
    render
  };

  Object.seal(fwRef);

  return fwRef;
}

export function pushRef(dom: Element | null, value: Function, lifecycle: Function[]) {
  lifecycle.push(() => value(dom));
}

export function unmountRef(ref) {
  if (ref) {
    if (isFunction(ref)) {
      ref(null);
    } else if (ref.current) {
      ref.current = null;
    }
  }
}

export function mountRef(ref, value, lifecycle: Function[]) {
  if (ref) {
    if (isFunction(ref)) {
      pushRef(value, ref, lifecycle);
    } else if (ref.current !== void 0) {
      ref.current = value;
    }
  }
}
