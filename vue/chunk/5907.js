"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[5907],{"4992":function(n,e,t){var r=t(2535),o=t(4012),u=t(6881),a=t(1503);e.Z=function useModal(n){var e=(0,o.sO)(n);(0,o.d4)((function(){e.current=n}),[n]);var t=(0,u.Z)(r.showModal);return function show(n){if(!n&&!e.current)return Promise.reject((0,a.Hv)("showModal","please provide a option"));var r=(0,a.JA)(e.current,n);return t(r)}}},"6881":function(n,e,t){var r=t(969),o=t(1503);function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(this,arguments)}e.Z=function usePromise(n){return function(e){var t;if(!n)return Promise.reject((0,o.Hv)(n,"please input a valid method name"));var u=null!=(t=null==n?void 0:n.name)?t:"usePromise::implementMethod";return new Promise((function(t,a){try{if(!(0,r.mf)(n))throw new TypeError("["+u+"] not vaild for Taro");var c;null==(c=n(_extends({},e||{},{"success":t,"fail":a})))||null==c.catch||c.catch(a)}catch(n){a((0,o.Hv)(u,n.message))}}))}}},"1503":function(n,e,t){t.d(e,{"BB":function(){return u},"kM":function(){return a},"Hv":function(){return generateGeneralFail},"JA":function(){return combineOptions},"vL":function(){return stringfiyUrl}});var r=t(969),o=t(9059);var u=!0,a=function typeOf(n,e){return[e].flat().some((function(e){return Object.prototype.toString.call(n)==="[object "+e+"]"}))};function generateGeneralFail(n,e){var t="[API "+n+"] "+(e=e||"调用失败");return u||(0,r.H)(t),{"errMsg":t}}function combineOptions(n,e){return void 0===n&&(n={}),void 0===e&&(e={}),Object.assign({},n,e)}function stringfiyUrl(n,e){var t=n;if(e&&(0,r.hM)(e,"Object")){var u=t.includes("?");t+=(u?"&":"?")+(0,o.stringify)(e)}return t}},"5907":function(n,e,t){t.r(e),t.d(e,{"default":function(){return i}});var r=t(2535),o=t(4012);var u=function useUpdateManager(n){var e=(0,o.sO)((0,r.getUpdateManager)()),t=(0,o.sO)({});(0,o.d4)((function(){e.current&&(null==e.current.onCheckForUpdate||e.current.onCheckForUpdate((function(n){t.current.hasUpdate=n.hasUpdate})),null==e.current.onUpdateFailed||e.current.onUpdateFailed((function(){t.current.error=!0})),null==e.current.onUpdateReady||e.current.onUpdateReady((function(){t.current.ready=!0})))}),[e.current]),(0,o.d4)((function(){null==n||n(e.current,t.current)}),[t.current])},a=t(4992),c=t(2053);var i=(0,c.defineComponent)({"__name":"index","setup":function setup(n){var e=(0,a.Z)({"mask":!0,"title":"更新","showCancel":!1});return u((function(n,t){var r=t.hasUpdate,o=t.error,u=t.ready;o?e({"content":"更新失败, 请重试!"}).then((function(){n.applyUpdate()})):u?e({"content":"新版本已经准备好, 是否重启?","showCancel":!0}).then((function(e){e.confirm&&n.applyUpdate()})):r&&e({"content":"检测到新版本, 是否更新?","showCancel":!0})})),function(n,e){var t=(0,c.resolveComponent)("taro-view"),r=(0,c.resolveComponent)("demo-content");return(0,c.openBlock)(),(0,c.createBlock)(r,null,{"default":(0,c.withCtx)((function(){return[(0,c.createVNode)(t,null,{"default":(0,c.withCtx)((function(){return[(0,c.createTextVNode)("检查更新中....")]})),"_":1})]})),"_":1})}}})}}]);