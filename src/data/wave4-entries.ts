import type { PromptEntry } from "./catalog";

export const wave4Entries: PromptEntry[] = [
  {
    id: "koda-detail",
    title: "角色细节蒙太奇",
    kicker: "Character Detail Montage",
    excerpt: "二十个硬切。前十九镜只给身体局部，最后一镜才把脸砸进镜头。",
    medium: "video",
    tags: ["人像", "动作"],
    style: "硬切细节蒙太奇",
    creatorId: "koda",
    sourceUrl: "https://x.com/aimikoda/status/2100258514132217859",
    covers: ["/covers/koda-detail.jpg"],
    model: "MiniMax H3 · 1:1 · 15s",
    aspect: "4/5",
    featured: true,
    date: "2026-09-16",
    notes: "原帖把完整二十镜写在评论。第 20 镜才露脸；角色参考图决定解剖与材质，不要发明配件。",
    prompt: `Use @[character reference] for the character's identity, anatomy, costume, colors, materials and visual style. Adapt body-region cues to its actual anatomy, replacing absent features with existing equivalents. Invent no anatomy or accessories. Select signature inserts from its most recognizable details. Rigid parts rotate; flexible materials bend or stretch.

A 15-second character-detail montage: exactly 20 shots joined by hard cuts. An empty, seamless warm-white studio background; soft directional light reveals the surfaces. Shots 1-19 are tightly cropped body details and rear angles: keep the face, eyes and facial profile entirely outside the frame, including reflections. Shot 20 is the first and only face reveal. No full-body view.

Three connected bursts: a sharp head turn with the body bracing; a coiled arm opening into a strong sweep and torso twist; one short step into a planted pivot, finishing with a sudden look into camera. Carry body state across cuts without resetting to neutral. Existing hair, clothing and attachments react naturally. Keep the character active, with clear articulation and weight shifts.

Jump between distant body regions. Mix brief visual punches with longer moving-detail reads. Use one abrupt camera move per shot except locked-camera inserts 4 and 11, where the character supplies the speed. Vary height, angle and direction. Brake moves briefly for legibility while the subject keeps moving. Local whips stay tightly cropped; changes of body region use hard cuts. Connect selected cuts through similar shapes or motion vectors, without morphing. Real-time action, no slow motion or freeze frames.

0-3s, shots 1-5. A concealed head turn triggers the first burst:
1. Extreme upper-back detail: a crash push catches its surface shifting as a sharp head turn begins entirely above the crop.
2. Fingers: a short downward snap catches them curling into a fist as the body braces.
3. Rear three-quarter shoulder detail: a tight camera arc catches the shoulder drawing back behind the turning head.
4. Locked floor-level foot detail: the grounded support foot braces, its raised heel pressing down firmly without taking a step.
5. Rear neck detail: a short upward tilt catches the nape stretching with the turn; stop below the back of the head, keeping the jaw and face excluded.

3-9s, shots 6-13. The coiled arm opens into a forceful sweep:
6. A signature upper-body detail: a fast diagonal slide catches an existing seam, joint or distinctive contour responding as the arm draws inward.
7. Elbow: a sharp lateral track catches the folding joint tightening the arm's coil.
8. Supporting knee: hard match cut from the bent elbow to the knee's similar angle; a short camera drop catches the leg compressing under the same preparation.
9. Wrist: a quick shallow orbit catches it turning outward to initiate the release.
10. Upper chest: a short punch-in catches the chest opening as the arm drives outward beyond the crop. Let this moving surface read slightly longer.
11. Locked hand detail: fingers spring open and the hand sweeps rapidly across the fixed frame. Catch one crisp, readable phase of the spread fingers before they leave the crop.
12. Upper back: a sharp sideways slide continues that screen direction as the shoulder rolls through the sweep and the torso twists.
13. A distinctive torso or waist detail: a close diagonal move catches its physical response to the twist, such as an existing fold pulling taut or an attached piece swinging. Give the material response a clear moving read.

9-13s, shots 14-19. One short step and a pivot build toward the reveal:
14. Thigh of the other leg: an abrupt low tracking move catches it driving the single short step out of the twist.
15. Advancing foot: a brief downward whip catches it landing; show clear floor contact.
16. Ankle and lower-leg detail: a fast side slide catches the landed leg accepting weight as the ankle flexes.
17. Waist: a tight orbit catches the torso rotating above the planted-foot pivot. The foot supports the turn rather than sliding across the floor.
18. Back-of-head contour: a short lateral whip catches the start of the return turn from behind. Keep only the rear contour in frame, never the facial profile.
19. A signature shoulder detail: a sharp diagonal slide catches its follow-through beneath the turning head, which stays completely above the crop. Cut at the peak of this movement.

13-15s, shot 20. First face reveal:
20. Hard cut to a frontal face close-up as the character sharply completes the turn toward the lens. An explosive short push reveals the entire face clearly for the first time and stops tightening before cropping out its features. Direct eye contact lands while hair, clothing or natural body follow-through remains alive. Keep the whole face readable through the end; finish on living motion, without a held pose or another cut.

No added props, scenery, text, graphic overlays or split screens.`,
  },
  {
    id: "koda-selfie",
    title: "角色自拍快剪",
    kicker: "Selfie Time",
    excerpt: "伸向镜头的那只手前臂始终在画里。十八个姿势，快门跟着鼓点切。",
    medium: "video",
    tags: ["人像", "日常"],
    style: "前置镜头自拍剪辑",
    creatorId: "koda",
    sourceUrl: "https://x.com/aimikoda/status/2101118238729949220",
    covers: ["/covers/koda-selfie.jpg"],
    model: "MiniMax H3 · 16:9 · 15s",
    aspect: "16/9",
    date: "2026-09-19",
    notes: "若要对参考音轨，作者补充加一句：Beat sync with @[audio ref]。握手机的手和机身必须在画外。",
    prompt: `Create a fast, densely cut selfie edit using the supplied character reference @[ref image]. Preserve their identity, proportions, outfit, and original rendering style. Show at least 18 clearly distinct selfie poses, each readable before the next cut, with expressions and attitude suited to the character. View everything through the front-facing camera of a phone they hold in one hand throughout. Keep the same arm visibly extended toward the lens, its foreshortened forearm leading beyond the frame to the gripping hand and phone, which remain completely out of view. Their other hand stays free for posing. Keep camera angles within believable reach of the holding arm, with natural handheld movement and perspective shifts. Snap between poses with hard cuts synchronized to driving music and shutter accents. Match the setting and lighting to the character’s visual style. Maintain continuous energy and finish sharply on the strongest expression.`,
  },
  {
    id: "koda-power",
    title: "角色释能",
    kicker: "Character Power Release",
    excerpt: "能力从角色设计里长出来。十五镜硬切，最后一镜才给全身。",
    medium: "video",
    tags: ["人像", "动作", "奇幻"],
    style: "释能硬切蒙太奇",
    creatorId: "koda",
    sourceUrl: "https://x.com/aimikoda/status/2100939295783575733",
    covers: ["/covers/koda-power.jpg"],
    model: "MiniMax H3 · 16:9 · 15s",
    aspect: "16/9",
    date: "2026-09-18",
    notes: "能力的颜色、纹理和行为必须从角色设计推导，不要换装或变形。第 10 镜近乎静音，随后才爆发。",
    prompt: `Use @[character ref] for the character's identity, anatomy, proportions, costume, colors and visual style. Preserve the design throughout the power display. One character, no added equipment.

A 15-second explosive show of power: exactly 15 shots joined by hard cuts. Empty charcoal space, dusty floor, fixed directional light. The character knowingly summons and unleashes a familiar power. Every increase answers an intentional gesture. Reserve the full-body reveal for the final shot.

Choose the power's appearance, color, texture and behavior from the character's design; maintain it across all shots. Build, concentrate and release one immense eruption that disturbs clothing and drives dust away. The release establishes a lasting powered-up state with a clear character-specific visual signature. Keep that signature active after the initial blast passes, visibly distinguishing the final character from the opening while preserving identity. No flashes, strobing, whiteouts, costume changes, anatomical transformation.

Commanding posture, grounded legs, decisive gestures. The character faces the lens confidently and never flinches at the power. Sharp pushes and tight orbits answer the performance. Rapid inserts, a deliberate pause, then explosive release. Real-time action, short blur, controlled camera jolts.

0-3s, shots 1-3. Summoning:
1. Extreme hand detail: the fingers deliberately close into a firm fist. Power appears in direct response to that command; a crash push accents its arrival.
2. Chest-up side view: the character draws a measured breath, rolls the shoulders back and opens the chest. Power builds as the chosen posture settles; clothing lifts around the steady body.
3. Face close-up: a sudden push catches an unwavering look into the lens, chin slightly raised. The expression is knowing and assured.

3-7s, shots 4-7. Escalation:
4. Palm detail: the fingers open slowly and precisely, deliberately increasing the power around the hand.
5. Hand-to-forearm view: the arm rises with authority; whip-track the power advancing along it in response.
6. Neck and shoulder: a deliberate shoulder turn carries the movement upward. Clothing reacts to the mounting force while the character stays composed.
7. Low face-and-chest view: the character raises the chin and broadens the stance, presenting the growing power beyond the shoulders. Keep the confident face clear.

7-10s, shots 8-10. Compression:
8. Low foot detail: a deliberate heavy step sets a wider stance and sends dust jumping. The grounded plant visibly intensifies the power around the ankles.
9. Medium three-quarter: both hands close and draw toward the ribs, gathering the power by choice. A fast tight orbit catches the gathering force; the torso stays upright.
10. Brief locked face close-up: direct eye contact and a small, assured chin lift. Hold the charged moment with a challenging stare. Music and energy sound dip almost silent.

10-13s, shots 11-14. Eruption:
11. Low chest-up: both arms drive outward in one decisive command. The chosen power erupts violently from the body exactly with the gesture; a sharp camera recoil lands with the release. A short, deliberate wordless shout punctuates it.
12. Tight forearm and open hand: the force bursts past the fingers while the character calmly maintains the directing hand's angle. Continue the same release, retaining its appearance and direction.
13. Low medium view: the eruption clears a broad area of dust around the planted feet and lashes clothing outward. The cleared floor remains exposed as the displaced dust travels away.
14. Face and shoulders: the character's lasting powered-up signature becomes clearly readable as the burst clears. The character meets the lens with an effortless, challenging stare, unaffected by their own force.

13-15s, shot 15. Dominance:
15. Cut to medium and retreat fast, reaching full body by 14s. Reveal the empowered character inside the broad dust-cleared area, the lasting power signature clearly active around the complete silhouette. In the final second, the character takes one short, assured step: the surrounding dust is pushed farther away before the foot lands, showing the power now moving with them under effortless control. Keep the full body and environmental response readable together. End with direct eye contact and the powered-up state intact.

Sound: driving bass pulse and accelerating muted drums beneath breath, tense fabric and heavy footfalls. Near-silence in shot 10, then one deep release impact with a sustained sound matching the chosen power. Keep music underneath, with forward momentum through the ending. No dialogue, lyrics, text, overlays, additional characters.`,
  },
  {
    id: "daai-swiss",
    title: "瑞士国际主义双拼",
    kicker: "Swiss Style",
    excerpt: "上半截是原图主体。下半截用网格、留白、红黑白把它重新设计成一张海报。",
    medium: "image",
    tags: ["风格系统", "转绘", "海报"],
    style: "上下双拼风格转译",
    creatorId: "daai",
    sourceUrl: "https://x.com/daaihq/status/2101289125957828623",
    covers: ["/covers/daai-swiss.jpg", "/covers/daai-swiss-b.jpg"],
    model: "GPT Image · 竖版 1:1+1:1",
    aspect: "3/4",
    featured: true,
    date: "2026-09-19",
    notes: "系列共用同一骨架：上半原图提炼，下半风格重构。换风格只改下半段的设计史关键词。",
    prompt: `创作一张竖版上下双拼风格的完整插画，画布严格为纵向构图，上下各占 1:1。整体是一张具有现代平面设计感的上下双拼作品，上下部分必须围绕同一个主体展开，形成“原图主体 → 瑞士国际主义风格重构”的关系。

上半部分：
以上传的原图作为唯一主体参考来源，自动识别并提取原图中的人物、猫、狗或其他常见宠物主体，重点保留主体本身，不把建筑和复杂环境作为主要内容。尽量保留人物或宠物的关键识别特征，包括脸型、五官、发型、毛色、花纹、服饰、配件、年龄感与气质。背景适度简化，主体清晰完整，构图稳定，留白理性，呈现简洁克制的原图提炼效果。

下半部分：
将同一个主体转化为「Swiss Style 瑞士国际主义」视觉语言的完整插画。核心风格特征：严格网格、无衬线视觉、理性留白、红黑白等克制配色。整体原则：采用清晰的几何结构、平面块面与秩序化构图，控制层级和留白。构图采用单一明确主体或一个清晰场景，视觉中心稳定，主体完整不被裁断，背景适度简化并保留呼吸感；线条、色块、明暗、材质和纸面纹理必须服务于同一风格，不混入无关画风。主体应自然融入瑞士风格的理性网格体系中，可通过秩序化分区、精确对齐、克制配色和现代平面编排感来强化风格。画面自然、有手作感和可识别的风格特征，避免 AI 常见的过度光滑、无意义细节堆砌和随机装饰。

整体要求：
上下主体保持明显对应关系，下半部分一眼能看出是上半部分同一个人或同一只宠物的瑞士风格重构。除非主题明确要求，否则不生成文字、Logo、水印、边框、UI，不做多图拼接。`,
  },
  {
    id: "daai-bauhaus",
    title: "包豪斯双拼",
    kicker: "Bauhaus",
    excerpt: "圆、方、三角。把人物和宠物拆成基础几何，像复古设计杂志内页。",
    medium: "image",
    tags: ["风格系统", "转绘", "海报"],
    style: "上下双拼风格转译",
    creatorId: "daai",
    sourceUrl: "https://x.com/daaihq/status/2101457754443641013",
    covers: ["/covers/daai-bauhaus.jpg", "/covers/daai-bauhaus-b.jpg"],
    model: "GPT Image · 竖版 1:1+1:1",
    aspect: "3/4",
    date: "2026-09-19",
    prompt: `创作一张竖版上下双拼风格的完整插画，画布严格纵向分为上下两个区域，上下各占 1:1。整体形成“原图主体 + 包豪斯风格重构”的双拼作品，上下有强烈对应关系。

上半部分：
以上传原图作为唯一主体参考来源，自动识别人物、猫、狗或其他常见宠物主体，重点提取人物/动物，不将建筑与复杂环境作为主体。保留主体关键特征，包括人物脸型、五官、发型、服饰、年龄感、配件，或宠物的品种、毛色、花纹、耳朵、体型等。背景适度简化，主体完整清晰，具有干净直接的原图提炼感。

下半部分：
将同一个主体转化为「Bauhaus 包豪斯」视觉语言的完整插画。核心风格特征：圆方三角等基础几何、原色体系、功能主义和非对称构成。整体原则：采用清晰的几何结构、平面块面与秩序化构图，控制层级和留白。构图采用单一明确主体或一个清晰场景，视觉中心稳定，主体完整不被裁断，背景适度简化并保留呼吸感；线条、色块、明暗、材质和纸面纹理必须服务于同一风格，不混入无关画风。让主体轮廓、服饰关系、身体动态与包豪斯的圆、方、三角构成相结合，强调功能性、结构感和鲜明但克制的原色系统。画面自然、有手作感和可识别的风格特征，避免 AI 常见的过度光滑、无意义细节堆砌和随机装饰。

整体要求：
上下主体必须是同一个主体，下半部分不是另起炉灶，而是对上半部分主体的包豪斯式再设计。除非主题明确要求，否则不生成文字、Logo、水印、边框、UI，不做多图拼接。`,
  },
  {
    id: "daai-brut",
    title: "原生艺术双拼",
    kicker: "Art Brut",
    excerpt: "稚拙、粗粝、直接。下半截用未经学院修饰的线条把主体画回去。",
    medium: "image",
    tags: ["风格系统", "转绘"],
    style: "上下双拼风格转译",
    creatorId: "daai",
    sourceUrl: "https://x.com/daaihq/status/2101117661476491768",
    covers: ["/covers/daai-brut.jpg", "/covers/daai-brut-b.jpg"],
    model: "GPT Image · 竖版 1:1+1:1",
    aspect: "3/4",
    date: "2026-09-19",
    prompt: `创作一张“上下双拼构图”的竖版插画作品，画布纵向排版，上下区域高度比例严格为 1:1，整体为同一张完整作品，不是两张独立图片拼贴。

上半部分：
使用用户上传的原图作为主体来源，自动识别原图中的主要人物、猫、狗或其他常见宠物，并将其作为唯一核心主体进行呈现。重点提取主体本身的可识别信息，包括人物的脸型、五官、发型、发色、肤色、年龄感、服饰、配饰、体态、气质，或者宠物的毛色、花纹、体型、耳朵形状、眼睛特征、神态等。
上半部分应以“原图主体展示”为核心，尽可能保持真实、自然、清晰的视觉状态，可根据双拼画面的需要做适度裁切与构图优化，但不要改变主体身份。
如果原图中带有建筑、室内空间、街景或其他复杂环境元素，这些内容只作为辅助背景弱化处理，不作为重点提取对象；建筑风格不用专门保留。
上半部分整体要求主体明确、完整、不被裁断，画面干净，视觉中心稳定，主要任务是清楚展示“用户上传的原始主体是谁”。

下半部分：
以下半部分对上半部分同一主体做风格化转译，必须仍然是同一个人物或同一只动物，保持核心辨识度，不得变成无关的新角色。
创作一张「Raw Art / Art Brut 原生艺术」视觉语言的完整插画。核心风格特征：未经学院化修饰的原生线条、粗糙形体、直接符号和不规则色块。整体原则：允许夸张、扭曲和不规则笔触，以强烈线条、墨迹和情绪张力制造视觉冲击。构图采用单一明确主体或一个清晰场景，视觉中心稳定，主体完整不被裁断，背景适度简化并保留呼吸感；线条、色块、明暗、材质和纸面纹理必须服务于同一风格，不混入无关画风。画面自然、有手作感和可识别的风格特征，避免AI常见的过度光滑、无意义细节堆砌和随机装饰。除非主题明确要求，否则不生成文字、Logo、水印、边框、UI，不做多图拼接。

整体补充要求：
上下两部分必须明显对应同一主体，形成“原图主体 / 风格转译主体”的上下对照关系。下半部分要体现原生、直接、未经修饰的粗粝艺术感，但不能失去主体辨识度。整体保持手工、质朴、原始、有冲击力的视觉语言，不要做成精致商业插画。不要额外生成说明文字、标题、Logo、水印、UI、边框。`,
  },
  {
    id: "cheng-gta",
    title: "病人 GTA",
    kicker: "Hospital Stealth",
    excerpt: "枕头当替身，布草车当掩护，轮椅当载具。任务：逃出医院，别被抓回去打针。",
    medium: "video",
    tags: ["动作", "日常"],
    style: "第三人称潜行游戏",
    creatorId: "chengzi",
    sourceUrl: "https://x.com/Chengzilhy/status/2099679295006536062",
    covers: ["/covers/cheng-gta.jpg", "/covers/cheng-gta-b.jpg"],
    model: "GPT-6 Astra + Seedance 2.5 · 16:9 · 30s",
    aspect: "16/9",
    featured: true,
    date: "2026-09-15",
    notes: "Image1 是女主唯一身份。0–27 秒连续长镜头，27 秒唯一硬切。HUD 必须是简体中文。",
    prompt: `【参考素材定义】

Image1＝女主唯一人物身份与造型参考。
严格保持图中同一成年女性的脸部、五官、肤色、浅金色长直发、齐刘海、深蓝花朵发夹、耳饰、浅蓝颈带与身材比例。

全程保留浅蓝白竖条纹长袖短裙式病号服，白色翻领、蓝色滚边、收腰、蕾丝袖口与裙摆；腿部白色交叉缠绕带、带浅蓝蝴蝶结的白色毛绒腿套、浅蓝露趾平底拖鞋。
角色卡各视图为同一人，仅提取人物外观。

【输出规格与风格】

30秒，16:9横屏，高清、高细节，真人实拍质感的AAA第三人称潜行游戏。自然真实速度，节奏清楚、利落、干脆。

0—27秒连续长镜头，27秒唯一一次硬切，最后3秒固定双人镜头。

【场景与空间】

明亮上午的现代医院。连续路线：

病床左侧→病房门→护士站外走廊→柜台尽头墙角→短走廊→电梯。

病床右侧留护士通道；左侧半拉床帘遮住床边，通向房门。病房外紧邻护士站。墙角停着一台空手动轮椅，转弯后约四米为电梯。

轮椅：黑色坐垫、金属车架、带手推圈的大后轮、小前轮与脚踏板。

【配角区分】

病房护士：黑色盘发、浅粉护士服。
护士站护士：深棕短发、浅蓝护士服，坐在柜台后。
巡查护士：黑色短发、白色护士服，手拿文件夹。
布草工作人员：中年男性、灰色工作服，推装满折叠床单的高布草车。
老爷爷：灰白短发、圆框眼镜、蓝白病号服，光脚，怀抱深蓝拖鞋，始终位于电梯内部一侧。

【摄影机与人物调度】
摄影机在女主右肩后约1.5米，47°视场角。蹲下时降低，坐轮椅时保持坐姿肩高；转弯带柔和跟随延迟，展示空间时平滑放宽至63°。
摄影机沿真实通道移动，始终交代女主、遮挡物与医护的位置。进入电梯时自然缩短跟拍距离。

【0—5秒｜替身脱身】

首帧女主坐在床沿。门外护士说：“十二床，打针了。”

女主立刻把枕头塞入被子上半部，拉起被角，堆出蒙头侧躺的轮廓，自己从床左侧下床蹲低。

护士进入，从床右侧走向床头。女主借左侧床帘遮挡，沿床侧移向门口。

摄影机跟她经过帘边，短暂拍到护士掀被子、露出枕头。第五秒女主已跨出病房。

HUD：【替身已部署】→【成功脱身】

【5—10秒｜移动掩护】

女主出门，看见护士站护士抬头。

工作人员正推高布草车从她身旁经过。女主立即蹲到车身背向护士站的一侧，身体低于车身上沿，与推车同速小步跟随。

布草车始终挡在女主与护士之间。摄影机降到侧后方，拍清她跟车的动作及上方可见的护士站。

到柜台尽头，她停下缩入墙角，布草车继续前行。

HUD：【移动掩护】→【通过护士站】

【10—15秒｜轮椅伪装】

女主从墙角探头，发现巡查护士走来。

她立即坐进旁边空轮椅，双脚放上脚踏板，坐直，双手叠在腿上，装作安静等候。

护士经过时看她一眼，她轻轻点头，露出乖巧微笑。

护士头顶出现琥珀色问号，随后消失，继续走远。

HUD：【已获取载具：轮椅】→【检查通过】

【15—24秒｜轮椅逃脱】

护士经过墙角后，女主看回前方，俯身连续推动两侧手推圈，加速离开。

摄影机回到轮椅右后方。转弯时，她左手推进，右手轻握手推圈减速，完成连续弧线右转。

前方电梯门已打开。她推动轮椅驶入，随后握住手推圈摩擦减速，停在轿厢中部偏右。摄影机连续跟入，取景朝向女主和侧壁。

HUD：【前往电梯】→【抵达电梯】

【24—27秒｜逃脱成功】

轮椅与摄影机完全进入后，电梯门关闭。

女主回头看门合拢，放松肩膀，靠回椅背，轻轻呼气，露出得意微笑。老爷爷此时处于画外。

HUD：【逃脱成功】
下行：【潜行等级：S】

【27—30秒｜发现队友】

27秒硬切。摄影机位于电梯门内侧，朝内拍固定双人中景，清楚容纳坐着的女主、老爷爷的脸和怀中拖鞋。

老爷爷低头问：“你也怕打针？”

女主先瞟拖鞋，再抬头看他，笑着点头。
HUD：【发现队友】
下行：【双人模式已开启】

保持两人心照不宣的表情至结束。

【HUD视觉布局】

经典GTA式平面界面，粗黑描边、简体中文粗体、半透明黑底，四周留3%边距。

左上操作面板：【L 移动】【R 视角】【□ 互动】【○ 潜行】；驾驶时最后一行改为【○ 刹车】。

右上黑框白色拳头图标，旁边绿色生命条，下方细耐力条与绿色金额【$000012680】。
左下粗黑框方形灰白医院地图，边长约画面高度22%，白色玩家箭头、黄色电梯路线、目标点和医护视野锥实时更新。

顶部中央金棕色半透明通知横幅，黄色主行、白色副行，按剧情每次显示一组。

底部中央黑色任务条，开场显示【躲避打针，抵达电梯】，随后淡出。

【声音与真实感】

中文对白，无对白字幕。脚步、衣料、推车、轮椅、电梯声清晰；低音量极简潜行电子乐贯穿，结尾加入队友加入提示音。

真实毛孔、发丝、织物、金属反光与接触阴影。上午窗光搭配柔和补光，曝光连续平滑。

【强制约束】

只生成一位女主，身份、发型、服装与配饰全程一致，不生成角色卡排版或白底。

前5秒完成病房脱身，5—10秒通过护士站，严格保持剧情顺序。

0—27秒无切镜、跳时、瞬移；27秒仅硬切一次，最后3秒镜头完全固定。

布草车由工作人员推动，女主蹲行跟随；车身始终遮挡护士视线，人物不穿模。

女主坐上轮椅后保持乘坐至结束；轮椅由手脚驱动，不自动行驶、不漂移。

电梯门在轮椅与摄影机进入后关闭。老爷爷提前位于轿厢内，切镜后才进入画面。

医护正常工作，不追打女主。所有对白为中文，HUD文字为简体中文。
HUD固定于屏幕，切镜前后位置大小一致；无播放控件、系统水印、慢动作或额外剧情。`,
  },
  {
    id: "cheng-bridge",
    title: "断桥对决",
    kicker: "Epic Duel",
    excerpt: "巨剑、白骨机甲、云海断桥。三十秒势均力敌，最后一劈打进核心。",
    medium: "video",
    tags: ["动作", "东方", "奇幻"],
    style: "国风黑暗史诗战斗",
    creatorId: "chengzi",
    sourceUrl: "https://x.com/Chengzilhy/status/2100764224725397942",
    covers: ["/covers/cheng-bridge.jpg", "/covers/cheng-bridge-b.jpg"],
    model: "Seedance 2.5 · 16:9 · 30s",
    aspect: "16/9",
    date: "2026-09-18",
    notes: "三张参考：图片1女主，图片2悬空古桥，图片3白骨昆虫机甲。禁止单方面碾压。",
    prompt: `【Reference】
图片1＝女主唯一人物身份与服装参考。
图片2＝唯一场景参考：悬空残破东方古桥、云海深渊、断崖、残栏、巨型锁链、远处古建筑。
图片3＝唯一敌人：白骨昆虫机甲，龟裂白骨甲、黑色机械组织、双镰、多肢、触须、残翼、胸腔暖金核心。

严格保持以上角色、服装、敌人、武器、场景一致，全程不换人、不换武器、不切换地点。

30s，16:9，CG国风黑暗奇幻史诗战斗，8K HDR，60fps。纯动作流，无台词、无字幕、无UI、无慢动作、无定格。

女主＝黑红金东方女剑客，重剑轻用、瞬步换位、贴身压迫、借力打力、精准破防。巨剑挥动产生高密度红金液态剑气、暗红流光、金火星。

敌人＝白骨昆虫机甲，双镰俯冲、多肢夹击、桥侧攀附、空中折返、胸甲护核、核心过载暴走。高速移动产生黑白机械流体、冷白碎火、电弧与暗金核心光。

战斗必须势均力敌，双方持续反击，禁止单方面碾压。

0-3s：
第一秒直接开打。机甲从桥侧右上高速俯冲，双镰交叉斩头颈；女主拖巨剑冲锋，贴地滑步横斩。巨剑与双镰正面硬碰，强白闪光＋三层冲击涟漪＋环状冲击波，石板炸裂。双方贴身连续反斩、格挡、回劈、扫腿，眼神始终锁死。

3-10s：
女主红金瞬步连续横斩、斜切、旋身回斩；机甲双镰连续格挡，踏护栏侧翻，倒挂桥侧滑行后重新扑回桥面。二者从桥面打到桥栏、桥侧和半空。女主蹬断石柱跃起，半空格挡第三肢突刺，转体巨剑反劈，削碎机甲肩侧骨甲。桥栏和石柱持续崩裂。

10-18s：
双方0.2秒快速凝能后正面对撞，红金剑气与黑白冲击脉冲炸开，巨链剧烈震荡。机甲突然改变节奏，以双镰＋第三肢＋长尾同时进行上中下三路压制。女主连续格挡但巨剑短暂被锁住，被逼至断桥缺口，脚下桥体大片塌陷，单膝滑向深渊。

18-22s：
女主抓住垂落巨链侧荡躲过贯刺，鞋尖蹬桥壁高速反弹回桥面。她假装正斩胸甲，诱使机甲收拢防御，瞬间发现左肩连接件弱点。重压胸甲→低身滑入左侧→斜上回斩，击碎左肩连接件，再短促横斩翼根联动位。骨甲爆裂，机甲动作首次紊乱。

22-25s：
机甲核心过载暴走，胸腔暖金光暴涨，残翼高频折返，以双镰、长尾、俯冲连续围杀。镜头贴女主背后高速追踪。双方完成暴雨般8连击：横斩→格挡→反刺→回劈→扫尾→偏闪→上挑→震退。女主瞬步、低身滑闪、借护栏反弹、空中回身化解攻击。铁链狂甩，碎石持续坠入云海。

25-28s：
女主借格挡反冲跃至高空，巨剑仅0.2秒凝聚极高密度红金能量。机甲从下方全力仰冲，双镰合拢。双方即将碰撞瞬间，女主0帧横移消失，连续从左后、右上、侧后进行三维高速穿梭斩击，红金残影形成多方向空间剑轨，把机甲核心防线彻底撕开。

28-30s：
俯瞰旋转高潮镜头。所有红金剑轨同时向机甲胸腔核心收束，形成巨型三维半月剑阵＋球状能量漩涡＋环形冲击波。女主从高空全力重劈，传奇巨剑正中暴露核心。

最强白光爆发。

白骨外甲大面积崩裂，黑白机械流体、冷白碎火向外爆散，双镰脱力坠落，机甲半跪失衡，核心逐渐熄灭。

女主重落桥面，震出巨大裂纹，单手持巨剑站定。黑发、裙摆、红色飘带被强风扬起，身后断桥持续崩塌，巨链震荡，碎石坠入翻涌云海。最后女主冷冷抬眼结束。

【物理与生命感】
每次攻击必须有屈膝、拧腰、转胯、重心变化和受击卸力。
发丝、裙摆、红布、触须、翼膜必须持续高速响应动作和风压。
命中必须产生白闪、冲击波、位移、碎甲、碎石。
场景破坏永久保留：护栏崩裂→石板开缝→桥面塌陷→石柱断裂→巨链震荡→断桥持续掉块。

流体55%＋粒子25%＋烟尘雾气碎屑20%。

禁止：血腥、断肢、斩首、穿透、UI、文字、水印、慢动作、定格、动作停顿、站桩对砍、单方面碾压、武器变形、角色变化、机甲变成普通机器人或虫子、穿模、武器穿身、动作无重心、面瘫、衣物静止、特效突然消失、场景自动复原、多余角色。`,
  },
  {
    id: "ege-finance",
    title: "金融运动图形",
    kicker: "Fintech Motion",
    excerpt: "黑卡转出数字，数字印成收据，收据折成柱状图，柱状图碎成硬币，硬币再变回卡。",
    medium: "video",
    tags: ["信息设计"],
    style: "金融动态图形",
    creatorId: "ege",
    sourceUrl: "https://x.com/egeberkina/status/2100147377671655632",
    covers: ["/covers/ege-finance.jpg", "/covers/ege-finance-b.jpg"],
    model: "MiniMax H3 · 16:9 · 15s",
    aspect: "16/9",
    date: "2026-09-16",
    prompt: `15-second hyper-stylized financial motion graphics sequence.

0–2s: A minimal black credit card rotates slowly in empty space. Embossed numbers catch the light.

2–4s: Camera pushes extremely close into the card numbers. The digits detach from the surface and begin floating in three-dimensional space. Hundreds of numbers stream past camera like financial data.

4–6s: The numbers align into columns and suddenly print themselves onto an impossibly long receipt. Camera races downward along the receipt as transactions rapidly appear.

4.50
12.99
48.20
127.00
TOTAL

6–8s: The receipt folds upward like paper architecture. Its printed numbers become vertical bars, transforming the paper into a physical financial graph.

8–10s: Graph bars rise and fall dramatically. A thin line races across their tops while percentages and tiny data labels appear.

10–12s: One graph point shoots upward and becomes a spinning metallic coin.

12–14s: Hundreds of coins rain downward, bounce, stack and organize themselves into the exact rectangular proportions of the original credit card.

14–15s: The coin structure instantly becomes the black card again.

Premium financial identity, tactile paper simulation, kinetic typography, metallic coins, elegant data visualization, satisfying physics, seamless object transformations, luxury fintech commercial meets experimental motion design.`,
  },
  {
    id: "ege-brutal",
    title: "粗野派物件",
    kicker: "Brutalist Object",
    excerpt: "把日常物件浇进带锈钢筋的清水混凝土。没有底座，只有物件本身。",
    medium: "image",
    tags: ["极简", "风格系统"],
    style: "粗野派产品摄影",
    creatorId: "ege",
    sourceUrl: "https://x.com/egeberkina/status/2097690739593338949",
    covers: ["/covers/ege-brutal.jpg", "/covers/ege-brutal-b.jpg"],
    model: "Image model · 白底产品摄影",
    aspect: "16/9",
    date: "2026-09-09",
    notes: "把 [OBJECT] 换成 DualSense、AirPods Max 等。作者下一步用 LTX-2.5 把两件混凝土物件做爆炸重组，不是简单 morph。",
    prompt: `A brutalist industrial design version of [OBJECT], constructed entirely from raw cast concrete with rough chipped edges and embedded rusted steel rebar grid partially exposed through the structure of the object itself.
The object is fully formed from heavy brutalist materials, with porous concrete texture, cracks, aggregate stones, weathered imperfections, and exposed reinforcement steel emerging naturally from the surface. Sections of the object reveal internal rusty metal grid integrated into the concrete body.

No concrete slab, no base block, no pedestal, no mounting surface, only the object itself made from brutalist concrete and exposed steel reinforcement.

Minimalist product photography, clean white seamless studio background, centered composition, soft diffused studio lighting, subtle natural shadows beneath the object.

hyper-realistic materials, ultra detailed concrete texture, industrial sculpture aesthetic, brutalist product design, contemporary gallery collectible object, high resolution photography, 8k`,
  },
  {
    id: "yichen-merch",
    title: "品牌周边系统",
    kicker: "Merchandise System",
    excerpt: "只丢一张 Logo。色彩、图案、刺绣、包装和二十类周边要从同一套视觉语言长出来。",
    medium: "image",
    tags: ["电商", "风格系统", "信息设计"],
    style: "品牌周边提案板",
    creatorId: "yichen",
    sourceUrl: "https://x.com/gengdaJ/status/2097696046260609314",
    covers: ["/covers/yichen-merch.jpg"],
    model: "GPT Image 2.5 · 4:3",
    aspect: "16/9",
    date: "2026-09-09",
    notes: "Logo 是唯一输入。不要做成白杯贴标。作者同一帖还公开了三参考电商图、单变量 A/B 和色调迁移，此处只收周边系统。",
    prompt: `请以【品牌 Logo 参考图】作为唯一核心视觉输入，为该品牌自动设计并输出一整套完整、统一、可真实生产落地的品牌周边产品系统。

【唯一输入】
Image A = 【品牌 Logo 参考图】

除 Logo 外，不需要用户额外提供品牌名称、配色、风格、IP设定或产品方向。
请你自行从 Logo 中分析并推导完整的品牌视觉语言。

【第一步：自动解析 Logo】
请先从【品牌 Logo 参考图】中提取并理解：Logo 的核心图形元素、主体轮廓与识别特征、主色/辅助色/点缀色、具有代表性的局部元素、线条语言、圆润/锐利/几何/手绘/卡通/极简属性、可能传递的情绪与性格，以及哪些元素适合转化成图案、Icon、Badge、Pattern、刺绣、印花、压纹、吊牌、包装纹样。
不要机械地把 Logo 贴到所有商品上。核心目标是把 Logo 扩展成一套真正完整的品牌视觉系统。

【第二步：建立品牌视觉系统】
基于 Logo 自动建立：主品牌色、辅助色、中性色、高亮色、品牌图形语言、辅助图形、图标系统、重复 Pattern、Logo 局部裁切图案、品牌标签、小型 Badge、刺绣版本、单色版本、反白版本、小尺寸 Logo 版本。
所有衍生设计都必须让人明显感受到它们属于同一个品牌，但不要让所有产品看起来完全一样。需要形成：主 Logo + 次级图形 + 局部元素 + Pattern + 文字排版 + 色彩系统 这样的层级关系。

【第三步：自动设计完整周边系列】
请至少设计以下类别：

服装 Apparel：T-Shirt、Hoodie / 卫衣、棒球帽 / 鸭舌帽、袜子
包袋 Bags：Canvas Tote Bag、小型收纳包 / 化妆包
办公 Stationery：Notebook、Pen / Pencil、Sticker Sheet
数码 Tech：手机壳、Laptop / Tablet Sleeve、Desk Mat / Mouse Pad
生活 Lifestyle：Mug / Coffee Cup、Water Bottle / Tumbler、Umbrella 或其他适合该品牌的生活用品
收藏 Collectibles：Acrylic Keychain、Enamel Pin、Mascot / Logo Plush Toy 或软质公仔
品牌包装 Branding：Shopping Bag、Packaging Box、Hang Tag / 吊牌、Thank You Card / 品牌卡片

如果 Logo 本身非常适合开发 IP，可以额外增加毛绒公仔、摆件、冰箱贴、手机挂件、徽章、Mini Figure、盲盒、卡套、行李牌。如果 Logo 不适合作为角色，则不要强行拟人化。

【第四步：每件产品必须采用不同的 Logo 应用方式】
不要简单复制粘贴同一个 Logo。不同产品可以分别采用：完整 Logo、局部裁切、轮廓、单色 Logo、刺绣 Logo、小尺寸胸标、Oversized Graphic、Repeat Pattern、Icon、Badge、Logo Monogram、局部纹理、边角装饰、吊牌、内标、Side Label、Packaging Pattern。

例如：T-Shirt 用大型主视觉印花；Hoodie 用小胸标 + 背部大型图形；帽子适合刺绣或简化 Logo；Tote Bag 适合 Logo + 辅助图案；手机壳可用局部放大或重复 Pattern；贴纸拆解 Logo 中的不同视觉元素；钥匙扣沿 Logo 轮廓做异形结构；毛绒玩具仅在 Logo 本身是人物/动物/IP 时立体化其核心形象。

【第五步：设计风格要求】
最终设计必须具有高完成度、商业品牌感、潮流感、年轻化、高辨识度、可真实生产、统一但不单调、有完整品牌系统感。
整体视觉参考：品牌官方 Merchandise Collection、潮流品牌 Lookbook、品牌 VI 延展设计、高端电商品牌周边、Creative Brand Guideline、Merchandise Styling Board。
不要做成廉价礼品定制店效果。不要只是“白色杯子 + Logo”“白色衣服 + Logo”“白色袋子 + Logo”。必须有真正的视觉设计。

【第六步：Logo 忠实度】
【品牌 Logo 参考图】必须保持高度可识别。
禁止：随意改变 Logo 主体结构、改变核心角色身份、改变关键轮廓、把 Logo 变成完全不同的角色、擅自改变 Logo 中已有文字、添加不存在的品牌名称、错拼 Logo 中的文字。
如果原 Logo 中包含文字，尽可能保留原文字内容与拼写。如果 Logo 中不存在品牌文字，不要擅自创造新的品牌名称。可以使用无语义的辅助排版、小型图形标签、编号、系列名，但不得让这些元素替代原 Logo。

【第七步：展示方式】
最终生成一张横向 4:3 的高完成度「品牌完整周边系列设计提案 / Brand Merchandise Collection Board」。
画面应像专业设计公司向品牌方提交的正式提案。
推荐构图：顶部展示放大的原始 Logo 或 Logo 核心元素；中间主体按 APPAREL / BAGS / STATIONERY / TECH / LIFESTYLE / COLLECTIBLES 分类整齐展示；底部展示包装、Pattern、颜色系统、Logo 小型应用。

【第八步：产品 Mockup 要求】
所有周边必须使用真实、精致的产品 Mockup。产品比例真实、材质真实、印刷方式合理、刺绣位置合理、Logo 尺寸合理、包装结构合理、光影自然、商品摄影质感、电商品牌视觉、Studio Lighting、Premium Product Mockup。
不要生成奇怪结构的杯子、无法穿着的服装、结构畸形的包、不合理的钥匙扣、不能生产的包装结构、Logo 漂浮、印花跨越产品边缘、图案变形。

【第九步：颜色】
周边整体配色必须优先来源于【品牌 Logo 参考图】。自动提炼 Primary / Secondary / Accent / Neutral Color。不要擅自换成与 Logo 无关的主色调。可以加入白、黑、米、灰等中性色帮助提升商品质感。

【第十步：最终画面质量】
Professional brand merchandise presentation board, premium product mockups, creative merchandise collection, cohesive visual identity, realistic materials, commercial branding, high-end editorial layout, clean composition, studio product photography, brand identity extension, creative direction board, high detail, professional graphic design, realistic manufacturing, premium lifestyle brand, 4:3 horizontal composition.

【最终目标】
最终画面必须让人感觉：这不是“Logo贴在一堆商品上”，而是设计师真正基于【品牌 Logo 参考图】建立了一套 Logo → 色彩 → 图形语言 → Pattern → IP / Icon → 产品设计 → 包装 → 周边 的完整品牌 Merchandise System。
只需要看到这一张图，就能够理解这个品牌如果正式推出官方周边，整套产品会是什么样子。`,
  },
  {
    id: "yichen-board",
    title: "一张图长出故事板",
    kicker: "5×5 Storyboard",
    excerpt: "不要换角度裁同一张图。把参考图当成关键瞬间，向前向后推出二十五格连续电影。",
    medium: "image",
    tags: ["信息设计", "转绘"],
    style: "电影分镜网格",
    creatorId: "yichen",
    sourceUrl: "https://x.com/gengdaJ/status/2097696066842071215",
    covers: ["/covers/yichen-board.jpg", "/covers/yichen-board-b.jpg"],
    model: "GPT Image 2.5 · 5×5 网格",
    aspect: "4/5",
    date: "2026-09-09",
    notes: "原帖有二十二条完整规则。收录时按结构压缩，关键约束保留：同一人物、同一世界、连续动作、不同镜头。",
    prompt: `请根据我提供的【一张参考图 Image A】，自动将其扩展为一套完整、连续、具有明确叙事逻辑和电影镜头语言的故事板。

【Image A = 核心视觉 / 人物 / 场景 / 世界观参考图】

最终将全部分镜统一排版在一张【5×5 / 4×4 / 3×3】规则网格故事板中。
5×5 = 25 个连续镜头；4×4 = 16；3×3 = 9。默认 5×5。
如无额外说明，根据 Image A 自主完成故事构思、镜头设计、动作发展、场景扩展和视觉统一，不需要用户另给剧本。

一、核心任务
不要把 Image A 做成不同角度、不同裁切、不同景别的重复图片。以它作为故事世界中的一个关键瞬间，向前和向后合理推演，自动创作一段完整的小型视觉故事。
主动判断：主体是谁、正在做什么、在什么地方、这一刻之前和之后最自然的发展是什么，以及如何形成「开始 → 发展 → 转折 → 高潮 → 结果」。最终应像从一段真实电影、广告、短片或 MV 中截取的关键帧，而不是互不相关的独立图片合集。

二、Image A 是视觉锚点
如果存在人物，必须保持同一个人物、相同五官、发型、发色、年龄感、肤色、身材、服装、鞋子、首饰、妆容与气质，不得换脸或换成相似的人。产品、动物、汽车、建筑等核心主体同样保持外形、颜色与设计一致。
地点类型、建筑、室内、道具、时间、天气、灯光、色温、色彩体系和摄影质感应属于同一个世界。允许进入相邻空间，但不能无理由切换城市、时代、装修或世界观。

三、不要把 Image A 机械当作第一格
先判断它最适合作为开场、建立、中段、关键动作、转折、高潮、情绪还是结尾，再向前向后补全。故事围绕 Image A 建立。

四、故事结构
建立环境约 15%–20%：时间、地点、主体出现、初始动作。
事件开始约 20%：发现、行动、产品被使用、目标出现。
事件发展约 25%：位置、行为、镜头、情绪与互动逐步升级，避免连续相同姿势。
转折 / 高潮约 20%：核心动作、情绪爆发、产品英雄镜头或视觉奇观，可增加近景和特写。
结尾余韵约 15%–20%：完成、离开、呼应开头。最后一格不能像被截断。

五、连续性与可动画化
上一格必须能过渡到下一格。禁止瞬移、换装、换脸、道具消失、门无故开关、跳轴、光线无故变化。
动作要可动画化：看到杯子 → 伸手 → 手靠近 → 握住 → 拿起 → 喝水，而不是下一格已经喝完、再下一格突然站到门外。

六、镜头语言
混合超远景、全景、全身、中景、近景、特写、过肩、主观、仰拍、俯拍、平视、顶视、侧拍、背拍、跟拍、推镜、拉镜。景别要有节奏，不要连续多格同一构图。每个镜头至少在时间、动作、情绪、人物位置、机位、距离、视角、信息之一上产生明确变化。禁止靠轻微放大或裁切凑格子。

七、表情、产品与光线
表情应渐进变化，不要每格都看镜头，也不要每格都夸张。若 Image A 含产品，保持造型、比例、颜色、Logo 与材质，并让产品参与叙事，但不要做成 25 张相同商品图。除非剧情明确表现时间流逝，否则保持同一套主光、阴影、色温和天气。

八、排版
等距网格，格子大小完全一致，从左到右、从上到下阅读。不要杂志拼贴，不要某一格做成超大主视觉。默认不加对白气泡、解释文案和水印。如能准确生成数字，可在角落加极小的 01、02、03……；无法保证准确则不加。

九、最终原则
一个故事，而不是多张随机图。一个世界，而不是多个场景拼接。同一个人物，而不是多个相似人物。连续动作，而不是大量摆拍。不同镜头，而不是重复裁切。明确叙事，而不是纯视觉展示。专业分镜，而不是普通九宫格照片。`,
  },
];
