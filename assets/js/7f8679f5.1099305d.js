"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[74553],{30876:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),y=a,g=m["".concat(o,".").concat(y)]||m[y]||u[y]||i;return r?n.createElement(g,s(s({ref:t},c),{},{components:r})):n.createElement(g,s({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=y;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[m]="string"==typeof e?e:a,s[1]=l;for(var p=2;p<i;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},50024:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(7896),a=(r(2784),r(30876));const i={date:"2023-07-11T19:00",title:"3.6.0",tags:["deps","playwright-test","web"]},s="3.6.0",l={permalink:"/changelog/3.6.0",source:"@site/changelog/source/3.6.0.md",title:"3.6.0",description:"Summary",date:"2023-07-11T19:00:00.000Z",formattedDate:"July 11, 2023",tags:[{label:"deps",permalink:"/changelog/tags/deps"},{label:"playwright-test",permalink:"/changelog/tags/playwright-test"},{label:"web",permalink:"/changelog/tags/web"}],hasTruncateMarker:!1,authors:[],frontMatter:{date:"2023-07-11T19:00",title:"3.6.0",tags:["deps","playwright-test","web"]},prevItem:{title:"3.6.1",permalink:"/changelog/3.6.1"},nextItem:{title:"3.5.0",permalink:"/changelog/3.5.0"},listPageLink:"/changelog/page/16"},o={authorsImageUrls:[]},p=[{value:"Summary",id:"summary",level:2},{value:"Bug Fixes",id:"bug-fixes",level:2},{value:"Features",id:"features",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"This release addresses ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/issues/1784"},"#1784")," and introduces improvements to\nthe following Serenity/JS modules:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/playwright-test"},(0,a.kt)("inlineCode",{parentName:"a"},"@serenity-js/playwright-test"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/web"},(0,a.kt)("inlineCode",{parentName:"a"},"@serenity-js/web")))),(0,a.kt)("p",null,"View detailed ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/compare/v3.5.0...v3.6.0"},"code diff")," on GitHub"),(0,a.kt)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"deps:")," update dependency https-proxy-agent to ^7.0.1 (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/f49b2931ea3944854cd889a031f245b794b22566"},"f49b293"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"deps:")," update dependency https-proxy-agent to ^7.0.1 (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/9ea4610563d7ce02ebfc42c5746671c5147cf745"},"9ea4610"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"deps:")," update dependency tiny-types to ^1.20.0 (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/6d7bf43c6135968bc90869cb8f9782ed70ca8dd9"},"6d7bf43"),")")),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"playwright-test:")," enable BrowseTheWebWithPlaywright to reuse an existing page instance (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/5c2deb1853f27884fcdaccccc0b1b108c0a8489b"},"5c2deb1"),"), closes ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1784"},"#1784")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"playwright-test:")," introducing Component Testing with Serenity/JS and Playwright Test (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/7b3c6c83d5caa48b4362dee0f30a154f00cb46e2"},"7b3c6c8"),"), closes ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1784"},"#1784")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"web:")," selectors are comparable and serialisable to JSON (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/b2853897e18a1a6693af156844830e8760d1a2b7"},"b285389"),"), closes ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1784"},"#1784")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"web:")," you can now use Serenity/JS Screenplay Pattern APIs for UI component testing (",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/3c9aa4b16d223844116ffcb21d23f9cc8b96a793"},"3c9aa4b"),"), closes ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1784"},"#1784"))))}u.isMDXComponent=!0}}]);