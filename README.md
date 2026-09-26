# FOLIO 编号

一套编好号的 AI 图像 / 视频风格库。风格来自公开的 X 帖，提示词原文归原作者。这里做的是编号、分类、预览和复制。

当前 **133** 条。`001`–`106` 已冻结，不会改号。新风格只追加在后面。

## 可以做什么

- **报编号就复制风格。** `016`、`#16`、`风格 16`、`16号` 都指向同一条。复制出来的是原帖提示词，不改写、不补「8K、大师作品」。
- **先看图，再决定用不用。** 每条带原帖封面。网站上点大图可以放大；有多张参考图时可以切换。
- **图像和视频分开。** 网站顶部两套入口。Skill 用 `--medium image` 或 `--medium video`。报编号仍然直接跳到那一条。
- **视频再按场景找。** 预告片、游戏、广告、产品宣传、社交短视频、叙事短片、动作展示、可换模板。这是按成片用途分的，和上面的风格分类不是一回事。Skill 用 `--use 预告片`。
- **按类找，或按词搜。** 八个分类：人像、海报版式、风格系统、东方叙事、电影动作、叙事短片、产品品牌、插画工艺。也可以搜「武侠」「字体」「证件照」。
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
node skills/folio-style/scripts/lookup.mjs --category poster
node skills/folio-style/scripts/lookup.mjs --search 武侠
```

没有的编号会说明范围，不会现编一条。

## 数据在哪

| 路径 | 是什么 |
| --- | --- |
| [skills/folio-style](skills/folio-style) | 给 Agent 的 skill |
| [skills/folio-style/data/prompts.json](skills/folio-style/data/prompts.json) | 总库，机器可读 |
| [skills/folio-style/entries](skills/folio-style/entries) | 一条一个 markdown |
| [skills/folio-style/CATALOG.md](skills/folio-style/CATALOG.md) | 人类目录 |
| [public/covers](public/covers) | 预览图 |
| [src/data/prompts.json](src/data/prompts.json) | 网站用的同一份库 |

## 编号规则

1. `001`–`106` 按 2026-09-21 图鉴的顺序冻结：日期从新到旧，同日按 id。
2. `107` 起按追加日期往后排。
3. 不重排、不回收空号。删帖也不改别人已经在用的编号。

## 版权

提示词和预览图来自各位作者的公开帖，版权归原作者。FOLIO 只做索引和引用，每条都保留原帖链接和署名。不要把这些提示词说成自己写的。
