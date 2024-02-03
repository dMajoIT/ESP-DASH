"use strict";(self.webpackChunkesp_dash_docs=self.webpackChunkesp_dash_docs||[]).push([[4424],{5788:(e,t,r)=>{r.d(t,{Iu:()=>c,yg:()=>m});var n=r(1504);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=o,m=p["".concat(s,".").concat(d)]||p[d]||f[d]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},588:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(5072),o=(r(1504),r(5788));const a={title:"Custom Title",sidebar_label:"Custom Title (Pro)",sidebar_position:3},i=void 0,l={unversionedId:"features/title",id:"version-v4.x.x/features/title",title:"Custom Title",description:"This is an exclusive feature of DASH Pro. Check it out here.",source:"@site/versioned_docs/version-v4.x.x/features/title.md",sourceDirName:"features",slug:"/features/title",permalink:"/features/title",draft:!1,tags:[],version:"v4.x.x",sidebarPosition:3,frontMatter:{title:"Custom Title",sidebar_label:"Custom Title (Pro)",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Toggle Animation (Pro)",permalink:"/features/chartanimations"},next:{title:"Custom Logo (Pro)",permalink:"/features/custom-logo"}},s={},u=[{value:"Example:",id:"example",level:4}],c={toc:u},p="wrapper";function f(e){let{components:t,...r}=e;return(0,o.yg)(p,(0,n.c)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("admonition",{title:"Pro Feature",type:"danger"},(0,o.yg)("p",{parentName:"admonition"},"This is an exclusive feature of DASH Pro. Check it out ",(0,o.yg)("a",{parentName:"p",href:"https://espdash.pro"},"here"),".")),(0,o.yg)("br",null),(0,o.yg)("img",{src:"/img/v4/custom-title.png",width:"500px",alt:"Energy Card Preview"}),(0,o.yg)("br",null),(0,o.yg)("br",null),(0,o.yg)("a",{href:"https://espdash.pro/",target:"_blank"},"ESP-DASH ",(0,o.yg)("span",{style:{color:"rgb(245, 75, 66)"}},"Pro"))," provides you with a ",(0,o.yg)("code",null,"setTitle")," function in the main ESPDash class. You can use this function to change the default title of your dashboard.",(0,o.yg)("h4",{id:"example"},"Example:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-cpp"},'dashboard.setTitle("New Dashboard XYZ");\n')))}f.isMDXComponent=!0}}]);