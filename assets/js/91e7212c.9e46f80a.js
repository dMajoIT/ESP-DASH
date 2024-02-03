"use strict";(self.webpackChunkesp_dash_docs=self.webpackChunkesp_dash_docs||[]).push([[7244],{5788:(e,r,t)=>{t.d(r,{Iu:()=>c,yg:()=>y});var n=t(1504);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),d=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=d(e.components);return n.createElement(s.Provider,{value:r},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(t),g=o,y=p["".concat(s,".").concat(g)]||p[g]||u[g]||a;return t?n.createElement(y,i(i({ref:r},c),{},{components:t})):n.createElement(y,i({ref:r},c))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=g;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},2484:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=t(5072),o=(t(1504),t(5788));const a={title:"Card Indexing",sidebar_label:"Card Indexing (Pro)",sidebar_position:6},i=void 0,l={unversionedId:"indexing",id:"version-v3.x.x/indexing",title:"Card Indexing",description:"This feature is available in DASH Pro only.",source:"@site/versioned_docs/version-v3.x.x/indexing.md",sourceDirName:".",slug:"/indexing",permalink:"/v3.x.x/indexing",draft:!1,tags:[],version:"v3.x.x",sidebarPosition:6,frontMatter:{title:"Card Indexing",sidebar_label:"Card Indexing (Pro)",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Examples",permalink:"/v3.x.x/more-examples"},next:{title:"Cards",permalink:"/v3.x.x/category/cards"}},s={},d=[{value:"Example:",id:"example",level:4}],c={toc:d},p="wrapper";function u(e){let{components:r,...t}=e;return(0,o.yg)(p,(0,n.c)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("div",{style:{border:"1px solid rgba(255,0,0, 0.03)",padding:20,borderRadius:14,backgroundColor:"rgba(255,0,0, 0.03)",maxWidth:600}},(0,o.yg)("h4",{style:{fontWeight:"500",marginBottom:5}}," This feature is available in ",(0,o.yg)("a",{target:"_blank",style:{color:"red"},href:"https://espdash.pro"},"DASH Pro")," only.")),(0,o.yg)("br",null),(0,o.yg)("img",{src:"/img//index.png",width:"300px",alt:"Energy Card Preview"}),(0,o.yg)("br",null),(0,o.yg)("br",null),(0,o.yg)("p",null,"ESP-DASH ",(0,o.yg)("span",{style:{color:"rgb(245, 75, 66)"}},"Pro")," provides you with a ",(0,o.yg)("inlineCode",{parentName:"p"},"setIndex")," function in both cards and charts to modify the position of them on the dashboard. "),(0,o.yg)("h4",{id:"example"},"Example:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-cpp"},"card1.setIndex(0);\n")),(0,o.yg)("p",null,"Indexing works in ascending format. The lowest card index will be placed in the front of the list and the highest index will be put in the end. It allows you to set the layout according to your wish."))}u.isMDXComponent=!0}}]);