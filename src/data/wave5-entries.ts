import type { PromptEntry } from "./catalog";

export const wave5Entries: PromptEntry[] = [
  {
    id: "vigo-049",
    title: "字母即取景框",
    kicker: "VISUAL OS 049",
    excerpt: "两个词撑满黑底。字母内侧就是照片的边。没有矩形，字就是窗。",
    medium: "image",
    tags: ["海报", "排版", "运动"],
    style: "弹性巨型字体开窗",
    creatorId: "vigo",
    sourceUrl: "https://x.com/VigoCreativeAI/status/2101629087521382433",
    covers: ["/covers/vigo-049.jpg", "/covers/vigo-049-b.jpg"],
    model: "GPT Image · 9:16",
    aspect: "4/5",
    featured: true,
    date: "2026-09-20",
    notes: "示范四组：RIDE/WIDE 滑板斜切；COURT/TIME 投篮拱门；MOVE/FREE 双人拉扯；SIDE/B 黑胶圆窗。换词时保持「两词、一窗、无矩形」。",
    prompt: `Create a finished youth-culture editorial campaign poster, 9:16. Elastic megatype aperture, one connected photograph.

Enormous flat white heavy sans-serif letters press against the outer edges of a solid black field. Their inner contours stretch, taper and bow to become the actual border of a central full-color photographic opening. No separate frame, no rectangle: the letterforms ARE the window.

Inside: a low-angle candid editorial photo with strong near-far perspective, one foreground object close to the lens, confident human presence, hard natural daylight, realistic anatomy.

Exactly two words, each once, all letters identifiable even when heavily distorted. Faces and the key action stay unobstructed.

Words: "[WORD ONE]" / "[WORD TWO]"

Subject: [SUBJECT]
Scene: [SCENE]
Aperture: [WHAT SHAPE THE ACTION MAKES]

Crisp black-white graphic contrast around bright natural color. Smooth opaque type, clean digital photo. No 3D type, no shadows on type, no paper grain, no halftone, no arrows, no logos, no extra words.`,
  },
  {
    id: "larus-wuxia",
    title: "金庸浮世绘",
    kicker: "武者绘人物志",
    excerpt: "夸张透视、大色块、木版套色。欧阳锋、东方不败、梅超风、金轮法王，一张一个母题。",
    medium: "image",
    tags: ["武侠", "东方", "海报"],
    style: "东方武侠浮世绘",
    creatorId: "larus",
    sourceUrl: "https://x.com/MrLarus/status/2101628153860919768",
    covers: ["/covers/larus-wuxia.jpg", "/covers/larus-wuxia-b.jpg"],
    model: "GPT Images 2.5 · 9:16",
    aspect: "4/5",
    featured: true,
    date: "2026-09-20",
    notes: "作者示范：欧阳锋白发蛇杖蛤蟆功；东方不败红袍银线悬身；梅超风黑发鬼爪前扑；金轮法王巨轮厚袍压境。换人只改五个槽位。",
    prompt: `【人物】填写武侠人物名称
【核心动作】填写代表性武功、姿态或战斗动作
【视觉锚点】填写武器、长发、法轮、蛇、丝线等标志元素
【主色调】填写 2–4 个主色
【题签文字】填写人物名或四字短题

创作一幅 9:16 竖幅东方武侠浮世绘人物画。基于【人物】重新塑造角色形象，不参考任何影视演员脸或具体影视造型。

人物正在施展【核心动作】，采用夸张透视、强扭转、大幅动态裁切，让身体、衣袍、头发和【视觉锚点】共同形成清晰的大形与强烈动势。人物占画面约 75%–85%，局部可自然出框，缩略图下仍能一眼识别角色与动作。

整体采用传统武者绘与木版套色视觉语言：粗细明确的黑色雕版轮廓、平面大色块、夸张人体比例、古版画式空间压缩。使用【主色调】作为主体色系，颜色饱满、稳定、完整，避免现代渐变、CG 高光和游戏原画质感。

构图至少包含一个强视觉锚点，以及一条清晰硬轴或大曲线，例如兵器、手臂、发束、衣袍、丝线、法轮或蛇身。所有元素必须有明确方向和连接关系，不随机堆叠。

背景保持低密度，以暖象牙米白纸面为主，只加入少量山石、枯木、远山、云气或环境暗示，大面积留白，让人物成为绝对主体。

画面边缘加入传统纵向题签、小题识和 1–2 枚朱印，【题签文字】自然融入古画边栏，不使用现代大标题、编号或 UI 装饰。

整体气质应具有武侠、怪诞、强动作和古版画张力，同时保持人物辨识度。每个角色根据自身武功、武器、发型、服饰和动作形成不同视觉母题，但整组必须保持相同的纸张、线条、套色、题签和版画质感。

避免：影视演员脸、现代古装写真、仙侠手游立绘、动漫脸、3D 渲染、摄影质感、标准站姿、现代金属高光、霓虹特效、魔法光效、复杂背景、严重做旧黄斑、随机噪点、现代 Typography、水印、编号。`,
  },
  {
    id: "larus-nature",
    title: "自然开窗海报",
    kicker: "风迹 / 汲泉",
    excerpt: "书法大字、自然色块、真实风景窗口，再叠一件立体实物。纸本感和空间感同时成立。",
    medium: "image",
    tags: ["海报", "东方", "极简"],
    style: "自然文化编辑海报",
    creatorId: "larus",
    sourceUrl: "https://x.com/MrLarus/status/2101607866478031056",
    covers: ["/covers/larus-nature.jpg", "/covers/larus-nature-b.jpg"],
    model: "GPT Images 2.5 · 9:16",
    aspect: "4/5",
    date: "2026-09-20",
    notes: "示范四组：风迹（草木薄纸）、汲泉（山涧石钵）、苔庭（苔藓山石）、松间（松枝枯木）。层次固定：艺术纸 → 色块 → 摄影窗口 → 立体实物。",
    prompt: `【主题】：填写，例如「风迹 / 汲泉 / 苔庭 / 松间」
【中文主标题】：填写 2–4 个字
【英文标题】：填写
【自然主题元素】：填写，例如风、水、苔藓、松木、山石、草穗
【前景立体实物】：填写，例如石钵、苔石、枯木、薄纸、植物
【摄影窗口场景】：填写，例如雾中山林、山涧、草坡、松林
【主色调】：填写低饱和自然色
【画幅比例】：默认 9:16

生成一张东方自然文化主题的 Editorial Design 艺术海报。

整体采用暖象牙米白艺术纸背景，保留轻微天然纸纤维与克制的印刷颗粒，大面积留白，画面安静、自然、松弛、有文化感。

画面上方或偏右放置巨大的中文手写书法标题【中文主标题】，使用自由、真实、有毛笔提按变化与墨迹浓淡的现代东方书写方式，让中文大字本身成为主要视觉锚点。

搭配纤细优雅的英文 Serif 字体呈现【英文标题】，再加入少量有实际意义的中文短句、英文说明和日期信息，形成“大书法 + 英文标题 + 小字号编辑文字”的信息层级。

画面中部加入一个大型低饱和自然色块，颜色使用【主色调】。色块边缘具有自然撕纸、山体、地形或有机形态感，保持完整清晰的大形，不要拆成大量碎片。

在色块内部开出一个圆形、椭圆形、竖向或不规则自然窗口，窗口中呈现【摄影窗口场景】的真实摄影画面。摄影区域低对比、低饱和、有薄雾和空气透视感，像透过纸张开孔看见另一个真实自然空间。

画面下部加入真实立体的【前景立体实物】，具有真实材质、体积、接触阴影和自然空间关系。

让真实立体物局部遮挡二维色块或摄影窗口，形成明显的前后层次：

艺术纸背景 → 平面色块 → 自然摄影窗口 → 真实立体实物。

主题围绕【自然主题元素】展开，让所有视觉元素共同表达一个清楚的自然概念，而不是简单堆砌装饰。

整体版式采用不对称 Editorial Design，文字散落在留白区域，可以加入少量纵向排版、边缘排版和超小字号信息，但所有文字都应具有真实意义。

配色控制在暖米白、低饱和自然主题色、石灰灰、灰褐、墨褐等范围，整体哑光、柔和、稳定，不使用高饱和颜色。

保留轻微 Offset Print、艺术纸、手工印刷与纸本出版物质感，但不要过度做旧。

最终效果应像真正完成的自然文化展览海报：远看首先看到巨大书法标题、完整色块和清楚的立体自然物，近看才发现摄影窗口、小型文字与材质细节。`,
  },
  {
    id: "larus-glass",
    title: "玻璃切片双人像",
    kicker: "Glass Slicing",
    excerpt: "两张脸朝画面中心。光学玻璃只覆盖几个网格格，后面的影像被折射、位移、局部锐化。",
    medium: "image",
    tags: ["海报", "人像", "电商"],
    style: "玻璃网格时尚海报",
    creatorId: "larus",
    sourceUrl: "https://x.com/MrLarus/status/2101644997460213894",
    covers: ["/covers/larus-glass.jpg", "/covers/larus-glass-b.jpg"],
    model: "GPT Images 2.5 · 9:16",
    aspect: "4/5",
    date: "2026-09-20",
    notes: "作者在墨镜、腕表、耳机、香水四类产品上测过。玻璃不要铺满，只要几格观察窗。",
    prompt: `Brand: [BRAND NAME]
Product: [PRODUCT]
Theme: [CAMPAIGN THEME]
Accent palette: [COLOR PALETTE]
Product details: [MATERIAL / FEATURES]

Create a premium 9:16 editorial campaign poster with two adult fashion models arranged vertically, one in the upper section and one in the lower section.

Both subjects must face inward toward the center: the upper portrait looks diagonally down toward the middle, while the lower portrait looks diagonally upward toward the middle. Keep them asymmetrically positioned rather than vertically centered.

Leave a clean editorial information band between the two portraits for the brand name, product name, short campaign line and minimal technical copy.

Use extreme close-up fashion photography with natural skin texture, shallow depth of field, soft motion blur and intentionally out-of-focus areas.

Overlay only a few selected grid sections with real optical glass panels. Mix clear glass, lightly tinted glass, smoked glass and subtle magnification. The glass should physically affect the image behind it through refraction, slight displacement, selective sharpening, soft distortion and restrained edge reflections.

Some areas behind the glass become noticeably sharper while the surrounding photography stays blurred, creating a strong contrast between soft imagery and precise observation windows.

Add an extremely fine modular grid across the entire composition. Keep the lines subtle and low-contrast.

Use refined high-contrast serif typography for the brand and very small spaced sans-serif typography for product details. Keep the layout minimal, airy and editorial rather than UI-heavy.

Match the glass tint, product materials and accent colors to the chosen theme. Keep most of the poster light and restrained, using darker tones only as controlled visual weight.

The final image should feel like a high-end independent fashion, beauty or product campaign: cinematic, tactile, photographic and contemporary.

Avoid generic luxury ads, centered portraits, subjects facing outward, excessive glass panels, heavy UI graphics, thick grid lines, cyberpunk styling, excessive lens flare, plastic skin, CGI faces and overly sharp photography.`,
  },
  {
    id: "daai-destijl",
    title: "风格派双拼",
    kicker: "De Stijl",
    excerpt: "横线、竖线、红黄蓝。把人物和宠物拆进蒙德里安的秩序里。",
    medium: "image",
    tags: ["风格系统", "转绘", "海报"],
    style: "上下双拼风格转译",
    creatorId: "daai",
    sourceUrl: "https://x.com/daaihq/status/2101647572809166902",
    covers: ["/covers/daai-destijl.jpg", "/covers/daai-destijl-b.jpg"],
    model: "GPT Image · 竖版 1:1+1:1",
    aspect: "3/4",
    date: "2026-09-20",
    prompt: `创作一张竖版上下双拼风格的完整插画，严格上下 1:1 分区，整体像一张经过精心设计的上下双拼作品，而不是简单拼接图。上半部分为原图主体提炼，下半部分为风格派重构。

上半部分：
以上传原图作为唯一主体参考来源，自动识别画面中的主要人物、猫、狗或其他常见宠物，重点提取主体本身，忽略建筑和复杂环境的主导性。尽量保留主体最重要的识别信息，包括人物的面部比例、发型、服饰与气质，或宠物的毛色、花纹、体型与五官特征。背景适度清理简化，主体完整清晰，构图稳定。

下半部分：
将同一个主体转化为「De Stijl 风格派」视觉语言的完整插画。核心风格特征：水平垂直黑线、红黄蓝原色与白色块面的秩序组合。整体原则：采用清晰的几何结构、平面块面与秩序化构图，控制层级和留白。构图采用单一明确主体或一个清晰场景，视觉中心稳定，主体完整不被裁断，背景适度简化并保留呼吸感；线条、色块、明暗、材质和纸面纹理必须服务于同一风格，不混入无关画风。主体的轮廓、姿态、服饰大关系和负空间应被理性地纳入横竖黑线与原色块面的秩序系统中，形成高度几何化、结构化的风格派转译。画面自然、有手作感和可识别的风格特征，避免 AI 常见的过度光滑、无意义细节堆砌和随机装饰。

整体要求：
上下主体必须高度对应，下半部分一眼能识别出与上半部分是同一主体的 De Stijl 风格化重构。除非主题明确要求，否则不生成文字、Logo、水印、边框、UI，不做多图拼接。`,
  },
  {
    id: "daai-construct",
    title: "构成主义双拼",
    kicker: "Constructivism",
    excerpt: "红黑米白、斜线切割。普通照片一下变成宣传画主角。",
    medium: "image",
    tags: ["风格系统", "转绘", "海报"],
    style: "上下双拼风格转译",
    creatorId: "daai",
    sourceUrl: "https://x.com/daaihq/status/2101524828352401694",
    covers: ["/covers/daai-construct.jpg", "/covers/daai-construct-b.jpg"],
    model: "GPT Image · 竖版 1:1+1:1",
    aspect: "3/4",
    date: "2026-09-20",
    prompt: `创作一张竖版上下双拼风格的完整插画，画布严格竖向构图，上下对半分割，各占 1:1，形成清晰的视觉对照：上方为原图主体提炼，下方为构成主义风格重构。

上半部分：
以上传原图作为唯一主体参考来源，自动识别并提取人物、猫、狗或其他宠物主体，不以建筑或环境为主要表现内容。尽量保留主体的核心识别特征，包括人物的脸型、五官、发型、服饰与年龄感，或宠物的毛色、花纹、脸型、耳朵、体型等。背景可做简化处理，主体清晰，构图稳定，不被无意义裁切。

下半部分：
将同一个主体转化为「Constructivism 构成主义」视觉语言的完整插画。核心风格特征：红黑米白、斜向构图、几何切割和强烈宣传画节奏。整体原则：采用清晰的几何结构、平面块面与秩序化构图，控制层级和留白。构图采用单一明确主体或一个清晰场景，视觉中心稳定，主体完整不被裁断，背景适度简化并保留呼吸感；线条、色块、明暗、材质和纸面纹理必须服务于同一风格，不混入无关画风。将主体姿态、视线或动作融入强烈的斜向构图之中，用几何切割、对角力量、宣传画式张力和有限色彩系统来重建画面，使其具有明确的构成主义视觉节奏。画面自然、有手作感和可识别的风格特征，避免 AI 常见的过度光滑、无意义细节堆砌和随机装饰。

整体要求：
上下两部分是同一主体的前后视觉转化，下半部分应具有鲜明的构成主义力量感和宣传画气息，但不生成文字、Logo、水印、边框、UI，不做多图拼接。`,
  },
  {
    id: "daai-memphis",
    title: "孟菲斯双拼",
    kicker: "Memphis",
    excerpt: "波点、锯齿、跳跃配色。人物和宠物一秒变成八十年代潮玩 IP。",
    medium: "image",
    tags: ["风格系统", "转绘"],
    style: "上下双拼风格转译",
    creatorId: "daai",
    sourceUrl: "https://x.com/daaihq/status/2101832852409360592",
    covers: ["/covers/daai-memphis.jpg", "/covers/daai-memphis-b.jpg"],
    model: "GPT Image · 竖版 1:1+1:1",
    aspect: "3/4",
    date: "2026-09-21",
    prompt: `创作一张竖版上下双拼风格的完整插画，画面严格上下分为两个等高区域，上半部分为原图主体提炼，下半部分为孟菲斯风格重构，整体具有鲜明设计感与视觉趣味。

上半部分：
以上传原图作为唯一主体参考来源，自动识别主要人物、猫、狗或其他常见宠物，重点保留主体，不以建筑和环境为主要内容。保留人物的脸型、五官、发型、服饰、年龄感和气质，或宠物的品种、毛色、花纹、耳朵、体型等识别特征。背景简化，主体清晰完整，视觉中心明确。

下半部分：
将同一个主体转化为「Memphis 孟菲斯」视觉语言的完整插画。核心风格特征：波点、锯齿、几何小图形、跳跃配色和 80 年代玩味。整体原则：采用清晰的几何结构、平面块面与秩序化构图，控制层级和留白。构图采用单一明确主体或一个清晰场景，视觉中心稳定，主体完整不被裁断，背景适度简化并保留呼吸感；线条、色块、明暗、材质和纸面纹理必须服务于同一风格，不混入无关画风。将主体与孟菲斯式装饰几何、波点、锯齿、跳跃图形节奏融合，强化 playful、轻松、鲜艳但有系统的平面语言，营造 80 年代设计趣味与夸张节奏。画面自然、有手作感和可识别的风格特征，避免 AI 常见的过度光滑、无意义细节堆砌和随机装饰。

整体要求：
上下主体为同一个人物或宠物，下半部分是上半部分主体的孟菲斯重构，而不是另一个独立对象。除非主题明确要求，否则不生成文字、Logo、水印、边框、UI，不做多图拼接。`,
  },
  {
    id: "daai-mcm",
    title: "世纪中期现代双拼",
    kicker: "Mid-century Modern",
    excerpt: "暖复古色、原子时代几何、纸张颗粒。像从五六十年代杂志里撕下来的一页。",
    medium: "image",
    tags: ["风格系统", "转绘", "海报"],
    style: "上下双拼风格转译",
    creatorId: "daai",
    sourceUrl: "https://x.com/daaihq/status/2101888137069023414",
    covers: ["/covers/daai-mcm.jpg", "/covers/daai-mcm-b.jpg"],
    model: "GPT Image · 竖版 1:1+1:1",
    aspect: "3/4",
    date: "2026-09-21",
    prompt: `创作一张竖版上下双拼风格的完整插画，纵向画布上下各占 1:1，整体像一张复古而克制的设计作品。上半部分呈现上传原图主体的提炼版，下半部分呈现同一主体的世纪中期现代风格重构。

上半部分：
以上传原图作为唯一主体参考来源，自动识别画面中的人物、猫、狗或其他常见宠物，重点提取主体，不将建筑和复杂环境作为核心内容。尽量保留人物的脸型、五官、发型、服饰、年龄感、气质和配件，或宠物的毛色、花纹、脸型、耳朵和体型。背景适当简化，主体清晰完整，构图稳定，干净自然。

下半部分：
将同一个主体转化为「Mid-century Modern 世纪中期现代」视觉语言的完整插画。核心风格特征：50 至 60 年代简化人物、原子时代几何、暖复古色和纸张颗粒。整体原则：采用清晰的几何结构、平面块面与秩序化构图，控制层级和留白。构图采用单一明确主体或一个清晰场景，视觉中心稳定，主体完整不被裁断，背景适度简化并保留呼吸感；线条、色块、明暗、材质和纸面纹理必须服务于同一风格，不混入无关画风。将主体形象以世纪中期现代设计语言进行简化和整理，强调复古暖色、原子时代几何符号、纸张质感和简练平面化人物/宠物造型，使画面呈现明显的 50–60 年代设计海报与插画气质。画面自然、有手作感和可识别的风格特征，避免 AI 常见的过度光滑、无意义细节堆砌和随机装饰。

整体要求：
上下主体必须保持明显一致性，下半部分能一眼看出是上半部分同一主体的世纪中期现代版。除非主题明确要求，否则不生成文字、Logo、水印、边框、UI，不做多图拼接。`,
  },
  {
    id: "cheng-metro",
    title: "地铁踢鞋",
    kicker: "Hidden Cut Prank",
    excerpt: "踢两次鞋，甩两次镜。女主从车厢门口接到站台树式，再接到镜头前。",
    medium: "video",
    tags: ["日常", "动作"],
    style: "手机第一视角恶作剧",
    creatorId: "chengzi",
    sourceUrl: "https://x.com/Chengzilhy/status/2101163963421708290",
    covers: ["/covers/cheng-metro.jpg"],
    model: "Seedance 2.5 · 9:16 · 14s",
    aspect: "9/16",
    featured: true,
    date: "2026-09-19",
    notes: "全片只有两次踢鞋。第二次踢完立刻离开鞋子。两次隐藏甩镜把远处树式女主接到近景。左脚始终没鞋、只穿黑丝。",
    prompt: `【参考素材定义】
图片＝唯一人物身份参考

【风格】

真实手机第一视角恶作剧短视频，日本地铁站实拍质感。

全片唯一主角是女主。脱下的黑色高跟鞋只是开场触发剧情的临时道具，不能成为持续追踪主体。

自然手机手持拍摄，保留轻微晃动、正常步行产生的小幅起伏、手机自动对焦、数码变焦和快速甩镜产生的真实运动模糊。

纯真人实拍，不要卡通贴纸、动漫人物、3D角色或电影广告质感。

【时长与画幅】

约14秒，9:16竖屏。

【场景】

真实日本地铁站。列车停靠，车门与站台门已经打开。

画面可见车厢内部、车门门槛、站台缝隙、浅色瓷砖地面、站台导向线、站台立柱和纵深通道。

【女主】

女主全程保持相同脸型、五官、发型、服装、身材比例和身份。

全程穿图1的完整服装。

右脚始终穿一只黑色尖头细跟高跟鞋。

左脚没有穿鞋，但薄透黑丝袜完整覆盖左腿和左脚。

脱下的另一只左脚黑色尖头细跟高跟鞋放在车厢地面。

女主右手拿着手机。

【镜头1：建立女主】

手机第一视角拍摄女主完整身体，双腿和双脚完整清楚入镜。

女主站在打开的地铁车门旁，身体自然轻靠车门旁边的位置，低头看右手中的手机。

右脚只穿一只黑色尖头细跟高跟鞋，并支撑身体。

左脚明确没有穿高跟鞋，薄透黑丝袜完整覆盖左腿和左脚，黑丝袜包裹的左脚直接踩在车厢地面。

女主脱下的左脚黑色尖头细跟高跟鞋单独放在她前方的车厢地面，与左脚明显分离。

画面中只有一双黑色高跟鞋：

一只穿在女主右脚上，另一只单独放在车厢地面。左脚没有鞋。

镜头轻微自然晃动，女主是画面的主要视觉中心。

【镜头2：第一次踢鞋】

镜头从女主自然转向地面。

摄影者穿白色运动鞋的脚从画面下方进入，轻轻踢中地面的左脚黑色尖头高跟鞋。

必须清楚看到白色运动鞋与黑色高跟鞋发生真实接触。

黑色高跟鞋受到推动后贴着地面向前滑动，越过车门门槛和站台缝隙，进入站台区域。

摄影者不奔跑，不追赶鞋子。

【镜头3：慢慢走近与第二次踢鞋】

第一次踢完后，摄影者保持正常步行速度慢慢向前走。

手机镜头自然向下拍摄。

黑色高跟鞋贴着站台瓷砖继续向前滑动，并自然逐渐减速。

摄影者正常走到黑色高跟鞋附近。

白色运动鞋第二次轻轻踢中黑色高跟鞋。

必须清楚看到白色运动鞋与黑色高跟鞋再次发生真实接触。

黑色高跟鞋受到第二次推动后，继续贴着地面向前滑动。

全片只有两次踢鞋动作。

第二次踢完后，镜头立即离开鞋子，不再继续拍摄鞋子。

【镜头4：第一次甩镜隐藏剪辑】

第二次踢鞋结束后，镜头立即从地面向前上方高速甩动。

站台地面、近处灰白色区域和强烈运动模糊快速覆盖整个画面。

在画面完全模糊的瞬间完成第一次隐藏剪辑。

甩镜动作结束后，镜头自然抬起并对准站台远处。

女主已经位于站台纵深中央。

前后镜头的甩动方向、速度和晃动必须连续，不能出现明显跳帧。

被踢走的左脚高跟鞋从这一镜头开始永久离开画面。

【镜头5：女主远处树式站姿】

女主位于站台远处中央，正面面对摄影者，做出清楚的单腿树式姿势。

右腿竖直承重，右脚穿黑色尖头细跟高跟鞋并稳稳踩在地面。

左脚没有穿鞋，薄透黑丝袜完整覆盖左腿和左脚。

左膝向身体左侧打开并弯曲，左脚向内收起，左脚内侧贴在右膝内侧附近，左脚始终悬空，不接触地面。

女主上身直立，头部正对镜头。

右手握着手机自然垂在身体右侧，左臂自然垂下，视线看向摄影者。

保持完整树式站姿。

不换腿、不落左脚、不双脚站立、不跳动，也不向摄影者走来。

【镜头6：焦距拉近再拉远】

摄影机位置保持不变，镜头中心持续锁定女主。

手机镜头快速拉长焦距，让远处保持树式姿势的女主迅速放大至较近的完整全身景别。

短暂停留后，镜头快速缩短焦距，让女主重新缩小，恢复到站台远处的完整全身构图。

这是手机焦距变化，不是摄影者前进后退，也不是女主走近。

女主的脚底位置、树式站姿和背景空间关系始终不变。

【镜头7：连续甩镜与第二次隐藏剪辑】

镜头从远处女主快速甩向右下方，女主短暂离开画面。

镜头立即甩回，再次短暂看到保持树式姿势的女主。

随后第二次快速甩向右下方地面。

站台地面、立柱底座和强烈运动模糊完全覆盖画面。

在画面完全模糊的瞬间完成第二次隐藏剪辑。

保持镜头甩动的方向、速度和手持晃动连续，将远处女主无痕切换为站在摄影者旁边的女主。

不能在清晰画面中展示女主跑过站台或突然瞬移。

【镜头8：女主近距离收尾】

第二次甩镜结束后，镜头自然抬起，女主已经出现在摄影者旁边。

女主直视镜头，主动快速靠近，从中近景进入面部极近特写。

她自然嘟嘴，在脸部最靠近镜头的位置闭上眼睛，形成即将亲吻镜头的视觉效果。

随后女主将头部和上身向后退回正常近景，重新睁开眼睛，轻微侧头看向镜头结束。

这一镜头中人物大小变化来自女主主动靠近和退出，不能使用数码变焦替代。

【环境声与动作音效】

全程没有音乐、背景配乐、旁白或人工节拍。

只保留真实同步声音：

日本地铁站环境底噪、列车设备运行声、远处乘客声音、白色运动鞋踢中黑色高跟鞋的轻微碰撞声、高跟鞋滑过瓷砖的摩擦声、摄影者正常行走的脚步声、衣物摩擦声、呼吸声和快速甩镜产生的自然风噪。

不要卡通音效、人工转场音效或亲吻音效。`,
  },
  {
    id: "khan-livestream",
    title: "游戏直播太真了",
    kicker: "Seedance 2.5",
    excerpt: "右下角 1:1 脸部摄像头，左下滚动弹幕。女主潜入电器行，两星通缉开车逃。",
    medium: "video",
    tags: ["动作", "日常"],
    style: "开放世界直播录像",
    creatorId: "khan",
    sourceUrl: "https://x.com/AIwithkhan/status/2101878674043928898",
    covers: ["/covers/khan-live.jpg"],
    model: "Seedance 2.5 · 16:9 · 30s",
    aspect: "16/9",
    date: "2026-09-21",
    notes: "Image1 锁主播脸。脸部摄像头永远在右下角，聊天区只走英文，对白只说韩语。结束必须停在追逐中途。",
    prompt: `Use Image1 as the highest-priority visual reference for the Korean female streamer. Preserve her exact adult appearance, facial structure, skin tone, hairstyle, body proportions, clothing, accessories, room lighting and realistic streaming environment. She must remain the same real Korean woman throughout, never stylized, anime, plastic, CGI, duplicated or face-swapped.

Create a strictly 30-second, 16:9 1080p photorealistic open-world crime-action gameplay livestream set in a fictional modern Korean-inspired coastal city. One continuous gameplay sequence with no cuts or transitions.

FIXED STREAM LAYOUT: Full-screen gameplay with a square 1:1 facecam permanently positioned bottom-right. The streamer remains visible only inside the facecam. English-only live chat scrolls along the lower-left. HUD remains visible throughout: minimap top-right, health/armor bottom-left, weapon/ammo near the lower-right, cash counter, stamina meter and wanted level top-center.

PLAYER: Young Korean female character wearing a fitted black jacket, loose cargo pants, white sneakers and a small crossbody bag. She carries a compact handgun. Exactly three fictional private-security guards with pistols; no other armed NPCs.

0–6s The player quietly sneaks through the back entrance of a luxury electronics store after closing hours. She crouches behind display shelves while a security camera sweeps across the room. The streamer leans toward her monitor and whispers in Korean: “Okay… nobody saw that.” Chat: “orri: SHE'S IN”, “Wavers: don't trigger the alarm”.

She reaches the locked display cabinet, uses a small electronic device to open it, grabs a valuable case and accidentally knocks over a metal stand. A loud crash triggers the alarm. Red warning lights activate and the three guards rush toward her. Wanted level changes from 0 to 1.

The player sprints through the store while guards chase and fire. She dives behind a checkout counter, returns fire and shatters a glass display for cover. The streamer reacts naturally, eyes widening and hands moving rapidly across keyboard and mouse. Korean dialogue: “Oh no, they're already here!”

She escapes through a side door into a narrow neon-lit alley. One guard follows outside while the other two remain behind. She quickly disables the pursuing guard with non-graphic gameplay combat and keeps running. Wanted level rises to 2 stars. Chat rapidly scrolls: “Joseph: RUN RUN RUN”, “STOK: TWO STARS”, “Andrea Brown: GET TO THE CAR”.

She reaches a parked compact sports car, throws the case into the passenger seat and speeds away. Camera smoothly changes into a third-person chase camera without a cut. Two police vehicles appear in the distance and begin pursuing her through busy city traffic. She narrowly avoids a bus, clips a street barrier and escapes into a brightly lit downtown avenue.

STREAMER REACTION: Throughout the entire sequence, maintain synchronized realistic reactions inside the facecam — natural blinking, focused eyes, subtle facial expressions, quick glances at the gameplay, realistic keyboard and mouse movement, nervous smile during the escape. Korean dialogue only, spoken naturally and casually.

FINAL FRAME: The player is still driving with police lights visible several cars behind her, wanted level remains at 2 stars, health is partially depleted and the stolen case remains visible inside the vehicle. End mid-chase with no mission-complete screen.

VISUAL STYLE: Photorealistic AAA open-world gameplay, realistic Korean city architecture, neon storefronts, wet asphalt reflections, believable NPC behavior, detailed vehicles, natural physics, cinematic but authentic gameplay camera, realistic muzzle flashes, glass destruction and environmental reactions.`,
  },
  {
    id: "khan-elevator",
    title: "电梯里的邻居",
    kicker: "Apartment Horror",
    excerpt: "灯闪、楼层乱跳、身体开始不对。门开一半，她从缝里爬出来跟着跑。",
    medium: "video",
    tags: ["日常", "动作"],
    style: "韩式公寓电梯恐怖",
    creatorId: "khan",
    sourceUrl: "https://x.com/AIwithkhan/status/2101689290992542125",
    covers: ["/covers/khan-elevator.jpg"],
    model: "Seedance 2.5 · Higgsfield · 16:9 · 30s",
    aspect: "16/9",
    date: "2026-09-20",
    notes: "作者强调无血腥、无明确外伤。身体要「不自然但物理上还能成立」。",
    prompt: `Young Korean woman wearing a fitted blue crop top and white shorts enters an old apartment-building elevator alone; a tired neighbor stands quietly beside her.

The elevator doors close; fluorescent lights flicker while the woman stares at the floor, completely still.

The floor indicator suddenly glitches; she slowly raises her head and looks toward the neighbor with an unsettling blank expression.

Her fingers begin twitching violently; her shoulders jerk as if something is moving beneath her skin.

She suddenly grabs the elevator railing, bends forward unnaturally, then collapses against the wall.

The neighbor steps backward in fear and desperately presses the emergency button.

She becomes completely motionless for a moment, then slowly rises with wide unfocused eyes, pale skin and unnatural posture.

Her head tilts sharply to one side; her hands twitch while her breathing becomes heavy and irregular.

The neighbor tries to force the elevator doors open, but they remain stuck between floors.

The woman suddenly lunges forward and slams against the elevator wall, then turns toward the neighbor with a terrifying expression.

The emergency lights switch to red as the elevator shakes and stops completely.

The neighbor desperately crawls toward the control panel while she slowly approaches from behind.

The elevator suddenly drops a few inches; both stumble as the lights flicker violently.

The doors finally open halfway, revealing a dark apartment hallway outside.

The neighbor squeezes through the opening, but the woman suddenly rushes forward and crawls underneath the closing doors.

The neighbor runs down the hallway as the creature follows with fast, unnatural movements.

A resident opens their apartment door, sees the creature approaching and immediately slams the door shut.

The creature stops, slowly turns toward the camera, then suddenly charges down the hallway.

The hallway lights flicker one by one as the camera backs away toward the stairwell.

The elevator doors remain open behind her, completely empty, while a faint distorted breathing sound comes from inside.

STYLE: Ultra-realistic Korean apartment elevator horror, claustrophobic handheld camera, flickering fluorescent and emergency lighting, realistic skin and facial expressions, unnatural but physically believable body movement, tense pacing, realistic elevator reflections, subtle camera shake, natural motion blur, cinematic but grounded, practical-effects horror, no gore, no blood, no explicit injuries, no subtitles, no watermark, no CGI look.`,
  },
  {
    id: "khan-pharmacy",
    title: "深夜药店",
    kicker: "Late-night Horror",
    excerpt: "处方、扫描声、灯开始闪。她在药架之间折着关节走过来。",
    medium: "video",
    tags: ["日常", "动作"],
    style: "韩式药店恐怖",
    creatorId: "khan",
    sourceUrl: "https://x.com/AIwithkhan/status/2101329280651391384",
    covers: ["/covers/khan-pharmacy.jpg"],
    model: "Seedance 2.5 · Higgsfield · 16:9 · 30s",
    aspect: "16/9",
    date: "2026-09-19",
    prompt: `A girl enters a small late-night medical drug store holding a prescription, tired and slightly anxious; realistic Korean horror, narrow aisles filled with medicine boxes, glass cabinets, cold fluorescent lighting, quiet empty atmosphere.
She approaches the counter and asks the pharmacist for her medicine while he searches the shelves.
Her fingers freeze around the prescription; repeated scanner beeps echo through the silent store as the fluorescent lights begin flickering.
She suddenly stares toward the medicine aisle, sensing something behind her.
Her fingers begin twitching uncontrollably, slowly curling into unnatural positions.
She violently convulses against the counter; the pharmacist stumbles backward as medicine bottles fall from the shelves.
She collapses behind the counter, one arm twitching at an unnatural angle, her limbs becoming rigid and distorted.
She slowly rises again with wide unfocused eyes, a slack face, bent joints, and unnaturally twisted limbs.
Her head tilts at a broken angle as she stares directly at the pharmacist without blinking.
The pharmacist backs away in terror as her arms suddenly bend backward at the elbows.
Her jaw stretches impossibly wide, revealing an unnatural scream that echoes through the pharmacy.
She suddenly lunges forward over the counter with explosive speed, forcing the pharmacist to run.
She vaults over the counter with backward-bending limbs, moving unnaturally fast between the narrow aisles.
She stands completely still between the medicine shelves, wide unfocused eyes staring toward the entrance.
A customer enters and freezes when she slowly turns her head toward them.
Her fingers twitch as her bent joints and distorted limbs begin moving again.
She suddenly lunges down the aisle, knocking medicine boxes and bottles from the shelves.
The customer runs toward the exit and trips over a fallen basket.
The pharmacist grabs a fire extinguisher and pulls the pin with shaking hands.
White powder blasts into her face; she recoils into a glass medicine cabinet, her limbs folding at unnatural angles.
She slowly rises from the cloud, powder covering her face, wide unfocused eyes locked on the pharmacist.
Her jaw drops and stretches impossibly wide again as she suddenly lunges toward him.
He sprays the extinguisher continuously while backing toward the entrance.
She crashes through the glass door, her bent limbs twisting unnaturally as shards scatter across the empty nighttime street.
The pharmacist and customer stare through the shattered doorway in silence.
Final CCTV angle from inside the medical store; empty aisles, flickering lights, scattered medicine boxes.
A single medicine box slowly falls from a shelf. Cut to black.`,
  },
  {
    id: "qaim-dragon",
    title: "龙背第一人称",
    kicker: "Fantasy Flight",
    excerpt: "手握鞍具，从暴风雪山飞进金色浮空王城。镜头始终是骑手的眼睛。",
    medium: "video",
    tags: ["奇幻", "动作"],
    style: "第一人称史诗飞行",
    creatorId: "qaim",
    sourceUrl: "https://x.com/q_a_i_m_01/status/2101912298998906991",
    covers: ["/covers/qaim-dragon.jpg"],
    model: "视频模型 · 9:16 · 30s",
    aspect: "9/16",
    date: "2026-09-21",
    prompt: `Ultra-realistic cinematic first-person fantasy flight sequence. The camera is from the rider’s POV, with their hands visible gripping the ornate saddle of a gigantic dark dragon. The dragon has massive leathery wings, rugged black scales, and subtle moss-covered details. It flies through a vast misty mountain landscape beneath dramatic overcast skies, with distant snow-covered peaks and enormous floating fantasy islands emerging from the clouds.

As the flight continues, the atmosphere gradually transforms from dark and stormy into a breathtaking golden-hour scene. The dragon glides above an endless sea of clouds toward a magnificent ancient fantasy kingdom built on floating islands, featuring enormous white-and-gold architecture, grand bridges, towers, arches, and glowing warm lights.

Camera: immersive first-person POV, realistic head movement, subtle body vibration from the dragon’s flight, smooth forward motion, occasional gentle banking as the dragon turns.

Visual style: photorealistic AAA fantasy game cinematic, extremely detailed dragon scales, realistic clouds, volumetric fog, atmospheric depth, cinematic lighting, epic scale, natural motion blur, high dynamic range, 4K, highly immersive, seamless progression from stormy mountains to warm golden fantasy city.

No text, no subtitles, no watermark, no UI, no third-person camera.`,
  },
  {
    id: "qaim-butterfly",
    title: "粉蝶螺旋",
    kicker: "Helix Vortex",
    excerpt: "暮色草地中央一座发光结构。几百只粉蝶绕成螺旋，镜头跟着升空。",
    medium: "video",
    tags: ["治愈", "奇幻"],
    style: "超现实夜景升镜",
    creatorId: "qaim",
    sourceUrl: "https://x.com/q_a_i_m_01/status/2101651500292616689",
    covers: ["/covers/qaim-butterfly.jpg"],
    model: "视频模型 · 9:16 · 15s",
    aspect: "9/16",
    date: "2026-09-20",
    prompt: `A cinematic surreal night-time landscape at twilight, with a vast dark grassy field stretching toward the horizon. In the center, a mysterious glowing structure sits quietly in the field. Hundreds of luminous pink butterflies begin appearing and gently flying upward around it. The butterflies gradually form a mesmerizing spiraling helix/vortex, creating elegant swirling patterns in the air as they rise higher. Their soft neon-pink glow illuminates the surrounding grass and creates magical reflections. The camera slowly pushes forward and subtly tilts upward, following the butterfly spiral as it expands into the night sky. A faint orange-purple sunset remains visible along the distant horizon, contrasting beautifully with the deep blue-black sky. Dreamlike, emotional, ethereal atmosphere, photorealistic CGI, volumetric lighting, cinematic depth of field, realistic butterfly motion, soft glowing particles, smooth fluid movement, highly detailed, magical realism, 4K, vertical 9:16, no text, no watermark.`,
  },
  {
    id: "alla-monster",
    title: "床下修理工",
    kicker: "Prompt Drop Weekend",
    excerpt: "孩子指着床底。爬出来的不是吃人的东西，是带着工具箱和写字板来检修的巨怪。",
    medium: "video",
    tags: ["日常", "治愈"],
    style: "喜剧恐怖反转",
    creatorId: "alla",
    sourceUrl: "https://x.com/AllaAisling/status/2101791510836502612",
    covers: ["/covers/alla-monster.jpg"],
    model: "视频模型 · 16:9 · 15s",
    aspect: "16/9",
    date: "2026-09-20",
    notes: "作者给 Prompt Drop Weekend 的投稿。重点是专业工人的认真，不是吓人。",
    prompt: `A terrified child points under the bed. The parents look worried. A gigantic furry monster slowly crawls out carrying a toolbox and clipboard. He checks measurements, tightens screws, vacuums dust, replaces a loose bed leg, and carefully inspects the room. The child watches in confusion. The monster discovers a tiny squeak in the floorboards and spends the rest of the night repairing it. Final shot: he proudly stamps the room "SAFE" and crawls back under the bed. The child leaves him a thank-you cookie. Cinematic comedy, energetic pacing, professional-worker seriousness, expressive reactions, dynamic camera movement, no text, no logos.`,
  },
];
