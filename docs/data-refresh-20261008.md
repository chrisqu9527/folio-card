# FOLIO 公开 X 数据更新 · 2026-10-08 采集／2026-10-09 完成

基线为 GitHub main 的 587 条（3e6c1ccbda10fabbc184a363169622110293eb75）。中断期间远端新增的 581–587 保持原样。本次 12 条顺延为 588–599，总计 599 条（501 图像、98 视频），本次新增均为图像提示词。

发现 182 个库外候选，核对 45 个公开原帖，45 个读取成功，选取 12 个具有完整提示词和可核对配图的条目。原帖发布于 2026-10-03 至 2026-10-07；采集日期为 2026-10-08，2026-10-09 接续完成合并与发布，不表示都在当天发布。22 张原帖示例图已解码，并通过联系表逐张查看。

只使用公开索引与 FxTwitter 公开 HTTP 接口，没有 X 登录、用户 session、cookie、浏览器个人资料或 OAuth。模型名称来自原作者标注；未调用图像或视频生成服务。排除原文缺失、截断、重复和作者明确禁止再分发的条目。

唯一编辑数据源为 skills/folio-style/data/prompts.json，其余 JSON、Markdown 和计数通过 npm run data:sync 生成。refresh-20261008-x.json 保存原帖文本切片、作者、日期、图像 URL／哈希和发现索引提交。587 条基线逐条保留；新增条目排除相同原帖与规范化相同提示词，四词片段 Jaccard 相似度小于 0.85。

| 编号 | 内容 | 原帖 |
| --- | --- | --- |
| 588 | 雾湖孤舟与小字题注 | [@EmilioSchwaiger](https://x.com/EmilioSchwaiger/status/2107790561126010965) |
| 589 | 多参考图科幻对话分镜 | [@Gertywood5](https://x.com/Gertywood5/status/2107715555411247528) |
| 590 | 月光花园奇幻人像 | [@LettyVesper](https://x.com/LettyVesper/status/2107663393658196324) |
| 591 | 魔法少女片名海报 | [@SSSS_CRYPTOMAN](https://x.com/SSSS_CRYPTOMAN/status/2107617855906975865) |
| 592 | 五首糖果时装玩偶 | [@RAYSITI](https://x.com/RAYSITI/status/2107599888636862834) |
| 593 | 飞机窗边旅途人像 | [@MohdAdnanA86218](https://x.com/MohdAdnanA86218/status/2107330963487515016) |
| 594 | 咖啡壁画与真人互动 | [@AizaAi12](https://x.com/AizaAi12/status/2107290005404262786) |
| 595 | 金色女神与立体文字 | [@jigu10](https://x.com/jigu10/status/2107283736945717306) |
| 596 | 十视角一致人物设定 | [@meAsifAi](https://x.com/meAsifAi/status/2107123657734545700) |
| 597 | 拙趣双角色打架插画 | [@VoxcatAI](https://x.com/VoxcatAI/status/2107021472493666555) |
| 598 | 珊瑚粉刺绣沙发人像 | [@ZarnishNael](https://x.com/ZarnishNael/status/2106250548844634161) |
| 599 | 轮滑公园系鞋带 | [@CyberTotal2026](https://x.com/CyberTotal2026/status/2106222709424419238) |

十视角角色设定保留完整提示词与负面约束，16K 是作者目标要求，不是实测原生分辨率。科幻分镜需提供四张输入参考，原帖两张图分别为结果拼图与调色参考；魔法少女四张配图为不同模型结果；金色女神首图选取与原提示词匹配的 Mahalakshmi，其余为原帖变体。
