(self["webpackChunktaro_hooks"]=self["webpackChunktaro_hooks"]||[]).push([[4184],{4184:function(e,t,i){"use strict";i.r(t),i.d(t,{taro_switch_core:function(){return c}});var o=i(41674),n="taro-switch-core{display:inline-block;width:52px;height:32px}taro-switch-core .weui-switch{display:block;width:100%;height:100%}",c=function(){function e(e){var t=this;(0,o.r)(this,e),this.onChange=(0,o.c)(this,"change",7),this.type="switch",this.checked=!1,this.color="#04BE02",this.disabled=!1,this.isWillLoadCalled=!1,this.switchChange=function(e){e.stopPropagation();var i=e.target.checked;t.isChecked=i,t.onChange.emit({value:i})}}return e.prototype["function"]=function(e,t){this.isWillLoadCalled&&e!==t&&(this.isChecked=e)},e.prototype.componentWillLoad=function(){this.isWillLoadCalled=!0,this.isChecked=this.checked},e.prototype.componentDidLoad=function(){var e=this;Object.defineProperty(this.el,"value",{get:function(){return e.isChecked},configurable:!0})},e.prototype.render=function(){var e=this,t=e.type,i=e.color,n=e.isChecked,c=e.name,h=e.disabled,r=n?{borderColor:i||"04BE02",backgroundColor:i||"04BE02"}:{};return(0,o.h)("input",{type:"checkbox",class:"weui-"+t,style:r,checked:n,name:c,disabled:h,onChange:this.switchChange})},Object.defineProperty(e.prototype,"el",{get:function(){return(0,o.g)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"watchers",{get:function(){return{checked:["function"]}},enumerable:!1,configurable:!0}),e}();c.style=n}}]);