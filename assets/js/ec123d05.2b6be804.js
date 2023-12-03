"use strict";(self.webpackChunkesp_dash_docs=self.webpackChunkesp_dash_docs||[]).push([[2446],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),b=a,h=p["".concat(s,".").concat(b)]||p[b]||d[b]||o;return r?n.createElement(h,l(l({ref:t},c),{},{components:r})):n.createElement(h,l({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},390:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={title:"Push Button Card",sidebar_label:"Push Button (Pro)",sidebar_position:5},l=void 0,i={unversionedId:"cards/push-button",id:"version-v4.x.x/cards/push-button",title:"Push Button Card",description:"This feature is available in DASH Pro only.",source:"@site/versioned_docs/version-v4.x.x/cards/push-button.md",sourceDirName:"cards",slug:"/cards/push-button",permalink:"/cards/push-button",draft:!1,tags:[],version:"v4.x.x",sidebarPosition:5,frontMatter:{title:"Push Button Card",sidebar_label:"Push Button (Pro)",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Toggle Button",permalink:"/cards/button"},next:{title:"Status",permalink:"/cards/status"}},s={},u=[{value:"Preview:",id:"preview",level:4},{value:"Type:",id:"type",level:4},{value:"Initializer:",id:"initializer",level:4},{value:"Callback:",id:"callback",level:4}],c={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"pro-label"},(0,a.kt)("i",null,(0,a.kt)("h4",{style:{fontWeight:"500",marginBottom:5}},"This feature is available in ",(0,a.kt)("a",{target:"_blank",style:{color:"red"},href:"https://espdash.pro"},"DASH Pro")," only."))),(0,a.kt)("h4",{id:"preview"},"Preview:"),(0,a.kt)("img",{className:"card-preview",src:"/img/v4/push-button.png",width:"280px",alt:"Push Button Card Preview"}),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("p",null,"Push button card adds a static button on your dashboard which has no state. Whenever a user clicks this button, it triggers a callback."),(0,a.kt)("br",null),(0,a.kt)("h4",{id:"type"},"Type:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"PUSH_BUTTON_CARD")),(0,a.kt)("br",null),(0,a.kt)("h4",{id:"initializer"},"Initializer:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'/* \n  Button Card\n  Valid Arguments: (ESPDash dashboard, Card Type, const char* name)\n*/\nCard card1(&dashboard, PUSH_BUTTON_CARD, "Push Button");\n')),(0,a.kt)("br",null),(0,a.kt)("h4",{id:"callback"},"Callback:"),(0,a.kt)("p",null,"Push button card will trigger a callback on every click by user, there is no need to update or ",(0,a.kt)("inlineCode",{parentName:"p"},"sendUpdates")," to dashboard because there is no state."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'/*\n  We provide our attachCallback with a lambda function to handle trigger\n*/\ncard1.attachCallback([&](){\n  Serial.println("[Card1] Push Button Triggered");\n});\n')),(0,a.kt)("br",null),(0,a.kt)("br",null))}d.isMDXComponent=!0}}]);