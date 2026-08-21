# AI Showcase Site

一个可直接部署的静态作品展示站，用来放你的 AI 图片、视频和图文作品。

## 目录

- `index.html`: 页面结构
- `styles.css`: 视觉样式
- `app.js`: 交互逻辑
- `data.js`: 作品分类和素材配置
- `assets/`: 占位图和默认视觉
- `media/`: 原始作品素材和网页播放版视频

## 你后面怎么加作品

1. 把图片或视频放进一个新建的 `media/` 目录。
2. 打开 `data.js`。
3. 如果是视频分类，优先补一个轻量封面图到 `previewImage`，不要直接用视频做卡片预览。
4. 在对应分类的 `works` 数组里补充：
   - `title`
   - `format`: `video` 或 `image`
   - `previewImage`: 卡片封面图路径，通常放在分类上
   - `src`: 实际图片或视频路径
   - `note`
   - `description`

示例：

```js
{
  title: "资讯视频 01",
  format: "video",
  src: "./media/news/video-01-web.m4v",
  note: "AI 资讯视频案例",
  description: "展示资讯类视频的内容结构和视觉风格。"
}
```

## 性能维护规则

- 首页主视觉使用 `assets/hero-leopard.webp`，保留 PNG 原图但不作为网页首屏加载。
- 卡片和抽屉列表只加载 WebP/JPG 封面，不自动加载视频。
- 视频只在用户点击播放后加载。大视频建议额外生成 `*-web.m4v` 或 `*-web.mp4`，网页里引用轻量版，原片作为备份保留。
- 单个封面建议控制在 100KB 内；单个网页播放视频尽量控制在 20MB 内。

## 访问量统计

GitHub Pages 本身不会在网页里直接展示访问量，但可以用两种方式看：

- 仓库后台：进入 GitHub 仓库的 `Insights -> Traffic`，能看到最近 14 天访问量、访客数和来源。
- 第三方统计：推荐 Plausible、Umami、GoatCounter 或 Google Analytics。拿到统计脚本后，把脚本放进 `index.html` 的 `</head>` 前即可。

如果只是面试作品集，优先推荐 Plausible 或 GoatCounter：轻量、隐私友好、不会明显拖慢页面。

## 替换首页主视觉

你后面给我正式图之后，可以：

1. 把图片放进 `assets/` 或 `media/hero/`
2. 修改 `data.js` 里的 `heroImage`

## 部署建议

### Cloudflare Pages

- 最推荐
- 直接把这个目录传到 GitHub
- 在 Cloudflare Pages 里连接仓库
- Build command 留空
- Output directory 设为 `/`

### GitHub Pages

- 也可以
- 把这个目录单独做成仓库
- 因为是纯静态站，不需要构建

## 本地预览

可以在当前目录执行：

```bash
python3 -m http.server 8080
```

然后打开：

`http://localhost:8080/ai-showcase-site/`
