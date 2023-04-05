"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[97838],{30876:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,f=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},10632:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7896),a=(r(2784),r(30876));const o={sidebar_position:1},i="Domain Events",s={unversionedId:"reporting/domain-events",id:"reporting/domain-events",title:"Domain Events",description:"Serenity/JS domain events represent all the important things that happen during the execution of your test suite.",source:"@site/docs/reporting/domain-events.mdx",sourceDirName:"reporting",slug:"/reporting/domain-events",permalink:"/handbook/reporting/domain-events",draft:!1,editUrl:"https://github.com/serenity-js/serenity-js/tree/main/documentation/serenity-js.org/docs/reporting/domain-events.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Reporting",permalink:"/handbook/reporting/"},next:{title:"Console Reporter",permalink:"/handbook/reporting/console-reporter"}},p={},c=[],l={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"domain-events"},"Domain Events"),(0,a.kt)("p",null,"Serenity/JS ",(0,a.kt)("a",{parentName:"p",href:"/api/core-events/class/DomainEvent"},"domain events")," represent all the important things that happen during the execution of your test suite.\nThey are a critical part of the Serenity/JS messaging infrastructure that enables the ",(0,a.kt)("a",{parentName:"p",href:"/handbook/about/architecture"},"loosely coupled, modular architecture"),"\nof the framework, and ensure that all the registered ",(0,a.kt)("a",{parentName:"p",href:"/handbook/reporting/"},"reporting services"),"\nhave the same, consistent picture of your test scenarios."),(0,a.kt)("p",null,"Serenity/JS domain events are produced when ",(0,a.kt)("a",{parentName:"p",href:"/api/core/class/Actor"},"actors")," perform their ",(0,a.kt)("a",{parentName:"p",href:"/api/core/class/Activity"},"activities"),"\nand when ",(0,a.kt)("a",{parentName:"p",href:"/handbook/test-runners/"},"test runner adapters")," translate information about your test runner lifecycle events.\nDomain events are then propagated via the ",(0,a.kt)("a",{parentName:"p",href:"/api/core/class/Stage"},"stage")," and consumed by all\nthe registered ",(0,a.kt)("a",{parentName:"p",href:"/api/core/interface/StageCrewMember"},"stage crew members")," for reporting purposes."),(0,a.kt)("p",null,"You'll typically only need to learn about Serenity/JS domain events when implementing custom reporting services. In this case, you should study:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the ",(0,a.kt)("a",{parentName:"li",href:"/api/core-events/class/DomainEvent"},(0,a.kt)("inlineCode",{parentName:"a"},"@serenity-js/core/lib/events"))," package, to see what domain events are available,"),(0,a.kt)("li",{parentName:"ul"},"built-in implementations of the ",(0,a.kt)("a",{parentName:"li",href:"/api/core/interface/StageCrewMember"},(0,a.kt)("inlineCode",{parentName:"a"},"StageCrewMemeber"))," interface, to see examples of how to work with events.")))}m.isMDXComponent=!0}}]);