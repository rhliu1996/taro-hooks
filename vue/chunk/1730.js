"use strict";(self.webpackJsonp=self.webpackJsonp||[]).push([[1730],{"1730":function(e,r,t){t.r(r),t.d(r,{"default":function(){return o}});var n=t(2535);var u=function useArrayBuffer(){return{"toBase64":n.arrayBufferToBase64,"toArrayBuffer":n.base64ToArrayBuffer}},a=t(2053);var o=(0,a.defineComponent)({"__name":"index","setup":function setup(e){var r=u(),t=r.toBase64,n=r.toArrayBuffer,o=new Uint8Array([11,22,33]),f=t(o),l=n(f);function displayArrayBuffer(e){return"Uint8Array(".concat(e.byteLength,")[").concat(e.toString(),"]")}return function(e,r){var t=(0,a.resolveComponent)("nut-cell"),n=(0,a.resolveComponent)("demo-content");return(0,a.openBlock)(),(0,a.createBlock)(n,null,{"default":(0,a.withCtx)((function(){return[(0,a.createVNode)(t,{"title":"原始ArrayBuffer","sub-title":displayArrayBuffer((0,a.unref)(o))},null,8,["sub-title"]),(0,a.createVNode)(t,{"title":"toBase64","sub-title":(0,a.unref)(f)},null,8,["sub-title"]),(0,a.createVNode)(t,{"title":"toArrayBuffer","sub-title":displayArrayBuffer((0,a.unref)(l))},null,8,["sub-title"])]})),"_":1})}}})}}]);