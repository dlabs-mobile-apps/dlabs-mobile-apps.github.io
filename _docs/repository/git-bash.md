---
title: GIT BASH
tags: 
 - repository
description: GIT BASH
---

# Git Bash

Git command line :

## git log

To checking your log commit.
```
git log -n [number] 
```

or use --oneline for simple logs.
```
git log -n [number] --oneline
```

number is how much you need to see commits line
```
to checking 10 commits log.

git log -n 10 --oneline
```

## git rebase

Reapply commits on top of another base tip.
```
git rebase [branch base]
```

How to use rebase squash or drop on your branch:

Start it with the last commit you want to retain as-is:
```
git rebase -i HEAD~3 <rebase three commit from head>
```

An editor will be fired up with all the commits in your current branch (ignoring merge commits), which come after the given commit. You can reorder the commits in this list to your heart’s content, and you can remove them. The list looks more or less like this:
```
pick deadbee The oneline of this commit
pick fa1afe1 The oneline of the next commit
pick rasade4 The oneline of the next two commit
```

### rebase squash

Squashing multiple commits into one.
```
pick deadbee The oneline of this commit
s fa1afe1 The oneline of the next commit
s rasade4 The oneline of the next two commit
```

### rebase drop

To drop a commit, replace the command "pick" with "drop", or just delete the matching line.
```
pick deadbee The oneline of this commit
d fa1afe1 The oneline of the next commit [if this line commit that will be remove]
pick rasade4 The oneline of the next two commit
```

### rebase with conflict

In case of conflict, git rebase will stop at the first problematic commit and leave conflict markers in the tree. You can use git diff to locate the markers (<<<<<<) and make edits to resolve the conflict. For each file you edit, you need to tell Git that the conflict has been resolved, typically this would be done with :
```
git add [filename]
```

After resolving the conflict manually and updating the index with the desired resolution, you can continue the rebasing process with
```
git rebase --continue
```

Alternatively, you can undo the git rebase with
```
git rebase --abort
```

After done your rebase you need to force push your branch:
```
git push -f origin [your branch]
```

## git cherry-pick

Cherry picking in Git means to choose a commit from one branch and apply it onto another.

This is in contrast with other ways such as merge and rebase which normally apply many commits onto another branch.

Make sure you are on the branch you want to apply the commit to.

```
git switch [target branch]
```
Execute the following:
```
git cherry-pick [commit-hash]

exc:
git cherry-pick deadbee

multiple commit hash:
git cherry-pick deadbee fa1afe1 (don't forget to add space between commit hash)

```

## git stash

Use git stash when you want to record the current state of the working directory and the index, but want to go back to a clean working directory.

How to stash changes:
```
git stash
```

to checking how many stash you had:
```
git stash list
```

result would be like this:
```
stash@{0}: WIP on submit: 6ebd0e2... Update git-stash documentation
stash@{1}: On master: 9cc0589... Add git-stash
```

to apply stash but keep stash log:
```
git stash apply stash@{0}
```

to apply stash then remove from stash log:
```
git stash pop stash@{n}
```
if you only have 1 stash you can use 
```
git stash pop
```

