function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=o.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){t[e]=o},o.parcelRequired7c6=r);var l=r("eWCmQ");const i=document.querySelector("button"),u=document.querySelector('input[name = "delay"]'),c=document.querySelector('input[name = "step"]'),d=document.querySelector('input[name = "amount"]');function s(e,o){return new Promise(((n,t)=>{const r=Math.random()>.3,l={position:e,delay:o};setTimeout((()=>{r?n(l):t(l)}),o)}))}i.addEventListener("click",(function(o){o.preventDefault();const n=Number(u.value),t=Number(c.value),r=Number(d.value);console.log(n),console.log(t),console.log(r);for(let o=0;o<r;o+=1)console.log(n+t*o),s(o+1,n+t*o).then((({position:o,delay:n})=>{e(l).Notify.success(`✅ Fulfilled promise ${o} in ${n}ms`)})).catch((({position:o,delay:n})=>{e(l).Notify.failure(`❌ Rejected promise ${o} in ${n}ms`)}))}));
//# sourceMappingURL=03-promises.4a034324.js.map