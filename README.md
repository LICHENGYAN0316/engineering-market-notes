# 李承言 · 工程项目与金融观察

基于 [Astro Sphere](https://github.com/markhorn-dev/astro-sphere) 的静态网站，使用其项目与文章集合、独立详情页、RSS 和 sitemap 结构。上游模板的 MIT 许可见 [LICENSE](LICENSE)。

## 本地预览

需要 Node.js 24 或更高版本。

```sh
npm ci
npm run dev
```

打开终端给出的预览地址。部署前运行 `npm run build` 检查，`npm run preview` 预览构建结果。

## 更新内容

- 工程项目放在 `src/content/projects/<slug>/index.md`。现有案例可作为 frontmatter 和正文结构参考。
- 金融观察放在 `src/content/blog/<slug>/index.md`。项目和文章之间的链接使用相对路径，例如 `../../projects/vic1-price-forecast/`。
- 在 frontmatter 设置 `draft: true` 可从生成的网站、导航与订阅中移除该条目。公开 GitHub 仓库的源码可见，私人草稿应留在仓库外。
- 项目图表和页面资产可存放在同一内容目录。建议使用有权公开的图片，并给图表加上适用条件与单位。
- 首页精选项目 ID 在 `src/pages/index.astro`。账号和站点名称在 `src/consts.ts`。

## GitHub Pages

仓库 Settings → Pages → Source 选择 GitHub Actions。部署流程会在推送至 `main` 时构建并发布。Astro 的仓库子路径取自 Actions 提供的仓库名称。
