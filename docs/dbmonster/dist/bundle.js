!function(t){"use strict";var e,n,i=function(t,e,n,i){this.min=t,this.max=e,this.mean=n,this.last=i},a=function(){function t(t){this.samples=[],this.maxSamples=t,this._i=-1}return t.prototype.addSample=function(t){this._i=(this._i+1)%this.maxSamples,this.samples[this._i]=t},t.prototype.each=function(t){for(var e=this.samples,n=0;n<e.length;n++)t(e[(this._i+1+n)%e.length],n)},t.prototype.calc=function(){var t=this.samples;if(0===t.length)return new i(0,0,0,0);for(var e=t[(this._i+1)%t.length],n=e,a=0,l=0;l<t.length;l++){var o=t[(this._i+1+l)%t.length];o<e&&(e=o),o>n&&(n=o),a+=o}var r=t[this._i],s=a/t.length;return new i(e,n,s,r)},t}(),l=[],o=-1,r=(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}),s=30,d=100,u=function(){function t(t){var e=this;this._sync=function(){e.sync(),e._dirty=!1},this.name=t,this.element=document.createElement("div"),this.element.style.cssText="padding: 2px;background-color: #020;font-family: monospace;font-size: 12px;color: #0f0",this._dirty=!1,this.invalidate()}return t.prototype.invalidate=function(){var t;this._dirty||(this._dirty=!0,t=this._sync,l.push(t),-1===o&&requestAnimationFrame((function(t){o=-1;var e=l;l=[];for(var n=0;n<e.length;n++)e[n]()})))},t.prototype.sync=function(){throw new Error("sync method not implemented")},t}();!function(t){t[t.HideMin=1]="HideMin",t[t.HideMax=2]="HideMax",t[t.HideMean=4]="HideMean",t[t.HideLast=8]="HideLast",t[t.HideGraph=16]="HideGraph",t[t.RoundValues=32]="RoundValues"}(n||(n={}));var c=function(t){function e(e,i,a,l){var o=t.call(this,e)||this;o.flags=i,o.unitName=a,o.samples=l;var r=document.createElement("div");r.style.cssText="text-align: center",r.textContent=o.name;var u=document.createElement("div");return 0===(i&n.HideMin)?(o.minText=document.createElement("div"),u.appendChild(o.minText)):o.minText=null,0===(i&n.HideMax)?(o.maxText=document.createElement("div"),u.appendChild(o.maxText)):o.maxText=null,0===(i&n.HideMean)?(o.meanText=document.createElement("div"),u.appendChild(o.meanText)):o.meanText=null,0===(i&n.HideLast)?(o.lastText=document.createElement("div"),u.appendChild(o.lastText)):o.lastText=null,o.element.appendChild(r),o.element.appendChild(u),0===(i&n.HideGraph)?(o.canvas=document.createElement("canvas"),o.canvas.style.cssText="display: block; padding: 0; margin: 0",o.canvas.width=d,o.canvas.height=s,o.ctx=o.canvas.getContext("2d"),o.element.appendChild(o.canvas)):(o.canvas=null,o.ctx=null),o}return r(e,t),e.prototype.sync=function(){var t,e,i,a,l=this,o=this.samples.calc(),r=s/(1.2*o.max);0===(this.flags&n.RoundValues)?(t=o.min.toFixed(2),e=o.max.toFixed(2),i=o.mean.toFixed(2),a=o.last.toFixed(2)):(t=Math.round(o.min).toString(),e=Math.round(o.max).toString(),i=Math.round(o.mean).toString(),a=Math.round(o.last).toString()),null!==this.minText&&(this.minText.textContent="min:  "+t+this.unitName),null!==this.maxText&&(this.maxText.textContent="max:  "+e+this.unitName),null!==this.meanText&&(this.meanText.textContent="mean: "+i+this.unitName),null!==this.lastText&&(this.lastText.textContent="last: "+a+this.unitName),null!==this.ctx&&(this.ctx.fillStyle="#010",this.ctx.fillRect(0,0,d,s),this.ctx.fillStyle="#0f0",this.samples.each((function(t,e){l.ctx.fillRect(e,s,1,-t*r)})))},e}(u),m=(function(t){function e(e,n){var i=t.call(this,e)||this;return i.counter=n,i.text=document.createElement("div"),i.element.appendChild(i.text),i}r(e,t),e.prototype.sync=function(){this.text.textContent=this.name+": "+this.counter.value}}(u),null);function h(){m||((m=document.createElement("div")).style.cssText="position: fixed;opacity: 0.9;right: 0;bottom: 0",document.body.appendChild(m))}var p=function(t,e,n){this.data=new a(100),this.widget=new c(t,n,e,this.data),this.startTime=-1},v={},x=document.getElementById("app");!function(t){void 0===t&&(t=n.HideMin|n.HideMax|n.HideMean|n.RoundValues),h();var e=new a(100),i=new c("FPS",t,"",e);m.appendChild(i.element);var l=0,o=60;requestAnimationFrame((function t(n){l>0&&(o+=2/121*(1e3/(n-l)-o)),l=n,e.addSample(o),i.invalidate(),requestAnimationFrame(t)}))}(),function(t){if(void 0===t&&(t=n.HideMin|n.HideMean),h(),void 0===performance.memory)return;var e=new a(100),i=new c("Memory",t,"MB",e);m.appendChild(i.element),function t(){e.addSample(Math.round(performance.memory.usedJSHeapSize/1048576)),i.invalidate(),setTimeout(t,30)}()}(),function(t,e){void 0===e&&(e=0),h();var n=v[t];void 0===n&&(v[t]=n=new p(t,"ms",e),m.appendChild(n.widget.element))}("view update"),setInterval((function(){var e,n=ENV.generateData(!1).toArray();void 0!==(e=v["view update"])&&(e.startTime=performance.now()),function(e){for(var n=e.length,i=[],a=0;a<n;a++){for(var l=e[a],o=l.lastSample,r=[t.createVNode(1,"td","dbname",l.dbname,16,null,null,null),t.createVNode(1,"td","query-count",t.createVNode(1,"span",o.countClassName,o.nbQueries,16,null,null,null),2,null,null,null)],s=0;s<5;s++){var d=o.topFiveQueries[s];r.push(t.createVNode(1,"td",d.elapsedClassName,[t.createVNode(1,"div",null,d.formatElapsed,16,null,null,null),t.createVNode(1,"div","popover left",[t.createVNode(1,"div","popover-content",d.query,16,null,null,null),t.createVNode(1,"div","arrow",null,1,null,null,null)],4,null,null,null)],4,null,null,null))}i.push(t.createVNode(1,"tr",null,r,4,null,null,null))}t.render(t.createVNode(1,"table","table table-striped",t.createVNode(1,"tbody",null,i,4,null,null,null),2,null,null,null),x)}(n),function(t){var e=performance.now(),n=v["view update"];void 0!==n&&-1!==n.startTime&&(n.data.addSample(e-n.startTime),n.widget.invalidate())}()}),0)}(inferno);
