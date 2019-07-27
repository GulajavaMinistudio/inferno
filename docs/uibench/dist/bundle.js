!function(){"use strict";var e=Array.isArray;function n(e){var n=typeof e;return"string"===n||"number"===n}function t(e){return void 0===e||null===e}function r(e){return null===e||!1===e||!0===e||void 0===e}function l(e){return"function"===typeof e}function o(e){return"string"===typeof e}function i(e){return null===e}function a(e,n){var t={};if(e)for(var r in e)t[r]=e[r];if(n)for(var l in n)t[l]=n[l];return t}function u(e,n){if(l(n))return{data:e,event:n};return null}function c(e){return!i(e)&&"object"===typeof e}var f={};function s(e){return e.substr(2).toLowerCase()}function d(e,n){e.appendChild(n)}function p(e,n,t){i(t)?d(e,n):e.insertBefore(n,t)}function v(e,n){if(n)return document.createElementNS("http://www.w3.org/2000/svg",e);return document.createElement(e)}function h(e,n,t){e.replaceChild(n,t)}function g(e,n){e.removeChild(n)}function m(e){for(var n;void 0!==(n=e.shift());)n()}function k(e,n,t){var r=e.children;if(4&t)return r.$LI;if(8192&t)return 2===e.childFlags?r:r[n?0:r.length-1];return r}function b(e,n){for(var t;e;){if(2033&(t=e.flags))return e.dom;e=k(e,n,t)}return null}function y(e,n){do{var t=e.flags;if(2033&t)return void g(n,e.dom);var r=e.children;if(4&t&&(e=r.$LI),8&t&&(e=r),8192&t){if(2!==e.childFlags){for(var l=0,o=r.length;l<o;++l)y(r[l],n);return}e=r}}while(e)}function C(e,n,t){do{var r=e.flags;if(2033&r)return void p(n,e.dom,t);var l=e.children;if(4&r&&(e=l.$LI),8&r&&(e=l),8192&r){if(2!==e.childFlags){for(var o=0,i=l.length;o<i;++o)C(l[o],n,t);return}e=l}}while(e)}function $(e,n,t){if(e.constructor.getDerivedStateFromProps)return a(t,e.constructor.getDerivedStateFromProps(n,t));return t}var w={componentComparator:null,createVNode:null,renderComplete:null};function F(e,n){e.textContent=n}function x(e,n){return c(e)&&e.event===n.event&&e.data===n.data}function P(e,n){for(var t in n)void 0===e[t]&&(e[t]=n[t]);return e}function L(e,n){return!!l(e)&&(e(n),!0)}var S="$";function V(e,n,t,r,l,o,i,a){this.childFlags=e,this.children=n,this.className=t,this.dom=null,this.flags=r,this.key=void 0===l?null:l,this.props=void 0===o?null:o,this.ref=void 0===i?null:i,this.type=a}function U(e,n,t,r,l,o,i,a){var u=void 0===l?1:l,c=new V(u,r,t,e,i,o,a,n);return 0===u&&O(c,c.children),c}function I(e,n,r){if(4&e)return r;var l=(32768&e?n.render:n).defaultHooks;if(t(l))return r;if(t(r))return l;return P(r,l)}function N(e,n,r){var l=(32768&e?n.render:n).defaultProps;if(t(l))return r;if(t(r))return a(l,null);return P(r,l)}function A(e,n){if(12&e)return e;if(n.prototype&&n.prototype.render)return 4;if(n.render)return 32776;return 8}function M(e,n,t,r,l){return new V(1,null,null,e=A(e,n),r,N(e,n,t),I(e,n,l),n)}function T(e,n){return new V(1,t(e)||!0===e||!1===e?"":e,null,16,n,null,null,null)}function D(e,n,t){var r=U(8192,8192,null,e,n,null,t,null);switch(r.childFlags){case 1:r.children=W(),r.childFlags=2;break;case 16:r.children=[T(e)],r.childFlags=4}return r}function B(e){var n,t=e.children,r=e.childFlags;if(2===r)n=E(t);else if(12&r){n=[];for(var l=0,o=t.length;l<o;++l)n.push(E(t[l]))}return D(n,r,e.key)}function E(e){var n=-16385&e.flags,t=e.props;if(14&n&&!i(t)){var r=t;for(var l in t={},r)t[l]=r[l]}if(0===(8192&n))return new V(e.childFlags,e.children,e.className,n,e.key,t,e.ref,e.type);return B(e)}function W(){return T("",null)}function H(t,l,a,u){for(var c=t.length;a<c;a++){var f=t[a];if(!r(f)){var s=u+S+a;if(e(f))H(f,l,0,s);else{if(n(f))f=T(f,s);else{var d=f.key,p=o(d)&&d[0]===S;(81920&f.flags||p)&&(f=E(f)),f.flags|=65536,p?d.substring(0,u.length)!==u&&(f.key=u+d):i(d)?f.key=s:f.key=u+d}l.push(f)}}}}function O(t,l){var a,u=1;if(r(l))a=l;else if(n(l))u=16,a=l;else if(e(l)){for(var c=l.length,f=0;f<c;++f){var s=l[f];if(r(s)||e(s)){a=a||l.slice(0,f),H(l,a,f,"");break}if(n(s))(a=a||l.slice(0,f)).push(T(s,S+f));else{var d=s.key,p=(81920&s.flags)>0,v=i(d),h=o(d)&&d[0]===S;p||v||h?(a=a||l.slice(0,f),(p||h)&&(s=E(s)),(v||h)&&(s.key=S+f),a.push(s)):a&&a.push(s),s.flags|=65536}}u=0===(a=a||l).length?1:8}else(a=l).flags|=65536,81920&l.flags&&(a=E(l)),u=2;return t.children=a,t.childFlags=u,t}var R="http://www.w3.org/1999/xlink",j="http://www.w3.org/XML/1998/namespace",X={"xlink:actuate":R,"xlink:arcrole":R,"xlink:href":R,"xlink:role":R,"xlink:show":R,"xlink:title":R,"xlink:type":R,"xml:base":j,"xml:lang":j,"xml:space":j};function _(e){return{onClick:e,onDblClick:e,onFocusIn:e,onFocusOut:e,onKeyDown:e,onKeyPress:e,onKeyUp:e,onMouseDown:e,onMouseMove:e,onMouseUp:e,onTouchEnd:e,onTouchMove:e,onTouchStart:e}}var K=_(0),q=_(null),G=_(!0);function J(e,n){var t=n.$EV;return t||(t=n.$EV=_(null)),t[e]||1===++K[e]&&(q[e]=oe(e)),t}function z(e,n){var t=n.$EV;t&&t[e]&&(0===--K[e]&&(document.removeEventListener(s(e),q[e]),q[e]=null),t[e]=null)}function Q(e,n,t,r){if(l(t))J(e,r)[e]=t;else if(c(t)){if(x(n,t))return;J(e,r)[e]=t}else z(e,r)}function Y(e,n,t,r,l){var o=n;do{if(t&&o.disabled)return;var a=o.$EV;if(a){var u=a[r];if(u&&(l.dom=o,u.event?u.event(u.data,e):u(e),e.cancelBubble))return}o=o.parentNode}while(!i(o))}function Z(){this.cancelBubble=!0,this.immediatePropagationStopped||this.stopImmediatePropagation()}function ee(){return this.defaultPrevented}function ne(){return this.cancelBubble}function te(e){var n={dom:document};return e.isDefaultPrevented=ee,e.isPropagationStopped=ne,e.stopPropagation=Z,Object.defineProperty(e,"currentTarget",{configurable:!0,get:function(){return n.dom}}),n}function re(e){return function(n){if(0!==n.button)return void n.stopPropagation();Y(n,n.target,!0,e,te(n))}}function le(e){return function(n){Y(n,n.target,!1,e,te(n))}}function oe(e){var n="onClick"===e||"onDblClick"===e?re(e):le(e);return document.addEventListener(s(e),n),n}function ie(e,n){var t=document.createElement("i");return t.innerHTML=n,t.innerHTML===e.innerHTML}function ae(e,n,t){if(e[n]){var r=e[n];r.event?r.event(r.data,t):r(t)}else{var l=n.toLowerCase();e[l]&&e[l](t)}}function ue(e,n){var t=function(t){var r=this.$V;if(!r)return;var i=r.props||f,a=r.dom;if(o(e))ae(i,e,t);else for(var u=0;u<e.length;++u)ae(i,e[u],t);if(l(n)){var c=this.$V,s=c.props||f;n(s,a,!1,c)}};return Object.defineProperty(t,"wrapped",{configurable:!1,enumerable:!1,value:!0,writable:!1}),t}function ce(e,n,t){var r="$"+n,o=e[r];if(o){if(o[1].wrapped)return;e.removeEventListener(o[0],o[1]),e[r]=null}l(t)&&(e.addEventListener(n,t),e[r]=[n,t])}function fe(e){return"checkbox"===e||"radio"===e}var se=ue("onInput",he),de=ue(["onClick","onChange"],he);function pe(e){e.stopPropagation()}function ve(e,n){fe(n.type)?(ce(e,"change",de),ce(e,"click",pe)):ce(e,"input",se)}function he(e,n){var r=e.type,l=e.value,o=e.checked,i=e.multiple,a=e.defaultValue,u=!t(l);r&&r!==n.type&&n.setAttribute("type",r),t(i)||i===n.multiple||(n.multiple=i),t(a)||u||(n.defaultValue=a+""),fe(r)?(u&&(n.value=l),t(o)||(n.checked=o)):u&&n.value!==l?(n.defaultValue=l,n.value=l):t(o)||(n.checked=o)}function ge(e,n){if("option"===e.type)me(e,n);else{var t=e.children,r=e.flags;if(4&r)ge(t.$LI,n);else if(8&r)ge(t,n);else if(2===e.childFlags)ge(t,n);else if(12&e.childFlags)for(var l=0,o=t.length;l<o;++l)ge(t[l],n)}}function me(n,r){var l=n.props||f,o=n.dom;o.value=l.value,l.value===r||e(r)&&-1!==r.indexOf(l.value)?o.selected=!0:t(r)&&t(l.selected)||(o.selected=l.selected||!1)}pe.wrapped=!0;var ke=ue("onChange",ye);function be(e){ce(e,"change",ke)}function ye(e,n,r,l){var o=Boolean(e.multiple);t(e.multiple)||o===n.multiple||(n.multiple=o);var i=e.selectedIndex;if(-1===i&&(n.selectedIndex=-1),1!==l.childFlags){var a=e.value;"number"===typeof i&&i>-1&&n.options[i]&&(a=n.options[i].value),r&&t(a)&&(a=e.defaultValue),ge(l,a)}}var Ce,$e,we=ue("onInput",Pe),Fe=ue("onChange");function xe(e,n){ce(e,"input",we),n.onChange&&ce(e,"change",Fe)}function Pe(e,n,r){var l=e.value,o=n.value;if(t(l)){if(r){var i=e.defaultValue;t(i)||i===o||(n.defaultValue=i,n.value=i)}}else o!==l&&(n.defaultValue=l,n.value=l)}function Le(e,n,t,r,l,o){64&e?he(r,t):256&e?ye(r,t,l,n):128&e&&Pe(r,t,l),o&&(t.$V=n)}function Se(e,n,t){64&e?ve(n,t):256&e?be(n):128&e&&xe(n,t)}function Ve(e){return e.type&&fe(e.type)?!t(e.checked):!t(e.value)}function Ue(e){e&&!L(e,null)&&e.current&&(e.current=null)}function Ie(e,n,t){e&&(l(e)||void 0!==e.current)&&t.push(function(){L(e,n)||void 0===e.current||(e.current=n)})}function Ne(e,n){Ae(e),y(e,n)}function Ae(e){var n,r=e.flags,o=e.children;if(481&r){n=e.ref;var a=e.props;Ue(n);var u=e.childFlags;if(!i(a))for(var c=Object.keys(a),s=0,d=c.length;s<d;s++){var p=c[s];G[p]&&z(p,e.dom)}12&u?Me(o):2===u&&Ae(o)}else o&&(4&r?(l(o.componentWillUnmount)&&o.componentWillUnmount(),Ue(e.ref),o.$UN=!0,Ae(o.$LI)):8&r?(!t(n=e.ref)&&l(n.onComponentWillUnmount)&&n.onComponentWillUnmount(b(e,!0),e.props||f),Ae(o)):1024&r?Ne(o,e.ref):8192&r&&12&e.childFlags&&Me(o))}function Me(e){for(var n=0,t=e.length;n<t;++n)Ae(e[n])}function Te(e){e.textContent=""}function De(e,n,t){Me(t),8192&n.flags?y(n,e):Te(e)}function Be(e){var n=e.event;return function(t){n(e.data,t)}}function Ee(e,n,t,r){if(c(t)){if(x(n,t))return;t=Be(t)}ce(r,s(e),t)}function We(e,n,r){if(t(n))return void r.removeAttribute("style");var l,i,a=r.style;if(o(n))return void(a.cssText=n);if(t(e)||o(e))for(l in n)i=n[l],a.setProperty(l,i);else{for(l in n)(i=n[l])!==e[l]&&a.setProperty(l,i);for(l in e)t(n[l])&&a.removeProperty(l)}}function He(e,n,r,l){var o=e&&e.__html||"",a=n&&n.__html||"";o!==a&&(t(a)||ie(l,a)||(i(r)||(12&r.childFlags?Me(r.children):2===r.childFlags&&Ae(r.children),r.children=null,r.childFlags=1),l.innerHTML=a))}function Oe(e,n,r,l,o,i,a){switch(e){case"children":case"childrenType":case"className":case"defaultValue":case"key":case"multiple":case"ref":case"selectedIndex":break;case"autoFocus":l.autofocus=!!r;break;case"allowfullscreen":case"autoplay":case"capture":case"checked":case"controls":case"default":case"disabled":case"hidden":case"indeterminate":case"loop":case"muted":case"novalidate":case"open":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"selected":l[e]=!!r;break;case"defaultChecked":case"value":case"volume":if(i&&"value"===e)break;var u=t(r)?"":r;l[e]!==u&&(l[e]=u);break;case"style":We(n,r,l);break;case"dangerouslySetInnerHTML":He(n,r,a,l);break;default:G[e]?Q(e,n,r,l):111===e.charCodeAt(0)&&110===e.charCodeAt(1)?Ee(e,n,r,l):t(r)?l.removeAttribute(e):o&&X[e]?l.setAttributeNS(X[e],e,r):l.setAttribute(e,r)}}function Re(e,n,t,r,l){var o=!1,i=(448&n)>0;for(var a in i&&(o=Ve(t))&&Se(n,r,t),t)Oe(a,null,t[a],r,l,o,null);i&&Le(n,e,r,t,!0,o)}function je(e,n,t){var r=_e(e.render(n,e.state,t)),o=t;return l(e.getChildContext)&&(o=a(t,e.getChildContext())),e.$CX=o,r}function Xe(e,n,t,r,o,a){var u=new n(t,r),c=u.$N=Boolean(n.getDerivedStateFromProps||u.getSnapshotBeforeUpdate);if(u.$SVG=o,u.$L=a,e.children=u,u.$BS=!1,u.context=r,u.props===f&&(u.props=t),c)u.state=$(u,t,u.state);else if(l(u.componentWillMount)){u.$BR=!0,u.componentWillMount();var s=u.$PS;if(!i(s)){var d=u.state;if(i(d))u.state=s;else for(var p in s)d[p]=s[p];u.$PS=null}u.$BR=!1}return u.$LI=je(u,t,r),u}function _e(t){if(r(t)||n(t))return T(t,null);if(e(t))return D(t,0,null);return 16384&t.flags?E(t):t}function Ke(e,n,t,r,l,o){var i=e.flags|=16384;481&i?ze(e,n,t,r,l,o):4&i?Ye(e,n,t,r,l,o):8&i?(en(e,n,t,r,l,o),ln(e,o)):512&i||16&i?Je(e,n,l):8192&i?Ge(e,n,t,r,l,o):1024&i&&qe(e,t,n,l,o)}function qe(e,n,t,r,l){Ke(e.children,e.ref,n,!1,null,l);var o=W();Je(o,t,r),e.dom=o.dom}function Ge(e,n,t,r,l,o){var i=e.children,a=e.childFlags;12&a&&0===i.length&&(a=e.childFlags=2,i=e.children=W()),2===a?Ke(i,n,l,r,l,o):Qe(i,n,t,r,l,o)}function Je(e,n,t){var r=e.dom=document.createTextNode(e.children);i(n)||p(n,r,t)}function ze(e,n,r,l,o,a){var u=e.flags,c=e.props,f=e.className,s=e.children,d=e.childFlags,h=e.dom=v(e.type,l=l||(32&u)>0);if(t(f)||""===f||(l?h.setAttribute("class",f):h.className=f),16===d)F(h,s);else if(1!==d){var g=l&&"foreignObject"!==e.type;2===d?(16384&s.flags&&(e.children=s=E(s)),Ke(s,h,r,g,null,a)):8!==d&&4!==d||Qe(s,h,r,g,null,a)}i(n)||p(n,h,o),i(c)||Re(e,u,c,h,l),Ie(e.ref,h,a)}function Qe(e,n,t,r,l,o){for(var i=0;i<e.length;++i){var a=e[i];16384&a.flags&&(e[i]=a=E(a)),Ke(a,n,t,r,l,o)}}function Ye(e,n,t,r,l,o){var i=Xe(e,e.type,e.props||f,t,r,o);Ke(i.$LI,n,i.$CX,r,l,o),tn(e.ref,i,o)}function Ze(e,n){return 32768&e.flags?e.type.render(e.props||f,e.ref,n):e.type(e.props||f,n)}function en(e,n,t,r,l,o){Ke(e.children=_e(Ze(e,t)),n,t,r,l,o)}function nn(e){return function(){e.componentDidMount()}}function tn(e,n,t){Ie(e,n,t),l(n.componentDidMount)&&t.push(nn(n))}function rn(e,n){return function(){e.onComponentDidMount(b(n,!0),n.props||f)}}function ln(e,n){var r=e.ref;t(r)||(L(r.onComponentWillMount,e.props||f),l(r.onComponentDidMount)&&n.push(rn(r,e)))}function on(e,n,t,r,l,o){Ae(e),0!==(n.flags&e.flags&2033)?(Ke(n,null,r,l,null,o),h(t,n.dom,e.dom)):(Ke(n,t,r,l,b(e,!0),o),y(e,t))}function an(e,n,t,r,l,o,i){var a=n.flags|=16384;e.flags!==a||e.type!==n.type||e.key!==n.key||2048&a?16384&e.flags?on(e,n,t,r,l,i):Ke(n,t,r,l,o,i):481&a?dn(e,n,r,l,a,i):4&a?mn(e,n,t,r,l,o,i):8&a?kn(e,n,t,r,l,o,i):16&a?bn(e,n):512&a?n.dom=e.dom:8192&a?fn(e,n,t,r,l,i):sn(e,n,r,i)}function un(e,n,t){e!==n&&(""!==e?t.firstChild.nodeValue=n:F(t,n))}function cn(e,n){e.textContent!==n&&(e.textContent=n)}function fn(e,n,t,r,l,o){var i=e.children,a=n.children,u=e.childFlags,c=n.childFlags,f=null;12&c&&0===a.length&&(c=n.childFlags=2,a=n.children=W());var s=0!==(2&c);if(12&u){var d=i.length;(8&u&&8&c||s||!s&&a.length>d)&&(f=b(i[d-1],!1).nextSibling)}vn(u,c,i,a,t,r,l,f,e,o)}function sn(e,n,t,l){var o=e.ref,i=n.ref,a=n.children;if(vn(e.childFlags,n.childFlags,e.children,a,o,t,!1,null,e,l),n.dom=e.dom,o!==i&&!r(a)){var u=a.dom;g(o,u),d(i,u)}}function dn(e,n,r,l,o,i){var a,u=n.dom=e.dom,c=e.props,s=n.props,d=!1,p=!1;if(l=l||(32&o)>0,c!==s){var v=c||f;if((a=s||f)!==f)for(var h in(d=(448&o)>0)&&(p=Ve(a)),a){var g=v[h],m=a[h];g!==m&&Oe(h,g,m,u,l,p,e)}if(v!==f)for(var k in v)t(a[k])&&!t(v[k])&&Oe(k,v[k],null,u,l,p,e)}var b=n.children,y=n.className;e.className!==y&&(t(y)?u.removeAttribute("class"):l?u.setAttribute("class",y):u.className=y),4096&o?cn(u,b):vn(e.childFlags,n.childFlags,e.children,b,u,r,l&&"foreignObject"!==n.type,null,e,i),d&&Le(o,n,u,a,!1,p);var C=n.ref,$=e.ref;$!==C&&(Ue($),Ie(C,u,i))}function pn(e,n,t,r,l,o){Ae(e),Qe(n,t,r,l,b(e,!0),o),y(e,t)}function vn(e,n,t,r,l,o,i,a,u,c){switch(e){case 2:switch(n){case 2:an(t,r,l,o,i,a,c);break;case 1:Ne(t,l);break;case 16:Ae(t),F(l,r);break;default:pn(t,r,l,o,i,c)}break;case 1:switch(n){case 2:Ke(r,l,o,i,a,c);break;case 1:break;case 16:F(l,r);break;default:Qe(r,l,o,i,a,c)}break;case 16:switch(n){case 16:un(t,r,l);break;case 2:Te(l),Ke(r,l,o,i,a,c);break;case 1:Te(l);break;default:Te(l),Qe(r,l,o,i,a,c)}break;default:switch(n){case 16:Me(t),F(l,r);break;case 2:De(l,u,t),Ke(r,l,o,i,a,c);break;case 1:De(l,u,t);break;default:var f=0|t.length,s=0|r.length;0===f?s>0&&Qe(r,l,o,i,a,c):0===s?De(l,u,t):8===n&&8===e?Cn(t,r,l,o,i,f,s,a,u,c):yn(t,r,l,o,i,f,s,a,c)}}}function hn(e,n,t,r,l){l.push(function(){e.componentDidUpdate(n,t,r)})}function gn(e,n,t,r,o,i,u,c,f){var s=e.state,d=e.props,p=Boolean(e.$N),v=l(e.shouldComponentUpdate);if(p&&(n=$(e,t,n!==s?a(s,n):n)),u||!v||v&&e.shouldComponentUpdate(t,n,o)){!p&&l(e.componentWillUpdate)&&e.componentWillUpdate(t,n,o),e.props=t,e.state=n,e.context=o;var h=null,g=je(e,t,o);p&&l(e.getSnapshotBeforeUpdate)&&(h=e.getSnapshotBeforeUpdate(d,s)),an(e.$LI,g,r,e.$CX,i,c,f),e.$LI=g,l(e.componentDidUpdate)&&hn(e,d,s,h,f)}else e.props=t,e.state=n,e.context=o}function mn(e,n,t,r,o,u,c){var s=n.children=e.children;if(i(s))return;s.$L=c;var d=n.props||f,p=n.ref,v=e.ref,h=s.state;if(!s.$N){if(l(s.componentWillReceiveProps)){if(s.$BR=!0,s.componentWillReceiveProps(d,r),s.$UN)return;s.$BR=!1}i(s.$PS)||(h=a(h,s.$PS),s.$PS=null)}gn(s,h,d,t,r,o,!1,u,c),v!==p&&(Ue(v),Ie(p,s,c))}function kn(e,n,r,o,i,a,u){var c=!0,s=n.props||f,d=n.ref,p=e.props,v=!t(d),h=e.children;if(v&&l(d.onComponentShouldUpdate)&&(c=d.onComponentShouldUpdate(p,s)),!1!==c){v&&l(d.onComponentWillUpdate)&&d.onComponentWillUpdate(p,s);var g=n.type,m=_e(32768&n.flags?g.render(s,d,o):g(s,o));an(h,m,r,o,i,a,u),n.children=m,v&&l(d.onComponentDidUpdate)&&d.onComponentDidUpdate(p,s)}else n.children=h}function bn(e,n){var t=n.children,r=n.dom=e.dom;t!==e.children&&(r.nodeValue=t)}function yn(e,n,t,r,l,o,i,a,u){for(var c,f,s=o>i?i:o,d=0;d<s;++d)c=n[d],f=e[d],16384&c.flags&&(c=n[d]=E(c)),an(f,c,t,r,l,a,u),e[d]=c;if(o<i)for(d=s;d<i;++d)16384&(c=n[d]).flags&&(c=n[d]=E(c)),Ke(c,t,r,l,a,u);else if(o>i)for(d=s;d<o;++d)Ne(e[d],t)}function Cn(e,n,t,r,l,o,i,a,u,c){var f,s,d=o-1,p=i-1,v=0,h=e[v],g=n[v];e:{for(;h.key===g.key;){if(16384&g.flags&&(n[v]=g=E(g)),an(h,g,t,r,l,a,c),e[v]=g,++v>d||v>p)break e;h=e[v],g=n[v]}for(h=e[d],g=n[p];h.key===g.key;){if(16384&g.flags&&(n[p]=g=E(g)),an(h,g,t,r,l,a,c),e[d]=g,p--,v>--d||v>p)break e;h=e[d],g=n[p]}}if(v>d){if(v<=p)for(s=(f=p+1)<i?b(n[f],!0):a;v<=p;)16384&(g=n[v]).flags&&(n[v]=g=E(g)),++v,Ke(g,t,r,l,s,c)}else if(v>p)for(;v<=d;)Ne(e[v++],t);else $n(e,n,r,o,i,d,p,v,t,l,a,u,c)}function $n(e,n,t,r,l,o,i,a,u,c,f,s,d){var p,v,h,g=0,m=a,k=a,y=o-a+1,$=i-a+1,w=new Int32Array($+1),F=y===r,x=!1,P=0,L=0;if(l<4||(y|$)<32)for(g=m;g<=o;++g)if(p=e[g],L<$){for(a=k;a<=i;a++)if(v=n[a],p.key===v.key){if(w[a-k]=g+1,F)for(F=!1;m<g;)Ne(e[m++],u);P>a?x=!0:P=a,16384&v.flags&&(n[a]=v=E(v)),an(p,v,u,t,c,f,d),++L;break}!F&&a>i&&Ne(p,u)}else F||Ne(p,u);else{var S={};for(g=k;g<=i;++g)S[n[g].key]=g;for(g=m;g<=o;++g)if(p=e[g],L<$)if(void 0!==(a=S[p.key])){if(F)for(F=!1;g>m;)Ne(e[m++],u);w[a-k]=g+1,P>a?x=!0:P=a,16384&(v=n[a]).flags&&(n[a]=v=E(v)),an(p,v,u,t,c,f,d),++L}else F||Ne(p,u);else F||Ne(p,u)}if(F)De(u,s,e),Qe(n,u,t,c,f,d);else if(x){var V=Fn(w);for(a=V.length-1,g=$-1;g>=0;g--)0===w[g]?(16384&(v=n[P=g+k]).flags&&(n[P]=v=E(v)),Ke(v,u,t,c,(h=P+1)<l?b(n[h],!0):f,d)):a<0||g!==V[a]?C(v=n[P=g+k],u,(h=P+1)<l?b(n[h],!0):f):a--}else if(L!==$)for(g=$-1;g>=0;g--)0===w[g]&&(16384&(v=n[P=g+k]).flags&&(n[P]=v=E(v)),Ke(v,u,t,c,(h=P+1)<l?b(n[h],!0):f,d))}var wn=0;function Fn(e){var n=0,t=0,r=0,l=0,o=0,i=0,a=0,u=e.length;for(u>wn&&(wn=u,Ce=new Int32Array(u),$e=new Int32Array(u));t<u;++t)if(0!==(n=e[t])){if(e[r=Ce[l]]<n){$e[t]=r,Ce[++l]=t;continue}for(o=0,i=l;o<i;)e[Ce[a=o+i>>1]]<n?o=a+1:i=a;n<e[Ce[o]]&&(o>0&&($e[t]=Ce[o-1]),Ce[o]=t)}o=l+1;var c=new Int32Array(o);for(i=Ce[o-1];o-- >0;)c[o]=i,i=$e[i],Ce[o]=0;return c}function xn(e,n,r,o){var i=[],a=n.$V;t(a)?t(e)||(16384&e.flags&&(e=E(e)),Ke(e,n,o,!1,null,i),n.$V=e,a=e):t(e)?(Ne(a,n),n.$V=null):(16384&e.flags&&(e=E(e)),an(a,e,n,o,!1,null,i),a=n.$V=e),i.length>0&&m(i),l(r)&&r(),l(w.renderComplete)&&w.renderComplete(a,n)}function Pn(e,n,t,r){void 0===t&&(t=null),void 0===r&&(r=f),xn(e,n,t,r)}"undefined"!==typeof document&&(document.body,Node.prototype.$EV=null,Node.prototype.$V=null),"undefined"!==typeof Promise&&Promise.resolve().then.bind(Promise.resolve()),uibench.init("Inferno","7.2.1");var Ln={onComponentShouldUpdate:function(e,n){return e!==n}};function Sn(e){return U(1,"li","TreeLeaf",e.children,16,null,null,null)}function Vn(e){for(var n=e.data,t=n.children.length,r=new Array(t),l=0;l<t;l++){var o=n.children[l],i=o.id;o.container?r[l]=M(2,Vn,{data:o},i,null):r[l]=M(2,Sn,{children:i},i,null)}return U(1,"ul","TreeNode",r,8,null,null,null)}function Un(e){return U(1,"div","Tree",M(2,Vn,{data:e.root},null,null),2,null,null,null)}function In(e){var n=e.data,t=n.time%10,r="border-radius:"+t+"px;background:rgba(0,0,0,"+(.5+t/10)+")";return U(1,"div","AnimBox",null,1,{"data-id":n.id,style:r},null,null)}function Nn(e){for(var n=e.items,t=n.length,r=[],l=0;l<t;l++){var o=n[l];r.push(M(2,In,{data:o},o.id,null))}return U(1,"div","Anim",r,8,null,null,null)}function An(e,n){console.log("Clicked",e),n.stopPropagation()}function Mn(e){var n=e.children;return U(1,"td","TableCell",n,16,{onClick:u(n,An)},null,null)}function Tn(e){var n=e.data,t="TableRow";n.active&&(t="TableRow active");for(var r=n.props,l=r.length+1,o=[M(2,Mn,{children:"#"+n.id},null,null)],i=1;i<l;i++)o.push(M(2,Mn,{children:r[i-1]},null,null));return U(1,"tr",t,o,4,{"data-id":n.id},null,null)}function Dn(e){for(var n=e.items,t=n.length,r=[],l=0;l<t;l++){var o=n[l];r.push(M(2,Tn,{data:o},o.id,null))}return U(1,"table","Table",r,8,null,null,null)}Sn.defaultHooks=Ln,Vn.defaultHooks=Ln,In.defaultHooks=Ln,Mn.defaultHooks=Ln,Tn.defaultHooks=Ln,document.addEventListener("DOMContentLoaded",function(e){var n=document.querySelector("#App");uibench.run(function(e){var t,r,l;Pn(("table"===(l=(t=e).location)?r=Dn(t.table):"anim"===l?r=Nn(t.anim):"tree"===l&&(r=Un(t.tree)),U(1,"div","Main",r,2,null,null,null)),n)},function(e){Pn(U(1,"pre",null,JSON.stringify(e,null," "),16,null,null,null),n)})})}();
