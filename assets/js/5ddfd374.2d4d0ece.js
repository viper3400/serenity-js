"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[7664],{82247:(e,t,n)=>{n.d(t,{xA:()=>l,yg:()=>g});var r=n(14041);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),y=o,g=p["".concat(c,".").concat(y)]||p[y]||d[y]||i;return n?r.createElement(g,a(a({ref:t},l),{},{components:n})):r.createElement(g,a({ref:t},l))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=y;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},31107:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=n(89575),o=(n(14041),n(82247));const i={sidebar_position:10,title:"Integration"},a="Integration",s={unversionedId:"integration/index",id:"integration/index",title:"Integration",description:"Serenity/JS integrates with industry-standard test runners, so that your test scenarios can be executed",source:"@site/docs/integration/index.mdx",sourceDirName:"integration",slug:"/integration/",permalink:"/handbook/integration/",draft:!1,editUrl:"https://github.com/serenity-js/serenity-js/tree/main/documentation/serenity-js.org/docs/integration/index.mdx",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,title:"Integration"},sidebar:"docs",previous:{title:"Stream Reporter",permalink:"/handbook/reporting/stream-reporter"},next:{title:"GitHub Actions",permalink:"/handbook/integration/github-actions"}},c={},u=[],l={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.yg)(p,(0,r.A)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"integration"},"Integration"),(0,o.yg)("p",null,"Serenity/JS integrates with ",(0,o.yg)("a",{parentName:"p",href:"/handbook/test-runners/"},"industry-standard test runners"),", so that your test scenarios can be executed\nusing your regular build tools, ",(0,o.yg)("abbr",{title:"Continuous Integration and Delivery"},"CI/CD")," pipelines, and ",(0,o.yg)("abbr",{title:"Integrated Development Environments"},"IDEs"),"."),(0,o.yg)("p",null,"In this chapter, I'll show you how to configure your toolchain to run and debug Serenity/JS test scenarios and report on their results."))}d.isMDXComponent=!0}}]);