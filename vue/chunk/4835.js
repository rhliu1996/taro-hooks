"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[4835],{"9914":function(n,e,t){t.d(e,{"F":function(){return createUseInfoHook}});var r=t(4012),o=t(969),u=t(1503);function createUseInfoHook(n,e){return function(){return(0,r.sO)(function safeExcute(){try{if(!u.BB){var t,r=null==(t=n())||null==t.then?void 0:t.then((function(n){return n}),o.cM);return(0,u.kM)(r,"Promise")&&"then"in r?e:r||n()}return n()}catch(t){return(0,o.H)("[createUseInfoHook]: "+t.message+". "+String(n)),e}}()).current}}},"1503":function(n,e,t){t.d(e,{"BB":function(){return u},"kM":function(){return i},"Hv":function(){return generateGeneralFail},"JA":function(){return combineOptions},"vL":function(){return stringfiyUrl}});var r=t(969),o=t(9059);var u=!0,i=function typeOf(n,e){return[e].flat().some((function(e){return Object.prototype.toString.call(n)==="[object "+e+"]"}))};function generateGeneralFail(n,e){var t="[API "+n+"] "+(e=e||"调用失败");return u||(0,r.H)(t),{"errMsg":t}}function combineOptions(n,e){return void 0===n&&(n={}),void 0===e&&(e={}),Object.assign({},n,e)}function stringfiyUrl(n,e){var t=n;if(e&&(0,r.hM)(e,"Object")){var u=t.includes("?");t+=(u?"&":"?")+(0,o.stringify)(e)}return t}},"4835":function(n,e,t){t.r(e),t.d(e,{"default":function(){return i}});var r=t(2535),o=(0,t(9914).F)(r.getSystemInfoSync,{}),u=t(2053);var i=(0,u.defineComponent)({"__name":"index","setup":function setup(n){var e=o();return function(n,t){var r=(0,u.resolveComponent)("nut-cell"),o=(0,u.resolveComponent)("demo-content");return(0,u.openBlock)(),(0,u.createBlock)(o,null,{"default":(0,u.withCtx)((function(){return[((0,u.openBlock)(!0),(0,u.createElementBlock)(u.Fragment,null,(0,u.renderList)((0,u.unref)(e),(function(e,t){return(0,u.openBlock)(),(0,u.createBlock)(r,{"key":t,"title":t,"sub-title":n.$filters.stringify(e)},null,8,["title","sub-title"])})),128))]})),"_":1})}}})}}]);