"use strict";(self.webpackChunk_taro_hooks_website=self.webpackChunk_taro_hooks_website||[]).push([[6248],{4318:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>s,default:()=>N,frontMatter:()=>k,metadata:()=>u,toc:()=>d});n(79);var r=n(8570),o=n(1285),a=n(9497);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function i(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}const k={title:"useNetworkType",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u7f51\u7edc",path:"/network"}},s=void 0,u={unversionedId:"useNetworkType/index",id:"useNetworkType/index",title:"useNetworkType",description:"\u7531\u4e8e\u83b7\u53d6\u7f51\u7edc\u4fe1\u606f\u4e3a\u5f02\u6b65, \u6545\u521d\u59cb\u503c\u4e3aunknown. \u8be5 hook \u4f1a\u81ea\u52a8\u76d1\u542c\u5f53\u524d\u73af\u5883 networkType",source:"@site/../packages/hooks/src/useNetworkType/index.md",sourceDirName:"useNetworkType",slug:"/useNetworkType/",permalink:"/taro-hooks/hooks/useNetworkType/",draft:!1,editUrl:"https://github.com/innocces/taro-hooks/edit/next/src/../packages/hooks/src/useNetworkType/index.md",tags:[],version:"current",lastUpdatedBy:"innocces",lastUpdatedAt:1693750628,formattedLastUpdatedAt:"2023\u5e749\u67083\u65e5",frontMatter:{title:"useNetworkType",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u7f51\u7edc",path:"/network"}},sidebar:"hooks",previous:{title:"useFile",permalink:"/taro-hooks/hooks/useFile/"},next:{title:"useOnline",permalink:"/taro-hooks/hooks/useOnline/"}},m={},d=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",level:2},{value:"API",id:"api",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"NetworkType",id:"networktype",level:3},{value:"\u4ee3\u7801\u6f14\u793a",id:"\u4ee3\u7801\u6f14\u793a",level:2},{value:"Hook \u652f\u6301\u5ea6",id:"hook-\u652f\u6301\u5ea6",level:2}],c={toc:d},y="wrapper";function N(t){var{components:e}=t,n=i(t,["components"]);return(0,r.kt)(y,p(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){l(t,e,n[e])}))}return t}({},c,n),{components:e,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"\u7531\u4e8e\u83b7\u53d6\u7f51\u7edc\u4fe1\u606f\u4e3a\u5f02\u6b65, \u6545\u521d\u59cb\u503c\u4e3a",(0,r.kt)("strong",{parentName:"p"},"unknown"),". \u8be5 hook \u4f1a\u81ea\u52a8\u76d1\u542c\u5f53\u524d\u73af\u5883 networkType")),(0,r.kt)("h1",{id:"usenetworktype"},"useNetworkType"),(0,r.kt)("p",null,"\u83b7\u53d6\u7f51\u7edc\u7c7b\u578b"),(0,r.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,r.kt)("p",null,"\u5f53\u9700\u8981\u6839\u636e\u5f53\u524d\u7f51\u7edc\u7c7b\u578b\u505a\u5224\u65ad\u65f6"),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const networkType: keyof NetworkType = useNetworkType(autoListen?: boolean);\n")),(0,r.kt)("h2",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"autoListen"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u81ea\u52a8\u5f00\u59cb\u76d1\u542c"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"true"))))),(0,r.kt)("h2",{id:"\u8fd4\u56de\u503c\u8bf4\u660e"},"\u8fd4\u56de\u503c\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"networkType"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u7f51\u7edc\u7c7b\u578b"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"keyof NetworkType"))))),(0,r.kt)("h3",{id:"networktype"},"NetworkType"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"wifi"),(0,r.kt)("td",{parentName:"tr",align:null},"wifi")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2g"),(0,r.kt)("td",{parentName:"tr",align:null},"2g")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3g"),(0,r.kt)("td",{parentName:"tr",align:null},"3g")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4g"),(0,r.kt)("td",{parentName:"tr",align:null},"4g")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5g"),(0,r.kt)("td",{parentName:"tr",align:null},"5g")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"unknown"),(0,r.kt)("td",{parentName:"tr",align:null},"unknown")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"none")))),(0,r.kt)("h2",{id:"\u4ee3\u7801\u6f14\u793a"},"\u4ee3\u7801\u6f14\u793a"),(0,r.kt)(a.ZP,{VueTab:(0,r.kt)(o.Z,{language:"html",title:"network/useNetworkType/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin-vue/src/pages/network/useNetworkType/index.vue",url:"https://innocces.github.io/taro-hooks/vue/pages/network/useNetworkType/index",mdxType:"CodeDisplay"},"<template>\n  <demo-content>\n    <nut-radiogroup v-model=\"networkType\">\n      <nut-radio\n        v-for=\"(value, key) in NETWORKTYPE\"\n        :key=\"key\"\n        :disabled=\"value !== networkType\"\n        :label=\"value\"\n        shape=\"button\"\n        >\u7f51\u7edc\u7c7b\u578b: {{ value }}</nut-radio\n      >\n    </nut-radiogroup>\n  </demo-content>\n</template>\n\n<script setup lang=\"ts\">\nimport { showToast } from '@tarojs/taro';\nimport { useEffect } from '@taro-hooks/core';\nimport { useNetworkType } from 'taro-hooks';\nimport { escapeState } from '@taro-hooks/shared';\n// @ts-ignore\nimport { NETWORKTYPE } from '@root/public/constant';\n\nconst networkType = useNetworkType();\n\nuseEffect(() => {\n  showToast({\n    title: '\u5f53\u524d\u7f51\u7edc\u7c7b\u578b\u4e3a: ${escapeState(networkType)}',\n    icon: 'none',\n    mask: true,\n  });\n}, [networkType]);\n<\/script>\n"),ReactTab:(0,r.kt)(o.Z,{language:"tsx",title:"network/useNetworkType/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin/src/pages/network/useNetworkType/index.tsx",url:"https://innocces.github.io/taro-hooks/react/pages/network/useNetworkType/index",mdxType:"CodeDisplay"},"import React from 'react';\nimport DemoContent from '@src/components/DemoContent';\nimport { Radio, Cell } from '@taroify/core';\nimport { showToast } from '@tarojs/taro';\nimport { useEffect } from '@taro-hooks/core';\nimport { escapeState } from '@taro-hooks/shared';\nimport { useNetworkType } from 'taro-hooks';\n// @ts-ignore\nimport { NETWORKTYPE } from '@root/public/constant';\n\nexport default () => {\n  const networkType = useNetworkType();\n\n  useEffect(() => {\n    showToast({\n      title: '\u5f53\u524d\u7f51\u7edc\u7c7b\u578b\u4e3a: ${escapeState(networkType)}',\n      icon: 'none',\n      mask: true,\n    });\n  }, [networkType]);\n\n  return (\n    <DemoContent>\n      <Radio.Group value={escapeState(networkType)}>\n        <Cell.Group clickable>\n          {Object.entries(NETWORKTYPE).map(([key, value]) => (\n            <Cell key={key} title={'\u7f51\u7edc\u7c7b\u578b: ' + value}>\n              <Radio\n                disabled={value !== escapeState(networkType)}\n                name={value}\n              />\n            </Cell>\n          ))}\n        </Cell.Group>\n      </Radio.Group>\n    </DemoContent>\n  );\n};\n"),mdxType:"CombineTabs"}),(0,r.kt)("h2",{id:"hook-\u652f\u6301\u5ea6"},"Hook \u652f\u6301\u5ea6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,r.kt)("th",{parentName:"tr",align:"center"},"ReactNative"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}N.isMDXComponent=!0}}]);