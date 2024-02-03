"use strict";(self.webpackChunkesp_dash_docs=self.webpackChunkesp_dash_docs||[]).push([[7760],{5788:(e,t,r)=>{r.d(t,{Iu:()=>p,yg:()=>g});var n=r(1504);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),f=o,g=u["".concat(s,".").concat(f)]||u[f]||d[f]||i;return r?n.createElement(g,a(a({ref:t},p),{},{components:r})):n.createElement(g,a({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2508:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(5072),o=(r(1504),r(5788));const i={title:"Card Indexing",sidebar_label:"Card Indexing (Pro)",sidebar_position:5},a=void 0,l={unversionedId:"features/indexing",id:"version-v4.x.x/features/indexing",title:"Card Indexing",description:"This is an exclusive feature of DASH Pro. Check it out here.",source:"@site/versioned_docs/version-v4.x.x/features/indexing.md",sourceDirName:"features",slug:"/features/indexing",permalink:"/features/indexing",draft:!1,tags:[],version:"v4.x.x",sidebarPosition:5,frontMatter:{title:"Card Indexing",sidebar_label:"Card Indexing (Pro)",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Custom Logo (Pro)",permalink:"/features/custom-logo"},next:{title:"Custom Card Size (Pro)",permalink:"/features/sizing"}},s={},c=[{value:"Example:",id:"example",level:4}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.yg)(u,(0,n.c)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("admonition",{title:"Pro Feature",type:"danger"},(0,o.yg)("p",{parentName:"admonition"},"This is an exclusive feature of DASH Pro. Check it out ",(0,o.yg)("a",{parentName:"p",href:"https://espdash.pro"},"here"),".")),(0,o.yg)("br",null),(0,o.yg)("img",{src:"/img/index.png",width:"300px",alt:"Energy Card Preview"}),(0,o.yg)("br",null),(0,o.yg)("br",null),(0,o.yg)("p",null,"ESP-DASH ",(0,o.yg)("span",{style:{color:"rgb(245, 75, 66)"}},"Pro")," provides you with a ",(0,o.yg)("inlineCode",{parentName:"p"},"setIndex")," function in both cards and charts to modify the position of them on the dashboard. "),(0,o.yg)("h4",{id:"example"},"Example:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-cpp"},"card1.setIndex(0);\n")),(0,o.yg)("p",null,"Indexing works in ascending format. The lowest card index will be placed in the front of the list and the highest index will be put in the end. It allows you to set the layout according to your wish."))}d.isMDXComponent=!0}}]);