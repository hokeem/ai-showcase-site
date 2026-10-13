window.SHOWCASE_DATA = {
  heroImage: "./assets/hero-leopard.webp",
  views: {
    product: {
      eyebrow: "PRODUCT CASES",
      title: "产品化的 AI 项目经验",
      subtitle: "Product Cases"
    },
    image: {
      eyebrow: "IMAGE POSTS",
      title: "图文与视觉内容展示",
      subtitle: "Image Posts"
    },
    aigc: {
      eyebrow: "AIGC VIDEOS",
      title: "AIGC 视频作品",
      subtitle: "AIGC Videos"
    }
  },
  categories: [
    {
      id: "aigc-brand-films",
      tag: "AIGC / Brand Films",
      title: "品牌与产品视觉",
      description: "从糖玩新品、服务品牌到家电产品，用 AIGC 完成风格设定、镜头生成与商业叙事。",
      accent: "#ffb36b",
      previewImage: "./assets/aigc-amos-doodle-egg.webp",
      views: ["aigc"],
      workflow: ["围绕产品卖点确定视觉概念与叙事结构", "用参考图、角色设定和提示词控制画面一致性", "组合生成镜头并完成剪辑、字幕与品牌落版"],
      result: "覆盖实拍融合、卡通角色和拟人化产品叙事，形成可直接用于品牌传播的完整成片。",
      processImage: {
        src: "./assets/aigc-amos-doodle-egg-process.webp",
        alt: "阿麦斯涂鸦蛋 AIGC 制作流程节点图",
        caption: "阿麦斯涂鸦蛋：多参考图、角色设定与镜头生成过程"
      },
      works: [
        {
          title: "阿麦斯涂鸦蛋",
          label: "糖玩新品 TVC",
          source: "来源：AMOS 涂鸦蛋糖玩新品 TVC",
          format: "video",
          src: "./media/aigc-amos-doodle-egg.mp4",
          poster: "./assets/aigc-amos-doodle-egg.webp",
          width: 1280,
          height: 720,
          duration: "00:59"
        },
        {
          title: "猫头鹰维修 · 小修匠",
          label: "品牌形象片",
          source: "来源：猫头鹰维修品牌形象片",
          format: "video",
          src: "./media/aigc-owl-repair.mp4",
          poster: "./assets/aigc-owl-repair.webp",
          width: 1280,
          height: 720,
          duration: "00:25"
        },
        {
          title: "扫地机器人",
          label: "产品广告片",
          source: "来源：家电产品广告片",
          format: "video",
          src: "./media/aigc-robot-vacuum.mp4",
          poster: "./assets/aigc-robot-vacuum.webp",
          width: 1280,
          height: 720,
          duration: "00:54"
        }
      ]
    },
    {
      id: "aigc-visual-films",
      tag: "AIGC / Visual Films",
      title: "3D 动画与美妆视觉",
      description: "把不同品类转换成有辨识度的视觉语言，覆盖三维卡通叙事、护肤质感与自然主题产品片。",
      accent: "#82d1ff",
      previewImage: "./assets/aigc-mini-game-film.webp",
      views: ["aigc"],
      workflow: ["先定义品类对应的视觉风格与核心意象", "生成关键镜头并校准产品、角色和场景一致性", "按广告节奏组织特写、转场、字幕与声音"],
      result: "一套流程适配三维动画、护肤和美妆品类，能根据产品气质切换不同的 AIGC 视觉表达。",
      works: [
        {
          title: "小程序短片",
          label: "3D 动画短片",
          source: "来源：小程序 3D 动画宣传短片",
          format: "video",
          src: "./media/aigc-mini-game-film.mp4",
          poster: "./assets/aigc-mini-game-film.webp",
          width: 1280,
          height: 720,
          duration: "01:00"
        },
        {
          title: "面膜护肤 TVC",
          label: "护肤 TVC",
          source: "来源：护肤品牌 TVC，源素材按 8K 生成",
          format: "video",
          src: "./media/aigc-mask-tvc.mp4",
          poster: "./assets/aigc-mask-tvc.webp",
          width: 1280,
          height: 720,
          duration: "01:03"
        },
        {
          title: "FOXCUP 植物双萃水散粉",
          label: "美妆产品片",
          source: "来源：FOXCUP 植物双萃水散粉产品片",
          format: "video",
          src: "./media/aigc-foxcup-powder.mp4",
          poster: "./assets/aigc-foxcup-powder.webp",
          width: 1280,
          height: 720,
          duration: "00:32"
        }
      ]
    },
    {
      id: "short-drama",
      tag: "Video / Narrative",
      title: "短剧",
      description: "AI先自动找爆款短剧并拆脚本，再用小云雀短剧agent制作。",
      accent: "#ffb36b",
      thumb: "./media/short-drama-1.mp4",
      previewImage: "./assets/cover-short-drama.webp",
      thumbFormat: "video",
      views: ["aigc"],
      workflow: ["AI 自动检索热门短剧与高潜题材", "拆解人物关系、冲突节奏与脚本结构", "调用小云雀短剧 agent 生成分镜和成片"],
      result: "形成可复用的短剧生产链路，适合展示 AI 从选题、脚本到视频生成的完整能力。",
      works: [
        {
          title: "AI 横屏短剧",
          source: "来源：小云雀短剧 Agent 生成实验",
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
          title: "AI 竖屏短剧",
          source: "来源：小云雀短剧 Agent 生成实验",
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
        },
        {
          title: "竖屏短剧 · 英文线",
          source: "来源：AI 真人短剧项目英文线",
          format: "video",
          src: "./media/aigc-vertical-drama-en.mp4",
          poster: "./assets/aigc-vertical-drama-en.webp",
          width: 540,
          height: 960,
          duration: "01:21"
        },
        {
          title: "竖屏短剧 · 都市情感线",
          source: "来源：AI 真人短剧项目都市情感线",
          format: "video",
          src: "./media/aigc-vertical-drama-cn.mp4",
          poster: "./assets/aigc-vertical-drama-cn.webp",
          width: 540,
          height: 960,
          duration: "01:31"
        }
      ]
    },
    {
      id: "science-video",
      tag: "Video / Explain",
      title: "科普视频",
      source: "来源：个人 AIGC 科普视频实验",
      description: "AI先做脚本，再用生图模型做分镜，最后剪映拼接。",
      accent: "#c7f36d",
      thumb: "./media/science-video-1.mp4",
      previewImage: "./assets/cover-science-video.webp",
      thumbFormat: "video",
      views: ["aigc"],
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
      title: "资讯视频",
      source: "来源：个人小红书资讯内容",
      description: "从找素材、下载、拼接到配音全流程 AI 完成，核心是体现AI的找素材跟拼接能力。",
      accent: "#82d1ff",
      thumb: "./media/news-2.mov",
      previewImage: "./assets/cover-news-video.webp",
      thumbFormat: "video",
      views: ["aigc"],
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
      title: "排行榜视频",
      source: "来源：AI HTML 素材转视频实验",
      description: "先让 AI 做 HTML 结构的素材，再拼成视频。",
      accent: "#eb9fff",
      thumb: "./media/ranking-1.mp4",
      previewImage: "./assets/cover-ranking-video.webp",
      thumbFormat: "video",
      views: ["aigc"],
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
      title: "工具分享",
      source: "来源：个人小红书工具分享内容",
      description: "重点训练 AI 如何找到真正好用的工具并组织成视频。",
      accent: "#ffe46e",
      thumb: "./media/tool-1.mp4",
      previewImage: "./assets/cover-tool-video.webp",
      thumbFormat: "video",
      views: ["aigc"],
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
      id: "game-video",
      tag: "Video / Game",
      title: "游戏与互动",
      source: "来源：Aippy Agent 游戏原型",
      description: "在 Aippy等平台上用 agent 搭建的可直接游玩的内容。",
      accent: "#9bb2ff",
      thumb: "./media/game-1.mp4",
      previewImage: "./assets/cover-game-video.webp",
      thumbFormat: "video",
      views: ["aigc"],
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
      id: "hotcoin-x-social",
      tag: "Image / Social",
      title: "Hotcoin X 社媒视觉",
      description: "面向交易所 X 平台的财经内容视觉。",
      accent: "#8df2b6",
      previewImage: "./assets/tradfi-01.webp",
      thumbFormat: "image",
      views: ["image"],
      compact: true,
      source: "来源：Hotcoin X / TradFi 社媒宣传内容",
      works: [
        {
          title: "Costco Q4 财报预告 01",
          format: "image",
          src: "./assets/tradfi-01.webp",
          width: 1,
          height: 1
        },
        {
          title: "Costco Q4 财报预告 02",
          format: "image",
          src: "./assets/tradfi-02.webp",
          width: 1,
          height: 1
        },
        {
          title: "Micron FY2026 Q4 财报预告 01",
          format: "image",
          src: "./assets/tradfi-03.webp",
          width: 1,
          height: 1
        },
        {
          title: "Micron FY2026 Q4 财报预告 02",
          format: "image",
          src: "./assets/tradfi-04.webp",
          width: 1,
          height: 1
        },
        {
          title: "PepsiCo 2026 Q3 财报预告 01",
          format: "image",
          src: "./assets/tradfi-05.webp",
          width: 1,
          height: 1
        },
        {
          title: "PepsiCo 2026 Q3 财报预告 02",
          format: "image",
          src: "./assets/tradfi-06.webp",
          width: 1,
          height: 1
        },
        {
          title: "达美航空 Q3 财报预告 01",
          format: "image",
          src: "./assets/tradfi-07.webp",
          width: 1,
          height: 1
        },
        {
          title: "达美航空 Q3 财报预告 02",
          format: "image",
          src: "./assets/tradfi-08.webp",
          width: 1,
          height: 1
        },
        {
          title: "美联储官员动态：John Williams",
          format: "image",
          src: "./assets/tradfi-09.webp",
          width: 1,
          height: 1
        },
        {
          title: "美联储官员动态：Philip Jefferson",
          format: "image",
          src: "./assets/tradfi-10.webp",
          width: 1,
          height: 1
        },
        {
          title: "美联储官员动态：Thomas Barkin",
          format: "image",
          src: "./assets/tradfi-11.webp",
          width: 1,
          height: 1
        },
        {
          title: "美国 9 月 PMI 01",
          format: "image",
          src: "./assets/tradfi-12.webp",
          width: 1,
          height: 1
        },
        {
          title: "美国 9 月 PMI 02",
          format: "image",
          src: "./assets/tradfi-13.webp",
          width: 1,
          height: 1
        },
        {
          title: "美国 9 月 PMI 03",
          format: "image",
          src: "./assets/tradfi-14.webp",
          width: 1,
          height: 1
        },
        {
          title: "美国消费者信心 01",
          format: "image",
          src: "./assets/tradfi-15.webp",
          width: 1,
          height: 1
        },
        {
          title: "美国消费者信心 02",
          format: "image",
          src: "./assets/tradfi-16.webp",
          width: 1,
          height: 1
        },
        {
          title: "美股 AI 受益产业链",
          format: "image",
          src: "./assets/tradfi-17.webp",
          width: 1,
          height: 1
        },
        {
          title: "美股 ETF 50 强 01",
          format: "image",
          src: "./assets/tradfi-18.webp",
          width: 1,
          height: 1
        },
        {
          title: "美股 ETF 50 强 02",
          format: "image",
          src: "./assets/tradfi-19.webp",
          width: 1,
          height: 1
        },
        {
          title: "美股 ETF 50 强 03",
          format: "image",
          src: "./assets/tradfi-20.webp",
          width: 1,
          height: 1
        },
        {
          title: "美股 ETF 50 强 04",
          format: "image",
          src: "./assets/tradfi-21.webp",
          width: 1,
          height: 1
        },
        {
          title: "美股 ETF 50 强 05",
          format: "image",
          src: "./assets/tradfi-22.webp",
          width: 1,
          height: 1
        },
        {
          title: "十月美股财报时间线",
          format: "image",
          src: "./assets/tradfi-23.webp",
          width: 1,
          height: 1
        },
        {
          title: "每日美股盘前观察",
          format: "image",
          src: "./assets/tradfi-24.webp",
          width: 1,
          height: 1
        },
        {
          title: "今晚关注：宏观日历",
          format: "image",
          src: "./assets/tradfi-25.webp",
          width: 1,
          height: 1
        },
        {
          title: "AI 与隐私基础设施上新",
          format: "image",
          src: "./assets/tradfi-26.webp",
          width: 1,
          height: 1
        },
        {
          title: "TradFi 新资产上线",
          format: "image",
          src: "./assets/tradfi-27.webp",
          width: 1,
          height: 1
        },
        {
          title: "AMC 暑期票房 01",
          format: "image",
          src: "./assets/tradfi-28.webp",
          width: 1,
          height: 1
        },
        {
          title: "AMC 暑期票房 02",
          format: "image",
          src: "./assets/tradfi-29.webp",
          width: 1,
          height: 1
        },
        {
          title: "AMC 暑期票房 03",
          format: "image",
          src: "./assets/tradfi-30.webp",
          width: 1,
          height: 1
        },
        {
          title: "一顿晚餐的另一种选择",
          format: "image",
          src: "./assets/tradfi-31.webp",
          width: 1,
          height: 1
        },
        {
          title: "投入全球市场",
          format: "image",
          src: "./assets/tradfi-32.webp",
          width: 1,
          height: 1
        },
        {
          title: "Your Time Zone. Your Market.",
          format: "image",
          src: "./assets/tradfi-33.webp",
          width: 1,
          height: 1
        },
        {
          title: "市场不该被时间按下暂停",
          format: "image",
          src: "./assets/tradfi-34.webp",
          width: 1,
          height: 1
        },
        {
          title: "保险基金公开可查",
          format: "image",
          src: "./assets/tradfi-35.webp",
          width: 1,
          height: 1
        },
        {
          title: "储备金报告 01",
          format: "image",
          src: "./assets/tradfi-36.webp",
          width: 1,
          height: 1
        },
        {
          title: "储备资产结构",
          format: "image",
          src: "./assets/tradfi-37.webp",
          width: 1,
          height: 1
        },
        {
          title: "Hotcoin 媒体工具包",
          format: "image",
          src: "./assets/tradfi-38.webp",
          width: 1,
          height: 1
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
      views: ["image"],
      source: "来源：图片生成 Agent + 人工精修",
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
      id: "kwai-content-platform",
      tag: "AI Product / Creator Ops",
      title: "快手爆款视频爬取 + 拆解平台",
      description: "面向运营的爆款视频抓取与拆解平台，串联筛选、内容理解和脚本输出。视频筛选与拆解效率提升 500%。",
      accent: "#7dd3fc",
      role: "工作流梳理、AI 产品设计、Demo 搭建、视频拆解框架设计",
      outcome: "视频筛选与拆解提效 500%，AI 内容理解准确率提升至 80%，投喂博主首月打开理由平均 +30%、发文量平均 +60%。",
      methods: ["爆款视频抓取", "多模态内容理解", "脚本结构化拆解", "Prompt / Skill 设计"],
      media: {
        title: "Koko 内容中台产品演示",
        format: "video",
        src: "./media/kwai-content-platform.mp4",
        poster: "./assets/poster-kwai-content-platform.webp",
        width: 1280,
        height: 690,
        duration: "00:54"
      },
      sections: [
        {
          title: "问题",
          body: "人工找视频、拆爆点、整理脚本耗时且难以规模化。"
        },
        {
          title: "方案",
          body: "把抓取、筛选、爆点分析和脚本生成串成一条 AI 工作流。"
        },
        {
          title: "价值",
          body: "让内容规律可以被重复调用，支撑规模化创作者投喂。"
        }
      ]
    },
    {
      id: "kwai-creator-inspiration-platform",
      tag: "AI Product / Creator Growth",
      title: "快手百万创作者的灵感获取平台",
      description: "面向 Kwai 创作者的灵感入口，把趋势内容、优质案例和脚本建议转成可以直接开拍的创作方案。",
      accent: "#ff9d5c",
      role: "创作者需求洞察、产品链路设计、内容推荐逻辑、运营场景落地",
      outcome: "将找题材、看案例、选脚本和提交作品放进同一条链路，降低创作者从获得灵感到开始创作的门槛。",
      methods: ["趋势内容推荐", "创作者分层", "脚本灵感库", "创作任务管理"],
      media: {
        title: "Koko Kwai 创作者端演示",
        format: "video",
        src: "./media/kwai-inspiration-platform.mp4",
        poster: "./assets/poster-kwai-inspiration-platform.webp",
        width: 720,
        height: 1230,
        duration: "00:32",
        layout: "portrait"
      },
      sections: [
        {
          title: "问题",
          body: "创作者常常不是不会拍，而是不知道下一条应该拍什么。"
        },
        {
          title: "方案",
          body: "根据内容偏好推荐题材、参考视频和可执行脚本。"
        },
        {
          title: "价值",
          body: "把平台内容趋势变成创作者每天都能使用的灵感入口。"
        }
      ]
    }
  ]
};
