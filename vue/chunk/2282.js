(self.webpackJsonp=self.webpackJsonp||[]).push([[2282],{"2962":function(e,t,n){"use strict";n.r(t);var o=n(122),r=n.n(o),a=n(820),u=n.n(a)()(r());u.push([e.id,"\n.content-box {\n  background: white;\n  padding: 0.5rem;\n  margin-bottom: 0.25rem;\n  color: #222;\n  border: 0.05rem solid #222;\n}\n.content-box.dark {\n  color: white;\n  background: rgb(23, 32, 42);\n}\n.content-title {\n  font-size: 1rem;\n}\n.content-button {\n  margin-top: 0.75rem;\n}\n",""]),t.default=u},"5779":function(e,t,n){var o=n(5013),r=n(2962);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[e.id,r,""]]);var a={"insert":"head","singleton":!1};o(r,a);e.exports=r.locals||{}},"2282":function(e,t,n){"use strict";n.r(t),n.d(t,{"default":function(){return v}});var o=n(2053);var r=n(2917),a=n(969),u=n(4012);var l=(0,u.kr)({"theme":"light"}),i=(0,u.kr)({"name":null}),c={"setup":function setup(){return{"theme":(0,u.qp)(l),"user":(0,u.qp)(i)}}},d=(n(5779),n(9852));var s=(0,d.Z)(c,[["render",function ThemeContentvue_type_template_id_08f03889_ts_true_render(e,t,n,r,a,u){var l,i=(0,o.resolveComponent)("taro-view"),c=(0,o.resolveComponent)("nut-button");return(0,o.openBlock)(),(0,o.createBlock)(i,{"class":(0,o.normalizeClass)(["content-box",null===(l=r.theme)||void 0===l?void 0:l.theme])},{"default":(0,o.withCtx)((function(){var e,n;return[(0,o.createVNode)(i,{"class":"content-title"},{"default":(0,o.withCtx)((function(){return[(0,o.createTextVNode)("Welcome")]})),"_":1}),null!==(e=r.user)&&void 0!==e&&null!==(n=e.user)&&void 0!==n&&n.name?((0,o.openBlock)(),(0,o.createBlock)(i,{"key":0},{"default":(0,o.withCtx)((function(){var e,t;return[(0,o.createTextVNode)("You logged in as "+(0,o.toDisplayString)(null===(e=r.user)||void 0===e||null===(t=e.user)||void 0===t?void 0:t.name),1)]})),"_":1})):((0,o.openBlock)(),(0,o.createBlock)(c,{"key":1,"shape":"square","type":"primary","onClick":t[0]||(t[0]=function(e){var t,n;return null===(t=r.user)||void 0===t||null===(n=t.setUser)||void 0===n?void 0:n.call(t,{"name":"Advika"})})},{"default":(0,o.withCtx)((function(){return[(0,o.createTextVNode)(" Log in Advika ")]})),"_":1}))]})),"_":1},8,["class"])}]]),m={"components":{"ThemeProvider":l.Provider,"UserProvider":i.Provider,"ThemeContent":s},"setup":function setup(){var e=(0,u.eJ)({"theme":"light"}),t=(0,r.Z)(e,2),n=t[0],o=t[1],i=(0,u.qp)(l),c=(0,u.Ye)((function(){return"dark"===(0,a.JR)(n).theme}),[n]),d=(0,u.eJ)({"name":null}),s=(0,r.Z)(d,2),m=s[0],v=s[1];return{"theme":n,"currentTheme":i,"setTheme":o,"handleChange":function handleChange(e){o({"theme":e?"dark":"light"})},"userProviderValue":{"user":m,"setUser":v},"memoTheme":c}}};var v=(0,d.Z)(m,[["render",function render(e,t,n,r,a,u){var l=(0,o.resolveComponent)("ThemeContent"),i=(0,o.resolveComponent)("demo-content"),c=(0,o.resolveComponent)("nut-checkbox"),d=(0,o.resolveComponent)("taro-block"),s=(0,o.resolveComponent)("UserProvider"),m=(0,o.resolveComponent)("ThemeProvider");return(0,o.openBlock)(),(0,o.createBlock)(m,{"value":r.theme},{"default":(0,o.withCtx)((function(){return[(0,o.createVNode)(s,{"value":r.userProviderValue},{"default":(0,o.withCtx)((function(){return[(0,o.createVNode)(d,null,{"default":(0,o.withCtx)((function(){return[(0,o.createVNode)(i,{"title":"attention: this example is a multiple contexts"},{"default":(0,o.withCtx)((function(){return[(0,o.createVNode)(l)]})),"_":1}),(0,o.createVNode)(i,{"title":"1. Updating a value via context"},{"default":(0,o.withCtx)((function(){return[(0,o.createVNode)(c,{"modelValue":r.memoTheme,"onUpdate:modelValue":t[0]||(t[0]=function(e){return r.memoTheme=e}),"onChange":r.handleChange},{"default":(0,o.withCtx)((function(){return[(0,o.createTextVNode)("Use dark mode")]})),"_":1},8,["modelValue","onChange"])]})),"_":1}),(0,o.createVNode)(i,{"title":"2. Updating an object via context"})]})),"_":1})]})),"_":1},8,["value"])]})),"_":1},8,["value"])}]])}}]);