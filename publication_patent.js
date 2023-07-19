(()=>{"use strict";const e=e=>{const t=e.target.textContent;document.querySelectorAll(".publication__year-container").forEach((e=>{const n=e.getAttribute("year-range");e.style.display=n===t||"All"===t?"block":"none"})),document.querySelectorAll(".tag__item").forEach((e=>{e.classList.toggle("selected",e.textContent===t)}))};((e,t)=>{const n=new XMLHttpRequest;n.open("GET","https://sheets.googleapis.com/v4/spreadsheets/1yUQMu8uweG0MZS-OEqG67ngpCQk_7-w2JoAuqM4rULg/values/Patent?key=AIzaSyCh-FsHmecf1ccv4mLx9HwCJINIb86RVVo",!0),n.onload=function(){if(200===n.status){var e=n.responseText;const t=(e=>{const t=e.values[0],n=[];for(let c=1;c<e.values.length;c++){let s={},o=e.values[c];for(let e=0;e<t.length;e++)s[t[e]]=o[e];n.push(s)}return n})(JSON.parse(e));(e=>{const t=document.querySelector(".publication-container"),n={"2020~":[],"2015~2019":[],"2006~2014":[]};e.forEach((e=>{let{Date:t}=e;t=parseInt(t.split("-")[0]),t>=2020?n["2020~"].push(e):t>=2015?n["2015~2019"].push(e):n["2006~2014"].push(e)})),Object.entries(n).forEach((([e,n])=>{const c=(e=>{const t=document.createElement("div");t.classList.add("publication__year-container"),t.setAttribute("year-range",e);const n=document.createElement("div");n.classList.add("publication__year-title");const c=document.createElement("h3");c.classList.add("title"),c.textContent=e,n.appendChild(c),t.appendChild(n);const s=document.createElement("div");return s.classList.add("publication__list-container"),t.appendChild(s),t})(e);t.appendChild(c);const s=c.querySelector(".publication__list-container"),o=n.length;n.forEach(((e,t)=>{let{ImageID:n,Title:c,Inventors:i,Number:a,Date:l,Country:r}=e;const d=document.createElement("div");d.classList.add("publication__list");const p=document.createElement("div");p.classList.add("publication__list-index"),p.textContent=(o-t).toString();const u=document.createElement("img");u.classList.add("publication__list-image"),u.src=`https://drive.google.com/uc?export=view&id=${n}`;const m=document.createElement("div");m.classList.add("publication__list-content");const h=document.createElement("h4");h.classList.add("title"),h.innerHTML=`${c}`;const _=document.createElement("p");_.classList.add("description"),i=i.split("|").join(", "),a=String(a).replace(/0+$/,""),r?i=i.split(", ").map((e=>{const t=e.split(" "),n=t.pop();return`${t.map((e=>e[0])).join(". ")}. ${n}`})).join(", "):(r="대한민국",a=a.slice(0,2)+"-"+a.slice(2)),_.innerHTML=`${i}<br>${r} 특허 ${a} (${l})`,m.appendChild(h),m.appendChild(_),d.appendChild(p),d.appendChild(u),d.appendChild(m),s.appendChild(d)}))}))})(t)}},n.onerror=function(){console.error("요청 실패")},n.send()})(),document.querySelectorAll(".tag__item").forEach((t=>{t.addEventListener("click",e)}))})();