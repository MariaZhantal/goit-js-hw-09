!function(){var t,e=document.querySelector("[data-start]"),a=document.querySelector("[data-stop]");function n(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));document.body.style.backgroundColor=t}e.addEventListener("click",(function(){e.disabled=!0,n(),t=setInterval(n,1e3)})),a.addEventListener("click",(function(){clearInterval(t),e.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.14bf5f64.js.map
