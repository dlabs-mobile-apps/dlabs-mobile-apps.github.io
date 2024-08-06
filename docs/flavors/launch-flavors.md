---
sidebar_position: 2
tags: 
 - flavors
description: Flavors (known as build configurations in iOS and macOS), allow you (the developer) to create separate environments for your app using the same code base. For example, you might have one flavor for your full-fledged production app, another as a limited "free" app, another for testing experimental features, and so on.
---

# Launch Flavors

## Run Flavor with Command
### Android
```shell
# flavor development
flutter run --flavor development --dart-define=ENVIRONMENT=DEV

# flavor production
flutter run --flavor production --dart-define=ENVIRONMENT=PROD
```

### iOS
```shell
# flavor development
flutter run --flavor development --dart-define=ENVIRONMENT=DEV

# flavor production
flutter run --flavor production --dart-define=ENVIRONMENT=PROD
```

## Launch Flavor for VS Code

Create a new file in `.vscode/launch.json` with the following content.


```json title=.vscode/launch.json
{
    "version": "0.2.0",
    "configurations": [
      {
        "name": "DEV | DEBUG",
        "request": "launch",
        "type": "dart",
        "program": "lib/main.dart",
        "args": [
          "--flavor",
          "development",
          "--dart-define=ENVIRONMENT=DEV",
        ],
        "flutterMode": "debug"
      },
      {
        "name": "DEV | RELEASE",
        "request": "launch",
        "type": "dart",
        "program": "lib/main.dart",
        "args": [
          "--flavor",
          "development",
          "--dart-define=ENVIRONMENT=DEV",
        ],
        "flutterMode": "release"
      },
      {
        "name": "PROD | DEBUG",
        "request": "launch",
        "type": "dart",
        "program": "lib/main.dart",
        "args": [
          "--flavor",
          "production",
          "--dart-define=ENVIRONMENT=PROD",
        ],
        "flutterMode": "debug"
      },
      {
        "name": "PROD | RELEASE",
        "request": "launch",
        "type": "dart",
        "program": "lib/main.dart",
        "args": [
          "--flavor",
          "production",
          "--dart-define=ENVIRONMENT=PROD",
        ],
        "flutterMode": "release"
      },
      
    ]
  }
```