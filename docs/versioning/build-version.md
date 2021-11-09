---
sidebar_position: 1
tags: 
 - versioning
description: Build Version
---

# Build Version

## Incrementing semantic versions in published packages

To help developers who rely on your code, we recommend starting your package version at 1.0.0 and incrementing as follows:

| Code status | Stage | Rule | Example version |
| --- | --- | --- | --- |
| First release | New product | Start with 1.0.0 | 1.0.0 |
| Backward compatible bug fixes | Patch release | Increment the third digit | 1.0.1 |
| Backward compatible new features | Minor release| Increment the middle digit and reset last digit to zero | 1.0.0 |
| Changes that break backward compatibility | Major release | Increment the first digit and reset middle and last digits to zero | 2.0.0 |

## Summary

Given a version number MAJOR.MINOR.PATCH, increment the:

1. MAJOR version when you make incompatible API changes,
2. MINOR version when you add functionality in a backwards compatible manner, and
3. PATCH version when you make backwards compatible bug fixes.

Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.s
