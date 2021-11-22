---
sidebar_position: 5
tags: 
 - design pattern
description: API Client
---

# App Link

## Introduction

App/Universal link (universal link for ios, app link for android) is technique that mobile platforms: android and ios use to open the application via a link. The link consists of scheme and host part; if the scheme part is http or https the link will be called universal/app link, otherwise, it will be called deep link. The difference between deep link and universal/app link are that the application website has to be verified by config files placed on the web and that the flow will not be interupted by app confirmation popup.


## Android Setup

### Host/Server Section
- Host a website with https 
  
- Then upload config files at the following location:
  ```bash
  https://your-web-host-name/.well-known/assetlinks.json
  ```

  Be sure of the following:
    - The assetlinks.json file is served with content-type application/json.
    - The assetlinks.json file must be accessible over an HTTPS connection, regardless of whether your app's intent filters declare HTTPS as the data scheme.
    - The assetlinks.json file must be accessible without any redirects (no 301 or 302 redirects) and be accessible by bots (your robots.txt must allow crawling /.well-known/assetlinks.json).
    - If your app links support multiple host domains, then you must publish the assetlinks.json file on each domain.
    - Do not publish your app with dev/test URLs in the manifest file that may not be accessible to the public (such as any that are accessible only with a VPN). A work-around in such cases is to configure build variants to generate a different manifest file for dev builds.
  
- The config file is provided by mobile dev team.

  ```json title=assetlinks.json
  [
    {
      "relation": ["delegate_permission/common.handle_all_urls"],
      "target": {
        "namespace": "android_app",
        "package_name": "<android-app-package-name>",
        "sha256_cert_fingerprints": ["<android-fingerprint>"]
      }
    }
  ]
  ```

  :::info
  - `android-fingerprint` can be either debug or release fingerprint
  - get `android-debug-fingerprint` from ```keytool -exportcert -list -v -alias androiddebugkey -keystore ~/.android/debug.keystore```
  - to manage keystore checkout [https://gist.github.com/irufano/5f9e9638dcef0fdad1c81be947a72b47](https://gist.github.com/irufano/5f9e9638dcef0fdad1c81be947a72b47)
  :::

### Android Section

- Add domain for handle link to `android/app/src/main/AndroidManifest.xml` based on your requirement
- Verify website that contains `applinks.json` can be used as universal/app link by entering 
  ```
  https://digitalassetlinks.googleapis.com/v1/statements:list?source.web.site=https://<host>&relation=delegate_permission/common.handle_all_urls
  ```
  :::note
  change `host` with your website url
  :::
- Enter path to assetlinks.json file in flutter project by creating file `android/app/src/main/res/values/strings.xml`
  
  ```xml title=strings.xml
  <resources>
  <string name="asset_statements" translatable="false">[{"include": "https://<host>/.well-known/assetlinks.json"}]</string>
  </resources>
  ```
  
  And add reference to path by `android/app/src/main/AndroidManifest.xml`

  ```xml
  <meta-data
    android:name="asset_statements"
    android:resource="@string/asset_statements"/>
  ```

- Test app link
  - for device: paste link to your host website in note then tap the link
  - for emulator: 
    ```bash
    run adb shell am start -W -a android.intent.action.VIEW -d "https://<host><website-path-after-host(if any)>"
    ```

  - the app should open if app is installed


## iOS Setup

### Host/Server Section
- Host a website with https 
  
- Then upload config files at the following location:
  ```bash
  https://your-web-host-name/.well-known/apple-app-site-association
  ```
  
- The config file is provided by mobile dev team.

  ```json title=apple-app-site-association
  {
    "applinks": {
      "apps": [],
      "details": [
        {
          "appID": "<team-id>.<ios-app-package-name>",
          "paths": [
            "*"
          ]
        }
      ]
    }
  }
  ```

  :::info
  - get `team id` from [https://developer.apple.com/account/#/membership](https://developer.apple.com/account/#/membership  ) (you need to have apple developer team)
  - `ios-app-package-name` is the app name that is registered in [https://developer.apple.com/account/resources/identifiers/list](https://developer.apple.com/account/resources/identifiers/list). The name must be unique. The identifier with the same package name registered must also be configured with `Associated domains` enabled.
  :::

### iOS Section

  - Enable `Associated Domains` at capability
  - input domains for applinks at `Associated Domains` section:
  
    ```
    applinks:<your host>
    ```
    this config will store at `Runner.entitlements`
  - Test app link :
    - for device: paste link to your host website in note then tap the link 
    - for emulator: 
      ```bash
      run xcrun simctl openurl booted 'https://<host><website-path-after-host(if any)>' 
      ```

    - the app should open if app is installed