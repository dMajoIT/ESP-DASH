"use strict";(self.webpackChunkesp_dash_docs=self.webpackChunkesp_dash_docs||[]).push([[7772],{5788:(e,r,n)=>{n.d(r,{Iu:()=>c,yg:()=>y});var a=n(1504);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,a,t=function(e,r){if(null==e)return{};var n,a,t={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var p=a.createContext({}),s=function(e){var r=a.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},c=function(e){var r=s(e.components);return a.createElement(p.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},g=a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),g=t,y=d["".concat(p,".").concat(g)]||d[g]||u[g]||l;return n?a.createElement(y,i(i({ref:r},c),{},{components:n})):a.createElement(y,i({ref:r},c))}));function y(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var p in r)hasOwnProperty.call(r,p)&&(o[p]=r[p]);o.originalType=e,o[d]="string"==typeof e?e:t,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8612:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(5072),t=(n(1504),n(5788));const l={title:"Progress Card",sidebar_label:"Progress",sidebar_position:4},i=void 0,o={unversionedId:"cards/progress",id:"cards/progress",title:"Progress Card",description:"Preview:",source:"@site/docs/cards/progress.md",sourceDirName:"cards",slug:"/cards/progress",permalink:"/next/cards/progress",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Progress Card",sidebar_label:"Progress",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Energy (Pro)",permalink:"/next/cards/energy"},next:{title:"Toggle Button",permalink:"/next/cards/button"}},p={},s=[{value:"Preview:",id:"preview",level:4},{value:"Type:",id:"type",level:4},{value:"Valid Data Types:",id:"valid-data-types",level:4},{value:"Initializer:",id:"initializer",level:4},{value:"Updaters:",id:"updaters",level:4}],c={toc:s},d="wrapper";function u(e){let{components:r,...n}=e;return(0,t.yg)(d,(0,a.c)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,t.yg)("h4",{id:"preview"},"Preview:"),(0,t.yg)("img",{className:"card-preview",src:"/img/v4/progress-card.png",width:"280px",alt:"Preview"}),(0,t.yg)("br",null),(0,t.yg)("br",null),(0,t.yg)("p",null,"This card displays a horizontal range based on a ",(0,t.yg)("inlineCode",{parentName:"p"},"integer")," or a ",(0,t.yg)("inlineCode",{parentName:"p"},"float")," value. It makes data visualization user friendly."),(0,t.yg)("br",null),(0,t.yg)("h4",{id:"type"},"Type:"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"PROGRESS_CARD")),(0,t.yg)("br",null),(0,t.yg)("h4",{id:"valid-data-types"},"Valid Data Types:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"int")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"float"))),(0,t.yg)("br",null),(0,t.yg)("h4",{id:"initializer"},"Initializer:"),(0,t.yg)("p",null,"With progress card, Initializer requires ",(0,t.yg)("inlineCode",{parentName:"p"},"min")," & ",(0,t.yg)("inlineCode",{parentName:"p"},"max")," range."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-cpp"},'/* \n  Progress Card\n  Valid Arguments: (ESPDash dashboard, Card Type, const char* name, const char* symbol (optional), int min, int max)\n*/\nCard card1(&dashboard, PROGRESS_CARD, "Progress1", "", 0, 255);\n')),(0,t.yg)("br",null),(0,t.yg)("h4",{id:"updaters"},"Updaters:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-cpp"},"card1.update(int value);\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-cpp"},"card1.update(float value);\n")),(0,t.yg)("p",null,"Or, update symbol along your value:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-cpp"},'card1.update(244, "%");\n')))}u.isMDXComponent=!0}}]);