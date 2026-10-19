window.HOKEEM_I18N = (() => {
 const dictionary = {
  "Home": "首页",
  "Portfolio": "作品集",
  "About": "关于我",
  "Contact": "联系我",
  "More": "更多",
  "Selected Work": "精选作品",
  "HOKEEM / SELECTED WORK": "HOKEEM / 精选作品",
  "HOKEEM / VIBE CODING PRODUCTS & AIGC VISUALS": "HOKEEM / VIBE CODING 与 AI 视觉创作",
  "Products.": "产品。",
  "Videos.": "影像。",
  "Visuals.": "视觉。",
  "PORTFOLIO": "作品集",
  "Explore Work": "浏览作品",
  "About Me": "关于我",
  "Experience": "经历",
  "(Experience)": "（经历）",
  "COMPANIES, PROJECTS & COMMUNITIES": "公司、项目与社群",
  "Explore My Work": "走进我的经历",
  "HOKEEM / THE PERSON BEHIND THE WORK": "HOKEEM / 作品背后的我",
  "Humanity writes its endless story, and calls it the world. With the life I’m given, I hope to add stories only I could tell, and to love people by name. All else may fade.": "人类书写着无尽的故事，并将它称为世界。愿用被给予的一生，添上只有我能讲述的故事，去爱那些具体的人。其余的一切，皆可淡去。",
  "BRICK & MORTAR": "实体产业",
  "INTERNET": "互联网",
  "INVESTMENT": "投资",
  "ADVERTISING": "广告",
  "AI": "AI",
  "WEB3": "Web3",
  "COMMUNITY": "社群",
  "Brick-and-mortar business": "实体产业",
  "Internet company": "互联网公司",
  "Investment company": "投资公司",
  "Advertising company": "广告公司",
  "AI company": "AI 公司",
  "Web3 company": "Web3 公司",
  "Community": "社群",
  "Homebar Ventures": "Homebar 创业",
  "NetEase": "网易",
  "Baidu": "百度",
  "Kwai": "快手 Kwai",
  "Kuaishou / Kwai": "快手 / Kwai",
  "Founder & Operator": "创业与运营",
  "AI Content Operations": "AI 内容运营",
  "Content Operations": "内容运营",
  "Overseas Content Marketing": "海外内容营销",
  "Independent Creator & Builder": "独立创作者与产品开发者",
  "Startup Incubation": "创业孵化",
  "Interactive Content Creator": "互动内容创作者",
  "Creator Operations": "创作者运营",
  "Platform Content Lead": "平台内容负责人",
  "Influencer Marketing": "达人营销",
  "Web3 BD, SEO & China Social Media": "Web3 商务、SEO 与国内社媒负责人",
  "Community Content & Photography": "社群内容与摄影",
  "Product Design & Launch": "产品设计与宣发",
  "Product Showcase": "产品展示",
  "VIBE CODING / PRODUCT DEMOS": "VIBE CODING / 产品演示",
  "Vibe-coding": "Vibe-coding",
  "Four products built around creator discovery, content production, and KOL collaboration.": "围绕创作者发现、内容生产与达人合作，做成四个真正可用的产品。",
  "Explore the Products": "浏览产品",
  "ALL PRODUCT DEMOS / 04": "全部产品演示 / 04",
  "Explore All": "浏览全部",
  "Demos": "产品演示",
  "Creative Portfolio": "创作作品",
  "Films, visuals & music.": "影像、视觉与音乐。",
  "Video Works": "影像作品",
  "AI Visual Films / Short Dramas / Hypit": "AI 视觉影片 / 短剧 / Hypit",
  "AI visual films, short dramas, and production cases made with Hypit.": "AI 视觉影片、短剧，以及使用 Hypit 制作的内容。",
  "Images & Visuals": "图片与视觉",
  "Editorial / Brand / Social": "编辑视觉 / 品牌 / 社交媒体",
  "Market stories, information cards, and visual series, available as full-size images.": "市场故事、信息设计与系列视觉，点击即可查看完整图片。",
  "Music": "音乐",
  "Original Music": "原创音乐",
  "Original songs · 3M plays across platforms.": "原创音乐 · 全网累计 300 万播放。",
  "Listen to the Music": "聆听音乐",
  "Original songs, shared with the world.": "写下旋律，与世界分享。",
  "plays across platforms": "全网累计播放",
  "3M": "300万",
  "03 TRACKS": "03 首歌曲",
  "Listen on NetEase": "在网易云音乐收听",
  "NetEase Cloud Music": "网易云音乐",
  "ALBUM": "专辑",
  "ARTIST": "音乐人",
  "Listen to three original releases on NetEase Cloud Music.": "在网易云音乐，听这三首原创作品。",
  "ALL Portfolio": "全部作品",
  "A collection of AI products, films, and social visuals": "AI 产品、影像与视觉创作的集合",
  "EXPLORE BY FORMAT": "按作品形式浏览",
  "ALL": "全部",
  "PRODUCT DEMO": "产品演示",
  "VIDEO": "影像",
  "IMAGE": "图片",
  "GAME": "游戏",
  "Product Demo": "产品演示",
  "Product Demos": "产品演示",
  "Video": "影像",
  "Videos": "影像",
  "Image": "图片",
  "Images": "图片",
  "Game": "游戏",
  "Games": "游戏",
  "All Portfolio": "全部作品",
  "All Work": "全部作品",
  "VIDEO SERIES": "影像系列",
  "All Series": "全部系列",
  "AI Visual Films": "AI 视觉影片",
  "Short Dramas": "短剧",
  "Hypit Production Cases": "Hypit 制作案例",
  "Selected Images": "精选图片",
  "Editorial & Social Design": "编辑与社交视觉",
  "Candy Toy TVC": "糖果玩具广告",
  "Brand Film": "品牌影片",
  "Product Commercial": "产品广告",
  "3D Animated Short": "3D 动画短片",
  "Skincare TVC": "护肤品广告",
  "Beauty Product Film": "美妆产品影片",
  "Hypit / Ranking Format": "Hypit / 排行榜内容",
  "Hypit / Tool Walkthrough": "Hypit / 工具介绍",
  "Interactive Demo": "互动演示",
  "Koko Content Platform Demo": "Koko 内容平台演示",
  "Koko Kwai Creator Demo": "Koko 创作者平台演示",
  "Hotcoin TradFi Content Desk": "Hotcoin TradFi 内容工作台",
  "Campaign Discovery & Collaboration": "合作项目发现与协作",
  "Project Overview": "作品介绍",
  "Related Work": "相关作品",
  "FORMAT": "作品形式",
  "COLLECTION": "所属系列",
  "DURATION": "时长",
  "Scroll down to watch the video": "向下滑动，查看作品介绍与视频",
  "Scroll down to view the full image": "向下滑动，查看完整图片与介绍",
  "View full image ↗": "查看完整图片 ↗",
  "Open video separately ↗": "单独打开视频 ↗",
  "Back": "返回",
  "Back to Portfolio": "返回作品集",
  "Back Home": "返回首页",
  "Go back to the previous page": "返回上一页",
  "Choose language": "选择语言",
  "Switch to English": "切换为英文",
  "Switch to Chinese": "切换为中文",
  "Who I am, and what I’ve done.": "我是谁，我曾经做过什么。",
  "About Hokeem": "关于 Hokeem",
  "My Guiding": "我的人生",
  "Principles": "准则",
  "Life & Work": "人生与工作",
  "View My Portfolio": "浏览我的作品",
  "HOKEEM / CONTACT": "HOKEEM / 联系我",
  "Let's": "一起",
  "connect.": "聊聊。",
  "Let's Connect": "联系我",
  "YOU’RE REACHING": "你即将联系",
  "YOU'RE REACHING": "你即将联系",
  "Denghaoqing": "邓浩卿",
  "Deng Haoqing": "邓浩卿",
  "WECHAT": "微信",
  "TELEGRAM": "TELEGRAM",
  "Copy ID ↗": "复制微信号 ↗",
  "Open Telegram ↗": "打开 Telegram ↗",
  "Select the WeChat ID above to copy it.": "可选中上方微信号复制。",
  "WeChat ID copied.": "微信号已复制。",
  "What you see is but": "你所看到的，",
  "one ten-thousandth of me.": "不过是万分之一的我。",
  "Explore All Work": "浏览全部作品",
  "Back to Top ↑": "回到顶部 ↑",
  "Menu +": "菜单 +",
  "Close ×": "关闭 ×",
  "Open navigation": "打开导航",
  "Mobile navigation": "移动导航",
  "Footer navigation": "页脚导航",
  "Image viewer": "图片查看器",
  "Close image": "关闭图片",
  "Filter by format": "按形式筛选",
  "Filter video series": "筛选影像系列",
  "Loading the compatible video format…": "正在加载兼容的视频格式……",
  "Video could not load. Please reload or open it separately.": "视频暂时无法加载，请刷新或单独打开。",
  "AI Short Dramas": "AI 短剧",
  "Scripts, Tools & Production": "剧本、工具与制作",
  "future homebar": "future homebar",
  "yeluzi homebar": "yeluzi homebar",
  "yunvhomebar": "yunvhomebar",
  "Original Track": "原创作品",
  "Kwai Content Platform": "Kwai 内容平台",
  "An AI platform for creator operations, connecting video discovery, screening, content analysis, and script generation. It improved video screening and analysis efficiency by 500%.": "面向创作者运营的 AI 平台，串联视频发现、筛选、内容分析与脚本生成，将视频筛选和分析效率提升了 500%。",
  "Kwai Creator Inspiration": "Kwai 创作灵感平台",
  "An inspiration platform that turns trends, reference videos, and script suggestions into ideas Kwai creators can put into production.": "将趋势、参考视频与脚本建议转化为可落地的创意，帮助 Kwai 创作者找到下一条内容的方向。",
  "Hotcoin X Graphic Production": "Hotcoin 图文生产工作台",
  "A content production workspace for Hotcoin's TradFi visuals, bringing 11 content modules into one workflow.": "为 Hotcoin TradFi 视觉内容搭建的生产工作台，将 11 个内容模块整合进同一条工作流。",
  "KOL Cooperation Platform": "达人合作平台",
  "A KOL cooperation platform demo showing campaign discovery, creator opportunities, and collaboration management.": "一个连接合作项目与创作者机会的平台演示，涵盖项目发现、达人机会与协作管理。",
  "AMOS Doodle Egg": "AMOS 涂鸦蛋",
  "A candy-toy launch film combining live-action unboxing with watercolor animation. Christmas and Spring Festival scenes bring the product into a playful, hand-drawn world.": "将实拍开箱与水彩动画结合的糖果玩具广告。在圣诞与春节场景中，让产品走进充满想象力的手绘世界。",
  "Owl Repair: The Little Fixer": "猫头鹰维修：小小修理师",
  "A home-repair brand film pairing a 3D mascot with live-action scenes. Everyday appliance and household repairs become a warm, character-led service story.": "让 3D 品牌角色走进真人实拍的家庭维修场景，把日常家电与家居问题，讲成一段有温度的服务故事。",
  "Robot Vacuum": "扫地机器人",
  "A robot-vacuum commercial turning crumbs and chocolate into characters on the run. Suction-tunnel sequences, pet scenes, and the cleaning station make product features part of the story.": "让碎屑与巧克力化身逃跑的小角色，用吸力通道、宠物互动和清洁基站，把产品功能写进故事。",
  "Mini Game Film": "迷你世界冒险",
  "A miniature-world adventure set on the Statue of Liberty. Giant waves, sharks, improvised repairs, fishing, and rescue turn a survival story into a playful 3D animated short.": "以自由女神像为舞台的微缩世界冒险。在巨浪、鲨鱼、临时修补、钓鱼与救援中，展开一段轻松诙谐的 3D 生存故事。",
  "Skincare Mask Film": "面膜护肤广告",
  "A skincare commercial built around mask application, serum droplets, and close-up textures. Clean white settings and fluid motion create a fresh, tactile product story.": "围绕敷膜、精华液滴与肌肤特写展开。用纯净的白色空间和流动的视觉语言，呈现清新、细腻的护肤体验。",
  "FOXCUP Botanical Setting Powder": "FOXCUP 植萃定妆粉",
  "A botanical setting-powder film set among misty forests, mossy streams, and aloe droplets. Natural ingredients and cool summer imagery shape the visual direction.": "将定妆粉置于雾气森林、苔藓溪流与芦荟水滴之间，以植物成分与夏日清凉感，构建产品的视觉世界。",
  "AI Short Drama: Landscape": "AI 短剧：横版",
  "A landscape-format AI short drama.": "一部以横屏形式呈现的 AI 短剧。",
  "AI Short Drama: Portrait": "AI 短剧：竖版",
  "A portrait-format AI short drama.": "一部以竖屏形式呈现的 AI 短剧。",
  "Vertical Drama: English Edition": "竖屏短剧：英文版",
  "AI finds popular short dramas and breaks down their scripts, then a Xiaoyunque drama agent helps turn them into new videos.": "用 AI 发现热门短剧并拆解剧本，再通过小云雀短剧智能体，将新的故事创意制作成片。",
  "Vertical Drama: Urban Romance": "竖屏短剧：都市情感",
  "Ranking Video 01": "排行榜内容 01",
  "A ranking video built from structured visual assets.": "将结构化视觉素材编排为排行榜形式的视频。",
  "Ranking Video 02": "排行榜内容 02",
  "Tool Guide 01": "工具介绍 01",
  "A video guide to a useful tool.": "用视频介绍实用工具的功能与使用方式。",
  "Game Demo 01": "互动游戏演示 01",
  "A portrait-format interactive game demo.": "一段竖屏互动游戏的体验演示。",
  "Game Demo 02": "互动游戏演示 02",
  "Game Demo 03": "互动游戏演示 03",
  "Game Demo 04": "互动游戏演示 04",
  "Game Demo 05": "互动游戏演示 05",
  "Game Demo 06": "互动游戏演示 06",
  "Step Into Global Markets": "走进全球市场",
  "Financial and market visuals created for Hotcoin on X.": "为社交媒体创作的视觉内容。",
  "Visual Post 4.1": "视觉作品 4.1",
  "Portrait PNG post asset.": "为社交媒体创作的视觉内容。",
  "PepsiCo Q3 2026 Earnings Preview 01": "百事公司财报前瞻",
  "Visual Post 1.1": "视觉作品 1.1",
  "Portrait still asset.": "为社交媒体创作的视觉内容。",
  "Hotcoin Media Kit": "Hotcoin 媒体资料包",
  "Visual Post 4.2": "视觉作品 4.2",
  "Fed Update: John Williams": "美联储动态：John Williams",
  "Visual Post 2.1": "视觉作品 2.1",
  "High-resolution portrait still.": "为社交媒体创作的视觉内容。",
  "New AI & Privacy Infrastructure Listings": "AI 与隐私基础设施上新",
  "Visual Post 4.3": "视觉作品 4.3",
  "Costco Q4 Earnings Preview 01": "Costco 财报前瞻",
  "Visual Post 3.1": "视觉作品 3.1",
  "Portrait visual post.": "为社交媒体创作的视觉内容。",
  "A Transparent Insurance Fund": "透明的保险基金",
  "Visual Post 1.2": "视觉作品 1.2",
  "The US AI Value Chain": "美国 AI 价值链",
  "Visual Post 2.2": "视觉作品 2.2",
  "AMC Summer Box Office 01": "AMC 夏季票房",
  "Visual Post 3.2": "视觉作品 3.2",
  "Tall portrait visual post.": "为社交媒体创作的视觉内容。",
  "October US Earnings Calendar": "十月美股财报日历",
  "Visual Post 3.3": "视觉作品 3.3",
  "Delta Air Lines Q3 Earnings Preview 01": "达美航空财报前瞻",
  "US September PMI 01": "PMI 与市场观察",
  "Another Way to Spend a Dinner": "另一种生活方式",
  "Your Time Zone. Your Market.": "时间与市场",
  "Worked on influencer marketing for brands expanding into international markets.": "参与面向国际市场的品牌达人营销，连接创作者与品牌合作。",
  "Moved into platform content, covering academy articles, SEO, and US market content for X and Instagram.": "负责平台内容，涵盖学院文章、SEO，以及 X 和 Instagram 上的美股内容。",
  "Supported comedy creators in Brazil through content feedback and themed campaigns. Built AI video analysis and script tools used by 70+ leading creators.": "为巴西喜剧创作者提供内容反馈与主题活动支持，并搭建 AI 视频分析和脚本工具，服务 70 余位头部创作者。",
  "Led China social media and worked on Web3 business development and SEO.": "负责国内社媒，并参与 Web3 商务拓展与 SEO。",
  "Launched the official WeChat account “潮见” and created accessible financial explainers. Content reached 10M+ views and added 30K followers in three months.": "从零搭建官方公众号“潮见”，制作易于理解的财经内容，三个月累计获得千万播放与 3 万新增关注。",
  "Sourced creators and coordinated overseas campaigns for brands including SHEIN. Worked on content briefs, outreach and campaign delivery.": "为 SHEIN 等出海品牌寻找创作者、协调海外营销项目，参与内容简报、达人沟通与活动交付。",
  "Planned and promoted the AI Carnival, supported AI competitions and coordinated the music festival. The campaign generated 2,771+ pieces of user content.": "策划推广 AI 嘉年华，支持 AI 赛事并协调音乐节，活动累计产生 2,771 余条用户内容。",
  "Helped launch the Xiaomifeng platform and ran Qingmei content across WeChat, Xiaohongshu and communities. Built AI production workflows and added 30K WeChat followers in two months.": "参与小蜜蜂平台冷启动，运营青媒在微信、小红书与社群的内容，搭建 AI 内容生产流程，两个月新增微信粉丝 3 万。",
  "Helped design and promote a creative camera app built around capturing images with a screen swipe, with an AI visual treasure-hunt feature.": "参与设计与推广一款滑动屏幕即可拍摄的创意相机应用，并探索 AI 视觉寻宝功能。",
  "Created Xiaohongshu content for the Chiang Mai digital nomad conference and served as an official photographer. The photography reached 100K viewers.": "为清迈数字游民大会创作小红书内容并担任官方摄影师，摄影内容触达 10 万人。",
  "Worked with the team of AI creator 糖果果的未来要发光, building script tools and writing 50+ short-drama scripts for Chinese and overseas audiences.": "与 AI 创作者“糖果果的未来要发光”的团队合作，搭建剧本工具，为国内外受众创作 50 余份短剧剧本。",
  "Ran an AI and investing account and shared self-built products. Published 10+ posts with 100K+ views and developed automated workflows for research, visuals, video and content review.": "运营 AI 与投资内容账号，分享自建产品，发布 10 余篇十万阅读内容，搭建研究、视觉、视频与内容审核的自动化流程。",
  "Created 10+ interactive mini-games with six-figure reach and became a top-10 creator on the platform.": "创作 10 余款互动小游戏，获得十万级触达，成为平台前十创作者。",
  "Built an AI critique agent in ten days and won first prize at the incubation program.": "在十天内搭建 AI 锐评智能体，并获得孵化项目一等奖。",
  "Opened three bars: future homebar, yeluzi homebar and yunvhomebar. Worked on site selection, interiors, bartending, social content, community events and hosting; the ventures reached the local bar top three.": "创办 future homebar、yeluzi homebar 与 yunvhomebar，参与选址、空间、调酒、社媒、社群活动与接待，门店进入本地酒吧前三。",
  "PinPin Camera": "PinPin 相机",
  "HOKEEM Home": "HOKEEM 首页",
  "Contact Denghaoqing": "联系邓浩卿",
  "HOKEEM leopard logo": "HOKEEM 豹子标识",
  "Hokeem’s leopard persona in a black suit, standing upright with one hand lowering a round black hat": "Hokeem 的豹子形象：身着黑色西装，站立并轻压礼帽",
  "Denghaoqing avatar": "邓浩卿头像",
  "Hokeem’s portfolio of vibe-coded products, AIGC video, and visual work.": "Hokeem 的产品、AI 影像与视觉创作作品集。"
};

 Object.assign(dictionary,{
  'Accounts & Audiences':'账号与受众',
  'Independent work and official channels.':'个人创作与官方账号。',
  'Xiaohongshu':'小红书',
  'Official X Account':'X 官方账号',
  'Official Xiaohongshu Account':'小红书官方账号',
  'Official Instagram Account':'Instagram 官方账号',
  'NetEase Qingmei Program':'网易青媒计划',
  'Sole Content Creator':'全部内容由我独立制作',
  'Company Content Lead':'公司内容负责人',
  '38K':'3.8万','16K':'1.6万','200K':'20万',
  'followers':'粉丝',
  'followers across platforms':'全网粉丝',
  'View Account':'查看账号'
 });
 let language='en';
 try { if(localStorage.getItem('hokeem-language')==='zh') language='zh'; } catch {}
 const textSources=new WeakMap(), attributeSources=new WeakMap();
 const months={Jan:'01',Feb:'02',Mar:'03',Apr:'04',May:'05',Jun:'06',Jul:'07',Aug:'08',Sep:'09',Oct:'10',Nov:'11',Dec:'12'};
 Object.assign(dictionary,{'VIBE CODING / AIGC':'AI 产品 / 视觉创作','Your browser does not support embedded video.':'当前浏览器不支持内嵌视频。','HOKEEM / ORIGINAL MUSIC':'HOKEEM / 原创音乐','Page controls':'页面操作','Listen to the Music ↗':'聆听音乐 ↗','← Back':'← 返回','← Back Home':'← 返回首页','← Back to Portfolio':'← 返回作品集','← Portfolio':'← 作品集'});
 function t(value){
  const text=String(value??'');
  if(language!=='zh')return text;
  const key=text.replace(/\s+/g,' ').trim();
  if(dictionary[key])return dictionary[key];
  if(/^\([^()]+\)$/.test(key))return '（'+t(key.slice(1,-1))+'）';
  let m;
  if((m=key.match(/^(\d+) works \/ (.+)$/)))return m[1]+' 件作品 / '+t(m[2]);
  if((m=key.match(/^(\d+) (WORKS|CASES)$/)))return m[1]+(m[2]==='WORKS'?' 件作品':' 个案例');
  if((m=key.match(/^Explore (\d+) (Images|Videos) ↗$/)))return '浏览 '+m[1]+(m[2]==='Images'?' 张图片':' 支影像')+' ↗';
  if((m=key.match(/^(Joined|From) ([A-Za-z]{3}) (\d{4})$/)))return m[3]+'.'+months[m[2]]+(m[1]==='Joined'?' 加入':' 起');
  if((m=key.match(/^([A-Za-z]{3}) (\d{4}) — ([A-Za-z]{3}) (\d{4})$/)))return m[2]+'.'+months[m[1]]+' — '+m[4]+'.'+months[m[3]];
  if((m=key.match(/^([A-Za-z]{3}) (\d{4}) — Present$/)))return m[2]+'.'+months[m[1]]+' — 至今';
  if((m=key.match(/^([A-Za-z]{3}) (\d{4})$/)))return m[2]+'.'+months[m[1]];
  if((m=key.match(/^(Enlarge|View|Explore) (.+)$/)))return ({Enlarge:'放大查看',View:'查看',Explore:'浏览'}[m[1]])+' '+t(m[2]);
  if((m=key.match(/^Watch (.+) demo$/)))return '观看 '+t(m[1])+' 演示';
  if(key.includes(' · '))return key.split(' · ').map(t).join(' · ');
  if(key.includes(' / '))return key.split(' / ').map(t).join(' / ');
  if(key.endsWith(' ↗'))return t(key.slice(0,-2))+' ↗';
  if(key.startsWith('Copy WeChat ID '))return '复制微信号 '+key.slice(15);
  if(key.startsWith('Listen to '))return '收听 '+t(key.slice(10));
  if(key.endsWith(' logo'))return t(key.slice(0,-5))+' 标识';
  if(key.endsWith(' product cover'))return t(key.slice(0,-14))+' 产品封面';
  return text;
 }
 function apply(root=document.body){
  if(!root)return;
  const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
  const nodes=[];
  while(walker.nextNode())nodes.push(walker.currentNode);
  for(const node of nodes){
   if(node.parentElement?.closest('script,style,svg,[data-no-translate]'))continue;
   const current=node.nodeValue;
   if(!current.trim())continue;
   let record=textSources.get(node);
   if(!record||current!==record.last){record={source:current,last:current};textSources.set(node,record);}
   const translated=t(record.source);
   if(current!==translated)node.nodeValue=translated;
   record.last=translated;
  }
  const elements=[...(root.matches?.('[aria-label],[title],[alt]')?[root]:[]),...root.querySelectorAll('[aria-label],[title],[alt]')];
  for(const element of elements){
   let records=attributeSources.get(element);
   if(!records){records={};attributeSources.set(element,records);}
   for(const attribute of ['aria-label','title','alt']){
    if(!element.hasAttribute(attribute))continue;
    const current=element.getAttribute(attribute);
    let record=records[attribute];
    if(!record||current!==record.last)record=records[attribute]={source:current,last:current};
    const translated=t(record.source);
    if(current!==translated)element.setAttribute(attribute,translated);
    record.last=translated;
   }
  }
  document.documentElement.lang=language==='zh'?'zh-CN':'en';
  document.body.dataset.locale=language;
 }
 function set(next){
  language=next==='zh'?'zh':'en';
  try { localStorage.setItem('hokeem-language',language); } catch {}
 }
 return {get language(){return language;},t,apply,set};
})();
