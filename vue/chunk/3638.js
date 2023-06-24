"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[3638],{"7092":function(n,e,t){var r=t(4012);e.Z=function useToggle(n,e){void 0===n&&(n=!1);var t=(0,r.eJ)(n),u=t[0],o=t[1];return[u,(0,r.Ye)((function(){var t=void 0===e?!n:e;return{"toggle":function toggle(){return o((function(e){return e===n?t:n}))},"set":function set(n){return o(n)},"setLeft":function setLeft(){return o(n)},"setRight":function setRight(){return o(t)}}}),[])]}},"62":function(n,e,t){t.d(e,{"Z":function(){return B}});var r=t(4012),u=function createUpdateEffect(n){return function(e,t){var u=(0,r.sO)(!1);n((function(){return function(){u.current=!1}}),[]),n((function(){if(u.current)return e();u.current=!0}),t)}}(r.d4),o=t(969),i=function useAutoRunPlugin(n,e){var t=e.manual,i=e.ready,a=void 0===i||i,c=e.defaultParams,s=void 0===c?[]:c,l=e.refreshDeps,f=void 0===l?[]:l,d=e.refreshDepsAction,v=(0,r.sO)(!1);return v.current=!1,u((function(){!t&&(0,o.JR)(a)&&(v.current=!0,n.run.apply(n,s))}),[a]),u((function(){v.current||t||(v.current=!0,d?d():(n.refresh(),"vue"===o.oU&&(v.current=!1)))}),[].concat(f)),{"onBefore":function onBefore(){if(!(0,o.JR)(a))return{"stopNow":!0}}}};i.onInit=function(n){var e=n.ready,t=void 0===e||e;return{"loading":!n.manual&&(0,o.JR)(t)}};var a=i;function useCreation(n,e){var t=(0,r.sO)({"deps":e,"obj":void 0,"initialized":!1},!0);return!1!==(0,o.JR)(t.current).initialized&&function depsAreSame(n,e){if(n===e)return!0;for(var t=0;t<n.length;t++)if(!Object.is(n[t],e[t]))return!1;return!0}((0,o.JR)(t.current).deps,e)||(t.current={"deps":e,"obj":n(),"initialized":!0}),(0,o.JR)(t.current).obj}var c=function useLatest(n){var e=(0,r.sO)(n);return e.current=n,e},s=function useUnmount(n){var e=c(n);(0,r.d4)((function(){return function(){null==e||null==e.current||e.current()}}),[])},l=t(3208),f=new Map,d={},v=function subscribe(n,e){return d[n]||(d[n]=[]),d[n].push(e),function unsubscribe(){var t=d[n].indexOf(e);d[n].splice(t,1)}},p=function useCachePlugin(n,e){var t=e.cacheKey,u=e.cacheTime,o=void 0===u?3e5:u,i=e.staleTime,a=void 0===i?0:i,c=e.setCache,p=e.getCache,h=(0,r.sO)(),m=(0,r.sO)(),g=function _setCache(n,e){c?c(e):l.K7(n,o,e),function trigger(n,e){d[n]&&d[n].forEach((function(n){return n(e)}))}(n,e.data)},y=function _getCache(n,e){return void 0===e&&(e=[]),p?p(e):l.lJ(n)};return useCreation((function(){if(t){var e=y(t);e&&Object.hasOwnProperty.call(e,"data")&&(n.state.data=e.data,n.state.params=e.params,(-1===a||(new Date).getTime()-e.time<=a)&&(n.state.loading=!1)),h.current=v(t,(function(e){n.setState({"data":e})}))}}),[]),s((function(){null==h.current||h.current()})),t?{"onBefore":function onBefore(n){var e=y(t,n);return e&&Object.hasOwnProperty.call(e,"data")?-1===a||(new Date).getTime()-e.time<=a?{"loading":!1,"data":null==e?void 0:e.data,"returnNow":!0}:{"data":null==e?void 0:e.data}:{}},"onRequest":function onRequest(n,e){var r=function getCachePromise(n){return f.get(n)}(t);return r&&r!==m.current||(r=n.apply(void 0,e),m.current=r,function setCachePromise(n,e){f.set(n,e),e.then((function(e){return f.delete(n),e})).catch((function(){f.delete(n)}))}(t,r)),{"servicePromise":r}},"onSuccess":function onSuccess(e,r){t&&(null==h.current||h.current(),g(t,{"data":e,"params":r,"time":(new Date).getTime()}),h.current=v(t,(function(e){n.setState({"data":e})})))},"onMutate":function onMutate(e){t&&(null==h.current||h.current(),g(t,{"data":e,"params":n.state.params,"time":(new Date).getTime()}),h.current=v(t,(function(e){n.setState({"data":e})})))}}:{}},h=t(783),m=function useDebouncePlugin(n,e){var t=e.debounceWait,u=e.debounceLeading,o=e.debounceTrailing,i=e.debounceMaxWait,a=(0,r.sO)(),c=(0,r.Ye)((function(){var n={};return void 0!==u&&(n.leading=u),void 0!==o&&(n.trailing=o),void 0!==i&&(n.maxWait=i),n}),[u,o,i]);return(0,r.d4)((function(){if(t){var e=n.runAsync.bind(n);return a.current=(0,h.debounce)((function(n){n()}),t,c),n.runAsync=function(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return new Promise((function(n,r){null==a.current||a.current((function(){e.apply(void 0,t).then(n).catch(r)}))}))},function(){var t;null==(t=a.current)||t.cancel(),n.runAsync=e}}}),[t,c]),t?{"onCancel":function onCancel(){var n;null==(n=a.current)||n.cancel()}}:{}},g=function useLoadingDelayPlugin(n,e){var t=e.loadingDelay,u=(0,r.sO)();if(!t)return{};var o=function cancelTimeout(){u.current&&clearTimeout(u.current)};return{"onBefore":function onBefore(){return o(),u.current=setTimeout((function(){n.setState({"loading":!0})}),t),{"loading":!1}},"onFinally":function onFinally(){o()},"onCancel":function onCancel(){o()}}},y=t(8960),b=[];var w=function subscribeReVisible(n){b.push(n);var e=(0,y.Z)();return(0,r.d4)((function(){if((0,o.JR)(e))for(var n=0;n<b.length;n++){(0,b[n])()}}),[e]),function unsubscribe(){var e=b.indexOf(n);b.splice(e,1)}},R=function usePollingPlugin(n,e){var t=e.pollingInterval,i=e.pollingWhenHidden,a=void 0===i||i,c=(0,r.sO)(),s=(0,r.sO)(),l=(0,y.Z)(),f=w((function(){a||(0,o.JR)(l)||n.refresh()})),d=function stopPolling(){c.current&&clearTimeout(c.current),null==s.current||s.current()};return u((function(){t||d()}),[t]),t?{"onBefore":function onBefore(){d()},"onFinally":function onFinally(){a||(0,o.JR)(l)?c.current=setTimeout((function(){n.refresh()}),t):s.current=f},"onCancel":function onCancel(){d()}}:{}},O=t(2535),P=t.n(O);function isOnline(){return new Promise((function(n,e){(0,O.getNetworkType)().then((function(e){return n("none"!==e.networkType)})).catch(e)}))}var C=[];var J=function useRefreshOnWindowFocusPlugin(n,e){var t=e.refreshOnWindowFocus,u=e.focusTimespan,i=void 0===u?5e3:u,a=(0,r.sO)(),c=(0,y.Z)(),l=function stopSubscribe(){null==a.current||a.current()},f=function subscribeFocus(){return function _call(n,e,t){if(t)return e?e(n()):n();try{var r=Promise.resolve(n());return e?r.then(e):r}catch(n){return Promise.reject(n)}}(isOnline,(function(n){if((0,o.JR)(c)&&n)for(var e=0;e<C.length;e++){(0,C[e])()}}))};return P().useDidShow((function(){f()})),P().useDidHide((function(){f()})),(0,r.d4)((function(){if(t){var e=function limit(n,e){var t=!1;return function(){t||(t=!0,n.apply(void 0,arguments),setTimeout((function(){t=!1}),e))}}(n.refresh.bind(n),i);a.current=function useRefreshOnWindowFocusPlugin_subscribe(n){return C.push(n),function unsubscribe(){var e=C.indexOf(n);C.splice(e,1)}}((function(){e()}))}return function(){l()}}),[t,i,c]),s((function(){l()})),{}},x=function useRetryPlugin(n,e){var t=e.retryInterval,u=e.retryCount,o=(0,r.sO)(),i=(0,r.sO)(0),a=(0,r.sO)(!1);return u?{"onBefore":function onBefore(){a.current||(i.current=0),a.current=!1,o.current&&clearTimeout(o.current)},"onSuccess":function onSuccess(){i.current=0},"onError":function onError(){if(i.current+=1,-1===u||i.current<=u){var e=null!=t?t:Math.min(1e3*Math.pow(2,i.current),3e4);o.current=setTimeout((function(){a.current=!0,n.refresh()}),e)}else i.current=0},"onCancel":function onCancel(){i.current=0,o.current&&clearTimeout(o.current)}}:{}},_=function useThrottlePlugin(n,e){var t=e.throttleWait,u=e.throttleLeading,o=e.throttleTrailing,i=(0,r.sO)(),a={};return void 0!==u&&(a.leading=u),void 0!==o&&(a.trailing=o),(0,r.d4)((function(){if(t){var e=n.runAsync.bind(n);return i.current=(0,h.throttle)((function(n){n()}),t,a),n.runAsync=function(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return new Promise((function(n,r){null==i.current||i.current((function(){e.apply(void 0,t).then(n).catch(r)}))}))},function(){var t;n.runAsync=e,null==(t=i.current)||t.cancel()}}}),[t,u,o]),t?{"onCancel":function onCancel(){var n;null==(n=i.current)||n.cancel()}}:{}},A=function useUpdate(){var n=(0,r.eJ)({})[1];return(0,r.I4)((function(){return n({})}),[])},T=function useMount(n){(0,r.d4)((function(){null==n||n()}),[])};var j=function useMemoizedFn(n){var e=(0,r.sO)(n);e.current=(0,r.Ye)((function(){return n}),[n]);var t=(0,r.sO)();return t.current||(t.current=function(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];return e.current.apply(this,t)}),t.current},S=["stopNow","returnNow"];function _await(n,e,t){return t?e?e(n):n:(n&&n.then||(n=Promise.resolve(n)),e?n.then(e):n)}function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(this,arguments)}var N=function(){function Fetch(n,e,t,r){void 0===r&&(r={}),this.serviceRef=void 0,this.options=void 0,this.subscribe=void 0,this.initState=void 0,this.pluginImpls=void 0,this.count=0,this.state={"loading":!1,"params":void 0,"data":void 0,"error":void 0},this.serviceRef=n,this.options=e,this.subscribe=t,this.initState=r,this.state=_extends({},this.state,{"loading":!e.manual},r)}var n=Fetch.prototype;return n.setState=function setState(n){void 0===n&&(n={}),this.state=_extends({},this.state,n),this.subscribe()},n.runPluginHandler=function runPluginHandler(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var u=this.pluginImpls.map((function(e){var r;return null==(r=e[n])?void 0:r.call.apply(r,[e].concat(t))})).filter(Boolean);return Object.assign.apply(Object,[{}].concat(u))},n.runAsync=function runAsync(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];try{var r=this;r.count+=1;var u=r.count,o=r.runPluginHandler("onBefore",e),i=o.stopNow,a=void 0!==i&&i,c=o.returnNow,s=void 0!==c&&c,l=function _objectWithoutPropertiesLoose(n,e){if(null==n)return{};var t,r,u={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(u[t]=n[t]);return u}(o,S);return a?_await(new Promise((function(){}))):(r.setState(_extends({"loading":!0,"params":e},l)),s?Promise.resolve(l.data):(null==r.options.onBefore||r.options.onBefore(e),_await(function _catch(n,e){try{var t=n()}catch(n){return e(n)}return t&&t.then?t.then(void 0,e):t}((function(){var n,t=r.runPluginHandler("onRequest",r.serviceRef.current,e).servicePromise;t||(t=(n=r.serviceRef).current.apply(n,e));return _await(t,(function(n){return u!==r.count?new Promise((function(){})):(r.setState({"data":n,"error":void 0,"loading":!1}),null==r.options.onSuccess||r.options.onSuccess(n,e),r.runPluginHandler("onSuccess",n,e),null==r.options.onFinally||r.options.onFinally(e,n,void 0),u===r.count&&r.runPluginHandler("onFinally",e,n,void 0),n)}))}),(function(n){if(u!==r.count)return new Promise((function(){}));throw r.setState({"error":n,"loading":!1}),null==r.options.onError||r.options.onError(n,e),r.runPluginHandler("onError",n,e),null==r.options.onFinally||r.options.onFinally(e,void 0,n),u===r.count&&r.runPluginHandler("onFinally",e,void 0,n),n})))))}catch(n){return Promise.reject(n)}},n.run=function run(){var n=this;this.runAsync.apply(this,arguments).catch((function(e){n.options.onError||console.error(e)}))},n.cancel=function cancel(){this.count+=1,this.setState({"loading":!1}),this.runPluginHandler("onCancel")},n.refresh=function refresh(){this.run.apply(this,this.state.params||[])},n.refreshAsync=function refreshAsync(){return this.runAsync.apply(this,this.state.params||[])},n.mutate=function mutate(n){var e;e=(0,o.mf)(n)?n(this.state.data):n,this.runPluginHandler("onMutate",e),this.setState({"data":e})},Fetch}(),q=["manual"];function useRequestImplement_extends(){return useRequestImplement_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},useRequestImplement_extends.apply(this,arguments)}var F=function useRequestImplement(n,e,t){void 0===e&&(e={}),void 0===t&&(t=[]);var u=e,i=u.manual,a=void 0!==i&&i,l=function useRequestImplement_objectWithoutPropertiesLoose(n,e){if(null==n)return{};var t,r,u={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(u[t]=n[t]);return u}(u,q),f=useRequestImplement_extends({"manual":a},l),d=c(n),v=A(),p=(0,r.Ye)((function(){var n=t.map((function(n){return null==n||null==n.onInit?void 0:n.onInit(f)})).filter(Boolean);return new N(d,f,v,Object.assign.apply(Object,[{}].concat(n)))}),[]);"react"===o.oU?(p.options=f,p.pluginImpls=t.map((function(n){return n(p,f)}))):"vue"===o.oU&&(p.value.options=f,p.value.pluginImpls=t.map((function(n){return n(p.value,f)}))),T((function(){if(!a){var n=(0,o.JR)(p),t=n.state.params||e.defaultParams||[];n.run.apply(n,t)}})),s((function(){var n;null==(n=(0,o.JR)(p))||null==n.cancel||n.cancel()}));var h=(0,r.Ye)((function(){return{"loading":(0,o.JR)(p).state.loading,"data":(0,o.JR)(p).state.data,"error":(0,o.JR)(p).state.error,"params":(0,o.JR)(p).state.params||[],"cancel":(0,o.JR)(p).cancel.bind((0,o.JR)(p)),"refresh":(0,o.JR)(p).refresh.bind((0,o.JR)(p)),"refreshAsync":(0,o.JR)(p).refreshAsync.bind((0,o.JR)(p)),"run":(0,o.JR)(p).run.bind((0,o.JR)(p)),"runAsync":(0,o.JR)(p).runAsync.bind((0,o.JR)(p)),"mutate":(0,o.JR)(p).mutate.bind((0,o.JR)(p))}}),[p]);return"vue"===o.oU?h:{"loading":p.state.loading,"data":p.state.data,"error":p.state.error,"params":p.state.params||[],"cancel":j(p.cancel.bind(p)),"refresh":j(p.refresh.bind(p)),"refreshAsync":j(p.refreshAsync.bind(p)),"run":j(p.run.bind(p)),"runAsync":j(p.runAsync.bind(p)),"mutate":j(p.mutate.bind(p))}};var B=function useRequest(n,e,t){return F(n,e,[].concat(t||[],[m,g,R,J,_,a,p,x]))}},"8960":function(n,e,t){var r=t(2535),u=t.n(r),o=t(4012);e.Z=function useVisible(){var n=(0,o.eJ)(!0),e=n[0],t=n[1];return u().useDidShow((function(){t(!0)})),u().useDidHide((function(){t(!1)})),e}},"3208":function(n,e,t){function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(this,arguments)}t.d(e,{"lJ":function(){return o},"K7":function(){return u},"LK":function(){return i}});var r=new Map,u=function setCache(n,e,t){var u=r.get(n);null!=u&&u.timer&&clearTimeout(u.timer);var o=void 0;e>-1&&(o=setTimeout((function(){r.delete(n)}),e)),r.set(n,_extends({},t,{"timer":o}))},o=function getCache(n){return r.get(n)},i=function clearCache(n){n?(Array.isArray(n)?n:[n]).forEach((function(n){return r.delete(n)})):r.clear()}},"3638":function(n,e,t){t.r(e),t.d(e,{"default":function(){return l}});var r=t(2053);var u=t(62),o=t(2917),i=t(7092),a=t(3932),c=t.n(a);function getUsername(){return new Promise((function(n){setTimeout((function(){n(c().mock("@name()"))}),1e3)}))}var s={"setup":function setup(){var n=(0,i.Z)(!1),e=(0,o.Z)(n,2),t=e[0],r=e[1];return{"request":(0,u.Z)(getUsername,{"ready":t,"manual":!0}),"ready":t,"action":r}}};var l=(0,t(9852).Z)(s,[["render",function render(n,e,t,u,o,i){var a=(0,r.resolveComponent)("taro-view"),c=(0,r.resolveComponent)("nut-button"),s=(0,r.resolveComponent)("nut-row"),l=(0,r.resolveComponent)("demo-content"),f=(0,r.resolveComponent)("taro-block");return(0,r.openBlock)(),(0,r.createBlock)(f,null,{"default":(0,r.withCtx)((function(){return[(0,r.createVNode)(l,{"title":"Ready - 手动模式"},{"default":(0,r.withCtx)((function(){return[(0,r.createVNode)(a,null,{"default":(0,r.withCtx)((function(){return[(0,r.createTextVNode)("Ready: "+(0,r.toDisplayString)(JSON.stringify(u.ready)),1)]})),"_":1}),(0,r.createVNode)(s,{"justify":"center"},{"default":(0,r.withCtx)((function(){return[(0,r.createVNode)(c,{"loading":u.request.loading,"size":"small","type":"primary","shape":"square","block":"","onClick":e[0]||(e[0]=function(n){return u.action.toggle()})},{"default":(0,r.withCtx)((function(){return[(0,r.createTextVNode)(" Toggle Ready ")]})),"_":1},8,["loading"])]})),"_":1}),(0,r.createVNode)(a,null,{"default":(0,r.withCtx)((function(){return[(0,r.createTextVNode)("Username: "+(0,r.toDisplayString)(u.request.loading?"Loading...":u.request.data),1)]})),"_":1}),(0,r.createVNode)(s,{"justify":"center"},{"default":(0,r.withCtx)((function(){return[(0,r.createVNode)(c,{"loading":u.request.loading,"size":"small","type":"primary","shape":"square","block":"","onClick":e[1]||(e[1]=function(n){return u.request.run()})},{"default":(0,r.withCtx)((function(){return[(0,r.createTextVNode)(" run ")]})),"_":1},8,["loading"])]})),"_":1})]})),"_":1})]})),"_":1})}]])}}]);