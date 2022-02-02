<<<<<<< HEAD
var app=function(){"use strict";function e(){}const t=e=>e;function n(e){return e()}function r(){return Object.create(null)}function o(e){e.forEach(n)}function i(e){return"function"==typeof e}function s(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let a;function c(e,t){return a||(a=document.createElement("a")),a.href=t,e===a.href}function l(e,t,n,r){return e[1]&&r?function(e,t){for(const n in t)e[n]=t[n];return e}(n.ctx.slice(),e[1](r(t))):n.ctx}const u="undefined"!=typeof window;let h=u?()=>window.performance.now():()=>Date.now(),d=u?e=>requestAnimationFrame(e):e;const f=new Set;function p(e){f.forEach((t=>{t.c(e)||(f.delete(t),t.f())})),0!==f.size&&d(p)}function g(e){let t;return 0===f.size&&d(p),{promise:new Promise((n=>{f.add(t={c:e,f:n})})),abort(){f.delete(t)}}}function b(e,t){e.appendChild(t)}function m(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function w(e){const t=x("style");return function(e,t){b(e.head||e,t)}(m(e),t),t.sheet}function y(e,t,n){e.insertBefore(t,n||null)}function v(e){e.parentNode.removeChild(e)}function $(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function x(e){return document.createElement(e)}function C(e){return document.createTextNode(e)}function k(){return C(" ")}function S(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function T(e,t,n){e.classList[n?"add":"remove"](t)}const _=new Map;let A,j=0;function M(e,t,n,r,o,i,s,a=0){const c=16.666/r;let l="{\n";for(let e=0;e<=1;e+=c){const r=t+(n-t)*i(e);l+=100*e+`%{${s(r,1-r)}}\n`}const u=l+`100% {${s(n,1-n)}}\n}`,h=`__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(u)}_${a}`,d=m(e),{stylesheet:f,rules:p}=_.get(d)||function(e,t){const n={stylesheet:w(t),rules:{}};return _.set(e,n),n}(d,e);p[h]||(p[h]=!0,f.insertRule(`@keyframes ${h} ${u}`,f.cssRules.length));const g=e.style.animation||"";return e.style.animation=`${g?`${g}, `:""}${h} ${r}ms linear ${o}ms 1 both`,j+=1,h}function D(e,t){const n=(e.style.animation||"").split(", "),r=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),o=n.length-r.length;o&&(e.style.animation=r.join(", "),j-=o,j||d((()=>{j||(_.forEach((e=>{const{stylesheet:t}=e;let n=t.cssRules.length;for(;n--;)t.deleteRule(n);e.rules={}})),_.clear())})))}function E(e){A=e}function H(e){(function(){if(!A)throw new Error("Function called outside component initialization");return A})().$$.on_mount.push(e)}const L=[],I=[],P=[],B=[],O=Promise.resolve();let F=!1;function N(e){P.push(e)}const W=new Set;let q,z=0;function R(){const e=A;do{for(;z<L.length;){const e=L[z];z++,E(e),G(e.$$)}for(E(null),L.length=0,z=0;I.length;)I.pop()();for(let e=0;e<P.length;e+=1){const t=P[e];W.has(t)||(W.add(t),t())}P.length=0}while(L.length);for(;B.length;)B.pop()();F=!1,W.clear(),E(e)}function G(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(N)}}function Y(){return q||(q=Promise.resolve(),q.then((()=>{q=null}))),q}function J(e,t,n){e.dispatchEvent(function(e,t,n=!1){const r=document.createEvent("CustomEvent");return r.initCustomEvent(e,n,!1,t),r}(`${t?"intro":"outro"}${n}`))}const V=new Set;let Z;function U(){Z={r:0,c:[],p:Z}}function K(){Z.r||o(Z.c),Z=Z.p}function Q(e,t){e&&e.i&&(V.delete(e),e.i(t))}function X(e,t,n,r){if(e&&e.o){if(V.has(e))return;V.add(e),Z.c.push((()=>{V.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}const ee={duration:0};function te(e){e&&e.c()}function ne(e,t,r,s){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=e.$$;a&&a.m(t,r),s||N((()=>{const t=c.map(n).filter(i);l?l.push(...t):o(t),e.$$.on_mount=[]})),u.forEach(N)}function re(e,t){const n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function oe(e,t){-1===e.$$.dirty[0]&&(L.push(e),F||(F=!0,O.then(R)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ie(t,n,i,s,a,c,l,u=[-1]){const h=A;E(t);const d=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:a,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(h?h.$$.context:[])),callbacks:r(),dirty:u,skip_bound:!1,root:n.target||h.$$.root};l&&l(d.root);let f=!1;if(d.ctx=i?i(t,n.props||{},((e,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&a(d.ctx[e],d.ctx[e]=o)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](o),f&&oe(t,e)),n})):[],d.update(),f=!0,o(d.before_update),d.fragment=!!s&&s(d.ctx),n.target){if(n.hydrate){const e=function(e){return Array.from(e.childNodes)}(n.target);d.fragment&&d.fragment.l(e),e.forEach(v)}else d.fragment&&d.fragment.c();n.intro&&Q(t.$$.fragment),ne(t,n.target,n.anchor,n.customElement),R()}E(h)}class se{$destroy(){re(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function ae(e){let t,n;const r=e[7].default,o=function(e,t,n,r){if(e){const o=l(e,t,n,r);return e[0](o)}}(r,e,e[6],null);return{c(){t=x("div"),o&&o.c()},m(r,i){y(r,t,i),o&&o.m(t,null),e[8](t),n=!0},p(e,[t]){o&&o.p&&(!n||64&t)&&function(e,t,n,r,o,i){if(o){const s=l(t,n,r,i);e.p(s,o)}}(o,r,e,e[6],n?function(e,t,n,r){if(e[2]&&r){const o=e[2](r(n));if(void 0===t.dirty)return o;if("object"==typeof o){const e=[],n=Math.max(t.dirty.length,o.length);for(let r=0;r<n;r+=1)e[r]=t.dirty[r]|o[r];return e}return t.dirty|o}return t.dirty}(r,e[6],t,null):function(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}(e[6]),null)},i(e){n||(Q(o,e),n=!0)},o(e){X(o,e),n=!1},d(n){n&&v(t),o&&o.d(n),e[8](null)}}}function ce(e,t,n){let{$$slots:r={},$$scope:o}=t,{root:i=null}=t,{top:s=0}=t,{bottom:a=0}=t,{increments:c=100}=t,{value:l}=t;const u=[],h=[];let d,f=[],p=[];const g=()=>{f.length&&f.forEach(b)},b=(e,t)=>{const r={root:i,rootMargin:`${s?-1*s:0}px 0px ${a?-1*a:0}px 0px`,threshold:h};p[t]&&p[t].disconnect();const o=new IntersectionObserver((e=>{e[0].isIntersecting;const r=e[0].intersectionRatio;u[t]=r,(()=>{let e=0,t=0;for(let n=0;n<u.length;n++)u[n]>e&&(e=u[n],t=n);n(1,l=e>0?t:void 0)})()}),r);o.observe(e),p[t]=o};return H((()=>{for(let e=0;e<c+1;e++)h.push(e/c);f=d.querySelectorAll(":scope > *"),g()})),e.$$set=e=>{"root"in e&&n(2,i=e.root),"top"in e&&n(3,s=e.top),"bottom"in e&&n(4,a=e.bottom),"increments"in e&&n(5,c=e.increments),"value"in e&&n(1,l=e.value),"$$scope"in e&&n(6,o=e.$$scope)},e.$$.update=()=>{24&e.$$.dirty&&g()},[d,l,i,s,a,c,o,r,function(e){I[e?"unshift":"push"]((()=>{d=e,n(0,d)}))}]}class le extends se{constructor(e){super(),ie(this,e,ce,ae,s,{root:2,top:3,bottom:4,increments:5,value:1})}}function ue(t){let n,r,o,i;return{c(){n=x("div"),r=x("div"),o=k(),i=x("div"),S(r,"class","step-text svelte-j6mttj"),S(i,"class","step-img svelte-j6mttj"),S(n,"class","step-cont svelte-j6mttj"),T(n,"active",t[0]===t[1])},m(e,s){y(e,n,s),b(n,r),r.innerHTML=t[2],b(n,o),b(n,i)},p(e,[t]){4&t&&(r.innerHTML=e[2]),3&t&&T(n,"active",e[0]===e[1])},i:e,o:e,d(e){e&&v(n)}}}function he(e,t,n){let{currentStep:r}=t,{i:o}=t,{text:i}=t;return e.$$set=e=>{"currentStep"in e&&n(0,r=e.currentStep),"i"in e&&n(1,o=e.i),"text"in e&&n(2,i=e.text)},[r,o,i]}class de extends se{constructor(e){super(),ie(this,e,he,ue,s,{currentStep:0,i:1,text:2})}}function fe(t){let n,r,o,i;return{c(){n=x("div"),r=x("div"),o=k(),i=x("div"),S(r,"class","step-img svelte-9fy42t"),S(i,"class","step-text svelte-9fy42t"),S(n,"class","step-cont svelte-9fy42t"),T(n,"active",t[0]===t[1])},m(e,s){y(e,n,s),b(n,r),b(n,o),b(n,i),i.innerHTML=t[2]},p(e,[t]){4&t&&(i.innerHTML=e[2]),3&t&&T(n,"active",e[0]===e[1])},i:e,o:e,d(e){e&&v(n)}}}function pe(e,t,n){let{currentStep:r}=t,{i:o}=t,{text:i}=t;return e.$$set=e=>{"currentStep"in e&&n(0,r=e.currentStep),"i"in e&&n(1,o=e.i),"text"in e&&n(2,i=e.text)},[r,o,i]}class ge extends se{constructor(e){super(),ie(this,e,pe,fe,s,{currentStep:0,i:1,text:2})}}function be(t){let n,r,o,i;return{c(){n=x("div"),r=x("div"),o=k(),i=x("div"),S(r,"class","step-text svelte-ndhi1x"),S(i,"class","step-img svelte-ndhi1x"),S(n,"class","step-cont svelte-ndhi1x"),T(n,"active",t[0]===t[1])},m(e,s){y(e,n,s),b(n,r),r.innerHTML=t[2],b(n,o),b(n,i)},p(e,[t]){4&t&&(r.innerHTML=e[2]),3&t&&T(n,"active",e[0]===e[1])},i:e,o:e,d(e){e&&v(n)}}}function me(e,t,n){let{image:r}=t,{alt:o}=t,{currentStep:i}=t,{i:s}=t,{text:a}=t;return e.$$set=e=>{"image"in e&&n(3,r=e.image),"alt"in e&&n(4,o=e.alt),"currentStep"in e&&n(0,i=e.currentStep),"i"in e&&n(1,s=e.i),"text"in e&&n(2,a=e.text)},[i,s,a,r,o]}class we extends se{constructor(e){super(),ie(this,e,me,be,s,{image:3,alt:4,currentStep:0,i:1,text:2})}}function ye(t){let n,r,o,i,s,a,l,u,h,d,f,p,g,m,w,$,C,_;return{c(){n=x("div"),r=x("img"),i=k(),s=x("div"),a=x("h1"),a.textContent="THE",l=k(),u=x("h1"),u.textContent="Chinatown",h=k(),d=x("h1"),d.textContent="Crowd",f=k(),p=x("h2"),p.innerHTML="<b>By Annie Fu</b>",g=k(),m=x("p"),w=k(),$=x("div"),C=x("img"),S(r,"class","title-img svelte-dtx0cn"),c(r.src,o="./media/kiosk_1.jpg")||S(r,"src","./media/kiosk_1.jpg"),S(r,"alt","An image of a kiosk, with Mandarin characters and 'Welcome to Chinatown' in English on it. The top third of the image is artistically burnt out."),S(a,"class","the svelte-dtx0cn"),S(u,"class","svelte-dtx0cn"),S(d,"class","svelte-dtx0cn"),S(p,"class","subtitle svelte-dtx0cn"),S(m,"class","subtitle svelte-dtx0cn"),S(s,"class","title-text svelte-dtx0cn"),S(C,"id","title-img"),c(C.src,_=t[0])||S(C,"src",_),S(C,"alt",t[1]),S(C,"class","svelte-dtx0cn"),S($,"class","title svelte-dtx0cn"),S(n,"class","title-content svelte-dtx0cn"),T(n,"active",t[2]===t[3])},m(e,o){y(e,n,o),b(n,r),b(n,i),b(n,s),b(s,a),b(s,l),b(s,u),b(s,h),b(s,d),b(s,f),b(s,p),b(s,g),b(s,m),m.innerHTML=t[4],b(n,w),b(n,$),b($,C)},p(e,[t]){16&t&&(m.innerHTML=e[4]),1&t&&!c(C.src,_=e[0])&&S(C,"src",_),2&t&&S(C,"alt",e[1]),12&t&&T(n,"active",e[2]===e[3])},i:e,o:e,d(e){e&&v(n)}}}function ve(e,t,n){let{image:r}=t,{alt:o}=t,{currentStep:i}=t,{i:s}=t,{text:a}=t;return e.$$set=e=>{"image"in e&&n(0,r=e.image),"alt"in e&&n(1,o=e.alt),"currentStep"in e&&n(2,i=e.currentStep),"i"in e&&n(3,s=e.i),"text"in e&&n(4,a=e.text)},[r,o,i,s,a]}class $e extends se{constructor(e){super(),ie(this,e,ve,ye,s,{image:0,alt:1,currentStep:2,i:3,text:4})}}function xe(e){const t=e-1;return t*t*t+1}function Ce(e,{delay:t=0,duration:n=400,easing:r=xe,x:o=0,y:i=0,opacity:s=0}={}){const a=getComputedStyle(e),c=+a.opacity,l="none"===a.transform?"":a.transform,u=c*(1-s);return{delay:t,duration:n,easing:r,css:(e,t)=>`\n\t\t\ttransform: ${l} translate(${(1-e)*o}px, ${(1-e)*i}px);\n\t\t\topacity: ${c-u*t}`}}function ke(e,t,n){const r=e.slice();return r[7]=t[n],r[9]=n,r}function Se(e,t,n){const r=e.slice();return r[7]=t[n],r[9]=n,r}function Te(n){let r,s,a,l,u,d,f;return{c(){r=x("div"),s=x("img"),d=k(),S(s,"id",n[9]+1),S(s,"class",n[4][n[9]+1]+" fade-in svelte-20o4b1"),c(s.src,a=n[1][n[9]+1])||S(s,"src",a),S(s,"alt",n[2][n[9]+1]),T(s,"activeImg",n[0]===n[9]+1),S(r,"class","img-container svelte-20o4b1")},m(e,t){y(e,r,t),b(r,s),b(r,d),f=!0},p(e,t){1&t&&T(s,"activeImg",e[0]===e[9]+1)},i(n){f||(N((()=>{u&&u.end(1),l=function(n,r,o){let s,a,c=r(n,o),l=!1,u=0;function d(){s&&D(n,s)}function f(){const{delay:r=0,duration:o=300,easing:i=t,tick:f=e,css:p}=c||ee;p&&(s=M(n,0,1,o,r,i,p,u++)),f(0,1);const b=h()+r,m=b+o;a&&a.abort(),l=!0,N((()=>J(n,!0,"start"))),a=g((e=>{if(l){if(e>=m)return f(1,0),J(n,!0,"end"),d(),l=!1;if(e>=b){const t=i((e-b)/o);f(t,1-t)}}return l}))}let p=!1;return{start(){p||(p=!0,D(n),i(c)?(c=c(),Y().then(f)):f())},invalidate(){p=!1},end(){l&&(d(),l=!1)}}}(s,Ce,{y:-50,duration:100}),l.start()})),f=!0)},o(n){l&&l.invalidate(),u=function(n,r,s){let a,c=r(n,s),l=!0;const u=Z;function d(){const{delay:r=0,duration:i=300,easing:s=t,tick:d=e,css:f}=c||ee;f&&(a=M(n,1,0,i,r,s,f));const p=h()+r,b=p+i;N((()=>J(n,!1,"start"))),g((e=>{if(l){if(e>=b)return d(0,1),J(n,!1,"end"),--u.r||o(u.c),!1;if(e>=p){const t=s((e-p)/i);d(1-t,t)}}return l}))}return u.r+=1,i(c)?Y().then((()=>{c=c(),d()})):d(),{end(e){e&&c.tick&&c.tick(1,0),l&&(a&&D(n,a),l=!1)}}}(s,Ce,{y:50,duration:100}),f=!1},d(e){e&&v(r),e&&u&&u.end()}}}function _e(e){let t,n,r=e[3],o=[];for(let t=0;t<r.length;t+=1)o[t]=Te(Se(e,r,t));const i=e=>X(o[e],1,1,(()=>{o[e]=null}));return{c(){for(let e=0;e<o.length;e+=1)o[e].c();t=C("")},m(e,r){for(let t=0;t<o.length;t+=1)o[t].m(e,r);y(e,t,r),n=!0},p(e,n){if(23&n){let s;for(r=e[3],s=0;s<r.length;s+=1){const i=Se(e,r,s);o[s]?(o[s].p(i,n),Q(o[s],1)):(o[s]=Te(i),o[s].c(),Q(o[s],1),o[s].m(t.parentNode,t))}for(U(),s=r.length;s<o.length;s+=1)i(s);K()}},i(e){if(!n){for(let e=0;e<r.length;e+=1)Q(o[e]);n=!0}},o(e){o=o.filter(Boolean);for(let e=0;e<o.length;e+=1)X(o[e]);n=!1},d(e){$(o,e),e&&v(t)}}}function Ae(e){let t,n;return t=new de({props:{image:e[1][e[9]],alt:e[2][e[9]],text:e[3][e[9]],currentStep:e[0],i:e[9]}}),{c(){te(t.$$.fragment)},m(e,r){ne(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.currentStep=e[0]),t.$set(r)},i(e){n||(Q(t.$$.fragment,e),n=!0)},o(e){X(t.$$.fragment,e),n=!1},d(e){re(t,e)}}}function je(e){let t,n;return t=new de({props:{image:e[1][e[9]],alt:e[2][e[9]],text:e[3][e[9]],currentStep:e[0],i:e[9]}}),{c(){te(t.$$.fragment)},m(e,r){ne(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.currentStep=e[0]),t.$set(r)},i(e){n||(Q(t.$$.fragment,e),n=!0)},o(e){X(t.$$.fragment,e),n=!1},d(e){re(t,e)}}}function Me(e){let t,n,r,o,i,s,a,c,l,u,h="title"==e[4][e[9]]&&function(e){let t,n;return t=new $e({props:{image:e[1][e[9]],alt:e[2][e[9]],currentStep:e[0],text:e[3][e[9]],i:e[9]}}),{c(){te(t.$$.fragment)},m(e,r){ne(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.currentStep=e[0]),t.$set(r)},i(e){n||(Q(t.$$.fragment,e),n=!0)},o(e){X(t.$$.fragment,e),n=!1},d(e){re(t,e)}}}(e);const d=[je,Ae],f=[];~(r=function(e,t){return"half"==e[4][e[9]]?0:"half-short"==e[4][e[9]]?1:-1}(e))&&(o=f[r]=d[r](e));let p="half2"==e[4][e[9]]&&function(e){let t,n;return t=new ge({props:{image:e[1][e[9]],alt:e[2][e[9]],text:e[3][e[9]],currentStep:e[0],i:e[9]}}),{c(){te(t.$$.fragment)},m(e,r){ne(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.currentStep=e[0]),t.$set(r)},i(e){n||(Q(t.$$.fragment,e),n=!0)},o(e){X(t.$$.fragment,e),n=!1},d(e){re(t,e)}}}(e),g="full"==e[4][e[9]]&&function(e){let t,n;return t=new we({props:{image:e[1][e[9]],alt:e[2][e[9]],text:e[3][e[9]],currentStep:e[0],i:e[9]}}),{c(){te(t.$$.fragment)},m(e,r){ne(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.currentStep=e[0]),t.$set(r)},i(e){n||(Q(t.$$.fragment,e),n=!0)},o(e){X(t.$$.fragment,e),n=!1},d(e){re(t,e)}}}(e);return{c(){var r;t=x("div"),h&&h.c(),n=k(),o&&o.c(),i=k(),p&&p.c(),s=k(),g&&g.c(),a=k(),S(t,"class",(r=e[5][e[9]],c=(null==r?"":r)+" svelte-20o4b1")),S(t,"id",l=e[9]),T(t,"active",e[0]===e[9])},m(e,o){y(e,t,o),h&&h.m(t,null),b(t,n),~r&&f[r].m(t,null),b(t,i),p&&p.m(t,null),b(t,s),g&&g.m(t,null),b(t,a),u=!0},p(e,n){"title"==e[4][e[9]]&&h.p(e,n),o&&o.p(e,n),"half2"==e[4][e[9]]&&p.p(e,n),"full"==e[4][e[9]]&&g.p(e,n),1&n&&T(t,"active",e[0]===e[9])},i(e){u||(Q(h),Q(o),Q(p),Q(g),u=!0)},o(e){X(h),X(o),X(p),X(g),u=!1},d(e){e&&v(t),h&&h.d(),~r&&f[r].d(),p&&p.d(),g&&g.d()}}}function De(e){let t,n,r,o,i,s,a,c=e[3],l=[];for(let t=0;t<c.length;t+=1)l[t]=Me(ke(e,c,t));const u=e=>X(l[e],1,1,(()=>{l[e]=null}));return{c(){for(let e=0;e<l.length;e+=1)l[e].c();t=k(),n=x("p"),n.innerHTML='Thank you so much for reading. This was researched, reported, and coded by Annie Fu. If you have any questions or comments, please reach out to me at <a href="mailto:annieccfu@gmail.com">annieccfu@gmail.com</a>.',r=x("br"),o=x("br"),i=x("br"),s=x("br")},m(e,c){for(let t=0;t<l.length;t+=1)l[t].m(e,c);y(e,t,c),y(e,n,c),y(e,r,c),y(e,o,c),y(e,i,c),y(e,s,c),a=!0},p(e,n){if(63&n){let r;for(c=e[3],r=0;r<c.length;r+=1){const o=ke(e,c,r);l[r]?(l[r].p(o,n),Q(l[r],1)):(l[r]=Me(o),l[r].c(),Q(l[r],1),l[r].m(t.parentNode,t))}for(U(),r=c.length;r<l.length;r+=1)u(r);K()}},i(e){if(!a){for(let e=0;e<c.length;e+=1)Q(l[e]);a=!0}},o(e){l=l.filter(Boolean);for(let e=0;e<l.length;e+=1)X(l[e]);a=!1},d(e){$(l,e),e&&v(t),e&&v(n),e&&v(r),e&&v(o),e&&v(i),e&&v(s)}}}function Ee(t){let n,r,o,i,a,c,l,u,h,d,f=t[0],p=_e(t);function g(e){t[6](e)}let m={$$slots:{default:[De]},$$scope:{ctx:t}};return void 0!==t[0]&&(m.value=t[0]),c=new le({props:m}),I.push((()=>function(e,t,n){const r=e.$$.props[t];void 0!==r&&(e.$$.bound[r]=n,n(e.$$.ctx[r]))}(c,"value",g))),{c(){n=x("main"),r=x("div"),o=x("div"),p.c(),i=k(),a=x("div"),te(c.$$.fragment),u=k(),h=x("div"),S(o,"class","image-div svelte-20o4b1"),S(a,"class","step-div svelte-20o4b1"),S(r,"class","desktop"),S(n,"class","svelte-20o4b1")},m(e,t){y(e,n,t),b(n,r),b(r,o),p.m(o,null),b(r,i),b(r,a),ne(c,a,null),b(a,u),b(a,h),d=!0},p(t,[n]){1&n&&s(f,f=t[0])?(U(),X(p,1,1,e),K(),p=_e(t),p.c(),Q(p),p.m(o,null)):p.p(t,n);const r={};var i;2049&n&&(r.$$scope={dirty:n,ctx:t}),!l&&1&n&&(l=!0,r.value=t[0],i=()=>l=!1,B.push(i)),c.$set(r)},i(e){d||(Q(p),Q(c.$$.fragment,e),d=!0)},o(e){X(p),X(c.$$.fragment,e),d=!1},d(e){e&&v(n),p.d(e),re(c)}}}function He(e,t,n){let r=0;return[r,["./media/kiosk_1.jpg","./media/first.jpeg","./media/street_newedit.png","./media/chinatown5.jpeg","./media/chungs1.jpg","./media/chungs3.jpg","./media/chungs_2.jpg","./media/chungsstreet.jpeg","./media/chungs_2000s.jpeg","./media/chungs_roof.jpg","./media/onleong_shanghai.jpg","./media/shanghai_sign.jpg","./media/street3.jpg","./media/lion.jpeg","./media/welcome_kiosk.jpg","","./media/flyer.png","./media/lion.jpeg",""],["A black and white photo of a crowded street, celebrating outside a storefront that reads 'Chungs Chop Suey.' ","A black and white photo of a crowded street, celebrating outside a storefront that reads 'Chungs Chop Suey.' "],["In Midtown Detroit, the blocks surrounding the Cass Corridor and Peterboro Street intersection contain the only recognizable remnants of a once-promising Chinatown.","<p> Detroit’s Chinatown first flourished in the 1920s, from the blocks between Third Avenue, Bagley Street, and Porter Street, writes author and activist Helen Zia in “Asian American Dreams: The Emergence of an American People.” <br/><br/> First led by a group of prominent Chinese business-owning families including the Yee, Chin, and Chung families, a wave of immigrants settled into the area and opened restaurants, grocery stores, and even a Chinese school in those first decades.</p>","<p style='background-color: white; padding: 15px'>Today, the original blocks of Chinatown <br/> no longer exist.  <br/><br/>A portion of the John C. Lodge Freeway, a parking garage, and a parking lot of the MGM Grand Casino stand in their place.</p> <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><p style='background-color: white; padding: 15px'>The creation of the freeway coincided with the relocation of old Chinatown to Cass Corridor in 1963, when generations of Chinese residents and their associated businesses faced displacement as part of the Detroit Housing Commission’s “slum clearance” initiative, Zia writes. <br/><br/>Chelsea Zuzindlak, an attorney and former curator at the Detroit Historical Museum, shed light on the razing in an interview for Hour in March 2009: <b> “Ask any person who lived there, and they’ll tell you it was anything but a slum,” </b> she said. <b> “It was kept up.”</b></p></br></br></br></br></br></br></br>","<p style='background-color: white; padding: 15px'>In fact, according to Emiko Ohnuki-Tierney, professor of anthropology at the University of Wisconsin-Madison, Chinatown signified home and a sense of community so distinctive that longtime residents were nicknamed <b>“the Chinatown crowd.”</b></p><br/>","<p style='background-color: white; padding: 15px'>At the time of the clearance announcement, the general feeling amongst the residents was that the destruction of their Chinatown, despite a planned relocation, would mean the end of their ethnic community. ","<p style='background-color: white;'>Facing no other options, cornerstone businesses of the community, including the famous Chung’s Chop Suey restaurant and the On Leong Chinese Merchants Association, led the transition to the new area.</p><br/><br/>","<p style='background-color: white; padding: 15px'>The relocated neighborhood celebrated a brief period of success.</p> <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><p style='background-color: white; padding: 15px'>However, a series of crimes shook up the community in the mid-70s: on August 5, 1976, community leader Tommie Lee was murdered in a hold-up of his restaurant, Bow Wah. </p><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><p style='background-color: white; padding: 15px'>A few years later, in 1982, 27-year-old Vincent Chin was murdered in a hate crime. Rooted in anti-Asian sentiment due to the increasing success of the Japanese auto industry, the murder served as the catalyst for many of the remaining residents to abandon the area.</p>","<p>By November 1989, only 100 Chinese residents remained in Chinatown, according to an Argus-Press article published at the time.<br/><br/> “If they had left Chinatown where it was, it probably would’ve developed into a Greektown,“ said then-co-owner of Chung’s restaurant, Philip Chung.<br/><br/> Citing Detroit’s booming entertainment and cultural district Greektown as a reference point for what Chinatown could have been, Chung said, <b> “we never saw this area have a hey-day, but we saw it go from not-too-bad to worse.” </b></p> ","<p>The Chin and Chung families operated Chung’s Chop Suey for over a half-century, said Curtis Chin, documentary filmmaker and last familial heir of the restaurant. Beginning when Henry Chung and Chin’s great-grandfather moved to the area in the midst of the 1920’s growth, their successors and multiple generations of families composed the lifeblood of Chung’s. <br/><br/> The restaurant was among the 32 displaced from the original Chinatown in the 1960s: an American-Cantonese hybrid joint known for its signature, now regional staple dish; almond boneless chicken, as well as the “best egg rolls in town.“ <br/><br/>Its decades-long operation witnessed the many eras of the neighborhood, serving lunch rushes and housing meetings.</p>","<p style='background-color: white; padding: 15px'>After over 60 years in business, Chung’s was the last Chinatown business to close in 2000. The restaurant’s impact on Detroit remains evident in even the simplest of ways: almond boneless chicken continues to appear on restaurant menus all throughout the city.</p><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><p style='background-color: white; padding: 15px'>As of November 2020, the roof remains intact, but veins of infrastructure have begun to blister out of the building’s skin. The signage frame and plumbing extend and hang from the composition, brittle to the touch. </p><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><p style='background-color: white; padding: 15px'>Last in the news, Brenna Houck reported in Eater Detroit that restaurant mogul Tom Brady had purchased the space for two new restaurants in 2018. The structure shows no signs of recent maintenance or development since the transfer in ownership, apart from the removal of a Vincent Chin memorial mural from the building’s North side.</p>","<p>Further down Cass Corridor, just beyond the Chung’s lot, the building that On Leong headquarters and Shanghai Cafe once shared still stands.<br/><br/> Through the relocation, the On Leong Chinese Merchants Association remained a leading force for the community, tying together families of immigrant business owners, and the Shanghai Cafe offered another supply of late-night comfort food.</p>","<p>Though the characteristic rectangular pane windows have been boarded up and the entirety of the facade painted brown, the sign for the Shanghai Cafe remains posted, with faint markings inviting visitors to free parking in the rear lot.</p>","<p style='background-color: white; padding: 15px'>The same Shanghai Cafe sign appears in its original white paint in the center of this archived photograph from the Detroit Free Press archives, tucked behind a silver post. </p><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><p style='background-color: white; padding: 15px'>When the new Chinatown opened in 1963, the facades of Shanghai Cafe, On Leong, and Chung’s saw parades and lion dances celebrating the beginning of a new community.</p>","<p style='background-color: white; padding: 15px'>The Free Press reported “500 chinese merchants came to Detroit from all parts of the United States to join the convention and to congratulate the Detroit Chinese on their achievement; <b>the opening of the new Chinatown.”</b></p> ","<p style='background-color: white; padding: 15px'>Just under two decades later, during a period of escalating crime rates and flight to the suburbs, reporter Sally Smith wrote a Free Press article about the “Welcome to Chinatown” kiosk in April of 1980:</p><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><p style='background-color: white; padding: 15px'><q><i>Despite the red banners on the street corners, and the shops with all the right names—Wing Lee Lung Chinese Vegetable Co., Yee Yuen, Yun Hop, and Bow Wah’s Chop Suey—the sign that says ‘Welcome to Detroit’s Chinatown’ seems mostly a bleak attempt to force a sense of liveliness on a fragile reality.</i></q></p><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><p style='background-color: white; padding: 15px'>Perhaps a bleak attempt, but an attempt nonetheless. The remaining relic in Chinatown has seen both better and worse days throughout the past half-century. After a bout of graffiti marred the original lettering in 2016, it was restored to the current form. I couldn’t help but think about Smith's quote.</p> <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><p style='background-color: white; padding: 15px'>Amidst all the emptied and fading buildings in the area, revitalizing a sign welcoming people to something that no longer exists indeed feels futile. But also recklessly auspicious. <br/><br/> It feels as if people haven’t completely forgotten about Chinatown and what it means to Detroit, despite the surrounding reality stating otherwise.</p>","<p>On November 17th, 2020, the Detroit City Council Historic Designation Advisory Board held a community meeting titled the “People and Places of the Cass Corridor,” calling for citizens to “learn more about the Cass Corridor architectural, cultural, and ethnic survey and ways to get involved!”</p>","<p>When I set out to find more information on the meeting, all I found was the event flyer, which featured three vibrant side-by-side images. The first, a clean-cut skyscraper downtown. The second, a lyric from the 1966 Youngbloods classic “Get Together”: “smile on your brother / everybody get together.” <br/>The third? A black and white photo of a crowd, gathered around a dancing lion: the 1963 re-opening celebration of Detroit’s Chinatown.</p>","<p></p>"],["title","half","full","full","full","half-short","full","half","half","full","half-short","half","full","full","full","full","half","full"],["step","step","step-long1","step","step","step","step-long2","step","step","step-long3","step","step","step-long3","step-long1","step-long4","step","step","step"],function(e){r=e,n(0,r)}]}return new class extends se{constructor(e){super(),ie(this,e,He,Ee,s,{})}}({target:document.body,props:{name:"world"}})}();
=======

(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35734/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
var app = (function () {
    'use strict';

    function noop() { }
    const identity = x => x;
    function assign(tar, src) {
        // @ts-ignore
        for (const k in src)
            tar[k] = src[k];
        return tar;
    }
    function add_location(element, file, line, column, char) {
        element.__svelte_meta = {
            loc: { file, line, column, char }
        };
    }
    function run(fn) {
        return fn();
    }
    function blank_object() {
        return Object.create(null);
    }
    function run_all(fns) {
        fns.forEach(run);
    }
    function is_function(thing) {
        return typeof thing === 'function';
    }
    function safe_not_equal(a, b) {
        return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
    }
    let src_url_equal_anchor;
    function src_url_equal(element_src, url) {
        if (!src_url_equal_anchor) {
            src_url_equal_anchor = document.createElement('a');
        }
        src_url_equal_anchor.href = url;
        return element_src === src_url_equal_anchor.href;
    }
    function is_empty(obj) {
        return Object.keys(obj).length === 0;
    }
    function create_slot(definition, ctx, $$scope, fn) {
        if (definition) {
            const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
            return definition[0](slot_ctx);
        }
    }
    function get_slot_context(definition, ctx, $$scope, fn) {
        return definition[1] && fn
            ? assign($$scope.ctx.slice(), definition[1](fn(ctx)))
            : $$scope.ctx;
    }
    function get_slot_changes(definition, $$scope, dirty, fn) {
        if (definition[2] && fn) {
            const lets = definition[2](fn(dirty));
            if ($$scope.dirty === undefined) {
                return lets;
            }
            if (typeof lets === 'object') {
                const merged = [];
                const len = Math.max($$scope.dirty.length, lets.length);
                for (let i = 0; i < len; i += 1) {
                    merged[i] = $$scope.dirty[i] | lets[i];
                }
                return merged;
            }
            return $$scope.dirty | lets;
        }
        return $$scope.dirty;
    }
    function update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn) {
        if (slot_changes) {
            const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
            slot.p(slot_context, slot_changes);
        }
    }
    function get_all_dirty_from_scope($$scope) {
        if ($$scope.ctx.length > 32) {
            const dirty = [];
            const length = $$scope.ctx.length / 32;
            for (let i = 0; i < length; i++) {
                dirty[i] = -1;
            }
            return dirty;
        }
        return -1;
    }
    function null_to_empty(value) {
        return value == null ? '' : value;
    }

    const is_client = typeof window !== 'undefined';
    let now = is_client
        ? () => window.performance.now()
        : () => Date.now();
    let raf = is_client ? cb => requestAnimationFrame(cb) : noop;

    const tasks = new Set();
    function run_tasks(now) {
        tasks.forEach(task => {
            if (!task.c(now)) {
                tasks.delete(task);
                task.f();
            }
        });
        if (tasks.size !== 0)
            raf(run_tasks);
    }
    /**
     * Creates a new task that runs on each raf frame
     * until it returns a falsy value or is aborted
     */
    function loop(callback) {
        let task;
        if (tasks.size === 0)
            raf(run_tasks);
        return {
            promise: new Promise(fulfill => {
                tasks.add(task = { c: callback, f: fulfill });
            }),
            abort() {
                tasks.delete(task);
            }
        };
    }
    function append(target, node) {
        target.appendChild(node);
    }
    function get_root_for_style(node) {
        if (!node)
            return document;
        const root = node.getRootNode ? node.getRootNode() : node.ownerDocument;
        if (root && root.host) {
            return root;
        }
        return node.ownerDocument;
    }
    function append_empty_stylesheet(node) {
        const style_element = element('style');
        append_stylesheet(get_root_for_style(node), style_element);
        return style_element.sheet;
    }
    function append_stylesheet(node, style) {
        append(node.head || node, style);
    }
    function insert(target, node, anchor) {
        target.insertBefore(node, anchor || null);
    }
    function detach(node) {
        node.parentNode.removeChild(node);
    }
    function destroy_each(iterations, detaching) {
        for (let i = 0; i < iterations.length; i += 1) {
            if (iterations[i])
                iterations[i].d(detaching);
        }
    }
    function element(name) {
        return document.createElement(name);
    }
    function text(data) {
        return document.createTextNode(data);
    }
    function space() {
        return text(' ');
    }
    function empty() {
        return text('');
    }
    function attr(node, attribute, value) {
        if (value == null)
            node.removeAttribute(attribute);
        else if (node.getAttribute(attribute) !== value)
            node.setAttribute(attribute, value);
    }
    function children(element) {
        return Array.from(element.childNodes);
    }
    function toggle_class(element, name, toggle) {
        element.classList[toggle ? 'add' : 'remove'](name);
    }
    function custom_event(type, detail, bubbles = false) {
        const e = document.createEvent('CustomEvent');
        e.initCustomEvent(type, bubbles, false, detail);
        return e;
    }

    // we need to store the information for multiple documents because a Svelte application could also contain iframes
    // https://github.com/sveltejs/svelte/issues/3624
    const managed_styles = new Map();
    let active = 0;
    // https://github.com/darkskyapp/string-hash/blob/master/index.js
    function hash(str) {
        let hash = 5381;
        let i = str.length;
        while (i--)
            hash = ((hash << 5) - hash) ^ str.charCodeAt(i);
        return hash >>> 0;
    }
    function create_style_information(doc, node) {
        const info = { stylesheet: append_empty_stylesheet(node), rules: {} };
        managed_styles.set(doc, info);
        return info;
    }
    function create_rule(node, a, b, duration, delay, ease, fn, uid = 0) {
        const step = 16.666 / duration;
        let keyframes = '{\n';
        for (let p = 0; p <= 1; p += step) {
            const t = a + (b - a) * ease(p);
            keyframes += p * 100 + `%{${fn(t, 1 - t)}}\n`;
        }
        const rule = keyframes + `100% {${fn(b, 1 - b)}}\n}`;
        const name = `__svelte_${hash(rule)}_${uid}`;
        const doc = get_root_for_style(node);
        const { stylesheet, rules } = managed_styles.get(doc) || create_style_information(doc, node);
        if (!rules[name]) {
            rules[name] = true;
            stylesheet.insertRule(`@keyframes ${name} ${rule}`, stylesheet.cssRules.length);
        }
        const animation = node.style.animation || '';
        node.style.animation = `${animation ? `${animation}, ` : ''}${name} ${duration}ms linear ${delay}ms 1 both`;
        active += 1;
        return name;
    }
    function delete_rule(node, name) {
        const previous = (node.style.animation || '').split(', ');
        const next = previous.filter(name
            ? anim => anim.indexOf(name) < 0 // remove specific animation
            : anim => anim.indexOf('__svelte') === -1 // remove all Svelte animations
        );
        const deleted = previous.length - next.length;
        if (deleted) {
            node.style.animation = next.join(', ');
            active -= deleted;
            if (!active)
                clear_rules();
        }
    }
    function clear_rules() {
        raf(() => {
            if (active)
                return;
            managed_styles.forEach(info => {
                const { stylesheet } = info;
                let i = stylesheet.cssRules.length;
                while (i--)
                    stylesheet.deleteRule(i);
                info.rules = {};
            });
            managed_styles.clear();
        });
    }

    let current_component;
    function set_current_component(component) {
        current_component = component;
    }
    function get_current_component() {
        if (!current_component)
            throw new Error('Function called outside component initialization');
        return current_component;
    }
    function onMount(fn) {
        get_current_component().$$.on_mount.push(fn);
    }

    const dirty_components = [];
    const binding_callbacks = [];
    const render_callbacks = [];
    const flush_callbacks = [];
    const resolved_promise = Promise.resolve();
    let update_scheduled = false;
    function schedule_update() {
        if (!update_scheduled) {
            update_scheduled = true;
            resolved_promise.then(flush);
        }
    }
    function add_render_callback(fn) {
        render_callbacks.push(fn);
    }
    function add_flush_callback(fn) {
        flush_callbacks.push(fn);
    }
    // flush() calls callbacks in this order:
    // 1. All beforeUpdate callbacks, in order: parents before children
    // 2. All bind:this callbacks, in reverse order: children before parents.
    // 3. All afterUpdate callbacks, in order: parents before children. EXCEPT
    //    for afterUpdates called during the initial onMount, which are called in
    //    reverse order: children before parents.
    // Since callbacks might update component values, which could trigger another
    // call to flush(), the following steps guard against this:
    // 1. During beforeUpdate, any updated components will be added to the
    //    dirty_components array and will cause a reentrant call to flush(). Because
    //    the flush index is kept outside the function, the reentrant call will pick
    //    up where the earlier call left off and go through all dirty components. The
    //    current_component value is saved and restored so that the reentrant call will
    //    not interfere with the "parent" flush() call.
    // 2. bind:this callbacks cannot trigger new flush() calls.
    // 3. During afterUpdate, any updated components will NOT have their afterUpdate
    //    callback called a second time; the seen_callbacks set, outside the flush()
    //    function, guarantees this behavior.
    const seen_callbacks = new Set();
    let flushidx = 0; // Do *not* move this inside the flush() function
    function flush() {
        const saved_component = current_component;
        do {
            // first, call beforeUpdate functions
            // and update components
            while (flushidx < dirty_components.length) {
                const component = dirty_components[flushidx];
                flushidx++;
                set_current_component(component);
                update(component.$$);
            }
            set_current_component(null);
            dirty_components.length = 0;
            flushidx = 0;
            while (binding_callbacks.length)
                binding_callbacks.pop()();
            // then, once components are updated, call
            // afterUpdate functions. This may cause
            // subsequent updates...
            for (let i = 0; i < render_callbacks.length; i += 1) {
                const callback = render_callbacks[i];
                if (!seen_callbacks.has(callback)) {
                    // ...so guard against infinite loops
                    seen_callbacks.add(callback);
                    callback();
                }
            }
            render_callbacks.length = 0;
        } while (dirty_components.length);
        while (flush_callbacks.length) {
            flush_callbacks.pop()();
        }
        update_scheduled = false;
        seen_callbacks.clear();
        set_current_component(saved_component);
    }
    function update($$) {
        if ($$.fragment !== null) {
            $$.update();
            run_all($$.before_update);
            const dirty = $$.dirty;
            $$.dirty = [-1];
            $$.fragment && $$.fragment.p($$.ctx, dirty);
            $$.after_update.forEach(add_render_callback);
        }
    }

    let promise;
    function wait() {
        if (!promise) {
            promise = Promise.resolve();
            promise.then(() => {
                promise = null;
            });
        }
        return promise;
    }
    function dispatch(node, direction, kind) {
        node.dispatchEvent(custom_event(`${direction ? 'intro' : 'outro'}${kind}`));
    }
    const outroing = new Set();
    let outros;
    function group_outros() {
        outros = {
            r: 0,
            c: [],
            p: outros // parent group
        };
    }
    function check_outros() {
        if (!outros.r) {
            run_all(outros.c);
        }
        outros = outros.p;
    }
    function transition_in(block, local) {
        if (block && block.i) {
            outroing.delete(block);
            block.i(local);
        }
    }
    function transition_out(block, local, detach, callback) {
        if (block && block.o) {
            if (outroing.has(block))
                return;
            outroing.add(block);
            outros.c.push(() => {
                outroing.delete(block);
                if (callback) {
                    if (detach)
                        block.d(1);
                    callback();
                }
            });
            block.o(local);
        }
    }
    const null_transition = { duration: 0 };
    function create_in_transition(node, fn, params) {
        let config = fn(node, params);
        let running = false;
        let animation_name;
        let task;
        let uid = 0;
        function cleanup() {
            if (animation_name)
                delete_rule(node, animation_name);
        }
        function go() {
            const { delay = 0, duration = 300, easing = identity, tick = noop, css } = config || null_transition;
            if (css)
                animation_name = create_rule(node, 0, 1, duration, delay, easing, css, uid++);
            tick(0, 1);
            const start_time = now() + delay;
            const end_time = start_time + duration;
            if (task)
                task.abort();
            running = true;
            add_render_callback(() => dispatch(node, true, 'start'));
            task = loop(now => {
                if (running) {
                    if (now >= end_time) {
                        tick(1, 0);
                        dispatch(node, true, 'end');
                        cleanup();
                        return running = false;
                    }
                    if (now >= start_time) {
                        const t = easing((now - start_time) / duration);
                        tick(t, 1 - t);
                    }
                }
                return running;
            });
        }
        let started = false;
        return {
            start() {
                if (started)
                    return;
                started = true;
                delete_rule(node);
                if (is_function(config)) {
                    config = config();
                    wait().then(go);
                }
                else {
                    go();
                }
            },
            invalidate() {
                started = false;
            },
            end() {
                if (running) {
                    cleanup();
                    running = false;
                }
            }
        };
    }
    function create_out_transition(node, fn, params) {
        let config = fn(node, params);
        let running = true;
        let animation_name;
        const group = outros;
        group.r += 1;
        function go() {
            const { delay = 0, duration = 300, easing = identity, tick = noop, css } = config || null_transition;
            if (css)
                animation_name = create_rule(node, 1, 0, duration, delay, easing, css);
            const start_time = now() + delay;
            const end_time = start_time + duration;
            add_render_callback(() => dispatch(node, false, 'start'));
            loop(now => {
                if (running) {
                    if (now >= end_time) {
                        tick(0, 1);
                        dispatch(node, false, 'end');
                        if (!--group.r) {
                            // this will result in `end()` being called,
                            // so we don't need to clean up here
                            run_all(group.c);
                        }
                        return false;
                    }
                    if (now >= start_time) {
                        const t = easing((now - start_time) / duration);
                        tick(1 - t, t);
                    }
                }
                return running;
            });
        }
        if (is_function(config)) {
            wait().then(() => {
                // @ts-ignore
                config = config();
                go();
            });
        }
        else {
            go();
        }
        return {
            end(reset) {
                if (reset && config.tick) {
                    config.tick(1, 0);
                }
                if (running) {
                    if (animation_name)
                        delete_rule(node, animation_name);
                    running = false;
                }
            }
        };
    }

    function bind(component, name, callback) {
        const index = component.$$.props[name];
        if (index !== undefined) {
            component.$$.bound[index] = callback;
            callback(component.$$.ctx[index]);
        }
    }
    function create_component(block) {
        block && block.c();
    }
    function mount_component(component, target, anchor, customElement) {
        const { fragment, on_mount, on_destroy, after_update } = component.$$;
        fragment && fragment.m(target, anchor);
        if (!customElement) {
            // onMount happens before the initial afterUpdate
            add_render_callback(() => {
                const new_on_destroy = on_mount.map(run).filter(is_function);
                if (on_destroy) {
                    on_destroy.push(...new_on_destroy);
                }
                else {
                    // Edge case - component was destroyed immediately,
                    // most likely as a result of a binding initialising
                    run_all(new_on_destroy);
                }
                component.$$.on_mount = [];
            });
        }
        after_update.forEach(add_render_callback);
    }
    function destroy_component(component, detaching) {
        const $$ = component.$$;
        if ($$.fragment !== null) {
            run_all($$.on_destroy);
            $$.fragment && $$.fragment.d(detaching);
            // TODO null out other refs, including component.$$ (but need to
            // preserve final state?)
            $$.on_destroy = $$.fragment = null;
            $$.ctx = [];
        }
    }
    function make_dirty(component, i) {
        if (component.$$.dirty[0] === -1) {
            dirty_components.push(component);
            schedule_update();
            component.$$.dirty.fill(0);
        }
        component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
    }
    function init(component, options, instance, create_fragment, not_equal, props, append_styles, dirty = [-1]) {
        const parent_component = current_component;
        set_current_component(component);
        const $$ = component.$$ = {
            fragment: null,
            ctx: null,
            // state
            props,
            update: noop,
            not_equal,
            bound: blank_object(),
            // lifecycle
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
            // everything else
            callbacks: blank_object(),
            dirty,
            skip_bound: false,
            root: options.target || parent_component.$$.root
        };
        append_styles && append_styles($$.root);
        let ready = false;
        $$.ctx = instance
            ? instance(component, options.props || {}, (i, ret, ...rest) => {
                const value = rest.length ? rest[0] : ret;
                if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                    if (!$$.skip_bound && $$.bound[i])
                        $$.bound[i](value);
                    if (ready)
                        make_dirty(component, i);
                }
                return ret;
            })
            : [];
        $$.update();
        ready = true;
        run_all($$.before_update);
        // `false` as a special case of no DOM component
        $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
        if (options.target) {
            if (options.hydrate) {
                const nodes = children(options.target);
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.l(nodes);
                nodes.forEach(detach);
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                $$.fragment && $$.fragment.c();
            }
            if (options.intro)
                transition_in(component.$$.fragment);
            mount_component(component, options.target, options.anchor, options.customElement);
            flush();
        }
        set_current_component(parent_component);
    }
    /**
     * Base class for Svelte components. Used when dev=false.
     */
    class SvelteComponent {
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set($$props) {
            if (this.$$set && !is_empty($$props)) {
                this.$$.skip_bound = true;
                this.$$set($$props);
                this.$$.skip_bound = false;
            }
        }
    }

    function dispatch_dev(type, detail) {
        document.dispatchEvent(custom_event(type, Object.assign({ version: '3.46.3' }, detail), true));
    }
    function append_dev(target, node) {
        dispatch_dev('SvelteDOMInsert', { target, node });
        append(target, node);
    }
    function insert_dev(target, node, anchor) {
        dispatch_dev('SvelteDOMInsert', { target, node, anchor });
        insert(target, node, anchor);
    }
    function detach_dev(node) {
        dispatch_dev('SvelteDOMRemove', { node });
        detach(node);
    }
    function attr_dev(node, attribute, value) {
        attr(node, attribute, value);
        if (value == null)
            dispatch_dev('SvelteDOMRemoveAttribute', { node, attribute });
        else
            dispatch_dev('SvelteDOMSetAttribute', { node, attribute, value });
    }
    function validate_each_argument(arg) {
        if (typeof arg !== 'string' && !(arg && typeof arg === 'object' && 'length' in arg)) {
            let msg = '{#each} only iterates over array-like objects.';
            if (typeof Symbol === 'function' && arg && Symbol.iterator in arg) {
                msg += ' You can use a spread to convert this iterable into an array.';
            }
            throw new Error(msg);
        }
    }
    function validate_slots(name, slot, keys) {
        for (const slot_key of Object.keys(slot)) {
            if (!~keys.indexOf(slot_key)) {
                console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
            }
        }
    }
    /**
     * Base class for Svelte components with some minor dev-enhancements. Used when dev=true.
     */
    class SvelteComponentDev extends SvelteComponent {
        constructor(options) {
            if (!options || (!options.target && !options.$$inline)) {
                throw new Error("'target' is a required option");
            }
            super();
        }
        $destroy() {
            super.$destroy();
            this.$destroy = () => {
                console.warn('Component was already destroyed'); // eslint-disable-line no-console
            };
        }
        $capture_state() { }
        $inject_state() { }
    }

    /* src/Scrolly.svelte generated by Svelte v3.46.3 */
    const file$6 = "src/Scrolly.svelte";

    function create_fragment$6(ctx) {
    	let div;
    	let current;
    	const default_slot_template = /*#slots*/ ctx[7].default;
    	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[6], null);

    	const block = {
    		c: function create() {
    			div = element("div");
    			if (default_slot) default_slot.c();
    			add_location(div, file$6, 80, 2, 2142);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);

    			if (default_slot) {
    				default_slot.m(div, null);
    			}

    			/*div_binding*/ ctx[8](div);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (default_slot) {
    				if (default_slot.p && (!current || dirty & /*$$scope*/ 64)) {
    					update_slot_base(
    						default_slot,
    						default_slot_template,
    						ctx,
    						/*$$scope*/ ctx[6],
    						!current
    						? get_all_dirty_from_scope(/*$$scope*/ ctx[6])
    						: get_slot_changes(default_slot_template, /*$$scope*/ ctx[6], dirty, null),
    						null
    					);
    				}
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(default_slot, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(default_slot, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			if (default_slot) default_slot.d(detaching);
    			/*div_binding*/ ctx[8](null);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$6.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$6($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Scrolly', slots, ['default']);
    	let { root = null } = $$props;
    	let { top = 0 } = $$props;
    	let { bottom = 0 } = $$props;
    	let { increments = 100 } = $$props;
    	let { value = undefined } = $$props;
    	const steps = [];
    	const threshold = [];
    	let nodes = [];
    	let intersectionObservers = [];
    	let container;

    	const update = () => {
    		if (!nodes.length) return;
    		nodes.forEach(createObserver);
    	};

    	const mostInView = () => {
    		let maxRatio = 0;
    		let maxIndex = 0;

    		for (let i = 0; i < steps.length; i++) {
    			if (steps[i] > maxRatio) {
    				maxRatio = steps[i];
    				maxIndex = i;
    			}
    		}

    		if (maxRatio > 0) $$invalidate(1, value = maxIndex); else $$invalidate(1, value = undefined);
    	};

    	const createObserver = (node, index) => {
    		const handleIntersect = e => {
    			e[0].isIntersecting;
    			const ratio = e[0].intersectionRatio;
    			steps[index] = ratio;
    			mostInView();
    		};

    		const marginTop = top ? top * -1 : 0;
    		const marginBottom = bottom ? bottom * -1 : 0;
    		const rootMargin = `${marginTop}px 0px ${marginBottom}px 0px`;
    		const options = { root, rootMargin, threshold };
    		if (intersectionObservers[index]) intersectionObservers[index].disconnect();
    		const io = new IntersectionObserver(handleIntersect, options);
    		io.observe(node);
    		intersectionObservers[index] = io;
    	};

    	onMount(() => {
    		for (let i = 0; i < increments + 1; i++) {
    			threshold.push(i / increments);
    		}

    		nodes = container.querySelectorAll(":scope > *");
    		update();
    	});

    	const writable_props = ['root', 'top', 'bottom', 'increments', 'value'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Scrolly> was created with unknown prop '${key}'`);
    	});

    	function div_binding($$value) {
    		binding_callbacks[$$value ? 'unshift' : 'push'](() => {
    			container = $$value;
    			$$invalidate(0, container);
    		});
    	}

    	$$self.$$set = $$props => {
    		if ('root' in $$props) $$invalidate(2, root = $$props.root);
    		if ('top' in $$props) $$invalidate(3, top = $$props.top);
    		if ('bottom' in $$props) $$invalidate(4, bottom = $$props.bottom);
    		if ('increments' in $$props) $$invalidate(5, increments = $$props.increments);
    		if ('value' in $$props) $$invalidate(1, value = $$props.value);
    		if ('$$scope' in $$props) $$invalidate(6, $$scope = $$props.$$scope);
    	};

    	$$self.$capture_state = () => ({
    		onMount,
    		root,
    		top,
    		bottom,
    		increments,
    		value,
    		steps,
    		threshold,
    		nodes,
    		intersectionObservers,
    		container,
    		update,
    		mostInView,
    		createObserver
    	});

    	$$self.$inject_state = $$props => {
    		if ('root' in $$props) $$invalidate(2, root = $$props.root);
    		if ('top' in $$props) $$invalidate(3, top = $$props.top);
    		if ('bottom' in $$props) $$invalidate(4, bottom = $$props.bottom);
    		if ('increments' in $$props) $$invalidate(5, increments = $$props.increments);
    		if ('value' in $$props) $$invalidate(1, value = $$props.value);
    		if ('nodes' in $$props) nodes = $$props.nodes;
    		if ('intersectionObservers' in $$props) intersectionObservers = $$props.intersectionObservers;
    		if ('container' in $$props) $$invalidate(0, container = $$props.container);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	$$self.$$.update = () => {
    		if ($$self.$$.dirty & /*top, bottom*/ 24) {
    			(update());
    		}
    	};

    	return [container, value, root, top, bottom, increments, $$scope, slots, div_binding];
    }

    class Scrolly extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$6, create_fragment$6, safe_not_equal, {
    			root: 2,
    			top: 3,
    			bottom: 4,
    			increments: 5,
    			value: 1
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Scrolly",
    			options,
    			id: create_fragment$6.name
    		});
    	}

    	get root() {
    		throw new Error("<Scrolly>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set root(value) {
    		throw new Error("<Scrolly>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get top() {
    		throw new Error("<Scrolly>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set top(value) {
    		throw new Error("<Scrolly>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get bottom() {
    		throw new Error("<Scrolly>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set bottom(value) {
    		throw new Error("<Scrolly>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get increments() {
    		throw new Error("<Scrolly>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set increments(value) {
    		throw new Error("<Scrolly>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get value() {
    		throw new Error("<Scrolly>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set value(value) {
    		throw new Error("<Scrolly>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/HalfPage.svelte generated by Svelte v3.46.3 */

    const file$5 = "src/HalfPage.svelte";

    function create_fragment$5(ctx) {
    	let div2;
    	let div0;
    	let t;
    	let div1;

    	const block = {
    		c: function create() {
    			div2 = element("div");
    			div0 = element("div");
    			t = space();
    			div1 = element("div");
    			attr_dev(div0, "class", "step-text svelte-c4lq21");
    			add_location(div0, file$5, 10, 4, 179);
    			attr_dev(div1, "class", "step-img svelte-c4lq21");
    			add_location(div1, file$5, 13, 4, 241);
    			attr_dev(div2, "class", "step-cont svelte-c4lq21");
    			toggle_class(div2, "active", /*currentStep*/ ctx[0] === /*i*/ ctx[1]);
    			add_location(div2, file$5, 8, 0, 81);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div2, anchor);
    			append_dev(div2, div0);
    			div0.innerHTML = /*text*/ ctx[2];
    			append_dev(div2, t);
    			append_dev(div2, div1);
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*text*/ 4) div0.innerHTML = /*text*/ ctx[2];
    			if (dirty & /*currentStep, i*/ 3) {
    				toggle_class(div2, "active", /*currentStep*/ ctx[0] === /*i*/ ctx[1]);
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div2);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$5.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$5($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('HalfPage', slots, []);
    	let { currentStep } = $$props;
    	let { i } = $$props;
    	let { text } = $$props;
    	const writable_props = ['currentStep', 'i', 'text'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<HalfPage> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ('currentStep' in $$props) $$invalidate(0, currentStep = $$props.currentStep);
    		if ('i' in $$props) $$invalidate(1, i = $$props.i);
    		if ('text' in $$props) $$invalidate(2, text = $$props.text);
    	};

    	$$self.$capture_state = () => ({ currentStep, i, text });

    	$$self.$inject_state = $$props => {
    		if ('currentStep' in $$props) $$invalidate(0, currentStep = $$props.currentStep);
    		if ('i' in $$props) $$invalidate(1, i = $$props.i);
    		if ('text' in $$props) $$invalidate(2, text = $$props.text);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [currentStep, i, text];
    }

    class HalfPage extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$5, create_fragment$5, safe_not_equal, { currentStep: 0, i: 1, text: 2 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "HalfPage",
    			options,
    			id: create_fragment$5.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*currentStep*/ ctx[0] === undefined && !('currentStep' in props)) {
    			console.warn("<HalfPage> was created without expected prop 'currentStep'");
    		}

    		if (/*i*/ ctx[1] === undefined && !('i' in props)) {
    			console.warn("<HalfPage> was created without expected prop 'i'");
    		}

    		if (/*text*/ ctx[2] === undefined && !('text' in props)) {
    			console.warn("<HalfPage> was created without expected prop 'text'");
    		}
    	}

    	get currentStep() {
    		throw new Error("<HalfPage>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set currentStep(value) {
    		throw new Error("<HalfPage>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get i() {
    		throw new Error("<HalfPage>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set i(value) {
    		throw new Error("<HalfPage>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get text() {
    		throw new Error("<HalfPage>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set text(value) {
    		throw new Error("<HalfPage>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/Half2Page.svelte generated by Svelte v3.46.3 */

    const file$4 = "src/Half2Page.svelte";

    function create_fragment$4(ctx) {
    	let div2;
    	let div0;
    	let t;
    	let div1;

    	const block = {
    		c: function create() {
    			div2 = element("div");
    			div0 = element("div");
    			t = space();
    			div1 = element("div");
    			attr_dev(div0, "class", "step-img svelte-9fy42t");
    			add_location(div0, file$4, 10, 8, 219);
    			attr_dev(div1, "class", "step-text svelte-9fy42t");
    			add_location(div1, file$4, 13, 8, 336);
    			attr_dev(div2, "class", "step-cont svelte-9fy42t");
    			toggle_class(div2, "active", /*currentStep*/ ctx[0] === /*i*/ ctx[1]);
    			add_location(div2, file$4, 8, 4, 113);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div2, anchor);
    			append_dev(div2, div0);
    			append_dev(div2, t);
    			append_dev(div2, div1);
    			div1.innerHTML = /*text*/ ctx[2];
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*text*/ 4) div1.innerHTML = /*text*/ ctx[2];
    			if (dirty & /*currentStep, i*/ 3) {
    				toggle_class(div2, "active", /*currentStep*/ ctx[0] === /*i*/ ctx[1]);
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div2);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$4.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$4($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('Half2Page', slots, []);
    	let { currentStep } = $$props;
    	let { i } = $$props;
    	let { text } = $$props;
    	const writable_props = ['currentStep', 'i', 'text'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<Half2Page> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ('currentStep' in $$props) $$invalidate(0, currentStep = $$props.currentStep);
    		if ('i' in $$props) $$invalidate(1, i = $$props.i);
    		if ('text' in $$props) $$invalidate(2, text = $$props.text);
    	};

    	$$self.$capture_state = () => ({ currentStep, i, text });

    	$$self.$inject_state = $$props => {
    		if ('currentStep' in $$props) $$invalidate(0, currentStep = $$props.currentStep);
    		if ('i' in $$props) $$invalidate(1, i = $$props.i);
    		if ('text' in $$props) $$invalidate(2, text = $$props.text);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [currentStep, i, text];
    }

    class Half2Page extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance$4, create_fragment$4, safe_not_equal, { currentStep: 0, i: 1, text: 2 });

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "Half2Page",
    			options,
    			id: create_fragment$4.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*currentStep*/ ctx[0] === undefined && !('currentStep' in props)) {
    			console.warn("<Half2Page> was created without expected prop 'currentStep'");
    		}

    		if (/*i*/ ctx[1] === undefined && !('i' in props)) {
    			console.warn("<Half2Page> was created without expected prop 'i'");
    		}

    		if (/*text*/ ctx[2] === undefined && !('text' in props)) {
    			console.warn("<Half2Page> was created without expected prop 'text'");
    		}
    	}

    	get currentStep() {
    		throw new Error("<Half2Page>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set currentStep(value) {
    		throw new Error("<Half2Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get i() {
    		throw new Error("<Half2Page>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set i(value) {
    		throw new Error("<Half2Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get text() {
    		throw new Error("<Half2Page>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set text(value) {
    		throw new Error("<Half2Page>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/FullPage.svelte generated by Svelte v3.46.3 */

    const file$3 = "src/FullPage.svelte";

    function create_fragment$3(ctx) {
    	let div2;
    	let div0;
    	let t;
    	let div1;

    	const block = {
    		c: function create() {
    			div2 = element("div");
    			div0 = element("div");
    			t = space();
    			div1 = element("div");
    			attr_dev(div0, "class", "step-text svelte-ndhi1x");
    			add_location(div0, file$3, 12, 8, 261);
    			attr_dev(div1, "class", "step-img svelte-ndhi1x");
    			add_location(div1, file$3, 15, 8, 335);
    			attr_dev(div2, "class", "step-cont svelte-ndhi1x");
    			toggle_class(div2, "active", /*currentStep*/ ctx[0] === /*i*/ ctx[1]);
    			add_location(div2, file$3, 10, 4, 155);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div2, anchor);
    			append_dev(div2, div0);
    			div0.innerHTML = /*text*/ ctx[2];
    			append_dev(div2, t);
    			append_dev(div2, div1);
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*text*/ 4) div0.innerHTML = /*text*/ ctx[2];
    			if (dirty & /*currentStep, i*/ 3) {
    				toggle_class(div2, "active", /*currentStep*/ ctx[0] === /*i*/ ctx[1]);
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div2);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$3.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$3($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('FullPage', slots, []);
    	let { image } = $$props;
    	let { alt } = $$props;
    	let { currentStep } = $$props;
    	let { i } = $$props;
    	let { text } = $$props;
    	const writable_props = ['image', 'alt', 'currentStep', 'i', 'text'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<FullPage> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ('image' in $$props) $$invalidate(3, image = $$props.image);
    		if ('alt' in $$props) $$invalidate(4, alt = $$props.alt);
    		if ('currentStep' in $$props) $$invalidate(0, currentStep = $$props.currentStep);
    		if ('i' in $$props) $$invalidate(1, i = $$props.i);
    		if ('text' in $$props) $$invalidate(2, text = $$props.text);
    	};

    	$$self.$capture_state = () => ({ image, alt, currentStep, i, text });

    	$$self.$inject_state = $$props => {
    		if ('image' in $$props) $$invalidate(3, image = $$props.image);
    		if ('alt' in $$props) $$invalidate(4, alt = $$props.alt);
    		if ('currentStep' in $$props) $$invalidate(0, currentStep = $$props.currentStep);
    		if ('i' in $$props) $$invalidate(1, i = $$props.i);
    		if ('text' in $$props) $$invalidate(2, text = $$props.text);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [currentStep, i, text, image, alt];
    }

    class FullPage extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$3, create_fragment$3, safe_not_equal, {
    			image: 3,
    			alt: 4,
    			currentStep: 0,
    			i: 1,
    			text: 2
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "FullPage",
    			options,
    			id: create_fragment$3.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*image*/ ctx[3] === undefined && !('image' in props)) {
    			console.warn("<FullPage> was created without expected prop 'image'");
    		}

    		if (/*alt*/ ctx[4] === undefined && !('alt' in props)) {
    			console.warn("<FullPage> was created without expected prop 'alt'");
    		}

    		if (/*currentStep*/ ctx[0] === undefined && !('currentStep' in props)) {
    			console.warn("<FullPage> was created without expected prop 'currentStep'");
    		}

    		if (/*i*/ ctx[1] === undefined && !('i' in props)) {
    			console.warn("<FullPage> was created without expected prop 'i'");
    		}

    		if (/*text*/ ctx[2] === undefined && !('text' in props)) {
    			console.warn("<FullPage> was created without expected prop 'text'");
    		}
    	}

    	get image() {
    		throw new Error("<FullPage>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set image(value) {
    		throw new Error("<FullPage>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get alt() {
    		throw new Error("<FullPage>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set alt(value) {
    		throw new Error("<FullPage>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get currentStep() {
    		throw new Error("<FullPage>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set currentStep(value) {
    		throw new Error("<FullPage>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get i() {
    		throw new Error("<FullPage>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set i(value) {
    		throw new Error("<FullPage>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get text() {
    		throw new Error("<FullPage>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set text(value) {
    		throw new Error("<FullPage>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/TitlePage.svelte generated by Svelte v3.46.3 */

    const file$2 = "src/TitlePage.svelte";

    function create_fragment$2(ctx) {
    	let div2;
    	let img0;
    	let img0_src_value;
    	let t0;
    	let div0;
    	let h10;
    	let t2;
    	let h11;
    	let t4;
    	let h12;
    	let t6;
    	let h2;
    	let b;
    	let t8;
    	let p;
    	let t9;
    	let div1;
    	let img1;
    	let img1_src_value;

    	const block = {
    		c: function create() {
    			div2 = element("div");
    			img0 = element("img");
    			t0 = space();
    			div0 = element("div");
    			h10 = element("h1");
    			h10.textContent = "THE";
    			t2 = space();
    			h11 = element("h1");
    			h11.textContent = "Chinatown";
    			t4 = space();
    			h12 = element("h1");
    			h12.textContent = "Crowd";
    			t6 = space();
    			h2 = element("h2");
    			b = element("b");
    			b.textContent = "By Annie Fu";
    			t8 = space();
    			p = element("p");
    			t9 = space();
    			div1 = element("div");
    			img1 = element("img");
    			attr_dev(img0, "class", "title-img svelte-umcxwq");
    			if (!src_url_equal(img0.src, img0_src_value = "./media/kiosk_1.jpg")) attr_dev(img0, "src", img0_src_value);
    			attr_dev(img0, "alt", "An image of a kiosk, with Mandarin characters and 'Welcome to Chinatown' in English on it. The top third of the image is artistically burnt out.");
    			add_location(img0, file$2, 11, 2, 253);
    			attr_dev(h10, "class", "the svelte-umcxwq");
    			add_location(h10, file$2, 17, 4, 501);
    			attr_dev(h11, "class", "svelte-umcxwq");
    			add_location(h11, file$2, 18, 4, 530);
    			attr_dev(h12, "class", "svelte-umcxwq");
    			add_location(h12, file$2, 19, 4, 553);
    			add_location(b, file$2, 20, 25, 593);
    			attr_dev(h2, "class", "subtitle svelte-umcxwq");
    			add_location(h2, file$2, 20, 4, 572);
    			attr_dev(p, "class", "subtitle svelte-umcxwq");
    			add_location(p, file$2, 21, 4, 621);
    			attr_dev(div0, "class", "title-text svelte-umcxwq");
    			add_location(div0, file$2, 16, 2, 472);
    			attr_dev(img1, "id", "title-img");
    			if (!src_url_equal(img1.src, img1_src_value = /*image*/ ctx[0])) attr_dev(img1, "src", img1_src_value);
    			attr_dev(img1, "alt", /*alt*/ ctx[1]);
    			attr_dev(img1, "class", "svelte-umcxwq");
    			add_location(img1, file$2, 26, 4, 705);
    			attr_dev(div1, "class", "title svelte-umcxwq");
    			add_location(div1, file$2, 25, 2, 681);
    			attr_dev(div2, "class", "title-content svelte-umcxwq");
    			toggle_class(div2, "active", /*currentStep*/ ctx[2] === /*i*/ ctx[3]);
    			add_location(div2, file$2, 9, 0, 142);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div2, anchor);
    			append_dev(div2, img0);
    			append_dev(div2, t0);
    			append_dev(div2, div0);
    			append_dev(div0, h10);
    			append_dev(div0, t2);
    			append_dev(div0, h11);
    			append_dev(div0, t4);
    			append_dev(div0, h12);
    			append_dev(div0, t6);
    			append_dev(div0, h2);
    			append_dev(h2, b);
    			append_dev(div0, t8);
    			append_dev(div0, p);
    			p.innerHTML = /*text*/ ctx[4];
    			append_dev(div2, t9);
    			append_dev(div2, div1);
    			append_dev(div1, img1);
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*text*/ 16) p.innerHTML = /*text*/ ctx[4];
    			if (dirty & /*image*/ 1 && !src_url_equal(img1.src, img1_src_value = /*image*/ ctx[0])) {
    				attr_dev(img1, "src", img1_src_value);
    			}

    			if (dirty & /*alt*/ 2) {
    				attr_dev(img1, "alt", /*alt*/ ctx[1]);
    			}

    			if (dirty & /*currentStep, i*/ 12) {
    				toggle_class(div2, "active", /*currentStep*/ ctx[2] === /*i*/ ctx[3]);
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div2);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$2.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$2($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('TitlePage', slots, []);
    	let { image } = $$props;
    	let { alt } = $$props;
    	let { currentStep } = $$props;
    	let { i } = $$props;
    	let { text } = $$props;
    	const writable_props = ['image', 'alt', 'currentStep', 'i', 'text'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<TitlePage> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ('image' in $$props) $$invalidate(0, image = $$props.image);
    		if ('alt' in $$props) $$invalidate(1, alt = $$props.alt);
    		if ('currentStep' in $$props) $$invalidate(2, currentStep = $$props.currentStep);
    		if ('i' in $$props) $$invalidate(3, i = $$props.i);
    		if ('text' in $$props) $$invalidate(4, text = $$props.text);
    	};

    	$$self.$capture_state = () => ({ image, alt, currentStep, i, text });

    	$$self.$inject_state = $$props => {
    		if ('image' in $$props) $$invalidate(0, image = $$props.image);
    		if ('alt' in $$props) $$invalidate(1, alt = $$props.alt);
    		if ('currentStep' in $$props) $$invalidate(2, currentStep = $$props.currentStep);
    		if ('i' in $$props) $$invalidate(3, i = $$props.i);
    		if ('text' in $$props) $$invalidate(4, text = $$props.text);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [image, alt, currentStep, i, text];
    }

    class TitlePage extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$2, create_fragment$2, safe_not_equal, {
    			image: 0,
    			alt: 1,
    			currentStep: 2,
    			i: 3,
    			text: 4
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "TitlePage",
    			options,
    			id: create_fragment$2.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*image*/ ctx[0] === undefined && !('image' in props)) {
    			console.warn("<TitlePage> was created without expected prop 'image'");
    		}

    		if (/*alt*/ ctx[1] === undefined && !('alt' in props)) {
    			console.warn("<TitlePage> was created without expected prop 'alt'");
    		}

    		if (/*currentStep*/ ctx[2] === undefined && !('currentStep' in props)) {
    			console.warn("<TitlePage> was created without expected prop 'currentStep'");
    		}

    		if (/*i*/ ctx[3] === undefined && !('i' in props)) {
    			console.warn("<TitlePage> was created without expected prop 'i'");
    		}

    		if (/*text*/ ctx[4] === undefined && !('text' in props)) {
    			console.warn("<TitlePage> was created without expected prop 'text'");
    		}
    	}

    	get image() {
    		throw new Error("<TitlePage>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set image(value) {
    		throw new Error("<TitlePage>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get alt() {
    		throw new Error("<TitlePage>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set alt(value) {
    		throw new Error("<TitlePage>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get currentStep() {
    		throw new Error("<TitlePage>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set currentStep(value) {
    		throw new Error("<TitlePage>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get i() {
    		throw new Error("<TitlePage>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set i(value) {
    		throw new Error("<TitlePage>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get text() {
    		throw new Error("<TitlePage>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set text(value) {
    		throw new Error("<TitlePage>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    /* src/MobileTitle.svelte generated by Svelte v3.46.3 */

    const file$1 = "src/MobileTitle.svelte";

    function create_fragment$1(ctx) {
    	let div2;
    	let div0;
    	let h10;
    	let t1;
    	let h11;
    	let t3;
    	let h12;
    	let t5;
    	let h2;
    	let b;
    	let t7;
    	let p;
    	let t8;
    	let div1;
    	let img;
    	let img_src_value;

    	const block = {
    		c: function create() {
    			div2 = element("div");
    			div0 = element("div");
    			h10 = element("h1");
    			h10.textContent = "THE";
    			t1 = space();
    			h11 = element("h1");
    			h11.textContent = "Chinatown";
    			t3 = space();
    			h12 = element("h1");
    			h12.textContent = "Crowd";
    			t5 = space();
    			h2 = element("h2");
    			b = element("b");
    			b.textContent = "By Annie Fu";
    			t7 = space();
    			p = element("p");
    			t8 = space();
    			div1 = element("div");
    			img = element("img");
    			attr_dev(h10, "class", "the svelte-1an8e6x");
    			add_location(h10, file$1, 11, 6, 250);
    			attr_dev(h11, "class", "svelte-1an8e6x");
    			add_location(h11, file$1, 12, 6, 281);
    			attr_dev(h12, "class", "svelte-1an8e6x");
    			add_location(h12, file$1, 13, 6, 306);
    			add_location(b, file$1, 14, 27, 348);
    			attr_dev(h2, "class", "subtitle svelte-1an8e6x");
    			add_location(h2, file$1, 14, 6, 327);
    			attr_dev(p, "class", "subtitle svelte-1an8e6x");
    			add_location(p, file$1, 15, 6, 378);
    			attr_dev(div0, "class", "title-text svelte-1an8e6x");
    			add_location(div0, file$1, 10, 4, 219);
    			attr_dev(img, "id", "title-img");
    			if (!src_url_equal(img.src, img_src_value = /*image*/ ctx[0])) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "alt", /*alt*/ ctx[1]);
    			attr_dev(img, "class", "svelte-1an8e6x");
    			add_location(img, file$1, 20, 6, 474);
    			attr_dev(div1, "class", "title svelte-1an8e6x");
    			add_location(div1, file$1, 19, 4, 448);
    			attr_dev(div2, "class", "title-content svelte-1an8e6x");
    			toggle_class(div2, "active", /*currentStep*/ ctx[2] === /*i*/ ctx[3]);
    			add_location(div2, file$1, 9, 2, 154);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div2, anchor);
    			append_dev(div2, div0);
    			append_dev(div0, h10);
    			append_dev(div0, t1);
    			append_dev(div0, h11);
    			append_dev(div0, t3);
    			append_dev(div0, h12);
    			append_dev(div0, t5);
    			append_dev(div0, h2);
    			append_dev(h2, b);
    			append_dev(div0, t7);
    			append_dev(div0, p);
    			p.innerHTML = /*text*/ ctx[4];
    			append_dev(div2, t8);
    			append_dev(div2, div1);
    			append_dev(div1, img);
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*text*/ 16) p.innerHTML = /*text*/ ctx[4];
    			if (dirty & /*image*/ 1 && !src_url_equal(img.src, img_src_value = /*image*/ ctx[0])) {
    				attr_dev(img, "src", img_src_value);
    			}

    			if (dirty & /*alt*/ 2) {
    				attr_dev(img, "alt", /*alt*/ ctx[1]);
    			}

    			if (dirty & /*currentStep, i*/ 12) {
    				toggle_class(div2, "active", /*currentStep*/ ctx[2] === /*i*/ ctx[3]);
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div2);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$1.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$1($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('MobileTitle', slots, []);
    	let { image } = $$props;
    	let { alt } = $$props;
    	let { currentStep } = $$props;
    	let { i } = $$props;
    	let { text } = $$props;
    	const writable_props = ['image', 'alt', 'currentStep', 'i', 'text'];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<MobileTitle> was created with unknown prop '${key}'`);
    	});

    	$$self.$$set = $$props => {
    		if ('image' in $$props) $$invalidate(0, image = $$props.image);
    		if ('alt' in $$props) $$invalidate(1, alt = $$props.alt);
    		if ('currentStep' in $$props) $$invalidate(2, currentStep = $$props.currentStep);
    		if ('i' in $$props) $$invalidate(3, i = $$props.i);
    		if ('text' in $$props) $$invalidate(4, text = $$props.text);
    	};

    	$$self.$capture_state = () => ({ image, alt, currentStep, i, text });

    	$$self.$inject_state = $$props => {
    		if ('image' in $$props) $$invalidate(0, image = $$props.image);
    		if ('alt' in $$props) $$invalidate(1, alt = $$props.alt);
    		if ('currentStep' in $$props) $$invalidate(2, currentStep = $$props.currentStep);
    		if ('i' in $$props) $$invalidate(3, i = $$props.i);
    		if ('text' in $$props) $$invalidate(4, text = $$props.text);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [image, alt, currentStep, i, text];
    }

    class MobileTitle extends SvelteComponentDev {
    	constructor(options) {
    		super(options);

    		init(this, options, instance$1, create_fragment$1, safe_not_equal, {
    			image: 0,
    			alt: 1,
    			currentStep: 2,
    			i: 3,
    			text: 4
    		});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "MobileTitle",
    			options,
    			id: create_fragment$1.name
    		});

    		const { ctx } = this.$$;
    		const props = options.props || {};

    		if (/*image*/ ctx[0] === undefined && !('image' in props)) {
    			console.warn("<MobileTitle> was created without expected prop 'image'");
    		}

    		if (/*alt*/ ctx[1] === undefined && !('alt' in props)) {
    			console.warn("<MobileTitle> was created without expected prop 'alt'");
    		}

    		if (/*currentStep*/ ctx[2] === undefined && !('currentStep' in props)) {
    			console.warn("<MobileTitle> was created without expected prop 'currentStep'");
    		}

    		if (/*i*/ ctx[3] === undefined && !('i' in props)) {
    			console.warn("<MobileTitle> was created without expected prop 'i'");
    		}

    		if (/*text*/ ctx[4] === undefined && !('text' in props)) {
    			console.warn("<MobileTitle> was created without expected prop 'text'");
    		}
    	}

    	get image() {
    		throw new Error("<MobileTitle>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set image(value) {
    		throw new Error("<MobileTitle>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get alt() {
    		throw new Error("<MobileTitle>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set alt(value) {
    		throw new Error("<MobileTitle>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get currentStep() {
    		throw new Error("<MobileTitle>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set currentStep(value) {
    		throw new Error("<MobileTitle>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get i() {
    		throw new Error("<MobileTitle>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set i(value) {
    		throw new Error("<MobileTitle>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	get text() {
    		throw new Error("<MobileTitle>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}

    	set text(value) {
    		throw new Error("<MobileTitle>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    	}
    }

    function cubicOut(t) {
        const f = t - 1.0;
        return f * f * f + 1.0;
    }

    function fade(node, { delay = 0, duration = 400, easing = identity } = {}) {
        const o = +getComputedStyle(node).opacity;
        return {
            delay,
            duration,
            easing,
            css: t => `opacity: ${t * o}`
        };
    }
    function fly(node, { delay = 0, duration = 400, easing = cubicOut, x = 0, y = 0, opacity = 0 } = {}) {
        const style = getComputedStyle(node);
        const target_opacity = +style.opacity;
        const transform = style.transform === 'none' ? '' : style.transform;
        const od = target_opacity * (1 - opacity);
        return {
            delay,
            duration,
            easing,
            css: (t, u) => `
			transform: ${transform} translate(${(1 - t) * x}px, ${(1 - t) * y}px);
			opacity: ${target_opacity - (od * u)}`
        };
    }

    const subscriber_queue = [];
    /**
     * Create a `Writable` store that allows both updating and reading by subscription.
     * @param {*=}value initial value
     * @param {StartStopNotifier=}start start and stop notifications for subscriptions
     */
    function writable(value, start = noop) {
        let stop;
        const subscribers = new Set();
        function set(new_value) {
            if (safe_not_equal(value, new_value)) {
                value = new_value;
                if (stop) { // store is ready
                    const run_queue = !subscriber_queue.length;
                    for (const subscriber of subscribers) {
                        subscriber[1]();
                        subscriber_queue.push(subscriber, value);
                    }
                    if (run_queue) {
                        for (let i = 0; i < subscriber_queue.length; i += 2) {
                            subscriber_queue[i][0](subscriber_queue[i + 1]);
                        }
                        subscriber_queue.length = 0;
                    }
                }
            }
        }
        function update(fn) {
            set(fn(value));
        }
        function subscribe(run, invalidate = noop) {
            const subscriber = [run, invalidate];
            subscribers.add(subscriber);
            if (subscribers.size === 1) {
                stop = start(set) || noop;
            }
            run(value);
            return () => {
                subscribers.delete(subscriber);
                if (subscribers.size === 0) {
                    stop();
                    stop = null;
                }
            };
        }
        return { set, update, subscribe };
    }

    function is_date(obj) {
        return Object.prototype.toString.call(obj) === '[object Date]';
    }

    function get_interpolator(a, b) {
        if (a === b || a !== a)
            return () => a;
        const type = typeof a;
        if (type !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
            throw new Error('Cannot interpolate values of different type');
        }
        if (Array.isArray(a)) {
            const arr = b.map((bi, i) => {
                return get_interpolator(a[i], bi);
            });
            return t => arr.map(fn => fn(t));
        }
        if (type === 'object') {
            if (!a || !b)
                throw new Error('Object cannot be null');
            if (is_date(a) && is_date(b)) {
                a = a.getTime();
                b = b.getTime();
                const delta = b - a;
                return t => new Date(a + t * delta);
            }
            const keys = Object.keys(b);
            const interpolators = {};
            keys.forEach(key => {
                interpolators[key] = get_interpolator(a[key], b[key]);
            });
            return t => {
                const result = {};
                keys.forEach(key => {
                    result[key] = interpolators[key](t);
                });
                return result;
            };
        }
        if (type === 'number') {
            const delta = b - a;
            return t => a + t * delta;
        }
        throw new Error(`Cannot interpolate ${type} values`);
    }
    function tweened(value, defaults = {}) {
        const store = writable(value);
        let task;
        let target_value = value;
        function set(new_value, opts) {
            if (value == null) {
                store.set(value = new_value);
                return Promise.resolve();
            }
            target_value = new_value;
            let previous_task = task;
            let started = false;
            let { delay = 0, duration = 400, easing = identity, interpolate = get_interpolator } = assign(assign({}, defaults), opts);
            if (duration === 0) {
                if (previous_task) {
                    previous_task.abort();
                    previous_task = null;
                }
                store.set(value = target_value);
                return Promise.resolve();
            }
            const start = now() + delay;
            let fn;
            task = loop(now => {
                if (now < start)
                    return true;
                if (!started) {
                    fn = interpolate(value, new_value);
                    if (typeof duration === 'function')
                        duration = duration(value, new_value);
                    started = true;
                }
                if (previous_task) {
                    previous_task.abort();
                    previous_task = null;
                }
                const elapsed = now - start;
                if (elapsed > duration) {
                    store.set(value = new_value);
                    return false;
                }
                // @ts-ignore
                store.set(value = fn(easing(elapsed / duration)));
                return true;
            });
            return task.promise;
        }
        return {
            set,
            update: (fn, opts) => set(fn(target_value, value), opts),
            subscribe: store.subscribe
        };
    }

    /* src/App.svelte generated by Svelte v3.46.3 */

    const file = "src/App.svelte";

    function get_each_context(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[7] = list[i];
    	child_ctx[9] = i;
    	return child_ctx;
    }

    function get_each_context_1(ctx, list, i) {
    	const child_ctx = ctx.slice();
    	child_ctx[7] = list[i];
    	child_ctx[9] = i;
    	return child_ctx;
    }

    // (161:6) {#each texts as paragraph, i}
    function create_each_block_1(ctx) {
    	let div;
    	let img;
    	let img_src_value;
    	let img_intro;
    	let img_outro;
    	let t;
    	let current;

    	const block = {
    		c: function create() {
    			div = element("div");
    			img = element("img");
    			t = space();
    			attr_dev(img, "id", /*i*/ ctx[9] + 1);
    			attr_dev(img, "class", "" + (/*types*/ ctx[4][/*i*/ ctx[9] + 1] + " fade-in" + " svelte-bfxp5c"));
    			if (!src_url_equal(img.src, img_src_value = /*images*/ ctx[1][/*i*/ ctx[9] + 1])) attr_dev(img, "src", img_src_value);
    			attr_dev(img, "alt", /*alts*/ ctx[2][/*i*/ ctx[9] + 1]);
    			toggle_class(img, "activeImg", /*currentStep*/ ctx[0] === /*i*/ ctx[9] + 1);
    			add_location(img, file, 162, 10, 11979);
    			attr_dev(div, "class", "img-container svelte-bfxp5c");
    			add_location(div, file, 161, 8, 11941);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, img);
    			append_dev(div, t);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*currentStep*/ 1) {
    				toggle_class(img, "activeImg", /*currentStep*/ ctx[0] === /*i*/ ctx[9] + 1);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;

    			add_render_callback(() => {
    				if (img_outro) img_outro.end(1);
    				img_intro = create_in_transition(img, fly, { y: -50, duration: 100 });
    				img_intro.start();
    			});

    			current = true;
    		},
    		o: function outro(local) {
    			if (img_intro) img_intro.invalidate();
    			img_outro = create_out_transition(img, fly, { y: 50, duration: 100 });
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			if (detaching && img_outro) img_outro.end();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block_1.name,
    		type: "each",
    		source: "(161:6) {#each texts as paragraph, i}",
    		ctx
    	});

    	return block;
    }

    // (160:4) {#key currentStep}
    function create_key_block(ctx) {
    	let each_1_anchor;
    	let current;
    	let each_value_1 = /*texts*/ ctx[3];
    	validate_each_argument(each_value_1);
    	let each_blocks = [];

    	for (let i = 0; i < each_value_1.length; i += 1) {
    		each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			each_1_anchor = empty();
    		},
    		m: function mount(target, anchor) {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(target, anchor);
    			}

    			insert_dev(target, each_1_anchor, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*types, images, alts, currentStep*/ 23) {
    				each_value_1 = /*texts*/ ctx[3];
    				validate_each_argument(each_value_1);
    				let i;

    				for (i = 0; i < each_value_1.length; i += 1) {
    					const child_ctx = get_each_context_1(ctx, each_value_1, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block_1(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
    					}
    				}

    				group_outros();

    				for (i = each_value_1.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;

    			for (let i = 0; i < each_value_1.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_each(each_blocks, detaching);
    			if (detaching) detach_dev(each_1_anchor);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_key_block.name,
    		type: "key",
    		source: "(160:4) {#key currentStep}",
    		ctx
    	});

    	return block;
    }

    // (186:10) {#if types[i] == "title"}
    function create_if_block_4(ctx) {
    	let titlepage;
    	let current;

    	titlepage = new TitlePage({
    			props: {
    				image: /*images*/ ctx[1][/*i*/ ctx[9]],
    				alt: /*alts*/ ctx[2][/*i*/ ctx[9]],
    				currentStep: /*currentStep*/ ctx[0],
    				text: /*texts*/ ctx[3][/*i*/ ctx[9]],
    				i: /*i*/ ctx[9]
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(titlepage.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(titlepage, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const titlepage_changes = {};
    			if (dirty & /*currentStep*/ 1) titlepage_changes.currentStep = /*currentStep*/ ctx[0];
    			titlepage.$set(titlepage_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(titlepage.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(titlepage.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(titlepage, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_4.name,
    		type: "if",
    		source: "(186:10) {#if types[i] == \\\"title\\\"}",
    		ctx
    	});

    	return block;
    }

    // (203:45) 
    function create_if_block_3(ctx) {
    	let halfpage;
    	let current;

    	halfpage = new HalfPage({
    			props: {
    				image: /*images*/ ctx[1][/*i*/ ctx[9]],
    				alt: /*alts*/ ctx[2][/*i*/ ctx[9]],
    				text: /*texts*/ ctx[3][/*i*/ ctx[9]],
    				currentStep: /*currentStep*/ ctx[0],
    				i: /*i*/ ctx[9]
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(halfpage.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(halfpage, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const halfpage_changes = {};
    			if (dirty & /*currentStep*/ 1) halfpage_changes.currentStep = /*currentStep*/ ctx[0];
    			halfpage.$set(halfpage_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(halfpage.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(halfpage.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(halfpage, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_3.name,
    		type: "if",
    		source: "(203:45) ",
    		ctx
    	});

    	return block;
    }

    // (195:10) {#if types[i] == "half"}
    function create_if_block_2(ctx) {
    	let halfpage;
    	let current;

    	halfpage = new HalfPage({
    			props: {
    				image: /*images*/ ctx[1][/*i*/ ctx[9]],
    				alt: /*alts*/ ctx[2][/*i*/ ctx[9]],
    				text: /*texts*/ ctx[3][/*i*/ ctx[9]],
    				currentStep: /*currentStep*/ ctx[0],
    				i: /*i*/ ctx[9]
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(halfpage.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(halfpage, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const halfpage_changes = {};
    			if (dirty & /*currentStep*/ 1) halfpage_changes.currentStep = /*currentStep*/ ctx[0];
    			halfpage.$set(halfpage_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(halfpage.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(halfpage.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(halfpage, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_2.name,
    		type: "if",
    		source: "(195:10) {#if types[i] == \\\"half\\\"}",
    		ctx
    	});

    	return block;
    }

    // (212:10) {#if types[i] == "half2"}
    function create_if_block_1(ctx) {
    	let half2page;
    	let current;

    	half2page = new Half2Page({
    			props: {
    				image: /*images*/ ctx[1][/*i*/ ctx[9]],
    				alt: /*alts*/ ctx[2][/*i*/ ctx[9]],
    				text: /*texts*/ ctx[3][/*i*/ ctx[9]],
    				currentStep: /*currentStep*/ ctx[0],
    				i: /*i*/ ctx[9]
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(half2page.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(half2page, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const half2page_changes = {};
    			if (dirty & /*currentStep*/ 1) half2page_changes.currentStep = /*currentStep*/ ctx[0];
    			half2page.$set(half2page_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(half2page.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(half2page.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(half2page, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block_1.name,
    		type: "if",
    		source: "(212:10) {#if types[i] == \\\"half2\\\"}",
    		ctx
    	});

    	return block;
    }

    // (221:10) {#if types[i] == "full"}
    function create_if_block(ctx) {
    	let fullpage;
    	let current;

    	fullpage = new FullPage({
    			props: {
    				image: /*images*/ ctx[1][/*i*/ ctx[9]],
    				alt: /*alts*/ ctx[2][/*i*/ ctx[9]],
    				text: /*texts*/ ctx[3][/*i*/ ctx[9]],
    				currentStep: /*currentStep*/ ctx[0],
    				i: /*i*/ ctx[9]
    			},
    			$$inline: true
    		});

    	const block = {
    		c: function create() {
    			create_component(fullpage.$$.fragment);
    		},
    		m: function mount(target, anchor) {
    			mount_component(fullpage, target, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			const fullpage_changes = {};
    			if (dirty & /*currentStep*/ 1) fullpage_changes.currentStep = /*currentStep*/ ctx[0];
    			fullpage.$set(fullpage_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(fullpage.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(fullpage.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_component(fullpage, detaching);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_if_block.name,
    		type: "if",
    		source: "(221:10) {#if types[i] == \\\"full\\\"}",
    		ctx
    	});

    	return block;
    }

    // (183:6) {#each texts as paragraph, i}
    function create_each_block(ctx) {
    	let div;
    	let t0;
    	let current_block_type_index;
    	let if_block1;
    	let t1;
    	let t2;
    	let t3;
    	let current;
    	let if_block0 = /*types*/ ctx[4][/*i*/ ctx[9]] == "title" && create_if_block_4(ctx);
    	const if_block_creators = [create_if_block_2, create_if_block_3];
    	const if_blocks = [];

    	function select_block_type(ctx, dirty) {
    		if (/*types*/ ctx[4][/*i*/ ctx[9]] == "half") return 0;
    		if (/*types*/ ctx[4][/*i*/ ctx[9]] == "half-short") return 1;
    		return -1;
    	}

    	if (~(current_block_type_index = select_block_type(ctx))) {
    		if_block1 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    	}

    	let if_block2 = /*types*/ ctx[4][/*i*/ ctx[9]] == "half2" && create_if_block_1(ctx);
    	let if_block3 = /*types*/ ctx[4][/*i*/ ctx[9]] == "full" && create_if_block(ctx);

    	const block = {
    		c: function create() {
    			div = element("div");
    			if (if_block0) if_block0.c();
    			t0 = space();
    			if (if_block1) if_block1.c();
    			t1 = space();
    			if (if_block2) if_block2.c();
    			t2 = space();
    			if (if_block3) if_block3.c();
    			t3 = space();
    			attr_dev(div, "class", "" + (null_to_empty(/*steps*/ ctx[5][/*i*/ ctx[9]]) + " svelte-bfxp5c"));
    			attr_dev(div, "id", /*i*/ ctx[9]);
    			toggle_class(div, "active", /*currentStep*/ ctx[0] === /*i*/ ctx[9]);
    			add_location(div, file, 183, 8, 12493);
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			if (if_block0) if_block0.m(div, null);
    			append_dev(div, t0);

    			if (~current_block_type_index) {
    				if_blocks[current_block_type_index].m(div, null);
    			}

    			append_dev(div, t1);
    			if (if_block2) if_block2.m(div, null);
    			append_dev(div, t2);
    			if (if_block3) if_block3.m(div, null);
    			append_dev(div, t3);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (/*types*/ ctx[4][/*i*/ ctx[9]] == "title") if_block0.p(ctx, dirty);
    			if (if_block1) if_block1.p(ctx, dirty);
    			if (/*types*/ ctx[4][/*i*/ ctx[9]] == "half2") if_block2.p(ctx, dirty);
    			if (/*types*/ ctx[4][/*i*/ ctx[9]] == "full") if_block3.p(ctx, dirty);

    			if (dirty & /*currentStep*/ 1) {
    				toggle_class(div, "active", /*currentStep*/ ctx[0] === /*i*/ ctx[9]);
    			}
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(if_block0);
    			transition_in(if_block1);
    			transition_in(if_block2);
    			transition_in(if_block3);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(if_block0);
    			transition_out(if_block1);
    			transition_out(if_block2);
    			transition_out(if_block3);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    			if (if_block0) if_block0.d();

    			if (~current_block_type_index) {
    				if_blocks[current_block_type_index].d();
    			}

    			if (if_block2) if_block2.d();
    			if (if_block3) if_block3.d();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_each_block.name,
    		type: "each",
    		source: "(183:6) {#each texts as paragraph, i}",
    		ctx
    	});

    	return block;
    }

    // (181:4) <Scrolly bind:value={currentStep}>
    function create_default_slot(ctx) {
    	let t0;
    	let p;
    	let t1;
    	let a;
    	let t3;
    	let br0;
    	let br1;
    	let br2;
    	let br3;
    	let current;
    	let each_value = /*texts*/ ctx[3];
    	validate_each_argument(each_value);
    	let each_blocks = [];

    	for (let i = 0; i < each_value.length; i += 1) {
    		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
    	}

    	const out = i => transition_out(each_blocks[i], 1, 1, () => {
    		each_blocks[i] = null;
    	});

    	const block = {
    		c: function create() {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].c();
    			}

    			t0 = space();
    			p = element("p");
    			t1 = text("Thank you so much for reading. This was researched, reported, and coded by Annie Fu. If you have any questions or comments, please reach out to me at ");
    			a = element("a");
    			a.textContent = "annieccfu@gmail.com";
    			t3 = text(".");
    			br0 = element("br");
    			br1 = element("br");
    			br2 = element("br");
    			br3 = element("br");
    			attr_dev(a, "href", "mailto:annieccfu@gmail.com");
    			add_location(a, file, 232, 156, 13914);
    			add_location(p, file, 232, 3, 13761);
    			add_location(br0, file, 232, 221, 13979);
    			add_location(br1, file, 232, 226, 13984);
    			add_location(br2, file, 232, 231, 13989);
    			add_location(br3, file, 232, 236, 13994);
    		},
    		m: function mount(target, anchor) {
    			for (let i = 0; i < each_blocks.length; i += 1) {
    				each_blocks[i].m(target, anchor);
    			}

    			insert_dev(target, t0, anchor);
    			insert_dev(target, p, anchor);
    			append_dev(p, t1);
    			append_dev(p, a);
    			append_dev(p, t3);
    			insert_dev(target, br0, anchor);
    			insert_dev(target, br1, anchor);
    			insert_dev(target, br2, anchor);
    			insert_dev(target, br3, anchor);
    			current = true;
    		},
    		p: function update(ctx, dirty) {
    			if (dirty & /*steps, currentStep, images, alts, texts, types*/ 63) {
    				each_value = /*texts*/ ctx[3];
    				validate_each_argument(each_value);
    				let i;

    				for (i = 0; i < each_value.length; i += 1) {
    					const child_ctx = get_each_context(ctx, each_value, i);

    					if (each_blocks[i]) {
    						each_blocks[i].p(child_ctx, dirty);
    						transition_in(each_blocks[i], 1);
    					} else {
    						each_blocks[i] = create_each_block(child_ctx);
    						each_blocks[i].c();
    						transition_in(each_blocks[i], 1);
    						each_blocks[i].m(t0.parentNode, t0);
    					}
    				}

    				group_outros();

    				for (i = each_value.length; i < each_blocks.length; i += 1) {
    					out(i);
    				}

    				check_outros();
    			}
    		},
    		i: function intro(local) {
    			if (current) return;

    			for (let i = 0; i < each_value.length; i += 1) {
    				transition_in(each_blocks[i]);
    			}

    			current = true;
    		},
    		o: function outro(local) {
    			each_blocks = each_blocks.filter(Boolean);

    			for (let i = 0; i < each_blocks.length; i += 1) {
    				transition_out(each_blocks[i]);
    			}

    			current = false;
    		},
    		d: function destroy(detaching) {
    			destroy_each(each_blocks, detaching);
    			if (detaching) detach_dev(t0);
    			if (detaching) detach_dev(p);
    			if (detaching) detach_dev(br0);
    			if (detaching) detach_dev(br1);
    			if (detaching) detach_dev(br2);
    			if (detaching) detach_dev(br3);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_default_slot.name,
    		type: "slot",
    		source: "(181:4) <Scrolly bind:value={currentStep}>",
    		ctx
    	});

    	return block;
    }

    function create_fragment(ctx) {
    	let main;
    	let div3;
    	let div0;
    	let previous_key = /*currentStep*/ ctx[0];
    	let t0;
    	let div2;
    	let scrolly;
    	let updating_value;
    	let t1;
    	let div1;
    	let current;
    	let key_block = create_key_block(ctx);

    	function scrolly_value_binding(value) {
    		/*scrolly_value_binding*/ ctx[6](value);
    	}

    	let scrolly_props = {
    		$$slots: { default: [create_default_slot] },
    		$$scope: { ctx }
    	};

    	if (/*currentStep*/ ctx[0] !== void 0) {
    		scrolly_props.value = /*currentStep*/ ctx[0];
    	}

    	scrolly = new Scrolly({ props: scrolly_props, $$inline: true });
    	binding_callbacks.push(() => bind(scrolly, 'value', scrolly_value_binding));

    	const block = {
    		c: function create() {
    			main = element("main");
    			div3 = element("div");
    			div0 = element("div");
    			key_block.c();
    			t0 = space();
    			div2 = element("div");
    			create_component(scrolly.$$.fragment);
    			t1 = space();
    			div1 = element("div");
    			attr_dev(div0, "class", "image-div svelte-bfxp5c");
    			add_location(div0, file, 158, 2, 11850);
    			add_location(div1, file, 237, 1, 14054);
    			attr_dev(div2, "class", "step-div svelte-bfxp5c");
    			add_location(div2, file, 176, 2, 12323);
    			attr_dev(div3, "class", "desktop");
    			add_location(div3, file, 157, 0, 11826);
    			attr_dev(main, "class", "svelte-bfxp5c");
    			add_location(main, file, 155, 0, 11818);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, main, anchor);
    			append_dev(main, div3);
    			append_dev(div3, div0);
    			key_block.m(div0, null);
    			append_dev(div3, t0);
    			append_dev(div3, div2);
    			mount_component(scrolly, div2, null);
    			append_dev(div2, t1);
    			append_dev(div2, div1);
    			current = true;
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*currentStep*/ 1 && safe_not_equal(previous_key, previous_key = /*currentStep*/ ctx[0])) {
    				group_outros();
    				transition_out(key_block, 1, 1, noop);
    				check_outros();
    				key_block = create_key_block(ctx);
    				key_block.c();
    				transition_in(key_block);
    				key_block.m(div0, null);
    			} else {
    				key_block.p(ctx, dirty);
    			}

    			const scrolly_changes = {};

    			if (dirty & /*$$scope, currentStep*/ 2049) {
    				scrolly_changes.$$scope = { dirty, ctx };
    			}

    			if (!updating_value && dirty & /*currentStep*/ 1) {
    				updating_value = true;
    				scrolly_changes.value = /*currentStep*/ ctx[0];
    				add_flush_callback(() => updating_value = false);
    			}

    			scrolly.$set(scrolly_changes);
    		},
    		i: function intro(local) {
    			if (current) return;
    			transition_in(key_block);
    			transition_in(scrolly.$$.fragment, local);
    			current = true;
    		},
    		o: function outro(local) {
    			transition_out(key_block);
    			transition_out(scrolly.$$.fragment, local);
    			current = false;
    		},
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(main);
    			key_block.d(detaching);
    			destroy_component(scrolly);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots('App', slots, []);
    	let currentStep = 0;

    	const images = [
    		"./media/kiosk_1.jpg",
    		"./media/first.jpeg",
    		"./media/street_newedit.png",
    		"./media/chinatown5.jpeg",
    		"./media/chungs1.jpg",
    		"./media/chungs3.jpg",
    		"./media/chungs_2.jpg",
    		"./media/chungsstreet.jpeg",
    		"./media/chungs_2000s.jpeg",
    		"./media/chungs_roof.jpg",
    		"./media/onleong_shanghai.jpg",
    		"./media/shanghai_sign.jpg",
    		"./media/street3.jpg",
    		"./media/lion.jpeg",
    		"./media/welcome_kiosk.jpg",
    		"",
    		"./media/flyer.png",
    		"./media/lion.jpeg",
    		""
    	];

    	const alts = [
    		"A black and white photo of a crowded street, celebrating outside a storefront that reads 'Chungs Chop Suey.' ",
    		"A black and white photo of a crowded street, celebrating outside a storefront that reads 'Chungs Chop Suey.' "
    	];

    	const texts = [
    		"In Midtown Detroit, the blocks surrounding the Cass Corridor and Peterboro Street intersection contain the only recognizable remnants of a once-promising Chinatown.",
    		"<p> Detroit’s Chinatown first flourished in the 1920s, " + "from the blocks between Third Avenue, Bagley Street, and Porter Street, writes" + " author and activist Helen Zia in “Asian American Dreams: The Emergence of an " + "American People.” <br/><br/> First led by a group of prominent Chinese business-owning families including the Yee, Chin, and Chung families," + " a wave of immigrants settled into the area and opened restaurants, grocery stores, and even a Chinese school in those first decades.</p>",
    		"<p style='background-color: white; padding: 15px'>Today, the original blocks of Chinatown <br/> no longer exist.  <br/><br/>A portion of the John C. Lodge Freeway, " + "a parking garage, and a parking lot of the MGM Grand Casino stand in their place.</p> <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>" + "<p style='background-color: white; padding: 15px'>The creation of the freeway coincided with the relocation of old Chinatown to Cass" + " Corridor in 1963, when generations of Chinese residents and their associated businesses" + " faced displacement as part of the Detroit Housing Commission’s “slum clearance”" + " initiative, Zia writes. <br/><br/>Chelsea Zuzindlak, an attorney and former curator at the " + "Detroit Historical Museum, shed light on the razing in an interview for Hour" + " in March 2009: <b> “Ask any person who lived there, and they’ll tell you it was " + "anything but a slum,” </b> she said. <b> “It was kept up.”</b></p></br></br></br></br></br></br></br>",
    		"<p style='background-color: white; padding: 15px'>In fact, according to Emiko Ohnuki-Tierney, professor of anthropology at the University of Wisconsin-Madison, Chinatown signified " + "home and a sense of community so distinctive that longtime residents were nicknamed <b>“the Chinatown crowd.”</b></p><br/>",
    		"<p style='background-color: white; padding: 15px'>At the time of the clearance announcement, the general feeling amongst the residents was that the" + " destruction of their Chinatown, despite a planned relocation, would mean the end of their ethnic community. ",
    		"<p style='background-color: white;'>Facing no other options, cornerstone businesses of the community, including the famous Chung’s Chop Suey restaurant and the On Leong Chinese Merchants Association, led the transition to the new area.</p><br/><br/>",
    		"<p style='background-color: white; padding: 15px'>The relocated neighborhood celebrated a brief period of success.</p> " + "<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><p style='background-color: white; padding: 15px'>However, a series of crimes shook up the community in the mid-70s: on " + "August 5, 1976, community leader Tommie Lee was murdered in a hold-up of his" + " restaurant, Bow Wah. </p>" + "<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><p style='background-color: white; padding: 15px'>A few years later, in 1982, 27-year-old Vincent Chin was murdered in " + "a hate crime. Rooted in anti-Asian sentiment due to the increasing " + "success of the Japanese auto industry, the murder served as the catalyst " + "for many of the remaining residents to abandon the area.</p>",
    		"<p>By November 1989, only 100 " + "Chinese residents remained in Chinatown, according to an Argus-Press article published at the time.<br/><br/> “If they had left Chinatown where it was, it probably would’ve developed into a Greektown,“ said then-co-owner of Chung’s restaurant, Philip Chung.<br/><br/> Citing Detroit’s booming entertainment and cultural district Greektown as a reference point for what Chinatown could have been, Chung said, <b> “we never saw this area have a hey-day, but we saw it go from not-too-bad to worse.” </b></p> ",
    		"<p>The Chin and Chung families operated Chung’s Chop Suey for over a half-century, said Curtis Chin, documentary filmmaker and last familial heir of the restaurant. " + "Beginning when Henry Chung and Chin’s great-grandfather moved to the area in the midst of the 1920’s growth, their successors and multiple " + "generations of families composed the lifeblood of Chung’s. <br/><br/>" + " The restaurant was among the 32 displaced from the original Chinatown in the 1960s: an American-Cantonese hybrid joint known for its signature, now regional staple dish; almond boneless chicken," + " as well as the “best egg rolls in town.“ <br/><br/>" + "Its decades-long operation witnessed the many eras of the neighborhood, serving lunch rushes and housing meetings.</p>",
    		"<p style='background-color: white; padding: 15px'>After over 60 years in business, Chung’s was the last Chinatown business to close in 2000. The restaurant’s impact on Detroit remains evident in even the simplest of ways: almond boneless chicken continues to appear on restaurant menus all throughout the city.</p>" + "<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><p style='background-color: white; padding: 15px'>As of November 2020, the roof remains intact, but veins of infrastructure have begun to blister out of the building’s skin. The signage frame and plumbing extend and hang from the composition, brittle to the touch. </p>" + "<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><p style='background-color: white; padding: 15px'>Last in the news, Brenna Houck reported in Eater Detroit that restaurant mogul Tom Brady had purchased the space for two new restaurants in 2018. The structure shows no signs of recent maintenance or development since the transfer in ownership, apart from the removal of a Vincent Chin memorial mural from the building’s North side.</p>",
    		"<p>Further down Cass Corridor, just beyond the Chung’s lot, the building that On Leong headquarters and Shanghai Cafe once shared still stands.<br/><br/> Through the relocation, the On Leong Chinese Merchants Association remained a leading force for the community, tying together families of immigrant business owners, and the Shanghai Cafe offered another supply of late-night comfort food.</p>",
    		"<p>Though the characteristic rectangular pane windows have been boarded up and the entirety of the facade painted brown, the sign for the Shanghai Cafe remains posted, with faint markings inviting visitors to free parking in the rear lot.</p>",
    		"<p style='background-color: white; padding: 15px'>The same Shanghai Cafe sign appears in its original white paint in the center of this archived photograph from the Detroit Free Press archives, tucked behind a silver post. </p>" + "<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><p style='background-color: white; padding: 15px'>When the new Chinatown opened in 1963, the facades of Shanghai Cafe, On Leong, and Chung’s saw parades and lion dances celebrating the beginning of a new community.</p>",
    		"<p style='background-color: white; padding: 15px'>The Free Press reported “500 chinese merchants came to Detroit from all parts of the United States to join the convention and to congratulate the Detroit Chinese on their achievement; <b>the opening of the new Chinatown.”</b></p> ",
    		"<p style='background-color: white; padding: 15px'>Just under two decades later, during a period of escalating crime rates and flight to the suburbs, reporter Sally Smith wrote a Free Press article about the “Welcome to Chinatown” kiosk in April of 1980:</p>" + "<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><p style='background-color: white; padding: 15px'><q><i>Despite the red banners on the street corners, and the shops with all the right names—Wing Lee Lung Chinese Vegetable Co., Yee Yuen, Yun Hop, and Bow Wah’s Chop Suey—the sign that says ‘Welcome to Detroit’s Chinatown’ seems mostly a bleak attempt to force a sense of liveliness on a fragile reality.</i></q></p>" + "<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><p style='background-color: white; padding: 15px'>Perhaps a bleak attempt, but an attempt nonetheless. The remaining relic in Chinatown has seen both better and worse days throughout the past half-century. After a bout of graffiti marred the original lettering in 2016, it was restored to the current form. I couldn’t help but think about Smith's quote.</p> " + "<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><p style='background-color: white; padding: 15px'>Amidst all the emptied and fading buildings in the area, revitalizing a sign welcoming people to something that no longer exists indeed feels futile. But also recklessly auspicious. <br/><br/> It feels as if people haven’t completely forgotten about Chinatown and what it means to Detroit, despite the surrounding reality stating otherwise.</p>",
    		"<p>On November 17th, 2020, the Detroit City Council Historic Designation Advisory Board held a community meeting titled the “People and Places of the Cass Corridor,” calling for citizens to “learn more about the Cass Corridor architectural, cultural, and ethnic survey and ways to get involved!”</p>",
    		"<p>When I set out to find more information on the meeting, all I found was the event flyer, which featured three vibrant side-by-side images. The first, a clean-cut skyscraper downtown. The second, a lyric from the 1966 Youngbloods classic “Get Together”: “smile on your brother / everybody get together.” <br/>The third? A black and white photo of a crowd, gathered around a dancing lion: the 1963 re-opening celebration of Detroit’s Chinatown.</p>",
    		"<p></p>"
    	];

    	const types = [
    		"title",
    		"half",
    		"full",
    		"full",
    		"full",
    		"half-short",
    		"full",
    		"half",
    		"half",
    		"full",
    		"half-short",
    		"half",
    		"full",
    		"full",
    		"full",
    		"full",
    		"half",
    		"full"
    	];

    	const steps = [
    		"step",
    		"step",
    		"step-long1",
    		"step",
    		"step",
    		"step",
    		"step-long2",
    		"step",
    		"step",
    		"step-long3",
    		"step",
    		"step",
    		"step-long3",
    		"step-long1",
    		"step-long4",
    		"step",
    		"step",
    		"step"
    	];

    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== '$$' && key !== 'slot') console.warn(`<App> was created with unknown prop '${key}'`);
    	});

    	function scrolly_value_binding(value) {
    		currentStep = value;
    		$$invalidate(0, currentStep);
    	}

    	$$self.$capture_state = () => ({
    		Scrolly,
    		HalfPage,
    		Half2Page,
    		FullPage,
    		TitlePage,
    		MobileTitle,
    		fade,
    		fly,
    		tweened,
    		currentStep,
    		images,
    		alts,
    		texts,
    		types,
    		steps
    	});

    	$$self.$inject_state = $$props => {
    		if ('currentStep' in $$props) $$invalidate(0, currentStep = $$props.currentStep);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [currentStep, images, alts, texts, types, steps, scrolly_value_binding];
    }

    class App extends SvelteComponentDev {
    	constructor(options) {
    		super(options);
    		init(this, options, instance, create_fragment, safe_not_equal, {});

    		dispatch_dev("SvelteRegisterComponent", {
    			component: this,
    			tagName: "App",
    			options,
    			id: create_fragment.name
    		});
    	}
    }

    const app = new App({
    	target: document.body,
    	props: {
    		name: 'world'
    	}
    });

    return app;

})();
>>>>>>> e52ead3f83f3b10d737c21cf19e935bafeadfe05
//# sourceMappingURL=bundle.js.map
