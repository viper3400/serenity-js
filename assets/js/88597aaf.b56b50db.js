"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[18769],{30876:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,b=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return r?n.createElement(b,o(o({ref:t},u),{},{components:r})):n.createElement(b,o({ref:t},u))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},33142:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(2784),a=r(6277);const i={tabItem:"tabItem_OMyP"};function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,o),hidden:r},t)}},43193:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(7896),a=r(2784),i=r(6277),o=r(25425),s=r(66806),l=r(50717);const p={tabList:"tabList_M0Dn",tabItem:"tabItem_ysIP"};function u(e){let{className:t,block:r,selectedValue:s,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),m=e=>{const t=e.currentTarget,r=c.indexOf(t),n=u[r].value;n!==s&&(d(t),l(n))},b=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:b,onClick:m},o,{className:(0,i.Z)("tabs__item",p.tabItem,o?.className,{"tabs__item--active":s===t})}),r??t)})))}function c(e){let{lazy:t,children:r,selectedValue:n}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function d(e){const t=(0,s.Y)(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",p.tabList)},a.createElement(u,(0,n.Z)({},e,t)),a.createElement(c,(0,n.Z)({},e,t)))}function m(e){const t=(0,l.Z)();return a.createElement(d,(0,n.Z)({key:String(t)},e))}},66806:(e,t,r)=>{r.d(t,{Y:()=>d});var n=r(2784),a=r(7267),i=r(24236),o=r(53432),s=r(79675);function l(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function p(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??l(r);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function u(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function c(e){let{queryString:t=!1,groupId:r}=e;const o=(0,a.k6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i._X)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(o.location.search);t.set(s,e),o.replace({...o.location,search:t.toString()})}),[s,o])]}function d(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,i=p(e),[o,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[d,m]=c({queryString:r,groupId:a}),[b,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,s.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&i.set(e)}),[r,i])]}({groupId:a}),f=(()=>{const e=d??b;return u({value:e,tabValues:i})?e:null})();(0,n.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!u({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),m(e),h(e)}),[m,h,i]),tabValues:i}}},61820:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>b,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var n=r(7896),a=(r(2784),r(30876)),i=r(43193),o=r(33142);const s={sidebar_position:6},l="WebdriverIO",p={unversionedId:"test-runners/webdriverio",id:"test-runners/webdriverio",title:"WebdriverIO",description:"WebdriverIO is a progressive automation framework built to automate modern web and mobile applications.",source:"@site/docs/test-runners/webdriverio.mdx",sourceDirName:"test-runners",slug:"/test-runners/webdriverio",permalink:"/handbook/test-runners/webdriverio",draft:!1,editUrl:"https://github.com/serenity-js/serenity-js/tree/main/documentation/serenity-js.org/docs/test-runners/webdriverio.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Protractor",permalink:"/handbook/test-runners/protractor"},next:{title:"Reporting",permalink:"/handbook/reporting/"}},u={},c=[{value:"Examples and Project Templates",id:"examples-and-project-templates",level:2},{value:"Using Serenity/JS reporting services",id:"using-serenityjs-reporting-services",level:2},{value:"Installing Serenity/JS test runner adapter",id:"installing-serenityjs-test-runner-adapter",level:3},{value:"Configuring Serenity/JS",id:"configuring-serenityjs",level:3},{value:"Configuring WebdriverIO",id:"configuring-webdriverio",level:3},{value:"Using Serenity/JS Screenplay Pattern APIs",id:"using-serenityjs-screenplay-pattern-apis",level:2},{value:"Referring to actors in test scenarios",id:"referring-to-actors-in-test-scenarios",level:3},{value:"Configuring a custom cast of actors",id:"configuring-a-custom-cast-of-actors",level:3}],d={toc:c},m="wrapper";function b(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"webdriverio"},"WebdriverIO"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://webdriver.io/"},"WebdriverIO")," is a progressive automation framework built to automate modern web and mobile applications.\nWebdriverIO leverages the power of the ",(0,a.kt)("a",{parentName:"p",href:"https://w3c.github.io/webdriver/"},"WebDriver")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/w3c/webdriver-bidi"},"WebDriver-BiDi")," protocols that are developed and supported\nby all browser vendors and guarantees a true cross-browser testing experience.\nFurthermore, WebdriverIO also supports alternative, proprietary automation protocols like ",(0,a.kt)("a",{parentName:"p",href:"https://chromedevtools.github.io/devtools-protocol/"},"Chrome DevTools")," via ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/puppeteer"},"Puppeteer"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"You will learn:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"How to use ",(0,a.kt)("a",{parentName:"li",href:"/handbook/reporting/"},"Serenity/JS reporting services"),", including the ",(0,a.kt)("a",{parentName:"li",href:"/handbook/reporting/serenity-bdd-reporter"},"Serenity BDD reporter"),", even if your test scenarios don't follow the Screenplay Pattern yet"),(0,a.kt)("li",{parentName:"ul"},"How to implement WebdriverIO test scenarios using reusable ",(0,a.kt)("a",{parentName:"li",href:"/handbook/design/screenplay-pattern"},"Serenity/JS Screenplay Pattern")," APIs and the ",(0,a.kt)("a",{parentName:"li",href:"/api/webdriverio"},"Serenity/JS WebdriverIO module"))),(0,a.kt)("h2",{id:"examples-and-project-templates"},"Examples and Project Templates"),(0,a.kt)("p",null,"If you'd like to dive straight into the code, ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/serenity-js"},"Serenity/JS GitHub repository")," provides:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js?q=webdriverio+template&type=all&language=&sort="},"Serenity/JS + WebdriverIO project templates"),", which are the easiest way to start with the framework,"),(0,a.kt)("li",{parentName:"ul"},"several ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/serenity-js/tree/main/examples"},"reference implementations"),", demonstrating using Serenity/JS with WebdriverIO to write web-based acceptance tests")),(0,a.kt)("h2",{id:"using-serenityjs-reporting-services"},"Using Serenity/JS reporting services"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/webdriverio"},(0,a.kt)("inlineCode",{parentName:"a"},"@serenity-js/webdriverio")," module")," provides a ",(0,a.kt)("a",{parentName:"p",href:"/handbook/about/architecture"},(0,a.kt)("strong",{parentName:"a"},"test runner adapter")),"\nyou can attach to your ",(0,a.kt)("a",{parentName:"p",href:"https://webdriver.io/docs/testrunner"},"WebdriverIO test runner"),"\njust like any other standard ",(0,a.kt)("a",{parentName:"p",href:"https://webdriver.io/docs/configurationfile"},"WebdriverIO ",(0,a.kt)("inlineCode",{parentName:"a"},"framework")),"."),(0,a.kt)("admonition",{title:"Serenity/JS test runner adapters",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Serenity/JS test runner adapters turn internal, test runner-specific events\ninto ",(0,a.kt)("a",{parentName:"p",href:"/handbook/reporting/domain-events"},"Serenity/JS domain events")," that can contribute to test execution reports produced\nby ",(0,a.kt)("a",{parentName:"p",href:"/handbook/reporting/"},"Serenity/JS reporting services"),".")),(0,a.kt)("p",null,"To use ",(0,a.kt)("a",{parentName:"p",href:"/handbook/reporting/"},"Serenity/JS reporting services")," in a WebdriverIO Test project, you need to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"attach the ",(0,a.kt)("a",{parentName:"li",href:"/api/webdriverio"},(0,a.kt)("inlineCode",{parentName:"a"},"@serenity-js/webdriverio"))," test runner adapter to the WebdriverIO test runner"),(0,a.kt)("li",{parentName:"ul"},"use ",(0,a.kt)("inlineCode",{parentName:"li"},"wdio.conf.ts")," to ",(0,a.kt)("a",{parentName:"li",href:"/api/webdriverio/interface/WebdriverIOConfig"},"configure Serenity/JS")," to use the reporting services you want to use,\nsuch as the ",(0,a.kt)("a",{parentName:"li",href:"/handbook/reporting/console-reporter"},(0,a.kt)("inlineCode",{parentName:"a"},"ConsoleReporter")),"\nor ",(0,a.kt)("a",{parentName:"li",href:"/handbook/reporting/serenity-bdd-reporter"},(0,a.kt)("inlineCode",{parentName:"a"},"SerenityBDDReporter")))),(0,a.kt)("figure",null,(0,a.kt)("mermaid",{value:'graph TB\n    SUT(["Web App"])\n    DEV(["\ud83d\udcbb Developer"])\n    WdioCli["wdio"]\n    Wdio(["WebdriverIO"])\n    ConfigFile["wdio.conf.ts"]\n    SWdioAdapter(["@serenity-js/webdriverio/adapter"])\n    SWeb(["@serenity-js/web"])\n    SWdio(["@serenity-js/webdriverio"])\n    SCore(["@serenity-js/core"])\n    TR(["3rd-party test runner"])\n    TRA(["Serenity/JS test runner adapter"])\n    Specs["test scenarios"]\n    R(["Serenity/JS reporting services"])\n\n    DEV -- invokes --\x3e WdioCli\n    WdioCli -- loads --\x3e ConfigFile\n    WdioCli -- uses --\x3e SWdioAdapter\n    ConfigFile -- configures --\x3e SCore\n    SWdioAdapter -- registers --\x3e TRA\n    SWdioAdapter -- manages --\x3e TR\n    TR -- notifies --\x3e TRA\n    TR -- executes --\x3e Specs\n    Specs -- use --\x3e SWeb\n    SWeb -- notifies --\x3e SCore\n\n    SWeb -- uses --\x3e SWdio\n\n    SWdio -- uses --\x3e Wdio\n\n    Wdio -- interacts with --\x3e SUT\n\n    TRA -- notifies --\x3e SCore\n    SCore -- notifies --\x3e R\n\n    click SWdio "/api/webdriverio"\n    click SWeb "/api/web"\n    click SCore "/api/core"\n    click R "/handbook/reporting"'}),(0,a.kt)("figcaption",null,"Serenity/JS + WebdriverIO integration architecture")),(0,a.kt)("h3",{id:"installing-serenityjs-test-runner-adapter"},"Installing Serenity/JS test runner adapter"),(0,a.kt)("p",null,"Follow ",(0,a.kt)("a",{parentName:"p",href:"https://webdriver.io/docs/gettingstarted"},"WebdriverIO installation instructions"),"\nto create a new WebdriverIO project."),(0,a.kt)("admonition",{title:"Use TypeScript to get the most out of your development tools",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"WebdriverIO installation wizard will ask you whether you want to use TypeScript or JavaScript\nto implement your test scenarios.\nChoosing TypeScript offers improved tooling support in IDEs such\nas ",(0,a.kt)("a",{parentName:"p",href:"/handbook/integration/jetbrains-idea"},"JetBrains")," and ",(0,a.kt)("a",{parentName:"p",href:"/handbook/integration/visual-studio-code"},"Visual Studio Code"),".")),(0,a.kt)("p",null,"Next, add Serenity/JS WebdriverIO and web integration modules:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/core"},(0,a.kt)("inlineCode",{parentName:"a"},"@serenity-js/core"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/webdriverio"},(0,a.kt)("inlineCode",{parentName:"a"},"@serenity-js/webdriverio"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/web"},(0,a.kt)("inlineCode",{parentName:"a"},"@serenity-js/web")))),(0,a.kt)("p",null,"You might also want to install Serenity/JS reporting services:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/console-reporter"},(0,a.kt)("inlineCode",{parentName:"a"},"@serenity-js/console-reporter"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/serenity-bdd"},(0,a.kt)("inlineCode",{parentName:"a"},"@serenity-js/serenity-bdd")))),(0,a.kt)("p",null,"To do the above, run the following command in your terminal:"),(0,a.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"npm",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm install --save-dev @serenity-js/core @serenity-js/console-reporter @serenity-js/webdriverio @serenity-js/web @serenity-js/serenity-bdd\n"))),(0,a.kt)(o.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"yarn add --dev @serenity-js/core @serenity-js/console-reporter @serenity-js/webdriverio @serenity-js/web @serenity-js/serenity-bdd\n")))),(0,a.kt)("p",null,"WebdriverIO offers a ",(0,a.kt)("a",{parentName:"p",href:"https://webdriver.io/docs/runner#local-runner"},"local runner")," that\nuses Jasmine, Mocha, or Cucumber to run your test scenarios.\nSince the task of running the scenarios is delegated to another tool,\nyou'll need to follow the installation instructions to add a Serenity/JS test runner adapter for the runner you've decided to use."),(0,a.kt)("p",null,"See Serenity/JS test runner adapter installation instructions for:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/handbook/test-runners/cucumber#installing-serenityjs-test-runner-adapter"},"Cucumber")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/handbook/test-runners/jasmine#installing-serenityjs-test-runner-adapter"},"Jasmine")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/handbook/test-runners/mocha#installing-serenityjs-test-runner-adapter"},"Mocha"))),(0,a.kt)("h3",{id:"configuring-serenityjs"},"Configuring Serenity/JS"),(0,a.kt)("p",null,"To use ",(0,a.kt)("a",{parentName:"p",href:"/handbook/reporting/"},"Serenity/JS reporting services")," in a WebdriverIO project,\nmodify your ",(0,a.kt)("a",{parentName:"p",href:"https://webdriver.io/docs/configurationfile/"},(0,a.kt)("inlineCode",{parentName:"a"},"wdio.conf.ts")," configuration file"),"\nto register ",(0,a.kt)("a",{parentName:"p",href:"/api/webdriverio"},"Serenity/JS WebdriverIO adapter")," as a ",(0,a.kt)("a",{parentName:"p",href:"https://webdriver.io/docs/frameworks"},"WebdriverIO ",(0,a.kt)("inlineCode",{parentName:"a"},"framework")),"\nand list any ",(0,a.kt)("a",{parentName:"p",href:"/handbook/reporting"},"Serenity/JS reporting services")," under ",(0,a.kt)("inlineCode",{parentName:"p"},"crew"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="wdio.conf.ts"',title:'"wdio.conf.ts"'},"import { WebdriverIOConfig } from '@serenity-js/webdriverio';\n\nexport const config: WebdriverIOConfig = {\n    framework: '@serenity-js/webdriverio',\n    serenity: {\n        crew: [\n            '@serenity-js/console-reporter',\n            '@serenity-js/serenity-bdd',\n            [ '@serenity-js/core:ArtifactArchiver', { outputDirectory: 'target/site/serenity' } ],\n        ],\n    },\n}\n")),(0,a.kt)("p",null,"Learn more about configuring ",(0,a.kt)("a",{parentName:"p",href:"/api/webdriverio"},"Serenity/JS WebdriverIO adapter")," and ",(0,a.kt)("a",{parentName:"p",href:"/handbook/reporting/"},"Serenity/JS reporting services"),"."),(0,a.kt)("h3",{id:"configuring-webdriverio"},"Configuring WebdriverIO"),(0,a.kt)("p",null,"WebdriverIO relies on Cucumber, Jasmine, or Mocha to execute your test scenarios.\nHowever, it is responsible for configuring the test runners themselves.\nTo learn about the test runner configuration options, follow the ",(0,a.kt)("a",{parentName:"p",href:"/api/webdriverio#configuring-webdriverio"},"Serenity/JS WebdriverIO configuration guide"),"."),(0,a.kt)("p",null,"To find out how to define test scenarios, check out the respective guide on using Serenity/JS with:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/handbook/test-runners/cucumber"},"Cucumber")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/handbook/test-runners/jasmine"},"Jasmine")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/handbook/test-runners/mocha"},"Mocha"))),(0,a.kt)("p",null,"To learn about other WebdriverIO configuration options, consult the ",(0,a.kt)("a",{parentName:"p",href:"https://webdriver.io/docs/configuration"},"WebdriverIO documentation"),"."),(0,a.kt)("h2",{id:"using-serenityjs-screenplay-pattern-apis"},"Using Serenity/JS Screenplay Pattern APIs"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/core/class/Actor"},"Serenity/JS actor model")," works great with WebdriverIO\nand ",(0,a.kt)("a",{parentName:"p",href:"/handbook/design/screenplay-pattern"},"Serenity/JS Screenplay Pattern")," APIs can help your team implement\nWebdriverIO test scenarios that are easy to read and understand."),(0,a.kt)("p",null,"The fastest way to get started with Serenity/JS and WebdriverIO is to use one of\nthe ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/serenity-js?q=webdriverio+template&type=all&language=&sort="},"Serenity/JS + WebdriverIO project templates"),".\nHowever, if you're adding Serenity/JS to an existing project or simply want to understand how the integration works,\nthis guide is for you."),(0,a.kt)("h3",{id:"referring-to-actors-in-test-scenarios"},"Referring to actors in test scenarios"),(0,a.kt)("p",null,"When you configure ",(0,a.kt)("a",{parentName:"p",href:"/api/webdriverio"},"Serenity/JS WebdriverIO"),"\nas the ",(0,a.kt)("a",{parentName:"p",href:"/handbook/test-runners/webdriverio#configuring-serenityjs"},"WebdriverIO ",(0,a.kt)("inlineCode",{parentName:"a"},"framework")),",\nSerenity/JS automatically creates and makes available a default ",(0,a.kt)("a",{parentName:"p",href:"/api/core/class/Cast"},"cast of actors"),"\nwhere every actor has the abilities to:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/webdriverio/class/BrowseTheWebWithWebdriverIO"},(0,a.kt)("inlineCode",{parentName:"a"},"BrowseTheWebWithWebdriverIO"))," using the global ",(0,a.kt)("inlineCode",{parentName:"li"},"browser")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/core/class/TakeNotes"},(0,a.kt)("inlineCode",{parentName:"a"},"TakeNotes.usingAnEmptyNotepad()")))),(0,a.kt)("p",null,"This means that any actors you refer to in your test scenarios using\n",(0,a.kt)("a",{parentName:"p",href:"/api/core/function/actorCalled"},(0,a.kt)("inlineCode",{parentName:"a"},"actorCalled")),"\nand ",(0,a.kt)("a",{parentName:"p",href:"/api/core/function/actorInTheSpotlight"},(0,a.kt)("inlineCode",{parentName:"a"},"actorInTheSpotlight"))," functions are configured using\nthis default cast, and already have access to the WebdriverIO-managed browser instance."),(0,a.kt)("p",null,"Since WebdriverIO uses Jasmine, Mocha, or Cucumber to run your test scenarios, please refer to their\ndedicated guides to learn more about using Serenity/JS actors with:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/handbook/test-runners/cucumber#referring-to-actors-in-test-scenarios"},"Cucumber")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/handbook/test-runners/jasmine#referring-to-actors-in-test-scenarios"},"Jasmine")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/handbook/test-runners/mocha#referring-to-actors-in-test-scenarios"},"Mocha"))),(0,a.kt)("h3",{id:"configuring-a-custom-cast-of-actors"},"Configuring a custom cast of actors"),(0,a.kt)("p",null,"You can replace the default ",(0,a.kt)("a",{parentName:"p",href:"/api/core/class/Cast"},"cast of actors"),"\nby providing a custom implementation via ",(0,a.kt)("a",{parentName:"p",href:"/api/webdriverio/interface/WebdriverIOConfig#serenity"},(0,a.kt)("inlineCode",{parentName:"a"},"serenity.actors")),"\nconfiguration option in your ",(0,a.kt)("inlineCode",{parentName:"p"},"wdio.conf.ts"),"."),(0,a.kt)("p",null,"For example, to implement a cast where every actor can ",(0,a.kt)("a",{parentName:"p",href:"/api/webdriverio/class/BrowseTheWebWithWebdriverIO"},(0,a.kt)("inlineCode",{parentName:"a"},"BrowseTheWebWithWebdriverIO")),",\n",(0,a.kt)("a",{parentName:"p",href:"/api/core/class/TakeNotes"},(0,a.kt)("inlineCode",{parentName:"a"},"TakeNotes"))," and ",(0,a.kt)("a",{parentName:"p",href:"/api/rest/class/CallAnApi"},(0,a.kt)("inlineCode",{parentName:"a"},"CallAnApi")),", you could create a ",(0,a.kt)("inlineCode",{parentName:"p"},"MyActors")," class like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="test/MyActors.ts"',title:'"test/MyActors.ts"'},"import { Actor, Cast, TakeNotes } from '@serenity-js/core'\nimport { CallAnApi } from '@serenity-js/rest'\nimport { BrowseTheWebWithWebdriverIO } from '@serenity-js/webdriverio'\n\nexport class MyActors implements Cast {\n    // use constructor parameters to pass properties from the configuration file\n    constructor(private readonly apiUrl: string) {\n    }\n\n    prepare(actor: Actor): Actor {\n        return actor.whoCan(\n            BrowseTheWebWithWebdriverIO.using(browser), // use global browser object\n            TakeNotes.usingAnEmptyNotepad(),\n            CallAnApi.at(this.apiUrl),\n        );\n    }\n}\n")),(0,a.kt)("admonition",{title:"No browser in the configuration file",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"WebdriverIO doesn't allow you to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"browser")," global variable in ",(0,a.kt)("inlineCode",{parentName:"p"},"wdio.conf.ts"),".\nThat's why you need to create a custom implementation of ",(0,a.kt)("a",{parentName:"p",href:"/api/core/class/Cast"},(0,a.kt)("inlineCode",{parentName:"a"},"Cast")),"\nand only refer to ",(0,a.kt)("inlineCode",{parentName:"p"},"browser")," in ",(0,a.kt)("a",{parentName:"p",href:"/api/core/class/Cast#prepare"},(0,a.kt)("inlineCode",{parentName:"a"},"Cast.prepare"))," method.")),(0,a.kt)("p",null,"Next, modify your WebdriverIO configuration file to provide your custom ",(0,a.kt)("inlineCode",{parentName:"p"},"MyActors")," implementation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="wdio.conf.ts"',title:'"wdio.conf.ts"'},"import { WebdriverIOConfig } from '@serenity-js/webdriverio'\n// highlight-next-line\nimport { MyActors } from './test/MyActors'\n\nexport const config: WebdriverIOConfig = {\n    framework: '@serenity-js/webdriverio',\n    serenity: {\n        // highlight-next-line\n        actors: new MyActors('https://api.example.org'),\n        crew: [\n            '@serenity-js/console-reporter',\n            '@serenity-js/serenity-bdd',\n            [ '@serenity-js/core:ArtifactArchiver', { outputDirectory: 'target/site/serenity' } ],\n        ],\n    },\n}\n")))}b.isMDXComponent=!0}}]);