if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,o)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const l=e=>i(e,n),c={module:{uri:n},exports:t,require:l};s[n]=Promise.all(r.map((e=>c[e]||l(e)))).then((e=>(o(...e),t)))}}define(["./workbox-6567b62a"],(function(e){"use strict";e.setCacheNameDetails({prefix:"hello-pdf"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/REPO_NAME/css/app.ddbde395.css",revision:null},{url:"/REPO_NAME/img/1.pdf",revision:"46795af50c36602caecebbc96e9e4bda"},{url:"/REPO_NAME/index.html",revision:"84d4bd16699bdef0fe9965ed2df0d22e"},{url:"/REPO_NAME/js/about.7d62706c.js",revision:null},{url:"/REPO_NAME/js/app.0664672c.js",revision:null},{url:"/REPO_NAME/manifest.json",revision:"5096af340bb7c6b5ab4989215a126554"},{url:"/REPO_NAME/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
