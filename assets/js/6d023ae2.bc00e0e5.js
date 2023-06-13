"use strict";(self.webpackChunkdlabs_mobile_apps_github_io=self.webpackChunkdlabs_mobile_apps_github_io||[]).push([[7544],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>u});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(o),u=n,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||a;return o?r.createElement(h,l(l({ref:t},p),{},{components:o})):r.createElement(h,l({ref:t},p))}));function u(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<a;c++)l[c]=o[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},1287:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=o(7462),n=(o(7294),o(3905));const a={sidebar_position:2,title:"Color",description:"Color is a critical part of any design system, but it can slip out of **control** easily. With a seemingly infinite number of hues and shades, variability from different color spaces, and various methods of picking and sampling colors, it\u2019s easy for teams to end up with dozens of color values that are being used inconsistently."},l="Color",i={unversionedId:"color/color",id:"color/color",title:"Color",description:"Color is a critical part of any design system, but it can slip out of **control** easily. With a seemingly infinite number of hues and shades, variability from different color spaces, and various methods of picking and sampling colors, it\u2019s easy for teams to end up with dozens of color values that are being used inconsistently.",source:"@site/design-system-docs/color/color.md",sourceDirName:"color",slug:"/color/",permalink:"/design-system-docs/color/",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Color",description:"Color is a critical part of any design system, but it can slip out of **control** easily. With a seemingly infinite number of hues and shades, variability from different color spaces, and various methods of picking and sampling colors, it\u2019s easy for teams to end up with dozens of color values that are being used inconsistently."},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/design-system-docs/intro"},next:{title:"Typography",permalink:"/design-system-docs/typography/"}},s={},c=[{value:"Key Colors",id:"key-colors",level:2},{value:"Accent Colors",id:"accent-colors",level:3},{value:"Neutral Colors",id:"neutral-colors",level:3},{value:"Additional Colors",id:"additional-colors",level:2},{value:"Color Roles",id:"color-roles",level:2},{value:"Light",id:"light",level:3},{value:"Dark",id:"dark",level:3},{value:"Implementation",id:"implementation",level:2},{value:"Usage",id:"usage",level:3}],p={toc:c};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"color"},"Color"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This documentation is made for developer to setup design system that already developed by UI/UX team. This documentation also flexible to all design system that want to use in the project and also help UI/UX team to understand how design system is implemented in mobile apps.")),(0,n.kt)("p",null,"Color is a critical part of any design system, but it can slip out of control easily. With a seemingly infinite number of hues and shades, variability from different color spaces, and various methods of picking and sampling colors, it\u2019s easy for teams to end up with dozens of color values that are being used inconsistently."),(0,n.kt)("p",null,"By defining a color system you can ensure you have a controlled (and consolidated) palette of acceptable colors, consistent and proper usage, and also improve ease of maintenance. "),(0,n.kt)("h2",{id:"key-colors"},"Key Colors"),(0,n.kt)("h3",{id:"accent-colors"},"Accent Colors"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Primary")," key color is used to derive roles for key components across the UI, such as the FAB, prominent buttons, active states, as well as the tint of elevated surfaces.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Secondary")," key color is used for less prominent components in the UI such as filter chips, while expanding the opportunity for color expression.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Tertiary")," key color is used to derive the roles of contrasting accents that can be used to balance primary and secondary colors or bring heightened attention to an element. The tertiary color role is left for teams to use at their discretion and is intended to support broader color expression in products."))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Sample",src:o(1674).Z,width:"2949",height:"1464"})),(0,n.kt)("h3",{id:"neutral-colors"},"Neutral Colors"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Neutral")," key color is used to derive surface color roles for backgrounds, as well as colors used for high emphasis text and icons.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Neutral variant")," key color is used to derive color roles for medium emphasis elements like text, icons, and component outlines. "))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Sample",src:o(6975).Z,width:"2048",height:"682"})),(0,n.kt)("h2",{id:"additional-colors"},"Additional Colors"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Error")," color In addition to the accent and neutral key color, the color system includes a semantic color role for error, again in the form of the error role itself, plus an on-error, error container, and on-error container role. ")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Sample",src:o(3116).Z,width:"2048",height:"600"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Divider")," color is for separted item on list.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Shadow")," color for widget that has shadow."))),(0,n.kt)("h2",{id:"color-roles"},"Color Roles"),(0,n.kt)("p",null,"Each key accent color (primary, secondary, and tertiary) is provided as a group of 4 compatible colors with different tones that can be applied for differing emphasis and visual expression, and paired for visual contrast."),(0,n.kt)("p",null,"Accent colors: Primary, secondary, and tertiary roles are formed following the same pattern of a 4-color group."),(0,n.kt)("p",null,"Primary is used here as an example:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Primary")," base color"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"On-primary")," is applied to content (icons, text, etc.) that sits on top of primary"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Primary container")," is applied to elements needing less emphasis than primary"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"On-primary container")," is applied to content (icons, text, etc.) that sits on top of primary container")),(0,n.kt)("p",null,"For more color role sample ",(0,n.kt)("a",{parentName:"p",href:"https://m3.material.io/styles/color/the-color-system/color-roles#daaa199a-3394-4bbf-9eb2-9d4a2b5e1e5a"},"check this"),"."),(0,n.kt)("h3",{id:"light"},"Light"),(0,n.kt)("p",null,"Example light mode color:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Sample",src:o(3055).Z,width:"2048",height:"1740"})),(0,n.kt)("h3",{id:"dark"},"Dark"),(0,n.kt)("p",null,"Example dark mode color:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Sample",src:o(8549).Z,width:"2048",height:"1740"})),(0,n.kt)("h2",{id:"implementation"},"Implementation"),(0,n.kt)("p",null,"On mobile apps we've created interface class called ",(0,n.kt)("inlineCode",{parentName:"p"},"ThemeColor")," you can find at ",(0,n.kt)("inlineCode",{parentName:"p"},"lib/core/theme"),", so with that class we can create more than one theme based on ThemeColor (theme > 1 not only light and dark theme). The class have properties:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"Brightness get brightness;\nColor get primary;\nColor get primaryContainer;\nColor get secondary;\nColor get secondaryContainer;\nColor get tertiary;\nColor get tertiaryContainer;\nColor get background;\nColor get surface;\nColor get surfaceVariant;\nColor get outline;\nColor get outlineVariant;\nColor get error;\nColor get errorContainer;\nColor get onPrimary;\nColor get onPrimaryContainer;\nColor get onSecondary;\nColor get onSecondaryContainer;\nColor get onTertiary;\nColor get onTertiaryContainer;\nColor get onBackground;\nColor get onSurface;\nColor get onSurfaceVariant;\nColor get onError;\nColor get onErrorContainer;\nColor get divider;\nColor get shadow;\n")),(0,n.kt)("p",null,"Sample of inheritanced class for ThemeColor are LightColor & DarkColor class (theme that usually implemented are light and dark)."),(0,n.kt)("p",null,"This theme color config place in Styles a singleton class that can be found at ",(0,n.kt)("inlineCode",{parentName:"p"},"lib/core/theme/style.dart")," The settings of color theme are set there."),(0,n.kt)("h3",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"// use from theme context\nTheme.of(context).colorScheme.primary\n\n// or use styles \nStyles().color.primary\n")))}d.isMDXComponent=!0},1674:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/accent-color-b369526ff683b1553dc43e59441102a3.png"},3116:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/error-color-f1303b3740c89d54e86dbbcd5b95d8b9.png"},6975:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/neutral-color-f01593bd9d5778fa586d40897dc58253.png"},8549:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/sample-dark-11cf2aaca517db250ba0da1a0b6868a5.png"},3055:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/sample-light-937824f8a3d298442e8fb3c8a5816881.png"}}]);