(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const l={demographics:{ageBreakdown:[{range:"18–24",percentage:54.6,isPrimary:!0},{range:"25–34",percentage:34.4,isPrimary:!0},{range:"35–44",percentage:7.2,isPrimary:!1},{range:"45–54",percentage:2.2,isPrimary:!1},{range:"55+",percentage:1.6,isPrimary:!1}],locations:[{country:"South Africa",flag:"🇿🇦",isPrimary:!0},{country:"Eswatini",flag:"🇸🇿",isPrimary:!0},{country:"Nigeria",flag:"🇳🇬",isPrimary:!1},{country:"United States",flag:"🇺🇸",isPrimary:!1},{country:"Zimbabwe",flag:"🇿🇼",isPrimary:!1},{country:"Kenya",flag:"🇰🇪",isPrimary:!1},{country:"Botswana",flag:"🇧🇼",isPrimary:!1},{country:"Zambia",flag:"🇿🇲",isPrimary:!1},{country:"Ghana",flag:"🇬🇭",isPrimary:!1},{country:"Liberia",flag:"🇱🇷",isPrimary:!1}]},brandFits:["CREATOR TOOLS","AI","EDITING SOFTWARE","SMARTPHONES","CAMERAS","CREATOR EQUIPMENT","EDUCATION","FASHION","BEAUTY","LIFESTYLE","TRAVEL","HOTELS & RESORTS","TOURISM","EVENTS"]};function m(){const i=document.querySelectorAll(".reveal-on-scroll"),e=new IntersectionObserver((r,o)=>{r.forEach(s=>{s.isIntersecting&&(s.target.classList.add("active"),o.unobserve(s.target))})},{threshold:.15});i.forEach(r=>e.observe(r));const a=document.querySelectorAll("[data-counter]"),n=new IntersectionObserver((r,o)=>{r.forEach(s=>{s.isIntersecting&&(g(s.target),o.unobserve(s.target))})},{threshold:.3});a.forEach(r=>n.observe(r));const t=document.querySelector(".demo-chart-box");t&&new IntersectionObserver((o,s)=>{o.forEach(c=>{c.isIntersecting&&(y(),s.unobserve(c.target))})},{threshold:.2}).observe(t)}function g(i){const e=parseFloat(i.getAttribute("data-target")),a=i.getAttribute("data-suffix")||"",n=i.getAttribute("data-prefix")||"",t=e%1!==0;let r=0;const o=1800,s=60,c=o/s,d=e/s,u=setInterval(()=>{r+=d,r>=e&&(r=e,clearInterval(u));const f=t?r.toFixed(1):Math.floor(r).toLocaleString();i.textContent=`${n}${f}${a}`},c)}function y(){document.querySelectorAll(".age-bar-fill").forEach(n=>{const t=n.getAttribute("data-width");t&&(n.style.width=t)});const e=document.querySelector(".gender-fill-female"),a=document.querySelector(".gender-fill-male");e&&a&&(e.style.width=e.getAttribute("data-width")||"56%",a.style.width=a.getAttribute("data-width")||"44%")}function v(){const i=document.getElementById("contact-modal"),e=document.getElementById("video-modal"),a=document.querySelectorAll(".modal-close-btn");document.addEventListener("click",t=>{t.target.closest('[data-open-modal="contact"]')&&(t.preventDefault(),i&&i.classList.add("active"))}),a.forEach(t=>{t.addEventListener("click",()=>{i&&i.classList.remove("active"),e&&e.classList.remove("active")})}),[i,e].forEach(t=>{t&&t.addEventListener("click",r=>{r.target===t&&t.classList.remove("active")})});const n=document.getElementById("collab-form");n&&n.addEventListener("submit",t=>{t.preventDefault();const r=n.querySelector('button[type="submit"]'),o=r.innerHTML;r.disabled=!0,r.innerHTML='SENDING... <i data-lucide="loader-2" class="spin"></i>',window.lucide&&window.lucide.createIcons(),setTimeout(()=>{r.disabled=!1,r.innerHTML=o,i&&i.classList.remove("active"),n.reset(),p("Collaboration request sent successfully! Amazing will get back to you shortly.")},1200)})}function p(i){let e=document.getElementById("toast-notification");e||(e=document.createElement("div"),e.id="toast-notification",e.style.cssText=`
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      background: var(--text-primary);
      color: #FFFFFF;
      padding: 1rem 1.5rem;
      border-radius: var(--radius-md);
      box-shadow: var(--shadow-lg);
      font-weight: 700;
      font-size: 0.9rem;
      z-index: 3000;
      display: flex;
      align-items: center;
      gap: 0.75rem;
      transform: translateY(100px);
      opacity: 0;
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      border-left: 4px solid var(--accent-color);
    `,document.body.appendChild(e)),e.innerHTML=`<i data-lucide="check-circle-2" style="color:var(--accent-color);"></i> ${i}`,window.lucide&&window.lucide.createIcons(),requestAnimationFrame(()=>{e.style.transform="translateY(0)",e.style.opacity="1"}),setTimeout(()=>{e.style.transform="translateY(100px)",e.style.opacity="0"},4e3)}document.addEventListener("DOMContentLoaded",()=>{b(),h(),E(),m(),v(),window.lucide&&window.lucide.createIcons()});function b(){const i=document.querySelector(".navbar"),e=document.querySelector(".hamburger-btn"),a=document.querySelector(".nav-links");window.addEventListener("scroll",()=>{window.scrollY>40?i.classList.add("scrolled"):i.classList.remove("scrolled")}),e&&a&&(e.addEventListener("click",()=>{a.classList.toggle("open")}),a.querySelectorAll(".nav-link").forEach(n=>{n.addEventListener("click",()=>{a.classList.remove("open")})}))}function h(){const i=document.getElementById("locations-container");i&&(i.innerHTML=l.demographics.locations.map(a=>`
      <div class="location-chip ${a.isPrimary?"primary-location":""}">
        <span>${a.flag}</span>
        <span>${a.country}</span>
      </div>
    `).join(""));const e=document.getElementById("age-bars-container");e&&(e.innerHTML=l.demographics.ageBreakdown.map(a=>`
      <div class="age-bar-item">
        <div class="age-bar-header">
          <span>${a.range}</span>
          <span style="color:${a.isPrimary?"var(--accent-color)":"inherit"}">${a.percentage}%</span>
        </div>
        <div class="age-bar-track">
          <div class="age-bar-fill ${a.isPrimary?"highlight":""}" data-width="${a.percentage}%"></div>
        </div>
      </div>
    `).join(""))}function E(){const i=document.getElementById("brand-fit-cloud");i&&(i.innerHTML=l.brandFits.map(e=>`
      <div class="brand-fit-tag">${e}</div>
    `).join(""))}
