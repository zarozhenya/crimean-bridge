const e=new Date("2022-08-24T00:00"),t={daysLabel:document.querySelector("[data-days]"),hoursLabel:document.querySelector("[data-hours]"),minutesLabel:document.querySelector("[data-minutes]"),secondsLabel:document.querySelector("[data-seconds]")},o=e=>String(e).padStart(2,"0"),n=()=>{(({days:e,hours:n,minutes:s,seconds:a})=>{t.daysLabel.textContent=o(e),t.hoursLabel.textContent=o(n),t.minutesLabel.textContent=o(s),t.secondsLabel.textContent=o(a)})((()=>{const t=Date.now();let o=(e.getTime()-t)/1e3;const n=Math.floor(o/86400);o-=86400*n;const s=Math.floor(o/3600);o-=3600*s;const a=Math.floor(o/60);return o-=60*a,{days:n,hours:s,minutes:a,seconds:Math.floor(o)}})())};n(),setInterval(n,1e3);
//# sourceMappingURL=index.07892d1e.js.map