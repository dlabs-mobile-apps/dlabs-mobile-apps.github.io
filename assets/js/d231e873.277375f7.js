"use strict";(self.webpackChunkdlabs_mobile_apps_github_io=self.webpackChunkdlabs_mobile_apps_github_io||[]).push([[4685],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),h=o,k=c["".concat(p,".").concat(h)]||c[h]||u[h]||i;return n?r.createElement(k,a(a({ref:t},d),{},{components:n})):r.createElement(k,a({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4396:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:5,tags:["android"],description:"Release Android"},a="Release your Android app",l={unversionedId:"releases/releas-android",id:"releases/releas-android",title:"Release your Android app",description:"Release Android",source:"@site/docs/releases/releas-android.md",sourceDirName:"releases",slug:"/releases/releas-android",permalink:"/docs/releases/releas-android",draft:!1,tags:[{label:"android",permalink:"/docs/tags/android"}],version:"current",lastUpdatedAt:1698023259,formattedLastUpdatedAt:"Oct 23, 2023",sidebarPosition:5,frontMatter:{sidebar_position:5,tags:["android"],description:"Release Android"},sidebar:"tutorialSidebar",previous:{title:"Release your iOS app",permalink:"/docs/releases/release-ios"},next:{title:"Crashlytics",permalink:"/docs/tools/crashlytics"}},p={},s=[{value:"Intro",id:"intro",level:2},{value:"Signing the app",id:"signing-the-app",level:3},{value:"Create an upload keystore",id:"create-an-upload-keystore",level:3},{value:"Reference the keystore from the app",id:"reference-the-keystore-from-the-app",level:3},{value:"Configure signing in gradle",id:"configure-signing-in-gradle",level:3},{value:"Reviewing the build configuration",id:"reviewing-the-build-configuration",level:3},{value:"Building the app for release",id:"building-the-app-for-release",level:2},{value:"Build an app bundle",id:"build-an-app-bundle",level:3},{value:"Build an APK",id:"build-an-apk",level:3}],d={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"release-your-android-app"},"Release your Android app"),(0,o.kt)("h2",{id:"intro"},"Intro"),(0,o.kt)("p",null,"When you\u2019re ready to prepare a release version of your app, for example to ",(0,o.kt)("a",{parentName:"p",href:"https://developer.android.com/distribute/googleplay/start"},"publish to the Google Play Store"),", this page can help."),(0,o.kt)("h3",{id:"signing-the-app"},"Signing the app"),(0,o.kt)("p",null,"To publish on the Play Store, you need to give your app a digital signature. Use the following instructions to sign your app."),(0,o.kt)("p",null,"On Android, there are two signing keys: deployment and upload. The end-users download the .apk signed with the \u2018deployment key\u2019. An \u2018upload key\u2019 is used to authenticate the .aab / .apk uploaded by developers onto the Play Store and is re-signed with the deployment key once in the Play Store."),(0,o.kt)("p",null,"It\u2019s highly recommended to use the automatic cloud managed signing for the deployment key. For more information, see the ",(0,o.kt)("a",{parentName:"p",href:"https://support.google.com/googleplay/android-developer/answer/9842756?hl=en&visit_id=637731421778390412-1118288793&rd=1"},"official Play Store documentation"),"."),(0,o.kt)("h3",{id:"create-an-upload-keystore"},"Create an upload keystore"),(0,o.kt)("p",null,"If you have an existing keystore, skip to the next step. If not, create one by either:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Following the ",(0,o.kt)("a",{parentName:"li",href:"https://developer.android.com/studio/publish/app-signing#sign-apk"},"Android Studio key generation steps")),(0,o.kt)("li",{parentName:"ul"},"Running the following at the command line:\nOn Mac/Linux, use the following command:\n",(0,o.kt)("inlineCode",{parentName:"li"},"keytool -genkey -v -keystore ~/upload-keystore.jks -keyalg RSA -keysize 2048 -validity 10000 -alias upload"),"\nOn Windows, use the following command:\n",(0,o.kt)("inlineCode",{parentName:"li"},"  keytool -genkey -v -keystore c:\\Users\\USER_NAME\\upload-keystore.jks -storetype JKS -keyalg RSA -keysize 2048 -validity 10000 -alias upload"),"\nThis command stores the upload-keystore.jks file in your home directory. If you want to store it elsewhere, change the argument you pass to the -keystore parameter. However, keep the keystore file private; don\u2019t check it into public source control!")),(0,o.kt)("h3",{id:"reference-the-keystore-from-the-app"},"Reference the keystore from the app"),(0,o.kt)("p",null,"Create a file named ","[project]","/android/key.properties that contains a reference to your keystore:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"storePassword=<password from previous step>\nkeyPassword=<password from previous step>\nkeyAlias=upload\nstoreFile=<location of the key store file, such as /Users/<user name>/upload-keystore.jks>\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Keep the key.properties file private; don\u2019t check it into public source control."))),(0,o.kt)("h3",{id:"configure-signing-in-gradle"},"Configure signing in gradle"),(0,o.kt)("p",null,"Configure gradle to use your upload key when building your app in release mode by editing the ",(0,o.kt)("inlineCode",{parentName:"p"},"[project]/android/app/build.gradle")," file."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add the keystore information from your properties file before the android block:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"content_copy\n   def keystoreProperties = new Properties()\n   def keystorePropertiesFile = rootProject.file('key.properties')\n   if (keystorePropertiesFile.exists()) {\n       keystoreProperties.load(new FileInputStream(keystorePropertiesFile))\n   }\n\n   android {\n         ...\n   }\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Load the key.properties file into the keystoreProperties object.")),(0,o.kt)("p",null,"Find the buildTypes block:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"content_copy\n   buildTypes {\n       release {\n           // TODO: Add your own signing config for the release build.\n           // Signing with the debug keys for now,\n           // so `flutter run --release` works.\n           signingConfig signingConfigs.debug\n       }\n   }\n")),(0,o.kt)("p",null,"And replace it with the following signing configuration info:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"content_copy\n   signingConfigs {\n       release {\n           keyAlias keystoreProperties['keyAlias']\n           keyPassword keystoreProperties['keyPassword']\n           storeFile keystoreProperties['storeFile'] ? file(keystoreProperties['storeFile']) : null\n           storePassword keystoreProperties['storePassword']\n       }\n   }\n   buildTypes {\n       release {\n           signingConfig signingConfigs.release\n       }\n   }\n")),(0,o.kt)("p",null,"Release builds of your app will now be signed automatically."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"You may need to run ",(0,o.kt)("inlineCode",{parentName:"li"},"flutter clean")," after changing the gradle file. This prevents cached builds from affecting the signing process."))),(0,o.kt)("h3",{id:"reviewing-the-build-configuration"},"Reviewing the build configuration"),(0,o.kt)("p",null,"Review the default Gradle build file, build.gradle, located in ","[project]","/android/app and verify the values are correct, especially the following values in the defaultConfig block:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"applicationId"),"\nSpecify the final, unique (Application Id)appid"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"versionCode")," & ",(0,o.kt)("inlineCode",{parentName:"p"},"versionName"),"\nSpecify the internal app version number, and the version number display string. You can do this by setting the version property in the pubspec.yaml file. Consult the version information guidance in the versions documentation."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"minSdkVersion"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"compilesdkVersion"),", & ",(0,o.kt)("inlineCode",{parentName:"p"},"targetSdkVersion"),"\nSpecify the minimum API level, the API level on which the app was compiled, and the maximum API level on which the app is designed to run. Consult the API level section in the versions documentation for details."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"buildToolsVersion"),"\nSpecify the version of Android SDK Build Tools that your app uses. Alternatively, you can use the Android Gradle Plugin in Android Studio, which will automatically import the minimum required Build Tools for your app without the need for this property."),(0,o.kt)("h2",{id:"building-the-app-for-release"},"Building the app for release"),(0,o.kt)("p",null,"You have two possible release formats when publishing to the Play Store."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"App bundle (preferred)"),(0,o.kt)("li",{parentName:"ol"},"APK")),(0,o.kt)("h3",{id:"build-an-app-bundle"},"Build an app bundle"),(0,o.kt)("p",null,"This section describes how to build a release app bundle. If you completed the signing steps, the app bundle will be signed. At this point, you might consider obfuscating your Dart code to make it more difficult to reverse engineer. Obfuscating your code involves adding a couple flags to your build command, and maintaining additional files to de-obfuscate stack traces."),(0,o.kt)("p",null,"From the command line:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Enter ",(0,o.kt)("inlineCode",{parentName:"li"},"cd [project]")),(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"flutter build appbundle"),"\n(Running flutter build defaults to a release build.)\nThe release bundle for your app is created at ","[project]","/build/app/outputs/bundle/release/app.aab.")),(0,o.kt)("p",null,"By default, the app bundle contains your Dart code and the Flutter runtime compiled for armeabi-v7a (ARM 32-bit), arm64-v8a (ARM 64-bit), and x86-64 (x86 64-bit)."),(0,o.kt)("h3",{id:"build-an-apk"},"Build an APK"),(0,o.kt)("p",null,"Although app bundles are preferred over APKs, there are stores that don\u2019t yet support app bundles. In this case, build a release APK for each target ABI (Application Binary Interface)."),(0,o.kt)("p",null,"If you completed the signing steps, the APK will be signed. At this point, you might consider obfuscating your Dart code to make it more difficult to reverse engineer. Obfuscating your code involves adding a couple flags to your build command."),(0,o.kt)("p",null,"From the command line:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Enter ",(0,o.kt)("inlineCode",{parentName:"li"},"cd [project]")),(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"flutter build apk --split-per-abi"),"\n(The flutter build command defaults to --release.)")),(0,o.kt)("p",null,"This command results in three APK files:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"[project]","/build/app/outputs/apk/release/app-armeabi-v7a-release.apk"),(0,o.kt)("li",{parentName:"ol"},"[project]","/build/app/outputs/apk/release/app-arm64-v8a-release.apk"),(0,o.kt)("li",{parentName:"ol"},"[project]","/build/app/outputs/apk/release/app-x86_64-release.apk")),(0,o.kt)("p",null,"Removing the ",(0,o.kt)("inlineCode",{parentName:"p"},"--split-per-abi")," flag results in a fat APK that contains your code compiled for all the target ABIs. Such APKs are larger in size than their split counterparts, causing the user to download native binaries that are not applicable to their device\u2019s architecture."))}u.isMDXComponent=!0}}]);