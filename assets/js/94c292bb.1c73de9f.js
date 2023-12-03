"use strict";(self.webpackChunkesp_dash_docs=self.webpackChunkesp_dash_docs||[]).push([[2326],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,b=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return r?o.createElement(b,a(a({ref:t},c),{},{components:r})):o.createElement(b,a({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},671:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=r(7462),n=(r(7294),r(3905));const i={title:"Brotli Compression",sidebar_label:"Brotli Compression (Pro)",sidebar_position:6},a=void 0,l={unversionedId:"features/brotli-compression",id:"features/brotli-compression",title:"Brotli Compression",description:"This feature is available in DASH Pro only.",source:"@site/docs/features/brotli-compression.md",sourceDirName:"features",slug:"/features/brotli-compression",permalink:"/next/features/brotli-compression",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Brotli Compression",sidebar_label:"Brotli Compression (Pro)",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Custom Card Size (Pro)",permalink:"/next/features/sizing"},next:{title:"Migration Guide",permalink:"/next/migrate"}},s={},p=[{value:"How to enable:",id:"how-to-enable",level:4}],c={toc:p},u="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("div",{className:"pro-label"},(0,n.kt)("i",null,(0,n.kt)("h4",{style:{fontWeight:"500",marginBottom:5}},"This feature is available in ",(0,n.kt)("a",{target:"_blank",style:{color:"red"},href:"https://espdash.pro"},"DASH Pro")," only."))),(0,n.kt)("br",null),(0,n.kt)("img",{className:"card-preview",src:"/img/v4/brotli-compression.png",width:"280px",alt:"Preview"}),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("p",null,"With ESP-DASH Pro v4.3.0 or more, there is an option to enable Brotli compression to further reduce the size of webpage (dashboard) and provide you more space for your code. We've noticed 40% extra reduction in size over gzip compression (default)."),(0,n.kt)("p",null,"The drawback ",(0,n.kt)("em",{parentName:"p"},"might be")," that brotli is not supported by legacy browsers; If you know for sure that you will be using ESP-DASH on the latest browsers, then don't think twice on enabling brotli compression.  "),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Note: Broti compression is disabled by default. You will have to manually edit a library file and enable it.")),(0,n.kt)("h4",{id:"how-to-enable"},"How to enable:"),(0,n.kt)("p",null,"You can switch to brotli compression by setting ",(0,n.kt)("inlineCode",{parentName:"p"},"DASH_USE_BROTLI_COMPRESSION")," to ",(0,n.kt)("inlineCode",{parentName:"p"},"1")," in ",(0,n.kt)("inlineCode",{parentName:"p"},"dash_webpage.h"),"."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Open ",(0,n.kt)("inlineCode",{parentName:"li"},"dash_webpage.h")," in src directory of ESP-DASH Pro library."),(0,n.kt)("li",{parentName:"ol"},"Locate ",(0,n.kt)("inlineCode",{parentName:"li"},"DASH_USE_BROTLI_COMPRESSION")),(0,n.kt)("li",{parentName:"ol"},"Set it to ",(0,n.kt)("inlineCode",{parentName:"li"},"1")),(0,n.kt)("li",{parentName:"ol"},"That's it. Save, compile and upload again to your microcontroller.")))}m.isMDXComponent=!0}}]);