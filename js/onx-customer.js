/*! For license information please see onx-customer.js.LICENSE.txt */
System.register(["react","react-dom","@mui/material"],(function(e,t){var r={},n={},o={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(o,"__esModule",{value:!0}),{setters:[function(e){Object.keys(e).forEach((function(t){r[t]=e[t]}))},function(e){n.default=e.default},function(e){Object.keys(e).forEach((function(t){o[t]=e[t]}))}],execute:function(){e((()=>{var e={418:e=>{"use strict";var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,i){for(var a,c,s=o(e),u=1;u<arguments.length;u++){for(var p in a=Object(arguments[u]))r.call(a,p)&&(s[p]=a[p]);if(t){c=t(a);for(var l=0;l<c.length;l++)n.call(a,c[l])&&(s[c[l]]=a[c[l]])}}return s}},703:(e,t,r)=>{"use strict";var n=r(414);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,i,a){if(a!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return r.PropTypes=r,r}},697:(e,t,r)=>{e.exports=r(703)()},414:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},251:(e,t,r)=>{"use strict";r(418);var n=r(954),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),t.Fragment=i("react.fragment")}var a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,r){var n,i={},u=null,p=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(p=t.ref),t)c.call(t,n)&&!s.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:u,ref:p,props:i,_owner:a.current}}t.jsx=u,t.jsxs=u},893:(e,t,r)=>{"use strict";e.exports=r(251)},722:(e,t,r)=>{const n=r(905).R;t.s=function(e){if(e||(e=1),!r.y.meta||!r.y.meta.url)throw console.error("__system_context__",r.y),Error("systemjs-webpack-interop was provided an unknown SystemJS context. Expected context.meta.url, but none was provided");r.p=n(r.y.meta.url,e)}},905:(e,t,r)=>{t.R=function(e,t){var r=document.createElement("a");r.href=e;for(var n="/"===r.pathname[0]?r.pathname:"/"+r.pathname,o=0,i=n.length;o!==t&&i>=0;)"/"===n[--i]&&o++;if(o!==t)throw Error("systemjs-webpack-interop: rootDirectoryLevel ("+t+") is greater than the number of directories ("+o+") in the URL path "+e);var a=n.slice(0,i+1);return r.protocol+"//"+r.host+a};Number.isInteger},303:e=>{"use strict";e.exports=o},954:e=>{"use strict";e.exports=r},493:e=>{"use strict";e.exports=n}},i={};function a(t){var r=i[t];if(void 0!==r)return r.exports;var n=i[t]={exports:{}};return e[t](n,n.exports,a),n.exports}a.y=t,a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.p="";var c={};return(0,a(722).s)(1),(()=>{"use strict";a.r(c),a.d(c,{bootstrap:()=>rt,mount:()=>nt,unmount:()=>ot});var e=a(954),t=a(493);function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function n(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){var r;if("function"!=typeof(r=t.domElement?function(){return t.domElement}:t.domElementGetter?t.domElementGetter:e.domElementGetter?e.domElementGetter:function(e){var t=e.appName||e.name;if(!t)throw Error("single-spa's dom-element-getter-helpers was not given an application name as a prop, so it can't make a unique dom element container for the react application");var r="single-spa-application:".concat(t);return function(){var e=document.getElementById(r);return e||((e=document.createElement("div")).id=r,document.body.appendChild(e)),e}}(t)))throw Error("single-spa's dom-element-getter-helpers was given an invalid domElementGetter for application or parcel '".concat(t.name,"'. Expected a function, received ").concat(s(r)));return function(){var e=r(t);if(!(e instanceof HTMLElement))throw Error("single-spa's dom-element-getter-helpers: domElementGetter returned an invalid dom element for application or parcel '".concat(t.name,"'. Expected HTMLElement, received ").concat(s(e)));return e}}var p=null;try{p=require("react").createContext()}catch(r){}var l={React:null,ReactDOM:null,rootComponent:null,loadRootComponent:null,renderType:null,errorBoundary:null,errorBoundaryClass:null,domElementGetter:null,parcelCanUpdate:!0,suppressComponentDidCatchWarning:!1,domElements:{},renderResults:{},updateResolves:{}};function f(e,t){return e.rootComponent?Promise.resolve():e.loadRootComponent(t).then((function(t){e.rootComponent=t}))}function d(e,t){return new Promise((function(r,n){e.suppressComponentDidCatchWarning||!function(e){if(!(e&&"string"==typeof e.version&&e.version.indexOf(".")>=0))return!1;var t=e.version.slice(0,e.version.indexOf("."));try{return Number(t)>=16}catch(e){return!1}}(e.React)||e.errorBoundary||(e.rootComponent.prototype?e.rootComponent.prototype.componentDidCatch||console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent should implement componentDidCatch to avoid accidentally unmounting the entire single-spa application.")):console.warn("single-spa-react: ".concat(t.name||t.appName||t.childAppName,"'s rootComponent does not implement an error boundary.  If using a functional component, consider providing an opts.errorBoundary to singleSpaReact(opts).")));var o=g(e,t,(function(){r(this)})),i=u(e,t)(),a=function(e){var t=e.opts,r=e.elementToRender,n=e.domElement,o="function"==typeof t.renderType?t.renderType():t.renderType;if(["createRoot","unstable_createRoot","createBlockingRoot","unstable_createBlockingRoot"].indexOf(o)>=0){var i=t.ReactDOM[o](n);return i.render(r),i}return"hydrate"===o?t.ReactDOM.hydrate(r,n):t.ReactDOM.render(r,n),null}({elementToRender:o,domElement:i,opts:e});e.domElements[t.name]=i,e.renderResults[t.name]=a}))}function m(e,t){return new Promise((function(r){e.unmountFinished=r;var n=e.renderResults[t.name];n&&n.unmount?n.unmount():e.ReactDOM.unmountComponentAtNode(e.domElements[t.name]),delete e.domElements[t.name],delete e.renderResults[t.name]}))}function h(e,t){return new Promise((function(r){e.updateResolves[t.name]||(e.updateResolves[t.name]=[]),e.updateResolves[t.name].push(r);var n=g(e,t,null),o=e.renderResults[t.name];if(o&&o.render)o.render(n);else{var i=u(e,t)();e.ReactDOM.render(n,i)}}))}function g(e,t,r){var o=e.React.createElement(e.rootComponent,t),i=p?e.React.createElement(p.Provider,{value:t},o):o;function a(e){a.displayName="SingleSpaRoot(".concat(e.name,")")}return(e.errorBoundary||t.errorBoundary||e.errorBoundaryClass||t.errorBoundaryClass)&&(e.errorBoundaryClass=e.errorBoundaryClass||t.errorBoundaryClass||function(e,t){function r(t){e.React.Component.apply(this,arguments),this.state={caughtError:null,caughtErrorInfo:null},r.displayName="SingleSpaReactErrorBoundary(".concat(t.name,")")}return r.prototype=Object.create(e.React.Component.prototype),r.prototype.render=function(){return this.state.caughtError?(e.errorBoundary||t.errorBoundary)(this.state.caughtError,this.state.caughtErrorInfo,this.props):this.props.children},r.prototype.componentDidCatch=function(e,t){this.setState({caughtError:e,caughtErrorInfo:t})},r}(e,t),i=e.React.createElement(e.errorBoundaryClass,t,i)),i=e.React.createElement(a,n(n({},t),{},{mountFinished:r,updateFinished:function(){e.updateResolves[t.name]&&(e.updateResolves[t.name].forEach((function(e){return e()})),delete e.updateResolves[t.name])},unmountFinished:function(){setTimeout(e.unmountFinished)}}),i),a.prototype=Object.create(e.React.Component.prototype),a.prototype.componentDidMount=function(){setTimeout(this.props.mountFinished)},a.prototype.componentWillUnmount=function(){setTimeout(this.props.unmountFinished)},a.prototype.render=function(){return setTimeout(this.props.updateFinished),this.props.children},i}function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){x(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function x(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return w(e)}function j(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=v(e);if(t){var o=v(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return E(this,r)}}var R=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(o,e.Component);var r,n=j(o);function o(e){var t;if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),x(w(t=n.call(this,e)),"handleRef",(function(e){t.el=e})),x(w(t),"addThingToDo",(function(e,r){t.state.hasError&&"unmount"!==e||(t.nextThingToDo=(t.nextThingToDo||Promise.resolve()).then((function(){if(!t.unmounted||"unmount"===e)return r.apply(void 0,arguments)})).catch((function(r){throw t.nextThingToDo=Promise.resolve(),t.setState({hasError:!0}),r&&r.message&&(r.message="During '".concat(e,"', parcel threw an error: ").concat(r.message)),t.props.handleError?t.props.handleError(r):setTimeout((function(){throw r})),r})))})),x(w(t),"getParcelProps",(function(){var e=b(b({},t.props),{},{domElement:t.el});return delete e.mountParcel,delete e.config,delete e.wrapWith,delete e.wrapStyle,delete e.appendTo,delete e.handleError,delete e.parcelDidMount,e})),t.state={hasError:!1},!e.config)throw new Error("single-spa-react's Parcel component requires the 'config' prop to either be a parcel config or a loading function that returns a promise. See https://github.com/single-spa/single-spa-react");return t}return(r=[{key:"componentDidMount",value:function(){var e=this;this.addThingToDo("mount",(function(){var t,r=e.props.mountParcel||e.mountParcel;if(!r)throw new Error("\n\t\t\t\t  <Parcel /> was not passed a mountParcel prop, nor is it rendered where mountParcel is within the React context.\n\t\t\t\t  If you are using <Parcel /> within a module that is not a single-spa application, you will need to import mountRootParcel from single-spa and pass it into <Parcel /> as a mountParcel prop\t\n\t\t\t\t");return e.el?t=e.el:(e.createdDomElement=t=document.createElement(e.props.wrapWith),Object.keys(e.props.wrapStyle).forEach((function(r){t.style[r]=e.props.wrapStyle[r]})),e.props.appendTo.appendChild(t)),e.parcel=r(e.props.config,b({domElement:t},e.getParcelProps())),e.parcel.mountPromise.then(e.props.parcelDidMount),e.parcel.mountPromise}))}},{key:"componentDidUpdate",value:function(){var e=this;this.addThingToDo("update",(function(){if(e.parcel&&e.parcel.update)return e.parcel.update(e.getParcelProps())}))}},{key:"componentWillUnmount",value:function(){var e=this;this.addThingToDo("unmount",(function(){if(e.parcel&&"MOUNTED"===e.parcel.getStatus())return e.parcel.unmount()})),this.createdDomElement&&this.createdDomElement.parentNode.removeChild(this.createdDomElement),this.unmounted=!0}},{key:"render",value:function(){var t=this;if(this.props.appendTo)return p&&p.Consumer?e.createElement(p.Consumer,null,(function(e){return t.mountParcel=e?e.mountParcel:null,null})):null;var r=p&&p.Consumer?e.createElement(p.Consumer,null,(function(e){return t.mountParcel=e?e.mountParcel:null,null})):void 0;return e.createElement(this.props.wrapWith,{ref:this.handleRef,style:this.props.wrapStyle,className:this.props.wrapClassName},r)}}])&&function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(o.prototype,r),o}();x(R,"defaultProps",{wrapWith:"div",wrapStyle:{},parcelDidMount:function(){}});const S={Mui:a(303)};function k(){return k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},k.apply(this,arguments)}function P(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}function C(e){return null!==e&&"object"==typeof e&&e.constructor===Object}function T(e,t,r={clone:!0}){const n=r.clone?k({},e):e;return C(e)&&C(t)&&Object.keys(t).forEach((o=>{"__proto__"!==o&&(C(t[o])&&o in e&&C(e[o])?n[o]=T(e[o],t[o],r):n[o]=t[o])})),n}const D=["values","unit","step"],M={borderRadius:4};a(697);const B={xs:0,sm:600,md:900,lg:1200,xl:1536},_={keys:["xs","sm","md","lg","xl"],up:e=>`@media (min-width:${B[e]}px)`};const $=function(e,t){return t?T(e,t,{clone:!1}):e},F={m:"margin",p:"padding"},W={t:"Top",r:"Right",b:"Bottom",l:"Left",x:["Left","Right"],y:["Top","Bottom"]},A={marginX:"mx",marginY:"my",paddingX:"px",paddingY:"py"},I=function(e){const t={};return e=>(void 0===t[e]&&(t[e]=(e=>{if(e.length>2){if(!A[e])return[e];e=A[e]}const[t,r]=e.split(""),n=F[t],o=W[r]||"";return Array.isArray(o)?o.map((e=>n+e)):[n+o]})(e)),t[e])}(),z=["m","mt","mr","mb","ml","mx","my","margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","marginInline","marginInlineStart","marginInlineEnd","marginBlock","marginBlockStart","marginBlockEnd"],N=["p","pt","pr","pb","pl","px","py","padding","paddingTop","paddingRight","paddingBottom","paddingLeft","paddingX","paddingY","paddingInline","paddingInlineStart","paddingInlineEnd","paddingBlock","paddingBlockStart","paddingBlockEnd"],L=[...z,...N];function U(e){return function(e,t,r,n){const o=(i=e,((a="spacing")&&"string"==typeof a?a.split(".").reduce(((e,t)=>e&&e[t]?e[t]:null),i):null)||8);var i,a;return"number"==typeof o?e=>"string"==typeof e?e:o*e:Array.isArray(o)?e=>"string"==typeof e?e:o[e]:"function"==typeof o?o:()=>{}}(e)}function G(e,t,r,n){if(-1===t.indexOf(r))return null;const o=function(e,t){return r=>e.reduce(((e,n)=>(e[n]=function(e,t){if("string"==typeof t||null==t)return t;const r=e(Math.abs(t));return t>=0?r:"number"==typeof r?-r:`-${r}`}(t,r),e)),{})}(I(r),n);return function(e,t,r){const n=e.theme||{};if(Array.isArray(t)){const e=n.breakpoints||_;return t.reduce(((n,o,i)=>(n[e.up(e.keys[i])]=r(t[i]),n)),{})}if("object"==typeof t){const e=n.breakpoints||_;return Object.keys(t).reduce(((n,o)=>{if(-1!==Object.keys(e.values||B).indexOf(o))n[e.up(o)]=r(t[o],o);else{const e=o;n[e]=t[e]}return n}),{})}return r(t)}(e,e[r],o)}function H(e,t){const r=U(e.theme);return Object.keys(e).map((n=>G(e,t,n,r))).reduce($,{})}function Y(e){return H(e,z)}function q(e){return H(e,N)}function X(e){return H(e,L)}Y.propTypes={},Y.filterProps=z,q.propTypes={},q.filterProps=N,X.propTypes={},X.filterProps=L;const V=["breakpoints","palette","spacing","shape"];function J(e){let t="https://mui.com/production-error/?code="+e;for(let e=1;e<arguments.length;e+=1)t+="&args[]="+encodeURIComponent(arguments[e]);return"Minified MUI error #"+e+"; visit "+t+" for the full message."}function K(e,t=0,r=1){return Math.min(Math.max(t,e),r)}function Q(e){if(e.type)return e;if("#"===e.charAt(0))return Q(function(e){e=e.substr(1);const t=new RegExp(`.{1,${e.length>=6?2:1}}`,"g");let r=e.match(t);return r&&1===r[0].length&&(r=r.map((e=>e+e))),r?`rgb${4===r.length?"a":""}(${r.map(((e,t)=>t<3?parseInt(e,16):Math.round(parseInt(e,16)/255*1e3)/1e3)).join(", ")})`:""}(e));const t=e.indexOf("("),r=e.substring(0,t);if(-1===["rgb","rgba","hsl","hsla","color"].indexOf(r))throw new Error(J(9,e));let n,o=e.substring(t+1,e.length-1);if("color"===r){if(o=o.split(" "),n=o.shift(),4===o.length&&"/"===o[3].charAt(0)&&(o[3]=o[3].substr(1)),-1===["srgb","display-p3","a98-rgb","prophoto-rgb","rec-2020"].indexOf(n))throw new Error(J(10,n))}else o=o.split(",");return o=o.map((e=>parseFloat(e))),{type:r,values:o,colorSpace:n}}function Z(e){const{type:t,colorSpace:r}=e;let{values:n}=e;return-1!==t.indexOf("rgb")?n=n.map(((e,t)=>t<3?parseInt(e,10):e)):-1!==t.indexOf("hsl")&&(n[1]=`${n[1]}%`,n[2]=`${n[2]}%`),n=-1!==t.indexOf("color")?`${r} ${n.join(" ")}`:`${n.join(", ")}`,`${t}(${n})`}function ee(e){let t="hsl"===(e=Q(e)).type?Q(function(e){e=Q(e);const{values:t}=e,r=t[0],n=t[1]/100,o=t[2]/100,i=n*Math.min(o,1-o),a=(e,t=(e+r/30)%12)=>o-i*Math.max(Math.min(t-3,9-t,1),-1);let c="rgb";const s=[Math.round(255*a(0)),Math.round(255*a(8)),Math.round(255*a(4))];return"hsla"===e.type&&(c+="a",s.push(t[3])),Z({type:c,values:s})}(e)).values:e.values;return t=t.map((t=>("color"!==e.type&&(t/=255),t<=.03928?t/12.92:((t+.055)/1.055)**2.4))),Number((.2126*t[0]+.7152*t[1]+.0722*t[2]).toFixed(3))}const te={black:"#000",white:"#fff"},re={50:"#fafafa",100:"#f5f5f5",200:"#eeeeee",300:"#e0e0e0",400:"#bdbdbd",500:"#9e9e9e",600:"#757575",700:"#616161",800:"#424242",900:"#212121",A100:"#f5f5f5",A200:"#eeeeee",A400:"#bdbdbd",A700:"#616161"},ne="#f3e5f5",oe="#ce93d8",ie="#ba68c8",ae="#ab47bc",ce="#9c27b0",se="#7b1fa2",ue="#e57373",pe="#ef5350",le="#f44336",fe="#d32f2f",de="#c62828",me="#ffb74d",he="#ffa726",ge="#ff9800",ye="#f57c00",be="#e65100",xe="#e3f2fd",ve="#90caf9",Oe="#42a5f5",we="#1976d2",Ee="#1565c0",je="#4fc3f7",Re="#29b6f6",Se="#03a9f4",ke="#0288d1",Pe="#01579b",Ce="#81c784",Te="#66bb6a",De="#4caf50",Me="#388e3c",Be="#2e7d32",_e="#1b5e20",$e=["mode","contrastThreshold","tonalOffset"],Fe={text:{primary:"rgba(0, 0, 0, 0.87)",secondary:"rgba(0, 0, 0, 0.6)",disabled:"rgba(0, 0, 0, 0.38)"},divider:"rgba(0, 0, 0, 0.12)",background:{paper:te.white,default:te.white},action:{active:"rgba(0, 0, 0, 0.54)",hover:"rgba(0, 0, 0, 0.04)",hoverOpacity:.04,selected:"rgba(0, 0, 0, 0.08)",selectedOpacity:.08,disabled:"rgba(0, 0, 0, 0.26)",disabledBackground:"rgba(0, 0, 0, 0.12)",disabledOpacity:.38,focus:"rgba(0, 0, 0, 0.12)",focusOpacity:.12,activatedOpacity:.12}},We={text:{primary:te.white,secondary:"rgba(255, 255, 255, 0.7)",disabled:"rgba(255, 255, 255, 0.5)",icon:"rgba(255, 255, 255, 0.5)"},divider:"rgba(255, 255, 255, 0.12)",background:{paper:"#121212",default:"#121212"},action:{active:te.white,hover:"rgba(255, 255, 255, 0.08)",hoverOpacity:.08,selected:"rgba(255, 255, 255, 0.16)",selectedOpacity:.16,disabled:"rgba(255, 255, 255, 0.3)",disabledBackground:"rgba(255, 255, 255, 0.12)",disabledOpacity:.38,focus:"rgba(255, 255, 255, 0.12)",focusOpacity:.12,activatedOpacity:.24}};function Ae(e,t,r,n){const o=n.light||n,i=n.dark||1.5*n;e[t]||(e.hasOwnProperty(r)?e[t]=e[r]:"light"===t?e.light=function(e,t){if(e=Q(e),t=K(t),-1!==e.type.indexOf("hsl"))e.values[2]+=(100-e.values[2])*t;else if(-1!==e.type.indexOf("rgb"))for(let r=0;r<3;r+=1)e.values[r]+=(255-e.values[r])*t;else if(-1!==e.type.indexOf("color"))for(let r=0;r<3;r+=1)e.values[r]+=(1-e.values[r])*t;return Z(e)}(e.main,o):"dark"===t&&(e.dark=function(e,t){if(e=Q(e),t=K(t),-1!==e.type.indexOf("hsl"))e.values[2]*=1-t;else if(-1!==e.type.indexOf("rgb")||-1!==e.type.indexOf("color"))for(let r=0;r<3;r+=1)e.values[r]*=1-t;return Z(e)}(e.main,i)))}const Ie=["fontFamily","fontSize","fontWeightLight","fontWeightRegular","fontWeightMedium","fontWeightBold","htmlFontSize","allVariants","pxToRem"],ze={textTransform:"uppercase"},Ne='"Roboto", "Helvetica", "Arial", sans-serif';function Le(e,t){const r="function"==typeof t?t(e):t,{fontFamily:n=Ne,fontSize:o=14,fontWeightLight:i=300,fontWeightRegular:a=400,fontWeightMedium:c=500,fontWeightBold:s=700,htmlFontSize:u=16,allVariants:p,pxToRem:l}=r,f=P(r,Ie),d=o/14,m=l||(e=>e/u*d+"rem"),h=(e,t,r,o,i)=>{return k({fontFamily:n,fontWeight:e,fontSize:m(t),lineHeight:r},n===Ne?{letterSpacing:(a=o/t,Math.round(1e5*a)/1e5+"em")}:{},i,p);var a},g={h1:h(i,96,1.167,-1.5),h2:h(i,60,1.2,-.5),h3:h(a,48,1.167,0),h4:h(a,34,1.235,.25),h5:h(a,24,1.334,0),h6:h(c,20,1.6,.15),subtitle1:h(a,16,1.75,.15),subtitle2:h(c,14,1.57,.1),body1:h(a,16,1.5,.15),body2:h(a,14,1.43,.15),button:h(c,14,1.75,.4,ze),caption:h(a,12,1.66,.4),overline:h(a,12,2.66,1,ze)};return T(k({htmlFontSize:u,pxToRem:m,fontFamily:n,fontSize:o,fontWeightLight:i,fontWeightRegular:a,fontWeightMedium:c,fontWeightBold:s},g),f,{clone:!1})}function Ue(...e){return[`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,0.2)`,`${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,0.14)`,`${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,0.12)`].join(",")}const Ge=["none",Ue(0,2,1,-1,0,1,1,0,0,1,3,0),Ue(0,3,1,-2,0,2,2,0,0,1,5,0),Ue(0,3,3,-2,0,3,4,0,0,1,8,0),Ue(0,2,4,-1,0,4,5,0,0,1,10,0),Ue(0,3,5,-1,0,5,8,0,0,1,14,0),Ue(0,3,5,-1,0,6,10,0,0,1,18,0),Ue(0,4,5,-2,0,7,10,1,0,2,16,1),Ue(0,5,5,-3,0,8,10,1,0,3,14,2),Ue(0,5,6,-3,0,9,12,1,0,3,16,2),Ue(0,6,6,-3,0,10,14,1,0,4,18,3),Ue(0,6,7,-4,0,11,15,1,0,4,20,3),Ue(0,7,8,-4,0,12,17,2,0,5,22,4),Ue(0,7,8,-4,0,13,19,2,0,5,24,4),Ue(0,7,9,-4,0,14,21,2,0,5,26,4),Ue(0,8,9,-5,0,15,22,2,0,6,28,5),Ue(0,8,10,-5,0,16,24,2,0,6,30,5),Ue(0,8,11,-5,0,17,26,2,0,6,32,5),Ue(0,9,11,-5,0,18,28,2,0,7,34,6),Ue(0,9,12,-6,0,19,29,2,0,7,36,6),Ue(0,10,13,-6,0,20,31,3,0,8,38,7),Ue(0,10,13,-6,0,21,33,3,0,8,40,7),Ue(0,10,14,-6,0,22,35,3,0,8,42,7),Ue(0,11,14,-7,0,23,36,3,0,9,44,8),Ue(0,11,15,-7,0,24,38,3,0,9,46,8)],He=["duration","easing","delay"],Ye={easeInOut:"cubic-bezier(0.4, 0, 0.2, 1)",easeOut:"cubic-bezier(0.0, 0, 0.2, 1)",easeIn:"cubic-bezier(0.4, 0, 1, 1)",sharp:"cubic-bezier(0.4, 0, 0.6, 1)"},qe={shortest:150,shorter:200,short:250,standard:300,complex:375,enteringScreen:225,leavingScreen:195};function Xe(e){return`${Math.round(e)}ms`}function Ve(e){if(!e)return 0;const t=e/36;return Math.round(10*(4+15*t**.25+t/5))}function Je(e){const t=k({},Ye,e.easing),r=k({},qe,e.duration);return k({getAutoHeightDuration:Ve,create:(e=["all"],n={})=>{const{duration:o=r.standard,easing:i=t.easeInOut,delay:a=0}=n;return P(n,He),(Array.isArray(e)?e:[e]).map((e=>`${e} ${"string"==typeof o?o:Xe(o)} ${i} ${"string"==typeof a?a:Xe(a)}`)).join(",")}},e,{easing:t,duration:r})}const Ke={mobileStepper:1e3,speedDial:1050,appBar:1100,drawer:1200,modal:1300,snackbar:1400,tooltip:1500},Qe=["breakpoints","mixins","spacing","palette","transitions","typography","shape"];const Ze=function(e={},...t){const{mixins:r={},palette:n={},transitions:o={},typography:i={}}=e,a=P(e,Qe),c=function(e){const{mode:t="light",contrastThreshold:r=3,tonalOffset:n=.2}=e,o=P(e,$e),i=e.primary||function(e="light"){return"dark"===e?{main:ve,light:xe,dark:Oe}:{main:we,light:Oe,dark:Ee}}(t),a=e.secondary||function(e="light"){return"dark"===e?{main:oe,light:ne,dark:ae}:{main:ce,light:ie,dark:se}}(t),c=e.error||function(e="light"){return"dark"===e?{main:le,light:ue,dark:fe}:{main:fe,light:pe,dark:de}}(t),s=e.info||function(e="light"){return"dark"===e?{main:Re,light:je,dark:ke}:{main:ke,light:Se,dark:Pe}}(t),u=e.success||function(e="light"){return"dark"===e?{main:Te,light:Ce,dark:Me}:{main:Be,light:De,dark:_e}}(t),p=e.warning||function(e="light"){return"dark"===e?{main:he,light:me,dark:ye}:{main:"#ed6c02",light:ge,dark:be}}(t);function l(e){const t=function(e,t){const r=ee(e),n=ee(t);return(Math.max(r,n)+.05)/(Math.min(r,n)+.05)}(e,We.text.primary)>=r?We.text.primary:Fe.text.primary;return t}const f=({color:e,name:t,mainShade:r=500,lightShade:o=300,darkShade:i=700})=>{if(!(e=k({},e)).main&&e[r]&&(e.main=e[r]),!e.hasOwnProperty("main"))throw new Error(J(11,t?` (${t})`:"",r));if("string"!=typeof e.main)throw new Error(J(12,t?` (${t})`:"",JSON.stringify(e.main)));return Ae(e,"light",o,n),Ae(e,"dark",i,n),e.contrastText||(e.contrastText=l(e.main)),e},d={dark:We,light:Fe};return T(k({common:te,mode:t,primary:f({color:i,name:"primary"}),secondary:f({color:a,name:"secondary",mainShade:"A400",lightShade:"A200",darkShade:"A700"}),error:f({color:c,name:"error"}),warning:f({color:p,name:"warning"}),info:f({color:s,name:"info"}),success:f({color:u,name:"success"}),grey:re,contrastThreshold:r,getContrastText:l,augmentColor:f,tonalOffset:n},d[t]),o)}(n),s=function(e={},...t){const{breakpoints:r={},palette:n={},spacing:o,shape:i={}}=e,a=P(e,V),c=function(e){const{values:t={xs:0,sm:600,md:900,lg:1200,xl:1536},unit:r="px",step:n=5}=e,o=P(e,D),i=Object.keys(t);function a(e){return`@media (min-width:${"number"==typeof t[e]?t[e]:e}${r})`}function c(e,o){const a=i.indexOf(o);return`@media (min-width:${"number"==typeof t[e]?t[e]:e}${r}) and (max-width:${(-1!==a&&"number"==typeof t[i[a]]?t[i[a]]:o)-n/100}${r})`}return k({keys:i,values:t,up:a,down:function(e){return`@media (max-width:${("number"==typeof t[e]?t[e]:e)-n/100}${r})`},between:c,only:function(e){return i.indexOf(e)+1<i.length?c(e,i[i.indexOf(e)+1]):a(e)},unit:r},o)}(r),s=function(e=8){if(e.mui)return e;const t=U({spacing:e}),r=(...e)=>(0===e.length?[1]:e).map((e=>{const r=t(e);return"number"==typeof r?`${r}px`:r})).join(" ");return r.mui=!0,r}(o);let u=T({breakpoints:c,direction:"ltr",components:{},palette:k({mode:"light"},n),spacing:s,shape:k({},M,i)},a);return u=t.reduce(((e,t)=>T(e,t)),u),u}(e);let u=T(s,{mixins:(p=s.breakpoints,s.spacing,l=r,k({toolbar:{minHeight:56,[`${p.up("xs")} and (orientation: landscape)`]:{minHeight:48},[p.up("sm")]:{minHeight:64}}},l)),palette:c,shadows:Ge.slice(),typography:Le(c,i),transitions:Je(o),zIndex:k({},Ke)});var p,l;return u=T(u,a),u=t.reduce(((e,t)=>T(e,t)),u),u}({typography:{fontFamily:"'Lato', sans-serif",h1:{fontSize:"40px",fontWeight:"600"},h2:{fontSize:"32px",fontWeight:"600"},h3:{fontSize:"24px",fontWeight:"600"},h4:{fontSize:"20px",fontWeight:"600"},h5:{fontSize:"16px",fontWeight:"600"},h6:{fontSize:"14px",fontWeight:"600"},body1:{fontSize:"14px"},body2:{fontSize:"12px"},button:{textTransform:"inherit"}},palette:{primary:{light:"#6E5FC9",main:"#4F3EB7",dark:"#3F3192",contrastText:"#fff"},secondary:{light:"#D644EE",main:"#CC15EA",dark:"#A311BB",contrastText:"#fff"},success:{light:"#09E744",main:"#07B636",dark:"#058527",contrastText:"#fff"},warning:{light:"#FFE7B8",main:"#FFD685",dark:"#FFC550",contrastText:"#171717"},error:{light:"#FA5E51",main:"#F93020",dark:"#DF1706",contrastText:"#fff"},text:{primary:"#2D2D2D",secondary:"#3F3192",disabled:"#91989C"}},components:{MuiButton:{defaultProps:{disableElevation:!0,size:"small"},styleOverrides:{outlinedPrimary:{backgroundColor:"#F7EDFD",border:"1.5px solid #3F3192","&:hover":{border:"1.5px solid #3F3192",backgroundColor:"#f1dcfd"}}}},MuiTextField:{defaultProps:{size:"small",margin:"dense"}}}});var et=a(893);var tt=function(e){if("object"!==o(e))throw new Error("single-spa-react requires a configuration object");var t=n(n({},l),e);if(!t.React)throw new Error("single-spa-react must be passed opts.React");if(!t.ReactDOM)throw new Error("single-spa-react must be passed opts.ReactDOM");if(!t.rootComponent&&!t.loadRootComponent)throw new Error("single-spa-react must be passed opts.rootComponent or opts.loadRootComponent");if(t.errorBoundary&&"function"!=typeof t.errorBoundary)throw Error("The errorBoundary opt for single-spa-react must either be omitted or be a function that returns React elements");!p&&t.React.createContext&&(p=t.React.createContext());var r={bootstrap:f.bind(null,t),mount:d.bind(null,t),unmount:m.bind(null,t)};return t.parcelCanUpdate&&(r.update=h.bind(null,t)),r}({React:e.default,ReactDOM:t.default,rootComponent:function(){return(0,et.jsx)(S.Mui.ThemeProvider,{theme:Ze,children:(0,et.jsxs)(S.Mui.Box,{display:"flex",bgcolor:"#f1f2f4",height:"100%",width:"100%",children:[(0,et.jsx)(S.Mui.CssBaseline,{}),(0,et.jsx)(S.Mui.Box,{width:"4.5vw",height:"100vh",children:(0,et.jsx)(R,{config:function(){return System.import("@onx/sidebar")},wrapWith:"div"})}),(0,et.jsx)(S.Mui.Box,{width:window.innerWidth,height:window.innerHeight,padding:"10px",children:(0,et.jsx)(S.Mui.Box,{width:"100%",height:"100%",bgcolor:"#fff",border:"1px solid #C6CACC",borderRadius:"5px",boxShadow:"3px 0px 5px rgba(0, 0, 0, 0.1)",children:(0,et.jsxs)(S.Mui.Grid,{container:!0,sx:{height:"100%"},children:[(0,et.jsx)(S.Mui.Grid,{item:!0,sm:3,sx:{height:"100%"},children:(0,et.jsx)(S.Mui.Box,{sx:{bgcolor:"#fff",borderRadius:"5px 0px 0px 5px",overflowY:"auto",height:"100%"},borderRight:"1px solid #C6CACC",children:(0,et.jsx)(R,{config:function(){return System.import("@onx/customer-list")},wrapWith:"div"})})}),(0,et.jsxs)(et.Fragment,{children:[(0,et.jsx)(S.Mui.Grid,{item:!0,sm:3,sx:{height:"100%"},children:(0,et.jsx)(S.Mui.Box,{sx:{bgcolor:"#fff",borderRadius:"5px 0px 0px 5px",overflowY:"auto",height:"100%"},borderRight:"1px solid #C6CACC",children:(0,et.jsx)(R,{config:function(){return System.import("@onx/customer-detail")},wrapWith:"div"})})}),(0,et.jsx)(S.Mui.Grid,{item:!0,sm:6,sx:{height:"100%"},children:(0,et.jsx)(S.Mui.Box,{sx:{bgcolor:"#fff",borderRadius:"5px 0px 0px 5px",height:"100%"},children:(0,et.jsx)(R,{config:function(){return System.import("@onx/customer-journey")},wrapWith:"div",wrapStyle:{height:"100%",overflowY:"auto"}})})})]})]})})})]})})},errorBoundary:function(e,t,r){return null}}),rt=tt.bootstrap,nt=tt.mount,ot=tt.unmount})(),c})())}}}));
//# sourceMappingURL=onx-customer.js.map