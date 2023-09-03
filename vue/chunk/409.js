"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[409],{"4992":function(e,n,t){var r=t(2535),o=t(4012),a=t(6881),c=t(9524);n.Z=function useModal(e){var n=(0,o.sO)(e);(0,o.d4)((function(){n.current=e}),[e]);var t=(0,a.Z)(r.showModal);return function show(e){if(!e&&!n.current)return Promise.reject((0,c.Hv)("showModal","please provide a option"));var r=(0,c.JA)(n.current,e);return t(r)}}},"6881":function(e,n,t){var r=t(969),o=t(9524);function _extends(){return _extends=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},_extends.apply(this,arguments)}n.Z=function usePromise(e){return function(n){var t;if(!e)return Promise.reject((0,o.Hv)(e,"please input a valid method name"));var a=null!=(t=null==e?void 0:e.name)?t:"usePromise::implementMethod";return new Promise((function(t,c){try{if(!(0,r.mf)(e))throw new TypeError("["+a+"] not vaild for Taro");var u;null==(u=e(_extends({},n||{},{"success":t,"fail":c})))||null==u.catch||u.catch(c)}catch(e){c((0,o.Hv)(a,e.message))}}))}}},"9524":function(e,n,t){t.d(n,{"BB":function(){return a},"kM":function(){return c},"Hv":function(){return generateGeneralFail},"JA":function(){return combineOptions},"vL":function(){return stringfiyUrl}});var r=t(969),o=t(9059);var a=!0,c=function typeOf(e,n){return[n].flat().some((function(n){return Object.prototype.toString.call(e)==="[object "+n+"]"}))};function generateGeneralFail(e,n){var t="[API "+e+"] "+(n=n||"调用失败");return a||(0,r.H)(t),{"errMsg":t}}function combineOptions(e,n){return void 0===e&&(e={}),void 0===n&&(n={}),Object.assign({},e,n)}function stringfiyUrl(e,n){var t=e;if(n&&(0,r.hM)(n,"Object")){var a=t.includes("?");t+=(a?"&":"?")+(0,o.stringify)(n)}return t}},"409":function(e,n,t){t.r(n),t.d(n,{"default":function(){return p}});var r=t(94),o=t(1503),a=t(4992),c=t(4012),u=t(2535),i=t(6881);var s=function useKeyboard(){var e=(0,c.eJ)(0),n=e[0],t=e[1];return(0,c.d4)((function(){var e=function handle(e){t(e.height)};return(0,u.onKeyboardHeightChange)(e),function(){(0,u.offKeyboardHeightChange)(e)}})),{"height":n,"close":(0,i.Z)(u.hideKeyboard),"getRange":(0,i.Z)(u.getSelectedTextRange)}},l=t(2053),f=(0,l.defineComponent)({"__name":"index","setup":function setup(e){var n=s(),t=n.height,c=n.close,u=n.getRange,i=(0,a.Z)({"mask":!0,"title":"获取结果","showCancel":!1}),f=function(){var e=(0,o.Z)((0,r.Z)().mark((function _callee(){var e,n;return(0,r.Z)().wrap((function _callee$(t){for(;;)switch(t.prev=t.next){case 0:return e="关闭成功",t.prev=1,t.next=4,c();case 4:n=t.sent,console.log(n),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e=t.t0.errMsg||t.t0.message;case 11:i({"content":e});case 12:case"end":return t.stop()}}),_callee,null,[[1,8]])})));return function handleClose(){return e.apply(this,arguments)}}(),p=function(){var e=(0,o.Z)((0,r.Z)().mark((function _callee2(){var e,n;return(0,r.Z)().wrap((function _callee2$(t){for(;;)switch(t.prev=t.next){case 0:return e="获取成功",t.prev=1,t.next=4,u();case 4:n=t.sent,console.log(n),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e=t.t0.errMsg||t.t0.message;case 11:i({"content":e});case 12:case"end":return t.stop()}}),_callee2,null,[[1,8]])})));return function handleGetRange(){return e.apply(this,arguments)}}();return function(e,n){var r=(0,l.resolveComponent)("nut-cell"),o=(0,l.resolveComponent)("nut-button"),a=(0,l.resolveComponent)("demo-content");return(0,l.openBlock)(),(0,l.createBlock)(a,null,{"default":(0,l.withCtx)((function(){return[(0,l.createVNode)(r,{"title":"高度","sub-title":e.$filters.stringify((0,l.unref)(t))},null,8,["sub-title"]),(0,l.createVNode)(o,{"shape":"square","type":"primary","class":"gap","block":"","onClick":n[0]||(n[0]=function(e){return f()})},{"default":(0,l.withCtx)((function(){return[(0,l.createTextVNode)("关闭键盘")]})),"_":1}),(0,l.createVNode)(o,{"shape":"square","type":"primary","class":"gap","block":"","onClick":n[1]||(n[1]=function(e){return p()})},{"default":(0,l.withCtx)((function(){return[(0,l.createTextVNode)("获取选择范围")]})),"_":1})]})),"_":1})}}});var p=f}}]);