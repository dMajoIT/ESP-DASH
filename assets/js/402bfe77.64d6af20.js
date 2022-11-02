"use strict";(self.webpackChunkesp_dash_docs=self.webpackChunkesp_dash_docs||[]).push([[9805],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(r),f=n,y=d["".concat(s,".").concat(f)]||d[f]||c[f]||i;return r?a.createElement(y,l(l({ref:t},u),{},{components:r})):a.createElement(y,l({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6767:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const i={title:"Area Chart",sidebar_label:"Area (Pro)",sidebar_position:3},l=void 0,o={unversionedId:"charts/area",id:"charts/area",title:"Area Chart",description:"This feature is available in DASH Pro only.",source:"@site/docs/charts/area.md",sourceDirName:"charts",slug:"/charts/area",permalink:"/next/charts/area",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Area Chart",sidebar_label:"Area (Pro)",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Line (Pro)",permalink:"/next/charts/line"},next:{title:"Pie (Pro)",permalink:"/next/charts/pie"}},s={},p=[{value:"Preview:",id:"preview",level:4},{value:"Type:",id:"type",level:4},{value:"Valid Data Types for X-Axis:",id:"valid-data-types-for-x-axis",level:4},{value:"Valid Data Types for Y-Axis:",id:"valid-data-types-for-y-axis",level:4},{value:"Initializer:",id:"initializer",level:4},{value:"Updaters:",id:"updaters",level:4},{value:"For X-Axis:",id:"for-x-axis",level:5},{value:"For Y-Axis:",id:"for-y-axis",level:5}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("div",{className:"pro-label"},(0,n.kt)("i",null,(0,n.kt)("h4",{style:{fontWeight:"500",marginBottom:5}},"This feature is available in ",(0,n.kt)("a",{target:"_blank",style:{color:"red"},href:"https://espdash.pro"},"DASH Pro")," only."))),(0,n.kt)("h4",{id:"preview"},"Preview:"),(0,n.kt)("img",{src:"/img/v4/area-chart.png",width:"500px",alt:"Preview"}),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("h4",{id:"type"},"Type:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"AREA_CHART")),(0,n.kt)("br",null),(0,n.kt)("h4",{id:"valid-data-types-for-x-axis"},"Valid Data Types for X-Axis:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"int")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"float")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"String"))),(0,n.kt)("br",null),(0,n.kt)("h4",{id:"valid-data-types-for-y-axis"},"Valid Data Types for Y-Axis:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"int")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"float"))),(0,n.kt)("br",null),(0,n.kt)("h4",{id:"initializer"},"Initializer:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},'/* \n  Area Chart\n  Valid Arguments: (ESPDash dashboard, Card Type, const char* name )\n*/\nChart chart1(&dashboard, AREA_CHART, "Chart Name");\n')),(0,n.kt)("br",null),(0,n.kt)("h4",{id:"updaters"},"Updaters:"),(0,n.kt)("h5",{id:"for-x-axis"},"For X-Axis:"),(0,n.kt)("p",null,"X-Axis updater uses ",(0,n.kt)("inlineCode",{parentName:"p"},"updateX")," function."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},'/*\n  Data for X Axis of our Chart\n  This array can be of: `int` / `float` or `String`\n*/\nString XAxis[] = {"Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"};\n\n/*\n  Update Function for Chart is as follows:\n  --------\n  (int array[], size_t array_size)\n  or\n  (float array[], size_t array_size)\n  or\n  (String array[], size_t array_size)\n*/\nchart1.updateX(XAxis, 7);\n')),(0,n.kt)("h5",{id:"for-y-axis"},"For Y-Axis:"),(0,n.kt)("p",null,"Y-Axis updater uses ",(0,n.kt)("inlineCode",{parentName:"p"},"updateY")," function."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"/*\n  Data for Y Axis of our Chart\n  This array can be of: `int` or `float`\n*/\nint YAxis[] = {0, 0, 0, 0, 0, 0, 0};\n\n/*\n  Update Function for Chart is as follows:\n  --------\n  (int array[], size_t array_size)\n  or \n  (float array[], size_t array_size)\n*/\nchart1.updateY(YAxis, 7);\n")))}c.isMDXComponent=!0}}]);