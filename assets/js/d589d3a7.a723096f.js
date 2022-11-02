"use strict";(self.webpackChunkesp_dash_docs=self.webpackChunkesp_dash_docs||[]).push([[7162],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),d=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(t),h=r,b=u["".concat(o,".").concat(h)]||u[h]||p[h]||i;return t?a.createElement(b,l(l({ref:n},c),{},{components:t})):a.createElement(b,l({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=u;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var d=2;d<i;d++)l[d]=t[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9390:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=t(7462),r=(t(7294),t(3905));const i={title:"Getting Started",sidebar_label:"Getting Started",sidebar_position:4},l=void 0,s={unversionedId:"getting-started",id:"getting-started",title:"Getting Started",description:"To get started with ESP-DASH, we will be creating our basic example step by step and learn what each setup does:",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/next/getting-started",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Getting Started",sidebar_label:"Getting Started",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/next/installation"},next:{title:"Examples",permalink:"/next/more-examples"}},o={},d=[{value:"Part 1: Include Dependencies",id:"part-1-include-dependencies",level:4},{value:"Part 2: Create AsyncWebServer Instance",id:"part-2-create-asyncwebserver-instance",level:4},{value:"Part 3: Attach ESP-DASH Instance",id:"part-3-attach-esp-dash-instance",level:4},{value:"Part 4: Create Cards",id:"part-4-create-cards",level:4},{value:"Part 5: Setup Block",id:"part-5-setup-block",level:4},{value:"Part 5: Loop Block",id:"part-5-loop-block",level:4},{value:"1. Updating Card Values",id:"1-updating-card-values",level:5},{value:"2. Sending updates to our Dashboard",id:"2-sending-updates-to-our-dashboard",level:5},{value:"Complete Loop Block:",id:"complete-loop-block",level:5},{value:"Final Code",id:"final-code",level:3}],c={toc:d};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To get started with ESP-DASH, we will be creating our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ayushsharma82/ESP-DASH/tree/master/examples/Basic"},"basic")," example step by step and learn what each setup does:"),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"part-1-include-dependencies"},"Part 1: Include Dependencies"),(0,r.kt)("p",null,"We have used conditional compilation in this part therefore the code will work for both ESP8266 & ESP32."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <Arduino.h>\n#if defined(ESP8266)\n  /* ESP8266 Dependencies */\n  #include <ESP8266WiFi.h>\n  #include <ESPAsyncTCP.h>\n  #include <ESPAsyncWebServer.h>\n#elif defined(ESP32)\n  /* ESP32 Dependencies */\n  #include <WiFi.h>\n  #include <AsyncTCP.h>\n  #include <ESPAsyncWebServer.h>\n#endif\n#include <ESPDash.h>\n")),(0,r.kt)("br",null),(0,r.kt)("hr",null),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"part-2-create-asyncwebserver-instance"},"Part 2: Create AsyncWebServer Instance"),(0,r.kt)("p",null,'Create an AsyncWebServer instance on default "80" port.'),(0,r.kt)("i",null,"Note: You are not restricted to a single dashboard. You can host as many dashboards as you want on multiple ports."),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"/* Start Webserver */\nAsyncWebServer server(80);\n")),(0,r.kt)("br",null),(0,r.kt)("hr",null),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"part-3-attach-esp-dash-instance"},"Part 3: Attach ESP-DASH Instance"),(0,r.kt)("p",null,"Pass the AsyncWebServer instance to ESPDash's instance. Internally the ESPDash will hook to AsyncWebServer for handling all the networking tasks."),(0,r.kt)("i",null,"Note: You can still use the same AsyncWebServer instance for other tasks."),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"/* Attach ESP-DASH to AsyncWebServer */\nESPDash dashboard(&server); \n")),(0,r.kt)("br",null),(0,r.kt)("hr",null),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"part-4-create-cards"},"Part 4: Create Cards"),(0,r.kt)("p",null,"In this step, we will creating ESP-DASH cards and passing our dasboard instance as a first argument so that they can add / remove themselves."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"After we are done with this guide, Please take a look at Cards section to know more about the types of cards available to us.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'/* \n  Dashboard Cards \n  Format - (Dashboard Instance, Card Type, Card Name, Card Symbol(optional) )\n*/\nCard temperature(&dashboard, TEMPERATURE_CARD, "Temperature", "\xb0C");\nCard humidity(&dashboard, HUMIDITY_CARD, "Humidity", "%");\n')),(0,r.kt)("br",null),(0,r.kt)("hr",null),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"part-5-setup-block"},"Part 5: Setup Block"),(0,r.kt)("p",null,"In our setup block, we will be adding the usual WiFi connectivity stuff and then start our AsyncWebServer with ",(0,r.kt)("inlineCode",{parentName:"p"},"server.begin();"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'void setup() {\n  Serial.begin(115200);\n\n  /* Connect WiFi */\n  WiFi.mode(WIFI_STA);\n  WiFi.begin("ssid", "password");\n  if (WiFi.waitForConnectResult() != WL_CONNECTED) {\n      Serial.printf("WiFi Failed!\\n");\n      return;\n  }\n  Serial.print("IP Address: ");\n  Serial.println(WiFi.localIP());\n\n  /* Start AsyncWebServer */\n  server.begin();\n}\n')),(0,r.kt)("br",null),(0,r.kt)("hr",null),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"part-5-loop-block"},"Part 5: Loop Block"),(0,r.kt)("p",null,"In our loop block, we will be doing 2 things:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Updating card values"),(0,r.kt)("li",{parentName:"ol"},"Sending updates to our dashboard")),(0,r.kt)("h5",{id:"1-updating-card-values"},"1. Updating Card Values"),(0,r.kt)("p",null,"Remember the 'Cards' we created in 4th part? We will now access those cards by their variable and update them using the ",(0,r.kt)("inlineCode",{parentName:"p"},"update")," function which is provided with our card's class:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"temperature.update((int)random(0, 50));\n")),(0,r.kt)("h5",{id:"2-sending-updates-to-our-dashboard"},"2. Sending updates to our Dashboard"),(0,r.kt)("p",null,"Once we have updated values of our card(s), we will call the ",(0,r.kt)("inlineCode",{parentName:"p"},"sendUpdates()")," function of our dashboard instance and it will send new card values to every connected client in real time."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"dashboard.sendUpdates();\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Technically speaking, You can call these functions anywhere in your sketch, but for demonstration purposes we have called them in our loop block.")),(0,r.kt)("h5",{id:"complete-loop-block"},"Complete Loop Block:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"void loop() {\n  /* Update Card Values */\n  temperature.update((int)random(0, 50));\n  humidity.update((int)random(0, 100));\n\n  /* Send Updates to our Dashboard (realtime) */\n  dashboard.sendUpdates();\n\n  /* \n    Delay is just for demonstration purposes in this example,\n    Replace this code with 'millis interval' in your final project.\n  */\n  delay(3000);\n}\n")),(0,r.kt)("br",null),(0,r.kt)("hr",null),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"final-code"},"Final Code"),(0,r.kt)("p",null,"That's it! Now we can just upload this sketch to our MCU and access the dashboard via it's IP address. ( Make sure to change the ",(0,r.kt)("inlineCode",{parentName:"p"},"ssid")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"password")," in our sketch according to your Access Point )"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'/*\n  -----------------------\n  ESPDASH - Basic Example\n  -----------------------\n\n  Skill Level: Intermediate\n\n  In this example we will be creating a basic dashboard which consists \n  of some cards and then update them in realtime ( at 3s interval ).\n\n  Github: https://github.com/ayushsharma82/ESP-DASH\n  WiKi: https://ayushsharma82.github.io/ESP-DASH/\n\n  Works with both ESP8266 & ESP32\n*/\n\n#include <Arduino.h>\n#if defined(ESP8266)\n  /* ESP8266 Dependencies */\n  #include <ESP8266WiFi.h>\n  #include <ESPAsyncTCP.h>\n  #include <ESPAsyncWebServer.h>\n#elif defined(ESP32)\n  /* ESP32 Dependencies */\n  #include <WiFi.h>\n  #include <AsyncTCP.h>\n  #include <ESPAsyncWebServer.h>\n#endif\n#include <ESPDash.h>\n\n\n/* Your WiFi Credentials */\nconst char* ssid = ""; // SSID\nconst char* password = ""; // Password\n\n/* Start Webserver */\nAsyncWebServer server(80);\n\n/* Attach ESP-DASH to AsyncWebServer */\nESPDash dashboard(&server); \n\n/* \n  Dashboard Cards \n  Format - (Dashboard Instance, Card Type, Card Name, Card Symbol(optional) )\n*/\nCard temperature(&dashboard, TEMPERATURE_CARD, "Temperature", "\xb0C");\nCard humidity(&dashboard, HUMIDITY_CARD, "Humidity", "%");\n\n\nvoid setup() {\n  Serial.begin(115200);\n\n  /* Connect WiFi */\n  WiFi.mode(WIFI_STA);\n  WiFi.begin(ssid, password);\n  if (WiFi.waitForConnectResult() != WL_CONNECTED) {\n      Serial.printf("WiFi Failed!\\n");\n      return;\n  }\n  Serial.print("IP Address: ");\n  Serial.println(WiFi.localIP());\n\n  /* Start AsyncWebServer */\n  server.begin();\n}\n\nvoid loop() {\n  /* Update Card Values */\n  temperature.update((int)random(0, 50));\n  humidity.update((int)random(0, 100));\n\n  /* Send Updates to our Dashboard (realtime) */\n  dashboard.sendUpdates();\n\n  /* \n    Delay is just for demonstration purposes in this example,\n    Replace this code with \'millis interval\' in your final project.\n  */\n  delay(3000);\n}\n')))}p.isMDXComponent=!0}}]);