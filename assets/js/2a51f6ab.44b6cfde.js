"use strict";(self.webpackChunkesp_dash_docs=self.webpackChunkesp_dash_docs||[]).push([[4889],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,d=p["".concat(s,".").concat(m)]||p[m]||f[m]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1278:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={title:"Custom Title",sidebar_label:"Custom Title (Pro)",sidebar_position:3},i=void 0,l={unversionedId:"features/title",id:"features/title",title:"Custom Title",description:"This feature is available in DASH Pro only.",source:"@site/docs/features/title.md",sourceDirName:"features",slug:"/features/title",permalink:"/next/features/title",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Custom Title",sidebar_label:"Custom Title (Pro)",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Toggle Animation (Pro)",permalink:"/next/features/chartanimations"},next:{title:"Custom Logo (Pro)",permalink:"/next/features/custom-logo"}},s={},c=[{value:"Example:",id:"example",level:4}],u={toc:c},p="wrapper";function f(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"pro-label"},(0,o.kt)("i",null,(0,o.kt)("h4",{style:{fontWeight:"500",marginBottom:5}},"This feature is available in ",(0,o.kt)("a",{target:"_blank",style:{color:"red"},href:"https://espdash.pro"},"DASH Pro")," only."))),(0,o.kt)("br",null),(0,o.kt)("img",{src:"/img/v4/custom-title.png",width:"500px",alt:"Energy Card Preview"}),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("a",{href:"https://espdash.pro/",target:"_blank"},"ESP-DASH ",(0,o.kt)("span",{style:{color:"rgb(245, 75, 66)"}},"Pro"))," provides you with a ",(0,o.kt)("code",null,"setTitle")," function in the main ESPDash class. You can use this function to change the default title of your dashboard.",(0,o.kt)("h4",{id:"example"},"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'dashboard.setTitle("New Dashboard XYZ");\n')))}f.isMDXComponent=!0}}]);