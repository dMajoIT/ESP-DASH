"use strict";(self.webpackChunkesp_dash_docs=self.webpackChunkesp_dash_docs||[]).push([[4864],{5788:(e,r,a)=>{a.d(r,{Iu:()=>u,yg:()=>g});var t=a(1504);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function i(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?i(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function o(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=t.createContext({}),p=function(e){var r=t.useContext(s),a=r;return e&&(a="function"==typeof e?e(r):l(l({},r),e)),a},u=function(e){var r=p(e.components);return t.createElement(s.Provider,{value:r},e.children)},y="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),y=p(a),d=n,g=y["".concat(s,".").concat(d)]||y[d]||c[d]||i;return a?t.createElement(g,l(l({ref:r},u),{},{components:a})):t.createElement(g,l({ref:r},u))}));function g(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o[y]="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9608:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var t=a(5072),n=(a(1504),a(5788));const i={title:"Line Chart",sidebar_label:"Line (Pro)",sidebar_position:2},l=void 0,o={unversionedId:"charts/line",id:"charts/line",title:"Line Chart",description:"This is an exclusive feature of DASH Pro. Check it out here.",source:"@site/docs/charts/line.md",sourceDirName:"charts",slug:"/charts/line",permalink:"/next/charts/line",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Line Chart",sidebar_label:"Line (Pro)",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Bar",permalink:"/next/charts/bar"},next:{title:"Area (Pro)",permalink:"/next/charts/area"}},s={},p=[{value:"Preview:",id:"preview",level:4},{value:"Type:",id:"type",level:4},{value:"Valid Data Types for X-Axis:",id:"valid-data-types-for-x-axis",level:4},{value:"Valid Data Types for Y-Axis:",id:"valid-data-types-for-y-axis",level:4},{value:"Initializer:",id:"initializer",level:4},{value:"Updaters:",id:"updaters",level:4},{value:"For X-Axis:",id:"for-x-axis",level:5},{value:"For Y-Axis:",id:"for-y-axis",level:5}],u={toc:p},y="wrapper";function c(e){let{components:r,...a}=e;return(0,n.yg)(y,(0,t.c)({},u,a,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("admonition",{title:"Pro Feature",type:"danger"},(0,n.yg)("p",{parentName:"admonition"},"This is an exclusive feature of DASH Pro. Check it out ",(0,n.yg)("a",{parentName:"p",href:"https://espdash.pro"},"here"),".")),(0,n.yg)("h4",{id:"preview"},"Preview:"),(0,n.yg)("img",{className:"card-preview",src:"/img/v4/line-chart.png",width:"500px",alt:"Preview"}),(0,n.yg)("br",null),(0,n.yg)("br",null),(0,n.yg)("br",null),(0,n.yg)("h4",{id:"type"},"Type:"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"LINE_CHART")),(0,n.yg)("br",null),(0,n.yg)("h4",{id:"valid-data-types-for-x-axis"},"Valid Data Types for X-Axis:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"int")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"float")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"String")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"const char*"))),(0,n.yg)("br",null),(0,n.yg)("h4",{id:"valid-data-types-for-y-axis"},"Valid Data Types for Y-Axis:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"int")),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"float"))),(0,n.yg)("br",null),(0,n.yg)("h4",{id:"initializer"},"Initializer:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-cpp"},'/* \n  Line Chart\n  Valid Arguments: (ESPDash dashboard, Card Type, const char* name )\n*/\nChart chart1(&dashboard, LINE_CHART, "Chart Name");\n')),(0,n.yg)("br",null),(0,n.yg)("h4",{id:"updaters"},"Updaters:"),(0,n.yg)("h5",{id:"for-x-axis"},"For X-Axis:"),(0,n.yg)("p",null,"X-Axis updater uses ",(0,n.yg)("inlineCode",{parentName:"p"},"updateX")," function."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-cpp"},'/*\n  Data for X Axis of our Chart\n  This array can be of: `int` / `float` or `String`  \n\n  Note: this array should be kept in global scope. i.e. it should never be deleted from memory.\n*/\nString XAxis[] = {"Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"};\n\n/*\n  Update Function for Chart is as follows:\n  --------\n  (int array[], size_t array_size)\n  or\n  (float array[], size_t array_size)\n  or\n  (String array[], size_t array_size)\n  or\n  (const char* array[], size_t array_size)\n*/\nchart1.updateX(XAxis, 7);\n')),(0,n.yg)("h5",{id:"for-y-axis"},"For Y-Axis:"),(0,n.yg)("p",null,"Y-Axis updater uses ",(0,n.yg)("inlineCode",{parentName:"p"},"updateY")," function."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-cpp"},"/*\n  Data for Y Axis of our Chart\n  This array can be of: `int` or `float`\n    \n  Note: this array should be kept in global scope. i.e. it should never be deleted from memory.\n*/\nint YAxis[] = {0, 0, 0, 0, 0, 0, 0};\n\n/*\n  Update Function for Chart is as follows:\n  --------\n  (int array[], size_t array_size)\n  or \n  (float array[], size_t array_size)\n*/\nchart1.updateY(YAxis, 7);\n")))}c.isMDXComponent=!0}}]);