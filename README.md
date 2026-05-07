# GiGi空间

zorroe 的个人博客与知识库，基于 VitePress 构建，用来记录编程实践、部署经验和日常思考。

## 技术栈

- VitePress 1.x
- Vue 3 + TypeScript
- Tailwind CSS + Sass
- Mermaid
- Shiki Twoslash / Magic Move
- GitHub Pages

## 本地开发

```bash
pnpm install
pnpm dev
```

常用命令：

```bash
pnpm docs:dev      # 启动 VitePress 开发服务
pnpm docs:build    # 构建静态站点
pnpm docs:preview  # 预览构建产物
pnpm posts:check   # 检查文章 frontmatter
pnpm lint          # 代码检查
pnpm lint:fix      # 自动修复可格式化的问题
```

## 写文章

文章放在 `docs/posts` 目录下，文件名会成为文章路径。例如 `docs/posts/git.md` 会生成 `/posts/git.html`。

推荐 frontmatter：

```md
---
title: Git 常用命令
date: 2024-01-01
tags:
  - Git
  - 工具
description: 记录常用 Git 命令和实践经验。
cover: /posts/public/git-cover.png
hidden: false
---
```

字段说明：

- `title`：文章标题。
- `date`：发布日期，推荐使用 `YYYY-MM-DD`。
- `tags`：标签数组，用于标签页聚合。
- `description`：文章摘要，用于首页摘要和文章页 SEO。
- `cover`：文章封面图，用于 Open Graph 分享图，可选。
- `hidden`：设为 `true` 时不会出现在首页、标签页和归档页。

提交前建议运行 `pnpm posts:check`，确保文章元数据完整。

## 站点结构

- `docs/index.md`：首页入口。
- `docs/page/tags.md`：标签页。
- `docs/page/archive.md`：归档页。
- `docs/.vitepress/config.ts`：VitePress 配置。
- `docs/.vitepress/theme`：自定义主题组件和工具。

## 资源建议

站点会保留文章中的原始图片和 GIF 质量。若后续页面体积偏大，优先压缩 `docs/posts/public` 中的大图和动图，再考虑替换为 WebP 或短视频。

## 部署

项目通过 GitHub Actions 构建并部署到 GitHub Pages。合并到主分支后，工作流会安装依赖、执行 lint、检查文章元数据、构建 VitePress 站点并发布静态产物。
