(self["webpackChunk"]=self["webpackChunk"]||[]).push([[6935],{31695:function(){},35956:function(e,t,n){"use strict";n.r(t);var r=n(67294),a=n(96089),l=(n(27832),n(63263));n(11616);t["default"]=e=>(r.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&a.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),r.createElement(r.Fragment,null,r.createElement("div",{className:"markdown"},r.createElement("h2",{id:"\u8f7b\u677e\u4f7f\u7528"},r.createElement(a.AnchorLink,{to:"#\u8f7b\u677e\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"\u8f7b\u677e\u4f7f\u7528"),r.createElement("ol",null,r.createElement("li",null,"\u5b89\u88c5\u4f9d\u8d56")),r.createElement(l.Z,{code:"$ npm i taro-hooks --save",lang:"bash"}),r.createElement("ol",{start:2},r.createElement("li",null,"\u4f7f\u7528")),r.createElement(l.Z,{code:"import { useEnv } from 'taro-hooks';",lang:"jsx"}),r.createElement("h2",{id:"\u4f7f\u7528\u6848\u4f8b"},r.createElement(a.AnchorLink,{to:"#\u4f7f\u7528\u6848\u4f8b","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"\u4f7f\u7528\u6848\u4f8b"),r.createElement("table",null,r.createElement("tbody",null,r.createElement("tr",null,r.createElement("td",{align:"center"},r.createElement("a",null,r.createElement("img",{width:200,src:"/image/hooks.jpeg"}),r.createElement("br",null),r.createElement("strong",null,"Taro-hooks weapp"))),r.createElement("td",{align:"center"},r.createElement(a.Link,{to:"https://taro-hooks-h5-innocces.vercel.app/",target:"_blank"},r.createElement("img",{height:200,style:{verticalAlign:"-0.32em",marginRight:"8px"},src:"/image/hooksite.png"}),r.createElement("br",null),r.createElement("strong",null,"Taro-hooks h5")))))),r.createElement("h2",{id:"\u4ea4\u6d41\u8ba8\u8bba"},r.createElement(a.AnchorLink,{to:"#\u4ea4\u6d41\u8ba8\u8bba","aria-hidden":"true",tabIndex:-1},r.createElement("span",{className:"icon icon-link"})),"\u4ea4\u6d41\u8ba8\u8bba"),r.createElement("div",null,r.createElement("img",{"data-type":"wechat",src:"/image/qrcode.jpg",width:300})))))},63263:function(e,t,n){"use strict";var r=n(67294),a=n(4649),l=n(96089);n(31695);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function c(e,t){return d(e)||m(e,t)||u(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){if(e){if("string"===typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function m(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(r=n.next()).done);o=!0)if(l.push(r.value),t&&l.length===t)break}catch(i){c=!0,a=i}finally{try{o||null==n["return"]||n["return"]()}finally{if(c)throw a}}return l}}function d(e){if(Array.isArray(e))return e}t["Z"]=function(e){var t=e.code,n=e.lang,i=e.showCopy,u=void 0===i||i,s=(0,l.useCopy)(),m=c(s,2),d=m[0],h=m[1];return r.createElement("div",{className:"__dumi-default-code-block"},r.createElement(a.ZP,o({},a.lG,{code:t,language:n,theme:void 0}),(function(e){var n=e.className,a=e.style,l=e.tokens,o=e.getLineProps,c=e.getTokenProps;return r.createElement("pre",{className:n,style:a},u&&r.createElement("button",{className:"__dumi-default-icon __dumi-default-code-block-copy-btn","data-status":h,onClick:function(){return d(t)}}),l.map((function(e,t){return r.createElement("div",o({line:e,key:t}),e.map((function(e,t){return r.createElement("span",c({token:e,key:t}))})))})))})))}}}]);