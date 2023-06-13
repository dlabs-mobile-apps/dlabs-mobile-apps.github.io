"use strict";(self.webpackChunkdlabs_mobile_apps_github_io=self.webpackChunkdlabs_mobile_apps_github_io||[]).push([[4054],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(n),m=i,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||l;return n?a.createElement(g,r(r({ref:t},p),{},{components:n})):a.createElement(g,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var d=2;d<l;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3729:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(7462),i=(n(7294),n(3905));const l={sidebar_position:9,title:"Spacing",description:"Spacing"},r=void 0,o={unversionedId:"layouts/spacing",id:"layouts/spacing",title:"Spacing",description:"Spacing",source:"@site/design-system-docs/layouts/spacing.md",sourceDirName:"layouts",slug:"/layouts/spacing",permalink:"/design-system-docs/layouts/spacing",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,title:"Spacing",description:"Spacing"},sidebar:"tutorialSidebar",previous:{title:"Error Widget",permalink:"/design-system-docs/widgets/error-widget"},next:{title:"Responsive",permalink:"/design-system-docs/layouts/responsive"}},s={},d=[{value:"Padding",id:"padding",level:2},{value:"Implementation",id:"implementation",level:3},{value:"Margin",id:"margin",level:2},{value:"Implementation",id:"implementation-1",level:3},{value:"Radius",id:"radius",level:2},{value:"Implementation",id:"implementation-2",level:3},{value:"Tips",id:"tips",level:2}],p={toc:d};function c(e){let{components:t,...l}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This documentation is made for developer to setup design system that already developed by UI/UX team. This documentation also flexible to all design system that want to use in the project and also help UI/UX team to understand how design system is implemented in mobile apps.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Spacing",src:n(7954).Z,width:"1600",height:"1200"})),(0,i.kt)("h2",{id:"padding"},"Padding"),(0,i.kt)("p",null,"The padding is the empty space between a UI component\u2019s border and its content."),(0,i.kt)("h3",{id:"implementation"},"Implementation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// default padding on style\nclass ThemePadding {\n  double p4 = 4;\n  double p8 = 8;\n  double p12 = 12;\n  double p16 = 16;\n  double p20 = 20;\n  double p24 = 24;\n  double p32 = 32;\n  double p40 = 40;\n}\n\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Usage\nStyles().padding.p4\nStyles().padding.p16\n")),(0,i.kt)("h2",{id:"margin"},"Margin"),(0,i.kt)("p",null,"The margin is the empty space between a component and other component."),(0,i.kt)("h3",{id:"implementation-1"},"Implementation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// default padding on style\nclass ThemeMargin {\n  double m4 = 4;\n  double m8 = 8;\n  double m12 = 12;\n  double m16 = 16;\n  double m20 = 20;\n  double m24 = 24;\n  double m32 = 32;\n  double m40 = 40;\n}\n\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Usage\nStyles().margin.m4\nStyles().margin.m16\n")),(0,i.kt)("h2",{id:"radius"},"Radius"),(0,i.kt)("p",null,"The radius is the rounded value on corner UI component."),(0,i.kt)("h3",{id:"implementation-2"},"Implementation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// default padding on style\nclass ThemeRadius {\n  double r4 = 4;\n  double r6 = 6;\n  double r8 = 8;\n  double r12 = 12;\n  double r16 = 16;\n  double r24 = 24;\n  double r32 = 32;\n  double r48 = 48;\n}\n\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Usage\nStyles().radius.r4\nStyles().radius.r16 \n")),(0,i.kt)("h2",{id:"tips"},"Tips"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mobile devices have small screens as compared to desktops, fitting in a lot of information in a small mobile UI can be challenging.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Readability",src:n(8055).Z,width:"720",height:"413"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Design for everyone, consider multiple holds. These are three common types of holding a mobile, design the main actions within these areas.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Readability",src:n(2501).Z,width:"720",height:"428"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A small screen doesn\u2019t mean small text, or less space, don\u2019t let text or other elements overlap. Improve legibility by increasing line height or element spacing.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Readability",src:n(7027).Z,width:"720",height:"413"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"New technologies are being presented every day, as a designer you need to stay up to date, for example, Curved displays increased padding my some pixels to avoid unwanted touches.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Readability",src:n(9878).Z,width:"720",height:"395"})))}c.isMDXComponent=!0},2501:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/accesbility-375d2ac2ebfebc0e222116d01a4571d5.png"},9878:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/padding-b39aa92aff8c1cef38d7c0ef6b93356f.png"},8055:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/readability-de03cbc786829b089320d7b13efffc96.png"},7954:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/spacing-8f8b7f7cbd846b804ff9fb79670ab531.png"},7027:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/spacingtips-73a7dd5aa6210c95f2d51d2ec46de35e.png"}}]);