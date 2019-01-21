!function(){"use strict";var f=Array.isArray;function d(e){var n=typeof e;return"string"===n||"number"===n}function H(e){return v(e)||X(e)}function C(e){return X(e)||false===e||true===e||v(e)}function R(e){return"function"==typeof e}function p(e){return"string"==typeof e}function X(e){return null===e}function v(e){return void 0===e}function h(e){return"object"==typeof e}function $(e,n){var l={};if(e)for(var t in e)l[t]=e[t];if(n)for(var r in n)l[r]=n[r];return l}var _={};function m(e){return e.substr(2).toLowerCase()}function w(e,n){e.appendChild(n)}function K(e,n,l){X(l)?w(e,n):e.insertBefore(n,l)}function F(e,n){e.removeChild(n)}function q(e,n){for(var l,t;e;){if(2033&(l=e.flags))return e.dom;t=e.children,e=8192&l?2===e.childFlags?t:t[n?0:t.length-1]:4&l?t.$LI:t}return null}function x(e,n){var l=e.flags;if(2033&l)F(n,e.dom);else{var t=e.children;if(4&l)x(t.$LI,n);else if(8&l)x(t,n);else if(8192&l)if(2===e.childFlags)x(t,n);else for(var r=0,o=t.length;r<o;++r)x(t[r],n)}}function V(e,n,l){var t=e.flags;if(2033&t)K(n,e.dom,l);else{var r=e.children;if(4&t)V(r.$LI,n,l);else if(8&t)V(r,n,l);else if(8192&t)if(2===e.childFlags)V(r,n,l);else for(var o=0,a=r.length;o<a;++o)V(r[o],n,l)}}function G(e,n,l){return e.constructor.getDerivedStateFromProps?$(l,e.constructor.getDerivedStateFromProps(n,l)):l}var g={componentComparator:null,createVNode:null,renderComplete:null};function z(e,n){e.textContent=n}function k(e,n){return e&&n&&h(e)&&h(n)&&e.event===n.event&&e.data===n.data}var y="$";function b(e,n,l,t,r,o,a,i){this.childFlags=e,this.children=n,this.className=l,this.dom=null,this.flags=t,this.key=void 0===r?null:r,this.props=void 0===o?null:o,this.ref=void 0===a?null:a,this.type=i}function s(e,n,l,t,r,o,a,i){var u=void 0===r?1:r,s=new b(u,t,l,e,a,o,i,n),c=g.createVNode;return R(c)&&c(s),0===u&&function(e,n){var l,t=1;if(C(n))l=n;else if(d(n))t=16,l=n;else if(f(n)){for(var r=n.length,o=0;o<r;++o){var a=n[o];if(C(a)||f(a)){M(n,l=l||n.slice(0,o),o,"");break}if(d(a))(l=l||n.slice(0,o)).push(L(a,y+o));else{var i=a.key,u=0<(81920&a.flags),s=X(i),c=!s&&p(i)&&i[0]===y;u||s||c?(l=l||n.slice(0,o),(u||c)&&(a=J(a)),(s||c)&&(a.key=y+o),l.push(a)):l&&l.push(a),a.flags|=65536}}t=0===(l=l||n).length?1:8}else(l=n).flags|=65536,81920&n.flags&&(l=J(n)),t=2;e.children=l,e.childFlags=t}(s,s.children),s}function S(e,n,l,t,r){0!=(2&e)&&(n.prototype&&n.prototype.render?e=4:n.render?(e=32776,n=n.render):e=8);var o=n.defaultProps;if(!H(o))for(var a in l||(l={}),o)v(l[a])&&(l[a]=o[a]);if(0<(8&e)&&0==(32768&e)){var i=n.defaultHooks;if(!H(i))if(r)for(var u in i)v(r[u])&&(r[u]=i[u]);else r=i}var s=new b(1,null,null,e,t,l,r,n),c=g.createVNode;return R(c)&&c(s),s}function L(e,n){return new b(1,H(e)?"":e,null,16,n,null,null,null)}function a(e,n,l){var t=s(8192,8192,null,e,n,null,l,null);switch(t.childFlags){case 1:t.children=Q(),t.childFlags=2;break;case 16:t.children=[L(e)],t.childFlags=4}return t}function J(e){var n=-16385&e.flags,l=e.props;if(14&n&&!X(l)){var t=l;for(var r in l={},t)l[r]=t[r]}return 0==(8192&n)?new b(e.childFlags,e.children,e.className,n,e.key,l,e.ref,e.type):function(e){var n,l=e.children,t=e.childFlags;if(2===t)n=J(l);else if(12&t){n=[];for(var r=0,o=l.length;r<o;++r)n.push(J(l[r]))}return a(n,t,e.key)}(e)}function Q(){return L("",null)}function M(e,n,l,t){for(var r=e.length;l<r;l++){var o=e[l];if(!C(o)){var a=t+y+l;if(f(o))M(o,n,0,a);else{if(d(o))o=L(o,a);else{var i=o.key,u=p(i)&&i[0]===y;(81920&o.flags||u)&&(o=J(o)),o.flags|=65536,X(i)||u?o.key=a:o.key=t+i}n.push(o)}}}}var e="http://www.w3.org/1999/xlink",n="http://www.w3.org/XML/1998/namespace",N={"xlink:actuate":e,"xlink:arcrole":e,"xlink:href":e,"xlink:role":e,"xlink:show":e,"xlink:title":e,"xlink:type":e,"xml:base":n,"xml:lang":n,"xml:space":n};function i(e){return{onClick:e,onDblClick:e,onFocusIn:e,onFocusOut:e,onKeyDown:e,onKeyPress:e,onKeyUp:e,onMouseDown:e,onMouseMove:e,onMouseUp:e,onSubmit:e,onTouchEnd:e,onTouchMove:e,onTouchStart:e}}var u=i(0),c=i(null),P=i(true);function U(e,n,l){var t,r,o=l.$EV;n?(0===u[e]&&(c[e]=(t=e,r=function(e){var n="onClick"===t||"onDblClick"===t;if(n&&0!==e.button)e.stopPropagation();else{e.stopPropagation=T;var l={dom:document};Object.defineProperty(e,"currentTarget",{configurable:true,get:function(){return l.dom}}),function(e,n,l,t,r){for(var o=n;!X(o);){if(l&&o.disabled)return;var a=o.$EV;if(a){var i=a[t];if(i&&(r.dom=o,i.event?i.event(i.data,e):i(e),e.cancelBubble))return}o=o.parentNode}}(e,e.target,n,t,l)}},document.addEventListener(m(t),r),r)),o||(o=l.$EV=i(null)),o[e]||++u[e],o[e]=n):o&&o[e]&&(0==--u[e]&&(document.removeEventListener(m(e),c[e]),c[e]=null),o[e]=null)}function T(){this.cancelBubble=true,this.immediatePropagationStopped||this.stopImmediatePropagation()}function E(e,n,l){if(e[n]){var t=e[n];t.event?t.event(t.data,l):t(l)}else{var r=n.toLowerCase();e[r]&&e[r](l)}}function l(i,u){var e=function(e){var n=this.$V;if(n){var l=n.props||_,t=n.dom;if(p(i))E(l,i,e);else for(var r=0;r<i.length;++r)E(l,i[r],e);if(R(u)){var o=this.$V,a=o.props||_;u(a,t,false,o)}}};return Object.defineProperty(e,"wrapped",{configurable:false,enumerable:false,value:true,writable:false}),e}function Y(e,n,l){var t="$"+n,r=e[t];r&&r[1].wrapped||(r&&(e.removeEventListener.apply(e,r),e[t]=null),R(l)&&(e.addEventListener(n,l),e[t]=[n,l]))}function Z(e){return"checkbox"===e||"radio"===e}var ee=l("onInput",D),ne=l(["onClick","onChange"],D);function le(e){e.stopPropagation()}function D(e,n){var l=e.type,t=e.value,r=e.checked,o=e.multiple,a=e.defaultValue,i=!H(t);l&&l!==n.type&&n.setAttribute("type",l),H(o)||o===n.multiple||(n.multiple=o),H(a)||i||(n.defaultValue=a+""),Z(l)?(i&&(n.value=t),H(r)||(n.checked=r)):i&&n.value!==t?(n.defaultValue=t,n.value=t):H(r)||(n.checked=r)}le.wrapped=true;var te=l("onChange",I);function I(e,n,l,t){var r=Boolean(e.multiple);H(e.multiple)||r===n.multiple||(n.multiple=r);var o=e.selectedIndex;if(-1===o&&(n.selectedIndex=-1),1!==t.childFlags){var a=e.value;"number"==typeof o&&-1<o&&n.options[o]&&(a=n.options[o].value),l&&H(a)&&(a=e.defaultValue),function e(n,l){if("option"===n.type)u=l,s=(i=n).props||_,(c=i.dom).value=s.value,s.value===u||f(u)&&-1!==u.indexOf(s.value)?c.selected=true:H(u)&&H(s.selected)||(c.selected=s.selected||false);else{var t=n.children,r=n.flags;if(4&r)e(t.$LI,l);else if(8&r)e(t,l);else if(2===n.childFlags)e(t,l);else if(12&n.childFlags)for(var o=0,a=t.length;o<a;++o)e(t[o],l)}var i,u,s,c}(t,a)}}var re=l("onInput",A),oe=l("onChange");function A(e,n,l){var t=e.value,r=n.value;if(H(t)){if(l){var o=e.defaultValue;H(o)||o===r||(n.defaultValue=o,n.value=o)}}else r!==t&&(n.defaultValue=t,n.value=t)}function ae(e,n,l,t,r,o){64&e?D(t,l):256&e?I(t,l,r,n):128&e&&A(t,l,r),o&&(l.$V=n)}function ie(e){return e.type&&Z(e.type)?!H(e.checked):!H(e.value)}function B(e){e&&(R(e)?e(null):e.current&&(e.current=null))}function ue(e,n,l){var t,r;e&&(R(e)?(t=n,r=e,l.push(function(){r(t)})):void 0!==e.current&&(e.current=n))}function W(e,n){O(e),n&&x(e,n)}function O(e){var n,l=e.flags,t=e.children;if(481&l){n=e.ref;var r=e.props;B(n);var o=e.childFlags;if(!X(r))for(var a=Object.keys(r),i=0,u=a.length;i<u;i++){var s=a[i];P[s]&&U(s,null,e.dom)}12&o?j(t):2===o&&O(t)}else t&&(4&l?(R(t.componentWillUnmount)&&t.componentWillUnmount(),B(e.ref),t.$UN=true,O(t.$LI)):8&l?(!H(n=e.ref)&&R(n.onComponentWillUnmount)&&n.onComponentWillUnmount(q(e,true),e.props||_),O(t)):1024&l?W(t,e.ref):8192&l&&12&e.childFlags&&j(t))}function j(e){for(var n=0,l=e.length;n<l;++n)O(e[n])}function se(e){e.textContent=""}function ce(e,n,l){j(l),8192&n.flags?x(n,e):se(e)}function fe(u,e,n,l,t,r,o){switch(u){case"children":case"childrenType":case"className":case"defaultValue":case"key":case"multiple":case"ref":break;case"autoFocus":l.autofocus=!!n;break;case"allowfullscreen":case"autoplay":case"capture":case"checked":case"controls":case"default":case"disabled":case"hidden":case"indeterminate":case"loop":case"muted":case"novalidate":case"open":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"selected":l[u]=!!n;break;case"defaultChecked":case"value":case"volume":if(r&&"value"===u)break;var a=H(n)?"":n;l[u]!==a&&(l[u]=a);break;case"style":!function(e,n,l){if(H(n))l.removeAttribute("style");else{var t,r,o=l.style;if(p(n))o.cssText=n;else if(H(e)||p(e))for(t in n)r=n[t],o.setProperty(t,r);else{for(t in n)(r=n[t])!==e[t]&&o.setProperty(t,r);for(t in e)H(n[t])&&o.removeProperty(t)}}}(e,n,l);break;case"dangerouslySetInnerHTML":var i=e&&e.__html||"",s=n&&n.__html||"";i!==s&&(H(s)||(c=l,f=s,(d=document.createElement("i")).innerHTML=f,d.innerHTML===c.innerHTML)||(X(o)||(12&o.childFlags?j(o.children):2===o.childFlags&&O(o.children),o.children=null,o.childFlags=1),l.innerHTML=s));break;default:P[u]?k(e,n)||U(u,n,l):111===u.charCodeAt(0)&&110===u.charCodeAt(1)?function(e,n,l,t){var r,o,a=m(u);if(h(l)&&!X(l)){var i=l.event;k(n,l)||Y(t,a,(r=i,o=l,function(e){r(o.data,e)}))}else Y(t,a,l)}(0,e,n,l):H(n)?l.removeAttribute(u):t&&N[u]?l.setAttributeNS(N[u],u,n):l.setAttribute(u,n)}var c,f,d}function de(e,n,l){var t=pe(e.render(n,e.state,l)),r=l;return R(e.getChildContext)&&(r=$(l,e.getChildContext())),e.$CX=r,t}function pe(e){return C(e)?e=Q():d(e)?e=L(e,null):f(e)?e=a(e,0,null):16384&e.flags&&(e=J(e)),e}function ve(e,n,l,t,r,o){var a,i,u,s,c,f,d,p,v,h,m,g,k,y,b,C,$,w,F,x,S,L,M,V,N,P,U,T,E,D,I,A,B,W,O,j=e.flags|=16384;481&j?function(e,n,l,t,r,o){var a=e.flags,i=e.props,u=e.className,s=e.ref,c=e.children,f=e.childFlags;t=t||0<(32&a);var d,p=(d=e.type,t?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d));if(e.dom=p,H(u)||""===u||(t?p.setAttribute("class",u):p.className=u),16===f)z(p,c);else if(1!==f){var v=t&&"foreignObject"!==e.type;2===f?(16384&c.flags&&(e.children=c=J(c)),ve(c,p,l,v,null,o)):8!==f&&4!==f||me(c,p,l,v,null,o)}X(n)||K(n,p,r),X(i)||function(e,n,l,t,r){var o,a,i,u,s,c,f=false,d=0<(448&n);for(var p in d&&(f=ie(l))&&(a=t,i=l,c=s=u=void 0,64&(o=n)?(c=a,Z(i.type)?(Y(c,"change",ne),Y(c,"click",le)):Y(c,"input",ee)):256&o?Y(a,"change",te):128&o&&(s=i,Y(u=a,"input",re),s.onChange&&Y(u,"change",oe))),l)fe(p,null,l[p],t,r,f,null);d&&ae(n,e,t,l,true,f)}(e,a,i,p,t),ue(s,p,o)}(e,n,l,t,r,o):4&j?(F=n,x=l,S=t,L=r,M=o,ve((V=function(e,n,l,t,r,o){var a=new n(l,t),i=a.$N=Boolean(n.getDerivedStateFromProps||a.getSnapshotBeforeUpdate);if(a.$SVG=r,a.$L=o,(e.children=a).$BS=false,a.context=t,a.props===_&&(a.props=l),i)a.state=G(a,l,a.state);else if(R(a.componentWillMount)){a.$BR=true,a.componentWillMount();var u=a.$PS;if(!X(u)){var s=a.state;if(X(s))a.state=u;else for(var c in u)s[c]=u[c];a.$PS=null}a.$BR=false}return a.$LI=de(a,l,t),a}(w=e,w.type,w.props||_,x,S,M)).$LI,F,V.$CX,S,L,M),ue(w.ref,N=V,P=M),R(N.componentDidMount)&&P.push((U=N,function(){U.componentDidMount()}))):8&j?(i=n,u=l,s=t,c=r,f=o,d=(a=e).type,p=a.props||_,v=a.ref,h=pe(32768&a.flags?d(p,v,u):d(p,u)),ve(a.children=h,i,u,s,c,f),m=p,k=a,y=f,H(g=v)||(R(g.onComponentWillMount)&&g.onComponentWillMount(m),R(g.onComponentDidMount)&&y.push((b=g,C=k,$=m,function(){b.onComponentDidMount(q(C,true),$)})))):512&j||16&j?he(e,n,r):8192&j?(E=n,D=l,I=t,A=r,B=o,W=(T=e).children,12&(O=T.childFlags)&&0===W.length&&(O=T.childFlags=2,W=T.children=Q()),2===O?ve(W,E,A,I,A,B):me(W,E,D,I,A,B)):1024&j&&function(e,n,l,t,r){ve(e.children,e.ref,n,false,null,r);var o=Q();he(o,l,t),e.dom=o.dom}(e,l,n,r,o)}function he(e,n,l){var t=e.dom=document.createTextNode(e.children);X(n)||K(n,t,l)}function me(e,n,l,t,r,o){for(var a=0,i=e.length;a<i;++a){var u=e[a];16384&u.flags&&(e[a]=u=J(u)),ve(u,n,l,t,r,o)}}function ge(e,n,l,t,r,o,a){var i,u,s,c,f,d,p,v,h,m,g,k,y,b=n.flags|=16384;e.flags!==b||e.type!==n.type||e.key!==n.key||0!=(2048&b)?16384&e.flags?(u=n,s=l,c=t,f=r,d=a,O(i=e),0!=(u.flags&i.flags&2033)?(ve(u,null,c,f,null,d),p=s,v=u.dom,h=i.dom,p.replaceChild(v,h)):(ve(u,s,c,f,q(i,true),d),x(i,s))):ve(n,l,t,r,o,a):481&b?function(e,n,l,t,r,o){var a,i=e.dom,u=e.props,s=n.props,c=false,f=false;if(n.dom=i,t=t||0<(32&r),u!==s){var d=u||_;if((a=s||_)!==_)for(var p in(c=0<(448&r))&&(f=ie(a)),a){var v=d[p],h=a[p];v!==h&&fe(p,v,h,i,t,f,e)}if(d!==_)for(var m in d)H(a[m])&&!H(d[m])&&fe(m,d[m],null,i,t,f,e)}var g,k,y=n.children,b=n.className;e.className!==b&&(H(b)?i.removeAttribute("class"):t?i.setAttribute("class",b):i.className=b),4096&r?(k=y,(g=i).textContent!==k&&(g.textContent=k)):ke(e.childFlags,n.childFlags,e.children,y,i,l,t&&"foreignObject"!==n.type,null,e,o),c&&ae(r,n,i,a,false,f);var C=n.ref,$=e.ref;$!==C&&(B($),ue(C,i,o))}(e,n,t,r,b,a):4&b?function(e,n,l,t,r,o,a){var i=n.children=e.children;if(!X(i)){i.$L=a;var u=n.props||_,s=n.ref,c=e.ref,f=i.state;if(!i.$N){if(R(i.componentWillReceiveProps)){if(i.$BR=true,i.componentWillReceiveProps(u,t),i.$UN)return;i.$BR=false}X(i.$PS)||(f=$(f,i.$PS),i.$PS=null)}(function(e,n,l,t,r,o,a,i,u){var s,c,f,d,p=e.state,v=e.props,h=Boolean(e.$N),m=R(e.shouldComponentUpdate);if(h&&(n=G(e,l,n!==p?$(p,n):n)),!m||m&&e.shouldComponentUpdate(l,n,r)){!h&&R(e.componentWillUpdate)&&e.componentWillUpdate(l,n,r),e.props=l,e.state=n,e.context=r;var g=null,k=de(e,l,r);h&&R(e.getSnapshotBeforeUpdate)&&(g=e.getSnapshotBeforeUpdate(v,p)),ge(e.$LI,k,t,e.$CX,o,i,u),e.$LI=k,R(e.componentDidUpdate)&&(s=e,c=v,f=p,d=g,u.push(function(){s.componentDidUpdate(c,f,d)}))}else e.props=l,e.state=n,e.context=r})(i,f,u,l,t,r,0,o,a),c!==s&&(B(c),ue(s,i,a))}}(e,n,l,t,r,o,a):8&b?function(e,n,l,t,r,o,a){var i=true,u=n.props||_,s=n.ref,c=e.props,f=!H(s),d=e.children;if(f&&R(s.onComponentShouldUpdate)&&(i=s.onComponentShouldUpdate(c,u)),false!==i){f&&R(s.onComponentWillUpdate)&&s.onComponentWillUpdate(c,u);var p=pe(n.type(u,t));ge(d,p,l,t,r,o,a),n.children=p,f&&R(s.onComponentDidUpdate)&&s.onComponentDidUpdate(c,u)}else n.children=d}(e,n,l,t,r,o,a):16&b?(m=e,k=(g=n).children,y=m.dom,k!==m.children&&(y.nodeValue=k),g.dom=y):512&b?n.dom=e.dom:8192&b?function(e,n,l,t,r,o){var a=e.children,i=n.children,u=e.childFlags,s=n.childFlags,c=null;12&s&&0===i.length&&(s=n.childFlags=2,i=n.children=Q());var f=0!=(2&s);if(12&u){var d=a.length;(8&u&&8&s||f||!f&&i.length>d)&&(c=q(a[d-1],false).nextSibling)}ke(u,s,a,i,l,t,r,c,e,o)}(e,n,l,t,r,a):function(e,n,l,t){var r=e.ref,o=n.ref,a=n.children;if(ke(e.childFlags,n.childFlags,e.children,a,r,l,false,null,e,t),n.dom=e.dom,r!==o&&!C(a)){var i=a.dom;F(r,i),w(o,i)}}(e,n,t,a)}function ke(e,n,l,t,r,o,a,i,u,s){switch(e){case 2:switch(n){case 2:ge(l,t,r,o,a,i,s);break;case 1:W(l,r);break;case 16:O(l),z(r,t);break;default:m=t,g=r,k=o,y=a,b=s,O(h=l),me(m,g,k,y,q(h,true),b),x(h,g)}break;case 1:switch(n){case 2:ve(t,r,o,a,i,s);break;case 1:break;case 16:z(r,t);break;default:me(t,r,o,a,i,s)}break;case 16:switch(n){case 16:v=r,(d=l)!==(p=t)&&(""!==d?v.firstChild.nodeValue=p:z(v,p));break;case 2:se(r),ve(t,r,o,a,i,s);break;case 1:se(r);break;default:se(r),me(t,r,o,a,i,s)}break;default:switch(n){case 16:j(l),z(r,t);break;case 2:ce(r,u,l),ve(t,r,o,a,i,s);break;case 1:ce(r,u,l);break;default:var c=0|l.length,f=0|t.length;0===c?0<f&&me(t,r,o,a,i,s):0===f?ce(r,u,l):8===n&&8===e?function(e,n,l,t,r,o,a,i,u,s){var c,f,d=o-1,p=a-1,v=0,h=0,m=e[h],g=n[h];e:{for(;m.key===g.key;){if(16384&g.flags&&(n[h]=g=J(g)),ge(m,g,l,t,r,i,s),e[h]=g,d<++h||p<h)break e;m=e[h],g=n[h]}for(m=e[d],g=n[p];m.key===g.key;){if(16384&g.flags&&(n[p]=g=J(g)),ge(m,g,l,t,r,i,s),e[d]=g,p--,--d<h||p<h)break e;m=e[d],g=n[p]}}if(d<h){if(h<=p)for(f=(c=p+1)<a?q(n[c],true):i;h<=p;)16384&(g=n[h]).flags&&(n[h]=g=J(g)),++h,ve(g,l,t,r,f,s)}else if(p<h)for(;h<=d;)W(e[h++],l);else{for(var k=h,y=h,b=d-h+1,C=p-h+1,$=[];v++<=C;)$.push(0);var w=b===o,F=false,x=0,S=0;if(a<4||(b|C)<32)for(v=k;v<=d;++v)if(m=e[v],S<C){for(h=y;h<=p;h++)if(g=n[h],m.key===g.key){if($[h-y]=v+1,w)for(w=false;k<v;)W(e[k++],l);h<x?F=true:x=h,16384&g.flags&&(n[h]=g=J(g)),ge(m,g,l,t,r,i,s),++S;break}!w&&p<h&&W(m,l)}else w||W(m,l);else{var L={};for(v=y;v<=p;++v)L[n[v].key]=v;for(v=k;v<=d;++v)if(m=e[v],S<C)if(void 0!==(h=L[m.key])){if(w)for(w=false;k<v;)W(e[k++],l);g=n[h],$[h-y]=v+1,h<x?F=true:x=h,16384&g.flags&&(n[h]=g=J(g)),ge(m,g,l,t,r,i,s),++S}else w||W(m,l);else w||W(m,l)}if(w)ce(l,u,e),me(n,l,t,r,i,s);else if(F){var M=function(e){var n,l,t,r,o,a=e.slice(),i=[0],u=e.length;for(n=0;n<u;++n){var s=e[n];if(0!==s){if(e[l=i[i.length-1]]<s){a[n]=l,i.push(n);continue}for(t=0,r=i.length-1;t<r;)e[i[o=(t+r)/2|0]]<s?t=o+1:r=o;s<e[i[t]]&&(0<t&&(a[n]=i[t-1]),i[t]=n)}}for(r=i[(t=i.length)-1];0<t--;)r=a[i[t]=r];return i}($);for(h=M.length-1,v=C-1;0<=v;v--)0===$[v]?(16384&(g=n[x=v+y]).flags&&(n[x]=g=J(g)),ve(g,l,t,r,(c=x+1)<a?q(n[c],true):i,s)):h<0||v!==M[h]?V(g=n[x=v+y],l,(c=x+1)<a?q(n[c],true):i):h--}else if(S!==C)for(v=C-1;0<=v;v--)0===$[v]&&(16384&(g=n[x=v+y]).flags&&(n[x]=g=J(g)),ve(g,l,t,r,(c=x+1)<a?q(n[c],true):i,s))}}(l,t,r,o,a,c,f,i,u,s):function(e,n,l,t,r,o,a,i,u){for(var s,c,f=a<o?a:o,d=0;d<f;++d)s=n[d],c=e[d],16384&s.flags&&(s=n[d]=J(s)),ge(c,s,l,t,r,i,u),e[d]=s;if(o<a)for(d=f;d<a;++d)16384&(s=n[d]).flags&&(s=n[d]=J(s)),ve(s,l,t,r,i,u);else if(a<o)for(d=f;d<o;++d)W(e[d],l)}(l,t,r,o,a,c,f,i,s)}}var d,p,v,h,m,g,k,y,b}function ye(e,n,l,t){var r,o,a,i,u,s;void 0===l&&(l=null),void 0===t&&(t=_),r=e,a=l,i=t,u=[],H(s=(o=n).$V)?H(r)||(16384&r.flags&&(r=J(r)),ve(r,o,i,false,null,u),s=o.$V=r):H(r)?(W(s,o),o.$V=null):(16384&r.flags&&(r=J(r)),ge(s,r,o,i,false,null,u),s=o.$V=r),0<u.length&&function(e){for(var n;void 0!==(n=e.shift());)n()}(u),R(a)&&a(),R(g.renderComplete)&&g.renderComplete(s,o)}function r(e){console.log("ok",e)}"undefined"!=typeof document&&(document.body,Node.prototype.$EV=null,Node.prototype.$V=null),"undefined"!=typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout.bind(window);var be=[function(){for(var e=[],n=0;n<500;n++)e.push(s(1,"li",null,n,16,{onclick:r},null,null));return s(1,"ul",null,e,4,null,null,null)},function(){for(var e,n,l=[],t=0;t<500;t++)l.push(s(1,"li",null,t,16,{onclick:(e=t,n=r,R(n)?{data:e,event:n}:null)},null,null));return s(1,"ul",null,l,4,null,null,null)},function(){for(var e=[],n=0;n<500;n++)e.push(s(1,"li",null,n,16,{onClick:r},null,null));return s(1,"ul",null,e,4,null,null,null)},function(){for(var e=[],n=0;n<500;n++)e.push(s(1,"li",null,n,16,{onclick:function(){console.log("ok")}},null,null));return s(1,"ul",null,e,4,null,null,null)}],Ce=["hoistedNonSyntheticEvents","hoistedLinkEventNonSynthetic","hoistedSyntheticEvents","newFuncsNonSyntheticEvents"],$e=function(e){return e.reduce(function(e,n){return e+n},0)/e.length},we=function(e){return Math.min.apply(Math,e)},Fe=function(e){return Math.max.apply(Math,e)};function xe(e){for(var n=e.results,l=[],t=0;t<n.length;t++){var r=n[t],o=["mount","patch","unmount"];l.push(s(1,"div","test-name",r.name,0,null,null,null));for(var a=0;a<o.length;a++){var i=o[a],u=r[i];l.push(s(1,"div","test-part",i,0,null,null,null)),l.push(s(1,"div","test-result",[L("Avg: "),u.avg],0,null,null,null)),l.push(s(1,"div","test-result",[L("Min: "),u.min],0,null,null,null)),l.push(s(1,"div","test-result",[L("Max: "),u.max],0,null,null,null))}}return s(1,"div","results",l,4,null,null,null)}document.addEventListener("DOMContentLoaded",function(e){for(var r=document.querySelector("#App"),n=[],t=[],o=[],a=[],i=0,l=0;l<3;l++)for(var u=0;u<be.length;u++)ye(S(8,be[u]),r);function s(e){var n=performance.now();ye(S(8,be[i]),r);var l=performance.now();t.push(l-n),setTimeout(c,30,e)}function c(e){for(var n=performance.now(),l=0;l<7;l++)ye(S(8,be[i]),r);var t=performance.now();o.push(t-n),setTimeout(f,30,e)}function f(e){var n=performance.now();ye(null,r);var l=performance.now();a.push(l-n),setTimeout(e,30)}ye(null,r);var d=0;!function e(){d<10&&i<be.length?(d++,setTimeout(s,30,e)):i<be.length?(n.push({name:Ce[i],mount:{min:we(t),avg:$e(t),max:Fe(t)},patch:{min:we(o),avg:$e(o),max:Fe(o)},unmount:{min:we(a),avg:$e(a),max:Fe(a)}}),t=[],o=[],a=[],i++,d=0,e()):setTimeout(function(){ye(S(2,xe,{results:n},null,null),r)},1e3)}()})}();
