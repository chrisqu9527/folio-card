# Female Portrait Director 项目评估 · 2026-10-31

项目：[liyue-aigc/female-portrait-director](https://github.com/liyue-aigc/female-portrait-director)。本次读取版本为 `8cddecd6786d187688e8e89a1f606540186a962f`，公开文档标记 `FEMALE-PORTRAIT-DIRECTOR-V1.6`。仅检查公开文件，没有安装或执行仓库代码，也没有用它重新生图。

## 判断

它适合成为FOLIO后续“选好风格之后，填自己的拍摄需求”的参考工作流。它是一套模块化提示词编排Skill，生成图像仍依赖宿主提供的生图能力。当前不应把20条风格路线当成20条经过样图核验的现成提示词导入。

## 已查看的公开能力

- [README](https://github.com/liyue-aigc/female-portrait-director/blob/8cddecd6786d187688e8e89a1f606540186a962f/README.md)：说明参数输入、提示词输出及宿主条件下的直接生图。
- [风格注册表](https://github.com/liyue-aigc/female-portrait-director/blob/8cddecd6786d187688e8e89a1f606540186a962f/skill/style-registry.md)：20条已实现的主路线，包括生活照、都市街拍、古风、电商试衣、复古港风、新中式、运动、旅行、影棚、近景皮肤和低照度电影摄影等。每次选择一个主路线，兼容气质作为补充，减少风格冲突。
- [参数定义](https://github.com/liyue-aigc/female-portrait-director/blob/8cddecd6786d187688e8e89a1f606540186a962f/skill/parameter_schema.md)：风格、场景、衣着、气质、画幅是简单输入；高级字段可约束镜头、光线、配色与参考图保留对象。
- [六个案例发布包](https://github.com/liyue-aigc/female-portrait-director/blob/8cddecd6786d187688e8e89a1f606540186a962f/docs/女性人像提示词导演-6个视觉案例发布包.md)：每个案例有最小输入、成片文件路径及导演解释。这些最小输入调用Skill，本身并不是完整展开后的生图提示词。
- [LICENSE](https://github.com/liyue-aigc/female-portrait-director/blob/8cddecd6786d187688e8e89a1f606540186a962f/LICENSE)声明MIT；[NOTICE](https://github.com/liyue-aigc/female-portrait-director/blob/8cddecd6786d187688e8e89a1f606540186a962f/NOTICE.md)标明作者李岳及公开版范围。如果复制或改编代码/大段模块，应保留相应版权和许可文本。

## 对FOLIO的具体价值

| 用户目的 | 适合借鉴的设计 | 本轮已有素材 |
| --- | --- | --- |
| 做个人头像、介绍自己 | 先选用途和主风格，再填写场景、衣着、光线 | 648、654、659、663 |
| 做一组写真 | 统一人物身份、色彩和服装，逐镜头变化动作与景别 | 650、651、653、656、660 |
| 做运动账号形象 | 主体清楚，运动道具和姿势服务人物定位 | 658 |
| 做毕业、情侣和婚纱纪念 | 保留参考人物身份，同时明确纪念主题和关系 | 649、650、652、662 |
| 做虚拟角色或短剧人物 | 将人物身份、衣着、风格参考分开说明；为后续图保存角色资产 | 666、667；670为微表情视频补充 |

建议的后续交互顺序是：用途 → 一张喜欢的样图 → 上传自己的参考图或描述虚构角色 → 填少量参数 → 得到注明来源的改编提示词。初始页面只展示必要输入，高级镜头和布光参数按需展开。

## 本轮实施范围

这次只新增三位X作者的23条有原帖依据的记录，并补充项目评估。没有安装此Skill、没有新增后台生图接口、没有调用付费模型，也没有把二次编写的提示词标记成原作者原文。GitHub框架未来可以接到FOLIO的改编流程，但需要选定几条路线做实际成图对照，才能判断身份一致性和稳定性。
