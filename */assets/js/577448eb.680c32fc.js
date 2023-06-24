"use strict";(self.webpackChunk_taro_hooks_website=self.webpackChunk_taro_hooks_website||[]).push([[2855],{4970:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>h,default:()=>w,frontMatter:()=>m,metadata:()=>g,toc:()=>b});var a=n(79),o=n(8570);const r=function({type:e="success",closeable:t=!1,children:n}){const[o,r]=a.useState(!0);return o?a.createElement("div",{className:`alert alert--${e}`,role:"alert"},t&&a.createElement("button",{"aria-label":"Close",className:"clean-btn close",type:"button",onClick:()=>r(!1)},a.createElement("span",{"aria-hidden":"true"},"\xd7")),n):null};var s=n(4946);const u=()=>a.createElement(s.Z,{language:"html",title:"/useState/index.vue",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin-vue/src/pages/useState/index.vue",url:"https://next-version-taro-hooks.vercel.app/vue/pages/useState/index"},'<template>\n  <block>\n    <demo-content title="1. Counter(number)">\n      <nut-button shape="square" type="primary" block @click="handleClick()">{{\n        count\n      }}</nut-button>\n    </demo-content>\n\n    <demo-content title="2. Text field(string)">\n      <control-input :value="text" @input="handleChange($event)" />\n      <view class="control-input">You typed: {{ text }}</view>\n      <nut-button\n        shape="square"\n        type="danger"\n        block\n        @click="handleChange(\'hello\')"\n        >Reset</nut-button\n      >\n    </demo-content>\n\n    <demo-content title="3. Checkbox is not well. use toggle instand(boolean)">\n      <view class="control-input"\n        >You {{ liked ? \'liked\' : \'not liked\' }} this!</view\n      >\n      <nut-button\n        shape="square"\n        type="primary"\n        block\n        @click="handleChangeLiked()"\n        >click here for like or not like!</nut-button\n      >\n    </demo-content>\n\n    <demo-content title="4. Form(two variables) above all."></demo-content>\n  </block>\n</template>\n\n<script>\nimport { useState } from \'@taro-hooks/core\';\nimport { escapeState } from \'@taro-hooks/shared\';\n\nexport default {\n  setup() {\n    const [count, setCount] = useState(0);\n    function handleClick() {\n      setCount(escapeState(count) + 1);\n    }\n\n    const [text, setText] = useState(\'hello\');\n    function handleChange(val) {\n      setText(val);\n    }\n\n    const [liked, setLiked] = useState(true);\n    function handleChangeLiked() {\n      setLiked(!escapeState(liked));\n    }\n\n    return {\n      handleClick,\n      count,\n      handleChange,\n      text,\n      handleChangeLiked,\n      liked,\n    };\n  },\n};\n<\/script>\n'),i=()=>a.createElement(s.Z,{language:"html",title:"/useEffect/index.vue",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin-vue/src/pages/useEffect/index.vue",url:"https://next-version-taro-hooks.vercel.app/vue/pages/useEffect/index"},"<template>\n  <block>\n    <demo-content title=\"1. without sideEffect\">\n      <nut-button shape=\"square\" type=\"primary\" block @click=\"handleClick()\">{{\n        count\n      }}</nut-button>\n    </demo-content>\n\n    <demo-content title=\"2. with sideEffect\">\n      <view class=\"control-input\">{{\n        isOnline === null ? 'Loading...' : isOnline ? 'Online' : 'Offline'\n      }}</view>\n    </demo-content>\n  </block>\n</template>\n\n<script lang=\"ts\">\nimport { showToast } from '@tarojs/taro';\nimport { useState, useEffect } from '@taro-hooks/core';\nimport { escapeState } from '@taro-hooks/shared';\n\nconst subsQueue = {};\n\nasync function subscribeToFriendStatus(id, statusChange) {\n  if (subsQueue[id]) {\n    console.warn('alert: already subscribed to friend status', id);\n    return;\n  }\n  subsQueue[id] = setInterval(\n    () => statusChange(Boolean(Math.random() > 0.5)),\n    1000,\n  );\n}\n\nasync function unsubscribeFromFriendStatus(id) {\n  if (!subsQueue[id]) {\n    console.warn('alert: not subscribed to friend status', id);\n    return;\n  }\n  clearInterval(subsQueue[id]);\n  delete subsQueue[id];\n}\n\nconst chatAPI = {\n  subscribeToFriendStatus,\n  unsubscribeFromFriendStatus,\n};\n\nexport default {\n  setup() {\n    const [count, setCount] = useState(0);\n    function handleClick() {\n      setCount(escapeState(count) + 1);\n    }\n\n    useEffect(() => {\n      showToast({\n        title: 'You clicked' + escapeState(count) + 'times',\n        duration: 2000,\n      });\n    }, [count]);\n\n    const [isOnline, setIsOnline] = useState(null);\n\n    useEffect(() => {\n      chatAPI.subscribeToFriendStatus(1, setIsOnline);\n\n      return function cleanup() {\n        chatAPI.unsubscribeFromFriendStatus(1);\n      };\n    }, [isOnline]);\n\n    return {\n      handleClick,\n      count,\n      isOnline,\n    };\n  },\n};\n<\/script>\n"),l=()=>a.createElement(s.Z,{language:"html",title:"/useRef/index.vue",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin-vue/src/pages/useRef/index.vue",url:"https://next-version-taro-hooks.vercel.app/vue/pages/useRef/index"},'<template>\n  <block>\n    <demo-content title="1. click counter">\n      <nut-button shape="square" type="primary" block @click="handleClick()"\n        >Click me!</nut-button\n      >\n    </demo-content>\n\n    <demo-content title="1. click counter">\n      <view class="control-input">{{\n        startTime != null && now != null ? (now - startTime) / 1000 : 0\n      }}</view>\n      <nut-row type="flex" :gutter="4">\n        <nut-col\n          ><nut-button shape="square" type="info" block @click="handleStart()"\n            >Start!</nut-button\n          ></nut-col\n        >\n        <nut-col\n          ><nut-button shape="square" type="primary" block @click="handleStop()"\n            >Stop!</nut-button\n          ></nut-col\n        >\n      </nut-row>\n    </demo-content>\n  </block>\n</template>\n\n<script>\nimport { useRef, useState } from \'@taro-hooks/core\';\nimport { showToast } from \'@tarojs/taro\';\n\nexport default {\n  setup() {\n    const ref = useRef(0);\n    function handleClick() {\n      ref.current = ref.current + 1;\n      showToast({\n        title: \'You clicked\' + ref.current + \'times\',\n        duration: 2000,\n      });\n    }\n\n    const [startTime, setStartTime] = useState(null);\n    const [now, setNow] = useState(null);\n    const intervalRef = useRef(null);\n\n    function handleStart() {\n      setStartTime(Date.now());\n      setNow(Date.now());\n\n      clearInterval(intervalRef.current);\n      intervalRef.current = setInterval(() => {\n        setNow(Date.now());\n      }, 10);\n    }\n\n    function handleStop() {\n      clearInterval(intervalRef.current);\n    }\n\n    return {\n      handleClick,\n      handleStart,\n      handleStop,\n      startTime,\n      now,\n    };\n  },\n};\n<\/script>\n'),c=()=>a.createElement(s.Z,{language:"html",title:"/useReducer/index.vue",openUrl:"https://github.com/innocces/taro-hooks/edit/next/examples/taro-hooks-plugin-vue/src/pages/useReducer/index.vue",url:"https://next-version-taro-hooks.vercel.app/vue/pages/useReducer/index"},'<template>\n  <block>\n    <demo-content title="1. Form (Object)">\n      <control-input\n        @input="handleNameChange($event)"\n        :value="formState.name"\n      />\n      <view class="control-input"\n        >Hello, {{ formState.name }}. You are {{ formState.age }}.</view\n      >\n      <nut-button\n        shape="square"\n        type="primary"\n        block\n        @click="handleIncrementAge()"\n        >Increment Age</nut-button\n      >\n    </demo-content>\n\n    <demo-content title="2. Todo list (Array)">\n      <nut-row type="flex" :gutter="4">\n        <nut-col :span="18">\n          <control-input\n            placeholder="Add task"\n            :value="currentAddTask"\n            @input="setCurrentAddTask($event)"\n          />\n        </nut-col>\n        <nut-col :span="6">\n          <nut-button\n            shape="square"\n            type="info"\n            block\n            @click="handleAddTask(currentAddTask)"\n            >Add</nut-button\n          >\n        </nut-col>\n      </nut-row>\n      <ListItem\n        v-for="item in tasks"\n        :key="item.id"\n        :done="item.done"\n        :text="item.text"\n        :id="item.id"\n        @taskChange="handleChangeTask($event)"\n        @taskDelete="handleDeleteTask($event)"\n      />\n    </demo-content>\n\n    <demo-content\n      title="3. Writing concise update logic with Immer. write self"\n    />\n  </block>\n</template>\n\n<script lang="ts">\nimport { useState, useReducer } from \'@taro-hooks/core\';\nimport Item from \'./Item.vue\';\n\n// 1. Form (Object)\nfunction formReducer(state, action) {\n  switch (action.type) {\n    case \'incremented_age\': {\n      return {\n        name: state.name,\n        age: state.age + 1,\n      };\n    }\n    case \'changed_name\': {\n      return {\n        name: action.nextName,\n        age: state.age,\n      };\n    }\n  }\n  throw Error(\'Unknown action: \' + action.type);\n}\n\nconst initialFormState = { name: \'Taylor\', age: 42 };\n\n// 2. Todo list (Array)\nfunction tasksReducer(tasks, action) {\n  switch (action.type) {\n    case \'added\': {\n      return [\n        ...tasks,\n        {\n          id: action.id,\n          text: action.text,\n          done: false,\n        },\n      ];\n    }\n    case \'changed\': {\n      return tasks.map((t) => {\n        if (t.id === action.task.id) {\n          return action.task;\n        } else {\n          return t;\n        }\n      });\n    }\n    case \'deleted\': {\n      return tasks.filter((t) => t.id !== action.id);\n    }\n    default: {\n      throw Error(\'Unknown action: \' + action.type);\n    }\n  }\n}\n\nconst initialTaskState = [\n  { id: 0, text: \'Visit Kafka Museum\', done: true },\n  { id: 1, text: \'Watch a puppet show\', done: false },\n  { id: 2, text: \'Lennon Wall pic\', done: false },\n];\n\nlet nextId = 3;\n\nexport default {\n  components: {\n    ListItem: Item,\n  },\n  setup() {\n    // 1. Form (Object)\n    const [formState, formDispatch] = useReducer(formReducer, initialFormState);\n\n    const handleIncrementAge = () => {\n      formDispatch({ type: \'incremented_age\' });\n    };\n\n    const handleNameChange = (e) => {\n      formDispatch({ type: \'changed_name\', nextName: e });\n    };\n\n    // 2. Todo list (Array)\n    const [tasks, taskDispatch] = useReducer(tasksReducer, initialTaskState);\n    function handleAddTask(text) {\n      taskDispatch({\n        type: \'added\',\n        id: nextId++,\n        text: text,\n      });\n      setCurrentAddTask(null);\n    }\n\n    function handleChangeTask(task) {\n      taskDispatch({\n        type: \'changed\',\n        task: task,\n      });\n    }\n\n    function handleDeleteTask(taskId) {\n      taskDispatch({\n        type: \'deleted\',\n        id: taskId,\n      });\n    }\n    const [currentAddTask, setCurrentAddTask] = useState(null);\n\n    return {\n      formState,\n      handleIncrementAge,\n      handleNameChange,\n      tasks,\n      handleAddTask,\n      handleChangeTask,\n      handleDeleteTask,\n      currentAddTask,\n      setCurrentAddTask,\n    };\n  },\n};\n<\/script>\n');function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function k(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const m={title:"Vue \u6559\u7a0b",sidebar_position:3},h=void 0,g={unversionedId:"quick/vue-useage",id:"quick/vue-useage",title:"Vue \u6559\u7a0b",description:"\u4e0b\u9762\u7684\u5185\u5bb9\u90fd\u5efa\u7acb\u5728\u62e5\u6709\u8db3\u591f\u7684Vue3 \u548c React-hooks \u7684\u57fa\u7840\u4e0a. \u82e5\u8fd8\u5bf9\u524d\u9762\u53d9\u8ff0\u7684\u4e0d\u6e05\u695a\u7684\u53ef\u4ee5\u5148\u4e86\u89e3\u4e00\u4e0b",source:"@site/docs/quick/vue-useage.mdx",sourceDirName:"quick",slug:"/quick/vue-useage",permalink:"/taro-hooks/docs/quick/vue-useage",draft:!1,editUrl:"https://github.com/innocces/taro-hooks/edit/next/website/docs/quick/vue-useage.mdx",tags:[],version:"current",lastUpdatedBy:"innocces",lastUpdatedAt:1687571267,formattedLastUpdatedAt:"2023\u5e746\u670824\u65e5",sidebarPosition:3,frontMatter:{title:"Vue \u6559\u7a0b",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"React \u6559\u7a0b",permalink:"/taro-hooks/docs/quick/react-useage"},next:{title:"\u5e38\u89c1\u95ee\u9898",permalink:"/taro-hooks/docs/quick/faq"}},f={},b=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u5b89\u88c5\u63d2\u4ef6",id:"\u5b89\u88c5\u63d2\u4ef6",level:3},{value:"\u9879\u76ee\u914d\u7f6e",id:"\u9879\u76ee\u914d\u7f6e",level:3},{value:"<strong>Hooks</strong>",id:"hooks",level:2},{value:"<strong>useState</strong>",id:"usestate",level:3},{value:"<strong>useEffect</strong>",id:"useeffect",level:3},{value:"<strong>useRef</strong>",id:"useref",level:3},{value:"<strong>useReducer</strong>",id:"usereducer",level:3},{value:"<strong>useCallback</strong>",id:"usecallback",level:3},{value:"<strong>useMemo</strong>",id:"usememo",level:3},{value:"<strong>useLayoutEffect</strong>",id:"uselayouteffect",level:3},{value:"<strong>useContext</strong>",id:"usecontext",level:3}],v=(x="UseContext",function(e){return console.warn("Component "+x+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var x;const N={toc:b},y="wrapper";function w(e){var{components:t}=e,n=k(e,["components"]);return(0,o.kt)(y,d(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},a=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),a.forEach((function(t){p(e,t,n[t])}))}return e}({},N,n),{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"\u4e0b\u9762\u7684\u5185\u5bb9\u90fd\u5efa\u7acb\u5728\u62e5\u6709\u8db3\u591f\u7684",(0,o.kt)("strong",{parentName:"p"},"Vue3")," \u548c ",(0,o.kt)("strong",{parentName:"p"},"React-hooks")," \u7684\u57fa\u7840\u4e0a. \u82e5\u8fd8\u5bf9\u524d\u9762\u53d9\u8ff0\u7684\u4e0d\u6e05\u695a\u7684\u53ef\u4ee5\u5148\u4e86\u89e3\u4e00\u4e0b")),(0,o.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"taro-hooks")," \u652f\u6301 ",(0,o.kt)("strong",{parentName:"p"},"Vue3")," \u7684\u65b9\u5f0f\u4e3a\u63d2\u4ef6\u5316. \u4f7f\u7528\u63d2\u4ef6\u6a21\u62df\u5bf9\u5e94\u7684\u5e38\u7528 ",(0,o.kt)("strong",{parentName:"p"},"React-hooks"),". \u5f53\u7136, \u5982\u679c\u4f60\u4e0d\u60f3\u4f7f\u7528 ",(0,o.kt)("strong",{parentName:"p"},"taro-hooks"),". \u4f46\u60f3\u8981\u5728 ",(0,o.kt)("strong",{parentName:"p"},"Vue3")," \u4e2d\u4f53\u9a8c ",(0,o.kt)("strong",{parentName:"p"},"React-hooks"),". \u53ef\u4ee5\u4f7f\u7528\u4e0b\u9762\u7684\u63d2\u4ef6."),(0,o.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,o.kt)("h3",{id:"\u5b89\u88c5\u63d2\u4ef6"},"\u5b89\u88c5\u63d2\u4ef6"),(0,o.kt)("p",null,"\u9996\u5148\u9700\u8981\u4e0b\u8f7d ",(0,o.kt)("strong",{parentName:"p"},"@taro-hooks/plugin-vue")," \u63d2\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @taro-hooks/plugin-vue\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5efa\u8bae\u60a8\u540c\u65f6\u4e0b\u8f7d ",(0,o.kt)("strong",{parentName:"p"},"@taro-hooks/shared")," \u63d2\u4ef6\u7528\u4e8e\u8f6c\u6362\u4e00\u4e9b\u7b49\u540c\u72b6\u6001\u7684 ",(0,o.kt)("strong",{parentName:"p"},"state"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @taro-hooks/shared\n")),(0,o.kt)("h3",{id:"\u9879\u76ee\u914d\u7f6e"},"\u9879\u76ee\u914d\u7f6e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="config/index.js"',title:'"config/index.js"'},"const config = {\n  // ...\n  plugins: ['@taro-hooks/plugin-vue'],\n  // ...\n};\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f: \u63d2\u4ef6\u5185\u90e8\u4f1a\u68c0\u6d4b\u5f53\u524d\u9879\u76ee\u7684\u6846\u67b6\u548c\u4f9d\u8d56\u72b6\u6001, \u82e5\u60a8\u7684\u9879\u76ee\u4e0d\u662f ",(0,o.kt)("strong",{parentName:"p"},"Vue3")," \u7684\u9879\u76ee, \u90a3\u4e48\u5f88\u53ef\u80fd\u65e0\u6cd5\u6b63\u5e38\u542f\u52a8.")),(0,o.kt)("h2",{id:"hooks"},(0,o.kt)("strong",{parentName:"h2"},"Hooks")),(0,o.kt)("p",null,"\u6240\u6709\u7684 ",(0,o.kt)("strong",{parentName:"p"},"Hooks")," \u5747\u5728\u8fd0\u884c\u65f6\u6ce8\u5165\u5230\u4e86 ",(0,o.kt)("strong",{parentName:"p"},"@taro-hooks/core")," \u5185\u90e8, \u5e76\u4f7f\u7528\u4e86\u548c ",(0,o.kt)("strong",{parentName:"p"},"React")," \u4e2d\u4e00\u81f4\u7684\u540d\u79f0."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="example/index.vue" showLineNumbers',title:'"example/index.vue"',showLineNumbers:!0},"<script>\n  import {\n    useState,\n    useEffect,\n    useRef,\n    useReducer,\n    useCallback,\n    useMemo,\n    useLayoutEffect,\n    useContext,\n    useWatchEffect,\n    createContext,\n  } from '@taro-hooks/core';\n\n  export default {\n    setup() {\n      // use hooks in setup\n    },\n  };\n<\/script>\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u4e0b\u9762\u7684 ",(0,o.kt)("strong",{parentName:"p"},"Hook")," \u4f7f\u7528\u793a\u4f8b\u5c3d\u53ef\u80fd\u7684\u548c ",(0,o.kt)("strong",{parentName:"p"},"React")," \u6559\u7a0b\u4fdd\u6301\u4e86\u4e00\u81f4. \u65b9\u4fbf ",(0,o.kt)("strong",{parentName:"p"},"React")," \u5f00\u53d1\u7684\u540c\u5b66\u9605\u8bfb")),(0,o.kt)("h3",{id:"usestate"},(0,o.kt)("strong",{parentName:"h3"},"useState")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"useState")," \u5e2e\u52a9\u60a8\u5feb\u901f\u521b\u5efa\u4e00\u4e2a\u54cd\u5e94\u5f0f\u6570\u636e\u548c\u66f4\u6539\u5b83\u7684\u65b9\u6cd5\n\u4f46\u8fd9\u91cc\u9700\u8981\u6ce8\u610f\u7684\u662f, \u5b83\u5185\u90e8\u4f7f\u7528\u7684\u662f ",(0,o.kt)("strong",{parentName:"p"},"Ref"),". \u5728 ",(0,o.kt)("strong",{parentName:"p"},"template")," \u5185\u4f1a\u88ab\u81ea\u52a8\u89e3\u5305. \u4f46\u5728 ",(0,o.kt)("strong",{parentName:"p"},"setup")," \u5185\u4f7f\u7528\u4f9d\u7136\u9700\u8981\u663e\u5f0f\u7684\u4f7f\u7528 ",(0,o.kt)("strong",{parentName:"p"},"state.value")," \u6765\u83b7\u53d6\u503c. \u5f53\u7136\u6211\u4eec\u4e5f\u63d0\u4f9b\u4e86\u4e00\u4e2a\u5de5\u5177\u6765\u62b9\u5e73\u5dee\u5f02. \u5728\u4e0b\u9762\u7684\u793a\u4f8b\u4e2d\u6709\u4f53\u73b0"),(0,o.kt)(u,{mdxType:"UseTaroState"}),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"\u6ce8\u610f: ",(0,o.kt)("strong",{parentName:"p"},"useEffect")," \u3001 ",(0,o.kt)("strong",{parentName:"p"},"useWatchEffect")," \u3001 ",(0,o.kt)("strong",{parentName:"p"},"useRef"),"\u3001 ",(0,o.kt)("strong",{parentName:"p"},"useCallback"),"\u3001 ",(0,o.kt)("strong",{parentName:"p"},"useMemo")," \u5185\u90e8\u5747\u4f7f\u7528 ",(0,o.kt)("strong",{parentName:"p"},"watchEffect")," \u6536\u96c6\u4f9d\u8d56\u53d8\u5316. \u5b83\u6ee1\u8db3 ",(0,o.kt)("a",{parentName:"p",href:"https://v3.cn.vuejs.org/guide/reactivity-computed-watchers.html#%E4%B8%8E-watcheffect-%E5%85%B1%E4%BA%AB%E7%9A%84%E8%A1%8C%E4%B8%BA"},(0,o.kt)("strong",{parentName:"a"},"\u4e0ewatch\u5171\u4eab\u7684\u884c\u4e3a")),". \u5e94\u5c3d\u91cf\u907f\u514d\u5728 ",(0,o.kt)("strong",{parentName:"p"},"hooks")," \u5916\u5355\u72ec\u5904\u7406\u4f9d\u8d56\u6e05\u9664")),(0,o.kt)("h3",{id:"useeffect"},(0,o.kt)("strong",{parentName:"h3"},"useEffect")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"useEffect")," \u5e2e\u52a9\u60a8\u7ed9\u51fd\u6570\u7ec4\u4ef6\u589e\u52a0\u64cd\u4f5c\u526f\u4f5c\u7528\u7684\u80fd\u529b. \u5b83\u548c ",(0,o.kt)("strong",{parentName:"p"},"componentDidMount|DidUpdate|WillUnmount")," \u5177\u6709\u76f8\u540c\u7684\u7528\u9014."),(0,o.kt)(i,{mdxType:"UseTaroEffect"}),(0,o.kt)("h3",{id:"useref"},(0,o.kt)("strong",{parentName:"h3"},"useRef")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"useRef")," \u5e2e\u52a9\u60a8\u521b\u5efa\u4e00\u4e2a\u4e0d\u4f1a\u89e6\u53d1\u91cd\u65b0\u6e32\u67d3\u7684\u5f15\u7528. \u5b83\u548c ",(0,o.kt)("strong",{parentName:"p"},"React.createRef")," \u5177\u6709\u76f8\u540c\u7684\u7528\u9014."),(0,o.kt)(l,{mdxType:"UseTaroRef"}),(0,o.kt)(r,{type:"warning",mdxType:"Alert"},"\u6ce8\u610f",(0,o.kt)("strong",null,"useRef"),"\u5185\u90e8\u662f\u9ed8\u8ba4\u4f7f\u7528",(0,o.kt)("strong",null,"reactive"),"\u6765\u751f\u6210. \u82e5\u9700\u8981\u5728\u89c6\u56fe\u5185\u4fdd\u6d3b, \u8bf7\u4e0d\u8981\u89e3\u6784."),(0,o.kt)("h3",{id:"usereducer"},(0,o.kt)("strong",{parentName:"h3"},"useReducer")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"useReducer")," \u5e2e\u52a9\u60a8\u521b\u5efa\u4e00\u4e2a ",(0,o.kt)("strong",{parentName:"p"},"reducer")," (",(0,o.kt)("strong",{parentName:"p"},"eventBus"),") \u5728\u7ec4\u4ef6\u4e2d\u4f7f\u7528."),(0,o.kt)(c,{mdxType:"UseTaroReducer"}),(0,o.kt)("h3",{id:"usecallback"},(0,o.kt)("strong",{parentName:"h3"},"useCallback")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"useCallback")," \u8fd4\u56de\u4e00\u4e2a ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Memoization"},(0,o.kt)("strong",{parentName:"a"},"memoized"))," \u56de\u8c03\u51fd\u6570"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'showLineNumbers title="/useCallback/index.vue"',showLineNumbers:!0,title:'"/useCallback/index.vue"'},"const memoizedCallback = useCallback(\n  () => {\n    doSomething(a, b);\n  },\n  [a, b],\n);\n")),(0,o.kt)("h3",{id:"usememo"},(0,o.kt)("strong",{parentName:"h3"},"useMemo")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"useMemo")," \u8fd4\u56de\u4e00\u4e2a ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Memoization"},(0,o.kt)("strong",{parentName:"a"},"memoized"))," \u56de\u8c03\u51fd\u6570"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'showLineNumbers title="/useMemo/index.vue"',showLineNumbers:!0,title:'"/useMemo/index.vue"'},"const memoizedValue = useMemo(\n  () => computeExpensiveValue(a, b),\n  [a, b]\n);\n")),(0,o.kt)(r,{type:"warning",mdxType:"Alert"},"\u4f60\u53ef\u4ee5\u628a useMemo \u4f5c\u4e3a\u6027\u80fd\u4f18\u5316\u7684\u624b\u6bb5\uff0c\u4f46\u4e0d\u8981\u628a\u5b83\u5f53\u6210\u8bed\u4e49\u4e0a\u7684\u4fdd\u8bc1"),(0,o.kt)("h3",{id:"uselayouteffect"},(0,o.kt)("strong",{parentName:"h3"},"useLayoutEffect")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"useLayoutEffect")," \u51fd\u6570\u7b7e\u540d\u548c ",(0,o.kt)("strong",{parentName:"p"},"useEffect")," \u76f8\u540c. \u4f46\u5b83\u4f1a\u5728\u6240\u6709\u7684 DOM \u53d8\u66f4\u4e4b\u540e\u540c\u6b65\u8c03\u7528 effect\u3002\u53ef\u4ee5\u4f7f\u7528\u5b83\u6765\u8bfb\u53d6 DOM \u5e03\u5c40\u5e76\u540c\u6b65\u89e6\u53d1\u91cd\u6e32\u67d3"),(0,o.kt)(r,{type:"danger",mdxType:"Alert"},"\u8bf7\u5c3d\u53ef\u80fd\u7684\u51cf\u5c11\u4f7f\u7528\u6b64 hook \u7684\u6b21\u6570\uff0c\u56e0\u4e3a\u5b83\u4f1a\u5bfc\u81f4\u989d\u5916\u7684\u6027\u80fd\u5f00\u9500"),(0,o.kt)("h3",{id:"usecontext"},(0,o.kt)("strong",{parentName:"h3"},"useContext")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"useContext")," \u5e2e\u52a9\u60a8\u8bfb\u53d6\u548c\u8ba2\u9605\u7ec4\u4ef6\u7684\u4e0a\u4e0b\u6587."),(0,o.kt)(v,{mdxType:"UseContext"}),(0,o.kt)(r,{type:"danger",mdxType:"Alert"},"\u6ce8\u610f: ",(0,o.kt)("strong",null,"context")," \u5fc5\u987b\u8bbe\u7f6e\u4e3a\u5bf9\u8c61\u7684\u5f62\u5f0f. \u4e3a\u4e86\u8fbe\u5230\u591a\u5c42\u7ee7\u627f\u7684\u76ee\u7684. \u7ee7\u627f\u7684\u52a8\u4f5c\u7531 ",(0,o.kt)("code",null,"createContext")," \u6765\u5b8c\u6210. \u5185\u90e8\u5b9e\u5219\u8d70\u7684\u662f\u6269\u5c55\u5408\u5e76."))}w.isMDXComponent=!0}}]);