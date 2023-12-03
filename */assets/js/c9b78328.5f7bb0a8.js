"use strict";(self.webpackChunk_taro_hooks_website=self.webpackChunk_taro_hooks_website||[]).push([[115],{4332:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>u,default:()=>b,frontMatter:()=>c,metadata:()=>p,toc:()=>k});n(79);var a=n(8570),o=n(6417),r=n(9497);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function i(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}const c={title:"useTabBar",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u5e03\u5c40",path:"/layout"}},u="useTabBar",p={unversionedId:"useTabBar/index",id:"useTabBar/index",title:"useTabBar",description:"\u64cd\u4f5c Tab",source:"@site/../packages/hooks/src/useTabBar/index.md",sourceDirName:"useTabBar",slug:"/useTabBar/",permalink:"/taro-hooks/hooks/useTabBar/",draft:!1,editUrl:"https://github.com/innocces/taro-hooks/edit/next/src/../packages/hooks/src/useTabBar/index.md",tags:[],version:"current",lastUpdatedBy:"innocces",lastUpdatedAt:1701593751,formattedLastUpdatedAt:"2023\u5e7412\u67083\u65e5",frontMatter:{title:"useTabBar",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u5e03\u5c40",path:"/layout"}},sidebar:"hooks",previous:{title:"useManualPullDownRefresh",permalink:"/taro-hooks/hooks/useManualPullDownRefresh/"},next:{title:"\u8bbe\u5907",permalink:"/taro-hooks/hooks/category/device"}},d={},k=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",level:2},{value:"API",id:"api",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u4ee3\u7801\u6f14\u793a",id:"\u4ee3\u7801\u6f14\u793a",level:2},{value:"Hook \u652f\u6301\u5ea6",id:"hook-\u652f\u6301\u5ea6",level:2}],m={toc:k},g="wrapper";function b(t){var{components:e}=t,n=i(t,["components"]);return(0,a.kt)(g,s(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),a.forEach((function(e){l(t,e,n[e])}))}return t}({},m,n),{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"usetabbar"},"useTabBar"),(0,a.kt)("p",null,"\u64cd\u4f5c Tab"),(0,a.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,a.kt)("p",null,"\u5f53\u9700\u8981\u5bf9 Tab \u505a\u4e00\u4e9b\u64cd\u4f5c\u65f6"),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const { toggleRedDot, toggleBadge, setStyle, setItem, toggle } = useTabBar();\n")),(0,a.kt)("h2",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e"),(0,a.kt)("p",null,"\u65e0"),(0,a.kt)("h2",{id:"\u8fd4\u56de\u503c\u8bf4\u660e"},"\u8fd4\u56de\u503c\u8bf4\u660e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"toggle"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(animation?: boolean) => Promise<General.CallbackResult>")),(0,a.kt)("td",{parentName:"tr",align:null},"\u663e\u793a/\u9690\u85cf tabBar")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"toggleRedDot"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(index?: number) => Promise<General.CallbackResult>")),(0,a.kt)("td",{parentName:"tr",align:null},"\u663e\u793a/\u9690\u85cf tabBar \u67d0\u9879\u7684\u53f3\u4e0a\u89d2\u7684\u7ea2\u70b9")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"toggleBadge"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(index?: number, text?: string) => Promise<General.CallbackResult>")),(0,a.kt)("td",{parentName:"tr",align:null},"\u4e3a tabBar \u67d0\u9879\u7684\u53f3\u4e0a\u89d2\u6dfb\u52a0/\u79fb\u9664\u6587\u672c(\u79fb\u9664\u65f6\u4ec5\u9700\u8981\u4f20\u9012\u79fb\u9664",(0,a.kt)("inlineCode",{parentName:"td"},"index"),"\u5373\u53ef)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"setItem"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(option: Omit<ExcludeOption<Taro.setTabBarItem.Option>, 'index'>, index?: number) => Promise<General.CallbackResult>")),(0,a.kt)("td",{parentName:"tr",align:null},"\u52a8\u6001\u8bbe\u7f6e tabBar \u67d0\u9879\u7684\u5185\u5bb9(\u82e5\u4e0d\u4f20",(0,a.kt)("inlineCode",{parentName:"td"},"index"),"\u5219\u4f1a\u7edf\u4e00\u7ed9\u6240\u6709\u7684\u6dfb\u52a0\u6837\u5f0f)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"setStyle"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"(option: ExcludeOption<Taro.setTabBarStyle.Option>) => Promise<General.CallbackResult>")),(0,a.kt)("td",{parentName:"tr",align:null},"\u52a8\u6001\u8bbe\u7f6e tabBar \u7684\u6574\u4f53\u6837\u5f0f")))),(0,a.kt)("h2",{id:"\u4ee3\u7801\u6f14\u793a"},"\u4ee3\u7801\u6f14\u793a"),(0,a.kt)(r.ZP,{VueTab:(0,a.kt)(o.Z,{language:"html",title:"layout/useTabBar/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin-vue/src/pages/layout/useTabBar/index.vue",url:"https://innocces.github.io/taro-hooks/vue/pages/layout/useTabBar/index",mdxType:"CodeDisplay"},'<template>\n  <demo-content>\n    <nut-button\n      shape="square"\n      type="primary"\n      class="gap"\n      block\n      @click="toggle()"\n      >\u5207\u6362TabBar\u663e\u793a/\u9690\u85cf</nut-button\n    >\n    <nut-button\n      shape="square"\n      type="primary"\n      class="gap"\n      block\n      @click="toggle(true)"\n      >\u5207\u6362TabBar\u663e\u793a/\u9690\u85cf(\u52a8\u753b)</nut-button\n    >\n    <nut-button\n      shape="square"\n      type="primary"\n      class="gap"\n      block\n      @click="handleToggleRedDot()"\n      >\u968f\u673aTabBar \u7ea2\u70b9 \u663e\u793a/\u9690\u85cf</nut-button\n    >\n    <nut-button\n      shape="square"\n      type="primary"\n      class="gap"\n      block\n      @click="handleToggleBadge()"\n      >\u968f\u673aTabBar badge \u663e\u793a/\u9690\u85cf</nut-button\n    >\n    <nut-button\n      shape="square"\n      type="primary"\n      class="gap"\n      block\n      @click="handleSetItem()"\n      >\u968f\u673a\u8bbe\u7f6eTabBar Item</nut-button\n    >\n    <nut-button\n      shape="square"\n      type="primary"\n      class="gap"\n      block\n      @click="handleSetStyle()"\n      >\u8bbe\u7f6eTabBar\u6837\u5f0f</nut-button\n    >\n  </demo-content>\n</template>\n\n<script setup lang="ts">\nimport { useTabBar } from \'taro-hooks\';\nimport Mock from \'mockjs\';\n\nconst { toggleRedDot, toggleBadge, setStyle, setItem, toggle } = useTabBar();\n\nconst handleSetStyle = () => {\n  setStyle({\n    color: Mock.Random.color(),\n    selectedColor: Mock.Random.color(),\n    backgroundColor: Mock.Random.color(),\n  });\n};\n\nconst handleSetItem = () => {\n  setItem({ text: Mock.Random.city() }, Mock.Random.pick([0, 1]));\n};\n\nconst handleToggleRedDot = () => {\n  toggleRedDot(Mock.Random.pick([0, 1]));\n};\n\nconst handleToggleBadge = () => {\n  toggleBadge(Mock.Random.pick([0, 1]), Mock.Random.pick([\'serro\', undefined]));\n};\n<\/script>\n'),ReactTab:(0,a.kt)(o.Z,{language:"tsx",title:"layout/useTabBar/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin/src/pages/layout/useTabBar/index.tsx",url:"https://innocces.github.io/taro-hooks/react/pages/layout/useTabBar/index",mdxType:"CodeDisplay"},'import React from \'react\';\nimport { useTabBar } from \'taro-hooks\';\nimport Mock from \'mockjs\';\nimport DemoContent from \'@src/components/DemoContent\';\nimport { Button } from \'@taroify/core\';\n\nexport default () => {\n  const { toggleRedDot, toggleBadge, setStyle, setItem, toggle } = useTabBar();\n\n  const handleSetStyle = () => {\n    setStyle({\n      color: Mock.Random.color(),\n      selectedColor: Mock.Random.color(),\n      backgroundColor: Mock.Random.color(),\n    });\n  };\n\n  const handleSetItem = () => {\n    setItem({ text: Mock.Random.city() }, Mock.Random.pick([0, 1]));\n  };\n\n  const handleToggleRedDot = () => {\n    toggleRedDot(Mock.Random.pick([0, 1]));\n  };\n\n  const handleToggleBadge = () => {\n    toggleBadge(\n      Mock.Random.pick([0, 1]),\n      Mock.Random.pick([\'serro\', undefined]),\n    );\n  };\n\n  return (\n    <DemoContent>\n      <Button\n        block\n        color="primary"\n        className="gap"\n        onClick={() => toggle()}\n        shape="square"\n      >\n        \u5207\u6362TabBar\u663e\u793a/\u9690\u85cf\n      </Button>\n      <Button\n        block\n        color="primary"\n        className="gap"\n        onClick={() => toggle(true)}\n        shape="square"\n      >\n        \u5207\u6362TabBar\u663e\u793a/\u9690\u85cf(\u52a8\u753b)\n      </Button>\n      <Button\n        block\n        color="primary"\n        className="gap"\n        onClick={() => handleToggleRedDot()}\n        shape="square"\n      >\n        \u968f\u673aTabBar \u7ea2\u70b9 \u663e\u793a/\u9690\u85cf\n      </Button>\n      <Button\n        block\n        color="primary"\n        className="gap"\n        onClick={() => handleToggleBadge()}\n        shape="square"\n      >\n        \u968f\u673aTabBar badge \u663e\u793a/\u9690\u85cf\n      </Button>\n      <Button\n        block\n        color="primary"\n        className="gap"\n        onClick={() => handleSetItem()}\n        shape="square"\n      >\n        \u968f\u673a\u8bbe\u7f6eTabBar Item\n      </Button>\n      <Button\n        block\n        color="primary"\n        className="gap"\n        onClick={() => handleSetStyle()}\n        shape="square"\n      >\n        \u8bbe\u7f6eTabBar\u6837\u5f0f\n      </Button>\n    </DemoContent>\n  );\n};\n'),mdxType:"CombineTabs"}),(0,a.kt)("h2",{id:"hook-\u652f\u6301\u5ea6"},"Hook \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"ReactNative"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}b.isMDXComponent=!0}}]);