/*!
* SlickImageCompare v0.4.0
* https://lemon3.github.io/slick-image-compare
*/
(function(o,h){typeof exports=="object"&&typeof module!="undefined"?module.exports=h():typeof define=="function"&&define.amd?define(h):(o=typeof globalThis!="undefined"?globalThis:o||self,o.SlickImageCompare=h())})(this,function(){"use strict";var it=Object.defineProperty;var X=Object.getOwnPropertySymbols;var nt=Object.prototype.hasOwnProperty,at=Object.prototype.propertyIsEnumerable;var z=(o,h,c)=>h in o?it(o,h,{enumerable:!0,configurable:!0,writable:!0,value:c}):o[h]=c,Y=(o,h)=>{for(var c in h||(h={}))nt.call(h,c)&&z(o,c,h[c]);if(X)for(var c of X(h))at.call(h,c)&&z(o,c,h[c]);return o};var g=(o,h,c)=>(z(o,typeof h!="symbol"?h+"":h,c),c);const o={_s:new WeakMap,put(s,...i){this._s.has(s)||this._s.set(s,new Map);let t=this._s.get(s);if(i.length>1)return t.set(i[0],i[1]),this;if(typeof i[0]=="object")for(const e in i[0])t.set(e,i[0][e]);else t.set(i[0]);return this},get(s,i){return this._s.has(s)?i?this._s.get(s).get(i):this._s.get(s):!1},has(s,i){return this._s.has(s)&&this._s.get(s).has(i)},remove(s,i){if(!this._s.has(s))return!1;let t=this._s.get(s).delete(i);return this._s.get(s).size===0&&this._s.delete(s),t}},h=s=>s===!0||s==="true"||s===1||s==="1",c=s=>{const i="DOMContentLoaded";document.readyState==="complete"||document.readyState==="interactive"?(s(),document.removeEventListener(i,s)):document.addEventListener(i,s,!1)},Q=s=>new Promise((i,t)=>{const e=new Image;e.onload=()=>{const{naturalWidth:n,naturalHeight:a}=e,r=n/a;i({width:n,height:a,ratio:r})},e.onerror=()=>{t("error")},e.src=s}),J=s=>{if(!s.match(/[^\w]+/i))return s;const i={};return s=s.replace("{","").replace("}","").trim(),s.split(",").forEach(e=>{if(e==="")return;let[n,a]=e.split(":");n=n.trim().replaceAll("'",""),a=a.trim().replaceAll("'",""),i[n]=a}),i},Z=(s,i)=>s?i===void 0||typeof i=="undefined"?s.dataset:s.dataset[i]===void 0?s.dataset[i]:J(s.dataset[i]):!1;let E=!1;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){return E={passive:!1},!1}}))}catch(s){E=!1}const x=(s,i,t)=>Math.max(i,Math.min(s,t)),w=(s,i,t)=>{if(s=parseFloat(s,10),i=parseFloat(i,10),t=parseFloat(t,10),t<i){let e=t;t=i,i=e}return!isNaN(i)&&s<i?i:!isNaN(t)&&s>t?t:s},K=(s,i,t,e)=>{if(i)for(let n in i)Object.prototype.hasOwnProperty.call(i,n)&&s.setAttribute(n,i[n]);if(t)for(let n in t)Object.prototype.hasOwnProperty.call(t,n)&&(s.style[n]=t[n]);return e&&(s.innerHTML=e),s},_=(s,i,t,e)=>K(document.createElement(s),i,t,e),b={Linear:s=>s,Quad:{easeIn:s=>Math.pow(s,2),easeOut:s=>1-Math.pow(1-s,2)},Cubic:{easeIn:s=>Math.pow(s,3),easeOut:s=>1-Math.pow(1-s,3)},Sine:{easeIn:s=>1-Math.cos(s*Math.PI/2),easeOut:s=>Math.sin(s*Math.PI/2)},Elastic:{easeOut:s=>{const i=2*Math.PI/3;return s===0||s===1?s:Math.pow(2,-10*s)*Math.sin((s*10-.75)*i)+1}}},V={autoInit:!0,startPos:50,beforeImage:null,afterImage:null,horizontal:!0,ltr:!0,smooth:!0,smoothAmount:250,animateOnClick:!0,followMouse:!1,onlyHandleDraggable:!1,clickable:!1,snapToStart:!1,snapToStartDelay:1e3,snapToStartDuration:1250,snapToStartEasing:b.Elastic.easeOut,handleMinDistance:0,handleAngle:0,animateIn:!1,animateInDuration:1250,animateInEasing:b.Elastic.easeOut,animateInDelay:100,animateInStartPos:40,animateDuration:250,animateEasing:b.Cubic.easeOut,beforeLabel:"",afterLabel:""};class tt{constructor(){this._eventCallbacks=this._eventCallbacks||{}}emit(i,t){let e=this._eventCallbacks[i];const n={bubbles:!1,cancelable:!1,detail:t},a=new CustomEvent(i,n);e&&e.forEach(r=>r.call(this,a)),this.element.dispatchEvent(a)}addEventListener(i,t){return this.allowedEvents&&this.allowedEvents.indexOf(i)<0||typeof t!="function"?!1:(this._eventCallbacks[i]||(this._eventCallbacks[i]=[]),this._eventCallbacks[i].push(t),this)}removeEventListener(i,t){if(!this._eventCallbacks||arguments.length===0)return this._eventCallbacks={},this;let e=this._eventCallbacks[i];return e?arguments.length===1?(delete this._eventCallbacks[i],this):(this._eventCallbacks[i]=e.filter(n=>n!==t),this):this}}const y="sic",et="data-"+y,v="interacting",R="init",H="drag",N="update",O="viewchange",F="beforeshown",$="aftershown",W="interactionstart",j="interactionend",C="mousedown",D="mouseup",st="resize";let S=[],A=!1;const q=(s=!0,i="#ffffff")=>`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="${i}" stroke-width="2" stroke-linecap="round" stroke-linejoin="arcs"><path d="${s?"m12 24 8-8-8-8":"m20 8-8 8 8 8"}"/></svg>`;class f extends tt{constructor(t,e){if(!t)return{error:!0};if(t=typeof t=="string"?document.querySelector(t):t,t===null||t.length===0)return{error:!0};super();g(this,"_dimensions",(t,e=!1,n=!this._horizontal)=>{const a=this.element.getBoundingClientRect(),r=getComputedStyle(this.element),d=parseFloat(r.borderLeftWidth)+parseFloat(r.borderRightWidth),m=parseFloat(r.borderTopWidth)+parseFloat(r.borderBottomWidth);this.width=a.width-d,this.height=a.height-m;let l;if(this._horizontal){const u=a.x;l=this._dragHandle.offsetWidth*.5,this._dim=this.width,this._offset=l-u,this._minPos=u+this.settings.handleMinDistance-l,this._maxPos=u+this.width-l-this.settings.handleMinDistance}else{const u=this.element.offsetTop;l=this._dragHandle.offsetHeight*.5,this._dim=this.height,this._offset=l-u,this._minPos=u+this.settings.handleMinDistance-l,this._maxPos=u+this.height-l-this.settings.handleMinDistance}!e&&this._oldDim===this._dim||(this._oldDim=this._dim,n&&this._usePicture&&this._checkCurrentImageSource(this._firstImage),this._radians&&(this._angleOffset=Math.tan(this._radians)*this.height/2),this._setPosition(this._percent,!0))});g(this,"_mouseOver",()=>{this.stop(),this.element.classList.add(v)});g(this,"_mouseOut",()=>{this.element.classList.remove(v),this.settings.snapToStart&&this._snapToStart()});g(this,"_mouseMove",t=>{this.stop(),this._setPosition(this._calcPercent(this._getPos(t)))});g(this,"_tapstart",t=>{t.stopPropagation(),this._endInteraction=!1,this.stop(),clearTimeout(this._snapTimeout),this._triggerEvent(W),t.type==="touchstart"?(this.isTouch=!0,this._mouseStartEvents(!1)):C===t.type&&(this.isTouch=!1,this._touchStartEvent(!1));const e=this._calcPercent(this._getPos(t));this.settings.animateOnClick?this._animateTo(e,this.settings.animateDuration):this._setPosition(e)});g(this,"_dragStart",t=>{t.stopPropagation(),this.startPos=this._getPos(t),this.element.classList.add(v),this._tapstart(t),t.type==="touchstart"?(window.addEventListener("touchmove",this._drag,E),window.addEventListener("touchend",this._dragEnd,!1)):C===t.type&&(this.settings.followMouse||(window.addEventListener("mousemove",this._drag,!1),window.addEventListener(D,this._dragEnd,!1)))});g(this,"_drag",t=>{this.stop();let e=this._getPos(t),n=this._calcPercent(e);if(this.isTouch){t.preventDefault();const a=Math.abs(this.startPos.x-e.x),r=Math.abs(this.startPos.y-e.y);if(!this._dirDetected){if(r>a){this.element.classList.remove(v),window.removeEventListener("touchmove",this._drag,E);return}this.element.classList.add(v),this._dirDetected=!0}}this._setPosition(n),this._triggerEvent(H)});g(this,"_dragEnd",t=>{this._endInteraction=!0,t.type==="touchend"?(this.isTouch=!0,window.removeEventListener("touchmove",this._drag,E),window.removeEventListener("touchend",this._dragEnd)):D===t.type&&(this.isTouch=!1,this.settings.followMouse||(window.removeEventListener("mousemove",this._drag,!1),window.removeEventListener(D,this._dragEnd,!1))),this._testInteractionEnd(),this._dirDetected=!1});if(t.dataset.sicinitialized)return f.getInstance(t);t.dataset.sicinitialized=!0,this.allowedEvents=[R,H,N,F,$,W,j,O],S.push(this),o.put(t,"instance",this),this.element=t;const n=Z(t,y);if(this.options=e||{},this.settings=Object.assign({},f.defaults,n,e),this.images=this.element.querySelectorAll("img"),this.picture=this.element.querySelectorAll("picture"),(!this.settings.beforeImage||!this.settings.afterImage)&&(!this.images||!this.images.length)&&(!this.picture||!this.picture.length))return{error:!0};this.element.classList.contains(y+"-main")||this.element.classList.add(y+"-main"),this._snapTimeout=null,this._dirDetected=!1,this.settings.autoInit&&this.init()}_triggerEvent(t,e){e=Y({instance:this,horizontal:this._horizontal,ltr:this._ltr,percent:this._percent,afterShown:this._afterShown},e),this.emit(t,e)}_getPos(t){let e;return typeof t.pageX!="undefined"?e=t:e=t.touches[0]||t.changedTouches[0],{x:e.pageX,y:e.pageY}}_createGui(){const t=this.settings;this._originalEl=[],this._createdEl=[];const e="div";let n,a;const r=_(e,{class:"sic-clip"},{position:"absolute",left:0,top:0});if(t.beforeImage||t.afterImage)this.images=[n,a]=[t.beforeImage,t.afterImage].reduce((M,P)=>(M.push(_("img",{draggable:!1,src:P},{width:"100%",display:"block"})),M),[]),this.element.appendChild(n),r.appendChild(a),this.element.appendChild(r),this._createdEl.push(n);else{const[M,P]=this.picture&&this.picture.length===2?this.picture:this.images;n=M,a=P.cloneNode(!0),[n,a].forEach(k=>{k.setAttribute("draggable",!1),k.style.width="100%",k.style.display="block"}),r.appendChild(a),P.parentNode.replaceChild(r,P),this._originalEl.push(P)}this._createdEl.push(r);const d=_(e,{class:"sic-handle"},{position:"absolute"});let m,l;this._angle&&(m={transform:`rotate(${this._angle}deg)`,transformOrigin:"bottom center"},l={transform:`rotate(${this._angle}deg)`,transformOrigin:"top center"});const u=_(e,{class:"sic-line sic-line-1"},m),L=_(e,{class:"sic-line sic-line-2"},l),p=_(e,{class:"sic-arrows"}),U=_(e,{class:"sic-arrow sic-arrow-1"}),G=_(e,{class:"sic-arrow sic-arrow-2"}),B=_(e,{class:"sic-circle"});U.innerHTML=q(!1),G.innerHTML=q(),p.append(U,G),B.append(p),d.append(u,L,B),this.element.append(d),this._createdEl.push(d);let T,I;t.beforeLabel!==""&&(T=_(e,{class:"sic-label sic-label-one"}),T.innerHTML=decodeURIComponent(t.beforeLabel),this.element.append(T),this._createdEl.push(T)),t.afterLabel!==""&&(I=_(e,{class:"sic-label sic-label-two"}),I.innerHTML=decodeURIComponent(t.afterLabel),this.element.append(I),this._createdEl.push(I)),this.info1=t.ltr?T:I,this.info2=t.ltr?I:T,this.element.classList.add(this._horizontal?"sic-horizontal":"sic-vertical"),this.element.style.position="relative",this.element.style.overflow="hidden",this.element.style.visibility="visible",this._dragHandle=d,this._clipEl=r}_mouseStartEvents(t=!0){const e=this._addRemove(t),n=this.settings;if(n.followMouse){const a=this.element;a[e]("mouseenter",this._mouseOver,!1),a[e]("mouseleave",this._mouseOut,!1),a[e]("mousemove",this._mouseMove,!1)}else this._dragEl[e](C,this._dragStart),n.onlyHandleDraggable&&n.clickable&&(this.element[e](C,this._tapstart,!1),this.element[e](D,this._dragEnd,!1))}_addRemove(t=!0){return(t?"add":"remove")+"EventListener"}_touchStartEvent(t=!0){const e=this._addRemove(t);this._dragEl[e]("touchstart",this._dragStart,E),this.settings.clickable&&(this.element[e]("touchstart",this._tapstart,!1),this.element[e]("touchend",this._dragEnd,!1))}_appEvents(t=!0){this._touchStartEvent(t),this._mouseStartEvents(t);const e=this._addRemove(t);window[e](st,this._dimensions)}stop(){this._renderId&&(cancelAnimationFrame(this._renderId),this.element.classList.contains("playing")&&this.element.classList.remove("playing"),this._renderId=void 0)}_testInteractionEnd(){this._endInteraction&&this._renderId===void 0&&(this._endInteraction=!1,this._interactionEnd(),this._triggerEvent(j))}_renderLoop(t,e,n){const a=()=>{const r=Date.now();if(this._timingThen!==0){if(this._timingCurTime+=r-this._timingThen,this.progress=this._timingCurTime/this._animationDuration,this.progress>=1){this.progress=1,this._setPosition(e),this.stop(),this._testInteractionEnd();return}this._setPosition(t+n*this.easing(this.progress))}else this.progress=0,this._setPosition(t);this._timingThen=r,this._renderId=requestAnimationFrame(a)};a()}_animateTo(t,e,n){if(t=x(+t,0,100),!e){this._setPosition(t);return}const a=t-this._percent;this._animationDuration=e,this.easing=n||this.settings.animateEasing,this.progress=0,this._timingThen=this._timingCurTime=0,this._renderLoop(this._percent,t,a)}_snapToStart(t=this.settings.snapToStartDelay){this.stop(),this._snapTimeout=setTimeout(()=>{this._animateTo(this.settings.startPos,this.settings.animateDuration,this.settings.animateEasing)},t)}_interactionEnd(){this.element.classList.remove(v),this.isTouch?this._mouseStartEvents():this._touchStartEvent(),this.settings.snapToStart&&this._snapToStart()}_checkCurrentImageSource(t){clearTimeout(this._checkTo),this._checkTo=setTimeout(()=>{const e=t.currentSrc;this._firstImageSrc!==e&&(this._firstImageSrc=e,this._dimensions(null,!1,!1))},250)}_getClipPolygon(t){return`polygon(0 0, ${t+this._angleOffset}px 0, ${t-this._angleOffset}px 100%, 0 100%)`}_getClipRect(t){return this._horizontal?this._ltr?`rect(0 ${t}px 100% 0)`:`rect(0 ${this.width}px 100% ${t}px)`:this._ltr?`rect(0 100% ${t}px 0)`:`rect(${t}px 100% 100% 0)`}_changeStatus(t){this._afterShown=t;let e=this._afterShown?$:F;this._triggerEvent(e),this._triggerEvent(O),this._oneTime=!1}_setPosition(t,e=!1){if(t===this._percent&&!e)return!1;this._percent=t;const n=this._dim*.01*t;this._clipEl.style.clipPath=this._getClip(n),this._dragHandle.style.transform=this._horizontal?`translate(${n}px, 0)`:`translate(0, ${n}px)`,this.info1&&(this.info1.style.opacity=t<50?1:(100-t)/50),this.info2&&(this.info2.style.opacity=t>50?1:t/50);let a=this._ltr?this._afterShown:!this._afterShown;t>70&&(this._oneTime||!a)?this._changeStatus(this._ltr):t<30&&(this._oneTime||a)&&this._changeStatus(!this._ltr),this._triggerEvent(N)}_calcPercent(t){let e=this._horizontal?t.x:t.y;return e=x(e,this._minPos,this._maxPos),(e+this._offset)*100/this._dim}_smooth(t){this._animateTo(t,this.settings.smoothAmount)}init(){if(this._initialized)return this;const t=this.settings;this._initialized=!0,this._oneTime=!0,this._afterShown=!1,this._ltr=h(t.ltr),this._horizontal=h(t.horizontal),this._usePicture=this.picture&&this.picture.length===2,this._angle=w(t.handleAngle,-30,30),this._getClip=this._getClipRect,this._angle&&(this._radians=this._angle*Math.PI/180,this._getClip=this._getClipPolygon),this._createGui(),this._dragEl=t.onlyHandleDraggable?this._dragHandle:this.element,this._animationDuration=t.animateInDuration||0,t.startPos=w(t.startPos,0,100),t.animateInStartPos=w(t.animateInStartPos,0,100),t.startPos||(t.startPos=50),t.animateInStartPos||(t.animateInStartPos=0),t.animateIn?this._percent=this._animationDuration>0?t.animateInStartPos:t.startPos:this._percent=t.startPos,this.element.style.opacity=0,this.isTouch="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch||navigator.maxTouchPoints>0||window.navigator.msMaxTouchPoints>0,this.allowedEvents.forEach(e=>{t[e]&&this.addEventListener(e,t[e])}),this._firstImage=this._usePicture?this.picture[0].querySelector("img"):this.images[0],this._firstImageSrc=this._firstImage.currentSrc||this._firstImage.src,Q(this._firstImageSrc).then(()=>{this._dimensions(),this._setPosition(this._percent),this.element.style.opacity=1,t.animateIn&&this._animationDuration>0&&this.settings.animateInStartPos!==this.settings.startPos&&setTimeout(()=>this._animateTo(this.settings.startPos,this._animationDuration,this.settings.animateInEasing),this.settings.animateInDelay),this._appEvents(),this._triggerEvent(R),this._triggerEvent(O)})}play(t=this._percent,e=2,n=2e3,a){this.stop(),clearTimeout(this._snapTimeout),n=w(n,250,1e4),t=w(t,0,100);let r=this._percent,d=100-r,m=n/100*Math.abs(d),l=!0,u=0;e<=0&&(e=-1),this.progress=this._timingCurTime=this._timingThen=0,this.easing=a||b.Quad.easeOut;const L=()=>{let p=Date.now();if(this._timingCurTime+=p-(this._timingThen||p),this.progress=this._timingCurTime/m,this.progress>=1){if(u===e){this.element.classList.remove("playing");return}m=n,l?(r=100,d=-100):(r=0,d=100),l=!l,u++,u===e&&(d=l?t:t-100,m=n/100*Math.abs(d)),this._setPosition(r),p=Date.now(),this._timingCurTime=0}else this._setPosition(r+d*this.easing(this.progress));this._timingThen=p,this._renderId=requestAnimationFrame(L)};this.element.classList.add("playing"),L()}animateTo(t,e=this.settings.animateDuration){return this.goto(t,e,b)}goto(t,e,n){return isNaN(t)||(t=w(+t,0,100),t===this._percent)?!1:(this.stop(),this._animateTo(t,e,n),this)}changeDirection(){this._ltr=!this._ltr;let t;t=this.info1,this.info1=this.info2,this.info2=t,this._percent=100-this._percent,this._dimensions(null,!0)}changeOrientation(){const t=this._horizontal;this._horizontal=!t,this.element.classList.remove(t?"sic-horizontal":"sic-vertical"),this.element.classList.add(this._horizontal?"sic-horizontal":"sic-vertical"),this._dimensions(null,!0)}showAfter(){this._setPosition(this._ltr?100:0)}showBefore(){this._setPosition(this._ltr?0:100)}get elem(){return this.element}toggleView(){this.stop(),this._afterShown?this.showBefore():this.showAfter()}destroy(){this.element.removeAttribute("data-sicinitialized"),this._createdEl.forEach(t=>this.element.removeChild(t)),this._originalEl.forEach(t=>this.element.appendChild(t)),this._createdEl=[],this._originalEl=[],this._percent=this.startPos,this._appEvents(!1),this._initialized=!1}}return f.init=()=>{if(A)return!0;A=!0;let s=document.querySelectorAll("["+et+"]");return s.length===0?!1:(s.forEach(i=>{new f(i)}),S)},f.destroyAll=()=>S.length?(S.forEach(s=>{s.destroy()}),A=!1,S=[],!0):!1,f.getInstance=s=>o.get(s,"instance"),f.defaults=V,c(f.init),f});
