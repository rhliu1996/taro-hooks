"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[887],{"887":function(e,t,n){n.d(t,{"t0":function(){return p},"ou":function(){return u},"VI":function(){return l},"sy":function(){return d},"Zw":function(){return f},"jy":function(){return h},"d0":function(){return m},"Ap":function(){return g},"Jp":function(){return v},"nZ":function(){return R},"L$":function(){return C},"aB":function(){return P},"jk":function(){return A},"bO":function(){return b},"YG":function(){return y},"QV":function(){return D},"Bk":function(){return x},"J7":function(){return I},"uo":function(){return w},"C1":function(){return S},"tv":function(){return useRouter},"h8":function(){return T},"Lm":function(){return useScope},"Mh":function(){return setReconciler},"Kh":function(){return connectReactPage},"Ox":function(){return createReactApp},"_m":function(){return createNativeComponentConfig}});var o=n(910),r={"PageContext":o.kT,"R":o.kT},a="taro-app";function isClassComponent(e,t){var n;const r=t.prototype;return!(null===(n=t.displayName)||void 0===n?void 0:n.includes("Connect"))&&((0,o.mf)(t.render)||!!(null==r?void 0:r.isReactComponent)||r instanceof e.Component)}function setDefaultDescriptor(e){return e.writable=!0,e.enumerable=!0,e}function setRouterParams(e){o.GY.router=Object.assign({"params":null==e?void 0:e.query},e)}var s,c,i,createTaroHook=e=>t=>{const{"R":n,"PageContext":s}=r,c=n.useContext(s)||a,i=n.useRef(),p=n.useRef(t);p.current!==t&&(p.current=t),n.useLayoutEffect((()=>{let t=i.current=(0,o.R0)(c),n=!1;t||(n=!0,i.current=Object.create(null),t=i.current);const callback=(...e)=>p.current(...e);return(0,o.mf)(t[e])?t[e]=[t[e],callback]:t[e]=[...t[e]||[],callback],n&&(0,o.px)(t,c),()=>{const t=i.current;if(!t)return;const n=t[e];n===callback?t[e]=void 0:(0,o.kJ)(n)&&(t[e]=n.filter((e=>e!==callback))),i.current=void 0}}),[])},p=createTaroHook("componentDidHide"),u=createTaroHook("componentDidShow"),l=createTaroHook("onError"),d=createTaroHook("onUnhandledRejection"),f=createTaroHook("onLaunch"),h=createTaroHook("onPageNotFound"),m=createTaroHook("onLoad"),g=createTaroHook("onPageScroll"),v=createTaroHook("onPullDownRefresh"),R=createTaroHook("onPullIntercept"),C=createTaroHook("onReachBottom"),P=createTaroHook("onResize"),A=createTaroHook("onUnload"),b=createTaroHook("onAddToFavorites"),y=createTaroHook("onOptionMenuClick"),D=createTaroHook("onSaveExitState"),x=createTaroHook("onShareAppMessage"),I=createTaroHook("onShareTimeline"),w=createTaroHook("onTitleClick"),S=createTaroHook("onReady"),useRouter=(e=!1)=>{const t=r.R;return e?o.GY.router:t.useMemo((()=>o.GY.router),[])},T=createTaroHook("onTabItemTap"),useScope=()=>{},j=Object.freeze({"__proto__":null,"useAddToFavorites":b,"useDidHide":p,"useDidShow":u,"useError":l,"useLaunch":f,"useLoad":m,"useOptionMenuClick":y,"usePageNotFound":h,"usePageScroll":g,"usePullDownRefresh":v,"usePullIntercept":R,"useReachBottom":C,"useReady":S,"useResize":P,"useRouter":useRouter,"useSaveExitState":D,"useScope":useScope,"useShareAppMessage":x,"useShareTimeline":I,"useTabItemTap":T,"useTitleClick":w,"useUnhandledRejection":d,"useUnload":A}),k=(0,o.BG)(),E=(0,o.gl)();function setReconciler(e){o.PT.tap("getLifecycle",(function(e,t){return e[t=t.replace(/^on(Show|Hide)$/,"componentDid$1")]})),o.PT.tap("modifyMpEvent",(function(e){Object.defineProperty(e,"type",{"value":e.type.replace(/-/g,"")})})),o.PT.tap("batchedEventUpdates",(function(t){e.unstable_batchedUpdates(t)})),o.PT.tap("mergePageInstance",(function(e,t){e&&t&&("constructor"in e||Object.keys(e).forEach((n=>{const r=e[n],a=function ensureIsArray(e){return(0,o.kJ)(e)?e:e?[e]:[]}(t[n]);t[n]=a.concat(r)})))})),E&&(o.PT.tap("createPullDownComponent",((e,t,n,o)=>{const r=isClassComponent(n,e);return n.forwardRef(((t,n)=>{const a=Object.assign({},t),c=r?{"ref":n}:{"forwardedRef":n,"reactReduxForwardedRef":n};return s(o||"taro-pull-to-refresh",null,s(e,Object.assign(Object.assign({},a),c)))}))})),o.PT.tap("getDOMNode",(t=>e.findDOMNode(t))))}function connectReactPage(e,t){return n=>{const inject=e=>e&&(0,o.px)(e,t),a=isClassComponent(e,n)?{"ref":inject}:{"forwardedRef":inject,"reactReduxForwardedRef":inject};return r.PageContext===o.kT&&(r.PageContext=e.createContext("")),class PageWrapper extends e.Component{static"getDerivedStateFromError"(e){var t,n;return null===(n=null===(t=o.GY.app)||void 0===t?void 0:t.onError)||void 0===n||n.call(t,e.message+e.stack),{"hasError":!0}}"componentDidCatch"(e,t){0}"render"(){const e=this.state.hasError?[]:s(r.PageContext.Provider,{"value":t},s(n,Object.assign(Object.assign({},this.props),a)));return E?s("div",{"id":t,"className":"taro_page"},e):s("root",{"id":t},e)}"constructor"(){super(...arguments),this.state={"hasError":!1}}}}}function createReactApp(e,t,n,p){r.R=t,s=t.createElement,c=n,i=t.Fragment;const u=t.createRef(),l=isClassComponent(t,e);let d,f;const h=new Promise((e=>f=e));function getAppInstance(){return u.current}function waitAppWrapper(e){d?e():h.then((()=>e()))}function renderReactRoot(){var e,n;let r="app";E&&(r=(null==p?void 0:p.appId)||r);const a=o.c8.getElementById(r);if((t.version||"").startsWith("18")){const t=c.createRoot(a);null===(e=t.render)||void 0===e||e.call(t,s(AppWrapper))}else null===(n=c.render)||void 0===n||n.call(c,s(AppWrapper),a)}setReconciler(c);class AppWrapper extends t.Component{"mount"(e,n,o){const r=connectReactPage(t,n)(e),a=n+k();this.pages.push((()=>s(r,{"key":a,"tid":n}))),this.forceUpdate(o)}"unmount"(e,t){const n=this.elements,o=n.findIndex((t=>t.props.tid===e));n.splice(o,1),this.forceUpdate(t)}"render"(){const{"pages":t,"elements":n}=this;for(;t.length>0;){const e=t.pop();n.push(e())}let o=null;return l&&(o={"ref":u}),s(e,o,E?s(null!=i?i:"div",null,n.slice()):n.slice())}"constructor"(e){super(e),this.pages=[],this.elements=[],d=this,f(this)}}E||renderReactRoot();const[m,g,v]=o.PT.call("getMiniLifecycleImpl").app,R=Object.create({"render"(e){d.forceUpdate(e)},"mount"(e,t,n){d?d.mount(e,t,n):h.then((o=>o.mount(e,t,n)))},"unmount"(e,t){d.unmount(e,t)}},{"config":setDefaultDescriptor({"configurable":!0,"value":p}),[m]:setDefaultDescriptor({"value"(e){setRouterParams(e),E&&renderReactRoot();waitAppWrapper((()=>{var t;const n=getAppInstance();if(this.$app=n,n){if(n.taroGlobalData){const e=n.taroGlobalData,t=Object.keys(e),o=Object.getOwnPropertyDescriptors(e);t.forEach((t=>{Object.defineProperty(this,t,{"configurable":!0,"enumerable":!0,"get"(){return e[t]},"set"(n){e[t]=n}})})),Object.defineProperties(this,o)}null===(t=n.onLaunch)||void 0===t||t.call(n,e)}triggerAppHook("onLaunch",e)}))}}),[g]:setDefaultDescriptor({"value"(e){setRouterParams(e);waitAppWrapper((()=>{var t;const n=getAppInstance();null===(t=null==n?void 0:n.componentDidShow)||void 0===t||t.call(n,e),triggerAppHook("onShow",e)}))}}),[v]:setDefaultDescriptor({"value"(){waitAppWrapper((()=>{var e;const t=getAppInstance();null===(e=null==t?void 0:t.componentDidHide)||void 0===e||e.call(t),triggerAppHook("onHide")}))}}),"onError":setDefaultDescriptor({"value"(e){waitAppWrapper((()=>{var t;const n=getAppInstance();null===(t=null==n?void 0:n.onError)||void 0===t||t.call(n,e),triggerAppHook("onError",e)}))}}),"onUnhandledRejection":setDefaultDescriptor({"value"(e){waitAppWrapper((()=>{var t;const n=getAppInstance();null===(t=null==n?void 0:n.onUnhandledRejection)||void 0===t||t.call(n,e),triggerAppHook("onUnhandledRejection",e)}))}}),"onPageNotFound":setDefaultDescriptor({"value"(e){waitAppWrapper((()=>{var t;const n=getAppInstance();null===(t=null==n?void 0:n.onPageNotFound)||void 0===t||t.call(n,e),triggerAppHook("onPageNotFound",e)}))}})});function triggerAppHook(e,...t){const n=(0,o.R0)(a);if(n){const r=getAppInstance(),a=o.PT.call("getLifecycle",n,e);Array.isArray(a)&&a.forEach((e=>e.apply(r,t)))}}return o.GY.app=R,R}var O,_,G=(0,o.BG)();function createNativeComponentConfig(e,t,n,a){var s,c;r.R=t,O=t.createElement,setReconciler(_=n);const i={"options":a,"properties":{"props":{"type":null,"value":null,"observer"(e,t){var n;t&&(null===(n=this.component)||void 0===n||n.forceUpdate())}}},"created"(){o.GY.app||function initNativeComponentEntry(e,t){class NativeComponentWrapper extends e.Component{"componentDidMount"(){this.ctx.component=this;const e=this.root.current;e.ctx=this.ctx,e.performUpdate(!0)}"render"(){return O("root",{"ref":this.root},this.props.renderComponent(this.ctx))}"constructor"(){super(...arguments),this.root=e.createRef(),this.ctx=this.props.getCtx()}}class Entry extends e.Component{"componentDidMount"(){o.GY.app=this}"mount"(t,n,a){const inject=e=>e&&(0,o.px)(e,n),s=isClassComponent(e,t)?{"ref":inject}:{"forwardedRef":inject,"reactReduxForwardedRef":inject};r.PageContext===o.kT&&(r.PageContext=e.createContext(""));const c={"compId":n,"element":O(NativeComponentWrapper,{"key":n,"getCtx":a,"renderComponent"(e){return O(r.PageContext.Provider,{"value":n},O(t,Object.assign(Object.assign(Object.assign({},(e.data||(e.data={})).props),s),{"$scope":e})))}})};this.setState({"components":[...this.state.components,c]})}"unmount"(e){const t=this.state.components,n=t.findIndex((t=>t.compId===e)),r=[...t.slice(0,n),...t.slice(n+1)];this.setState({"components":r},(()=>{(0,o.Rs)(e)}))}"render"(){return this.state.components.map((({"element":e})=>e))}"constructor"(){super(...arguments),this.state={"components":[]}}}setReconciler(t);const n=o.c8.getElementById("app");t.render(O(Entry,{}),n)}(t,_)},"attached"(){const t=this.compId=G();!function setCurrent(e){const t=getCurrentPages(),n=t[t.length-1];if(o.GY.page===n)return;o.GY.page=n;const r=n.route||n.__route__,a={"params":n.options||{},"path":(0,o.nY)(r),"$taroPath":e,"onReady":"","onHide":"","onShow":""};o.GY.router=a,n.options||Object.defineProperty(n,"options",{"enumerable":!0,"configurable":!0,"get"(){return this._optionsValue},"set"(e){a.params=e,this._optionsValue=e}})}(t),this.config=a,o.GY.app.mount(e,t,(()=>this))},"ready"(){(0,o.p_)(this.compId,"onReady")},"detached"(){!function resetCurrent(){o.GY.page=null,o.GY.router=null}(),o.GY.app.unmount(this.compId)},"pageLifetimes":{"show"(e){(0,o.p_)(this.compId,"onShow",e)},"hide"(){(0,o.p_)(this.compId,"onHide")}},"methods":{"eh":o.$j,"onLoad"(e){(0,o.p_)(this.compId,"onLoad",e)},"onUnload"(){(0,o.p_)(this.compId,"onUnload")}}};return(e.onShareAppMessage||(null===(s=e.prototype)||void 0===s?void 0:s.onShareAppMessage)||e.enableShareAppMessage)&&(i.methods.onShareAppMessage=function(e){const t=null==e?void 0:e.target;if(t){const e=t.id,n=o.c8.getElementById(e);n&&(t.dataset=n.dataset)}return(0,o.p_)(this.compId,"onShareAppMessage",e)}),(e.onShareTimeline||(null===(c=e.prototype)||void 0===c?void 0:c.onShareTimeline)||e.enableShareTimeline)&&(i.methods.onShareTimeline=function(){return(0,o.p_)(this.compId,"onShareTimeline")}),i}o.PT.tap("initNativeApi",(function(e){for(const t in j)e[t]=j[t]}))}}]);