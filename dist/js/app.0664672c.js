(function(){"use strict";var e={804:function(e,n,o){var t=o(751),r=o(641);function i(e,n){const o=(0,r.g2)("router-link"),t=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.Lk)("nav",null,[(0,r.bF)(o,{to:"/"},{default:(0,r.k6)((()=>[(0,r.eW)("Home")])),_:1}),(0,r.eW)(" | "),(0,r.bF)(o,{to:"/about"},{default:(0,r.k6)((()=>[(0,r.eW)("About")])),_:1})]),(0,r.bF)(t)],64)}var u=o(262);const a={},c=(0,u.A)(a,[["render",i]]);var f=c,s=o(723);(0,s.k)("/REPO_NAME/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var l=o(220);const d={class:"home"};function p(e,n,o,t,i,u){const a=(0,r.g2)("VuePdfEmbed");return(0,r.uX)(),(0,r.CE)("div",d,[(0,r.bF)(a,{ref:"pdfRef",source:i.pdfSource},null,8,["source"])])}var v=o(287),b={name:"HomeView",components:{VuePdfEmbed:v.A},data(){return{pdfSource:"https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf"}}};const m=(0,u.A)(b,[["render",p]]);var h=m;const g=[{path:"/",name:"home",component:h},{path:"/about",name:"about",component:()=>o.e(594).then(o.bind(o,603))}],y=(0,l.aE)({history:(0,l.LA)("/REPO_NAME/"),routes:g});var k=y,w=o(278),E=(0,w.y$)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,t.Ef)(f).use(E).use(k).mount("#app")}},n={};function o(t){var r=n[t];if(void 0!==r)return r.exports;var i=n[t]={exports:{}};return e[t](i,i.exports,o),i.exports}o.m=e,function(){var e=[];o.O=function(n,t,r,i){if(!t){var u=1/0;for(s=0;s<e.length;s++){t=e[s][0],r=e[s][1],i=e[s][2];for(var a=!0,c=0;c<t.length;c++)(!1&i||u>=i)&&Object.keys(o.O).every((function(e){return o.O[e](t[c])}))?t.splice(c--,1):(a=!1,i<u&&(u=i));if(a){e.splice(s--,1);var f=r();void 0!==f&&(n=f)}}return n}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[t,r,i]}}(),function(){o.d=function(e,n){for(var t in n)o.o(n,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(n,t){return o.f[t](e,n),n}),[]))}}(),function(){o.u=function(e){return"js/about.7d62706c.js"}}(),function(){o.miniCssF=function(e){}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="hello-pdf:";o.l=function(t,r,i,u){if(e[t])e[t].push(r);else{var a,c;if(void 0!==i)for(var f=document.getElementsByTagName("script"),s=0;s<f.length;s++){var l=f[s];if(l.getAttribute("src")==t||l.getAttribute("data-webpack")==n+i){a=l;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,o.nc&&a.setAttribute("nonce",o.nc),a.setAttribute("data-webpack",n+i),a.src=t),e[t]=[r];var d=function(n,o){a.onerror=a.onload=null,clearTimeout(p);var r=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((function(e){return e(o)})),n)return n(o)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/REPO_NAME/"}(),function(){var e={524:0};o.f.j=function(n,t){var r=o.o(e,n)?e[n]:void 0;if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(o,t){r=e[n]=[o,t]}));t.push(r[2]=i);var u=o.p+o.u(n),a=new Error,c=function(t){if(o.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var i=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.src;a.message="Loading chunk "+n+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,r[1](a)}};o.l(u,c,"chunk-"+n,n)}},o.O.j=function(n){return 0===e[n]};var n=function(n,t){var r,i,u=t[0],a=t[1],c=t[2],f=0;if(u.some((function(n){return 0!==e[n]}))){for(r in a)o.o(a,r)&&(o.m[r]=a[r]);if(c)var s=c(o)}for(n&&n(t);f<u.length;f++)i=u[f],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(s)},t=self["webpackChunkhello_pdf"]=self["webpackChunkhello_pdf"]||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var t=o.O(void 0,[504],(function(){return o(804)}));t=o.O(t)})();
//# sourceMappingURL=app.0664672c.js.map