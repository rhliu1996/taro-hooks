"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[2152],{"893":function(e,t,n){var r=n(2535),a=n(4012),o=n(969),u=n(9524);function _extends(){return _extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_extends.apply(this,arguments)}function generateGlobalDataFromAppInstance(e){var t=["config","onHide","onLaunch","onShow"],n=(null!=e?e:{}).$app;return null!=n&&n.globalData?null==n?void 0:n.globalData:Object.fromEntries(Object.entries(e).filter((function(e){return!t.includes(e[0])})))}t.Z=function useApp(e){var t=(0,a.sO)((0,r.getApp)({"allowDefault":Boolean(e)})),n=(0,a.eJ)(generateGlobalDataFromAppInstance(t.current)),c=n[0],i=n[1];return(0,a.d4)((function(){t.current&&i(generateGlobalDataFromAppInstance(t.current))}),[t]),{"app":t.current,"globalData":c,"setGlobalData":function setGlobalDataAsync(e,n){return new Promise((function(r,a){(0,o.G7)(e)&&a((0,u.Hv)("setGlobalData","please privide key"));try{var l,s,f,d,p=_extends({},(0,o.JR)(c),((l={})[e]=n,l));(null!=(s=null==(f=t.current)||null==(d=f.$app)?void 0:d.globalData)?s:t.current)[e]=n,i(p),r((0,u.Hv)("setGlobalData","success"))}catch(e){a((0,u.Hv)("setGlobalData",e.message))}}))}}}},"6881":function(e,t,n){var r=n(969),a=n(9524);function _extends(){return _extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_extends.apply(this,arguments)}t.Z=function usePromise(e){return function(t){var n;if(!e)return Promise.reject((0,a.Hv)(e,"please input a valid method name"));var o=null!=(n=null==e?void 0:e.name)?n:"usePromise::implementMethod";return new Promise((function(n,u){try{if(!(0,r.mf)(e))throw new TypeError("["+o+"] not vaild for Taro");var c;null==(c=e(_extends({},t||{},{"success":n,"fail":u})))||null==c.catch||c.catch(u)}catch(e){u((0,a.Hv)(o,e.message))}}))}}},"9524":function(e,t,n){n.d(t,{"BB":function(){return o},"kM":function(){return u},"Hv":function(){return generateGeneralFail},"JA":function(){return combineOptions},"vL":function(){return stringfiyUrl}});var r=n(969),a=n(9059);var o=!0,u=function typeOf(e,t){return[t].flat().some((function(t){return Object.prototype.toString.call(e)==="[object "+t+"]"}))};function generateGeneralFail(e,t){var n="[API "+e+"] "+(t=t||"调用失败");return o||(0,r.H)(n),{"errMsg":n}}function combineOptions(e,t){return void 0===e&&(e={}),void 0===t&&(t={}),Object.assign({},e,t)}function stringfiyUrl(e,t){var n=e;if(t&&(0,r.hM)(t,"Object")){var o=n.includes("?");n+=(o?"&":"?")+(0,a.stringify)(t)}return n}},"2152":function(e,t,n){n.r(t),n.d(t,{"default":function(){return p}});var r=n(2535),a=n(4012),o=n(969),u=n(6881),c=n(893),i=n(9524);function _extends(){return _extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_extends.apply(this,arguments)}var l=function useTabBar(){var e=(0,a.sO)({}),t=(0,a.sO)(!0),n=(0,c.Z)().app,l=(0,u.Z)(r.showTabBarRedDot),s=(0,u.Z)(r.hideTabBarRedDot),f=(0,u.Z)(r.setTabBarBadge),d=(0,u.Z)(r.removeTabBarBadge),p=(0,u.Z)(r.showTabBar),g=(0,u.Z)(r.hideTabBar),b=(0,u.Z)(r.setTabBarStyle),v=(0,u.Z)(r.setTabBarItem);return{"toggleRedDot":function toggleRedDot(t){var n=e.current[t];return(n?s:l)({"index":t}).then((function(r){return e.current[t]=!n,r}))},"toggleBadge":function toggleBadge(e,t){return null!=t&&t.length?f({"index":e,"text":t}):d({"index":e})},"setStyle":b,"setItem":function setItem(e,t){var r,a;if((0,o.Kn)(e)&&(0,o.hj)(t))return v(_extends({},e,{"index":t}));var u=null==n||null==(r=n.config)||null==(a=r.tabBar)?void 0:a.list;return null!=u&&u.length?Promise.all(u.map((function(t,n){return v(_extends({},e,{"index":n}))}))).then((function(e){return e[0]})):Promise.reject((0,i.Hv)("setItem","you must set config"))},"toggle":function toggle(e){return void 0===e&&(e=!1),(t.current?g:p)({"animation":e}).then((function(e){return t.current=!t.current,e}))}}},s=n(2053),f=n(3932),d=n.n(f);var p=(0,s.defineComponent)({"__name":"index","setup":function setup(e){var t=l(),n=t.toggleRedDot,r=t.toggleBadge,a=t.setStyle,o=t.setItem,u=t.toggle;return function(e,t){var c=(0,s.resolveComponent)("nut-button"),i=(0,s.resolveComponent)("demo-content");return(0,s.openBlock)(),(0,s.createBlock)(i,null,{"default":(0,s.withCtx)((function(){return[(0,s.createVNode)(c,{"shape":"square","type":"primary","class":"gap","block":"","onClick":t[0]||(t[0]=function(e){return(0,s.unref)(u)()})},{"default":(0,s.withCtx)((function(){return[(0,s.createTextVNode)("切换TabBar显示/隐藏")]})),"_":1}),(0,s.createVNode)(c,{"shape":"square","type":"primary","class":"gap","block":"","onClick":t[1]||(t[1]=function(e){return(0,s.unref)(u)(!0)})},{"default":(0,s.withCtx)((function(){return[(0,s.createTextVNode)("切换TabBar显示/隐藏(动画)")]})),"_":1}),(0,s.createVNode)(c,{"shape":"square","type":"primary","class":"gap","block":"","onClick":t[2]||(t[2]=function(e){return function handleToggleRedDot(){n(d().Random.pick([0,1]))}()})},{"default":(0,s.withCtx)((function(){return[(0,s.createTextVNode)("随机TabBar 红点 显示/隐藏")]})),"_":1}),(0,s.createVNode)(c,{"shape":"square","type":"primary","class":"gap","block":"","onClick":t[3]||(t[3]=function(e){return function handleToggleBadge(){r(d().Random.pick([0,1]),d().Random.pick(["serro",void 0]))}()})},{"default":(0,s.withCtx)((function(){return[(0,s.createTextVNode)("随机TabBar badge 显示/隐藏")]})),"_":1}),(0,s.createVNode)(c,{"shape":"square","type":"primary","class":"gap","block":"","onClick":t[4]||(t[4]=function(e){return function handleSetItem(){o({"text":d().Random.city()},d().Random.pick([0,1]))}()})},{"default":(0,s.withCtx)((function(){return[(0,s.createTextVNode)("随机设置TabBar Item")]})),"_":1}),(0,s.createVNode)(c,{"shape":"square","type":"primary","class":"gap","block":"","onClick":t[5]||(t[5]=function(e){return function handleSetStyle(){a({"color":d().Random.color(),"selectedColor":d().Random.color(),"backgroundColor":d().Random.color()})}()})},{"default":(0,s.withCtx)((function(){return[(0,s.createTextVNode)("设置TabBar样式")]})),"_":1})]})),"_":1})}}})}}]);