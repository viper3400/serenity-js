"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[61599],{30876:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(2784);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),o=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=o(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=o(r),d=n,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return r?a.createElement(f,s(s({ref:t},p),{},{components:r})):a.createElement(f,s({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:n,s[1]=l;for(var o=2;o<i;o++)s[o]=r[o];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},18034:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var a=r(7896),n=(r(2784),r(30876));const i={date:"2022-12-18T20:00",title:"3.0.0-rc.37",tags:["cucumber","deps","playwright","rest","web"]},s="3.0.0-rc.37",l={permalink:"/changelog/3.0.0-rc.37",source:"@site/changelog/source/3.0.0-rc.37.md",title:"3.0.0-rc.37",description:"Summary",date:"2022-12-18T20:00:00.000Z",formattedDate:"December 18, 2022",tags:[{label:"cucumber",permalink:"/changelog/tags/cucumber"},{label:"deps",permalink:"/changelog/tags/deps"},{label:"playwright",permalink:"/changelog/tags/playwright"},{label:"rest",permalink:"/changelog/tags/rest"},{label:"web",permalink:"/changelog/tags/web"}],hasTruncateMarker:!1,authors:[],frontMatter:{date:"2022-12-18T20:00",title:"3.0.0-rc.37",tags:["cucumber","deps","playwright","rest","web"]},prevItem:{title:"3.0.0-rc.38",permalink:"/changelog/3.0.0-rc.38"},nextItem:{title:"3.0.0-rc.36",permalink:"/changelog/3.0.0-rc.36"},listPageLink:"/changelog/page/12"},c={authorsImageUrls:[]},o=[{value:"Summary",id:"summary",level:2},{value:"Bug Fixes",id:"bug-fixes",level:2},{value:"Features",id:"features",level:2}],p={toc:o},m="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("p",null,"This release addresses ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/issues/1416"},"#1416"),", ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/issues/1421"},"#1421")," and introduces improvements to\nthe following Serenity/JS modules:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/cucumber"},(0,n.kt)("inlineCode",{parentName:"a"},"@serenity-js/cucumber"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/playwright"},(0,n.kt)("inlineCode",{parentName:"a"},"@serenity-js/playwright"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/rest"},(0,n.kt)("inlineCode",{parentName:"a"},"@serenity-js/rest"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/api/web"},(0,n.kt)("inlineCode",{parentName:"a"},"@serenity-js/web")))),(0,n.kt)("p",null,"View detailed ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/compare/v3.0.0-rc.36...v3.0.0-rc.37"},"code diff")," on GitHub"),(0,n.kt)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"deps:")," update core dependencies to v5 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/7c44d5a6b498c034a5f55a4ae0b787f8ec2b5569"},"7c44d5a"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"deps:")," update serenity bdd dependencies (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/51af1fc1b104cd3821e2e807b1cf8c90fdb3b418"},"51af1fc"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"deps:")," update website dependencies (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/9be2176e66369d53647e81c82c0227d0cddfe2b6"},"9be2176"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"web:")," support for setting cookies using async or partially async data (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/ec8a65d9e3c1e2eb311d14eb32f1de9e26b5879b"},"ec8a65d"),"), closes ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1421"},"#1421"))),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"cucumber:")," support reporting named hooks (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/426f68ded6b9b10c08ee3ed5668754e1c6dac298"},"426f68d"),"), closes ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/1416"},"#1416")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"playwright:")," support for Playwright 1.29.0 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/3dd0635d66df2571fb6d8d3e43d3feed71462da9"},"3dd0635"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"rest:")," support for Axios 1.2.1 (",(0,n.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/b1ab268319b6e165f051be8382cb5945ca6d1944"},"b1ab268"),")")))}u.isMDXComponent=!0}}]);