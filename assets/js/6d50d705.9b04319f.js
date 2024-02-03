"use strict";(self.webpackChunkesp_dash_docs=self.webpackChunkesp_dash_docs||[]).push([[4992],{5788:(e,r,n)=>{n.d(r,{Iu:()=>s,yg:()=>g});var t=n(1504);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=t.createContext({}),p=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},s=function(e){var r=p(e.components);return t.createElement(c.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},y=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(n),y=a,g=d["".concat(c,".").concat(y)]||d[y]||u[y]||i;return n?t.createElement(g,l(l({ref:r},s),{},{components:n})):t.createElement(g,l({ref:r},s))}));function g(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=y;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"},4172:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var t=n(5072),a=(n(1504),n(5788));const i={title:"Generic Card",sidebar_label:"Generic",sidebar_position:1},l=void 0,o={unversionedId:"cards/generic",id:"version-v3.x.x/cards/generic",title:"Generic Card",description:"Preview:",source:"@site/versioned_docs/version-v3.x.x/cards/generic.md",sourceDirName:"cards",slug:"/cards/generic",permalink:"/v3.x.x/cards/generic",draft:!1,tags:[],version:"v3.x.x",sidebarPosition:1,frontMatter:{title:"Generic Card",sidebar_label:"Generic",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Cards",permalink:"/v3.x.x/category/cards"},next:{title:"Temperature",permalink:"/v3.x.x/cards/temperature"}},c={},p=[{value:"Preview:",id:"preview",level:4},{value:"Type:",id:"type",level:4},{value:"Valid Data Types:",id:"valid-data-types",level:4},{value:"Initializer:",id:"initializer",level:4},{value:"Updaters:",id:"updaters",level:4}],s={toc:p},d="wrapper";function u(e){let{components:r,...n}=e;return(0,a.yg)(d,(0,t.c)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h4",{id:"preview"},"Preview:"),(0,a.yg)("img",{src:"/img/generic-card.png",width:"280px",alt:"Preview"}),(0,a.yg)("br",null),(0,a.yg)("br",null),(0,a.yg)("p",null,"Generic card is the 'fits-all-types' card, which you can use to display any kind of value. It's mostly used when you want to display numbers, strings etc which don't relate to any other card in the list."),(0,a.yg)("small",null,(0,a.yg)("b",null,"Note:")," If you can't find the card which you are looking for, you can always raise request for more cards on the repository by creating an issue."),(0,a.yg)("br",null),(0,a.yg)("h4",{id:"type"},"Type:"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"GENERIC_CARD")),(0,a.yg)("br",null),(0,a.yg)("h4",{id:"valid-data-types"},"Valid Data Types:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"int")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"bool")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"float")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"String"))),(0,a.yg)("br",null),(0,a.yg)("h4",{id:"initializer"},"Initializer:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},'/* \n  Generic Card\n  Valid Arguments: (ESPDash dashboard, Card Type, const char* name, const char* symbol (optional) )\n*/\nCard card1(&dashboard, GENERIC_CARD, "Generic1");\n')),(0,a.yg)("br",null),(0,a.yg)("h4",{id:"updaters"},"Updaters:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"card1.update(int value);\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"card1.update(bool value);\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"card1.update(float value);\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},"card1.update(String value);\n")),(0,a.yg)("br",null),(0,a.yg)("br",null))}u.isMDXComponent=!0}}]);