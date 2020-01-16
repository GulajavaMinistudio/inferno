!function(){"use strict";function e(){return(e=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}function n(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n}var t=Array.isArray;function a(e){var n=typeof e;return"string"===n||"number"===n}function f(e){return void 0===e||null===e}function r(e){return null===e||!1===e||!0===e||void 0===e}function c(e){return"function"===typeof e}function i(e){return"string"===typeof e}function o(e){return null===e}function l(e,n){var t={};if(e)for(var a in e)t[a]=e[a];if(n)for(var f in n)t[f]=n[f];return t}function d(e){return!o(e)&&"object"===typeof e}var u={};function s(e){return e.substr(2).toLowerCase()}function h(e,n){e.appendChild(n)}function p(e,n,t){o(t)?h(e,n):e.insertBefore(n,t)}function b(e,n){e.removeChild(n)}function v(e){for(var n;void 0!==(n=e.shift());)n()}function m(e,n,t){var a=e.children;if(4&t)return a.$LI;if(8192&t)return 2===e.childFlags?a:a[n?0:a.length-1];return a}function g(e,n){for(var t;e;){if(2033&(t=e.flags))return e.dom;e=m(e,n,t)}return null}function y(e,n){do{var t=e.flags;if(2033&t)return void b(n,e.dom);var a=e.children;if(4&t&&(e=a.$LI),8&t&&(e=a),8192&t){if(2!==e.childFlags){for(var f=0,r=a.length;f<r;++f)y(a[f],n);return}e=a}}while(e)}function x(e,n,t){do{var a=e.flags;if(2033&a)return void p(n,e.dom,t);var f=e.children;if(4&a&&(e=f.$LI),8&a&&(e=f),8192&a){if(2!==e.childFlags){for(var r=0,c=f.length;r<c;++r)x(f[r],n,t);return}e=f}}while(e)}function $(e,n,t){if(e.constructor.getDerivedStateFromProps)return l(t,e.constructor.getDerivedStateFromProps(n,t));return t}var k={v:!1},w={componentComparator:null,createVNode:null,renderComplete:null};function C(e,n){e.textContent=n}function M(e,n){return d(e)&&e.event===n.event&&e.data===n.data}function P(e,n){for(var t in n)void 0===e[t]&&(e[t]=n[t]);return e}function S(e,n){return!!c(e)&&(e(n),!0)}function F(e,n,t,a,f,r,c,i){this.childFlags=e,this.children=n,this.className=t,this.dom=null,this.flags=a,this.key=void 0===f?null:f,this.props=void 0===r?null:r,this.ref=void 0===c?null:c,this.type=i}function T(e,n,f,c,l,d,u,s){var h=void 0===l?1:l,p=new F(h,c,f,e,u,d,s,n);return w.createVNode&&w.createVNode(p),0===h&&function(e,n){var f,c=1;if(r(n))f=n;else if(a(n))c=16,f=n;else if(t(n)){for(var l=n.length,d=0;d<l;++d){var u=n[d];if(r(u)||t(u)){f=f||n.slice(0,d),I(n,f,d,"");break}if(a(u))(f=f||n.slice(0,d)).push(V(u,"$"+d));else{var s=u.key,h=(81920&u.flags)>0,p=o(s),b=i(s)&&"$"===s[0];h||p||b?(f=f||n.slice(0,d),(h||b)&&(u=L(u)),(p||b)&&(u.key="$"+d),f.push(u)):f&&f.push(u),u.flags|=65536}}c=0===(f=f||n).length?1:8}else(f=n).flags|=65536,81920&n.flags&&(f=L(n)),c=2;e.children=f,e.childFlags=c}(p,p.children),p}function N(e,n,t,a,r){var c=new F(1,null,null,e=function(e,n){if(12&e)return e;if(n.prototype&&n.prototype.render)return 4;if(n.render)return 32776;return 8}(e,n),a,function(e,n,t){var a=(32768&e?n.render:n).defaultProps;if(f(a))return t;if(f(t))return l(a,null);return P(t,a)}(e,n,t),function(e,n,t){if(4&e)return t;var a=(32768&e?n.render:n).defaultHooks;if(f(a))return t;if(f(t))return a;return P(t,a)}(e,n,r),n);return w.createVNode&&w.createVNode(c),c}function V(e,n){return new F(1,f(e)||!0===e||!1===e?"":e,null,16,n,null,null,null)}function U(e,n,t){var a=T(8192,8192,null,e,n,null,t,null);switch(a.childFlags){case 1:a.children=_(),a.childFlags=2;break;case 16:a.children=[V(e)],a.childFlags=4}return a}function L(e){var n=-16385&e.flags,t=e.props;if(14&n&&!o(t)){var a=t;for(var f in t={},a)t[f]=a[f]}if(0===(8192&n))return new F(e.childFlags,e.children,e.className,n,e.key,t,e.ref,e.type);return function(e){var n,t=e.children,a=e.childFlags;if(2===a)n=L(t);else if(12&a){n=[];for(var f=0,r=t.length;f<r;++f)n.push(L(t[f]))}return U(n,a,e.key)}(e)}function _(){return V("",null)}function I(e,n,f,c){for(var l=e.length;f<l;f++){var d=e[f];if(!r(d)){var u=c+"$"+f;if(t(d))I(d,n,0,u);else{if(a(d))d=V(d,u);else{var s=d.key,h=i(s)&&"$"===s[0];(81920&d.flags||h)&&(d=L(d)),d.flags|=65536,h?s.substring(0,c.length)!==c&&(d.key=c+s):o(s)?d.key=u:d.key=c+s}n.push(d)}}}}function H(e){if(r(e)||a(e))return V(e,null);if(t(e))return U(e,0,null);return 16384&e.flags?L(e):e}var E="http://www.w3.org/1999/xlink",A="http://www.w3.org/XML/1998/namespace",B={"xlink:actuate":E,"xlink:arcrole":E,"xlink:href":E,"xlink:role":E,"xlink:show":E,"xlink:title":E,"xlink:type":E,"xml:base":A,"xml:lang":A,"xml:space":A};function D(e){return{onClick:e,onDblClick:e,onFocusIn:e,onFocusOut:e,onKeyDown:e,onKeyPress:e,onKeyUp:e,onMouseDown:e,onMouseMove:e,onMouseUp:e,onTouchEnd:e,onTouchMove:e,onTouchStart:e}}var O=D(0),R=D(null),W=D(!0);function j(e,n){var t=n.$EV;return t||(t=n.$EV=D(null)),t[e]||1===++O[e]&&(R[e]=function(e){var n="onClick"===e||"onDblClick"===e?function(e){return function(n){if(0!==n.button)return void n.stopPropagation();G(n,!0,e,z(n))}}(e):function(e){return function(n){G(n,!1,e,z(n))}}(e);return document.addEventListener(s(e),n),n}(e)),t}function q(e,n){var t=n.$EV;t&&t[e]&&(0===--O[e]&&(document.removeEventListener(s(e),R[e]),R[e]=null),t[e]=null)}function G(e,n,t,a){var f=function(e){return c(e.composedPath)?e.composedPath()[0]:e.target}(e);do{if(n&&f.disabled)return;var r=f.$EV;if(r){var i=r[t];if(i&&(a.dom=f,i.event?i.event(i.data,e):i(e),e.cancelBubble))return}f=f.parentNode}while(!o(f))}function Q(){this.cancelBubble=!0,this.immediatePropagationStopped||this.stopImmediatePropagation()}function X(){return this.defaultPrevented}function K(){return this.cancelBubble}function z(e){var n={dom:document};return e.isDefaultPrevented=X,e.isPropagationStopped=K,e.stopPropagation=Q,Object.defineProperty(e,"currentTarget",{configurable:!0,get:function(){return n.dom}}),n}function J(e,n,t){if(e[n]){var a=e[n];a.event?a.event(a.data,t):a(t)}else{var f=n.toLowerCase();e[f]&&e[f](t)}}function Y(e,n){var t=function(t){var a=this.$V;if(!a)return;var f=a.props||u,r=a.dom;if(i(e))J(f,e,t);else for(var o=0;o<e.length;++o)J(f,e[o],t);if(c(n)){var l=this.$V,d=l.props||u;n(d,r,!1,l)}};return Object.defineProperty(t,"wrapped",{configurable:!1,enumerable:!1,value:!0,writable:!1}),t}function Z(e,n,t){var a="$"+n,f=e[a];if(f){if(f[1].wrapped)return;e.removeEventListener(f[0],f[1]),e[a]=null}c(t)&&(e.addEventListener(n,t),e[a]=[n,t])}function ee(e){return"checkbox"===e||"radio"===e}var ne=Y("onInput",fe),te=Y(["onClick","onChange"],fe);function ae(e){e.stopPropagation()}function fe(e,n){var t=e.type,a=e.value,r=e.checked,c=e.multiple,i=e.defaultValue,o=!f(a);t&&t!==n.type&&n.setAttribute("type",t),f(c)||c===n.multiple||(n.multiple=c),f(i)||o||(n.defaultValue=i+""),ee(t)?(o&&(n.value=a),f(r)||(n.checked=r)):o&&n.value!==a?(n.defaultValue=a,n.value=a):f(r)||(n.checked=r)}ae.wrapped=!0;var re=Y("onChange",ce);function ce(e,n,a,r){var c=Boolean(e.multiple);f(e.multiple)||c===n.multiple||(n.multiple=c);var i=e.selectedIndex;if(-1===i&&(n.selectedIndex=-1),1!==r.childFlags){var o=e.value;"number"===typeof i&&i>-1&&n.options[i]&&(o=n.options[i].value),a&&f(o)&&(o=e.defaultValue),function e(n,a){if("option"===n.type)!function(e,n){var a=e.props||u,r=e.dom;r.value=a.value,a.value===n||t(n)&&-1!==n.indexOf(a.value)?r.selected=!0:f(n)&&f(a.selected)||(r.selected=a.selected||!1)}(n,a);else{var r=n.children,c=n.flags;if(4&c)e(r.$LI,a);else if(8&c)e(r,a);else if(2===n.childFlags)e(r,a);else if(12&n.childFlags)for(var i=0,o=r.length;i<o;++i)e(r[i],a)}}(r,o)}}var ie,oe,le=Y("onInput",ue),de=Y("onChange");function ue(e,n,t){var a=e.value,r=n.value;if(f(a)){if(t){var c=e.defaultValue;f(c)||c===r||(n.defaultValue=c,n.value=c)}}else r!==a&&(n.defaultValue=a,n.value=a)}function se(e,n,t,a,f,r){64&e?fe(a,t):256&e?ce(a,t,f,n):128&e&&ue(a,t,f),r&&(t.$V=n)}function he(e){return e.type&&ee(e.type)?!f(e.checked):!f(e.value)}function pe(e){e&&!S(e,null)&&e.current&&(e.current=null)}function be(e,n,t){e&&(c(e)||void 0!==e.current)&&t.push((function(){S(e,n)||void 0===e.current||(e.current=n)}))}function ve(e,n){me(e),y(e,n)}function me(e){var n,t=e.flags,a=e.children;if(481&t){n=e.ref;var r=e.props;pe(n);var i=e.childFlags;if(!o(r))for(var l=Object.keys(r),d=0,s=l.length;d<s;d++){var h=l[d];W[h]&&q(h,e.dom)}12&i?ge(a):2===i&&me(a)}else a&&(4&t?(c(a.componentWillUnmount)&&a.componentWillUnmount(),pe(e.ref),a.$UN=!0,me(a.$LI)):8&t?(!f(n=e.ref)&&c(n.onComponentWillUnmount)&&n.onComponentWillUnmount(g(e,!0),e.props||u),me(a)):1024&t?ve(a,e.ref):8192&t&&12&e.childFlags&&ge(a))}function ge(e){for(var n=0,t=e.length;n<t;++n)me(e[n])}function ye(e){e.textContent=""}function xe(e,n,t){ge(t),8192&n.flags?y(n,e):ye(e)}function $e(e,n,t,a,r,l,u){switch(e){case"children":case"childrenType":case"className":case"defaultValue":case"key":case"multiple":case"ref":case"selectedIndex":break;case"autoFocus":a.autofocus=!!t;break;case"allowfullscreen":case"autoplay":case"capture":case"checked":case"controls":case"default":case"disabled":case"hidden":case"indeterminate":case"loop":case"muted":case"novalidate":case"open":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"selected":a[e]=!!t;break;case"defaultChecked":case"value":case"volume":if(l&&"value"===e)break;var h=f(t)?"":t;a[e]!==h&&(a[e]=h);break;case"style":!function(e,n,t){if(f(n))return void t.removeAttribute("style");var a,r,c=t.style;if(i(n))return void(c.cssText=n);if(f(e)||i(e))for(a in n)r=n[a],c.setProperty(a,r);else{for(a in n)(r=n[a])!==e[a]&&c.setProperty(a,r);for(a in e)f(n[a])&&c.removeProperty(a)}}(n,t,a);break;case"dangerouslySetInnerHTML":!function(e,n,t,a){var r=e&&e.__html||"",c=n&&n.__html||"";r!==c&&(f(c)||function(e,n){var t=document.createElement("i");return t.innerHTML=n,t.innerHTML===e.innerHTML}(a,c)||(o(t)||(12&t.childFlags?ge(t.children):2===t.childFlags&&me(t.children),t.children=null,t.childFlags=1),a.innerHTML=c))}(n,t,u,a);break;default:W[e]?function(e,n,t,a){if(c(t))j(e,a)[e]=t;else if(d(t)){if(M(n,t))return;j(e,a)[e]=t}else q(e,a)}(e,n,t,a):111===e.charCodeAt(0)&&110===e.charCodeAt(1)?function(e,n,t,a){if(d(t)){if(M(n,t))return;t=function(e){var n=e.event;return function(t){n(e.data,t)}}(t)}Z(a,s(e),t)}(e,n,t,a):f(t)?a.removeAttribute(e):r&&B[e]?a.setAttributeNS(B[e],e,t):a.setAttribute(e,t)}}function ke(e,n,t){var a=H(e.render(n,e.state,t)),f=t;return c(e.getChildContext)&&(f=l(t,e.getChildContext())),e.$CX=f,a}function we(e,n,t,a,r,i){var l=e.flags|=16384;481&l?function(e,n,t,a,r,c){var i=e.flags,l=e.props,d=e.className,u=e.children,s=e.childFlags,h=e.dom=function(e,n){if(n)return document.createElementNS("http://www.w3.org/2000/svg",e);return document.createElement(e)}(e.type,a=a||(32&i)>0);if(f(d)||""===d||(a?h.setAttribute("class",d):h.className=d),16===s)C(h,u);else if(1!==s){var b=a&&"foreignObject"!==e.type;2===s?(16384&u.flags&&(e.children=u=L(u)),we(u,h,t,b,null,c)):8!==s&&4!==s||Me(u,h,t,b,null,c)}o(n)||p(n,h,r),o(l)||function(e,n,t,a,f){var r=!1,c=(448&n)>0;for(var i in c&&(r=he(t))&&function(e,n,t){64&e?function(e,n){ee(n.type)?(Z(e,"change",te),Z(e,"click",ae)):Z(e,"input",ne)}(n,t):256&e?function(e){Z(e,"change",re)}(n):128&e&&function(e,n){Z(e,"input",le),n.onChange&&Z(e,"change",de)}(n,t)}(n,a,t),t)$e(i,null,t[i],a,f,r,null);c&&se(n,e,a,t,!0,r)}(e,i,l,h,a),be(e.ref,h,c)}(e,n,t,a,r,i):4&l?function(e,n,t,a,f,r){var i=function(e,n,t,a,f,r){var i=new n(t,a),l=i.$N=Boolean(n.getDerivedStateFromProps||i.getSnapshotBeforeUpdate);if(i.$SVG=f,i.$L=r,e.children=i,i.$BS=!1,i.context=a,i.props===u&&(i.props=t),l)i.state=$(i,t,i.state);else if(c(i.componentWillMount)){i.$BR=!0,i.componentWillMount();var d=i.$PS;if(!o(d)){var s=i.state;if(o(s))i.state=d;else for(var h in d)s[h]=d[h];i.$PS=null}i.$BR=!1}return i.$LI=ke(i,t,a),i}(e,e.type,e.props||u,t,a,r);we(i.$LI,n,i.$CX,a,f,r),function(e,n,t){be(e,n,t),c(n.componentDidMount)&&t.push(function(e){return function(){e.componentDidMount()}}(n))}(e.ref,i,r)}(e,n,t,a,r,i):8&l?(function(e,n,t,a,f,r){we(e.children=H(function(e,n){return 32768&e.flags?e.type.render(e.props||u,e.ref,n):e.type(e.props||u,n)}(e,t)),n,t,a,f,r)}(e,n,t,a,r,i),function(e,n){var t=e.ref;f(t)||(S(t.onComponentWillMount,e.props||u),c(t.onComponentDidMount)&&n.push(function(e,n){return function(){e.onComponentDidMount(g(n,!0),n.props||u)}}(t,e)))}(e,i)):512&l||16&l?Ce(e,n,r):8192&l?function(e,n,t,a,f,r){var c=e.children,i=e.childFlags;12&i&&0===c.length&&(i=e.childFlags=2,c=e.children=_()),2===i?we(c,t,f,a,f,r):Me(c,t,n,a,f,r)}(e,t,n,a,r,i):1024&l&&function(e,n,t,a,f){we(e.children,e.ref,n,!1,null,f);var r=_();Ce(r,t,a),e.dom=r.dom}(e,t,n,r,i)}function Ce(e,n,t){var a=e.dom=document.createTextNode(e.children);o(n)||p(n,a,t)}function Me(e,n,t,a,f,r){for(var c=0;c<e.length;++c){var i=e[c];16384&i.flags&&(e[c]=i=L(i)),we(i,n,t,a,f,r)}}function Pe(e,n,t,a,i,d,s){var p=n.flags|=16384;e.flags!==p||e.type!==n.type||e.key!==n.key||2048&p?16384&e.flags?function(e,n,t,a,f,r){me(e),0!==(n.flags&e.flags&2033)?(we(n,null,a,f,null,r),function(e,n,t){e.replaceChild(n,t)}(t,n.dom,e.dom)):(we(n,t,a,f,g(e,!0),r),y(e,t))}(e,n,t,a,i,s):we(n,t,a,i,d,s):481&p?function(e,n,t,a,r,c){var i,o=n.dom=e.dom,l=e.props,d=n.props,s=!1,h=!1;if(a=a||(32&r)>0,l!==d){var p=l||u;if((i=d||u)!==u)for(var b in(s=(448&r)>0)&&(h=he(i)),i){var v=p[b],m=i[b];v!==m&&$e(b,v,m,o,a,h,e)}if(p!==u)for(var g in p)f(i[g])&&!f(p[g])&&$e(g,p[g],null,o,a,h,e)}var y=n.children,x=n.className;e.className!==x&&(f(x)?o.removeAttribute("class"):a?o.setAttribute("class",x):o.className=x),4096&r?function(e,n){e.textContent!==n&&(e.textContent=n)}(o,y):Se(e.childFlags,n.childFlags,e.children,y,o,t,a&&"foreignObject"!==n.type,null,e,c),s&&se(r,n,o,i,!1,h);var $=n.ref,k=e.ref;k!==$&&(pe(k),be($,o,c))}(e,n,a,i,p,s):4&p?function(e,n,t,a,f,r,i){var d=n.children=e.children;if(o(d))return;d.$L=i;var s=n.props||u,h=n.ref,p=e.ref,b=d.state;if(!d.$N){if(c(d.componentWillReceiveProps)){if(d.$BR=!0,d.componentWillReceiveProps(s,a),d.$UN)return;d.$BR=!1}o(d.$PS)||(b=l(b,d.$PS),d.$PS=null)}Fe(d,b,s,t,a,f,!1,r,i),p!==h&&(pe(p),be(h,d,i))}(e,n,t,a,i,d,s):8&p?function(e,n,t,a,r,i,o){var l=!0,d=n.props||u,s=n.ref,h=e.props,p=!f(s),b=e.children;if(p&&c(s.onComponentShouldUpdate)&&(l=s.onComponentShouldUpdate(h,d)),!1!==l){p&&c(s.onComponentWillUpdate)&&s.onComponentWillUpdate(h,d);var v=n.type,m=H(32768&n.flags?v.render(d,s,a):v(d,a));Pe(b,m,t,a,r,i,o),n.children=m,p&&c(s.onComponentDidUpdate)&&s.onComponentDidUpdate(h,d)}else n.children=b}(e,n,t,a,i,d,s):16&p?function(e,n){var t=n.children,a=n.dom=e.dom;t!==e.children&&(a.nodeValue=t)}(e,n):512&p?n.dom=e.dom:8192&p?function(e,n,t,a,f,r){var c=e.children,i=n.children,o=e.childFlags,l=n.childFlags,d=null;12&l&&0===i.length&&(l=n.childFlags=2,i=n.children=_());var u=0!==(2&l);if(12&o){var s=c.length;(8&o&&8&l||u||!u&&i.length>s)&&(d=g(c[s-1],!1).nextSibling)}Se(o,l,c,i,t,a,f,d,e,r)}(e,n,t,a,i,s):function(e,n,t,a){var f=e.ref,c=n.ref,i=n.children;if(Se(e.childFlags,n.childFlags,e.children,i,f,t,!1,null,e,a),n.dom=e.dom,f!==c&&!r(i)){var o=i.dom;b(f,o),h(c,o)}}(e,n,a,s)}function Se(e,n,t,a,f,r,c,i,o,l){switch(e){case 2:switch(n){case 2:Pe(t,a,f,r,c,i,l);break;case 1:ve(t,f);break;case 16:me(t),C(f,a);break;default:!function(e,n,t,a,f,r){me(e),Me(n,t,a,f,g(e,!0),r),y(e,t)}(t,a,f,r,c,l)}break;case 1:switch(n){case 2:we(a,f,r,c,i,l);break;case 1:break;case 16:C(f,a);break;default:Me(a,f,r,c,i,l)}break;case 16:switch(n){case 16:!function(e,n,t){e!==n&&(""!==e?t.firstChild.nodeValue=n:C(t,n))}(t,a,f);break;case 2:ye(f),we(a,f,r,c,i,l);break;case 1:ye(f);break;default:ye(f),Me(a,f,r,c,i,l)}break;default:switch(n){case 16:ge(t),C(f,a);break;case 2:xe(f,o,t),we(a,f,r,c,i,l);break;case 1:xe(f,o,t);break;default:var d=0|t.length,u=0|a.length;0===d?u>0&&Me(a,f,r,c,i,l):0===u?xe(f,o,t):8===n&&8===e?function(e,n,t,a,f,r,c,i,o,l){var d,u,s=r-1,h=c-1,p=0,b=e[p],v=n[p];e:{for(;b.key===v.key;){if(16384&v.flags&&(n[p]=v=L(v)),Pe(b,v,t,a,f,i,l),e[p]=v,++p>s||p>h)break e;b=e[p],v=n[p]}for(b=e[s],v=n[h];b.key===v.key;){if(16384&v.flags&&(n[h]=v=L(v)),Pe(b,v,t,a,f,i,l),e[s]=v,h--,p>--s||p>h)break e;b=e[s],v=n[h]}}if(p>s){if(p<=h)for(u=(d=h+1)<c?g(n[d],!0):i;p<=h;)16384&(v=n[p]).flags&&(n[p]=v=L(v)),++p,we(v,t,a,f,u,l)}else if(p>h)for(;p<=s;)ve(e[p++],t);else!function(e,n,t,a,f,r,c,i,o,l,d,u,s){var h,p,b,v=0,m=i,y=i,$=r-i+1,k=c-i+1,w=new Int32Array(k+1),C=$===a,M=!1,P=0,S=0;if(f<4||($|k)<32)for(v=m;v<=r;++v)if(h=e[v],S<k){for(i=y;i<=c;i++)if(p=n[i],h.key===p.key){if(w[i-y]=v+1,C)for(C=!1;m<v;)ve(e[m++],o);P>i?M=!0:P=i,16384&p.flags&&(n[i]=p=L(p)),Pe(h,p,o,t,l,d,s),++S;break}!C&&i>c&&ve(h,o)}else C||ve(h,o);else{var F={};for(v=y;v<=c;++v)F[n[v].key]=v;for(v=m;v<=r;++v)if(h=e[v],S<k)if(void 0!==(i=F[h.key])){if(C)for(C=!1;v>m;)ve(e[m++],o);w[i-y]=v+1,P>i?M=!0:P=i,16384&(p=n[i]).flags&&(n[i]=p=L(p)),Pe(h,p,o,t,l,d,s),++S}else C||ve(h,o);else C||ve(h,o)}if(C)xe(o,u,e),Me(n,o,t,l,d,s);else if(M){var T=function(e){var n=0,t=0,a=0,f=0,r=0,c=0,i=0,o=e.length;for(o>Te&&(Te=o,ie=new Int32Array(o),oe=new Int32Array(o));t<o;++t)if(0!==(n=e[t])){if(e[a=ie[f]]<n){oe[t]=a,ie[++f]=t;continue}for(r=0,c=f;r<c;)e[ie[i=r+c>>1]]<n?r=i+1:c=i;n<e[ie[r]]&&(r>0&&(oe[t]=ie[r-1]),ie[r]=t)}r=f+1;var l=new Int32Array(r);for(c=ie[r-1];r-- >0;)l[r]=c,c=oe[c],ie[r]=0;return l}(w);for(i=T.length-1,v=k-1;v>=0;v--)0===w[v]?(16384&(p=n[P=v+y]).flags&&(n[P]=p=L(p)),we(p,o,t,l,(b=P+1)<f?g(n[b],!0):d,s)):i<0||v!==T[i]?x(p=n[P=v+y],o,(b=P+1)<f?g(n[b],!0):d):i--}else if(S!==k)for(v=k-1;v>=0;v--)0===w[v]&&(16384&(p=n[P=v+y]).flags&&(n[P]=p=L(p)),we(p,o,t,l,(b=P+1)<f?g(n[b],!0):d,s))}(e,n,a,r,c,s,h,p,t,f,i,o,l)}(t,a,f,r,c,d,u,i,o,l):function(e,n,t,a,f,r,c,i,o){for(var l,d,u=r>c?c:r,s=0;s<u;++s)l=n[s],d=e[s],16384&l.flags&&(l=n[s]=L(l)),Pe(d,l,t,a,f,i,o),e[s]=l;if(r<c)for(s=u;s<c;++s)16384&(l=n[s]).flags&&(l=n[s]=L(l)),we(l,t,a,f,i,o);else if(r>c)for(s=u;s<r;++s)ve(e[s],t)}(t,a,f,r,c,d,u,i,l)}}}function Fe(e,n,t,a,f,r,i,o,d){var u=e.state,s=e.props,h=Boolean(e.$N),p=c(e.shouldComponentUpdate);if(h&&(n=$(e,t,n!==u?l(u,n):n)),i||!p||p&&e.shouldComponentUpdate(t,n,f)){!h&&c(e.componentWillUpdate)&&e.componentWillUpdate(t,n,f),e.props=t,e.state=n,e.context=f;var b=null,v=ke(e,t,f);h&&c(e.getSnapshotBeforeUpdate)&&(b=e.getSnapshotBeforeUpdate(s,u)),Pe(e.$LI,v,a,e.$CX,r,o,d),e.$LI=v,c(e.componentDidUpdate)&&function(e,n,t,a,f){f.push((function(){e.componentDidUpdate(n,t,a)}))}(e,s,u,b,d)}else e.props=t,e.state=n,e.context=f}var Te=0;"undefined"!==typeof document&&window.Node&&(Node.prototype.$EV=null,Node.prototype.$V=null);var Ne=[],Ve="undefined"!==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):function(e){window.setTimeout(e,0)},Ue=!1;function Le(e,n,t,a){var r=e.$PS;if(c(n)&&(n=n(r?l(e.state,r):e.state,e.props,e.context)),f(r))e.$PS=n;else for(var i in n)r[i]=n[i];if(e.$BR)c(t)&&e.$L.push(t.bind(e));else{if(!k.v&&0===Ne.length)return void He(e,a,t);if(-1===Ne.indexOf(e)&&Ne.push(e),Ue||(Ue=!0,Ve(Ie)),c(t)){var o=e.$QU;o||(o=e.$QU=[]),o.push(t)}}}function _e(e){for(var n=e.$QU,t=0,a=n.length;t<a;++t)n[t].call(e);e.$QU=null}function Ie(){var e;for(Ue=!1;e=Ne.pop();)He(e,!1,e.$QU?_e.bind(null,e):null)}function He(e,n,t){if(e.$UN)return;if(n||!e.$BR){var a=e.$PS;e.$PS=null;var f=[];k.v=!0,Fe(e,l(e.state,a),e.props,g(e.$LI,!0).parentNode,e.context,e.$SVG,n,null,f),f.length>0&&v(f),k.v=!1}else e.state=e.$PS,e.$PS=null;c(t)&&t.call(e)}var Ee=function(e,n){this.state=null,this.$BR=!1,this.$BS=!0,this.$PS=null,this.$LI=null,this.$UN=!1,this.$CX=null,this.$QU=null,this.$N=!1,this.$L=null,this.$SVG=!1,this.props=e||u,this.context=n||u};Ee.prototype.forceUpdate=function(e){if(this.$UN)return;Le(this,{},e,!0)},Ee.prototype.setState=function(e,n){if(this.$UN)return;this.$BS||Le(this,e,n,!1)},Ee.prototype.render=function(e,n,t){return null};var Ae,Be,De=function(e,n,t,a){this.min=e,this.max=n,this.mean=t,this.last=a},Oe=function(){function e(e){this.samples=[],this.maxSamples=e,this._i=-1}return e.prototype.addSample=function(e){this._i=(this._i+1)%this.maxSamples,this.samples[this._i]=e},e.prototype.each=function(e){for(var n=this.samples,t=0;t<n.length;t++)e(n[(this._i+1+t)%n.length],t)},e.prototype.calc=function(){var e=this.samples;if(0===e.length)return new De(0,0,0,0);for(var n=e[(this._i+1)%e.length],t=n,a=0,f=0;f<e.length;f++){var r=e[(this._i+1+f)%e.length];r<n&&(n=r),r>t&&(t=r),a+=r}var c=e[this._i],i=a/e.length;return new De(n,t,i,c)},e}(),Re=[],We=-1,je=(Ae=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)n.hasOwnProperty(t)&&(e[t]=n[t])},function(e,n){function t(){this.constructor=e}Ae(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),qe=function(){function e(e){var n=this;this._sync=function(){n.sync(),n._dirty=!1},this.name=e,this.element=document.createElement("div"),this.element.style.cssText="padding: 2px;background-color: #020;font-family: monospace;font-size: 12px;color: #0f0",this._dirty=!1,this.invalidate()}return e.prototype.invalidate=function(){var e;this._dirty||(this._dirty=!0,e=this._sync,Re.push(e),-1===We&&requestAnimationFrame((function(e){We=-1;var n=Re;Re=[];for(var t=0;t<n.length;t++)n[t]()})))},e.prototype.sync=function(){throw new Error("sync method not implemented")},e}();!function(e){e[e.HideMin=1]="HideMin",e[e.HideMax=2]="HideMax",e[e.HideMean=4]="HideMean",e[e.HideLast=8]="HideLast",e[e.HideGraph=16]="HideGraph",e[e.RoundValues=32]="RoundValues"}(Be||(Be={}));var Ge=function(e){function n(n,t,a,f){var r=e.call(this,n)||this;r.flags=t,r.unitName=a,r.samples=f;var c=document.createElement("div");c.style.cssText="text-align: center",c.textContent=r.name;var i=document.createElement("div");return 0===(t&Be.HideMin)?(r.minText=document.createElement("div"),i.appendChild(r.minText)):r.minText=null,0===(t&Be.HideMax)?(r.maxText=document.createElement("div"),i.appendChild(r.maxText)):r.maxText=null,0===(t&Be.HideMean)?(r.meanText=document.createElement("div"),i.appendChild(r.meanText)):r.meanText=null,0===(t&Be.HideLast)?(r.lastText=document.createElement("div"),i.appendChild(r.lastText)):r.lastText=null,r.element.appendChild(c),r.element.appendChild(i),0===(t&Be.HideGraph)?(r.canvas=document.createElement("canvas"),r.canvas.style.cssText="display: block; padding: 0; margin: 0",r.canvas.width=100,r.canvas.height=30,r.ctx=r.canvas.getContext("2d"),r.element.appendChild(r.canvas)):(r.canvas=null,r.ctx=null),r}return je(n,e),n.prototype.sync=function(){var e,n,t,a,f=this,r=this.samples.calc(),c=30/(1.2*r.max);0===(this.flags&Be.RoundValues)?(e=r.min.toFixed(2),n=r.max.toFixed(2),t=r.mean.toFixed(2),a=r.last.toFixed(2)):(e=Math.round(r.min).toString(),n=Math.round(r.max).toString(),t=Math.round(r.mean).toString(),a=Math.round(r.last).toString()),null!==this.minText&&(this.minText.textContent="min:  "+e+this.unitName),null!==this.maxText&&(this.maxText.textContent="max:  "+n+this.unitName),null!==this.meanText&&(this.meanText.textContent="mean: "+t+this.unitName),null!==this.lastText&&(this.lastText.textContent="last: "+a+this.unitName),null!==this.ctx&&(this.ctx.fillStyle="#010",this.ctx.fillRect(0,0,100,30),this.ctx.fillStyle="#0f0",this.samples.each((function(e,n){f.ctx.fillRect(n,30,1,-e*c)})))},n}(qe),Qe=(function(e){function n(n,t){var a=e.call(this,n)||this;return a.counter=t,a.text=document.createElement("div"),a.element.appendChild(a.text),a}je(n,e),n.prototype.sync=function(){this.text.textContent=this.name+": "+this.counter.value}}(qe),null);function Xe(){Qe||((Qe=document.createElement("div")).style.cssText="position: fixed;opacity: 0.9;right: 0;bottom: 0",document.body.appendChild(Qe))}function Ke(e){for(var n=e.length/6|0,t=new Array(n),a=0;a<n;)t[a]="#"+e.slice(6*a,6*++a);return t}function ze(e){var n=e.length;return function(t){return e[Math.max(0,Math.min(n-1,Math.floor(t*n)))]}}var Je=ze(Ke("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));ze(Ke("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")),ze(Ke("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")),ze(Ke("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921")),function(e){void 0===e&&(e=Be.HideMin|Be.HideMax|Be.HideMean|Be.RoundValues),Xe();var n=new Oe(100),t=new Ge("FPS",e,"",n);Qe.appendChild(t.element);var a=0,f=60;requestAnimationFrame((function e(r){a>0&&(f+=2/121*(1e3/(r-a)-f)),a=r,n.addSample(f),t.invalidate(),requestAnimationFrame(e)}))}(),function(e){if(void 0===e&&(e=Be.HideMin|Be.HideMean),Xe(),void 0===performance.memory)return;var n=new Oe(100),t=new Ge("Memory",e,"MB",n);Qe.appendChild(t.element),function e(){n.addSample(Math.round(performance.memory.usedJSHeapSize/1048576)),t.invalidate(),setTimeout(e,30)}()}();var Ye=function(e){function t(n,t){var a;return(a=e.call(this,n,t)||this).state={numPoints:0},a.updateCount=a.updateCount.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),a}n(t,e);var a=t.prototype;return a.updateCount=function(e){this.setState({numPoints:e.target.value})},a.componentDidMount=function(){this.setState({numPoints:1e3})},a.render=function(e,n){return T(1,"div","app-wrapper",[N(2,en,{count:n.numPoints},null,null),T(1,"div","controls",[V("# Points"),T(64,"input",null,null,1,{type:"range",min:10,max:1e4,value:n.numPoints,onInput:this.updateCount},null,null),n.numPoints],0,null,null,null),T(1,"div","about",[V("InfernoJS 1k Components Demo based on the Glimmer demo by "),T(1,"a",null,"Michael Lange",16,{href:"http://mlange.io",target:"_blank"},null,null),V(".")],4,null,null,null)],4,null,null,null)},t}(Ee),Ze=[0,3,0,1,2],en=function(t){function a(e,n){var a;return(a=t.call(this,e,n)||this).layout=0,a.phyllotaxis=un(100),a.grid=sn(100),a.wave=hn(100),a.spiral=pn(100),a.points=[],a.step=0,a.numSteps=120,a}n(a,t);var f=a.prototype;return f.next=function(){var n=this;this.step=(this.step+1)%this.numSteps,0===this.step&&(this.layout=(this.layout+1)%Ze.length);var t=Math.min(1,this.step/(.8*this.numSteps)),a=Ze[this.layout],f=Ze[(this.layout+1)%Ze.length],r=on(a),c=on(f),i=ln(a),o=ln(f);this.points=this.points.map((function(n){var a=e({},n);return a.x=dn(a,t,r,c),a.y=dn(a,t,i,o),a})),this.setState(),requestAnimationFrame((function(){n.next()}))},f.setAnchors=function(e){var n=this;e.map((function(e,t){var a=bn(n.grid(t)),f=a[0],r=a[1],c=bn(n.wave(t)),i=c[0],o=c[1],l=bn(n.spiral(t)),d=l[0],u=l[1],s=bn(n.phyllotaxis(t)),h=s[0],p=s[1];Object.assign(e,{gx:f,gy:r,wx:i,wy:o,sx:d,sy:u,px:h,py:p})})),this.points=e},f.makePoints=function(e){for(var n=[],t=0;t<e;t++)n.push({x:0,y:0,color:Je(t/e)});this.setAnchors(n)},f.componentWillReceiveProps=function(e){e.count!==this.props.count&&(this.phyllotaxis=un(e.count),this.grid=sn(e.count),this.wave=hn(e.count),this.spiral=pn(e.count),this.makePoints(e.count))},f.componentDidMount=function(){this.next()},f.renderPoint=function(e){return N(2,nn,{x:e.x,y:e.y,color:e.color},null,null)},f.render=function(){return T(32,"svg","demo",T(32,"g",null,function(e,n){for(var t=[],a=0;a<e.length;a++)t.push(n(e[a]));return t}(this.points,this.renderPoint),4,null,null,null),2,null,null,null)},a}(Ee);function nn(e){var n=e.x,t=e.y,a=e.color;return T(32,"rect","point",null,1,{transform:"translate("+Math.floor(n)+", "+Math.floor(t)+")",fill:a},null,null)}var tn,an,fn,rn,cn=Math.PI*(3-Math.sqrt(5));function on(e){switch(e){case 0:return"px";case 1:return"gx";case 2:return"wx";case 3:return"sx"}}function ln(e){switch(e){case 0:return"py";case 1:return"gy";case 2:return"wy";case 3:return"sy"}}function dn(e,n,t,a){var f=e[t];return f+(e[a]-f)*n}function un(e){return function(n){var t=Math.sqrt(n/e),a=n*cn;return[t*Math.cos(a),t*Math.sin(a)]}}function sn(e){var n=Math.round(Math.sqrt(e));return function(e){return[1.6/n*(e%n)-.8,1.6/n*Math.floor(e/n)-.8]}}function hn(e){var n=2/(e-1);return function(e){var t=e*n-1;return[t,.3*Math.sin(t*Math.PI*3)]}}function pn(e){return function(n){var t=Math.sqrt(n/(e-1)),a=t*Math.PI*10;return[t*Math.cos(a),t*Math.sin(a)]}}function bn(e){var n=window.innerHeight/2,t=window.innerWidth/2;return function(e,n){return n.map((function(n,t){return n+e[t]}))}([t,n],function(e,n){return n.map((function(n){return n*e}))}(Math.min(n,t),e))}tn=N(2,Ye,null,null,null),an=document.getElementById("app"),void 0===fn&&(fn=null),void 0===rn&&(rn=u),function(e,n,t,a){var r=[],i=n.$V;k.v=!0,f(i)?f(e)||(16384&e.flags&&(e=L(e)),we(e,n,a,!1,null,r),n.$V=e,i=e):f(e)?(ve(i,n),n.$V=null):(16384&e.flags&&(e=L(e)),Pe(i,e,n,a,!1,null,r),i=n.$V=e),r.length>0&&v(r),k.v=!1,c(t)&&t(),c(w.renderComplete)&&w.renderComplete(i,n)}(tn,an,fn,rn)}();
