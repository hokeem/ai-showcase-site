window.SHOWCASE_DATA = {
  heroImage: "./assets/hero-leopard.webp",
  views: {
    product: {
      eyebrow: "PRODUCT CASES",
      title: "产品化的 AI 项目经验",
      subtitle: "Product Cases"
    },
    video: {
      eyebrow: "VIDEO WORKS",
      title: "可直接播放的视频作品",
      subtitle: "Video Works"
    },
    image: {
      eyebrow: "IMAGE POSTS",
      title: "图文与视觉内容展示",
      subtitle: "Image Posts"
    },
    aigc: {
      eyebrow: "AIGC WORKS",
      title: "AIGC 创作流程与能力样本",
      subtitle: "AIGC Works"
    }
  },
  categories: [
    {
      id: "short-drama",
      tag: "Video / Narrative",
      title: "短剧类",
      description: "AI先自动找爆款短剧并拆脚本，再用小云雀短剧agent制作。",
      accent: "#ffb36b",
      thumb: "./media/short-drama-1.mp4",
      previewImage: "./assets/cover-short-drama.webp",
      thumbFormat: "video",
      views: ["video", "aigc"],
      workflow: ["AI 自动检索热门短剧与高潜题材", "拆解人物关系、冲突节奏与脚本结构", "调用小云雀短剧 agent 生成分镜和成片"],
      result: "形成可复用的短剧生产链路，适合展示 AI 从选题、脚本到视频生成的完整能力。",
      works: [
        {
          title: "短剧类型 01",
          format: "video",
          src: "./media/short-drama-1-fast.m4v",
          poster: "./assets/frame-short-drama-1-fast.webp",
          width: 1280,
          height: 720,
          duration: "00:30",
          description: "横版短剧成片示例。",
          note: "可直接在网页内播放预览。"
        },
        {
          title: "短剧类型 02",
          format: "video",
          src: "./media/short-drama-2-fast.m4v",
          poster: "./assets/frame-short-drama-2-fast.webp",
          width: 720,
          height: 1280,
          duration: "01:12",
          description: "竖版短剧成片示例。",
          note: "可直接在网页内播放预览。",
          highlight: "相关短剧题材在平台内热度较高，示例截图显示红果热度值 1568 万。",
          proofs: [
            {
              image: "./assets/proof-short-drama-1.jpg",
              caption: "短剧题材热度参考截图"
            }
          ]
        }
      ]
    },
    {
      id: "science-video",
      tag: "Video / Explain",
      title: "科普视频类",
      description: "AI先做脚本，再用生图模型做分镜，最后剪映拼接。",
      accent: "#c7f36d",
      thumb: "./media/science-video-1.mp4",
      previewImage: "./assets/cover-science-video.webp",
      thumbFormat: "video",
      views: ["video", "aigc"],
      workflow: ["先用 AI 完成选题和科普脚本", "用生图模型生成关键分镜素材", "在剪映中完成节奏、字幕和画面拼接"],
      result: "适合展示 AI 辅助解释型内容生产：从知识结构化到视觉化表达。",
      works: [
        {
          title: "科普视频 01",
          format: "video",
          src: "./media/science-video-1-fast.m4v",
          poster: "./assets/frame-science-video-1-fast.webp",
          width: 640,
          height: 360,
          duration: "02:48",
          description: "横版科普视频示例。",
          note: "可直接在网页内播放预览。"
        },
        {
          title: "科普视频 02",
          format: "video",
          src: "./media/science-video-2-fast.m4v",
          poster: "./assets/frame-science-video-2-fast.webp",
          width: 640,
          height: 360,
          duration: "03:00",
          description: "横版科普视频示例。",
          note: "可直接在网页内播放预览。"
        },
        {
          title: "科普视频 03",
          format: "video",
          src: "./media/science-video-3-fast.m4v",
          poster: "./assets/frame-science-video-3-fast.webp",
          width: 360,
          height: 640,
          duration: "00:32",
          description: "竖版科普视频示例。",
          note: "可直接在网页内播放预览。"
        },
        {
          title: "科普视频 04",
          format: "video",
          src: "./media/science-video-4-fast.m4v",
          poster: "./assets/frame-science-video-4-fast.webp",
          width: 360,
          height: 640,
          duration: "00:44",
          description: "竖版科普视频示例。",
          note: "可直接在网页内播放预览。"
        }
      ]
    },
    {
      id: "news-video",
      tag: "Mixed / News",
      title: "资讯类",
      description: "从找素材、下载、拼接到配音全流程 AI 完成，核心是体现AI的找素材跟拼接能力。",
      accent: "#82d1ff",
      thumb: "./media/news-2.mov",
      previewImage: "./assets/cover-news-video.webp",
      thumbFormat: "video",
      views: ["video", "image", "aigc"],
      layout: "portrait",
      workflow: ["AI 辅助找素材和整理新闻线索", "完成素材下载、拼接、配音与节奏组织", "根据小红书反馈沉淀可传播表达方式"],
      result: "小红书示例内容获得 454 赞、310 收藏、22 评论，能体现资讯类 AIGC 的传播验证。",
      works: [
        {
          title: "资讯类图文 01",
          format: "image",
          src: "./media/news-1.webp",
          width: 750,
          height: 1000,
          description: "资讯图文示例。",
          note: "可直接在网页内查看完整图片。"
        },
        {
          title: "资讯类视频 02",
          format: "video",
          src: "./media/news-2-fast.m4v",
          poster: "./assets/frame-news-2-fast.webp",
          width: 2160,
          height: 2880,
          duration: "00:52",
          description: "资讯视频示例。",
          note: "可直接在网页内播放预览。",
          highlight: "该类内容在小红书端也有不错反馈，示例内容获得 454 赞、310 收藏、22 评论。",
          proofs: [
            {
              image: "./assets/proof-news-1.png",
              caption: "资讯类内容表现截图"
            }
          ]
        }
      ]
    },
    {
      id: "ranking-video",
      tag: "Video / Ranking",
      title: "排行榜类",
      description: "先让 AI 做 HTML 结构的素材，再拼成视频。",
      accent: "#eb9fff",
      thumb: "./media/ranking-1.mp4",
      previewImage: "./assets/cover-ranking-video.webp",
      thumbFormat: "video",
      views: ["video", "aigc"],
      workflow: ["用 AI 生成排行榜选题结构", "产出 HTML 视觉素材和信息排版", "拼接成适合平台消费的视频内容"],
      result: "体现信息类内容的结构化包装能力，把静态资料转成更易消费的视频形式。",
      works: [
        {
          title: "排行榜类 01",
          format: "video",
          src: "./media/ranking-1-fast.m4v",
          poster: "./assets/frame-ranking-1-fast.webp",
          width: 720,
          height: 1280,
          duration: "01:50",
          description: "排行榜视频示例。",
          note: "可直接在网页内播放预览。"
        },
        {
          title: "排行榜类 02",
          format: "video",
          src: "./media/ranking-2-fast.m4v",
          poster: "./assets/frame-ranking-2-fast.webp",
          width: 960,
          height: 1280,
          duration: "02:07",
          description: "排行榜视频示例。",
          note: "可直接在网页内播放预览。"
        }
      ]
    },
    {
      id: "tool-video",
      tag: "Video / Tool",
      title: "工具分享类",
      description: "重点训练 AI 如何找到真正好用的工具并组织成视频。",
      accent: "#ffe46e",
      thumb: "./media/tool-1.mp4",
      previewImage: "./assets/cover-tool-video.webp",
      thumbFormat: "video",
      views: ["video", "aigc"],
      workflow: ["筛选真实有用的 AI/效率工具", "提炼工具亮点、使用场景和用户收益", "组织成短视频脚本并完成视频化表达"],
      result: "工具分享示例曾获得 701 赞、1905 收藏、21 评论，能体现选题判断和种草内容包装。",
      works: [
        {
          title: "工具分享 01",
          format: "video",
          src: "./media/tool-1-fast.m4v",
          poster: "./assets/frame-tool-1-fast.webp",
          width: 960,
          height: 1280,
          duration: "02:57",
          description: "工具分享视频示例。",
          note: "可直接在网页内播放预览。",
          highlight: "相关内容曾围绕 GitHub 8k+ star 的金融工作流做成爆款分享，小红书示例获得 701 赞、1905 收藏、21 评论。",
          proofs: [
            {
              image: "./assets/proof-tool-1.png",
              caption: "工具分享类内容表现截图 01"
            }
          ]
        },
        {
          title: "工具分享 02",
          format: "video",
          src: "./media/tool-2-fast.m4v",
          poster: "./assets/frame-tool-2-fast.webp",
          width: 960,
          height: 1280,
          duration: "02:06",
          description: "工具分享视频示例。",
          note: "可直接在网页内播放预览。",
          highlight: "相关内容也曾围绕内容创作 skill 合集获得较高热度，示例获得 224 赞、424 收藏、27 评论。",
          proofs: [
            {
              image: "./assets/proof-tool-2.jpg",
              caption: "工具分享类内容表现截图 02"
            }
          ]
        },
        {
          title: "工具分享 03",
          format: "video",
          src: "./media/tool-3-fast.m4v",
          poster: "./assets/frame-tool-3-fast.webp",
          width: 2160,
          height: 2880,
          duration: "01:41",
          description: "工具分享视频示例。",
          note: "可直接在网页内播放预览。"
        }
      ]
    },
    {
      id: "video-script",
      tag: "HTML / Script",
      title: "视频脚本",
      description: "训练 AI 抓住视频真正重要的部分做理解，并提取脚本。",
      accent: "#89e8dd",
      thumb: "./media/script-1.html",
      previewImage: "./assets/script-1-preview.webp",
      thumbFormat: "html",
      views: ["product", "aigc"],
      workflow: ["对视频进行音频、画面和镜头节点拆解", "提取冲突、节奏、转折和用户停留理由", "输出可复用的脚本分析网页"],
      result: "这个项目更像内容策略工具：把“看懂视频”变成可复用的分析标准。",
      works: [
        {
          title: "视频脚本 01",
          format: "html",
          src: "./media/script-1.html",
          width: 1680,
          height: 1100,
          description: "脚本拆解网页预览，可直接在站内细看。",
          note: "先看缩略预览，再点击细看脚本。"
        },
        {
          title: "视频脚本 02",
          format: "html",
          src: "./media/script-2.html",
          width: 1680,
          height: 1100,
          description: "详细脚本拆解网页，可直接在站内细看。",
          note: "先看缩略预览，再点击细看脚本。"
        },
        {
          title: "视频脚本 03",
          format: "html",
          src: "./media/script-3.html",
          width: 1680,
          height: 1100,
          description: "长页脚本与镜头分析网页。",
          note: "先看缩略预览，再点击细看脚本。"
        }
      ]
    },
    {
      id: "game-video",
      tag: "Video / Game",
      title: "游戏类",
      description: "在 Aippy等平台上用 agent 搭建的可直接游玩的内容。",
      accent: "#9bb2ff",
      thumb: "./media/game-1.mp4",
      previewImage: "./assets/cover-game-video.webp",
      thumbFormat: "video",
      views: ["video", "aigc"],
      workflow: ["用 agent 快速生成可交互游戏原型", "验证玩法、视觉和操作反馈", "沉淀为可展示的动态素材"],
      result: "展示 AI agent 在互动内容和轻量游戏原型中的生成能力。",
      works: [
        {
          title: "游戏素材 01",
          format: "video",
          src: "./media/game-1-fast.m4v",
          poster: "./assets/frame-game-1-fast.webp",
          width: 720,
          height: 1232,
          duration: "00:07",
          description: "竖版游戏动态素材。",
          note: "可直接在网页内播放预览。"
        },
        {
          title: "游戏素材 02",
          format: "video",
          src: "./media/game-2-fast.m4v",
          poster: "./assets/frame-game-2-fast.webp",
          width: 720,
          height: 1232,
          duration: "00:07",
          description: "竖版游戏动态素材。",
          note: "可直接在网页内播放预览。"
        },
        {
          title: "游戏素材 03",
          format: "video",
          src: "./media/game-3-fast.m4v",
          poster: "./assets/frame-game-3-fast.webp",
          width: 720,
          height: 1168,
          duration: "00:12",
          description: "竖版游戏动态素材。",
          note: "可直接在网页内播放预览。"
        },
        {
          title: "游戏素材 04",
          format: "video",
          src: "./media/game-4-fast.m4v",
          poster: "./assets/frame-game-4-fast.webp",
          width: 720,
          height: 1136,
          duration: "00:08",
          description: "竖版游戏动态素材。",
          note: "可直接在网页内播放预览。"
        },
        {
          title: "游戏素材 05",
          format: "video",
          src: "./media/game-5-fast.m4v",
          poster: "./assets/frame-game-5-fast.webp",
          width: 720,
          height: 1168,
          duration: "00:11",
          description: "竖版游戏动态素材。",
          note: "可直接在网页内播放预览。"
        },
        {
          title: "游戏素材 06",
          format: "video",
          src: "./media/game-6-fast.m4v",
          poster: "./assets/frame-game-6-fast.webp",
          width: 720,
          height: 1168,
          duration: "00:07",
          description: "竖版游戏动态素材。",
          note: "可直接在网页内播放预览。"
        }
      ]
    },
    {
      id: "image-post",
      tag: "Image / Post",
      title: "图文类",
      description: "图片生成 agent 出图，再人工精修。",
      accent: "#ffb1d5",
      thumb: "./media/image-1-1.jpg",
      previewImage: "./media/image-1-1.jpg",
      thumbFormat: "image",
      views: ["image", "aigc"],
      workflow: ["用图片生成 agent 产出基础视觉", "按平台审美和传播需求人工精修", "整理为可发布的图文素材"],
      result: "展示 AI 视觉内容从生成到精修、再到图文发布的完整过程。",
      works: [
        {
          title: "图片类 1.1",
          format: "image",
          src: "./media/image-1-1.jpg",
          width: 880,
          height: 1188,
          description: "Portrait still asset.",
          note: "Full-frame image preview available directly in page."
        },
        {
          title: "图片类 1.2",
          format: "image",
          src: "./media/image-1-2.jpg",
          width: 880,
          height: 1192,
          description: "Portrait still asset.",
          note: "Full-frame image preview available directly in page."
        },
        {
          title: "图片类 2.1",
          format: "image",
          src: "./media/image-2-1.jpg",
          width: 1529,
          height: 2048,
          description: "High-resolution portrait still.",
          note: "Full-frame image preview available directly in page."
        },
        {
          title: "图片类 2.2",
          format: "image",
          src: "./media/image-2-2.jpg",
          width: 1529,
          height: 2048,
          description: "High-resolution portrait still.",
          note: "Full-frame image preview available directly in page."
        },
        {
          title: "图片类 3.1",
          format: "image",
          src: "./media/image-3-1.jpg",
          width: 1080,
          height: 1443,
          description: "Portrait visual post.",
          note: "Full-frame image preview available directly in page."
        },
        {
          title: "图片类 3.2",
          format: "image",
          src: "./media/image-3-2.jpg",
          width: 1080,
          height: 1661,
          description: "Tall portrait visual post.",
          note: "Full-frame image preview available directly in page."
        },
        {
          title: "图片类 3.3",
          format: "image",
          src: "./media/image-3-3.jpg",
          width: 1080,
          height: 1838,
          description: "Tall portrait visual post.",
          note: "Full-frame image preview available directly in page."
        },
        {
          title: "图片类 4.1",
          format: "image",
          src: "./media/image-4-1.png",
          width: 778,
          height: 1038,
          description: "Portrait PNG post asset.",
          note: "Full-frame image preview available directly in page."
        },
        {
          title: "图片类 4.2",
          format: "image",
          src: "./media/image-4-2.png",
          width: 834,
          height: 1110,
          description: "Portrait PNG post asset.",
          note: "Full-frame image preview available directly in page."
        },
        {
          title: "图片类 4.3",
          format: "image",
          src: "./media/image-4-3.png",
          width: 830,
          height: 1112,
          description: "Portrait PNG post asset.",
          note: "Full-frame image preview available directly in page."
        }
      ]
    }
  ],
  products: [
    {
      id: "kwai-creator-ai-tool",
      tag: "AI Product / Creator Ops",
      title: "Kwai 创作者 AI 内容拆解工具",
      description: "面向海外短视频创作者孵化场景，把高质量视频拆成可复用的爆款脚本结构，辅助运营投喂作者。",
      accent: "#7dd3fc",
      role: "需求梳理、AI 产品 PRD、Demo 搭建、拆解框架设计、运营落地复盘",
      outcome: "视频筛选与拆解提效 500%，AI 内容理解准确率提升至 80%，投喂博主首月打开理由平均 +30%、发文量平均 +60%。",
      methods: ["运营工作流抽象", "爆款视频结构化拆解", "Prompt/Skill 设计", "效果评估体系", "作者孵化"],
      sections: [
        {
          title: "问题",
          body: "运营同学需要持续筛选优质视频、拆解爆点、整理脚本再投喂创作者，流程重复且依赖人工经验。"
        },
        {
          title: "方案",
          body: "把视频筛选、内容理解、爆点分析、脚本生成抽象成 AI 产品流程，并将稳定能力沉淀为可复用 Skill。"
        },
        {
          title: "价值",
          body: "它不是单点内容创作，而是把内容规律转化为可复用的生产系统，让创作者运营具备规模化投喂能力。"
        }
      ]
    },
    {
      id: "video-analysis-skill",
      tag: "AI Workflow / Script Analysis",
      title: "短视频分析与脚本拆解 Skill",
      description: "面向短视频研究、脚本复盘和内容策略，把视频转写、分镜观察、结构拆解、脚本表格输出串成标准流程。",
      accent: "#c7f36d",
      role: "分析框架设计、Prompt 体系、脚本表格标准、输出模板沉淀",
      outcome: "把零散的视频分析变成可复用工作流，可用于热点内容复盘、创作者投喂、AI 视频生成前置策划。",
      methods: ["多模态内容理解", "镜头/音频/文案拆解", "内容规律沉淀", "HTML 报告输出"],
      sections: [
        {
          title: "问题",
          body: "短视频看似直观，但真正能复用的是节奏、冲突、视觉证据、转折点和用户停留理由。"
        },
        {
          title: "方案",
          body: "将视频拆成音频、画面、镜头节点和脚本结构，再输出可复制的内容分析表。"
        },
        {
          title: "价值",
          body: "这个项目体现的是内容策略能力：不仅会做内容，也能定义什么内容值得复制，以及为什么值得复制。"
        }
      ]
    },
    {
      id: "recruiter-ai-agent",
      tag: "AI Agent / Productivity",
      title: "AI 招聘顾问协同原型",
      description: "围绕招聘沟通场景，设计候选人信息整理、岗位匹配、话术生成与结果沉淀的 AI Agent Demo。",
      accent: "#ffb36b",
      role: "场景拆解、用户链路设计、Demo 原型、候选人列表与汇报材料产出",
      outcome: "验证 AI Agent 在信息整理、匹配判断、沟通提效、结构化汇报中的可行性。",
      methods: ["Agent 工作流", "信息结构化", "岗位匹配", "Demo 验证", "B 端效率工具"],
      sections: [
        {
          title: "问题",
          body: "招聘顾问需要在大量候选人和岗位之间做信息整合、匹配判断和沟通推进，时间被重复整理消耗。"
        },
        {
          title: "方案",
          body: "将候选人信息、岗位要求、沟通话术和汇报材料放进同一条 AI 协作链路。"
        },
        {
          title: "价值",
          body: "这个 case 能补充展示你对 AI 产品的理解：AI 不只是生成内容，也可以重构一个业务角色的工作流。"
        }
      ]
    }
  ]
};
