"use strict";(self.webpackChunkesp_dash_docs=self.webpackChunkesp_dash_docs||[]).push([[7096],{5788:(e,a,t)=>{t.d(a,{Iu:()=>p,yg:()=>g});var n=t(1504);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),s=function(e){var a=n.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},p=function(e){var a=s(e.components);return n.createElement(c.Provider,{value:a},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(t),u=i,g=d["".concat(c,".").concat(u)]||d[u]||y[u]||r;return t?n.createElement(g,l(l({ref:a},p),{},{components:t})):n.createElement(g,l({ref:a},p))}));function g(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=u;var o={};for(var c in a)hasOwnProperty.call(a,c)&&(o[c]=a[c]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},104:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=t(5072),i=(t(1504),t(5788));const r={title:"Joystick Card",sidebar_label:"Joystick (Pro)",sidebar_position:16},l=void 0,o={unversionedId:"cards/joystick",id:"version-v4.x.x/cards/joystick",title:"Joystick Card",description:"This is an exclusive feature of DASH Pro. Check it out here.",source:"@site/versioned_docs/version-v4.x.x/cards/joystick.md",sourceDirName:"cards",slug:"/cards/joystick",permalink:"/cards/joystick",draft:!1,tags:[],version:"v4.x.x",sidebarPosition:16,frontMatter:{title:"Joystick Card",sidebar_label:"Joystick (Pro)",sidebar_position:16},sidebar:"tutorialSidebar",previous:{title:"Week Selector (Pro)",permalink:"/cards/week-selector"},next:{title:"Bar",permalink:"/charts/bar"}},c={},s=[{value:"Preview:",id:"preview",level:4},{value:"Type:",id:"type",level:4},{value:"Initializer:",id:"initializer",level:4},{value:"Direction Lock:",id:"direction-lock",level:4},{value:"Callback:",id:"callback",level:4},{value:"Directional Callback:",id:"directional-callback",level:5},{value:"Coordinates Callback:",id:"coordinates-callback",level:5}],p={toc:s},d="wrapper";function y(e){let{components:a,...t}=e;return(0,i.yg)(d,(0,n.c)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("admonition",{title:"Pro Feature",type:"danger"},(0,i.yg)("p",{parentName:"admonition"},"This is an exclusive feature of DASH Pro. Check it out ",(0,i.yg)("a",{parentName:"p",href:"https://espdash.pro"},"here"),".")),(0,i.yg)("h4",{id:"preview"},"Preview:"),(0,i.yg)("img",{className:"card-preview",src:"/img/v4/joystick-card.png",width:"280px",alt:"Preview"}),(0,i.yg)("br",null),(0,i.yg)("br",null),(0,i.yg)("p",null,"This card adds a joystick to your dashboard to control some stuff and provides you with easy to interpret directional data via callback. You can even lock direction of the joystick to X or Y axis."),(0,i.yg)("br",null),(0,i.yg)("h4",{id:"type"},"Type:"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"JOYSTICK_CARD")),(0,i.yg)("br",null),(0,i.yg)("h4",{id:"initializer"},"Initializer:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-cpp"},'/* \n  Joystick Card\n  Valid Arguments: (ESPDash dashboard, Card Type, const char* name, const char* directionLock (optional) )\n*/\nCard joystick(&dashboard, JOYSTICK_CARD, "Joystick 1");\n')),(0,i.yg)("br",null),(0,i.yg)("h4",{id:"direction-lock"},"Direction Lock:"),(0,i.yg)("p",null,"You can lock joystick to X or Y Axis:"),(0,i.yg)("p",null,"Supply it with ",(0,i.yg)("inlineCode",{parentName:"p"},"lockX")," as 4th argument and it will lock to X axis."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-cpp"},'Card joystick(&dashboard, JOYSTICK_CARD, "Joystick 1", "lockX");\n')),(0,i.yg)("br",null),(0,i.yg)("p",null,"Supply it with ",(0,i.yg)("inlineCode",{parentName:"p"},"lockY")," as 4th argument and it will lock to Y axis."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-cpp"},'Card joystick(&dashboard, JOYSTICK_CARD, "Joystick 1", "lockY");\n')),(0,i.yg)("p",null,"By default, joystick works on both axis."),(0,i.yg)("h4",{id:"callback"},"Callback:"),(0,i.yg)("p",null,"Joystick Card requires a callback function which will be called when we receive a input from our dashboard. In setup block, we will be calling our ",(0,i.yg)("inlineCode",{parentName:"p"},"attachCallback")," function and provide a lambda (callback) function with a ",(0,i.yg)("inlineCode",{parentName:"p"},"const char*")," (character array) argument."),(0,i.yg)("p",null,"Joystick card has 2 callbacks, ",(0,i.yg)("inlineCode",{parentName:"p"},"directional")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"coordinates"),":"),(0,i.yg)("h5",{id:"directional-callback"},"Directional Callback:"),(0,i.yg)("p",null,"This callback will return the active direction of your joystick when it's moved. It will be one of the following:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"up")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"down")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"left")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"right")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"idle"))),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-cpp"},"/*\n  We provide our attachCallback with a lambda function to handle incomming data\n  `value` is the direction of joystick 'up', 'down', 'left', 'right' or 'idle'\n*/\njoystick.attachCallback([&](const char* direction){\n  Serial.println(\"[Joystick] Current Direction: \"+String(direction));\n});\n")),(0,i.yg)("h5",{id:"coordinates-callback"},"Coordinates Callback:"),(0,i.yg)("p",null,"This callback will return the active coordinates of the thumb of your joystick when it's moved. It will provide x and y coordinates which ranges from ",(0,i.yg)("inlineCode",{parentName:"p"},"-60")," to ",(0,i.yg)("inlineCode",{parentName:"p"},"60")," on each axis."),(0,i.yg)("p",null,"In case of X axis: ",(0,i.yg)("inlineCode",{parentName:"p"},"-60")," is left, ",(0,i.yg)("inlineCode",{parentName:"p"},"60")," is right.\nFor Y axis: ",(0,i.yg)("inlineCode",{parentName:"p"},"-60")," is up, and ",(0,i.yg)("inlineCode",{parentName:"p"},"60")," is bottom."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-cpp"},'/*\n  We provide our attachCallback with a lambda function to handle incomming data.\n  In this case, we will be getting x and y axis coordinates in range of -60 to 60\n*/\njoystick.attachCallback([&](int8_t x, int8_t y){\n  Serial.printf("[Joystick] X Axis: %d, Y Axis: %d\\n", x, y);\n});\n')),(0,i.yg)("br",null),(0,i.yg)("br",null))}y.isMDXComponent=!0}}]);