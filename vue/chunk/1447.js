"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[1447],{"9914":function(e,n,t){t.d(n,{"F":function(){return createUseInfoHook}});var r=t(4012),o=t(969),u=t(1503);function createUseInfoHook(e,n){return function(){return(0,r.sO)(function safeExcute(){try{if(!u.BB){var t,r=null==(t=e())||null==t.then?void 0:t.then((function(e){return e}),o.cM);return(0,u.kM)(r,"Promise")&&"then"in r?n:r||e()}return e()}catch(t){return(0,o.H)("[createUseInfoHook]: "+t.message+". "+String(e)),n}}()).current}}},"1503":function(e,n,t){t.d(n,{"BB":function(){return u},"kM":function(){return i},"Hv":function(){return generateGeneralFail},"JA":function(){return combineOptions},"vL":function(){return stringfiyUrl}});var r=t(969),o=t(9059);var u=!0,i=function typeOf(e,n){return[n].flat().some((function(n){return Object.prototype.toString.call(e)==="[object "+n+"]"}))};function generateGeneralFail(e,n){var t="[API "+e+"] "+(n=n||"调用失败");return u||(0,r.H)(t),{"errMsg":t}}function combineOptions(e,n){return void 0===e&&(e={}),void 0===n&&(n={}),Object.assign({},e,n)}function stringfiyUrl(e,n){var t=e;if(n&&(0,r.hM)(n,"Object")){var u=t.includes("?");t+=(u?"&":"?")+(0,o.stringify)(n)}return t}},"1447":function(e,n,t){t.r(n),t.d(n,{"default":function(){return i}});var r=t(2535),o=(0,t(9914).F)(r.getBatteryInfoSync,{}),u=t(2053);var i=(0,u.defineComponent)({"__name":"index","setup":function setup(e){var n=o();return function(e,t){var r=(0,u.resolveComponent)("nut-switch"),o=(0,u.resolveComponent)("nut-cell"),i=(0,u.resolveComponent)("nut-progress"),c=(0,u.resolveComponent)("nut-cell-group"),l=(0,u.resolveComponent)("demo-content");return(0,u.openBlock)(),(0,u.createBlock)(l,null,{"default":(0,u.withCtx)((function(){return[(0,u.createVNode)(c,null,{"default":(0,u.withCtx)((function(){return[(0,u.createVNode)(o,{"title":"充电与否"},{"link":(0,u.withCtx)((function(){return[(0,u.createVNode)(r,{"disable":"","model-value":(0,u.unref)(n).isCharging},null,8,["model-value"])]})),"_":1}),(0,u.createVNode)(o,{"title":"电量"},{"default":(0,u.withCtx)((function(){return[(0,u.createVNode)(i,{"percentage":(0,u.unref)(n).level},null,8,["percentage"])]})),"_":1})]})),"_":1})]})),"_":1})}}})}}]);