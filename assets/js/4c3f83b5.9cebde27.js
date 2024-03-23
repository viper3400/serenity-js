"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[5391],{82247:(e,t,n)=>{n.d(t,{xA:()=>y,yg:()=>m});var r=n(14041);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},y=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,y=s(e,["components","mdxType","originalType","parentName"]),u=p(n),c=i,m=u["".concat(l,".").concat(c)]||u[c]||g[c]||a;return n?r.createElement(m,o(o({ref:t},y),{},{components:n})):r.createElement(m,o({ref:t},y))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},37903:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>y,frontMatter:()=>a,toc:()=>s});var r=n(89575),i=(n(14041),n(82247));const a={},o=void 0,s=[{value:"Serenity/JS Assertions",id:"serenityjs-assertions",level:2},{value:"Installation",id:"installation",level:3},{value:"Performing verifications using <code>Ensure</code>",id:"performing-verifications-using-ensure",level:3},{value:"Controlling execution flow using <code>Check</code>",id:"controlling-execution-flow-using-check",level:3},{value:"Synchronising the test with the System Under Test using <code>Wait</code>",id:"synchronising-the-test-with-the-system-under-test-using-wait",level:3},{value:"Defining custom expectations using <code>Expectation.thatActualShould</code>",id:"defining-custom-expectations-using-expectationthatactualshould",level:3},{value:"Composing expectations using <code>Expectation.to</code>",id:"composing-expectations-using-expectationto",level:3},{value:"\ud83d\udce3 Stay up to date",id:"-stay-up-to-date",level:2},{value:"\ud83d\udc9b Support Serenity/JS",id:"-support-serenityjs",level:2}],l={toc:s},p="wrapper";function y(e){let{components:t,...n}=e;return(0,i.yg)(p,(0,r.A)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://www.linkedin.com/company/serenity-js"},(0,i.yg)("img",{parentName:"a",src:"https://img.shields.io/badge/Follow-Serenity%2FJS%20-0077B5?logo=linkedin",alt:"Follow Serenity/JS on LinkedIn"})),"\n",(0,i.yg)("a",{parentName:"p",href:"https://www.youtube.com/@serenity-js"},(0,i.yg)("img",{parentName:"a",src:"https://img.shields.io/badge/Watch-@serenity--js-E62117?logo=youtube",alt:"Watch Serenity/JS on YouTube"})),"\n",(0,i.yg)("a",{parentName:"p",href:"https://matrix.to/#/#serenity-js:gitter.im"},(0,i.yg)("img",{parentName:"a",src:"https://img.shields.io/badge/Chat-Serenity%2FJS%20Community-FBD30B?logo=matrix",alt:"Join Serenity/JS Community Chat"})),"\n",(0,i.yg)("a",{parentName:"p",href:"https://github.com/sponsors/serenity-js"},(0,i.yg)("img",{parentName:"a",src:"https://img.shields.io/badge/Support-@serenity--js-703EC8?logo=github",alt:"Support Serenity/JS on GitHub"}))),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://serenity-js.org"},"Serenity/JS")," is an innovative open-source framework designed to make acceptance and regression testing\nof complex software systems faster, more collaborative and easier to scale."),(0,i.yg)("p",null,"\u2b50\ufe0f Get started with Serenity/JS!"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://serenity-js.org/handbook/web-testing/your-first-web-scenario"},"Serenity/JS web testing tutorial")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://serenity-js.org/handbook"},"Serenity/JS Handbook")," and ",(0,i.yg)("a",{parentName:"li",href:"https://serenity-js.org/handbook/getting-started/"},"Getting Started guides")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://serenity-js.org/api/core"},"API documentation")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://serenity-js.org/handbook/getting-started/project-templates/"},"Serenity/JS Project Templates on GitHub"))),(0,i.yg)("p",null,"\ud83d\udc4b Join the Serenity/JS Community!"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Meet other Serenity/JS developers and maintainers on the ",(0,i.yg)("a",{parentName:"li",href:"https://matrix.to/#/#serenity-js:gitter.im"},"Serenity/JS Community chat channel"),","),(0,i.yg)("li",{parentName:"ul"},"Find answers to your Serenity/JS questions on the ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/orgs/serenity-js/discussions/categories/how-do-i"},"Serenity/JS Forum"),","),(0,i.yg)("li",{parentName:"ul"},"Learn how to ",(0,i.yg)("a",{parentName:"li",href:"https://serenity-js.org/contributing"},"contribute to Serenity/JS"),","),(0,i.yg)("li",{parentName:"ul"},"Support the project and gain access to ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/serenity-js/playbooks"},"Serenity/JS Playbooks")," by becoming a ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/sponsors/serenity-js"},"Serenity/JS GitHub Sponsor"),"!")),(0,i.yg)("h2",{id:"serenityjs-assertions"},"Serenity/JS Assertions"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://serenity-js.org/api/rest/"},(0,i.yg)("inlineCode",{parentName:"a"},"@serenity-js/assertions"))," is an assertions library implementing the ",(0,i.yg)("a",{parentName:"p",href:"https://serenity-js.org/handbook/thinking-in-serenity-js/screenplay-pattern.html"},"Screenplay Pattern"),"."),(0,i.yg)("h3",{id:"installation"},"Installation"),(0,i.yg)("p",null,"To install this module, run the following command in your computer terminal:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-sh"},"npm install --save-dev @serenity-js/core @serenity-js/assertions\n")),(0,i.yg)("p",null,"To learn more about Serenity/JS and how to use it on your project, follow the ",(0,i.yg)("a",{parentName:"p",href:"https://serenity-js.org/handbook/getting-started/"},"Serenity/JS Getting Started guide"),"."),(0,i.yg)("h3",{id:"performing-verifications-using-ensure"},"Performing verifications using ",(0,i.yg)("inlineCode",{parentName:"h3"},"Ensure")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-typescript"},"import { Ensure, endsWith } from '@serenity-js/assertions'\nimport { actorCalled } from '@serenity-js/core'\nimport { Navigate, Page } from '@serenity-js/web'\n\nawait actorCalled('Erica').attemptsTo(\n    Navigate.to('https://serenity-js.org'),\n    Ensure.that(\n        Page.current().title(), \n        endsWith('Serenity/JS')\n    ),\n)\n")),(0,i.yg)("h3",{id:"controlling-execution-flow-using-check"},"Controlling execution flow using ",(0,i.yg)("inlineCode",{parentName:"h3"},"Check")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-typescript"},"import { actorCalled } from '@serenity-js/core'\nimport { Check } from '@serenity-js/assertions' \nimport { Click, isVisible } from '@serenity-js/protractor'\n\nawait actorCalled('Erica').attemptsTo(\n    Check.whether(NewsletterModal, isVisible())\n        .andIfSo(Click.on(CloseModalButton)),\n)\n")),(0,i.yg)("h3",{id:"synchronising-the-test-with-the-system-under-test-using-wait"},"Synchronising the test with the System Under Test using ",(0,i.yg)("inlineCode",{parentName:"h3"},"Wait")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-typescript"},"import { actorCalled } from '@serenity-js/core'\nimport { Click, isVisible, Wait } from '@serenity-js/protractor'\n\nawait actorCalled('Erica').attemptsTo(\n    Wait.until(CloseModalButton, isVisible()),\n    Click.on(CloseModalButton)\n)\n")),(0,i.yg)("h3",{id:"defining-custom-expectations-using-expectationthatactualshould"},"Defining custom expectations using ",(0,i.yg)("inlineCode",{parentName:"h3"},"Expectation.thatActualShould")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-typescript"},"import { actorCalled } from '@serenity-js/core'\nimport { Expectation, Ensure } from '@serenity-js/assertions'\n\nfunction isDivisibleBy(expected: Answerable<number>): Expectation<number> {\n    return Expectation.thatActualShould<number, number>('have value divisible by', expected)\n        .soThat((actualValue, expectedValue) => actualValue % expectedValue === 0)\n}\n\nawait actorCalled('Erica').attemptsTo(\n    Ensure.that(4, isDivisibleBy(2)),\n)\n")),(0,i.yg)("h3",{id:"composing-expectations-using-expectationto"},"Composing expectations using ",(0,i.yg)("inlineCode",{parentName:"h3"},"Expectation.to")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-typescript"},"import { actorCalled } from '@serenity-js/core'\nimport { Expectation, Ensure, and, or, isGreaterThan, isLessThan, equals  } from '@serenity-js/assertions'\n\nfunction isWithin(lowerBound: number, upperBound: number) {\n    return Expectation\n        .to(`have value within ${ lowerBound } and ${ upperBound }`)\n        .soThatActual(and(\n           or(isGreaterThan(lowerBound), equals(lowerBound)),\n           or(isLessThan(upperBound), equals(upperBound)),\n        ))\n}\n\nawait actorCalled('Erica').attemptsTo(\n    Ensure.that(5, isWithin(3, 6)),\n)\n")),(0,i.yg)("h2",{id:"-stay-up-to-date"},"\ud83d\udce3 Stay up to date"),(0,i.yg)("p",null,"New features, tutorials, and demos are coming soon!\nFollow ",(0,i.yg)("a",{parentName:"p",href:"https://www.linkedin.com/company/serenity-js"},"Serenity/JS on LinkedIn"),",\nsubscribe to ",(0,i.yg)("a",{parentName:"p",href:"https://www.youtube.com/@serenity-js"},"Serenity/JS channel on YouTube")," and join the ",(0,i.yg)("a",{parentName:"p",href:"https://matrix.to/#/#serenity-js:gitter.im"},"Serenity/JS Community Chat")," to stay up to date!\nPlease also make sure to star \u2b50\ufe0f ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js"},"Serenity/JS on GitHub")," to help others discover the framework!"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://www.linkedin.com/company/serenity-js"},(0,i.yg)("img",{parentName:"a",src:"https://img.shields.io/badge/Follow-Serenity%2FJS%20-0077B5?logo=linkedin",alt:"Follow Serenity/JS on LinkedIn"})),"\n",(0,i.yg)("a",{parentName:"p",href:"https://www.youtube.com/@serenity-js"},(0,i.yg)("img",{parentName:"a",src:"https://img.shields.io/badge/Watch-@serenity--js-E62117?logo=youtube",alt:"Watch Serenity/JS on YouTube"})),"\n",(0,i.yg)("a",{parentName:"p",href:"https://matrix.to/#/#serenity-js:gitter.im"},(0,i.yg)("img",{parentName:"a",src:"https://img.shields.io/badge/Chat-Serenity%2FJS%20Community-FBD30B?logo=matrix",alt:"Join Serenity/JS Community Chat"})),"\n",(0,i.yg)("a",{parentName:"p",href:"https://github.com/serenity-js/serenity-js"},(0,i.yg)("img",{parentName:"a",src:"https://img.shields.io/github/stars/serenity-js/serenity-js?label=Serenity%2FJS&logo=github&style=badge",alt:"GitHub stars"}))),(0,i.yg)("h2",{id:"-support-serenityjs"},"\ud83d\udc9b Support Serenity/JS"),(0,i.yg)("p",null,"If you appreciate all the effort that goes into making sophisticated tools easy to work with, please support our work and become a Serenity/JS GitHub Sponsor today!"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://github.com/sponsors/serenity-js"},(0,i.yg)("img",{parentName:"a",src:"https://img.shields.io/badge/Support%20@serenity%2FJS-703EC8?style=for-the-badge&logo=github&logoColor=white",alt:"GitHub Sponsors"}))))}y.isMDXComponent=!0}}]);