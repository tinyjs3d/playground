var e=Object.defineProperty,r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,o=(r,t,n)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[t]=n;import{R as l,D as c,a,B as i,S as s,b as u,c as m}from"./vendor.6a5903cd.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?r.credentials="include":"anonymous"===e.crossorigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();function d(){return l.createElement("main",null,l.createElement(c,{onChange:()=>{}},(e=>l.createElement(a.DeviceFrameset,((e,l)=>{for(var c in l||(l={}))t.call(l,c)&&o(e,c,l[c]);if(r)for(var c of r(l))n.call(l,c)&&o(e,c,l[c]);return e})({},e),l.createElement("canvas",{id:"J-canvas"})))))}function f(){return l.createElement(i,null,l.createElement(s,null,l.createElement(u,{path:"/"},l.createElement(d,null))))}m.render(l.createElement(l.StrictMode,null,l.createElement(f,null)),document.getElementById("root"));
