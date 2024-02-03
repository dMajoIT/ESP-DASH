"use strict";(self.webpackChunkesp_dash_docs=self.webpackChunkesp_dash_docs||[]).push([[4280],{5788:(e,r,t)=>{t.d(r,{Iu:()=>p,yg:()=>y});var a=t(1504);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),c=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=c(e.components);return a.createElement(s.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},g=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(t),g=n,y=d["".concat(s,".").concat(g)]||d[g]||u[g]||i;return t?a.createElement(y,l(l({ref:r},p),{},{components:t})):a.createElement(y,l({ref:r},p))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,l=new Array(i);l[0]=g;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o[d]="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},4768:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=t(5072),n=(t(1504),t(5788));const i={title:"Image Card",sidebar_label:"Image (Pro)",sidebar_position:10},l=void 0,o={unversionedId:"cards/image",id:"cards/image",title:"Image Card",description:"This is an exclusive feature of DASH Pro. Check it out here.",source:"@site/docs/cards/image.md",sourceDirName:"cards",slug:"/cards/image",permalink:"/next/cards/image",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Image Card",sidebar_label:"Image (Pro)",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Energy (Pro)",permalink:"/next/cards/energy"},next:{title:"Text Input (Pro)",permalink:"/next/cards/text-input"}},s={},c=[{value:"Preview:",id:"preview",level:4},{value:"Type:",id:"type",level:4},{value:"Valid Data Types:",id:"valid-data-types",level:4},{value:"Initializer:",id:"initializer",level:4},{value:"Updaters:",id:"updaters",level:4}],p={toc:c},d="wrapper";function u(e){let{components:r,...t}=e;return(0,n.yg)(d,(0,a.c)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("admonition",{title:"Pro Feature",type:"danger"},(0,n.yg)("p",{parentName:"admonition"},"This is an exclusive feature of DASH Pro. Check it out ",(0,n.yg)("a",{parentName:"p",href:"https://espdash.pro"},"here"),".")),(0,n.yg)("h4",{id:"preview"},"Preview:"),(0,n.yg)("img",{className:"card-preview",src:"/img/v4/image-card.png",width:"280px",alt:"Preview"}),(0,n.yg)("br",null),(0,n.yg)("br",null),(0,n.yg)("p",null,"This card adds a image on your dashboard. You can pass a absolute URL to this card and it will load that image within this card on the dashboard. If the size is a bit small for you, then you can even make the card bigger by using the size value together with ",(0,n.yg)("inlineCode",{parentName:"p"},"setSize")," function."),(0,n.yg)("br",null),(0,n.yg)("h4",{id:"type"},"Type:"),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"IMAGE_CARD")),(0,n.yg)("br",null),(0,n.yg)("h4",{id:"valid-data-types"},"Valid Data Types:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("inlineCode",{parentName:"li"},"String"))),(0,n.yg)("br",null),(0,n.yg)("h4",{id:"initializer"},"Initializer:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-cpp"},'/* \n  Image Card\n  Valid Arguments: (ESPDash dashboard, Card Type, const char* name, const char* size )\n*/\nCard card1(&dashboard, IMAGE_CARD, "Test Image", "lg");\n')),(0,n.yg)("br",null),(0,n.yg)("h4",{id:"updaters"},"Updaters:"),(0,n.yg)("p",null,"After initialization, you will have to provide the URL of the image which you want to display."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-cpp"},"card1.update(const char* url);\n")),(0,n.yg)("p",null,'Or you can also update the size of image using the second parameter. Supported sizes: "lg" and "xl"'),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-cpp"},"// This will change the selected value and update the choices as well\ncard1.update(const char* url, const char* size);\n")),(0,n.yg)("br",null),(0,n.yg)("br",null))}u.isMDXComponent=!0}}]);