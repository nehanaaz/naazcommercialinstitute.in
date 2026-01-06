import{j as r}from"./jsx-runtime.D_zvdyIk.js";import{B as n}from"./button.DrXUBKiw.js";import{r as s}from"./index.DPV4Kj-g.js";import{c as i}from"./createLucideIcon.CxwfycXU.js";import"./index.DON8ckDI.js";import"./utils.066Up6zu.js";/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]],m=i("share-2",l);function k({title:e,description:o}){const t=s.useCallback(async()=>{if(!navigator.share){console.log("Web Share API not supported");return}const a={title:e,text:o,url:window.location.href};try{await navigator.share(a)}catch(c){console.log("Share API Error",c)}},[]);return r.jsxs(n,{variant:"outline",size:"sm",className:"cursor-pointer gap-2 bg-transparent",onClick:t,children:[r.jsx(m,{className:"size-4"}),"Share"]})}export{k as BlogShare};
