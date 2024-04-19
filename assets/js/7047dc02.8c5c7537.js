"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[5776],{82247:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>g});var a=r(14041);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),p=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),y=n,g=u["".concat(o,".").concat(y)]||u[y]||m[y]||i;return r?a.createElement(g,l(l({ref:t},c),{},{components:r})):a.createElement(g,l({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=y;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:n,l[1]=s;for(var p=2;p<i;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},59930:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=r(89575),n=(r(14041),r(82247));const i={date:"2024-04-11T20:00",title:"3.22.0",tags:["cucumber","deps","playwright-test","serenity-bdd"]},l="3.22.0",s={permalink:"/changelog/3.22.0",source:"@site/changelog/source/3.22.0.md",title:"3.22.0",description:"Summary",date:"2024-04-11T20:00:00.000Z",formattedDate:"April 11, 2024",tags:[{label:"cucumber",permalink:"/changelog/tags/cucumber"},{label:"deps",permalink:"/changelog/tags/deps"},{label:"playwright-test",permalink:"/changelog/tags/playwright-test"},{label:"serenity-bdd",permalink:"/changelog/tags/serenity-bdd"}],hasTruncateMarker:!1,authors:[],frontMatter:{date:"2024-04-11T20:00",title:"3.22.0",tags:["cucumber","deps","playwright-test","serenity-bdd"]},prevItem:{title:"3.22.1",permalink:"/changelog/3.22.1"},nextItem:{title:"3.21.2",permalink:"/changelog/3.21.2"},listPageLink:"/changelog/"},o={authorsImageUrls:[]},p=[{value:"Summary",id:"summary",level:2},{value:"Bug Fixes",id:"bug-fixes",level:2},{value:"Features",id:"features",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.yg)(u,(0,a.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"summary"},"Summary"),(0,n.yg)("p",null,"This release introduces improvements to\nthe following Serenity/JS modules:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/api/cucumber"},(0,n.yg)("inlineCode",{parentName:"a"},"@serenity-js/cucumber"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/api/playwright-test"},(0,n.yg)("inlineCode",{parentName:"a"},"@serenity-js/playwright-test"))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/api/serenity-bdd"},(0,n.yg)("inlineCode",{parentName:"a"},"@serenity-js/serenity-bdd")))),(0,n.yg)("p",null,"View detailed ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/compare/v3.21.2...v3.22.0"},"code diff")," on GitHub"),(0,n.yg)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"cucumber:")," support for Cucumber 10.4.0 (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/3aff9218a2854bc41f92f509079086e6cdafe5c2"},"3aff921"),")"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"cucumber:")," updated cucumber/messages to 24.1.0 (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/1ea098b2f912b4a88afabbd67a86e248fd313266"},"1ea098b"),")"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"deps:")," update dependency sass to v1.74.1 (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/a9b73e1f2962628c978a266a94a6ac940a75652a"},"a9b73e1"),")"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"deps:")," update playwright dependencies to v1.43.0 (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/f9a2f9d837765843af76ade9a78f92e32e1d884f"},"f9a2f9d"),")"),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"playwright-test:")," support for Playwright Test 1.43.0 (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/0162b6e0b56e5cbf11ab03326181480b740f24ef"},"0162b6e"),")")),(0,n.yg)("h2",{id:"features"},"Features"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"serenity-bdd:")," support for Serenity BDD 4.1.6 (",(0,n.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/48cbaf6739730fc72b184b115713585cb22fb513"},"48cbaf6"),")")))}m.isMDXComponent=!0}}]);