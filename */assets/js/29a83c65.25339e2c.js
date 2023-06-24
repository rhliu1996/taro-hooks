"use strict";(self.webpackChunk_taro_hooks_website=self.webpackChunk_taro_hooks_website||[]).push([[5743],{6014:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>k});n(79);var a=n(8570),o=n(4946),r=n(9497);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){return e=null!=e?e:{},Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):function(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))})),t}function p(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}const s={title:"useLoading",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u64cd\u4f5c\u53cd\u9988",path:"/feedback"}},d="useLoading",u={unversionedId:"useLoading/index",id:"useLoading/index",title:"useLoading",description:"\u663e\u793a\u6216\u9690\u85cf\u52a0\u8f7d\u63d0\u793a\u6846",source:"@site/../packages/hooks/src/useLoading/index.md",sourceDirName:"useLoading",slug:"/useLoading/",permalink:"/taro-hooks/hooks/useLoading/",draft:!1,editUrl:"https://github.com/innocces/taro-hooks/edit/next/src/../packages/hooks/src/useLoading/index.md",tags:[],version:"current",lastUpdatedBy:"innocces",lastUpdatedAt:1687571267,formattedLastUpdatedAt:"2023\u5e746\u670824\u65e5",frontMatter:{title:"useLoading",nav:{title:"Hooks",path:"/hooks",order:2},group:{title:"\u64cd\u4f5c\u53cd\u9988",path:"/feedback"}},sidebar:"hooks",previous:{title:"useActionSheet",permalink:"/taro-hooks/hooks/useActionSheet/"},next:{title:"useModal",permalink:"/taro-hooks/hooks/useModal/"}},c={},k=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",level:2},{value:"API",id:"api",level:2},{value:"\u53c2\u6570\u8bf4\u660e",id:"\u53c2\u6570\u8bf4\u660e",level:2},{value:"<code>initialOption: PartialLoadingOption</code>",id:"initialoption-partialloadingoption",level:3},{value:"\u8fd4\u56de\u503c\u8bf4\u660e",id:"\u8fd4\u56de\u503c\u8bf4\u660e",level:2},{value:"\u4ee3\u7801\u6f14\u793a",id:"\u4ee3\u7801\u6f14\u793a",level:2},{value:"Hook \u652f\u6301\u5ea6",id:"hook-\u652f\u6301\u5ea6",level:2}],m={toc:k},g="wrapper";function h(t){var{components:e}=t,n=p(t,["components"]);return(0,a.kt)(g,l(function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),a.forEach((function(e){i(t,e,n[e])}))}return t}({},m,n),{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"useloading"},"useLoading"),(0,a.kt)("p",null,"\u663e\u793a\u6216\u9690\u85cf\u52a0\u8f7d\u63d0\u793a\u6846"),(0,a.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,a.kt)("p",null,"\u5f53\u9700\u8981\u4f7f\u7528\u52a0\u8f7d\u63d0\u793a\u6846"),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const { show, hide } = useLoading(initialOption);\n")),(0,a.kt)("h2",{id:"\u53c2\u6570\u8bf4\u660e"},"\u53c2\u6570\u8bf4\u660e"),(0,a.kt)("h3",{id:"initialoption-partialloadingoption"},(0,a.kt)("inlineCode",{parentName:"h3"},"initialOption: PartialLoadingOption")),(0,a.kt)("p",null,"\u521d\u59cb\u63d0\u793a\u6846\u914d\u7f6e(\u82e5\u6307\u5b9a\u540e\u9762\u53ef\u4e0e\u65b0\u7684\u914d\u7f6e\u5408\u5e76)"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"title"),(0,a.kt)("td",{parentName:"tr",align:null},"\u63d0\u793a\u7684\u5185\u5bb9"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"mask"),(0,a.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u663e\u793a\u900f\u660e\u8499\u5c42\uff0c\u9632\u6b62\u89e6\u6478\u7a7f\u900f"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},"-")))),(0,a.kt)("h2",{id:"\u8fd4\u56de\u503c\u8bf4\u660e"},"\u8fd4\u56de\u503c\u8bf4\u660e"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u8fd4\u56de\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"show"),(0,a.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u52a0\u8f7d\u63d0\u793a\u6846"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"PromiseOptionalAction<TaroGeneral.CallbackResult, PartialLoadingOption>"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"hide"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9690\u85cf\u63d0\u793a\u6846"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"PromiseWithoutOptionAction"))))),(0,a.kt)("h2",{id:"\u4ee3\u7801\u6f14\u793a"},"\u4ee3\u7801\u6f14\u793a"),(0,a.kt)(r.ZP,{VueTab:(0,a.kt)(o.Z,{language:"html",title:"feedback/useLoading/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin-vue/src/pages/feedback/useLoading/index.vue",url:"https://innocces.github.io/taro-hooks/vue/pages/feedback/useLoading/index",mdxType:"CodeDisplay"},'<template>\n  <demo-content>\n    <nut-button shape="square" type="primary" class="gap" block @click="show()"\n      >\u5c55\u793a\u5e26\u521d\u59cb\u914d\u7f6e\u7684Loading</nut-button\n    >\n    <nut-button\n      shape="square"\n      type="primary"\n      class="gap"\n      block\n      @click="handleChangeOption()"\n      >\u5c55\u793a\u65b0\u914d\u7f6e\u7684Loading</nut-button\n    >\n    <nut-button shape="square" type="primary" block @click="hide()"\n      >\u9690\u85cf\u65b0\u914d\u7f6e\u7684Loading</nut-button\n    >\n  </demo-content>\n</template>\n\n<script setup lang="ts">\nimport { useLoading } from \'taro-hooks\';\n\nconst { show, hide } = useLoading({ title: \'initial title\' });\n\nconst handleChangeOption = () => {\n  show({\n    title: \'\u70b9\u51fb\u9690\u85cf\u6309\u94ae\u8fdb\u884c\u9690\u85cf\',\n  });\n};\n<\/script>\n'),ReactTab:(0,a.kt)(o.Z,{language:"tsx",title:"feedback/useLoading/index",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin/src/pages/feedback/useLoading/index.tsx",url:"https://innocces.github.io/taro-hooks/react/pages/feedback/useLoading/index",mdxType:"CodeDisplay"},'import React from \'react\';\nimport { useLoading } from \'taro-hooks\';\nimport DemoContent from \'@src/components/DemoContent\';\nimport { Button } from \'@taroify/core\';\n\nexport default () => {\n  const { show, hide } = useLoading({ title: \'initial title\' });\n\n  const handleChangeOption = () => {\n    show({\n      title: \'\u70b9\u51fb\u9690\u85cf\u6309\u94ae\u8fdb\u884c\u9690\u85cf\',\n    });\n  };\n\n  return (\n    <DemoContent>\n      <Button\n        block\n        color="primary"\n        className="gap"\n        onClick={() => show()}\n        shape="square"\n      >\n        \u5c55\u793a\u5e26\u521d\u59cb\u914d\u7f6e\u7684Loading\n      </Button>\n      <Button\n        block\n        color="primary"\n        className="gap"\n        onClick={handleChangeOption}\n        shape="square"\n      >\n        \u5c55\u793a\u65b0\u914d\u7f6e\u7684Loading\n      </Button>\n      <Button\n        block\n        color="primary"\n        className="gap"\n        onClick={hide}\n        shape="square"\n      >\n        \u9690\u85cf\u65b0\u914d\u7f6e\u7684Loading\n      </Button>\n    </DemoContent>\n  );\n};\n'),mdxType:"CombineTabs"}),(0,a.kt)("h2",{id:"hook-\u652f\u6301\u5ea6"},"Hook \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"ReactNative"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}h.isMDXComponent=!0}}]);