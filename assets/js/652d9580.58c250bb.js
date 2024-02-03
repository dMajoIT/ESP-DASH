"use strict";(self.webpackChunkesp_dash_docs=self.webpackChunkesp_dash_docs||[]).push([[248],{5788:(e,t,r)=>{r.d(t,{Iu:()=>u,yg:()=>m});var a=r(1504);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(r),f=n,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||s;return r?a.createElement(m,i(i({ref:t},u),{},{components:r})):a.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:n,i[1]=o;for(var c=2;c<s;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1920:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=r(5072),n=(r(1504),r(5788));const s={title:"Disable Statistics",sidebar_label:"Disable Statistics",sidebar_position:2},i=void 0,o={unversionedId:"features/disable-stats",id:"features/disable-stats",title:"Disable Statistics",description:"You can disable system statistics by using setting false in ESPDash class constructor.",source:"@site/docs/features/disable-stats.md",sourceDirName:"features",slug:"/features/disable-stats",permalink:"/next/features/disable-stats",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Disable Statistics",sidebar_label:"Disable Statistics",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"User Authentication",permalink:"/next/features/authentication"},next:{title:"Toggle Animation (Pro)",permalink:"/next/features/chartanimations"}},l={},c=[{value:"Example:",id:"example",level:4},{value:"If no custom URI is defined (second parameter):",id:"if-no-custom-uri-is-defined-second-parameter",level:4},{value:"If using a using custom URI (third parameter):",id:"if-using-a-using-custom-uri-third-parameter",level:4}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.yg)(p,(0,a.c)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"You can disable system statistics by using setting ",(0,n.yg)("inlineCode",{parentName:"p"},"false")," in ESPDash class constructor."),(0,n.yg)("h4",{id:"example"},"Example:"),(0,n.yg)("h4",{id:"if-no-custom-uri-is-defined-second-parameter"},"If no custom URI is defined (second parameter):"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-cpp"},"ESPDash dashboard(&server, false);\n")),(0,n.yg)("h4",{id:"if-using-a-using-custom-uri-third-parameter"},"If using a using custom URI (third parameter):"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-cpp"},'ESPDash dashbord(&server, "/", false);\n')),(0,n.yg)("p",null,"If you would like to completely disable and hide the statistics tab from the sidebar, please use the above example and make sure you don't have any ",(0,n.yg)("i",null,"custom statistics"),'. By doing so, it will automatically hide the "statistics" tab from sidebar.'))}d.isMDXComponent=!0}}]);