(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([e.id,"body {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n\n.three {\n  width: 300px;\n}\n\n.task-list {\n  list-style: none;\n}\n\n.task-list li {\n  padding: 2.5px 0 2.5px 0;\n  border: 1px lightgray solid;\n  margin-left: -40px;\n  display: flex;\n  position: relative;\n}\n\n.fas {\n  position: absolute;\n}\n\n.fas:hover,\n.remove-bar:hover {\n  cursor: pointer;\n}\n\n.fa-trash-alt {\n  right: 10px;\n}\n\n.fa-edit {\n  right: 40px;\n}\n",""]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],d=o[l]||0,u="".concat(l," ").concat(d);o[l]=d+1;var p=n(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var m=a(f,r);r.byIndex=s,t.splice(s,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=n(o[i]);t[s].references--}for(var c=r(e,a),l=0;l<o.length;l++){var d=n(o[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=n(379),t=n.n(e),r=n(795),a=n.n(r),o=n(569),i=n.n(o),s=n(565),c=n.n(s),l=n(216),d=n.n(l),u=n(589),p=n.n(u),f=n(426),m={};m.styleTagTransform=p(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=d(),t()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const v=e=>{for(let t=0;t<e.length;t+=1)e[t].id=parseInt([t],10)+1},h=document.querySelector(".task-list"),y=document.getElementById("task-form"),g=document.getElementById("form-input");let x=JSON.parse(localStorage.getItem("list"))||[];const b=()=>{localStorage.setItem("list",JSON.stringify(x))},E=()=>{(e=>{for(;e.firstChild;)e.removeChild(e.firstChild)})(h),x.forEach((e=>{const t=document.createElement("li");t.classList.add("task");const n=document.createElement("label");n.classList.add("task-label");const r=document.createElement("i");r.classList.add("fas"),r.classList.add("fa-trash-alt");const a=document.createElement("i");a.classList.add("fas"),a.classList.add("fa-edit"),n.innerHTML=e.name,t.append(n),t.append(r),t.append(a),h.appendChild(t),r.addEventListener("click",(t=>{t.target.parentNode.remove();const n=x.indexOf(e);x.splice(n,1),v(x),b()})),a.addEventListener("click",(()=>{const o=document.createElement("input"),i=document.createElement("button");o.type="text",o.placeholder="Enter new task name",i.type="submit",i.innerText="Save",n.innerText="",t.removeChild(a),t.removeChild(r),t.appendChild(o),t.appendChild(i),i.addEventListener("click",(()=>{e.name=o.value,b(),E()}))}))}))};y.addEventListener("submit",(e=>{e.preventDefault();const t=g.value;if(""===t)return;const n={id:0,name:t,completed:!1};g.value=null,x.push(n),v(x),b(),E()})),E()})()})();