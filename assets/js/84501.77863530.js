/*! For license information please see 84501.77863530.js.LICENSE.txt */
"use strict";(self.webpackChunk_documentation_serenity_js_org=self.webpackChunk_documentation_serenity_js_org||[]).push([[84501],{37318:(t,e)=>{Object.defineProperty(e,Symbol.toStringTag,{value:"Module"});const i=window,s=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),r=new WeakMap;let o=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(s&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=r.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&r.set(e,t))}return t}toString(){return this.cssText}};const a=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,n))(e)})(t):t;var l;const h=window,c=h.trustedTypes,d=c?c.emptyScript:"",u=h.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?d:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch{i=null}}return i}},g=(t,e)=>e!==t&&(e==e||t==t),_={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:g};let v=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=_){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||_}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{s?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const s=document.createElement("style"),n=i.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=e.cssText,t.appendChild(s)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=_){var s;const n=this.constructor._$Ep(t,i);if(void 0!==n&&!0===i.reflect){const r=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:p).toAttribute(e,i.type);this._$El=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,n=s._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=s.getPropertyOptions(n),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:p;this._$El=n,this[n]=r.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||g)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(s){throw e=!1,this._$Ek(),s}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};var m;v.finalized=!0,v.elementProperties=new Map,v.elementStyles=[],v.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:v}),(null!==(l=h.reactiveElementVersions)&&void 0!==l?l:h.reactiveElementVersions=[]).push("1.6.1");const f=window,$=f.trustedTypes,y=$?$.createPolicy("lit-html",{createHTML:t=>t}):void 0,A=`lit$${(Math.random()+"").slice(9)}$`,E="?"+A,S=`<${E}>`,b=document,C=(t="")=>b.createComment(t),w=t=>null===t||"object"!=typeof t&&"function"!=typeof t,U=Array.isArray,O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,N=/-->/g,P=/>/g,k=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),R=/'/g,T=/"/g,x=/^(?:script|style|textarea|title)$/i,I=(W=1,(t,...e)=>({_$litType$:W,strings:t,values:e})),M=Symbol.for("lit-noChange"),H=Symbol.for("lit-nothing"),L=new WeakMap,G=b.createTreeWalker(b,129,null,!1);var W;class j{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,r=0;const o=t.length-1,a=this.parts,[l,h]=((t,e)=>{const i=t.length-1,s=[];let n,r=2===e?"<svg>":"",o=O;for(let l=0;l<i;l++){const e=t[l];let i,a,h=-1,c=0;for(;c<e.length&&(o.lastIndex=c,a=o.exec(e),null!==a);)c=o.lastIndex,o===O?"!--"===a[1]?o=N:void 0!==a[1]?o=P:void 0!==a[2]?(x.test(a[2])&&(n=RegExp("</"+a[2],"g")),o=k):void 0!==a[3]&&(o=k):o===k?">"===a[0]?(o=n??O,h=-1):void 0===a[1]?h=-2:(h=o.lastIndex-a[2].length,i=a[1],o=void 0===a[3]?k:'"'===a[3]?T:R):o===T||o===R?o=k:o===N||o===P?o=O:(o=k,n=void 0);const d=o===k&&t[l+1].startsWith("/>")?" ":"";r+=o===O?e+S:h>=0?(s.push(i),e.slice(0,h)+"$lit$"+e.slice(h)+A+d):e+A+(-2===h?(s.push(void 0),l):d)}const a=r+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==y?y.createHTML(a):a,s]})(t,e);if(this.el=j.createElement(l,i),G.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=G.nextNode())&&a.length<o;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(A)){const i=h[r++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(A),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?Z:"?"===e[1]?K:"@"===e[1]?V:B})}else a.push({type:6,index:n})}for(const e of t)s.removeAttribute(e)}if(x.test(s.tagName)){const t=s.textContent.split(A),e=t.length-1;if(e>0){s.textContent=$?$.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],C()),G.nextNode(),a.push({type:2,index:++n});s.append(t[e],C())}}}else if(8===s.nodeType)if(s.data===E)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(A,t+1));)a.push({type:7,index:n}),t+=A.length-1}n++}}static createElement(t,e){const i=b.createElement("template");return i.innerHTML=t,i}}function z(t,e,i=t,s){var n,r,o,a;if(e===M)return e;let l=void 0!==s?null===(n=i._$Co)||void 0===n?void 0:n[s]:i._$Cl;const h=w(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==h&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===h?l=void 0:(l=new h(t),l._$AT(t,i,s)),void 0!==s?(null!==(o=(a=i)._$Co)&&void 0!==o?o:a._$Co=[])[s]=l:i._$Cl=l),void 0!==l&&(e=z(t,l._$AS(t,e.values),l,s)),e}class D{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:s}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:b).importNode(i,!0);G.currentNode=n;let r=G.nextNode(),o=0,a=0,l=s[0];for(;void 0!==l;){if(o===l.index){let e;2===l.type?e=new Y(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new F(r,this,t)),this.u.push(e),l=s[++a]}o!==(null==l?void 0:l.index)&&(r=G.nextNode(),o++)}return n}p(t){let e=0;for(const i of this.u)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Y{constructor(t,e,i,s){var n;this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cm=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=z(this,t,e),w(t)?t===H||null==t||""===t?(this._$AH!==H&&this._$AR(),this._$AH=H):t!==this._$AH&&t!==M&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>U(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==H&&w(this._$AH)?this._$AA.nextSibling.data=t:this.T(b.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=j.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.p(i);else{const t=new D(n,this),e=t.v(this.options);t.p(i),this.T(e),this._$AH=t}}_$AC(t){let e=L.get(t.strings);return void 0===e&&L.set(t.strings,e=new j(t)),e}k(t){U(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new Y(this.O(C()),this.O(C()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cm=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}let B=class{constructor(t,e,i,s,n){this.type=1,this._$AH=H,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=H}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let r=!1;if(void 0===n)t=z(this,t,e,0),r=!w(t)||t!==this._$AH&&t!==M,r&&(this._$AH=t);else{const s=t;let o,a;for(t=n[0],o=0;o<n.length-1;o++)a=z(this,s[i+o],e,o),a===M&&(a=this._$AH[o]),r||(r=!w(a)||a!==this._$AH[o]),a===H?t=H:t!==H&&(t+=(a??"")+n[o+1]),this._$AH[o]=a}r&&!s&&this.j(t)}j(t){t===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}};class Z extends B{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===H?void 0:t}}const q=$?$.emptyScript:"";class K extends B{constructor(){super(...arguments),this.type=4}j(t){t&&t!==H?this.element.setAttribute(this.name,q):this.element.removeAttribute(this.name)}}class V extends B{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=z(this,t,e,0))&&void 0!==i?i:H)===M)return;const s=this._$AH,n=t===H&&s!==H||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==H&&(s===H||n);n&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class F{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){z(this,t)}}const J=f.litHtmlPolyfillSupport;null==J||J(j,Y),(null!==(m=f.litHtmlVersions)&&void 0!==m?m:f.litHtmlVersions=[]).push("2.6.1");var Q,X;let tt=class extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var s,n;const r=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let o=r._$litPart$;if(void 0===o){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;r._$litPart$=o=new Y(e.insertBefore(C(),t),t,void 0,i??{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return M}};tt.finalized=!0,tt._$litElement$=!0,null===(Q=globalThis.litElementHydrateSupport)||void 0===Q||Q.call(globalThis,{LitElement:tt});const et=globalThis.litElementPolyfillSupport;null==et||et({LitElement:tt}),(null!==(X=globalThis.litElementVersions)&&void 0!==X?X:globalThis.litElementVersions=[]).push("3.2.2");const it=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function st(t){return(e,i)=>{return void 0!==i?(s=t,n=i,void e.constructor.createProperty(n,s)):it(t,e);var s,n}}var nt;null===(nt=window.HTMLSlotElement)||void 0===nt||nt.prototype.assignedElements;const rt=2;class ot{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const at=(t,e)=>{var i,s;const n=t._$AN;if(void 0===n)return!1;for(const r of n)null===(s=(i=r)._$AO)||void 0===s||s.call(i,e,!1),at(r,e);return!0},lt=t=>{let e,i;do{if(void 0===(e=t._$AM))break;i=e._$AN,i.delete(t),t=e}while(0===(null==i?void 0:i.size))},ht=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),ut(e)}};function ct(t){void 0!==this._$AN?(lt(this),this._$AM=t,ht(this)):this._$AM=t}function dt(t,e=!1,i=0){const s=this._$AH,n=this._$AN;if(void 0!==n&&0!==n.size)if(e)if(Array.isArray(s))for(let r=i;r<s.length;r++)at(s[r],!1),lt(s[r]);else null!=s&&(at(s,!1),lt(s));else at(this,t)}const ut=t=>{var e,i,s,n;t.type==rt&&(null!==(e=(s=t)._$AP)&&void 0!==e||(s._$AP=dt),null!==(i=(n=t)._$AQ)&&void 0!==i||(n._$AQ=ct))};class pt extends ot{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),ht(this),this.isConnected=t._$AU}_$AO(t,e=!0){var i,s;t!==this.isConnected&&(this.isConnected=t,t?null===(i=this.reconnected)||void 0===i||i.call(this):null===(s=this.disconnected)||void 0===s||s.call(this)),e&&(at(this,t),lt(this))}setValue(t){if((t=>void 0===t.strings)(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}class gt{}const _t=new WeakMap,vt=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends pt{render(t){return H}update(t,[e]){var i;const s=e!==this.Y;return s&&void 0!==this.Y&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.Y=e,this.dt=null===(i=t.options)||void 0===i?void 0:i.host,this.rt(this.ct=t.element)),H}rt(t){var e;if("function"==typeof this.Y){const i=null!==(e=this.dt)&&void 0!==e?e:globalThis;let s=_t.get(i);void 0===s&&(s=new WeakMap,_t.set(i,s)),void 0!==s.get(this.Y)&&this.Y.call(this.dt,void 0),s.set(this.Y,t),void 0!==t&&this.Y.call(this.dt,t)}else this.Y.value=t}get lt(){var t,e,i;return"function"==typeof this.Y?null===(e=_t.get(null!==(t=this.dt)&&void 0!==t?t:globalThis))||void 0===e?void 0:e.get(this.Y):null===(i=this.Y)||void 0===i?void 0:i.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});var mt=Object.defineProperty,ft=Object.getOwnPropertyDescriptor,$t=(t,e,i,s)=>{for(var n,r=s>1?void 0:s?ft(e,i):e,o=t.length-1;o>=0;o--)(n=t[o])&&(r=(s?n(e,i,r):n(r))||r);return s&&r&&mt(e,i,r),r};e.GiscusWidget=class extends tt{constructor(){super(),this.GISCUS_SESSION_KEY="giscus-session",this.GISCUS_DEFAULT_HOST="https://giscus.app",this.ERROR_SUGGESTION="Please consider reporting this error at https://github.com/giscus/giscus/issues/new.",this.__session="",this._iframeRef=new gt,this.messageEventHandler=this.handleMessageEvent.bind(this),this.hasLoaded=!1,this.host=this.GISCUS_DEFAULT_HOST,this.strict="0",this.reactionsEnabled="1",this.emitMetadata="0",this.inputPosition="bottom",this.theme="light",this.lang="en",this.loading="eager",this.setupSession(),window.addEventListener("message",this.messageEventHandler)}get iframeRef(){var t;return null==(t=this._iframeRef)?void 0:t.value}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("message",this.messageEventHandler)}_formatError(t){return`[giscus] An error occurred. Error message: "${t}".`}setupSession(){const t=location.href,e=new URL(t),i=localStorage.getItem(this.GISCUS_SESSION_KEY),s=e.searchParams.get("giscus")||"";if(this.__session="",s)return localStorage.setItem(this.GISCUS_SESSION_KEY,JSON.stringify(s)),this.__session=s,e.searchParams.delete("giscus"),e.hash="",void history.replaceState(void 0,document.title,e.toString());if(i)try{this.__session=JSON.parse(i)}catch(n){localStorage.removeItem(this.GISCUS_SESSION_KEY),console.warn(`${this._formatError(null==n?void 0:n.message)} Session has been cleared.`)}}signOut(){localStorage.removeItem(this.GISCUS_SESSION_KEY),this.__session="",this.update(new Map)}handleMessageEvent(t){if(t.origin!==this.host)return;const{data:e}=t;if("object"!=typeof e||!e.giscus)return;if(this.iframeRef&&e.giscus.resizeHeight&&(this.iframeRef.style.height=`${e.giscus.resizeHeight}px`),e.giscus.signOut)return console.log("[giscus] User has logged out. Session has been cleared."),void this.signOut();if(!e.giscus.error)return;const i=e.giscus.error;if(i.includes("Bad credentials")||i.includes("Invalid state value")||i.includes("State has expired")){if(null!==localStorage.getItem(this.GISCUS_SESSION_KEY))return console.warn(`${this._formatError(i)} Session has been cleared.`),void this.signOut();console.error(`${this._formatError(i)} No session is stored initially. ${this.ERROR_SUGGESTION}`)}i.includes("Discussion not found")?console.warn(`[giscus] ${i}. A new discussion will be created if a comment/reaction is submitted.`):console.error(`${this._formatError(i)} ${this.ERROR_SUGGESTION}`)}sendMessage(t){!this.iframeRef||!this.iframeRef.contentWindow||!this.hasLoaded||this.iframeRef.contentWindow.postMessage({giscus:t},this.host)}updateConfig(){const t={setConfig:{repo:this.repo,repoId:this.repoId,category:this.category,categoryId:this.categoryId,term:this.getTerm(),number:+this.getNumber(),strict:"1"===this.strict,reactionsEnabled:"1"===this.reactionsEnabled,emitMetadata:"1"===this.emitMetadata,inputPosition:this.inputPosition,theme:this.theme,lang:this.lang}};this.sendMessage(t)}firstUpdated(){var t;null==(t=this.iframeRef)||t.addEventListener("load",(()=>{var t;null==(t=this.iframeRef)||t.classList.remove("loading"),this.hasLoaded=!0,this.updateConfig()}))}requestUpdate(t,e,i){this.hasUpdated&&"host"!==t?this.updateConfig():super.requestUpdate(t,e,i)}getMetaContent(t,e=!1){const i=e?`meta[property='og:${t}'],`:"",s=document.querySelector(i+`meta[name='${t}']`);return s?s.content:""}_getCleanedUrl(){const t=new URL(location.href);return t.searchParams.delete("giscus"),t.hash="",t}getTerm(){switch(this.mapping){case"url":return`${this._getCleanedUrl()}`;case"title":return document.title;case"og:title":return this.getMetaContent("title",!0);case"specific":return this.term||"";case"number":return"";default:return location.pathname.length<2?"index":location.pathname.substring(1).replace(/\.\w+$/,"")}}getNumber(){return"number"===this.mapping&&this.term||""}getIframeSrc(){const t=this._getCleanedUrl().toString(),e=`${t}${this.id?"#"+this.id:""}`,i=this.getMetaContent("description",!0),s=this.getMetaContent("giscus:backlink")||t,n={origin:e,session:this.__session,repo:this.repo,repoId:this.repoId||"",category:this.category||"",categoryId:this.categoryId||"",term:this.getTerm(),number:this.getNumber(),strict:this.strict,reactionsEnabled:this.reactionsEnabled,emitMetadata:this.emitMetadata,inputPosition:this.inputPosition,theme:this.theme,description:i,backLink:s};return`${this.host||this.GISCUS_DEFAULT_HOST}${this.lang?`/${this.lang}`:""}/widget?${new URLSearchParams(n)}`}render(){return I`
      <iframe
        title="Comments"
        scrolling="no"
        class="loading"
        ${vt(this._iframeRef)}
        src=${this.getIframeSrc()}
        loading=${this.loading}
        allow="clipboard-write"
        part="iframe"
      ></iframe>
    `}},e.GiscusWidget.styles=((t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new o(i,t,n)})`
    :host,
    iframe {
      width: 100%;
      border: none;
      min-height: 150px;
      color-scheme: light dark;
    }

    iframe.loading {
      opacity: 0;
    }
  `,$t([st({reflect:!0})],e.GiscusWidget.prototype,"host",2),$t([st({reflect:!0})],e.GiscusWidget.prototype,"repo",2),$t([st({reflect:!0})],e.GiscusWidget.prototype,"repoId",2),$t([st({reflect:!0})],e.GiscusWidget.prototype,"category",2),$t([st({reflect:!0})],e.GiscusWidget.prototype,"categoryId",2),$t([st({reflect:!0})],e.GiscusWidget.prototype,"mapping",2),$t([st({reflect:!0})],e.GiscusWidget.prototype,"term",2),$t([st({reflect:!0})],e.GiscusWidget.prototype,"strict",2),$t([st({reflect:!0})],e.GiscusWidget.prototype,"reactionsEnabled",2),$t([st({reflect:!0})],e.GiscusWidget.prototype,"emitMetadata",2),$t([st({reflect:!0})],e.GiscusWidget.prototype,"inputPosition",2),$t([st({reflect:!0})],e.GiscusWidget.prototype,"theme",2),$t([st({reflect:!0})],e.GiscusWidget.prototype,"lang",2),$t([st({reflect:!0})],e.GiscusWidget.prototype,"loading",2),e.GiscusWidget=$t([(t=>e=>{return"function"==typeof e?(i=t,s=e,customElements.define(i,s),s):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){customElements.define(t,e)}}})(t,e);var i,s})("giscus-widget")],e.GiscusWidget)},64390:(t,e,i)=>{const s=i(52322),n=i(2784);t.exports=function({id:t,host:e,repo:r,repoId:o,category:a,categoryId:l,mapping:h,term:c,strict:d,reactionsEnabled:u,emitMetadata:p,inputPosition:g,theme:_,lang:v,loading:m}){const[f,$]=n.useState(!1);return n.useEffect((()=>{f||(Promise.resolve().then((()=>i(37318))),$(!0))}),[]),f?s.jsx("giscus-widget",{id:t,host:e,repo:r,repoid:o,category:a,categoryid:l,mapping:h,term:c,strict:d,reactionsenabled:u,emitmetadata:p,inputposition:g,theme:_,lang:v,loading:m}):null}},78335:(t,e,i)=>{i.d(e,{Z:()=>c});var s=i(2784),n=i(22376),r=i(70357),o=i(7896),a=i(6277);const l={iconEdit:"iconEdit_UohW"};function h(t){let{className:e,...i}=t;return s.createElement("svg",(0,o.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,a.Z)(l.iconEdit,e),"aria-hidden":"true"},i),s.createElement("g",null,s.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function c(t){let{editUrl:e}=t;return s.createElement("a",{href:e,target:"_blank",rel:"noreferrer noopener",className:r.k.common.editThisPage},s.createElement(h,null),s.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},60919:(t,e,i)=>{i.d(e,{Z:()=>o});var s=i(2784),n=i(6277),r=i(40597);function o(t){const{permalink:e,title:i,subLabel:o,isNext:a}=t;return s.createElement(r.default,{className:(0,n.Z)("pagination-nav__link",a?"pagination-nav__link--next":"pagination-nav__link--prev"),to:e},o&&s.createElement("div",{className:"pagination-nav__sublabel"},o),s.createElement("div",{className:"pagination-nav__label"},i))}},6010:(t,e,i)=>{i.d(e,{Z:()=>a});var s=i(2784),n=i(6277),r=i(40597);const o={tag:"tag_qE9H",tagRegular:"tagRegular_aHXt",tagWithCount:"tagWithCount_UC8q"};function a(t){let{permalink:e,label:i,count:a}=t;return s.createElement(r.default,{href:e,className:(0,n.Z)(o.tag,a?o.tagWithCount:o.tagRegular)},i,a&&s.createElement("span",null,a))}},97688:(t,e,i)=>{i.d(e,{Z:()=>l});var s=i(2784),n=i(6277),r=i(22376),o=i(6010);const a={tags:"tags_q74f",tag:"tag_lSC7"};function l(t){let{tags:e}=t;return s.createElement(s.Fragment,null,s.createElement("b",null,s.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),s.createElement("ul",{className:(0,n.Z)(a.tags,"padding--none","margin-left--sm")},e.map((t=>{let{label:e,permalink:i}=t;return s.createElement("li",{key:i,className:a.tag},s.createElement(o.Z,{label:e,permalink:i}))}))))}},11837:(t,e,i)=>{i(37320);var s=i(2784),n=60103;if(e.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var r=Symbol.for;n=r("react.element"),e.Fragment=r("react.fragment")}var o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function h(t,e,i){var s,r={},h=null,c=null;for(s in void 0!==i&&(h=""+i),void 0!==e.key&&(h=""+e.key),void 0!==e.ref&&(c=e.ref),e)a.call(e,s)&&!l.hasOwnProperty(s)&&(r[s]=e[s]);if(t&&t.defaultProps)for(s in e=t.defaultProps)void 0===r[s]&&(r[s]=e[s]);return{$$typeof:n,type:t,key:h,ref:c,props:r,_owner:o.current}}e.jsx=h,e.jsxs=h},52322:(t,e,i)=>{t.exports=i(11837)},11044:(t,e,i)=>{i.d(e,{Z:()=>s});const s=i(64390)}}]);