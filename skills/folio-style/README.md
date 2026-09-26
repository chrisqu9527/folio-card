# FOLIO 风格编号

把公开的 X 提示词收成一套可检索的数据库。每条风格有固定编号。别人只要报编号，就能复制那一套提示词，并看到原帖预览图。

编号 `001`–`106` 在 2026-09-24 按图鉴当时的顺序冻结：**日期从新到旧，同日按 id**。这 106 条不会因为以后新增而改号。新提示词只追加到末尾，目前到 `139`。

提示词原文来自公开 X 帖，版权归原作者。这里只做编号、分类和引用。

仓库已公开：[chrisqu9527/folio-card](https://github.com/chrisqu9527/folio-card)。给人看的说明在仓库根目录 [README](../../README.md)。

## 分类

| id | 分类 | 做什么 |
| --- | --- | --- |
| portrait | 人像 | 脸、气质、胶片与角色肖像 |
| poster | 海报版式 | 海报、字体、网格与编辑设计 |
| system | 风格系统 | 可套用的风格转译、双拼与图鉴程序 |
| eastern | 东方叙事 | 武侠、仙侠、神话与国风 |
| cinema | 电影动作 | 运镜、战斗、片头与运动影像 |
| story | 叙事短片 | 日常、喜剧、恐怖、爱情与微缩故事 |
| object | 产品品牌 | 商品、时装、包装、航拍与品牌板 |
| craft | 插画工艺 | 绘本、涂鸦、拼贴与线稿 |
| code | 代码成片 | Opus 写 Canvas、Remotion 或着色器，不调用生视频模型 |

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
- `列出东方叙事` — 只看这一类的编号
- `搜索 字体` — 按标题、风格、标签找

本地也可以不经过 Agent：

```bash
node skills/folio-style/scripts/lookup.mjs 016
node skills/folio-style/scripts/lookup.mjs --category poster
node skills/folio-style/scripts/lookup.mjs --search 武侠
```

## 记录里有什么

`no` 编号、`style` 风格名、`category` 分类、`title`、`prompt` 原文、`slots` 可替换槽位、`covers` 预览图、作者与原帖、媒介（图像 / 视频）、标签、可选的模型备注和作者后记。
