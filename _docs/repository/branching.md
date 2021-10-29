---
title: Branching
tags: 
 - repository
description: Getting started 
---

# Branching
Supporting branches are used to aid parallel development between team members, ease tracking of features, and to assist in quickly fixing live production problems. Unlike the main branches, these branches always have a limited life time, since they will be removed eventually.

The different types of branches we may use are:

1. Feature branches
2. Bug branches
3. Hotfix branches
4. Enhancement branches

Each of these branches have a specific purpose and are bound to strict rules as to which branches may be their originating branch and which branches must be their merge targets. Each branch and its usage is explained below.


### Feature
Feature branches are used when developing a new feature which has the potential of a development lifespan longer than a single deployment. When starting development, the deployment in which this feature will be released may not be known. No matter when the feature branch will be finished, it will always be merged back into the <b>development</b> branch.

1. Must branch from: <b>development</b>
2. Must merge back into: <b>development</b>
3. Branch Name: [ticket number]-[short info]

such as:
```
S001-change-pass
```
or
```
S001
```

### Bugfix
Bug branches differ from feature branches only semantically. Bug branches will be created when there is a bug on the live site that should be fixed and merged into the next deployment. For that reason, a bug branch typically will not last longer than one deployment cycle. Additionally, bug branches are used to explicitly track the difference between bug development and feature development. No matter when the bug branch will be finished, it will always be merged back into <b>development</b>.

For bugfix based on issue ticket from Airtable:
```
T01-login-btn
```
or
```
T01
```

For bugfix not based on issue ticket:
```
fix-[short info]
```

example:
```
fix-login-loading
```

### Hotfix
A hotfix branch comes from the need to act immediately upon an undesired state of a live production version.

1. Must branch from: <b>master</b>
2. Must merge back into: <b>master</b> and <b>release</b>

For hotfix based on issue ticket from Airtable:
```
T0123-login-btn
```
or
```
T0123
```

For hotfix not based on issue ticket:
```
hotfix-[short info]
```

example:
```
hotfix-login-loading
```


### Enhancement
Enhancement branches are used when developing a new enhancement which has the potential of a development lifespan longer than a single deployment. When starting development, the deployment in which this feature will be released may not be known. No matter when the feature branch will be finished, it will always be merged back into the <b>development</b> branch.

1. Must branch from: <b>development</b>
2. Must merge back into: <b>development</b>
3. Branch Name: [ticket number]-[short info]

such as:
```
E001-change-pass
```
or
```
E001
```

For enhancement not based on issue ticket:
```
enhance-[short info]
```
