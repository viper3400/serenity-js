"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[12345],{30876:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(2784);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},l="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=s(r),m=o,h=l["".concat(c,".").concat(m)]||l[m]||b[m]||a;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[l]="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},82038:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>b,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var n=r(7896),o=(r(2784),r(30876));const a={slug:"support-for-webdriverio-8",title:"Support for WebdriverIO 8",authors:["jan-molak"],tags:["web","webdriverio","open-source"]},i=void 0,p={permalink:"/blog/support-for-webdriverio-8",editUrl:"https://github.com/serenity-js/serenity-js/tree/main/documentation/serenity-js.org/blog/2023-05-10-support-for-webdriverio-8/index.md",source:"@site/blog/2023-05-10-support-for-webdriverio-8/index.md",title:"Support for WebdriverIO 8",description:"WebdriverIO Roboter",date:"2023-05-10T00:00:00.000Z",formattedDate:"May 10, 2023",tags:[{label:"web",permalink:"/blog/tags/web"},{label:"webdriverio",permalink:"/blog/tags/webdriverio"},{label:"open-source",permalink:"/blog/tags/open-source"}],readingTime:5.505,hasTruncateMarker:!0,authors:[{name:"Jan Molak",url:"https://github.com/jan-molak",imageURL:"https://github.com/jan-molak.png",key:"jan-molak"}],frontMatter:{slug:"support-for-webdriverio-8",title:"Support for WebdriverIO 8",authors:["jan-molak"],tags:["web","webdriverio","open-source"]},nextItem:{title:"Test Automation Summit, Berlin 2022",permalink:"/blog/test-automation-summit-berlin"}},c={authorsImageUrls:[void 0]},s=[],u={toc:s},l="wrapper";function b(e){let{components:t,...a}=e;return(0,o.kt)(l,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"WebdriverIO Roboter",src:r(4489).Z,width:"242",height:"283"})),(0,o.kt)("p",null,"Serenity/JS started to support WebdriverIO in version 2.30.0. "),(0,o.kt)("p",null,"In version 3.0.0, Serenity/JS brought you ",(0,o.kt)("a",{parentName:"p",href:"/handbook/web-testing/"},(0,o.kt)("inlineCode",{parentName:"a"},"@serenity-js/web"))," - a portable abstraction\nlayer that lets you run the exact same web scenario with ",(0,o.kt)("a",{parentName:"p",href:"/api/webdriverio"},"WebdriverIO"),", ",(0,o.kt)("a",{parentName:"p",href:"/api/playwright"},"Playwright"),", and even ",(0,o.kt)("a",{parentName:"p",href:"/api/protractor"},"Protractor"),"!"),(0,o.kt)("p",null,"Now, we're taking things further with ",(0,o.kt)("a",{parentName:"p",href:"/changelog/3.2.0"},(0,o.kt)("strong",{parentName:"a"},"Serenity/JS 3.2.0"))," introducing support for the latest and greatest ",(0,o.kt)("strong",{parentName:"p"},"WebdriverIO 8"),"! \ud83e\udd73 "),(0,o.kt)("p",null,"In this article, and in ",(0,o.kt)("strong",{parentName:"p"},"less than 5 minutes"),", you'll learn how to ",(0,o.kt)("strong",{parentName:"p"},"integrate Serenity/JS")," with your WebdriverIO test suite, ",(0,o.kt)("strong",{parentName:"p"},"enable Serenity BDD reports"),", and start using the ",(0,o.kt)("strong",{parentName:"p"},"Screenplay Pattern"),"!"))}b.isMDXComponent=!0},4489:(e,t,r)=>{r.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);