(self["webpackChunk"]=self["webpackChunk"]||[]).push([[3713],{36081:function(){},63263:function(e,t,n){"use strict";var l=n(67294),r=n(4649),a=n(96089);n(36081);function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},c.apply(this,arguments)}function o(e,t){return s(e)||d(e,t)||u(e,t)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){if(e){if("string"===typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}function d(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var l,r,a=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(l=n.next()).done);c=!0)if(a.push(l.value),t&&a.length===t)break}catch(i){o=!0,r=i}finally{try{c||null==n["return"]||n["return"]()}finally{if(o)throw r}}return a}}function s(e){if(Array.isArray(e))return e}t["Z"]=function(e){var t=e.code,n=e.lang,i=e.showCopy,u=void 0===i||i,m=(0,a.useCopy)(),d=o(m,2),s=d[0],E=d[1];return l.createElement("div",{className:"__dumi-default-code-block"},l.createElement(r.ZP,c({},r.lG,{code:t,language:n,theme:void 0}),(function(e){var n=e.className,r=e.style,a=e.tokens,c=e.getLineProps,o=e.getTokenProps;return l.createElement("pre",{className:n,style:r},u&&l.createElement("button",{className:"__dumi-default-icon __dumi-default-code-block-copy-btn","data-status":E,onClick:function(){return s(t)}}),a.map((function(e,t){return l.createElement("div",c({line:e,key:t}),e.map((function(e,t){return l.createElement("span",o({token:e,key:t}))})))})))})))}},75920:function(e,t,n){"use strict";n.r(t);var l=n(67294),r=n(96089),a=n(27832),c=n(63263),o=n(82649),i=l.memo(o.default["pages-userouter"].component);t["default"]=e=>(l.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.createElement(l.Fragment,null,l.createElement(l.Fragment,null,l.createElement("div",{className:"markdown"},l.createElement("h1",{id:"userouter"},l.createElement(r.AnchorLink,{to:"#userouter","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"useRouter"),l.createElement("p",null,"\u8def\u7531\u76f8\u5173, \u6269\u5145",l.createElement("code",null,"Taro useRouter")),l.createElement("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},l.createElement(r.AnchorLink,{to:"#\u4f55\u65f6\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u4f55\u65f6\u4f7f\u7528"),l.createElement("p",null,"\u5f53\u9700\u8981\u83b7\u53d6\u8def\u7531\uff0c\u6216\u8005\u8fdb\u884c\u8def\u7531\u64cd\u4f5c\u65f6"),l.createElement("h2",{id:"api"},l.createElement(r.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"API"),l.createElement(c.Z,{code:"const [\n  routerInfo,\n  { switchTab, reLaunch, redirectTo, navigateTo, navigateBack },\n] = useRouter();",lang:"jsx"}),l.createElement("h2",{id:"\u53c2\u6570\u8bf4\u660e"},l.createElement(r.AnchorLink,{to:"#\u53c2\u6570\u8bf4\u660e","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u53c2\u6570\u8bf4\u660e"),l.createElement("p",null,"\u65e0"),l.createElement("h2",{id:"\u8fd4\u56de\u503c\u8bf4\u660e"},l.createElement(r.AnchorLink,{to:"#\u8fd4\u56de\u503c\u8bf4\u660e","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u8fd4\u56de\u503c\u8bf4\u660e"),l.createElement("p",null,"\u4ee5\u4e0b\u65b9\u6cd5\u53c2\u6570:"),l.createElement("ul",null,l.createElement("li",null,l.createElement("code",null,"url: string"),": \u9700\u8981\u8df3\u8f6c\u7684\u5e94\u7528\u5185\u8def\u5f84"),l.createElement("li",null,l.createElement("code",null,"options: ","{"," [_string]: any ","}"),": \u8df3\u8f6c\u643a\u5e26\u53c2\u6570(\u53ef\u9009)",l.createElement("br",null))),l.createElement("table",null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"\u8fd4\u56de\u503c"),l.createElement("th",null,"\u8bf4\u660e"),l.createElement("th",null,"\u7c7b\u578b"))),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",null,"routerInfo"),l.createElement("td",null,l.createElement("code",null,"\u5f53\u524d\u9875\u9762\u8def\u7531\u4fe1\u606f")),l.createElement("td",null,l.createElement("code",null,"RouterInfo<Partial<Record<string, string>>>"))),l.createElement("tr",null,l.createElement("td",null,"switchTab"),l.createElement("td",null,l.createElement("code",null,"\u5f02\u6b65\u8df3\u8f6ctabBar\u9875\u9762")),l.createElement("td",null,l.createElement("code",null,"switchTab(url: string, options?: ","{"," [_string]: any ","}",").then"))),l.createElement("tr",null,l.createElement("td",null,"reLaunch"),l.createElement("td",null,l.createElement("code",null,"\u5f02\u6b65\u5173\u95ed\u6240\u6709\u9875\u9762\uff0c\u6253\u5f00\u5230\u5e94\u7528\u5185\u7684\u67d0\u4e2a\u9875\u9762")),l.createElement("td",null,l.createElement("code",null,"reLaunch(url: string, options?: ","{"," [_string]: any ","}",").then"))),l.createElement("tr",null,l.createElement("td",null,"redirectTo"),l.createElement("td",null,l.createElement("code",null,"\u5f02\u6b65\u5173\u95ed\u5f53\u524d\u9875\u9762\uff0c\u8df3\u8f6c\u5230\u5e94\u7528\u5185\u7684\u67d0\u4e2a\u9875\u9762")),l.createElement("td",null,l.createElement("code",null,"redirectTo(url: string, options?: ","{"," [_string]: any ","}",").then"))),l.createElement("tr",null,l.createElement("td",null,"navigateTo"),l.createElement("td",null,l.createElement("code",null,"\u5f02\u6b65\u4fdd\u7559\u5f53\u524d\u9875\u9762\uff0c\u8df3\u8f6c\u5230\u5e94\u7528\u5185\u7684\u67d0\u4e2a\u9875\u9762")),l.createElement("td",null,l.createElement("code",null,"navigateTo(url: string, options?: ","{"," [_string]: any ","}",").then"))),l.createElement("tr",null,l.createElement("td",null,"navigateBack"),l.createElement("td",null,l.createElement("code",null,"\u5f02\u6b65\u5173\u95ed\u5f53\u524d\u9875\u9762\uff0c\u8fd4\u56de\u4e0a\u4e00\u9875\u9762\u6216\u591a\u7ea7\u9875\u9762")),l.createElement("td",null,l.createElement("code",null,"navigateBack(delta?: number).then"))))),l.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},l.createElement(r.AnchorLink,{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a")),l.createElement(a.default,o.default["pages-userouter"].previewerProps,l.createElement(i,null)),l.createElement("div",{className:"markdown"},l.createElement("h2",{id:"hook-\u652f\u6301\u5ea6"},l.createElement(r.AnchorLink,{to:"#hook-\u652f\u6301\u5ea6","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"Hook \u652f\u6301\u5ea6"),l.createElement("table",null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",{align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),l.createElement("th",{align:"center"},"H5"),l.createElement("th",{align:"center"},"ReactNative"))),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",{align:"center"},"\u2714\ufe0f"),l.createElement("td",{align:"center"},"\u2714\ufe0f"),l.createElement("td",{align:"center"},"\u2714\ufe0f")))),l.createElement("h2",{id:"faq"},l.createElement(r.AnchorLink,{to:"#faq","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"FAQ"),l.createElement("h3",{id:"1-\u66f4\u591a\u8bf4\u660e"},l.createElement(r.AnchorLink,{to:"#1-\u66f4\u591a\u8bf4\u660e","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"1. \u66f4\u591a\u8bf4\u660e"),l.createElement("p",null,"\u89c1",l.createElement(r.Link,{to:"https://developers.weixin.qq.com/miniprogram/dev/api/base/system/system-info/wx.getSystemInfo.html"},"\u5c0f\u7a0b\u5e8f\u76f8\u5173\u6587\u6863"),l.createElement("br",null),"\u89c1",l.createElement(r.Link,{to:"https://taro-docs.jd.com/taro/docs/hooks#userouter"},"Taro \u6587\u6863"))))))}}]);