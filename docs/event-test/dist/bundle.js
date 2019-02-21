!function(){"use strict";var f=Array.isArray;function d(e){var n=typeof e;return"string"===n||"number"===n}function H(e){return v(e)||X(e)}function C(e){return X(e)||false===e||true===e||v(e)}function R(e){return"function"==typeof e}function p(e){return"string"==typeof e}function X(e){return null===e}function v(e){return void 0===e}function h(e){return"object"==typeof e}function w(e,n){var t={};if(e)for(var l in e)t[l]=e[l];if(n)for(var r in n)t[r]=n[r];return t}var _={};function m(e){return e.substr(2).toLowerCase()}function $(e,n){e.appendChild(n)}function K(e,n,t){X(t)?$(e,n):e.insertBefore(n,t)}function F(e,n){e.removeChild(n)}function q(e,n){for(var t,l;e;){if(2033&(t=e.flags))return e.dom;l=e.children,e=8192&t?2===e.childFlags?l:l[n?0:l.length-1]:4&t?l.$LI:l}return null}function x(e,n){var t=e.flags;if(2033&t)F(n,e.dom);else{var l=e.children;if(4&t)x(l.$LI,n);else if(8&t)x(l,n);else if(8192&t)if(2===e.childFlags)x(l,n);else for(var r=0,o=l.length;r<o;++r)x(l[r],n)}}function M(e,n,t){var l=e.flags;if(2033&l)K(n,e.dom,t);else{var r=e.children;if(4&l)M(r.$LI,n,t);else if(8&l)M(r,n,t);else if(8192&l)if(2===e.childFlags)M(r,n,t);else for(var o=0,a=r.length;o<a;++o)M(r[o],n,t)}}function G(e,n,t){return e.constructor.getDerivedStateFromProps?w(t,e.constructor.getDerivedStateFromProps(n,t)):t}var g={componentComparator:null,createVNode:null,renderComplete:null};function z(e,n){e.textContent=n}function y(e,n){return e&&n&&h(e)&&h(n)&&e.event===n.event&&e.data===n.data}var k="$";function b(e,n,t,l,r,o,a,i){this.childFlags=e,this.children=n,this.className=t,this.dom=null,this.flags=l,this.key=void 0===r?null:r,this.props=void 0===o?null:o,this.ref=void 0===a?null:a,this.type=i}function s(e,n,t,l,r,o,a,i){var u=void 0===r?1:r,s=new b(u,l,t,e,a,o,i,n),c=g.createVNode;return R(c)&&c(s),0===u&&function(e,n){var t,l=1;if(C(n))t=n;else if(d(n))l=16,t=n;else if(f(n)){for(var r=n.length,o=0;o<r;++o){var a=n[o];if(C(a)||f(a)){L(n,t=t||n.slice(0,o),o,"");break}if(d(a))(t=t||n.slice(0,o)).push(S(a,k+o));else{var i=a.key,u=0<(81920&a.flags),s=X(i),c=p(i)&&i[0]===k;u||s||c?(t=t||n.slice(0,o),(u||c)&&(a=J(a)),(s||c)&&(a.key=k+o),t.push(a)):t&&t.push(a),a.flags|=65536}}l=0===(t=t||n).length?1:8}else(t=n).flags|=65536,81920&n.flags&&(t=J(n)),l=2;e.children=t,e.childFlags=l}(s,s.children),s}function P(e,n,t,l,r){0!=(2&e)&&(n.prototype&&n.prototype.render?e=4:n.render?(e=32776,n=n.render):e=8);var o=n.defaultProps;if(!H(o))for(var a in t||(t={}),o)v(t[a])&&(t[a]=o[a]);if(0<(8&e)&&0==(32768&e)){var i=n.defaultHooks;if(!H(i))if(r)for(var u in i)v(r[u])&&(r[u]=i[u]);else r=i}var s=new b(1,null,null,e,l,t,r,n),c=g.createVNode;return R(c)&&c(s),s}function S(e,n){return new b(1,H(e)?"":e,null,16,n,null,null,null)}function a(e,n,t){var l=s(8192,8192,null,e,n,null,t,null);switch(l.childFlags){case 1:l.children=Q(),l.childFlags=2;break;case 16:l.children=[S(e)],l.childFlags=4}return l}function J(e){var n=-16385&e.flags,t=e.props;if(14&n&&!X(t)){var l=t;for(var r in t={},l)t[r]=l[r]}return 0==(8192&n)?new b(e.childFlags,e.children,e.className,n,e.key,t,e.ref,e.type):function(e){var n,t=e.children,l=e.childFlags;if(2===l)n=J(t);else if(12&l){n=[];for(var r=0,o=t.length;r<o;++r)n.push(J(t[r]))}return a(n,l,e.key)}(e)}function Q(){return S("",null)}function L(e,n,t,l){for(var r=e.length;t<r;t++){var o=e[t];if(!C(o)){var a=l+k+t;if(f(o))L(o,n,0,a);else{if(d(o))o=S(o,a);else{var i=o.key,u=p(i)&&i[0]===k;(81920&o.flags||u)&&(o=J(o)),o.flags|=65536,u?i.substring(0,l.length)!==l&&(o.key=l+i):X(i)?o.key=a:o.key=l+i}n.push(o)}}}}var e="http://www.w3.org/1999/xlink",n="http://www.w3.org/XML/1998/namespace",V={"xlink:actuate":e,"xlink:arcrole":e,"xlink:href":e,"xlink:role":e,"xlink:show":e,"xlink:title":e,"xlink:type":e,"xml:base":n,"xml:lang":n,"xml:space":n};function i(e){return{onClick:e,onDblClick:e,onFocusIn:e,onFocusOut:e,onKeyDown:e,onKeyPress:e,onKeyUp:e,onMouseDown:e,onMouseMove:e,onMouseUp:e,onSubmit:e,onTouchEnd:e,onTouchMove:e,onTouchStart:e}}var u=i(0),c=i(null),N=i(true);function U(e,n,t){var l,r,o=t.$EV;n?(0===u[e]&&(c[e]=(l=e,r=function(e){var n="onClick"===l||"onDblClick"===l;if(n&&0!==e.button)e.stopPropagation();else{e.isDefaultPrevented=A,e.isPropagationStopped=T,e.stopPropagation=I;var t={dom:document};Object.defineProperty(e,"currentTarget",{configurable:true,get:function(){return t.dom}}),function(e,n,t,l,r){for(var o=n;!X(o);){if(t&&o.disabled)return;var a=o.$EV;if(a){var i=a[l];if(i&&(r.dom=o,i.event?i.event(i.data,e):i(e),e.cancelBubble))return}o=o.parentNode}}(e,e.target,n,l,t)}},document.addEventListener(m(l),r),r)),o||(o=t.$EV=i(null)),o[e]||++u[e],o[e]=n):o&&o[e]&&(0==--u[e]&&(document.removeEventListener(m(e),c[e]),c[e]=null),o[e]=null)}function I(){this.cancelBubble=true,this.immediatePropagationStopped||this.stopImmediatePropagation()}function A(){return this.defaultPrevented}function T(){return this.cancelBubble}function D(e,n,t){if(e[n]){var l=e[n];l.event?l.event(l.data,t):l(t)}else{var r=n.toLowerCase();e[r]&&e[r](t)}}function t(i,u){var e=function(e){var n=this.$V;if(n){var t=n.props||_,l=n.dom;if(p(i))D(t,i,e);else for(var r=0;r<i.length;++r)D(t,i[r],e);if(R(u)){var o=this.$V,a=o.props||_;u(a,l,false,o)}}};return Object.defineProperty(e,"wrapped",{configurable:false,enumerable:false,value:true,writable:false}),e}function Y(e,n,t){var l="$"+n,r=e[l];r&&r[1].wrapped||(r&&(e.removeEventListener.apply(e,r),e[l]=null),R(t)&&(e.addEventListener(n,t),e[l]=[n,t]))}function Z(e){return"checkbox"===e||"radio"===e}var ee=t("onInput",E),ne=t(["onClick","onChange"],E);function te(e){e.stopPropagation()}function E(e,n){var t=e.type,l=e.value,r=e.checked,o=e.multiple,a=e.defaultValue,i=!H(l);t&&t!==n.type&&n.setAttribute("type",t),H(o)||o===n.multiple||(n.multiple=o),H(a)||i||(n.defaultValue=a+""),Z(t)?(i&&(n.value=l),H(r)||(n.checked=r)):i&&n.value!==l?(n.defaultValue=l,n.value=l):H(r)||(n.checked=r)}te.wrapped=true;var le=t("onChange",B);function B(e,n,t,l){var r=Boolean(e.multiple);H(e.multiple)||r===n.multiple||(n.multiple=r);var o=e.selectedIndex;if(-1===o&&(n.selectedIndex=-1),1!==l.childFlags){var a=e.value;"number"==typeof o&&-1<o&&n.options[o]&&(a=n.options[o].value),t&&H(a)&&(a=e.defaultValue),function e(n,t){if("option"===n.type)u=t,s=(i=n).props||_,(c=i.dom).value=s.value,s.value===u||f(u)&&-1!==u.indexOf(s.value)?c.selected=true:H(u)&&H(s.selected)||(c.selected=s.selected||false);else{var l=n.children,r=n.flags;if(4&r)e(l.$LI,t);else if(8&r)e(l,t);else if(2===n.childFlags)e(l,t);else if(12&n.childFlags)for(var o=0,a=l.length;o<a;++o)e(l[o],t)}var i,u,s,c}(l,a)}}var W,O,re=t("onInput",j),oe=t("onChange");function j(e,n,t){var l=e.value,r=n.value;if(H(l)){if(t){var o=e.defaultValue;H(o)||o===r||(n.defaultValue=o,n.value=o)}}else r!==l&&(n.defaultValue=l,n.value=l)}function ae(e,n,t,l,r,o){64&e?E(l,t):256&e?B(l,t,r,n):128&e&&j(l,t,r),o&&(t.$V=n)}function ie(e){return e.type&&Z(e.type)?!H(e.checked):!H(e.value)}function ue(e){e&&(R(e)?e(null):e.current&&(e.current=null))}function se(e,n,t){var l,r;e&&(R(e)?(l=n,r=e,t.push(function(){r(l)})):void 0!==e.current&&(e.current=n))}function ce(e,n){fe(e),n&&x(e,n)}function fe(e){var n,t=e.flags,l=e.children;if(481&t){n=e.ref;var r=e.props;ue(n);var o=e.childFlags;if(!X(r))for(var a=Object.keys(r),i=0,u=a.length;i<u;i++){var s=a[i];N[s]&&U(s,null,e.dom)}12&o?de(l):2===o&&fe(l)}else l&&(4&t?(R(l.componentWillUnmount)&&l.componentWillUnmount(),ue(e.ref),l.$UN=true,fe(l.$LI)):8&t?(!H(n=e.ref)&&R(n.onComponentWillUnmount)&&n.onComponentWillUnmount(q(e,true),e.props||_),fe(l)):1024&t?ce(l,e.ref):8192&t&&12&e.childFlags&&de(l))}function de(e){for(var n=0,t=e.length;n<t;++n)fe(e[n])}function pe(e){e.textContent=""}function ve(e,n,t){de(t),8192&n.flags?x(n,e):pe(e)}function he(u,e,n,t,l,r,o){switch(u){case"children":case"childrenType":case"className":case"defaultValue":case"key":case"multiple":case"ref":break;case"autoFocus":t.autofocus=!!n;break;case"allowfullscreen":case"autoplay":case"capture":case"checked":case"controls":case"default":case"disabled":case"hidden":case"indeterminate":case"loop":case"muted":case"novalidate":case"open":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"selected":t[u]=!!n;break;case"defaultChecked":case"value":case"volume":if(r&&"value"===u)break;var a=H(n)?"":n;t[u]!==a&&(t[u]=a);break;case"style":!function(e,n,t){if(H(n))t.removeAttribute("style");else{var l,r,o=t.style;if(p(n))o.cssText=n;else if(H(e)||p(e))for(l in n)r=n[l],o.setProperty(l,r);else{for(l in n)(r=n[l])!==e[l]&&o.setProperty(l,r);for(l in e)H(n[l])&&o.removeProperty(l)}}}(e,n,t);break;case"dangerouslySetInnerHTML":var i=e&&e.__html||"",s=n&&n.__html||"";i!==s&&(H(s)||(c=t,f=s,(d=document.createElement("i")).innerHTML=f,d.innerHTML===c.innerHTML)||(X(o)||(12&o.childFlags?de(o.children):2===o.childFlags&&fe(o.children),o.children=null,o.childFlags=1),t.innerHTML=s));break;default:N[u]?y(e,n)||U(u,n,t):111===u.charCodeAt(0)&&110===u.charCodeAt(1)?function(e,n,t,l){var r,o,a=m(u);if(h(t)&&!X(t)){var i=t.event;y(n,t)||Y(l,a,(r=i,o=t,function(e){r(o.data,e)}))}else Y(l,a,t)}(0,e,n,t):H(n)?t.removeAttribute(u):l&&V[u]?t.setAttributeNS(V[u],u,n):t.setAttribute(u,n)}var c,f,d}function me(e,n,t){var l=ge(e.render(n,e.state,t)),r=t;return R(e.getChildContext)&&(r=w(t,e.getChildContext())),e.$CX=r,l}function ge(e){return C(e)?e=Q():d(e)?e=S(e,null):f(e)?e=a(e,0,null):16384&e.flags&&(e=J(e)),e}function ye(e,n,t,l,r,o){var a,i,u,s,c,f,d,p,v,h,m,g,y,k,b,C,w,$,F,x,P,S,L,M,V,N,U,I,A,T,D,E,B,W,O,j=e.flags|=16384;481&j?function(e,n,t,l,r,o){var a=e.flags,i=e.props,u=e.className,s=e.ref,c=e.children,f=e.childFlags;l=l||0<(32&a);var d,p=(d=e.type,l?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d));if(e.dom=p,H(u)||""===u||(l?p.setAttribute("class",u):p.className=u),16===f)z(p,c);else if(1!==f){var v=l&&"foreignObject"!==e.type;2===f?(16384&c.flags&&(e.children=c=J(c)),ye(c,p,t,v,null,o)):8!==f&&4!==f||be(c,p,t,v,null,o)}X(n)||K(n,p,r),X(i)||function(e,n,t,l,r){var o,a,i,u,s,c,f=false,d=0<(448&n);for(var p in d&&(f=ie(t))&&(a=l,i=t,c=s=u=void 0,64&(o=n)?(c=a,Z(i.type)?(Y(c,"change",ne),Y(c,"click",te)):Y(c,"input",ee)):256&o?Y(a,"change",le):128&o&&(s=i,Y(u=a,"input",re),s.onChange&&Y(u,"change",oe))),t)he(p,null,t[p],l,r,f,null);d&&ae(n,e,l,t,true,f)}(e,a,i,p,l),se(s,p,o)}(e,n,t,l,r,o):4&j?(F=n,x=t,P=l,S=r,L=o,ye((M=function(e,n,t,l,r,o){var a=new n(t,l),i=a.$N=Boolean(n.getDerivedStateFromProps||a.getSnapshotBeforeUpdate);if(a.$SVG=r,a.$L=o,(e.children=a).$BS=false,a.context=l,a.props===_&&(a.props=t),i)a.state=G(a,t,a.state);else if(R(a.componentWillMount)){a.$BR=true,a.componentWillMount();var u=a.$PS;if(!X(u)){var s=a.state;if(X(s))a.state=u;else for(var c in u)s[c]=u[c];a.$PS=null}a.$BR=false}return a.$LI=me(a,t,l),a}($=e,$.type,$.props||_,x,P,L)).$LI,F,M.$CX,P,S,L),se($.ref,V=M,N=L),R(V.componentDidMount)&&N.push((U=V,function(){U.componentDidMount()}))):8&j?(i=n,u=t,s=l,c=r,f=o,d=(a=e).type,p=a.props||_,v=a.ref,h=ge(32768&a.flags?d(p,v,u):d(p,u)),ye(a.children=h,i,u,s,c,f),m=p,y=a,k=f,H(g=v)||(R(g.onComponentWillMount)&&g.onComponentWillMount(m),R(g.onComponentDidMount)&&k.push((b=g,C=y,w=m,function(){b.onComponentDidMount(q(C,true),w)})))):512&j||16&j?ke(e,n,r):8192&j?(A=n,T=t,D=l,E=r,B=o,W=(I=e).children,12&(O=I.childFlags)&&0===W.length&&(O=I.childFlags=2,W=I.children=Q()),2===O?ye(W,A,E,D,E,B):be(W,A,T,D,E,B)):1024&j&&function(e,n,t,l,r){ye(e.children,e.ref,n,false,null,r);var o=Q();ke(o,t,l),e.dom=o.dom}(e,t,n,r,o)}function ke(e,n,t){var l=e.dom=document.createTextNode(e.children);X(n)||K(n,l,t)}function be(e,n,t,l,r,o){for(var a=0,i=e.length;a<i;++a){var u=e[a];16384&u.flags&&(e[a]=u=J(u)),ye(u,n,t,l,r,o)}}function Ce(e,n,t,l,r,o,a){var i,u,s,c,f,d,p,v,h,m,g,y,k,b=n.flags|=16384;e.flags!==b||e.type!==n.type||e.key!==n.key||0!=(2048&b)?16384&e.flags?(u=n,s=t,c=l,f=r,d=a,fe(i=e),0!=(u.flags&i.flags&2033)?(ye(u,null,c,f,null,d),p=s,v=u.dom,h=i.dom,p.replaceChild(v,h)):(ye(u,s,c,f,q(i,true),d),x(i,s))):ye(n,t,l,r,o,a):481&b?function(e,n,t,l,r,o){var a,i=e.dom,u=e.props,s=n.props,c=false,f=false;if(n.dom=i,l=l||0<(32&r),u!==s){var d=u||_;if((a=s||_)!==_)for(var p in(c=0<(448&r))&&(f=ie(a)),a){var v=d[p],h=a[p];v!==h&&he(p,v,h,i,l,f,e)}if(d!==_)for(var m in d)H(a[m])&&!H(d[m])&&he(m,d[m],null,i,l,f,e)}var g,y,k=n.children,b=n.className;e.className!==b&&(H(b)?i.removeAttribute("class"):l?i.setAttribute("class",b):i.className=b),4096&r?(y=k,(g=i).textContent!==y&&(g.textContent=y)):we(e.childFlags,n.childFlags,e.children,k,i,t,l&&"foreignObject"!==n.type,null,e,o),c&&ae(r,n,i,a,false,f);var C=n.ref,w=e.ref;w!==C&&(ue(w),se(C,i,o))}(e,n,l,r,b,a):4&b?function(e,n,t,l,r,o,a){var i=n.children=e.children;if(!X(i)){i.$L=a;var u=n.props||_,s=n.ref,c=e.ref,f=i.state;if(!i.$N){if(R(i.componentWillReceiveProps)){if(i.$BR=true,i.componentWillReceiveProps(u,l),i.$UN)return;i.$BR=false}X(i.$PS)||(f=w(f,i.$PS),i.$PS=null)}(function(e,n,t,l,r,o,a,i,u){var s,c,f,d,p=e.state,v=e.props,h=Boolean(e.$N),m=R(e.shouldComponentUpdate);if(h&&(n=G(e,t,n!==p?w(p,n):n)),!m||m&&e.shouldComponentUpdate(t,n,r)){!h&&R(e.componentWillUpdate)&&e.componentWillUpdate(t,n,r),e.props=t,e.state=n,e.context=r;var g=null,y=me(e,t,r);h&&R(e.getSnapshotBeforeUpdate)&&(g=e.getSnapshotBeforeUpdate(v,p)),Ce(e.$LI,y,l,e.$CX,o,i,u),e.$LI=y,R(e.componentDidUpdate)&&(s=e,c=v,f=p,d=g,u.push(function(){s.componentDidUpdate(c,f,d)}))}else e.props=t,e.state=n,e.context=r})(i,f,u,t,l,r,0,o,a),c!==s&&(ue(c),se(s,i,a))}}(e,n,t,l,r,o,a):8&b?function(e,n,t,l,r,o,a){var i=true,u=n.props||_,s=n.ref,c=e.props,f=!H(s),d=e.children;if(f&&R(s.onComponentShouldUpdate)&&(i=s.onComponentShouldUpdate(c,u)),false!==i){f&&R(s.onComponentWillUpdate)&&s.onComponentWillUpdate(c,u);var p=n.type,v=ge(32768&n.flags?p(u,s,l):p(u,l));Ce(d,v,t,l,r,o,a),n.children=v,f&&R(s.onComponentDidUpdate)&&s.onComponentDidUpdate(c,u)}else n.children=d}(e,n,t,l,r,o,a):16&b?(m=e,y=(g=n).children,k=m.dom,y!==m.children&&(k.nodeValue=y),g.dom=k):512&b?n.dom=e.dom:8192&b?function(e,n,t,l,r,o){var a=e.children,i=n.children,u=e.childFlags,s=n.childFlags,c=null;12&s&&0===i.length&&(s=n.childFlags=2,i=n.children=Q());var f=0!=(2&s);if(12&u){var d=a.length;(8&u&&8&s||f||!f&&i.length>d)&&(c=q(a[d-1],false).nextSibling)}we(u,s,a,i,t,l,r,c,e,o)}(e,n,t,l,r,a):function(e,n,t,l){var r=e.ref,o=n.ref,a=n.children;if(we(e.childFlags,n.childFlags,e.children,a,r,t,false,null,e,l),n.dom=e.dom,r!==o&&!C(a)){var i=a.dom;F(r,i),$(o,i)}}(e,n,l,a)}function we(e,n,t,l,r,o,a,i,u,s){switch(e){case 2:switch(n){case 2:Ce(t,l,r,o,a,i,s);break;case 1:ce(t,r);break;case 16:fe(t),z(r,l);break;default:m=l,g=r,y=o,k=a,b=s,fe(h=t),be(m,g,y,k,q(h,true),b),x(h,g)}break;case 1:switch(n){case 2:ye(l,r,o,a,i,s);break;case 1:break;case 16:z(r,l);break;default:be(l,r,o,a,i,s)}break;case 16:switch(n){case 16:v=r,(d=t)!==(p=l)&&(""!==d?v.firstChild.nodeValue=p:z(v,p));break;case 2:pe(r),ye(l,r,o,a,i,s);break;case 1:pe(r);break;default:pe(r),be(l,r,o,a,i,s)}break;default:switch(n){case 16:de(t),z(r,l);break;case 2:ve(r,u,t),ye(l,r,o,a,i,s);break;case 1:ve(r,u,t);break;default:var c=0|t.length,f=0|l.length;0===c?0<f&&be(l,r,o,a,i,s):0===f?ve(r,u,t):8===n&&8===e?function(e,n,t,l,r,o,a,i,u,s){var c,f,d=o-1,p=a-1,v=0,h=0,m=e[h],g=n[h];e:{for(;m.key===g.key;){if(16384&g.flags&&(n[h]=g=J(g)),Ce(m,g,t,l,r,i,s),e[h]=g,d<++h||p<h)break e;m=e[h],g=n[h]}for(m=e[d],g=n[p];m.key===g.key;){if(16384&g.flags&&(n[p]=g=J(g)),Ce(m,g,t,l,r,i,s),e[d]=g,p--,--d<h||p<h)break e;m=e[d],g=n[p]}}if(d<h){if(h<=p)for(f=(c=p+1)<a?q(n[c],true):i;h<=p;)16384&(g=n[h]).flags&&(n[h]=g=J(g)),++h,ye(g,t,l,r,f,s)}else if(p<h)for(;h<=d;)ce(e[h++],t);else{var y=h,k=h,b=d-h+1,C=p-h+1,w=new Int32Array(C-v+1);v=C+2;var $=b===o,F=false,x=0,P=0;if(a<4||(b|C)<32)for(v=y;v<=d;++v)if(m=e[v],P<C){for(h=k;h<=p;h++)if(g=n[h],m.key===g.key){if(w[h-k]=v+1,$)for($=false;y<v;)ce(e[y++],t);h<x?F=true:x=h,16384&g.flags&&(n[h]=g=J(g)),Ce(m,g,t,l,r,i,s),++P;break}!$&&p<h&&ce(m,t)}else $||ce(m,t);else{var S={};for(v=k;v<=p;++v)S[n[v].key]=v;for(v=y;v<=d;++v)if(m=e[v],P<C)if(void 0!==(h=S[m.key])){if($)for($=false;y<v;)ce(e[y++],t);g=n[h],w[h-k]=v+1,h<x?F=true:x=h,16384&g.flags&&(n[h]=g=J(g)),Ce(m,g,t,l,r,i,s),++P}else $||ce(m,t);else $||ce(m,t)}if($)ve(t,u,e),be(n,t,l,r,i,s);else if(F){var L=function(e){var n=0,t=0,l=0,r=0,o=0,a=0,i=0,u=e.length;for($e<u&&(W=new Int32Array($e=u),O=new Int32Array(u));t<u;++t)if(0!==(n=e[t])){if(e[l=W[r]]<n){O[t]=l,W[++r]=t;continue}for(o=0,a=r;o<a;)e[W[i=o+a>>1]]<n?o=i+1:a=i;n<e[W[o]]&&(0<o&&(O[t]=W[o-1]),W[o]=t)}o=t=r+1;var s=new Int32Array(o);for(a=W[o-1];0<o--;)s[o]=a,a=O[a];for(;0<t--;)W[t]=0;return s}(w);for(h=L.length-1,v=C-1;0<=v;v--)0===w[v]?(16384&(g=n[x=v+k]).flags&&(n[x]=g=J(g)),ye(g,t,l,r,(c=x+1)<a?q(n[c],true):i,s)):h<0||v!==L[h]?M(g=n[x=v+k],t,(c=x+1)<a?q(n[c],true):i):h--}else if(P!==C)for(v=C-1;0<=v;v--)0===w[v]&&(16384&(g=n[x=v+k]).flags&&(n[x]=g=J(g)),ye(g,t,l,r,(c=x+1)<a?q(n[c],true):i,s))}}(t,l,r,o,a,c,f,i,u,s):function(e,n,t,l,r,o,a,i,u){for(var s,c,f=a<o?a:o,d=0;d<f;++d)s=n[d],c=e[d],16384&s.flags&&(s=n[d]=J(s)),Ce(c,s,t,l,r,i,u),e[d]=s;if(o<a)for(d=f;d<a;++d)16384&(s=n[d]).flags&&(s=n[d]=J(s)),ye(s,t,l,r,i,u);else if(a<o)for(d=f;d<o;++d)ce(e[d],t)}(t,l,r,o,a,c,f,i,s)}}var d,p,v,h,m,g,y,k,b}var $e=0;function Fe(e,n,t,l){var r,o,a,i,u,s;void 0===t&&(t=null),void 0===l&&(l=_),r=e,a=t,i=l,u=[],H(s=(o=n).$V)?H(r)||(16384&r.flags&&(r=J(r)),ye(r,o,i,false,null,u),s=o.$V=r):H(r)?(ce(s,o),o.$V=null):(16384&r.flags&&(r=J(r)),Ce(s,r,o,i,false,null,u),s=o.$V=r),0<u.length&&function(e){for(var n;void 0!==(n=e.shift());)n()}(u),R(a)&&a(),R(g.renderComplete)&&g.renderComplete(s,o)}function r(e){console.log("ok",e)}"undefined"!=typeof document&&(document.body,Node.prototype.$EV=null,Node.prototype.$V=null),"undefined"!=typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout.bind(window);var xe=[function(){for(var e=[],n=0;n<500;n++)e.push(s(1,"li",null,n,16,{onclick:r},null,null));return s(1,"ul",null,e,4,null,null,null)},function(){for(var e,n,t=[],l=0;l<500;l++)t.push(s(1,"li",null,l,16,{onclick:(e=l,n=r,R(n)?{data:e,event:n}:null)},null,null));return s(1,"ul",null,t,4,null,null,null)},function(){for(var e=[],n=0;n<500;n++)e.push(s(1,"li",null,n,16,{onClick:r},null,null));return s(1,"ul",null,e,4,null,null,null)},function(){for(var e=[],n=0;n<500;n++)e.push(s(1,"li",null,n,16,{onclick:function(){console.log("ok")}},null,null));return s(1,"ul",null,e,4,null,null,null)}],Pe=["hoistedNonSyntheticEvents","hoistedLinkEventNonSynthetic","hoistedSyntheticEvents","newFuncsNonSyntheticEvents"],Se=function(e){return e.reduce(function(e,n){return e+n},0)/e.length},Le=function(e){return Math.min.apply(Math,e)},Me=function(e){return Math.max.apply(Math,e)};function Ve(e){for(var n=e.results,t=[],l=0;l<n.length;l++){var r=n[l],o=["mount","patch","unmount"];t.push(s(1,"div","test-name",r.name,0,null,null,null));for(var a=0;a<o.length;a++){var i=o[a],u=r[i];t.push(s(1,"div","test-part",i,0,null,null,null)),t.push(s(1,"div","test-result",[S("Avg: "),u.avg],0,null,null,null)),t.push(s(1,"div","test-result",[S("Min: "),u.min],0,null,null,null)),t.push(s(1,"div","test-result",[S("Max: "),u.max],0,null,null,null))}}return s(1,"div","results",t,4,null,null,null)}document.addEventListener("DOMContentLoaded",function(e){for(var r=document.querySelector("#App"),n=[],l=[],o=[],a=[],i=0,t=0;t<3;t++)for(var u=0;u<xe.length;u++)Fe(P(8,xe[u]),r);function s(e){var n=performance.now();Fe(P(8,xe[i]),r);var t=performance.now();l.push(t-n),setTimeout(c,30,e)}function c(e){for(var n=performance.now(),t=0;t<7;t++)Fe(P(8,xe[i]),r);var l=performance.now();o.push(l-n),setTimeout(f,30,e)}function f(e){var n=performance.now();Fe(null,r);var t=performance.now();a.push(t-n),setTimeout(e,30)}Fe(null,r);var d=0;!function e(){d<10&&i<xe.length?(d++,setTimeout(s,30,e)):i<xe.length?(n.push({name:Pe[i],mount:{min:Le(l),avg:Se(l),max:Me(l)},patch:{min:Le(o),avg:Se(o),max:Me(o)},unmount:{min:Le(a),avg:Se(a),max:Me(a)}}),l=[],o=[],a=[],i++,d=0,e()):setTimeout(function(){Fe(P(2,Ve,{results:n},null,null),r)},1e3)}()})}();
