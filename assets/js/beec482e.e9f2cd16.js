"use strict";(self.webpackChunkesp_dash_docs=self.webpackChunkesp_dash_docs||[]).push([[864],{5788:(e,t,a)=>{a.d(t,{Iu:()=>p,yg:()=>m});var r=a(1504);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(a),y=n,m=u["".concat(l,".").concat(y)]||u[y]||d[y]||i;return a?r.createElement(m,s(s({ref:t},p),{},{components:a})):r.createElement(m,s({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=y;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:n,s[1]=o;for(var c=2;c<i;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}y.displayName="MDXCreateElement"},6716:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=a(5072),n=(a(1504),a(5788));const i={title:"Statistics",sidebar_label:"Statistics",sidebar_position:8},s=void 0,o={unversionedId:"custom-statistics",id:"custom-statistics",title:"Statistics",description:'ESP-DASH has a dedicated page called "Statistics" on the dashboard which contain key-value pairs of system statistics ( heap, flash usage etc. ) by default. With the launch of ESP-DASH V4, user defined statistics are now also part of the library! You can now add your own statitics to this page. \ud83c\udf89',source:"@site/docs/custom-statistics.md",sourceDirName:".",slug:"/custom-statistics",permalink:"/next/custom-statistics",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Statistics",sidebar_label:"Statistics",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Tabs (Pro)",permalink:"/next/tabs"},next:{title:"Generic",permalink:"/next/cards/generic"}},l={},c=[{value:"Example",id:"example",level:3},{value:"Initializer:",id:"initializer",level:5},{value:"Update Value:",id:"update-value",level:5},{value:"Update both Key &amp; Value:",id:"update-both-key--value",level:5}],p={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,n.yg)(u,(0,r.c)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("img",{src:"/img/v4/statistics.png",alt:"Concept Diagram",width:"940px"}),(0,n.yg)("br",null),(0,n.yg)("br",null),(0,n.yg)("p",null,'ESP-DASH has a dedicated page called "Statistics" on the dashboard which contain key-value pairs of system statistics ( heap, flash usage etc. ) by default. With the launch of ESP-DASH V4, user defined statistics are now also part of the library! You can now add your own statitics to this page. \ud83c\udf89'),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"Note: System statistics can be turned off any time, you may look at ",(0,n.yg)("a",{parentName:"em",href:"/next/features/disable-stats"},"Disable Statistics")," page.")),(0,n.yg)("h3",{id:"example"},"Example"),(0,n.yg)("h5",{id:"initializer"},"Initializer:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-cpp"},'Statistic stat1(&dashboard, "Key", "Value");\n')),(0,n.yg)("h5",{id:"update-value"},"Update Value:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-cpp"},'stat1.set("New Value");\n')),(0,n.yg)("h5",{id:"update-both-key--value"},"Update both Key & Value:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-cpp"},'stat1.set("New Key", "New Value");\n')))}d.isMDXComponent=!0}}]);