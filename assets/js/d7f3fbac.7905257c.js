"use strict";(self.webpackChunkmobile_dev_docs=self.webpackChunkmobile_dev_docs||[]).push([[8282],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=i,m=d["".concat(p,".").concat(h)]||d[h]||c[h]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3517:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={sidebar_position:4,tags:["ios"],description:"Release iOS"},p="Release your iOS app",s={unversionedId:"releases/release-ios",id:"releases/release-ios",isDocsHomePage:!1,title:"Release your iOS app",description:"Release iOS",source:"@site/docs/releases/release-ios.md",sourceDirName:"releases",slug:"/releases/release-ios",permalink:"/docs/releases/release-ios",tags:[{label:"ios",permalink:"/docs/tags/ios"}],version:"current",lastUpdatedAt:1637571100,formattedLastUpdatedAt:"11/22/2021",sidebarPosition:4,frontMatter:{sidebar_position:4,tags:["ios"],description:"Release iOS"},sidebar:"tutorialSidebar",previous:{title:"Release Preparation",permalink:"/docs/releases/release-preparation"},next:{title:"Release your Android app",permalink:"/docs/releases/releas-android"}},u=[{value:"Intro",id:"intro",children:[],level:2},{value:"Registering your app",id:"registering-your-app",children:[{value:"Register a Bundle ID",id:"register-a-bundle-id",children:[],level:3},{value:"Create an application record on App Store Connect",id:"create-an-application-record-on-app-store-connect",children:[],level:3},{value:"Xcode project settings",id:"xcode-project-settings",children:[],level:3},{value:"Deployment version",id:"deployment-version",children:[],level:3},{value:"Version number",id:"version-number",children:[],level:3}],level:2},{value:"Create a build archive with Xcode",id:"create-a-build-archive-with-xcode",children:[],level:2},{value:"Release your app on TestFlight",id:"release-your-app-on-testflight",children:[],level:2},{value:"Release your app to the App Store",id:"release-your-app-to-the-app-store",children:[],level:2}],c={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"release-your-ios-app"},"Release your iOS app"),(0,a.kt)("h2",{id:"intro"},"Intro"),(0,a.kt)("p",null,"Xcode is required to build and release your app. You must use a device running macOS to follow this guide."),(0,a.kt)("p",null,"Before beginning the process of releasing your app, ensure that it meets Apple\u2019s App Review Guidelines."),(0,a.kt)("p",null,"In order to publish your app to the App Store, you must first enroll in the Apple Developer Program. You can read more about the various membership options in Apple\u2019s Choosing a Membership guide."),(0,a.kt)("h2",{id:"registering-your-app"},"Registering your app"),(0,a.kt)("p",null,"Registering your app involves two steps: registering a unique Bundle ID, and creating an application record on App Store Connect."),(0,a.kt)("p",null,"For a detailed overview of App Store Connect, see the ",(0,a.kt)("a",{parentName:"p",href:"https://developer.apple.com/support/app-store-connect/"},"App Store Connect")," guide."),(0,a.kt)("h3",{id:"register-a-bundle-id"},"Register a Bundle ID"),(0,a.kt)("p",null,"Every iOS application is associated with a Bundle ID, a unique identifier registered with Apple. To register a Bundle ID for your app, follow these steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open the App IDs page of your developer account."),(0,a.kt)("li",{parentName:"ul"},"Click + to create a new Bundle ID."),(0,a.kt)("li",{parentName:"ul"},"Enter an app name, select Explicit App ID, and enter an ID."),(0,a.kt)("li",{parentName:"ul"},"Select the services your app uses, then click Continue."),(0,a.kt)("li",{parentName:"ul"},"On the next page, confirm the details and click Register to register your Bundle ID.")),(0,a.kt)("h3",{id:"create-an-application-record-on-app-store-connect"},"Create an application record on App Store Connect"),(0,a.kt)("p",null,"Register your app on App Store Connect:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open App Store Connect in your browser."),(0,a.kt)("li",{parentName:"ul"},"On the App Store Connect landing page, click My Apps."),(0,a.kt)("li",{parentName:"ul"},"Click + in the top-left corner of the My Apps page, then select New App."),(0,a.kt)("li",{parentName:"ul"},"Fill in your app details in the form that appears. In the Platforms section, ensure that iOS is checked. Since Flutter does not currently support tvOS, leave that checkbox unchecked. Click Create."),(0,a.kt)("li",{parentName:"ul"},"Navigate to the application details for your app and select App Information from the sidebar."),(0,a.kt)("li",{parentName:"ul"},"In the General Information section, select the Bundle ID you registered in the preceding step.")),(0,a.kt)("p",null,"For a detailed overview, see ",(0,a.kt)("a",{parentName:"p",href:"https://help.apple.com/app-store-connect/#/dev2cd126805"},"Add an app to your account"),"."),(0,a.kt)("h3",{id:"xcode-project-settings"},"Xcode project settings"),(0,a.kt)("p",null,"Navigate to your target\u2019s settings in Xcode:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In Xcode, open Runner.xcworkspace in your app\u2019s ios folder."),(0,a.kt)("li",{parentName:"ul"},"To view your app\u2019s settings, select the Runner project in the Xcode project navigator. Then, in the main view sidebar, select the Runner target."),(0,a.kt)("li",{parentName:"ul"},"Select the General tab.")),(0,a.kt)("p",null,"Verify the most important settings."),(0,a.kt)("p",null,"In the Identity section:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Display Name\nThe display name of your app."),(0,a.kt)("li",{parentName:"ol"},"Bundle Identifier\nThe App ID you registered on App Store Connect.")),(0,a.kt)("p",null,"In the Signing & Capabilities section:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Automatically manage signing\nWhether Xcode should automatically manage app signing and provisioning. This is set true by default, which should be sufficient for most apps. For more complex scenarios, see the Code Signing Guide."),(0,a.kt)("li",{parentName:"ol"},"Team\nSelect the team associated with your registered Apple Developer account. If required, select Add Account\u2026, then update this setting.")),(0,a.kt)("p",null,"In the Build Settings section:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"iOS Deployment Target\nThe minimum iOS version that your app supports. Flutter supports iOS 9.0 and later. If your app or plugins include Objective-C or Swift code that makes use of APIs newer than iOS 9, update this setting to the highest required version.")),(0,a.kt)("h3",{id:"deployment-version"},"Deployment version"),(0,a.kt)("p",null,"If you changed Deployment Target in your Xcode project, open ",(0,a.kt)("inlineCode",{parentName:"p"},"ios/Flutter/AppframeworkInfo.plist")," in your Flutter app and update the MinimumOSVersion value to match."),(0,a.kt)("h3",{id:"version-number"},"Version number"),(0,a.kt)("p",null,"The default version number of the app is ",(0,a.kt)("inlineCode",{parentName:"p"},"1.0.0"),". To update it, navigate to the ",(0,a.kt)("inlineCode",{parentName:"p"},"pubspec.yaml")," file and update the following line:"),(0,a.kt)("p",null,"version: ",(0,a.kt)("inlineCode",{parentName:"p"},"1.0.0+1")),(0,a.kt)("p",null,"The version number is three numbers separated by dots, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"1.0.0")," in the example above, followed by an optional build number such as 1 in the example above, separated by a ",(0,a.kt)("inlineCode",{parentName:"p"},"+"),"."),(0,a.kt)("p",null,"Both the version and the build number may be overridden in Flutter\u2019s build by specifying ",(0,a.kt)("inlineCode",{parentName:"p"},"--build-name")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"--build-number"),", respectively."),(0,a.kt)("p",null,"In iOS, ",(0,a.kt)("inlineCode",{parentName:"p"},"build-name")," uses ",(0,a.kt)("inlineCode",{parentName:"p"},"CFBundleShortVersionString")," while ",(0,a.kt)("inlineCode",{parentName:"p"},"build-number")," uses ",(0,a.kt)("inlineCode",{parentName:"p"},"CFBundleVersion"),". Read more about iOS versioning at Core Foundation Keys on the Apple Developer\u2019s site."),(0,a.kt)("h2",{id:"create-a-build-archive-with-xcode"},"Create a build archive with Xcode"),(0,a.kt)("p",null,"In Xcode, configure the app version and build:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In Xcode, open Runner.xcworkspace in your app\u2019s ios folder.\nSelect Runner in the Xcode project navigator, then select the Runner target in the settings view sidebar."),(0,a.kt)("li",{parentName:"ol"},"In the Identity section, update the Version to the user-facing version number you wish to publish."),(0,a.kt)("li",{parentName:"ol"},"In the Identity section, update the Build identifier to a unique build number used to track this build on App Store Connect. Each upload requires a unique build number.")),(0,a.kt)("p",null,"Create a build archive and upload it to App Store Connect:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Run ",(0,a.kt)("inlineCode",{parentName:"li"},"flutter build ipa")," to produce a build archive."),(0,a.kt)("li",{parentName:"ol"},"Open ",(0,a.kt)("inlineCode",{parentName:"li"},"build/ios/archive/MyApp.xcarchive")," in Xcode."),(0,a.kt)("li",{parentName:"ol"},"Click the Validate App button. If any issues are reported, address them and produce another build. You can reuse the same build ID until you upload an archive."),(0,a.kt)("li",{parentName:"ol"},"After the archive has been successfully validated, click Distribute App. You can follow the status of your build in the Activities tab of your app\u2019s details page on App Store Connect.")),(0,a.kt)("h2",{id:"release-your-app-on-testflight"},"Release your app on TestFlight"),(0,a.kt)("p",null,"TestFlight allows developers to push their apps to internal and external testers. This optional step covers releasing your build on TestFlight."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Navigate to the TestFlight tab of your app\u2019s application details page on App Store Connect."),(0,a.kt)("li",{parentName:"ol"},"Select Internal Testing in the sidebar."),(0,a.kt)("li",{parentName:"ol"},"Select the build to publish to testers, then click Save."),(0,a.kt)("li",{parentName:"ol"},"Add the email addresses of any internal testers. You can add additional internal users in the Users and Roles page of App Store Connect, available from the dropdown menu at the top of the page.")),(0,a.kt)("p",null,"For more details, see ",(0,a.kt)("a",{parentName:"p",href:"https://help.apple.com/xcode/mac/current/#/dev2539d985f"},"Distribute an app using TestFlight"),"."),(0,a.kt)("h2",{id:"release-your-app-to-the-app-store"},"Release your app to the App Store"),(0,a.kt)("p",null,"When you\u2019re ready to release your app to the world, follow these steps to submit your app for review and release to the App Store:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Select Pricing and Availability from the sidebar of your app\u2019s application details page on App Store Connect and complete the required information."),(0,a.kt)("li",{parentName:"ol"},"Select the status from the sidebar. If this is the first release of this app, its status is 1.0 Prepare for Submission. Complete all required fields."),(0,a.kt)("li",{parentName:"ol"},"Click Submit for Review.")),(0,a.kt)("p",null,"Apple notifies you when their app review process is complete. Your app is released according to the instructions you specified in the Version Release section."),(0,a.kt)("p",null,"For more details, see ",(0,a.kt)("a",{parentName:"p",href:"https://help.apple.com/xcode/mac/current/#/dev067853c94"},"Distribute an app through the App Store"),"."))}d.isMDXComponent=!0}}]);