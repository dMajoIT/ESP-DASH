"use strict";(self.webpackChunkesp_dash_docs=self.webpackChunkesp_dash_docs||[]).push([[9504],{5788:(e,r,a)=>{a.d(r,{Iu:()=>d,yg:()=>g});var n=a(1504);function t(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function l(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?l(Object(a),!0).forEach((function(r){t(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function o(e,r){if(null==e)return{};var a,n,t=function(e,r){if(null==e)return{};var a,n,t={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var p=n.createContext({}),s=function(e){var r=n.useContext(p),a=r;return e&&(a="function"==typeof e?e(r):i(i({},r),e)),a},d=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var a=e.components,t=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(a),y=t,g=c["".concat(p,".").concat(y)]||c[y]||u[y]||l;return a?n.createElement(g,i(i({ref:r},d),{},{components:a})):n.createElement(g,i({ref:r},d))}));function g(e,r){var a=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var l=a.length,i=new Array(l);i[0]=y;var o={};for(var p in r)hasOwnProperty.call(r,p)&&(o[p]=r[p]);o.originalType=e,o[c]="string"==typeof e?e:t,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},7880:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(5072),t=(a(1504),a(5788));const l={title:"Energy Card",sidebar_label:"Energy (Pro)",sidebar_position:4},i=void 0,o={unversionedId:"cards/energy",id:"version-v3.x.x/cards/energy",title:"Energy Card",description:"This feature is available in DASH Pro only.",source:"@site/versioned_docs/version-v3.x.x/cards/energy.md",sourceDirName:"cards",slug:"/cards/energy",permalink:"/v3.x.x/cards/energy",draft:!1,tags:[],version:"v3.x.x",sidebarPosition:4,frontMatter:{title:"Energy Card",sidebar_label:"Energy (Pro)",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Air (Pro)",permalink:"/v3.x.x/cards/air"},next:{title:"Progress",permalink:"/v3.x.x/cards/progress"}},p={},s=[{value:"Preview:",id:"preview",level:4},{value:"Type:",id:"type",level:4},{value:"Valid Data Types:",id:"valid-data-types",level:4},{value:"Initializer:",id:"initializer",level:4},{value:"Updaters:",id:"updaters",level:4}],d={toc:s},c="wrapper";function u(e){let{components:r,...a}=e;return(0,t.yg)(c,(0,n.c)({},d,a,{components:r,mdxType:"MDXLayout"}),(0,t.yg)("div",{style:{border:"1px solid rgba(255,0,0, 0.03)",padding:20,borderRadius:14,backgroundColor:"rgba(255,0,0, 0.03)",maxWidth:600}},(0,t.yg)("h4",{style:{fontWeight:"500",marginBottom:5}}," This feature is available in ",(0,t.yg)("a",{target:"_blank",style:{color:"red"},href:"https://espdash.pro"},"DASH Pro")," only.")),(0,t.yg)("h4",{id:"preview"},"Preview:"),(0,t.yg)("img",{src:"/img//energy-card.png",width:"280px",alt:"Energy Card Preview"}),(0,t.yg)("br",null),(0,t.yg)("br",null),(0,t.yg)("p",null,"This card adds a distinctive energy/power icon, and just like generic card you can add a symbol which will be appended to your data. This card can be used to show something related to power consumption and usage etc."),(0,t.yg)("br",null),(0,t.yg)("h4",{id:"type"},"Type:"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"ENERGY_CARD")),(0,t.yg)("br",null),(0,t.yg)("h4",{id:"valid-data-types"},"Valid Data Types:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"int")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"float")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"String"))),(0,t.yg)("br",null),(0,t.yg)("h4",{id:"initializer"},"Initializer:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-cpp"},'/* \n  Energy Card\n  Valid Arguments: (ESPDash dashboard, Card Type, const char* name, const char* symbol (optional) )\n*/\nCard card1(&dashboard, ENERGY_CARD, "Power Consumption", "kWh");\n')),(0,t.yg)("br",null),(0,t.yg)("h4",{id:"updaters"},"Updaters:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-cpp"},"card1.update(int value);\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-cpp"},"card1.update(float value);\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-cpp"},"card1.update(String value);\n")),(0,t.yg)("p",null,"Or you can also update the symbol along with the value like this:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-cpp"},'card1.update(value, "kWh");\n')),(0,t.yg)("br",null),(0,t.yg)("br",null))}u.isMDXComponent=!0}}]);