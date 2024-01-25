(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var c=n.getElementsByTagName("script");if(c.length)for(var o=c.length-1;o>-1&&!e;)e=c[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})();const e=t=>{const e=t.target.textContent;document.querySelectorAll(".publication__year-container").forEach((t=>{const n=t.getAttribute("year-range");t.style.display=n===e||"All"===e?"block":"none"})),document.querySelectorAll(".tag__item").forEach((t=>{t.classList.toggle("selected",t.textContent===e)}))};((t,e)=>{const n=new XMLHttpRequest;n.open("GET","https://sheets.googleapis.com/v4/spreadsheets/1yUQMu8uweG0MZS-OEqG67ngpCQk_7-w2JoAuqM4rULg/values/Patent?key=AIzaSyCh-FsHmecf1ccv4mLx9HwCJINIb86RVVo",!0),n.onload=function(){if(200===n.status){var t=n.responseText;const e=(t=>{const e=t.values[0],n=[];for(let c=1;c<t.values.length;c++){let o={},i=t.values[c];for(let t=0;t<e.length;t++)o[e[t]]=i[t];n.push(o)}return n})(JSON.parse(t));(t=>{const e=document.querySelector(".publication-container"),n={"2020~":[],"~2019":[]};t.forEach((t=>{let{Date:e}=t;e=parseInt(e.split("-")[0]),e>=2020?n["2020~"].push(t):n["~2019"].push(t)})),Object.entries(n).forEach((([t,n])=>{const c=(t=>{const e=document.createElement("div");e.classList.add("publication__year-container"),e.setAttribute("year-range",t);const n=document.createElement("div");n.classList.add("publication__year-title");const c=document.createElement("h3");c.classList.add("title"),c.textContent=t,n.appendChild(c),e.appendChild(n);const o=document.createElement("div");return o.classList.add("publication__list-container"),e.appendChild(o),e})(t);e.appendChild(c);const o=c.querySelector(".publication__list-container");n.forEach((t=>{let{ImageID:e,Title:n,Inventors:c,Number:i,Date:s,Country:r}=t;const a=document.createElement("div");a.classList.add("publication__list");const l=document.createElement("img");l.classList.add("publication__list-image");const p=e?`https://drive.google.com/thumbnail?id=${e}`:"./images/empty.png";l.src=p;const d=document.createElement("div");d.classList.add("publication__list-content");const u=document.createElement("h4");u.classList.add("title"),u.innerHTML=`${n}`;const m=document.createElement("p");m.classList.add("description"),c=c.split("|").join(", "),i=String(i).replace(/0+$/,""),r?c=c.split(", ").map((t=>{const e=t.split(" "),n=e.pop();return`${e.map((t=>t[0])).join(". ")}. ${n}`})).join(", "):(r="대한민국",i=i.slice(0,2)+"-"+i.slice(2)),m.innerHTML=`${c}<br>${r} 특허 ${i} (${s})`,d.appendChild(u),d.appendChild(m),a.appendChild(l),a.appendChild(d),o.appendChild(a)}))}))})(e)}},n.onerror=function(){console.error("요청 실패")},n.send()})(),document.querySelectorAll(".tag__item").forEach((t=>{t.addEventListener("click",e)})),t.p})();