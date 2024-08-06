---
sidebar_position: 1
tags: 
 - ci/cd
description: Fastlane is an open source platform aimed at simplifying Android and iOS deployment. Fastlane lets you automate every aspect of your development and release workflow.
---

# Fastlane
Fastlane is an open source platform aimed at simplifying Android and iOS deployment. Fastlane lets you automate every aspect of your development and release workflow.

We use fastlane for deployment to **`Firebase App Distribution`**, **`Google Play`** and **`App Store`**. Fastlane here can be used for `Release Script` or `Github Action` workflow.

## Setup Fastlane

:::info
We use alpha, beta and stable release type witch specification below:
- `alpha` => use DEV environment & DEV flavor, deploy to Firebase App Distribution
- `beta` => use PROD environment & PROD flavor, deploy to Firebase App Distribution
- `stable` => use PROD environment & PROD flavor, deploy to Google Play or App Store
:::

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

3. Open `Appfile` keep the `json_key_file` and `package_name` empty, because we use flavor and we must add below config at lanes based on flavors
   
   ```bash
   json_key_file("") # Path to the json secret file - Follow https://docs.fastlane.tools/actions/supply/#setup to get one
   package_name("") # e.g. com.krausefx.app

   ``` 

4. Open `Fastfile` then add script below:
   
   ```bash
   default_platform(:android)

   platform :android do
      desc "Deploy Alpha to The Firebase App Distribution"
      lane :alpha do
            firebase_app_distribution(
               app: ENV["YOUR_ALPHA_FIREBASE_APP_ID_ANDROID"],
               groups: "tester_team, dev_team",
               release_notes_file: "../release_notes.txt",
               apk_path: "../build/app/outputs/flutter-apk/app-development-release.apk",
               service_credentials_file: "../fad-key.json",
            )
      end

      desc "Deploy Beta to The Firebase App Distribution"
      lane :beta do
            firebase_app_distribution(
               app: ENV["YOUR_BETA_FIREBASE_APP_ID_ANDROID"],
               groups: "tester_team, dev_team",
               release_notes_file: "../release_notes.txt",
               apk_path: "../build/app/outputs/flutter-apk/app-production-release.apk",
               service_credentials_file: "../fad-key.json",
            )
      end

      desc "Deploy Production Release to the Google Play Console"
      lane :stable do
         # Uploads Android App Bundle to Play Console.
         upload_to_play_store(
            track: "production",
            release_status: "draft",
            package_name: "id.klob.app",
            aab: "../build/app/outputs/bundle/productionRelease/app-production-release.aab",
            json_key: "../playconsole-key.json"
         )
      end
   end
   ```
   
   :::info
   - `ENV["YOUR_ALPHA_FIREBASE_APP_ID_ANDROID"]` is `alpha` app ID android on your firebase, set it into your mac profile e.g. zshrc 
  
   - `ENV["YOUR_BETA_FIREBASE_APP_ID_ANDROID"]` is `beta` or `stable` app ID android on your firebase, set it into your mac profile e.g. zshrc 
  
   - `"../fad-key.json"` is service account key for upload app to Firebase App Distribution. Locate file at the root of your project
  
   - `groups` name of group tester based on your firebase group tester name

   - `"../playconsole-key.json"` is service account key for upload app to Google Play Console. Locate file at the root of your project
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

3. Open `Appfile` keep the `app_identifier` empty or commented, because we use flavor and we must add below config at lanes based on flavors
   
   ```bash
   # app_identifier("") # The bundle identifier of your app

   # For more information about the Appfile, see:
   #     https://docs.fastlane.tools/advanced/#appfile
   ``` 

4. Open `Fastfile` then add script below:

   ```bash
   default_platform(:ios)

   platform :ios do
      desc "Deploy Alpha to The Firebase App Distribution"
      lane :alpha do
            firebase_app_distribution(
               app: ENV["YOUR_ALPHA_FIREBASE_APP_ID_IOS"],
               groups: "tester_team, dev_team",
               release_notes_file: "../release_notes.txt",
               ipa_path: "../build/ios/ipa/your_app_mobile.ipa",
               service_credentials_file: "../fad-key.json",
            )
      end

      desc "Deploy Beta to The Firebase App Distribution"
      lane :beta do
            firebase_app_distribution(
               app: ENV["YOUR_BETA_FIREBASE_APP_ID_IOS"],
               groups: "tester_team, dev_team",
               release_notes_file: "../release_notes.txt",
               ipa_path: "../build/ios/ipa/your_app_mobile.ipa",
               service_credentials_file: "../fad-key.json",
            )
      end

      desc "Upload Stable App to AppStore Connect"
      lane :stable do
            app_store_connect_api_key(
               key_id: ENV["YOUR_APPSTORE_CONNECT_API_KEY_ID"],
               issuer_id: ENV["YOUR_APPSTORE_CONNECT_API_ISSUER_ID"],
               key_filepath: "../appstore-connect-key.p8",
               in_house: false
            )
            pilot(
               app_identifier: "id.klob.app",
               ipa: "../build/ios/ipa/your_app_mobile.ipa",
               skip_submission: true,
               skip_waiting_for_build_processing: true
            )
      end
   end
   ```
   
   :::info
   - `ENV["YOUR_ALPHA_FIREBASE_APP_ID_IOS"]` is `alpha` app ID ios on your firebase, set it into your mac profile e.g. zshrc 
  
   - `ENV["YOUR_BETA_FIREBASE_APP_ID_IOS"]` is `beta` or `stable` app ID ios on your firebase, set it into your mac profile e.g. zshrc 
  
   - `"../fad-key.json"` is service account key for upload app to Firebase App Distribution. Locate file at the root of your project
  
   - `groups` name of group tester based on your firebase group tester name

   - `"../appstore-connect-key.p8"` is key for upload app to App Store Connect. Locate file at the root of your project
  
   - `ENV["YOUR_APPSTORE_CONNECT_API_KEY_ID"]` & `ENV["YOUR_APPSTORE_CONNECT_API_ISSUER_ID"]` is key id and isssuer id of `appstore-connect-key.p8`
   :::


