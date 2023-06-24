"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[3144],{"6881":function(e,t,n){var r=n(969),o=n(1503);function _extends(){return _extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_extends.apply(this,arguments)}t.Z=function usePromise(e){return function(t){var n;if(!e)return Promise.reject((0,o.Hv)(e,"please input a valid method name"));var i=null!=(n=null==e?void 0:e.name)?n:"usePromise::implementMethod";return new Promise((function(n,u){try{if(!(0,r.mf)(e))throw new TypeError("["+i+"] not vaild for Taro");var l;null==(l=e(_extends({},t||{},{"success":n,"fail":u})))||null==l.catch||l.catch(u)}catch(e){u((0,o.Hv)(i,e.message))}}))}}},"1503":function(e,t,n){n.d(t,{"BB":function(){return i},"kM":function(){return u},"Hv":function(){return generateGeneralFail},"JA":function(){return combineOptions},"vL":function(){return stringfiyUrl}});var r=n(969),o=n(9059);var i=!0,u=function typeOf(e,t){return[t].flat().some((function(t){return Object.prototype.toString.call(e)==="[object "+t+"]"}))};function generateGeneralFail(e,t){var n="[API "+e+"] "+(t=t||"调用失败");return i||(0,r.H)(n),{"errMsg":n}}function combineOptions(e,t){return void 0===e&&(e={}),void 0===t&&(t={}),Object.assign({},e,t)}function stringfiyUrl(e,t){var n=e;if(t&&(0,r.hM)(t,"Object")){var i=n.includes("?");n+=(i?"&":"?")+(0,o.stringify)(t)}return n}},"3144":function(e,t,n){n.r(t),n.d(t,{"default":function(){return f}});var r=n(2535),o=n(4012),i=n(969),u=n(6881),l=["errMsg"];var c=function useBluetooth(){var e=(0,o.sO)(),t=(0,o.eJ)([]),n=t[0],c=t[1],a=(0,o.eJ)([]),s=a[0],f=a[1],d=(0,u.Z)(r.getBluetoothAdapterState),v=(0,u.Z)(r.getBluetoothDevices),p=(0,u.Z)(r.getConnectedBluetoothDevices),g=(0,u.Z)(r.openBluetoothAdapter),m=(0,u.Z)(r.closeBluetoothAdapter),B=function toggleAdapter(t){return(0,i.jn)(t)&&t||(0,i.HD)(t)?g({"mode":(0,i.HD)(t)?t:"central"}).then((function(t){return Promise.all([d(),v(),p()]).then((function(t){var n=t[0],r=t[1],o=t[2],i=(n.errMsg,function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(n,l));e.current=i;var u=r.devices;c(u);var a=o.devices;f(a)})),t})):m()};(0,o.d4)((function(){return B(!0),function(){B(!1)}}),[]);var k=(0,u.Z)(r.makeBluetoothPair),h=(0,u.Z)(r.isBluetoothDevicePaired),y=(0,u.Z)(r.startBluetoothDevicesDiscovery),b=(0,u.Z)(r.stopBluetoothDevicesDiscovery);return[{"devices":n,"connectedDevices":s,"adapter":e.current},{"toggleAdapter":B,"getState":d,"getDevices":v,"getConnected":p,"makePair":k,"isPaired":function isPaired(e){return h({"deviceId":e})},"toggleDiscovery":function toggleDiscovery(e){return e?y(e):b()}}]},a=n(2917),s=n(2053);var f=(0,s.defineComponent)({"__name":"index","setup":function setup(e){var t=c(),n=(0,a.Z)(t,1)[0],r=n.devices,o=n.connectedDevices,i=n.adapter;return function(e,t){var n=(0,s.resolveComponent)("nut-cell"),u=(0,s.resolveComponent)("nut-cell-group"),l=(0,s.resolveComponent)("nut-divider"),c=(0,s.resolveComponent)("demo-content");return(0,s.openBlock)(),(0,s.createBlock)(c,null,{"default":(0,s.withCtx)((function(){return[(0,s.createVNode)(u,{"title":"适配器"},{"default":(0,s.withCtx)((function(){var t;return[((0,s.openBlock)(!0),(0,s.createElementBlock)(s.Fragment,null,(0,s.renderList)(null!==(t=(0,s.unref)(i))&&void 0!==t?t:{},(function(t,r){return(0,s.openBlock)(),(0,s.createBlock)(n,{"key":r,"title":r,"sub-title":e.$filters.stringify(t)},null,8,["title","sub-title"])})),128))]})),"_":1}),(0,s.createVNode)(l,null,{"default":(0,s.withCtx)((function(){return[(0,s.createTextVNode)("设备")]})),"_":1}),((0,s.openBlock)(!0),(0,s.createElementBlock)(s.Fragment,null,(0,s.renderList)((0,s.unref)(r),(function(t,r){return(0,s.openBlock)(),(0,s.createBlock)(u,{"key":r,"title":t.name},{"default":(0,s.withCtx)((function(){return[((0,s.openBlock)(!0),(0,s.createElementBlock)(s.Fragment,null,(0,s.renderList)(t,(function(t,r){return(0,s.openBlock)(),(0,s.createBlock)(n,{"key":r,"title":r,"sub-title":e.$filters.stringify(t)},null,8,["title","sub-title"])})),128))]})),"_":2},1032,["title"])})),128)),(0,s.createVNode)(l,null,{"default":(0,s.withCtx)((function(){return[(0,s.createTextVNode)("连接设备")]})),"_":1}),((0,s.openBlock)(!0),(0,s.createElementBlock)(s.Fragment,null,(0,s.renderList)((0,s.unref)(o),(function(t,r){return(0,s.openBlock)(),(0,s.createBlock)(u,{"key":r,"title":t.name},{"default":(0,s.withCtx)((function(){return[((0,s.openBlock)(!0),(0,s.createElementBlock)(s.Fragment,null,(0,s.renderList)(t,(function(t,r){return(0,s.openBlock)(),(0,s.createBlock)(n,{"key":r,"title":r,"sub-title":e.$filters.stringify(t)},null,8,["title","sub-title"])})),128))]})),"_":2},1032,["title"])})),128))]})),"_":1})}}})}}]);