(self.webpackJsonp=self.webpackJsonp||[]).push([[3223],{"6881":function(e,t,n){"use strict";var r=n(969),o=n(1503);function _extends(){return _extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_extends.apply(this,arguments)}t.Z=function usePromise(e){return function(t){var n;if(!e)return Promise.reject((0,o.Hv)(e,"please input a valid method name"));var u=null!=(n=null==e?void 0:e.name)?n:"usePromise::implementMethod";return new Promise((function(n,c){try{if(!(0,r.mf)(e))throw new TypeError("["+u+"] not vaild for Taro");var l;null==(l=e(_extends({},t||{},{"success":n,"fail":c})))||null==l.catch||l.catch(c)}catch(e){c((0,o.Hv)(u,e.message))}}))}}},"5006":function(e,t,n){"use strict";var r=n(2535),o=n(4012),u=n(6881),c=n(1503);t.Z=function useToast(e){var t=(0,o.sO)(e);(0,o.d4)((function(){t.current=e}),[e]);var n=(0,u.Z)(r.showToast);return{"show":function show(e){if(!e&&!t.current)return Promise.reject((0,c.Hv)("showToast","please provide a option"));var r=(0,c.JA)(t.current,e);return n(r)},"hide":(0,u.Z)(r.hideToast)}}},"1503":function(e,t,n){"use strict";n.d(t,{"BB":function(){return u},"kM":function(){return c},"Hv":function(){return generateGeneralFail},"JA":function(){return combineOptions},"vL":function(){return stringfiyUrl}});var r=n(969),o=n(9059);var u=!0,c=function typeOf(e,t){return[t].flat().some((function(t){return Object.prototype.toString.call(e)==="[object "+t+"]"}))};function generateGeneralFail(e,t){var n="[API "+e+"] "+(t=t||"调用失败");return u||(0,r.H)(n),{"errMsg":n}}function combineOptions(e,t){return void 0===e&&(e={}),void 0===t&&(t={}),Object.assign({},e,t)}function stringfiyUrl(e,t){var n=e;if(t&&(0,r.hM)(t,"Object")){var u=n.includes("?");n+=(u?"&":"?")+(0,o.stringify)(t)}return n}},"4737":function(e,t,n){"use strict";n.r(t);var r=n(122),o=n.n(r),u=n(820),c=n.n(u)()(o());c.push([e.id,"\n.query-demo,\n.query-demo-scroll {\n  width: 100%;\n  height: 10rem;\n  background-color: #a773ed;\n}\n",""]),t.default=c},"2573":function(e,t,n){var r=n(5013),o=n(4737);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.id,o,""]]);var u={"insert":"head","singleton":!1};r(o,u);e.exports=o.locals||{}},"3223":function(e,t,n){"use strict";n.r(t),n.d(t,{"default":function(){return v}});var r=n(396),o=n(5962),u=n(2535),c=n.n(u),l=n(4012),i=n(1503);var a=function useSelectorQuery(){var e=(0,l.sO)((0,u.createSelectorQuery)()),t=function querySelector(t){return e.current.select(t)},n=function querySelectorAll(t){return e.current.selectAll(t)};function queryWithMethod(e,r,o,u){return new Promise((function(c,l){try{var a=o?n:t;u?a(r)[e](u,c).exec():a(r)[e](c).exec()}catch(t){l((0,i.Hv)("selectorQuery."+e,t.errMsg||t.message))}}))}return[e.current,{"querySelector":t,"querySelectorAll":n,"selectViewport":e.current.selectViewport,"in":e.current.in,"exec":e.current.exec,"getBoundingClientRect":function getBoundingClientRect(e,t){return queryWithMethod("boundingClientRect",e,t)},"getContext":function getContext(e){return queryWithMethod("context",e)},"getFields":function getFields(e,t){return queryWithMethod("fields",e,!1,t)},"getNode":function getNode(e){return queryWithMethod("node",e)},"getScrollOffset":function getScrollOffset(e){return queryWithMethod("scrollOffset",e)}}]},s=n(5006),f=n(2917),d=n(2053),p=(0,d.defineComponent)({"__name":"index","setup":function setup(e){var t=".query-demo",n={"dataset":!0,"size":!0,"mark":!0,"rect":!0,"scrollOffset":!0,"properties":["scrollX","scrollY"],"computedStyle":["margin","backgroundColor"],"context":!0},u=(0,l.sO)("bound"),i=(0,l.eJ)(),p=(0,f.Z)(i,2),v=p[0],h=p[1],m=(0,l.eJ)({}),g=(0,f.Z)(m,2),y=g[0],x=g[1],w=(0,l.eJ)(),k=(0,f.Z)(w,2),b=k[0],C=k[1],_=(0,s.Z)({"title":"useEvent","mask":!0,"duration":500,"icon":"none"}).show,V=a(),B=(0,f.Z)(V,2)[1],N=B.getBoundingClientRect,q=B.getFields,O=B.getScrollOffset,Z=function(){var e=(0,o.Z)((0,r.Z)().mark((function _callee(){var e;return(0,r.Z)().wrap((function _callee$(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,N(t);case 3:e=n.sent,h(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),_({"title":n.t0.errMsg||n.t0.message,"icon":"error"});case 10:case"end":return n.stop()}}),_callee,null,[[0,7]])})));return function handleGetBounding(){return e.apply(this,arguments)}}(),M=function(){var e=(0,o.Z)((0,r.Z)().mark((function _callee2(){var e;return(0,r.Z)().wrap((function _callee2$(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,q(t,n);case 3:e=r.sent,x(e),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),_({"title":r.t0.errMsg||r.t0.message,"icon":"error"});case 10:case"end":return r.stop()}}),_callee2,null,[[0,7]])})));return function handleGetFields(){return e.apply(this,arguments)}}(),S=function(){var e=(0,o.Z)((0,r.Z)().mark((function _callee3(){var e;return(0,r.Z)().wrap((function _callee3$(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,O(t+"-scroll");case 3:e=n.sent,C(e),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),_({"title":n.t0.errMsg||n.t0.message,"icon":"error"});case 10:case"end":return n.stop()}}),_callee3,null,[[0,7]])})));return function handleGetScroll(){return e.apply(this,arguments)}}();return c().useReady((function(){Z(),M(),S()})),function(e,t){var n=(0,d.resolveComponent)("taro-view"),r=(0,d.resolveComponent)("nut-divider"),o=(0,d.resolveComponent)("nut-cell"),c=(0,d.resolveComponent)("nut-cell-group"),l=(0,d.resolveComponent)("nut-tabpane"),i=(0,d.resolveComponent)("taro-scroll-view"),a=(0,d.resolveComponent)("nut-tabs"),s=(0,d.resolveComponent)("demo-content");return(0,d.openBlock)(),(0,d.createBlock)(s,null,{"default":(0,d.withCtx)((function(){return[(0,d.createVNode)(a,{"auto-height":!0,"modelValue":(0,d.unref)(u).current,"onUpdate:modelValue":t[0]||(t[0]=function(e){return(0,d.unref)(u).current=e})},{"default":(0,d.withCtx)((function(){return[(0,d.createVNode)(l,{"title":"bound","pane-key":"bound"},{"default":(0,d.withCtx)((function(){return[(0,d.createVNode)(n,{"class":"query-demo"}),(0,d.createVNode)(r,null,{"default":(0,d.withCtx)((function(){return[(0,d.createTextVNode)("属性")]})),"_":1}),(0,d.createVNode)(c,{"title":"getBoundingClientRect"},{"default":(0,d.withCtx)((function(){var t;return[((0,d.openBlock)(!0),(0,d.createElementBlock)(d.Fragment,null,(0,d.renderList)(null!==(t=(0,d.unref)(v))&&void 0!==t?t:{},(function(t,n){return(0,d.openBlock)(),(0,d.createBlock)(o,{"key":n,"title":n,"sub-title":e.$filters.stringify(t)},null,8,["title","sub-title"])})),128))]})),"_":1})]})),"_":1}),(0,d.createVNode)(l,{"title":"fields","pane-key":"fields"},{"default":(0,d.withCtx)((function(){return[(0,d.createVNode)(n,{"class":"query-demo"}),(0,d.createVNode)(r,null,{"default":(0,d.withCtx)((function(){return[(0,d.createTextVNode)("属性")]})),"_":1}),(0,d.createVNode)(c,{"title":"getFields"},{"default":(0,d.withCtx)((function(){return[((0,d.openBlock)(!0),(0,d.createElementBlock)(d.Fragment,null,(0,d.renderList)((0,d.unref)(y),(function(t,n){return(0,d.openBlock)(),(0,d.createBlock)(o,{"key":n,"title":n,"sub-title":e.$filters.stringify(t)},null,8,["title","sub-title"])})),128))]})),"_":1})]})),"_":1}),(0,d.createVNode)(l,{"title":"scroll","pane-key":"scroll"},{"default":(0,d.withCtx)((function(){return[(0,d.createVNode)(i,{"class":"query-demo-scroll","scroll-y":!0,"scrollTop":100},{"default":(0,d.withCtx)((function(){return[(0,d.createVNode)(n,{"class":"query-demo"}),(0,d.createVNode)(n,{"class":"query-demo"}),(0,d.createVNode)(n,{"class":"query-demo"})]})),"_":1}),(0,d.createVNode)(r,null,{"default":(0,d.withCtx)((function(){return[(0,d.createTextVNode)("属性")]})),"_":1}),(0,d.createVNode)(c,{"title":"getScrollOffset"},{"default":(0,d.withCtx)((function(){var t;return[((0,d.openBlock)(!0),(0,d.createElementBlock)(d.Fragment,null,(0,d.renderList)(null!==(t=(0,d.unref)(b))&&void 0!==t?t:{},(function(t,n){return(0,d.openBlock)(),(0,d.createBlock)(o,{"key":n,"title":n,"sub-title":e.$filters.stringify(t)},null,8,["title","sub-title"])})),128))]})),"_":1})]})),"_":1})]})),"_":1},8,["modelValue"])]})),"_":1})}}});n(2573);var v=p}}]);