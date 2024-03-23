(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[4021],{81627:(e,t,n)=>{"use strict";n.d(t,{A:()=>P});var o=n(89575),r=n(14041),a=n(29776),s=n(9546),c=n(91785),l=n(68844),i=n(79510);const u={codeBlockContainer:"codeBlockContainer_ZGJx"};function d(e){let{as:t,...n}=e;const a=(0,c.A)(),d=(0,i.M$)(a);return r.createElement(t,(0,o.A)({},n,{style:d,className:(0,s.A)(n.className,u.codeBlockContainer,l.G.common.codeBlock)}))}const p={codeBlockContent:"codeBlockContent_qZBB",codeBlockTitle:"codeBlockTitle_zAEH",codeBlock:"codeBlock_TAPP",codeBlockStandalone:"codeBlockStandalone_K9VJ",codeBlockLines:"codeBlockLines_AdAo",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_p5De",buttonGroup:"buttonGroup_TNwR"};function m(e){let{children:t,className:n}=e;return r.createElement(d,{as:"pre",tabIndex:0,className:(0,s.A)(p.codeBlockStandalone,"thin-scrollbar",n)},r.createElement("code",{className:p.codeBlockLines},t))}var f=n(6139),h=n(76689);const g={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var b={Prism:n(4457).A,theme:g};function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(){return v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},v.apply(this,arguments)}var k=/\r\n|\r|\n/,E=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},N=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)};function B(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}var w=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),y(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?function(e,t){var n=e.plain,o=Object.create(null),r=e.styles.reduce((function(e,n){var o=n.languages,r=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=v({},e[t],r);e[t]=n})),e}),o);return r.root=n,r.plain=v({},n,{backgroundColor:null}),r}(e.theme,e.language):void 0;return t.themeDict=n})),y(this,"getLineProps",(function(e){var n=e.key,o=e.className,r=e.style,a=v({},B(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=t.getThemeDict(t.props);return void 0!==s&&(a.style=s.plain),void 0!==r&&(a.style=void 0!==a.style?v({},a.style,r):r),void 0!==n&&(a.key=n),o&&(a.className+=" "+o),a})),y(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,r=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===r&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===r&&!o)return a[n[0]];var s=o?{display:"inline-block"}:{},c=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[s].concat(c))}})),y(this,"getTokenProps",(function(e){var n=e.key,o=e.className,r=e.style,a=e.token,s=v({},B(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==r&&(s.style=void 0!==s.style?v({},s.style,r):r),void 0!==n&&(s.key=n),o&&(s.className+=" "+o),s})),y(this,"tokenize",(function(e,t,n,o){var r={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",r);var a=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,r=e.children,a=this.getThemeDict(this.props),s=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],o=[0],r=[e.length],a=0,s=0,c=[],l=[c];s>-1;){for(;(a=o[s]++)<r[s];){var i=void 0,u=t[s],d=n[s][a];if("string"==typeof d?(u=s>0?u:["plain"],i=d):(u=N(u,d.type),d.alias&&(u=N(u,d.alias)),i=d.content),"string"==typeof i){var p=i.split(k),m=p.length;c.push({types:u,content:p[0]});for(var f=1;f<m;f++)E(c),l.push(c=[]),c.push({types:u,content:p[f]})}else s++,t.push(u),n.push(i),o.push(0),r.push(i.length)}s--,t.pop(),n.pop(),o.pop(),r.pop()}return E(c),l}(void 0!==s?this.tokenize(t,o,s,n):[o]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component);const A=w,C={codeLine:"codeLine_DPDv",codeLineNumber:"codeLineNumber_YxQB",codeLineContent:"codeLineContent_SOIp"};function L(e){let{line:t,classNames:n,showLineNumbers:a,getLineProps:c,getTokenProps:l}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const i=c({line:t,className:(0,s.A)(n,a&&C.codeLine)}),u=t.map(((e,t)=>r.createElement("span",(0,o.A)({key:t},l({token:e,key:t})))));return r.createElement("span",i,a?r.createElement(r.Fragment,null,r.createElement("span",{className:C.codeLineNumber}),r.createElement("span",{className:C.codeLineContent},u)):u,r.createElement("br",null))}var T=n(49028);function j(e){return r.createElement("svg",(0,o.A)({viewBox:"0 0 24 24"},e),r.createElement("path",{fill:"currentColor",d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"}))}function _(e){return r.createElement("svg",(0,o.A)({viewBox:"0 0 24 24"},e),r.createElement("path",{fill:"currentColor",d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))}const I={copyButtonCopied:"copyButtonCopied_Mzdr",copyButtonIcons:"copyButtonIcons_MVhB",copyButtonIcon:"copyButtonIcon_yxgH",copyButtonSuccessIcon:"copyButtonSuccessIcon_QJLJ"};function S(e){let{code:t,className:n}=e;const[o,a]=(0,r.useState)(!1),c=(0,r.useRef)(void 0),l=(0,r.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const o=document.createElement("textarea"),r=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";const a=document.getSelection(),s=a.rangeCount>0&&a.getRangeAt(0);n.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;let c=!1;try{c=document.execCommand("copy")}catch{}o.remove(),s&&(a.removeAllRanges(),a.addRange(s)),r&&r.focus()}(t),a(!0),c.current=window.setTimeout((()=>{a(!1)}),1e3)}),[t]);return(0,r.useEffect)((()=>()=>window.clearTimeout(c.current)),[]),r.createElement("button",{type:"button","aria-label":o?(0,T.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,T.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,T.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,s.A)("clean-btn",n,I.copyButton,o&&I.copyButtonCopied),onClick:l},r.createElement("span",{className:I.copyButtonIcons,"aria-hidden":"true"},r.createElement(j,{className:I.copyButtonIcon}),r.createElement(_,{className:I.copyButtonSuccessIcon})))}function x(e){return r.createElement("svg",(0,o.A)({viewBox:"0 0 24 24"},e),r.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"}))}const V={wordWrapButtonIcon:"wordWrapButtonIcon_SMj9",wordWrapButtonEnabled:"wordWrapButtonEnabled_vR9E"};function O(e){let{className:t,onClick:n,isEnabled:o}=e;const a=(0,T.T)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return r.createElement("button",{type:"button",onClick:n,className:(0,s.A)("clean-btn",t,o&&V.wordWrapButtonEnabled),"aria-label":a,title:a},r.createElement(x,{className:V.wordWrapButtonIcon,"aria-hidden":"true"}))}function D(e){let{children:t,className:n="",metastring:a,title:l,showLineNumbers:u,language:m}=e;const{prism:{defaultLanguage:g,magicComments:y}}=(0,f.p)(),v=m??(0,i.Op)(n)??g,k=(0,c.A)(),E=(0,h.f)(),N=(0,i.wt)(a)||l,{lineClassNames:B,code:w}=(0,i.Li)(t,{metastring:a,language:v,magicComments:y}),C=u??(0,i._u)(a);return r.createElement(d,{as:"div",className:(0,s.A)(n,v&&!n.includes(`language-${v}`)&&`language-${v}`)},N&&r.createElement("div",{className:p.codeBlockTitle},N),r.createElement("div",{className:p.codeBlockContent},r.createElement(A,(0,o.A)({},b,{theme:k,code:w,language:v??"text"}),(e=>{let{className:t,tokens:n,getLineProps:o,getTokenProps:a}=e;return r.createElement("pre",{tabIndex:0,ref:E.codeBlockRef,className:(0,s.A)(t,p.codeBlock,"thin-scrollbar")},r.createElement("code",{className:(0,s.A)(p.codeBlockLines,C&&p.codeBlockLinesWithNumbering)},n.map(((e,t)=>r.createElement(L,{key:t,line:e,getLineProps:o,getTokenProps:a,classNames:B[t],showLineNumbers:C})))))})),r.createElement("div",{className:p.buttonGroup},(E.isEnabled||E.isCodeScrollable)&&r.createElement(O,{className:p.codeButton,onClick:()=>E.toggle(),isEnabled:E.isEnabled}),r.createElement(S,{className:p.codeButton,code:w}))))}function P(e){let{children:t,...n}=e;const s=(0,a.A)(),c=function(e){return r.Children.toArray(e).some((e=>(0,r.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),l="string"==typeof c?D:m;return r.createElement(l,(0,o.A)({key:String(s)},n),c)}},71949:(e,t,n)=>{"use strict";n.d(t,{A:()=>s});var o=n(14041),r=n(9546);const a={tabItem:"tabItem_OMyP"};function s(e){let{children:t,hidden:n,className:s}=e;return o.createElement("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:n},t)}},399:(e,t,n)=>{"use strict";n.d(t,{A:()=>m});var o=n(89575),r=n(14041),a=n(9546),s=n(91963),c=n(33480),l=n(29776);const i={tabList:"tabList_M0Dn",tabItem:"tabItem_ysIP"};function u(e){let{className:t,block:n,selectedValue:c,selectValue:l,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,s.a_)(),m=e=>{const t=e.currentTarget,n=d.indexOf(t),o=u[n].value;o!==c&&(p(t),l(o))},f=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,o.A)({role:"tab",tabIndex:c===t?0:-1,"aria-selected":c===t,key:t,ref:e=>d.push(e),onKeyDown:f,onClick:m},s,{className:(0,a.A)("tabs__item",i.tabItem,s?.className,{"tabs__item--active":c===t})}),n??t)})))}function d(e){let{lazy:t,children:n,selectedValue:o}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o}))))}function p(e){const t=(0,c.u)(e);return r.createElement("div",{className:(0,a.A)("tabs-container",i.tabList)},r.createElement(u,(0,o.A)({},e,t)),r.createElement(d,(0,o.A)({},e,t)))}function m(e){const t=(0,l.A)();return r.createElement(p,(0,o.A)({key:String(t)},e))}},76689:(e,t,n)=>{"use strict";n.d(t,{f:()=>c});var o=n(14041),r=n(44577);const a={attributes:!0,characterData:!0,childList:!0,subtree:!0};function s(e,t){const[n,s]=(0,o.useState)(),c=(0,o.useCallback)((()=>{s(e.current?.closest("[role=tabpanel][hidden]"))}),[e,s]);(0,o.useEffect)((()=>{c()}),[c]),function(e,t,n){void 0===n&&(n=a);const s=(0,r._q)(t),c=(0,r.Be)(n);(0,o.useEffect)((()=>{const t=new MutationObserver(s);return e&&t.observe(e,c),()=>t.disconnect()}),[e,s,c])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),c())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}function c(){const[e,t]=(0,o.useState)(!1),[n,r]=(0,o.useState)(!1),a=(0,o.useRef)(null),c=(0,o.useCallback)((()=>{const n=a.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[a,e]),l=(0,o.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=a.current,n=e>t||a.current.querySelector("code").hasAttribute("style");r(n)}),[a]);return s(a,l),(0,o.useEffect)((()=>{l()}),[e,l]),(0,o.useEffect)((()=>(window.addEventListener("resize",l,{passive:!0}),()=>{window.removeEventListener("resize",l)})),[l]),{codeBlockRef:a,isEnabled:e,isCodeScrollable:n,toggle:c}}},91785:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});var o=n(69076),r=n(6139);function a(){const{prism:e}=(0,r.p)(),{colorMode:t}=(0,o.G)(),n=e.theme,a=e.darkTheme||n;return"dark"===t?a:n}},79510:(e,t,n)=>{"use strict";n.d(t,{Li:()=>p,M$:()=>m,Op:()=>d,_u:()=>u,wt:()=>i});var o=n(11431),r=n.n(o);const a=/title=(?<quote>["'])(?<title>.*?)\1/,s=/\{(?<range>[\d,-]+)\}/,c={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function l(e,t){const n=e.map((e=>{const{start:n,end:o}=c[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${o})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function i(e){return e?.match(a)?.groups.title??""}function u(e){return Boolean(e?.includes("showLineNumbers"))}function d(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}function p(e,t){let n=e.replace(/\n$/,"");const{language:o,magicComments:a,metastring:i}=t;if(i&&s.test(i)){const e=i.match(s).groups.range;if(0===a.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${i}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=a[0].className,o=r()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(o),code:n}}if(void 0===o)return{lineClassNames:{},code:n};const u=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return l(["js","jsBlock"],t);case"jsx":case"tsx":return l(["js","jsBlock","jsx"],t);case"html":return l(["js","jsBlock","html"],t);case"python":case"py":case"bash":return l(["bash"],t);case"markdown":case"md":return l(["html","jsx","bash"],t);default:return l(Object.keys(c),t)}}(o,a),d=n.split("\n"),p=Object.fromEntries(a.map((e=>[e.className,{start:0,range:""}]))),m=Object.fromEntries(a.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),f=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),h=Object.fromEntries(a.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let r=0;r<d.length;){const e=d[r].match(u);if(!e){r+=1;continue}const t=e.slice(1).find((e=>void 0!==e));m[t]?p[m[t]].range+=`${r},`:f[t]?p[f[t]].start=r:h[t]&&(p[h[t]].range+=`${p[h[t]].start}-${r-1},`),d.splice(r,1)}n=d.join("\n");const g={};return Object.entries(p).forEach((e=>{let[t,{range:n}]=e;r()(n).forEach((e=>{g[e]??=[],g[e].push(t)}))})),{lineClassNames:g,code:n}}function m(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[o,r]=e;const a=t[o];a&&"string"==typeof r&&(n[a]=r)})),n}},33480:(e,t,n)=>{"use strict";n.d(t,{u:()=>p});var o=n(14041),r=n(86090),a=n(25260),s=n(99925),c=n(30559);function l(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:o,default:r}}=e;return{value:t,label:n,attributes:o,default:r}}))}function i(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??l(n);return function(e){const t=(0,s.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function u(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function d(e){let{queryString:t=!1,groupId:n}=e;const s=(0,r.W6)(),c=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,a.aZ)(c),(0,o.useCallback)((e=>{if(!c)return;const t=new URLSearchParams(s.location.search);t.set(c,e),s.replace({...s.location,search:t.toString()})}),[c,s])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=i(e),[s,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!u({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=n.find((e=>e.default))??n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:a}))),[p,m]=d({queryString:n,groupId:r}),[f,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,c.Dv)(n);return[r,(0,o.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),g=(()=>{const e=p??f;return u({value:e,tabValues:a})?e:null})();(0,o.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!u({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),m(e),h(e)}),[m,h,a]),tabValues:a}}},11431:(e,t)=>{function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,r,a]=t;if(o&&a){o=parseInt(o),a=parseInt(a);const e=o<a?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(a+=e);for(let t=o;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);