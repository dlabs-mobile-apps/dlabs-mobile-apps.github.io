"use strict";(self.webpackChunkdlabs_mobile_apps_github_io=self.webpackChunkdlabs_mobile_apps_github_io||[]).push([[2635],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(n),u=i,k=c["".concat(p,".").concat(u)]||c[u]||m[u]||r;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3087:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:5,tags:["design pattern"],description:"App/Universal link (universal link for ios, app link for android) is technique that mobile platforms android and ios use to open the application via a link."},l="App Link",o={unversionedId:"design-pattern/app-link",id:"design-pattern/app-link",title:"App Link",description:"App/Universal link (universal link for ios, app link for android) is technique that mobile platforms android and ios use to open the application via a link.",source:"@site/docs/design-pattern/app-link.md",sourceDirName:"design-pattern",slug:"/design-pattern/app-link",permalink:"/docs/design-pattern/app-link",draft:!1,tags:[{label:"design pattern",permalink:"/docs/tags/design-pattern"}],version:"current",lastUpdatedAt:1697009374,formattedLastUpdatedAt:"Oct 11, 2023",sidebarPosition:5,frontMatter:{sidebar_position:5,tags:["design pattern"],description:"App/Universal link (universal link for ios, app link for android) is technique that mobile platforms android and ios use to open the application via a link."},sidebar:"tutorialSidebar",previous:{title:"Error Handling",permalink:"/docs/design-pattern/error-handling"},next:{title:"Build Version",permalink:"/docs/releases/build-version"}},p={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Android Setup",id:"android-setup",level:2},{value:"Host/Server Section",id:"hostserver-section",level:3},{value:"Android Section",id:"android-section",level:3},{value:"iOS Setup",id:"ios-setup",level:2},{value:"Host/Server Section",id:"hostserver-section-1",level:3},{value:"iOS Section",id:"ios-section",level:3}],d={toc:s};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"app-link"},"App Link"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"App/Universal link (universal link for ios, app link for android) is technique that mobile platforms: android and ios use to open the application via a link. The link consists of scheme and host part; if the scheme part is http or https the link will be called universal/app link, otherwise, it will be called deep link. The difference between deep link and universal/app link are that the application website has to be verified by config files placed on the web and that the flow will not be interupted by app confirmation popup."),(0,i.kt)("h2",{id:"android-setup"},"Android Setup"),(0,i.kt)("h3",{id:"hostserver-section"},"Host/Server Section"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Host a website with https ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Then upload config files at the following location:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"https://your-web-host-name/.well-known/assetlinks.json\n")),(0,i.kt)("p",{parentName:"li"},"Be sure of the following:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The assetlinks.json file is served with content-type application/json."),(0,i.kt)("li",{parentName:"ul"},"The assetlinks.json file must be accessible over an HTTPS connection, regardless of whether your app's intent filters declare HTTPS as the data scheme."),(0,i.kt)("li",{parentName:"ul"},"The assetlinks.json file must be accessible without any redirects (no 301 or 302 redirects) and be accessible by bots (your robots.txt must allow crawling /.well-known/assetlinks.json)."),(0,i.kt)("li",{parentName:"ul"},"If your app links support multiple host domains, then you must publish the assetlinks.json file on each domain."),(0,i.kt)("li",{parentName:"ul"},"Do not publish your app with dev/test URLs in the manifest file that may not be accessible to the public (such as any that are accessible only with a VPN). A work-around in such cases is to configure build variants to generate a different manifest file for dev builds."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The config file is provided by mobile dev team."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=assetlinks.json",title:"assetlinks.json"},'[\n  {\n    "relation": ["delegate_permission/common.handle_all_urls"],\n    "target": {\n      "namespace": "android_app",\n      "package_name": "<android-app-package-name>",\n      "sha256_cert_fingerprints": ["<android-fingerprint>"]\n    }\n  }\n]\n')),(0,i.kt)("admonition",{parentName:"li",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"android-fingerprint")," can be either debug or release fingerprint"),(0,i.kt)("li",{parentName:"ul"},"get ",(0,i.kt)("inlineCode",{parentName:"li"},"android-debug-fingerprint")," from ",(0,i.kt)("inlineCode",{parentName:"li"},"keytool -exportcert -list -v -alias androiddebugkey -keystore ~/.android/debug.keystore")),(0,i.kt)("li",{parentName:"ul"},"to manage keystore checkout ",(0,i.kt)("a",{parentName:"li",href:"https://gist.github.com/irufano/5f9e9638dcef0fdad1c81be947a72b47"},"https://gist.github.com/irufano/5f9e9638dcef0fdad1c81be947a72b47")))))),(0,i.kt)("h3",{id:"android-section"},"Android Section"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Add domain for handle link to ",(0,i.kt)("inlineCode",{parentName:"p"},"android/app/src/main/AndroidManifest.xml")," based on your requirement")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Verify website that contains ",(0,i.kt)("inlineCode",{parentName:"p"},"applinks.json")," can be used as universal/app link by entering "),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"https://digitalassetlinks.googleapis.com/v1/statements:list?source.web.site=https://<host>&relation=delegate_permission/common.handle_all_urls\n")),(0,i.kt)("admonition",{parentName:"li",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"change ",(0,i.kt)("inlineCode",{parentName:"p"},"host")," with your website url"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Enter path to assetlinks.json file in flutter project by creating file ",(0,i.kt)("inlineCode",{parentName:"p"},"android/app/src/main/res/values/strings.xml")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-xml",metastring:"title=strings.xml",title:"strings.xml"},'<resources>\n<string name="asset_statements" translatable="false">[{"include": "https://<host>/.well-known/assetlinks.json"}]</string>\n</resources>\n')),(0,i.kt)("p",{parentName:"li"},"And add reference to path by ",(0,i.kt)("inlineCode",{parentName:"p"},"android/app/src/main/AndroidManifest.xml")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<meta-data\n  android:name="asset_statements"\n  android:resource="@string/asset_statements"/>\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Test app link"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"for device: paste link to your host website in note then tap the link")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"for emulator: "),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'run adb shell am start -W -a android.intent.action.VIEW -d "https://<host><website-path-after-host(if any)>"\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"the app should open if app is installed"))))),(0,i.kt)("h2",{id:"ios-setup"},"iOS Setup"),(0,i.kt)("h3",{id:"hostserver-section-1"},"Host/Server Section"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Host a website with https ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Then upload config files at the following location:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"https://your-web-host-name/.well-known/apple-app-site-association\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The config file is provided by mobile dev team."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=apple-app-site-association",title:"apple-app-site-association"},'{\n  "applinks": {\n    "apps": [],\n    "details": [\n      {\n        "appID": "<team-id>.<ios-app-package-name>",\n        "paths": [\n          "*"\n        ]\n      }\n    ]\n  }\n}\n')),(0,i.kt)("admonition",{parentName:"li",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"get ",(0,i.kt)("inlineCode",{parentName:"li"},"team id")," from ",(0,i.kt)("a",{parentName:"li",href:"https://developer.apple.com/account/#/membership"},"https://developer.apple.com/account/#/membership")," (you need to have apple developer team)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ios-app-package-name")," is the app name that is registered in ",(0,i.kt)("a",{parentName:"li",href:"https://developer.apple.com/account/resources/identifiers/list"},"https://developer.apple.com/account/resources/identifiers/list"),". The name must be unique. The identifier with the same package name registered must also be configured with ",(0,i.kt)("inlineCode",{parentName:"li"},"Associated domains")," enabled."))))),(0,i.kt)("h3",{id:"ios-section"},"iOS Section"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Enable ",(0,i.kt)("inlineCode",{parentName:"p"},"Associated Domains")," at capability")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"input domains for applinks at ",(0,i.kt)("inlineCode",{parentName:"p"},"Associated Domains")," section:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"applinks:<your host>\n")),(0,i.kt)("p",{parentName:"li"},"this config will store at ",(0,i.kt)("inlineCode",{parentName:"p"},"Runner.entitlements"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Test app link :"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"for device: paste link to your host website in note then tap the link ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"for emulator: "),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"run xcrun simctl openurl booted 'https://<host><website-path-after-host(if any)>' \n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"the app should open if app is installed"))))))}m.isMDXComponent=!0}}]);