"use strict";(self.webpackChunkmobile_dev_docs=self.webpackChunkmobile_dev_docs||[]).push([[9310],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,m=d["".concat(u,".").concat(f)]||d[f]||l[f]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1540:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={sidebar_position:2,tags:["design pattern"],description:"Directory Structure"},u="Directory Structure",s={unversionedId:"design-pattern/directory-structure",id:"design-pattern/directory-structure",isDocsHomePage:!1,title:"Directory Structure",description:"Directory Structure",source:"@site/docs/design-pattern/directory-structure.md",sourceDirName:"design-pattern",slug:"/design-pattern/directory-structure",permalink:"/docs/design-pattern/directory-structure",tags:[{label:"design pattern",permalink:"/docs/tags/design-pattern"}],version:"current",lastUpdatedAt:1636524343,formattedLastUpdatedAt:"11/10/2021",sidebarPosition:2,frontMatter:{sidebar_position:2,tags:["design pattern"],description:"Directory Structure"},sidebar:"tutorialSidebar",previous:{title:"State Management",permalink:"/docs/design-pattern/state-management"},next:{title:"Navigation Service",permalink:"/docs/design-pattern/navigation-service"}},p=[],l={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"directory-structure"},"Directory Structure"),(0,a.kt)("p",null,"Because we use bloc state management, directory structure of the project must follow the standard below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"lib\n\u2514\u2500\u2500 core\n\u2502   \u251c\u2500\u2500 client\n\u2502   \u251c\u2500\u2500 common\n\u2502   \u251c\u2500\u2500 managers (navigation, route & notification manager)\n\u2502   \u251c\u2500\u2500 services\n\u2502   \u2514\u2500\u2500 widgets (global widgets that usually used)\n\u2514\u2500\u2500 features\n    \u251c\u2500\u2500 feature_name\n    \u2502   \u251c\u2500\u2500 bloc\n    \u2502   \u251c\u2500\u2500 data\n    \u2502   \u2502   \u251c\u2500\u2500 models\n    \u2502   \u2502   \u2514\u2500\u2500 repositories (api)\n    \u2502   \u2514\u2500\u2500 presentation\n    \u2502       \u251c\u2500\u2500 pages\n    \u2502       \u2514\u2500\u2500 widgets (dedicated widget on that page)\n    \u2502\n    \u251c\u2500\u2500 another_features\n    \u2502   \u251c\u2500 - - - -\n    .   .\n    .   .\n    .   .\n")))}d.isMDXComponent=!0}}]);