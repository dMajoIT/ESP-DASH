"use strict";(self.webpackChunkesp_dash_docs=self.webpackChunkesp_dash_docs||[]).push([[1336],{5788:(e,t,r)=>{r.d(t,{Iu:()=>s,yg:()=>b});var n=r(1504);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),y=a,b=p["".concat(c,".").concat(y)]||p[y]||d[y]||o;return r?n.createElement(b,i(i({ref:t},s),{},{components:r})):n.createElement(b,i({ref:t},s))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},7496:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(5072),a=(r(1504),r(5788));const o={title:"Push Button Card",sidebar_label:"Push Button (Pro)",sidebar_position:14},i=void 0,l={unversionedId:"cards/push-button",id:"cards/push-button",title:"Push Button Card",description:"This is an exclusive feature of DASH Pro. Check it out here.",source:"@site/docs/cards/push-button.md",sourceDirName:"cards",slug:"/cards/push-button",permalink:"/next/cards/push-button",draft:!1,tags:[],version:"current",sidebarPosition:14,frontMatter:{title:"Push Button Card",sidebar_label:"Push Button (Pro)",sidebar_position:14},sidebar:"tutorialSidebar",previous:{title:"Dropdown (Pro)",permalink:"/next/cards/dropdown"},next:{title:"Week Selector (Pro)",permalink:"/next/cards/week-selector"}},c={},u=[{value:"Preview:",id:"preview",level:4},{value:"Type:",id:"type",level:4},{value:"Initializer:",id:"initializer",level:4},{value:"Callback:",id:"callback",level:4}],s={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(p,(0,n.c)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("admonition",{title:"Pro Feature",type:"danger"},(0,a.yg)("p",{parentName:"admonition"},"This is an exclusive feature of DASH Pro. Check it out ",(0,a.yg)("a",{parentName:"p",href:"https://espdash.pro"},"here"),".")),(0,a.yg)("h4",{id:"preview"},"Preview:"),(0,a.yg)("img",{className:"card-preview",src:"/img/v4/push-button.png",width:"280px",alt:"Push Button Card Preview"}),(0,a.yg)("br",null),(0,a.yg)("br",null),(0,a.yg)("p",null,"Push button card adds a static button on your dashboard which has no state. Whenever a user clicks this button, it triggers a callback."),(0,a.yg)("br",null),(0,a.yg)("h4",{id:"type"},"Type:"),(0,a.yg)("p",null,(0,a.yg)("inlineCode",{parentName:"p"},"PUSH_BUTTON_CARD")),(0,a.yg)("br",null),(0,a.yg)("h4",{id:"initializer"},"Initializer:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},'/* \n  Button Card\n  Valid Arguments: (ESPDash dashboard, Card Type, const char* name)\n*/\nCard card1(&dashboard, PUSH_BUTTON_CARD, "Push Button");\n')),(0,a.yg)("br",null),(0,a.yg)("h4",{id:"callback"},"Callback:"),(0,a.yg)("p",null,"Push button card will trigger a callback on every click by user, there is no need to update or ",(0,a.yg)("inlineCode",{parentName:"p"},"sendUpdates")," to dashboard because there is no state."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-cpp"},'/*\n  We provide our attachCallback with a lambda function to handle trigger\n*/\ncard1.attachCallback([&](){\n  Serial.println("[Card1] Push Button Triggered");\n});\n')),(0,a.yg)("br",null),(0,a.yg)("br",null))}d.isMDXComponent=!0}}]);