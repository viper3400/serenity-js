"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[3083],{82247:(e,r,t)=>{t.d(r,{xA:()=>g,yg:()=>m});var n=t(14041);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},g=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,g=p(e,["components","mdxType","originalType","parentName"]),c=l(t),y=o,m=c["".concat(s,".").concat(y)]||c[y]||u[y]||a;return t?n.createElement(m,i(i({ref:r},g),{},{components:t})):n.createElement(m,i({ref:r},g))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=y;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p[c]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},40140:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var n=t(89575),o=(t(14041),t(82247));const a={slug:"support-for-serenity-bdd-4",title:"Support for Serenity BDD 4",authors:["jan-molak"],tags:["web","rest","reporting","jasmine","mocha","protractor","webdriverio","playwright-test","open-source"]},i=void 0,p={permalink:"/blog/support-for-serenity-bdd-4",editUrl:"https://github.com/serenity-js/serenity-js/tree/main/documentation/serenity-js.org/blog/2024-01-11-support-for-serenity-bdd-4/index.mdx",source:"@site/blog/2024-01-11-support-for-serenity-bdd-4/index.mdx",title:"Support for Serenity BDD 4",description:"Serenity/JS 3.15.0 introduces support for Serenity BDD 4 and aggregated test reports for Playwright Test, WebdriverIO, Mocha, Jasmine and Cucumber! \ud83e\udd73",date:"2024-01-11T00:00:00.000Z",formattedDate:"January 11, 2024",tags:[{label:"web",permalink:"/blog/tags/web"},{label:"rest",permalink:"/blog/tags/rest"},{label:"reporting",permalink:"/blog/tags/reporting"},{label:"jasmine",permalink:"/blog/tags/jasmine"},{label:"mocha",permalink:"/blog/tags/mocha"},{label:"protractor",permalink:"/blog/tags/protractor"},{label:"webdriverio",permalink:"/blog/tags/webdriverio"},{label:"playwright-test",permalink:"/blog/tags/playwright-test"},{label:"open-source",permalink:"/blog/tags/open-source"}],readingTime:.665,hasTruncateMarker:!1,authors:[{name:"Jan Molak",url:"https://github.com/jan-molak",imageURL:"https://github.com/jan-molak.png",key:"jan-molak"}],frontMatter:{slug:"support-for-serenity-bdd-4",title:"Support for Serenity BDD 4",authors:["jan-molak"],tags:["web","rest","reporting","jasmine","mocha","protractor","webdriverio","playwright-test","open-source"]},prevItem:{title:"Support for @tags",permalink:"/blog/support-for-tags"},nextItem:{title:"Support for Playwright Test UI Mode!",permalink:"/blog/support-for-playwright-ui-mode"}},s={authorsImageUrls:[void 0]},l=[{value:"Important changes",id:"important-changes",level:3}],g={toc:l},c="wrapper";function u(e){let{components:r,...t}=e;return(0,o.yg)(c,(0,n.A)({},g,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"/changelog/3.15.0"},(0,o.yg)("strong",{parentName:"a"},"Serenity/JS 3.15.0"))," introduces support for ",(0,o.yg)("strong",{parentName:"p"},"Serenity BDD 4")," and aggregated test reports for Playwright Test, WebdriverIO, Mocha, Jasmine and Cucumber! \ud83e\udd73"),(0,o.yg)("p",null,"We've also updated the Serenity/JS Handbook to help you get the most out of the new Serenity/JS and Serenity BDD reporting features - check out:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/handbook/reporting/serenity-bdd-reporter/"},"Reporting > Serenity BDD Reporter")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/handbook/reporting/serenity-bdd-reporter/#serenity-bdd-best-practices"},"Serenity BDD Best Practices")," (NEW!)")),(0,o.yg)("h3",{id:"important-changes"},"Important changes"),(0,o.yg)("p",null,"If you're still using the Serenity/JS 2-style syntax for registering the ",(0,o.yg)("inlineCode",{parentName:"p"},"SerenityBDDReporter"),", you'll need to update your configuration file to use the Serenity/JS 3 convention:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-diff"},"- import { ArtifactArchiver } from '@serenity-js/core';\n- import { SerenityBDDReporter } from '@serenity-js/serenity-bdd';\n\n// ...\n    crew: [\n-     new SerenityBDDReporter(),\n-     ArtifactArchiver.storingArtifactsAt('./target/site/serenity'),\n+     '@serenity-js/serenity-bdd',\n+     [ '@serenity-js/core:ArtifactArchiver', {\n+       outputDirectory: 'target/site/serenity'\n+     } ],\n    ]\n// ...\n")),(0,o.yg)("p",null,"Learn more about ",(0,o.yg)("a",{parentName:"p",href:"/handbook/reporting/serenity-bdd-reporter/#configuration-overview"},"Configuring Serenity BDD Reporter"),"."))}u.isMDXComponent=!0}}]);