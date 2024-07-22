var _t=Object.defineProperty;var vt=(t,e,n)=>e in t?_t(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var we=(t,e,n)=>vt(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerPolicy&&(s.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?s.credentials="include":l.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(l){if(l.ep)return;l.ep=!0;const s=n(l);fetch(l.href,s)}})();function H(){}const ft=t=>t;function F(t,e){for(const n in e)t[n]=e[n];return t}function ut(t){return t()}function Ie(){return Object.create(null)}function de(t){t.forEach(ut)}function Se(t){return typeof t=="function"}function W(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let he;function Ae(t,e){return t===e?!0:(he||(he=document.createElement("a")),he.href=e,t===he.href)}function bt(t){return Object.keys(t).length===0}function yt(t,e,n,i){if(t){const l=dt(t,e,n,i);return t[0](l)}}function dt(t,e,n,i){return t[1]&&i?F(n.ctx.slice(),t[1](i(e))):n.ctx}function wt(t,e,n,i){if(t[2]&&i){const l=t[2](i(n));if(e.dirty===void 0)return l;if(typeof l=="object"){const s=[],r=Math.max(e.dirty.length,l.length);for(let a=0;a<r;a+=1)s[a]=e.dirty[a]|l[a];return s}return e.dirty|l}return e.dirty}function kt(t,e,n,i,l,s){if(l){const r=dt(e,n,i,s);t.p(r,l)}}function At(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Q(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function ie(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function Ne(t){return t??""}const ht=typeof window<"u";let Ct=ht?()=>window.performance.now():()=>Date.now(),Pe=ht?t=>requestAnimationFrame(t):H;const te=new Set;function mt(t){te.forEach(e=>{e.c(t)||(te.delete(e),e.f())}),te.size!==0&&Pe(mt)}function St(t){let e;return te.size===0&&Pe(mt),{promise:new Promise(n=>{te.add(e={c:t,f:n})}),abort(){te.delete(e)}}}function f(t,e){t.appendChild(e)}function gt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Pt(t){const e=u("style");return e.textContent="/* empty */",jt(gt(t),e),e.sheet}function jt(t,e){return f(t.head||t,e),e.sheet}function b(t,e,n){t.insertBefore(e,n||null)}function v(t){t.parentNode&&t.parentNode.removeChild(t)}function se(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function u(t){return document.createElement(t)}function Z(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function L(t){return document.createTextNode(t)}function C(){return L(" ")}function re(){return L("")}function ae(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function m(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function le(t,e){for(const n in e)m(t,n,e[n])}function Mt(t){return Array.from(t.childNodes)}function R(t,e){e=""+e,t.data!==e&&(t.data=e)}function me(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,"")}function Et(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}const ve=new Map;let be=0;function zt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Dt(t,e){const n={stylesheet:Pt(e),rules:{}};return ve.set(t,n),n}function Lt(t,e,n,i,l,s,r,a=0){const o=16.666/i;let c=`{
`;for(let w=0;w<=1;w+=o){const g=e+(n-e)*s(w);c+=w*100+`%{${r(g,1-g)}}
`}const d=c+`100% {${r(n,1-n)}}
}`,p=`__svelte_${zt(d)}_${a}`,M=gt(t),{stylesheet:P,rules:_}=ve.get(M)||Dt(M,t);_[p]||(_[p]=!0,P.insertRule(`@keyframes ${p} ${d}`,P.cssRules.length));const k=t.style.animation||"";return t.style.animation=`${k?`${k}, `:""}${p} ${i}ms linear ${l}ms 1 both`,be+=1,p}function Te(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?s=>s.indexOf(e)<0:s=>s.indexOf("__svelte")===-1),l=n.length-i.length;l&&(t.style.animation=i.join(", "),be-=l,be||It())}function It(){Pe(()=>{be||(ve.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&v(e)}),ve.clear())})}let je;function fe(t){je=t}const ee=[],Re=[];let ne=[];const He=[],Nt=Promise.resolve();let Ce=!1;function Tt(){Ce||(Ce=!0,Nt.then(pt))}function ue(t){ne.push(t)}const ke=new Set;let x=0;function pt(){if(x!==0)return;const t=je;do{try{for(;x<ee.length;){const e=ee[x];x++,fe(e),Rt(e.$$)}}catch(e){throw ee.length=0,x=0,e}for(fe(null),ee.length=0,x=0;Re.length;)Re.pop()();for(let e=0;e<ne.length;e+=1){const n=ne[e];ke.has(n)||(ke.add(n),n())}ne.length=0}while(ee.length);for(;He.length;)He.pop()();Ce=!1,ke.clear(),fe(t)}function Rt(t){if(t.fragment!==null){t.update(),de(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ue)}}function Ht(t){const e=[],n=[];ne.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),ne=e}let ce;function Vt(){return ce||(ce=Promise.resolve(),ce.then(()=>{ce=null})),ce}function Ve(t,e,n){t.dispatchEvent(Et(`intro${n}`))}const _e=new Set;let Ot;function O(t,e){t&&t.i&&(_e.delete(t),t.i(e))}function $(t,e,n,i){if(t&&t.o){if(_e.has(t))return;_e.add(t),Ot.c.push(()=>{_e.delete(t)}),t.o(e)}}const Gt={duration:0};function $t(t,e,n){const i={direction:"in"};let l=e(t,n,i),s=!1,r,a,o=0;function c(){r&&Te(t,r)}function d(){const{delay:M=0,duration:P=300,easing:_=ft,tick:k=H,css:w}=l||Gt;w&&(r=Lt(t,0,1,P,M,_,w,o++)),k(0,1);const g=Ct()+M,A=g+P;a&&a.abort(),s=!0,ue(()=>Ve(t,!0,"start")),a=St(h=>{if(s){if(h>=A)return k(1,0),Ve(t,!0,"end"),c(),s=!1;if(h>=g){const j=_((h-g)/P);k(j,1-j)}}return s})}let p=!1;return{start(){p||(p=!0,Te(t),Se(l)?(l=l(i),Vt().then(d)):d())},invalidate(){p=!1},end(){s&&(c(),s=!1)}}}function K(t){return(t==null?void 0:t.length)!==void 0?t:Array.from(t)}function Me(t,e){const n={},i={},l={$$scope:1};let s=t.length;for(;s--;){const r=t[s],a=e[s];if(a){for(const o in r)o in a||(i[o]=1);for(const o in a)l[o]||(n[o]=a[o],l[o]=1);t[s]=a}else for(const o in r)l[o]=1}for(const r in i)r in n||(n[r]=void 0);return n}function q(t){t&&t.c()}function B(t,e,n){const{fragment:i,after_update:l}=t.$$;i&&i.m(e,n),ue(()=>{const s=t.$$.on_mount.map(ut).filter(Se);t.$$.on_destroy?t.$$.on_destroy.push(...s):de(s),t.$$.on_mount=[]}),l.forEach(ue)}function U(t,e){const n=t.$$;n.fragment!==null&&(Ht(n.after_update),de(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Bt(t,e){t.$$.dirty[0]===-1&&(ee.push(t),Tt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function J(t,e,n,i,l,s,r=null,a=[-1]){const o=je;fe(t);const c=t.$$={fragment:null,ctx:[],props:s,update:H,not_equal:l,bound:Ie(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:Ie(),dirty:a,skip_bound:!1,root:e.target||o.$$.root};r&&r(c.root);let d=!1;if(c.ctx=n?n(t,e.props||{},(p,M,...P)=>{const _=P.length?P[0]:M;return c.ctx&&l(c.ctx[p],c.ctx[p]=_)&&(!c.skip_bound&&c.bound[p]&&c.bound[p](_),d&&Bt(t,p)),M}):[],c.update(),d=!0,de(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){const p=Mt(e.target);c.fragment&&c.fragment.l(p),p.forEach(v)}else c.fragment&&c.fragment.c();e.intro&&O(t.$$.fragment),B(t,e.target,e.anchor),pt()}fe(o)}class Y{constructor(){we(this,"$$");we(this,"$$set")}$destroy(){U(this,1),this.$destroy=H}$on(e,n){if(!Se(n))return H;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const l=i.indexOf(n);l!==-1&&i.splice(l,1)}}$set(e){this.$$set&&!bt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Ut="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ut);const qt=0,Wt="2023-12-16",Jt={name:"Eddie Pace",job_title:"Software Engineer | Scientist",email:"edwardjpace@gmail.com",phone:"640 671 5450",address:"711 E. 6th Ave. Vancouver V5T1L7"},Yt=`Physicist turned software engineer; highly adaptable full-stack developer with a record of delivering professional software across a spectrum of languages and stacks. Enjoys developing scratch built apps as personal projects.
References provided on request.`,Zt={github:"https://github.com/edpacca",linkedIn:"https://www.linkedin.com/in/edward-pace-ab88a971/",researchGate:"https://researchgate.net/profile/Edward-Pace-2",personal:"https://seashell-app-8zymt.ondigitalocean.app/"},Ft=["Python","Typescript","Java","C#","Docker","Git","Bash","Vim","AWS","Linux","React","C++","VTK"],Kt=[{name:"Marzio Superina",relationship:"Project lead",email:"msuperina@x.com",company:"Scott Logic"},{name:"Cal Bryant",relationship:"Head of Engineering",email:"cal.bryant@cydar.co.uk",company:"Cydar Medical"}],Qt=[{degree:"Ph.D",awarding_body:"University of Edinburgh",country:"UK",years:"2015 - 2018",departments:["Centre for Science at Extreme Conditions","School of Chemistry","School of Physics & Astronomy"]},{degree:"M.Chem",awarding_body:"University of Leeds",country:"UK",grade:"1st Class Hons.",years:"2010 - 2014",departments:["School of Chemistry","Year abroad: Uni. of Auckland, NZ"]}],Xt=[{job_title:"Software Engineer",company:"Cydar Medical",icon:"cydar.webp",dates:"June 2023 - present",notes:[{note:"Delivered new pre-preoperative software for surgical planning, from conception to users. Working on everything from backend algorithms for 3D visuals to frontend architecture.s",skills:["Python","PyQT","C++","VTK"]},{note:"Set up full CI pipeline in Github Actions for the In Theatre GUI.",skills:["Github actions","Bash","Docker","Python"]},{note:"Contributed to development of a testing framework to compare and benchmark new code, helping to optimise 2D/3D registration times during surgery.",skills:["HTML","TS","Jest"]},{note:"Developed a Gitub-Slackbot to inform owners of PRs when merge conflicts arise following upstream changes - helps optimise the software release cycle and eases bottlenecks in the QA queue",skills:["Bash","Github Actions","Github CLI"]}]},{job_title:"Jr. Software Engineer",company:"Cydar Medical",icon:"cydar.webp",dates:"Aug 2022 - June 2023",notes:[{note:"Hit the ground running and quickly picked up new technologies to begin contributing.",skills:["Ubuntu","Python","Django","Svelte","PyQt"]},{note:"Assigned a solo project to adapt the surgery browser-based GUI; rebuilding the frontend UI using sophisticated frontend framework",skills:["Svelte","TS"]},{note:"Worked on small team to deliver new features for the pre-operative planning tool",skills:["Python","PyQT"]}]},{job_title:"Associate Developer",company:"Scott Logic",icon:"scott-logic.webp",dates:"Feb 2022 - Aug 2022",notes:[{note:"Member of small development team working on creating a new Single Sign-On (SSO) application for the Scottish Government.",skills:["Java","DynamoDb","JS","PKCE for OAuth2"]},{note:"Presenting demos regularly for different groups of clients, modifying level of presentation to suit audience knowledge"},{note:"Delivered CI/CD training to graduates",skills:["Terraform","AWS"]}]},{job_title:"Graduate Developer",company:"Scott Logic",icon:"scott-logic.webp",dates:"Aug 2021 - Feb 2022",notes:[{note:"Acknowledged for quick learning abilities, transitioned to a client project ahead of schedule."},{note:"Worked with a large team of graduates on an internal project, showcasing effective communication and leadership skills in coordinating the group.",skills:["React/Redux","Java","SpringBoot"]}]},{job_title:"Postdoctoral Researcher",company:"McMahon group, University of Edinburgh",icon:"uoe.webp",dates:"2018 - 2020",notes:[{note:"Mentoring PhD students within a reputable high-pressure science research group."},{note:"Planning and overseeing multi-day experiential campaigns, collecting data at international facilities with specialised instrumentation."},{note:"Strong writing ability demonstrated through publications as the first author in high-impact journals."},{note:"Developed excellent public speaking skills by delivering presentations to large audiences at international conferences."}]}],xt=[{name:"In Theatre GUI",published:!0,tech:["Sevlte","Typescript","Redux"],description:"Reimplemented the browser-based In-Theatre GUI, converting from raw JS/HTML into Svelte; undertaking a solo project that required grasping a complex software system and rebuilding the frontend UI with a fresh design.",year:2022},{name:"Personal website",published:!0,url:"https://edpacca.co.uk",description:"Personal blog used to showcase all kinds of projects and art.",tech:["Sveltekit","Typescript","Github Actions"],year:2023},{name:"Browser based D&D Initiative Tracker",published:!0,url:"https://edpacca.github.io/ednd-initiative",tech:["Svelte","Typescript"],year:2023,description:"App designed to help manage running a game of Dungeons & Dragons - part of a full tool-suite that I am actively developing. An entirely static, but feature-rich application with data persistence (via local storage), a visual historical action log and an attractive UI."},{name:"Dance school website",published:!0,url:"https:/fimbo-vibes.com",tech:["Hugo","Netlify CMS"],year:2023,description:"Helped a small dance company from Uganda to launch a simple website, that could be easily updated with only minimal computer literacy. The website is hosted for free on Github Pages and utilizes Netlify for user-authenticated content management."},{name:"Full-stack Wedding App",published:!0,url:"https://seashell-app-8zymt.ondigitalocean.app/wapp",tech:["React/Redux","Express","MongoDb","Docker"],year:2022,description:'Created a user authenticated browser app entirely from scratch, developed to enable guests at my wedding to manage meal choices, report arrival dates, find their seats and access the itinerary. The stack was launched with Docker-compose, using a reverse proxy to orchestrate traffic. "Wapp" effectively aided us in organising and managing our wedding.'},{name:"Mafia Infiltration - Proof of Concept",published:!1,url:null,tech:["Svelte","Typescript"],year:2022,description:"Developed a browser based POC for a friend's game company, so they could modify and test various game mechanics before the ultimately successful funding pitch. The game is now in active development and due to be released in 2024."},{name:"Wizard Grenade 2D game",published:!0,url:"https://seashell-app-8zymt.ondigitalocean.app/wizard-grenade",tech:["C#","XNA Framework"],year:2020,description:"First major project undertaken to learn Object-Oriented Programming. Developed entirely from scratch from a simple render loop, with a custom physics engine - Essentially a copy of '_Worms2_' it grew into a fully functional local multiplayer game with my own artwork and music."},{name:"Spotify CLI",published:!0,url:"https://github.com/edpacca-cydar/spotify-cmd",year:2022,description:"Bash scripted Command Line Interface leveraging the Spotify Dev API to play and manage songs and playlists."}],X={version:qt,date:Wt,profile:Jt,summary:Yt,urls:Zt,skills:Ft,references:Kt,education:Qt,experience:Xt,projects:xt};function en(t){let e,n,i;return{c(){e=u("div"),n=u("p"),i=L(t[0]),m(e,"class","about")},m(l,s){b(l,e,s),f(e,n),f(n,i)},p(l,[s]){s&1&&R(i,l[0])},i:H,o:H,d(l){l&&v(e)}}}function tn(t,e,n){let{summary:i}=e;return t.$$set=l=>{"summary"in l&&n(0,i=l.summary)},[i]}class nn extends Y{constructor(e){super(),J(this,e,tn,en,W,{summary:0})}}function ye(t){return`{${t.join(", ").trimEnd()}}`}function Oe(t,e,n){const i=t.slice();return i[1]=e[n],i[3]=n,i}function Ge(t,e,n){const i=t.slice();return i[4]=e[n],i}function $e(t){let e,n=ye(t[4].skills)+"",i;return{c(){e=u("span"),i=L(n),m(e,"class","highlighted one-line")},m(l,s){b(l,e,s),f(e,i)},p(l,s){s&1&&n!==(n=ye(l[4].skills)+"")&&R(i,n)},d(l){l&&v(e)}}}function Be(t){let e,n=t[4].note+"",i,l,s,r=t[4].skills&&$e(t);return{c(){e=u("li"),i=L(n),l=C(),r&&r.c(),s=C()},m(a,o){b(a,e,o),f(e,i),f(e,l),r&&r.m(e,null),f(e,s)},p(a,o){o&1&&n!==(n=a[4].note+"")&&R(i,n),a[4].skills?r?r.p(a,o):(r=$e(a),r.c(),r.m(e,s)):r&&(r.d(1),r=null)},d(a){a&&v(e),r&&r.d()}}}function Ue(t){let e;return{c(){e=u("hr"),m(e,"class","thin")},m(n,i){b(n,e,i)},d(n){n&&v(e)}}}function qe(t){let e,n,i,l,s=t[1].job_title+"",r,a,o,c=t[1].dates+"",d,p,M,P,_=t[1].company+"",k,w,g,A,h,j,G,y,V,N,E=K(t[1].notes),I=[];for(let z=0;z<E.length;z+=1)I[z]=Be(Ge(t,E,z));let S=t[3]<t[0].length-1&&Ue();return{c(){e=u("div"),n=u("div"),i=u("div"),l=u("h3"),r=L(s),a=C(),o=u("div"),d=L(c),p=C(),M=u("div"),P=u("div"),k=L(_),w=C(),g=u("img"),j=C(),G=u("div"),y=u("ul");for(let z=0;z<I.length;z+=1)I[z].c();V=C(),S&&S.c(),N=C(),m(o,"class","date"),m(P,"class","bold"),Ae(g.src,A=`assets/icons/${t[1].icon}`)||m(g,"src",A),m(g,"alt",h=`${t[1].company} logo`),m(g,"class","company-logo svelte-1lynohr"),m(M,"class","company svelte-1lynohr"),m(n,"class","employment-header svelte-1lynohr")},m(z,D){b(z,e,D),f(e,n),f(n,i),f(i,l),f(l,r),f(i,a),f(i,o),f(o,d),f(n,p),f(n,M),f(M,P),f(P,k),f(M,w),f(M,g),f(e,j),f(e,G),f(G,y);for(let T=0;T<I.length;T+=1)I[T]&&I[T].m(y,null);f(e,V),S&&S.m(e,null),f(e,N)},p(z,D){if(D&1&&s!==(s=z[1].job_title+"")&&R(r,s),D&1&&c!==(c=z[1].dates+"")&&R(d,c),D&1&&_!==(_=z[1].company+"")&&R(k,_),D&1&&!Ae(g.src,A=`assets/icons/${z[1].icon}`)&&m(g,"src",A),D&1&&h!==(h=`${z[1].company} logo`)&&m(g,"alt",h),D&1){E=K(z[1].notes);let T;for(T=0;T<E.length;T+=1){const oe=Ge(z,E,T);I[T]?I[T].p(oe,D):(I[T]=Be(oe),I[T].c(),I[T].m(y,null))}for(;T<I.length;T+=1)I[T].d(1);I.length=E.length}z[3]<z[0].length-1?S||(S=Ue(),S.c(),S.m(e,N)):S&&(S.d(1),S=null)},d(z){z&&v(e),se(I,z),S&&S.d()}}}function ln(t){let e,n,i,l=K(t[0]),s=[];for(let r=0;r<l.length;r+=1)s[r]=qe(Oe(t,l,r));return{c(){e=u("h2"),e.textContent="Experience",n=C();for(let r=0;r<s.length;r+=1)s[r].c();i=re()},m(r,a){b(r,e,a),b(r,n,a);for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(r,a);b(r,i,a)},p(r,[a]){if(a&1){l=K(r[0]);let o;for(o=0;o<l.length;o+=1){const c=Oe(r,l,o);s[o]?s[o].p(c,a):(s[o]=qe(c),s[o].c(),s[o].m(i.parentNode,i))}for(;o<s.length;o+=1)s[o].d(1);s.length=l.length}},i:H,o:H,d(r){r&&(v(e),v(n),v(i)),se(s,r)}}}function sn(t,e,n){let{experience:i}=e;return t.$$set=l=>{"experience"in l&&n(0,i=l.experience)},[i]}class rn extends Y{constructor(e){super(),J(this,e,sn,ln,W,{experience:0})}}function We(t,e,n){const i=t.slice();return i[1]=e[n],i[3]=n,i}function Je(t){let e;return{c(){e=L(", ")},m(n,i){b(n,e,i)},d(n){n&&v(e)}}}function Ye(t){let e=t[1]+"",n,i,l=t[3]<t[0].length-1&&Je();return{c(){n=L(e),l&&l.c(),i=re()},m(s,r){b(s,n,r),l&&l.m(s,r),b(s,i,r)},p(s,r){r&1&&e!==(e=s[1]+"")&&R(n,e),s[3]<s[0].length-1?l||(l=Je(),l.c(),l.m(i.parentNode,i)):l&&(l.d(1),l=null)},d(s){s&&(v(n),v(i)),l&&l.d(s)}}}function on(t){let e,n,i,l=K(t[0]),s=[];for(let r=0;r<l.length;r+=1)s[r]=Ye(We(t,l,r));return{c(){e=u("h2"),e.textContent="Skills",n=C(),i=u("div");for(let r=0;r<s.length;r+=1)s[r].c();m(i,"class","skills-container")},m(r,a){b(r,e,a),b(r,n,a),b(r,i,a);for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(i,null)},p(r,[a]){if(a&1){l=K(r[0]);let o;for(o=0;o<l.length;o+=1){const c=We(r,l,o);s[o]?s[o].p(c,a):(s[o]=Ye(c),s[o].c(),s[o].m(i,null))}for(;o<s.length;o+=1)s[o].d(1);s.length=l.length}},i:H,o:H,d(r){r&&(v(e),v(n),v(i)),se(s,r)}}}function an(t,e,n){let{skills:i}=e;return t.$$set=l=>{"skills"in l&&n(0,i=l.skills)},[i]}class cn extends Y{constructor(e){super(),J(this,e,an,on,W,{skills:0})}}function fn(t,{delay:e=0,duration:n=400,easing:i=ft}={}){const l=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:i,css:s=>`opacity: ${s*l}`}}function Ze(t){let e,n,i;return{c(){e=u("div"),n=L(t[1]),me(e,"top",t[4]+"px"),me(e,"left",t[3]+"px"),m(e,"class","tooltip svelte-12125id")},m(l,s){b(l,e,s),f(e,n)},p(l,s){s&2&&R(n,l[1]),s&16&&me(e,"top",l[4]+"px"),s&8&&me(e,"left",l[3]+"px")},i(l){l&&(i||ue(()=>{i=$t(e,fn,{delay:800}),i.start()}))},o:H,d(l){l&&v(e)}}}function un(t){let e,n,i,l,s,r;const a=t[9].default,o=yt(a,t,t[8],null);let c=t[0]&&t[2]&&Ze(t);return{c(){e=u("div"),o&&o.c(),n=C(),c&&c.c(),i=re()},m(d,p){b(d,e,p),o&&o.m(e,null),b(d,n,p),c&&c.m(d,p),b(d,i,p),l=!0,s||(r=[ae(e,"mouseover",t[5]),ae(e,"mouseleave",t[7]),ae(e,"mousemove",t[6]),ae(e,"focus",t[10]),ae(e,"focusout",t[7])],s=!0)},p(d,[p]){o&&o.p&&(!l||p&256)&&kt(o,a,d,d[8],l?wt(a,d[8],p,null):At(d[8]),null),d[0]&&d[2]?c?(c.p(d,p),p&5&&O(c,1)):(c=Ze(d),c.c(),O(c,1),c.m(i.parentNode,i)):c&&(c.d(1),c=null)},i(d){l||(O(o,d),O(c),l=!0)},o(d){$(o,d),l=!1},d(d){d&&(v(e),v(n),v(i)),o&&o.d(d),c&&c.d(d),s=!1,de(r)}}}const ge=10;function dn(t,e,n){let{$$slots:i={},$$scope:l}=e,{text:s=""}=e,{isActive:r=!0}=e,{isHovered:a=!1}=e,o,c;const d=_=>{n(0,a=!0),n(3,o=_.pageX+ge),n(4,c=_.pageY+ge)},p=_=>{n(3,o=_.pageX+ge),n(4,c=_.pageY+ge)},M=()=>{n(0,a=!1)},P=()=>{n(0,a=!0)};return t.$$set=_=>{"text"in _&&n(1,s=_.text),"isActive"in _&&n(2,r=_.isActive),"isHovered"in _&&n(0,a=_.isHovered),"$$scope"in _&&n(8,l=_.$$scope)},[a,s,r,o,c,d,p,M,l,i,P]}class hn extends Y{constructor(e){super(),J(this,e,dn,un,W,{text:1,isActive:2,isHovered:0})}}function mn(t){let e,n,i,l;return{c(){e=u("a"),n=Z("svg"),i=Z("use"),m(i,"href",t[2]),m(n,"class",l=Ne(t[3].class)+" svelte-oeu7yv"),m(n,"viewBox","0 0 100 100"),m(e,"href",t[0]),m(e,"target","_blank"),m(e,"class","svelte-oeu7yv")},m(s,r){b(s,e,r),f(e,n),f(n,i)},p(s,r){r&8&&l!==(l=Ne(s[3].class)+" svelte-oeu7yv")&&m(n,"class",l),r&1&&m(e,"href",s[0])},d(s){s&&v(e)}}}function gn(t){let e,n;return e=new hn({props:{text:t[1],$$slots:{default:[mn]},$$scope:{ctx:t}}}),{c(){q(e.$$.fragment)},m(i,l){B(e,i,l),n=!0},p(i,[l]){const s={};l&2&&(s.text=i[1]),l&41&&(s.$$scope={dirty:l,ctx:i}),e.$set(s)},i(i){n||(O(e.$$.fragment,i),n=!0)},o(i){$(e.$$.fragment,i),n=!1},d(i){U(e,i)}}}function pn(t,e,n){let{icon:i}=e,{link:l}=e,{text:s}=e;const r=`assets/icons/icons.svg#${i}`;return t.$$set=a=>{n(3,e=F(F({},e),Q(a))),"icon"in a&&n(4,i=a.icon),"link"in a&&n(0,l=a.link),"text"in a&&n(1,s=a.text)},e=Q(e),[l,s,r,e,i]}class pe extends Y{constructor(e){super(),J(this,e,pn,gn,W,{icon:4,link:0,text:1})}}function Fe(t){let e,n;return{c(){e=Z("title"),n=L(t[1])},m(i,l){b(i,e,l),f(e,n)},p(i,l){l&2&&R(n,i[1])},d(i){i&&v(e)}}}function _n(t){let e,n,i,l=t[1]&&Fe(t),s=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},{width:t[0]},{height:t[0]},t[2],t[3]],r={};for(let a=0;a<s.length;a+=1)r=F(r,s[a]);return{c(){e=Z("svg"),l&&l.c(),n=Z("path"),i=Z("path"),m(n,"d","M24,13H22a3.0033,3.0033,0,0,0-3-3V8A5.0057,5.0057,0,0,1,24,13Z"),m(i,"d","M28 13H26a7.0078 7.0078 0 00-7-7V4A9.01 9.01 0 0128 13zM26 29h-.17C6.18 27.87 3.39 11.29 3 6.23A3 3 0 015.7612 3.0088Q5.88 3 6 3h5.27a2 2 0 011.86 1.26L14.65 8a2 2 0 01-.44 2.16l-2.13 2.15a9.36 9.36 0 007.58 7.6l2.17-2.15A2 2 0 0124 17.35l3.77 1.51A2 2 0 0129 20.72V26A3 3 0 0126 29zM6 5a1 1 0 00-1.0032.9968q0 .0417.0032.0832C5.46 12 8.41 26 25.94 27a1 1 0 001.0582-.9382Q27 26.0309 27 26V20.72l-3.77-1.51-2.87 2.85L19.88 22C11.18 20.91 10 12.21 10 12.12l-.06-.48 2.84-2.87L11.28 5z"),le(e,r)},m(a,o){b(a,e,o),l&&l.m(e,null),f(e,n),f(e,i)},p(a,[o]){a[1]?l?l.p(a,o):(l=Fe(a),l.c(),l.m(e,n)):l&&(l.d(1),l=null),le(e,r=Me(s,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},o&1&&{width:a[0]},o&1&&{height:a[0]},o&4&&a[2],o&8&&a[3]]))},i:H,o:H,d(a){a&&v(e),l&&l.d()}}}function vn(t,e,n){let i,l;const s=["size","title"];let r=ie(e,s),{size:a=16}=e,{title:o=void 0}=e;return t.$$set=c=>{n(5,e=F(F({},e),Q(c))),n(3,r=ie(e,s)),"size"in c&&n(0,a=c.size),"title"in c&&n(1,o=c.title)},t.$$.update=()=>{n(4,i=e["aria-label"]||e["aria-labelledby"]||o),n(2,l={"aria-hidden":i?void 0:!0,role:i?"img":void 0,focusable:Number(e.tabindex)===0?!0:void 0})},e=Q(e),[a,o,l,r,i]}class bn extends Y{constructor(e){super(),J(this,e,vn,_n,W,{size:0,title:1})}}function Ke(t){let e,n;return{c(){e=Z("title"),n=L(t[1])},m(i,l){b(i,e,l),f(e,n)},p(i,l){l&2&&R(n,i[1])},d(i){i&&v(e)}}}function yn(t){let e,n,i=t[1]&&Ke(t),l=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},{width:t[0]},{height:t[0]},t[2],t[3]],s={};for(let r=0;r<l.length;r+=1)s=F(s,l[r]);return{c(){e=Z("svg"),i&&i.c(),n=Z("path"),m(n,"d","M28,6H4A2,2,0,0,0,2,8V24a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V8A2,2,0,0,0,28,6ZM25.8,8,16,14.78,6.2,8ZM4,24V8.91l11.43,7.91a1,1,0,0,0,1.14,0L28,8.91V24Z"),le(e,s)},m(r,a){b(r,e,a),i&&i.m(e,null),f(e,n)},p(r,[a]){r[1]?i?i.p(r,a):(i=Ke(r),i.c(),i.m(e,n)):i&&(i.d(1),i=null),le(e,s=Me(l,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},a&1&&{width:r[0]},a&1&&{height:r[0]},a&4&&r[2],a&8&&r[3]]))},i:H,o:H,d(r){r&&v(e),i&&i.d()}}}function wn(t,e,n){let i,l;const s=["size","title"];let r=ie(e,s),{size:a=16}=e,{title:o=void 0}=e;return t.$$set=c=>{n(5,e=F(F({},e),Q(c))),n(3,r=ie(e,s)),"size"in c&&n(0,a=c.size),"title"in c&&n(1,o=c.title)},t.$$.update=()=>{n(4,i=e["aria-label"]||e["aria-labelledby"]||o),n(2,l={"aria-hidden":i?void 0:!0,role:i?"img":void 0,focusable:Number(e.tabindex)===0?!0:void 0})},e=Q(e),[a,o,l,r,i]}class kn extends Y{constructor(e){super(),J(this,e,wn,yn,W,{size:0,title:1})}}function Qe(t){let e,n;return{c(){e=Z("title"),n=L(t[1])},m(i,l){b(i,e,l),f(e,n)},p(i,l){l&2&&R(n,i[1])},d(i){i&&v(e)}}}function An(t){let e,n,i=t[1]&&Qe(t),l=[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},{width:t[0]},{height:t[0]},t[2],t[3]],s={};for(let r=0;r<l.length;r+=1)s=F(s,l[r]);return{c(){e=Z("svg"),i&&i.c(),n=Z("path"),m(n,"d","M16.6123,2.2138a1.01,1.01,0,0,0-1.2427,0L1,13.4194l1.2427,1.5717L4,13.6209V26a2.0041,2.0041,0,0,0,2,2H26a2.0037,2.0037,0,0,0,2-2V13.63L29.7573,15,31,13.4282ZM18,26H14V18h4Zm2,0V18a2.0023,2.0023,0,0,0-2-2H14a2.002,2.002,0,0,0-2,2v8H6V12.0615l10-7.79,10,7.8005V26Z"),le(e,s)},m(r,a){b(r,e,a),i&&i.m(e,null),f(e,n)},p(r,[a]){r[1]?i?i.p(r,a):(i=Qe(r),i.c(),i.m(e,n)):i&&(i.d(1),i=null),le(e,s=Me(l,[{xmlns:"http://www.w3.org/2000/svg"},{viewBox:"0 0 32 32"},{fill:"currentColor"},{preserveAspectRatio:"xMidYMid meet"},a&1&&{width:r[0]},a&1&&{height:r[0]},a&4&&r[2],a&8&&r[3]]))},i:H,o:H,d(r){r&&v(e),i&&i.d()}}}function Cn(t,e,n){let i,l;const s=["size","title"];let r=ie(e,s),{size:a=16}=e,{title:o=void 0}=e;return t.$$set=c=>{n(5,e=F(F({},e),Q(c))),n(3,r=ie(e,s)),"size"in c&&n(0,a=c.size),"title"in c&&n(1,o=c.title)},t.$$.update=()=>{n(4,i=e["aria-label"]||e["aria-labelledby"]||o),n(2,l={"aria-hidden":i?void 0:!0,role:i?"img":void 0,focusable:Number(e.tabindex)===0?!0:void 0})},e=Q(e),[a,o,l,r,i]}class Sn extends Y{constructor(e){super(),J(this,e,Cn,An,W,{size:0,title:1})}}function Pn(t){let e,n,i,l,s=t[0].email+"",r,a,o,c,d,p,M=t[0].phone+"",P,_,k,w,g,A,h=t[0].address+"",j,G;return n=new kn({props:{size:24,class:"icon"}}),c=new bn({props:{size:24,class:"icon"}}),w=new Sn({props:{size:24,class:"icon"}}),{c(){e=u("div"),q(n.$$.fragment),i=C(),l=u("div"),r=L(s),a=C(),o=u("div"),q(c.$$.fragment),d=C(),p=u("div"),P=L(M),_=C(),k=u("div"),q(w.$$.fragment),g=C(),A=u("div"),j=L(h),m(e,"class","contact-info svelte-s1wrqz"),m(o,"class","contact-info svelte-s1wrqz"),m(k,"class","contact-info svelte-s1wrqz")},m(y,V){b(y,e,V),B(n,e,null),f(e,i),f(e,l),f(l,r),b(y,a,V),b(y,o,V),B(c,o,null),f(o,d),f(o,p),f(p,P),b(y,_,V),b(y,k,V),B(w,k,null),f(k,g),f(k,A),f(A,j),G=!0},p(y,[V]){(!G||V&1)&&s!==(s=y[0].email+"")&&R(r,s),(!G||V&1)&&M!==(M=y[0].phone+"")&&R(P,M),(!G||V&1)&&h!==(h=y[0].address+"")&&R(j,h)},i(y){G||(O(n.$$.fragment,y),O(c.$$.fragment,y),O(w.$$.fragment,y),G=!0)},o(y){$(n.$$.fragment,y),$(c.$$.fragment,y),$(w.$$.fragment,y),G=!1},d(y){y&&(v(e),v(a),v(o),v(_),v(k)),U(n),U(c),U(w)}}}function jn(t,e,n){let{profile:i}=e;return t.$$set=l=>{"profile"in l&&n(0,i=l.profile)},[i]}class Mn extends Y{constructor(e){super(),J(this,e,jn,Pn,W,{profile:0})}}function En(t){let e,n,i,l,s,r,a,o,c,d=t[0].name+"",p,M,P,_=t[0].job_title+"",k,w,g,A,h,j,G,y,V,N,E,I,S,z;return A=new pe({props:{icon:"github",link:t[1].github,text:"Github"}}),j=new pe({props:{icon:"linkedin",link:t[1].LinkedIn,text:"LinkedIn"}}),y=new pe({props:{icon:"research-gate",link:t[1].researchGate,text:"Research-gate"}}),N=new pe({props:{icon:"ep-logo",link:t[1].personal,text:"Personal Website"}}),S=new Mn({props:{profile:t[0]}}),{c(){e=u("header"),n=u("img"),l=C(),s=u("div"),r=u("div"),a=u("div"),o=u("div"),c=u("h1"),p=L(d),M=C(),P=u("h3"),k=L(_),w=C(),g=u("div"),q(A.$$.fragment),h=C(),q(j.$$.fragment),G=C(),q(y.$$.fragment),V=C(),q(N.$$.fragment),E=C(),I=u("div"),q(S.$$.fragment),Ae(n.src,i="assets/druid.png")||m(n,"src",i),m(n,"alt","Eddie Pace"),m(n,"class","profile-img svelte-1olwmyv"),m(c,"class","svelte-1olwmyv"),m(o,"class","header-title svelte-1olwmyv"),m(g,"class","portfolio svelte-1olwmyv"),m(I,"class","contact-container svelte-1olwmyv"),m(r,"class","header-info-container svelte-1olwmyv"),m(e,"class","svelte-1olwmyv")},m(D,T){b(D,e,T),f(e,n),f(e,l),f(e,s),f(s,r),f(r,a),f(a,o),f(o,c),f(c,p),f(o,M),f(o,P),f(P,k),f(a,w),f(a,g),B(A,g,null),f(g,h),B(j,g,null),f(g,G),B(y,g,null),f(g,V),B(N,g,null),f(r,E),f(r,I),B(S,I,null),z=!0},p(D,[T]){(!z||T&1)&&d!==(d=D[0].name+"")&&R(p,d),(!z||T&1)&&_!==(_=D[0].job_title+"")&&R(k,_);const oe={};T&2&&(oe.link=D[1].github),A.$set(oe);const Ee={};T&2&&(Ee.link=D[1].LinkedIn),j.$set(Ee);const ze={};T&2&&(ze.link=D[1].researchGate),y.$set(ze);const De={};T&2&&(De.link=D[1].personal),N.$set(De);const Le={};T&1&&(Le.profile=D[0]),S.$set(Le)},i(D){z||(O(A.$$.fragment,D),O(j.$$.fragment,D),O(y.$$.fragment,D),O(N.$$.fragment,D),O(S.$$.fragment,D),z=!0)},o(D){$(A.$$.fragment,D),$(j.$$.fragment,D),$(y.$$.fragment,D),$(N.$$.fragment,D),$(S.$$.fragment,D),z=!1},d(D){D&&v(e),U(A),U(j),U(y),U(N),U(S)}}}function zn(t,e,n){let{profile:i}=e,{urls:l}=e;return t.$$set=s=>{"profile"in s&&n(0,i=s.profile),"urls"in s&&n(1,l=s.urls)},[i,l]}class Dn extends Y{constructor(e){super(),J(this,e,zn,En,W,{profile:0,urls:1})}}function Xe(t,e,n){const i=t.slice();return i[1]=e[n],i[3]=n,i}function xe(t,e,n){const i=t.slice();return i[4]=e[n],i}function et(t){let e,n=t[1].grade+"",i;return{c(){e=u("div"),i=L(n),m(e,"class","grade svelte-1srxsha")},m(l,s){b(l,e,s),f(e,i)},p(l,s){s&1&&n!==(n=l[1].grade+"")&&R(i,n)},d(l){l&&v(e)}}}function tt(t){let e,n=t[4]+"",i,l;return{c(){e=u("li"),i=L(n),l=C()},m(s,r){b(s,e,r),f(e,i),f(e,l)},p(s,r){r&1&&n!==(n=s[4]+"")&&R(i,n)},d(s){s&&v(e)}}}function nt(t){let e,n,i,l,s=t[1].degree+"",r,a,o,c,d=t[1].awarding_body+"",p,M,P=t[1].country+"",_,k,w,g=t[1].years+"",A,h,j,G,y=t[1].grade&&et(t),V=K(t[1].departments),N=[];for(let E=0;E<V.length;E+=1)N[E]=tt(xe(t,V,E));return{c(){e=u("div"),n=u("div"),i=u("div"),l=u("h3"),r=L(s),a=C(),y&&y.c(),o=C(),c=u("div"),p=L(d),M=L(`,
                    `),_=L(P),k=C(),w=u("div"),A=L(g),h=C(),j=u("ul");for(let E=0;E<N.length;E+=1)N[E].c();G=C(),m(i,"class","degree-header svelte-1srxsha"),m(c,"class","bold"),m(w,"class","date tight"),m(j,"class","depts"),m(e,"class","degree-container svelte-1srxsha")},m(E,I){b(E,e,I),f(e,n),f(n,i),f(i,l),f(l,r),f(i,a),y&&y.m(i,null),f(n,o),f(n,c),f(c,p),f(c,M),f(c,_),f(n,k),f(n,w),f(w,A),f(e,h),f(e,j);for(let S=0;S<N.length;S+=1)N[S]&&N[S].m(j,null);f(e,G)},p(E,I){if(I&1&&s!==(s=E[1].degree+"")&&R(r,s),E[1].grade?y?y.p(E,I):(y=et(E),y.c(),y.m(i,null)):y&&(y.d(1),y=null),I&1&&d!==(d=E[1].awarding_body+"")&&R(p,d),I&1&&P!==(P=E[1].country+"")&&R(_,P),I&1&&g!==(g=E[1].years+"")&&R(A,g),I&1){V=K(E[1].departments);let S;for(S=0;S<V.length;S+=1){const z=xe(E,V,S);N[S]?N[S].p(z,I):(N[S]=tt(z),N[S].c(),N[S].m(j,null))}for(;S<N.length;S+=1)N[S].d(1);N.length=V.length}},d(E){E&&v(e),y&&y.d(),se(N,E)}}}function Ln(t){let e,n,i,l=K(t[0]),s=[];for(let r=0;r<l.length;r+=1)s[r]=nt(Xe(t,l,r));return{c(){e=u("h2"),e.textContent="Education",n=C(),i=u("div");for(let r=0;r<s.length;r+=1)s[r].c();m(i,"class","education-container svelte-1srxsha")},m(r,a){b(r,e,a),b(r,n,a),b(r,i,a);for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(i,null)},p(r,[a]){if(a&1){l=K(r[0]);let o;for(o=0;o<l.length;o+=1){const c=Xe(r,l,o);s[o]?s[o].p(c,a):(s[o]=nt(c),s[o].c(),s[o].m(i,null))}for(;o<s.length;o+=1)s[o].d(1);s.length=l.length}},i:H,o:H,d(r){r&&(v(e),v(n),v(i)),se(s,r)}}}function In(t,e,n){let{education:i}=e;return t.$$set=l=>{"education"in l&&n(0,i=l.education)},[i]}class Nn extends Y{constructor(e){super(),J(this,e,In,Ln,W,{education:0})}}function it(t,e,n){const i=t.slice();return i[1]=e[n],i[3]=n,i}function lt(t){let e,n,i,l=t[1].name+"",s,r,a,o,c,d=t[1].description+"",p,M,P,_,k=t[1].year&&st(t),w=t[1].url&&rt(t),g=t[1].tech&&ot(t),A=t[3]<t[0].length-1&&at();return{c(){e=u("div"),n=u("div"),i=u("h3"),s=L(l),r=C(),k&&k.c(),a=C(),w&&w.c(),o=C(),c=u("div"),p=L(d),M=C(),g&&g.c(),P=C(),A&&A.c(),_=re(),m(n,"class","projects-header svelte-1fyncwg")},m(h,j){b(h,e,j),f(e,n),f(n,i),f(i,s),f(n,r),k&&k.m(n,null),f(n,a),w&&w.m(n,null),f(e,o),f(e,c),f(c,p),f(c,M),g&&g.m(c,null),b(h,P,j),A&&A.m(h,j),b(h,_,j)},p(h,j){j&1&&l!==(l=h[1].name+"")&&R(s,l),h[1].year?k?k.p(h,j):(k=st(h),k.c(),k.m(n,a)):k&&(k.d(1),k=null),h[1].url?w?w.p(h,j):(w=rt(h),w.c(),w.m(n,null)):w&&(w.d(1),w=null),j&1&&d!==(d=h[1].description+"")&&R(p,d),h[1].tech?g?g.p(h,j):(g=ot(h),g.c(),g.m(c,null)):g&&(g.d(1),g=null),h[3]<h[0].length-1?A||(A=at(),A.c(),A.m(_.parentNode,_)):A&&(A.d(1),A=null)},d(h){h&&(v(e),v(P),v(_)),k&&k.d(),w&&w.d(),g&&g.d(),A&&A.d(h)}}}function st(t){let e,n=t[1].year+"",i;return{c(){e=u("span"),i=L(n),m(e,"class","date")},m(l,s){b(l,e,s),f(e,i)},p(l,s){s&1&&n!==(n=l[1].year+"")&&R(i,n)},d(l){l&&v(e)}}}function rt(t){let e,n=t[1].url+"",i,l;return{c(){e=u("a"),i=L(n),m(e,"href",l=t[1].url),m(e,"class","svelte-1fyncwg")},m(s,r){b(s,e,r),f(e,i)},p(s,r){r&1&&n!==(n=s[1].url+"")&&R(i,n),r&1&&l!==(l=s[1].url)&&m(e,"href",l)},d(s){s&&v(e)}}}function ot(t){let e,n=ye(t[1].tech)+"",i;return{c(){e=u("span"),i=L(n),m(e,"class","highlighted one-line")},m(l,s){b(l,e,s),f(e,i)},p(l,s){s&1&&n!==(n=ye(l[1].tech)+"")&&R(i,n)},d(l){l&&v(e)}}}function at(t){let e;return{c(){e=u("hr"),m(e,"class","thin")},m(n,i){b(n,e,i)},d(n){n&&v(e)}}}function ct(t){let e,n=t[1].published&&lt(t);return{c(){n&&n.c(),e=re()},m(i,l){n&&n.m(i,l),b(i,e,l)},p(i,l){i[1].published?n?n.p(i,l):(n=lt(i),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(i){i&&v(e),n&&n.d(i)}}}function Tn(t){let e,n,i,l=K(t[0]),s=[];for(let r=0;r<l.length;r+=1)s[r]=ct(it(t,l,r));return{c(){e=u("h2"),e.textContent="Projects",n=C();for(let r=0;r<s.length;r+=1)s[r].c();i=re()},m(r,a){b(r,e,a),b(r,n,a);for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(r,a);b(r,i,a)},p(r,[a]){if(a&1){l=K(r[0]);let o;for(o=0;o<l.length;o+=1){const c=it(r,l,o);s[o]?s[o].p(c,a):(s[o]=ct(c),s[o].c(),s[o].m(i.parentNode,i))}for(;o<s.length;o+=1)s[o].d(1);s.length=l.length}},i:H,o:H,d(r){r&&(v(e),v(n),v(i)),se(s,r)}}}function Rn(t,e,n){let{projects:i}=e;return t.$$set=l=>{"projects"in l&&n(0,i=l.projects)},[i]}class Hn extends Y{constructor(e){super(),J(this,e,Rn,Tn,W,{projects:0})}}function Vn(t){let e,n,i,l,s,r,a,o,c,d,p,M,P,_,k,w,g,A;return n=new Dn({props:{profile:X.profile,urls:X.urls}}),l=new nn({props:{summary:X.summary}}),o=new cn({props:{skills:X.skills}}),p=new rn({props:{experience:X.experience}}),_=new Nn({props:{education:X.education}}),g=new Hn({props:{projects:X.projects}}),{c(){e=u("main"),q(n.$$.fragment),i=C(),q(l.$$.fragment),s=C(),r=u("div"),a=u("section"),q(o.$$.fragment),c=C(),d=u("section"),q(p.$$.fragment),M=C(),P=u("section"),q(_.$$.fragment),k=C(),w=u("section"),q(g.$$.fragment),m(a,"class","svelte-6lgs9h"),m(d,"class","svelte-6lgs9h"),m(P,"class","svelte-6lgs9h"),m(w,"class","svelte-6lgs9h"),m(r,"class","")},m(h,j){b(h,e,j),B(n,e,null),f(e,i),B(l,e,null),f(e,s),f(e,r),f(r,a),B(o,a,null),f(r,c),f(r,d),B(p,d,null),f(r,M),f(r,P),B(_,P,null),f(r,k),f(r,w),B(g,w,null),A=!0},p:H,i(h){A||(O(n.$$.fragment,h),O(l.$$.fragment,h),O(o.$$.fragment,h),O(p.$$.fragment,h),O(_.$$.fragment,h),O(g.$$.fragment,h),A=!0)},o(h){$(n.$$.fragment,h),$(l.$$.fragment,h),$(o.$$.fragment,h),$(p.$$.fragment,h),$(_.$$.fragment,h),$(g.$$.fragment,h),A=!1},d(h){h&&v(e),U(n),U(l),U(o),U(p),U(_),U(g)}}}class On extends Y{constructor(e){super(),J(this,e,null,Vn,W,{})}}new On({target:document.getElementById("app")});