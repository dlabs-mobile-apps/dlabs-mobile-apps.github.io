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
├── core
│   ├── client
│   ├── common
│   ├── environment
│   ├── exception
│   ├── localization
│   ├── locator
│   ├── navigation
│   ├── service
│   ├── theme
│   └── widget (design system widget)
└── feature
    ├── feature_name
    │   ├── bloc
    │   ├── data
    │   │   ├── model
    │   │   └── repository 
    │   └── presentation
    │       ├── pages
    │       └── widgets
    │
    ├── another_features
    │   ├─ . . . 
    .   .
    .   .
    .   .
```

For testing directory structure:
```md
test
├── feature_name
│   ├── unit
│   ├── widget
│   └── integration
├── another_features
│   ├── . . .
│   .
│   .
│   .
```
