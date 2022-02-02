var app=function(){"use strict";function e(){}const t=e=>e;function n(e){return e()}function r(){return Object.create(null)}function o(e){e.forEach(n)}function i(e){return"function"==typeof e}function a(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let s;function l(e,t){return s||(s=document.createElement("a")),s.href=t,e===s.href}function c(e,t,n,r){return e[1]&&r?function(e,t){for(const n in t)e[n]=t[n];return e}(n.ctx.slice(),e[1](r(t))):n.ctx}const h="undefined"!=typeof window;let u=h?()=>window.performance.now():()=>Date.now(),d=h?e=>requestAnimationFrame(e):e;const f=new Set;function p(e){f.forEach((t=>{t.c(e)||(f.delete(t),t.f())})),0!==f.size&&d(p)}function g(e){let t;return 0===f.size&&d(p),{promise:new Promise((n=>{f.add(t={c:e,f:n})})),abort(){f.delete(t)}}}function b(e,t){e.appendChild(t)}function m(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function w(e){const t=C("style");return function(e,t){b(e.head||e,t)}(m(e),t),t.sheet}function y(e,t,n){e.insertBefore(t,n||null)}function v(e){e.parentNode.removeChild(e)}function $(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function C(e){return document.createElement(e)}function x(e){return document.createTextNode(e)}function k(){return x(" ")}function T(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function S(e,t,n,r){null===n?e.style.removeProperty(t):e.style.setProperty(t,n,r?"important":"")}function A(e,t,n){e.classList[n?"add":"remove"](t)}const _=new Map;let j,M=0;function L(e,t,n,r,o,i,a,s=0){const l=16.666/r;let c="{\n";for(let e=0;e<=1;e+=l){const r=t+(n-t)*i(e);c+=100*e+`%{${a(r,1-r)}}\n`}const h=c+`100% {${a(n,1-n)}}\n}`,u=`__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(h)}_${s}`,d=m(e),{stylesheet:f,rules:p}=_.get(d)||function(e,t){const n={stylesheet:w(t),rules:{}};return _.set(e,n),n}(d,e);p[u]||(p[u]=!0,f.insertRule(`@keyframes ${u} ${h}`,f.cssRules.length));const g=e.style.animation||"";return e.style.animation=`${g?`${g}, `:""}${u} ${r}ms linear ${o}ms 1 both`,M+=1,u}function P(e,t){const n=(e.style.animation||"").split(", "),r=n.filter(t?e=>e.indexOf(t)<0:e=>-1===e.indexOf("__svelte")),o=n.length-r.length;o&&(e.style.animation=r.join(", "),M-=o,M||d((()=>{M||(_.forEach((e=>{const{stylesheet:t}=e;let n=t.cssRules.length;for(;n--;)t.deleteRule(n);e.rules={}})),_.clear())})))}function D(e){j=e}function E(e){(function(){if(!j)throw new Error("Function called outside component initialization");return j})().$$.on_mount.push(e)}const H=[],z=[],W=[],I=[],O=Promise.resolve();let q=!1;function B(e){W.push(e)}const N=new Set;let F,R=0;function G(){const e=j;do{for(;R<H.length;){const e=H[R];R++,D(e),U(e.$$)}for(D(null),H.length=0,R=0;z.length;)z.pop()();for(let e=0;e<W.length;e+=1){const t=W[e];N.has(t)||(N.add(t),t())}W.length=0}while(H.length);for(;I.length;)I.pop()();q=!1,N.clear(),D(e)}function U(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(B)}}function Y(){return F||(F=Promise.resolve(),F.then((()=>{F=null}))),F}function J(e,t,n){e.dispatchEvent(function(e,t,n=!1){const r=document.createEvent("CustomEvent");return r.initCustomEvent(e,n,!1,t),r}(`${t?"intro":"outro"}${n}`))}const V=new Set;let Z;function K(){Z={r:0,c:[],p:Z}}function Q(){Z.r||o(Z.c),Z=Z.p}function X(e,t){e&&e.i&&(V.delete(e),e.i(t))}function ee(e,t,n,r){if(e&&e.o){if(V.has(e))return;V.add(e),Z.c.push((()=>{V.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}const te={duration:0};function ne(e){e&&e.c()}function re(e,t,r,a){const{fragment:s,on_mount:l,on_destroy:c,after_update:h}=e.$$;s&&s.m(t,r),a||B((()=>{const t=l.map(n).filter(i);c?c.push(...t):o(t),e.$$.on_mount=[]})),h.forEach(B)}function oe(e,t){const n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ie(e,t){-1===e.$$.dirty[0]&&(H.push(e),q||(q=!0,O.then(G)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ae(t,n,i,a,s,l,c,h=[-1]){const u=j;D(t);const d=t.$$={fragment:null,ctx:null,props:l,update:e,not_equal:s,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(u?u.$$.context:[])),callbacks:r(),dirty:h,skip_bound:!1,root:n.target||u.$$.root};c&&c(d.root);let f=!1;if(d.ctx=i?i(t,n.props||{},((e,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&s(d.ctx[e],d.ctx[e]=o)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](o),f&&ie(t,e)),n})):[],d.update(),f=!0,o(d.before_update),d.fragment=!!a&&a(d.ctx),n.target){if(n.hydrate){const e=function(e){return Array.from(e.childNodes)}(n.target);d.fragment&&d.fragment.l(e),e.forEach(v)}else d.fragment&&d.fragment.c();n.intro&&X(t.$$.fragment),re(t,n.target,n.anchor,n.customElement),G()}D(u)}class se{$destroy(){oe(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function le(e){let t,n;const r=e[7].default,o=function(e,t,n,r){if(e){const o=c(e,t,n,r);return e[0](o)}}(r,e,e[6],null);return{c(){t=C("div"),o&&o.c()},m(r,i){y(r,t,i),o&&o.m(t,null),e[8](t),n=!0},p(e,[t]){o&&o.p&&(!n||64&t)&&function(e,t,n,r,o,i){if(o){const a=c(t,n,r,i);e.p(a,o)}}(o,r,e,e[6],n?function(e,t,n,r){if(e[2]&&r){const o=e[2](r(n));if(void 0===t.dirty)return o;if("object"==typeof o){const e=[],n=Math.max(t.dirty.length,o.length);for(let r=0;r<n;r+=1)e[r]=t.dirty[r]|o[r];return e}return t.dirty|o}return t.dirty}(r,e[6],t,null):function(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}(e[6]),null)},i(e){n||(X(o,e),n=!0)},o(e){ee(o,e),n=!1},d(n){n&&v(t),o&&o.d(n),e[8](null)}}}function ce(e,t,n){let{$$slots:r={},$$scope:o}=t,{root:i=null}=t,{top:a=0}=t,{bottom:s=0}=t,{increments:l=100}=t,{value:c}=t;const h=[],u=[];let d,f=[],p=[];const g=()=>{f.length&&f.forEach(b)},b=(e,t)=>{const r={root:i,rootMargin:`${a?-1*a:0}px 0px ${s?-1*s:0}px 0px`,threshold:u};p[t]&&p[t].disconnect();const o=new IntersectionObserver((e=>{e[0].isIntersecting;const r=e[0].intersectionRatio;h[t]=r,(()=>{let e=0,t=0;for(let n=0;n<h.length;n++)h[n]>e&&(e=h[n],t=n);n(1,c=e>0?t:void 0)})()}),r);o.observe(e),p[t]=o};return E((()=>{for(let e=0;e<l+1;e++)u.push(e/l);f=d.querySelectorAll(":scope > *"),g()})),e.$$set=e=>{"root"in e&&n(2,i=e.root),"top"in e&&n(3,a=e.top),"bottom"in e&&n(4,s=e.bottom),"increments"in e&&n(5,l=e.increments),"value"in e&&n(1,c=e.value),"$$scope"in e&&n(6,o=e.$$scope)},e.$$.update=()=>{24&e.$$.dirty&&g()},[d,c,i,a,s,l,o,r,function(e){z[e?"unshift":"push"]((()=>{d=e,n(0,d)}))}]}class he extends se{constructor(e){super(),ae(this,e,ce,le,a,{root:2,top:3,bottom:4,increments:5,value:1})}}function ue(t){let n,r,o,i;return{c(){n=C("div"),r=C("div"),o=k(),i=C("div"),T(r,"class","step-text svelte-16pjmqj"),T(i,"class","step-img svelte-16pjmqj"),T(n,"class","step-cont svelte-16pjmqj"),A(n,"active",t[0]===t[1])},m(e,a){y(e,n,a),b(n,r),r.innerHTML=t[2],b(n,o),b(n,i)},p(e,[t]){4&t&&(r.innerHTML=e[2]),3&t&&A(n,"active",e[0]===e[1])},i:e,o:e,d(e){e&&v(n)}}}function de(e,t,n){let{currentStep:r}=t,{i:o}=t,{text:i}=t;return e.$$set=e=>{"currentStep"in e&&n(0,r=e.currentStep),"i"in e&&n(1,o=e.i),"text"in e&&n(2,i=e.text)},[r,o,i]}class fe extends se{constructor(e){super(),ae(this,e,de,ue,a,{currentStep:0,i:1,text:2})}}function pe(t){let n,r,o,i;return{c(){n=C("div"),r=C("div"),o=k(),i=C("div"),T(r,"class","step-img svelte-9fy42t"),T(i,"class","step-text svelte-9fy42t"),T(n,"class","step-cont svelte-9fy42t"),A(n,"active",t[0]===t[1])},m(e,a){y(e,n,a),b(n,r),b(n,o),b(n,i),i.innerHTML=t[2]},p(e,[t]){4&t&&(i.innerHTML=e[2]),3&t&&A(n,"active",e[0]===e[1])},i:e,o:e,d(e){e&&v(n)}}}function ge(e,t,n){let{currentStep:r}=t,{i:o}=t,{text:i}=t;return e.$$set=e=>{"currentStep"in e&&n(0,r=e.currentStep),"i"in e&&n(1,o=e.i),"text"in e&&n(2,i=e.text)},[r,o,i]}class be extends se{constructor(e){super(),ae(this,e,ge,pe,a,{currentStep:0,i:1,text:2})}}function me(t){let n,r,o,i;return{c(){n=C("div"),r=C("div"),o=k(),i=C("div"),T(r,"class","step-text svelte-1bycvkc"),T(i,"class","step-img svelte-1bycvkc"),T(n,"class","step-cont svelte-1bycvkc"),A(n,"active",t[0]===t[1])},m(e,a){y(e,n,a),b(n,r),r.innerHTML=t[2],b(n,o),b(n,i)},p(e,[t]){4&t&&(r.innerHTML=e[2]),3&t&&A(n,"active",e[0]===e[1])},i:e,o:e,d(e){e&&v(n)}}}function we(e,t,n){let{image:r}=t,{alt:o}=t,{currentStep:i}=t,{i:a}=t,{text:s}=t;return e.$$set=e=>{"image"in e&&n(3,r=e.image),"alt"in e&&n(4,o=e.alt),"currentStep"in e&&n(0,i=e.currentStep),"i"in e&&n(1,a=e.i),"text"in e&&n(2,s=e.text)},[i,a,s,r,o]}class ye extends se{constructor(e){super(),ae(this,e,we,me,a,{image:3,alt:4,currentStep:0,i:1,text:2})}}function ve(t){let n,r,o,i,a,s,c,h,u,d,f,p,g,m,w,$,x,_;return{c(){n=C("div"),r=C("img"),i=k(),a=C("div"),s=C("h1"),s.textContent="THE",c=k(),h=C("h1"),h.textContent="Chinatown",u=k(),d=C("h1"),d.textContent="Crowd",f=k(),p=C("h2"),p.innerHTML="<b>By Annie Fu</b>",g=k(),m=C("p"),w=k(),$=C("div"),x=C("img"),T(r,"class","title-img svelte-1npovt2"),l(r.src,o="./media/kiosk_1.jpg")||T(r,"src","./media/kiosk_1.jpg"),T(r,"alt","An image of a kiosk, with Mandarin characters and 'Welcome to Chinatown' in English on it. The top third of the image is artistically burnt out."),T(s,"class","the svelte-1npovt2"),T(h,"class","svelte-1npovt2"),T(d,"class","svelte-1npovt2"),T(p,"class","subtitle svelte-1npovt2"),T(m,"class","subtitle svelte-1npovt2"),S(m,"color","#fff"),T(a,"class","title-text svelte-1npovt2"),T(x,"id","title-img"),l(x.src,_=t[0])||T(x,"src",_),T(x,"alt",t[1]),T(x,"class","svelte-1npovt2"),T($,"class","title svelte-1npovt2"),T(n,"class","title-content svelte-1npovt2"),A(n,"active",t[2]===t[3])},m(e,o){y(e,n,o),b(n,r),b(n,i),b(n,a),b(a,s),b(a,c),b(a,h),b(a,u),b(a,d),b(a,f),b(a,p),b(a,g),b(a,m),m.innerHTML=t[4],b(n,w),b(n,$),b($,x)},p(e,[t]){16&t&&(m.innerHTML=e[4]),1&t&&!l(x.src,_=e[0])&&T(x,"src",_),2&t&&T(x,"alt",e[1]),12&t&&A(n,"active",e[2]===e[3])},i:e,o:e,d(e){e&&v(n)}}}function $e(e,t,n){let{image:r}=t,{alt:o}=t,{currentStep:i}=t,{i:a}=t,{text:s}=t;return e.$$set=e=>{"image"in e&&n(0,r=e.image),"alt"in e&&n(1,o=e.alt),"currentStep"in e&&n(2,i=e.currentStep),"i"in e&&n(3,a=e.i),"text"in e&&n(4,s=e.text)},[r,o,i,a,s]}class Ce extends se{constructor(e){super(),ae(this,e,$e,ve,a,{image:0,alt:1,currentStep:2,i:3,text:4})}}function xe(e){const t=e-1;return t*t*t+1}function ke(e,{delay:t=0,duration:n=400,easing:r=xe,x:o=0,y:i=0,opacity:a=0}={}){const s=getComputedStyle(e),l=+s.opacity,c="none"===s.transform?"":s.transform,h=l*(1-a);return{delay:t,duration:n,easing:r,css:(e,t)=>`\n\t\t\ttransform: ${c} translate(${(1-e)*o}px, ${(1-e)*i}px);\n\t\t\topacity: ${l-h*t}`}}function Te(e,t,n){const r=e.slice();return r[7]=t[n],r[9]=n,r}function Se(e,t,n){const r=e.slice();return r[7]=t[n],r[9]=n,r}function Ae(n){let r,a,s,c,h,d,f;return{c(){r=C("div"),a=C("img"),d=k(),T(a,"id",n[9]+1),T(a,"class",n[4][n[9]+1]+" fade-in svelte-1yxtz9"),l(a.src,s=n[1][n[9]+1])||T(a,"src",s),T(a,"alt",n[2][n[9]+1]),A(a,"activeImg",n[0]===n[9]+1),T(r,"class","img-container svelte-1yxtz9")},m(e,t){y(e,r,t),b(r,a),b(r,d),f=!0},p(e,t){1&t&&A(a,"activeImg",e[0]===e[9]+1)},i(n){f||(B((()=>{h&&h.end(1),c=function(n,r,o){let a,s,l=r(n,o),c=!1,h=0;function d(){a&&P(n,a)}function f(){const{delay:r=0,duration:o=300,easing:i=t,tick:f=e,css:p}=l||te;p&&(a=L(n,0,1,o,r,i,p,h++)),f(0,1);const b=u()+r,m=b+o;s&&s.abort(),c=!0,B((()=>J(n,!0,"start"))),s=g((e=>{if(c){if(e>=m)return f(1,0),J(n,!0,"end"),d(),c=!1;if(e>=b){const t=i((e-b)/o);f(t,1-t)}}return c}))}let p=!1;return{start(){p||(p=!0,P(n),i(l)?(l=l(),Y().then(f)):f())},invalidate(){p=!1},end(){c&&(d(),c=!1)}}}(a,ke,{y:-50,duration:100}),c.start()})),f=!0)},o(n){c&&c.invalidate(),h=function(n,r,a){let s,l=r(n,a),c=!0;const h=Z;function d(){const{delay:r=0,duration:i=300,easing:a=t,tick:d=e,css:f}=l||te;f&&(s=L(n,1,0,i,r,a,f));const p=u()+r,b=p+i;B((()=>J(n,!1,"start"))),g((e=>{if(c){if(e>=b)return d(0,1),J(n,!1,"end"),--h.r||o(h.c),!1;if(e>=p){const t=a((e-p)/i);d(1-t,t)}}return c}))}return h.r+=1,i(l)?Y().then((()=>{l=l(),d()})):d(),{end(e){e&&l.tick&&l.tick(1,0),c&&(s&&P(n,s),c=!1)}}}(a,ke,{y:50,duration:100}),f=!1},d(e){e&&v(r),e&&h&&h.end()}}}function _e(e){let t,n,r=e[3],o=[];for(let t=0;t<r.length;t+=1)o[t]=Ae(Se(e,r,t));const i=e=>ee(o[e],1,1,(()=>{o[e]=null}));return{c(){for(let e=0;e<o.length;e+=1)o[e].c();t=x("")},m(e,r){for(let t=0;t<o.length;t+=1)o[t].m(e,r);y(e,t,r),n=!0},p(e,n){if(23&n){let a;for(r=e[3],a=0;a<r.length;a+=1){const i=Se(e,r,a);o[a]?(o[a].p(i,n),X(o[a],1)):(o[a]=Ae(i),o[a].c(),X(o[a],1),o[a].m(t.parentNode,t))}for(K(),a=r.length;a<o.length;a+=1)i(a);Q()}},i(e){if(!n){for(let e=0;e<r.length;e+=1)X(o[e]);n=!0}},o(e){o=o.filter(Boolean);for(let e=0;e<o.length;e+=1)ee(o[e]);n=!1},d(e){$(o,e),e&&v(t)}}}function je(e){let t,n;return t=new fe({props:{image:e[1][e[9]],alt:e[2][e[9]],text:e[3][e[9]],currentStep:e[0],i:e[9]}}),{c(){ne(t.$$.fragment)},m(e,r){re(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.currentStep=e[0]),t.$set(r)},i(e){n||(X(t.$$.fragment,e),n=!0)},o(e){ee(t.$$.fragment,e),n=!1},d(e){oe(t,e)}}}function Me(e){let t,n;return t=new fe({props:{image:e[1][e[9]],alt:e[2][e[9]],text:e[3][e[9]],currentStep:e[0],i:e[9]}}),{c(){ne(t.$$.fragment)},m(e,r){re(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.currentStep=e[0]),t.$set(r)},i(e){n||(X(t.$$.fragment,e),n=!0)},o(e){ee(t.$$.fragment,e),n=!1},d(e){oe(t,e)}}}function Le(e){let t,n,r,o,i,a,s,l,c,h,u="title"==e[4][e[9]]&&function(e){let t,n;return t=new Ce({props:{image:e[1][e[9]],alt:e[2][e[9]],currentStep:e[0],text:e[3][e[9]],i:e[9]}}),{c(){ne(t.$$.fragment)},m(e,r){re(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.currentStep=e[0]),t.$set(r)},i(e){n||(X(t.$$.fragment,e),n=!0)},o(e){ee(t.$$.fragment,e),n=!1},d(e){oe(t,e)}}}(e);const d=[Me,je],f=[];~(r=function(e,t){return"half"==e[4][e[9]]?0:"half-short"==e[4][e[9]]?1:-1}(e))&&(o=f[r]=d[r](e));let p="half2"==e[4][e[9]]&&function(e){let t,n;return t=new be({props:{image:e[1][e[9]],alt:e[2][e[9]],text:e[3][e[9]],currentStep:e[0],i:e[9]}}),{c(){ne(t.$$.fragment)},m(e,r){re(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.currentStep=e[0]),t.$set(r)},i(e){n||(X(t.$$.fragment,e),n=!0)},o(e){ee(t.$$.fragment,e),n=!1},d(e){oe(t,e)}}}(e),g="full"==e[4][e[9]]&&function(e){let t,n;return t=new ye({props:{image:e[1][e[9]],alt:e[2][e[9]],text:e[3][e[9]],currentStep:e[0],i:e[9]}}),{c(){ne(t.$$.fragment)},m(e,r){re(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.currentStep=e[0]),t.$set(r)},i(e){n||(X(t.$$.fragment,e),n=!0)},o(e){ee(t.$$.fragment,e),n=!1},d(e){oe(t,e)}}}(e);return{c(){var r;t=C("div"),u&&u.c(),n=k(),o&&o.c(),i=k(),p&&p.c(),a=k(),g&&g.c(),s=k(),T(t,"class",(r=e[5][e[9]],l=(null==r?"":r)+" svelte-1yxtz9")),T(t,"id",c=e[9]),A(t,"active",e[0]===e[9])},m(e,o){y(e,t,o),u&&u.m(t,null),b(t,n),~r&&f[r].m(t,null),b(t,i),p&&p.m(t,null),b(t,a),g&&g.m(t,null),b(t,s),h=!0},p(e,n){"title"==e[4][e[9]]&&u.p(e,n),o&&o.p(e,n),"half2"==e[4][e[9]]&&p.p(e,n),"full"==e[4][e[9]]&&g.p(e,n),1&n&&A(t,"active",e[0]===e[9])},i(e){h||(X(u),X(o),X(p),X(g),h=!0)},o(e){ee(u),ee(o),ee(p),ee(g),h=!1},d(e){e&&v(t),u&&u.d(),~r&&f[r].d(),p&&p.d(),g&&g.d()}}}function Pe(e){let t,n,r,o,i,a,s,l,c,h,u,d,f,p,g,b,m,w,x,A,_=e[3],j=[];for(let t=0;t<_.length;t+=1)j[t]=Le(Te(e,_,t));const M=e=>ee(j[e],1,1,(()=>{j[e]=null}));return{c(){for(let e=0;e<j.length;e+=1)j[e].c();t=k(),n=C("br"),r=C("br"),o=C("br"),i=C("br"),a=k(),s=C("div"),s.innerHTML='<h3 style="font-family: neuzeit-grotesk, sans-serif; font-weight: 800; color: #c4c4c4">Photograph attributions, in order of appearance:</h3> \n          <p style="color: #c4c4c4">All color film photographs are my own.</p><br/> \n          <p style="width: 55%; text-align: left; margin: auto; color: #c4c4c4;"><a href="http://reuther.wayne.edu/node/13795" style="color: #fff; text-decoration: underline;">The Walter P. Reuther Library, Wayne State University;</a>;\n\n            <a href="http://reuther.wayne.edu/node/13125" style="color: #fff; text-decoration: underline;">The Walter P. Reuther Library, Wayne State University;</a>;\n\n            The Detroit News Photo Archive;\n            <a href="https://www.detroityes.com/mb/showthread.php?17577-Cass-Corridor-Chinatown-Chung-s/page2" style="color: #fff; text-decoration: underline;">User &quot;Lowell,&quot; via Detroit Yes! Forum</a>;\n\n          <a href="http://reuther.wayne.edu/node/9940" style="color: #fff; text-decoration: underline;">The Walter P. Reuther Library, Wayne State University;</a>;\n\n            The Detroit News Photo Archive.</p>',l=k(),c=C("br"),h=C("br"),u=C("br"),d=C("br"),f=k(),p=C("p"),p.innerHTML='Thank you so much for reading. This was researched, photographed, reported, and\n          coded by Annie Fu. If you have any questions or comments, please reach\n          out to me at <a href="mailto:annieccfu@gmail.com" style="color: #fff; text-decoration: underline;">annieccfu@gmail.com</a>.',g=k(),b=C("br"),m=C("br"),w=C("br"),x=C("br"),T(s,"class","references"),S(s,"text-align","center"),S(p,"color","#fff"),S(p,"padding","2rem")},m(e,v){for(let t=0;t<j.length;t+=1)j[t].m(e,v);y(e,t,v),y(e,n,v),y(e,r,v),y(e,o,v),y(e,i,v),y(e,a,v),y(e,s,v),y(e,l,v),y(e,c,v),y(e,h,v),y(e,u,v),y(e,d,v),y(e,f,v),y(e,p,v),y(e,g,v),y(e,b,v),y(e,m,v),y(e,w,v),y(e,x,v),A=!0},p(e,n){if(63&n){let r;for(_=e[3],r=0;r<_.length;r+=1){const o=Te(e,_,r);j[r]?(j[r].p(o,n),X(j[r],1)):(j[r]=Le(o),j[r].c(),X(j[r],1),j[r].m(t.parentNode,t))}for(K(),r=_.length;r<j.length;r+=1)M(r);Q()}},i(e){if(!A){for(let e=0;e<_.length;e+=1)X(j[e]);A=!0}},o(e){j=j.filter(Boolean);for(let e=0;e<j.length;e+=1)ee(j[e]);A=!1},d(e){$(j,e),e&&v(t),e&&v(n),e&&v(r),e&&v(o),e&&v(i),e&&v(a),e&&v(s),e&&v(l),e&&v(c),e&&v(h),e&&v(u),e&&v(d),e&&v(f),e&&v(p),e&&v(g),e&&v(b),e&&v(m),e&&v(w),e&&v(x)}}}function De(t){let n,r,o,i,s,l,c,h,u,d,f=t[0],p=_e(t);function g(e){t[6](e)}let m={$$slots:{default:[Pe]},$$scope:{ctx:t}};return void 0!==t[0]&&(m.value=t[0]),l=new he({props:m}),z.push((()=>function(e,t,n){const r=e.$$.props[t];void 0!==r&&(e.$$.bound[r]=n,n(e.$$.ctx[r]))}(l,"value",g))),{c(){n=C("main"),r=C("div"),o=C("div"),p.c(),i=k(),s=C("div"),ne(l.$$.fragment),h=k(),u=C("div"),T(o,"class","image-div svelte-1yxtz9"),T(s,"class","step-div svelte-1yxtz9"),T(r,"class","desktop svelte-1yxtz9"),T(n,"class","svelte-1yxtz9")},m(e,t){y(e,n,t),b(n,r),b(r,o),p.m(o,null),b(r,i),b(r,s),re(l,s,null),b(s,h),b(s,u),d=!0},p(t,[n]){1&n&&a(f,f=t[0])?(K(),ee(p,1,1,e),Q(),p=_e(t),p.c(),X(p),p.m(o,null)):p.p(t,n);const r={};var i;2049&n&&(r.$$scope={dirty:n,ctx:t}),!c&&1&n&&(c=!0,r.value=t[0],i=()=>c=!1,I.push(i)),l.$set(r)},i(e){d||(X(p),X(l.$$.fragment,e),d=!0)},o(e){ee(p),ee(l.$$.fragment,e),d=!1},d(e){e&&v(n),p.d(e),oe(l)}}}function Ee(e,t,n){let r=0;return[r,["./media/kiosk_1.jpg","./media/first.jpeg","./media/street_newedit.png","./media/chinatown5.jpeg","./media/chungs1.jpg","./media/chungs3.jpg","./media/chungs_2.jpg","./media/chungsstreet.jpeg","./media/chungs_2000s.jpeg","./media/chungs_roof.jpg","./media/onleong_shanghai.jpg","./media/shanghai_sign.jpg","./media/street3.jpg","./media/lion.jpeg","./media/welcome_kiosk.jpg","","./media/flyer.png","./media/lion.jpeg",""],["A photo of a vertical octogonal kiosk, with Mandarin characters on some panels. One panel has English: 'Welcome to Chinatown.' The top fourth of the photo has an artistic light leak, symbolizing erasure. ","A black and white photo of a crowded street, celebrating outside a storefront that reads 'Chungs Chop Suey.' ","A hazy, dark and grainy photo of an empty intersection.","A black and white photo of a group of people, most of them Asian. A man wears a traditional Chinese lion dancing costume.","An empty gravel parking lot with some run-down infrastructure throughout. In the distance, a large derelict building with a pagoda-style roof.","The side of a building, with faint lettering spelling out 'Chung's' in capital letters. The remnants of a sign.","A tree stands in front of a building facade with four Mandarin characters. There's grafitti throughout the facade. On either side of the tree, pools of red leaves evoke an eerie feeling.","A black and white image shot down a street, showing many different business signs, including 'Chung's Cantonese Cuisine', 'Grocerland Market', 'Shanghai Chop Suey', and more.","A red and white abandoned restaurant facade, with the signange 'Chung's Cantonese Cuisine.' The building has a pagoda-style roof.","A boarded-over abandoned building, with broken signage frames and exposed plumbing.","A photo down an empty street, with an abandoned brown building to the right. The windows have all been boarded over. There are no recognizable features, other than the general shape of the facade.","A brown building facade, with a painted over sign. The old letters of the sign slightly show through: 'Shanghai Cafe. Free Parking in rear.'","A black and white photo of a parade. Two men at the front of the parade hold flags, one an American flag and the other a Taiwanese flag. Behind them, men wear a traditional Chinese lion dancing costume.","Two men walk down a crowded street in a traditional Chinese lion-dancing costume.","A color photo of an octogonal vertical kiosk, with English and Mandarin characters. The English characters say 'Welcome to Chinatown.'","","A colorful flyer, with the headline 'People and Places of the Cass Corridor: Community Meeting.'","Two men walk down a crowded street in a traditional Chinese lion-dancing costume.",""],["In Midtown Detroit, the blocks surrounding Cass Corridor and Peterboro Street contain the only recognizable remnants of a once-promising Chinatown.","<p> Detroit’s Chinatown first flourished in the 1920s, from the blocks between Third Avenue, Bagley Street, and Porter Street, writes activist Helen Zia in “Asian American Dreams: The Emergence of an American People.” <br/><br/> First led by a group of prominent Chinese business-owning families, including the Yee, Chin, and Chung families, a wave of immigrants settled into the area and opened restaurants, grocery stores, and even a Chinese school in those first decades.</p>","<p style='background-color: white; padding: 15px'>Today, the original blocks of Chinatown <br/> no longer exist.  <br/><br/>A portion of the John C. Lodge Freeway, a parking garage, and a parking lot of the MGM Grand Casino stand in their place.</p> <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><p style='background-color: white; padding: 15px'>The creation of the freeway coincided with the relocation of old Chinatown to Cass Corridor in 1963, when generations of Chinese residents and their associated businesses faced displacement as part of the Detroit Housing Commission’s “slum clearance” initiative, Zia writes. <br/><br/>Chelsea Zuzindlak, an attorney and former curator at the Detroit Historical Museum, shed light on the razing in an interview for Hour in March 2009: <b> “Ask any person who lived there, and they’ll tell you it was anything but a slum,” </b> she said. <b> “It was kept up.”</b></p></br></br></br></br></br></br></br>","<p style='background-color: white; padding: 15px'>In fact, according to Emiko Ohnuki-Tierney, professor of anthropology at the University of Wisconsin-Madison, Chinatown signified home and a sense of community so distinctive that longtime residents were nicknamed <b>“the Chinatown crowd.”</b></p><br/>","<p style='background-color: white; padding: 15px'>At the time of the clearance announcement, the general feeling amongst the residents was that the destruction of their Chinatown would mean the end of their ethnic community. ","<p>With no other options, cornerstone businesses of the community joined together to lead the transition to Cass Corridor. The families of Chung’s Chop Suey restaurant and the On Leong Chinese Merchants Association were two of the most prominent.</p>","<p style='background-color: white; padding: 15px'>Once relocated, the neighborhood celebrated a brief period of renewed success.</p> <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><p style='background-color: white; padding: 15px'>However, a series of crimes shook up the community in the mid-70s: on August 5, 1976, community leader Tommie Lee was murdered in a hold-up of his restaurant, Bow Wah. </p><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><p style='background-color: white; padding: 15px'>A few years later, in 1982, 27-year-old Vincent Chin was murdered in a hate crime. Rooted in anti-Asian sentiment due to the increasing success of the Japanese auto industry, the murder served as the catalyst for many of the remaining residents to abandon the area.</p>","<p>By November 1989, only 100 Chinese residents remained in Chinatown, according to an Argus-Press article published at the time.<br/><br/> “If they had left Chinatown where it was, it probably would’ve developed into a Greektown,“ said then-co-owner of Chung’s restaurant, Philip Chung.<br/><br/> Citing Detroit’s booming entertainment and cultural district Greektown as a reference point for what Chinatown could have been, Chung said, <b> “we never saw this area have a hey-day, but we saw it go from not-too-bad to worse.” </b></p> ","<p>The Chin and Chung families operated Chung’s Chop Suey for over a half-century, said Curtis Chin, documentary filmmaker and last familial heir of the restaurant. Beginning when Henry Chung and Chin’s great-grandfather moved to the area in the midst of the 1920’s growth, their successors and multiple generations of families composed the lifeblood of Chung’s. <br/><br/> The restaurant was among the 32 displaced from the original Chinatown in the 1960s: an American-Cantonese hybrid joint known for its signature, now regional staple dish; almond boneless chicken, as well as the “best egg rolls in town.“ <br/><br/>Its decades-long operation witnessed the many eras of the neighborhood, serving lunch rushes and housing meetings.</p>","<p style='background-color: white; padding: 15px'>After over 60 years in business, Chung’s was the last Chinatown business to close in 2000. The restaurant’s impact on Detroit remains evident in even the simplest of ways: almond boneless chicken continues to appear on restaurant menus all throughout the city.</p><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><p style='background-color: white; padding: 15px'>As of November 2020, the roof remains intact, but veins of infrastructure have begun to blister out of the building’s skin. The signage frame and plumbing extend and hang from the composition, brittle to the touch. </p><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><p style='background-color: white; padding: 15px'>Last in the news, Brenna Houck reported in Eater Detroit that restaurant mogul Tom Brady had purchased the space for two new restaurants in 2018. In 2022, the structure shows no signs of recent maintenance or development since the transfer in ownership, apart from the removal of a Vincent Chin memorial mural from the building’s North side.</p>","<p>Further down Cass Corridor, just beyond the Chung’s lot, the building that On Leong headquarters and Shanghai Cafe once shared still stands.<br/><br/> Through the relocation, the On Leong Chinese Merchants Association remained a leading force for the community, tying together families of immigrant business owners, and the Shanghai Cafe offered another supply of late-night comfort food.</p>","<p>Though the characteristic rectangular pane windows have been boarded up and the entirety of the facade painted brown, the sign for the Shanghai Cafe remains posted, with faint markings inviting visitors to free parking in the rear lot.</p>","<p style='background-color: white; padding: 15px'>The same Shanghai Cafe sign appears in its original white paint in the center of this archived photograph from the Detroit Free Press archives, tucked behind a silver post. </p><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><p style='background-color: white; padding: 15px'>When the new Chinatown opened in 1963, the facades of Shanghai Cafe, On Leong, and Chung’s saw parades and lion dances celebrating the beginning of a new community.</p>","<p style='background-color: white; padding: 15px'>The Free Press reported that “500 chinese merchants came to Detroit from all parts of the United States to join the convention and to congratulate the Detroit Chinese on their achievement; <b>the opening of the new Chinatown.”</b></p> ","<p style='background-color: white; padding: 15px'>Just under two decades later, during a period of escalating crime rates and flight to the suburbs, reporter Sally Smith wrote a Free Press article about the “Welcome to Chinatown” kiosk in April of 1980:</p><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><p style='background-color: white; padding: 15px'><q><i>Despite the red banners on the street corners, and the shops with all the right names—Wing Lee Lung Chinese Vegetable Co., Yee Yuen, Yun Hop, and Bow Wah’s Chop Suey—the sign that says ‘Welcome to Detroit’s Chinatown’ seems mostly a bleak attempt to force a sense of liveliness on a fragile reality.</i></q></p><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><p style='background-color: white; padding: 15px'>Perhaps a bleak attempt, but an attempt nonetheless. The remaining relic in Chinatown has seen both better and worse days throughout the past half-century. <br/><br/> After a bout of graffiti marred the original lettering in 2016, it was quietly restored overnight one day.<br/><br/> When I visited the area in 2021, seeing the refurbished kiosk stand amongst all the surrounding ruin brought to mind Smith's quote.</p> <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><p style='background-color: white; padding: 15px'>Amidst derelict and fading buildings in the area, revitalizing a sign welcoming people to something that no longer exists indeed feels futile. But also recklessly auspicious. <br/><br/> It feels as if people haven’t completely forgotten about Chinatown and what it means to Detroit, despite the surrounding reality stating otherwise.</p>","<p style='padding: 15px; background-color: white;' class='alone'>On November 17th, 2020, the Detroit City Council Historic Designation Advisory Board held a community meeting titled the “People and Places of the Cass Corridor,” calling for citizens to “learn more about the Cass Corridor architectural, cultural, and ethnic survey and ways to get involved!”</p>","<p style='padding: 15px; background-color: white; color: #333;'>When I set out to find more information on the meeting, all I found was the event flyer, which featured three vibrant side-by-side images. <br/><br/<br/>The first, a clean-cut skyscraper downtown. <br/> <br/>The second, a lyric from the 1966 Youngbloods classic “Get Together”: “smile on your brother / everybody get together.” <br/><br/>The third? A black and white photo of a crowd, all gathered around a dancing lion: the 1963 re-opening celebration of Detroit’s Chinatown.</p>","<p></p>"],["title","half","full","full","full","half-short","full","half","half","full","half-short","half","full","full","full","full","half","full"],["step","step","step-long1","step","step-long","step","step-long2","step","step","step-long3","step","step","step-long3","step-long1","step-long4","step","step","step"],function(e){r=e,n(0,r)}]}return new class extends se{constructor(e){super(),ae(this,e,Ee,De,a,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
