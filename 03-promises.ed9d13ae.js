var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t);var r=t("iQIUW");function l(e){r.Notify.success(e)}function i(e){r.Notify.failure(e)}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();const{delay:n,step:o,amount:t}=e.currentTarget.elements;console.log(n.value,o.value,t.value);const r=new Array(Number(t.value)).fill(0).map(((e,t)=>Number(n.value)+t*Number(o.value)));console.log(r);const u=r.map(((e,n)=>function(e,n){return new Promise(((o,t)=>{const r=Math.random()>.3;setTimeout((()=>{r?o(`Fulfilled promise ${e} in ${n}ms`):t(`Rejected promise ${e} in ${n}ms`)}),n)})).then(l).catch(i)}(n+1,e)));console.log(u),e.currentTarget.reset()}));
//# sourceMappingURL=03-promises.ed9d13ae.js.map
