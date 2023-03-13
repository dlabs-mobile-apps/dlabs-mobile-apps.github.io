---
sidebar_position: 1
tags: 
 - ci/cd
description: Fastlane
---

# Fastlane

We use fastlane for integration to firebase app distribution, play store and app store.

## Setup Fastlane

First install fastlane on your mac device, 

```bash
brew install fastlane

or

sudo gem install fastlane
```

### android
1. Go to `android` directory then run the following command from the root of your android project:
   
   ```bash
   fastlane init
   ```

2. Install firebase plugin 

   ```bash
   fastlane add_plugin firebase_app_distribution
   ```   

3. Open `Appfile` fill the `json_key_file` and `package_name` based on your app
   
   ```bash
   json_key_file("") # Path to the json secret file - Follow https://docs.fastlane.tools/actions/supply/#setup to get one
   package_name("") # e.g. com.krausefx.app

   ``` 

4. Open `Fastfile` then add script below:
   
   ```bash
   default_platform(:android)

   platform :android do
      desc "New Android build for Learning Hub Beta App"
      # gradle(
      #     task: 'assemble',
      #     build_type: 'Release',
      # )
      desc "Deploy to the Firebase App Distribution"
      lane :beta do
            firebase_app_distribution(
               app: ENV["YOUR_ID_ANDROID_APP"],
               groups: "tester_team, dev_team",
               release_notes_file: "../release_notes.txt",
               apk_path: "../build/app/outputs/apk/release/app-release.apk",
               firebase_cli_token: ENV["FIREBASE_CLI_TOKEN"]
            )
      end

      desc "Deploy to the Open Testing Google Play Console"
      lane :deploy_internal_test do
         # Uploads Android App Bundle to Play Console.
         upload_to_play_store(
            track: 'internal',
            release_status:"draft",
            aab:"../build/app/outputs/bundle/release/app-release.aab"
         )
      end

      desc "Deploy to the Google Play Console"
      lane :deploy do
         # # Uploads Android App Bundle to Play Console. on Open Testing Track
         # upload_to_play_store(
         #   track: 'beta',
         #   release_status:"draft",
         #   aab:"../build/app/outputs/bundle/release/app-release.aab"
         # )

         # # Uploads Android App Bundle to Play Console. on Internal Testing Track
         # upload_to_play_store(
         #   track: 'internal',
         #   release_status:"draft",
         #   aab:"../build/app/outputs/bundle/release/app-release.aab"
         # )

         # Uploads Android App Bundle to Play Console.
         upload_to_play_store(
            track: 'production',
            release_status:"draft",
            aab:"../build/app/outputs/bundle/release/app-release.aab"
         )
      end
   end
   ```
   :::info
   - `ENV["YOUR_ID_ANDROID_APP"]` is app ID android on your firebase, set it into your mac profile e.g. zshrc 
  
   - *`ENV["FIREBASE_CLI_TOKEN"]` is token firebase for auth on your device, to get token cli you must install firebase cli using `curl -sL https://firebase.tools/ | bash` then `firebase login:ci`, save token to profile.
  
   - `groups` name of group tester based on your firebase group tester name
   :::

### iOS
1. Go to `ios` directory then run the following command from the root of your android project:
   
   ```bash
   fastlane init
   ```

2. Install firebase plugin 

   ```bash
   fastlane add_plugin firebase_app_distribution
   ```   

3. Open `Appfile` fill the `json_key_file` and `package_name` based on your app
   
   ```bash
   app_identifier("") # The bundle identifier of your app
   apple_id("") # Your Apple Developer Portal username

   itc_team_id("") # App Store Connect Team ID
   team_id("") # Developer Portal Team ID

   # For more information about the Appfile, see:
   #     https://docs.fastlane.tools/advanced/#appfile
   ``` 

4. Open `Fastfile` then add script below:

   ```bash
   default_platform(:ios)

   platform :ios do
   desc "Upload app to firebase app distribution"
      lane :beta do
            firebase_app_distribution(
               app: ENV["YOUR_ID_IOS_APP"],
               groups: "tester_team, dev_team",
               release_notes_file: "../release_notes.txt",
               firebase_cli_token: ENV["FIREBASE_CLI_TOKEN"],
               ipa_path: "../build/ios/ipa/learning_hub_mobileapps.ipa"
            )
      end

      desc "Upload app to testflight"
      lane :deploy do
            pilot(
               ipa: "../build/ios/ipa/learning_hub_mobileapps.ipa",
               skip_submission: true,
               skip_waiting_for_build_processing: true
            )
      end
   end
   ```
   
   :::info
   - `ENV["YOUR_ID_IOS_APP"]` is app ID iOS on your firebase, set it into your mac profile e.g. zshrc 
  
   - *`ENV["FIREBASE_CLI_TOKEN"]` is token firebase for auth on your device, to get token cli you must install firebase cli using `curl -sL https://firebase.tools/ | bash` then `firebase login:ci`, save token to profile.
  
   - `groups` name of group tester based on your firebase group tester name
   :::

5. Add config for setup profile automatically when using script, for dev andd prod profile. Add file below into root of your iOS app:
   
   ```xml title=exportDevOptions.plist
   <!-- THIS IS DEV PROFILE *-->
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
               <key>[YOUR APP BUNDLE ID]</key>
               <string>[YOUR DEV PROVISIONING PROFILE NAME]</string>
         </dict>
      </dict>
   </plist>
   ```

   ```xml title=exportAppStoreOptions.plist
   <!-- THIS IS PROD/APP STORE PROFILE *-->
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
               <key>[YOUR APP BUNDLE ID]</key>
               <string>[YOUR APP STORE PROVISIONING PROFILE NAME]</string>
         </dict>
      </dict>
   </plist>
   ```


