---
sidebar_position: 3
tags: 
 - ci/cd
description: Script for release / deploy automation
---

# Release Script
We use release script as alternative github action fot ci/cd service to our apps. 

:::info
We use alpha, beta and stable release type witch specification below:
- `alpha` => use DEV environment & DEV flavor, deploy to Firebase App Distribution
- `beta` => use PROD environment & PROD flavor, deploy to Firebase App Distribution
- `stable` => use PROD environment & PROD flavor, deploy to Google Play or App Store
:::

## Run Release Script
To run release script just run command below on your root flutter app using terminal:

```bash
./release.sh.x YOUR_APP_NAME
```

## Versioning
Choose menu **`1. Upgrade App Version`** to update version app, then follow the steps.

## Build and Deploy
Choose menu **`2. Build & Deploy App`** to build and deploy app based on platform and release type (alpha, beta, stable), then follow the steps.