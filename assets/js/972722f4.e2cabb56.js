"use strict";(self.webpackChunkesp_dash_docs=self.webpackChunkesp_dash_docs||[]).push([[4242],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>v});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=c(r),m=a,v=s["".concat(p,".").concat(m)]||s[m]||u[m]||o;return r?n.createElement(v,l(l({ref:t},d),{},{components:r})):n.createElement(v,l({ref:t},d))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},365:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={title:"Dropdown Card",sidebar_label:"Dropdown (Pro)",sidebar_position:8},l=void 0,i={unversionedId:"cards/dropdown",id:"cards/dropdown",title:"Dropdown Card",description:"This feature is available in DASH Pro only.",source:"@site/docs/cards/dropdown.md",sourceDirName:"cards",slug:"/cards/dropdown",permalink:"/next/cards/dropdown",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Dropdown Card",sidebar_label:"Dropdown (Pro)",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Joystick (Pro)",permalink:"/next/cards/joystick"},next:{title:"Image (Pro)",permalink:"/next/cards/image"}},p={},c=[{value:"Preview:",id:"preview",level:4},{value:"Type:",id:"type",level:4},{value:"Valid Data Types:",id:"valid-data-types",level:4},{value:"Initializer:",id:"initializer",level:4},{value:"Updaters:",id:"updaters",level:4}],d={toc:c},s="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"pro-label"},(0,a.kt)("i",null,(0,a.kt)("h4",{style:{fontWeight:"500",marginBottom:5}},"This feature is available in ",(0,a.kt)("a",{target:"_blank",style:{color:"red"},href:"https://espdash.pro"},"DASH Pro")," only."))),(0,a.kt)("h4",{id:"preview"},"Preview:"),(0,a.kt)("img",{class:"card-preview",src:"/img/v4/dropdown-card.png",width:"280px",alt:"Preview"}),"\xa0",(0,a.kt)("img",{class:"card-preview",src:"/img/v4/dropdown-card-2.png",width:"280px",alt:"Preview"}),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("p",null,'This card adds a dropdown selectable list on your dashboard. You can pass "," comma separated list as it\'s secondary value with unlimited number of choices.'),(0,a.kt)("br",null),(0,a.kt)("h4",{id:"type"},"Type:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"DROPDOWN_CARD")),(0,a.kt)("br",null),(0,a.kt)("h4",{id:"valid-data-types"},"Valid Data Types:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"String"))),(0,a.kt)("br",null),(0,a.kt)("h4",{id:"initializer"},"Initializer:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'/* \n  Dropdown Card\n  Valid Arguments: (ESPDash dashboard, Card Type, const char* name, const char* choices )\n*/\nCard card1(&dashboard, DROPDOWN_CARD, "Test Dropdown", "Option1,Option2,Option3,Option4");\n')),(0,a.kt)("br",null),(0,a.kt)("h4",{id:"updaters"},"Updaters:"),(0,a.kt)("p",null,"This will change the selected value of our dropdown:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"card1.update(const char* value);\n")),(0,a.kt)("p",null,"Or you can also update the choices along with the value like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// This will change the selected value and update the choices as well\ncard1.update(const char* value, const char* choices);\n")),(0,a.kt)("br",null),(0,a.kt)("br",null))}u.isMDXComponent=!0}}]);