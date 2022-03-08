import{F as se,S as P,i as R,s as F,e as f,k as I,t as M,c as p,a as m,d as g,m as A,h as S,G as re,b as n,g as te,H as l,I as U,J as ae,v as oe,K as ne,w as W,x as X,y as Z,L as le,M as ie,N as de,q,o as N,B as ee}from"../chunks/vendor-c83dbdae.js";const ue=()=>{const r=se("__svelte__");return{page:{subscribe:r.page.subscribe},navigating:{subscribe:r.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:r.navigating.subscribe}},session:r.session,updated:r.updated}},ge={subscribe(r){return ue().page.subscribe(r)}};function ce(r){let e,a,d,s,i,c,v,h,o,t,u,w,B,y,$,C,D,H,E,x,L,V;return{c(){e=f("header"),a=f("div"),d=f("div"),s=f("a"),i=f("img"),v=I(),h=f("div"),o=f("a"),t=f("div"),u=M("Home"),B=I(),y=f("a"),$=f("div"),C=M("Projects"),H=I(),E=f("a"),x=f("div"),L=M("About"),this.h()},l(b){e=p(b,"HEADER",{class:!0});var _=m(e);a=p(_,"DIV",{id:!0,class:!0});var j=m(a);d=p(j,"DIV",{class:!0});var G=m(d);s=p(G,"A",{href:!0});var T=m(s);i=p(T,"IMG",{src:!0,alt:!0,class:!0}),T.forEach(g),G.forEach(g),v=A(j),h=p(j,"DIV",{class:!0});var k=m(h);o=p(k,"A",{href:!0});var J=m(o);t=p(J,"DIV",{class:!0});var K=m(t);u=S(K,"Home"),K.forEach(g),J.forEach(g),B=A(k),y=p(k,"A",{href:!0});var Y=m(y);$=p(Y,"DIV",{class:!0});var z=m($);C=S(z,"Projects"),z.forEach(g),Y.forEach(g),H=A(k),E=p(k,"A",{href:!0});var O=m(E);x=p(O,"DIV",{class:!0});var Q=m(x);L=S(Q,"About"),Q.forEach(g),O.forEach(g),k.forEach(g),j.forEach(g),_.forEach(g),this.h()},h(){re(i.src,c="/transparentx.png")||n(i,"src",c),n(i,"alt","transparent legusx logo"),n(i,"class","rounded-full"),n(s,"href","/"),n(d,"class","w-14 m-2 rounded-ful p-1 place-self-start "),n(t,"class",w="px-4 py-2 mr-8 "+(r[0].url.pathname==="/"?"rounded-md bg-white text-logo-blue":"ring-offset-1 ring-0 ring-white rounded-md transition-all bg-white/0 hover:bg-logo-dark/40 hover:px-6")),n(o,"href","/"),n($,"class",D="px-4 py-2 mr-8 "+(r[0].url.pathname==="/projects"?"rounded-md bg-white text-logo-blue":"ring-offset-1 ring-0 ring-white rounded-md transition-all bg-white/0 hover:bg-logo-dark/40 hover:px-6")),n(y,"href","/projects"),n(x,"class",V="px-4 py-2 mr-8 "+(r[0].url.pathname==="/about"?"rounded-md bg-white text-logo-blue":"ring-offset-1 ring-0 ring-white rounded-md transition-all bg-white/0 hover:bg-logo-dark/40 hover:px-6")),n(E,"href","/about"),n(h,"class","justify-end flex w-full"),n(a,"id","overlay"),n(a,"class","transition-colors w-full flex items-center"),n(e,"class","w-full text-white sticky top-0")},m(b,_){te(b,e,_),l(e,a),l(a,d),l(d,s),l(s,i),l(a,v),l(a,h),l(h,o),l(o,t),l(t,u),l(h,B),l(h,y),l(y,$),l($,C),l(h,H),l(h,E),l(E,x),l(x,L)},p(b,[_]){_&1&&w!==(w="px-4 py-2 mr-8 "+(b[0].url.pathname==="/"?"rounded-md bg-white text-logo-blue":"ring-offset-1 ring-0 ring-white rounded-md transition-all bg-white/0 hover:bg-logo-dark/40 hover:px-6"))&&n(t,"class",w),_&1&&D!==(D="px-4 py-2 mr-8 "+(b[0].url.pathname==="/projects"?"rounded-md bg-white text-logo-blue":"ring-offset-1 ring-0 ring-white rounded-md transition-all bg-white/0 hover:bg-logo-dark/40 hover:px-6"))&&n($,"class",D),_&1&&V!==(V="px-4 py-2 mr-8 "+(b[0].url.pathname==="/about"?"rounded-md bg-white text-logo-blue":"ring-offset-1 ring-0 ring-white rounded-md transition-all bg-white/0 hover:bg-logo-dark/40 hover:px-6"))&&n(x,"class",V)},i:U,o:U,d(b){b&&g(e)}}}function he(r,e,a){let d;return ae(r,ge,s=>a(0,d=s)),oe(()=>{let s=document.getElementsByTagName("header")[0],i=document.getElementById("overlay"),c=0;window.onscroll=()=>{c===0&&(c="-"+window.getComputedStyle(window.div).marginTop,s.style.backgroundPositionY=c),window.div.getBoundingClientRect().top>s.getBoundingClientRect().height?(s.classList.remove("bg-[url(/xbg.png)]"),i.classList.remove("bg-logo-dark/50")):(s.classList.add("bg-[url(/xbg.png)]"),i.classList.add("bg-logo-dark/50"))}}),[d]}class fe extends P{constructor(e){super();R(this,e,he,ce,F,{})}}class pe extends P{constructor(e){super();R(this,e,null,null,F,{})}}function me(r){let e,a,d,s,i,c,v;a=new fe({});const h=r[1].default,o=ne(h,r,r[0],null);return c=new pe({}),{c(){e=f("div"),W(a.$$.fragment),d=I(),s=f("main"),o&&o.c(),i=I(),W(c.$$.fragment),this.h()},l(t){e=p(t,"DIV",{class:!0});var u=m(e);X(a.$$.fragment,u),d=A(u),s=p(u,"MAIN",{class:!0});var w=m(s);o&&o.l(w),w.forEach(g),i=A(u),X(c.$$.fragment,u),u.forEach(g),this.h()},h(){n(s,"class",""),n(e,"class","bg-[url(/xbg.png)] bg-no-repeat")},m(t,u){te(t,e,u),Z(a,e,null),l(e,d),l(e,s),o&&o.m(s,null),l(e,i),Z(c,e,null),v=!0},p(t,[u]){o&&o.p&&(!v||u&1)&&le(o,h,t,t[0],v?de(h,t[0],u,null):ie(t[0]),null)},i(t){v||(q(a.$$.fragment,t),q(o,t),q(c.$$.fragment,t),v=!0)},o(t){N(a.$$.fragment,t),N(o,t),N(c.$$.fragment,t),v=!1},d(t){t&&g(e),ee(a),o&&o.d(t),ee(c)}}}function ve(r,e,a){let{$$slots:d={},$$scope:s}=e;return r.$$set=i=>{"$$scope"in i&&a(0,s=i.$$scope)},[s,d]}class _e extends P{constructor(e){super();R(this,e,ve,me,F,{})}}export{_e as default};