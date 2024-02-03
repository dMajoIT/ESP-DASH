"use strict";(self.webpackChunkesp_dash_docs=self.webpackChunkesp_dash_docs||[]).push([[5972],{5788:(e,r,n)=>{n.d(r,{Iu:()=>d,yg:()=>y});var a=n(1504);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,a,t=function(e,r){if(null==e)return{};var n,a,t={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var s=a.createContext({}),p=function(e){var r=a.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},d=function(e){var r=p(e.components);return a.createElement(s.Provider,{value:r},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},g=a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),g=t,y=c["".concat(s,".").concat(g)]||c[g]||u[g]||i;return n?a.createElement(y,l(l({ref:r},d),{},{components:n})):a.createElement(y,l({ref:r},d))}));function y(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var i=n.length,l=new Array(i);l[0]=g;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o[c]="string"==typeof e?e:t,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4744:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(5072),t=(n(1504),n(5788));const i={title:"Progress Card",sidebar_label:"Progress",sidebar_position:4},l=void 0,o={unversionedId:"cards/progress",id:"version-v3.x.x/cards/progress",title:"Progress Card",description:"Preview:",source:"@site/versioned_docs/version-v3.x.x/cards/progress.md",sourceDirName:"cards",slug:"/cards/progress",permalink:"/v3.x.x/cards/progress",draft:!1,tags:[],version:"v3.x.x",sidebarPosition:4,frontMatter:{title:"Progress Card",sidebar_label:"Progress",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Energy (Pro)",permalink:"/v3.x.x/cards/energy"},next:{title:"Button",permalink:"/v3.x.x/cards/button"}},s={},p=[{value:"Preview:",id:"preview",level:4},{value:"Type:",id:"type",level:4},{value:"Valid Data Types:",id:"valid-data-types",level:4},{value:"Initializer:",id:"initializer",level:4},{value:"Updaters:",id:"updaters",level:4}],d={toc:p},c="wrapper";function u(e){let{components:r,...n}=e;return(0,t.yg)(c,(0,a.c)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,t.yg)("h4",{id:"preview"},"Preview:"),(0,t.yg)("img",{src:"/img//progress-card.png",width:"280px",alt:"Preview"}),(0,t.yg)("br",null),(0,t.yg)("br",null),(0,t.yg)("p",null,"This card displays a horizontal range based on a ",(0,t.yg)("inlineCode",{parentName:"p"},"integer")," or a ",(0,t.yg)("inlineCode",{parentName:"p"},"float")," value. It makes data visualization user friendly."),(0,t.yg)("br",null),(0,t.yg)("h4",{id:"type"},"Type:"),(0,t.yg)("p",null,(0,t.yg)("inlineCode",{parentName:"p"},"PROGRESS_CARD")),(0,t.yg)("br",null),(0,t.yg)("h4",{id:"valid-data-types"},"Valid Data Types:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"int")),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"float"))),(0,t.yg)("br",null),(0,t.yg)("h4",{id:"initializer"},"Initializer:"),(0,t.yg)("p",null,"With progress card, Initializer requires ",(0,t.yg)("inlineCode",{parentName:"p"},"min")," & ",(0,t.yg)("inlineCode",{parentName:"p"},"max")," range."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-cpp"},'/* \n  Progress Card\n  Valid Arguments: (ESPDash dashboard, Card Type, const char* name, const char* symbol (optional), int min, int max)\n*/\nCard card1(&dashboard, PROGRESS_CARD, "Progress1", "", 0, 255);\n')),(0,t.yg)("br",null),(0,t.yg)("h4",{id:"updaters"},"Updaters:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-cpp"},"card1.update(int value);\n")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-cpp"},"card1.update(float value);\n")),(0,t.yg)("p",null,"Or, update symbol along your value:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-cpp"},'card1.update(244, "%");\n')))}u.isMDXComponent=!0}}]);