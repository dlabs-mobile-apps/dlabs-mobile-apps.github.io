---
sidebar_position: 1
tags: 
 - repository
title: GitFlow
description: GitFlow is an alternative Git branching model that involves the use of feature branches and multiple primary branches. It was first published and made popular by [Vincent Driessen at nvie](https://nvie.com/posts/a-successful-git-branching-model). We use `GitFlow` as branching strategies for better manage multiple version of project.

---
# GitFlow with Rebase Strategies
GitFlow is an alternative Git branching model that involves the use of feature branches and multiple primary branches. It was first published and made popular by [Vincent Driessen at nvie](https://nvie.com/posts/a-successful-git-branching-model). We use `GitFlow` as branching strategies for better manage multiple version of project. We use GitFlow with rebase strategies instead of using merge because when use merge if the repo has a lot of commits it can be hard to read.

## Main Branchs
The main branch provided based on service url (*API Service*). There are:

 1. Production (*for production*)
 2. staging (*for uat/testing*)
 3. development (*for development*)

### Production
Production environment is an environment where the application is completely ready for use by end-users so that this environment must be guaranteed so that there are no major bugs that can cause large unwanted problems.

### Staging 
The staging environment is an environment where QA and the product owner will try out the application before it is released to end-users

### Development 
The development environment is an environment where application developers will experiment with applications that have been made before being tested by QA and end users. This way, developers can prevent bugs before the app is ready for use by other users.


## Supporting Branches
Unlike the main branches, these branches always have a limited life time, since they will be removed eventually.

The different types of branches we may use are:
 1. Feature branches
 2. Release branches
 3. Hotfix branches
   
Each of these branches have a specific purpose and are bound to strict rules as to which branches may be their originating branch and which branches must be their merge targets.

### Feature branches

- May branch off from:
  
```bash
development
```

- Must merge back into:
  
```bash
development
```

- Branch naming convention:
```bash
feature-TicketNumber]

# example:
feature-DY79
```

Feature branches are used when developing a new feature which has the potential of a development lifespan longer than a single deployment. When starting development, the deployment in which this feature will be released may not be known. No matter when the feature branch will be finished, it will always be merged back into the <b>development</b> branch.

#### Creating a feature branch 
When starting work on a new feature, branch off from the develop branch.
```bash
$ git checkout -b feature-[TicketNumber] development
# Switched to a new branch "feature-[TicketNumber]"
```

#### Incorporating a finished feature on development
For `developer` you can `direct to pull request` on development branch and waiting for review.

For `reviewer` finished features may be merged into the develop branch to definitely add them to the upcoming release:
```bash
$ git checkout development
# Switched to branch 'development'

$ git rebase feature-[TicketNumber]
# use rebase instead of merge

$ git branch -d feature-[TicketNumber]
# Deleted branch feature-[TicketNumber] (was 05e9557).

$ git push -f origin development
```

### Release branches

- May branch off from:
  
```bash
# BETA RELEASE
development

# PROD RELEASE
development or staging
```

- Must merge back into:
  
```bash
# BETA RELEASE
development & staging

# PROD RELEASE
development, staging & production
```

- Branch naming convention:
```bash
# beta release
release-[betaFlag]-[versionNumber]-b[buildNumber]

# prod release
release-[versionNumber]-b[buildNumber]

# example:
release-beta-1.2.0-b79
release-3.2.2-b107
```

#### Creating a beta release branch 
Beta release branches are created from the development branch. The version is based on major, minor or patch update for detail yo can see versioning [here](/docs/releases/build-version). For example, say current version are 1.2.0 and we have patch update then we have decided that will become version 1.2.1, you can see comparison below:

| Update | Current Version | Current Build Number | Next version | Next Build Number (increment) |
| ------ | --------------- | -------------------- | ------------ | ----------------------------- |
| MAJOR  | 1.2.0           | 37                   | 2.0.0        | 38                            |
| MINOR  | 1.2.0           | 37                   | 1.3.0        | 38                            |
| PATCH  | 1.2.0           | 37                   | 1.2.1        | 38                            |

```bash
$ git checkout -b release-beta-1.2.1 development
# Switched to a new branch "release-beta-1.2.1"

# modified your version on project and others config manually or using script then commit

$ git commit -a -m "Beta LearningHub v1.2.1 b38"
# comment must follow this pattern : "Beta [AppName] v[versionNumber] b[buildNumber]"
```

#### Finishing a beta release branch

Merge into staging first:

```bash
$ git checkout staging
# Switched to branch 'staging'

$ git rebase release-beta-1.2.1
# use rebase instead of merge
```

then merge into development :
```bash
$ git checkout development
# Switched to branch 'development'

$ git rebase release-beta-1.2.1
# use rebase instead of merge
```

This step may well lead to a merge conflict (probably even, since we have changed the version number). If so, fix it and commit.

Now we are really done and the beta release branch may be removed, since we don’t need it anymore:

```bash
$ git branch -d release-beta-1.2.1
# delete branch 
```


#### Creating a production release branch 
The different between production and beta is flag `beta`. If you want release from staging then create branch based on staging branch else if you want release from development then create branch from development branch.

```bash
# FROM DEV
$ git checkout -b release-1.2.1 development
# Switched to a new branch "release-1.2.1"

# FROM STAGING
$ git checkout -b release-1.2.1 staging
# Switched to a new branch "release-1.2.1"

# modified your version on project and others config manually or using script then commit

$ git commit -a -m "LearningHub v1.2.1 b38"
# comment must follow this pattern : "[AppName] v[versionNumber] b[buildNumber]"
```

#### Finishing a production release branch

Merge into production first:

```bash
$ git checkout production
# Switched to branch 'production'

$ git rebase release-1.2.1
# use rebase instead of merge

# add tag with following pattern : v[versionNumber]-b[buildNumber]
$ git tag -a v1.2.1-b38
```

then merge into staging:
```bash
# staging
$ git checkout staging
$ git rebase release-beta-1.2.1
# use rebase instead of merge
```

land last merge into development :
```bash
# development
$ git checkout development
$ git rebase release-beta-1.2.1
# use rebase instead of merge
```
These step may well lead to a merge conflict (probably even, since we have changed the version number). If so, fix it and commit.

Now we are really done and the prod release branch may be removed, since we don’t need it anymore:

```bash
$ git branch -d release-1.2.1
# delete branch 
```

### Hotfix branches

- May branch off from:
  
```bash
production
```

- Must merge back into:
  
```bash
production & development
```

- Branch naming convention:
```bash
hotfix-[nextVersionNumber]

# example:
hotfix-3.2.3
```

Maintenance or “hotfix” branches are used to quickly patch production releases. Hotfix branches are a lot like release branches and feature branches except they're based on main instead of develop. This is the only branch that should fork directly off of `production`. As soon as the fix is complete, it should be merged into both `production` and `development`, and main should be tagged with an updated version number.

#### Creating a production release branch 
Hotfix branches are created from the `production` branch. For example, say version 1.2.1 is the current production release running live and causing troubles due to a severe bug so the next version is 1.2.2 because it is patch update. But changes on develop are yet unstable. We may then branch off a hotfix branch and start fixing the problem:

```bash
$ git checkout -b hotfix-1.2.2 production

# modified your version on project and others config manually or using script then commit

$ git commit -a -m "LearningHub v1.2.2 b39"
# comment must follow this pattern : "[AppName] v[versionNumber] b[buildNumber]"
```

Then, fix the bug and commit the fix in one or more separate commits.

```bash
# example: 
$ git commit -a -m "Fixed severe production problem"
```

#### Finishing a hotfix branch

Merge into production first:

```bash
$ git checkout production
# Switched to branch 'production'

$ git rebase hotfix-1.2.2
# use rebase instead of merge

# add tag with following pattern : v[versionNumber]-b[buildNumber]
$ git tag -a v1.2.2-b39
```

then merge into development :
```bash
$ git checkout development
# Switched to branch 'development'

$ git rebase hotfix-1.2.2
# use rebase instead of merge
```

This step may well lead to a merge conflict (probably even, since we have changed the version number). If so, fix it and commit.

The one exception to the rule here is that, `when a production release branch currently exists, the hotfix changes need to be merged into that release branch`, instead of development. Back-merging the bugfix into the release branch will eventually result in the bugfix being merged into development too.

Finally, remove the temporary branch:

```bash
$ git branch -d hotfix-1.2.2
# delete branch 
```

## Git Bash
There are some git operation that usually used to manage repository on mobile project, so that the repository is neater. You can see [git bash here](/docs/repository/git-bash).
