!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function r(t,e={},n=""){let r=document.createElement(t),o=Object.getOwnPropertyNames(e);for(let t=0;t<o.length;t++)r.setAttribute(o[t],e[o[t]]);return r.innerHTML=n,r}function o(t,e){e.appendChild(t)}function i(t,e,n,i,u){if(""!==u&&u){let c=r("div",{class:"rows"});o(r("img",{src:(a=i,"lab3/img/"+a+".svg")}),c);let l=r(e,{id:n},u);(e="a")&&l.setAttribute("href",u),o(l,c),o(c,t)}var a}function u(){let t=document.body.getElementsByTagName("main");if(t.length>0)for(let e=0;e<t.length;e++)document.body.removeChild(t[e]);let e=document.getElementById("nickname").value;var n;fetch((n=e,"https://api.github.com/users/"+n)).then(function(t){if(t.status>100&&t.status<=400)return t.json();throw 404===t.status?new Error("NOT FOUND"):t.status>400&&t.status<500?new Error("SOME CLIENT ERROR"):t.status>500&&t.status<600?new Error("SOME SERVER ERROR"):new Error("UNEXPECTED STATE")}).then(t=>(function(t){console.log(JSON.stringify(t));let e=document.createDocumentFragment(),n=r("main"),u=r("div",{id:"main"});o(r("img",{id:"picture",src:t.avatar_url}),u);let a=r("div"),c=r("div");o(r("h1",{id:"name"},t.name),c),o(r("h3",{id:"p1"},t.login),c),o(c,a);let l=r("div");o(r("p",{id:"bio"},t.bio),l),o(l,a),o(r("hr"),a);let s=r("div");i(s,"span","company","people",t.company),i(s,"span","location","location",t.location),i(s,"span","email","mail",t.email),i(s,"a","blog","link",t.blog),o(s,a),o(a,u),o(u,n),o(n,e),document.body.appendChild(e)})(t)).catch(t=>(function(t){let e=document.createDocumentFragment(),n=r("main");o(r("h1",{},t.toString()),n),o(n,e),o(e,document.body)})(t))}n.r(e),n.d(e,"func",function(){return u}),document.getElementById("btnSubmit").addEventListener("click",u)}]);