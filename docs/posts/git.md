---
title: git的一些操作
tags:
    git
categories:
  - git
date: 2024-06-22
hidden: false
---

# git的一些操作

## 回退代码到某次commit

Git回滚命令有如下三个使用方式

```shell
git reset --hard HEAD^      # 回退到上个版本。
git reset --hard HEAD~n     # 回退到前n次提交之前，若n=3，则可以回退到3次提交之前。
git reset --hard commit_sha # 回滚到指定commit的sha码，推荐使用这种方式。
```

执行上述某条命令后，再执行如下命令，强推到远程仓库

```shell
git push origin HEAD --force
```


## 在A分支上，拉取B分支的某次提交(仅拉取这次提交的代码)

```shell
git checkout A
git cherry-pick <commit-hash>
```