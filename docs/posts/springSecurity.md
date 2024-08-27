---
title: SpringBoot集成SpringSecurity实现登录、接口鉴权、退出登录
tags:
  - SpringBoot
  - SptingSecurity
categories:
  - 后端
date: 2024-08-27
hidden: false
---

# SpringBoot集成SpringSecurity实现登录、接口鉴权、退出登录

## 开发环境

1. SpringBoot-starter：2.6.13
2. MySQL：5.7.44
3. Java：1.8.0_411

## 引入依赖

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>
<!--生成token-->
<dependency>
    <groupId>io.jsonwebtoken</groupId>
    <artifactId>jjwt</artifactId>
    <version>0.9.0</version>
</dependency>
```
