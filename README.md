# FOLIO 编号

一套编好号的 AI 图像 / 视频风格库。风格来自公开的 X 帖，提示词原文归原作者。这里做的是编号、分类、预览和复制。

当前 **618** 条。`001`–`106` 已冻结，不会改号。新风格只追加在后面。

2026-10-08 追加 7 条（581–587）：4 条图像（3 位新作者、1 条已有作者新风格）、3 条代码成片。封面取自原帖图片或原帖视频帧。
2026-10-09 再追加 7 条（612–618）：4 条新作者图像（含手绘工程笔记和清线历史漫画）、3 条 Opus 5.5 代码成片。封面取自原帖图片或原帖视频帧。
2026-10-07 追加 5 条（576–580）：2 条新作者图像、2 条社交短视频、1 条 Opus 5.5 代码成片。封面取自原帖图片或原帖视频帧。
2026-10-06 新增 12 条 X 提示词（556–567），附 18 张公开原帖图片。详见[本批更新目录](docs/data-refresh-20261006.md)。同日再追加 8 条（568–575）：3 条新作者图像、1 条叙事短片、4 条 Opus 5.5 代码成片。

2026-10-05 再追加 8 条（548–555）：6 条新作者图像提示词，2 条 Opus 代码成片。封面取自原帖图片或原帖视频帧。

## 可以做什么

- **报编号就复制风格。** `016`、`#16`、`风格 16`、`16号` 都指向同一条。复制出来的是原帖提示词，不改写、不补「8K、大师作品」。
- **先看图，再决定用不用。** 每条带原帖封面。网站上点大图可以放大；有多张参考图时可以切换。
- **图像和视频分开。** 网站顶部两套入口。Skill 用 `--medium image` 或 `--medium video`。报编号仍然直接跳到那一条。
- **先选要完成的事。** 展示自己、记录生活、表达心意、讲清知识、介绍产品、发布消息、表达观点、讲述故事、构思角色与世界。图像与视频共用这九个应用场景，一条可适合多个场景。
- **再找喜欢的表现方式。** 人像、海报、水墨、手绘、字体、代码等保留在风格和标签中。视频形式可用 `--use 预告片` 等进一步细选。代码成片是写 Canvas 或 Remotion 渲出来的，不是生视频模型。
- **只换主体，留下风格。** 带【槽位】的条目，换槽位里的角色、标题或场景，其余句子保持不动。
- **给 Agent 当 skill 用。** 装上之后，对话里直接报编号。也有一条命令行，不经过聊天也能查。

## 网站

首页就是编号库：输入编号，看封面，点「复制提示词」。

本地：

```bash
npm install
npm run dev
```

## 安装 skill

任何认 `SKILL.md` 的工具都可以。仓库公开，直接克隆。

```bash
git clone https://github.com/chrisqu9527/folio-card.git

# Claude Code
mkdir -p ~/.claude/skills
ln -s "$PWD/folio-card/skills/folio-style" ~/.claude/skills/folio-style

# Codex
mkdir -p ~/.codex/skills
ln -s "$PWD/folio-card/skills/folio-style" ~/.codex/skills/folio-style
```

只给一个项目用，把 `skills/folio-style` 放进该项目的 `.claude/skills/` 或 `.agents/skills/`。装完新开一轮对话。

然后这样说：

- `016`：原样给出提示词，并附上标题、风格、分类、作者和原帖
- `用 112，标题换成 AFTER YOU`：只换槽位
- `列出东方叙事`：这一类的编号表
- `搜索 字体`：按标题、风格、标签找，不把全文倒出来

不经过 Agent：

```bash
node skills/folio-style/scripts/lookup.mjs 016
node skills/folio-style/scripts/lookup.mjs --category knowledge
node skills/folio-style/scripts/lookup.mjs --search 武侠
```

没有的编号会说明范围，不会现编一条。

## 数据在哪

唯一可编辑主数据是 `skills/folio-style/data/prompts.json`。修改后运行 `npm run data:sync`，自动生成网站 JSON、单条 Markdown、目录和数量说明；运行 `npm run data:check` 核对一致性。不要单独编辑导出文件。开发和构建前也会自动同步，GitHub Actions 会检查遗漏。

2026-10-01 的[版本统一说明](docs/version-reconciliation.md)记录了本地与远端编号冲突的处理；[MCP 与网页后台方案](docs/mcp-web-admin-plan.md)说明下一步如何共用主数据。当前仍是浏览／复制网站和本地 Skill，MCP 服务与管理后台尚未实现。

| 路径                                                                         | 是什么            |
| ---------------------------------------------------------------------------- | ----------------- |
| [skills/folio-style](skills/folio-style)                                     | 给 Agent 的 skill |
| [skills/folio-style/data/prompts.json](skills/folio-style/data/prompts.json) | 总库，机器可读    |
| [skills/folio-style/entries](skills/folio-style/entries)                     | 一条一个 markdown |
| [skills/folio-style/CATALOG.md](skills/folio-style/CATALOG.md)               | 人类目录          |
| [public/covers](public/covers)                                               | 预览图            |
| [src/data/prompts.json](src/data/prompts.json)                               | 网站用的同一份库  |

## 编号规则

1. `001`–`106` 按 2026-09-21 图鉴的顺序冻结：日期从新到旧，同日按 id。
2. `107` 起按追加日期往后排。
3. 不重排、不回收空号。删帖也不改别人已经在用的编号。

## 版权

提示词和预览图来自各位作者的公开帖，版权归原作者。FOLIO 只做索引和引用，每条都保留原帖链接和署名。不要把这些提示词说成自己写的。

163–442 来自 [yang0/handraw-style](https://github.com/yang0/handraw-style)，作者记 yang0。手绘保留为风格标签，应用场景根据条目的表达特点推荐。生图名称和视觉特征按原文保留。使用须保留原作者署名和仓库链接。
