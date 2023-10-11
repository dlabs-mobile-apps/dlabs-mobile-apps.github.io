"use strict";(self.webpackChunkdlabs_mobile_apps_github_io=self.webpackChunkdlabs_mobile_apps_github_io||[]).push([[9611],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6114:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1,tags:["ci/cd"],description:"Fastlane"},o="Fastlane",p={unversionedId:"ci-cd/fastlane",id:"ci-cd/fastlane",title:"Fastlane",description:"Fastlane",source:"@site/docs/ci-cd/fastlane.md",sourceDirName:"ci-cd",slug:"/ci-cd/fastlane",permalink:"/docs/ci-cd/fastlane",draft:!1,tags:[{label:"ci/cd",permalink:"/docs/tags/ci-cd"}],version:"current",lastUpdatedAt:1697009374,formattedLastUpdatedAt:"Oct 11, 2023",sidebarPosition:1,frontMatter:{sidebar_position:1,tags:["ci/cd"],description:"Fastlane"},sidebar:"tutorialSidebar",previous:{title:"Crashlytics",permalink:"/docs/tools/crashlytics"},next:{title:"Release Script",permalink:"/docs/ci-cd/release script"}},l={},s=[{value:"Setup Fastlane",id:"setup-fastlane",level:2},{value:"android",id:"android",level:3},{value:"iOS",id:"ios",level:3}],d={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"fastlane"},"Fastlane"),(0,r.kt)("p",null,"We use fastlane for integration to firebase app distribution, play store and app store."),(0,r.kt)("h2",{id:"setup-fastlane"},"Setup Fastlane"),(0,r.kt)("p",null,"First install fastlane on your mac device, "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew install fastlane\n\nor\n\nsudo gem install fastlane\n")),(0,r.kt)("h3",{id:"android"},"android"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("inlineCode",{parentName:"p"},"android")," directory then run the following command from the root of your android project:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"fastlane init\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install firebase plugin "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"fastlane add_plugin firebase_app_distribution\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open ",(0,r.kt)("inlineCode",{parentName:"p"},"Appfile")," fill the ",(0,r.kt)("inlineCode",{parentName:"p"},"json_key_file")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"package_name")," based on your app"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'json_key_file("") # Path to the json secret file - Follow https://docs.fastlane.tools/actions/supply/#setup to get one\npackage_name("") # e.g. com.krausefx.app\n\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open ",(0,r.kt)("inlineCode",{parentName:"p"},"Fastfile")," then add script below:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'default_platform(:android)\n\nplatform :android do\n   desc "New Android build for Learning Hub Beta App"\n   # gradle(\n   #     task: \'assemble\',\n   #     build_type: \'Release\',\n   # )\n   desc "Deploy to the Firebase App Distribution"\n   lane :beta do\n         firebase_app_distribution(\n            app: ENV["YOUR_ID_ANDROID_APP"],\n            groups: "tester_team, dev_team",\n            release_notes_file: "../release_notes.txt",\n            apk_path: "../build/app/outputs/apk/release/app-release.apk",\n            firebase_cli_token: ENV["FIREBASE_CLI_TOKEN"]\n         )\n   end\n\n   desc "Deploy to the Open Testing Google Play Console"\n   lane :deploy_internal_test do\n      # Uploads Android App Bundle to Play Console.\n      upload_to_play_store(\n         track: \'internal\',\n         release_status:"draft",\n         aab:"../build/app/outputs/bundle/release/app-release.aab"\n      )\n   end\n\n   desc "Deploy to the Google Play Console"\n   lane :deploy do\n      # # Uploads Android App Bundle to Play Console. on Open Testing Track\n      # upload_to_play_store(\n      #   track: \'beta\',\n      #   release_status:"draft",\n      #   aab:"../build/app/outputs/bundle/release/app-release.aab"\n      # )\n\n      # # Uploads Android App Bundle to Play Console. on Internal Testing Track\n      # upload_to_play_store(\n      #   track: \'internal\',\n      #   release_status:"draft",\n      #   aab:"../build/app/outputs/bundle/release/app-release.aab"\n      # )\n\n      # Uploads Android App Bundle to Play Console.\n      upload_to_play_store(\n         track: \'production\',\n         release_status:"draft",\n         aab:"../build/app/outputs/bundle/release/app-release.aab"\n      )\n   end\nend\n')),(0,r.kt)("admonition",{parentName:"li",type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},'ENV["YOUR_ID_ANDROID_APP"]')," is app ID android on your firebase, set it into your mac profile e.g. zshrc ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"*",(0,r.kt)("inlineCode",{parentName:"p"},'ENV["FIREBASE_CLI_TOKEN"]')," is token firebase for auth on your device, to get token cli you must install firebase cli using ",(0,r.kt)("inlineCode",{parentName:"p"},"curl -sL https://firebase.tools/ | bash")," then ",(0,r.kt)("inlineCode",{parentName:"p"},"firebase login:ci"),", save token to profile.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"groups")," name of group tester based on your firebase group tester name")))))),(0,r.kt)("h3",{id:"ios"},"iOS"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("inlineCode",{parentName:"p"},"ios")," directory then run the following command from the root of your android project:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"fastlane init\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install firebase plugin "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"fastlane add_plugin firebase_app_distribution\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open ",(0,r.kt)("inlineCode",{parentName:"p"},"Appfile")," fill the ",(0,r.kt)("inlineCode",{parentName:"p"},"json_key_file")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"package_name")," based on your app"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'app_identifier("") # The bundle identifier of your app\n\n# For more information about the Appfile, see:\n#     https://docs.fastlane.tools/advanced/#appfile\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open ",(0,r.kt)("inlineCode",{parentName:"p"},"Fastfile")," then add script below:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'default_platform(:ios)\n\nplatform :ios do\ndesc "Upload app to firebase app distribution"\n   lane :beta do\n         firebase_app_distribution(\n            app: ENV["YOUR_ID_IOS_APP"],\n            groups: "tester_team, dev_team",\n            release_notes_file: "../release_notes.txt",\n            firebase_cli_token: ENV["FIREBASE_CLI_TOKEN"],\n            ipa_path: "../build/ios/ipa/learning_hub_mobileapps.ipa"\n         )\n   end\n\n   desc "Upload app to testflight"\n   lane :deploy do\n         app_store_connect_api_key(\n            key_id: "YOUR KEY ID",\n            issuer_id: "YOUR ISSUER ID",\n            key_content: "BASE64 KEY" // base64 encoded key,\n            is_key_content_base64: true,\n            in_house: false #boolean value if team is Enterprise or not\n         )\n         pilot(\n            ipa: "../build/ios/ipa/learning_hub_mobileapps.ipa",\n            skip_submission: true,\n            skip_waiting_for_build_processing: true\n         )\n   end\nend\n')),(0,r.kt)("admonition",{parentName:"li",type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},'ENV["YOUR_ID_IOS_APP"]')," is app ID iOS on your firebase, set it into your mac profile e.g. zshrc ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"*",(0,r.kt)("inlineCode",{parentName:"p"},'ENV["FIREBASE_CLI_TOKEN"]')," is token firebase for auth on your device, to get token cli you must install firebase cli using ",(0,r.kt)("inlineCode",{parentName:"p"},"curl -sL https://firebase.tools/ | bash")," then ",(0,r.kt)("inlineCode",{parentName:"p"},"firebase login:ci"),", save token to profile.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"groups")," name of group tester based on your firebase group tester name"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add config for setup profile automatically when using script, for dev andd prod profile. Add file below into root of your iOS app:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-xml",metastring:"title=exportDevOptions.plist",title:"exportDevOptions.plist"},'\x3c!-- THIS IS DEV PROFILE *--\x3e\n<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE plist PUBLIC \u201c-//Apple//DTD PLIST 1.0//EN\u201d \u201chttp://www.apple.com/DTDs/PropertyList-1.0.dtd">\n<plist version="1.0">\n   <dict>\n      <key>method</key>\n      <string>development</string>\n      <key>teamID</key>\n      <string>[YOUR TEAM ID]</string>\n      <key>provisioningProfiles</key>\n      <dict>\n            <key>[YOUR APP BUNDLE ID]</key>\n            <string>[YOUR DEV PROVISIONING PROFILE NAME]</string>\n      </dict>\n   </dict>\n</plist>\n')),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-xml",metastring:"title=exportAppStoreOptions.plist",title:"exportAppStoreOptions.plist"},'\x3c!-- THIS IS PROD/APP STORE PROFILE *--\x3e\n<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE plist PUBLIC \u201c-//Apple//DTD PLIST 1.0//EN\u201d \u201chttp://www.apple.com/DTDs/PropertyList-1.0.dtd">\n<plist version="1.0">\n   <dict>\n      <key>method</key>\n      <string>app-store</string>\n      <key>teamID</key>\n      <string>[YOUR TEAM ID]</string>\n      <key>provisioningProfiles</key>\n      <dict>\n            <key>[YOUR APP BUNDLE ID]</key>\n            <string>[YOUR APP STORE PROVISIONING PROFILE NAME]</string>\n      </dict>\n   </dict>\n</plist>\n')))))}c.isMDXComponent=!0}}]);