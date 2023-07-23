(()=>{"use strict";const t=t=>{const e=t.target.textContent;document.querySelectorAll(".publication__year-container").forEach((t=>{const n=t.getAttribute("year-range");t.style.display=n===e||"All"===e?"block":"none"})),document.querySelectorAll(".tag__item").forEach((t=>{t.classList.toggle("selected",t.textContent===e)}))};((t,e)=>{const n=new XMLHttpRequest;n.open("GET","https://sheets.googleapis.com/v4/spreadsheets/1yUQMu8uweG0MZS-OEqG67ngpCQk_7-w2JoAuqM4rULg/values/International Journal?key=AIzaSyCh-FsHmecf1ccv4mLx9HwCJINIb86RVVo",!0),n.onload=function(){if(200===n.status){var t=n.responseText;const e=(t=>{const e=t.values[0],n=[];for(let c=1;c<t.values.length;c++){let s={},o=t.values[c];for(let t=0;t<e.length;t++)s[e[t]]=o[t];n.push(s)}return n})(JSON.parse(t));(t=>{const e=document.querySelector(".publication-container"),n={"2020~":[],"2004~2019":[],"1999~2003":[]};t.forEach((t=>{const{Year:e}=t;e>=2020?n["2020~"].push(t):e>=2004?n["2004~2019"].push(t):n["1999~2003"].push(t)})),Object.entries(n).forEach((([t,n])=>{const c=(t=>{const e=document.createElement("div");e.classList.add("publication__year-container"),e.setAttribute("year-range",t);const n=document.createElement("div");n.classList.add("publication__year-title");const c=document.createElement("h3");c.classList.add("title"),c.textContent=t,n.appendChild(c),e.appendChild(n);const s=document.createElement("div");return s.classList.add("publication__list-container"),e.appendChild(s),e})(t);e.appendChild(c);const s=c.querySelector(".publication__list-container");n.length,n.forEach(((t,e)=>{let{Authors:n,Title:c,Publication:o,Volume:a,Pages:l,Year:i,Highlight:r}=t;var d;d=r,n=n.split("; ").map((t=>t.trim())).map((t=>{const e=t.split(", "),n=e[1].match(/[A-Z]/g),c=e[0],s=`${n.join(". ")}. ${c}`;return"y"===d&&"D. Kim"===s?`<u>${s}</u><sup>*</sup>`:s})).join(", ");const u=document.createElement("div");u.classList.add("publication__list");const p=document.createElement("div");p.classList.add("publication__list-content");const h=document.createElement("h4");h.classList.add("title"),h.innerHTML=`${c}`;const m=document.createElement("p");m.classList.add("description"),m.innerHTML=`${n} (${i})<br>${o}, ${a}, ${l}`,p.appendChild(h),p.appendChild(m),u.appendChild(p),s.appendChild(u)}))}))})(e)}},n.onerror=function(){console.error("요청 실패")},n.send()})(),document.querySelectorAll(".tag__item").forEach((e=>{e.addEventListener("click",t)}))})();