"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[506],{"711":function(e,t,n){n.d(t,{"wx":function(){return s},"oQ":function(){return c},"ox":function(){return singleQuote},"rD":function(){return f},"_c":function(){return h},"Qm":function(){return b},"IG":function(){return m},"Zq":function(){return v},"gn":function(){return l},"H3":function(){return y},"zW":function(){return k},"HD":function(){return isString},"o8":function(){return isUndefined},"Ft":function(){return isNull},"Kn":function(){return isObject},"jn":function(){return isBoolean},"mf":function(){return isFunction},"hj":function(){return isNumber},"eM":function(){return isBooleanStringLiteral},"kJ":function(){return w},"gl":function(){return isWebPlatform},"qO":function(){return S},"nG":function(){return TaroHook},"sR":function(){return I},"PT":function(){return E},"kT":function(){return L},"Z6":function(){return B},"ZT":function(){return noop},"BZ":function(){return box},"gy":function(){return unbox},"eu":function(){return toDashed},"CA":function(){return toCamelCase},"mA":function(){return toKebabCase},"kC":function(){return capitalize},"RI":function(){return hasOwn},"zx":function(){return ensure},"ZK":function(){return warn},"xK":function(){return queryToJson},"PG":function(){return getUniqueKey},"np":function(){return cacheDataSet},"Oz":function(){return cacheDataGet},"YD":function(){return cacheDataHas},"ku":function(){return mergeInternalComponents},"W":function(){return getComponentsAlias},"vJ":function(){return getPlatformType},"xi":function(){return mergeReconciler},"JX":function(){return nonsupport},"E$":function(){return setUniqueKeyToRoute},"WY":function(){return indent},"Ig":function(){return processApis}});var o="[]",i="",r="!0",a="!1",s={"bindTouchStart":i,"bindTouchMove":i,"bindTouchEnd":i,"bindTouchCancel":i,"bindLongTap":i},c={"animation":i,"bindAnimationStart":i,"bindAnimationIteration":i,"bindAnimationEnd":i,"bindTransitionEnd":i};function singleQuote(e){return`'${e}'`}var l,u,d=Object.assign(Object.assign({"hover-class":singleQuote("none"),"hover-stop-propagation":a,"hover-start-time":"50","hover-stay-time":"400"},s),c),p={"type":i,"size":"23","color":i},g=Object.assign({"longitude":i,"latitude":i,"scale":"16","markers":o,"covers":i,"polyline":o,"circles":o,"controls":o,"include-points":o,"show-location":i,"layer-style":"1","bindMarkerTap":i,"bindControlTap":i,"bindCalloutTap":i,"bindUpdated":i},s),f={"View":d,"Icon":p,"Progress":{"percent":i,"stroke-width":"6","color":singleQuote("#09BB07"),"activeColor":singleQuote("#09BB07"),"backgroundColor":singleQuote("#EBEBEB"),"active":a,"active-mode":singleQuote("backwards"),"show-info":a},"RichText":{"nodes":o},"Text":{"selectable":a,"space":i,"decode":a},"Button":Object.assign({"size":singleQuote("default"),"type":i,"plain":a,"disabled":i,"loading":a,"form-type":i,"open-type":i,"hover-class":singleQuote("button-hover"),"hover-stop-propagation":a,"hover-start-time":"20","hover-stay-time":"70","name":i},s),"Checkbox":{"value":i,"disabled":i,"checked":a,"color":singleQuote("#09BB07"),"name":i},"CheckboxGroup":{"bindChange":i,"name":i},"Form":{"report-submit":a,"bindSubmit":i,"bindReset":i,"name":i},"Input":{"value":i,"type":singleQuote(i),"password":a,"placeholder":i,"placeholder-style":i,"placeholder-class":singleQuote("input-placeholder"),"disabled":i,"maxlength":"140","cursor-spacing":"0","focus":a,"confirm-type":singleQuote("done"),"confirm-hold":a,"cursor":"i.value.length","selection-start":"-1","selection-end":"-1","bindInput":i,"bindFocus":i,"bindBlur":i,"bindConfirm":i,"name":i},"Label":{"for":i,"name":i},"Picker":{"mode":singleQuote("selector"),"disabled":i,"range":i,"range-key":i,"value":i,"start":i,"end":i,"fields":singleQuote("day"),"custom-item":i,"name":i,"bindCancel":i,"bindChange":i,"bindColumnChange":i},"PickerView":{"value":i,"indicator-style":i,"indicator-class":i,"mask-style":i,"mask-class":i,"bindChange":i,"name":i},"PickerViewColumn":{"name":i},"Radio":{"value":i,"checked":a,"disabled":i,"color":singleQuote("#09BB07"),"name":i},"RadioGroup":{"bindChange":i,"name":i},"Slider":{"min":"0","max":"100","step":"1","disabled":i,"value":"0","activeColor":singleQuote("#1aad19"),"backgroundColor":singleQuote("#e9e9e9"),"block-size":"28","block-color":singleQuote("#ffffff"),"show-value":a,"bindChange":i,"bindChanging":i,"name":i},"Switch":{"checked":a,"disabled":i,"type":singleQuote("switch"),"color":singleQuote("#04BE02"),"bindChange":i,"name":i},"CoverImage":{"src":i,"bindLoad":"eh","bindError":"eh"},"Textarea":{"value":i,"placeholder":i,"placeholder-style":i,"placeholder-class":singleQuote("textarea-placeholder"),"disabled":i,"maxlength":"140","auto-focus":a,"focus":a,"auto-height":a,"fixed":a,"cursor-spacing":"0","cursor":"-1","selection-start":"-1","selection-end":"-1","bindFocus":i,"bindBlur":i,"bindLineChange":i,"bindInput":i,"bindConfirm":i,"name":i},"CoverView":Object.assign({"scroll-top":a},s),"MovableArea":{"scale-area":a},"MovableView":Object.assign(Object.assign({"direction":"none","inertia":a,"out-of-bounds":a,"x":i,"y":i,"damping":"20","friction":"2","disabled":i,"scale":a,"scale-min":"0.5","scale-max":"10","scale-value":"1","bindChange":i,"bindScale":i,"bindHTouchMove":i,"bindVTouchMove":i,"width":singleQuote("10px"),"height":singleQuote("10px")},s),c),"ScrollView":Object.assign(Object.assign({"scroll-x":a,"scroll-y":a,"upper-threshold":"50","lower-threshold":"50","scroll-top":i,"scroll-left":i,"scroll-into-view":i,"scroll-with-animation":a,"enable-back-to-top":a,"bindScrollToUpper":i,"bindScrollToLower":i,"bindScroll":i},s),c),"Swiper":Object.assign({"indicator-dots":a,"indicator-color":singleQuote("rgba(0, 0, 0, .3)"),"indicator-active-color":singleQuote("#000000"),"autoplay":a,"current":"0","interval":"5000","duration":"500","circular":a,"vertical":a,"previous-margin":singleQuote("0px"),"next-margin":singleQuote("0px"),"display-multiple-items":"1","bindChange":i,"bindTransition":i,"bindAnimationFinish":i},s),"SwiperItem":{"item-id":i},"Navigator":{"url":i,"open-type":singleQuote("navigate"),"delta":"1","hover-class":singleQuote("navigator-hover"),"hover-stop-propagation":a,"hover-start-time":"50","hover-stay-time":"600","bindSuccess":i,"bindFail":i,"bindComplete":i},"Audio":{"id":i,"src":i,"loop":a,"controls":a,"poster":i,"name":i,"author":i,"bindError":i,"bindPlay":i,"bindPause":i,"bindTimeUpdate":i,"bindEnded":i},"Camera":{"device-position":singleQuote("back"),"flash":singleQuote("auto"),"bindStop":i,"bindError":i},"Image":Object.assign({"src":i,"mode":singleQuote("scaleToFill"),"lazy-load":a,"bindError":i,"bindLoad":i},s),"LivePlayer":Object.assign({"src":i,"autoplay":a,"muted":a,"orientation":singleQuote("vertical"),"object-fit":singleQuote("contain"),"background-mute":a,"min-cache":"1","max-cache":"3","bindStateChange":i,"bindFullScreenChange":i,"bindNetStatus":i},c),"Video":Object.assign({"src":i,"duration":i,"controls":r,"danmu-list":i,"danmu-btn":i,"enable-danmu":i,"autoplay":a,"loop":a,"muted":a,"initial-time":"0","page-gesture":a,"direction":i,"show-progress":r,"show-fullscreen-btn":r,"show-play-btn":r,"show-center-play-btn":r,"enable-progress-gesture":r,"object-fit":singleQuote("contain"),"poster":i,"show-mute-btn":a,"bindPlay":i,"bindPause":i,"bindEnded":i,"bindTimeUpdate":i,"bindFullScreenChange":i,"bindWaiting":i,"bindError":i},c),"Canvas":Object.assign({"canvas-id":i,"disable-scroll":a,"bindError":i},s),"Ad":{"unit-id":i,"ad-intervals":i,"bindLoad":i,"bindError":i,"bindClose":i},"WebView":{"src":i,"bindMessage":i,"bindLoad":i,"bindError":i},"Block":{},"Map":g,"Slot":{"name":i},"SlotView":{"name":i},"NativeSlot":{"name":i}},h=new Set(["input","checkbox","picker","picker-view","radio","slider","switch","textarea"]),b=new Set(["input","textarea"]),m=new Set(["progress","icon","rich-text","input","textarea","slider","switch","audio","ad","official-account","open-data","navigation-bar"]),v=new Map([["view",-1],["catch-view",-1],["cover-view",-1],["static-view",-1],["pure-view",-1],["block",-1],["text",-1],["static-text",6],["slot",8],["slot-view",8],["label",6],["form",4],["scroll-view",4],["swiper",4],["swiper-item",4]]);(u=l||(l={})).MINI="mini",u.WEB="web",u.RN="rn",u.HARMONY="harmony",u.QUICK="quickapp";var y={"h5":{"type":l.WEB},"harmony":{"type":l.HARMONY},"mini":{"type":l.MINI},"rn":{"type":l.RN},"quickapp":{"type":l.QUICK}},k=class{"on"(e,t,n){let o,i,r,a;if(!t)return this;e=e.split(k.eventSplitter),this.callbacks||(this.callbacks={});const s=this.callbacks;for(;o=e.shift();)a=s[o],i=a?a.tail:{},i.next=r={},i.context=n,i.callback=t,s[o]={"tail":r,"next":a?a.next:i};return this}"once"(e,t,n){const wrapper=(...o)=>{t.apply(this,o),this.off(e,wrapper,n)};return this.on(e,wrapper,n),this}"off"(e,t,n){let o,i,r,a,s,c;if(!(i=this.callbacks))return this;if(!(e||t||n))return delete this.callbacks,this;for(e=e?e.split(k.eventSplitter):Object.keys(i);o=e.shift();)if(r=i[o],delete i[o],r&&(t||n))for(a=r.tail;(r=r.next)!==a;)s=r.callback,c=r.context,(t&&s!==t||n&&c!==n)&&this.on(o,s,c);return this}"trigger"(e){let t,n,o,i;if(!(o=this.callbacks))return this;e=e.split(k.eventSplitter);const r=[].slice.call(arguments,1);for(;t=e.shift();)if(n=o[t])for(i=n.tail;(n=n.next)!==i;)n.callback.apply(n.context||this,r);return this}"constructor"(e){var t;this.callbacks=null!==(t=null==e?void 0:e.callbacks)&&void 0!==t?t:{}}};function isString(e){return"string"==typeof e}function isUndefined(e){return void 0===e}function isNull(e){return null===e}function isObject(e){return null!==e&&"object"==typeof e}function isBoolean(e){return!0===e||!1===e}function isFunction(e){return"function"==typeof e}function isNumber(e){return"number"==typeof e}function isBooleanStringLiteral(e){return"true"===e||"false"===e}k.eventSplitter=",";var S,T,w=Array.isArray,isWebPlatform=()=>!0;(T=S||(S={}))[T.SINGLE=0]="SINGLE",T[T.MULTI=1]="MULTI",T[T.WATERFALL=2]="WATERFALL";var C={"app":["onLaunch","onShow","onHide"],"page":["onLoad","onUnload","onReady","onShow","onHide",["onPullDownRefresh","onReachBottom","onPageScroll","onResize","onTabItemTap","onTitleClick","onOptionMenuClick","onPopMenuClick","onPullIntercept","onAddToFavorites"],["onShareAppMessage","onShareTimeline"]],"component":["attached","detached"]};function TaroHook(e,t){return{"type":e,"initial":t||null}}var I=class extends k{"tapOneOrMany"(e,t){(isFunction(t)?[t]:t).forEach((t=>this.on(e,t)))}"tap"(e,t){const n=this.hooks,{"type":o,"initial":i}=n[e];o===S.SINGLE?(this.off(e),this.on(e,isFunction(t)?t:t[t.length-1])):(i&&this.off(e,i),this.tapOneOrMany(e,t))}"call"(e,...t){var n;const o=this.hooks[e];if(!o)return;const{"type":i}=o,r=this.callbacks;if(!r)return;const a=r[e];if(a){const e=a.tail;let o,r=a.next,s=t;for(;r!==e;){if(o=null===(n=r.callback)||void 0===n?void 0:n.apply(r.context||this,s),i===S.WATERFALL){s=[o]}r=r.next}return o}}"isExist"(e){var t;return Boolean(null===(t=this.callbacks)||void 0===t?void 0:t[e])}"constructor"(e,t){super(t),this.hooks=e;for(const t in e){const{"initial":n}=e[t];isFunction(n)&&this.on(t,n)}}},E=new I({"getMiniLifecycle":TaroHook(S.SINGLE,(e=>e)),"getMiniLifecycleImpl":TaroHook(S.SINGLE,(function(){return this.call("getMiniLifecycle",C)})),"getLifecycle":TaroHook(S.SINGLE,((e,t)=>e[t])),"getPathIndex":TaroHook(S.SINGLE,(e=>`[${e}]`)),"getEventCenter":TaroHook(S.SINGLE,(e=>new e)),"isBubbleEvents":TaroHook(S.SINGLE,(e=>new Set(["touchstart","touchmove","touchcancel","touchend","touchforcechange","tap","longpress","longtap","transitionend","animationstart","animationiteration","animationend"]).has(e))),"getSpecialNodes":TaroHook(S.SINGLE,(()=>["view","text","image"])),"onRemoveAttribute":TaroHook(S.SINGLE),"batchedEventUpdates":TaroHook(S.SINGLE),"mergePageInstance":TaroHook(S.SINGLE),"modifyPageObject":TaroHook(S.SINGLE),"createPullDownComponent":TaroHook(S.SINGLE),"getDOMNode":TaroHook(S.SINGLE),"modifyHydrateData":TaroHook(S.SINGLE),"modifySetAttrPayload":TaroHook(S.SINGLE),"modifyRmAttrPayload":TaroHook(S.SINGLE),"onAddEvent":TaroHook(S.SINGLE),"modifyMpEvent":TaroHook(S.MULTI),"modifyMpEventImpl":TaroHook(S.SINGLE,(function(e){try{this.call("modifyMpEvent",e)}catch(e){console.warn("[Taro modifyMpEvent hook Error]: "+(null==e?void 0:e.message))}})),"modifyTaroEvent":TaroHook(S.MULTI),"modifyDispatchEvent":TaroHook(S.MULTI),"initNativeApi":TaroHook(S.MULTI),"patchElement":TaroHook(S.MULTI)}),L={},B=[],noop=(...e)=>{},box=e=>({"v":e}),unbox=e=>e.v;function toDashed(e){return e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}function toCamelCase(e){let t="",n=!1;for(let o=0;o<e.length;o++)"-"!==e[o]?(t+=n?e[o].toUpperCase():e[o],n=!1):n=!0;return t}var toKebabCase=function(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()};function capitalize(e){return e.charAt(0).toUpperCase()+e.slice(1)}var P=Object.prototype.hasOwnProperty,hasOwn=(e,t)=>P.call(e,t);function ensure(e,t){if(!e)throw new Error(t)}function warn(e,t){0}function queryToJson(e){const t=decodeURIComponent,n=e.split("&"),o={};let i,r;for(let e,a=0,s=n.length;a<s;++a)if(e=n[a],e.length){const n=e.indexOf("=");n<0?(i=t(e),r=""):(i=t(e.slice(0,n)),r=t(e.slice(n+1))),"string"==typeof o[i]&&(o[i]=[o[i]]),Array.isArray(o[i])?o[i].push(r):o[i]=r}return o}var x=1,O=(new Date).getTime().toString();function getUniqueKey(){return O+x++}var A={};function cacheDataSet(e,t){A[e]=t}function cacheDataGet(e,t){const n=A[e];return t&&delete A[e],n}function cacheDataHas(e){return e in A}function mergeInternalComponents(e){return Object.keys(e).forEach((t=>{t in f?Object.assign(f[t],e[t]):f[t]=e[t]})),f}function getComponentsAlias(e){const t={},n=e.View,o={"#text":{},"StaticView":n,"StaticImage":e.Image,"StaticText":e.Text,"PureView":n,"CatchView":n};return e=Object.assign(Object.assign({},e),o),Object.keys(e).sort(((e,t)=>{const n=/^(Static|Pure|Catch)*(View|Image|Text)$/,o=n.test(e),i=n.test(t);return o&&i?e>t?1:-1:o?-1:i||e>=t?1:-1})).forEach(((n,o)=>{const i={"_num":String(o)};Object.keys(e[n]).filter((e=>!/^bind/.test(e)&&!["focus","blur"].includes(e))).sort().forEach(((e,t)=>{i[toCamelCase(e)]="p"+t})),t[toDashed(n)]=i})),t}function getPlatformType(e="weapp",t=l.MINI){Object.keys(y).includes(e)&&(t=e);return(y[t]||{}).type||t}function mergeReconciler(e,t){const n=t||E;Object.keys(e).forEach((t=>{n.tap(t,e[t])}))}function nonsupport(e){return function(){console.warn(`小程序暂不支持 ${e}`)}}function setUniqueKeyToRoute(e,t){if(["navigateTo","redirectTo","reLaunch","switchTab"].indexOf(e)>-1){const e=(t.url=t.url||"").indexOf("?")>-1,n=getUniqueKey();t.url+=(e?"&":"?")+`__key_=${n}`}}function indent(e,t){return e.split("\n").map(((e,n)=>(0===n?"":Array(t).fill(" ").join(""))+e)).join("\n")}var M=new Set(["addPhoneContact","authorize","canvasGetImageData","canvasPutImageData","canvasToTempFilePath","checkSession","chooseAddress","chooseImage","chooseInvoiceTitle","chooseLocation","chooseVideo","clearStorage","closeBLEConnection","closeBluetoothAdapter","closeSocket","compressImage","connectSocket","createBLEConnection","downloadFile","exitMiniProgram","getAvailableAudioSources","getBLEDeviceCharacteristics","getBLEDeviceServices","getBatteryInfo","getBeacons","getBluetoothAdapterState","getBluetoothDevices","getClipboardData","getConnectedBluetoothDevices","getConnectedWifi","getExtConfig","getFileInfo","getImageInfo","getLocation","getNetworkType","getSavedFileInfo","getSavedFileList","getScreenBrightness","getSetting","getStorage","getStorageInfo","getSystemInfo","getUserInfo","getWifiList","hideHomeButton","hideShareMenu","hideTabBar","hideTabBarRedDot","loadFontFace","login","makePhoneCall","navigateBack","navigateBackMiniProgram","navigateTo","navigateToBookshelf","navigateToMiniProgram","notifyBLECharacteristicValueChange","hideKeyboard","hideLoading","hideNavigationBarLoading","hideToast","openBluetoothAdapter","openDocument","openLocation","openSetting","pageScrollTo","previewImage","queryBookshelf","reLaunch","readBLECharacteristicValue","redirectTo","removeSavedFile","removeStorage","removeTabBarBadge","requestSubscribeMessage","saveFile","saveImageToPhotosAlbum","saveVideoToPhotosAlbum","scanCode","sendSocketMessage","setBackgroundColor","setBackgroundTextStyle","setClipboardData","setEnableDebug","setInnerAudioOption","setKeepScreenOn","setNavigationBarColor","setNavigationBarTitle","setScreenBrightness","setStorage","setTabBarBadge","setTabBarItem","setTabBarStyle","showActionSheet","showFavoriteGuide","showLoading","showModal","showShareMenu","showTabBar","showTabBarRedDot","showToast","startBeaconDiscovery","startBluetoothDevicesDiscovery","startDeviceMotionListening","startPullDownRefresh","stopBeaconDiscovery","stopBluetoothDevicesDiscovery","stopCompass","startCompass","startAccelerometer","stopAccelerometer","showNavigationBarLoading","stopDeviceMotionListening","stopPullDownRefresh","switchTab","uploadFile","vibrateLong","vibrateShort","writeBLECharacteristicValue"]);function processApis(e,t,n={}){const o=n.needPromiseApis||[],i=new Set([...o,...M]),r=["getEnv","interceptors","Current","getCurrentInstance","options","nextTick","eventCenter","Events","preload","webpackJsonp"],a=new Set(n.isOnlyPromisify?o:Object.keys(t).filter((e=>-1===r.indexOf(e))));n.modifyApis&&n.modifyApis(a),a.forEach((o=>{if(i.has(o)){const i=o;e[i]=(e={},...o)=>{let r=i;if("string"==typeof e)return o.length?t[r](e,...o):t[r](e);if(n.transformMeta){const o=n.transformMeta(r,e);if(r=o.key,e=o.options,!t.hasOwnProperty(r))return nonsupport(r)()}let a=null;const s=Object.assign({},e);setUniqueKeyToRoute(r,e);const c=new Promise(((i,c)=>{s.success=t=>{var o,s;null===(o=n.modifyAsyncResult)||void 0===o||o.call(n,r,t),null===(s=e.success)||void 0===s||s.call(e,t),i("connectSocket"===r?Promise.resolve().then((()=>a?Object.assign(a,t):t)):t)},s.fail=t=>{var n;null===(n=e.fail)||void 0===n||n.call(e,t),c(t)},s.complete=t=>{var n;null===(n=e.complete)||void 0===n||n.call(e,t)},a=o.length?t[r](s,...o):t[r](s)}));return["uploadFile","downloadFile"].includes(r)&&(equipTaskMethodsIntoPromise(a,c),c.progress=e=>(null==a||a.onProgressUpdate(e),c),c.abort=e=>(null==e||e(),null==a||a.abort(),c)),c}}else{let i=o;if(n.transformMeta&&(i=n.transformMeta(o,{}).key),!t.hasOwnProperty(i))return void(e[o]=nonsupport(o));isFunction(t[o])?e[o]=(...e)=>n.handleSyncApis?n.handleSyncApis(o,t,e):t[i].apply(t,e):e[o]=t[i]}})),!n.isOnlyPromisify&&function equipCommonApis(e,t,n={}){e.canIUseWebp=function getCanIUseWebp(e){return function(){var t;const n=null===(t=e.getSystemInfoSync)||void 0===t?void 0:t.call(e);if(!n)return!1;const{"platform":o}=n,i=o.toLowerCase();return"android"===i||"devtools"===i}}(e),e.getCurrentPages=getCurrentPages||nonsupport("getCurrentPages"),e.getApp=getApp||nonsupport("getApp"),e.env=t.env||{};try{e.requirePlugin=requirePlugin||nonsupport("requirePlugin")}catch(t){e.requirePlugin=nonsupport("requirePlugin")}const o=n.request||function getNormalRequest(e){return function request(t){const n=(t=t?isString(t)?{"url":t}:t:{}).success,o=t.fail,i=t.complete;let r;const a=new Promise(((a,s)=>{t.success=e=>{n&&n(e),a(e)},t.fail=e=>{o&&o(e),s(e)},t.complete=e=>{i&&i(e)},r=e.request(t)}));return equipTaskMethodsIntoPromise(r,a),a.abort=e=>(e&&e(),r&&r.abort(),a),a}}(t);function taroInterceptor(e){return o(e.requestParams)}const i=new e.Link(taroInterceptor);e.request=i.request.bind(i),e.addInterceptor=i.addInterceptor.bind(i),e.cleanInterceptors=i.cleanInterceptors.bind(i),e.miniGlobal=e.options.miniGlobal=t}(e,t,n)}function equipTaskMethodsIntoPromise(e,t){if(!e||!t)return;e&&["abort","onHeadersReceived","offHeadersReceived","onProgressUpdate","offProgressUpdate","onChunkReceived","offChunkReceived"].forEach((n=>{n in e&&(t[n]=e[n].bind(e))}))}},"712":function(e,t,n){n.d(t,{"E":function(){return __commonJS},"v":function(){return __toESM}});var o=Object.create,i=Object.defineProperty,r=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,s=Object.getPrototypeOf,c=Object.prototype.hasOwnProperty,__commonJS=(e,t)=>function __require(){return t||(0,e[a(e)[0]])((t={"exports":{}}).exports,t),t.exports},__toESM=(e,t,n)=>(n=null!=e?o(s(e)):{},((e,t,n,o)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let s of a(t))c.call(e,s)||s===n||i(e,s,{"get":()=>t[s],"enumerable":!(o=r(t,s))||o.enumerable});return e})(!t&&e&&e.__esModule?n:i(n,"default",{"value":e,"enumerable":!0}),e))}}]);