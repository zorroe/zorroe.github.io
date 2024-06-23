---
title: 安装本地jar包到maven仓库
tags:
  - Maven
categories:
  - 后端
date: 2024-06-21
hidden: false
---

# 安装本地jar包到maven仓库

## 命令

```shell
mvn install:install-file -Dfile=C:\Users\z0rro\Downloads\aspose-cells-8.5.2.jar -DgroupId=com.aspose -DartifactId=aspose-cells -Dversion=8.5.2 -Dpackaging=jar
```

## 效果

![image-20240623165138859](public\image-20240623165138859.png)
