(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[18495],{46230:(e,t,r)=>{e.exports={src:{srcSet:r.p+"assets/ideal-img/serenity-js-playwright-test-report.e96896e.1982.png 1982w",images:[{path:r.p+"assets/ideal-img/serenity-js-playwright-test-report.e96896e.1982.png",width:1982,height:2208}],src:r.p+"assets/ideal-img/serenity-js-playwright-test-report.e96896e.1982.png",toString:function(){return r.p+"assets/ideal-img/serenity-js-playwright-test-report.e96896e.1982.png"},placeholder:void 0,width:1982,height:2208},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAALCAYAAABGbhwYAAAACXBIWXMAABYlAAAWJQFJUiTwAAABDUlEQVQYlU3PTU7DMBCGYe8prRP/jWM7ISDUBZeEdblEUVsJyjF6B7gMfVGcijLSo5Gs8Wg+5b1grEc3plrpFmMdIpEgQgiCxA41Pj4x3I2knCmlr71tW7RuaJorFfI91gut8bR2Zpxg/zEuoLpU8NJhbKgPV3IZmrsKMdHlAekKMRUkZnxM2BD/PkyLlJOE5JF8v2Z4WJPLiJQRVwpWZj4WlLWWvh+qnAtdytWU1hhTg4UQUEECfd+Tc56lVHuXOkSEaVEdnFIudcvNYsXNUs9uJysWS13vtD6inl9eOB4/2e0P7LZv7LZb9vsD7x9HNptXnPM0rUGdTiemOp/PnH9+YHKp7+8vnHNorfkFi1asWBN2BTQAAAAASUVORK5CYII="}},30876:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>c,kt:()=>y});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(r),h=a,y=u["".concat(l,".").concat(h)]||u[h]||d[h]||i;return r?n.createElement(y,s(s({ref:t},c),{},{components:r})):n.createElement(y,s({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},33142:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(2784),a=r(6277);const i={tabItem:"tabItem_OMyP"};function s(e){let{children:t,hidden:r,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,s),hidden:r},t)}},43193:(e,t,r)=>{"use strict";r.d(t,{Z:()=>h});var n=r(7896),a=r(2784),i=r(6277),s=r(25425),o=r(66806),l=r(50717);const p={tabList:"tabList_M0Dn",tabItem:"tabItem_ysIP"};function c(e){let{className:t,block:r,selectedValue:o,selectValue:l,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),h=e=>{const t=e.currentTarget,r=u.indexOf(t),n=c[r].value;n!==o&&(d(t),l(n))},y=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:s}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>u.push(e),onKeyDown:y,onClick:h},s,{className:(0,i.Z)("tabs__item",p.tabItem,s?.className,{"tabs__item--active":o===t})}),r??t)})))}function u(e){let{lazy:t,children:r,selectedValue:n}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function d(e){const t=(0,o.Y)(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",p.tabList)},a.createElement(c,(0,n.Z)({},e,t)),a.createElement(u,(0,n.Z)({},e,t)))}function h(e){const t=(0,l.Z)();return a.createElement(d,(0,n.Z)({key:String(t)},e))}},66806:(e,t,r)=>{"use strict";r.d(t,{Y:()=>d});var n=r(2784),a=r(7267),i=r(24236),s=r(53432),o=r(79675);function l(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??l(r);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function c(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function u(e){let{queryString:t=!1,groupId:r}=e;const s=(0,a.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(s.location.search);t.set(o,e),s.replace({...s.location,search:t.toString()})}),[o,s])]}function d(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,i=p(e),[s,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[d,h]=u({queryString:r,groupId:a}),[y,g]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,o.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:a}),m=(()=>{const e=d??y;return c({value:e,tabValues:i})?e:null})();(0,n.useLayoutEffect)((()=>{m&&l(m)}),[m]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!c({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),g(e)}),[h,g,i]),tabValues:i}}},25142:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var n=r(7896),a=(r(2784),r(30876)),i=r(43193),s=r(33142);const o={sidebar_position:4},l="Playwright Test",p={unversionedId:"test-runners/playwright-test",id:"test-runners/playwright-test",title:"Playwright Test",description:"Playwright Test is a test runner designed specifically to accommodate the needs",source:"@site/docs/test-runners/playwright-test.mdx",sourceDirName:"test-runners",slug:"/test-runners/playwright-test",permalink:"/handbook/test-runners/playwright-test",draft:!1,editUrl:"https://github.com/serenity-js/serenity-js/tree/main/documentation/serenity-js.org/docs/test-runners/playwright-test.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Mocha",permalink:"/handbook/test-runners/mocha"},next:{title:"Protractor",permalink:"/handbook/test-runners/protractor"}},c={},u=[{value:"Examples and Project Templates",id:"examples-and-project-templates",level:2},{value:"Using Serenity/JS reporting services",id:"using-serenityjs-reporting-services",level:2},{value:"Installing Serenity/JS Playwright and Playwright Test modules",id:"installing-serenityjs-playwright-and-playwright-test-modules",level:3},{value:"Configuring Serenity/JS",id:"configuring-serenityjs",level:3},{value:"Defining Playwright Test scenarios",id:"defining-playwright-test-scenarios",level:3},{value:"Using Serenity/JS Screenplay Pattern APIs",id:"using-serenityjs-screenplay-pattern-apis",level:2},{value:"Referring to actors in test scenarios",id:"referring-to-actors-in-test-scenarios",level:3},{value:"Configuring a custom cast of actors",id:"configuring-a-custom-cast-of-actors",level:3}],d=(h="Figure",function(e){return console.warn("Component "+h+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var h;const y={toc:u},g="wrapper";function m(e){let{components:t,...o}=e;return(0,a.kt)(g,(0,n.Z)({},y,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"playwright-test"},"Playwright Test"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/intro"},"Playwright Test")," is a test runner designed specifically to accommodate the needs\nof browser-based end-to-end test automation using ",(0,a.kt)("a",{parentName:"p",href:"https://playwright.dev/"},"Playwright")," integration library."),(0,a.kt)("p",null,"Playwright supports all modern rendering engines including Chromium, WebKit, and Firefox.\nIt also lets you execute test scenarios on Windows, Linux, and macOS, locally or on CI, headless or headed with native mobile emulation of Google Chrome for Android and Mobile Safari."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"You will learn:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"How to use ",(0,a.kt)("a",{parentName:"li",href:"/handbook/reporting/"},"Serenity/JS reporting services"),", including the ",(0,a.kt)("a",{parentName:"li",href:"/handbook/reporting/serenity-bdd-reporter"},"Serenity BDD reporter"),", even if your test scenarios don't follow the Screenplay Pattern yet"),(0,a.kt)("li",{parentName:"ul"},"How to implement Playwright Test scenarios using reusable ",(0,a.kt)("a",{parentName:"li",href:"/handbook/design/screenplay-pattern"},"Serenity/JS Screenplay Pattern")," APIs and the ",(0,a.kt)("a",{parentName:"li",href:"/api/playwright"},"Serenity/JS Playwright module")),(0,a.kt)("li",{parentName:"ul"},"How to augment native Playwright Test HTML reports with information gathered by your ",(0,a.kt)("a",{parentName:"li",href:"/api/core/class/Actor"},"Serenity/JS actors"))),(0,a.kt)(d,{caption:"Native Playwright Test HTML report, augmented with information from Serenity/JS Screenplay Pattern APIs, as well as automated screenshots captured by the Photographer",img:r(46230),mdxType:"Figure"}),(0,a.kt)("h2",{id:"examples-and-project-templates"},"Examples and Project Templates"),(0,a.kt)("p",null,"If you'd like to dive straight into the code, ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/serenity-js"},"Serenity/JS GitHub repository")," provides:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js?q=playwright+template&type=all&language=&sort="},"Serenity/JS + Playwright project templates"),", which are the easiest way to start with the framework,"),(0,a.kt)("li",{parentName:"ul"},"several ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/tree/main/examples"},"reference implementations"),", demonstrating using Serenity/JS with Playwright and Playwright Test to write web-based acceptance tests")),(0,a.kt)("h2",{id:"using-serenityjs-reporting-services"},"Using Serenity/JS reporting services"),(0,a.kt)("p",null,"To use ",(0,a.kt)("a",{parentName:"p",href:"/handbook/reporting/"},"Serenity/JS reporting services")," in a Playwright Test project, you need to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"use ",(0,a.kt)("inlineCode",{parentName:"li"},"playwright.config.ts")," to ",(0,a.kt)("a",{parentName:"li",href:"/api/playwright-test/interface/SerenityOptions"},"configure Serenity/JS")," to use the reporting services you want to use,\nsuch as the ",(0,a.kt)("a",{parentName:"li",href:"/handbook/reporting/console-reporter"},(0,a.kt)("inlineCode",{parentName:"a"},"ConsoleReporter")),"\nor ",(0,a.kt)("a",{parentName:"li",href:"/handbook/reporting/serenity-bdd-reporter"},(0,a.kt)("inlineCode",{parentName:"a"},"SerenityBDDReporter"))),(0,a.kt)("li",{parentName:"ul"},"optionally, use Serenity/JS Playwright Test ",(0,a.kt)("a",{parentName:"li",href:"/api/playwright-test/function/describe"},(0,a.kt)("inlineCode",{parentName:"a"},"describe"))," and ",(0,a.kt)("a",{parentName:"li",href:"/api/playwright-test/function/it"},(0,a.kt)("inlineCode",{parentName:"a"},"it"))," functions\nto define your test scenarios and inject ",(0,a.kt)("a",{parentName:"li",href:"/api/core/class/Actor"},"Serenity/JS actors"))),(0,a.kt)("admonition",{title:"Serenity/JS test runner adapters",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Serenity/JS test runner adapters turn internal, test runner-specific events\ninto ",(0,a.kt)("a",{parentName:"p",href:"/handbook/reporting/domain-events"},"Serenity/JS domain events")," that can contribute to test execution reports produced\nby ",(0,a.kt)("a",{parentName:"p",href:"/handbook/reporting/"},"Serenity/JS reporting services"),".")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/playwright-test"},(0,a.kt)("inlineCode",{parentName:"a"},"@serenity-js/playwright-test")," module")," provides a ",(0,a.kt)("a",{parentName:"p",href:"/handbook/about/architecture"},(0,a.kt)("strong",{parentName:"a"},"test runner adapter")),"\nyou can attach to your Playwright Test runner just like any other standard ",(0,a.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/test-reporters"},"Playwright Test reporter"),"."),(0,a.kt)("figure",null,(0,a.kt)("mermaid",{value:'graph TB\n    DEV(["\ud83d\udcbb Developer"])\n    TR(["playwright test"])\n    TS(["Playwright Test scenarios"])\n    SC(["@serenity-js/core"])\n    PTAPI(["@serenity-js/playwright-test"])\n    CF["playwright.config.ts"]\n    R(["Serenity/JS reporting services"])\n\n    DEV -- invokes --\x3e TR\n    TR -- runs --\x3e TS\n    TS -- use --\x3e PTAPI\n    TR -- loads --\x3e CF\n    PTAPI -- notifies --\x3e SC\n    CF -- configures --\x3e SC\n    SC -- notifies --\x3e R\n\n    click R "/handbook/reporting"\n    click SC "/api/core"\n    click TRA "/api/mocha"'}),(0,a.kt)("figcaption",null,"Serenity/JS + Playwright Test integration architecture")),(0,a.kt)("h3",{id:"installing-serenityjs-playwright-and-playwright-test-modules"},"Installing Serenity/JS Playwright and Playwright Test modules"),(0,a.kt)("p",null,"Follow ",(0,a.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/intro#installing-playwright"},"Playwright Test installation instructions"),"\nto create a new Playwright Test project:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"npm init playwright@latest\n\nGetting started with writing end-to-end tests with Playwright:\nInitializing project in '.'\n\u2714 Do you want to use TypeScript or JavaScript? \xb7 TypeScript\n\u2714 Where to put your end-to-end tests? \xb7 tests\n\u2714 Add a GitHub Actions workflow? (y/N) \xb7 false\n\u2714 Install Playwright browsers (can be done manually via 'npx playwright install')? (Y/n) \xb7 true\n")),(0,a.kt)("admonition",{title:"Use TypeScript to get the most out of your development tools",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Playwright Test installation wizard will ask you whether you want to use TypeScript or JavaScript\nto implement your test scenarios.\nChoosing TypeScript offers improved tooling support in IDEs such\nas ",(0,a.kt)("a",{parentName:"p",href:"/handbook/integration/jetbrains-idea"},"JetBrains")," and ",(0,a.kt)("a",{parentName:"p",href:"/handbook/integration/visual-studio-code"},"Visual Studio Code"),".")),(0,a.kt)("p",null,"Next, add Serenity/JS Playwright and web integration modules:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/core"},(0,a.kt)("inlineCode",{parentName:"a"},"@serenity-js/core"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/playwright"},(0,a.kt)("inlineCode",{parentName:"a"},"@serenity-js/playwright"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/playwright-test"},(0,a.kt)("inlineCode",{parentName:"a"},"@serenity-js/playwright-test"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/web"},(0,a.kt)("inlineCode",{parentName:"a"},"@serenity-js/web")))),(0,a.kt)("p",null,"You might also want to install Serenity/JS reporting services, to accompany your native Playwright Test reports:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/console-reporter"},(0,a.kt)("inlineCode",{parentName:"a"},"@serenity-js/console-reporter"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/serenity-bdd"},(0,a.kt)("inlineCode",{parentName:"a"},"@serenity-js/serenity-bdd")))),(0,a.kt)("p",null,"To do the above, run the following command in your terminal:"),(0,a.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --save-dev @serenity-js/core @serenity-js/console-reporter @serenity-js/playwright @serenity-js/playwright-test @serenity-js/web @serenity-js/serenity-bdd\n"))),(0,a.kt)(s.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add --dev @serenity-js/core @serenity-js/console-reporter @serenity-js/playwright @serenity-js/playwright-test @serenity-js/web @serenity-js/serenity-bdd\n")))),(0,a.kt)("h3",{id:"configuring-serenityjs"},"Configuring Serenity/JS"),(0,a.kt)("p",null,"To use ",(0,a.kt)("a",{parentName:"p",href:"/handbook/reporting/"},"Serenity/JS reporting services"),", list them under ",(0,a.kt)("inlineCode",{parentName:"p"},"crew")," in\nyour ",(0,a.kt)("inlineCode",{parentName:"p"},"playwright.config.ts"),", alongside any other native Playwright Test reporters you might want to use:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="playwright.config.ts"',title:'"playwright.config.ts"'},"import type { PlaywrightTestConfig } from '@playwright/test'\n\nconst config: PlaywrightTestConfig = {\n    reporter: [\n        [ '@serenity-js/playwright-test', {\n            crew: [\n                '@serenity-js/console-reporter',\n                '@serenity-js/serenity-bdd',\n                [ '@serenity-js/core:ArtifactArchiver', { outputDirectory: 'target/site/serenity' } ],\n            ]\n        }],\n\n        // other native Playwright Test reporters\n        [ 'html', { open: 'never' } ],          // built-in Playwright HTML reporter\n    ],\n\n    // Other configuration omitted for brevity\n    // For details, see https://playwright.dev/docs/test-configuration\n}\n\nexport default config\n")),(0,a.kt)("p",null,"Learn more about configuring ",(0,a.kt)("a",{parentName:"p",href:"/api/playwright-test"},"Serenity/JS Playwright Test reporter")," and ",(0,a.kt)("a",{parentName:"p",href:"/handbook/reporting/"},"Serenity/JS reporting services"),"."),(0,a.kt)("h3",{id:"defining-playwright-test-scenarios"},"Defining Playwright Test scenarios"),(0,a.kt)("p",null,"When Serenity/JS reports on Playwright Test scenarios, it assumes you're following a common convention\nwhere the outermost ",(0,a.kt)("a",{parentName:"p",href:"/api/playwright-test/function/describe"},(0,a.kt)("inlineCode",{parentName:"a"},"describe")," block")," describes the name of the feature or component under test,\nand any nested ",(0,a.kt)("inlineCode",{parentName:"p"},"describe")," blocks contribute to the name of the test scenario."),(0,a.kt)("p",null,"For example, Serenity/JS will report the below scenario as:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"feature: ",(0,a.kt)("inlineCode",{parentName:"li"},"Todo List App")),(0,a.kt)("li",{parentName:"ul"},"scenario: ",(0,a.kt)("inlineCode",{parentName:"li"},"when the user is a guest their list is empty"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { describe, it } from '@playwright/test'\n\ndescribe('Todo List App', () => {                     // - feature or component name\n\n    describe('when the user is', () => {              // - one or more nested `describe` blocks\n        describe('a guest', () => {                   //   to group scenarios\n            describe('their list', () => {            //   by context in which they apply\n\n                it('is empty', async ({ actor }) => { // - expected behaviour of the feature or component\n\n                })\n            })\n        })\n    })\n})\n")),(0,a.kt)("admonition",{title:"Feature coverage",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Using the same name for the outermost ",(0,a.kt)("inlineCode",{parentName:"p"},"describe"),' block in several different spec files makes\nSerenity BDD associate the different test scenarios with the same logical "feature" or "component"\nand produce ',(0,a.kt)("a",{parentName:"p",href:"https://serenity-bdd.github.io/docs/reporting/the_serenity_reports"},"feature coverage metrics"),".")),(0,a.kt)("h2",{id:"using-serenityjs-screenplay-pattern-apis"},"Using Serenity/JS Screenplay Pattern APIs"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/core/class/Actor"},"Serenity/JS actor model")," works great with Playwright Test\nand ",(0,a.kt)("a",{parentName:"p",href:"/handbook/design/screenplay-pattern"},"Serenity/JS Screenplay Pattern")," APIs can help your team implement\nPlaywright Test scenarios that are easy to read and understand."),(0,a.kt)("p",null,"The fastest way to get started with Serenity/JS and Playwright Test is to use one of\nthe ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/serenity-js?q=playwright+test+template&type=all&language=&sort="},"Serenity/JS + Playwright Test project templates"),".\nHowever, if you're adding Serenity/JS to an existing project or simply want to understand how the integration works,\nthis guide is for you."),(0,a.kt)("h3",{id:"referring-to-actors-in-test-scenarios"},"Referring to actors in test scenarios"),(0,a.kt)("p",null,"To start using ",(0,a.kt)("a",{parentName:"p",href:"/handbook/design/screenplay-pattern"},"Serenity/JS Screenplay Pattern")," APIs in your Playwright Test scenarios,\ndefine your test scenarios using the ",(0,a.kt)("a",{parentName:"p",href:"/api/playwright-test/function/describe"},(0,a.kt)("inlineCode",{parentName:"a"},"describe"))," and ",(0,a.kt)("a",{parentName:"p",href:"/api/playwright-test/function/it"},(0,a.kt)("inlineCode",{parentName:"a"},"it"))," functions\nfrom ",(0,a.kt)("inlineCode",{parentName:"p"},"@serenity-js/playwright-test")," instead of ",(0,a.kt)("inlineCode",{parentName:"p"},"@playwright/test"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"- import { describe, it, test } from '@playwright/test'\n+ import { describe, it, test } from '@serenity-js/playwright-test'\n")),(0,a.kt)("p",null,"That's it!"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/playwright-test"},"Serenity/JS Playwright Test")," module provides ",(0,a.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/test-fixtures"},"Playwright fixtures"),"\nthat automatically configure all the actors injected\nvia ",(0,a.kt)("a",{parentName:"p",href:"/api/playwright-test/interface/SerenityFixtures#actor"},(0,a.kt)("inlineCode",{parentName:"a"},"actor"))," and\n",(0,a.kt)("a",{parentName:"p",href:"/api/playwright-test/interface/SerenityFixtures#actorCalled"},(0,a.kt)("inlineCode",{parentName:"a"},"actorCalled")),"\nwith abilities to ",(0,a.kt)("a",{parentName:"p",href:"/api/playwright/class/BrowseTheWebWithPlaywright"},(0,a.kt)("inlineCode",{parentName:"a"},"BrowseTheWebWithPlaywright")),"\nand ",(0,a.kt)("a",{parentName:"p",href:"/api/core/class/TakeNotes"},(0,a.kt)("inlineCode",{parentName:"a"},"TakeNotes")),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { describe, it } from '@serenity-js/playwright-test'\nimport { Navigate, PageElements, By } from '@serenity-js/web'\nimport { Ensure, equals } from '@serenity-js/assertions'\n\ndescribe('Todo List', () => {                                   // - feature or component name\n\n    const displayedItems = () =>\n        PageElements.located(By.css('.todo-list li'))\n            .describedAs('displayed items')\n\n    describe('when the user is', () => {                        // - one or more nested `describe` blocks\n        describe('a guest', () => {                             //   to group scenarios\n            describe('their list', () => {                      //   by context in which they apply\n\n\n                it('is empty', async ({ actor }) => {           // - verify expected behaviour\n                    await actor.attemptsTo(                     //   using a default `actor`\n                        Navigate.to('https://todo-app.serenity-js.org/'),\n                        Ensure.that(displayedItems().count(), equals(0))\n                    )\n                })\n            })\n        })\n    })\n})\n")),(0,a.kt)("h3",{id:"configuring-a-custom-cast-of-actors"},"Configuring a custom cast of actors"),(0,a.kt)("p",null,"If you'd like to change the default settings, you can override the ",(0,a.kt)("a",{parentName:"p",href:"/api/playwright-test/interface/SerenityOptions"},"relevant configuration options"),"\neither in ",(0,a.kt)("inlineCode",{parentName:"p"},"playwright.config.ts"),", or in your test file, depending on the type of override you want to make."),(0,a.kt)("p",null,"For example, you can change the name given to the default actor and register a ",(0,a.kt)("a",{parentName:"p",href:"/api/web/class/Photographer"},(0,a.kt)("inlineCode",{parentName:"a"},"Photographer"))," service\nin ",(0,a.kt)("inlineCode",{parentName:"p"},"playwright.config.ts")," (note the ",(0,a.kt)("a",{parentName:"p",href:"/api/playwright-test#PlaywrightTestConfig"},(0,a.kt)("inlineCode",{parentName:"a"},"PlaywrightTestConfig"))," import from ",(0,a.kt)("inlineCode",{parentName:"p"},"@serenity-js/playwright-test")," instead of the default ",(0,a.kt)("inlineCode",{parentName:"p"},"@playwright/test"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="playwright.config.ts"',title:'"playwright.config.ts"'},"import type { PlaywrightTestConfig } from '@serenity-js/playwright-test'\n\nconst config: PlaywrightTestConfig = {\n    use: {\n        defaultActorName: 'Tess',\n        crew: [\n            // [ '@serenity-js/web:Photographer', { strategy: 'TakePhotosOfFailures' } ]\n            [ '@serenity-js/web:Photographer', { strategy: 'TakePhotosOfInteractions' } ]\n        ],\n    },\n\n    reporter: [\n        [ '@serenity-js/playwright-test', {\n            crew: [\n                '@serenity-js/console-reporter',\n                '@serenity-js/serenity-bdd',\n                [ '@serenity-js/core:ArtifactArchiver', { outputDirectory: 'target/site/serenity' } ],\n            ]\n        }],\n    ],\n}\n\nexport default config\n")),(0,a.kt)("p",null,"If you'd like to use a custom ",(0,a.kt)("a",{parentName:"p",href:"/api/core/class/Cast"},(0,a.kt)("inlineCode",{parentName:"a"},"Cast"))," of actors instead of the default one,\nyou'll need to do that in a spec file as the ability to ",(0,a.kt)("a",{parentName:"p",href:"/api/playwright/class/BrowseTheWebWithPlaywright"},(0,a.kt)("inlineCode",{parentName:"a"},"BrowseTheWebWithPlaywright"))," requires access\nto Playwright ",(0,a.kt)("inlineCode",{parentName:"p"},"browser")," object, which the config file doesn't offer."),(0,a.kt)("p",null,"For example, you could define a custom ",(0,a.kt)("inlineCode",{parentName:"p"},"Cast")," where each actor gets their own browser,\nbut they share their ",(0,a.kt)("a",{parentName:"p",href:"/api/core/function/notes"},"notes"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { describe, it, test } from '@serenity-js/playwright-test'\nimport { Cast, Notepad, TakeNotes, notes } from '@serenity-js/core'\nimport { BrowseTheWebWithPlaywright } from '@serenity-js/playwright'\nimport { Navigate, PageElements, By } from '@serenity-js/web'\nimport { Ensure, equals } from '@serenity-js/assertions'\n\ninterface SharedNotes {\n    numberOfItemsThatAliceSaw: number\n}\n\ntest.use({\n    actors: async ({ browser, contextOptions }, use) => {\n        const sharedNotepad = Notepad.empty<SharedNotes>();\n\n        const cast = Cast.where(actor => actor.whoCan(\n            BrowseTheWebWithPlaywright.using(browser, {\n                ...contextOptions,\n                userAgent: `${ actor.name }`\n            }),\n            TakeNotes.using(sharedNotepad),\n        ))\n\n        await use(cast)\n    },\n})\n\ndescribe('Todo List App', () => {\n\n    const displayedItems = () =>\n        PageElements.located(By.css('.todo-list li'))\n            .describedAs('displayed items')\n\n    it('support multiple users', async ({ actorCalled }) => {\n        // Alice and Bob use separate browser windows\n        await actorCalled('Alice').attemptsTo(\n            Navigate.to('https://todo-app.serenity-js.org/'),\n            notes<SharedNotes>().set('numberOfItemsThatAliceSaw', displayedItems().count())\n        )\n\n        // Bob doesn't have access to the browser that Alice uses,\n        // but he can access their shared notepad\n        await actorCalled('Bob').attemptsTo(\n            Ensure.that(notes<SharedNotes>().get('numberOfItemsThatAliceSaw'), equals(0)),\n        )\n    })\n})\n")))}m.isMDXComponent=!0}}]);