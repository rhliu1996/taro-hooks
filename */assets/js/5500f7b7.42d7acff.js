"use strict";(self.webpackChunk_taro_hooks_website=self.webpackChunk_taro_hooks_website||[]).push([[9873],{8614:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>b,contentTitle:()=>u,default:()=>h,frontMatter:()=>p,metadata:()=>c,toc:()=>m});n(79);var s=n(8570),i=n(1285),r=n(9497);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,s)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function l(t,e){if(null==t)return{};var n,s,i=function(t,e){if(null==t)return{};var n,s,i={},r=Object.keys(t);for(s=0;s<r.length;s++)n=r[s],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(s=0;s<r.length;s++)n=r[s],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}const p={title:"useVisible",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u57fa\u7840",path:"/basic"}},u="useVisible",c={unversionedId:"useVisible/index",id:"useVisible/index",title:"useVisible",description:"\u83b7\u53d6\u5f53\u524d\u9875\u9762\u662f\u5426\u9690\u85cf\u6216\u5904\u4e8e\u540e\u53f0",source:"@site/../packages/hooks/src/useVisible/index.md",sourceDirName:"useVisible",slug:"/useVisible/",permalink:"/taro-hooks/hooks/useVisible/",draft:!1,editUrl:"https://github.com/innocces/taro-hooks/edit/next/src/../packages/hooks/src/useVisible/index.md",tags:[],version:"current",lastUpdatedBy:"innocces",lastUpdatedAt:1693750628,formattedLastUpdatedAt:"2023\u5e749\u67083\u65e5",frontMatter:{title:"useVisible",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u57fa\u7840",path:"/basic"}},sidebar:"hooks",previous:{title:"useWindowInfo",permalink:"/taro-hooks/hooks/useWindowInfo/"},next:{title:"\u5a92\u4f53",permalink:"/taro-hooks/hooks/category/media"}},b={},m=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",level:2},{value:"API",id:"api",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u4ee3\u7801\u6f14\u793a",id:"\u4ee3\u7801\u6f14\u793a",level:2},{value:"Hook \u652f\u6301\u5ea6",id:"hook-\u652f\u6301\u5ea6",level:2}],d={toc:m},k="wrapper";function h(t){var{components:e}=t,n=l(t,["components"]);return(0,s.kt)(k,a(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},s=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),s.forEach((function(e){o(t,e,n[e])}))}return t}({},d,n),{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"usevisible"},"useVisible"),(0,s.kt)("p",null,"\u83b7\u53d6\u5f53\u524d\u9875\u9762\u662f\u5426\u9690\u85cf\u6216\u5904\u4e8e\u540e\u53f0"),(0,s.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"\u7531\u4e8e",(0,s.kt)("strong",{parentName:"p"},"WEB"),"\u7684\u9875\u9762\u9690\u85cf\u548c\u5c0f\u7a0b\u5e8f\u7684\u65f6\u673a\u4e0d\u4e00\u6837. \u5728",(0,s.kt)("strong",{parentName:"p"},"WEB"),"\u7aef\u4e3b\u8981\u662f\u4f7f\u7528",(0,s.kt)("strong",{parentName:"p"},"document.visibilityState"),"\u6765\u5224\u65ad\u5f53\u524d\u7684\u9875\u9762\u72b6\u6001")),(0,s.kt)("p",null,"\u5f53\u9700\u8981\u6839\u636e\u9875\u9762\u663e\u9690\u8fdb\u884c\u5224\u65ad"),(0,s.kt)("h2",{id:"api"},"API"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"| pure","|":!0,pure:!0},"const visible: boolean = useVisible();\n")),(0,s.kt)("h2",{id:"\u8fd4\u56de\u503c\u8bf4\u660e"},"\u8fd4\u56de\u503c\u8bf4\u660e"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u503c"),(0,s.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,s.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},"visible"),(0,s.kt)("td",{parentName:"tr",align:null},"\u5f53\u524d\u5e94\u7528\u662f\u5426\u5904\u4e8e\u540e\u53f0"),(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"boolean"))))),(0,s.kt)("h2",{id:"\u4ee3\u7801\u6f14\u793a"},"\u4ee3\u7801\u6f14\u793a"),(0,s.kt)(r.ZP,{VueTab:(0,s.kt)(i.Z,{language:"html",title:"basic/useVisible/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin-vue/src/pages/basic/useVisible/index.vue",url:"https://innocces.github.io/taro-hooks/vue/pages/basic/useVisible/index",mdxType:"CodeDisplay"},'<template>\n  <demo-content>\n    <nut-steps direction="vertical" :current="subscribeList.length">\n      <nut-step\n        v-for="{ timestamp, status } in subscribeList"\n        :key="timestamp"\n        :title="timestamp + \'\'"\n        :content="\'\u5f53\u524d\u72b6\u6001\u4e3a:\' + status"\n        :icon="status ? \'star-fill-n\' : \'star-n\'"\n      ></nut-step>\n    </nut-steps>\n  </demo-content>\n</template>\n\n<script setup lang="ts">\nimport { useEffect, useState } from \'@taro-hooks/core\';\nimport { useVisible } from \'taro-hooks\';\nimport { escapeState } from \'@taro-hooks/shared\';\n\nconst visible = useVisible();\ntype Item = { timestamp: number; status: boolean };\nconst [subscribeList, setSubscribeList] = useState<Item[]>([]);\n\nuseEffect(() => {\n  const currentList = escapeState(subscribeList);\n  setSubscribeList([\n    ...currentList,\n    { timestamp: Date.now(), status: escapeState(visible) },\n  ]);\n}, [visible]);\n<\/script>\n'),ReactTab:(0,s.kt)(i.Z,{language:"tsx",title:"basic/useVisible/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin/src/pages/basic/useVisible/index.tsx",url:"https://innocces.github.io/taro-hooks/react/pages/basic/useVisible/index",mdxType:"CodeDisplay"},"import React from 'react';\nimport { useEffect, useState } from '@taro-hooks/core';\nimport { useVisible } from 'taro-hooks';\nimport { escapeState } from '@taro-hooks/shared';\nimport DemoContent from '@src/components/DemoContent';\nimport { View } from '@tarojs/components';\nimport { Steps } from '@taroify/core';\nimport { StarOutlined, Star } from '@taroify/icons';\n\ntype Item = { timestamp: number; status: boolean };\nexport default () => {\n  const visible = useVisible();\n\n  const [subscribeList, setSubscribeList] = useState<Item[]>([]);\n\n  useEffect(() => {\n    const currentList = escapeState(subscribeList);\n    setSubscribeList([\n      ...currentList,\n      { timestamp: Date.now(), status: escapeState(visible) },\n    ]);\n  }, [visible]);\n\n  return (\n    <DemoContent>\n      <Steps value={subscribeList.length - 1} direction=\"vertical\">\n        {subscribeList.map(({ timestamp, status }) => (\n          <Steps.Step\n            key={timestamp}\n            icon={status ? <Star /> : <StarOutlined />}\n          >\n            <View>{timestamp}</View>\n            <View>\u5f53\u524d\u72b6\u6001\u4e3a: {String(status)}</View>\n          </Steps.Step>\n        ))}\n      </Steps>\n    </DemoContent>\n  );\n};\n"),mdxType:"CombineTabs"}),(0,s.kt)("h2",{id:"hook-\u652f\u6301\u5ea6"},"Hook \u652f\u6301\u5ea6"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,s.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,s.kt)("th",{parentName:"tr",align:"center"},"ReactNative"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,s.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,s.kt)("td",{parentName:"tr",align:"center"})))))}h.isMDXComponent=!0}}]);