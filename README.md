# AI Showcase Site

一个可直接部署的静态作品展示站，用来放你的 AI 图片、视频和图文作品。

## 目录

- `index.html`: 页面结构
- `styles.css`: 视觉样式
- `app.js`: 交互逻辑
- `data.js`: 作品分类和素材配置
- `assets/`: 占位图和默认视觉

## 你后面怎么加作品

1. 把图片或视频放进一个新建的 `media/` 目录。
2. 打开 `data.js`。
3. 在对应分类的 `works` 数组里补充：
   - `title`
   - `format`: `video` 或 `image`
   - `cover`: 封面图路径
   - `src`: 实际图片或视频路径
   - `note`
   - `description`

示例：

```js
{
  title: "资讯视频 01",
  format: "video",
  cover: "./media/news/video-01-cover.jpg",
  src: "./media/news/video-01.mp4",
  note: "AI 资讯视频案例",
  description: "展示资讯类视频的内容结构和视觉风格。"
}
```

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
