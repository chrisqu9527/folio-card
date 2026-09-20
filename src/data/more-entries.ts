import type { PromptEntry } from "./catalog";

export const moreEntries: PromptEntry[] = [
  {
    id: "vox-soft-bio",
    title: "柔性生物形态",
    kicker: "Soft Biomorphism",
    excerpt: "喷枪渐变、扩散边缘、半透明色场。让动物像从色场里自己浮出来。",
    medium: "image",
    tags: ["海报", "极简", "风格系统"],
    style: "日式节庆 × 瑞士版式",
    creatorId: "voxcat",
    sourceUrl: "https://x.com/VoxcatAI/status/2101037291011711147",
    covers: ["/covers/vox-soft.jpg", "/covers/vox-soft-b.jpg"],
    model: "图像模型 · 竖版",
    aspect: "4/5",
    date: "2026-09-18",
    prompt: `【主体】，重新转译为柔性生物形态抽象海报。主体仅保留最关键识别轮廓，以圆形、椭圆和柔软有机曲面概括，使用喷枪式渐变、扩散边缘和半透明色场塑形，不使用清晰描边。暖白高调背景，大量留白，主体使用低饱和单一主色，搭配一种克制的金属感辅助色。整体采用日本现代节庆海报 × 瑞士国际主义版式，加入少量竖排年份、极小号英文字和一个与主题相关的几何象征符号。画面安静、轻盈、雾化、极简。`,
    notes: "作者原帖把提示词放在评论。同一套可替换不同动物，保持雾化色块逻辑即可。",
  },
  {
    id: "vox-lolita",
    title: "新中式 Lolita",
    kicker: "COS 写真",
    excerpt: "东方庭院留白 × 日系少女写真 × Gothic Lolita 结构。绿白配色降甜腻。",
    medium: "image",
    tags: ["人像", "东方"],
    style: "时装画册 COS",
    creatorId: "voxcat",
    sourceUrl: "https://x.com/VoxcatAI/status/2081721718348124285",
    covers: ["/covers/vox-lolita.jpg", "/covers/vox-lolita-b.jpg"],
    model: "hyimage3 · 9:16",
    aspect: "4/5",
    featured: true,
    date: "2026-07-27",
    prompt: `9:16竖版真人 COS 写真，成年女性角色，日系清透少女写真风格，绿白配色洛丽塔服饰。

角色坐在室内窗边或露台区域，采用高机位俯拍视角，镜头略微倾斜，近距离半身到大腿构图。人物身体自然放松坐姿，双腿交叠伸向画面前方，形成明显前景透视延伸；一只手轻抬靠近脸侧，另一只手自然搭在胸前或裙摆位置，姿态慵懒、优雅、带轻微俏皮感。

角色拥有黑色齐刘海长发，柔顺直发自然垂落，侧边佩戴白色花朵发饰与精致金属挂饰。妆容为日系偶像风，白皙通透皮肤，淡粉腮红，红色瞳妆，清澈大眼，柔和微笑表情，气质甜美又带一点清冷感。

服装为绿色 × 白色 Lolita 改良礼服：翠绿色荷叶边披肩袖，白色蕾丝内搭，黑色胸前装饰区域，金色复古徽章与精致饰品点缀，层叠白色裙摆，大面积蕾丝、褶皱、花边结构，融合 Gothic Lolita 与东方少女审美。服装材质细腻，突出蕾丝纹理、丝绸光泽、刺绣细节。

场景为现代中式建筑露台或庭院空间，黑色桌面、白色杯具、浅色石柱、远处绿色植被背景，环境干净简约。自然阴天柔光，高曝光清透效果，大光圈浅景深，背景柔和虚化。

整体视觉：日系真人 COS 摄影 × 清透少女写真 × 高级 Lolita 时装大片 × 新中式生活感。
色彩：高亮度低饱和绿色、纯白、黑色点缀，冷暖平衡，通透空气感，柔和胶片质感。
镜头语言：手机广角自拍感结合时尚写真摄影，轻微广角畸变，近距离亲密视角，强调人物脸部、服装细节与腿部透视关系，画面自然真实。

高清真人摄影质感，细腻皮肤，准确手部结构，稳定人物比例，高细节。`,
    notes: "原帖 2026 年 7 月。作者后用 hyimage3 复跑竖版 COS，服装细节和手部更稳。",
  },
  {
    id: "vox-thick",
    title: "粗粝厚刷主视觉",
    kicker: "收藏级海报",
    excerpt: "顶部大标题、中上图腾、坐姿主角、前景座物。一层一层把角色世界观压进画面。",
    medium: "image",
    tags: ["海报", "风格系统"],
    style: "粗粝厚刷",
    creatorId: "voxcat",
    sourceUrl: "https://x.com/VoxcatAI/status/2048829325148041348",
    covers: ["/covers/vox-thick.jpg"],
    aspect: "4/5",
    date: "2026-04-27",
    prompt: `【角色/主题】，粗粝厚刷海报风，竖版 9:16，顶部巨大粗粝厚刷手写标题，中上方巨大角色图腾，中央偏下坐姿主角，前景角色专属座物，背景与周围元素围绕【角色/主题】展开，空间层级清晰：前景座物—中景人物—后景世界观—上层图腾，整体强调粗粝厚刷笔触、干刷飞边、厚重颜料感、强烈明暗块面与压迫感，收藏级主视觉，自然加入签名“voxcat”，画面干净通透、低噪声、暗部纯净。`,
  },
  {
    id: "vox-animal",
    title: "动物警示 meme",
    kicker: "Reaction Poster",
    excerpt: "真实动物摄影 × 情境拟人 × 警示后果。先让人笑，再让人意识到别干。",
    medium: "image",
    tags: ["日常", "海报"],
    style: "拟人反应海报",
    creatorId: "voxcat",
    sourceUrl: "https://x.com/VoxcatAI/status/2100987737210044692",
    covers: ["/covers/vox-animal.jpg", "/covers/vox-animal-b.jpg"],
    aspect: "4/5",
    date: "2026-09-18",
    prompt: `动物：【具体动物】
事件：【具体事件】

将该动物置入这个明确事件中，采用 真实动物摄影 × 情境拟人化 × reaction meme × 轻度警示视觉。保留真实动物的身体结构、毛发、爪子、面部与物种特征，不转成人形。

根据事件自动设计最合适的场景、动作、表情、眼神、角色关系与道具。若事件包含明确职业、社会身份或角色身份，可为动物穿戴与身份匹配的服装、帽子、徽章、装备和配饰，但身体仍保持真实动物形态。

画面优先表现一个单一、真实、荒诞、容易读懂的瞬间。若事件存在危险、违规或明显后果，优先通过画面本身表现警示，例如电弧、火花、热气、破损、滑倒、泄漏、惊吓反应、狼狈后果等，不要堆成安全教育信息图。

版式保持简单：单张完整画面，不分栏，不做故事板，不做多格漫画。最多加入一个醒目的短标题，以及一句简短吐槽、对白或警示语。整体先好笑，再让人意识到后果。`,
  },
  {
    id: "vox-gongbi",
    title: "工笔炭笔矢量",
    kicker: "实验水墨",
    excerpt: "工笔构图、粗粝炭笔、断裂几何阴影。传统题材变成碳粉打印的矢量图。",
    medium: "image",
    tags: ["东方", "海报", "风格系统"],
    style: "工笔 × 炭笔 × 矢量",
    creatorId: "voxcat",
    sourceUrl: "https://x.com/VoxcatAI/status/2006240409215983753",
    covers: ["/covers/vox-gongbi.jpg", "/covers/vox-gongbi-b.jpg"],
    model: "GPT / hyimage3",
    aspect: "4/5",
    date: "2025-12-31",
    prompt: `融合了工笔、矢量和炭笔的实验性混合艺术风格。主体：一幅古典中国工笔构图的[例如：白鹭立于荷花间 / 武松打虎]。精细的轮廓线不是用墨水，而是用粗糙的、有颗粒感的炭笔线条在纹理纸上绘制的，显示出碳粉和涂抹痕迹。阴影和色彩不是柔和的晕染，而是断裂成锐利的、平涂的几何矢量形状（黑、白和不同深浅的灰），没有渐变。这幅图像看起来像是一张用原始碳粉打印出来的精确矢量插画。高对比度单色调。`,
    notes: "原帖 2025 年末。2026 年 9 月作者用 GPT 与 hyimage3 复测，武松打虎那组力量感更强。",
  },
  {
    id: "vox-noir",
    title: "新黑色浪漫封面",
    kicker: "Graphic Novel",
    excerpt: "高位俯视双人构图。电青 × 午夜蓝 × 朱红。人物关系本身成为叙事。",
    medium: "image",
    tags: ["海报", "人像", "排版"],
    style: "Neo-Noir 编辑插画",
    creatorId: "voxcat",
    sourceUrl: "https://x.com/VoxcatAI/status/2100938246570311951",
    covers: ["/covers/vox-noir.jpg"],
    aspect: "4/5",
    date: "2026-09-18",
    prompt: `【角色A】×【角色B】，两名角色均明确成年，忠于双方核心识别与气质。

Contemporary Editorial Illustration × Graphic Novel Cover × Neo-Noir Romance × Psychedelic Color Blocking × Intimate Tableau。

2:3 竖版，高位俯视双人构图。根据两名角色的身份、性格与关系，自主决定最有张力的姿势、身体距离、接触方式、视线、微表情与重心；允许亲密交叠、彼此靠近、局部纠缠或保留微妙距离，不固定具体姿势。

成年关系中的沉溺、欲望、依恋、占有、疲惫、危险亲密、疏离与互相吸引。让两个人的关系成为画面核心，而不是普通情侣合照。

周围环境、叙事物件与空间细节根据角色身份、世界观、共同经历与当前关系自动生成，不限定具体内容，只服务于关系叙事与构图。

Electric Cyan × Midnight Blue × Vermilion Red 主色域，结合角色代表色自动生成少量高饱和撞色；non-local color / expressive color，人物肤色、头发与服装允许被环境色染色。

Variable-weight ink line × flat color blocking × scratchy dry-brush texture × selective hatching，明显手绘笔触、粗粝印刷感与纸面质感。

根据角色关系自动生成主标题与少量封面文字。使用巨大、狭长、粗粝的 condensed display typography，允许文字直接横跨人物身体，使字体成为构图本身的一部分。

整体像一本围绕两名成年角色复杂关系展开的独立 Graphic Novel / 成人向编辑插画封面：拥挤、亲密、迷乱、危险、华丽、暧昧，带有漫长夜晚结束后的情绪余温。`,
  },
  {
    id: "vox-mushroom",
    title: "蘑菇邮局",
    kicker: "微缩世界观",
    excerpt: "把幻想做成小型生态系统：半透明伞盖透光，湿石路反射，苔藓给出尺度。",
    medium: "image",
    tags: ["奇幻", "风格系统"],
    style: "童书微缩模型",
    creatorId: "voxcat",
    sourceUrl: "https://x.com/VoxcatAI/status/2074686197159563369",
    covers: ["/covers/vox-mushroom.jpg", "/covers/vox-mushroom-b.jpg"],
    model: "image2",
    aspect: "4/5",
    date: "2026-07-08",
    prompt: `儿童绘本风格 × 微缩模型摄影 × 奇幻植物建筑设计。一座建在巨大蓝紫色发光蘑菇里的迷你邮局，蘑菇伞盖像半透明彩色玻璃，内部透出温暖金色灯光。小木门半开，门口堆着 tiny envelopes、小包裹和湿漉漉的邮袋，石子小路被雨水打湿，反射蘑菇蓝光。周围是低矮苔藓、露珠、细小野花和柔软雾气，背景森林虚化。低机位近景，邮局位于画面中心，浅景深。画面使用柔和手绘边缘、微缩模型般的真实材质、湿润苔藓纹理、半透明蘑菇伞盖、暖金与蓝紫互补色光，整体童话、安静、温暖、微微神秘。`,
    notes: "作者强调避免塑料童话感：写进微缩模型摄影、真实湿润材质、纸张颗粒、浅景深空气透视。",
  },
  {
    id: "vox-jellyfish",
    title: "水母灯塔",
    kicker: "复古科幻海报",
    excerpt: "巨型发光水母当作灯塔。月球环形山、低饱和蓝绿、旧印刷颗粒。",
    medium: "image",
    tags: ["科幻", "海报"],
    style: "旧太空探险海报",
    creatorId: "voxcat",
    sourceUrl: "https://x.com/VoxcatAI/status/2074688098626384148",
    covers: ["/covers/vox-jellyfish.jpg"],
    model: "image2 · 9:16",
    aspect: "4/5",
    date: "2026-07-08",
    prompt: `9:16竖幅，image2，复古科幻插画 × 深海生物发光美学 × 旧太空探险海报风格。一座孤独的灯塔立在月球灰白色环形山边缘，灯塔顶部不是玻璃灯室，而是一只巨大的半透明发光水母，水母伞盖散发蓝绿色冷光，细长触须像光纤一样垂落到岩石表面。周围漂浮少量星尘、细碎月壤和微弱雾状光晕，远处是黑色宇宙与低垂地球。低机位仰拍，灯塔位于画面中央偏下，水母光源占据上半部视觉中心。画面使用颗粒感纸张纹理、低饱和蓝绿与月灰色调、柔和边缘光、复古印刷质感，整体孤独、神秘、梦幻、带一点旧时代科幻感。`,
  },
  {
    id: "vox-calimero",
    title: "Calimero 再设计",
    kicker: "角色可爱化",
    excerpt: "意大利经典动画小鸡造型语言，做成复古商业海报，而不是普通 Q 版。",
    medium: "image",
    tags: ["风格系统", "海报", "日常"],
    style: "复古动画广告",
    creatorId: "voxcat",
    sourceUrl: "https://x.com/VoxcatAI/status/2066779268995313974",
    covers: ["/covers/vox-calimero.jpg", "/covers/vox-calimero-b.jpg"],
    model: "image2",
    aspect: "4/5",
    date: "2026-06-16",
    prompt: `上世纪意大利经典动画《Calimero》式可爱小鸡角色画风，圆润复古卡通造型，温和喜剧氛围，欧洲小镇生活气息，复古平面商业海报 / 广告主视觉插画风格。
主体为【在此填写角色】，以可爱化、圆润化的卡通再设计方式呈现，颜色根据角色设定自动匹配（可为黑白或彩色变体），整体风格统一为柔和复古动画质感。
角色眼神根据性格与设定决定（可爱、天真、呆萌、温柔或轻微戏剧化表情），强调情绪表达但保持克制与童趣。
画面为纯净背景构图（柔和渐变或单色背景），无空间场景结构，整体为二维平面设计语言。
画面中心突出角色，并搭配图形化发光标题牌作为视觉焦点（非真实空间结构）。可叠加少量平面 UI 元素：商品小图标、圆角价格标签、极简装饰符号（均为贴图式平面元素）。`,
  },
  {
    id: "xxd-product",
    title: "茶叶窗外主图",
    kicker: "电商 KV",
    excerpt: "从商品自身向外生长。光要作用在产品上，而不是平均照亮整个画面。",
    medium: "image",
    tags: ["电商", "极简", "海报"],
    style: "品牌级产品摄影",
    creatorId: "xxd",
    sourceUrl: "https://x.com/xiaoxiaodong01/status/2100599522460365258",
    covers: ["/covers/xxd-product.jpg", "/covers/xxd-product-b.jpg"],
    model: "GPT Image 2.5",
    aspect: "4/5",
    date: "2026-09-17",
    prompt: `高级商业产品主视觉摄影。

首先判断输入方式：

若用户提供产品实拍图、包装图或商品参考图，以原产品为最高优先级视觉依据。准确保留产品的造型、比例、结构、包装、品牌标识、文字位置、颜色、材质、纹理及关键识别特征，不擅自改款、重新设计或替换商品。可以根据新场景自然重建光线、阴影、反射、透视与环境色，使原产品真正融入画面，而不是简单贴图。若原图背景杂乱，可自然提取主体并重新建立空间。

若用户只提供产品名称、品类或创意命题，则根据产品属性、功能、材质、消费情境与品牌气质建立合理的商品形态及视觉世界，不机械套用既定模板。

画面从商品自身向外生长。主体清晰、真实、有重量，表面纹理、边缘和材质具有可信触感；商品自然落在与其气质相呼应的承载基面、台面或结构关系中，形成明确重心与接触阴影，避免悬浮感和模板化展台。

前景与周围只出现真正能够解释商品的器物、原料、材质或细节，疏密自然；背景保持克制，可通过柔和渐变、低对比轮廓、自然投影、模糊形态、纹理或若隐若现的主题意象建立空间，让环境像商品气质留下的余韵，而不是直接堆砌主题元素。

光线具有明确方向，但保持柔和自然。重点塑造商品体积、材质、边缘和重量，明暗过渡细腻，亮部有空气，暗部保留层次，底部拥有真实的接触阴影；让光真正作用于商品，而不是平均照亮整个画面。

色彩从商品本身延展，背景、基座、道具和环境色自然呼应，允许细微冷暖、明暗与材质变化，不使用机械配色公式。

若需要标题，大字必须成为商品之外最明确的视觉核心之一：尺度大胆、字形完整、轮廓清楚、阅读清晰，在缩小画面后仍能迅速识别；不让纹理、插画或复杂背景穿过主要字形。辅助文字、英文、编号和说明自然退后，形成精致的编辑层级。

整体高级、安静、真实、有空气感，丰富但不过满。避免商品变形、包装文字乱改、品牌元素丢失、漂浮主体、廉价展台、机械对称、无意义装饰、平均打光、背景抢戏及模板化电商感。

最终呈现成熟品牌级电商主图、产品海报或品牌KV。`,
  },
  {
    id: "xxd-giant",
    title: "巨大主体美术馆",
    kicker: "纪念碑装置",
    excerpt: "超大日常物件错位叠成建筑。真人比例参观者站在抛光地面上仰望它。",
    medium: "image",
    tags: ["海报", "奇幻", "信息设计"],
    style: "展厅尺度装置",
    creatorId: "xxd",
    sourceUrl: "https://x.com/xiaoxiaodong01/status/2099141506821247159",
    covers: ["/covers/xxd-giant.jpg"],
    model: "GPT Image 2",
    aspect: "3/4",
    featured: true,
    date: "2026-09-13",
    prompt: `在一座高挑、近乎全白的美术馆中庭里，拍一张展览海报：圆形展台上立着纪念碑式装置，几块超大日常物件错位叠成建筑，白色螺旋坡道缠绕其间，把静物变成可走的路径。一名真人比例的参观者站在抛光地面上仰望它，用身体证明这是展厅尺度，不是棚拍摆件。装置顶端坐着光滑的巨型角色，帽、巾、包都是体积化的服装块；更小的同款角色点缀在坡道和层隙里，像已经有人在攀登。右侧立一根对应的导视牌，把同一套分类、图标和箭头做成扁平路牌，与立体攀登互为图例。

主体是摄影或高度写实的三维可视化，不是插画。装置占据真实体积，接受侧上方窗光，投下地面阴影，并在抛光石材上留下柔化的彩色倒影。角色是连续的玩具壳体，带窗光高光。堆叠体是喷色几何块，有实体厚度和层缘；螺旋是细硬白管，前后穿插切断矩形轮廓。平面字体作为第二层贴在画面上，不进入透视，不在建筑上投阴影。唯一手绘是一处轻松的刷写标语，可带一个极小的角色涂鸦。

构图把纪念碑放在中偏右，左三分之一和四角留给海报信息。主标题与角色头部大致同高，隔着大片白墙对话，绝不压在角色或装置上。装置与圆形台座完整收入画面，墙体和窗框被裁切，让空间显得比海报更大。每层堆叠做成色块图例：一个词加一个象形符号，轻微旋转错位。同一套高饱和图形色从主标题、刷写、导视牌、台座环形成回路，把平面字和立体物锁成一套系统。

主标题用大号紧凑、略斜的工业粗体，饱和色块状堆叠，体量足以与角色抗衡。其下是小一号、规矩的说明句。其余是边角的机构名、编号、日期和一句收束口号，以及物体上的标签字。字密度在边缘，中心留给装置。

几乎全部高饱和色都堆在装置上，再放进大面积冷白高调空间。建筑近乎无彩。角色是最浅最暖的体块；中间穿插较深的冷色层，打断暖色堆叠。不要给建筑上色，不要把全场铺满彩度，不要画成角色插画海报，不要去掉尺度人物和螺旋路径，不要让标题骑在装置上。

主题: 中秋节海报
主角：玉兔和月饼`,
    notes: "作者提示：巨大主体是核心。换成任何节日或品牌，只改主题和主角。",
  },
  {
    id: "xxd-collage",
    title: "留白拼贴插页",
    kicker: "VOL.207",
    excerpt: "上半张照片，下半张小画幅拼贴。四周大量留白，像杂志插页。",
    medium: "image",
    tags: ["拼贴", "转绘", "极简"],
    style: "编辑拼贴",
    creatorId: "xxd",
    sourceUrl: "https://x.com/xiaoxiaodong01/status/2097188464018297271",
    covers: ["/covers/xxd-collage.jpg", "/covers/xxd-collage-b.jpg"],
    model: "GPT Image 2",
    aspect: "3/4",
    date: "2026-09-08",
    prompt: `请将我上传的每一张照片分别制作成一张独立的高级设计海报，不多图拼接，每张照片单独输出。整体采用3:4竖版构图，上下两个区域高度严格1:1，各占画面50%。

上半部分保留原始照片，保持主体身份、结构、姿态、真实质感、自然光影和原有色彩氛围，仅进行轻微高级调色，使其具有艺术杂志、独立出版物与展览图像质感。为适配画幅，可自然扩展环境背景，但不得拉伸、扭曲或改变主体。

下半部分先理解原照片最值得被记住的核心主题、主体关系、结构走势、情绪气氛与视觉记忆点，再重构为留白型数字混合媒介拼贴插页。不要逐物复制照片，也不要把画面铺满，而是删去无关细节，只保留最能代表原物的结构、走势与视觉线索，通过照片片段、细黑线线稿、手写式标注、纸感元素与少量拼贴形状重新概括。

构图采用小画幅居中 + 四周大量留白的逻辑。真正的视觉主体被控制在下半部分中央的一小块区域，可像杂志插页、手账内页或 collage card 一样，被安放在干净宽阔的背景之中。主体不必完整展开，可适度裁切、压缩或组合。留白不是空背景，而是与主体共同构成呼吸感的重要部分。

画面语言采用数字混合媒介拼贴：可结合少量照片感局部、简洁黑色细线涂鸦、手写笔迹、纸片拼贴痕迹、轻微胶带感或便笺感元素，但整体必须克制、轻盈、安静。

配色以低饱和浅蓝与白色为主的轻空气感色系为基础，并根据上方照片进行微调。整体以浅蓝、雾蓝、粉蓝、白色或米白作为大面积背景，辅以黑色细线建立结构，少量深蓝增强节奏，并允许一点浅黄、淡金作为点睛。

文字少量介入，不限制语种。采用细小、克制、松弛、略带手写感的文字样式，自然分布在主体周围或留白边缘。

整体呈现小画幅主体、大面积艺术留白、浅蓝白主调、照片与线稿结合、纸感拼贴、轻盈松弛的编辑插页感。避免满版拼贴、复杂背景、装饰堆积、商业模板感、廉价手账感和逐物转绘。`,
  },
  {
    id: "xxd-type",
    title: "文字即图像",
    kicker: "VOL.143",
    excerpt: "用文字当点线面。远看先读到形，近看才发现主体全由字构成。",
    medium: "image",
    tags: ["排版", "转绘", "信息设计"],
    style: "Typographic Illustration",
    creatorId: "xxd",
    sourceUrl: "https://x.com/xiaoxiaodong01/status/2096602920347402479",
    covers: ["/covers/xxd-type-b.jpg"],
    model: "GPT Image 2",
    aspect: "3/4",
    date: "2026-09-06",
    prompt: `请将我上传的每一张照片分别制作成一张独立的高级设计海报，不多图拼接，每张照片单独输出。整体采用 3:4 竖版构图，上下两个区域高度严格 1:1，各占画面 50%。

上半部分保留原始照片，保持主体身份、结构、姿态、真实质感、自然光影和原有色彩氛围，仅进行轻微高级调色，使其具有艺术杂志、独立出版物与展览图像质感。为适配画幅，可自然扩展环境背景，但不得拉伸、扭曲或改变主体。

下半部分只提取照片中最具识别性的主体、轮廓、结构、姿态与叙事关系，重构为“文字即图像”的字体插画。不要完整复制照片，也不要保留所有对象，而是删去绝大多数背景与无关细节，将文字作为点、线、面和颗粒，通过重复、缩放、旋转、疏密、路径排列与局部叠压，重新塑造主体的轮廓、体块、走势与关键特征。

文字本身必须承担造型功能，而不是贴在图像上的装饰。可用较大的字形成骨架与主要轮廓，用密集小字形成暗部、纹理和重量，用稀疏文字形成边缘、空气与消散感；局部可沿主体走势弯曲、聚集、断开或逐渐变疏，形成 Typographic Illustration / Calligram / Visual Poetry 的视觉语言。文字内容应从照片的主体、地点、情绪、动作、记忆或隐喻中提炼，语种根据画面语境自由选择。

下半部分必须保留大量有意识的留白。主体只占较小或适中的视觉面积，可偏心、贴边、悬置或局部裁切。配色从上方照片中提取 2–4 种最具生命力的颜色重新调制，以大面积近白为呼吸空间。

整体呈现文字图形化：远看先读出一个简洁有力的图像，近看才发现整个主体由文字构成。避免普通文字排版、文字覆盖照片、完整场景复刻、写实描绘、背景填满、乱码和商业标题模板。`,
  },
  {
    id: "xxd-line",
    title: "线描几何色块",
    kicker: "VOL.144",
    excerpt: "植物线描 + 几何色块 + 正负形。主体压在色块上，局部破框。",
    medium: "image",
    tags: ["转绘", "极简", "海报"],
    style: "botanical line art",
    creatorId: "xxd",
    sourceUrl: "https://x.com/xiaoxiaodong01/status/2096602920347402479",
    covers: ["/covers/xxd-type.jpg", "/covers/xxd-line.jpg"],
    model: "GPT Image 2",
    aspect: "3/4",
    date: "2026-09-06",
    prompt: `请将我上传的每一张照片分别制作成一张独立的高级设计海报，不多图拼接，每张照片单独输出。整体采用 3:4 竖版构图，上下两个区域高度严格 1:1，各占画面 50%。

上半部分保留原始照片，保持主体身份、结构、姿态、真实质感、自然光影和原有色彩氛围，仅进行轻微高级调色。为适配画幅，可自然扩展环境背景，但不得拉伸、扭曲或改变主体。

下半部分只提取照片中最具识别性的主体、轮廓、结构、姿态与叙事关系，重构为植物线描插画 + 几何色块构成 + 正负形 / 反白处理的极简平面画面。不要复制整张照片，不要保留无关背景和细节。

下半部分采用细致而克制的线描型矢量插画语言，可借鉴 botanical line art：用纤细清晰的轮廓线、结构线和少量内部线条概括主体，不依赖写实明暗塑造。无论主体是人物、建筑、动物、植物、器物或景观，都应转化为这种清爽、精炼、图形化的线描表达。

画面以单色或极少色矢量关系为主，并引入一个明确的几何色块视觉锚点，如竖向矩形、横向色带、圆形或其他克制的规则形。主体可压在色块之上，通过正负形转换、反白处理、轮廓显形建立层次：主体进入色块区域时可用反白或留白成立，离开色块时则主要依靠线条继续成立。

构图强调破框、叠压与大量留白。主体不必被完整限制在几何色块内，而应允许局部越出边界。背景大面积留白。配色从上方照片中提取 1–3 种最有辨识度的颜色进行压缩与整理。文字只作极少量编辑性介入。

整体呈现线描、反白、破框、几何色块与大量艺术留白。避免写实插画、复杂背景、细节堆积、厚重阴影、渐变、卡通感、3D感和模板化排版。`,
  },
  {
    id: "xxd-doodle",
    title: "涂鸦萌趣转绘",
    kicker: "VOL.115",
    excerpt: "粉彩手绘涂鸦材料拼贴。小尺度章印，大面积留白。一千多个收藏的那组。",
    medium: "image",
    tags: ["治愈", "拼贴", "转绘"],
    style: "粉彩涂鸦拼贴",
    creatorId: "xxd",
    sourceUrl: "https://x.com/xiaoxiaodong01/status/2095931305540419983",
    covers: ["/covers/xxd-crayon.jpg"],
    model: "GPT Image 2",
    aspect: "3/4",
    featured: true,
    date: "2026-09-04",
    prompt: `请将我上传的每一张照片分别制作成一张独立的高级设计海报，不多图拼接，每张照片单独输出。整体采用3:4竖版构图，上下两个区域高度严格1:1，各占画面50%。

上半部分保留原始照片，保持主体身份、结构、姿态、真实质感、自然光影和原有色彩氛围，仅进行轻微高级调色。为适配画幅，可自然扩展环境背景，但不得拉伸、扭曲或改变主体。

下半部分先理解原照片最值得被记住的核心主题、主体关系、结构走势、情绪与视觉隐喻，再重构为复古纸张肌理的粉彩手绘涂鸦材料拼贴插画。不要逐物复制照片，也不要大面积铺满画面，而是删去无关细节，只保留最能代表原物的结构、走势和视觉记忆点。

主体造型以小尺度章印式主视觉呈现。主体线条采用明显的粉笔 / 蜡笔式手绘涂鸦线条：粗细略有变化，带有干涩颗粒、断续掉粉、轻微抖动和不完全闭合的边缘。可有轻微歪斜、重复、迟疑和笨拙感，但不能变成凌乱草稿。

整体仍保留材料拼贴逻辑。主体及少量辅助元素可由纸片、拼贴形状、粉彩色块和手绘符号共同构成。周围可加入极少量与原图情绪有关的星点、花朵、波纹、几何符号或生活化小涂鸦，不形成第二视觉中心。

构图保持小尺度章印与大面积留白的关系，可偏心、贴边、悬置或局部裁切。留白必须是有意识的构成语言。背景纸面可采用暖棕牛皮纸、再生纸、浅色手工纸，必须与主体在明度或色相上拉开层次。

配色从上方照片中提取 2–4 种最鲜活的颜色，转化为奶油粉、蜜桃橙、浅天蓝、薄荷青、柔黄、淡紫等轻盈粉彩。文字使用纤细、疏朗、带轻微字距不齐与旧式印字误差的轻型打字排版字体，安静散落在留白中。

避免逐物转绘、背景与主体糊成一团、画面填满、写实描摹、细密描边、光滑矢量、过度装饰、儿童模板感、3D感和商业海报感。`,
  },
  {
    id: "xxd-crayon",
    title: "蜡笔浅纸治愈",
    kicker: "VOL.116",
    excerpt: "极浅纸面 + 粗颗粒蜡笔轮廓。背景必须明显亮于线条，主体才能浮出来。",
    medium: "image",
    tags: ["治愈", "转绘", "日常"],
    style: "粉彩蜡笔涂鸦",
    creatorId: "xxd",
    sourceUrl: "https://x.com/xiaoxiaodong01/status/2096262813010600335",
    covers: ["/covers/xxd-doodle.jpg", "/covers/xxd-doodle-b.jpg"],
    model: "GPT Image 2",
    aspect: "3/4",
    date: "2026-09-05",
    prompt: `请将我上传的每一张照片分别制作成一张独立的高级设计海报，不多图拼接，每张照片单独输出。整体采用3:4竖版构图，上下两个区域高度严格1:1，各占画面50%。

上半部分保留原始照片，保持主体身份、结构、姿态、真实质感、自然光影和原有色彩氛围，仅进行轻微高级调色。

下半部分重构为复古纸张肌理的粉彩蜡笔涂鸦插画。主体使用粗颗粒粉笔 / 蜡笔式手绘轮廓：线条略粗、松弛、干涩，带有粉末颗粒、断续掉色、轻微抖动和不完全闭合的边缘。主体内部只加入极少量粉彩色块、简单网格、条纹、圆点或随手涂抹。

周围小元素进一步压缩为一笔或几笔即可识别的涂鸦符号。星星、花朵、植物、器物都应简单、稚拙、开放、不完全闭合。

构图保持小尺度章印与大面积留白。背景必须使用极浅、明亮、干净的纸张底色，例如奶油白、象牙白、浅米白。纸张只保留非常轻微的纤维与颗粒，不能偏棕、偏黄、偏灰或显得陈旧。背景明度必须明显高于主体线条与色块。

配色转化为明亮柔和的粉彩蜡笔色。整体保持浅背景 + 清晰彩线 + 少量柔和色块。文字使用轻薄、疏朗、带轻微字距不齐的打字排版字体。

避免深色牛皮纸、暗棕背景、低对比线条、背景与主体糊成一团、精细描边、写实转绘、复杂小图标、背景填满、光滑矢量、3D感和商业模板感。`,
  },
  {
    id: "xxd-break",
    title: "字体蒙版破窗",
    kicker: "VOL.142",
    excerpt: "字形成为窗口。主体穿出笔画，字和图变成同一个结构。",
    medium: "image",
    tags: ["排版", "转绘", "海报"],
    style: "Typography Masking",
    creatorId: "xxd",
    sourceUrl: "https://x.com/xiaoxiaodong01/status/2096593030228979876",
    covers: ["/covers/xxd-break.jpg"],
    model: "GPT Image 2",
    aspect: "3/4",
    date: "2026-09-06",
    prompt: `请将我上传的每一张照片分别制作成一张独立的高级设计海报，不多图拼接，每张照片单独输出。整体采用 3:4 竖版构图，上下两个区域高度严格 1:1，各占画面 50%。

上半部分保留原始照片，保持主体身份、结构、姿态、真实质感、自然光影和原有色彩氛围，仅进行轻微高级调色。

下半部分重构为以字体图像化 + 字体蒙版 + 字图融合为核心的概念海报。不要把整张照片简单塞进文字，而是删去绝大多数背景，只保留最关键的视觉记忆点。

根据原图主题自由提炼一个简短、有视觉力量的文字或词组，不限制语种。文字本身成为下半部分的主要构图结构：通过 Typography Masking / Extended Letterform 将主体影像嵌入字形，并对笔画进行延伸、裁切、拉长、错位或结构化重组，使字形同时成为窗口、边界、路径、柱体或空间框架。主体可局部穿出字形，与文字发生遮挡、连接或跨界，让“字”和“图”真正成为一个整体。

构图强调正负形与大量有意识的留白。文字与主体集中形成一个清晰视觉核心，其余区域大胆留空。色彩保留上方照片最具记忆度的色彩关系，并适度提亮、提纯、去灰；字形内部的影像可以保留更鲜活的主体色，外部以暖白或极浅背景形成大面积呼吸空间。

整体呈现 Typographic Photo Manipulation / Type–Image Integration。避免普通照片填字、完整场景复刻、文字堆砌、复杂背景、商业标题模板和廉价合成感。`,
  },
  {
    id: "xxd-iso",
    title: "轴测微缩沙盘",
    kicker: "VOL.122",
    excerpt: "正交相机、四分之三俯视。把照片收成一个玩具比例的小世界。",
    medium: "image",
    tags: ["转绘", "奇幻", "信息设计"],
    style: "Isometric 3D Diorama",
    creatorId: "xxd",
    sourceUrl: "https://x.com/xiaoxiaodong01/status/2096404971428438090",
    covers: ["/covers/xxd-iso.jpg"],
    model: "GPT Image 2",
    aspect: "3/4",
    date: "2026-09-06",
    prompt: `请将我上传的每一张照片分别制作成一张独立的高级设计海报，不多图拼接，每张照片单独输出。整体采用 3:4 竖版构图，上下两个区域高度严格 1:1，各占画面 50%。

上半部分保留原始照片，保持主体身份、结构、姿态、真实质感、自然光影和原有色彩氛围，仅进行轻微高级调色。

下半部分的美学逻辑重构为 Stylized Isometric 3D Architectural Diorama / Orthographic Axonometric 3D Render。采用正交相机 + 四分之三俯视轴测视角，大约 30°–40° 俯视、45° 左右水平旋转，同时看到正面、侧面和顶部。不要做成真实摄影透视，也不要做成纯地图或立面图。

将主体重构为一个风格化 3D 微缩场景：以主体为核心，只保留少量必要的环境线索，如地形、道路、水体、平台、植物、建筑或器物。整体是 stylized 3D，不是 low-poly，也不是写实 CG；强调规整几何、适度圆角、简化材质、玩具化比例、干净体块、细腻层次与柔和光照。

构图保持小尺度主体 + 超大量有意识的留白。微缩场景可偏心、贴边或局部裁切。配色从上方照片中提取 2–4 种最有记忆点的颜色重新调制，可自然转化为天空蓝、湖水青、草木绿、奶油黄、杏橙、珊瑚粉等清爽色系。

避免完整复制原图、复杂堆积、写实透视、低质 low-poly、廉价游戏感、塑料感、画面填满和模板化效果。`,
  },
  {
    id: "vigo-046",
    title: "记忆拼贴脸",
    kicker: "VISUAL OS 046",
    excerpt: "远看是一张脸。格子里是一起做过的事。空白是遗忘，粉色是忘不掉的。",
    medium: "image",
    tags: ["海报", "人像", "拼贴"],
    style: "报纸网屏肖像",
    creatorId: "vigo",
    sourceUrl: "https://x.com/VigoCreativeAI/status/2100955502788395385",
    covers: ["/covers/vigo-046.jpg", "/covers/vigo-046-b.jpg"],
    model: "图像模型 · 9:16",
    aspect: "4/5",
    date: "2026-09-18",
    prompt: `Create one finished art-house editorial poster, 9:16, a person remembered through shared experiences.

At a glance: ONE coherent human face, divided into aligned rectangular tiles by narrow off-white gutters — crops of one continuous portrait.

Replace a small minority of face cells with whole-cell photographs of shared everyday memories. Not a moodboard beside the face, not a double exposure.

Leave a few cells completely empty as off-white paper, while enough eye, nose and mouth remains to read the face.

Face tiles: harsh black-and-white coarse newspaper halftone. Memory tiles: soft faded analog color. Exactly ONE small fluorescent pink-and-black memory tile as the emotional anchor.

Strong black grotesk title "[TITLE]" sits inside a blank or merged cell. Small line: "[SUBLINE]"

Portrait: [SUBJECT]
Memories: [3 MEMORY CELLS]

No duplicated eyes, no tiles from other faces, no more than one pink tile.

01 WHAT YOU REMEMBER OF ME · "We kept the small things."
Woman around thirty, quiet near-smile.
Memories: two mismatched cups on a table · rain on a window · pink: two hands touching across the table.

02 THE WAY HOME · "Some journeys stayed with us."
Man in his late twenties, three-quarter face.
Memories: platform light through a train window · an empty seat beside him · pink: two hands holding one blank ticket.

03 BEFORE WE GREW UP · "The room still remembers."
Woman in her sixties, silver curls, smiling.
Memories: flour-dusted board and rolling pin · kitchen window curtain · pink: a small hand resting in an older one.

04 WHEN THE MUSIC STOPPED · "I still know your favorite song."
Young adult, pensive, small hoop earring.
Memories: a record player · two empty chairs facing each other · pink: shared wired earbuds on a table.`,
  },
  {
    id: "vigo-044",
    title: "一条丝带四种工作",
    kicker: "VISUAL OS 044",
    excerpt: "同一条荧光丝带：滑板坡、舞者旋转、咖啡气味、声波。物体不变，意义在变。",
    medium: "image",
    tags: ["海报", "排版", "风格系统"],
    style: "建筑字母广告",
    creatorId: "vigo",
    sourceUrl: "https://x.com/VigoCreativeAI/status/2100593116789063744",
    covers: ["/covers/vigo-044.jpg", "/covers/vigo-044-b.jpg"],
    model: "图像模型 · 9:16",
    aspect: "4/5",
    date: "2026-09-17",
    prompt: `Create a finished premium advertising poster, 9:16.

Monumental extra-bold condensed ITALIC uppercase sans-serif lettering acts as a dark architectural plane — not a caption.

One sharply cut photographic hero with convincing perspective and studio lighting floats above a pale spacious ground with a soft spatial shadow.

A broad fluorescent ribbon with subtle dimensional shading alternates BEHIND and IN FRONT of the hero and the letter plane, creating unmistakable depth.

Pale ground, near-black colored type, one electric accent. Sparse art direction, no scenery, no clutter.

Only visible text, exactly: "[MAIN TEXT]"
Palette: [PALETTE]
Hero: [SUBJECT]
Ribbon: [RIBBON ROLE]

Clean cutout photography, natural material detail, crisp ink type, matte-satin ribbon with shaded turns. Every headline word stays readable. No logos, no badges, no extra props, no mockup framing.

Swap set:
01 skate ramp — ribbon as the coping of a concrete bowl
02 dancer's spin — ribbon as the arc of a turning skirt
03 coffee — ribbon as rising steam
04 sound wave — ribbon as a single oscillating signal`,
  },
  {
    id: "vigo-041-bag",
    title: "从袋子里向外看",
    kicker: "VISUAL OS 041",
    excerpt: "镜头在牛皮纸包装内部。标题印在纸壁上，随褶皱弯曲，被开口一分为二。",
    medium: "image",
    tags: ["海报", "排版", "日常"],
    style: "包装内窥广告",
    creatorId: "vigo",
    sourceUrl: "https://x.com/VigoCreativeAI/status/2100230727103037699",
    covers: ["/covers/vigo-041-bag.jpg", "/covers/vigo-041-bag-b.jpg"],
    model: "图像模型 · 9:16",
    aspect: "4/5",
    date: "2026-09-16",
    prompt: `Create one full-bleed photographic campaign poster, 9:16.

The camera is physically INSIDE a kraft paper package looking outward. Folded walls converge around an irregular bright aperture that frames a real person and a near object.

Monumental distressed ink lettering is printed ON the paper walls, following their folds and perspective. The opening splits the headline into two surface-bound words.

Warm fibrous brown paper and deep colored ink against a bright neutral exterior; natural modern skin, clothing and objects. Small utilitarian stamps sit on the side walls, subordinate.

Two main words: "[MAIN]"
Small labels: "[DETAIL]"
Scene: [SCENE]

Realistic extreme wide-angle optics, motivated hand-to-object contact, natural outside light. Fibres and scuffs only on the paper. No floating typography, no sepia filter, no logos, no extra fingers.

01 DEEP CUT · SIDE A / LISTEN CLOSE / 01 · cobalt ink
Woman in a cobalt jacket lowering a cream record sleeve into a kraft record bag. Camera at the bag bottom looking up, both hands on the sleeve edges, face above.

02 FRESH PICK · MARKET DAY / SUN GROWN / 02 · forest green ink
Market vendor in a green apron dropping a mesh bag of oranges into a kraft grocery sack. Oranges very close to the lens, friendly face further above.

03 MADE SLOW · STUDIO GOODS / HANDLE WITH CARE / 03 · brick ink
Ceramic artist lifting a large turquoise bowl out of a kraft-lined box. Camera inside, below the bowl; two hands support opposite sides, face in the gap above the rim.

04 GO FAR · PACK LIGHT / START EARLY / 04 · burgundy ink
Hiker packing a rolled teal sleeping mat into a tall kraft equipment bag. Round end of the roll approaching the lens, both hands around it, pale sky beyond.`,
  },
  {
    id: "vigo-041-type",
    title: "身体吃掉标题",
    kicker: "VISUAL OS 041",
    excerpt: "超大字在运动员身后当背景平面。身体挡住一半，每个词仍要能读。",
    medium: "image",
    tags: ["海报", "运动", "排版"],
    style: "遮挡字体运动海报",
    creatorId: "vigo",
    sourceUrl: "https://x.com/VigoCreativeAI/status/2100159368335425671",
    covers: ["/covers/vigo-041-type.jpg", "/covers/vigo-041-type-b.jpg"],
    model: "图像模型 · 9:16",
    aspect: "4/5",
    date: "2026-09-16",
    prompt: `Create one full-bleed photographic editorial sports poster, 9:16.

Close low wide-angle photo: one piece of equipment or a limb near the lens, the connected athlete large behind it. Visible ground or water with naturally displaced particles — never a sky-only cutout. Hard daylight, real contact shadows, fine grain.

Enormous warm-cream ultra-condensed uppercase grotesk type sits BEHIND the athlete as the background plane, spanning most of the canvas and occluded by the body and equipment. Every word must stay identifiable; edge bleed is fine, whole letters disappearing is not.

Cobalt-blue environment, pale cream type, white/navy kit, one warm accent (orange).

Exact main words: "[MAIN]"
Side annotation: "[SIDE]"
Footer: "[FOOTER]"
Scene: [SCENE]

No logos, no neon graphics, no detached text column, no large footer panel, no empty lower third.`,
  },
  {
    id: "vigo-040",
    title: "身体切开字体",
    kicker: "VISUAL OS 040",
    excerpt: "从极低处仰拍腾空的人。标题是一堵酸绿色的字墙，身体穿过去。",
    medium: "image",
    tags: ["海报", "运动", "排版"],
    style: "腾空字体墙",
    creatorId: "vigo",
    sourceUrl: "https://x.com/VigoCreativeAI/status/2099818156587921740",
    covers: ["/covers/vigo-040.jpg", "/covers/vigo-040-b.jpg"],
    model: "图像模型 · 9:16",
    aspect: "4/5",
    date: "2026-09-15",
    prompt: `Create one full-bleed photographic poster, 9:16.
Camera from far below. One adult fully airborne against cool blue sky and thin white clouds.
Headline in extra-bold ultra-condensed upright lime-green caps, a dense wall of type behind the body.
The figure overlaps part of the letters. The full wording stays readable.
Skin and clothes stay photographic. No extra colors, no logos, no starbursts.

Swap:
subject / headline / small caption

Volleyball spike / VOLLEY / city series 01
BMX dirt jump / DIRT / city series 02
Contemporary dancer leap / RISE / city series 03
Track hurdler mid-air / CLEAR / city series 04`,
  },
  {
    id: "alla-wartrain",
    title: "磁悬浮战争列车",
    kicker: "Prompt Studio",
    excerpt: "新意不在武士刀，在脚下：火花面板、晃动车厢，两个人都在努力别掉下去。",
    medium: "video",
    tags: ["动作", "科幻"],
    style: "反乌托邦列车决斗",
    creatorId: "alla",
    sourceUrl: "https://x.com/AllaAisling/status/2082960848444596581",
    covers: ["/covers/alla-wartrain.jpg"],
    model: "Seedance 2.0",
    aspect: "16/9",
    date: "2026-07-30",
    prompt: `15-second cinematic action sequence aboard a magnetic levitation war train speeding through a dystopian night desert, electric storms illuminating giant industrial ruins in the distance.
0.0–3.0s: Low tracking shot races along the side of the train as a cyber samurai runs across the magnetic exterior panels, sparks erupting beneath his boots.
3.0–6.0s: A chrome-armored assassin descends from a hovering drone transport onto the train roof, neon katana igniting blue light through the storm.
6.0–9.0s: First sword clash sends electrical arcs across the train roof while lightning flashes overhead in slow motion.
9.0–12.0s: High-speed duel across unstable train cars, both fighters nearly thrown off balance as the train tears through debris and collapsing structures.
12.0–15.0s: Massive aerial pull-back reveals the glowing train cutting across the dark wasteland while the duel continues atop the final car.`,
  },
  {
    id: "alla-desert",
    title: "双月沙漠骑手",
    kicker: "Style Block",
    excerpt: "一个锚点图，八个分镜，每条提示词都锁同一段风格块。世界才不会跑偏。",
    medium: "image",
    tags: ["科幻", "风格系统"],
    style: "Firefly Boards 连环",
    creatorId: "alla",
    sourceUrl: "https://x.com/AllaAisling/status/2083288542219043019",
    covers: ["/covers/alla-desert.jpg", "/covers/alla-desert-b.jpg"],
    model: "Adobe Firefly",
    aspect: "16/9",
    date: "2026-07-31",
    prompt: `STYLE BLOCK (added to every prompt):
dark oxidized bronze and black steel with baroque engraving, glowing amber light channels, twin crescent moons in a deep blue turbulent sky, sunbaked cracked desert, hyper-detailed cinematic concept art, 16:9.

1. THE WAKE: vast empty desert at dusk, a single fresh tire track cutting across cracked sand into the distance, ruined citadel on the horizon, no figures, wide establishing shot, low camera near the ground.
2. THE DEPARTURE: armored rider on an ornate biomechanical motorcycle speeding across the desert, flame trailing from the exhaust, citadel ahead on the horizon, low dynamic angle.
3. THE STORM: rider low over the handlebars, driving into a towering wall of sand blotting out the sky, amber headlight cutting a cone through the dust, dramatic low angle, motion blur.
4. THE FALL: motorcycle stopped in the sand, engine dark, armored rider on one knee beside it, helmet removed, night, small fire, cold blue light, intimate medium shot.
5. THE RELIC: extreme close-up of an armored gauntlet holding a small ornate crystalline core pulsing with warm amber light, dust drifting across frame, everything else in darkness, macro shot.
6. THE BEACON: colossal ancient antenna tower rising from the desert, half-buried and wind-worn, motorcycle parked at its base dwarfed by the structure, rider walking toward it, twin moons converging above the spire.
7. THE SIGNAL: a column of brilliant amber light launching from the tower into a storm-lit sky, moons aligned inside the beam, silhouetted rider watching from the foreground, low heroic angle.
8. THE CLOSING: empty desert at first light, the motorcycle standing alone, amber channels dimmed to nothing, footprints leading out of frame, wide static shot.`,
    notes: "作者原话：同一三个短语写进每条提示词，就是一致性的全部诀窍。",
  },
  {
    id: "alla-pen",
    title: "钢笔淡彩",
    kicker: "Midjourney 8.2",
    excerpt: "钢尖热压纸，单一线宽，不见底稿铅笔。一层水彩只负责体积。",
    medium: "image",
    tags: ["极简", "海报"],
    style: "维多利亚钢笔插画",
    creatorId: "alla",
    sourceUrl: "https://x.com/AllaAisling/status/2082875116153606459",
    covers: ["/covers/alla-pen.jpg", "/covers/alla-pen-b.jpg"],
    model: "Midjourney 8.2",
    aspect: "4/5",
    date: "2026-07-30",
    prompt: `A pen and ink drawing of a [subject], steel nib on hot-pressed paper, confident single-weight line, no preliminary pencil visible, Victorian illustration clarity, [color1] watercolor wash adding dimension.`,
  },
  {
    id: "alla-spacebike",
    title: "空间站环内骑行",
    kicker: "Kling 3.0",
    excerpt: "信使沿着旋转空间站内环骑磁悬浮自行车。结构失效在身后蔓延一圈。",
    medium: "video",
    tags: ["科幻", "运动", "动作"],
    style: "不可能几何跟踪",
    creatorId: "alla",
    sourceUrl: "https://x.com/AllaAisling/status/2082657683241599038",
    covers: ["/covers/alla-spacebike.jpg"],
    model: "Kling 3.0 · Text to Video",
    aspect: "16/9",
    date: "2026-07-30",
    prompt: `A courier riding a magnetic bike along the inside ring of a rotating space station. Structural failures spread around the circumference behind. Camera starts beside glowing wheels. Wide reveal showing the entire rotating ring. Side tracking through residential sections and industrial sectors. Frontal shot while debris rolls toward camera due to artificial gravity. Final hero angle with Earth visible through giant windows. Scale, reflections, impossible geometry.`,
  },
  {
    id: "lansen-xianglong",
    title: "丐帮降龙纯享",
    kicker: "25s 招式展示",
    excerpt: "一位丐帮宗师在山野废墟连续施展降龙十八掌。金龙从一条加到十几条。",
    medium: "video",
    tags: ["武侠", "动作", "东方"],
    style: "真人电影级武学展示",
    creatorId: "lansen",
    sourceUrl: "https://x.com/lansenai/status/2096244731751895242",
    covers: ["/covers/lansen-xianglong.jpg"],
    model: "视频模型 · 16:9 · 25s",
    aspect: "16/9",
    featured: true,
    date: "2026-09-05",
    prompt: `锁定这名丐帮武林高手的外观、年龄、脸型、胡须、发型、破旧布衣、腰间葫芦、竹杖、整体气质与场景氛围。特效为高级、纯净、金色、丝缕流动、半透明、由掌力与真气凝聚而成的东方龙能量质感。整段视频为25秒纯享版武学招式展示，无对白、无字幕、无旁白、无多余人物，核心就是一位丐帮绝顶高手在山野废墟之间连续施展降龙十八掌，动作极致流畅迅猛，掌法连续爆发，气势恐怖，破坏力毁天灭地。

整体风格必须是顶级真人电影感仙侠武侠，写实而不廉价，东方武学神韵浓烈，不要低质游戏光效，不要廉价粒子乱飞，不要塑料CG。人物是身经百战的丐帮宗师，动作潇洒粗粝兼具。掌法节奏不是慢悠悠摆pose，而是高速、凌厉、连续、爆发式推进，每一掌都带有明确的发力逻辑：拧腰、沉肩、送胯、踏步、震地、推掌、掌风成龙、龙气出体、命中空间、环境崩裂。

0到3秒，从首帧直接启动，人物保持低伏前冲的强压迫姿态，下一瞬间脚下猛踏地面，地面瞬间炸裂，碎石掀飞，尘浪爆开，一条金色龙形掌气从他侧后方急速成形并绕身飞旋，龙不是实体生物，而是由压缩空气、金色真气、流动烟尘、丝状能量、掌风冲击波共同凝聚成的东方龙轮廓。镜头快速贴地推进，人物猛然一掌轰出，远处地面被掌风犁开一道巨大的毁灭轨迹。

3到7秒，连续施展两到三招降龙十八掌，动作不要重复：先是原地旋身借力横扫一掌，接着瞬移到半空中俯冲下压一掌，再接一记向前穿透式重掌。每次出掌时，龙形掌力都要贴着人物高速环绕，从一条迅速增加到三条、五条，金龙围绕身体、手臂、背后和上空高速盘旋。

7到12秒，人物腾空而起，连续在空中变换身位，轻功飞掠于残垣与山岩之间，一边高速游走一边隔空连发掌法。龙群从少变多，越来越密。环境开始大规模毁灭，山石崩裂、断壁炸飞、地表被撕开。

12到17秒，落地后几乎不停顿，连续推进、闪现、折返、踏空、回身、腾挪。龙的数量从五六条增加到十几条，全部围绕人物高速盘旋。每一掌都像在引爆空间。

17到21秒，人物站上高处或腾于半空，所有龙形掌力开始以他为中心疯狂聚集，绕身形成龙卷式环绕系统。双掌连发、转身连轰、腾空下压、左右开弓、回身反掌。

21到25秒，最后一轮狂暴连掌后，双掌合势骤然推出，所有高速环绕的金龙汇聚成一股毁天灭地的终极掌势，前方整片大地、山壁、废墟被同时轰穿。最后一个画面：人物站在毁灭后的废墟中央，衣袍猎猎，残余金龙仍在身旁缓慢环绕。

不要出现其他角色，不要对白，不要字幕，不要logo，不要西方龙，不要翅膀龙，不要彩虹色能量，只保留东方武侠审美下高级的金色龙形掌气。`,
  },
  {
    id: "lansen-taiji",
    title: "剑气对太极",
    kicker: "暴雨湖台",
    excerpt: "银白半月剑气切开雨幕。太极不硬挡，把剑气拧弯、带偏、反甩。",
    medium: "video",
    tags: ["武侠", "动作", "东方"],
    style: "写实超自然武学",
    creatorId: "lansen",
    sourceUrl: "https://x.com/lansenai/status/2100954529525334481",
    covers: ["/covers/lansen-taiji.jpg"],
    model: "视频模型 · 16:9 · 30s",
    aspect: "16/9",
    date: "2026-09-18",
    prompt: `严格30秒，16:9，真人电影级中国武侠巨制质感。整体风格必须写实、真实摄影、电影感，高级武侠，不要动漫感，不要塑料CG，不要廉价光污染。
场景固定为：暴雨中的高山湖台 / 瀑布悬崖战场。一片开阔湿石平台延伸到浅水湖面，远处有高山、悬崖、翻涌云雾与巨大瀑布。整个30秒都发生在同一个大场景里。

角色必须严格区分：
A = 剑气宗师。成年亚洲男性，冷峻锋利、轻功极高的剑客，深色或灰白武侠长袍，手持细长中式直剑。武学核心：高速剑术 + 半月形银白剑气。所有远程攻击都必须由真实挥剑动作产生。剑气必须是超薄、半透明、冷银白、边缘锋利如空气切面的半圆/月牙形，不是粗大光波，不是游戏激光。
B = 太极宗师。成年亚洲男性，气质沉稳，宽松太极/道袍，动作圆融、借力打力。武学核心：太极手法 + 水流牵引 + 空气流场 + 圆形卸力。B 不用武器，不硬碰硬。特效必须是透明空气流场、环形水流、圆弧卸力轨迹、太极水纹、流体回旋、水雾缠绕。

0.00–4.00s 第0秒直接开打。A 前冲半步挥剑，一道巨大银白半月剑气从左向右高速切出，切开暴雨。B 沉肩转腰，左手向外画圆、右手向内牵引，身前空气与雨幕形成半透明圆弧流场，剑气轨迹被拧弯，斜着擦过 B 身侧，切开后方瀑布岩壁。
4.00–8.00s A 连续三次挥剑：贴地横斩、反手上撩、转身下劈。B 分别用环形水流抬高贴地剑气、把斜向剑气拧成弧线、用巨大太极圆盘包住下压剑气再甩向侧后方，切断石桥栏杆。
8.00–12.00s A 贴地高速滑行后腾空多角度围杀。B 走太极步，把剑气带走切断石柱、向上引偏劈开屋檐、压低送回地面炸开水幕，甚至直接反甩回去。A 必须在空中扭身躲开自己被反弹的剑气。
12.00–16.00s B 主动向前，湖面水流汇聚，暴雨被带出旋转轨迹，地面浮现巨大太极图纹。A 贴近连出直刺、横斩、回身反斩、腾空下劈。B 在转体换步中把这些攻击全部吞入流场，最后一记下劈被双手一合一分，分流到左右两边，地面同时被劈裂。
16.00–20.00s A 开启满场剑阵，绕场借石柱、断桥、屋檐连续斩出十几道银白月牙。B 展开完整太极圆界，飞入的剑气被减速、偏转、扭曲，部分被反甩。瀑布被切得断流，浅水湖面打出巨型旋涡。
20.00–24.00s A 贴身破局：直刺、抹喉横切、下盘扫斩、回身反刺。B 用粘连黏随贴着手腕肩线化解，最后让 A 自己的剑势劈空，把身后石墙劈得炸裂。
24.00–27.00s A 腾空旋身打下最密集剑气暴雨。B 把整片湖面与瀑布水汽牵成超级巨大的太极流体圆轮，层层带偏、削速、分流。
27.00–30.00s A 正面终极斩击，一道全片最大最纯净的巨大银白半月剑气轰向 B。B 双掌由外向内一合，压缩成透明圆形太极流场核心，把剑气拧偏后斜着抛向远方悬崖。山石断裂、瀑布炸开。最后一秒两人隔着翻腾水雾重新站定，不要摆夸张结束 pose。

禁止五颜六色能量、巨大法阵、廉价仙侠光柱、低级爆闪。要像真实世界中的超自然武学。`,
  },
  {
    id: "lansen-xianxia",
    title: "云海双剑空战",
    kicker: "仙侠对斩",
    excerpt: "赤白风火对青白云涡。空中石桥一边打一边塌，胜负留在下一剑。",
    medium: "video",
    tags: ["仙侠", "动作", "东方"],
    style: "超高燃空战",
    creatorId: "lansen",
    sourceUrl: "https://x.com/lansenai/status/2098774755407241445",
    covers: ["/covers/lansen-xianxia.jpg"],
    model: "视频模型 · 16:9 · 30s",
    aspect: "16/9",
    date: "2026-09-12",
    prompt: `两名角色从第0秒开始就已经处于高速空中对冲、即将兵器碰撞的状态。全片30秒，16:9，超高燃仙侠空战动作大片，超快节奏，持续战斗。整体要求：空中高速近战 + 夸张身法位移 + 高质量风压特效 + 音爆 + 马赫环 + 过曝抽帧 + 黑白闪击帧 + 大规模环境破坏。不是站桩对波，不是廉价光效。

角色A：成年东方男性剑客，深棕灰色长袍，衣摆破碎飘扬，黑发高束，体型精悍，主打迅猛直线突进、压迫式连斩。武器为细长冷兵器长剑。核心能量：赤白色高压风火剑流——高速红白刀风、热流切痕、气流爆鸣、白热擦闪。
角色B：成年东方男性剑客，灰白偏蓝色层叠长袍，衣袂极长，黑发半束，更擅长弧线突进、空中折返、借势反切、飘逸高速游斗。武器同样为细长长剑。核心能量：青白色高压云涡剑流——青白风旋、冷雾切流、真空刃痕、气旋折射。

场景严格继承首帧：云海之上的崩裂遗迹战场。巨大断裂空中石桥，悬浮石块，巨型残垣断壁，四周无尽云海和高空深渊，远处一圈巨大旋转风暴气旋。战斗中环境必须持续被破坏。

电影级超高完成度仙侠动作视觉。镜头以穿越机式环绕 + 高速追踪 + 贴身半环绕 + 远近切换为核心。极少量抽帧感、短促过曝、黑白闪击帧只在最强碰撞瞬间触发。

0–3s 首帧对冲，剑尖正面对撞，透明圆形音爆环，插入1帧黑白闪击。A 翻腕横切，B 抽剑上挑再反手斜斩；A 爆步前冲双手重斩，B 被压得倒飞撞穿云雾。
3–6s B 借悬浮石块折返连出两记反切，两人掠过断桥边缘。贴身三连斩对拍刃卸力，B 近身膝撞被 A 避开后肩撞，桥面当场碎裂坠落。
6–9s 两人腾空冲入云涡外围。A 直线爆冲，B 沿弧线滑飞倒挂反刺。高密度换位四次交击。A 蹬碎浮岩化作赤白残流直撞，B 被撞穿另一块悬空平台。
9–15s 平台贴身剑斗，三次对拼分别用正常色彩 / 1帧黑白 / 白热过曝。B 弧线切到右后方，A 从爆开石粉中抽帧式加速，两人再次冲入高空。
15–21s 空中轨迹交织成 X 形，螺旋状空气波掀碎浮空石台。坠入悬空残桥，狭窄桥上追砍，桥身错位崩裂，两人踩着崩落石块继续移动。
21–27s 冲入风暴气旋中心。最强身法爆冲，三连快碰再加一记最重对拼，黑白闪击 + 过曝 + 球形冲击波撕裂气旋。自由落体中仍在交战，撞进巨型断壁。
27–30s 同时刺出最强一剑。碰撞前连续两次抽帧，碰撞瞬间一帧纯黑白再过曝，爆出全片最大透明球形冲击波。最后两人滑退在崩裂遗迹两端，剑锋仍指向彼此，在即将再次爆冲的运动中结束。胜负未分。

不要廉价特效，不要游戏UI，不要发光法阵，不要悬空能量球，不要塑料光柱，不要随意分身，不要第三人，不要动作停顿，不要站桩对波。`,
    notes: "原帖附完整逐秒分镜。需要每秒机位和招式对照时，到源帖复制全文。",
  },
  {
    id: "mag-kaiju",
    title: "门缝里的巨兽",
    kicker: "白模灾难",
    excerpt: "摄影机躲在避难所钢门内侧。两头巨兽在楼宇间搏斗，门慢慢关上。",
    medium: "video",
    tags: ["动作", "科幻", "胶片"],
    style: "战争纪实手持",
    creatorId: "magn",
    sourceUrl: "https://x.com/Magncsans/status/2098633744165011859",
    covers: ["/covers/mag-kaiju.jpg"],
    model: "Seedance · 6s · 16:9",
    aspect: "16/9",
    date: "2026-09-12",
    prompt: `生成一段6秒、16:9横屏、超写实电影级怪兽灾难片段。一镜到底，实时速度。采用身处灾难现场的战争纪实手持摄影，摄影师躲在避难所内部，从即将关闭的厚重钢门之间，拍摄城市中正在搏斗的两头巨兽。

上传的白模参考控制摄影角度、空间纵深、两座高楼的位置、两头怪兽的运动路径与动作幅度，以及双扇门缓慢关闭的过程。只继承白模的空间和运动，不保留立方体、圆球或白模材质。一方块替换为巨型蝙蝠类飞行怪兽，另一方块替换为巨型蜥蜴型怪物。画面下方的两个圆球替换为两名佩戴美军制式战术头盔的士兵，背对摄影机，只露出头盔后部及少量肩背，不露脸。

摄影机位于地下避难所入口的内侧，低机位仰拍。两名士兵始终站在钢门内侧，分别占据画面左下角和右下角。中景是两扇超厚重的地下避难所钢制防爆门，起初向门外敞开，随后绕左右两侧竖直门轴缓慢朝关闭位置转回。远景是阴天中的城市街区，巨型蜥蜴立于两楼之间，蝙蝠类巨兽从上方扑下。

00:00—00:01.40 蝙蝠类巨兽从画面上方张开巨型翅膀冲向巨型蜥蜴。约0.7秒时，两扇防爆门开始缓慢关闭。
00:01.40—00:03.20 两头庞大身体发生真实接触。巨型蜥蜴受力后肩颈向后偏移，随后躯干倾斜下沉，再以肩背向前反推。动作跨度以楼层为尺度。震动传到避难所后，士兵略微缩低头盔，摄影机短促下沉。
00:03.20—00:05.00 蝙蝠类巨兽完成一次沉重的下压振翼。钢门持续合拢，最后只剩中央狭窄门缝。门扇在中央沉重贴合，画面停留在暗处的士兵背影与关闭的钢门上。

整体阴郁、低饱和，偏冷灰与灰蓝。避难所内部显著暗于外界。无对白、无配乐、无字幕。`,
    notes: "作者把白模和提示词全部公开。特殊画风要从资产设计开始，生成时提示词只聚焦镜头和动作。",
  },
  {
    id: "mag-spear",
    title: "长矛时间凝滞",
    kicker: "白模动作",
    excerpt: "贴身长矛连击。抛矛那一瞬黑白撕裂，时间几乎停住，只有摄影机还在靠近。",
    medium: "video",
    tags: ["动作", "奇幻"],
    style: "好莱坞奇幻动作",
    creatorId: "magn",
    sourceUrl: "https://x.com/Magncsans/status/2098630954122437038",
    covers: ["/covers/mag-spear.jpg"],
    model: "Seedance · 8s",
    aspect: "16/9",
    date: "2026-09-12",
    prompt: `好莱坞电影级真人奇幻动作场面。真实演员、实体长兵器与高规格电影特效结合。一镜到底。除抛矛高潮的短暂时间凝滞外，动作迅速、连贯。

白模参考前景两人的完整动作、长矛轨迹、受击顺序和摄影机的大致路线。保留低姿进攻、连续挥矛、向上抛转、接矛续击和怪物倒地。受击者替换为真人特效化妆质感的人形丧尸怪物：成年男性，瘦削结实，灰白皮肤、凹陷脸颊、深暗眼窝、浑浊眼睛。

摄影机像由一名贴近打斗的摄影师肩扛拍摄，有清楚但可控的手持晃动。长矛突然掠近前景时本能侧让；重击真正发生后画面才被震开。

00:00—00:01.30 低机位贴近主角身侧。主角在压低、转身的过程中已经把矛送出去。接触位置爆出一小团被压扁的银白冲击光。
00:01.30—00:03.35 抽回长矛，连续横挥、提矛绕身与再次带击。摄影机紧贴交锋外侧绕行。每次有效接触都有不同形状的冲击效果。
00:03.35—00:03.65 抛矛。画面被一次锐利的黑白冲击打断：极短黑底白色轮廓，一道粗粝白色撕裂笔触顺着上抛方向劈开画面；紧接一拍白底黑色剪影。随后立即回到同一镜头中的真人彩色影像。
00:03.65—00:04.35 时间几乎凝住，只有摄影机还在靠近。长矛停留在翻转途中，碎光悬浮。焦点从近处矛杆滑向主角的眼睛。
00:04.35—00:05.85 时间猛然恢复。主角接住长矛，把接矛动作接成下一次攻击。
00:05.85—00:08.00 怪物失去肩背支撑倒地。摄影机追随身体下降。特效光逐渐熄灭，不做游戏胜利定格。

无对白、无背景音乐。黑白冲击集中出现一次，时间凝滞只发生在抛矛高潮。`,
  },
  {
    id: "qaim-thanos",
    title: "灭霸与金像",
    kicker: "Cinematic Fantasy",
    excerpt: "灭霸举起无限手套，巨大黄金神像中央的宝石被点亮。",
    medium: "video",
    tags: ["奇幻", "动作"],
    style: "漫威史诗运镜",
    creatorId: "qaim",
    sourceUrl: "https://x.com/q_a_i_m_01/status/2101314481699827959",
    covers: ["/covers/qaim-thanos.jpg"],
    model: "视频模型 · 9:16",
    aspect: "9/16",
    date: "2026-09-19",
    prompt: `A cinematic, ultra-realistic fantasy scene featuring Thanos, the iconic purple-skinned Titan from Marvel, standing powerfully beside an enormous ancient golden mystical statue. Thanos wears his distinctive dark-gold and black armored battle suit and the Infinity Gauntlet on his left hand, with all six Infinity Stones clearly embedded in it — Space Stone (blue), Mind Stone (yellow), Reality Stone (red), Power Stone (purple), Time Stone (green), and Soul Stone (orange).

Thanos slowly raises his left hand wearing the fully assembled Infinity Gauntlet toward the gigantic statue. The statue's enormous central golden gemstone begins to glow intensely in response to the six Infinity Stones. Magical energy flows between the Gauntlet and the statue, creating glowing particles, subtle energy waves, and reflections across the polished black floor.

The camera starts with a low-angle shot emphasizing Thanos's immense presence, then slowly pushes forward and tilts upward toward the gigantic statue, revealing the dramatic difference in scale. Thanos remains calm, imposing, and completely confident, with subtle facial movement and realistic breathing.

Highly detailed Thanos facial features, recognizable purple skin, massive muscular physique, authentic Infinity Gauntlet with exactly six glowing Infinity Stones, intricate metallic armor, enormous ancient golden statue, cinematic volumetric lighting, mystical purple and gold atmosphere, realistic reflections, dramatic shadows, shallow depth of field, epic Marvel-style cinematic composition, photorealistic CGI, smooth natural animation, slow-motion cinematic movement, 4K detail, vertical 9:16, no text, no subtitles, no watermark.`,
  },
  {
    id: "qaim-drone",
    title: "金色时辰航拍",
    kicker: "Aerial Commercial",
    excerpt: "镜头从岩石高原上空缓缓下降，奢侈别墅和碧蓝水池慢慢进入画面。",
    medium: "video",
    tags: ["日常", "运动"],
    style: "地产航拍广告",
    creatorId: "qaim",
    sourceUrl: "https://x.com/q_a_i_m_01/status/2101013492233130088",
    covers: ["/covers/qaim-drone.jpg"],
    model: "视频模型 · 9:16",
    aspect: "9/16",
    date: "2026-09-18",
    prompt: `A cinematic ultra-realistic aerial drone flyover of a vast rocky plateau surrounded by dramatic limestone cliffs and lush green valleys at golden hour. The camera begins high above the rugged landscape, slowly gliding forward and slightly descending, revealing winding roads carved through the terrain. As the shot progresses, modern luxury villas and landscaped properties gradually come into view, surrounded by greenery and turquoise-blue water pools. Warm sunset sunlight creates long cinematic shadows and a golden glow across the cliffs. The movement is smooth, slow, and stabilized like a premium real-estate aerial commercial. Photorealistic architecture, natural terrain textures, atmospheric depth, realistic shadows, subtle wind movement in vegetation, high dynamic range, cinematic color grading, 4K detail, seamless continuous camera movement, no text, no logos, no distortion.`,
  },
  {
    id: "qaim-tactical",
    title: "方阵中的独行者",
    kicker: "Military Thriller",
    excerpt: "一个人穿过完全静止的特种部队方阵，转身时露出骷髅面罩。",
    medium: "video",
    tags: ["动作", "胶片"],
    style: "反乌托邦军事",
    creatorId: "qaim",
    sourceUrl: "https://x.com/q_a_i_m_01/status/2100940908703498534",
    covers: ["/covers/qaim-tactical.jpg"],
    model: "视频模型 · 28s",
    aspect: "16/9",
    date: "2026-09-18",
    prompt: `Cinematic dark tactical scene, 28 seconds, photorealistic. A lone heavily armored special-forces operator stands with his back to the camera in a dark, smoky industrial environment. He wears a black tactical helmet with headset, heavy ballistic vest, shoulder protection and a hood. In front of him is a massive, perfectly organized formation of dozens of identical SWAT-style operators wearing black tactical armor, helmets, protective goggles and face coverings.

The camera begins with a slow close-up tracking shot from behind the lone operator, then gradually pulls backward and rises slightly, revealing the enormous formation ahead. The lone operator slowly walks forward through the center of the formation. The surrounding soldiers remain completely motionless, creating an intimidating, surreal atmosphere.

As he reaches the center, he slowly turns around to face the camera, revealing a dark skull-style tactical mask beneath his helmet. The camera pushes in toward his face while the formation remains perfectly symmetrical behind him. Subtle smoke and dust drift through the air, with dramatic volumetric lighting, faint backlight, deep shadows and muted cold tones.

Style: ultra-realistic cinematic military thriller, dystopian atmosphere, dramatic lighting, shallow depth of field, realistic tactical equipment, highly detailed armor and fabric, slow controlled camera movement, symmetrical composition, film-grain texture, high contrast, ominous mood, 24fps, anamorphic cinematic look, 4K.
Negative prompt: cartoon, anime, low quality, distorted faces, extra limbs, deformed hands, inconsistent armor, random movement, flickering, excessive camera shake, oversaturated colors, text, logos, watermark.`,
  },
  {
    id: "qaim-western",
    title: "猴子西部对决",
    kicker: "Western Comedy",
    excerpt: "小猴用香蕉当左轮。尘土街对面站着一只更凶的狒狒牛仔。",
    medium: "video",
    tags: ["日常", "奇幻"],
    style: "西部喜剧 CGI",
    creatorId: "qaim",
    sourceUrl: "https://x.com/q_a_i_m_01/status/2100896930217988572",
    covers: ["/covers/qaim-western.jpg"],
    model: "视频模型 · 约 90s",
    aspect: "16/9",
    date: "2026-09-18",
    prompt: `Create a cinematic, photorealistic 3D Western comedy scene set in a dusty 19th-century frontier town. The main character is a small anthropomorphic monkey wearing a brown cowboy hat, beige shirt, brown leather vest, dark trousers, boots, and a small cowboy belt, with a long expressive tail.

Begin with an extreme close-up of the monkey’s detailed leather cowboy holster and belt, warm sunlight reflecting off the worn leather. Slowly reveal the monkey’s face: a rugged, intimidating baboon-like cowboy with grey-white facial hair, orange-brown eyes, a black cowboy hat, dark leather coat and burgundy neckerchief. He stares seriously toward the street.

Cut to a smaller young monkey cowboy stepping out into the dusty main street, holding bananas like oversized revolvers in a playful parody of a classic Western gunslinger. He walks confidently through the town while dust blows around his feet.

Show a wide establishing shot of the deserted Old West street: wooden saloons, weathered storefronts, balconies, horse wagons, dusty roads and distant desert mountains. The tiny monkey walks toward the intimidating larger cowboy standing on the opposite side of the street.

Build tension like a classic Western showdown, using dramatic low-angle shots, slow push-ins, alternating close-ups of their eyes and wide shots showing the enormous distance between them. The atmosphere is dusty, sun-drenched and slightly surreal, but the characters remain highly detailed and believable.

Visual style: cinematic Hollywood-quality CGI, photorealistic fur, realistic leather and fabric textures, natural facial expressions, volumetric sunlight, floating dust particles, shallow depth of field, anamorphic lens look, warm desert color grading, realistic shadows, smooth character animation, subtle wind movement.
Mood: dramatic Western standoff mixed with absurd visual comedy. No dialogue, no subtitles, no text, no watermark.`,
  },
  {
    id: "qaim-hamster",
    title: "仓鼠吃雪糕",
    kicker: "Viral Macro",
    excerpt: "金仓鼠两只小爪子各握一根巧克力雪糕，先挡住脸，再慢慢放下。",
    medium: "video",
    tags: ["日常", "治愈"],
    style: "社交短视频微距",
    creatorId: "qaim",
    sourceUrl: "https://x.com/q_a_i_m_01/status/2100266265034244298",
    covers: ["/covers/qaim-hamster.jpg"],
    model: "视频模型 · 9:16",
    aspect: "9/16",
    date: "2026-09-16",
    prompt: `A cute fluffy golden hamster sitting on a polished wooden kitchen table in a warm, cozy home. The hamster holds two chocolate-coated ice cream bars, one in each tiny paw, and happily eats them. Start with the hamster hiding its face behind the ice cream bars, then slowly lower them to reveal its adorable face. It takes small playful bites, looks directly at the camera, and smiles with a joyful expression. Warm natural sunlight enters through the window, soft cinematic lighting, shallow depth of field, realistic fur detail, highly photorealistic, adorable viral social-media style, smooth natural movements, fixed camera, cozy background, 4K quality.`,
  },
  {
    id: "qaim-cable",
    title: "微型电缆抢修",
    kicker: "Miniature Diorama",
    excerpt: "蓝工装小工人围着一根被撕开的巨型电缆，把铜丝重新接上。",
    medium: "video",
    tags: ["日常", "奇幻"],
    style: "微缩工程现场",
    creatorId: "qaim",
    sourceUrl: "https://x.com/q_a_i_m_01/status/2100103682788561157",
    covers: ["/covers/qaim-cable.jpg"],
    model: "视频模型 · 9:16",
    aspect: "9/16",
    date: "2026-09-16",
    prompt: `A highly detailed miniature construction scene featuring tiny electrical workers in blue safety uniforms and white hard hats repairing a massive torn electrical cable. Several workers use miniature tools, clamps and lifting equipment to expose and reconnect the thick copper wires inside the cable. The copper strands are clearly visible and highly detailed. Cinematic macro photography, realistic miniature diorama, dramatic industrial atmosphere, shallow depth of field, realistic textures, soft diffused lighting, subtle camera movement, workers actively coordinating, ultra-realistic, 4K, vertical 9:16, satisfying engineering repair scene.`,
  },
  {
    id: "qaim-house",
    title: "悬崖小屋翻新",
    kicker: "Time-lapse Reveal",
    excerpt: "建进悬崖的废墟石屋，延时翻修，最后揭开一间当代浴室。",
    medium: "video",
    tags: ["日常"],
    style: "建筑改造广告",
    creatorId: "qaim",
    sourceUrl: "https://x.com/q_a_i_m_01/status/2100836430616633746",
    covers: ["/covers/qaim-house.jpg"],
    model: "视频模型 · 9:16",
    aspect: "9/16",
    date: "2026-09-18",
    prompt: `Create a cinematic 9:16 home-transformation video showing an abandoned, rustic stone house built dramatically into the side of a steep mountain cliff. Begin with a slow cinematic camera movement toward the weathered stone entrance, surrounded by rugged cliffs, overgrown grass, vines, and a narrow stone pathway.

Transition smoothly into a time-lapse renovation sequence: workers repair the old structure, clean the interior, install wooden flooring, restore the walls, windows and doors, and transform the damaged space into a modern home. Show realistic construction details and gradual progress.

Finish with a dramatic reveal of a luxury modern bathroom featuring large dark-gray stone tiles, a minimalist floating wooden vanity with a white basin, frameless glass shower enclosure, wall-mounted toilet, warm LED accent lighting, and a clean contemporary design.

Use realistic architectural photography, cinematic lighting, natural textures, smooth camera movements, seamless transformation transitions, subtle depth of field, photorealistic materials, ultra-detailed 4K quality. Keep the architecture consistent throughout the transformation. No text, logos, watermarks, distorted objects, or unnatural people.`,
  },
];
