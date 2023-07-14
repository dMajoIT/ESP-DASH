"use strict";(self.webpackChunkesp_dash_docs=self.webpackChunkesp_dash_docs||[]).push([[7457],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(r),y=n,m=d["".concat(p,".").concat(y)]||d[y]||u[y]||l;return r?a.createElement(m,i(i({ref:t},c),{},{components:r})):a.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=y;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}y.displayName="MDXCreateElement"},5772:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const l={title:"Energy Card",sidebar_label:"Energy (Pro)",sidebar_position:4},i=void 0,o={unversionedId:"cards/energy",id:"cards/energy",title:"Energy Card",description:"This feature is available in DASH Pro only.",source:"@site/docs/cards/energy.md",sourceDirName:"cards",slug:"/cards/energy",permalink:"/next/cards/energy",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Energy Card",sidebar_label:"Energy (Pro)",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Air (Pro)",permalink:"/next/cards/air"},next:{title:"Progress",permalink:"/next/cards/progress"}},p={},s=[{value:"Preview:",id:"preview",level:4},{value:"Type:",id:"type",level:4},{value:"Valid Data Types:",id:"valid-data-types",level:4},{value:"Initializer:",id:"initializer",level:4},{value:"Updaters:",id:"updaters",level:4}],c={toc:s},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("div",{className:"pro-label"},(0,n.kt)("i",null,(0,n.kt)("h4",{style:{fontWeight:"500",marginBottom:5}},"This feature is available in ",(0,n.kt)("a",{target:"_blank",style:{color:"red"},href:"https://espdash.pro"},"DASH Pro")," only."))),(0,n.kt)("h4",{id:"preview"},"Preview:"),(0,n.kt)("img",{class:"card-preview",src:"/img/v4/energy-card.png",width:"280px",alt:"Energy Card Preview"}),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("p",null,"This card adds a distinctive energy/power icon, and just like generic card you can add a symbol which will be appended to your data. This card can be used to show something related to power consumption and usage etc."),(0,n.kt)("br",null),(0,n.kt)("h4",{id:"type"},"Type:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"ENERGY_CARD")),(0,n.kt)("br",null),(0,n.kt)("h4",{id:"valid-data-types"},"Valid Data Types:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"int")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"float")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"String"))),(0,n.kt)("br",null),(0,n.kt)("h4",{id:"initializer"},"Initializer:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},'/* \n  Energy Card\n  Valid Arguments: (ESPDash dashboard, Card Type, const char* name, const char* symbol (optional) )\n*/\nCard card1(&dashboard, ENERGY_CARD, "Power Consumption", "kWh");\n')),(0,n.kt)("br",null),(0,n.kt)("h4",{id:"updaters"},"Updaters:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"card1.update(int value);\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"card1.update(float value);\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"card1.update(String value);\n")),(0,n.kt)("p",null,"Or you can also update the symbol along with the value like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},'card1.update(value, "kWh");\n')),(0,n.kt)("br",null),(0,n.kt)("br",null))}u.isMDXComponent=!0}}]);