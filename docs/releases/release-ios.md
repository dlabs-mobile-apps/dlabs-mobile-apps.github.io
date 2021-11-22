---
sidebar_position: 3
tags: 
 - ios
description: Release iOS
---

# Release your iOS app
## Intro
Xcode is required to build and release your app. You must use a device running macOS to follow this guide.

Before beginning the process of releasing your app, ensure that it meets Apple’s App Review Guidelines.

In order to publish your app to the App Store, you must first enroll in the Apple Developer Program. You can read more about the various membership options in Apple’s Choosing a Membership guide.

## Registering your app
Registering your app involves two steps: registering a unique Bundle ID, and creating an application record on App Store Connect.

For a detailed overview of App Store Connect, see the [App Store Connect](https://developer.apple.com/support/app-store-connect/) guide.

### Register a Bundle ID
Every iOS application is associated with a Bundle ID, a unique identifier registered with Apple. To register a Bundle ID for your app, follow these steps:

- Open the App IDs page of your developer account.
- Click + to create a new Bundle ID.
- Enter an app name, select Explicit App ID, and enter an ID.
- Select the services your app uses, then click Continue.
- On the next page, confirm the details and click Register to register your Bundle ID.

### Create an application record on App Store Connect
Register your app on App Store Connect:

- Open App Store Connect in your browser.
- On the App Store Connect landing page, click My Apps.
- Click + in the top-left corner of the My Apps page, then select New App.
- Fill in your app details in the form that appears. In the Platforms section, ensure that iOS is checked. Since Flutter does not currently support tvOS, leave that checkbox unchecked. Click Create.
- Navigate to the application details for your app and select App Information from the sidebar.
- In the General Information section, select the Bundle ID you registered in the preceding step.

For a detailed overview, see [Add an app to your account](https://help.apple.com/app-store-connect/#/dev2cd126805).

### Xcode project settings

Navigate to your target’s settings in Xcode:
- In Xcode, open Runner.xcworkspace in your app’s ios folder.
- To view your app’s settings, select the Runner project in the Xcode project navigator. Then, in the main view sidebar, select the Runner target.
- Select the General tab.

Verify the most important settings.

In the Identity section:
1. Display Name
The display name of your app.
2. Bundle Identifier
The App ID you registered on App Store Connect.

In the Signing & Capabilities section:
1. Automatically manage signing
Whether Xcode should automatically manage app signing and provisioning. This is set true by default, which should be sufficient for most apps. For more complex scenarios, see the Code Signing Guide.
2. Team
Select the team associated with your registered Apple Developer account. If required, select Add Account…, then update this setting.

In the Build Settings section:
1. iOS Deployment Target
The minimum iOS version that your app supports. Flutter supports iOS 9.0 and later. If your app or plugins include Objective-C or Swift code that makes use of APIs newer than iOS 9, update this setting to the highest required version.

### Deployment version

If you changed Deployment Target in your Xcode project, open `ios/Flutter/AppframeworkInfo.plist` in your Flutter app and update the MinimumOSVersion value to match.

### Version number
The default version number of the app is `1.0.0`. To update it, navigate to the `pubspec.yaml` file and update the following line:

version: `1.0.0+1`

The version number is three numbers separated by dots, such as `1.0.0` in the example above, followed by an optional build number such as 1 in the example above, separated by a `+`.

Both the version and the build number may be overridden in Flutter’s build by specifying `--build-name` and `--build-number`, respectively.

In iOS, `build-name` uses `CFBundleShortVersionString` while `build-number` uses `CFBundleVersion`. Read more about iOS versioning at Core Foundation Keys on the Apple Developer’s site.

## Create a build archive with Xcode
In Xcode, configure the app version and build:

1. In Xcode, open Runner.xcworkspace in your app’s ios folder.
Select Runner in the Xcode project navigator, then select the Runner target in the settings view sidebar.
2. In the Identity section, update the Version to the user-facing version number you wish to publish.
3. In the Identity section, update the Build identifier to a unique build number used to track this build on App Store Connect. Each upload requires a unique build number.

Create a build archive and upload it to App Store Connect:
1. Run `flutter build ipa` to produce a build archive.
2. Open `build/ios/archive/MyApp.xcarchive` in Xcode.
3. Click the Validate App button. If any issues are reported, address them and produce another build. You can reuse the same build ID until you upload an archive.
4. After the archive has been successfully validated, click Distribute App. You can follow the status of your build in the Activities tab of your app’s details page on App Store Connect.


## Release your app on TestFlight
TestFlight allows developers to push their apps to internal and external testers. This optional step covers releasing your build on TestFlight.

1. Navigate to the TestFlight tab of your app’s application details page on App Store Connect.
2. Select Internal Testing in the sidebar.
3. Select the build to publish to testers, then click Save.
4. Add the email addresses of any internal testers. You can add additional internal users in the Users and Roles page of App Store Connect, available from the dropdown menu at the top of the page.

For more details, see [Distribute an app using TestFlight](https://help.apple.com/xcode/mac/current/#/dev2539d985f).

## Release your app to the App Store
When you’re ready to release your app to the world, follow these steps to submit your app for review and release to the App Store:

1. Select Pricing and Availability from the sidebar of your app’s application details page on App Store Connect and complete the required information.
2. Select the status from the sidebar. If this is the first release of this app, its status is 1.0 Prepare for Submission. Complete all required fields.
3. Click Submit for Review.

Apple notifies you when their app review process is complete. Your app is released according to the instructions you specified in the Version Release section.

For more details, see [Distribute an app through the App Store](https://help.apple.com/xcode/mac/current/#/dev067853c94).


