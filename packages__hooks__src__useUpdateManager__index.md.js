(self["webpackChunk"]=self["webpackChunk"]||[]).push([[5053],{2224:function(){},27832:function(e,t,n){"use strict";n.r(t);var a=n(91896),r=n(93224),l=n(67294),c=n(44962),o=["hidden"];t["default"]=e=>{var t=e.hidden,n=(0,r.Z)(e,o);return l.createElement(c.Z,(0,a.Z)({className:t?"__dumi_taro-hook-hidden":""},n))}},73602:function(e,t,n){"use strict";n.d(t,{m:function(){return a.m}});var a=n(67624);n(93142)},92088:function(e,t,n){"use strict";n.r(t);var a=n(67294),r=n(96089),l=n(27832),c=n(65659),o=n(4187),i=a.memo((e=>{var t=e.demos,n=t["pages-useupdatemanager"].component;return a.createElement(a.Fragment,null,a.createElement(a.Fragment,null,a.createElement("div",{className:"markdown"},a.createElement("h1",{id:"useupdatemanager"},a.createElement(r.AnchorLink,{to:"#useupdatemanager","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"useUpdateManager"),a.createElement("p",null,"\u83b7\u53d6\u5168\u5c40\u552f\u4e00\u7248\u672c\u66f4\u65b0\u7ba1\u7406\u5668"),a.createElement("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},a.createElement(r.AnchorLink,{to:"#\u4f55\u65f6\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"\u4f55\u65f6\u4f7f\u7528"),a.createElement("p",null,"\u7ba1\u7406\u5c0f\u7a0b\u5e8f\u66f4\u65b0\u673a\u5236\u3002"),a.createElement("h2",{id:"api"},a.createElement(r.AnchorLink,{to:"#api","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"API"),a.createElement(c.Z,{code:"const updateManager = useUpdateManager({\n  onCheckForUpdate,\n  onUpdateReady,\n  onUpdateFailed,\n});",lang:"jsx"}),a.createElement("h2",{id:"\u5165\u53c2\u8bf4\u660e"},a.createElement(r.AnchorLink,{to:"#\u5165\u53c2\u8bf4\u660e","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"\u5165\u53c2\u8bf4\u660e"),a.createElement(c.Z,{code:"function onCheckForUpdate(manager, res) {}\n\nfunction onUpdateReady(manager) {}\n\nfunction onUpdateFailed(manager) {}",lang:"tsx"}),a.createElement("h2",{id:"\u8fd4\u56de\u503c\u8bf4\u660e"},a.createElement(r.AnchorLink,{to:"#\u8fd4\u56de\u503c\u8bf4\u660e","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"\u8fd4\u56de\u503c\u8bf4\u660e"),a.createElement(o.Z,null,a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"\u8fd4\u56de\u503c"),a.createElement("th",null,"\u8bf4\u660e"),a.createElement("th",null,"\u7c7b\u578b"))),a.createElement("tbody",null,a.createElement("tr",null,a.createElement("td",null,"updateManager"),a.createElement("td",null,"\u66f4\u65b0\u7ba1\u7406\u5668\u5b9e\u4f8b"),a.createElement("td",null,a.createElement("code",null,"UpdateManager"))))),a.createElement("h2",{id:"\u4ee3\u7801\u6f14\u793a"},a.createElement(r.AnchorLink,{to:"#\u4ee3\u7801\u6f14\u793a","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"\u4ee3\u7801\u6f14\u793a")),a.createElement(l.default,t["pages-useupdatemanager"].previewerProps,a.createElement(n,null)),a.createElement("div",{className:"markdown"},a.createElement("h2",{id:"hook-\u652f\u6301\u5ea6"},a.createElement(r.AnchorLink,{to:"#hook-\u652f\u6301\u5ea6","aria-hidden":"true",tabIndex:-1},a.createElement("span",{className:"icon icon-link"})),"Hook \u652f\u6301\u5ea6"),a.createElement(o.Z,null,a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",{align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),a.createElement("th",{align:"center"},"H5"),a.createElement("th",{align:"center"},"ReactNative"))),a.createElement("tbody",null,a.createElement("tr",null,a.createElement("td",{align:"center"},"\u2714\ufe0f"),a.createElement("td",{align:"center"}),a.createElement("td",{align:"center"})))))))}));t["default"]=e=>{var t=a.useContext(r.context),n=t.demos;return a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),a.createElement(i,{demos:n})}},4187:function(e,t,n){"use strict";var a=n(67294),r=n(97397),l=n.n(r);n(2224);function c(e,t){return m(e)||u(e,t)||i(e,t)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(e,t){if(e){if("string"===typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function u(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(a=n.next()).done);c=!0)if(l.push(a.value),t&&l.length===t)break}catch(i){o=!0,r=i}finally{try{c||null==n["return"]||n["return"]()}finally{if(o)throw r}}return l}}function m(e){if(Array.isArray(e))return e}var s=function(e){var t=e.children,n=(0,a.useRef)(),r=(0,a.useState)(!1),o=c(r,2),i=o[0],d=o[1],u=(0,a.useState)(!1),m=c(u,2),s=m[0],E=m[1];return(0,a.useEffect)((function(){var e=n.current,t=l()((function(){d(e.scrollLeft>0),E(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),a.createElement("div",{className:"__dumi-default-table"},a.createElement("div",{className:"__dumi-default-table-content",ref:n,"data-left-folded":i||void 0,"data-right-folded":s||void 0},a.createElement("table",null,t)))};t["Z"]=s}}]);