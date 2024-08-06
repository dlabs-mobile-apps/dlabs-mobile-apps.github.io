---
sidebar_position: 3
tags: 
 - flavors
description: Flavors (known as build configurations in iOS and macOS), allow you (the developer) to create separate environments for your app using the same code base. For example, you might have one flavor for your full-fledged production app, another as a limited "free" app, another for testing experimental features, and so on.
---

# Build Flavors

## Build App With Flavors
### Build Android
- Build `APK DEV` with command
  ```shell 
  flutter build apk --flavor development --dart-define=ENVIRONMENT=DEV
  ```

- Build `AppBundle DEV` with command
  ```shell 
  flutter build appbundle --flavor development --dart-define=ENVIRONMENT=DEV
  ```

- Build `APK PROD` with command
  ```shell 
  flutter build apk --flavor production --dart-define=ENVIRONMENT=PROD
  ```

- Build `AppBundle PROD` with command
  ```shell 
  flutter build appbundle --flavor production --dart-define=ENVIRONMENT=PROD
  ```

### Build iOS
Before build with flutter build command for `alpha`, `beta` and `stable` release type, add some config below at the root of ios directory:

#### Alpha Export Options
```xml title="ios/exportDevOptions.plist"
   <!-- THIS IS ALPHA PROFILE *-->
   <?xml version="1.0" encoding="UTF-8"?>
   <!DOCTYPE plist PUBLIC “-//Apple//DTD PLIST 1.0//EN” “http://www.apple.com/DTDs/PropertyList-1.0.dtd">
   <plist version="1.0">
      <dict>
         <key>method</key>
         <string>development</string>
         <key>teamID</key>
         <string>[YOUR TEAM ID]</string>
         <key>provisioningProfiles</key>
         <dict>
               <key>[YOUR APP ID ALPHA]</key>
               <string>[YOUR PROFILE NAME]</string>
               <key>[OTHER APP ID IF ANY]</key>
               <string>[OTHER PROFILE NAME]</string>
               .
               .
         </dict>
      </dict>
   </plist>
   ```

#### Beta Export Options
   ```xml title="ios/exportProdOptions.plist"
   <!-- THIS IS BETA PROFILE *-->
   <?xml version="1.0" encoding="UTF-8"?>
   <!DOCTYPE plist PUBLIC “-//Apple//DTD PLIST 1.0//EN” “http://www.apple.com/DTDs/PropertyList-1.0.dtd">
   <plist version="1.0">
      <dict>
         <key>method</key>
         <string>development</string>
         <key>teamID</key>
         <string>[YOUR TEAM ID]</string>
         <key>provisioningProfiles</key>
         <dict>
               <key>[YOUR APP ID ALPHA]</key>
               <string>[YOUR PROFILE NAME]</string>
               <key>[OTHER APP ID IF ANY]</key>
               <string>[OTHER PROFILE NAME]</string>
               .
               .
         </dict>
      </dict>
   </plist>
   ```

#### Stable Export Options
   ```xml title="ios/exportAppStoreOptions.plist"
   <!-- THIS IS STABLE PROFILE *-->
   <?xml version="1.0" encoding="UTF-8"?>
   <!DOCTYPE plist PUBLIC “-//Apple//DTD PLIST 1.0//EN” “http://www.apple.com/DTDs/PropertyList-1.0.dtd">
   <plist version="1.0">
      <dict>
         <key>method</key>
         <string>app-store</string>
         <key>teamID</key>
         <string>[YOUR TEAM ID]</string>
         <key>provisioningProfiles</key>
         <dict>
               <key>[YOUR APP ID ALPHA]</key>
               <string>[YOUR PROFILE NAME]</string>
               <key>[OTHER APP ID IF ANY]</key>
               <string>[OTHER PROFILE NAME]</string>
               .
               .
         </dict>
      </dict>
   </plist>
   ```

Then flutter build command for ios is ready to use below:

- Build `IPA DEV with DEV METHOD` with command
  ```shell 
  flutter build ipa --flavor development --dart-define=ENVIRONMENT=DEV --export-options-plist=ios/exportDevOptions.plist 
  ```

- Build `IPA PROD with DEV METHOD` with command
  ```shell 
  flutter build ipa --flavor production --dart-define=ENVIRONMENT=PROD --export-options-plist=ios/exportProdOptions.plist 
  ```

- Build `IPA PROD with APPSTORE METHOD` with command
  ```shell 
  flutter build ipa --flavor production --dart-define=ENVIRONMENT=PROD --export-options-plist=ios/exportAppStoreOptions.plist 
  ```
