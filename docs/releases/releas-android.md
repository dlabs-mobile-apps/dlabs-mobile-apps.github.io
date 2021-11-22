# Release your Android app
## Intro
When you’re ready to prepare a release version of your app, for example to [publish to the Google Play Store](https://developer.android.com/distribute/googleplay/start), this page can help.

### Signing the app
To publish on the Play Store, you need to give your app a digital signature. Use the following instructions to sign your app.

On Android, there are two signing keys: deployment and upload. The end-users download the .apk signed with the ‘deployment key’. An ‘upload key’ is used to authenticate the .aab / .apk uploaded by developers onto the Play Store and is re-signed with the deployment key once in the Play Store.

It’s highly recommended to use the automatic cloud managed signing for the deployment key. For more information, see the [official Play Store documentation](https://support.google.com/googleplay/android-developer/answer/9842756?hl=en&visit_id=637731421778390412-1118288793&rd=1).

### Create an upload keystore
If you have an existing keystore, skip to the next step. If not, create one by either:

- Following the [Android Studio key generation steps](https://developer.android.com/studio/publish/app-signing#sign-apk)
- Running the following at the command line:
On Mac/Linux, use the following command:
`keytool -genkey -v -keystore ~/upload-keystore.jks -keyalg RSA -keysize 2048 -validity 10000 -alias upload`
On Windows, use the following command:
`  keytool -genkey -v -keystore c:\Users\USER_NAME\upload-keystore.jks -storetype JKS -keyalg RSA -keysize 2048 -validity 10000 -alias upload`
This command stores the upload-keystore.jks file in your home directory. If you want to store it elsewhere, change the argument you pass to the -keystore parameter. However, keep the keystore file private; don’t check it into public source control!

### Reference the keystore from the app
Create a file named [project]/android/key.properties that contains a reference to your keystore:
```
storePassword=<password from previous step>
keyPassword=<password from previous step>
keyAlias=upload
storeFile=<location of the key store file, such as /Users/<user name>/upload-keystore.jks>
```

:::note
- Keep the key.properties file private; don’t check it into public source control.
:::

### Configure signing in gradle
Configure gradle to use your upload key when building your app in release mode by editing the `[project]/android/app/build.gradle` file.

1. Add the keystore information from your properties file before the android block:
```
content_copy
   def keystoreProperties = new Properties()
   def keystorePropertiesFile = rootProject.file('key.properties')
   if (keystorePropertiesFile.exists()) {
       keystoreProperties.load(new FileInputStream(keystorePropertiesFile))
   }

   android {
         ...
   }
```
2. Load the key.properties file into the keystoreProperties object.

Find the buildTypes block:
```
content_copy
   buildTypes {
       release {
           // TODO: Add your own signing config for the release build.
           // Signing with the debug keys for now,
           // so `flutter run --release` works.
           signingConfig signingConfigs.debug
       }
   }
```
And replace it with the following signing configuration info:
```
content_copy
   signingConfigs {
       release {
           keyAlias keystoreProperties['keyAlias']
           keyPassword keystoreProperties['keyPassword']
           storeFile keystoreProperties['storeFile'] ? file(keystoreProperties['storeFile']) : null
           storePassword keystoreProperties['storePassword']
       }
   }
   buildTypes {
       release {
           signingConfig signingConfigs.release
       }
   }
```
Release builds of your app will now be signed automatically.
:::note
- You may need to run `flutter clean` after changing the gradle file. This prevents cached builds from affecting the signing process.
:::

### Reviewing the build configuration
Review the default Gradle build file, build.gradle, located in [project]/android/app and verify the values are correct, especially the following values in the defaultConfig block:

`applicationId`
Specify the final, unique (Application Id)appid

`versionCode` & `versionName`
Specify the internal app version number, and the version number display string. You can do this by setting the version property in the pubspec.yaml file. Consult the version information guidance in the versions documentation.

`minSdkVersion`, `compilesdkVersion`, & `targetSdkVersion`
Specify the minimum API level, the API level on which the app was compiled, and the maximum API level on which the app is designed to run. Consult the API level section in the versions documentation for details.

`buildToolsVersion`
Specify the version of Android SDK Build Tools that your app uses. Alternatively, you can use the Android Gradle Plugin in Android Studio, which will automatically import the minimum required Build Tools for your app without the need for this property.


## Building the app for release
You have two possible release formats when publishing to the Play Store.
1. App bundle (preferred)
2. APK

### Build an app bundle
This section describes how to build a release app bundle. If you completed the signing steps, the app bundle will be signed. At this point, you might consider obfuscating your Dart code to make it more difficult to reverse engineer. Obfuscating your code involves adding a couple flags to your build command, and maintaining additional files to de-obfuscate stack traces.

From the command line:
1. Enter `cd [project]`
2. Run `flutter build appbundle`
(Running flutter build defaults to a release build.)
The release bundle for your app is created at [project]/build/app/outputs/bundle/release/app.aab.

By default, the app bundle contains your Dart code and the Flutter runtime compiled for armeabi-v7a (ARM 32-bit), arm64-v8a (ARM 64-bit), and x86-64 (x86 64-bit).

### Build an APK
Although app bundles are preferred over APKs, there are stores that don’t yet support app bundles. In this case, build a release APK for each target ABI (Application Binary Interface).

If you completed the signing steps, the APK will be signed. At this point, you might consider obfuscating your Dart code to make it more difficult to reverse engineer. Obfuscating your code involves adding a couple flags to your build command.

From the command line:
1. Enter `cd [project]`
2. Run `flutter build apk --split-per-abi`
(The flutter build command defaults to --release.)

This command results in three APK files:
1. [project]/build/app/outputs/apk/release/app-armeabi-v7a-release.apk
2. [project]/build/app/outputs/apk/release/app-arm64-v8a-release.apk
3. [project]/build/app/outputs/apk/release/app-x86_64-release.apk

Removing the `--split-per-abi` flag results in a fat APK that contains your code compiled for all the target ABIs. Such APKs are larger in size than their split counterparts, causing the user to download native binaries that are not applicable to their device’s architecture.