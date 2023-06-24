"use strict";(self.webpackChunk_taro_hooks_website=self.webpackChunk_taro_hooks_website||[]).push([[5096],{9557:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>y,frontMatter:()=>u,metadata:()=>d,toc:()=>m});n(79);var r=n(8570),l=n(4946),o=n(9497);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}const u={title:"useSelectorQuery",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u57fa\u7840",path:"/basic"}},c="useSelectorQuery",d={unversionedId:"useSelectorQuery/index",id:"useSelectorQuery/index",title:"useSelectorQuery",description:"\u83b7\u53d6\u6307\u5b9a\u7ec4\u4ef6\u6216\u6807\u7b7e\u7684\u5c3a\u5bf8\u4ee5\u53ca context",source:"@site/../packages/hooks/src/useSelectorQuery/index.md",sourceDirName:"useSelectorQuery",slug:"/useSelectorQuery/",permalink:"/taro-hooks/hooks/useSelectorQuery/",draft:!1,editUrl:"https://github.com/innocces/taro-hooks/edit/next/src/../packages/hooks/src/useSelectorQuery/index.md",tags:[],version:"current",lastUpdatedBy:"innocces",lastUpdatedAt:1687571267,formattedLastUpdatedAt:"2023\u5e746\u670824\u65e5",frontMatter:{title:"useSelectorQuery",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u57fa\u7840",path:"/basic"}},sidebar:"hooks",previous:{title:"useRouter",permalink:"/taro-hooks/hooks/useRouter/"},next:{title:"useStorage",permalink:"/taro-hooks/hooks/useStorage/"}},p={},m=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",level:2},{value:"API",id:"api",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u4ee3\u7801\u6f14\u793a",id:"\u4ee3\u7801\u6f14\u793a",level:2},{value:"Hook \u652f\u6301\u5ea6",id:"hook-\u652f\u6301\u5ea6",level:2},{value:"FAQ",id:"faq",level:2}],k={toc:m},g="wrapper";function y(e){var{components:t}=e,n=i(e,["components"]);return(0,r.kt)(g,s(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}({},k,n),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"useselectorquery"},"useSelectorQuery"),(0,r.kt)("p",null,"\u83b7\u53d6\u6307\u5b9a\u7ec4\u4ef6\u6216\u6807\u7b7e\u7684\u5c3a\u5bf8\u4ee5\u53ca context"),(0,r.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,r.kt)("p",null,"\u5f53\u9700\u8981\u83b7\u53d6\u7ec4\u4ef6\u76f8\u5173\u4fe1\u606f\u65f6"),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const [\n  query,\n  {\n    querySelector,\n    querySelectorAll,\n    selectViewport,\n    in,\n    exec,\n    getBoundingClientRect,\n    getContext,\n    getFields,\n    getNode,\n    getScrollOffset,\n  }\n] = useSelectorQuery();\n")),(0,r.kt)("h2",{id:"\u8fd4\u56de\u503c\u8bf4\u660e"},"\u8fd4\u56de\u503c\u8bf4\u660e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SelectorQuery"),"\u5bf9\u8c61\u5b9e\u4f8b"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SelectorQuery"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"querySelector"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5728\u5f53\u524d\u9875\u9762\u4e0b\u9009\u62e9\u7b2c\u4e00\u4e2a\u5339\u914d\u9009\u62e9\u5668 selector \u7684\u8282\u70b9"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SelectorQuery['select']"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"querySelectorAll"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5728\u5f53\u524d\u9875\u9762\u4e0b\u9009\u62e9\u5339\u914d\u9009\u62e9\u5668 selector \u7684\u6240\u6709\u8282\u70b9"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SelectorQuery['selectAll']"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"selectViewport"),(0,r.kt)("td",{parentName:"tr",align:null},"\u9009\u62e9\u663e\u793a\u533a\u57df\u3002\u53ef\u7528\u4e8e\u83b7\u53d6\u663e\u793a\u533a\u57df\u7684\u5c3a\u5bf8\u3001\u6eda\u52a8\u4f4d\u7f6e\u7b49\u4fe1\u606f"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SelectorQuery['selectViewport']"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"in"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c06\u9009\u62e9\u5668\u7684\u9009\u53d6\u8303\u56f4\u66f4\u6539\u4e3a\u81ea\u5b9a\u4e49\u7ec4\u4ef6 component \u5185"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SelectorQuery['in']"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"exec"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6267\u884c\u6240\u6709\u7684\u8bf7\u6c42"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"SelectorQuery['exec']"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"getBoundingClientRect"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6dfb\u52a0\u8282\u70b9\u7684\u5e03\u5c40\u4f4d\u7f6e\u7684\u67e5\u8be2\u8bf7\u6c42\u3002\u76f8\u5bf9\u4e8e\u663e\u793a\u533a\u57df\uff0c\u4ee5\u50cf\u7d20\u4e3a\u5355\u4f4d"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PromiseParamsAction<(selector: string, all?: boolean) => void, NodesRef.BoundingClientRectCallbackResult>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"getContext"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6dfb\u52a0\u8282\u70b9\u7684 Context \u5bf9\u8c61\u67e5\u8be2\u8bf7\u6c42"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PromiseAction<string, NodesRef.ContextCallbackResult>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"getFields"),(0,r.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u8282\u70b9\u7684\u76f8\u5173\u4fe1\u606f\u3002\u9700\u8981\u83b7\u53d6\u7684\u5b57\u6bb5\u5728 fields \u4e2d\u6307\u5b9a"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PromiseParamsAction<(selector: string, fields: NodesRef.Fields) => void, TaroGeneral.IAnyObject>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"getNode"),(0,r.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6 Node \u8282\u70b9\u5b9e\u4f8b"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PromiseAction<string, NodesRef.NodeCallbackResult>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"getScrollOffset"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6dfb\u52a0\u8282\u70b9\u7684\u6eda\u52a8\u4f4d\u7f6e\u67e5\u8be2\u8bf7\u6c42\u3002\u4ee5\u50cf\u7d20\u4e3a\u5355\u4f4d\u3002\u8282\u70b9\u5fc5\u987b\u662f scroll-view \u6216\u8005 viewport"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PromiseAction<string, NodesRef.ScrollOffsetCallbackResult>"))))),(0,r.kt)("h2",{id:"\u4ee3\u7801\u6f14\u793a"},"\u4ee3\u7801\u6f14\u793a"),(0,r.kt)(o.ZP,{VueTab:(0,r.kt)(l.Z,{language:"html",title:"basic/useSelectorQuery/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin-vue/src/pages/basic/useSelectorQuery/index.vue",url:"https://innocces.github.io/taro-hooks/vue/pages/basic/useSelectorQuery/index",mdxType:"CodeDisplay"},'<template>\n  <demo-content>\n    <nut-tabs :auto-height="true" v-model="tabValue.current">\n      <nut-tabpane title="bound" pane-key="bound">\n        <view class="query-demo"></view>\n        <nut-divider>\u5c5e\u6027</nut-divider>\n        <nut-cell-group title="getBoundingClientRect">\n          <nut-cell\n            v-for="(value, key) in bounding ?? {}"\n            :key="key"\n            :title="key"\n            :sub-title="$filters.stringify(value)"\n          ></nut-cell>\n        </nut-cell-group>\n      </nut-tabpane>\n      <nut-tabpane title="fields" pane-key="fields">\n        <view class="query-demo"></view>\n        <nut-divider>\u5c5e\u6027</nut-divider>\n        <nut-cell-group title="getFields">\n          <nut-cell\n            v-for="(value, key) in fields"\n            :key="key"\n            :title="key"\n            :sub-title="$filters.stringify(value)"\n          ></nut-cell>\n        </nut-cell-group>\n      </nut-tabpane>\n      <nut-tabpane title="scroll" pane-key="scroll">\n        <scroll-view\n          class="query-demo-scroll"\n          :scroll-y="true"\n          :scrollTop="100"\n        >\n          <view class="query-demo"></view>\n          <view class="query-demo"></view>\n          <view class="query-demo"></view>\n        </scroll-view>\n        <nut-divider>\u5c5e\u6027</nut-divider>\n        <nut-cell-group title="getScrollOffset">\n          <nut-cell\n            v-for="(value, key) in scroll ?? {}"\n            :key="key"\n            :title="key"\n            :sub-title="$filters.stringify(value)"\n          ></nut-cell>\n        </nut-cell-group>\n      </nut-tabpane>\n    </nut-tabs>\n  </demo-content>\n</template>\n\n<script setup lang="ts">\nimport { NodesRef, useReady } from \'@tarojs/taro\';\nimport { useRef, useState } from \'@taro-hooks/core\';\nimport { useSelectorQuery, useToast } from \'taro-hooks\';\n\nconst selector = \'.query-demo\';\nconst fieldsSetting = {\n  dataset: true,\n  size: true,\n  mark: true,\n  rect: true,\n  scrollOffset: true,\n  properties: [\'scrollX\', \'scrollY\'],\n  computedStyle: [\'margin\', \'backgroundColor\'],\n  context: true,\n};\nconst tabValue = useRef<string>(\'bound\');\nconst [bounding, setBounding] =\n  useState<NodesRef.BoundingClientRectCallbackResult>();\nconst [fields, setFields] = useState<TaroGeneral.IAnyObject>({});\nconst [scroll, setScroll] = useState<NodesRef.ScrollOffsetCallbackResult>();\n\nconst { show } = useToast({\n  title: \'useEvent\',\n  mask: true,\n  duration: 500,\n  icon: \'none\',\n});\nconst [, { getBoundingClientRect, getFields, getScrollOffset }] =\n  useSelectorQuery();\n\nconst handleGetBounding = async () => {\n  try {\n    const result = await getBoundingClientRect(selector);\n    setBounding(result);\n  } catch (e) {\n    show({ title: e.errMsg || e.message, icon: \'error\' });\n  }\n};\n\nconst handleGetFields = async () => {\n  try {\n    const result = await getFields(selector, fieldsSetting);\n    setFields(result);\n  } catch (e) {\n    show({ title: e.errMsg || e.message, icon: \'error\' });\n  }\n};\n\nconst handleGetScroll = async () => {\n  try {\n    const result = await getScrollOffset(selector + \'-scroll\');\n    setScroll(result);\n  } catch (e) {\n    show({ title: e.errMsg || e.message, icon: \'error\' });\n  }\n};\n\nuseReady(() => {\n  handleGetBounding();\n  handleGetFields();\n  handleGetScroll();\n});\n<\/script>\n\n<style>\n.query-demo,\n.query-demo-scroll {\n  width: 100%;\n  height: 200px;\n  background-color: #a773ed;\n}\n</style>\n'),ReactTab:(0,r.kt)(l.Z,{language:"tsx",title:"basic/useSelectorQuery/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin/src/pages/basic/useSelectorQuery/index.tsx",url:"https://innocces.github.io/taro-hooks/react/pages/basic/useSelectorQuery/index",mdxType:"CodeDisplay"},"import React from 'react';\nimport { NodesRef, useReady } from '@tarojs/taro';\nimport { useRef, useState } from '@taro-hooks/core';\nimport { useSelectorQuery, useToast } from 'taro-hooks';\nimport DemoContent from '@src/components/DemoContent';\nimport { Cell, Tabs, Divider } from '@taroify/core';\nimport { View, ScrollView } from '@tarojs/components';\n\nimport './index.less';\n\nexport default () => {\n  const selector = '.query-demo';\n  const fieldsSetting = {\n    dataset: true,\n    size: true,\n    mark: true,\n    rect: true,\n    scrollOffset: true,\n    properties: ['scrollX', 'scrollY'],\n    computedStyle: ['margin', 'backgroundColor'],\n    context: true,\n  };\n  const tabValue = useRef<string>('bound');\n  const [bounding, setBounding] =\n    useState<NodesRef.BoundingClientRectCallbackResult>();\n  const [fields, setFields] = useState<TaroGeneral.IAnyObject>({});\n  const [scroll, setScroll] = useState<NodesRef.ScrollOffsetCallbackResult>();\n\n  const { show } = useToast({\n    title: 'useEvent',\n    mask: true,\n    duration: 500,\n    icon: 'none',\n  });\n  const [, { getBoundingClientRect, getFields, getScrollOffset }] =\n    useSelectorQuery();\n\n  const handleGetBounding = async () => {\n    try {\n      const result = await getBoundingClientRect(selector);\n      setBounding(result);\n    } catch (e) {\n      show({ title: e.errMsg || e.message, icon: 'error' });\n    }\n  };\n\n  const handleGetFields = async () => {\n    try {\n      const result = await getFields(selector, fieldsSetting);\n      setFields(result);\n    } catch (e) {\n      show({ title: e.errMsg || e.message, icon: 'error' });\n    }\n  };\n\n  const handleGetScroll = async () => {\n    try {\n      const result = await getScrollOffset(selector + '-scroll');\n      setScroll(result);\n    } catch (e) {\n      show({ title: e.errMsg || e.message, icon: 'error' });\n    }\n  };\n\n  useReady(() => {\n    handleGetBounding();\n    handleGetFields();\n    handleGetScroll();\n  });\n\n  return (\n    <DemoContent>\n      <Tabs sticky animated>\n        <Tabs.TabPane title=\"bound\" key=\"bound\">\n          <View className=\"query-demo\"></View>\n          <Divider>\u5c5e\u6027</Divider>\n          <Cell.Group title=\"getBoundingClientRect\">\n            {Object.entries(bounding ?? {}).map(([key, value]) => (\n              <Cell key={key} title={key} brief={JSON.stringify(value)}></Cell>\n            ))}\n          </Cell.Group>\n        </Tabs.TabPane>\n        <Tabs.TabPane title=\"fields\" key=\"fields\">\n          <View className=\"query-demo\"></View>\n          <Divider>\u5c5e\u6027</Divider>\n          <Cell.Group title=\"getFields\">\n            {Object.entries(fields ?? {}).map(([key, value]) => (\n              <Cell key={key} title={key} brief={JSON.stringify(value)}></Cell>\n            ))}\n          </Cell.Group>\n        </Tabs.TabPane>\n        <Tabs.TabPane title=\"scroll\" key=\"scroll\">\n          <ScrollView className=\"query-demo-scroll\" scrollY scrollTop={100}>\n            <View className=\"query-demo\"></View>\n            <View className=\"query-demo\"></View>\n            <View className=\"query-demo\"></View>\n          </ScrollView>\n          <Divider>\u5c5e\u6027</Divider>\n          <Cell.Group title=\"getScrollOffset\">\n            {Object.entries(scroll ?? {}).map(([key, value]) => (\n              <Cell key={key} title={key} brief={JSON.stringify(value)}></Cell>\n            ))}\n          </Cell.Group>\n        </Tabs.TabPane>\n      </Tabs>\n    </DemoContent>\n  );\n};\n"),mdxType:"CombineTabs"}),(0,r.kt)("h2",{id:"hook-\u652f\u6301\u5ea6"},"Hook \u652f\u6301\u5ea6"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,r.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,r.kt)("th",{parentName:"tr",align:"center"},"ReactNative"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"})))),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4e3a\u4ec0\u4e48\u83b7\u53d6\u4e0d\u5230\u7ed3\u679c, \u65f6\u6709\u65f6\u65e0?"),(0,r.kt)("p",{parentName:"li"},"\u5b98\u65b9\u63a8\u8350\u7684\u83b7\u53d6\u65f6\u673a\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"onReady|useReady"),"\u65f6, \u82e5\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"ready"),"\u4e2d\u4f9d\u7136\u6709\u4e0d\u7a33\u5b9a\u56e0\u7d20\u5efa\u8bae\u642d\u914d",(0,r.kt)("inlineCode",{parentName:"p"},"nextTick"),"\u6765\u786e\u4fdd\u5143\u7d20\u5df2\u7ecf\u6e32\u67d3\u5b8c\u6210."))))}y.isMDXComponent=!0}}]);