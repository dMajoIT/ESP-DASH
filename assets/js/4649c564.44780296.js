"use strict";(self.webpackChunkesp_dash_docs=self.webpackChunkesp_dash_docs||[]).push([[3368],{5788:(e,r,t)=>{t.d(r,{Iu:()=>c,yg:()=>m});var o=t(1504);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=o.createContext({}),p=function(e){var r=o.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=p(e.components);return o.createElement(s.Provider,{value:r},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},d=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=n,m=u["".concat(s,".").concat(d)]||u[d]||y[d]||i;return t?o.createElement(m,a(a({ref:r},c),{},{components:t})):o.createElement(m,a({ref:r},c))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[u]="string"==typeof e?e:n,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7924:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=t(5072),n=(t(1504),t(5788));const i={title:"Brotli Compression",sidebar_label:"Brotli Compression (Pro)",sidebar_position:6},a=void 0,l={unversionedId:"features/brotli-compression",id:"version-v4.x.x/features/brotli-compression",title:"Brotli Compression",description:"This feature is available in DASH Pro only.",source:"@site/versioned_docs/version-v4.x.x/features/brotli-compression.md",sourceDirName:"features",slug:"/features/brotli-compression",permalink:"/features/brotli-compression",draft:!1,tags:[],version:"v4.x.x",sidebarPosition:6,frontMatter:{title:"Brotli Compression",sidebar_label:"Brotli Compression (Pro)",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Custom Card Size (Pro)",permalink:"/features/sizing"},next:{title:"Migration Guide",permalink:"/migrate"}},s={},p=[{value:"How to enable:",id:"how-to-enable",level:4}],c={toc:p},u="wrapper";function y(e){let{components:r,...t}=e;return(0,n.yg)(u,(0,o.c)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("div",{className:"pro-label"},(0,n.yg)("i",null,(0,n.yg)("h4",{style:{fontWeight:"500",marginBottom:5}},"This feature is available in ",(0,n.yg)("a",{target:"_blank",style:{color:"red"},href:"https://espdash.pro"},"DASH Pro")," only."))),(0,n.yg)("br",null),(0,n.yg)("img",{className:"card-preview",src:"/img/v4/brotli-compression.png",width:"280px",alt:"Preview"}),(0,n.yg)("br",null),(0,n.yg)("br",null),(0,n.yg)("p",null,"With ESP-DASH Pro v4.3.0 or more, there is an option to enable Brotli compression to further reduce the size of webpage (dashboard) and provide you more space for your code. We've noticed 40% extra reduction in size over gzip compression (default)."),(0,n.yg)("p",null,"Please note that Brotli compression is only supported by Safari browser with unencrpyted HTTP protocol. Due to constraints set by other browsers ( Chrome, Edge, Firefox etc. ) you need to use HTTPS for brotli compression to work properly."),(0,n.yg)("p",null,(0,n.yg)("em",{parentName:"p"},"Note: Broti compression is disabled by default. It's up to user to enable brotli if the above conditions are fine for your use-case.")),(0,n.yg)("h4",{id:"how-to-enable"},"How to enable:"),(0,n.yg)("p",null,"You can switch to brotli compression by setting ",(0,n.yg)("inlineCode",{parentName:"p"},"DASH_USE_BROTLI_COMPRESSION")," to ",(0,n.yg)("inlineCode",{parentName:"p"},"1")," in ",(0,n.yg)("inlineCode",{parentName:"p"},"dash_webpage.h"),"."),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Open ",(0,n.yg)("inlineCode",{parentName:"li"},"dash_webpage.h")," in src directory of ESP-DASH Pro library."),(0,n.yg)("li",{parentName:"ol"},"Locate ",(0,n.yg)("inlineCode",{parentName:"li"},"DASH_USE_BROTLI_COMPRESSION")),(0,n.yg)("li",{parentName:"ol"},"Set it to ",(0,n.yg)("inlineCode",{parentName:"li"},"1")),(0,n.yg)("li",{parentName:"ol"},"That's it. Save, compile and upload again to your microcontroller.")))}y.isMDXComponent=!0}}]);