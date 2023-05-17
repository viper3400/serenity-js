"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[85575],{30876:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},y="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),y=p(r),h=a,u=y["".concat(l,".").concat(h)]||y[h]||m[h]||i;return r?n.createElement(u,s(s({ref:t},c),{},{components:r})):n.createElement(u,s({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[y]="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},73137:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>s,default:()=>c,frontMatter:()=>i,toc:()=>o});var n=r(7896),a=(r(2784),r(30876));const i={},s=void 0,o=[{value:"Serenity/JS Playwright Test",id:"serenityjs-playwright-test",level:2},{value:"Installation",id:"installation",level:3},{value:"Serenity/JS Playwright Fixtures",id:"serenityjs-playwright-fixtures",level:3},{value:"Serenity/JS Screenplay Pattern Actors",id:"serenityjs-screenplay-pattern-actors",level:3},{value:"Single-actor scenarios",id:"single-actor-scenarios",level:4},{value:"Multi-actor scenarios",id:"multi-actor-scenarios",level:4},{value:"Customising Actors",id:"customising-actors",level:4},{value:"Serenity Reports",id:"serenity-reports",level:3},{value:"Reference implementation",id:"reference-implementation",level:3},{value:"\ud83d\udce3 Stay up to date",id:"-stay-up-to-date",level:2},{value:"\ud83d\udc9b Support Serenity/JS",id:"-support-serenityjs",level:2}],l={toc:o},p="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.linkedin.com/company/serenity-js"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Follow-Serenity%2FJS%20-0077B5?logo=linkedin",alt:"Follow Serenity/JS on LinkedIn"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/@serenity-js"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Watch-@serenity--js-E62117?logo=youtube",alt:"Watch Serenity/JS on YouTube"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://matrix.to/#/#serenity-js:gitter.im"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Chat-Serenity%2FJS%20Community-FBD30B?logo=matrix",alt:"Join Serenity/JS Community Chat"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sponsors/serenity-js"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Support-@serenity--js-703EC8?logo=github",alt:"Support Serenity/JS on GitHub"}))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://serenity-js.org"},"Serenity/JS")," is an innovative open-source framework designed to make acceptance and regression testing\nof complex software systems faster, more collaborative and easier to scale."),(0,a.kt)("p",null,"\u2b50\ufe0f Get started with Serenity/JS!"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://serenity-js.org/handbook"},"Serenity/JS Handbook")," and ",(0,a.kt)("a",{parentName:"li",href:"https://serenity-js.org/handbook/web-testing/your-first-web-scenario"},"tutorial"),","),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://serenity-js.org/api/core"},"API documentation"),","),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://serenity-js.org/handbook/getting-started#serenityjs-project-templates"},"Serenity/JS project templates on GitHub"),".")),(0,a.kt)("p",null,"\ud83d\udc4b Join the Serenity/JS Community!"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Meet other Serenity/JS developers and maintainers on the ",(0,a.kt)("a",{parentName:"li",href:"https://matrix.to/#/#serenity-js:gitter.im"},"Serenity/JS Community chat channel"),","),(0,a.kt)("li",{parentName:"ul"},"Find answers to your Serenity/JS questions on the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/orgs/serenity-js/discussions/categories/how-do-i"},"Serenity/JS Forum"),","),(0,a.kt)("li",{parentName:"ul"},"Learn how to ",(0,a.kt)("a",{parentName:"li",href:"https://serenity-js.org/contributing"},"contribute to Serenity/JS"),","),(0,a.kt)("li",{parentName:"ul"},"Support the project and gain access to ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/serenity-js/playbooks"},"Serenity/JS Playbooks")," by becoming a ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/sponsors/serenity-js"},"Serenity/JS GitHub Sponsor"),"!")),(0,a.kt)("h2",{id:"serenityjs-playwright-test"},"Serenity/JS Playwright Test"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://serenity-js.org/api/playwright-test/"},(0,a.kt)("inlineCode",{parentName:"a"},"@serenity-js/playwright-test"))," module offers a Serenity/JS reporter\nand fixtures that integrate ",(0,a.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/intro"},"Playwright Test")," with Serenity/JS Screenplay Pattern APIs."),(0,a.kt)("h3",{id:"installation"},"Installation"),(0,a.kt)("p",null,"To install this module, use an existing ",(0,a.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/intro"},"Playwright project")," or generate a new one by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm init playwright@latest\n")),(0,a.kt)("p",null,"Next, run the following command in your Playwright project directory:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev @serenity-js/{assertions,console-reporter,core,serenity-bdd,web,playwright,playwright-test}\n")),(0,a.kt)("h3",{id:"serenityjs-playwright-fixtures"},"Serenity/JS Playwright Fixtures"),(0,a.kt)("p",null,"To use Serenity/JS Screenplay Pattern APIs and benefit from the in-depth reporting capabilities,\nimport Serenity/JS test fixtures instead of the default ones:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"// example.spec.ts\n+ import { test } from '@serenity-js/playwright-test'\n- import { test } from '@playwright/test'\n\ntest.describe('Serenity Screenplay with Playwright', () => {\n    \n    test.describe('New Todo', () => {\n\n        test('should allow me to add todo items', async ({ page }) => {\n            //...\n        })\n    })\n})\n")),(0,a.kt)("p",null,"If you prefer, Serenity/JS also offers the more concise BDD-style ",(0,a.kt)("inlineCode",{parentName:"p"},"describe/it")," syntax:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// example.spec.ts\nimport { describe, it, test } from '@serenity-js/playwright-test'\n\ntest.use({\n    headles: true,\n})\n\ndescribe('Serenity Screenplay with Playwright', () => {\n    \n    describe('New Todo', () => {\n\n        it('should allow me to add todo items', async ({ page }) => {\n            //...\n        })\n    })\n})\n")),(0,a.kt)("h3",{id:"serenityjs-screenplay-pattern-actors"},"Serenity/JS Screenplay Pattern Actors"),(0,a.kt)("p",null,"Serenity/JS test fixtures simplify how you instantiate and use Serenity/JS Screenplay Pattern Actors."),(0,a.kt)("h4",{id:"single-actor-scenarios"},"Single-actor scenarios"),(0,a.kt)("p",null,"If your tests need only a single actor, you can inject it using the ",(0,a.kt)("inlineCode",{parentName:"p"},"actor")," fixture.\nTo configure the name of your default actor, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"defaultActorName")," configuration property:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// example.spec.ts\n\nimport { describe, it, test } from '@serenity-js/playwright-test'   // import fixtures\nimport { Navigate, Page } from '@serenity-js/playwright'            // import Screenplay Pattern web APIs\nimport { Ensure, equals } from '@serenity-js/assertions'            // import Screenplay Pattern assertion APIs                            \n\ntest.use({\n    headles: true,\n    defaultActorName: 'Serena'  // change default actor name\n})\n\ndescribe('Serenity Screenplay with Playwright', () => {\n    \n    describe('New Todo', () => {\n\n        // inject default actor:\n        it('should allow me to add todo items', async ({ actor }) => { \n            \n            // define test workflow\n            await actor.attemptsTo(                                                  \n                Navigate.to('https://todo-app.serenity-js.org/'),\n                Ensure.that(Page.current().title(), equals('Serenity/JS TodoApp')),\n            )\n        })\n    })\n})\n")),(0,a.kt)("h4",{id:"multi-actor-scenarios"},"Multi-actor scenarios"),(0,a.kt)("p",null,"For multi-actor scenarios where you need each actor to use a separate browser, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"actorCalled")," fixture.\nYou can also use this pattern to override the default actor name on a per-scenario basis:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// example.spec.ts\n\nimport { describe, it, test } from '@serenity-js/playwright-test'   // import fixtures\n\ndescribe('Serenity Screenplay with Playwright', () => {\n    \n    describe('Chat app', () => {\n\n        it('should allow actors to send and receive messages', async ({ actorCalled }) => { \n\n            // define part of the workflow performed by the first actor:\n            await actorCalled('Alice').attemptsTo(                               \n                // navigate to a chat app\n                // post a message to Bob\n            )\n\n            // define parts of the workflow performed by the any other actors:\n            await actorCalled('Bob').attemptsTo(                                 \n                // navigate to a chat app\n                // post a reply to Alice\n            )\n\n            // Note that invoking actorCalled(name) multiple times\n            // while using the same name and within the scope of a single test\n            // returns the same actor, so you don't need to cache them:\n            await actorCalled('Alice').attemptsTo(                              \n                // check if the reply from Bob is received                      \n            )                                                                   \n        })\n    })\n})\n")),(0,a.kt)("h4",{id:"customising-actors"},"Customising Actors"),(0,a.kt)("p",null,"The default ",(0,a.kt)("a",{parentName:"p",href:"https://serenity-js.org/api/core/class/Cast"},"cast")," of actors is limited to using a single ability\nto ",(0,a.kt)("a",{parentName:"p",href:"/api/playwright/class/BrowseTheWebWithPlaywright"},(0,a.kt)("inlineCode",{parentName:"a"},"BrowseTheWebWithPlaywright")),"."),(0,a.kt)("p",null,"If you'd like to give your actors additional abilities, like to ",(0,a.kt)("a",{parentName:"p",href:"https://serenity-js.org/api/core/class/TakeNotes"},(0,a.kt)("inlineCode",{parentName:"a"},"TakeNotes")),",\n",(0,a.kt)("a",{parentName:"p",href:"https://serenity-js.org/api/rest/class/CallAnApi"},(0,a.kt)("inlineCode",{parentName:"a"},"CallAnApi")),",\nor ",(0,a.kt)("a",{parentName:"p",href:"https://serenity-js.org/api/local-server/class/ManageALocalServer"},(0,a.kt)("inlineCode",{parentName:"a"},"ManageALocalServer")),", you can install the relevant Serenity/JS module\nand configure them as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// example.spec.ts\n\nimport { Cast, TakeNotes } from '@serenity-js/core'\nimport { test } from '@serenity-js/playwright-test'\nimport { BrowseTheWebWithPlaywright } from '@serenity-js/playwright'\nimport { CallAnApi } from '@serenity-js/rest'                            \n\ntest.use({\n    actors: async ({ browser, baseURL }, use) => {\n        await use(\n            Cast.where(actor => actor.whoCan(\n                BrowseTheWebWithPlaywright.using(browser),\n                TakeNotes.usingAnEmptyNotepad(),\n                CallAnApi.at(baseURL),\n            ))\n        )\n    },\n})\n")),(0,a.kt)("p",null,"For scenarios where different actors need to be configured differently, you can also implement your own ",(0,a.kt)("inlineCode",{parentName:"p"},"Cast"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// example.spec.ts\n\nimport { Cast } from '@serenity-js/core'\nimport { BrowseTheWebWithPlaywright, PlaywrightOptions } from '@serenity-js/playwright'\nimport { test } from '@serenity-js/playwright-test'\nimport { CallAnApi } from '@serenity-js/rest'\nimport { Browser } from 'playwright'\n\nclass Actors implements Cast {\n    constructor(\n        private readonly browser: Browser,\n        private readonly options: PlaywrightOptions,\n    ) {\n    }\n\n    prepare(actor: Actor) {\n        switch (actor.name) {\n            case 'James':\n                return actor.whoCan(BrowseTheWebWithPlaywright.using(this.browser, this.options))\n            default:\n                return actor.whoCan(CallAnApi.at(this.options.baseURL))\n        }\n    }\n}\n\ntest.use({\n    actors: async ({ browser, config }) => {\n        await use(new Actors(browser, {\n            defaultNavigationWaitUntil: 'domcontentloaded'\n        }))\n    }\n})\n")),(0,a.kt)("h3",{id:"serenity-reports"},"Serenity Reports"),(0,a.kt)("p",null,"To use Serenity/JS reporting capabilities, register the ",(0,a.kt)("inlineCode",{parentName:"p"},"@serenity-js/playwright-test")," reporter in your\n",(0,a.kt)("inlineCode",{parentName:"p"},"playwright.config.ts"),' and define the appropriate reporting services (a.k.a. your "stage crew").'),(0,a.kt)("p",null,"For example, to enable Serenity/JS Console Reporter and Serenity BDD reporter, install the relevant modules:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev @serenity-js/{console-reporter,serenity-bdd}\n")),(0,a.kt)("p",null,"Next, configure your Playwright project as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// playwright.conf.ts\n\nimport type { PlaywrightTestConfig } from '@playwright/test'\n\nconst config: PlaywrightTestConfig = {\n    reporter: [\n        [ '@serenity-js/playwright-test', {\n            crew: [\n                '@serenity-js/serenity-bdd',\n                '@serenity-js/console-reporter',\n                [ '@serenity-js/core:ArtifactArchiver', { outputDirectory: 'target/site/serenity' } ],\n                // '@serenity-js/core:StreamReporter',\n            ]\n        }],\n\n        // optional\n        [ 'html', { open: 'never' } ],          // built-in Playwright HTML reporter\n    ],\n\n    // Other configuration omitted for brevity\n    // For details, see https://playwright.dev/docs/test-configuration\n}\n\nexport default config\n")),(0,a.kt)("p",null,"Note that Serenity/JS reporters work well with the built-in ",(0,a.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/test-reporters"},"Playwright reporters"),"."),(0,a.kt)("h3",{id:"reference-implementation"},"Reference implementation"),(0,a.kt)("p",null,"You can find a reference implementation demonstrating how to integrate Serenity/JS with Playwright Test in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js/tree/main/examples/playwright-test-todomvc"},"Serenity/JS\nGitHub repository"),"."),(0,a.kt)("h2",{id:"-stay-up-to-date"},"\ud83d\udce3 Stay up to date"),(0,a.kt)("p",null,"New features, tutorials, and demos are coming soon!\nFollow ",(0,a.kt)("a",{parentName:"p",href:"https://www.linkedin.com/company/serenity-js"},"Serenity/JS on LinkedIn"),",\nsubscribe to ",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/@serenity-js"},"Serenity/JS channel on YouTube")," and join the ",(0,a.kt)("a",{parentName:"p",href:"https://matrix.to/#/#serenity-js:gitter.im"},"Serenity/JS Community Chat")," to stay up to date!\nPlease also make sure to star \u2b50\ufe0f ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js"},"Serenity/JS on GitHub")," to help others discover the framework!"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.linkedin.com/company/serenity-js"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Follow-Serenity%2FJS%20-0077B5?logo=linkedin",alt:"Follow Serenity/JS on LinkedIn"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://www.youtube.com/@serenity-js"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Watch-@serenity--js-E62117?logo=youtube",alt:"Watch Serenity/JS on YouTube"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://matrix.to/#/#serenity-js:gitter.im"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Chat-Serenity%2FJS%20Community-FBD30B?logo=matrix",alt:"Join Serenity/JS Community Chat"})),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/github/stars/serenity-js/serenity-js?label=Serenity%2FJS&logo=github&style=badge",alt:"GitHub stars"}))),(0,a.kt)("h2",{id:"-support-serenityjs"},"\ud83d\udc9b Support Serenity/JS"),(0,a.kt)("p",null,"If you appreciate all the effort that goes into making sophisticated tools easy to work with, please support our work and become a Serenity/JS GitHub Sponsor today!"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sponsors/serenity-js"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Support%20@serenity%2FJS-703EC8?style=for-the-badge&logo=github&logoColor=white",alt:"GitHub Sponsors"}))))}c.isMDXComponent=!0}}]);