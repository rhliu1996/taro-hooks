(self["webpackChunktaro_hooks"]=self["webpackChunktaro_hooks"]||[]).push([[7638],{36081:function(){},63263:function(e,t,n){"use strict";var a=n(67294),r=n(4649),l=n(96089);n(36081);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function o(e,t){return d(e)||s(e,t)||u(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){if(e){if("string"===typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function s(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(a=n.next()).done);c=!0)if(l.push(a.value),t&&l.length===t)break}catch(i){o=!0,r=i}finally{try{c||null==n["return"]||n["return"]()}finally{if(o)throw r}}return l}}function d(e){if(Array.isArray(e))return e}t["Z"]=function(e){var t=e.code,n=e.lang,i=e.showCopy,u=void 0===i||i,m=(0,l.useCopy)(),s=o(m,2),d=s[0],E=s[1];return a.createElement("div",{className:"__dumi-default-code-block"},a.createElement(r.ZP,c({},r.lG,{code:t,language:n,theme:void 0}),(function(e){var n=e.className,r=e.style,l=e.tokens,c=e.getLineProps,o=e.getTokenProps;return a.createElement("pre",{className:n,style:r},u&&a.createElement("button",{className:"__dumi-default-icon __dumi-default-code-block-copy-btn","data-status":E,onClick:function(){return d(t)}}),l.map((function(e,t){return a.createElement("div",c({line:e,key:t}),e.map((function(e,t){return a.createElement("span",o({token:e,key:t}))})))})))})))}},54814:function(e,t,n){"use strict";n.r(t);var a=n(67294),r=n(96089),l=n(27832),c=n(63263),o=n(41941),i=a.memo(o.default["pages-usebase64toarraybuffer"].component);t["default"]=e=>(a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.createElement(a.Fragment,null,a.createElement(a.Fragment,null,a.createElement("div",{className:"markdown"},a.createElement("h1",{id:"usebase64toarraybuffer"},a.createElement(r.AnchorLink,{to:"#usebase64toarraybuffer","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"useBase64ToArrayBuffer"),a.createElement("p",null,"\u5c06 Base64 \u5b57\u7b26\u4e32\u8f6c\u6210 ArrayBuffer \u6570\u636e"),a.createElement("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},a.createElement(r.AnchorLink,{to:"#\u4f55\u65f6\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"\u4f55\u65f6\u4f7f\u7528"),a.createElement("p",null,"\u9700\u8981\u5c06 Base64 \u548c ArrayBuffer \u8f6c\u6362\u65f6"),a.createElement("h2",{id:"api"},a.createElement(r.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"API"),a.createElement(c.Z,{code:"const [buffer, setBase64] = useBase64ToArrayBuffer(base64);",lang:"jsx"}),a.createElement("h2",{id:"\u53c2\u6570\u8bf4\u660e"},a.createElement(r.AnchorLink,{to:"#\u53c2\u6570\u8bf4\u660e","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"\u53c2\u6570\u8bf4\u660e"),a.createElement("table",null,a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"\u53c2\u6570"),a.createElement("th",null,"\u8bf4\u660e"),a.createElement("th",null,"\u7c7b\u578b"),a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),a.createElement("tbody",null,a.createElement("tr",null,a.createElement("td",null,"base64"),a.createElement("td",null,"\u5fc5\u586b\uff0c\u8981\u8f6c\u5316\u6210 ArrayBuffer \u5bf9\u8c61\u7684 Base64 \u5b57\u7b26\u4e32"),a.createElement("td",null,a.createElement("code",null,"string")),a.createElement("td",null,"-")))),a.createElement("h2",{id:"\u8fd4\u56de\u503c\u8bf4\u660e"},a.createElement(r.AnchorLink,{to:"#\u8fd4\u56de\u503c\u8bf4\u660e","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"\u8fd4\u56de\u503c\u8bf4\u660e"),a.createElement("table",null,a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"\u8fd4\u56de\u503c"),a.createElement("th",null,"\u8bf4\u660e"),a.createElement("th",null,"\u7c7b\u578b"))),a.createElement("tbody",null,a.createElement("tr",null,a.createElement("td",null,"buffer"),a.createElement("td",null,"\u8f6c\u6362\u7684 ArrayBuffer"),a.createElement("td",null,a.createElement("code",null,"ArrayBuffer"))),a.createElement("tr",null,a.createElement("td",null,"setBase64"),a.createElement("td",null,"\u66f4\u6539\u5f53\u524d\u8f6c\u6362\u7684 base64"),a.createElement("td",null,a.createElement("code",null,"(base64: string) => void"))))),a.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},a.createElement(r.AnchorLink,{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a")),a.createElement(l.default,o.default["pages-usebase64toarraybuffer"].previewerProps,a.createElement(i,null)),a.createElement("div",{className:"markdown"},a.createElement("h2",{id:"hook-\u652f\u6301\u5ea6"},a.createElement(r.AnchorLink,{to:"#hook-\u652f\u6301\u5ea6","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"Hook \u652f\u6301\u5ea6"),a.createElement("table",null,a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",{align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),a.createElement("th",{align:"center"},"H5"),a.createElement("th",{align:"center"},"ReactNative"))),a.createElement("tbody",null,a.createElement("tr",null,a.createElement("td",{align:"center"},"\u2714\ufe0f"),a.createElement("td",{align:"center"},"\u2714\ufe0f"),a.createElement("td",{align:"center"},"\u2714\ufe0f")))),a.createElement("h2",{id:"faq"},a.createElement(r.AnchorLink,{to:"#faq","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"FAQ"),a.createElement("h3",{id:"1-\u66f4\u591a\u8bf4\u660e"},a.createElement(r.AnchorLink,{to:"#1-\u66f4\u591a\u8bf4\u660e","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"1. \u66f4\u591a\u8bf4\u660e"),a.createElement("p",null,"\u89c1",a.createElement(r.Link,{to:"https://developers.weixin.qq.com/miniprogram/dev/api/base/wx.base64ToArrayBuffer.html"},"\u5c0f\u7a0b\u5e8f\u76f8\u5173\u6587\u6863"))))))}}]);