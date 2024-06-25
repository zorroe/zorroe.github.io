---
title: 给windows添加快捷指令
tags:
    shell
categories:
  - shell
date: 2024-06-25
hidden: false
---

# 给windows添加快捷指令

## 新建文件夹

在任意目录下创建文件夹

![image-20240625184834138](public/image-20240625184834138.png)

## 添加到环境变量

![image-20240625184958773](public/image-20240625184958773.png)

## 在文件夹下面新建指令文件

> nd.bat

内容为

```shell
@echo off
npm run dev
```

## 效果

> 等同于输入`npm run dev`

![image-20240625185239425](public/image-20240625185239425.png)
