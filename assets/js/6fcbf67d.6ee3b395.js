"use strict";(self.webpackChunkesp_dash_docs=self.webpackChunkesp_dash_docs||[]).push([[5603],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),h=n,f=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return r?a.createElement(f,s(s({ref:t},p),{},{components:r})):a.createElement(f,s({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6556:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={title:"Concept of DASH",sidebar_label:"Concept",sidebar_position:2},s=void 0,i={unversionedId:"concept",id:"version-3.0.8/concept",title:"Concept of DASH",description:"The whole concept of ESP-DASH is around the idea of having 'Cards' and 'Charts' ( UI components ) on our dashboard. Therefore with V3, we divided the whole library into 3 separate classes:",source:"@site/versioned_docs/version-3.0.8/concept.md",sourceDirName:".",slug:"/concept",permalink:"/concept",draft:!1,tags:[],version:"3.0.8",sidebarPosition:2,frontMatter:{title:"Concept of DASH",sidebar_label:"Concept",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/intro"},next:{title:"Installation",permalink:"/installation"}},l={},c=[{value:"1. ESPDash Class",id:"1-espdash-class",level:4},{value:"2. Card Class",id:"2-card-class",level:4},{value:"3. Chart Class",id:"3-chart-class",level:4}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The whole concept of ESP-DASH is around the idea of having 'Cards' and 'Charts' ( UI components ) on our dashboard. Therefore with V3, we divided the whole library into 3 separate classes:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"ESPDash")," ( ESPDash.h )"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Card")," ( Card.h )"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Chart")," ( Chart.h )")),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{src:"/img//concept-diagram.png",alt:"Concept Diagram",width:"400px"})),(0,n.kt)("p",null,"All of these classes serve their very own purpose and work harmoniously with a low heap footprint. Let's know more about the function of each class:"),(0,n.kt)("h4",{id:"1-espdash-class"},"1. ESPDash Class"),(0,n.kt)("p",null,"ESPDash class handles the networking part of our dashboard. It takes AsyncWebServer as a argument and connects itself to serve DASH V3 webpage from our MCU's program memory. This class is responsible for the transfer of card/chart data between webpage and your sketch."),(0,n.kt)("h4",{id:"2-card-class"},"2. Card Class"),(0,n.kt)("p",null,"Our dashboard comprises of 'Cards' & 'Charts' and in our library, these are primarly data handling classes. Their main purpose is just to store data in their relevant position."),(0,n.kt)("p",null,"Card comprises of many sub-types ( for example: generic, temperature, humidity etc. ) which provides you great data visiualization choices."),(0,n.kt)("h4",{id:"3-chart-class"},"3. Chart Class"),(0,n.kt)("p",null,"Similar to Card Class, Chart handles the data for creating charts on our dashboard."))}d.isMDXComponent=!0}}]);