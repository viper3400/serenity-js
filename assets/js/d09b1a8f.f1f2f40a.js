"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[82988],{30876:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(r),f=a,d=p["".concat(s,".").concat(f)]||p[f]||m[f]||o;return r?n.createElement(d,c(c({ref:t},u),{},{components:r})):n.createElement(d,c({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},69105:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(7896),a=(r(2784),r(30876));const o={date:"2023-11-14T20:00",title:"3.13.2",tags:["cucumber","deps"]},c="3.13.2",i={permalink:"/changelog/3.13.2",source:"@site/changelog/source/3.13.2.md",title:"3.13.2",description:"Summary",date:"2023-11-14T20:00:00.000Z",formattedDate:"November 14, 2023",tags:[{label:"cucumber",permalink:"/changelog/tags/cucumber"},{label:"deps",permalink:"/changelog/tags/deps"}],hasTruncateMarker:!1,authors:[],frontMatter:{date:"2023-11-14T20:00",title:"3.13.2",tags:["cucumber","deps"]},nextItem:{title:"3.13.1",permalink:"/changelog/3.13.1"},listPageLink:"/changelog/"},s={authorsImageUrls:[]},l=[{value:"Summary",id:"summary",level:2},{value:"Bug Fixes",id:"bug-fixes",level:2}],u={toc:l},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"This release addresses ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/issues/2060"},"#2060")," and introduces improvements to\nthe following Serenity/JS modules:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/cucumber"},(0,a.kt)("inlineCode",{parentName:"a"},"@serenity-js/cucumber")))),(0,a.kt)("p",null,"View detailed ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/compare/v3.13.1...v3.13.2"},"code diff")," on GitHub"),(0,a.kt)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"cucumber:"),' resolve paths to "imports" as absolute file URLs (',(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/fc9aefcdc2ec8e1dfe3ce38b03a1ff7fd7d3c6c6"},"fc9aefc"),"), closes ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/2060"},"#2060")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"deps:")," update dependency lru-cache to ^10.0.2 (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/b46f93c999fc2dc3e0713e52f8eef9f34d91a283"},"b46f93c"),")")))}m.isMDXComponent=!0}}]);