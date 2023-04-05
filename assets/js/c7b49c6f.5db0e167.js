"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[81163],{30876:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var a=r(2784);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(r),f=n,g=m["".concat(s,".").concat(f)]||m[f]||u[f]||i;return r?a.createElement(g,l(l({ref:t},p),{},{components:r})):a.createElement(g,l({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},33954:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=r(7896),n=(r(2784),r(30876));const i={date:"2022-11-07T20:00",title:"3.0.0-rc.33",tags:["core","deps","jasmine","playwright"]},l="3.0.0-rc.33",o={permalink:"/changelog/3.0.0-rc.33",source:"@site/changelog/source/3.0.0-rc.33.md",title:"3.0.0-rc.33",description:"Summary",date:"2022-11-07T20:00:00.000Z",formattedDate:"November 7, 2022",tags:[{label:"core",permalink:"/changelog/tags/core"},{label:"deps",permalink:"/changelog/tags/deps"},{label:"jasmine",permalink:"/changelog/tags/jasmine"},{label:"playwright",permalink:"/changelog/tags/playwright"}],hasTruncateMarker:!1,authors:[],frontMatter:{date:"2022-11-07T20:00",title:"3.0.0-rc.33",tags:["core","deps","jasmine","playwright"]},prevItem:{title:"3.0.0-rc.34",permalink:"/changelog/3.0.0-rc.34"},nextItem:{title:"3.0.0-rc.32",permalink:"/changelog/3.0.0-rc.32"},listPageLink:"/changelog/page/16"},s={authorsImageUrls:[]},c=[{value:"Summary",id:"summary",level:2},{value:"Bug Fixes",id:"bug-fixes",level:2}],p={toc:c},m="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("p",null,"This release addresses ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/issues/1344"},"#1344")," and introduces improvements to\nthe following Serenity/JS modules:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/core"},(0,n.kt)("inlineCode",{parentName:"a"},"@serenity-js/core"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/jasmine"},(0,n.kt)("inlineCode",{parentName:"a"},"@serenity-js/jasmine"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/playwright"},(0,n.kt)("inlineCode",{parentName:"a"},"@serenity-js/playwright")))),(0,n.kt)("p",null,"View detailed ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/compare/v3.0.0-rc.32...v3.0.0-rc.33"},"code diff")," on GitHub"),(0,n.kt)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"core:")," allow proxying ",(0,n.kt)("inlineCode",{parentName:"li"},"location")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"description")," fields by ",(0,n.kt)("inlineCode",{parentName:"li"},"QuestionAdapter")," (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/6761685d0cd0f775088d514c3eefbaff4431faa1"},"6761685"),"), closes ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1344"},"#1344")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"deps:")," update dependency fast-glob to ^3.2.12 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/94854a13881b46e11c908f7ff77a5940ac877f26"},"94854a1"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"jasmine:")," remove warn jasmine#addSpecFiles (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/9fef049f07c35992051b0cb27f023aa3b7ae2b9f"},"9fef049"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"playwright:")," updated Playwright to 1.27.1 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/a1fcecc9d1cef1547f17cec5ed605d248060738f"},"a1fcecc"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"playwright:")," upgraded Playwright to 1.27.1 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/1345644dc6c0b4f09ca1f9cfe97a793e226e747c"},"1345644"),")")))}u.isMDXComponent=!0}}]);