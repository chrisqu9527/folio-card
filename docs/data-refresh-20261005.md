# 2026-10-05 X 提示词更新

总库从 **487 条增至 547 条**，新增 **60 条图像提示词**，编号 **488–547**。当前为 **462 条图像、85 条视频**。此前 001–487 的完整数据保持不变。

新增来源涉及 36 位作者，共保存 93 张原帖图片。每条都包含作者、原帖链接、原语言提示词、真实发布日期、中文标题、摘要和应用场景。首次显示优先使用结果图，参考照片和草图仍可在样图中查看。

## 范围与方法

- 从公开索引发现 242 个未入库的 X 原帖候选，回查其中 180 个：177 个成功，3 个返回 404；最终选择 60 个不同原帖，不把同一帖的多张图算作多条提示词。
- 新增原帖发布日期（UTC，与库中日期字段一致）为 **2026-09-05 至 2026-10-04**。本批为新入库内容，包含近期内容与历史补录，并非 60 条都发布于今天。未进行全量作者时间线扫描。
- 原帖正文经 FxTwitter 的公开 HTTP 接口读取；没有读取或传入用户的 X Cookie、auth_token、ct0、浏览器登录会话或 X OAuth 凭据。图片直接取自 pbs.twimg.com 的公开媒体 URL。
- 原文优先取原帖明确标记的提示词段落或代码块；仅移除介绍、外层引号、代码围栏和不属于提示词的尾部说明，不翻译或改写。发现索引截短时以原帖补全。原文自身的拼写、模型说法和参数写法照录，不等于独立验证模型能力。
- 按原帖 ID、规范化全文及高相似文本筛查重复。排除原帖不可读、只有效果图、提示词完整性不确定、作者明确禁止转载等候选；明确禁止转载的三个候选没有入库。
- 一位作者从 @Mr_Ai6 改为 @Mr_AI01，两条新增记录使用当前原帖署名，同时保留发现时的旧用户名供追溯。
- 静态分镜、接触表和包含动作描述的图像仍归图像库，不把它们算成已生成或核验的视频。

## 来源与证据

候选发现使用 [YouMind Nano Banana 索引](https://github.com/YouMind-OpenLab/awesome-nano-banana-pro-prompts)和 [YouMind GPT Image 索引](https://github.com/YouMind-OpenLab/awesome-gpt-image-2)；也检查了 [Claude 视频索引](https://github.com/opusvideo/awesome-claude-video)，本批未从中新增条目。YouMind 索引标示 [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)；作者署名与原帖链接逐条保留，索引的许可不替代原作者明确的转载限制。中文标题、摘要和分类是 FOLIO 编辑整理，提示词原语言原文保持不变。

[机器可验来源证据](../skills/folio-style/data/refresh-20261005-x.json)保存了索引提交和内容哈希、旧库完整数据哈希、每条原帖正文、精确 UTF-16 字符范围、提示词 SHA-256、作者与时间、图片 URL/尺寸/文件大小/SHA-256，以及已确认的排除原因。原始接口响应与候选审阅记录保存在本次本地采集归档中。

## 新增目录

| 编号 | 标题 | 应用场景 | 原帖日期 UTC | 原帖作者 |
| --- | --- | --- | --- | --- |
| 488 | 整张照片变手捏黏土世界 | 记录生活、构思角色与世界 | 2026-10-04 | [@visualaiclub](https://x.com/visualaiclub/status/2106674776685043999) |
| 489 | 玫瑰粉头巾优雅肖像 | 展示自己 | 2026-10-04 | [@ZarnishNael](https://x.com/ZarnishNael/status/2106616012099461312) |
| 490 | 金色时刻运动装肖像 | 展示自己 | 2026-10-04 | [@Kiran_AI1](https://x.com/Kiran_AI1/status/2106590895575630035) |
| 491 | 橙色零食鱼眼广告 | 介绍产品 | 2026-10-04 | [@Sheldon056](https://x.com/Sheldon056/status/2106587208916566057) |
| 492 | 一扇门通往一个世界 | 构思角色与世界、讲述故事 | 2026-10-04 | [@MohdAdnanA86218](https://x.com/MohdAdnanA86218/status/2106545580508152140) |
| 493 | 三只猫的清晨自拍 | 记录生活 | 2026-10-03 | [@CyberTotal2026](https://x.com/CyberTotal2026/status/2106510103117713467) |
| 494 | 照片变极简时装线描 | 展示自己、记录生活 | 2026-10-03 | [@visualaiclub](https://x.com/visualaiclub/status/2106420974258123246) |
| 495 | 满月暮色男士肖像 | 展示自己 | 2026-10-03 | [@Mr_AI01](https://x.com/Mr_AI01/status/2106413507059351763) |
| 496 | 几何块面人物海报 | 展示自己、构思角色与世界 | 2026-10-03 | [@visualaiclub](https://x.com/visualaiclub/status/2106367821399679480) |
| 497 | 上半照片下半记忆拼贴 | 记录生活 | 2026-10-03 | [@Sairah_0](https://x.com/Sairah_0/status/2106287796042232218) |
| 498 | 黑色电影男士肖像 | 展示自己 | 2026-10-03 | [@MohdAdnanA86218](https://x.com/MohdAdnanA86218/status/2106237688127111667) |
| 499 | 咖啡馆拿铁自拍 | 记录生活、展示自己 | 2026-10-03 | [@iamrealsnow](https://x.com/iamrealsnow/status/2106227888395784520) |
| 500 | 遗迹勘探员四视图设定 | 构思角色与世界 | 2026-10-03 | [@plex233](https://x.com/plex233/status/2106206679868334425) |
| 501 | 浅蓝针织服装形象照 | 介绍产品、展示自己 | 2026-10-02 | [@nawalsehar](https://x.com/nawalsehar/status/2105897710918242518) |
| 502 | 暖色全身像与黑白三联照 | 展示自己 | 2026-10-02 | [@AiwithLariab](https://x.com/AiwithLariab/status/2105871614512607509) |
| 503 | 女战士与巨型猫头鹰 | 构思角色与世界、讲述故事 | 2026-10-01 | [@Rabia_69x](https://x.com/Rabia_69x/status/2105448461382381907) |
| 504 | 行走人物双重曝光海报 | 展示自己 | 2026-09-30 | [@JamilAI55](https://x.com/JamilAI55/status/2105235981553353199) |
| 505 | 碎镜里的时装肖像 | 展示自己、构思角色与世界 | 2026-09-30 | [@MohdAdnanA86218](https://x.com/MohdAdnanA86218/status/2105173643294802060) |
| 506 | 运动女性力量肖像 | 展示自己 | 2026-09-30 | [@aytacaltintepe](https://x.com/aytacaltintepe/status/2105145613625037081) |
| 507 | 南极冰窟中的神秘巨碑 | 讲述故事、构思角色与世界 | 2026-09-29 | [@elio_ia](https://x.com/elio_ia/status/2104929448155844935) |
| 508 | 保留面孔的室内人像 | 展示自己 | 2026-09-29 | [@DilshadAI1](https://x.com/DilshadAI1/status/2104891764750639144) |
| 509 | 几何光影黑白肖像 | 展示自己 | 2026-09-29 | [@LaceyPresley](https://x.com/LaceyPresley/status/2104850947012726906) |
| 510 | 老伴为她拍下走廊舞步 | 表达心意、讲述故事 | 2026-09-29 | [@DuaFatimaAi](https://x.com/DuaFatimaAi/status/2104728081373999615) |
| 511 | 雨夜站台等车的人 | 讲述故事、展示自己 | 2026-09-28 | [@Elvorya](https://x.com/Elvorya/status/2104583621537611933) |
| 512 | 工业走廊的橙色液体 | 构思角色与世界、讲述故事 | 2026-09-28 | [@her19845](https://x.com/her19845/status/2104472426394406957) |
| 513 | 花园单车超现实时装 | 构思角色与世界、介绍产品 | 2026-09-28 | [@hey_am_cherry](https://x.com/hey_am_cherry/status/2104415546079142275) |
| 514 | 蝴蝶光艺术肖像模板 | 展示自己 | 2026-09-27 | [@SaasJunctionHQ](https://x.com/SaasJunctionHQ/status/2104210624133685357) |
| 515 | 合照变白底积木人偶 | 记录生活、构思角色与世界 | 2026-09-27 | [@visualaiclub](https://x.com/visualaiclub/status/2104203933308633179) |
| 516 | 红毯黑色礼服男士 | 展示自己 | 2026-09-26 | [@Mr_AI01](https://x.com/Mr_AI01/status/2103799283199963341) |
| 517 | 哥特教堂下的黑衣人物 | 构思角色与世界、讲述故事 | 2026-09-25 | [@MohdAdnanA86218](https://x.com/MohdAdnanA86218/status/2103327399190593748) |
| 518 | 站在两个世纪交界处 | 讲述故事、构思角色与世界 | 2026-09-24 | [@MohdAdnanA86218](https://x.com/MohdAdnanA86218/status/2103091784179912903) |
| 519 | 夜色电话亭悬疑肖像 | 讲述故事、展示自己 | 2026-09-24 | [@MohdAdnanA86218](https://x.com/MohdAdnanA86218/status/2102987709883298171) |
| 520 | 羽毛球扣杀瞬间 | 展示自己、介绍产品 | 2026-09-23 | [@MohdAdnanA86218](https://x.com/MohdAdnanA86218/status/2102555777252872279) |
| 521 | 商品多角度参考设定表 | 介绍产品、讲清知识 | 2026-09-19 | [@OlatundeAI](https://x.com/OlatundeAI/status/2101379401703116870) |
| 522 | 照片变手绘时装插画 | 记录生活、展示自己 | 2026-09-18 | [@Sairah_0](https://x.com/Sairah_0/status/2100779368318701669) |
| 523 | 照片变层叠剪纸小剧场 | 记录生活、构思角色与世界 | 2026-09-17 | [@visualaiclub](https://x.com/visualaiclub/status/2100638045103853684) |
| 524 | 黄铜机械蜂鸟与忧郁眼睛 | 构思角色与世界、讲述故事 | 2026-09-17 | [@timedoctor_nft](https://x.com/timedoctor_nft/status/2100578794159436219) |
| 525 | 粗墨线现代漫画转绘 | 构思角色与世界、讲述故事 | 2026-09-16 | [@HustleXR](https://x.com/HustleXR/status/2100100831945408531) |
| 526 | 复古粉色搅拌机静物 | 介绍产品 | 2026-09-13 | [@DuaFatimaAi](https://x.com/DuaFatimaAi/status/2099094038012100890) |
| 527 | 左右双页手绘食谱 | 讲清知识 | 2026-09-11 | [@AIGuideNote](https://x.com/AIGuideNote/status/2098528281293381651) |
| 528 | 日文三步流程图 | 讲清知识 | 2026-09-11 | [@AIGuideNote](https://x.com/AIGuideNote/status/2098480666380038330) |
| 529 | 雨窗后的赛博侦探 | 讲述故事、构思角色与世界 | 2026-09-11 | [@SheBuildsAI_](https://x.com/SheBuildsAI_/status/2098365190282805417) |
| 530 | 红底黑墨杂志封面 | 表达观点、展示自己 | 2026-09-10 | [@HustleXR](https://x.com/HustleXR/status/2098087685348892674) |
| 531 | 未曾到来的明天博物馆 | 讲述故事、表达观点 | 2026-09-10 | [@SheBuildsAI_](https://x.com/SheBuildsAI_/status/2098078552193384859) |
| 532 | 雾中最后一班归家列车 | 讲述故事、表达心意 | 2026-09-10 | [@SheBuildsAI_](https://x.com/SheBuildsAI_/status/2098002802375303462) |
| 533 | 宝箱冒险游戏活动主视觉 | 发布消息、构思角色与世界 | 2026-09-10 | [@AIGuideNote](https://x.com/AIGuideNote/status/2097985361729220828) |
| 534 | 照片变旅行彩铅手账 | 记录生活 | 2026-09-10 | [@selinatasnim1](https://x.com/selinatasnim1/status/2097923838449516732) |
| 535 | 论文变学术会议海报 | 讲清知识 | 2026-09-10 | [@_daichikonno](https://x.com/_daichikonno/status/2097880100587135480) |
| 536 | 用实物材质讲清信息 | 讲清知识 | 2026-09-09 | [@akira_papa_IT](https://x.com/akira_papa_IT/status/2097832162586407176) |
| 537 | 皮革质感奢品静物广告 | 介绍产品 | 2026-09-09 | [@AIGuideNote](https://x.com/AIGuideNote/status/2097623415939076175) |
| 538 | 怪兽甲壳虫直线竞速 | 构思角色与世界、讲述故事 | 2026-09-09 | [@heathergreen](https://x.com/heathergreen/status/2097610973389426800) |
| 539 | 草图变采光卧室展示 | 介绍产品、构思角色与世界 | 2026-09-09 | [@AnXin_37](https://x.com/AnXin_37/status/2097554757506539972) |
| 540 | 帆船发髻的复古讽刺画 | 表达观点、构思角色与世界 | 2026-09-08 | [@heathergreen](https://x.com/heathergreen/status/2097112687675117974) |
| 541 | 抱臂武术少女墨彩设定 | 构思角色与世界 | 2026-09-07 | [@lovimg_com](https://x.com/lovimg_com/status/2096954809534570766) |
| 542 | 极简服装电商陈列网格 | 介绍产品 | 2026-09-07 | [@AIGuideNote](https://x.com/AIGuideNote/status/2096906819713081810) |
| 543 | 枫糖浆八格广告分镜 | 介绍产品、讲述故事 | 2026-09-07 | [@Strength04_X](https://x.com/Strength04_X/status/2096833097740493050) |
| 544 | 黏土变色龙微缩森林 | 构思角色与世界、讲述故事 | 2026-09-07 | [@heathergreen](https://x.com/heathergreen/status/2096750301134881054) |
| 545 | 暖边光复古动漫人物 | 构思角色与世界、展示自己 | 2026-09-06 | [@HustleXR](https://x.com/HustleXR/status/2096437155606196729) |
| 546 | 可换商品的棚拍广告模板 | 介绍产品 | 2026-09-05 | [@denygen9](https://x.com/denygen9/status/2096274439260516678) |
| 547 | 家庭晚餐九格电影镜头 | 讲述故事、记录生活 | 2026-09-05 | [@SheBuildsAI_](https://x.com/SheBuildsAI_/status/2096191621838864712) |

## 验证

验证结果见 [本批验收记录](verification-20261005.md)。数据检查由既有校验器自动覆盖，不增加定时爬虫、账号登录或后台采集任务。
