function C(){const e=document.querySelector(".hamburger-menu"),t=document.querySelector(".menu-icon"),o=document.querySelector("#menu-items");e?.addEventListener("click",()=>{const n=e.getAttribute("aria-expanded")==="true";t?.classList.toggle("is-active"),e.setAttribute("aria-expanded",n?"false":"true"),e.setAttribute("aria-label",n?"Open Menu":"Close Menu"),o?.classList.toggle("display-none")})}C(),document.addEventListener("astro:after-swap",C);const ee="astro:before-preparation",te="astro:after-preparation",ne="astro:before-swap",oe="astro:after-swap",re=e=>document.dispatchEvent(new Event(e));class $ extends Event{from;to;direction;navigationType;sourceElement;info;newDocument;constructor(t,o,n,a,s,u,d,r,m){super(t,o),this.from=n,this.to=a,this.direction=s,this.navigationType=u,this.sourceElement=d,this.info=r,this.newDocument=m,Object.defineProperties(this,{from:{enumerable:!0},to:{enumerable:!0,writable:!0},direction:{enumerable:!0,writable:!0},navigationType:{enumerable:!0},sourceElement:{enumerable:!0},info:{enumerable:!0},newDocument:{enumerable:!0,writable:!0}})}}class se extends ${formData;loader;constructor(t,o,n,a,s,u,d,r,m){super(ee,{cancelable:!0},t,o,n,a,s,u,d),this.formData=r,this.loader=m.bind(this,this),Object.defineProperties(this,{formData:{enumerable:!0},loader:{enumerable:!0,writable:!0}})}}class ie extends ${direction;viewTransition;swap;constructor(t,o,n){super(ne,void 0,t.from,t.to,t.direction,t.navigationType,t.sourceElement,t.info,t.newDocument),this.direction=t.direction,this.viewTransition=o,this.swap=n.bind(this,this),Object.defineProperties(this,{direction:{enumerable:!0},viewTransition:{enumerable:!0},swap:{enumerable:!0,writable:!0}})}}async function ae(e,t,o,n,a,s,u,d){const r=new se(e,t,o,n,a,s,window.document,u,d);return document.dispatchEvent(r)&&(await r.loader(),r.defaultPrevented||(re(te),r.navigationType!=="traverse"&&k({scrollX,scrollY}))),r}async function ce(e,t,o){const n=new ie(e,t,o);return document.dispatchEvent(n),n.swap(),n}const le=history.pushState.bind(history),S=history.replaceState.bind(history),k=e=>{history.state&&(history.scrollRestoration="manual",S({...history.state,...e},""))},I=!!document.startViewTransition,O=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),_=(e,t)=>e.pathname===t.pathname&&e.search===t.search;let D,y,L=!1,U;const B=e=>document.dispatchEvent(new Event(e)),V=()=>B("astro:page-load"),ue=()=>{let e=document.createElement("div");e.setAttribute("aria-live","assertive"),e.setAttribute("aria-atomic","true"),e.className="astro-route-announcer",document.body.append(e),setTimeout(()=>{let t=document.title||document.querySelector("h1")?.textContent||location.pathname;e.textContent=t},60)},p="data-astro-transition-persist",W="data-astro-transition",j="data-astro-transition-fallback";let N,E=0;history.state?(E=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):O()&&(S({index:E,scrollX,scrollY},""),history.scrollRestoration="manual");async function de(e,t){try{const o=await fetch(e,t),n=(o.headers.get("content-type")??"").split(";",1)[0].trim();return n!=="text/html"&&n!=="application/xhtml+xml"?null:{html:await o.text(),redirected:o.redirected?o.url:void 0,mediaType:n}}catch{return null}}function K(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function fe(){let e=Promise.resolve();for(const t of Array.from(document.scripts)){if(t.dataset.astroExec==="")continue;const o=t.getAttribute("type");if(o&&o!=="module"&&o!=="text/javascript")continue;const n=document.createElement("script");n.innerHTML=t.innerHTML;for(const a of t.attributes){if(a.name==="src"){const s=new Promise(u=>{n.onload=n.onerror=u});e=e.then(()=>s)}n.setAttribute(a.name,a.value)}n.dataset.astroExec="",t.replaceWith(n)}return e}const G=(e,t,o,n,a)=>{const s=_(t,e),u=document.title;document.title=n;let d=!1;if(e.href!==location.href&&!a)if(o.history==="replace"){const r=history.state;S({...o.state,index:r.index,scrollX:r.scrollX,scrollY:r.scrollY},"",e.href)}else le({...o.state,index:++E,scrollX:0,scrollY:0},"",e.href);if(D=e,s||(scrollTo({left:0,top:0,behavior:"instant"}),d=!0),a)scrollTo(a.scrollX,a.scrollY);else{if(e.hash){history.scrollRestoration="auto";const r=history.state;location.href=e.href,history.state||S(r,"")}else d||scrollTo({left:0,top:0,behavior:"instant"});history.scrollRestoration="manual"}document.title=u};function me(e){const t=[];for(const o of e.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${p}="${o.getAttribute(p)}"], link[rel=stylesheet][href="${o.getAttribute("href")}"]`)){const n=document.createElement("link");n.setAttribute("rel","preload"),n.setAttribute("as","style"),n.setAttribute("href",o.getAttribute("href")),t.push(new Promise(a=>{["load","error"].forEach(s=>n.addEventListener(s,a)),document.head.append(n)}))}return t}async function H(e,t,o,n){const a=(i,l)=>{const h=i.getAttribute(p),b=h&&l.head.querySelector(`[${p}="${h}"]`);if(b)return b;if(i.matches("link[rel=stylesheet]")){const w=i.getAttribute("href");return l.head.querySelector(`link[rel=stylesheet][href="${w}"]`)}return null},s=()=>{const i=document.activeElement;if(i?.closest(`[${p}]`)){if(i instanceof HTMLInputElement||i instanceof HTMLTextAreaElement){const l=i.selectionStart,h=i.selectionEnd;return{activeElement:i,start:l,end:h}}return{activeElement:i}}else return{activeElement:null}},u=({activeElement:i,start:l,end:h})=>{i&&(i.focus(),(i instanceof HTMLInputElement||i instanceof HTMLTextAreaElement)&&(i.selectionStart=l,i.selectionEnd=h))},d=i=>{const l=i.dataset.astroTransitionPersistProps;return l==null||l==="false"},r=i=>{const l=document.documentElement,h=[...l.attributes].filter(({name:c})=>(l.removeAttribute(c),c.startsWith("data-astro-")));[...i.newDocument.documentElement.attributes,...h].forEach(({name:c,value:f})=>l.setAttribute(c,f));for(const c of document.scripts)for(const f of i.newDocument.scripts)if(!f.hasAttribute("data-astro-rerun")&&(!c.src&&c.textContent===f.textContent||c.src&&c.type===f.type&&c.src===f.src)){f.dataset.astroExec="";break}for(const c of Array.from(document.head.children)){const f=a(c,i.newDocument);f?f.remove():c.remove()}document.head.append(...i.newDocument.head.children);const b=document.body,w=s();document.body.replaceWith(i.newDocument.body);for(const c of b.querySelectorAll(`[${p}]`)){const f=c.getAttribute(p),T=document.querySelector(`[${p}="${f}"]`);T&&(T.replaceWith(c),T.localName==="astro-island"&&d(c)&&(c.setAttribute("ssr",""),c.setAttribute("props",T.getAttribute("props"))))}u(w)};async function m(i){function l(w){const c=w.effect;return!c||!(c instanceof KeyframeEffect)||!c.target?!1:window.getComputedStyle(c.target,c.pseudoElement).animationIterationCount==="infinite"}const h=document.getAnimations();document.documentElement.setAttribute(j,i);const b=document.getAnimations().filter(w=>!h.includes(w)&&!l(w));return Promise.all(b.map(w=>w.finished))}if(!L)document.documentElement.setAttribute(W,e.direction),n==="animate"&&await m("old");else throw new DOMException("Transition was skipped");const g=document.title,v=await ce(e,y,r);G(v.to,v.from,t,g,o),B(oe),n==="animate"&&!L&&m("new").then(()=>U())}async function z(e,t,o,n,a){if(!O()||location.origin!==o.origin){location.href=o.href;return}const s=a?"traverse":n.history==="replace"?"replace":"push";if(s!=="traverse"&&k({scrollX,scrollY}),_(t,o)&&(e!=="back"&&o.hash||e==="back"&&t.hash)){G(o,t,n,document.title,a);return}const u=await ae(t,o,e,s,n.sourceElement,n.info,n.formData,d);if(u.defaultPrevented){location.href=o.href;return}async function d(r){const m=r.to.href,g={};if(r.formData){g.method="POST";const l=r.sourceElement instanceof HTMLFormElement?r.sourceElement:r.sourceElement instanceof HTMLElement&&"form"in r.sourceElement?r.sourceElement.form:r.sourceElement?.closest("form");g.body=l?.attributes.getNamedItem("enctype")?.value==="application/x-www-form-urlencoded"?new URLSearchParams(r.formData):r.formData}const v=await de(m,g);if(v===null){r.preventDefault();return}if(v.redirected&&(r.to=new URL(v.redirected)),N??=new DOMParser,r.newDocument=N.parseFromString(v.html,v.mediaType),r.newDocument.querySelectorAll("noscript").forEach(l=>l.remove()),!r.newDocument.querySelector('[name="astro-view-transitions-enabled"]')&&!r.formData){r.preventDefault();return}const i=me(r.newDocument);i.length&&await Promise.all(i)}if(L=!1,I)y=document.startViewTransition(async()=>await H(u,n,a));else{const r=(async()=>{await new Promise(m=>setTimeout(m)),await H(u,n,a,K())})();y={updateCallbackDone:r,ready:r,finished:new Promise(m=>U=m),skipTransition:()=>{L=!0}}}y.ready.then(async()=>{await fe(),V(),ue()}),y.finished.then(()=>{document.documentElement.removeAttribute(W),document.documentElement.removeAttribute(j)}),await y.ready}async function F(e,t){await z("forward",D,new URL(e,location.href),t??{})}function he(e){if(!O()&&e.state){location.reload();return}if(e.state===null)return;const t=history.state,o=t.index,n=o>E?"forward":"back";E=o,z(n,D,new URL(location.href),{},t)}const q=()=>{(scrollX!==history.state.scrollX||scrollY!==history.state.scrollY)&&k({scrollX,scrollY})};{if(I||K()!=="none")if(D=new URL(location.href),addEventListener("popstate",he),addEventListener("load",V),"onscrollend"in window)addEventListener("scrollend",q);else{let e,t,o,n;const a=()=>{if(n!==history.state?.index){clearInterval(e),e=void 0;return}if(t===scrollY&&o===scrollX){clearInterval(e),e=void 0,q();return}else t=scrollY,o=scrollX};addEventListener("scroll",()=>{e===void 0&&(n=history.state.index,t=scrollY,o=scrollX,e=window.setInterval(a,50))},{passive:!0})}for(const e of document.scripts)e.dataset.astroExec=""}const J=new Set,x=new WeakSet;let R,Q,X=!1;function we(e){X||(X=!0,R??=e?.prefetchAll??!1,Q??=e?.defaultStrategy??"hover",pe(),ye(),ge(),Te())}function pe(){for(const e of["touchstart","mousedown"])document.body.addEventListener(e,t=>{A(t.target,"tap")&&P(t.target.href,{with:"fetch",ignoreSlowConnection:!0})},{passive:!0})}function ye(){let e;document.body.addEventListener("focusin",n=>{A(n.target,"hover")&&t(n)},{passive:!0}),document.body.addEventListener("focusout",o,{passive:!0}),M(()=>{for(const n of document.getElementsByTagName("a"))x.has(n)||A(n,"hover")&&(x.add(n),n.addEventListener("mouseenter",t,{passive:!0}),n.addEventListener("mouseleave",o,{passive:!0}))});function t(n){const a=n.target.href;e&&clearTimeout(e),e=setTimeout(()=>{P(a,{with:"fetch"})},80)}function o(){e&&(clearTimeout(e),e=0)}}function ge(){let e;M(()=>{for(const t of document.getElementsByTagName("a"))x.has(t)||A(t,"viewport")&&(x.add(t),e??=be(),e.observe(t))})}function be(){const e=new WeakMap;return new IntersectionObserver((t,o)=>{for(const n of t){const a=n.target,s=e.get(a);n.isIntersecting?(s&&clearTimeout(s),e.set(a,setTimeout(()=>{o.unobserve(a),e.delete(a),P(a.href,{with:"link"})},300))):s&&(clearTimeout(s),e.delete(a))}})}function Te(){M(()=>{for(const e of document.getElementsByTagName("a"))A(e,"load")&&P(e.href,{with:"link"})})}function P(e,t){const o=t?.ignoreSlowConnection??!1;if(ve(e,o))if(J.add(e),(t?.with??"link")==="link"){const n=document.createElement("link");n.rel="prefetch",n.setAttribute("href",e),document.head.append(n)}else fetch(e).catch(n=>{console.log(`[astro] Failed to prefetch ${e}`),console.error(n)})}function ve(e,t){if(!navigator.onLine||!t&&Z())return!1;try{const o=new URL(e,location.href);return location.origin===o.origin&&(location.pathname!==o.pathname||location.search!==o.search)&&!J.has(e)}catch{}return!1}function A(e,t){if(e?.tagName!=="A")return!1;const o=e.dataset.astroPrefetch;return o==="false"?!1:t==="tap"&&(o!=null||R)&&Z()?!0:o==null&&R||o===""?t===Q:o===t}function Z(){if("connection"in navigator){const e=navigator.connection;return e.saveData||/2g/.test(e.effectiveType)}return!1}function M(e){e();let t=!1;document.addEventListener("astro:page-load",()=>{if(!t){t=!0;return}e()})}function Ee(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function Y(e){return e.dataset.astroReload!==void 0}(I||Ee()!=="none")&&(document.addEventListener("click",e=>{let t=e.target;if(e.composed&&(t=e.composedPath()[0]),t instanceof Element&&(t=t.closest("a, area")),!(t instanceof HTMLAnchorElement)&&!(t instanceof SVGAElement)&&!(t instanceof HTMLAreaElement))return;const o=t instanceof HTMLElement?t.target:t.target.baseVal,n=t instanceof HTMLElement?t.href:t.href.baseVal,a=new URL(n,location.href).origin;Y(t)||t.hasAttribute("download")||!t.href||o&&o!=="_self"||a!==location.origin||e.button!==0||e.metaKey||e.ctrlKey||e.altKey||e.shiftKey||e.defaultPrevented||(e.preventDefault(),F(n,{history:t.dataset.astroHistory==="replace"?"replace":"auto",sourceElement:t}))}),document.addEventListener("submit",e=>{let t=e.target;if(t.tagName!=="FORM"||e.defaultPrevented||Y(t))return;const o=t,n=e.submitter,a=new FormData(o,n);let s=n?.getAttribute("formaction")??o.action??location.pathname;const u=n?.getAttribute("formmethod")??o.method;if(u==="dialog"||location.origin!==new URL(s,location.href).origin)return;const d={sourceElement:n??o};if(u==="get"){const r=new URLSearchParams(a),m=new URL(s);m.search=r.toString(),s=m.toString()}else d.formData=a;e.preventDefault(),F(s,d)}),we({prefetchAll:!0}));