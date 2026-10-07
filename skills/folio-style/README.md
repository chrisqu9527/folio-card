# FOLIO 风格编号

把公开的 X 提示词收成一套可检索的数据库。每条风格有固定编号。别人只要报编号，就能复制那一套提示词，并看到原帖预览图。

编号 `001`–`106` 在 2026-09-24 按图鉴当时的顺序冻结：**日期从新到旧，同日按 id**。这 106 条不会因为以后新增而改号。新提示词只追加到末尾，目前到 `580`。

提示词原文来自公开 X 帖，版权归原作者。这里只做编号、分类和引用。

仓库已公开：[chrisqu9527/folio-card](https://github.com/chrisqu9527/folio-card)。给人看的说明在仓库根目录 [README](../../README.md)。

## 应用场景

先选用户要完成的事；一条可适用于多个场景。风格、形式、工具和发布渠道不作为一级分类。

| id           | 场景           | 做什么                                                               |
| ------------ | -------------- | -------------------------------------------------------------------- |
| identity     | 展示自己       | 让别人认识你：个人头像、职业形象、自我介绍和求职作品展示。           |
| memory       | 记录生活       | 留下旅行、家庭、宠物和日常片段，把照片变成可珍藏的记忆。             |
| feeling      | 表达心意       | 向某个人传递祝福、感谢、思念和陪伴，或分享自己的心情。               |
| knowledge    | 讲清知识       | 让一个概念、一段历史、一组信息或操作过程更容易被理解。               |
| promotion    | 介绍产品       | 让别人了解商品、服务、应用或品牌，看到特点、效果和使用方法。         |
| announcement | 发布消息       | 让别人注意到活动、发布、节日安排或一项主张，读到关键信息。           |
| opinion      | 表达观点       | 把观察、态度和生活感悟变成可分享的画面，用幽默、对照或隐喻说清想法。 |
| story        | 讲述故事       | 用人物、动作与场景讲一个故事，制作故事画面、分镜或连续影像。         |
| concept      | 构思角色与世界 | 为角色、游戏、动画或空间寻找形象，试出人物设定和世界的样子。         |
| code         | 代码成片       | 由模型写 Remotion、Canvas、JS 或着色器逐帧渲染，不是生视频模型。     |

目录见 [CATALOG.md](CATALOG.md)。全文在 `entries/001.md` 这种单文件里，机器可读总库是 [data/prompts.json](data/prompts.json)。

## 给 Agent 用

把本目录装成 skill（Codex、Claude Code 等认 `SKILL.md` 的工具）：

```bash
# 仓库里的路径
skills/folio-style
```

然后直接说：

- `016` — 复制这一条风格
- `风格 42` — 同上
- `列出讲清知识` — 只看这一类的编号
- `搜索 字体` — 按标题、风格、标签找

本地也可以不经过 Agent：

```bash
node skills/folio-style/scripts/lookup.mjs 016
node skills/folio-style/scripts/lookup.mjs --category knowledge
node skills/folio-style/scripts/lookup.mjs --search 武侠
```

## 记录里有什么

`no` 编号、`style` 风格名、`category` 主要场景、`scenarios` 适用场景、`title`、`prompt` 原文、`slots` 可替换槽位、`covers` 预览图、作者与原帖、媒介（图像 / 视频）、标签、可选的模型备注和作者后记。
