!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){r[e]=n},e.parcelRequired7c6=t);var o=t("h6c0i");document.querySelector(".prom-form").addEventListener("submit",(function(e){e.preventDefault();var n=e.currentTarget.elements,r=n.delay,t=n.step,i=n.amount;new Array(Number(i.value)).fill(0).map((function(e,n){return Number(r.value)+n*Number(t.value)})).forEach((function(e,n){return function(e,n){return new Promise((function(r,t){var o=Math.random()>.3;setTimeout((function(){o?r("Fulfilled promise ".concat(e," in ").concat(n,"ms")):t("Rejected promise ".concat(e," in ").concat(n,"ms"))}),n)}))}(n+1,e).then(o.Notify.success).catch(o.Notify.failure)})),e.currentTarget.reset()}))}();
//# sourceMappingURL=03-promises.e4551dcf.js.map
