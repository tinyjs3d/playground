var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,a=(t,n,i)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[n]=i,l=(e,t)=>{for(var n in t||(t={}))r.call(t,n)&&a(e,n,t[n]);if(i)for(var n of i(t))s.call(t,n)&&a(e,n,t[n]);return e},o=(e,i)=>t(e,n(i)),c=(e,t,n)=>(a(e,"symbol"!=typeof t?t+"":t,n),n);import{_ as m,m as d,R as h,B as u,T as p,I as g,D as y,a as E,b as T,S as f,c as v,d as w}from"./vendor.752360b2.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();class b extends Tiny.Container{constructor(e){super(),c(this,"option"),c(this,"model"),c(this,"setLights",(e=>{const t=new(0,Tiny.three.glTFLightParser)(e).getLightCfg();Tiny.three.LightingEnvironment.main.lights=[],t.forEach((e=>{const t=Object.assign(new Tiny.three.Light,e);Tiny.three.LightingEnvironment.main.lights.push(t)})),Tiny.three.LightingEnvironment.main.lights.push(Object.assign(new Tiny.three.Light,{color:[1,1,1],intensity:.1,type:Tiny.three.LightType.ambient}))})),this.option=e,this.init()}async init(){try{const e=await this.loadResource(),t=e.scene.gltf,n=e.model.gltf;this.setEnvironmentLight(t),this.setLights(n),this.model=Tiny.three.Model.from(n),this.addChild(this.model)}catch(e){alert("模型渲染失败，请检查你输入的 gltf 链接")}}_destroy(){var e;null==(e=null==this?void 0:this.model)||e.meshes.forEach((e=>e.destroy()))}loadResource(){const{model:e}=this.option,t=new Tiny.loaders.Loader;return t.add({name:"model",url:e}),t.add({name:"scene",url:"https://gw.alipayobjects.com/os/H5App-BJ/1632466215699-gltf/scene.gltf"}),new Promise(((e,n)=>{t.load(((t,n)=>{e(n)})).on("error",(e=>{n(e)}))}))}setEnvironmentLight(e){var t,n;if(null==(n=null==(t=null==e?void 0:e.descriptor)?void 0:t.extensions)?void 0:n.EXT_lights_image_based.lights){const t=e.descriptor.extensions.EXT_lights_image_based.lights[0],n=e.images,i=[],r=[],s=["POSITIVE_X","NEGATIVE_X","POSITIVE_Y","NEGATIVE_Y","NEGATIVE_Z","POSITIVE_Z"];for(let e=0;e<s.length;e++){const a=`TEXTURE_CUBE_MAP_${s[e]}`,l=[],o=[];for(let i=0;i<t.specularImages.length;i++){const r=n[t.specularImages[i][e]];i===t.specularImages.length-1&&l.push(r),o.push(r)}i.push(new Tiny.three.MipmapResource(l,Tiny.three.TARGETS[a])),r.push(new Tiny.three.MipmapResource(o,Tiny.three.TARGETS[a]))}const a=new Tiny.three.CubeMipmapResource(i,1),l=new Tiny.three.CubeMipmapTexture(a),o=new Tiny.three.CubeMipmapResource(r,t.specularImages.length),c=new Tiny.three.CubeMipmapTexture(o),m=new Tiny.three.ImageBasedLighting({specular:c,diffuse:l,intensity:1.8});Tiny.three.LightingEnvironment.main.imageBasedLighting=m}}}function C(){const[e,t]=m.exports.useState(null),[n,i]=m.exports.useState(null),[r,s]=m.exports.useState(""),[a,c]=m.exports.useState([]),T=m.exports.useCallback((()=>{try{const e=localStorage.getItem("gltfPreviewRecords")||"";c(JSON.parse(e))}catch(e){}}),[]),f=m.exports.useCallback((e=>{const t=[...a];t.push({name:e,url:e,key:t.length?t[t.length-1].key+1:0,previewTime:(new Date).toLocaleString()}),c(t),localStorage.setItem("gltfPreviewRecords",JSON.stringify(t.slice(0,9)))}),[a]),v=m.exports.useCallback((e=>{const t=[...a],n=t.findIndex((t=>t.key===e.key));-1!==n&&(t.splice(n,1),c(t)),localStorage.setItem("gltfPreviewRecords",JSON.stringify(t))}),[a]),w=m.exports.useCallback((()=>{const e=prompt("请为JSON文件命名",""),t=document.createElement("a");t.download=`${e}.json`,t.style.display="none";var n=new Blob([JSON.stringify(a.map((e=>({name:e.name,url:e.url}))))]);t.href=URL.createObjectURL(n),document.body.appendChild(t),t.click(),document.body.removeChild(t)}),[[a]]),C=m.exports.useCallback((e=>{const t=prompt("请输入模型名称",e.name);if(!t)return;const n=o(l({},e),{name:t}),i=[...a],r=i.findIndex((t=>t.key===e.key));-1!==r&&(i.splice(r,1,n),c(i)),localStorage.setItem("gltfPreviewRecords",JSON.stringify(i))}),[a]),I=m.exports.useCallback((()=>{if(!e)return;n&&n._destroy();const i=e.view.parentElement;Tiny.three.Camera.main=null,Tiny.three.LightingEnvironment.main.destroy(),Tiny.three.destroyTextureCache(),e.renderer3d.destroy(),Tiny.three.detach(e),e.destroy(!0,{children:!0,texture:!0,baseTexture:!0});const r=document.createElement("canvas");r.id="J-canvas",null==i||i.appendChild(r),t(null)}),[e,t]),x=m.exports.useCallback((e=>{I();const n={width:375,height:812};setTimeout((()=>{var s,a,l;const o=document.getElementById("J-canvas");o&&"screen"===(null==(s=o.parentElement)?void 0:s.className)&&(n.width=null==(a=o.parentElement)?void 0:a.clientWidth,n.height=null==(l=o.parentElement)?void 0:l.clientHeight);const c=new Tiny.Application({showFPS:!0,dpi:2,canvasId:"J-canvas",width:n.width,height:n.height,fixSize:!0,renderType:Tiny.RENDERER_TYPE.WEBGL,renderOptions:{antialias:!0,backgroundColor:1974304}});Tiny.three.attach(c);const m=new b({model:e||r});c.run(m),t(c),i(m);new Tiny.three.CameraOrbitControl(c.view).distance=1.5}),700)}),[I,t,r]);m.exports.useEffect((()=>{T()}),[]);const S=m.exports.useCallback((e=>{const t=document.createElement("input");document.body.appendChild(t),t.setAttribute("value",e),t.select(),document.execCommand("copy")&&(document.execCommand("copy"),d.success("复制成功")),document.body.removeChild(t)}),[]),_=[{title:"模型名称",dataIndex:"name",key:"name",render:(e,t)=>h.createElement("a",{href:t.url},e)},{title:"预览时间",dataIndex:"previewTime",key:"previewTime"},{title:"操作",key:"action",render:(e,t)=>h.createElement(h.Fragment,null,h.createElement(u,{onClick:()=>k(t.url)},"预览"),h.createElement(u,{onClick:()=>S(t.url)},"复制模型链接"),h.createElement(u,{onClick:()=>v(t)},"删除记录"),h.createElement(u,{onClick:()=>C(t)},"重命名"))}],k=e=>{s(e),x(e)};return h.createElement("div",{className:"app"},h.createElement("div",{className:"left-side"},h.createElement("h2",null,"预览记录"),h.createElement(u,{onClick:()=>w()},"批量导出JSON"),h.createElement(p,{columns:_,dataSource:a})),h.createElement("main",null,h.createElement("div",{className:"preview-input"},h.createElement(g.Search,{placeholder:"请输入 gltf 链接",allowClear:!0,enterButton:"预览",size:"large",onSearch:e=>{e?(s(e),x(e),f(e)):d.error("请先输入 gltf 链接")}})),h.createElement(y,{onChange:()=>{x()}},(e=>h.createElement(E.DeviceFrameset,l({},e),h.createElement("canvas",{id:"J-canvas"}))))))}class I extends Tiny.Container{constructor(e){super(),c(this,"option"),c(this,"model"),c(this,"setLights",(e=>{const t=new(0,Tiny.three.glTFLightParser)(e).getLightCfg();Tiny.three.LightingEnvironment.main.lights=[],t.forEach((e=>{const t=Object.assign(new Tiny.three.Light,e);Tiny.three.LightingEnvironment.main.lights.push(t)})),Tiny.three.LightingEnvironment.main.lights.push(Object.assign(new Tiny.three.Light,{color:[1,1,1],intensity:.1,type:Tiny.three.LightType.ambient}))})),this.option=e,this.init()}async init(){try{const e=await this.loadResource(),t=e.scene.gltf,n=e.model.gltf;this.setEnvironmentLight(t),this.setLights(n),this.model=Tiny.three.Model.from(n),this.addChild(this.model)}catch(e){alert("模型渲染失败，请检查你输入的 gltf 链接")}}_destroy(){var e;null==(e=null==this?void 0:this.model)||e.meshes.forEach((e=>e.destroy()))}loadResource(){const{model:e}=this.option,t=new Tiny.loaders.Loader;return t.add({name:"model",url:e}),t.add({name:"scene",url:"https://gw.alipayobjects.com/os/H5App-BJ/1632466215699-gltf/scene.gltf"}),new Promise(((e,n)=>{t.load(((t,n)=>{e(n)})).on("error",(e=>{n(e)}))}))}setIBL(e){if(e.descriptor.extensions&&e.descriptor.extensions.EXT_lights_image_based&&e.descriptor.extensions.EXT_lights_image_based.lights){const t=e.descriptor.extensions.EXT_lights_image_based.lights[0],n=e.images,i=[];for(let e=0;e<t.irradianceCoefficients.length;e+=3){const n=t.irradianceCoefficients[e],r=t.irradianceCoefficients[e+1],s=t.irradianceCoefficients[e+2];i.push([n,r,s])}const r=[],s=[],a=["POSITIVE_X","NEGATIVE_X","POSITIVE_Y","NEGATIVE_Y","NEGATIVE_Z","POSITIVE_Z"];for(let e=0;e<a.length;e++){const i=`TEXTURE_CUBE_MAP_${a[e]}`,l=[],o=[];for(let r=0;r<t.specularImages.length;r++){const i=n[t.specularImages[r][e]];r===t.specularImages.length-1&&l.push(i),o.push(i)}r.push(new Tiny.three.MipmapResource(l,Tiny.three.TARGETS[i])),s.push(new Tiny.three.MipmapResource(o,Tiny.three.TARGETS[i]))}const l=new Tiny.three.CubeMipmapResource(s,t.specularImages.length),o=new Tiny.three.CubeMipmapTexture(l),c=new Tiny.three.ImageBasedLighting({specular:o,irradianceCoefficients:i,intensity:3});Tiny.three.LightingEnvironment.main.imageBasedLighting=c}}setEnvironmentLight(e){var t,n;if(null==(n=null==(t=null==e?void 0:e.descriptor)?void 0:t.extensions)?void 0:n.EXT_lights_image_based.lights){const t=e.descriptor.extensions.EXT_lights_image_based.lights[0],n=e.images,i=[],r=[],s=["POSITIVE_X","NEGATIVE_X","POSITIVE_Y","NEGATIVE_Y","NEGATIVE_Z","POSITIVE_Z"];for(let e=0;e<s.length;e++){const a=`TEXTURE_CUBE_MAP_${s[e]}`,l=[],o=[];for(let i=0;i<t.specularImages.length;i++){const r=n[t.specularImages[i][e]];i===t.specularImages.length-1&&l.push(r),o.push(r)}i.push(new Tiny.three.MipmapResource(l,Tiny.three.TARGETS[a])),r.push(new Tiny.three.MipmapResource(o,Tiny.three.TARGETS[a]))}const a=new Tiny.three.CubeMipmapResource(i,1),l=new Tiny.three.CubeMipmapTexture(a),o=new Tiny.three.CubeMipmapResource(r,t.specularImages.length),c=new Tiny.three.CubeMipmapTexture(o),m=new Tiny.three.ImageBasedLighting({specular:c,diffuse:l,intensity:1.8});Tiny.three.LightingEnvironment.main.imageBasedLighting=m}}}function x(){const[e,t]=m.exports.useState(null),[n,i]=m.exports.useState(null),[r,s]=m.exports.useState(""),[a,c]=m.exports.useState([]),T=m.exports.useCallback((()=>{try{const e=localStorage.getItem("gltfPreviewRecords")||"";c(JSON.parse(e))}catch(e){}}),[]),f=m.exports.useCallback((e=>{const t=[...a];t.push({name:e,url:e,key:t.length?t[t.length-1].key+1:0,previewTime:(new Date).toLocaleString()}),c(t),localStorage.setItem("gltfPreviewRecords",JSON.stringify(t.slice(0,9)))}),[a]),v=m.exports.useCallback((e=>{const t=[...a],n=t.findIndex((t=>t.key===e.key));-1!==n&&(t.splice(n,1),c(t)),localStorage.setItem("gltfPreviewRecords",JSON.stringify(t))}),[a]),w=m.exports.useCallback((()=>{const e=prompt("请为JSON文件命名",""),t=document.createElement("a");t.download=`${e}.json`,t.style.display="none";var n=new Blob([JSON.stringify(a.map((e=>({name:e.name,url:e.url}))))]);t.href=URL.createObjectURL(n),document.body.appendChild(t),t.click(),document.body.removeChild(t)}),[[a]]),b=m.exports.useCallback((e=>{const t=prompt("请输入模型名称",e.name);if(!t)return;const n=o(l({},e),{name:t}),i=[...a],r=i.findIndex((t=>t.key===e.key));-1!==r&&(i.splice(r,1,n),c(i)),localStorage.setItem("gltfPreviewRecords",JSON.stringify(i))}),[a]),C=m.exports.useCallback((()=>{if(!e)return;n&&n._destroy();const i=e.view.parentElement;Tiny.three.Camera.main=null,Tiny.three.LightingEnvironment.main.destroy(),Tiny.three.destroyTextureCache(),e.renderer3d.destroy(),Tiny.three.detach(e),e.destroy(!0,{children:!0,texture:!0,baseTexture:!0});const r=document.createElement("canvas");r.id="J-canvas",null==i||i.appendChild(r),t(null)}),[e,t]),x=m.exports.useCallback((e=>{C();const n={width:375,height:812};setTimeout((()=>{var s,a,l;const o=document.getElementById("J-canvas");o&&"screen"===(null==(s=o.parentElement)?void 0:s.className)&&(n.width=null==(a=o.parentElement)?void 0:a.clientWidth,n.height=null==(l=o.parentElement)?void 0:l.clientHeight);const c=new Tiny.Application({showFPS:!0,dpi:2,canvasId:"J-canvas",width:n.width,height:n.height,fixSize:!0,renderType:Tiny.RENDERER_TYPE.WEBGL,renderOptions:{antialias:!0,backgroundColor:1974304}});Tiny.three.attach(c);const m=new I({model:e||r});c.run(m),t(c),i(m);new Tiny.three.CameraOrbitControl(c.view).distance=1.5}),700)}),[C,t,r]);m.exports.useEffect((()=>{T()}),[]);const S=m.exports.useCallback((e=>{const t=document.createElement("input");document.body.appendChild(t),t.setAttribute("value",e),t.select(),document.execCommand("copy")&&(document.execCommand("copy"),d.success("复制成功")),document.body.removeChild(t)}),[]),_=[{title:"模型名称",dataIndex:"name",key:"name",render:(e,t)=>h.createElement("a",{href:t.url},e)},{title:"预览时间",dataIndex:"previewTime",key:"previewTime"},{title:"操作",key:"action",render:(e,t)=>h.createElement(h.Fragment,null,h.createElement(u,{onClick:()=>k(t.url)},"预览"),h.createElement(u,{onClick:()=>S(t.url)},"复制模型链接"),h.createElement(u,{onClick:()=>v(t)},"删除记录"),h.createElement(u,{onClick:()=>b(t)},"重命名"))}],k=e=>{s(e),x(e)};return h.createElement("div",{className:"app"},h.createElement("div",{className:"left-side"},h.createElement("h2",null,"预览记录"),h.createElement(u,{onClick:()=>w()},"批量导出JSON"),h.createElement(p,{columns:_,dataSource:a})),h.createElement("main",null,h.createElement("div",{className:"preview-input"},h.createElement(g.Search,{placeholder:"请输入 gltf 链接",allowClear:!0,enterButton:"预览",size:"large",onSearch:e=>{e?(s(e),x(e),f(e)):d.error("请先输入 gltf 链接")}})),h.createElement(y,{onChange:()=>{x()}},(e=>h.createElement(E.DeviceFrameset,l({},e),h.createElement("canvas",{id:"J-canvas"}))))))}function S(){return h.createElement(T,null,h.createElement(f,null,h.createElement(v,{path:"/env"},h.createElement(x,null)),h.createElement(v,{path:"/"},h.createElement(C,null))))}w.render(h.createElement(h.StrictMode,null,h.createElement(S,null)),document.getElementById("root"));