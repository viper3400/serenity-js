"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[73510],{30876:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>f});var r=a(2784);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var m=r.createContext({}),c=function(e){var t=r.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=c(e.components);return r.createElement(m.Provider,{value:t},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,m=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=c(a),d=i,f=p["".concat(m,".").concat(d)]||p[d]||b[d]||n;return a?r.createElement(f,s(s({ref:t},l),{},{components:a})):r.createElement(f,s({ref:t},l))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,s=new Array(n);s[0]=d;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[p]="string"==typeof e?e:i,s[1]=o;for(var c=2;c<n;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},46072:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>b,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var r=a(7896),i=(a(2784),a(30876));const n={date:"2021-12-08T20:00",title:"3.0.0-rc.0",tags:["core","cucumber","deps","jasmine","protractor","web","webdriverio"]},s="3.0.0-rc.0",o={permalink:"/changelog/3.0.0-rc.0",source:"@site/changelog/source/3.0.0-rc.0.md",title:"3.0.0-rc.0",description:"Summary",date:"2021-12-08T20:00:00.000Z",formattedDate:"December 8, 2021",tags:[{label:"core",permalink:"/changelog/tags/core"},{label:"cucumber",permalink:"/changelog/tags/cucumber"},{label:"deps",permalink:"/changelog/tags/deps"},{label:"jasmine",permalink:"/changelog/tags/jasmine"},{label:"protractor",permalink:"/changelog/tags/protractor"},{label:"web",permalink:"/changelog/tags/web"},{label:"webdriverio",permalink:"/changelog/tags/webdriverio"}],hasTruncateMarker:!1,authors:[],frontMatter:{date:"2021-12-08T20:00",title:"3.0.0-rc.0",tags:["core","cucumber","deps","jasmine","protractor","web","webdriverio"]},prevItem:{title:"3.0.0-rc.1",permalink:"/changelog/3.0.0-rc.1"},listPageLink:"/changelog/page/49"},m={authorsImageUrls:[]},c=[{value:"Summary",id:"summary",level:2},{value:"Bug Fixes",id:"bug-fixes",level:2},{value:"Features",id:"features",level:2},{value:"BREAKING CHANGES",id:"breaking-changes",level:2}],l={toc:c},p="wrapper";function b(e){let{components:t,...a}=e;return(0,i.kt)(p,(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"This release addresses ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/issues/805"},"#805")," and introduces improvements to\nthe following Serenity/JS modules:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/core"},(0,i.kt)("inlineCode",{parentName:"a"},"@serenity-js/core"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/cucumber"},(0,i.kt)("inlineCode",{parentName:"a"},"@serenity-js/cucumber"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/jasmine"},(0,i.kt)("inlineCode",{parentName:"a"},"@serenity-js/jasmine"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/protractor"},(0,i.kt)("inlineCode",{parentName:"a"},"@serenity-js/protractor"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/web"},(0,i.kt)("inlineCode",{parentName:"a"},"@serenity-js/web"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/webdriverio"},(0,i.kt)("inlineCode",{parentName:"a"},"@serenity-js/webdriverio")))),(0,i.kt)("p",null,"Related external tickets: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jasmine/jasmine/issues/1939"},"jasmine/jasmine#1939")),(0,i.kt)("p",null,"View detailed ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/compare/v2.32.5...v3.0.0-rc.0"},"code diff")," on GitHub"),(0,i.kt)("h2",{id:"bug-fixes"},"Bug Fixes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"core:")," ",(0,i.kt)("inlineCode",{parentName:"li"},"formatted")," can be configured to produce single- or multi-line descriptions (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/21145a3dda17e87ea7bd950da4526b90f37a1edc"},"21145a3"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"core:")," ",(0,i.kt)("inlineCode",{parentName:"li"},"inspected")," produces a better description of functions used as parameters (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/15535c675469651b835c0b358649a590f2c15b5d"},"15535c6"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"core:")," 3.0 RC (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/469d54e4f81ef430566b93852e3174826f8ef672"},"469d54e"),"), closes ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/805"},"#805")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"core:")," answerProxy renamed to ProxyAnswer to better reflect its purpose (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/a98fe41378bc8475f027946e0f01a30f4789d57a"},"a98fe41"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"core:")," corrected type defs of Question.as (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/681ce22259bf75161df7ce2454f4b6d73ea87259"},"681ce22"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"core:")," exported createProxyAnswer to make it easier to use (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/547198985025d0ede2ab47ea89d8944960fb980d"},"5471989"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"core:")," removed Loop as it will be replaced (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/0b63d27745c905001adf3c219dd0e3cf44756320"},"0b63d27"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"core:")," removed Property as it will be replaced by new Question (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/fd7fa10dfbaa0c0cba059c5f18920609c4bac014"},"fd7fa10"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"core:")," removed Transform and mapping functions as they'll be replaced with new Question (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/506eaeaf2df22cfde5d7ca6a8f413fc053556c2b"},"506eaea"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"core:"),' renamed "Model" type to "Adapter" to better reflect its purpose (',(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/b4ea7a100fac2c896990bf15cbc906de641196b8"},"b4ea7a1"),"), closes ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/805"},"#805")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"cucumber:")," support for recognising non-Serenity AssertionErrors in older version of Cucumber (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/31e9e9919c2fd1e87b3f4405d9b2a6ae0164e893"},"31e9e99"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"deps:")," updated WebdriverIO (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/9de63d460d9735abfc5bb066671f6f28c3274597"},"9de63d4"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"deps:")," web (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/b075b8ecd8e00014469dda15a90175d60ed80c91"},"b075b8e"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"jasmine:")," upgraded Jasmine to 3.10.0 (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/707dbff16cf909a12c437984e156f55d2df1e2a0"},"707dbff"),"), closes ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/jasmine/jasmine/issues/1939"},"jasmine/jasmine#1939")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"protractor:")," fixed the interaction to Switch (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/762ca8406389a720d2ac6b8ab49b2519fbecfc21"},"762ca84"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"protractor:")," lastScriptExecution.result() returns undefined instead of null for void functions (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/997d87af2d825bffd47c0a1b3dbeee8ce572e391"},"997d87a"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"protractor:")," modernised ProtractorParam to return a Screenplay Model (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/43c2032e73c5e1ad3392396dec6fff476283833d"},"43c2032"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"protractor:")," removed interaction to ResizeBrowserWindow in favour of Page.setViewportSize() (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/b8e471dc92fe7d930895571ce0bcb99066eb2206"},"b8e471d"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"protractor:"),' replaced obsolete "Window", replaced by "Page" in @serenity-js/web (',(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/a3442c432082327f9081c269c02141c73b2e4eb3"},"a3442c4"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"web:")," added missing export (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/c5ffc0a83905c99ea0020577503170c427fdb9f2"},"c5ffc0a"),"), closes ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/805"},"#805")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"web:")," corrected timestamp rounding when retrieving the expiry date of a cookie (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/d63696586618cd701e703e33dd8b476efaac65b6"},"d636965"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"webdriverio:")," ensure getLastScriptExecutionResult returns undefined for void functions (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/aa00dfd3ab320a5d7ee786feea1ce0355ac42638"},"aa00dfd"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"webdriverio:")," fixed synchronisation issue in ModalDialog (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/12324b2cef9c161df8b68960d5b958c1f208f70a"},"12324b2"),"), closes ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/805"},"#805")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"webdriverio:")," separated UIElement.hoverOver from UIElement.scrollIntoView (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/cf4ca2c531e0f90f9a27917e322359c13bfbc6e6"},"cf4ca2c"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"webdriverio:")," updated WebdriverIO to 7.13.2 (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/ef79d1962224e8dd04a1b0e099662c91ea118dfe"},"ef79d19"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"webdriverio:")," updated WebdriverIO to 7.16.7 (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/3316e2905e68b1cabf76086da353072376f95f4a"},"3316e29"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"web:")," ensure all Web interactions extend the same base class (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/b358c0b67c1de11af63e1e2142d3613692769cd6"},"b358c0b"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"web:")," fixed the interaction to Select (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/10b7b7446743b5866a1b458577ea7d2e11bf5a8f"},"10b7b74"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"web:")," optimised PhotoTakingStrategy (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/085b7f716033b22207af47edac58c896f46af62d"},"085b7f7"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"web:")," removed Cookie as it will be re-implemented (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/cb3d0813f9f0532bfe82be77fef0edec45e8ca3e"},"cb3d081"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"web:")," removed incorrect export (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/ebf80c019af4db2a847e4b98599bce02b8acef23"},"ebf80c0"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"web:")," removed incorrect import (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/90cb0251a00a7bff098376110dcec2f9f2c5d5c0"},"90cb025"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"web:")," removed window-specific APIs from BrowseTheWeb that got replaced by Page (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/918f447c1d8f326fbf5730f1aa61108045556212"},"918f447"),"), closes ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/805"},"#805")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"web:")," renamed Element and associated classes to PageElement to avoid name conflicts (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/1e4204b5507469e6574c87a6d84454e39e8a813e"},"1e4204b"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"web:")," renamed PageElementList to PageElements to improve readability (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/a9903a7389b00106ef94d2bdb9f86a7fd04be541"},"a9903a7"),"), closes ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/805"},"#805")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"web:")," standardised getters across PageElement implementations (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/336472b1a6882412f6a88483e51266909a1d51d0"},"336472b"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"web:")," wordsmithing of interface names (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/5a1e76a9c162370e17238fcccc9f08e109d543c3"},"5a1e76a"),")")),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"core:")," question.about creates a proxy around the answer to simplify the API (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/25e084116ad28a02b55fbd8814b6ffa0375ec433"},"25e0841"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"core:"),' question.about produces "props" that proxy the methods of the underlying model (',(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/f771872c56b487e404002c3800fc8f3baaed804f"},"f771872"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"protractor:")," compatibility with @serenity-js/web (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/9df4db27a6e0ae62bf0d0e679a170d4865041043"},"9df4db2"),"), closes ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/805"},"#805")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"protractor:")," removed Protractor-specific Target implementations in favour of @serenity-js/web (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/5cfc7e53c977ae919398d9102f43985f393992db"},"5cfc7e5"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"web:")," a common way to run the tests for all the web adapters (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/c7e584a9bf288ebc7781affdb720097527e8ed3a"},"c7e584a"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"web:")," added Page.viewportSize and Page.setViewportSize methods (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/4cabbe21a7fbac3457c6a6ea3d4442a62c3f1f3c"},"4cabbe2"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"web:")," all Screenplay APIs migrated from @serenity-js/webdriverio to @serenity-js/web (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/7b6b95dc255446c29ae213ba2a1d142d426d16c8"},"7b6b95d"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"webdriverio:")," support for native WebdriverIO services (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/8d5ad22594cdb2ebddedc58a30259ca8430e360c"},"8d5ad22"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"web:")," interaction to set a Cookie (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/c056439746a8f57c3edd937b8862f2babb70e94e"},"c056439"),"), closes ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/805"},"#805")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"web:")," interaction to setViewportSize of a Page (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/dd7f18057b857d2e69c19265888bfd5b15fda21b"},"dd7f180"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"web:")," introduced UIElementQuestion to help ensure no NPEs in UI-related questions (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/fe29121118d630e9fbd73dca85496e20948e26e0"},"fe29121"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"web:")," migrated Photographer from @serenity-js/protractor to @serenity-js/web (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/4506dacebdf955c32c4eff17bf9982c8e45e2925"},"4506dac"),"), closes ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/805"},"#805")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"web:")," ModalDialog available for both Protractor and WebdriverIO adapters (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/ef3c566aed12b52aa22c54058992d369172b8597"},"ef3c566"),"), closes ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/805"},"#805")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"web:")," new module @serenity-js/web to provide Web-related Screenplay Pattern APIs (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/bead8612af1a5c99b775e680a3904f44d0281cf9"},"bead861"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"web:")," page provides an abstraction around browser window (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/2e70a3b6af2e8cc49255820e8a1aaffcc71b76a8"},"2e70a3b"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"web:")," Page.url() and Page.title() replace Website.url() and Website.title() (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/49fe0094422ab53ec67d4ba303f80c33e382eebd"},"49fe009"),"), closes ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/805"},"#805")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"web:")," removed Target in favour of PageElement (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/69496c47c4a1ec7b92e7ab6c83da1559e926f28e"},"69496c4"),"), closes ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/805"},"#805")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"web:")," support for switching browsing context (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/a73a635f93183d67229acde78e74526564008869"},"a73a635"),"), closes ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/805"},"#805")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"web:")," support for working with cookies (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/commit/39cde6de7a36d27a8b1c596493efbec94900af6b"},"39cde6d"),"), closes ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/issues/805"},"#805"))),(0,i.kt)("h2",{id:"breaking-changes"},"BREAKING CHANGES"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"core:")," Introduced @serenity-js/web - a shared library for Serenity/JS Web integration\nmodules such as @serenity-js/protractor and @serenity-js/webdriverio. Dropped support for Node 12.")))}b.isMDXComponent=!0}}]);