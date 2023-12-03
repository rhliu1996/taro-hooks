"use strict";(self.webpackChunk_taro_hooks_website=self.webpackChunk_taro_hooks_website||[]).push([[307],{948:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>k,frontMatter:()=>c,metadata:()=>p,toc:()=>h});n(79);var o=n(8570),a=n(6417),r=n(9497);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const c={title:"useLogin",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u5c0f\u7a0b\u5e8f",path:"/wechat"}},u="useLogin",p={unversionedId:"useLogin/index",id:"useLogin/index",title:"useLogin",description:"\u83b7\u53d6\u767b\u5f55\u51ed\u8bc1, \u68c0\u67e5\u767b\u5f55\u72b6\u6001",source:"@site/../packages/hooks/src/useLogin/index.md",sourceDirName:"useLogin",slug:"/useLogin/",permalink:"/taro-hooks/hooks/useLogin/",draft:!1,editUrl:"https://github.com/innocces/taro-hooks/edit/next/src/../packages/hooks/src/useLogin/index.md",tags:[],version:"current",lastUpdatedBy:"innocces",lastUpdatedAt:1701593751,formattedLastUpdatedAt:"2023\u5e7412\u67083\u65e5",frontMatter:{title:"useLogin",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u5c0f\u7a0b\u5e8f",path:"/wechat"}},sidebar:"hooks",previous:{title:"useEnterOptions",permalink:"/taro-hooks/hooks/useEnterOptions/"},next:{title:"useMenuButtonBoundingClientRect",permalink:"/taro-hooks/hooks/useMenuButtonBoundingClientRect/"}},d={},h=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",level:2},{value:"API",id:"api",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u4ee3\u7801\u6f14\u793a",id:"\u4ee3\u7801\u6f14\u793a",level:2},{value:"Hook \u652f\u6301\u5ea6",id:"hook-\u652f\u6301\u5ea6",level:2}],m={toc:h},g="wrapper";function k(e){var{components:t}=e,n=l(e,["components"]);return(0,o.kt)(g,i(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){s(e,t,n[t])}))}return e}({},m,n),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"uselogin"},"useLogin"),(0,o.kt)("p",null,"\u83b7\u53d6\u767b\u5f55\u51ed\u8bc1, \u68c0\u67e5\u767b\u5f55\u72b6\u6001"),(0,o.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,o.kt)("p",null,"\u5f53\u9700\u8981\u83b7\u53d6\u767b\u5f55\u51ed\u8bc1, \u68c0\u67e5\u767b\u5f55\u72b6\u6001"),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const { check, login } = useLogin();\n")),(0,o.kt)("h2",{id:"\u8fd4\u56de\u503c\u8bf4\u660e"},"\u8fd4\u56de\u503c\u8bf4\u660e"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u503c"),(0,o.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,o.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"login"),(0,o.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u767b\u5f55\u51ed\u8bc1(\u82e5",(0,o.kt)("inlineCode",{parentName:"td"},"needCheck"),"\u4e3a",(0,o.kt)("inlineCode",{parentName:"td"},"true"),"\u5219\u81ea\u52a8\u68c0\u6d4b\u5f53\u524d\u767b\u5f55\u72b6\u6001\u6765\u8fdb\u884c\u767b\u5f55\u64cd\u4f5c, ",(0,o.kt)("inlineCode",{parentName:"td"},"plugin"),"\u4e3a",(0,o.kt)("inlineCode",{parentName:"td"},"true"),"\u5219\u4e3a\u63d2\u4ef6\u767b\u5f55)"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"(needCheck?: boolean, plugin?: boolean, timeout?: number) => Promise<Taro.login.SuccessCallbackResult>"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"check"),(0,o.kt)("td",{parentName:"tr",align:null},"\u68c0\u67e5\u767b\u5f55\u72b6\u6001"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"() => Promise<General.CallbackResult>"))))),(0,o.kt)("h2",{id:"\u4ee3\u7801\u6f14\u793a"},"\u4ee3\u7801\u6f14\u793a"),(0,o.kt)(r.ZP,{VueTab:(0,o.kt)(a.Z,{language:"html",title:"wechat/useWeRun/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin-vue/src/pages/wechat/useWeRun/index.vue",url:"https://innocces.github.io/taro-hooks/vue/pages/wechat/useWeRun/index",mdxType:"CodeDisplay"},'<template>\n  <demo-content>\n    <nut-button\n      class="gap"\n      shape="square"\n      type="primary"\n      block\n      @click="handleGet()"\n      >\u83b7\u53d6\u5fae\u4fe1\u8fd0\u52a8\u6b65\u6570</nut-button\n    >\n    <nut-button\n      class="gap"\n      shape="square"\n      type="primary"\n      block\n      @click="handleShare()"\n      >\u5206\u4eab\u6570\u636e\u81f3\u5fae\u4fe1\u8fd0\u52a8</nut-button\n    >\n  </demo-content>\n</template>\n\n<script setup lang="ts">\nimport { useWeRun, useModal, useLogin } from \'taro-hooks\';\n\nconst { login } = useLogin();\nconst { get, share } = useWeRun();\nconst show = useModal({ mask: true, title: \'\u8bbe\u7f6e\u7ed3\u679c\', showCancel: false });\n\nconst handleGet = async () => {\n  let content = \'\';\n  try {\n    await login(true);\n    const result = await get();\n    content = JSON.stringify(result);\n  } catch (e) {\n    content = e.errMsg || e.message;\n  }\n  show({ content });\n};\n\nconst handleShare = async () => {\n  let content = \'\';\n  try {\n    await login(true);\n    const recordList = [\n      { typeId: 1000, time: 200, calorie: 100 },\n      { typeId: 3000, time: 300, calorie: 1000, distance: 1000 },\n      { typeId: 4000, calorie: 1000, number: 100 },\n    ];\n    const result = await share(recordList);\n    content = JSON.stringify(result);\n  } catch (e) {\n    content = e.errMsg || e.message;\n  }\n  show({ content });\n};\n<\/script>\n'),ReactTab:(0,o.kt)(a.Z,{language:"tsx",title:"wechat/useWeRun/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin/src/pages/wechat/useWeRun/index.tsx",url:"https://innocces.github.io/taro-hooks/react/pages/wechat/useWeRun/index",mdxType:"CodeDisplay"},"import React from 'react';\nimport { useWeRun, useModal, useLogin } from 'taro-hooks';\nimport DemoContent from '@src/components/DemoContent';\nimport { Button } from '@taroify/core';\n\nexport default () => {\n  const { login } = useLogin();\n  const { get, share } = useWeRun();\n  const show = useModal({ mask: true, title: '\u8bbe\u7f6e\u7ed3\u679c', showCancel: false });\n\n  const handleGet = async () => {\n    let content = '';\n    try {\n      await login(true);\n      const result = await get();\n      content = JSON.stringify(result);\n    } catch (e) {\n      content = e.errMsg || e.message;\n    }\n    show({ content });\n  };\n\n  const handleShare = async () => {\n    let content = '';\n    try {\n      await login(true);\n      const recordList = [\n        { typeId: 1000, time: 200, calorie: 100 },\n        { typeId: 3000, time: 300, calorie: 1000, distance: 1000 },\n        { typeId: 4000, calorie: 1000, number: 100 },\n      ];\n      const result = await share(recordList);\n      content = JSON.stringify(result);\n    } catch (e) {\n      content = e.errMsg || e.message;\n    }\n    show({ content });\n  };\n\n  return (\n    <DemoContent>\n      <Button\n        block\n        color=\"primary\"\n        className=\"gap\"\n        onClick={handleGet}\n        shape=\"square\"\n      >\n        \u83b7\u53d6\u5fae\u4fe1\u8fd0\u52a8\u6b65\u6570\n      </Button>\n      <Button\n        block\n        color=\"primary\"\n        className=\"gap\"\n        onClick={handleShare}\n        shape=\"square\"\n      >\n        \u5206\u4eab\u6570\u636e\u81f3\u5fae\u4fe1\u8fd0\u52a8\n      </Button>\n    </DemoContent>\n  );\n};\n"),mdxType:"CombineTabs"}),(0,o.kt)("h2",{id:"hook-\u652f\u6301\u5ea6"},"Hook \u652f\u6301\u5ea6"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"ReactNative"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"})))))}k.isMDXComponent=!0}}]);