---
sidebar_position: 2
tags: 
 - design pattern
description: Directory Structure
---

# Directory Structure

Because we use bloc state management, directory structure of the project must follow the standard below:


```dart
lib
└── core
│   ├── client
│   ├── common
│   ├── managers (navigation, route & notification manager)
│   ├── services
│   └── widgets (global widgets that usually used)
└── features
    ├── feature_name
    │   ├── bloc
    │   ├── data
    │   │   ├── models
    │   │   └── repositories (api)
    │   └── presentation
    │       ├── pages
    │       └── widgets (dedicated widget on that page)
    │
    ├── another_features
    │   ├─ - - - -
    .   .
    .   .
    .   .
```
