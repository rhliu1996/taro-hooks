"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[5972],{"1148":function(t,n,e){var r=e(2535),o=e(4012),i=e(6881),u=e(1503);n.Z=function useActionSheet(t){var n=(0,o.sO)(t),e=(0,o.eJ)(),a=e[0],c=e[1];(0,o.d4)((function(){n.current=t}),[t]);var s=(0,i.Z)(r.showActionSheet);return{"tapItem":a,"show":function show(t){if(!t&&!n.current)return Promise.reject((0,u.Hv)("showToast","please provide a option"));var e=(0,u.JA)(n.current,t);return s(e).then((function(t){var n,r=t.tapIndex,o={"tapIndex":r,"tapItem":null==e||null==(n=e.itemList)?void 0:n[r]};return c(o),o}))}}}},"6881":function(t,n,e){var r=e(969),o=e(1503);function _extends(){return _extends=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},_extends.apply(this,arguments)}n.Z=function usePromise(t){return function(n){var e;if(!t)return Promise.reject((0,o.Hv)(t,"please input a valid method name"));var i=null!=(e=null==t?void 0:t.name)?e:"usePromise::implementMethod";return new Promise((function(e,u){try{if(!(0,r.mf)(t))throw new TypeError("["+i+"] not vaild for Taro");var a;null==(a=t(_extends({},n||{},{"success":e,"fail":u})))||null==a.catch||a.catch(u)}catch(t){u((0,o.Hv)(i,t.message))}}))}}},"5006":function(t,n,e){var r=e(2535),o=e(4012),i=e(6881),u=e(1503);n.Z=function useToast(t){var n=(0,o.sO)(t);(0,o.d4)((function(){n.current=t}),[t]);var e=(0,i.Z)(r.showToast);return{"show":function show(t){if(!t&&!n.current)return Promise.reject((0,u.Hv)("showToast","please provide a option"));var r=(0,u.JA)(n.current,t);return e(r)},"hide":(0,i.Z)(r.hideToast)}}},"1503":function(t,n,e){e.d(n,{"BB":function(){return i},"kM":function(){return u},"Hv":function(){return generateGeneralFail},"JA":function(){return combineOptions},"vL":function(){return stringfiyUrl}});var r=e(969),o=e(9059);var i=!0,u=function typeOf(t,n){return[n].flat().some((function(n){return Object.prototype.toString.call(t)==="[object "+n+"]"}))};function generateGeneralFail(t,n){var e="[API "+t+"] "+(n=n||"调用失败");return i||(0,r.H)(e),{"errMsg":e}}function combineOptions(t,n){return void 0===t&&(t={}),void 0===n&&(n={}),Object.assign({},t,n)}function stringfiyUrl(t,n){var e=t;if(n&&(0,r.hM)(n,"Object")){var i=e.includes("?");e+=(i?"&":"?")+(0,o.stringify)(n)}return e}},"5972":function(t,n,e){e.r(n),e.d(n,{"default":function(){return c}});var r=e(5006),o=e(1148),i=e(2053),u=e(969),a=e(4012);var c=(0,i.defineComponent)({"__name":"index","setup":function setup(t){var n=(0,o.Z)({"itemList":["A","B","C"]}),e=n.show,c=n.tapItem,s=(0,r.Z)({"duration":2e3,"mask":!0}).show;(0,a.d4)((function(){if((0,u.JR)(c)){var t=(0,u.JR)(c),n=t.tapIndex,e=t.tapItem;s({"title":"".concat(n,"/").concat(e)})}}),[c]);return function(t,n){var r=(0,i.resolveComponent)("nut-button"),o=(0,i.resolveComponent)("demo-content");return(0,i.openBlock)(),(0,i.createBlock)(o,null,{"default":(0,i.withCtx)((function(){return[(0,i.createVNode)(r,{"shape":"square","type":"primary","class":"gap","block":"","onClick":n[0]||(n[0]=function(t){return(0,i.unref)(e)()})},{"default":(0,i.withCtx)((function(){return[(0,i.createTextVNode)("展示带初始配置的ActionSheet")]})),"_":1}),(0,i.createVNode)(r,{"shape":"square","type":"primary","class":"gap","block":"","onClick":n[1]||(n[1]=function(t){return function handleChangeOption(){e({"itemColor":"#C5D9E8","itemList":["taro","hooks","taro-hooks"]})}()})},{"default":(0,i.withCtx)((function(){return[(0,i.createTextVNode)("展示新配置的ActionSheet")]})),"_":1})]})),"_":1})}}})}}]);