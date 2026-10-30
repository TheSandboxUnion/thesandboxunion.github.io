import{c as i,j as e,r as x}from"./index-CfZwAMED.js";/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b={name:"circle-alert",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],aliases:["alert-circle"]};b.node;const y=i(b);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};m.node;const f=i(m);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p={name:"eye-off",size:24,node:[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]};p.node;const j=i(p);/**
 * @license lucide-react v1.61.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u={name:"eye",size:24,node:[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]};u.node;const k=i(u),h="w-full rounded-xl border border-sandbox-border bg-sandbox-ivory px-3.5 py-2.5 text-sm text-sandbox-espresso placeholder:text-sandbox-taupe/70 transition-colors focus:border-sandbox-champagne focus:outline-none focus-visible:ring-2 focus-visible:ring-sandbox-champagne/60 disabled:opacity-60 aria-[invalid=true]:border-red-400",g=({label:s,error:a,hint:t,className:o="",children:c,...n})=>{const r=x.useId(),l=a?`${r}-err`:t?`${r}-hint`:void 0,d={id:r,"aria-invalid":!!a,"aria-describedby":l};return e.jsxs("div",{className:o,children:[e.jsxs("label",{htmlFor:r,className:"mb-1.5 block text-xs font-medium text-sandbox-espresso",children:[s,n.required&&e.jsx("span",{className:"text-sandbox-champagne",children:" *"})]}),c?c(d):e.jsx("input",{className:h,...d,...n}),t&&!a&&e.jsx("p",{id:`${r}-hint`,className:"mt-1 text-xs text-sandbox-taupe",children:t}),a&&e.jsx("p",{id:`${r}-err`,className:"mt-1 text-xs text-red-300",children:a})]})},N=({label:s,error:a,hint:t,className:o,...c})=>{const[n,r]=x.useState(!1);return e.jsx(g,{label:s,error:a,hint:t,className:o,required:c.required,children:l=>e.jsxs("div",{className:"relative",children:[e.jsx("input",{className:`${h} pr-11`,...l,...c,type:n?"text":"password"}),e.jsx("button",{type:"button",onClick:()=>r(d=>!d),"aria-label":n?"Hide password":"Show password",className:"absolute inset-y-0 right-0 flex w-11 items-center justify-center rounded-r-xl text-sandbox-taupe hover:text-sandbox-espresso focus:outline-none focus-visible:ring-2 focus-visible:ring-sandbox-champagne",children:n?e.jsx(j,{className:"h-4 w-4"}):e.jsx(k,{className:"h-4 w-4"})})]})})},w=({tone:s,children:a})=>{const t=s==="success"?f:y,o=s==="error"?"border-red-400/40 bg-red-500/10 text-red-200":s==="success"?"border-emerald-400/40 bg-emerald-500/10 text-emerald-200":"border-sandbox-champagne/40 bg-sandbox-champagne/10 text-sandbox-espresso";return e.jsxs("div",{role:s==="error"?"alert":"status",className:`flex items-start gap-2.5 rounded-xl border px-3.5 py-3 text-sm ${o}`,children:[e.jsx(t,{className:"mt-0.5 h-4 w-4 flex-shrink-0","aria-hidden":"true"}),e.jsx("div",{children:a})]})},$=({className:s="h-4 w-4"})=>e.jsx("span",{className:`inline-block animate-spin rounded-full border-2 border-current border-r-transparent ${s}`,"aria-hidden":"true"});export{k as E,g as F,w as N,N as P,$ as S,h as i};
