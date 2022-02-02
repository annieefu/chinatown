var app=function(){"use strict";function e(){}const t=e=>e;function n(e){return e()}function r(){return Object.create(null)}function o(e){e.forEach(n)}function i(e){return"function"==typeof e}function s(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let a;function c(e,t){return a||(a=document.createElement("a")),a.href=t,e===a.href}function l(e,t,n,r){return e[1]&&r?function(e,t){for(const n in t)e[n]=t[n];return e}(n.ctx.slice(),e[1](r(t))):n.ctx}const u="undefined"!=typeof window;let h=u?()=>window.performance.now():()=>Date.now(),d=u?e=>requestAnimationFrame(e):e;const f=new Set;function p(e){f.forEach((t=>{t.c(e)||(f.delete(t),t.f())})),0!==f.size&&d(p)}function g(e){let t;return 0===f.size&&d(p),{promise:new Promise((n=>{f.add(t={c:e,f:n})})),abort(){f.delete(t)}}}function b(e,t){e.appendChild(t)}function m(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function w(e){const t=x("style");return function(e,t){b(e.head||e,t)}(m(e),t),t.sheet}function y(e,t,n){e.insertBefore(t,n||null)}function v(e){e.parentNode.removeChild(e)}function $(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function x(e){return document.createElement(e)}function C(e){return document.createTextNode(e)}function k(){return C(" ")}function S(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function T(e,t,n){e.classList[n?"add":"remove"](t)}const _=new Map;let A,j=0;function M(e,t,n,r,o,i,s,a=0){const c=16.666/r;let l="{\n";for(let e=0;e<=1;e+=c){const r=t+(n-t)*i(e);l+=100*e+`%{${s(r,1-r)}}\n`}const u=l+`100% {${s(n,1-n)}}\n}`,h=`__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(u)}_${a}`,d=m(e),{stylesheet:f,rules:p}=_.get(d)||function(e,t){const n={stylesheet:w(t),rules:{}};return _.set(e,n),n}(d,e);p[h]||(p[h]=!0,f.insertRule(`@keyframes ${h} ${u}`,f.cssRules.length));const g=e.style.animation||"";return e.style.animation=`${g?`${g}, `:""}${h} ${r}ms linear ${o}ms 1 both`,j+=1,h}function D(e,t){const n=(e.style.animation||"").split(", "),r=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),o=n.length-r.length;o&&(e.style.animation=r.join(", "),j-=o,j||d((()=>{j||(_.forEach((e=>{const{stylesheet:t}=e;let n=t.cssRules.length;for(;n--;)t.deleteRule(n);e.rules={}})),_.clear())})))}function E(e){A=e}function H(e){(function(){if(!A)throw new Error("Function called outside component initialization");return A})().$$.on_mount.push(e)}const L=[],I=[],P=[],B=[],O=Promise.resolve();let F=!1;function N(e){P.push(e)}const W=new Set;let q,z=0;function R(){const e=A;do{for(;z<L.length;){const e=L[z];z++,E(e),G(e.$$)}for(E(null),L.length=0,z=0;I.length;)I.pop()();for(let e=0;e<P.length;e+=1){const t=P[e];W.has(t)||(W.add(t),t())}P.length=0}while(L.length);for(;B.length;)B.pop()();F=!1,W.clear(),E(e)}function G(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(N)}}function Y(){return q||(q=Promise.resolve(),q.then((()=>{q=null}))),q}function J(e,t,n){e.dispatchEvent(function(e,t,n=!1){const r=document.createEvent("CustomEvent");return r.initCustomEvent(e,n,!1,t),r}(`${t?"intro":"outro"}${n}`))}const V=new Set;let Z;function U(){Z={r:0,c:[],p:Z}}function K(){Z.r||o(Z.c),Z=Z.p}function Q(e,t){e&&e.i&&(V.delete(e),e.i(t))}function X(e,t,n,r){if(e&&e.o){if(V.has(e))return;V.add(e),Z.c.push((()=>{V.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}const ee={duration:0};function te(e){e&&e.c()}function ne(e,t,r,s){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=e.$$;a&&a.m(t,r),s||N((()=>{const t=c.map(n).filter(i);l?l.push(...t):o(t),e.$$.on_mount=[]})),u.forEach(N)}function re(e,t){const n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function oe(e,t){-1===e.$$.dirty[0]&&(L.push(e),F||(F=!0,O.then(R)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ie(t,n,i,s,a,c,l,u=[-1]){const h=A;E(t);const d=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:a,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(h?h.$$.context:[])),callbacks:r(),dirty:u,skip_bound:!1,root:n.target||h.$$.root};l&&l(d.root);let f=!1;if(d.ctx=i?i(t,n.props||{},((e,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&a(d.ctx[e],d.ctx[e]=o)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](o),f&&oe(t,e)),n})):[],d.update(),f=!0,o(d.before_update),d.fragment=!!s&&s(d.ctx),n.target){if(n.hydrate){const e=function(e){return Array.from(e.childNodes)}(n.target);d.fragment&&d.fragment.l(e),e.forEach(v)}else d.fragment&&d.fragment.c();n.intro&&Q(t.$$.fragment),ne(t,n.target,n.anchor,n.customElement),R()}E(h)}class se{$destroy(){re(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function ae(e){let t,n;const r=e[7].default,o=function(e,t,n,r){if(e){const o=l(e,t,n,r);return e[0](o)}}(r,e,e[6],null);return{c(){t=x("div"),o&&o.c()},m(r,i){y(r,t,i),o&&o.m(t,null),e[8](t),n=!0},p(e,[t]){o&&o.p&&(!n||64&t)&&function(e,t,n,r,o,i){if(o){const s=l(t,n,r,i);e.p(s,o)}}(o,r,e,e[6],n?function(e,t,n,r){if(e[2]&&r){const o=e[2](r(n));if(void 0===t.dirty)return o;if("object"==typeof o){const e=[],n=Math.max(t.dirty.length,o.length);for(let r=0;r<n;r+=1)e[r]=t.dirty[r]|o[r];return e}return t.dirty|o}return t.dirty}(r,e[6],t,null):function(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}(e[6]),null)},i(e){n||(Q(o,e),n=!0)},o(e){X(o,e),n=!1},d(n){n&&v(t),o&&o.d(n),e[8](null)}}}function ce(e,t,n){let{$$slots:r={},$$scope:o}=t,{root:i=null}=t,{top:s=0}=t,{bottom:a=0}=t,{increments:c=100}=t,{value:l}=t;const u=[],h=[];let d,f=[],p=[];const g=()=>{f.length&&f.forEach(b)},b=(e,t)=>{const r={root:i,rootMargin:`${s?-1*s:0}px 0px ${a?-1*a:0}px 0px`,threshold:h};p[t]&&p[t].disconnect();const o=new IntersectionObserver((e=>{e[0].isIntersecting;const r=e[0].intersectionRatio;u[t]=r,(()=>{let e=0,t=0;for(let n=0;n<u.length;n++)u[n]>e&&(e=u[n],t=n);n(1,l=e>0?t:void 0)})()}),r);o.observe(e),p[t]=o};return H((()=>{for(let e=0;e<c+1;e++)h.push(e/c);f=d.querySelectorAll(":scope > *"),g()})),e.$$set=e=>{"root"in e&&n(2,i=e.root),"top"in e&&n(3,s=e.top),"bottom"in e&&n(4,a=e.bottom),"increments"in e&&n(5,c=e.increments),"value"in e&&n(1,l=e.value),"$$scope"in e&&n(6,o=e.$$scope)},e.$$.update=()=>{24&e.$$.dirty&&g()},[d,l,i,s,a,c,o,r,function(e){I[e?"unshift":"push"]((()=>{d=e,n(0,d)}))}]}class le extends se{constructor(e){super(),ie(this,e,ce,ae,s,{root:2,top:3,bottom:4,increments:5,value:1})}}function ue(t){let n,r,o,i;return{c(){n=x("div"),r=x("div"),o=k(),i=x("div"),S(r,"class","step-text svelte-j6mttj"),S(i,"class","step-img svelte-j6mttj"),S(n,"class","step-cont svelte-j6mttj"),T(n,"active",t[0]===t[1])},m(e,s){y(e,n,s),b(n,r),r.innerHTML=t[2],b(n,o),b(n,i)},p(e,[t]){4&t&&(r.innerHTML=e[2]),3&t&&T(n,"active",e[0]===e[1])},i:e,o:e,d(e){e&&v(n)}}}function he(e,t,n){let{currentStep:r}=t,{i:o}=t,{text:i}=t;return e.$$set=e=>{"currentStep"in e&&n(0,r=e.currentStep),"i"in e&&n(1,o=e.i),"text"in e&&n(2,i=e.text)},[r,o,i]}class de extends se{constructor(e){super(),ie(this,e,he,ue,s,{currentStep:0,i:1,text:2})}}function fe(t){let n,r,o,i;return{c(){n=x("div"),r=x("div"),o=k(),i=x("div"),S(r,"class","step-img svelte-9fy42t"),S(i,"class","step-text svelte-9fy42t"),S(n,"class","step-cont svelte-9fy42t"),T(n,"active",t[0]===t[1])},m(e,s){y(e,n,s),b(n,r),b(n,o),b(n,i),i.innerHTML=t[2]},p(e,[t]){4&t&&(i.innerHTML=e[2]),3&t&&T(n,"active",e[0]===e[1])},i:e,o:e,d(e){e&&v(n)}}}function pe(e,t,n){let{currentStep:r}=t,{i:o}=t,{text:i}=t;return e.$$set=e=>{"currentStep"in e&&n(0,r=e.currentStep),"i"in e&&n(1,o=e.i),"text"in e&&n(2,i=e.text)},[r,o,i]}class ge extends se{constructor(e){super(),ie(this,e,pe,fe,s,{currentStep:0,i:1,text:2})}}function be(t){let n,r,o,i;return{c(){n=x("div"),r=x("div"),o=k(),i=x("div"),S(r,"class","step-text svelte-ndhi1x"),S(i,"class","step-img svelte-ndhi1x"),S(n,"class","step-cont svelte-ndhi1x"),T(n,"active",t[0]===t[1])},m(e,s){y(e,n,s),b(n,r),r.innerHTML=t[2],b(n,o),b(n,i)},p(e,[t]){4&t&&(r.innerHTML=e[2]),3&t&&T(n,"active",e[0]===e[1])},i:e,o:e,d(e){e&&v(n)}}}function me(e,t,n){let{image:r}=t,{alt:o}=t,{currentStep:i}=t,{i:s}=t,{text:a}=t;return e.$$set=e=>{"image"in e&&n(3,r=e.image),"alt"in e&&n(4,o=e.alt),"currentStep"in e&&n(0,i=e.currentStep),"i"in e&&n(1,s=e.i),"text"in e&&n(2,a=e.text)},[i,s,a,r,o]}class we extends se{constructor(e){super(),ie(this,e,me,be,s,{image:3,alt:4,currentStep:0,i:1,text:2})}}function ye(t){let n,r,o,i,s,a,l,u,h,d,f,p,g,m,w,$,C,_;return{c(){n=x("div"),r=x("img"),i=k(),s=x("div"),a=x("h1"),a.textContent="THE",l=k(),u=x("h1"),u.textContent="Chinatown",h=k(),d=x("h1"),d.textContent="Crowd",f=k(),p=x("h2"),p.innerHTML="<b>By Annie Fu</b>",g=k(),m=x("p"),w=k(),$=x("div"),C=x("img"),S(r,"class","title-img svelte-dtx0cn"),c(r.src,o="./media/kiosk_1.jpg")||S(r,"src","./media/kiosk_1.jpg"),S(r,"alt","An image of a kiosk, with Mandarin characters and 'Welcome to Chinatown' in English on it. The top third of the image is artistically burnt out."),S(a,"class","the svelte-dtx0cn"),S(u,"class","svelte-dtx0cn"),S(d,"class","svelte-dtx0cn"),S(p,"class","subtitle svelte-dtx0cn"),S(m,"class","subtitle svelte-dtx0cn"),S(s,"class","title-text svelte-dtx0cn"),S(C,"id","title-img"),c(C.src,_=t[0])||S(C,"src",_),S(C,"alt",t[1]),S(C,"class","svelte-dtx0cn"),S($,"class","title svelte-dtx0cn"),S(n,"class","title-content svelte-dtx0cn"),T(n,"active",t[2]===t[3])},m(e,o){y(e,n,o),b(n,r),b(n,i),b(n,s),b(s,a),b(s,l),b(s,u),b(s,h),b(s,d),b(s,f),b(s,p),b(s,g),b(s,m),m.innerHTML=t[4],b(n,w),b(n,$),b($,C)},p(e,[t]){16&t&&(m.innerHTML=e[4]),1&t&&!c(C.src,_=e[0])&&S(C,"src",_),2&t&&S(C,"alt",e[1]),12&t&&T(n,"active",e[2]===e[3])},i:e,o:e,d(e){e&&v(n)}}}function ve(e,t,n){let{image:r}=t,{alt:o}=t,{currentStep:i}=t,{i:s}=t,{text:a}=t;return e.$$set=e=>{"image"in e&&n(0,r=e.image),"alt"in e&&n(1,o=e.alt),"currentStep"in e&&n(2,i=e.currentStep),"i"in e&&n(3,s=e.i),"text"in e&&n(4,a=e.text)},[r,o,i,s,a]}class $e extends se{constructor(e){super(),ie(this,e,ve,ye,s,{image:0,alt:1,currentStep:2,i:3,text:4})}}function xe(e){const t=e-1;return t*t*t+1}function Ce(e,{delay:t=0,duration:n=400,easing:r=xe,x:o=0,y:i=0,opacity:s=0}={}){const a=getComputedStyle(e),c=+a.opacity,l="none"===a.transform?"":a.transform,u=c*(1-s);return{delay:t,duration:n,easing:r,css:(e,t)=>`\n\t\t\ttransform: ${l} translate(${(1-e)*o}px, ${(1-e)*i}px);\n\t\t\topacity: ${c-u*t}`}}function ke(e,t,n){const r=e.slice();return r[7]=t[n],r[9]=n,r}function Se(e,t,n){const r=e.slice();return r[7]=t[n],r[9]=n,r}function Te(n){let r,s,a,l,u,d,f;return{c(){r=x("div"),s=x("img"),d=k(),S(s,"id",n[9]+1),S(s,"class",n[4][n[9]+1]+" fade-in svelte-20o4b1"),c(s.src,a=n[1][n[9]+1])||S(s,"src",a),S(s,"alt",n[2][n[9]+1]),T(s,"activeImg",n[0]===n[9]+1),S(r,"class","img-container svelte-20o4b1")},m(e,t){y(e,r,t),b(r,s),b(r,d),f=!0},p(e,t){1&t&&T(s,"activeImg",e[0]===e[9]+1)},i(n){f||(N((()=>{u&&u.end(1),l=function(n,r,o){let s,a,c=r(n,o),l=!1,u=0;function d(){s&&D(n,s)}function f(){const{delay:r=0,duration:o=300,easing:i=t,tick:f=e,css:p}=c||ee;p&&(s=M(n,0,1,o,r,i,p,u++)),f(0,1);const b=h()+r,m=b+o;a&&a.abort(),l=!0,N((()=>J(n,!0,"start"))),a=g((e=>{if(l){if(e>=m)return f(1,0),J(n,!0,"end"),d(),l=!1;if(e>=b){const t=i((e-b)/o);f(t,1-t)}}return l}))}let p=!1;return{start(){p||(p=!0,D(n),i(c)?(c=c(),Y().then(f)):f())},invalidate(){p=!1},end(){l&&(d(),l=!1)}}}(s,Ce,{y:-50,duration:100}),l.start()})),f=!0)},o(n){l&&l.invalidate(),u=function(n,r,s){let a,c=r(n,s),l=!0;const u=Z;function d(){const{delay:r=0,duration:i=300,easing:s=t,tick:d=e,css:f}=c||ee;f&&(a=M(n,1,0,i,r,s,f));const p=h()+r,b=p+i;N((()=>J(n,!1,"start"))),g((e=>{if(l){if(e>=b)return d(0,1),J(n,!1,"end"),--u.r||o(u.c),!1;if(e>=p){const t=s((e-p)/i);d(1-t,t)}}return l}))}return u.r+=1,i(c)?Y().then((()=>{c=c(),d()})):d(),{end(e){e&&c.tick&&c.tick(1,0),l&&(a&&D(n,a),l=!1)}}}(s,Ce,{y:50,duration:100}),f=!1},d(e){e&&v(r),e&&u&&u.end()}}}function _e(e){let t,n,r=e[3],o=[];for(let t=0;t<r.length;t+=1)o[t]=Te(Se(e,r,t));const i=e=>X(o[e],1,1,(()=>{o[e]=null}));return{c(){for(let e=0;e<o.length;e+=1)o[e].c();t=C("")},m(e,r){for(let t=0;t<o.length;t+=1)o[t].m(e,r);y(e,t,r),n=!0},p(e,n){if(23&n){let s;for(r=e[3],s=0;s<r.length;s+=1){const i=Se(e,r,s);o[s]?(o[s].p(i,n),Q(o[s],1)):(o[s]=Te(i),o[s].c(),Q(o[s],1),o[s].m(t.parentNode,t))}for(U(),s=r.length;s<o.length;s+=1)i(s);K()}},i(e){if(!n){for(let e=0;e<r.length;e+=1)Q(o[e]);n=!0}},o(e){o=o.filter(Boolean);for(let e=0;e<o.length;e+=1)X(o[e]);n=!1},d(e){$(o,e),e&&v(t)}}}function Ae(e){let t,n;return t=new de({props:{image:e[1][e[9]],alt:e[2][e[9]],text:e[3][e[9]],currentStep:e[0],i:e[9]}}),{c(){te(t.$$.fragment)},m(e,r){ne(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.currentStep=e[0]),t.$set(r)},i(e){n||(Q(t.$$.fragment,e),n=!0)},o(e){X(t.$$.fragment,e),n=!1},d(e){re(t,e)}}}function je(e){let t,n;return t=new de({props:{image:e[1][e[9]],alt:e[2][e[9]],text:e[3][e[9]],currentStep:e[0],i:e[9]}}),{c(){te(t.$$.fragment)},m(e,r){ne(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.currentStep=e[0]),t.$set(r)},i(e){n||(Q(t.$$.fragment,e),n=!0)},o(e){X(t.$$.fragment,e),n=!1},d(e){re(t,e)}}}function Me(e){let t,n,r,o,i,s,a,c,l,u,h="title"==e[4][e[9]]&&function(e){let t,n;return t=new $e({props:{image:e[1][e[9]],alt:e[2][e[9]],currentStep:e[0],text:e[3][e[9]],i:e[9]}}),{c(){te(t.$$.fragment)},m(e,r){ne(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.currentStep=e[0]),t.$set(r)},i(e){n||(Q(t.$$.fragment,e),n=!0)},o(e){X(t.$$.fragment,e),n=!1},d(e){re(t,e)}}}(e);const d=[je,Ae],f=[];~(r=function(e,t){return"half"==e[4][e[9]]?0:"half-short"==e[4][e[9]]?1:-1}(e))&&(o=f[r]=d[r](e));let p="half2"==e[4][e[9]]&&function(e){let t,n;return t=new ge({props:{image:e[1][e[9]],alt:e[2][e[9]],text:e[3][e[9]],currentStep:e[0],i:e[9]}}),{c(){te(t.$$.fragment)},m(e,r){ne(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.currentStep=e[0]),t.$set(r)},i(e){n||(Q(t.$$.fragment,e),n=!0)},o(e){X(t.$$.fragment,e),n=!1},d(e){re(t,e)}}}(e),g="full"==e[4][e[9]]&&function(e){let t,n;return t=new we({props:{image:e[1][e[9]],alt:e[2][e[9]],text:e[3][e[9]],currentStep:e[0],i:e[9]}}),{c(){te(t.$$.fragment)},m(e,r){ne(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.currentStep=e[0]),t.$set(r)},i(e){n||(Q(t.$$.fragment,e),n=!0)},o(e){X(t.$$.fragment,e),n=!1},d(e){re(t,e)}}}(e);return{c(){var r;t=x("div"),h&&h.c(),n=k(),o&&o.c(),i=k(),p&&p.c(),s=k(),g&&g.c(),a=k(),S(t,"class",(r=e[5][e[9]],c=(null==r?"":r)+" svelte-20o4b1")),S(t,"id",l=e[9]),T(t,"active",e[0]===e[9])},m(e,o){y(e,t,o),h&&h.m(t,null),b(t,n),~r&&f[r].m(t,null),b(t,i),p&&p.m(t,null),b(t,s),g&&g.m(t,null),b(t,a),u=!0},p(e,n){"title"==e[4][e[9]]&&h.p(e,n),o&&o.p(e,n),"half2"==e[4][e[9]]&&p.p(e,n),"full"==e[4][e[9]]&&g.p(e,n),1&n&&T(t,"active",e[0]===e[9])},i(e){u||(Q(h),Q(o),Q(p),Q(g),u=!0)},o(e){X(h),X(o),X(p),X(g),u=!1},d(e){e&&v(t),h&&h.d(),~r&&f[r].d(),p&&p.d(),g&&g.d()}}}function De(e){let t,n,r,o,i,s,a,c=e[3],l=[];for(let t=0;t<c.length;t+=1)l[t]=Me(ke(e,c,t));const u=e=>X(l[e],1,1,(()=>{l[e]=null}));return{c(){for(let e=0;e<l.length;e+=1)l[e].c();t=k(),n=x("p"),n.innerHTML='Thank you so much for reading. This was researched, reported, and coded by Annie Fu. If you have any questions or comments, please reach out to me at <a href="mailto:annieccfu@gmail.com">annieccfu@gmail.com</a>.',r=x("br"),o=x("br"),i=x("br"),s=x("br")},m(e,c){for(let t=0;t<l.length;t+=1)l[t].m(e,c);y(e,t,c),y(e,n,c),y(e,r,c),y(e,o,c),y(e,i,c),y(e,s,c),a=!0},p(e,n){if(63&n){let r;for(c=e[3],r=0;r<c.length;r+=1){const o=ke(e,c,r);l[r]?(l[r].p(o,n),Q(l[r],1)):(l[r]=Me(o),l[r].c(),Q(l[r],1),l[r].m(t.parentNode,t))}for(U(),r=c.length;r<l.length;r+=1)u(r);K()}},i(e){if(!a){for(let e=0;e<c.length;e+=1)Q(l[e]);a=!0}},o(e){l=l.filter(Boolean);for(let e=0;e<l.length;e+=1)X(l[e]);a=!1},d(e){$(l,e),e&&v(t),e&&v(n),e&&v(r),e&&v(o),e&&v(i),e&&v(s)}}}function Ee(t){let n,r,o,i,a,c,l,u,h,d,f=t[0],p=_e(t);function g(e){t[6](e)}let m={$$slots:{default:[De]},$$scope:{ctx:t}};return void 0!==t[0]&&(m.value=t[0]),c=new le({props:m}),I.push((()=>function(e,t,n){const r=e.$$.props[t];void 0!==r&&(e.$$.bound[r]=n,n(e.$$.ctx[r]))}(c,"value",g))),{c(){n=x("main"),r=x("div"),o=x("div"),p.c(),i=k(),a=x("div"),te(c.$$.fragment),u=k(),h=x("div"),S(o,"class","image-div svelte-20o4b1"),S(a,"class","step-div svelte-20o4b1"),S(r,"class","desktop"),S(n,"class","svelte-20o4b1")},m(e,t){y(e,n,t),b(n,r),b(r,o),p.m(o,null),b(r,i),b(r,a),ne(c,a,null),b(a,u),b(a,h),d=!0},p(t,[n]){1&n&&s(f,f=t[0])?(U(),X(p,1,1,e),K(),p=_e(t),p.c(),Q(p),p.m(o,null)):p.p(t,n);const r={};var i;2049&n&&(r.$$scope={dirty:n,ctx:t}),!l&&1&n&&(l=!0,r.value=t[0],i=()=>l=!1,B.push(i)),c.$set(r)},i(e){d||(Q(p),Q(c.$$.fragment,e),d=!0)},o(e){X(p),X(c.$$.fragment,e),d=!1},d(e){e&&v(n),p.d(e),re(c)}}}function He(e,t,n){let r=0;return[r,["./media/kiosk_1.jpg","./media/first.jpeg","./media/street_newedit.png","./media/chinatown5.jpeg","./media/chungs1.jpg","./media/chungs3.jpg","./media/chungs_2.jpg","./media/chungsstreet.jpeg","./media/chungs_2000s.jpeg","./media/chungs_roof.jpg","./media/onleong_shanghai.jpg","./media/shanghai_sign.jpg","./media/street3.jpg","./media/lion.jpeg","./media/welcome_kiosk.jpg","","./media/flyer.png","./media/lion.jpeg",""],["A black and white photo of a crowded street, celebrating outside a storefront that reads 'Chungs Chop Suey.' ","A black and white photo of a crowded street, celebrating outside a storefront that reads 'Chungs Chop Suey.' "],["In Midtown Detroit, the blocks surrounding the Cass Corridor and Peterboro Street intersection contain the only recognizable remnants of a once-promising Chinatown.","<p> Detroit’s Chinatown first flourished in the 1920s, from the blocks between Third Avenue, Bagley Street, and Porter Street, writes author and activist Helen Zia in “Asian American Dreams: The Emergence of an American People.” <br/><br/> First led by a group of prominent Chinese business-owning families including the Yee, Chin, and Chung families, a wave of immigrants settled into the area and opened restaurants, grocery stores, and even a Chinese school in those first decades.</p>","<p style='background-color: white; padding: 15px'>Today, the original blocks of Chinatown <br/> no longer exist.  <br/><br/>A portion of the John C. Lodge Freeway, a parking garage, and a parking lot of the MGM Grand Casino stand in their place.</p> <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><p style='background-color: white; padding: 15px'>The creation of the freeway coincided with the relocation of old Chinatown to Cass Corridor in 1963, when generations of Chinese residents and their associated businesses faced displacement as part of the Detroit Housing Commission’s “slum clearance” initiative, Zia writes. <br/><br/>Chelsea Zuzindlak, an attorney and former curator at the Detroit Historical Museum, shed light on the razing in an interview for Hour in March 2009: <b> “Ask any person who lived there, and they’ll tell you it was anything but a slum,” </b> she said. <b> “It was kept up.”</b></p></br></br></br></br></br></br></br>","<p style='background-color: white; padding: 15px'>In fact, according to Emiko Ohnuki-Tierney, professor of anthropology at the University of Wisconsin-Madison, Chinatown signified home and a sense of community so distinctive that longtime residents were nicknamed <b>“the Chinatown crowd.”</b></p><br/>","<p style='background-color: white; padding: 15px'>At the time of the clearance announcement, the general feeling amongst the residents was that the destruction of their Chinatown, despite a planned relocation, would mean the end of their ethnic community. ","<p style='background-color: white;'>Facing no other options, cornerstone businesses of the community, including the famous Chung’s Chop Suey restaurant and the On Leong Chinese Merchants Association, led the transition to the new area.</p><br/><br/>","<p style='background-color: white; padding: 15px'>The relocated neighborhood celebrated a brief period of success.</p> <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><p style='background-color: white; padding: 15px'>However, a series of crimes shook up the community in the mid-70s: on August 5, 1976, community leader Tommie Lee was murdered in a hold-up of his restaurant, Bow Wah. </p><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><p style='background-color: white; padding: 15px'>A few years later, in 1982, 27-year-old Vincent Chin was murdered in a hate crime. Rooted in anti-Asian sentiment due to the increasing success of the Japanese auto industry, the murder served as the catalyst for many of the remaining residents to abandon the area.</p>","<p>By November 1989, only 100 Chinese residents remained in Chinatown, according to an Argus-Press article published at the time.<br/><br/> “If they had left Chinatown where it was, it probably would’ve developed into a Greektown,“ said then-co-owner of Chung’s restaurant, Philip Chung.<br/><br/> Citing Detroit’s booming entertainment and cultural district Greektown as a reference point for what Chinatown could have been, Chung said, <b> “we never saw this area have a hey-day, but we saw it go from not-too-bad to worse.” </b></p> ","<p>The Chin and Chung families operated Chung’s Chop Suey for over a half-century, said Curtis Chin, documentary filmmaker and last familial heir of the restaurant. Beginning when Henry Chung and Chin’s great-grandfather moved to the area in the midst of the 1920’s growth, their successors and multiple generations of families composed the lifeblood of Chung’s. <br/><br/> The restaurant was among the 32 displaced from the original Chinatown in the 1960s: an American-Cantonese hybrid joint known for its signature, now regional staple dish; almond boneless chicken, as well as the “best egg rolls in town.“ <br/><br/>Its decades-long operation witnessed the many eras of the neighborhood, serving lunch rushes and housing meetings.</p>","<p style='background-color: white; padding: 15px'>After over 60 years in business, Chung’s was the last Chinatown business to close in 2000. The restaurant’s impact on Detroit remains evident in even the simplest of ways: almond boneless chicken continues to appear on restaurant menus all throughout the city.</p><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><p style='background-color: white; padding: 15px'>As of November 2020, the roof remains intact, but veins of infrastructure have begun to blister out of the building’s skin. The signage frame and plumbing extend and hang from the composition, brittle to the touch. </p><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><p style='background-color: white; padding: 15px'>Last in the news, Brenna Houck reported in Eater Detroit that restaurant mogul Tom Brady had purchased the space for two new restaurants in 2018. The structure shows no signs of recent maintenance or development since the transfer in ownership, apart from the removal of a Vincent Chin memorial mural from the building’s North side.</p>","<p>Further down Cass Corridor, just beyond the Chung’s lot, the building that On Leong headquarters and Shanghai Cafe once shared still stands.<br/><br/> Through the relocation, the On Leong Chinese Merchants Association remained a leading force for the community, tying together families of immigrant business owners, and the Shanghai Cafe offered another supply of late-night comfort food.</p>","<p>Though the characteristic rectangular pane windows have been boarded up and the entirety of the facade painted brown, the sign for the Shanghai Cafe remains posted, with faint markings inviting visitors to free parking in the rear lot.</p>","<p style='background-color: white; padding: 15px'>The same Shanghai Cafe sign appears in its original white paint in the center of this archived photograph from the Detroit Free Press archives, tucked behind a silver post. </p><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><p style='background-color: white; padding: 15px'>When the new Chinatown opened in 1963, the facades of Shanghai Cafe, On Leong, and Chung’s saw parades and lion dances celebrating the beginning of a new community.</p>","<p style='background-color: white; padding: 15px'>The Free Press reported “500 chinese merchants came to Detroit from all parts of the United States to join the convention and to congratulate the Detroit Chinese on their achievement; <b>the opening of the new Chinatown.”</b></p> ","<p style='background-color: white; padding: 15px'>Just under two decades later, during a period of escalating crime rates and flight to the suburbs, reporter Sally Smith wrote a Free Press article about the “Welcome to Chinatown” kiosk in April of 1980:</p><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><p style='background-color: white; padding: 15px'><q><i>Despite the red banners on the street corners, and the shops with all the right names—Wing Lee Lung Chinese Vegetable Co., Yee Yuen, Yun Hop, and Bow Wah’s Chop Suey—the sign that says ‘Welcome to Detroit’s Chinatown’ seems mostly a bleak attempt to force a sense of liveliness on a fragile reality.</i></q></p><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><p style='background-color: white; padding: 15px'>Perhaps a bleak attempt, but an attempt nonetheless. The remaining relic in Chinatown has seen both better and worse days throughout the past half-century. After a bout of graffiti marred the original lettering in 2016, it was restored to the current form. I couldn’t help but think about Smith's quote.</p> <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><p style='background-color: white; padding: 15px'>Amidst all the emptied and fading buildings in the area, revitalizing a sign welcoming people to something that no longer exists indeed feels futile. But also recklessly auspicious. <br/><br/> It feels as if people haven’t completely forgotten about Chinatown and what it means to Detroit, despite the surrounding reality stating otherwise.</p>","<p>On November 17th, 2020, the Detroit City Council Historic Designation Advisory Board held a community meeting titled the “People and Places of the Cass Corridor,” calling for citizens to “learn more about the Cass Corridor architectural, cultural, and ethnic survey and ways to get involved!”</p>","<p>When I set out to find more information on the meeting, all I found was the event flyer, which featured three vibrant side-by-side images. The first, a clean-cut skyscraper downtown. The second, a lyric from the 1966 Youngbloods classic “Get Together”: “smile on your brother / everybody get together.” <br/>The third? A black and white photo of a crowd, gathered around a dancing lion: the 1963 re-opening celebration of Detroit’s Chinatown.</p>","<p></p>"],["title","half","full","full","full","half-short","full","half","half","full","half-short","half","full","full","full","full","half","full"],["step","step","step-long1","step","step","step","step-long2","step","step","step-long3","step","step","step-long3","step-long1","step-long4","step","step","step"],function(e){r=e,n(0,r)}]}return new class extends se{constructor(e){super(),ie(this,e,He,Ee,s,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
