"use strict";(self.webpackChunk_taro_hooks_website=self.webpackChunk_taro_hooks_website||[]).push([[9817],{9611:(e,t,n)=>{n.d(t,{Z:()=>O});var r=n(79),a=n(9841),i=n(4733),c=n(1296),o=n(3082),l=n(3378),s=n(2113),m=n(3773);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){return r.createElement("svg",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){u(e,t,n[t])}))}return e}({viewBox:"0 0 24 24"},e),r.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}))}const b={breadcrumbHomeIcon:"breadcrumbHomeIcon_OHdD"};function p(){const e=(0,m.Z)("/");return r.createElement("li",{className:"breadcrumbs__item"},r.createElement(l.Z,{"aria-label":(0,s.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e},r.createElement(d,{className:b.breadcrumbHomeIcon})))}const f={breadcrumbsContainer:"breadcrumbsContainer_i8xS"};function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function v({children:e,href:t,isLast:n}){const a="breadcrumbs__link";return n?r.createElement("span",{className:a,itemProp:"name"},e):t?r.createElement(l.Z,{className:a,href:t,itemProp:"item"},r.createElement("span",{itemProp:"name"},e)):r.createElement("span",{className:a},e)}function y({children:e,active:t,index:n,addMicrodata:i}){return r.createElement("li",g(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){h(e,t,n[t])}))}return e}({},i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"}),{className:(0,a.Z)("breadcrumbs__item",{"breadcrumbs__item--active":t})}),e,r.createElement("meta",{itemProp:"position",content:String(n+1)}))}function O(){const e=(0,c.s1)(),t=(0,o.Ns)();return e?r.createElement("nav",{className:(0,a.Z)(i.k.docs.docBreadcrumbs,f.breadcrumbsContainer),"aria-label":(0,s.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"})},r.createElement("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList"},t&&r.createElement(p,null),e.map(((t,n)=>{const a=n===e.length-1;return r.createElement(y,{key:n,active:a,index:n,addMicrodata:!!t.href},r.createElement(v,{href:t.href,isLast:a},t.label))})))):null}},9348:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(79),a=n(9841),i=n(1296),c=n(3378),o=n(7604),l=n(2113);const s={cardContainer:"cardContainer_S24N",cardTitle:"cardTitle_kI7F",cardDescription:"cardDescription_MrA1"};function m({href:e,children:t}){return r.createElement(c.Z,{href:e,className:(0,a.Z)("card padding--lg",s.cardContainer)},t)}function u({href:e,icon:t,title:n,description:i}){return r.createElement(m,{href:e},r.createElement("h2",{className:(0,a.Z)("text--truncate",s.cardTitle),title:n},t," ",n),i&&r.createElement("p",{className:(0,a.Z)("text--truncate",s.cardDescription),title:i},i))}function d({item:e}){const t=(0,i.Wl)(e);return t?r.createElement(u,{href:t,icon:"\ud83d\uddc3\ufe0f",title:e.label,description:null!==(n=e.description)&&void 0!==n?n:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:e.items.length})}):null;var n}function b({item:e}){const t=(0,o.Z)(e.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17";var n;const a=(0,i.xz)(null!==(n=e.docId)&&void 0!==n?n:void 0);var c;return r.createElement(u,{href:e.href,icon:t,title:e.label,description:null!==(c=e.description)&&void 0!==c?c:null==a?void 0:a.description})}function p({item:e}){switch(e.type){case"link":return r.createElement(b,{item:e});case"category":return r.createElement(d,{item:e});default:throw new Error(`unknown item type ${JSON.stringify(e)}`)}}function f({className:e}){const t=(0,i.jA)();return r.createElement(h,{items:t.items,className:e})}function h(e){const{items:t,className:n}=e;if(!t)return r.createElement(f,e);const c=(0,i.MN)(t);return r.createElement("section",{className:(0,a.Z)("row",n)},c.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(p,{item:e})))))}},1072:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var r=n(79),a=n(7121),i=n(1296),c=n(3773),o=n(9348),l=n(2355),s=n(6493),m=n(8445),u=n(9611),d=n(4044);const b={generatedIndexPage:"generatedIndexPage_YSDo",list:"list_EUT9",title:"title_LZ6t"};function p({categoryGeneratedIndex:e}){return r.createElement(a.d,{title:e.title,description:e.description,keywords:e.keywords,image:(0,c.Z)(e.image)})}function f({categoryGeneratedIndex:e}){const t=(0,i.jA)();return r.createElement("div",{className:b.generatedIndexPage},r.createElement(s.Z,null),r.createElement(u.Z,null),r.createElement(m.Z,null),r.createElement("header",null,r.createElement(d.Z,{as:"h1",className:b.title},e.title),e.description&&r.createElement("p",null,e.description)),r.createElement("article",{className:"margin-top--lg"},r.createElement(o.Z,{items:t.items,className:b.list})),r.createElement("footer",{className:"margin-top--lg"},r.createElement(l.Z,{previous:e.navigation.previous,next:e.navigation.next})))}function h(e){return r.createElement(r.Fragment,null,r.createElement(p,e),r.createElement(f,e))}},2355:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(79),a=n(2113),i=n(6858);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){c(e,t,n[t])}))}return e}function l(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function s(e){const{previous:t,next:n}=e;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,a.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"})},t&&r.createElement(i.Z,l(o({},t),{subLabel:r.createElement(a.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),n&&r.createElement(i.Z,l(o({},n),{subLabel:r.createElement(a.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:!0})))}},8445:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(79),a=n(9841),i=n(2113),c=n(4733),o=n(5481);function l({className:e}){const t=(0,o.E)();return t.badge?r.createElement("span",{className:(0,a.Z)(e,c.k.docs.docVersionBadge,"badge badge--secondary")},r.createElement(i.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:t.label}},"Version: {versionLabel}")):null}},6493:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(79),a=n(9841),i=n(5875),c=n(3378),o=n(2113),l=n(8911),s=n(4733),m=n(486),u=n(5481);const d={unreleased:function({siteTitle:e,versionMetadata:t}){return r.createElement(o.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:e,versionLabel:r.createElement("b",null,t.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function({siteTitle:e,versionMetadata:t}){return r.createElement(o.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:e,versionLabel:r.createElement("b",null,t.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function b(e){const t=d[e.versionMetadata.banner];return r.createElement(t,e)}function p({versionLabel:e,to:t,onClick:n}){return r.createElement(o.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:e,latestVersionLink:r.createElement("b",null,r.createElement(c.Z,{to:t,onClick:n},r.createElement(o.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function f({className:e,versionMetadata:t}){const{siteConfig:{title:n}}=(0,i.Z)(),{pluginId:c}=(0,l.gA)({failfast:!0}),{savePreferredVersionName:o}=(0,m.J)(c),{latestDocSuggestion:u,latestVersionSuggestion:d}=(0,l.Jo)(c),f=null!=u?u:(h=d).docs.find((e=>e.id===h.mainDocId));var h;return r.createElement("div",{className:(0,a.Z)(e,s.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},r.createElement("div",null,r.createElement(b,{siteTitle:n,versionMetadata:t})),r.createElement("div",{className:"margin-top--md"},r.createElement(p,{versionLabel:d.label,to:f.path,onClick:()=>o(d.name)})))}function h({className:e}){const t=(0,u.E)();return t.banner?r.createElement(f,{className:e,versionMetadata:t}):null}},4044:(e,t,n)=>{n.d(t,{Z:()=>b});var r=n(79),a=n(9841),i=n(2113),c=n(8063),o=n(3378);const l={anchorWithStickyNavbar:"anchorWithStickyNavbar_hj3o",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_D2Vj"};function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){s(e,t,n[t])}))}return e}function u(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function b(e){var{as:t,id:n}=e,s=d(e,["as","id"]);const{navbar:{hideOnScroll:b}}=(0,c.L)();if("h1"===t||!n)return r.createElement(t,u(m({},s),{id:void 0}));const p=(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof s.children?s.children:n});return r.createElement(t,u(m({},s),{className:(0,a.Z)("anchor",b?l.anchorWithHideOnScrollNavbar:l.anchorWithStickyNavbar,s.className),id:n}),s.children,r.createElement(o.Z,{className:"hash-link",to:`#${n}`,"aria-label":p,title:p},"\u200b"))}},6858:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(79),a=n(9841),i=n(3378);function c(e){const{permalink:t,title:n,subLabel:c,isNext:o}=e;return r.createElement(i.Z,{className:(0,a.Z)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},c&&r.createElement("div",{className:"pagination-nav__sublabel"},c),r.createElement("div",{className:"pagination-nav__label"},n))}}}]);