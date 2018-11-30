!function(){"use strict";var f=Array.isArray;function d(e){var n=typeof e;return"string"===n||"number"===n}function H(e){return v(e)||X(e)}function C(e){return X(e)||false===e||true===e||v(e)}function j(e){return"function"==typeof e}function p(e){return"string"==typeof e}function X(e){return null===e}function v(e){return void 0===e}function w(e,n){var l={};if(e)for(var t in e)l[t]=e[t];if(n)for(var r in n)l[r]=n[r];return l}var _={};function $(e,n){e.appendChild(n)}function K(e,n,l){X(l)?$(e,n):e.insertBefore(n,l)}function F(e,n){e.removeChild(n)}function q(e,n){for(var l,t;e;){if(2033&(l=e.flags))return e.dom;t=e.children,e=8192&l?2===e.childFlags?t:t[n?0:t.length-1]:4&l?t.$LI:t}return null}function S(e,n){var l=e.flags;if(2033&l)F(n,e.dom);else{var t=e.children;if(4&l)S(t.$LI,n);else if(8&l)S(t,n);else if(8192&l)if(2===e.childFlags)S(t,n);else for(var r=0,a=t.length;r<a;++r)S(t[r],n)}}function V(e,n,l){var t=e.flags;if(2033&t)K(n,e.dom,l);else{var r=e.children;if(4&t)V(r.$LI,n,l);else if(8&t)V(r,n,l);else if(8192&t)if(2===e.childFlags)V(r,n,l);else for(var a=0,o=r.length;a<o;++a)V(r[a],n,l)}}function z(e,n,l){return e.constructor.getDerivedStateFromProps?w(l,e.constructor.getDerivedStateFromProps(n,l)):l}var h={componentComparator:null,createVNode:null,renderComplete:null},m="$";function g(e,n,l,t,r,a,o,i){this.childFlags=e,this.children=n,this.className=l,this.dom=null,this.flags=t,this.key=void 0===r?null:r,this.props=void 0===a?null:a,this.ref=void 0===o?null:o,this.type=i}function i(e,n,l,t,r,a,o,i){var u=void 0===r?1:r,s=new g(u,t,l,e,o,a,i,n),c=h.createVNode;return j(c)&&c(s),0===u&&function(e,n){var l,t=1;if(C(n))l=n;else if(d(n))t=16,l=n;else if(f(n)){for(var r=n.length,a=0;a<r;++a){var o=n[a];if(C(o)||f(o)){k(n,l=l||n.slice(0,a),a,"");break}if(d(o))(l=l||n.slice(0,a)).push(b(o,m+a));else{var i=o.key,u=0<(81920&o.flags),s=X(i),c=!s&&p(i)&&i[0]===m;u||s||c?(l=l||n.slice(0,a),(u||c)&&(o=G(o)),(s||c)&&(o.key=m+a),l.push(o)):l&&l.push(o),o.flags|=65536}}t=0===(l=l||n).length?1:8}else(l=n).flags|=65536,81920&n.flags&&(l=G(n)),t=2;e.children=l,e.childFlags=t}(s,s.children),s}function u(e,n,l,t,r){0!=(2&e)&&(n.prototype&&n.prototype.render?e=4:n.render?(e=32776,n=n.render):e=8);var a=n.defaultProps;if(!H(a))for(var o in l||(l={}),a)v(l[o])&&(l[o]=a[o]);if(0<(8&e)&&0==(32768&e)){var i=n.defaultHooks;if(!H(i))if(r)for(var u in i)v(r[u])&&(r[u]=i[u]);else r=i}var s=new g(1,null,null,e,t,l,r,n),c=h.createVNode;return j(c)&&c(s),s}function b(e,n){return new g(1,H(e)?"":e,null,16,n,null,null,null)}function o(e,n,l){var t=i(8192,8192,null,e,n,null,l,null);switch(t.childFlags){case 1:t.children=J(),t.childFlags=2;break;case 16:t.children=[b(e)],t.childFlags=4}return t}function G(e){var n=-81921&e.flags,l=e.props;if(14&n&&!X(l)){var t=l;for(var r in l={},t)l[r]=t[r]}return 0==(8192&n)?new g(e.childFlags,e.children,e.className,n,e.key,l,e.ref,e.type):function(e){var n,l=e.children,t=e.childFlags;if(2===t)n=G(l);else if(12&t){n=[];for(var r=0,a=l.length;r<a;++r)n.push(G(l[r]))}return o(n,t,e.key)}(e)}function J(){return b("",null)}function k(e,n,l,t){for(var r=e.length;l<r;l++){var a=e[l];if(!C(a)){var o=t+m+l;if(f(a))k(a,n,0,o);else{if(d(a))a=b(a,o);else{var i=a.key,u=p(i)&&i[0]===m;(81920&a.flags||u)&&(a=G(a)),a.flags|=65536,X(i)||u?a.key=o:a.key=t+i}n.push(a)}}}}var e="http://www.w3.org/1999/xlink",n="http://www.w3.org/XML/1998/namespace",y={"xlink:actuate":e,"xlink:arcrole":e,"xlink:href":e,"xlink:role":e,"xlink:show":e,"xlink:title":e,"xlink:type":e,"xml:base":n,"xml:lang":n,"xml:space":n};function s(e){return{onClick:e,onDblClick:e,onFocusIn:e,onFocusOut:e,onKeyDown:e,onKeyPress:e,onKeyUp:e,onMouseDown:e,onMouseMove:e,onMouseUp:e,onSubmit:e,onTouchEnd:e,onTouchMove:e,onTouchStart:e}}var c=s(0),U=s(null),x=s(true);function P(e,n,l){var t,r,a=l.$EV;n?(0===c[e]&&(U[e]=(t=e,r=function(e){var n="onClick"===t||"onDblClick"===t;if(n&&0!==e.button)e.stopPropagation();else{e.stopPropagation=N;var l={dom:document};Object.defineProperty(e,"currentTarget",{configurable:true,get:function(){return l.dom}}),function(e,n,l,t,r){for(var a=n;!X(a);){if(l&&a.disabled)return;var o=a.$EV;if(o){var i=o[t];if(i&&(r.dom=a,i.event?i.event(i.data,e):i(e),e.cancelBubble))return}a=a.parentNode}}(e,e.target,n,t,l)}},document.addEventListener(L(t),r),r)),a||(a=l.$EV=s(null)),a[e]||++c[e],a[e]=n):a&&a[e]&&(0==--c[e]&&(document.removeEventListener(L(e),U[e]),U[e]=null),a[e]=null)}function L(e){return e.substr(2).toLowerCase()}function N(){this.cancelBubble=true,this.immediatePropagationStopped||this.stopImmediatePropagation()}function M(e,n,l){if(e[n]){var t=e[n];t.event?t.event(t.data,l):t(l)}else{var r=n.toLowerCase();e[r]&&e[r](l)}}function l(i,u){var e=function(e){var n=this.$V;if(n){var l=n.props||_,t=n.dom;if(p(i))M(l,i,e);else for(var r=0;r<i.length;++r)M(l,i[r],e);if(j(u)){var a=this.$V,o=a.props||_;u(o,t,false,a)}}};return Object.defineProperty(e,"wrapped",{configurable:false,enumerable:false,value:true,writable:false}),e}function Q(e){return"checkbox"===e||"radio"===e}var Y=l("onInput",T),Z=l(["onClick","onChange"],T);function ee(e){e.stopPropagation()}function T(e,n){var l=e.type,t=e.value,r=e.checked,a=e.multiple,o=e.defaultValue,i=!H(t);l&&l!==n.type&&n.setAttribute("type",l),H(a)||a===n.multiple||(n.multiple=a),H(o)||i||(n.defaultValue=o+""),Q(l)?(i&&(n.value=t),H(r)||(n.checked=r)):i&&n.value!==t?(n.defaultValue=t,n.value=t):H(r)||(n.checked=r)}ee.wrapped=true;var ne=l("onChange",A);function A(e,n,l,t){var r=Boolean(e.multiple);if(H(e.multiple)||r===n.multiple||(n.multiple=r),1!==t.childFlags){var a=e.value;l&&H(a)&&(a=e.defaultValue),function e(n,l){if("option"===n.type)u=l,s=(i=n).props||_,(c=i.dom).value=s.value,s.value===u||f(u)&&-1!==u.indexOf(s.value)?c.selected=true:H(u)&&H(s.selected)||(c.selected=s.selected||false);else{var t=n.children,r=n.flags;if(4&r)e(t.$LI,l);else if(8&r)e(t,l);else if(2===n.childFlags)e(t,l);else if(12&n.childFlags)for(var a=0,o=t.length;a<o;++a)e(t[a],l)}var i,u,s,c}(t,a)}}var le=l("onInput",D),te=l("onChange");function D(e,n,l){var t=e.value,r=n.value;if(H(t)){if(l){var a=e.defaultValue;H(a)||a===r||(n.defaultValue=a,n.value=a)}}else r!==t&&(n.defaultValue=t,n.value=t)}function re(e,n,l,t,r,a){64&e?T(t,l):256&e?A(t,l,r,n):128&e&&D(t,l,r),a&&(l.$V=n)}function ae(e){return e.type&&Q(e.type)?!H(e.checked):!H(e.value)}function B(e){e&&(j(e)?e(null):e.current&&(e.current=null))}function oe(e,n,l){var t,r;e&&(j(e)?(t=n,r=e,l.push(function(){r(t)})):void 0!==e.current&&(e.current=n))}function I(e,n){W(e),n&&S(e,n)}function W(e){var n,l=e.flags,t=e.children;if(481&l){n=e.ref;var r=e.props;B(n);var a=e.childFlags;if(!X(r))for(var o=Object.keys(r),i=0,u=o.length;i<u;i++){var s=o[i];x[s]&&P(s,null,e.dom)}12&a?E(t):2===a&&W(t)}else t&&(4&l?(j(t.componentWillUnmount)&&t.componentWillUnmount(),B(e.ref),t.$UN=true,W(t.$LI)):8&l?(!H(n=e.ref)&&j(n.onComponentWillUnmount)&&n.onComponentWillUnmount(q(e,true),e.props||_),W(t)):1024&l?I(t,e.ref):8192&l&&12&e.childFlags&&E(t))}function E(e){for(var n=0,l=e.length;n<l;++n)W(e[n])}function O(e){e.textContent=""}function R(e,n,l){E(l),8192&n.flags?S(n,e):O(e)}function ie(u,e,n,l,t,r,a){switch(u){case"children":case"childrenType":case"className":case"defaultValue":case"key":case"multiple":case"ref":break;case"autoFocus":l.autofocus=!!n;break;case"allowfullscreen":case"autoplay":case"capture":case"checked":case"controls":case"default":case"disabled":case"hidden":case"indeterminate":case"loop":case"muted":case"novalidate":case"open":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"selected":l[u]=!!n;break;case"defaultChecked":case"value":case"volume":if(r&&"value"===u)break;var o=H(n)?"":n;l[u]!==o&&(l[u]=o);break;case"style":!function(e,n,l){if(H(n))l.removeAttribute("style");else{var t,r,a=l.style;if(p(n))a.cssText=n;else if(H(e)||p(e))for(t in n)r=n[t],a.setProperty(t,r);else{for(t in n)(r=n[t])!==e[t]&&a.setProperty(t,r);for(t in e)H(n[t])&&a.removeProperty(t)}}}(e,n,l);break;case"dangerouslySetInnerHTML":var i=e&&e.__html||"",s=n&&n.__html||"";i!==s&&(H(s)||(c=l,f=s,(d=document.createElement("i")).innerHTML=f,d.innerHTML===c.innerHTML)||(X(a)||(12&a.childFlags?E(a.children):2===a.childFlags&&W(a.children),a.children=null,a.childFlags=1),l.innerHTML=s));break;default:x[u]?e&&n&&!j(e)&&!j(n)&&e.event===n.event&&e.data===n.data||P(u,n,l):111===u.charCodeAt(0)&&110===u.charCodeAt(1)?function(e,n,l){var t,r,a=u.toLowerCase();if(j(n)||H(n)){var o=l[a];o&&o.wrapped||(l[a]=n)}else{var i=n.event;j(i)&&(l[a]=(t=i,r=n,function(e){t(r.data,e)}))}}(0,n,l):H(n)?l.removeAttribute(u):t&&y[u]?l.setAttributeNS(y[u],u,n):l.setAttribute(u,n)}var c,f,d}function ue(e,n,l){var t=se(e.render(n,e.state,l)),r=l;return j(e.getChildContext)&&(r=w(l,e.getChildContext())),e.$CX=r,t}function se(e){return C(e)?e=J():d(e)?e=b(e,null):f(e)?e=o(e,0,null):16384&e.flags&&(e=G(e)),e}function ce(e,n,l,t,r,a){var o,i,u,s,c,f,d,p,v,h,m,g,b,k,y,C,w,$,F,S,U,x,P,V,L,N,M,T,A,D,B,I,W,E,O,R=e.flags|=16384;481&R?function(e,n,l,t,r,a){var o=e.flags,i=e.props,u=e.className,s=e.ref,c=e.children,f=e.childFlags;t=t||0<(32&o);var d,p=(d=e.type,t?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d));if(e.dom=p,H(u)||""===u||(t?p.setAttribute("class",u):p.className=u),16===f)de(p,c);else if(1!==f){var v=t&&"foreignObject"!==e.type;2===f?(16384&c.flags&&(e.children=c=G(c)),ce(c,p,l,v,null,a)):8!==f&&4!==f||pe(c,p,l,v,null,a)}X(n)||K(n,p,r),X(i)||function(e,n,l,t,r){var a,o,i,u,s,c,f=false,d=0<(448&n);for(var p in d&&(f=ae(l))&&(o=t,i=l,c=s=u=void 0,64&(a=n)?(c=o,Q(i.type)?(c.onchange=Z,c.onclick=ee):c.oninput=Y):256&a?o.onchange=ne:128&a&&(s=i,(u=o).oninput=le,s.onChange&&(u.onchange=te))),l)ie(p,null,l[p],t,r,f,null);d&&re(n,e,t,l,true,f)}(e,o,i,p,t),oe(s,p,a)}(e,n,l,t,r,a):4&R?(F=n,S=l,U=t,x=r,P=a,ce((V=function(e,n,l,t,r,a){var o=new n(l,t),i=o.$N=Boolean(n.getDerivedStateFromProps||o.getSnapshotBeforeUpdate);if(o.$SVG=r,o.$L=a,(e.children=o).$BS=false,o.context=t,o.props===_&&(o.props=l),i)o.state=z(o,l,o.state);else if(j(o.componentWillMount)){o.$BR=true,o.componentWillMount();var u=o.$PS;if(!X(u)){var s=o.state;if(X(s))o.state=u;else for(var c in u)s[c]=u[c];o.$PS=null}o.$BR=false}return o.$LI=ue(o,l,t),o}($=e,$.type,$.props||_,S,U,P)).$LI,F,V.$CX,U,x,P),oe($.ref,L=V,N=P),j(L.componentDidMount)&&N.push((M=L,function(){M.componentDidMount()}))):8&R?(i=n,u=l,s=t,c=r,f=a,d=(o=e).type,p=o.props||_,v=o.ref,h=se(32768&o.flags?d(p,v,u):d(p,u)),ce(o.children=h,i,u,s,c,f),m=p,b=o,k=f,H(g=v)||(j(g.onComponentWillMount)&&g.onComponentWillMount(m),j(g.onComponentDidMount)&&k.push((y=g,C=b,w=m,function(){y.onComponentDidMount(q(C,true),w)})))):512&R||16&R?fe(e,n,r):8192&R?(A=n,D=l,B=t,I=r,W=a,E=(T=e).children,12&(O=T.childFlags)&&0===E.length&&(O=T.childFlags=2,E=T.children=J()),2===O?ce(E,A,I,B,I,W):pe(E,A,D,B,I,W)):1024&R&&function(e,n,l,t,r){ce(e.children,e.ref,n,false,null,r);var a=J();fe(a,l,t),e.dom=a.dom}(e,l,n,r,a)}function fe(e,n,l){var t=e.dom=document.createTextNode(e.children);X(n)||K(n,t,l)}function de(e,n){e.textContent=n}function pe(e,n,l,t,r,a){for(var o=0,i=e.length;o<i;++o){var u=e[o];16384&u.flags&&(e[o]=u=G(u)),ce(u,n,l,t,r,a)}}function ve(e,n,l,t,r,a,o){var i,u,s,c,f,d,p,v,h,m,g,b,k,y=n.flags|=16384;e.flags!==y||e.type!==n.type||e.key!==n.key||0!=(2048&y)?16384&e.flags?(u=n,s=l,c=t,f=r,d=o,W(i=e),0!=(u.flags&i.flags&2033)?(ce(u,null,c,f,null,d),p=s,v=u.dom,h=i.dom,p.replaceChild(v,h)):(ce(u,s,c,f,q(i,true),d),S(i,s))):ce(n,l,t,r,a,o):481&y?function(e,n,l,t,r,a){var o,i=e.dom,u=e.props,s=n.props,c=false,f=false;if(n.dom=i,t=t||0<(32&r),u!==s){var d=u||_;if((o=s||_)!==_)for(var p in(c=0<(448&r))&&(f=ae(o)),o){var v=d[p],h=o[p];v!==h&&ie(p,v,h,i,t,f,e)}if(d!==_)for(var m in d)H(o[m])&&!H(d[m])&&ie(m,d[m],null,i,t,f,e)}var g,b,k=n.children,y=n.className;e.className!==y&&(H(y)?i.removeAttribute("class"):t?i.setAttribute("class",y):i.className=y),4096&r?(b=k,(g=i).textContent!==b&&(g.textContent=b)):he(e.childFlags,n.childFlags,e.children,k,i,l,t&&"foreignObject"!==n.type,null,e,a),c&&re(r,n,i,o,false,f);var C=n.ref,w=e.ref;w!==C&&(B(w),oe(C,i,a))}(e,n,t,r,y,o):4&y?function(e,n,l,t,r,a,o){var i=n.children=e.children;if(!X(i)){i.$L=o;var u=n.props||_,s=n.ref,c=e.ref,f=i.state;if(!i.$N){if(j(i.componentWillReceiveProps)){if(i.$BR=true,i.componentWillReceiveProps(u,t),i.$UN)return;i.$BR=false}X(i.$PS)||(f=w(f,i.$PS),i.$PS=null)}(function(e,n,l,t,r,a,o,i,u){var s,c,f,d,p=e.state,v=e.props,h=Boolean(e.$N),m=j(e.shouldComponentUpdate);if(h&&(n=z(e,l,n!==p?w(p,n):n)),!m||m&&e.shouldComponentUpdate(l,n,r)){!h&&j(e.componentWillUpdate)&&e.componentWillUpdate(l,n,r),e.props=l,e.state=n,e.context=r;var g=null,b=ue(e,l,r);h&&j(e.getSnapshotBeforeUpdate)&&(g=e.getSnapshotBeforeUpdate(v,p)),ve(e.$LI,b,t,e.$CX,a,i,u),e.$LI=b,j(e.componentDidUpdate)&&(s=e,c=v,f=p,d=g,u.push(function(){s.componentDidUpdate(c,f,d)}))}else e.props=l,e.state=n,e.context=r})(i,f,u,l,t,r,0,a,o),c!==s&&(B(c),oe(s,i,o))}}(e,n,l,t,r,a,o):8&y?function(e,n,l,t,r,a,o){var i=true,u=n.props||_,s=n.ref,c=e.props,f=!H(s),d=e.children;if(f&&j(s.onComponentShouldUpdate)&&(i=s.onComponentShouldUpdate(c,u)),false!==i){f&&j(s.onComponentWillUpdate)&&s.onComponentWillUpdate(c,u);var p=se(n.type(u,t));ve(d,p,l,t,r,a,o),n.children=p,f&&j(s.onComponentDidUpdate)&&s.onComponentDidUpdate(c,u)}else n.children=d}(e,n,l,t,r,a,o):16&y?(m=e,b=(g=n).children,k=m.dom,b!==m.children&&(k.nodeValue=b),g.dom=k):512&y?n.dom=e.dom:8192&y?function(e,n,l,t,r,a){var o=e.children,i=n.children,u=e.childFlags,s=n.childFlags,c=null;12&s&&0===i.length&&(s=n.childFlags=2,i=n.children=J());var f=0!=(2&s);if(12&u){var d=o.length;(8&u&&8&s||f||!f&&i.length>d)&&(c=q(o[d-1],false).nextSibling)}he(u,s,o,i,l,t,r,c,e,a)}(e,n,l,t,r,o):function(e,n,l,t){var r=e.ref,a=n.ref,o=n.children;if(he(e.childFlags,n.childFlags,e.children,o,r,l,false,null,e,t),n.dom=e.dom,r!==a&&!C(o)){var i=o.dom;F(r,i),$(a,i)}}(e,n,t,o)}function he(e,n,l,t,r,a,o,i,u,s){switch(e){case 2:switch(n){case 2:ve(l,t,r,a,o,i,s);break;case 1:I(l,r);break;case 16:W(l),de(r,t);break;default:m=t,g=r,b=a,k=o,y=s,W(h=l),pe(m,g,b,k,q(h,true),y),S(h,g)}break;case 1:switch(n){case 2:ce(t,r,a,o,i,s);break;case 1:break;case 16:de(r,t);break;default:pe(t,r,a,o,i,s)}break;case 16:switch(n){case 16:v=r,(d=l)!==(p=t)&&(""!==d?v.firstChild.nodeValue=p:v.textContent=p);break;case 2:O(r),ce(t,r,a,o,i,s);break;case 1:O(r);break;default:O(r),pe(t,r,a,o,i,s)}break;default:switch(n){case 16:E(l),de(r,t);break;case 2:R(r,u,l),ce(t,r,a,o,i,s);break;case 1:R(r,u,l);break;default:var c=0|l.length,f=0|t.length;0===c?0<f&&pe(t,r,a,o,i,s):0===f?R(r,u,l):8===n&&8===e?function(e,n,l,t,r,a,o,i,u,s){var c,f,d=a-1,p=o-1,v=0,h=0,m=e[h],g=n[h];e:{for(;m.key===g.key;){if(16384&g.flags&&(n[h]=g=G(g)),ve(m,g,l,t,r,i,s),e[h]=g,d<++h||p<h)break e;m=e[h],g=n[h]}for(m=e[d],g=n[p];m.key===g.key;){if(16384&g.flags&&(n[p]=g=G(g)),ve(m,g,l,t,r,i,s),e[d]=g,p--,--d<h||p<h)break e;m=e[d],g=n[p]}}if(d<h){if(h<=p)for(f=(c=p+1)<o?q(n[c],true):i;h<=p;)16384&(g=n[h]).flags&&(n[h]=g=G(g)),++h,ce(g,l,t,r,f,s)}else if(p<h)for(;h<=d;)I(e[h++],l);else{for(var b=h,k=h,y=d-h+1,C=p-h+1,w=[];v++<=C;)w.push(0);var $=y===a,F=false,S=0,U=0;if(o<4||(y|C)<32)for(v=b;v<=d;++v)if(m=e[v],U<C){for(h=k;h<=p;h++)if(g=n[h],m.key===g.key){if(w[h-k]=v+1,$)for($=false;b<v;)I(e[b++],l);h<S?F=true:S=h,16384&g.flags&&(n[h]=g=G(g)),ve(m,g,l,t,r,i,s),++U;break}!$&&p<h&&I(m,l)}else $||I(m,l);else{var x={};for(v=k;v<=p;++v)x[n[v].key]=v;for(v=b;v<=d;++v)if(m=e[v],U<C)if(void 0!==(h=x[m.key])){if($)for($=false;b<v;)I(e[b++],l);g=n[h],w[h-k]=v+1,h<S?F=true:S=h,16384&g.flags&&(n[h]=g=G(g)),ve(m,g,l,t,r,i,s),++U}else $||I(m,l);else $||I(m,l)}if($)R(l,u,e),pe(n,l,t,r,i,s);else if(F){var P=function(e){var n,l,t,r,a,o=e.slice(),i=[0],u=e.length;for(n=0;n<u;++n){var s=e[n];if(0!==s){if(e[l=i[i.length-1]]<s){o[n]=l,i.push(n);continue}for(t=0,r=i.length-1;t<r;)e[i[a=(t+r)/2|0]]<s?t=a+1:r=a;s<e[i[t]]&&(0<t&&(o[n]=i[t-1]),i[t]=n)}}for(r=i[(t=i.length)-1];0<t--;)r=o[i[t]=r];return i}(w);for(h=P.length-1,v=C-1;0<=v;v--)0===w[v]?(16384&(g=n[S=v+k]).flags&&(n[S]=g=G(g)),ce(g,l,t,r,(c=S+1)<o?q(n[c],true):i,s)):h<0||v!==P[h]?V(g=n[S=v+k],l,(c=S+1)<o?q(n[c],true):i):h--}else if(U!==C)for(v=C-1;0<=v;v--)0===w[v]&&(16384&(g=n[S=v+k]).flags&&(n[S]=g=G(g)),ce(g,l,t,r,(c=S+1)<o?q(n[c],true):i,s))}}(l,t,r,a,o,c,f,i,u,s):function(e,n,l,t,r,a,o,i,u){for(var s,c,f=o<a?o:a,d=0;d<f;++d)s=n[d],c=e[d],16384&s.flags&&(s=n[d]=G(s)),ve(c,s,l,t,r,i,u),e[d]=s;if(a<o)for(d=f;d<o;++d)16384&(s=n[d]).flags&&(s=n[d]=G(s)),ce(s,l,t,r,i,u);else if(o<a)for(d=f;d<a;++d)I(e[d],l)}(l,t,r,a,o,c,f,i,s)}}var d,p,v,h,m,g,b,k,y}function r(e,n,l,t){var r,a,o,i,u,s;void 0===l&&(l=null),void 0===t&&(t=_),r=e,o=l,i=t,u=[],H(s=(a=n).$V)?H(r)||(16384&r.flags&&(r=G(r)),ce(r,a,i,false,null,u),s=a.$V=r):H(r)?(I(s,a),a.$V=null):(16384&r.flags&&(r=G(r)),ve(s,r,a,i,false,null,u),s=a.$V=r),0<u.length&&function(e){for(var n;void 0!==(n=e.shift());)n()}(u),j(o)&&o(),j(h.renderComplete)&&h.renderComplete(s,a)}function me(e){return i(1,"li","TreeLeaf",e.children,0,null,null,null)}function ge(e,n){return e!==n}function be(e){for(var n=e.data,l=n.children.length,t=new Array(l),r=0;r<l;r++){var a=n.children[r],o=a.id;a.container?t[r]=u(2,be,{data:a},o,{onComponentShouldUpdate:ge}):t[r]=u(2,me,{children:o},o,{onComponentShouldUpdate:ge})}return i(1,"ul","TreeNode",t,0,null,null,null)}function ke(e){var n=e.data,l=n.time%10,t="border-radius:"+l+"px;background:rgba(0,0,0,"+(.5+l/10)+")";return i(1,"div","AnimBox",null,1,{"data-id":n.id,style:t},null,null)}function a(e,n){console.log("Clicked",e),n.stopPropagation()}function ye(e){var n,l,t=e.children;return i(1,"td","TableCell",[null,false,[t]],0,{onClick:(n=t,l=a,j(l)?{data:n,event:l}:null)},null,null)}function Ce(e){var n=e.data,l="TableRow";n.active&&(l="TableRow active");var t=n.props,r=t.length+1,a=new Array(r);a[0]=u(2,ye,{children:"#"+n.id},null,{onComponentShouldUpdate:ge});for(var o=1;o<r;o++)a[o]=u(2,ye,{children:t[o-1]},null,{onComponentShouldUpdate:ge});return i(1,"tr",l,[null,a,false],0,{"data-id":n.id},null,null)}"undefined"!=typeof document&&(document.body,Node.prototype.$EV=null,Node.prototype.$V=null),"undefined"!=typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout.bind(window),uibench.init("Inferno (normalization test)","7.0.0"),document.addEventListener("DOMContentLoaded",function(e){var t=document.querySelector("#App");uibench.run(function(e){var o,n,l;r(("table"===(l=(o=e).location)?n=function(e){for(var n=o.table.items,l=n.length,t=new Array(l),r=0;r<l;r++){var a=n[r];t[r]=u(2,Ce,{data:a,children:a},a.id,{onComponentShouldUpdate:ge})}return i(1,"table","Table",[[],t,[[]]],0,null,null,null)}():"anim"===l?n=function(e){for(var n=o.anim.items,l=n.length,t=new Array(l),r=0;r<l;r++){var a=n[r];t[r]=u(2,ke,{data:a},a.id,{onComponentShouldUpdate:ge})}return i(1,"div","Anim",t,0,null,null,null)}():"tree"===l&&(n=i(1,"div","Tree",u(2,be,{data:o.tree.root},null,{onComponentShouldUpdate:ge}),2,null,null,null)),i(1,"div","Main",n,0,null,null,null)),t)},function(e){r(i(1,"pre",null,JSON.stringify(e,null," "),0,null,null,null),t)})})}();
