/*!
* BeforeAfter v0.2.7
* undefined
*/
(function(c,o){typeof exports=="object"&&typeof module!="undefined"?module.exports=o():typeof define=="function"&&define.amd?define(o):(c=typeof globalThis!="undefined"?globalThis:c||self,c.BeforeAfter=o())})(this,function(){"use strict";var X=Object.defineProperty;var H=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var C=(c,o,d)=>o in c?X(c,o,{enumerable:!0,configurable:!0,writable:!0,value:d}):c[o]=d,N=(c,o)=>{for(var d in o||(o={}))U.call(o,d)&&C(c,d,o[d]);if(H)for(var d of H(o))Y.call(o,d)&&C(c,d,o[d]);return c};var f=(c,o,d)=>(C(c,typeof o!="symbol"?o+"":o,d),d);const c={_s:new WeakMap,put(s,...i){this._s.has(s)||this._s.set(s,new Map);let t=this._s.get(s);if(i.length>1)return t.set(i[0],i[1]),this;if(typeof i[0]=="object")for(const e in i[0])t.set(e,i[0][e]);else t.set(i[0]);return this},get(s,i){return this._s.has(s)?i?this._s.get(s).get(i):this._s.get(s):!1},has(s,i){return this._s.has(s)&&this._s.get(s).has(i)},remove(s,i){if(!this._s.has(s))return!1;let t=this._s.get(s).delete(i);return this._s.get(s).size===0&&this._s.delete(s),t}},o=s=>{const i="DOMContentLoaded";document.readyState==="complete"||document.readyState==="interactive"?(s(),document.removeEventListener(i,s)):document.addEventListener(i,s,!1)},d=s=>new Promise((i,t)=>{const e=new Image;e.onload=()=>{const{naturalWidth:n,naturalHeight:a}=e,r=n/a;i({width:n,height:a,ratio:r})},e.onerror=()=>{t("error")},e.src=s}),k=(s,i,t=null)=>{if(!s)return!1;if(i===void 0||s.dataset[i]===void 0)return s.dataset;let e;try{e=JSON.parse(s.dataset[i].replace(/'/g,'"'))}catch(r){}if(typeof e!="object"){e=s.dataset[i];const r={};e=e.replace(/[\\ \t\n\r]/g,""),e=e.replace(/{?([^{])}?/g,"$1");const h=e.split(",");h.length>1?h.forEach(l=>{if(l){let[m,_]=l.split(":");_=_.replace(/'/g,""),_==="true"?_=!0:_==="false"&&(_=!1),r[m.replace(/'/g,"")]=_}}):r[i]=e,e=r}let n={},a=i.length;return Object.entries(s.dataset).forEach(r=>{if(r[0].toLowerCase().indexOf(i)>=0&&r[0].length>a){let h=r[0][a].toLowerCase()+r[0].substring(a+1);(t===null||t&&t[h]!==void 0)&&(n[h]=r[1])}}),Object.assign(e,n)};let p=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){return p={passive:!1},!1}}))}catch(s){p=!1}const T=(s,i,t)=>{if(s=parseFloat(s,10),i=parseFloat(i,10),t=parseFloat(t,10),t<i){let e=t;t=i,i=e}return!isNaN(i)&&s<i?i:!isNaN(t)&&s>t?t:s},$=(s,i,t,e)=>{if(i)for(let n in i)Object.prototype.hasOwnProperty.call(i,n)&&s.setAttribute(n,i[n]);if(t)for(let n in t)Object.prototype.hasOwnProperty.call(t,n)&&(s.style[n]=t[n]);return e&&(s.innerHTML=e),s},g=(s,i,t,e)=>$(document.createElement(s),i,t,e),S={Quad:{easeIn:s=>Math.pow(s,2),easeOut:s=>1-Math.pow(1-s,2)},Cubic:{easeIn:s=>Math.pow(s,3),easeOut:s=>1-Math.pow(1-s,3)},Sine:{easeIn:s=>1-Math.cos(s*Math.PI/2),easeOut:s=>Math.sin(s*Math.PI/2)},Elastic:{easeOut:s=>{const i=2*Math.PI/3;return s===0||s===1?s:Math.pow(2,-10*s)*Math.sin((s*10-.75)*i)+1}}},F={autoInit:!0,horizontal:!0,ltr:!0,beforeImage:null,afterImage:null,followMouse:!1,onlyHandleDraggable:!1,clickable:!1,snapToStart:!1,snapToStartDelay:1e3,snapToStartDuration:1250,snapToStartEasing:S.Elastic.easeOut,handleMinDistance:0,animateIn:!1,animateInDuration:1250,animateInEasing:S.Elastic.easeOut,animateInDelay:100,animateInStartPos:40,startPos:50,animateDuration:250,animateEasing:S.Cubic.easeOut,beforeLabel:"",afterLabel:""},R=(s,i,t)=>{let e=s.getAttribute("on"+i);new Function("e","{"+e+"}").call(s,t)};class W{constructor(){this._eventCallbacks=this._eventCallbacks||{}}emit(i,t){let e=this._eventCallbacks[i];const n={bubbles:!1,cancelable:!1,detail:t},a=new CustomEvent(i,n);e&&e.forEach(r=>r.call(this,a)),this.element&&(this.element.dispatchEvent(a),R(this.element,i,a))}addEventListener(i,t){return this.allowedEvents&&this.allowedEvents.indexOf(i)<0||typeof t!="function"?!1:(this._eventCallbacks[i]||(this._eventCallbacks[i]=[]),this._eventCallbacks[i].push(t),this)}removeEventListener(i,t){if(!this._eventCallbacks||arguments.length===0)return this._eventCallbacks={},this;let e=this._eventCallbacks[i];return e?arguments.length===1?(delete this._eventCallbacks[i],this):(this._eventCallbacks[i]=e.filter(n=>n!==t),this):this}}const b="beforeafter",j="data-"+b,E="interacting",M="init",A="drag",O="update",D="viewchanged",z="beforeshown",x="aftershown",y="interactionend",I="mousedown",G="resize";let w=[],L=!1;class u extends W{constructor(t,e){if(!t)return{error:!0};if(t=typeof t=="string"?document.querySelector(t):t,t===null||t.length===0)return{error:!0};super();f(this,"_interactionEnd",()=>{this.element.classList.remove(E),this.isTouch?this._mouseStartEvents():this._touchStartEvent(),this.settings.snapToStart&&this._snapToStart()});f(this,"_dimensions",t=>{const e=this.element.getBoundingClientRect(),n=getComputedStyle(this.element),a=parseFloat(n.borderLeftWidth)+parseFloat(n.borderRightWidth),r=parseFloat(n.borderTopWidth)+parseFloat(n.borderBottomWidth);this.width=e.width-a,this.height=e.height-r;let h;if(this._horizontal){const l=e.x;h=this._dragHandle.offsetWidth*.5,this._dim=this.width,this._offset=h-l,this._minPos=l+this.settings.handleMinDistance-h,this._maxPos=l+this.width-h-this.settings.handleMinDistance}else{const l=this.element.offsetTop;h=this._dragHandle.offsetHeight*.5,this._dim=this.height,this._offset=h-l,this._minPos=l+this.settings.handleMinDistance-h,this._maxPos=l+this.height-h-this.settings.handleMinDistance}!t&&this._oldDim===this._dim||(this._oldDim=this._dim,this._setPosition(this._percent,!0))});f(this,"_mouseOver",()=>{this._stopAni(),this.element.classList.add(E)});f(this,"_mouseOut",()=>{this.element.classList.remove(E),this.settings.snapToStart&&this._snapToStart()});f(this,"_mouseMove",t=>{this._stopAni();let e=this._getPos(t),n=this._calcPercent(e);this._setPosition(n)});f(this,"_tapstart",t=>{this._endInteraction=!1,this._stopAni(),clearTimeout(this._snapTimeout),t.type==="touchstart"?(this.isTouch=!0,this._mouseStartEvents(!1)):I===t.type&&(this.isTouch=!1,this._touchStartEvent(!1));const e=this._calcPercent(this._getPos(t));this._animateTo(e,this.settings.animateDuration)});f(this,"_dragStart",t=>{t.stopPropagation(),this.startPos=this._getPos(t),this.element.classList.add(E),this._tapstart(t),t.type==="touchstart"?(window.addEventListener("touchmove",this._drag,p),window.addEventListener("touchend",this._dragEnd,!1)):I===t.type&&(this.settings.followMouse||(window.addEventListener("mousemove",this._drag,!1),window.addEventListener("mouseup",this._dragEnd,!1)))});f(this,"_drag",t=>{this._stopAni();let e=this._getPos(t),n=this._calcPercent(e);if(this.isTouch){t.preventDefault();const a=Math.abs(this.startPos.x-e.x),r=Math.abs(this.startPos.y-e.y);if(!this._dirDetected){if(r>a){this.element.classList.remove(E),window.removeEventListener("touchmove",this._drag,p);return}this.element.classList.add(E),this._dirDetected=!0}}this._setPosition(n),this._triggerEvent(A)});f(this,"_dragEnd",t=>{this._endInteraction=!0,t.type==="touchend"?(this.isTouch=!0,window.removeEventListener("touchmove",this._drag,p),window.removeEventListener("touchend",this._dragEnd)):t.type==="mouseup"&&(this.isTouch=!1,this.settings.followMouse||(window.removeEventListener("mousemove",this._drag,!1),window.removeEventListener("mouseup",this._dragEnd,!1))),this._testInteractionEnd(),this._dirDetected=!1});if(t.dataset.bainitialized)return u.getInstance(t);t.dataset.bainitialized=!0,this.allowedEvents=[M,A,O,z,x,y,D],w.push(this),c.put(t,"instance",this),this.element=t;const n=k(t,b);if(this.options=e||{},this.settings=Object.assign({},u.defaults,n,e),this.images=this.element.querySelectorAll("img"),(!this.settings.beforeImage||!this.settings.afterImage)&&(!this.images||!this.images.length))return{error:!0};this.element.classList.contains(b)||this.element.classList.add(b),this._snapTimeout=null,this._dirDetected=!1,this.settings.autoInit&&this.init()}_triggerEvent(t,e){e=N({instance:this,horizontal:this._horizontal,ltr:this._ltr,percent:this._percent,afterShown:this._afterShown},e),this.emit(t,e)}_getPos(t){let e;return typeof t.pageX!="undefined"?e=t:e=t.touches[0]||t.changedTouches[0],{x:e.pageX,y:e.pageY}}_createGui(){const t=this.settings;this._originalEl=[],this._createdEl=[];const e="div";let n,a;const r=g(e,{class:"clipSlider"});if(t.beforeImage||t.afterImage)this.images=[n,a]=[t.beforeImage,t.afterImage].reduce((P,v)=>(P.push(g("img",{draggable:!1,src:v})),P),[]),this.element.appendChild(n),r.appendChild(a),this.element.appendChild(r),this._createdEl.push(n);else{const[P,v]=this.images;n=P,n.setAttribute("draggable",!1),a=v.cloneNode(!0),a.setAttribute("draggable",!1),r.appendChild(a),v.parentNode.replaceChild(r,v),this._originalEl.push(v)}this._createdEl.push(r);let h,l;t.beforeLabel!==""&&(h=g(e,{class:"ba-label ba-label-one"}),h.innerHTML=t.beforeLabel,this.element.appendChild(h),this._createdEl.push(h)),t.afterLabel!==""&&(l=g(e,{class:"ba-label ba-label-two"}),l.innerHTML=t.afterLabel,this.element.appendChild(l),this._createdEl.push(l)),this.info1=t.ltr?h:l,this.info2=t.ltr?l:h;const m=g(e,{class:"ba-handle "+(this._horizontal?"horizontal":"vertical")},{zIndex:5}),_=g(e,{class:"ba-line ba-line-1"}),B=g(e,{class:"ba-line ba-line-2"}),q=g(e,{class:"ba-circle"});m.appendChild(_),m.appendChild(B),m.appendChild(q),this.element.appendChild(m),this._createdEl.push(m),this.element.style.visibility="visible",this._dragHandle=m,this._clipEl=r}_mouseStartEvents(t=!0){const e=(t?"add":"remove")+"EventListener",n=this.settings;if(n.followMouse){const a=this.element;a[e]("mouseenter",this._mouseOver,!1),a[e]("mouseleave",this._mouseOut,!1),a[e]("mousemove",this._mouseMove,!1)}else this._dragEl[e](I,this._dragStart),n.onlyHandleDraggable&&n.clickable&&(this.element[e](I,this._tapstart,!1),this.element[e]("mouseup",this._dragEnd,!1))}_touchStartEvent(t=!0){const e=(t?"add":"remove")+"EventListener";this._dragEl[e]("touchstart",this._dragStart,p),this.settings.clickable&&(this.element[e]("touchstart",this._tapstart,!1),this.element[e]("touchend",this._dragEnd,!1))}_appEvents(t=!0){const e=(t?"add":"remove")+"EventListener";this._touchStartEvent(t),this._mouseStartEvents(t),window[e](G,this._dimensions),this[e](y,this._interactionEnd)}_stopAni(){this._renderId&&(window.cancelAnimationFrame(this._renderId),this._renderId=void 0,this._timing.then=this._timing.curTime=0)}_testInteractionEnd(){this._endInteraction&&this._renderId===void 0&&(this._endInteraction=!1,this._triggerEvent(y))}_renderLoop(t,e,n){const a=()=>{const r=new Date().getTime(),h=r-(this._timing.then||r);if(this._timing.curTime+=h,this.progress=this._timing.curTime/this._animationDuration,this.progress>=1){this.progress=1,this._setPosition(e),this._stopAni(),this._testInteractionEnd();return}this._setPosition(t+n*this.easing(this.progress)),this._timing.then=r,this._renderId=window.requestAnimationFrame(a)};a()}_animateTo(t,e,n){t=T(+t,0,100);const a=t-this._percent;if(!e){this._setPosition(t);return}this._animationDuration=e,this.easing=n||this.settings.animateEasing,this.progress=0,this._timing.then=this._timing.curTime=0,this._renderLoop(this._percent,t,a)}_snapToStart(t=this.settings.snapToStartDelay){this._stopAni(),this._snapTimeout=setTimeout(()=>{this._animateTo(this.settings.startPos,this.settings.animateDuration,this.settings.animateEasing)},t)}_getClipRect(t){return this._horizontal?this._ltr?`rect(0 ${t}px ${this.height}px 0)`:`rect(0 ${this.width}px ${this.height}px ${t}px)`:this._ltr?`rect(0 ${this.width}px ${t}px 0)`:`rect(${t}px ${this.width}px ${this.height}px 0)`}_changeStatus(t){this._afterShown=t;let e=this._afterShown?x:z;this._triggerEvent(e),this._triggerEvent(D),this._oneTime=!1}_setPosition(t,e=!1){if(t===this._percent&&!e)return!1;this._percent=t;const n=this._dim*.01*t;this._clipEl.style.clipPath=this._getClipRect(n),this._dragHandle.style.transform=this._horizontal?`translate(${n}px, 0)`:`translate(0, ${n}px)`,this.info1&&(this.info1.style.opacity=t<50?1:(100-t)/50),this.info2&&(this.info2.style.opacity=t>50?1:t/50);let a=this._ltr?this._afterShown:!this._afterShown;t>75&&(this._oneTime||!a)?this._changeStatus(this._ltr):t<25&&(this._oneTime||a)&&this._changeStatus(!this._ltr),this._triggerEvent(O)}_calcPercent(t){let e=this._horizontal?t.x:t.y;return e=T(e,this._minPos,this._maxPos),(e+this._offset)*100/this._dim}init(){if(this._initialized)return this;const t=this.settings;this._initialized=!0,this._oneTime=!0,this._afterShown=!1,this._ltr=!!t.ltr,this._horizontal=t.horizontal,this._createGui(),this._timing={time:0,curTime:0},this._dragEl=t.onlyHandleDraggable?this._dragHandle:this.element,this._animationDuration=t.animateInDuration||0,t.startPos||(t.startPos=0),t.animateInStartPos||(t.animateInStartPos=0),t.animateIn?this._percent=this._animationDuration>0?t.animateInStartPos:t.startPos:this._percent=t.startPos,this.element.style.opacity=0,this.isTouch="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch||navigator.maxTouchPoints>0||window.navigator.msMaxTouchPoints>0,this.allowedEvents.forEach(e=>{t[e]&&this.addEventListener(e,t[e])}),d(this.images[0].src).then(()=>{this._dimensions(),this._setPosition(this._percent),this.element.style.opacity=1,t.animateIn&&this._animationDuration>0&&this.settings.animateInStartPos!==this.settings.startPos&&setTimeout(()=>this._animateTo(this.settings.startPos,this._animationDuration,this.settings.animateInEasing),this.settings.animateInDelay),this._appEvents(),this._triggerEvent(M),this._triggerEvent(D)})}goto(t,e,n){if(isNaN(t)||(t=T(+t,0,100),t===this._percent))return!1;this._stopAni(),this._animateTo(t,e,n)}changeDirection(){this._ltr=!this._ltr;let t;t=this.info1,this.info1=this.info2,this.info2=t,this._percent=100-this._percent,this._dimensions(!0)}changeOrientation(){const t=this._horizontal;this._horizontal=!t,this._dragHandle.classList.remove(t?"horizontal":"vertical"),this._dragHandle.classList.add(this._horizontal?"horizontal":"vertical"),this._dimensions(!0)}showAfter(){this._setPosition(this._ltr?100:0)}showBefore(){this._setPosition(this._ltr?0:100)}get elem(){return this.element}toggle(){this._stopAni(),this._afterShown?this.showBefore():this.showAfter()}destroy(){this.element.removeAttribute("data-bainitialized"),this._createdEl.forEach(t=>this.element.removeChild(t)),this._originalEl.forEach(t=>this.element.appendChild(t)),this._createdEl=[],this._originalEl=[],this._percent=this.startPos,this._appEvents(!1),this._initialized=!1}}return u.init=()=>{if(L)return!0;L=!0;let s=document.querySelectorAll("["+j+"]");return s.length===0?!1:(s.forEach(i=>{new u(i)}),w)},u.destroyAll=()=>w.length?(w.forEach(s=>{s.destroy()}),L=!1,w=[],!0):!1,u.getInstance=s=>c.get(s,"instance"),u.defaults=F,o(u.init),u});
