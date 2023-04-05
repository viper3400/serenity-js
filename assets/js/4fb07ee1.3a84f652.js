"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[54455],{30876:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),f=a,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||o;return r?n.createElement(d,c(c({ref:t},p),{},{components:r})):n.createElement(d,c({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5546:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(7896),a=(r(2784),r(30876));const o={date:"2022-06-06T20:00",title:"3.0.0-rc.18",tags:["core","deps"]},c="3.0.0-rc.18",i={permalink:"/changelog/3.0.0-rc.18",source:"@site/changelog/source/3.0.0-rc.18.md",title:"3.0.0-rc.18",description:"Summary",date:"2022-06-06T20:00:00.000Z",formattedDate:"June 6, 2022",tags:[{label:"core",permalink:"/changelog/tags/core"},{label:"deps",permalink:"/changelog/tags/deps"}],hasTruncateMarker:!1,authors:[],frontMatter:{date:"2022-06-06T20:00",title:"3.0.0-rc.18",tags:["core","deps"]},prevItem:{title:"3.0.0-rc.19",permalink:"/changelog/3.0.0-rc.19"},nextItem:{title:"3.0.0-rc.17",permalink:"/changelog/3.0.0-rc.17"},listPageLink:"/changelog/page/31"},s={authorsImageUrls:[]},l=[{value:"Summary",id:"summary",level:2},{value:"Bug Fixes",id:"bug-fixes",level:2},{value:"Features",id:"features",level:2}],p={toc:l},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"This release introduces improvements to\nthe following Serenity/JS modules:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/core"},(0,a.kt)("inlineCode",{parentName:"a"},"@serenity-js/core")))),(0,a.kt)("p",null,"View detailed ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/compare/v2.33.9...v3.0.0-rc.18"},"code diff")," on GitHub"),(0,a.kt)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"deps:")," updated error-stack-parser to 2.1.0 (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/e57957b7739cd84c35b125552a78586cb2d4f2bf"},"e57957b"),"), closes ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/stacktracejs/error-stack-parser/issues/75"},"stacktracejs/error-stack-parser#75")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"deps:")," updated tiny-types (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/f1951cf753df3807b5778d116f8e8bc3f24830a7"},"f1951cf"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"deps:")," updated tiny-types to 1.18.2 (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/83a651c4c2f3f8dbaabcdacba94c720efdff45dd"},"83a651c"),")")),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"core:")," further improvements to Notepad (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/c0d4c0a8cdbc38274d2b27f48337742be3322b12"},"c0d4c0a"),"), closes ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1220"},"#1220"))))}m.isMDXComponent=!0}}]);