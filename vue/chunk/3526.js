"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[3526],{"4992":function(e,n,t){var r=t(2535),o=t(4012),c=t(6881),a=t(1503);n.Z=function useModal(e){var n=(0,o.sO)(e);(0,o.d4)((function(){n.current=e}),[e]);var t=(0,c.Z)(r.showModal);return function show(e){if(!e&&!n.current)return Promise.reject((0,a.Hv)("showModal","please provide a option"));var r=(0,a.JA)(n.current,e);return t(r)}}},"6881":function(e,n,t){var r=t(969),o=t(1503);function _extends(){return _extends=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},_extends.apply(this,arguments)}n.Z=function usePromise(e){return function(n){var t;if(!e)return Promise.reject((0,o.Hv)(e,"please input a valid method name"));var c=null!=(t=null==e?void 0:e.name)?t:"usePromise::implementMethod";return new Promise((function(t,a){try{if(!(0,r.mf)(e))throw new TypeError("["+c+"] not vaild for Taro");var i;null==(i=e(_extends({},n||{},{"success":t,"fail":a})))||null==i.catch||i.catch(a)}catch(e){a((0,o.Hv)(c,e.message))}}))}}},"1503":function(e,n,t){t.d(n,{"BB":function(){return c},"kM":function(){return a},"Hv":function(){return generateGeneralFail},"JA":function(){return combineOptions},"vL":function(){return stringfiyUrl}});var r=t(969),o=t(9059);var c=!0,a=function typeOf(e,n){return[n].flat().some((function(n){return Object.prototype.toString.call(e)==="[object "+n+"]"}))};function generateGeneralFail(e,n){var t="[API "+e+"] "+(n=n||"调用失败");return c||(0,r.H)(t),{"errMsg":t}}function combineOptions(e,n){return void 0===e&&(e={}),void 0===n&&(n={}),Object.assign({},e,n)}function stringfiyUrl(e,n){var t=e;if(n&&(0,r.hM)(n,"Object")){var c=t.includes("?");t+=(c?"&":"?")+(0,o.stringify)(n)}return t}},"3526":function(e,n,t){t.r(n),t.d(n,{"default":function(){return y}});var r=t(396),o=t(5962),c=t(2535),a=t(4012),i=t(6881),u=t(969),s=t(1503);function _extends(){return _extends=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},_extends.apply(this,arguments)}var l={};function canIUseLocation(){return navigator&&"geolocation"in navigator}function mapCoordsToPoints(e){var n,t,r,o;return{"latitude":e.latitude,"longitude":e.longitude,"speed":null!=(n=e.speed)?n:0,"accuracy":e.accuracy,"altitude":null!=(t=e.altitude)?t:0,"verticalAccuracy":null!=(r=e.altitudeAccuracy)?r:0,"horizontalAccuracy":null!=(o=e.altitudeAccuracy)?o:0}}var f=function getLocation(e){var n=e.success,t=e.fail,r=(e.altitude,e.highAccuracyExpireTime),o=void 0===r?3e3:r,c=e.isHighAccuracy,a=void 0!==c&&c;e.type;if(!canIUseLocation()){var i=(0,s.Hv)("getLocation","not support in u browser");return null==t||t(i),Promise.reject(i)}return new Promise((function(e,r){navigator.geolocation.getCurrentPosition((function(t){var r=_extends({},mapCoordsToPoints(t.coords),{"errMsg":"getLocation: success"});null==n||n(r),e(r)}),(function(e){var n=(0,s.Hv)("getLocation",e.message);null==t||t(n),r(n)}),{"enableHighAccuracy":a,"timeout":o})}))};function useLocation_extends(){return useLocation_extends=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},useLocation_extends.apply(this,arguments)}var p=function useLocation(e){var n=(0,a.eJ)(),t=n[0],r=n[1],o=(0,i.Z)(f),p=function get(n){return o(useLocation_extends({},null!=e?e:{},null!=n?n:{})).then((function(e){return r(e),e}))},d=(0,i.Z)(c.chooseLocation),v=(0,i.Z)(c.choosePoi),g=(0,i.Z)(c.openLocation),h=(0,i.Z)(c.startLocationUpdate),y=(0,i.Z)(c.startLocationUpdateBackground),m=(0,i.Z)(c.stopLocationUpdate);return(0,a.d4)((function(){p()}),[]),[t,{"get":p,"choose":d,"choosePOI":v,"open":g,"toggleUpdate":function toggleUpdate(e,n){return e?n?y():h():m()},"on":function on(e,n){n&&function onLocationChangeError(e){if(!canIUseLocation())throw new Error((0,s.Hv)("onLocationChangeError","not support in u browser").errMsg);var n=navigator.geolocation.watchPosition((function(){}),(function(n){var t=n.code;null==e||e({"errCode":t})}));l[n]=e}(e),function onLocationChange(e){if(!canIUseLocation())throw new Error((0,s.Hv)("onLocationChange","not support in u browser").errMsg);var n=navigator.geolocation.watchPosition((function(n){var t=n.coords;null==e||e(mapCoordsToPoints(t))}),(function(e){throw new Error(e.message)}));l[n]=e}(e)},"off":function off(e,n){n&&function offLocationChangeError(e){var n,t=null==(n=Object.entries(l).find((function(n){return n[1]===e})))?void 0:n[0];if(!canIUseLocation()||(0,u.G7)(t))throw null==e||e({"errCode":0}),new Error((0,s.Hv)("offLocationChange","not support in u browser").errMsg);try{navigator.geolocation.clearWatch(Number(t))}catch(n){null==e||e({"errCode":0})}}(e),function offLocationChange(e){var n,t=null==(n=Object.entries(l).find((function(n){return n[1]===e})))?void 0:n[0];if(!canIUseLocation()||(0,u.G7)(t))throw new Error((0,s.Hv)("offLocationChange","not support in u browser").errMsg);navigator.geolocation.clearWatch(Number(t))}(e)}}]},d=t(4992),v=t(2917),g=t(2053),h=(0,g.defineComponent)({"__name":"index","setup":function setup(e){var n=(0,a.eJ)({}),t=(0,v.Z)(n,2),c=t[0],i=t[1],s=(0,a.sO)(!1),l=(0,a.sO)(!1),f=(0,d.Z)({"title":"useLocation","mask":!0,"showCancel":!1}),h=p({"isHighAccuracy":!0,"altitude":!0,"type":"gcj02"}),y=(0,v.Z)(h,2),m=y[0],w=y[1],b=w.get,x=w.choose,C=w.choosePOI,_=w.open,k=w.toggleUpdate,L=w.on,O=w.off;(0,a.d4)((function(){i((0,u.JR)(m))}),[m]);var Z=function(){var e=(0,o.Z)((0,r.Z)().mark((function _callee(){var e;return(0,r.Z)().wrap((function _callee$(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,x();case 3:e=n.sent,i(e),f({"content":JSON.stringify(e)}),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),f({"content":"获取位置失败"});case 11:case"end":return n.stop()}}),_callee,null,[[0,8]])})));return function handleChoose(){return e.apply(this,arguments)}}(),P=function(){var e=(0,o.Z)((0,r.Z)().mark((function _callee2(){var e;return(0,r.Z)().wrap((function _callee2$(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,C();case 3:e=n.sent,f({"content":JSON.stringify(e)}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),f({"content":"获取POI失败"});case 10:case"end":return n.stop()}}),_callee2,null,[[0,7]])})));return function handleChoosePOI(){return e.apply(this,arguments)}}(),j=function(){var e=(0,o.Z)((0,r.Z)().mark((function _callee3(){return(0,r.Z)().wrap((function _callee3$(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k(!s.current);case 3:f({"content":(s.current?"关闭":"打开")+"前台接收成功"}),s.current=!s.current,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),f({"content":(s.current?"关闭":"打开")+"前台接收失败"});case 10:case"end":return e.stop()}}),_callee3,null,[[0,7]])})));return function handleToggle(){return e.apply(this,arguments)}}(),N=function listener(e){i(e)},H=function(){var e=(0,o.Z)((0,r.Z)().mark((function _callee4(){var e;return(0,r.Z)().wrap((function _callee4$(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e=l.current?O:L,n.next=4,e(N);case 4:f({"content":(l.current?"关闭":"打开")+"监听成功"}),l.current=!l.current,n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),f({"content":(l.current?"关闭":"打开")+"监听失败"});case 11:case"end":return n.stop()}}),_callee4,null,[[0,8]])})));return function handleToggleListener(){return e.apply(this,arguments)}}();return function(e,n){var t=(0,g.resolveComponent)("nut-cell"),r=(0,g.resolveComponent)("nut-cell-group"),o=(0,g.resolveComponent)("nut-button"),a=(0,g.resolveComponent)("demo-content");return(0,g.openBlock)(),(0,g.createBlock)(a,null,{"default":(0,g.withCtx)((function(){return[(0,g.createVNode)(r,{"title":"位置信息"},{"default":(0,g.withCtx)((function(){return[((0,g.openBlock)(!0),(0,g.createElementBlock)(g.Fragment,null,(0,g.renderList)((0,g.unref)(c),(function(n,r){return(0,g.openBlock)(),(0,g.createBlock)(t,{"key":r,"title":r,"sub-title":e.$filters.stringify(n)},null,8,["title","sub-title"])})),128))]})),"_":1}),(0,g.createVNode)(o,{"shape":"square","type":"primary","class":"gap","block":"","onClick":n[0]||(n[0]=function(e){return(0,g.unref)(b)()})},{"default":(0,g.withCtx)((function(){return[(0,g.createTextVNode)("获取当前位置")]})),"_":1}),(0,g.createVNode)(o,{"shape":"square","type":"primary","class":"gap","block":"","onClick":n[1]||(n[1]=function(e){return Z()})},{"default":(0,g.withCtx)((function(){return[(0,g.createTextVNode)("选择地理位置")]})),"_":1}),(0,g.createVNode)(o,{"shape":"square","type":"primary","class":"gap","block":"","onClick":n[2]||(n[2]=function(e){return P()})},{"default":(0,g.withCtx)((function(){return[(0,g.createTextVNode)("选择POI位置")]})),"_":1}),(0,g.createVNode)(o,{"shape":"square","type":"primary","class":"gap","block":"","onClick":n[3]||(n[3]=function(e){return function handleOpen(){_({"latitude":(0,u.JR)(c).latitude,"longitude":(0,u.JR)(c).longitude})}()})},{"default":(0,g.withCtx)((function(){return[(0,g.createTextVNode)("查看位置")]})),"_":1}),(0,g.createVNode)(o,{"shape":"square","type":"primary","class":"gap","block":"","onClick":n[4]||(n[4]=function(e){return j()})},{"default":(0,g.withCtx)((function(){return[(0,g.createTextVNode)("切换前台接受地理")]})),"_":1}),(0,g.createVNode)(o,{"shape":"square","type":"primary","class":"gap","block":"","onClick":n[5]||(n[5]=function(e){return H()})},{"default":(0,g.withCtx)((function(){return[(0,g.createTextVNode)("切换监听地理位置")]})),"_":1})]})),"_":1})}}});var y=h}}]);