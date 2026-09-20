import { moreEntries } from "./more-entries";
import { wave3Entries } from "./wave3-entries";
import { wave4Entries } from "./wave4-entries";

export type Medium = "image" | "video";

export type Creator = {
  id: string;
  handle: string;
  name: string;
  bio: string;
  avatar: string;
  url: string;
};

export type PromptEntry = {
  id: string;
  title: string;
  kicker: string;
  excerpt: string;
  prompt: string;
  notes?: string;
  medium: Medium;
  tags: string[];
  style: string;
  creatorId: string;
  sourceUrl: string;
  covers: string[];
  model?: string;
  aspect: "4/5" | "16/9" | "3/4" | "9/16";
  featured?: boolean;
  date: string;
};

export const creators: Creator[] = [
  {
    id: "voxcat",
    handle: "VoxcatAI",
    name: "VoxCat",
    bio: "生成视觉创作者。角色美学、风格系统与视觉程式化。",
    avatar: "/avatars/voxcat.jpg",
    url: "https://x.com/VoxcatAI",
  },
  {
    id: "alla",
    handle: "AllaAisling",
    name: "Alexandra Aisling",
    bio: "AI Creator，探索图像与未来叙事。Adobe Firefly Ambassador。",
    avatar: "/avatars/alla.jpg",
    url: "https://x.com/AllaAisling",
  },
  {
    id: "xxd",
    handle: "xiaoxiaodong01",
    name: "小小东",
    bio: "提示词专家 / 植物爱好者 / AI 作图基建。批量美学与信息设计。",
    avatar: "/avatars/xxd.jpg",
    url: "https://x.com/xiaoxiaodong01",
  },
  {
    id: "lansen",
    handle: "lansenai",
    name: "澜森",
    bio: "AI Filmmaker。动作电影、暗黑奇幻与东方神话。",
    avatar: "/avatars/lansen.jpg",
    url: "https://x.com/lansenai",
  },
  {
    id: "magn",
    handle: "Magncsans",
    name: "Foyege",
    bio: "AIGC 技术博主，VSC Creator。镜头语言、资产设计与片头结构。",
    avatar: "/avatars/magn.jpg",
    url: "https://x.com/Magncsans",
  },
  {
    id: "qaim",
    handle: "q_a_i_m_01",
    name: "AI_with_qamar",
    bio: "探索技术与 AI。趋势、洞察，以及可直接套用的视频提示词。",
    avatar: "/avatars/qaim.jpg",
    url: "https://x.com/q_a_i_m_01",
  },
  {
    id: "vigo",
    handle: "VigoCreativeAI",
    name: "Vigo Zhao",
    bio: "产品设计师。视觉文化、可复用工作流与 VISUAL OS 风格系统。",
    avatar: "/avatars/vigo.jpg",
    url: "https://x.com/VigoCreativeAI",
  },
  {
    id: "geekcat",
    handle: "GeekCatX",
    name: "知识猫",
    bio: "大厂十年。做图、做视频，把一个人的创作做成可复用工作流。",
    avatar: "/avatars/geekcat.jpg",
    url: "https://x.com/GeekCatX",
  },
  {
    id: "khan",
    handle: "AIwithkhan",
    name: "Smiling Khan",
    bio: "Seedance 影像创作者。韩式日常、时装板与超写实短片。",
    avatar: "/avatars/khan.jpg",
    url: "https://x.com/AIwithkhan",
  },
  {
    id: "arvin",
    handle: "Arvin007o",
    name: "Arvin",
    bio: "用 AI 创造不存在的世界。东方幻想、仙侠电影与角色资产。",
    avatar: "/avatars/arvin.jpg",
    url: "https://x.com/Arvin007o",
  },
  {
    id: "aizc",
    handle: "blade2019runner",
    name: "AIZC",
    bio: "Wild Spirits。中国神话、精怪图鉴与每日艺术方向。",
    avatar: "/avatars/aizc.jpg",
    url: "https://x.com/blade2019runner",
  },
  {
    id: "tong",
    handle: "tngqingtng15022",
    name: "设计师童叔",
    bio: "TSTUDIO。28 年设计美学，探索生成式影像的叙事边界。",
    avatar: "/avatars/tong.jpg",
    url: "https://x.com/tngqingtng15022",
  },
  {
    id: "larus",
    handle: "MrLarus",
    name: "Larus Canus",
    bio: "Prompt Engineer。字体物理、东方海报系统与 GPT-Image 视觉案例。",
    avatar: "/avatars/larus.jpg",
    url: "https://x.com/MrLarus",
  },
  {
    id: "qyeah",
    handle: "QyeahDc",
    name: "Qyeah Dc",
    bio: "Grok Imagine 视觉。赛博国风、民国黑色电影与蒸汽朋克短片。",
    avatar: "/avatars/qyeah.jpg",
    url: "https://x.com/QyeahDc",
  },
  {
    id: "hang",
    handle: "Astronaut_1216",
    name: "叫我阿杭",
    bio: "提示词专家。把爆款结构拆成可复用的视频程序。",
    avatar: "/avatars/hang.jpg",
    url: "https://x.com/Astronaut_1216",
  },
  {
    id: "koda",
    handle: "aimikoda",
    name: "Kōda",
    bio: "Creative Technologist。角色蒙太奇、硬切镜头与可复用的人物程序。",
    avatar: "/avatars/koda.jpg",
    url: "https://x.com/aimikoda",
  },
  {
    id: "daai",
    handle: "daaihq",
    name: "DAAI",
    bio: "AI Art Director。每周一组风格系统，把人物和宠物丢进设计史。",
    avatar: "/avatars/daai.jpg",
    url: "https://x.com/daaihq",
  },
  {
    id: "chengzi",
    handle: "Chengzilhy",
    name: "小宇Chengzi",
    bio: "AI Filmmaker / VSC。把玩法写成可执行的视频程序。",
    avatar: "/avatars/chengzi.jpg",
    url: "https://x.com/Chengzilhy",
  },
  {
    id: "ege",
    handle: "egeberkina",
    name: "Ege",
    bio: "Art Director。Adobe 与 ElevenLabs Ambassador。动态图形与材质实验。",
    avatar: "/avatars/ege.jpg",
    url: "https://x.com/egeberkina",
  },
  {
    id: "yichen",
    handle: "gengdaJ",
    name: "逸尘",
    bio: "连续创业者。把品牌周边、电商融合和故事板写成可落地系统。",
    avatar: "/avatars/yichen.jpg",
    url: "https://x.com/gengdaJ",
  },
];

export const TAGS = [
  "人像",
  "海报",
  "风格系统",
  "东方",
  "武侠",
  "仙侠",
  "运动",
  "奇幻",
  "科幻",
  "信息设计",
  "极简",
  "排版",
  "动作",
  "日常",
  "胶片",
  "拼贴",
  "转绘",
  "治愈",
  "电商",
] as const;

export const baseEntries: PromptEntry[] = [
  {
    id: "vox-classical-portrait",
    title: "秋水杏眼",
    kicker: "东方捏脸",
    excerpt: "超近景贴脸特写。清冷、深情、端庄，古典女侠的孤傲与江南闺秀的温润。",
    medium: "image",
    tags: ["人像", "东方"],
    style: "影视级胶片人像",
    creatorId: "voxcat",
    sourceUrl: "https://x.com/VoxcatAI/status/2101496846271344837",
    covers: ["/covers/vox-portrait.jpg", "/covers/vox-portrait-b.jpg"],
    model: "图像模型 · 9:16",
    aspect: "4/5",
    featured: true,
    date: "2026-09-20",
    prompt: `9:16竖幅，

东方年轻女性正面肖像，超近景贴脸特写，镜头距离非常近，画面几乎被整张清丽面庞完全填满，人物正面面对镜头，头部端正微微略带侧倾，视线水平直视镜头，双眼精准稳定位于画面的视觉正中心，构图极致聚焦于人脸本身，整体呈现出强烈的电影级大特写面部主导感与深情抓人感。

人物气质清冷、深情、端庄、灵动，带有一丝古典女侠的孤傲倔强与江南闺秀的温润如水，眼神如秋水含情，神态从容微带试探与故事感，不做现代网红塑料僵硬感，不做过度幼态小家子气，不做俗艳风尘感。

脸型为极其标准标致的小巧心形脸偏清秀小鹅蛋脸，脸长中等偏微窄，下庭小巧收拢，骨相轻盈平顺且皮肉包裹极佳，面部留白适中，轮廓线条极度干净流畅。额头圆润开阔饱满，发际线柔和整齐，额前有几缕被微风轻轻拂过的纤细自然碎发散落点缀。太阳穴极度平顺充盈毫无凹陷，颧骨与颧弓完全内收不外扩，面颊与苹果肌皮肉丰盈水润、饱满而不膨胀，面中平整紧致，鼻基底饱满平顺，无任何法令纹与冗余线条。下颌线如工笔画勾勒般清晰收紧上扬，下颌角折角高且柔和弱化，下巴小巧圆润微尖微翘，整体骨相轻盈秀丽，骨肉停匀，极具东方古典影视正脸美人的高级上镜感。

五官极其清丽精致，极具辨识度。眉毛为自然深黑灰棕色东方古典微弧柳叶平细眉，毛流根根分明真实舒展。双眼为极具灵气的大开扇形双眼皮秋水杏眼，眼裂大而开阔，内眼角尖细清晰微勾，外眼角自然舒展微扬。瞳孔为纯净乌黑如深潭琉璃般的清澈大黑眼珠，视线直视镜头，眼神明亮清澈、深情脉脉中带有一丝清冷倔强。鼻子为极品东方水滴秀直鼻，山根平缓自然衔接印堂，鼻梁挺拔细直，鼻头小巧饱满微带圆润水滴尖，正面视角下鼻孔完全不外露。嘴唇为小巧丰盈花瓣微笑唇，上唇呈清晰立体的M形峰并带微凸小唇珠，下唇圆润饱满肉感适中。

皮肤为温润通透的极品冷白玉瓷肌，肤质细腻如剥壳熟蛋，底妆为高完成度清透柔雾哑光质感，保留真实皮肤的细腻肌理与通透微光。妆容为清雅高级的古风影视剧照妆，浓淡相宜。

发型为一头乌黑浓密如绸缎般的古典长发，头顶高颅顶发髻饱满整洁，几缕极细灵动的随风发丝飘散轻拂过前额、鼻梁与侧脸颊。发髻间点缀深红色发带发绳。服饰为大红色半透明轻薄真丝古风长袍与内衬交领，大红色衣衫与冷白肌肤形成强烈纯正的古典冷暖视觉反差。

光线为户外明媚柔和的大面积漫射天光，人物面部受光均匀纯净无生硬阴影。背景完全大光圈极致虚化柔焦。画面仅聚焦于人物正面超近景头部。非卡通插画，非二次元平涂，非生硬3D渲染，严格锁定真实微单影视级超清胶片人像质感。`,
    notes: "作者后记：试着还原战国袍的端庄感，删去满头花哨金冠，只留纯发高髻。骨相立住了，更有从古画里走出来的清冷。",
  },
  {
    id: "vox-brutalist-poster",
    title: "粗野主义角色海报",
    kicker: "Editorial Graphic",
    excerpt: "人物越精致，背景越粗粝。把角色塞进一套真正的 editorial graphic system。",
    medium: "image",
    tags: ["海报", "风格系统", "排版"],
    style: "Brutalist × Editorial",
    creatorId: "voxcat",
    sourceUrl: "https://x.com/VoxcatAI/status/2101313933470748708",
    covers: ["/covers/vox-brutalist.jpg", "/covers/vox-brutalist-b.jpg"],
    model: "图像模型 · 9:16",
    aspect: "4/5",
    date: "2026-09-19",
    prompt: `【角色】将其转译为 Brutalist Graphic Design × Editorial Character Poster × Oversized Type × Extreme Crop。

9:16 竖版单人角色海报。

人物采用大比例中近景或近距离裁切，占据画面主要视觉面积，脸部为第一视觉焦点。角色姿态自然克制，可加入托腮、扶脸、侧头、轻微前倾或贴近镜头的动作，但不改变角色身份。

背景采用 黑色 × 暖灰白 × 单一高饱和强调色 的粗野主义平面系统，强调色根据角色代表色自动选择。

加入：
巨型抽象数字 / 字母形状
oversized typography
粗黑几何块
矩形裁切框
极细垂直线与水平线
非对称网格
大面积留白
局部笔刷刮痕与喷溅图形
前后穿插的几何版式层

文字与几何元素允许被极端裁切、偏移、放大，只作为视觉结构存在，不生成可读长文本，也不要覆盖眼睛和主要五官。

人物本体保持较真实、精致的 editorial 人像质感，与背景粗粝的平面设计形成强烈反差。画面可加入轻微纸张颗粒、旧印刷纹理、粗颗粒网点和磨损感，但人物皮肤与五官保持清晰。

整体重点：
大人物裁切 + 巨型抽象字体 + 黑白底 + 单一高饱和色 + 非对称粗野主义版式 + 编辑人像与旧印刷质感反差。

无平台 UI、无对白字幕、无水印、无无关 Logo、无随机长文字。`,
  },
  {
    id: "vox-macro-poster",
    title: "微距实验海报",
    kicker: "Y2K Grid",
    excerpt: "超近景局部特写 + 瑞士网格 + 几何数字字体。把日常物体拍成巨型景观。",
    medium: "image",
    tags: ["海报", "风格系统", "极简"],
    style: "日系实验平面",
    creatorId: "voxcat",
    sourceUrl: "https://x.com/VoxcatAI/status/2101313638804209853",
    covers: ["/covers/vox-poster.jpg"],
    model: "图像模型 · 9:16",
    aspect: "4/5",
    date: "2026-07-19",
    prompt: `创作一张竖版实验设计海报，主题为【主体】。整体风格结合超近景微距摄影、日系实验平面设计、瑞士网格排版、Y2K 几何数字字体、独立杂志封面感、印刷海报质感。

【主体】采用极近距离局部特写方式呈现，不追求完整展示，而是选择最有识别度的局部进入画面，例如脸部、鼻尖、嘴部、下巴、毛发、表面纹理、边缘轮廓或结构细节。镜头使用超低机位近距离仰拍或贴近式广角微距视角，制造明显的近大远小透视和“日常物体被拍成巨型景观”的视觉效果。

画面为 9:16 竖版构图。外围保留干净的大面积白色边框，内部主体区域像一张被嵌入纸面的纵向海报。主体从画面一侧大幅切入，并超出版面边缘，形成强烈裁切感和体量压迫感。主体通常占据画面下半部和右侧的大部分空间，另一侧保留大面积纯净背景色块。

背景采用高饱和纯净单色底，优先使用明亮天蓝、青蓝、冰蓝、电蓝等颜色，与主体形成鲜明冷暖对比。整体配色保持简洁、鲜明、克制，以 1 个主色 + 主体本身颜色 + 白色纸面 为核心。

版式中加入大尺寸几何展示文字，文字不只是信息，也是一种图形结构。字形应具有超粗无衬线、几何切角、模块化笔画、数字感、未来感、建筑感，以大面积块状方式横跨画面上方或中上区域，与主体局部发生穿插、遮挡、切割和叠压关系。

左上角或上方加入一组小型日期 / 编号 / 星期 / 期号信息，使用窄体科技感字体。左下角可放一个较大的风格词或标题词。右下角加入极小号信息排版。整体文字系统形成巨型标题 + 小型辅助信息 + 微型角落排版的层级关系。

成像质感强调照片与印刷结合：细腻颗粒、纸张纹理、轻微磨损、划痕、油墨不均、丝网印刷感、Risograph 气息。主体细节保持足够清晰，尤其是毛发、表皮、边缘、纤维、反光等微观质感。

整体氛围应呈现冷幽默、青年文化、独立设计、实验视觉、可爱与硬核并存的感觉。`,
  },
  {
    id: "vox-daily-nonhuman",
    title: "非人城市日常",
    kicker: "Q 版观察",
    excerpt: "把宏大、危险、神圣、非人的东西全部拉回日常：怪兽买水，死神等公交。",
    medium: "image",
    tags: ["日常", "风格系统"],
    style: "粗等线平涂",
    creatorId: "voxcat",
    sourceUrl: "https://x.com/VoxcatAI/status/2101341798048411962",
    covers: ["/covers/vox-daily.jpg", "/covers/vox-daily-b.jpg"],
    aspect: "4/5",
    date: "2026-09-19",
    prompt: `把“宏大、危险、神圣、非人”的东西，全部拉回日常。

核心公式：
Q版非人主体 + 都市日常场景 + 普通生活行为 + 轻幽默反差。

用粗等线描、平涂色块、柔和复古城市配色把画面统一起来，做成一套“非人角色城市生活观察”。

画面描述：
【主体：一只巨大但被画成 Q 版的非人角色】正在【日常都市场景】里做【普通生活行为】。

示例可替换：
- 怪兽去便利店买水
- 死神靠在公交站牌下等车
- 机甲坐在公园长椅上吃便当
- 神兽在花店门口浇花
- 外星人站在自动贩卖机前纠结喝什么

画风约束：
粗等线描，平涂色块，不写实，不暗黑史诗，不巨物灾难海报。
配色为柔和复古城市色：灰绿、砖红、奶油、浅青、暖灰。
场景必须是可识别的当代都市日常，有便利店灯箱、人行道、自行车、盆栽、路牌等生活细节。
角色体量可以不合比例，但情绪必须松弛、生活、轻微幽默。
竖版或方版插画，干净构图，像一套城市观察图鉴中的一页。`,
  },
  {
    id: "xxd-break-frame",
    title: "真实物象破框",
    kicker: "早安系列",
    excerpt: "真实物象穿越几何情绪窗口。高端地产、奢侈品、节气海报的留白秩序。",
    medium: "image",
    tags: ["海报", "极简", "东方"],
    style: "轻奢破框海报",
    creatorId: "xxd",
    sourceUrl: "https://x.com/xiaoxiaodong01/status/2090960491648815553",
    covers: ["/covers/xxd-window.jpg", "/covers/xxd-window-b.jpg", "/covers/xxd-morning.jpg"],
    model: "GPT Image",
    aspect: "4/5",
    featured: true,
    date: "2026-08-22",
    prompt: `设计一张具有高级商业审美的极简海报，核心视觉语言是“真实物象穿越几何情绪窗口”。画面中设置一个窄长的低饱和色块，作为视觉锚点和空间容器，色块颜色根据主题选择柔和浅色，如雾蓝、浅青、米白、淡粉、暖灰或浅金。将【核心物象】以真实摄影质感或精细写实方式置入色块之中，但不要完全困在色块内，要让主体局部越界、破框、延伸到留白区域，形成自然生长感和空间穿透感。背景保持极简，使用大面积白色或浅灰留白，加入几乎透明的文化纹样、线性图形、地形线、水波线、光影轮廓或抽象符号，作为若隐若现的视觉细节。整体排版要像高端地产、奢侈品、美学杂志或节气海报，文字细长、克制、字距舒展，标题可竖排，辅助信息用小字号规整排列。画面需要有东方留白、现代秩序、自然生命力、轻奢品质感。避免杂乱、避免高饱和、避免厚重阴影、避免廉价模板感。`,
    notes: "作者习惯一次输出 10 张、每张不同信息。把【核心物象】换成早餐、花材、器物即可延展整组早安系列。",
  },
  {
    id: "xxd-guofeng-ppt",
    title: "国风秩序 PPT",
    kicker: "负空间叙事",
    excerpt: "格式塔连续性、模块网格与基线节奏。把装饰转成平面结构。",
    medium: "image",
    tags: ["东方", "信息设计", "极简"],
    style: "书卷网格",
    creatorId: "xxd",
    sourceUrl: "https://x.com/xiaoxiaodong01/status/2100860468583682322",
    covers: ["/covers/xxd-ppt.jpg", "/covers/xxd-ppt-b.jpg"],
    model: "GPT Image 2.5",
    aspect: "16/9",
    date: "2026-09-18",
    prompt: `以负空间叙事和纸面影像感建立克制PPT视觉系统，主导理论为格式塔连续性、动态平衡、模块网格与基线节奏：用连续性组织细线、投影与文字的缓慢阅读，用不等量配重让大片空场与一侧高密结构互相牵制，用网格约束信息栏、标题、注释与页脚的对齐。借鉴穆勒-布罗克曼的理性网格控制边距、栏宽和小字号秩序，借鉴布罗多维奇的编辑留白与图文呼吸制造停顿，借鉴田中一光的文化符号几何化方法把装饰转成平面结构，借鉴阿尔伯斯的邻接感知维持低彩度层次。配色只定义角色：背景为最高面积的低彩度高明度承载层，结构线和正文为低明度信息层，半透明影像为中明度氛围层，少量强调信息以更强明度差出现，面积约7:2:1。版式采用偏轴模块网格，空场占主导，内容叙事决定标题靠空场内侧、信息列表沿安静轴线排列、焦点图形贴边或越界，唯一破格是细线或影像穿越栏线形成牵引。背景以纤维底材、淡化墨洗和摄影转印的层叠工艺构成。字体采用高反差显示字与低反差小字的对照配对，标题保留修长骨架、开放字腔、细锐收笔和宽松字距。情绪为含蓄、疏朗、静默、书卷、温润、秩序、余韵。`,
  },
  {
    id: "xxd-infographic",
    title: "信息图鉴",
    kicker: "info.001",
    excerpt: "不要把信息翻译成图标。让视觉形式从时间、尺度、层级与节奏里长出来。",
    medium: "image",
    tags: ["信息设计", "极简"],
    style: "编辑信息视觉",
    creatorId: "xxd",
    sourceUrl: "https://x.com/xiaoxiaodong01/status/2099805155747156451",
    covers: ["/covers/xxd-info.jpg"],
    model: "GPT Image",
    aspect: "3/4",
    date: "2026-09-15",
    prompt: `创作一幅具有高度编辑意识、文化质感与视觉洞察力的信息视觉作品。不要急于解释，不要把信息直接翻译成图标、流程框、卡片或标准图表，而是先理解内容内部真正存在的时间、尺度、层级、关系、密度、差异、演变、对照、聚散与节奏，让视觉形式从这些关系之中自然生成。

整个画面应拥有一种安静而开放的秩序。元素之间既存在明确联系，又保留各自独立的生命状态；有些靠近，有些疏离，有些高耸，有些低伏。不要为了整齐而整齐。让尺度、位置、材质、姿态、间距、方向、明暗、空白以及视觉重量彼此作用，使秩序像自然形成。

信息可以转化为人物、器物、结构、自然形态、建筑、空间、材料、符号、文字、场景、抽象形体。避免“一类信息对应一种固定图标”的机械逻辑。让数据和信息被感知，而不是被粗暴标注。数量可以通过尺度体现，时间可以通过延展体现，重要性可以通过视觉重量体现。

保持大量有效留白，让空白成为结构的一部分。画面要有停顿、转折、呼吸和未被完全解释的空间。视觉语言介于高级出版物、博物馆陈列、文化研究图谱、当代信息设计、静物摄影、艺术指导与数据叙事之间。不使用僵硬网格支配一切，不套用常见商业信息图模板。最终作品应让观看者先被整体关系和气息吸引，再逐步进入信息。`,
  },
  {
    id: "xxd-ceremony",
    title: "典礼感极简海报",
    kicker: "冷静理性",
    excerpt: "大片温白空场，居中标题与三枚主题符号庄重对位。博物馆式留白驯服宏大主题。",
    medium: "image",
    tags: ["海报", "极简"],
    style: "典礼网格",
    creatorId: "xxd",
    sourceUrl: "https://x.com/xiaoxiaodong01/status/2099183233166614915",
    covers: ["/covers/xxd-ceremony.jpg"],
    model: "GPT Image",
    aspect: "3/4",
    date: "2026-09-13",
    prompt: `围绕任意主题内容构成极简典礼感信息海报，第一眼必须是大片温白空场中被精确居中的主标题与三枚主题符号发生庄重对位：主题提供核心名称、参与者或关键词，转化为上方大号细笔画标题、中央一组可识别的抽象标志和两侧纯色方块，语义可变但秩序不变。画面保留高比例留白、纵向中轴、上下分区和细黑横线的停顿感，所有元素像展览目录或国际机构年鉴一样被克制排布；主文字采用高反差细衬线或等效字形构造，字腔开阔、笔画纤细、端点尖净、节奏疏朗。色彩由主题抽取两枚高纯度代表色做硬边方块，中间标志只用黑线与少量实心几何，背景为轻微纸感温白，避免渐变、阴影和装饰纹理。底部以更低重心放置副标题与小号说明文字，页脚三点式微型信息压住边缘，形成宏大主题被博物馆式留白驯服的反差；失败症状是元素变满、颜色变花、字体变厚、图标写实或海报失去冷峻仪式秩序。

将主题设为“城市公共图书馆开放日”，用于公共文化机构活动主海报：以靛蓝与朱砂红作为两枚高纯度方块色，中央用黑线抽象出展开的书页与门拱，符号组沿纵向中轴从标题下方稳稳落下；主标题置于上半区正中，副标题与日期在下方形成稀疏的两级信息层级，保留大面积温白留白与细黑横线停顿；画幅为竖版 3:4。`,
  },
  {
    id: "vigo-045",
    title: "文字即躯体",
    kicker: "VISUAL OS 045",
    excerpt: "No shirt. No torso. 身体由手写单词砌成，头、手、小腿仍是摄影。",
    medium: "image",
    tags: ["海报", "排版", "风格系统"],
    style: "手写字母躯体",
    creatorId: "vigo",
    sourceUrl: "https://x.com/VigoCreativeAI/status/2100866290697064460",
    covers: ["/covers/vigo-045.jpg", "/covers/vigo-045-b.jpg"],
    model: "图像模型 · 9:16",
    aspect: "4/5",
    date: "2026-09-18",
    prompt: `Create one finished editorial campaign poster, 9:16.

A human body constructed from irregular black hand-lettered words. Remove the photographed torso and upper garment; replace that area with background-colored negative space filled by letters, so the outer edges of the letters form the silhouette. It must NOT look like text printed on a white shirt.

Head, arms, hands and lower legs stay photographic and connected — one coherent person.

Body lettering: THIN, long, loose single-stroke felt-tip handwriting. Narrow uppercase, varying heights, wavering baselines, air between strokes. Every word readable.

Pale gray-white seamless ground, near-black ink, very sparse muted crimson.

A SMALL block headline "[HEADLINE]" in extra-bold wide sans, about a quarter of canvas width, with a short red handwritten subline "[SUBLINE]".

Body words, in reading order: "[BODY TEXT]"
Subject: [SUBJECT]

No slogan T-shirt, no text panel, no heavy brush lettering, no repeated words.

Swap set:
01 MOVE BEYOND · "Movement is a language"
Body: BREATHE DEEP REACH WIDE FIND YOUR SPACE
Dancer in a standing side-bend, one arm arcing overhead, crimson ankle wrap.

02 MAKE IT RESONATE · "Find your own rhythm"
Body: LISTEN CLOSE PLAY WITH YOUR WHOLE HEART
Seated drummer at a single snare, two sticks, crimson wristband.

03 SHAPE THE DAY · "Good things take practice"
Body: SLOW DOWN FEEL MORE MAKE WITH CARE
Potter leaning over the wheel, clay hands cupping a vessel.

04 TRUST THE REACH · "One move at a time"
Body: STAY CALM FIND BALANCE REACH FURTHER
Climber reaching up-right to a single crimson hold.`,
  },
  {
    id: "vigo-043",
    title: "城市运动双层字",
    kicker: "VISUAL OS 043",
    excerpt: "标题坐在球场上，重复字带从运动员身后穿过，网屏同时罩住两者。",
    medium: "image",
    tags: ["海报", "运动", "排版"],
    style: "都市运动编辑",
    creatorId: "vigo",
    sourceUrl: "https://x.com/VigoCreativeAI/status/2100490738140143772",
    covers: ["/covers/vigo-043.jpg"],
    model: "图像模型 · 9:16",
    aspect: "4/5",
    date: "2026-09-17",
    prompt: `Create a full-bleed urban sports editorial poster, 9:16.

Extreme close wide-angle sports photography: a foreshortened foreground athlete with exaggerated presence against tall receding urban architecture and a visible court or street.

Cool cyan/teal sky and deep petrol shadows against warm natural skin, pale sportswear and bright white graphics.

A diagonal white ribbon repeating "[RIBBON]" in small black letters crosses the depth, masked BEHIND the athlete — never across the face.

Huge white condensed heavy grotesk headline "[TITLE]" interlocks with the body or the ground. A visible fine black halftone screen runs across photo and ribbon, moderate strength, eyes and fingers still readable.

Small white annotation: "[CAPTION]"
Scene: [SCENE]

No logos, no aged paper, no empty footer band, no fully covered letters.

01 DRIVE · FULL COURT · CITY STUDIES / 01
Black woman basketball player driving low on a blue city court between teal towers. Near hand dribbling the ball close to a low lens.

02 CARVE · STREET FLOW · CITY STUDIES / 02
East Asian male skateboarder carving a banked concrete plaza. Low camera at the front wheels.

03 REBOUND · PLAY THE WALL · CITY STUDIES / 03
Latina handball player lunging sideways at a small red ball off a blue handball wall.

04 ROLL · OWN THE TURN · CITY STUDIES / 04
Quad roller skater in a crossover turn on blue city pavement.`,
  },
  {
    id: "vigo-048",
    title: "人体即风景",
    kicker: "VISUAL OS 048",
    excerpt: "衣领变成海湾，辫子变成山脊，掌心变成河谷。在风景里找那个微小的人。",
    medium: "image",
    tags: ["海报", "风格系统"],
    style: "人体风景错觉",
    creatorId: "vigo",
    sourceUrl: "https://x.com/VigoCreativeAI/status/2101308950046187930",
    covers: ["/covers/vigo-048.jpg"],
    model: "图像模型 · 9:16",
    aspect: "4/5",
    date: "2026-09-19",
    prompt: `Create a finished art-film poster, 9:16. Monumental human-landscape illusion, spare editorial design.

A high-contrast black-and-white photographic human fragment merges into one oversized form that also reads as a landscape. Both readings must be visible.

A tiny legible traveler inhabits that landscape — a dramatic human-scale contradiction.

One saturated spot color dominates the negative space and the transformed terrain, against deep black and paper-white skin tones.

Title in light clean sans serif: "[TITLE]"
Small subtitle: "[SUBTITLE]"

Subject: [SUBJECT]
Metaphor: [WHAT BECOMES WHAT]
Spot color: [COLOR]

Hard directional light, fine print grain. No double exposure, no collage windows, no credits, no logos.

01 A Quiet Harbor · "Somewhere to return." · cobalt blue
Older woman in profile, sculptural folded coat collar. Collar = a coastal bay, seam = shoreline. One tiny sailboat.

02 The Long Way · "We carry the distance." · burnt vermilion
Woman from behind, one thick braid. Braid = a switchback mountain ridge. One tiny hiker on the path.

03 What We Hold · "Nothing stays still." · golden yellow
One open cupped hand, five fingers, no face. Palm creases = branching river channels. One tiny canoe.

04 The Last Echo · "A room remembers." · magenta red
Dancer from behind, wide pleated skirt. Pleats = amphitheater terraces. One tiny performer on stage.`,
  },
  {
    id: "vigo-047",
    title: "半影注释",
    kicker: "VISUAL OS 047",
    excerpt: "一半摄影，一半轮廓。耳朵所在的位置写着 echo。",
    medium: "image",
    tags: ["海报", "排版", "极简"],
    style: "擦除注释海报",
    creatorId: "vigo",
    sourceUrl: "https://x.com/VigoCreativeAI/status/2101228129679536265",
    covers: ["/covers/vigo-047.jpg"],
    model: "图像模型 · 9:16",
    aspect: "4/5",
    date: "2026-09-19",
    prompt: `Design a finished experimental editorial poster, 9:16 — an intimate photographic specimen, partially erased and annotated. Not an infographic.

A single large grayscale photographic subject is partly removed by a decisive straight-edged white mask. The missing part stays readable through a thin, irregular, hand-traced black contour continuing the same subject.

The erased area is clean white paper, with a few small bold black lowercase words placed exactly where meaningful features are missing. No legend, no arrows.

3–5 small grayscale squares of photo texture float inside the erased area, like leftover pixels.

Black, white and gray only. Grainy documentary photo against flat empty paper.

Small title: "[title]"
Subject: [SUBJECT]
Erasure: [WHAT IS CUT AWAY]
Labels: [word → position]

01 the listener
Side profile, eyes closed. The back of the head is erased.
echo → ear · pause → temple · breath → throat

02 repair notes
Two hands mending linen with one needle. The supporting hand is erased; the thread crosses the cut.
hold → palm · mend → seam · again → thread loop

03 inside a pear
A pear sliced lengthwise. Half the flesh is erased.
skin → peel · seed → core · sweet → flesh

04 sleep study
A curled sleeping cat. The lower half is erased.
warmth → belly · hush → paw · dream → tail curl`,
  },
  {
    id: "alla-temple",
    title: "古寺苏醒",
    kicker: "Prompt Studio",
    excerpt: "低机位，石像从尘土中站起。先出图，再把静帧变成镜头。",
    medium: "video",
    tags: ["奇幻", "动作"],
    style: "史诗环绕运镜",
    creatorId: "alla",
    sourceUrl: "https://x.com/AllaAisling/status/1989013773215014965",
    covers: ["/covers/alla-temple.jpg"],
    model: "Grok · Image to Video",
    aspect: "16/9",
    date: "2025-11-13",
    prompt: `Low-angle shot of ancient temple ruins as massive stone statues awaken. Dust cascades from carvings; camera circles rising giants through beams of golden light.`,
    notes: "作者提示：先做静帧，再动画化，结果会更稳。",
  },
  {
    id: "alla-ocean",
    title: "贴海疾速",
    kicker: "Kling 2.6",
    excerpt: "镜头贴着海面掠过。浪被拉成条带，水雾抽打画框，地平线在加速中弯曲。",
    medium: "video",
    tags: ["动作", "运动"],
    style: "极限速度 I2V",
    creatorId: "alla",
    sourceUrl: "https://x.com/AllaAisling/status/2014828992898203728",
    covers: ["/covers/alla-ocean.jpg"],
    model: "Kling 2.6 · Image to Video · Native Sound",
    aspect: "16/9",
    featured: true,
    date: "2026-01-23",
    prompt: `The camera skims inches above the ocean surface at extreme speed. Waves smear into streaks, spray lashes the frame, horizon bends under acceleration. Sudden pitch changes and violent vibration.`,
  },
  {
    id: "alla-mega",
    title: "巨构俯冲",
    kicker: "Kling 2.6",
    excerpt: "镜头沿巨构外墙垂直坠落。建筑细节被拉成竖向条带，风力拍打画框。",
    medium: "video",
    tags: ["动作"],
    style: "垂直运动模糊",
    creatorId: "alla",
    sourceUrl: "https://x.com/AllaAisling/status/2011924856858952118",
    covers: ["/covers/alla-mega.jpg"],
    model: "Kling 2.6 · Image to Video",
    aspect: "16/9",
    date: "2026-01-15",
    prompt: `The camera drops straight down the side of a massive megastructure at terrifying speed. Building details stretch into vertical streaks, wind buffets the frame, sudden braking pulses. Extreme vertical motion blur.`,
  },
  {
    id: "alla-train",
    title: "雪谷与龙",
    kicker: "Prompt Drop",
    excerpt: "列车冲进雪崩。一头龙从林中冲出，用翅膀挡住落石。小女孩隔窗微笑。",
    medium: "video",
    tags: ["奇幻"],
    style: "绘本电影短片",
    creatorId: "alla",
    sourceUrl: "https://x.com/AllaAisling/status/2101429374755262628",
    covers: ["/covers/alla-train.jpg"],
    model: "Seedance 2.0",
    aspect: "16/9",
    date: "2026-09-19",
    prompt: `15-second cinematic animated short.
A passenger train races through a snowy mountain valley.
Ahead, a huge avalanche suddenly breaks loose and begins crashing down toward the tracks.
The train brakes hard.
Passengers look through the windows as snow and rocks thunder down the mountain.
Suddenly a massive dragon bursts from the forest.
It lands directly beside the tracks and spreads its enormous wings.
The avalanche hits.
The dragon braces itself against the ground, shielding the train from the worst of the falling debris.
Snow explodes around it.
The train comes to a stop inches from the blocked track.
Inside the front carriage, a little girl presses her hand against the window.
The exhausted dragon looks back at her.
She smiles.
The dragon gently lowers one wing before disappearing into the snowy forest.

Stylized cinematic animation, sophisticated creature design, painterly textures, grounded environments, dramatic physical action, dynamic camera movement, strong sense of scale, warm emotional ending, natural colors, cinematic lighting, no dialogue, no magic powers, no horror, no violence.`,
  },
  {
    id: "alla-dragon",
    title: "怕公主的龙",
    kicker: "Fantasy Comedy",
    excerpt: "红龙降落，公主挥手，龙吓得躲到骑士身后。最后一朵花，龙晕过去。",
    medium: "video",
    tags: ["奇幻", "日常"],
    style: "奇幻喜剧短片",
    creatorId: "alla",
    sourceUrl: "https://x.com/AllaAisling/status/2101022443351740682",
    covers: ["/covers/alla-dragon.jpg"],
    aspect: "16/9",
    date: "2026-09-18",
    prompt: `A towering red dragon lands dramatically beside a medieval castle. Villagers scream and run. Trumpets sound. A princess appears on a balcony and waves cheerfully. The dragon freezes. Its eyes widen in panic. The princess starts walking down the stairs toward him. The dragon immediately backs away. Confused knights charge to defend the kingdom, but the dragon runs past them in terror. The princess continues following, trying to be friendly. The chase escalates through courtyards, bridges, and village streets. The dragon hides behind a group of armored knights, peeking nervously around them. Final shot: the princess gently offers a flower. The dragon faints. Cinematic fantasy comedy, fast pacing, escalating visual gags, dynamic camera angles, expressive character animation, no dialogue, no text, no logos.`,
  },
  {
    id: "lansen-wuxia",
    title: "一掌惊龙",
    kicker: "武侠动作巨制",
    excerpt: "降龙十八掌对少林金刚。金龙穿柱破墙，拳风把空气打成武器。",
    medium: "video",
    tags: ["武侠", "动作", "东方"],
    style: "真人电影级武侠",
    creatorId: "lansen",
    sourceUrl: "https://x.com/lansenai/status/2101293306177310839",
    covers: ["/covers/lansen-wuxia.jpg"],
    model: "视频模型 · 16:9 · 30s+",
    aspect: "16/9",
    featured: true,
    date: "2026-09-19",
    prompt: `全片严格 30 秒，16:9，真人电影级中国武侠动作巨制。运镜采用高速穿越机环绕式镜头，始终服务动作，不乱切，不把 A 和 B 拍混。从第 0 帧开始就开打。

角色必须全程严格区分：
A = 左侧黑衣高手。成年亚洲男性，黑色长发束起，深黑破旧长袍。武学体系固定为降龙十八掌。主要输出始终是掌力。特效固定为金色龙形掌力：每一次重掌打出，必须有一条或多条金色真气龙随掌势冲出、盘旋、穿柱、破墙、俯冲、贴地飞掠。金龙必须霸道、真实、电影级，不能变成廉价光柱或卡通龙。一掌可以轰爆石柱、打穿屋墙、掀翻屋檐。
B = 右侧少林武僧。成年亚洲男性，光头，强壮精悍，破旧僧袍与佛珠。武学体系固定为少林硬派拳脚 + 金刚不坏式抗打 + 透明空气爆裂 + 音爆气爆 + 拳风化解。不要金色护罩，不要花哨法术，而是透明空气压缩、马赫环、水汽爆震、拳风撕裂、音爆冲击墙。B 的强大来自“肉身就是毁灭兵器”。

空间关系：A 基本从画面左侧进攻，B 从右侧迎战。寺院中央广场，碎石、积水、烟尘。

0.00–3.00s 第 0 帧正面对轰。A 右掌轰向 B 胸前，金色龙形掌力咆哮冲出；B 右拳硬顶，拳锋前出现透明空气压缩面，碰撞爆出马赫环与水汽冲击圈。A 补第二掌横扫，B 沉肩外格。
3.00–6.00s A 连掌压制：直推掌、撩掌、腾空下压掌。B 短冲硬震、肘肩撞偏、正蹬腿逼改落点，交叉格挡处出现巨大透明冲击环。
6.00–9.00s B 反压：右摆拳、低扫腿、下砸拳、左拳追落点。A 偏头、跃起、贴地金龙反制。
9.00–12.00s A 拉开中距离连出三条金龙（贴地、俯冲、交汇）；B 逐一砸碎、上轰、全力正拳轰开。
后续可升级到回廊、屋顶、大殿内部，一路打、一路拆，整座寺院扛不住。

全局约束：每一段都要看清 A 怎么打、B 怎么挡、B 怎么反打、A 怎么再应对。绝不能变成纯特效乱炸。镜头可高速穿越、贴地掠过、越肩绕背、拔高看飞檐，但关键动作必须可读。`,
    notes: "原帖还附有完整后 30 秒：战场从广场打到屋顶再轰穿大殿。需要全长请到源帖复制。",
  },
  {
    id: "qaim-longboard",
    title: "海岸长板速降",
    kicker: "Cinematic Action",
    excerpt: "贴地跟踪、航拍与侧向交替。轮子高速旋转，风掀起衣发，身后是碧蓝海岸。",
    medium: "video",
    tags: ["运动", "动作"],
    style: "极限运动电影",
    creatorId: "qaim",
    sourceUrl: "https://x.com/q_a_i_m_01/status/2101200031139451137",
    covers: ["/covers/qaim-longboard.jpg"],
    model: "视频模型 · 9:16",
    aspect: "9/16",
    date: "2026-09-19",
    prompt: `A cinematic high-speed downhill longboarding scene on a winding coastal mountain road overlooking a breathtaking turquoise ocean and a vibrant seaside city. Three young longboarders race downhill together, leaning aggressively into sweeping turns with realistic body weight shifts and fluid skating movements. The camera follows extremely close to the riders at ground level, alternating between dynamic tracking shots, wide aerial perspectives, and dramatic side-angle shots. Strong sense of speed, realistic road motion blur, wheels spinning rapidly, wind blowing through their hair and clothing, bright blue sky with detailed white clouds, lush green hills, sparkling ocean and coastal landscape in the background. Ultra-realistic cinematic photography, natural daylight, wide-angle lens, immersive action-camera perspective, smooth stabilized camera movement, high detail, realistic physics, energetic but elegant atmosphere, 4K, 24fps, seamless motion, no text, no logos, no watermark.`,
  },
  {
    id: "mag-deadshot",
    title: "DEADSHOT 片头",
    kicker: "丧尸电影片头",
    excerpt: "抽帧印片、动态双重曝光、真实胶片颗粒。提示词只写镜头、粒子与光晕。",
    medium: "video",
    tags: ["胶片", "动作"],
    style: "悬疑惊悚片头",
    creatorId: "magn",
    sourceUrl: "https://x.com/Magncsans/status/2100222945499263146",
    covers: ["/covers/mag-deadshot.jpg", "/covers/mag-assets.jpg"],
    model: "视频模型 · 竖屏 15s",
    aspect: "9/16",
    date: "2026-09-16",
    prompt: `生成15秒竖屏悬疑惊悚丧尸电影片头，画幅与参考图一致。快速混剪、抽帧印片、动态双重曝光、真实胶片颗粒。冷灰白、深炭黑与少量灰绿色，暗红色只作为短促点缀。整体光怪陆离、压抑，但构图与文字排版高级简约。

唯一主角是参考图中持枪、装备精良的成年亚洲女性。严格保持她的面容、黑色长发、黑色战术服、战术背心、手套及枪械外观。双手控制胸前枪械，身体前倾，目光冷峻。交锋对象是穿破旧日常衣服的成年丧尸，只通过灰败侧脸、伸来的手、肩背和失衡轮廓出现。

不要把参考图当作静态照片缓慢推近。人物、发丝、衣袖、灰白雾状区域、黑色拖影与双重曝光层都在运动。前景失焦薄雾较快掠过，背景灰白曝光层缓慢移动。黑色拖影来自发丝、衣袖与身体动作的长曝光痕迹。树林、空旷道路和电线杆作为第二层曝光，局部叠印在战术服暗部。真实胶片扫描质感：细密颗粒逐帧变化，暗部颗粒稍明显，伴随轻微画面套准偏移、曝光呼吸和高光边缘溢光。

以约0.3—0.8秒的短镜头组成碎片蒙太奇。主要使用硬切、动作匹配切和少量极短曝光闪切。抽帧表现为清晰姿态短暂保持，紧接一小段方向性运动模糊，再跳入下一姿态。

00:00—00:03 快速建立人物。从俯视持枪构图开始，硬切至眼睛、手套、靴子、衣摆，左下留白出现小号文字 FOYEGE PRESENTS。
00:03—00:06 第一次交锋碎片。灰败的手从近前景探来；主角转身；侧脸锁定画外；极短插入丧尸肩背受撞击。
00:06—00:09 红色与双重曝光交错。持枪半身暗轮廓中，空旷道路向纵深延伸。
00:09—00:11.50 抽象交锋高潮。发丝甩动、灰败侧脸退出、枪口闪光、液滴拖痕、眼睛重新清楚。
00:11.50—00:15 硬切深炭黑。中央偏下唯一片名 DEADSHOT：全大写、冷灰白、窄体无衬线，上下大量黑色空间。最后硬切黑场。

无对白、无旁白。文字仅保留“FOYEGE PRESENTS”和“DEADSHOT”。`,
    notes: "作者补充：特殊画风应从资产设计开始，生成时提示词只需聚焦镜头和动作，而不是反复堆约束词。",
  },
];

export const entries: PromptEntry[] = [...baseEntries, ...moreEntries, ...wave3Entries, ...wave4Entries].sort((a, b) =>
  b.date.localeCompare(a.date),
);

export const creatorById = Object.fromEntries(creators.map((c) => [c.id, c])) as Record<
  string,
  Creator
>;

export function figureNo(index: number) {
  return String(index + 1).padStart(2, "0");
}

export function countByCreator(id: string) {
  return entries.filter((e) => e.creatorId === id).length;
}
