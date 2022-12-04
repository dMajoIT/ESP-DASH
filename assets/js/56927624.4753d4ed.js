"use strict";(self.webpackChunkesp_dash_docs=self.webpackChunkesp_dash_docs||[]).push([[6160],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(a),u=i,m=d["".concat(c,".").concat(u)]||d[u]||k[u]||r;return a?n.createElement(m,l(l({ref:t},p),{},{components:a})):n.createElement(m,l({ref:t},p))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3075:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=a(7462),i=(a(7294),a(3905));const r={title:"Joystick Card",sidebar_label:"Joystick (Pro)",sidebar_position:7},l=void 0,o={unversionedId:"cards/joystick",id:"cards/joystick",title:"Joystick Card",description:"This feature is available in DASH Pro only.",source:"@site/docs/cards/joystick.md",sourceDirName:"cards",slug:"/cards/joystick",permalink:"/next/cards/joystick",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Joystick Card",sidebar_label:"Joystick (Pro)",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Text Input (Pro)",permalink:"/next/cards/text-input"},next:{title:"Bar",permalink:"/next/charts/bar"}},c={},s=[{value:"Preview:",id:"preview",level:4},{value:"Type:",id:"type",level:4},{value:"Initializer:",id:"initializer",level:4},{value:"Direction Lock:",id:"direction-lock",level:4},{value:"Callback:",id:"callback",level:4},{value:"Directional Callback:",id:"directional-callback",level:5},{value:"Coordinates Callback:",id:"coordinates-callback",level:5}],p={toc:s};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"pro-label"},(0,i.kt)("i",null,(0,i.kt)("h4",{style:{fontWeight:"500",marginBottom:5}},"This feature is available in ",(0,i.kt)("a",{target:"_blank",style:{color:"red"},href:"https://espdash.pro"},"DASH Pro")," only."))),(0,i.kt)("h4",{id:"preview"},"Preview:"),(0,i.kt)("img",{src:"/img/v4/joystick-card.png",width:"280px",alt:"Preview"}),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("p",null,"This card adds a joystick to your dashboard to control some stuff and provides you with easy to interpret directional data via callback. You can even lock direction of the joystick to X or Y axis."),(0,i.kt)("br",null),(0,i.kt)("h4",{id:"type"},"Type:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"JOYSTICK_CARD")),(0,i.kt)("br",null),(0,i.kt)("h4",{id:"initializer"},"Initializer:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'/* \n  Joystick Card\n  Valid Arguments: (ESPDash dashboard, Card Type, const char* name, const char* directionLock (optional) )\n*/\nCard joystick(&dashboard, JOYSTICK_CARD, "Joystick 1");\n')),(0,i.kt)("br",null),(0,i.kt)("h4",{id:"direction-lock"},"Direction Lock:"),(0,i.kt)("p",null,"You can lock joystick to X or Y Axis:"),(0,i.kt)("p",null,"Supply it with ",(0,i.kt)("inlineCode",{parentName:"p"},"lockX")," as 4th argument and it will lock to X axis."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'Card joystick(&dashboard, JOYSTICK_CARD, "Joystick 1", "lockX");\n')),(0,i.kt)("br",null),(0,i.kt)("p",null,"Supply it with ",(0,i.kt)("inlineCode",{parentName:"p"},"lockY")," as 4th argument and it will lock to Y axis."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'Card joystick(&dashboard, JOYSTICK_CARD, "Joystick 1", "lockY");\n')),(0,i.kt)("p",null,"By default, joystick works on both axis."),(0,i.kt)("h4",{id:"callback"},"Callback:"),(0,i.kt)("p",null,"Joystick Card requires a callback function which will be called when we receive a input from our dashboard. In setup block, we will be calling our ",(0,i.kt)("inlineCode",{parentName:"p"},"attachCallback")," function and provide a lambda (callback) function with a ",(0,i.kt)("inlineCode",{parentName:"p"},"const char*")," (character array) argument."),(0,i.kt)("p",null,"Joystick card has 2 callbacks, ",(0,i.kt)("inlineCode",{parentName:"p"},"directional")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"coordinates"),":"),(0,i.kt)("h5",{id:"directional-callback"},"Directional Callback:"),(0,i.kt)("p",null,"This callback will return the active direction of your joystick when it's moved. It will be one of the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"up")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"down")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"left")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"right")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"idle"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"/*\n  We provide our attachCallback with a lambda function to handle incomming data\n  `value` is the direction of joystick 'up', 'down', 'left', 'right' or 'idle'\n*/\njoystick.attachCallback([&](const char* direction){\n  Serial.println(\"[Joystick] Current Direction: \"+String(direction));\n});\n")),(0,i.kt)("h5",{id:"coordinates-callback"},"Coordinates Callback:"),(0,i.kt)("p",null,"This callback will return the active coordinates of the thumb of your joystick when it's moved. It will provide x and y coordinates which ranges from ",(0,i.kt)("inlineCode",{parentName:"p"},"-60")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"60")," on each axis."),(0,i.kt)("p",null,"In case of X axis: ",(0,i.kt)("inlineCode",{parentName:"p"},"-60")," is left, ",(0,i.kt)("inlineCode",{parentName:"p"},"60")," is right.\nFor Y axis: ",(0,i.kt)("inlineCode",{parentName:"p"},"-60")," is up, and ",(0,i.kt)("inlineCode",{parentName:"p"},"60")," is bottom."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'/*\n  We provide our attachCallback with a lambda function to handle incomming data.\n  In this case, we will be getting x and y axis coordinates in range of -60 to 60\n*/\njoystick.attachCallback([&](int8_t x, int8_t y){\n  Serial.printf("[Joystick] X Axis: %d, Y Axis: %d\\n", x, y);\n});\n')),(0,i.kt)("br",null),(0,i.kt)("br",null))}d.isMDXComponent=!0}}]);