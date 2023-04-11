---
sidebar_position: 1
# tags: 
#  - design pattern
description: Crashlytics helps you to collect analytics and details about crashes and errors that occur in your app. It does this through three aspects there are [Logs]  Log events in your app to be sent with the crash report for context if your app crashes, [Crash] reports Every crash is automatically turned into a crash report and sent when the application next opens and [Stack traces]  Even when an error is caught and your app recovers, the Dart stack trace can still be sent.
---

# Crashlytics

Crashlytics helps you to collect analytics and details about crashes and errors that occur in your app. It does this through three aspects:

- Logs: Log events in your app to be sent with the crash report for context if your app crashes.
- Crash reports: Every crash is automatically turned into a crash report and sent when the application next opens.
- Stack traces: Even when an error is caught and your app recovers, the Dart stack trace can still be sent.

## Installation
Add firebase crashlytics plugin 

```shell
flutter pub add firebase_crashlytics
```

### Android
Dart-only Firebase initialization for Android currently only supports reporting Dart exceptions. To report native Android exceptions, please follow the steps below.

1. Add the following classpath to your android/build.gradle file.
   
   ```js title=android/build.gradle
    dependencies {
        // ... other dependencies such as 'com.google.gms:google-services'
        classpath 'com.google.firebase:firebase-crashlytics-gradle:2.7.1'
    }
   ```

2. Apply the following to your android/app/build.gradle file.

   ```js title=android/app/build.gradle
    // ... other imports

    android {
    // ... your android config
    }

    dependencies {
    // ... your dependencies
    }

    // This must appear at the bottom of the file
    apply plugin: 'com.google.firebase.crashlytics'
   ```

3. Rebuild your app
   
   ```js
    flutter run
   ```

### iOS
Nothing to config but you must upload dSYM file from built ipa. see [Auto Upload dSYMs](#auto-upload-dsyms).

Then rebuild your app
   
```js
flutter run
```


## Usage 
First thing first you must initialize firebase service then crash the app for initial crashlytics detection on firebase

```js
// Initialize Firebase.
await Firebase.initializeApp();

// Elsewhere in your code
FirebaseCrashlytics.instance.crash();
```

This will crash the currently running application. You will then need to manually re-run your application on your emulator for Crashlytics to submit the crash report to the Firebase Console.

Then open your crashlytics console there are should has crashlitics dashboard now.

### Crashlytics Service
There are Crashlytics Service on project.

There a method :
- setIdentifier : for identification credential of error.
- reportError : for record error on crashlitics with exception and stacktrace.

```js
// example
await CrashlyticsService.reportError(e, stackTrace, log: detailMessage);
```

## Auto Upload dSYMs
This auto upload dSYMs file is include in Release Script when build IPA file completed.

see [relese script](/docs/repository/git-bash).

