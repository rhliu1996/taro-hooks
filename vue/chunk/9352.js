"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[9352],{"9352":function(e,t,n){n.r(t),n.d(t,{"default":function(){return b}});var r=n(2053);var u=n(396),i=n(2917),o=n(5962),s=n(2535),a=n(4012),c=n(969),l={};function _subscribeToFriendStatus(){return(_subscribeToFriendStatus=(0,o.Z)((0,u.Z)().mark((function _callee(e,t){return(0,u.Z)().wrap((function _callee$(n){for(;;)switch(n.prev=n.next){case 0:if(!l[e]){n.next=3;break}return console.warn("alert: already subscribed to friend status",e),n.abrupt("return");case 3:l[e]=setInterval((function(){return t(Boolean(Math.random()>.5))}),1e3);case 4:case"end":return n.stop()}}),_callee)})))).apply(this,arguments)}function _unsubscribeFromFriendStatus(){return(_unsubscribeFromFriendStatus=(0,o.Z)((0,u.Z)().mark((function _callee2(e){return(0,u.Z)().wrap((function _callee2$(t){for(;;)switch(t.prev=t.next){case 0:if(l[e]){t.next=3;break}return console.warn("alert: not subscribed to friend status",e),t.abrupt("return");case 3:clearInterval(l[e]),delete l[e];case 5:case"end":return t.stop()}}),_callee2)})))).apply(this,arguments)}var d={"subscribeToFriendStatus":function subscribeToFriendStatus(e,t){return _subscribeToFriendStatus.apply(this,arguments)},"unsubscribeFromFriendStatus":function unsubscribeFromFriendStatus(e){return _unsubscribeFromFriendStatus.apply(this,arguments)}},f={"setup":function setup(){var e=(0,a.eJ)(0),t=(0,i.Z)(e,2),n=t[0],r=t[1];(0,a.d4)((function(){(0,s.showToast)({"title":"You clicked"+(0,c.JR)(n)+"times","duration":2e3})}),[n]);var u=(0,a.eJ)(null),o=(0,i.Z)(u,2),l=o[0],f=o[1];return(0,a.d4)((function(){return d.subscribeToFriendStatus(1,f),function cleanup(){d.unsubscribeFromFriendStatus(1)}}),[l]),{"handleClick":function handleClick(){r((0,c.JR)(n)+1)},"count":n,"isOnline":l}}};var b=(0,n(9852).Z)(f,[["render",function render(e,t,n,u,i,o){var s=(0,r.resolveComponent)("nut-button"),a=(0,r.resolveComponent)("demo-content"),c=(0,r.resolveComponent)("taro-view"),l=(0,r.resolveComponent)("taro-block");return(0,r.openBlock)(),(0,r.createBlock)(l,null,{"default":(0,r.withCtx)((function(){return[(0,r.createVNode)(a,{"title":"1. without sideEffect"},{"default":(0,r.withCtx)((function(){return[(0,r.createVNode)(s,{"shape":"square","type":"primary","block":"","onClick":t[0]||(t[0]=function(e){return u.handleClick()})},{"default":(0,r.withCtx)((function(){return[(0,r.createTextVNode)((0,r.toDisplayString)(u.count),1)]})),"_":1})]})),"_":1}),(0,r.createVNode)(a,{"title":"2. with sideEffect"},{"default":(0,r.withCtx)((function(){return[(0,r.createVNode)(c,{"class":"control-input"},{"default":(0,r.withCtx)((function(){return[(0,r.createTextVNode)((0,r.toDisplayString)(null===u.isOnline?"Loading...":u.isOnline?"Online":"Offline"),1)]})),"_":1})]})),"_":1})]})),"_":1})}]])}}]);