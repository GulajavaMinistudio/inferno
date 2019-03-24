!function(){"use strict";var f=Array.isArray;function d(e){var n=typeof e;return"string"==n||"number"==n}function j(e){return v(e)||X(e)}function C(e){return X(e)||false===e||true===e||v(e)}function H(e){return"function"==typeof e}function p(e){return"string"==typeof e}function X(e){return null===e}function v(e){return void 0===e}function h(e){return"object"==typeof e}function w(e,n){var t={};if(e)for(var l in e)t[l]=e[l];if(n)for(var r in n)t[r]=n[r];return t}var _={};function m(e){return e.substr(2).toLowerCase()}function $(e,n){e.appendChild(n)}function K(e,n,t){X(t)?$(e,n):e.insertBefore(n,t)}function F(e,n){e.removeChild(n)}function q(e,n){for(var t,l;e;){if(2033&(t=e.flags))return e.dom;l=e.children,e=8192&t?2===e.childFlags?l:l[n?0:l.length-1]:4&t?l.$LI:l}return null}function S(e,n){var t=e.flags;if(2033&t)F(n,e.dom);else{var l=e.children;if(4&t)S(l.$LI,n);else if(8&t)S(l,n);else if(8192&t)if(2===e.childFlags)S(l,n);else for(var r=0,a=l.length;r<a;++r)S(l[r],n)}}function L(e,n,t){var l=e.flags;if(2033&l)K(n,e.dom,t);else{var r=e.children;if(4&l)L(r.$LI,n,t);else if(8&l)L(r,n,t);else if(8192&l)if(2===e.childFlags)L(r,n,t);else for(var a=0,o=r.length;a<o;++a)L(r[a],n,t)}}function z(e,n,t){return e.constructor.getDerivedStateFromProps?w(t,e.constructor.getDerivedStateFromProps(n,t)):t}var g={componentComparator:null,createVNode:null,renderComplete:null};function G(e,n){e.textContent=n}function y(e,n){return e&&n&&h(e)&&h(n)&&e.event===n.event&&e.data===n.data}var b="$";function k(e,n,t,l,r,a,o,i){this.childFlags=e,this.children=n,this.className=t,this.dom=null,this.flags=l,this.key=void 0===r?null:r,this.props=void 0===a?null:a,this.ref=void 0===o?null:o,this.type=i}function i(e,n,t,l,r,a,o,i){var u=void 0===r?1:r,s=new k(u,l,t,e,o,a,i,n),c=g.createVNode;return H(c)&&c(s),0===u&&function(e,n){var t,l=1;if(C(n))t=n;else if(d(n))l=16,t=n;else if(f(n)){for(var r=n.length,a=0;a<r;++a){var o=n[a];if(C(o)||f(o)){t=t||n.slice(0,a),x(n,t,a,"");break}if(d(o))(t=t||n.slice(0,a)).push(U(o,b+a));else{var i=o.key,u=0<(81920&o.flags),s=X(i),c=p(i)&&i[0]===b;u||s||c?(t=t||n.slice(0,a),(u||c)&&(o=J(o)),(s||c)&&(o.key=b+a),t.push(o)):t&&t.push(o),o.flags|=65536}}l=0===(t=t||n).length?1:8}else(t=n).flags|=65536,81920&n.flags&&(t=J(n)),l=2;e.children=t,e.childFlags=l}(s,s.children),s}function u(e,n,t,l,r){0!=(2&e)&&(n.prototype&&n.prototype.render?e=4:n.render?(e=32776,n=n.render):e=8);var a=n.defaultProps;if(!j(a))for(var o in t||(t={}),a)v(t[o])&&(t[o]=a[o]);if(0<(8&e)&&0==(32768&e)){var i=n.defaultHooks;if(!j(i))if(r)for(var u in i)v(r[u])&&(r[u]=i[u]);else r=i}var s=new k(1,null,null,e,l,t,r,n),c=g.createVNode;return H(c)&&c(s),s}function U(e,n){return new k(1,j(e)?"":e,null,16,n,null,null,null)}function o(e,n,t){var l=i(8192,8192,null,e,n,null,t,null);switch(l.childFlags){case 1:l.children=Q(),l.childFlags=2;break;case 16:l.children=[U(e)],l.childFlags=4}return l}function J(e){var n=-16385&e.flags,t=e.props;if(14&n&&!X(t)){var l=t;for(var r in t={},l)t[r]=l[r]}return 0==(8192&n)?new k(e.childFlags,e.children,e.className,n,e.key,t,e.ref,e.type):function(e){var n,t=e.children,l=e.childFlags;if(2===l)n=J(t);else if(12&l){n=[];for(var r=0,a=t.length;r<a;++r)n.push(J(t[r]))}return o(n,l,e.key)}(e)}function Q(){return U("",null)}function x(e,n,t,l){for(var r=e.length;t<r;t++){var a=e[t];if(!C(a)){var o=l+b+t;if(f(a))x(a,n,0,o);else{if(d(a))a=U(a,o);else{var i=a.key,u=p(i)&&i[0]===b;(81920&a.flags||u)&&(a=J(a)),a.flags|=65536,u?i.substring(0,l.length)!==l&&(a.key=l+i):X(i)?a.key=o:a.key=l+i}n.push(a)}}}}var e="http://www.w3.org/1999/xlink",n="http://www.w3.org/XML/1998/namespace",P={"xlink:actuate":e,"xlink:arcrole":e,"xlink:href":e,"xlink:role":e,"xlink:show":e,"xlink:title":e,"xlink:type":e,"xml:base":n,"xml:lang":n,"xml:space":n};function s(e){return{onClick:e,onDblClick:e,onFocusIn:e,onFocusOut:e,onKeyDown:e,onKeyPress:e,onKeyUp:e,onMouseDown:e,onMouseMove:e,onMouseUp:e,onSubmit:e,onTouchEnd:e,onTouchMove:e,onTouchStart:e}}var c=s(0),V=s(null),N=s(true);function A(e,n,t){var l,r,a=t.$EV;n?(0===c[e]&&(V[e]=(l=e,r=function(e){var n="onClick"===l||"onDblClick"===l;if(n&&0!==e.button)e.stopPropagation();else{e.isDefaultPrevented=M,e.isPropagationStopped=T,e.stopPropagation=I;var t={dom:document};Object.defineProperty(e,"currentTarget",{configurable:true,get:function(){return t.dom}}),function(e,n,t,l,r){for(var a=n;!X(a);){if(t&&a.disabled)return;var o=a.$EV;if(o){var i=o[l];if(i&&(r.dom=a,i.event?i.event(i.data,e):i(e),e.cancelBubble))return}a=a.parentNode}}(e,e.target,n,l,t)}},document.addEventListener(m(l),r),r)),a||(a=t.$EV=s(null)),a[e]||++c[e],a[e]=n):a&&a[e]&&(0==--c[e]&&(document.removeEventListener(m(e),V[e]),V[e]=null),a[e]=null)}function I(){this.cancelBubble=true,this.immediatePropagationStopped||this.stopImmediatePropagation()}function M(){return this.defaultPrevented}function T(){return this.cancelBubble}function D(e,n,t){if(e[n]){var l=e[n];l.event?l.event(l.data,t):l(t)}else{var r=n.toLowerCase();e[r]&&e[r](t)}}function t(i,u){var e=function(e){var n=this.$V;if(n){var t=n.props||_,l=n.dom;if(p(i))D(t,i,e);else for(var r=0;r<i.length;++r)D(t,i[r],e);if(H(u)){var a=this.$V,o=a.props||_;u(o,l,false,a)}}};return Object.defineProperty(e,"wrapped",{configurable:false,enumerable:false,value:true,writable:false}),e}function Y(e,n,t){var l="$"+n,r=e[l];r&&r[1].wrapped||(r&&(e.removeEventListener.apply(e,r),e[l]=null),H(t)&&(e.addEventListener(n,t),e[l]=[n,t]))}function Z(e){return"checkbox"===e||"radio"===e}var ee=t("onInput",B),ne=t(["onClick","onChange"],B);function te(e){e.stopPropagation()}function B(e,n){var t=e.type,l=e.value,r=e.checked,a=e.multiple,o=e.defaultValue,i=!j(l);t&&t!==n.type&&n.setAttribute("type",t),j(a)||a===n.multiple||(n.multiple=a),j(o)||i||(n.defaultValue=o+""),Z(t)?(i&&(n.value=l),j(r)||(n.checked=r)):i&&n.value!==l?(n.defaultValue=l,n.value=l):j(r)||(n.checked=r)}te.wrapped=true;var le=t("onChange",W);function W(e,n,t,l){var r=Boolean(e.multiple);j(e.multiple)||r===n.multiple||(n.multiple=r);var a=e.selectedIndex;if(-1===a&&(n.selectedIndex=-1),1!==l.childFlags){var o=e.value;"number"==typeof a&&-1<a&&n.options[a]&&(o=n.options[a].value),t&&j(o)&&(o=e.defaultValue),function e(n,t){if("option"===n.type)u=t,s=(i=n).props||_,(c=i.dom).value=s.value,s.value===u||f(u)&&-1!==u.indexOf(s.value)?c.selected=true:j(u)&&j(s.selected)||(c.selected=s.selected||false);else{var l=n.children,r=n.flags;if(4&r)e(l.$LI,t);else if(8&r)e(l,t);else if(2===n.childFlags)e(l,t);else if(12&n.childFlags)for(var a=0,o=l.length;a<o;++a)e(l[a],t)}var i,u,s,c}(l,o)}}var E,O,re=t("onInput",R),ae=t("onChange");function R(e,n,t){var l=e.value,r=n.value;if(j(l)){if(t){var a=e.defaultValue;j(a)||a===r||(n.defaultValue=a,n.value=a)}}else r!==l&&(n.defaultValue=l,n.value=l)}function oe(e,n,t,l,r,a){64&e?B(l,t):256&e?W(l,t,r,n):128&e&&R(l,t,r),a&&(t.$V=n)}function ie(e){return e.type&&Z(e.type)?!j(e.checked):!j(e.value)}function ue(e){e&&(H(e)?e(null):e.current&&(e.current=null))}function se(e,n,t){var l,r;e&&(H(e)?(l=n,r=e,t.push(function(){r(l)})):void 0!==e.current&&(e.current=n))}function ce(e,n){fe(e),n&&S(e,n)}function fe(e){var n,t=e.flags,l=e.children;if(481&t){n=e.ref;var r=e.props;ue(n);var a=e.childFlags;if(!X(r))for(var o=Object.keys(r),i=0,u=o.length;i<u;i++){var s=o[i];N[s]&&A(s,null,e.dom)}12&a?de(l):2===a&&fe(l)}else l&&(4&t?(H(l.componentWillUnmount)&&l.componentWillUnmount(),ue(e.ref),l.$UN=true,fe(l.$LI)):8&t?(!j(n=e.ref)&&H(n.onComponentWillUnmount)&&n.onComponentWillUnmount(q(e,true),e.props||_),fe(l)):1024&t?ce(l,e.ref):8192&t&&12&e.childFlags&&de(l))}function de(e){for(var n=0,t=e.length;n<t;++n)fe(e[n])}function pe(e){e.textContent=""}function ve(e,n,t){de(t),8192&n.flags?S(n,e):pe(e)}function he(u,e,n,t,l,r,a){switch(u){case"children":case"childrenType":case"className":case"defaultValue":case"key":case"multiple":case"ref":break;case"autoFocus":t.autofocus=!!n;break;case"allowfullscreen":case"autoplay":case"capture":case"checked":case"controls":case"default":case"disabled":case"hidden":case"indeterminate":case"loop":case"muted":case"novalidate":case"open":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"selected":t[u]=!!n;break;case"defaultChecked":case"value":case"volume":if(r&&"value"===u)break;var o=j(n)?"":n;t[u]!==o&&(t[u]=o);break;case"style":!function(e,n,t){if(j(n))t.removeAttribute("style");else{var l,r,a=t.style;if(p(n))a.cssText=n;else if(j(e)||p(e))for(l in n)r=n[l],a.setProperty(l,r);else{for(l in n)(r=n[l])!==e[l]&&a.setProperty(l,r);for(l in e)j(n[l])&&a.removeProperty(l)}}}(e,n,t);break;case"dangerouslySetInnerHTML":var i=e&&e.__html||"",s=n&&n.__html||"";i!==s&&(j(s)||(c=t,f=s,(d=document.createElement("i")).innerHTML=f,d.innerHTML===c.innerHTML)||(X(a)||(12&a.childFlags?de(a.children):2===a.childFlags&&fe(a.children),a.children=null,a.childFlags=1),t.innerHTML=s));break;default:N[u]?y(e,n)||A(u,n,t):111===u.charCodeAt(0)&&110===u.charCodeAt(1)?function(e,n,t,l){var r,a,o=m(u);if(h(t)&&!X(t)){var i=t.event;y(n,t)||Y(l,o,(r=i,a=t,function(e){r(a.data,e)}))}else Y(l,o,t)}(0,e,n,t):j(n)?t.removeAttribute(u):l&&P[u]?t.setAttributeNS(P[u],u,n):t.setAttribute(u,n)}var c,f,d}function me(e,n,t){var l=ge(e.render(n,e.state,t)),r=t;return H(e.getChildContext)&&(r=w(t,e.getChildContext())),e.$CX=r,l}function ge(e){return C(e)?e=Q():d(e)?e=U(e,null):f(e)?e=o(e,0,null):16384&e.flags&&(e=J(e)),e}function ye(e,n,t,l,r,a){var o,i,u,s,c,f,d,p,v,h,m,g,y,b,k,C,w,$,F,S,U,x,P,L,V,N,A,I,M,T,D,B,W,E,O,R=e.flags|=16384;481&R?function(e,n,t,l,r,a){var o=e.flags,i=e.props,u=e.className,s=e.ref,c=e.children,f=e.childFlags;l=l||0<(32&o);var d,p=(d=e.type,l?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d));if(e.dom=p,j(u)||""===u||(l?p.setAttribute("class",u):p.className=u),16===f)G(p,c);else if(1!==f){var v=l&&"foreignObject"!==e.type;2===f?(16384&c.flags&&(e.children=c=J(c)),ye(c,p,t,v,null,a)):8!==f&&4!==f||ke(c,p,t,v,null,a)}X(n)||K(n,p,r),X(i)||function(e,n,t,l,r){var a,o,i,u,s,c,f=false,d=0<(448&n);for(var p in d&&(f=ie(t))&&(o=l,i=t,c=s=u=void 0,64&(a=n)?(c=o,Z(i.type)?(Y(c,"change",ne),Y(c,"click",te)):Y(c,"input",ee)):256&a?Y(o,"change",le):128&a&&(s=i,Y(u=o,"input",re),s.onChange&&Y(u,"change",ae))),t)he(p,null,t[p],l,r,f,null);d&&oe(n,e,l,t,true,f)}(e,o,i,p,l),se(s,p,a)}(e,n,t,l,r,a):4&R?(A=n,I=t,M=l,T=r,D=a,ye((O=function(e,n,t,l,r,a){var o=new n(t,l),i=o.$N=Boolean(n.getDerivedStateFromProps||o.getSnapshotBeforeUpdate);if(o.$SVG=r,o.$L=a,(e.children=o).$BS=false,o.context=l,o.props===_&&(o.props=t),i)o.state=z(o,t,o.state);else if(H(o.componentWillMount)){o.$BR=true,o.componentWillMount();var u=o.$PS;if(!X(u)){var s=o.state;if(X(s))o.state=u;else for(var c in u)s[c]=u[c];o.$PS=null}o.$BR=false}return o.$LI=me(o,t,l),o}(N=e,N.type,N.props||_,I,M,D)).$LI,A,O.$CX,M,T,D),se(N.ref,B=O,W=D),H(B.componentDidMount)&&W.push((E=B,function(){E.componentDidMount()}))):8&R?(h=n,m=t,g=l,y=r,b=a,x=(v=e).type,P=v.props||_,L=v.ref,V=ge(32768&v.flags?x(P,L,m):x(P,m)),ye(v.children=V,h,m,g,y,b),k=P,w=v,$=b,j(C=L)||(H(C.onComponentWillMount)&&C.onComponentWillMount(k),H(C.onComponentDidMount)&&$.push((F=C,S=w,U=k,function(){F.onComponentDidMount(q(S,true),U)})))):512&R||16&R?be(e,n,r):8192&R?(i=n,u=t,s=l,c=r,f=a,d=(o=e).children,12&(p=o.childFlags)&&0===d.length&&(p=o.childFlags=2,d=o.children=Q()),2===p?ye(d,i,c,s,c,f):ke(d,i,u,s,c,f)):1024&R&&function(e,n,t,l,r){ye(e.children,e.ref,n,false,null,r);var a=Q();be(a,t,l),e.dom=a.dom}(e,t,n,r,a)}function be(e,n,t){var l=e.dom=document.createTextNode(e.children);X(n)||K(n,l,t)}function ke(e,n,t,l,r,a){for(var o=0,i=e.length;o<i;++o){var u=e[o];16384&u.flags&&(e[o]=u=J(u)),ye(u,n,t,l,r,a)}}function Ce(e,n,t,l,r,a,o){var i,u,s,c,f,d,p,v,h,m,g,y,b,k=n.flags|=16384;e.flags!==k||e.type!==n.type||e.key!==n.key||0!=(2048&k)?16384&e.flags?(d=n,p=t,v=l,h=r,m=o,fe(f=e),0!=(d.flags&f.flags&2033)?(ye(d,null,v,h,null,m),g=p,y=d.dom,b=f.dom,g.replaceChild(y,b)):(ye(d,p,v,h,q(f,true),m),S(f,p))):ye(n,t,l,r,a,o):481&k?function(e,n,t,l,r,a){var o,i=e.dom,u=e.props,s=n.props,c=false,f=false;if(n.dom=i,l=l||0<(32&r),u!==s){var d=u||_;if((o=s||_)!==_)for(var p in(c=0<(448&r))&&(f=ie(o)),o){var v=d[p],h=o[p];v!==h&&he(p,v,h,i,l,f,e)}if(d!==_)for(var m in d)j(o[m])&&!j(d[m])&&he(m,d[m],null,i,l,f,e)}var g,y,b=n.children,k=n.className;e.className!==k&&(j(k)?i.removeAttribute("class"):l?i.setAttribute("class",k):i.className=k),4096&r?(y=b,(g=i).textContent!==y&&(g.textContent=y)):we(e.childFlags,n.childFlags,e.children,b,i,t,l&&"foreignObject"!==n.type,null,e,a),c&&oe(r,n,i,o,false,f);var C=n.ref,w=e.ref;w!==C&&(ue(w),se(C,i,a))}(e,n,l,r,k,o):4&k?function(e,n,t,l,r,a,o){var i=n.children=e.children;if(!X(i)){i.$L=o;var u=n.props||_,s=n.ref,c=e.ref,f=i.state;if(!i.$N){if(H(i.componentWillReceiveProps)){if(i.$BR=true,i.componentWillReceiveProps(u,l),i.$UN)return;i.$BR=false}X(i.$PS)||(f=w(f,i.$PS),i.$PS=null)}(function(e,n,t,l,r,a,o,i,u){var s,c,f,d,p=e.state,v=e.props,h=Boolean(e.$N),m=H(e.shouldComponentUpdate);if(h&&(n=z(e,t,n!==p?w(p,n):n)),!m||m&&e.shouldComponentUpdate(t,n,r)){!h&&H(e.componentWillUpdate)&&e.componentWillUpdate(t,n,r),e.props=t,e.state=n,e.context=r;var g=null,y=me(e,t,r);h&&H(e.getSnapshotBeforeUpdate)&&(g=e.getSnapshotBeforeUpdate(v,p)),Ce(e.$LI,y,l,e.$CX,a,i,u),e.$LI=y,H(e.componentDidUpdate)&&(s=e,c=v,f=p,d=g,u.push(function(){s.componentDidUpdate(c,f,d)}))}else e.props=t,e.state=n,e.context=r})(i,f,u,t,l,r,0,a,o),c!==s&&(ue(c),se(s,i,o))}}(e,n,t,l,r,a,o):8&k?function(e,n,t,l,r,a,o){var i=true,u=n.props||_,s=n.ref,c=e.props,f=!j(s),d=e.children;if(f&&H(s.onComponentShouldUpdate)&&(i=s.onComponentShouldUpdate(c,u)),false!==i){f&&H(s.onComponentWillUpdate)&&s.onComponentWillUpdate(c,u);var p=n.type,v=ge(32768&n.flags?p(u,s,l):p(u,l));Ce(d,v,t,l,r,a,o),n.children=v,f&&H(s.onComponentDidUpdate)&&s.onComponentDidUpdate(c,u)}else n.children=d}(e,n,t,l,r,a,o):16&k?(i=e,s=(u=n).children,c=i.dom,s!==i.children&&(c.nodeValue=s),u.dom=c):512&k?n.dom=e.dom:8192&k?function(e,n,t,l,r,a){var o=e.children,i=n.children,u=e.childFlags,s=n.childFlags,c=null;12&s&&0===i.length&&(s=n.childFlags=2,i=n.children=Q());var f=0!=(2&s);if(12&u){var d=o.length;(8&u&&8&s||f||!f&&i.length>d)&&(c=q(o[d-1],false).nextSibling)}we(u,s,o,i,t,l,r,c,e,a)}(e,n,t,l,r,o):function(e,n,t,l){var r=e.ref,a=n.ref,o=n.children;if(we(e.childFlags,n.childFlags,e.children,o,r,t,false,null,e,l),n.dom=e.dom,r!==a&&!C(o)){var i=o.dom;F(r,i),$(a,i)}}(e,n,l,o)}function we(e,n,t,l,r,a,o,i,u,s){switch(e){case 2:switch(n){case 2:Ce(t,l,r,a,o,i,s);break;case 1:ce(t,r);break;case 16:fe(t),G(r,l);break;default:h=l,m=r,g=a,y=o,b=s,fe(v=t),ke(h,m,g,y,q(v,true),b),S(v,m)}break;case 1:switch(n){case 2:ye(l,r,a,o,i,s);break;case 1:break;case 16:G(r,l);break;default:ke(l,r,a,o,i,s)}break;case 16:switch(n){case 16:p=r,t!==(d=l)&&(""!==t?p.firstChild.nodeValue=d:G(p,d));break;case 2:pe(r),ye(l,r,a,o,i,s);break;case 1:pe(r);break;default:pe(r),ke(l,r,a,o,i,s)}break;default:switch(n){case 16:de(t),G(r,l);break;case 2:ve(r,u,t),ye(l,r,a,o,i,s);break;case 1:ve(r,u,t);break;default:var c=0|t.length,f=0|l.length;0==c?0<f&&ke(l,r,a,o,i,s):0==f?ve(r,u,t):8===n&&8===e?function(e,n,t,l,r,a,o,i,u,s){var c,f,d=a-1,p=o-1,v=0,h=0,m=e[h],g=n[h];e:{for(;m.key===g.key;){if(16384&g.flags&&(n[h]=g=J(g)),Ce(m,g,t,l,r,i,s),e[h]=g,d<++h||p<h)break e;m=e[h],g=n[h]}for(m=e[d],g=n[p];m.key===g.key;){if(16384&g.flags&&(n[p]=g=J(g)),Ce(m,g,t,l,r,i,s),e[d]=g,p--,--d<h||p<h)break e;m=e[d],g=n[p]}}if(d<h){if(h<=p)for(f=(c=p+1)<o?q(n[c],true):i;h<=p;)16384&(g=n[h]).flags&&(n[h]=g=J(g)),++h,ye(g,t,l,r,f,s)}else if(p<h)for(;h<=d;)ce(e[h++],t);else{var y=h,b=h,k=d-h+1,C=p-h+1,w=new Int32Array(C-v+1);v=2+C;var $=k==a,F=false,S=0,U=0;if(o<4||(k|C)<32)for(v=y;v<=d;++v)if(m=e[v],U<C){for(h=b;h<=p;h++)if(g=n[h],m.key===g.key){if(w[h-b]=v+1,$)for($=false;y<v;)ce(e[y++],t);h<S?F=true:S=h,16384&g.flags&&(n[h]=g=J(g)),Ce(m,g,t,l,r,i,s),++U;break}!$&&p<h&&ce(m,t)}else $||ce(m,t);else{var x={};for(v=b;v<=p;++v)x[n[v].key]=v;for(v=y;v<=d;++v)if(m=e[v],U<C)if(void 0!==(h=x[m.key])){if($)for($=false;y<v;)ce(e[y++],t);g=n[h],w[h-b]=v+1,h<S?F=true:S=h,16384&g.flags&&(n[h]=g=J(g)),Ce(m,g,t,l,r,i,s),++U}else $||ce(m,t);else $||ce(m,t)}if($)ve(t,u,e),ke(n,t,l,r,i,s);else if(F){var P=function(e){var n=0,t=0,l=0,r=0,a=0,o=0,i=0,u=e.length;for($e<u&&(E=new Int32Array($e=u),O=new Int32Array(u));t<u;++t)if(0!==(n=e[t])){if(e[l=E[r]]<n){O[t]=l,E[++r]=t;continue}for(a=0,o=r;a<o;)e[E[i=a+o>>1]]<n?a=i+1:o=i;n<e[E[a]]&&(0<a&&(O[t]=E[a-1]),E[a]=t)}a=t=r+1;var s=new Int32Array(a);for(o=E[a-1];0<a--;)s[a]=o,o=O[o];for(;0<t--;)E[t]=0;return s}(w);for(h=P.length-1,v=C-1;0<=v;v--)0===w[v]?(16384&(g=n[S=v+b]).flags&&(n[S]=g=J(g)),ye(g,t,l,r,(c=S+1)<o?q(n[c],true):i,s)):h<0||v!==P[h]?L(g=n[S=v+b],t,(c=S+1)<o?q(n[c],true):i):h--}else if(U!==C)for(v=C-1;0<=v;v--)0===w[v]&&(16384&(g=n[S=v+b]).flags&&(n[S]=g=J(g)),ye(g,t,l,r,(c=S+1)<o?q(n[c],true):i,s))}}(t,l,r,a,o,c,f,i,u,s):function(e,n,t,l,r,a,o,i,u){for(var s,c,f=o<a?o:a,d=0;d<f;++d)s=n[d],c=e[d],16384&s.flags&&(s=n[d]=J(s)),Ce(c,s,t,l,r,i,u),e[d]=s;if(a<o)for(d=f;d<o;++d)16384&(s=n[d]).flags&&(s=n[d]=J(s)),ye(s,t,l,r,i,u);else if(o<a)for(d=f;d<a;++d)ce(e[d],t)}(t,l,r,a,o,c,f,i,s)}}var d,p,v,h,m,g,y,b}var $e=0;function r(e,n,t,l){var r,a,o,i,u,s;void 0===t&&(t=null),void 0===l&&(l=_),r=e,o=t,i=l,u=[],j(s=(a=n).$V)?j(r)||(16384&r.flags&&(r=J(r)),ye(r,a,i,false,null,u),s=a.$V=r):j(r)?(ce(s,a),a.$V=null):(16384&r.flags&&(r=J(r)),Ce(s,r,a,i,false,null,u),s=a.$V=r),0<u.length&&function(e){for(var n;void 0!==(n=e.shift());)n()}(u),H(o)&&o(),H(g.renderComplete)&&g.renderComplete(s,a)}function Fe(e){return i(1,"li","TreeLeaf",e.children,0,null,null,null)}function Se(e,n){return e!==n}function Ue(e){for(var n=e.data,t=n.children.length,l=new Array(t),r=0;r<t;r++){var a=n.children[r],o=a.id;a.container?l[r]=u(2,Ue,{data:a},o,{onComponentShouldUpdate:Se}):l[r]=u(2,Fe,{children:o},o,{onComponentShouldUpdate:Se})}return i(1,"ul","TreeNode",l,0,null,null,null)}function xe(e){var n=e.data,t=n.time%10,l="border-radius:"+t+"px;background:rgba(0,0,0,"+(.5+t/10)+")";return i(1,"div","AnimBox",null,1,{"data-id":n.id,style:l},null,null)}function a(e,n){console.log("Clicked",e),n.stopPropagation()}function Pe(e){var n,t,l=e.children;return i(1,"td","TableCell",[null,false,[l]],0,{onClick:(n=l,t=a,H(t)?{data:n,event:t}:null)},null,null)}function Le(e){var n=e.data,t="TableRow";n.active&&(t="TableRow active");var l=n.props,r=l.length+1,a=new Array(r);a[0]=u(2,Pe,{children:"#"+n.id},null,{onComponentShouldUpdate:Se});for(var o=1;o<r;o++)a[o]=u(2,Pe,{children:l[o-1]},null,{onComponentShouldUpdate:Se});return i(1,"tr",t,[null,a,false],0,{"data-id":n.id},null,null)}"undefined"!=typeof document&&(document.body,Node.prototype.$EV=null,Node.prototype.$V=null),"undefined"!=typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout.bind(window),uibench.init("Inferno (normalization test)","7.1.11"),document.addEventListener("DOMContentLoaded",function(e){var l=document.querySelector("#App");uibench.run(function(e){var o,n,t;r(("table"===(t=(o=e).location)?n=function(e){for(var n=o.table.items,t=n.length,l=new Array(t),r=0;r<t;r++){var a=n[r];l[r]=u(2,Le,{data:a,children:a},a.id,{onComponentShouldUpdate:Se})}return i(1,"table","Table",[[],l,[[]]],0,null,null,null)}():"anim"===t?n=function(e){for(var n=o.anim.items,t=n.length,l=new Array(t),r=0;r<t;r++){var a=n[r];l[r]=u(2,xe,{data:a},a.id,{onComponentShouldUpdate:Se})}return i(1,"div","Anim",l,0,null,null,null)}():"tree"===t&&(n=i(1,"div","Tree",u(2,Ue,{data:o.tree.root},null,{onComponentShouldUpdate:Se}),2,null,null,null)),i(1,"div","Main",n,0,null,null,null)),l)},function(e){r(i(1,"pre",null,JSON.stringify(e,null," "),0,null,null,null),l)})})}();
