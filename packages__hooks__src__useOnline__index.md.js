(self["webpackChunk"]=self["webpackChunk"]||[]).push([[6035],{2224:function(){},27832:function(e,t,n){"use strict";n.r(t);var l=n(91896),r=n(93224),a=n(67294),c=n(44962),o=["hidden"];t["default"]=e=>{var t=e.hidden,n=(0,r.Z)(e,o);return a.createElement(c.Z,(0,l.Z)({className:t?"__dumi_taro-hook-hidden":""},n))}},73602:function(e,t,n){"use strict";n.d(t,{m:function(){return l.m}});var l=n(67624);n(93142)},28570:function(e,t,n){"use strict";n.r(t);var l=n(67294),r=n(96089),a=n(27832),c=n(35713),o=n(65659),i=n(4187),u=l.memo((e=>{var t=e.demos,n=t["pages-useonline"].component;return l.createElement(l.Fragment,null,l.createElement(l.Fragment,null,l.createElement("div",{className:"markdown"},l.createElement("p",null,l.createElement(c.Z,null,l.createElement("code",null,"useNetworkType"),"\u884d\u751f hook, \u65b9\u4fbf\u7528\u6237\u662f\u5426\u9700\u8981\u5224\u65ad\u5f53\u524d\u7f51\u7edc\u662f\u5426\u53ef\u7528. \u521d\u59cb\u503c\u4e3a",l.createElement("code",null,"undefined"),".\u82e5\u4e1a\u52a1\u4e2d\u53ef\u505a\u521d\u59cb\u5224\u7a7a\u5904\u7406. \u4e14\u8be5\u72b6\u6001\u4e3a\u81ea\u52a8\u76d1\u542c")),l.createElement("h1",{id:"useonline"},l.createElement(r.AnchorLink,{to:"#useonline","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"useOnline"),l.createElement("p",null,"\u83b7\u53d6\u7f51\u7edc\u662f\u5426\u53ef\u7528"),l.createElement("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},l.createElement(r.AnchorLink,{to:"#\u4f55\u65f6\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u4f55\u65f6\u4f7f\u7528"),l.createElement("p",null,"\u5f53\u9700\u8981\u6839\u636e\u5f53\u524d\u7f51\u7edc\u72b6\u6001\u505a\u5224\u65ad\u65f6"),l.createElement("h2",{id:"api"},l.createElement(r.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"API"),l.createElement(o.Z,{code:"const online: boolean = useOnline();",lang:"jsx"}),l.createElement("h2",{id:"\u8fd4\u56de\u503c\u8bf4\u660e"},l.createElement(r.AnchorLink,{to:"#\u8fd4\u56de\u503c\u8bf4\u660e","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u8fd4\u56de\u503c\u8bf4\u660e"),l.createElement(i.Z,null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"\u8fd4\u56de\u503c"),l.createElement("th",null,"\u8bf4\u660e"),l.createElement("th",null,"\u7c7b\u578b"))),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",null,"online"),l.createElement("td",null,"\u5f53\u524d\u7f51\u7edc\u72b6\u6001"),l.createElement("td",null,l.createElement("code",null,"boolean"))))),l.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},l.createElement(r.AnchorLink,{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a")),l.createElement(a.default,t["pages-useonline"].previewerProps,l.createElement(n,null)),l.createElement("div",{className:"markdown"},l.createElement("h2",{id:"hook-\u652f\u6301\u5ea6"},l.createElement(r.AnchorLink,{to:"#hook-\u652f\u6301\u5ea6","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"Hook \u652f\u6301\u5ea6"),l.createElement(i.Z,null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",{align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),l.createElement("th",{align:"center"},"H5"),l.createElement("th",{align:"center"},"ReactNative"))),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",{align:"center"},"\u2714\ufe0f"),l.createElement("td",{align:"center"},"\u2714\ufe0f"),l.createElement("td",{align:"center"},"\u2714\ufe0f")))))))}));t["default"]=e=>{var t=l.useContext(r.context),n=t.demos;return l.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.createElement(u,{demos:n})}},4187:function(e,t,n){"use strict";var l=n(67294),r=n(97397),a=n.n(r);n(2224);function c(e,t){return d(e)||m(e,t)||i(e,t)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(e,t){if(e){if("string"===typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}function m(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var l,r,a=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(l=n.next()).done);c=!0)if(a.push(l.value),t&&a.length===t)break}catch(i){o=!0,r=i}finally{try{c||null==n["return"]||n["return"]()}finally{if(o)throw r}}return a}}function d(e){if(Array.isArray(e))return e}var s=function(e){var t=e.children,n=(0,l.useRef)(),r=(0,l.useState)(!1),o=c(r,2),i=o[0],u=o[1],m=(0,l.useState)(!1),d=c(m,2),s=d[0],E=d[1];return(0,l.useEffect)((function(){var e=n.current,t=a()((function(){u(e.scrollLeft>0),E(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),l.createElement("div",{className:"__dumi-default-table"},l.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":i||void 0,"data-right-folded":s||void 0},l.createElement("table",null,t)))};t["Z"]=s}}]);