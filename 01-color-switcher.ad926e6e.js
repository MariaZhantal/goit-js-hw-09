const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let a;function d(){const t=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;document.body.style.backgroundColor=t}t.addEventListener("click",(()=>{t.disabled=!0,d(),a=setInterval(d,1e3)})),e.addEventListener("click",(()=>{clearInterval(a),t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.ad926e6e.js.map
