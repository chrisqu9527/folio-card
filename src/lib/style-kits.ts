/** Editorial guidance, separate from the immutable, attributed source prompts. */
export const creationTasks = [
  { id: "article", name: "给文章配图", outcome: "封面 · 段落插画 · 总结卡" },
  { id: "explain", name: "讲明一个原理", outcome: "知识漫画 · 结构图 · 对照图" },
  { id: "steps", name: "讲清一个过程", outcome: "步骤漫画 · 流程图 · 教程" },
  { id: "story", name: "把故事画出来", outcome: "情节分镜 · 人物互动 · 时间线" },
  { id: "series", name: "做一组系列内容", outcome: "固定角色 · 统一配色 · 连续栏目" },
] as const;
export type CreationTask = (typeof creationTasks)[number]["id"];
export type StyleKit = {
  id: string;
  name: string;
  tone: string;
  summary: string;
  tasks: CreationTask[];
  sources: string[];
  outputs: string[];
  inputs: string;
  grammar: string;
  layout: string;
  caution: string;
  ideas: { topic: string; content: string }[];
};

export const styleKits: StyleKit[] = [
  {
    id: "comic",
    name: "角色讲解漫画",
    tone: "亲切 · 有互动",
    summary: "让人物带着问题走进场景，把抽象内容讲得有来有回。",
    tasks: ["explain", "steps", "story", "series"],
    sources: ["640", "626"],
    outputs: ["步骤漫画", "前后对照", "角色小课堂"],
    inputs: "讲解内容 + 步骤或对比点 + 角色参考",
    grammar:
      "清晰黑色轮廓与柔和平涂，同一角色保持五官、发型、服装一致。使用场景、表情和动作讲解，背景只保留与内容有关的道具。",
    layout:
      "按用户提供的内容拆成3至4格：提出问题、展示过程、解释关键变化、得到结论。每格聚焦一个动作，阅读顺序明确。不要强行补足没有依据的步骤。",
    caution: "需要角色参考图或明确的文字设定；分格越多，每格能容纳的文字越少。",
    ideas: [
      {
        topic: "冰为什么会浮在水面上",
        content: "水结冰时体积增大；相同质量下冰的密度更小；用一杯水和冰块呈现前后对照。",
      },
      {
        topic: "从咖啡豆到一杯手冲咖啡",
        content: "按已确认的教程整理磨豆、放滤纸、注水和完成四个步骤；用同一角色演示。",
      },
      {
        topic: "博物馆里的一次意外相遇",
        content: "一个孩子向讲解员提问，两人观察同一件展品；填入真实展品资料后安排对话。",
      },
    ],
  },
  {
    id: "notes",
    name: "手绘知识卡",
    tone: "轻松 · 好读",
    summary: "把一篇文稿收成几个重点，配上小插画，适合收藏和分享。",
    tasks: ["article", "explain", "steps", "series"],
    sources: ["619", "642"],
    outputs: ["文章总结卡", "概念说明", "方法清单"],
    inputs: "一个主题 + 3至4个核心要点",
    grammar:
      "暖白纸感、手绘黑色线条、少量红色强调。标题醒目，正文用清晰易读的中文印刷体，小人物和道具辅助理解。",
    layout: "一个标题、3至4个要点分区、一个简短结论。每个分区一幅小插画加一句说明，留出充足空白。",
    caution: "适合提炼重点；长文需要先压缩，不要把整篇文章塞进一张图。",
    ideas: [
      {
        topic: "怎样读懂一篇科学新闻",
        content: "先找研究对象；区分相关和因果；关注样本和局限；回到论文原文。",
      },
      {
        topic: "文章的三个关键观点",
        content: "粘贴自己的文章要点，每个要点补充一个具体例子，最后给出一句总结。",
      },
      { topic: "做一次小型访谈", content: "确定问题；邀请受访者并取得同意；记录回答；核对引用。" },
    ],
  },
  {
    id: "cutaway",
    name: "结构拆解图",
    tone: "清楚 · 有细节",
    summary: "打开物件的外壳，用部件、引线和箭头解释它怎么工作。",
    tasks: ["explain", "steps", "article"],
    sources: ["612", "607", "645"],
    outputs: ["部件剖面图", "工作原理图", "产品讲解配图"],
    inputs: "对象图片 + 已核对的部件与功能",
    grammar:
      "精细工程插画，干净浅底，中央主体用局部剖视展示内部。细线标注、编号部件与克制的强调色，结构层次清楚。",
    layout:
      "中央展示完整对象和一个关键剖面；周围安排3至5个部件说明；用箭头连接真实的工作流程，标注对应部件而非装饰线。",
    caution: "适合有可靠结构资料的主题；示意图不能代替工程图，未提供的内部细节不要猜。",
    ideas: [
      {
        topic: "自行车的动力怎么传到后轮",
        content: "脚踏带动曲柄与牙盘；链条传递运动；后轮齿轮带动后轮。请补充所画车型的结构参考。",
      },
      {
        topic: "一台咖啡机的内部",
        content: "提供实际机型、部件名称和水流路径，仅解释资料中能够确认的结构。",
      },
      {
        topic: "风力发电机怎样发电",
        content: "以给定机型资料说明叶片、传动系统、发电机与电网的关系，注明是否有齿轮箱。",
      },
    ],
  },
  {
    id: "field-guide",
    name: "自然博物图鉴",
    tone: "细腻 · 值得细看",
    summary: "把一个观察对象放大，从局部细节、生命周期到大小对比逐层认识。",
    tasks: ["explain", "article", "series"],
    sources: ["604"],
    outputs: ["物种介绍页", "观察手册", "系列百科卡"],
    inputs: "物种名称 + 参考图 + 经过核对的资料",
    grammar: "奶油色纸张与细腻自然插画，克制的植物色调，主体完整清楚，局部标注像自然博物馆展板。",
    layout:
      "一个中央物种插画，辅以外形特征、栖息环境、生命周期和尺度对比。只安排已提供资料的模块，不生成知识评分。",
    caution: "分类、尺寸和生活史需要校对；原作预览展示画风，不充当生物学证据。",
    ideas: [
      {
        topic: "认识一只蜜蜂",
        content: "整理有来源的外形、栖息环境、生命周期和体长数据；保留观察对象的物种名称。",
      },
      {
        topic: "城市常见树叶观察",
        content: "提供三种树木的叶片照片、名称与观察记录，对比叶形和叶缘。",
      },
      {
        topic: "一朵花的结构",
        content: "提供花的物种与参考照片，按照确认的花瓣、花萼、雄蕊、雌蕊结构逐一标注。",
      },
    ],
  },
  {
    id: "timeline",
    name: "演变与时间线",
    tone: "有层次 · 重脉络",
    summary: "把先后变化串起来，让读者看见一个物件或一段历史怎样形成。",
    tasks: ["story", "explain", "article"],
    sources: ["608", "647", "610"],
    outputs: ["演变长图", "历史节点图", "前后变化对照"],
    inputs: "3至5个节点 + 日期 + 变化依据",
    grammar: "纸感底色、细墨线与柔和水彩，节点插画配短注释，年代、箭头和关键物件建立阅读顺序。",
    layout:
      "按时间先后安排3至5个节点，每个节点展示同一观察角度下的变化；用箭头连接，明确区分发生顺序和因果解释。",
    caution: "先提供节点与资料；年代、疆域和因果关系不由图像模型自行补全。",
    ideas: [
      {
        topic: "从书信到即时通信",
        content: "选取经核对的通信工具和时间节点，比较传递方式、等待时间和使用场景。",
      },
      {
        topic: "一座城市的三个时期",
        content: "输入三个时期的时间、地图参考、建筑特点和确定发生的变化。",
      },
      {
        topic: "自行车的设计变化",
        content: "提供不同年代的车型资料，比较车轮、传动与车架，而非凭空生成历史。",
      },
    ],
  },
  {
    id: "minimal",
    name: "极简概念插画",
    tone: "克制 · 一眼懂",
    summary: "用一个人物和一个巧妙的视觉比喻，为文章建立记忆点。",
    tasks: ["article", "explain", "series"],
    sources: ["174", "436", "438"],
    outputs: ["文章封面", "段落配图", "观点插画"],
    inputs: "一句核心观点 + 一个生活化比喻",
    grammar: "简洁轮廓、少量平涂色块、大面积留白。人物与道具高度概括，用清楚的视觉比喻组织画面。",
    layout:
      "画面只讲一个核心观点，主体和一个关键道具构成关系，不堆砌图标和说明文字；为标题留出空白。",
    caution: "适合表达一个观点；不适合承载详细步骤或复杂结构。",
    ideas: [
      {
        topic: "信息太多，注意力太少",
        content: "一个人物在许多纸页中只举起一张；用少量元素表现选择。",
      },
      {
        topic: "积累是如何发生的",
        content: "小人物每天垒一块积木，慢慢形成楼梯；使用同一种积木强调积累。",
      },
      { topic: "给想法留一点空间", content: "拥挤的桌面旁留出一块空白，一颗新芽从空白处伸出。" },
    ],
  },
  {
    id: "retro",
    name: "复古叙事插画",
    tone: "有故事 · 有温度",
    summary: "用纸感、丰富场景和鲜明人物，给历史与人文内容增加叙事感。",
    tasks: ["story", "article", "explain"],
    sources: ["643", "433"],
    outputs: ["人文故事配图", "知识海报", "章节封面"],
    inputs: "故事片段 + 时代场景 + 核心信息",
    grammar:
      "复古纸质感、清晰墨线与有限套色，鲜明的卡通人物，场景中加入与故事相关的建筑、器物与环境细节。",
    layout: "用一个主要场景讲述片段，围绕人物行动安排信息；标题与2至3个注释区保持清晰的阅读层次。",
    caution: "同组提供不同复古方向的参考；选定一种配色和线条后连续使用，器物细节另行校对。",
    ideas: [
      {
        topic: "古代集市的一天",
        content: "按研究资料提供摊位、货物、买卖人物与交易过程，选择一个具体时刻。",
      },
      {
        topic: "一杯茶的旅行",
        content: "以已知的产地、加工和运输资料构成场景，突出其中一个人物的行动。",
      },
      {
        topic: "印刷如何改变阅读",
        content: "提供印刷工坊的时代和器物参考，表现排字、印刷与阅读之间的联系。",
      },
    ],
  },
  {
    id: "characters",
    name: "双角色系列漫画",
    tone: "有个性 · 易延续",
    summary: "固定提问者与讲解者，用人物关系串起每一期的新主题。",
    tasks: ["series", "story", "explain"],
    sources: ["646"],
    outputs: ["栏目角色互动", "对话漫画", "系列封面"],
    inputs: "两位角色设定 + 本期问题 + 一个道具",
    grammar:
      "几何造型、清楚粗轮廓、纯色平涂与夸张动作剪影。两位角色的身形、服装和主色固定，视线与手势相互呼应。",
    layout:
      "提问者和讲解者围绕一个关键道具互动，优先用动作建立关系；保留角色识别特征和固定标题区，每期只改变主题、道具和动作。",
    caution: "原作是静态插画；连续使用要提供同一组角色参考，人物一致性仍需逐张检查。",
    ideas: [
      {
        topic: "为什么影子会变长",
        content: "提问者拿着小人模型，讲解者改变手电筒角度；用统一角色表现观察和解释。",
      },
      {
        topic: "一个误解与一个解释",
        content: "输入本期真实的误解和准确解释，让两位角色通过一个具体道具展开互动。",
      },
      {
        topic: "每周认识一件小物品",
        content: "固定两位角色和版式，本期输入小物品的名称、特点与可演示的功能。",
      },
    ],
  },
];

export type CreativeBrief = {
  topic: string;
  content: string;
  audience: string;
  ratio: string;
  character: string;
};
export function composeStylePrompt(kit: StyleKit, brief: CreativeBrief): string {
  return [
    `请围绕「${brief.topic.trim()}」创作一张${kit.name}。`,
    `面向读者：${brief.audience}。画幅：${brief.ratio}。`,
    `【内容依据】\n${brief.content.trim()}`,
    `【视觉语言】\n${kit.grammar}`,
    `【画面组织】\n${kit.layout}`,
    brief.character.trim()
      ? `【固定角色】\n${brief.character.trim()}。如附有角色参考图，以参考图为准。`
      : "",
    "【内容与文字】\n只使用给定的内容依据，不编造数据、年代、部件或因果。缺少必要资料时先指出缺项。正文采用清晰、易读的简体中文，标签与画面一一对应。保持系列中的线条、配色和角色特征一致。",
    `【改编说明】\n此稿为 FOLIO 编辑整理的使用方案，参考库内 ${kit.sources.map((n) => `#${n}`).join("、")} 的视觉组织方式，不是原作者原文。`,
  ]
    .filter(Boolean)
    .join("\n\n");
}
