!function(){"use strict";var f=Array.isArray;function d(e){var n=typeof e;return"string"===n||"number"===n}function j(e){return v(e)||X(e)}function C(e){return X(e)||false===e||true===e||v(e)}function H(e){return"function"==typeof e}function p(e){return"string"==typeof e}function X(e){return null===e}function v(e){return void 0===e}function h(e){return"object"==typeof e}function $(e,n){var l={};if(e)for(var t in e)l[t]=e[t];if(n)for(var r in n)l[r]=n[r];return l}var _={};function m(e){return e.substr(2).toLowerCase()}function w(e,n){e.appendChild(n)}function K(e,n,l){X(l)?w(e,n):e.insertBefore(n,l)}function F(e,n){e.removeChild(n)}function q(e,n){for(var l,t;e;){if(2033&(l=e.flags))return e.dom;t=e.children,e=8192&l?2===e.childFlags?t:t[n?0:t.length-1]:4&l?t.$LI:t}return null}function S(e,n){var l=e.flags;if(2033&l)F(n,e.dom);else{var t=e.children;if(4&l)S(t.$LI,n);else if(8&l)S(t,n);else if(8192&l)if(2===e.childFlags)S(t,n);else for(var r=0,a=t.length;r<a;++r)S(t[r],n)}}function P(e,n,l){var t=e.flags;if(2033&t)K(n,e.dom,l);else{var r=e.children;if(4&t)P(r.$LI,n,l);else if(8&t)P(r,n,l);else if(8192&t)if(2===e.childFlags)P(r,n,l);else for(var a=0,o=r.length;a<o;++a)P(r[a],n,l)}}function z(e,n,l){return e.constructor.getDerivedStateFromProps?$(l,e.constructor.getDerivedStateFromProps(n,l)):l}var g={componentComparator:null,createVNode:null,renderComplete:null};function G(e,n){e.textContent=n}function b(e,n){return e&&n&&h(e)&&h(n)&&e.event===n.event&&e.data===n.data}var y="$";function k(e,n,l,t,r,a,o,i){this.childFlags=e,this.children=n,this.className=l,this.dom=null,this.flags=t,this.key=void 0===r?null:r,this.props=void 0===a?null:a,this.ref=void 0===o?null:o,this.type=i}function i(e,n,l,t,r,a,o,i){var u=void 0===r?1:r,c=new k(u,t,l,e,o,a,i,n),s=g.createVNode;return H(s)&&s(c),0===u&&function(e,n){var l,t=1;if(C(n))l=n;else if(d(n))t=16,l=n;else if(f(n)){for(var r=n.length,a=0;a<r;++a){var o=n[a];if(C(o)||f(o)){x(n,l=l||n.slice(0,a),a,"");break}if(d(o))(l=l||n.slice(0,a)).push(U(o,y+a));else{var i=o.key,u=0<(81920&o.flags),c=X(i),s=!c&&p(i)&&i[0]===y;u||c||s?(l=l||n.slice(0,a),(u||s)&&(o=J(o)),(c||s)&&(o.key=y+a),l.push(o)):l&&l.push(o),o.flags|=65536}}t=0===(l=l||n).length?1:8}else(l=n).flags|=65536,81920&n.flags&&(l=J(n)),t=2;e.children=l,e.childFlags=t}(c,c.children),c}function u(e,n,l,t,r){0!=(2&e)&&(n.prototype&&n.prototype.render?e=4:n.render?(e=32776,n=n.render):e=8);var a=n.defaultProps;if(!j(a))for(var o in l||(l={}),a)v(l[o])&&(l[o]=a[o]);if(0<(8&e)&&0==(32768&e)){var i=n.defaultHooks;if(!j(i))if(r)for(var u in i)v(r[u])&&(r[u]=i[u]);else r=i}var c=new k(1,null,null,e,t,l,r,n),s=g.createVNode;return H(s)&&s(c),c}function U(e,n){return new k(1,j(e)?"":e,null,16,n,null,null,null)}function o(e,n,l){var t=i(8192,8192,null,e,n,null,l,null);switch(t.childFlags){case 1:t.children=Q(),t.childFlags=2;break;case 16:t.children=[U(e)],t.childFlags=4}return t}function J(e){var n=-16385&e.flags,l=e.props;if(14&n&&!X(l)){var t=l;for(var r in l={},t)l[r]=t[r]}return 0==(8192&n)?new k(e.childFlags,e.children,e.className,n,e.key,l,e.ref,e.type):function(e){var n,l=e.children,t=e.childFlags;if(2===t)n=J(l);else if(12&t){n=[];for(var r=0,a=l.length;r<a;++r)n.push(J(l[r]))}return o(n,t,e.key)}(e)}function Q(){return U("",null)}function x(e,n,l,t){for(var r=e.length;l<r;l++){var a=e[l];if(!C(a)){var o=t+y+l;if(f(a))x(a,n,0,o);else{if(d(a))a=U(a,o);else{var i=a.key,u=p(i)&&i[0]===y;(81920&a.flags||u)&&(a=J(a)),a.flags|=65536,X(i)||u?a.key=o:a.key=t+i}n.push(a)}}}}var e="http://www.w3.org/1999/xlink",n="http://www.w3.org/XML/1998/namespace",L={"xlink:actuate":e,"xlink:arcrole":e,"xlink:href":e,"xlink:role":e,"xlink:show":e,"xlink:title":e,"xlink:type":e,"xml:base":n,"xml:lang":n,"xml:space":n};function c(e){return{onClick:e,onDblClick:e,onFocusIn:e,onFocusOut:e,onKeyDown:e,onKeyPress:e,onKeyUp:e,onMouseDown:e,onMouseMove:e,onMouseUp:e,onSubmit:e,onTouchEnd:e,onTouchMove:e,onTouchStart:e}}var s=c(0),V=c(null),N=c(true);function M(e,n,l){var t,r,a=l.$EV;n?(0===s[e]&&(V[e]=(t=e,r=function(e){var n="onClick"===t||"onDblClick"===t;if(n&&0!==e.button)e.stopPropagation();else{e.stopPropagation=T;var l={dom:document};Object.defineProperty(e,"currentTarget",{configurable:true,get:function(){return l.dom}}),function(e,n,l,t,r){for(var a=n;!X(a);){if(l&&a.disabled)return;var o=a.$EV;if(o){var i=o[t];if(i&&(r.dom=a,i.event?i.event(i.data,e):i(e),e.cancelBubble))return}a=a.parentNode}}(e,e.target,n,t,l)}},document.addEventListener(m(t),r),r)),a||(a=l.$EV=c(null)),a[e]||++s[e],a[e]=n):a&&a[e]&&(0==--s[e]&&(document.removeEventListener(m(e),V[e]),V[e]=null),a[e]=null)}function T(){this.cancelBubble=true,this.immediatePropagationStopped||this.stopImmediatePropagation()}function A(e,n,l){if(e[n]){var t=e[n];t.event?t.event(t.data,l):t(l)}else{var r=n.toLowerCase();e[r]&&e[r](l)}}function l(i,u){var e=function(e){var n=this.$V;if(n){var l=n.props||_,t=n.dom;if(p(i))A(l,i,e);else for(var r=0;r<i.length;++r)A(l,i[r],e);if(H(u)){var a=this.$V,o=a.props||_;u(o,t,false,a)}}};return Object.defineProperty(e,"wrapped",{configurable:false,enumerable:false,value:true,writable:false}),e}function Y(e,n,l){var t="$"+n,r=e[t];r&&r[1].wrapped||(r&&(e.removeEventListener.apply(e,r),e[t]=null),H(l)&&(e.addEventListener(n,l),e[t]=[n,l]))}function Z(e){return"checkbox"===e||"radio"===e}var ee=l("onInput",I),ne=l(["onClick","onChange"],I);function le(e){e.stopPropagation()}function I(e,n){var l=e.type,t=e.value,r=e.checked,a=e.multiple,o=e.defaultValue,i=!j(t);l&&l!==n.type&&n.setAttribute("type",l),j(a)||a===n.multiple||(n.multiple=a),j(o)||i||(n.defaultValue=o+""),Z(l)?(i&&(n.value=t),j(r)||(n.checked=r)):i&&n.value!==t?(n.defaultValue=t,n.value=t):j(r)||(n.checked=r)}le.wrapped=true;var te=l("onChange",D);function D(e,n,l,t){var r=Boolean(e.multiple);j(e.multiple)||r===n.multiple||(n.multiple=r);var a=e.selectedIndex;if(-1===a&&(n.selectedIndex=-1),1!==t.childFlags){var o=e.value;"number"==typeof a&&-1<a&&n.options[a]&&(o=n.options[a].value),l&&j(o)&&(o=e.defaultValue),function e(n,l){if("option"===n.type)u=l,c=(i=n).props||_,(s=i.dom).value=c.value,c.value===u||f(u)&&-1!==u.indexOf(c.value)?s.selected=true:j(u)&&j(c.selected)||(s.selected=c.selected||false);else{var t=n.children,r=n.flags;if(4&r)e(t.$LI,l);else if(8&r)e(t,l);else if(2===n.childFlags)e(t,l);else if(12&n.childFlags)for(var a=0,o=t.length;a<o;++a)e(t[a],l)}var i,u,c,s}(t,o)}}var re=l("onInput",B),ae=l("onChange");function B(e,n,l){var t=e.value,r=n.value;if(j(t)){if(l){var a=e.defaultValue;j(a)||a===r||(n.defaultValue=a,n.value=a)}}else r!==t&&(n.defaultValue=t,n.value=t)}function oe(e,n,l,t,r,a){64&e?I(t,l):256&e?D(t,l,r,n):128&e&&B(t,l,r),a&&(l.$V=n)}function ie(e){return e.type&&Z(e.type)?!j(e.checked):!j(e.value)}function W(e){e&&(H(e)?e(null):e.current&&(e.current=null))}function ue(e,n,l){var t,r;e&&(H(e)?(t=n,r=e,l.push(function(){r(t)})):void 0!==e.current&&(e.current=n))}function E(e,n){O(e),n&&S(e,n)}function O(e){var n,l=e.flags,t=e.children;if(481&l){n=e.ref;var r=e.props;W(n);var a=e.childFlags;if(!X(r))for(var o=Object.keys(r),i=0,u=o.length;i<u;i++){var c=o[i];N[c]&&M(c,null,e.dom)}12&a?R(t):2===a&&O(t)}else t&&(4&l?(H(t.componentWillUnmount)&&t.componentWillUnmount(),W(e.ref),t.$UN=true,O(t.$LI)):8&l?(!j(n=e.ref)&&H(n.onComponentWillUnmount)&&n.onComponentWillUnmount(q(e,true),e.props||_),O(t)):1024&l?E(t,e.ref):8192&l&&12&e.childFlags&&R(t))}function R(e){for(var n=0,l=e.length;n<l;++n)O(e[n])}function ce(e){e.textContent=""}function se(e,n,l){R(l),8192&n.flags?S(n,e):ce(e)}function fe(u,e,n,l,t,r,a){switch(u){case"children":case"childrenType":case"className":case"defaultValue":case"key":case"multiple":case"ref":break;case"autoFocus":l.autofocus=!!n;break;case"allowfullscreen":case"autoplay":case"capture":case"checked":case"controls":case"default":case"disabled":case"hidden":case"indeterminate":case"loop":case"muted":case"novalidate":case"open":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"selected":l[u]=!!n;break;case"defaultChecked":case"value":case"volume":if(r&&"value"===u)break;var o=j(n)?"":n;l[u]!==o&&(l[u]=o);break;case"style":!function(e,n,l){if(j(n))l.removeAttribute("style");else{var t,r,a=l.style;if(p(n))a.cssText=n;else if(j(e)||p(e))for(t in n)r=n[t],a.setProperty(t,r);else{for(t in n)(r=n[t])!==e[t]&&a.setProperty(t,r);for(t in e)j(n[t])&&a.removeProperty(t)}}}(e,n,l);break;case"dangerouslySetInnerHTML":var i=e&&e.__html||"",c=n&&n.__html||"";i!==c&&(j(c)||(s=l,f=c,(d=document.createElement("i")).innerHTML=f,d.innerHTML===s.innerHTML)||(X(a)||(12&a.childFlags?R(a.children):2===a.childFlags&&O(a.children),a.children=null,a.childFlags=1),l.innerHTML=c));break;default:N[u]?b(e,n)||M(u,n,l):111===u.charCodeAt(0)&&110===u.charCodeAt(1)?function(e,n,l,t){var r,a,o=m(u);if(h(l)&&!X(l)){var i=l.event;b(n,l)||Y(t,o,(r=i,a=l,function(e){r(a.data,e)}))}else Y(t,o,l)}(0,e,n,l):j(n)?l.removeAttribute(u):t&&L[u]?l.setAttributeNS(L[u],u,n):l.setAttribute(u,n)}var s,f,d}function de(e,n,l){var t=pe(e.render(n,e.state,l)),r=l;return H(e.getChildContext)&&(r=$(l,e.getChildContext())),e.$CX=r,t}function pe(e){return C(e)?e=Q():d(e)?e=U(e,null):f(e)?e=o(e,0,null):16384&e.flags&&(e=J(e)),e}function ve(e,n,l,t,r,a){var o,i,u,c,s,f,d,p,v,h,m,g,b,y,k,C,$,w,F,S,U,x,L,P,V,N,M,T,A,I,D,B,W,E,O,R=e.flags|=16384;481&R?function(e,n,l,t,r,a){var o=e.flags,i=e.props,u=e.className,c=e.ref,s=e.children,f=e.childFlags;t=t||0<(32&o);var d,p=(d=e.type,t?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d));if(e.dom=p,j(u)||""===u||(t?p.setAttribute("class",u):p.className=u),16===f)G(p,s);else if(1!==f){var v=t&&"foreignObject"!==e.type;2===f?(16384&s.flags&&(e.children=s=J(s)),ve(s,p,l,v,null,a)):8!==f&&4!==f||me(s,p,l,v,null,a)}X(n)||K(n,p,r),X(i)||function(e,n,l,t,r){var a,o,i,u,c,s,f=false,d=0<(448&n);for(var p in d&&(f=ie(l))&&(o=t,i=l,s=c=u=void 0,64&(a=n)?(s=o,Z(i.type)?(Y(s,"change",ne),Y(s,"click",le)):Y(s,"input",ee)):256&a?Y(o,"change",te):128&a&&(c=i,Y(u=o,"input",re),c.onChange&&Y(u,"change",ae))),l)fe(p,null,l[p],t,r,f,null);d&&oe(n,e,t,l,true,f)}(e,o,i,p,t),ue(c,p,a)}(e,n,l,t,r,a):4&R?(F=n,S=l,U=t,x=r,L=a,ve((P=function(e,n,l,t,r,a){var o=new n(l,t),i=o.$N=Boolean(n.getDerivedStateFromProps||o.getSnapshotBeforeUpdate);if(o.$SVG=r,o.$L=a,(e.children=o).$BS=false,o.context=t,o.props===_&&(o.props=l),i)o.state=z(o,l,o.state);else if(H(o.componentWillMount)){o.$BR=true,o.componentWillMount();var u=o.$PS;if(!X(u)){var c=o.state;if(X(c))o.state=u;else for(var s in u)c[s]=u[s];o.$PS=null}o.$BR=false}return o.$LI=de(o,l,t),o}(w=e,w.type,w.props||_,S,U,L)).$LI,F,P.$CX,U,x,L),ue(w.ref,V=P,N=L),H(V.componentDidMount)&&N.push((M=V,function(){M.componentDidMount()}))):8&R?(i=n,u=l,c=t,s=r,f=a,d=(o=e).type,p=o.props||_,v=o.ref,h=pe(32768&o.flags?d(p,v,u):d(p,u)),ve(o.children=h,i,u,c,s,f),m=p,b=o,y=f,j(g=v)||(H(g.onComponentWillMount)&&g.onComponentWillMount(m),H(g.onComponentDidMount)&&y.push((k=g,C=b,$=m,function(){k.onComponentDidMount(q(C,true),$)})))):512&R||16&R?he(e,n,r):8192&R?(A=n,I=l,D=t,B=r,W=a,E=(T=e).children,12&(O=T.childFlags)&&0===E.length&&(O=T.childFlags=2,E=T.children=Q()),2===O?ve(E,A,B,D,B,W):me(E,A,I,D,B,W)):1024&R&&function(e,n,l,t,r){ve(e.children,e.ref,n,false,null,r);var a=Q();he(a,l,t),e.dom=a.dom}(e,l,n,r,a)}function he(e,n,l){var t=e.dom=document.createTextNode(e.children);X(n)||K(n,t,l)}function me(e,n,l,t,r,a){for(var o=0,i=e.length;o<i;++o){var u=e[o];16384&u.flags&&(e[o]=u=J(u)),ve(u,n,l,t,r,a)}}function ge(e,n,l,t,r,a,o){var i,u,c,s,f,d,p,v,h,m,g,b,y,k=n.flags|=16384;e.flags!==k||e.type!==n.type||e.key!==n.key||0!=(2048&k)?16384&e.flags?(u=n,c=l,s=t,f=r,d=o,O(i=e),0!=(u.flags&i.flags&2033)?(ve(u,null,s,f,null,d),p=c,v=u.dom,h=i.dom,p.replaceChild(v,h)):(ve(u,c,s,f,q(i,true),d),S(i,c))):ve(n,l,t,r,a,o):481&k?function(e,n,l,t,r,a){var o,i=e.dom,u=e.props,c=n.props,s=false,f=false;if(n.dom=i,t=t||0<(32&r),u!==c){var d=u||_;if((o=c||_)!==_)for(var p in(s=0<(448&r))&&(f=ie(o)),o){var v=d[p],h=o[p];v!==h&&fe(p,v,h,i,t,f,e)}if(d!==_)for(var m in d)j(o[m])&&!j(d[m])&&fe(m,d[m],null,i,t,f,e)}var g,b,y=n.children,k=n.className;e.className!==k&&(j(k)?i.removeAttribute("class"):t?i.setAttribute("class",k):i.className=k),4096&r?(b=y,(g=i).textContent!==b&&(g.textContent=b)):be(e.childFlags,n.childFlags,e.children,y,i,l,t&&"foreignObject"!==n.type,null,e,a),s&&oe(r,n,i,o,false,f);var C=n.ref,$=e.ref;$!==C&&(W($),ue(C,i,a))}(e,n,t,r,k,o):4&k?function(e,n,l,t,r,a,o){var i=n.children=e.children;if(!X(i)){i.$L=o;var u=n.props||_,c=n.ref,s=e.ref,f=i.state;if(!i.$N){if(H(i.componentWillReceiveProps)){if(i.$BR=true,i.componentWillReceiveProps(u,t),i.$UN)return;i.$BR=false}X(i.$PS)||(f=$(f,i.$PS),i.$PS=null)}(function(e,n,l,t,r,a,o,i,u){var c,s,f,d,p=e.state,v=e.props,h=Boolean(e.$N),m=H(e.shouldComponentUpdate);if(h&&(n=z(e,l,n!==p?$(p,n):n)),!m||m&&e.shouldComponentUpdate(l,n,r)){!h&&H(e.componentWillUpdate)&&e.componentWillUpdate(l,n,r),e.props=l,e.state=n,e.context=r;var g=null,b=de(e,l,r);h&&H(e.getSnapshotBeforeUpdate)&&(g=e.getSnapshotBeforeUpdate(v,p)),ge(e.$LI,b,t,e.$CX,a,i,u),e.$LI=b,H(e.componentDidUpdate)&&(c=e,s=v,f=p,d=g,u.push(function(){c.componentDidUpdate(s,f,d)}))}else e.props=l,e.state=n,e.context=r})(i,f,u,l,t,r,0,a,o),s!==c&&(W(s),ue(c,i,o))}}(e,n,l,t,r,a,o):8&k?function(e,n,l,t,r,a,o){var i=true,u=n.props||_,c=n.ref,s=e.props,f=!j(c),d=e.children;if(f&&H(c.onComponentShouldUpdate)&&(i=c.onComponentShouldUpdate(s,u)),false!==i){f&&H(c.onComponentWillUpdate)&&c.onComponentWillUpdate(s,u);var p=pe(n.type(u,t));ge(d,p,l,t,r,a,o),n.children=p,f&&H(c.onComponentDidUpdate)&&c.onComponentDidUpdate(s,u)}else n.children=d}(e,n,l,t,r,a,o):16&k?(m=e,b=(g=n).children,y=m.dom,b!==m.children&&(y.nodeValue=b),g.dom=y):512&k?n.dom=e.dom:8192&k?function(e,n,l,t,r,a){var o=e.children,i=n.children,u=e.childFlags,c=n.childFlags,s=null;12&c&&0===i.length&&(c=n.childFlags=2,i=n.children=Q());var f=0!=(2&c);if(12&u){var d=o.length;(8&u&&8&c||f||!f&&i.length>d)&&(s=q(o[d-1],false).nextSibling)}be(u,c,o,i,l,t,r,s,e,a)}(e,n,l,t,r,o):function(e,n,l,t){var r=e.ref,a=n.ref,o=n.children;if(be(e.childFlags,n.childFlags,e.children,o,r,l,false,null,e,t),n.dom=e.dom,r!==a&&!C(o)){var i=o.dom;F(r,i),w(a,i)}}(e,n,t,o)}function be(e,n,l,t,r,a,o,i,u,c){switch(e){case 2:switch(n){case 2:ge(l,t,r,a,o,i,c);break;case 1:E(l,r);break;case 16:O(l),G(r,t);break;default:m=t,g=r,b=a,y=o,k=c,O(h=l),me(m,g,b,y,q(h,true),k),S(h,g)}break;case 1:switch(n){case 2:ve(t,r,a,o,i,c);break;case 1:break;case 16:G(r,t);break;default:me(t,r,a,o,i,c)}break;case 16:switch(n){case 16:v=r,(d=l)!==(p=t)&&(""!==d?v.firstChild.nodeValue=p:G(v,p));break;case 2:ce(r),ve(t,r,a,o,i,c);break;case 1:ce(r);break;default:ce(r),me(t,r,a,o,i,c)}break;default:switch(n){case 16:R(l),G(r,t);break;case 2:se(r,u,l),ve(t,r,a,o,i,c);break;case 1:se(r,u,l);break;default:var s=0|l.length,f=0|t.length;0===s?0<f&&me(t,r,a,o,i,c):0===f?se(r,u,l):8===n&&8===e?function(e,n,l,t,r,a,o,i,u,c){var s,f,d=a-1,p=o-1,v=0,h=0,m=e[h],g=n[h];e:{for(;m.key===g.key;){if(16384&g.flags&&(n[h]=g=J(g)),ge(m,g,l,t,r,i,c),e[h]=g,d<++h||p<h)break e;m=e[h],g=n[h]}for(m=e[d],g=n[p];m.key===g.key;){if(16384&g.flags&&(n[p]=g=J(g)),ge(m,g,l,t,r,i,c),e[d]=g,p--,--d<h||p<h)break e;m=e[d],g=n[p]}}if(d<h){if(h<=p)for(f=(s=p+1)<o?q(n[s],true):i;h<=p;)16384&(g=n[h]).flags&&(n[h]=g=J(g)),++h,ve(g,l,t,r,f,c)}else if(p<h)for(;h<=d;)E(e[h++],l);else{for(var b=h,y=h,k=d-h+1,C=p-h+1,$=[];v++<=C;)$.push(0);var w=k===a,F=false,S=0,U=0;if(o<4||(k|C)<32)for(v=b;v<=d;++v)if(m=e[v],U<C){for(h=y;h<=p;h++)if(g=n[h],m.key===g.key){if($[h-y]=v+1,w)for(w=false;b<v;)E(e[b++],l);h<S?F=true:S=h,16384&g.flags&&(n[h]=g=J(g)),ge(m,g,l,t,r,i,c),++U;break}!w&&p<h&&E(m,l)}else w||E(m,l);else{var x={};for(v=y;v<=p;++v)x[n[v].key]=v;for(v=b;v<=d;++v)if(m=e[v],U<C)if(void 0!==(h=x[m.key])){if(w)for(w=false;b<v;)E(e[b++],l);g=n[h],$[h-y]=v+1,h<S?F=true:S=h,16384&g.flags&&(n[h]=g=J(g)),ge(m,g,l,t,r,i,c),++U}else w||E(m,l);else w||E(m,l)}if(w)se(l,u,e),me(n,l,t,r,i,c);else if(F){var L=function(e){var n,l,t,r,a,o=e.slice(),i=[0],u=e.length;for(n=0;n<u;++n){var c=e[n];if(0!==c){if(e[l=i[i.length-1]]<c){o[n]=l,i.push(n);continue}for(t=0,r=i.length-1;t<r;)e[i[a=(t+r)/2|0]]<c?t=a+1:r=a;c<e[i[t]]&&(0<t&&(o[n]=i[t-1]),i[t]=n)}}for(r=i[(t=i.length)-1];0<t--;)r=o[i[t]=r];return i}($);for(h=L.length-1,v=C-1;0<=v;v--)0===$[v]?(16384&(g=n[S=v+y]).flags&&(n[S]=g=J(g)),ve(g,l,t,r,(s=S+1)<o?q(n[s],true):i,c)):h<0||v!==L[h]?P(g=n[S=v+y],l,(s=S+1)<o?q(n[s],true):i):h--}else if(U!==C)for(v=C-1;0<=v;v--)0===$[v]&&(16384&(g=n[S=v+y]).flags&&(n[S]=g=J(g)),ve(g,l,t,r,(s=S+1)<o?q(n[s],true):i,c))}}(l,t,r,a,o,s,f,i,u,c):function(e,n,l,t,r,a,o,i,u){for(var c,s,f=o<a?o:a,d=0;d<f;++d)c=n[d],s=e[d],16384&c.flags&&(c=n[d]=J(c)),ge(s,c,l,t,r,i,u),e[d]=c;if(a<o)for(d=f;d<o;++d)16384&(c=n[d]).flags&&(c=n[d]=J(c)),ve(c,l,t,r,i,u);else if(o<a)for(d=f;d<a;++d)E(e[d],l)}(l,t,r,a,o,s,f,i,c)}}var d,p,v,h,m,g,b,y,k}function r(e,n,l,t){var r,a,o,i,u,c;void 0===l&&(l=null),void 0===t&&(t=_),r=e,o=l,i=t,u=[],j(c=(a=n).$V)?j(r)||(16384&r.flags&&(r=J(r)),ve(r,a,i,false,null,u),c=a.$V=r):j(r)?(E(c,a),a.$V=null):(16384&r.flags&&(r=J(r)),ge(c,r,a,i,false,null,u),c=a.$V=r),0<u.length&&function(e){for(var n;void 0!==(n=e.shift());)n()}(u),H(o)&&o(),H(g.renderComplete)&&g.renderComplete(c,a)}function ye(e){return i(1,"li","TreeLeaf",e.children,0,null,null,null)}function ke(e,n){return e!==n}function Ce(e){for(var n=e.data,l=n.children.length,t=new Array(l),r=0;r<l;r++){var a=n.children[r],o=a.id;a.container?t[r]=u(2,Ce,{data:a},o,{onComponentShouldUpdate:ke}):t[r]=u(2,ye,{children:o},o,{onComponentShouldUpdate:ke})}return i(1,"ul","TreeNode",t,0,null,null,null)}function $e(e){var n=e.data,l=n.time%10,t="border-radius:"+l+"px;background:rgba(0,0,0,"+(.5+l/10)+")";return i(1,"div","AnimBox",null,1,{"data-id":n.id,style:t},null,null)}function a(e,n){console.log("Clicked",e),n.stopPropagation()}function we(e){var n,l,t=e.children;return i(1,"td","TableCell",[null,false,[t]],0,{onClick:(n=t,l=a,H(l)?{data:n,event:l}:null)},null,null)}function Fe(e){var n=e.data,l="TableRow";n.active&&(l="TableRow active");var t=n.props,r=t.length+1,a=new Array(r);a[0]=u(2,we,{children:"#"+n.id},null,{onComponentShouldUpdate:ke});for(var o=1;o<r;o++)a[o]=u(2,we,{children:t[o-1]},null,{onComponentShouldUpdate:ke});return i(1,"tr",l,[null,a,false],0,{"data-id":n.id},null,null)}"undefined"!=typeof document&&(document.body,Node.prototype.$EV=null,Node.prototype.$V=null),"undefined"!=typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout.bind(window),uibench.init("Inferno (normalization test)","7.0.5"),document.addEventListener("DOMContentLoaded",function(e){var t=document.querySelector("#App");uibench.run(function(e){var o,n,l;r(("table"===(l=(o=e).location)?n=function(e){for(var n=o.table.items,l=n.length,t=new Array(l),r=0;r<l;r++){var a=n[r];t[r]=u(2,Fe,{data:a,children:a},a.id,{onComponentShouldUpdate:ke})}return i(1,"table","Table",[[],t,[[]]],0,null,null,null)}():"anim"===l?n=function(e){for(var n=o.anim.items,l=n.length,t=new Array(l),r=0;r<l;r++){var a=n[r];t[r]=u(2,$e,{data:a},a.id,{onComponentShouldUpdate:ke})}return i(1,"div","Anim",t,0,null,null,null)}():"tree"===l&&(n=i(1,"div","Tree",u(2,Ce,{data:o.tree.root},null,{onComponentShouldUpdate:ke}),2,null,null,null)),i(1,"div","Main",n,0,null,null,null)),t)},function(e){r(i(1,"pre",null,JSON.stringify(e,null," "),0,null,null,null),t)})})}();
