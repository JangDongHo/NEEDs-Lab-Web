(()=>{var t={139:()=>{const t=t=>{const o=t.target.textContent;r.forEach((t=>{const r=t.getAttribute("research-tag");t.style.display=r===o?"block":"none"})),e.forEach((t=>{t.classList.toggle("selected",t.textContent===o)}))},r=Array.from(document.querySelectorAll(".research__list-container")),e=Array.from(document.querySelectorAll(".tag__item"));e.forEach((r=>{r.addEventListener("click",t)})),r.forEach((t=>{const r=t.getAttribute("research-tag");t.style.display="Research 1"===r?"block":"none"}))}},r={};function e(o){var c=r[o];if(void 0!==c)return c.exports;var n=r[o]={exports:{}};return t[o](n,n.exports,e),n.exports}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var r=e.g.document;if(!t&&r&&(r.currentScript&&(t=r.currentScript.src),!t)){var o=r.getElementsByTagName("script");if(o.length)for(var c=o.length-1;c>-1&&!t;)t=o[c--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})(),(()=>{"use strict";e(139),e.p,e.p,e.p})()})();