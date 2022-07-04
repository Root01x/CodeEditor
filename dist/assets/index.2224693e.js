const Z=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}};Z();var x=function(t,e){return Number(t.slice(0,-1*e.length))},H=function(t){return t.endsWith("px")?{value:t,type:"px",numeric:x(t,"px")}:t.endsWith("fr")?{value:t,type:"fr",numeric:x(t,"fr")}:t.endsWith("%")?{value:t,type:"%",numeric:x(t,"%")}:t==="auto"?{value:t,type:"auto"}:null},_=function(t){return t.split(" ").map(H)},q=function(t,e,r,i){r===void 0&&(r=0),i===void 0&&(i=!1);var s=i?t+1:t,o=e.slice(0,s).reduce(function(c,l){return c+l.numeric},0),a=r?t*r:0;return o+a},R=function(t,e,r){return e.concat(r).map(function(i){return i.style[t]}).filter(function(i){return i!==void 0&&i!==""})},Y=function(t,e){return e.endsWith(t)?Number(e.slice(0,-1*t.length)):null},E=function(t){for(var e=0;e<t.length;e++)if(t[e].numeric>0)return e;return null},f=function(){return!1},J=function(t,e,r){t.style[e]=r},n=function(t,e,r){var i=t[e];return i!==void 0?i:r};function $(t){var e;return(e=[]).concat.apply(e,Array.from(t.ownerDocument.styleSheets).map(function(r){var i=[];try{i=Array.from(r.cssRules||[])}catch{}return i})).filter(function(r){var i=!1;try{i=t.matches(r.selectorText)}catch{}return i})}var K="grid-template-columns",X="grid-template-rows",u=function(e,r,i){this.direction=e,this.element=r.element,this.track=r.track,e==="column"?(this.gridTemplateProp=K,this.gridGapProp="grid-column-gap",this.cursor=n(i,"columnCursor",n(i,"cursor","col-resize")),this.snapOffset=n(i,"columnSnapOffset",n(i,"snapOffset",30)),this.dragInterval=n(i,"columnDragInterval",n(i,"dragInterval",1)),this.clientAxis="clientX",this.optionStyle=n(i,"gridTemplateColumns")):e==="row"&&(this.gridTemplateProp=X,this.gridGapProp="grid-row-gap",this.cursor=n(i,"rowCursor",n(i,"cursor","row-resize")),this.snapOffset=n(i,"rowSnapOffset",n(i,"snapOffset",30)),this.dragInterval=n(i,"rowDragInterval",n(i,"dragInterval",1)),this.clientAxis="clientY",this.optionStyle=n(i,"gridTemplateRows")),this.onDragStart=n(i,"onDragStart",f),this.onDragEnd=n(i,"onDragEnd",f),this.onDrag=n(i,"onDrag",f),this.writeStyle=n(i,"writeStyle",J),this.startDragging=this.startDragging.bind(this),this.stopDragging=this.stopDragging.bind(this),this.drag=this.drag.bind(this),this.minSizeStart=r.minSizeStart,this.minSizeEnd=r.minSizeEnd,r.element&&(this.element.addEventListener("mousedown",this.startDragging),this.element.addEventListener("touchstart",this.startDragging))};u.prototype.getDimensions=function(){var e=this.grid.getBoundingClientRect(),r=e.width,i=e.height,s=e.top,o=e.bottom,a=e.left,c=e.right;this.direction==="column"?(this.start=s,this.end=o,this.size=i):this.direction==="row"&&(this.start=a,this.end=c,this.size=r)};u.prototype.getSizeAtTrack=function(e,r){return q(e,this.computedPixels,this.computedGapPixels,r)};u.prototype.getSizeOfTrack=function(e){return this.computedPixels[e].numeric};u.prototype.getRawTracks=function(){var e=R(this.gridTemplateProp,[this.grid],$(this.grid));if(!e.length){if(this.optionStyle)return this.optionStyle;throw Error("Unable to determine grid template tracks from styles.")}return e[0]};u.prototype.getGap=function(){var e=R(this.gridGapProp,[this.grid],$(this.grid));return e.length?e[0]:null};u.prototype.getRawComputedTracks=function(){return window.getComputedStyle(this.grid)[this.gridTemplateProp]};u.prototype.getRawComputedGap=function(){return window.getComputedStyle(this.grid)[this.gridGapProp]};u.prototype.setTracks=function(e){this.tracks=e.split(" "),this.trackValues=_(e)};u.prototype.setComputedTracks=function(e){this.computedTracks=e.split(" "),this.computedPixels=_(e)};u.prototype.setGap=function(e){this.gap=e};u.prototype.setComputedGap=function(e){this.computedGap=e,this.computedGapPixels=Y("px",this.computedGap)||0};u.prototype.getMousePosition=function(e){return"touches"in e?e.touches[0][this.clientAxis]:e[this.clientAxis]};u.prototype.startDragging=function(e){if(!("button"in e&&e.button!==0)){e.preventDefault(),this.element?this.grid=this.element.parentNode:this.grid=e.target.parentNode,this.getDimensions(),this.setTracks(this.getRawTracks()),this.setComputedTracks(this.getRawComputedTracks()),this.setGap(this.getGap()),this.setComputedGap(this.getRawComputedGap());var r=this.trackValues.filter(function(c){return c.type==="%"}),i=this.trackValues.filter(function(c){return c.type==="fr"});if(this.totalFrs=i.length,this.totalFrs){var s=E(i);s!==null&&(this.frToPixels=this.computedPixels[s].numeric/i[s].numeric)}if(r.length){var o=E(r);o!==null&&(this.percentageToPixels=this.computedPixels[o].numeric/r[o].numeric)}var a=this.getSizeAtTrack(this.track,!1)+this.start;if(this.dragStartOffset=this.getMousePosition(e)-a,this.aTrack=this.track-1,this.track<this.tracks.length-1)this.bTrack=this.track+1;else throw Error("Invalid track index: "+this.track+". Track must be between two other tracks and only "+this.tracks.length+" tracks were found.");this.aTrackStart=this.getSizeAtTrack(this.aTrack,!1)+this.start,this.bTrackEnd=this.getSizeAtTrack(this.bTrack,!0)+this.start,this.dragging=!0,window.addEventListener("mouseup",this.stopDragging),window.addEventListener("touchend",this.stopDragging),window.addEventListener("touchcancel",this.stopDragging),window.addEventListener("mousemove",this.drag),window.addEventListener("touchmove",this.drag),this.grid.addEventListener("selectstart",f),this.grid.addEventListener("dragstart",f),this.grid.style.userSelect="none",this.grid.style.webkitUserSelect="none",this.grid.style.MozUserSelect="none",this.grid.style.pointerEvents="none",this.grid.style.cursor=this.cursor,window.document.body.style.cursor=this.cursor,this.onDragStart(this.direction,this.track)}};u.prototype.stopDragging=function(){this.dragging=!1,this.cleanup(),this.onDragEnd(this.direction,this.track),this.needsDestroy&&(this.element&&(this.element.removeEventListener("mousedown",this.startDragging),this.element.removeEventListener("touchstart",this.startDragging)),this.destroyCb(),this.needsDestroy=!1,this.destroyCb=null)};u.prototype.drag=function(e){var r=this.getMousePosition(e),i=this.getSizeOfTrack(this.track),s=this.aTrackStart+this.minSizeStart+this.dragStartOffset+this.computedGapPixels,o=this.bTrackEnd-this.minSizeEnd-this.computedGapPixels-(i-this.dragStartOffset),a=s+this.snapOffset,c=o-this.snapOffset;r<a&&(r=s),r>c&&(r=o),r<s?r=s:r>o&&(r=o);var l=r-this.aTrackStart-this.dragStartOffset-this.computedGapPixels,m=this.bTrackEnd-r+this.dragStartOffset-i-this.computedGapPixels;if(this.dragInterval>1){var z=Math.round(l/this.dragInterval)*this.dragInterval;m-=z-l,l=z}if(l<this.minSizeStart&&(l=this.minSizeStart),m<this.minSizeEnd&&(m=this.minSizeEnd),this.trackValues[this.aTrack].type==="px")this.tracks[this.aTrack]=l+"px";else if(this.trackValues[this.aTrack].type==="fr")if(this.totalFrs===1)this.tracks[this.aTrack]="1fr";else{var V=l/this.frToPixels;this.tracks[this.aTrack]=V+"fr"}else if(this.trackValues[this.aTrack].type==="%"){var N=l/this.percentageToPixels;this.tracks[this.aTrack]=N+"%"}if(this.trackValues[this.bTrack].type==="px")this.tracks[this.bTrack]=m+"px";else if(this.trackValues[this.bTrack].type==="fr")if(this.totalFrs===1)this.tracks[this.bTrack]="1fr";else{var O=m/this.frToPixels;this.tracks[this.bTrack]=O+"fr"}else if(this.trackValues[this.bTrack].type==="%"){var W=m/this.percentageToPixels;this.tracks[this.bTrack]=W+"%"}var C=this.tracks.join(" ");this.writeStyle(this.grid,this.gridTemplateProp,C),this.onDrag(this.direction,this.track,C)};u.prototype.cleanup=function(){window.removeEventListener("mouseup",this.stopDragging),window.removeEventListener("touchend",this.stopDragging),window.removeEventListener("touchcancel",this.stopDragging),window.removeEventListener("mousemove",this.drag),window.removeEventListener("touchmove",this.drag),this.grid&&(this.grid.removeEventListener("selectstart",f),this.grid.removeEventListener("dragstart",f),this.grid.style.userSelect="",this.grid.style.webkitUserSelect="",this.grid.style.MozUserSelect="",this.grid.style.pointerEvents="",this.grid.style.cursor=""),window.document.body.style.cursor=""};u.prototype.destroy=function(e,r){e===void 0&&(e=!0),e||this.dragging===!1?(this.cleanup(),this.element&&(this.element.removeEventListener("mousedown",this.startDragging),this.element.removeEventListener("touchstart",this.startDragging)),r&&r()):(this.needsDestroy=!0,r&&(this.destroyCb=r))};var A=function(t,e,r){return e in t?t[e]:r},p=function(t,e){return function(r){if(r.track<1)throw Error("Invalid track index: "+r.track+". Track must be between two other tracks.");var i=t==="column"?e.columnMinSizes||{}:e.rowMinSizes||{},s=t==="column"?"columnMinSize":"rowMinSize";return new u(t,Object.assign({},{minSizeStart:A(i,r.track-1,n(e,s,n(e,"minSize",0))),minSizeEnd:A(i,r.track+1,n(e,s,n(e,"minSize",0)))},r),e)}},g=function(e){var r=this;this.columnGutters={},this.rowGutters={},this.options=Object.assign({},{columnGutters:e.columnGutters||[],rowGutters:e.rowGutters||[],columnMinSizes:e.columnMinSizes||{},rowMinSizes:e.rowMinSizes||{}},e),this.options.columnGutters.forEach(function(i){r.columnGutters[i.track]=p("column",r.options)(i)}),this.options.rowGutters.forEach(function(i){r.rowGutters[i.track]=p("row",r.options)(i)})};g.prototype.addColumnGutter=function(e,r){this.columnGutters[r]&&this.columnGutters[r].destroy(),this.columnGutters[r]=p("column",this.options)({element:e,track:r})};g.prototype.addRowGutter=function(e,r){this.rowGutters[r]&&this.rowGutters[r].destroy(),this.rowGutters[r]=p("row",this.options)({element:e,track:r})};g.prototype.removeColumnGutter=function(e,r){var i=this;r===void 0&&(r=!0),this.columnGutters[e]&&this.columnGutters[e].destroy(r,function(){delete i.columnGutters[e]})};g.prototype.removeRowGutter=function(e,r){var i=this;r===void 0&&(r=!0),this.rowGutters[e]&&this.rowGutters[e].destroy(r,function(){delete i.rowGutters[e]})};g.prototype.handleDragStart=function(e,r,i){r==="column"?(this.columnGutters[i]&&this.columnGutters[i].destroy(),this.columnGutters[i]=p("column",this.options)({track:i}),this.columnGutters[i].startDragging(e)):r==="row"&&(this.rowGutters[i]&&this.rowGutters[i].destroy(),this.rowGutters[i]=p("row",this.options)({track:i}),this.rowGutters[i].startDragging(e))};g.prototype.destroy=function(e){var r=this;e===void 0&&(e=!0),Object.keys(this.columnGutters).forEach(function(i){return r.columnGutters[i].destroy(e,function(){delete r.columnGutters[i]})}),Object.keys(this.rowGutters).forEach(function(i){return r.rowGutters[i].destroy(e,function(){delete r.rowGutters[i]})})};function Q(t){return new g(t)}const tt=typeof atob=="function",et=typeof btoa=="function",y=typeof Buffer=="function",P=typeof TextDecoder=="function"?new TextDecoder:void 0,L=typeof TextEncoder=="function"?new TextEncoder:void 0,rt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",v=Array.prototype.slice.call(rt),w=(t=>{let e={};return t.forEach((r,i)=>e[r]=i),e})(v),it=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,h=String.fromCharCode.bind(String),M=typeof Uint8Array.from=="function"?Uint8Array.from.bind(Uint8Array):(t,e=r=>r)=>new Uint8Array(Array.prototype.slice.call(t,0).map(e)),st=t=>t.replace(/=/g,"").replace(/[+\/]/g,e=>e=="+"?"-":"_"),B=t=>t.replace(/[^A-Za-z0-9\+\/]/g,""),ot=t=>{let e,r,i,s,o="";const a=t.length%3;for(let c=0;c<t.length;){if((r=t.charCodeAt(c++))>255||(i=t.charCodeAt(c++))>255||(s=t.charCodeAt(c++))>255)throw new TypeError("invalid character found");e=r<<16|i<<8|s,o+=v[e>>18&63]+v[e>>12&63]+v[e>>6&63]+v[e&63]}return a?o.slice(0,a-3)+"===".substring(a):o},U=et?t=>btoa(t):y?t=>Buffer.from(t,"binary").toString("base64"):ot,nt=y?t=>Buffer.from(t).toString("base64"):t=>{let r=[];for(let i=0,s=t.length;i<s;i+=4096)r.push(h.apply(null,t.subarray(i,i+4096)));return U(r.join(""))},at=t=>{if(t.length<2){var e=t.charCodeAt(0);return e<128?t:e<2048?h(192|e>>>6)+h(128|e&63):h(224|e>>>12&15)+h(128|e>>>6&63)+h(128|e&63)}else{var e=65536+(t.charCodeAt(0)-55296)*1024+(t.charCodeAt(1)-56320);return h(240|e>>>18&7)+h(128|e>>>12&63)+h(128|e>>>6&63)+h(128|e&63)}},ut=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,ht=t=>t.replace(ut,at),F=y?t=>Buffer.from(t,"utf8").toString("base64"):L?t=>nt(L.encode(t)):t=>U(ht(t)),b=(t,e=!1)=>e?st(F(t)):F(t),ct=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,lt=t=>{switch(t.length){case 4:var e=(7&t.charCodeAt(0))<<18|(63&t.charCodeAt(1))<<12|(63&t.charCodeAt(2))<<6|63&t.charCodeAt(3),r=e-65536;return h((r>>>10)+55296)+h((r&1023)+56320);case 3:return h((15&t.charCodeAt(0))<<12|(63&t.charCodeAt(1))<<6|63&t.charCodeAt(2));default:return h((31&t.charCodeAt(0))<<6|63&t.charCodeAt(1))}},ft=t=>t.replace(ct,lt),dt=t=>{if(t=t.replace(/\s+/g,""),!it.test(t))throw new TypeError("malformed base64.");t+="==".slice(2-(t.length&3));let e,r="",i,s;for(let o=0;o<t.length;)e=w[t.charAt(o++)]<<18|w[t.charAt(o++)]<<12|(i=w[t.charAt(o++)])<<6|(s=w[t.charAt(o++)]),r+=i===64?h(e>>16&255):s===64?h(e>>16&255,e>>8&255):h(e>>16&255,e>>8&255,e&255);return r},I=tt?t=>atob(B(t)):y?t=>Buffer.from(t,"base64").toString("binary"):dt,gt=y?t=>M(Buffer.from(t,"base64")):t=>M(I(t),e=>e.charCodeAt(0)),mt=y?t=>Buffer.from(t,"base64").toString("utf8"):P?t=>P.decode(gt(t)):t=>ft(I(t)),pt=t=>B(t.replace(/[-_]/g,e=>e=="-"?"+":"/")),k=t=>mt(pt(t)),d=t=>document.querySelector(t);Q({columnGutters:[{track:1,element:d(".vertical--gutter")}],rowGutters:[{track:1,element:d(".horizontal--gutter")}]});const S=d("#js"),G=d("#css"),T=d("#html");S.addEventListener("input",D);G.addEventListener("input",D);T.addEventListener("input",D);function yt(){const{pathname:t}=window.location,[e,r,i]=t.slice(1).split("%7C"),s=k(e),o=k(r),a=k(i);T.value=s,G.value=o,S.value=a;const c=j({html:s,css:o,js:a});d("iframe").setAttribute("srcdoc",c)}function D(){const t=T.value,e=G.value,r=S.value,i=`${b(t)}|${b(e)}|${b(r)}`;window.history.replaceState(null,null,`/${i}`);const s=j({html:t,css:e,js:r});d("iframe").setAttribute("srcdoc",s)}const j=({html:t,css:e,js:r})=>`
    <!DOCTYPE html>
    <html lang="en">
    <head>
       <style>
            ${e}
       </style>
    </head>
    <body>        
        ${t}
        <script>
            ${r}
        <\/script>
    </body>
    </html>
    `;yt();