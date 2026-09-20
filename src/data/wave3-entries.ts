import type { PromptEntry } from "./catalog";

export const wave3Entries: PromptEntry[] = [
  {
    id: "geek-hamster",
    title: "鼠鼠不吃压力",
    kicker: "Omni Flash",
    excerpt: "砖墙、烟、绿罐。十秒一镜，最后把脸推到镜头前，眼神湿着。",
    medium: "video",
    tags: ["日常", "治愈"],
    style: "拟人微距一镜",
    creatorId: "geekcat",
    sourceUrl: "https://x.com/GeekCatX/status/2100857151040475507",
    covers: ["/covers/geek-hamster.jpg"],
    model: "Omni Flash · 9:16 · 10s",
    aspect: "9/16",
    date: "2026-09-18",
    prompt: `Use the reference image as the initial visual state. Create a 10-second, vertical 9:16 photorealistic sequence in one continuous shot. Preserve the hamster’s identity, fur markings, body proportions, brick-wall setting, natural lighting, cigarette, and opened green beverage can.

0–2 seconds:
The hamster briefly holds the cigarette against its mouth and slightly narrows its eyes. It lowers the cigarette-holding forepaw toward the can, releasing a small puff of pale gray smoke from its mouth. The smoke drifts toward screen-right and gradually disperses.

2–3.5 seconds:
A quiet pause. The hamster stays upright, looking slightly upward toward screen-right. Its forepaws remain close to the can. Only subtle breathing, whisker movement, and tiny changes around the eyes and muzzle.

3.5–6 seconds:
The hamster lifts the green can with its forepaws, brings the opened rim to its mouth, and tips its head backward. The can rotates from upright toward nearly horizontal as it drinks. Keep the rim touching the mouth and the paws supporting the can. The cigarette becomes naturally obscured behind the raised can and paws rather than visibly disappearing.

6–7.5 seconds:
The hamster lowers the can while bringing its head forward and turning toward the camera. Simultaneously, the framing smoothly tightens into a frontal facial close-up. The can and paws pass below the bottom edge as the face fills the frame. No cut or abrupt change of viewpoint.

7.5–10 seconds:
Hold on the hamster looking directly into the camera with an understated, subdued expression. Its black eyes are glossy and wet-looking, with small tear-like highlights along the lower eyelids, but no falling tears. Its mouth opens slightly, then settles into a tiny gap. Keep movement minimal: faint muzzle motion, subtle breathing, and delicate whisker movement. End on the nearly motionless, wet-eyed stare against the softly blurred brick wall.

Avoid extra paws, human hands, duplicated props, floating objects, distorted facial features, exaggerated sobbing, smiling, sudden camera jumps, subtitles, and added watermarks.`,
  },
  {
    id: "geek-tunnel",
    title: "画出来的隧道",
    kicker: "MiniMax H3",
    excerpt: "鸟跑进墙上的假隧道。画它的犬却结结实实撞上石头。",
    medium: "video",
    tags: ["日常", "奇幻"],
    style: "卡通物理喜剧",
    creatorId: "geekcat",
    sourceUrl: "https://x.com/GeekCatX/status/2100654359675875635",
    covers: ["/covers/geek-tunnel.jpg"],
    model: "MiniMax H3 · 16:9 · 30s",
    aspect: "16/9",
    date: "2026-09-17",
    prompt: `A roughly 30-second, horizontal 16:9 photorealistic CG animal comedy set in a sunlit red-rock desert. Rust-red sandstone cliffs, a sandy dirt road, scattered boulders, dry shrubs, distant flat-topped rock formations, and a clear blue sky. Strong sunlight creates crisp ground shadows. Realistic fur, feathers, dust, rough stone, and visible paint textures contrast with exaggerated cartoon acting and deliberately impossible visual logic.

The main character is a lean, fox-like gray-brown desert canine with tall pointed ears, a long narrow muzzle, amber eyes, a pale chest, tan legs, a dark grizzled back, and a bushy tail. He uses his forepaws like hands when painting and gesturing, but runs on all fours during the final charge. Keep his appearance consistent throughout.

The second character is a small, fast-running desert bird with brown-and-cream patterned feathers, a raised crest, a narrow beak, a long tail, and thin legs. Its movement is quick and effortless.

The central prop is a false tunnel painted directly onto an unbroken sandstone wall: a large dark-blue arch surrounding a gray road in exaggerated one-point perspective, a narrowing white centerline, and a tiny sky-blue arched exit at the vanishing point. The real white line on the sandy ground visually connects with the painted road.

The essential comic contradiction: the bird can run into the painted tunnel as though it has real depth, but the same painting remains solid rock when its painter attempts to follow. The trickster becomes the victim of his own trick.

[Shot 1] After a momentary black lead-in, a low frontal view reveals the canine gripping an oversized red-handled paintbrush with both forepaws, laying down an opaque white road centerline.

[Shot 2] 00:02.21 hard cut: side view, he paints a dark-blue edge beside the forced-perspective roadway.

[Shot 3] 00:02.96 hard cut: close-up of the brush completing the rounded upper edge of the tunnel.

[Shot 4] 00:03.71 hard cut: wider frontal view as he fills the mural, then rushes off screen-left.

[Shot 5] 00:08.63 hard cut: he peeks from behind a large ochre boulder, scheming.

[Shot 6] 00:10.21 hard cut: low tracking of the crested bird running rapidly along the dirt road.

[Shot 7] 00:13.54 hard cut: the painted arch becomes a spatially deep tunnel. The bird enters and shrinks toward the distant arched exit. No collision, no glowing portal.

[Shot 8] 00:15.17 hard cut: canine close-up, eyes extremely wide, then calculation, then renewed confidence.

[Shot 9] 00:19.29 hard cut: he warms up, sprints, and around 00:25.6 slams face-first into solid painted stone. Hold the awkward brace. Around 00:28.5 he collapses; a few small golden cartoon stars orbit above his head.

Continuity: the bird passes into the painted tunnel; the canine hits the solid painted wall. Never reverse these outcomes. No additional characters, captions, logos, or watermarks.`,
    notes: "原帖把完整逐镜写在评论。鸟必须进隧道，犬必须撞墙，这条因果不能反。",
  },
  {
    id: "khan-outfit",
    title: "韩式穿搭板",
    kicker: "Fashion Infographic",
    excerpt: "模特原地 360°，编号框里的项链、蝴蝶结、短裙和靴子同步旋转。",
    medium: "video",
    tags: ["人像", "信息设计"],
    style: "时装商品旋转板",
    creatorId: "khan",
    sourceUrl: "https://x.com/AIwithkhan/status/2101148067458347258",
    covers: ["/covers/khan-outfit.jpg"],
    model: "GPT Image 2 + Seedance 2.5 · 8s",
    aspect: "3/4",
    featured: true,
    date: "2026-09-19",
    prompt: `Create a clean, premium 8-second fashion infographic animation based on the outfit-board layout. The entire composition remains visible on a white minimalist background. The female model on the right begins a smooth 360° rotation on her vertical axis, like a fashion showcase turntable. Her movement is elegant and continuous, maintaining natural posture and realistic cloth physics. Hair, skirt straps, and accessories react subtly to motion. At the exact same time, every item displayed inside the numbered boxes rotates synchronously:

Necklace rotates slowly in 3D, revealing chain depth and pendant details.
Hair bow spins gracefully around its center.
Handheld gaming console rotates on its vertical axis like a product commercial.
Cargo mini skirt rotates 360° to showcase front, side, and back views.
Platform boots rotate together like luxury product display renders.
Black off-shoulder top rotates smoothly to reveal full garment shape.

All items complete their rotations in perfect sync with the model's rotation speed. The boxes, numbers, typography, and layout remain fixed in position while only the products rotate inside their frames. Camera remains mostly static with a subtle cinematic push-in. Soft studio lighting, realistic shadows, clean commercial fashion-ad aesthetic, ultra-sharp details, premium motion graphics, smooth easing, luxury catalog presentation, 4K, 60fps.`,
  },
  {
    id: "khan-sunday",
    title: "首尔周日早晨",
    kicker: "Seedance 2.5",
    excerpt: "早期 DV 家用机。锁门、洗脸、买棒棒糖，最后对着镜头说 Happy Sunday。",
    medium: "video",
    tags: ["日常", "胶片"],
    style: "2000s 家用录像",
    creatorId: "khan",
    sourceUrl: "https://x.com/AIwithkhan/status/2101515497150025999",
    covers: ["/covers/khan-sunday.jpg"],
    model: "Seedance 2.5 · 16:9 · 30s",
    aspect: "16/9",
    date: "2026-09-20",
    prompt: `Create a 30-second ultra-realistic personal home-video of a young Korean woman enjoying a relaxed Sunday morning in an older Seoul residential neighborhood. Use the attached image as the character reference and keep her face, long black messy side ponytail, pastel-blue fitted top, loose cream pants, black sneakers, silver necklace, and overall appearance perfectly consistent.

She leaves her home with a cheerful expression, locks the door behind her, adjusts her messy side ponytail, and starts walking casually through the quiet neighborhood. Along the way, she passes a few familiar neighbors and warmly greets them with a smile and a casual “Hello,” creating a natural friendly Sunday atmosphere.

She reaches a small neighborhood outdoor tap and stops to wash her face. She splashes cool water onto her face, laughs when several water drops land on the front of her pastel-blue top, looks down at the wet spots, smiles and shakes her head playfully before continuing.

She visits a tiny local convenience store, buys a colorful candy lollipop, unwraps it immediately, puts it in her mouth and walks back through the neighborhood while happily enjoying it. She casually swings the small shopping bag in one hand while holding the lollipop in the other.

As she passes through a narrow residential lane, she meets a few neighborhood children. She smiles, waves and shakes hands with them one by one while keeping the lollipop in her other hand. She says, “Hello!” and continues walking with a playful smile.

Near the end, she turns toward the camera while still holding the lollipop, smiles naturally and says, “Happy Sunday!” before walking away down the quiet lane.

Use raw early-2000s consumer DV-camera footage: handheld shake, imperfect framing, autofocus hunting, exposure shifts, soft detail, mild digital noise, natural motion blur, occasional awkward zooms and authentic home-video imperfections.

Natural Seoul neighborhood ambience only — footsteps, neighbors talking, children laughing, running water, bicycle bells, distant traffic, birds, summer insects and leaves moving in the breeze. No music, no narration, no subtitles, no dramatic events, no polished commercial cinematography, no beauty-filter skin, no CGI look.`,
  },
  {
    id: "khan-nyc",
    title: "纽约金色时辰",
    kicker: "Travel Film",
    excerpt: "东河开场，布鲁克林大桥，再拉到蓝调时刻的曼哈顿全景。",
    medium: "video",
    tags: ["日常", "运动"],
    style: "奢旅航拍广告",
    creatorId: "khan",
    sourceUrl: "https://x.com/AIwithkhan/status/2100219774949327239",
    covers: ["/covers/khan-nyc-b.jpg", "/covers/khan-nyc.jpg"],
    model: "GPT Image 2 + Seedance 2.5 · 9:16",
    aspect: "9/16",
    date: "2026-09-16",
    prompt: `Create a ultra-realistic cinematic vertical travel film in strict 9:16, showcasing the iconic beauty of New York City, using the generated image as the visual reference for composition, skyline, lighting, and landmarks.

— EAST RIVER OPENING
Begin with a cinematic view over the East River during golden hour. Realistic sightseeing boats move through the foreground, creating natural wakes and reflections. The Brooklyn Bridge and Manhattan skyline appear in the distance.

— BROOKLYN BRIDGE REVEAL
Camera smoothly glides closer toward the Brooklyn Bridge, revealing its stone towers, suspension cables, traffic, pedestrians, and boats underneath. Keep all American architecture accurate and photorealistic.

— MANHATTAN SKYLINE
Transition toward Lower Manhattan. One World Trade Center dominates the skyline while surrounding skyscrapers, waterfront buildings, ferries, and realistic city activity create depth.

— GOLDEN HOUR TO BLUE HOUR
The sunlight gradually fades into blue hour. Manhattan windows and bridges begin illuminating, with realistic reflections shimmering across the East River.

— EPIC AERIAL REVEAL
Rise into a high-altitude aerial shot and pull backward to reveal an expansive New York panorama, clearly showing Brooklyn Bridge, Manhattan skyline, East River, One World Trade Center, waterfront, and surrounding cityscape.

CAMERA & STYLE: Smooth professional cinema-camera movement, realistic aerial motion, natural parallax, physically accurate lighting, detailed architecture, realistic water physics, atmospheric depth, subtle motion blur, premium luxury travel-commercial aesthetic, 4K-quality photorealism.

NEGATIVE: cartoon, anime, illustration, CGI appearance, distorted buildings, warped Brooklyn Bridge, malformed skyscrapers, duplicated landmarks, floating objects, unnatural water, excessive haze, oversaturation, shaky camera, flickering, text artifacts, random logos, unrealistic reflections.`,
  },
  {
    id: "arvin-six",
    title: "小师妹六大招",
    kicker: "仙侠割草",
    excerpt: "30 秒六段，每 5 秒一个完全不同的视觉体系。经文、凤凰、彗星、次元、鲲鹏、终焉。",
    medium: "video",
    tags: ["仙侠", "动作", "东方"],
    style: "满屏大招连斩",
    creatorId: "arvin",
    sourceUrl: "https://x.com/Arvin007o/status/2100939152388993367",
    covers: ["/covers/arvin-six.jpg"],
    model: "视频模型 · 16:9 · 30s · 60fps",
    aspect: "16/9",
    featured: true,
    date: "2026-09-18",
    prompt: `【资产引用与锁定】
严格使用用户提供的固定 3D [@小师妹] 资产。全程保持东方女性脸型、五官、黑色束发、额间蓝色神纹、黑蓝灰破损古风战斗服、肩部结构、腰间蓝色饰带、身体比例与年龄感完全一致。高速运动、强特效、强逆光和大招爆发过程中禁止换脸、换衣、换发型、改变体型、改变额间神纹。

暗影魔物为无实体玄黑黏稠流体生命，暗红能量核心，尖锐轮廓、非人形怪物结构。禁止中途随机更换魔物种族。

主战场：九天悬空上古神战废墟。巨型悬浮石台、古代天门残柱、断裂神桥、破碎祭坛、悬浮山峰、深渊云海。整个 30 秒必须是同一个连续空间，所有后续破坏永久保留。

【SSS级一句话总合成】
[@小师妹] 全程悬浮于九天上古神战废墟高空，成千上万暗影魔物从地面、断桥、云海、悬崖和天空持续穿梭扑杀，30 秒内 0 帧起手无缝释放 6 个完全不同视觉体系的满屏仙法大招，每个大招严格持续 5 秒、全程禁止普通攻击和停顿：
0–5 秒 漫天玄金古文与紫金符印化作遮天经文天幕层层镇压魔潮；
5–10 秒 万丈冰蓝紫金凤凰从身后展翼冲出，以巨型火羽风暴横扫整片遗迹；
10–15 秒 苍穹裂开，数十颗巨大紫金星辰和冰蓝彗星拖着长尾连续坠落，地面永久形成巨型陨坑；
15–20 秒 一指划开整片空间，纵横交错的巨大次元裂缝高速切开战场坐标；
20–25 秒 云海下方升起万丈鲲鹏法相，巨翼掀起覆盖战场的紫金能量海潮；
25–30 秒 前五个大招遗留的经文、凤凰、星辰、空间裂隙与鲲鹏法相全部在身后同时浮现并向中心汇聚，天地法则形成巨大终焉领域。

【全局】
UE5.4 级路径追踪电影质感。顶级国风仙侠三维 CG。冰蓝 + 紫金 + 玄金。魔潮：玄黑 + 暗红。特效比例：流体 60% + 粒子 25% + 环境水汽 15%。全程 60 帧高速，禁止慢放、定格、子弹时间。主角全程悬浮，脚不沾地。魔物绝不能站桩。场景破坏永久留存。

【铁律】
1. 30 秒六大招，每段严格 5 秒，禁止普通攻击、空白过渡、喘气。
2. 每段内部必须形成：瞬间起势 → 主体展开 → 满屏爆发 → 魔潮反击 → 主角空中闪避 → 大招持续扩张 → 余波无缝转入下一招。
3. 六招视觉绝不重复：经文 / 凤凰 / 星辰陨落 / 空间裂缝 / 鲲鹏 / 多法相终焉。
4. 0 帧起手。第 5、10、15、20、25 秒切换时上一招余波还没结束。
5. 每 5 秒至少两种不同魔物反击。
6. 尾帧必须同时看见前五段全部破坏痕迹与魔物残骸。

【负面】
禁止换脸换衣、场景更换、普通攻击、六个技能变成相同圆形法阵或光柱、凤凰过小、彗星过少、次元裂缝变成普通剑气、鲲鹏过小、最终大招只是单一爆炸、慢镜头、顿帧、特效遮挡面部、写实血液。16:9，60 帧。`,
    notes: "作者把完整六段分镜、运镜和负面提示词写在原帖。需要逐秒对照时到源帖复制全文。提示免费公开，禁止售卖。",
  },
  {
    id: "arvin-combo",
    title: "神纹剑客十段",
    kicker: "0 帧起手",
    excerpt: "每 3 秒一段混合组合技。御剑、涡旋、雷风、冰火、仙鹤，一路打到大道终焉。",
    medium: "video",
    tags: ["仙侠", "动作", "东方"],
    style: "高空连招伪一镜",
    creatorId: "arvin",
    sourceUrl: "https://x.com/Arvin007o/status/2100444991013388351",
    covers: ["/covers/arvin-combo.jpg"],
    model: "视频模型 · 16:9 · 30s",
    aspect: "16/9",
    date: "2026-09-17",
    prompt: `【SSS级一句话总合成】
镜头贴地跟拍与 FPV 贴背交错（WHIP 甩镜换位、PUSH 急推爆发），绝世神纹剑客悬浮于九天混沌云海高空 0 帧起手，无缝释放 10 段玄金星空蓝双色混合组合技（御剑封印控场、涡旋分身绞杀、雷风双重天、冰火双极阵、召唤仙鹤大军、气功月牙流、霸气须佐流、八卦万剑归宗、天外归墟黑洞、无上大道终焉），满屏玄金极光、星空蓝法阵、漫天经文剑影交织，魔潮疯狂反击，主角高空瞬移擦肩闪避，最终大道终焉全灭魔物，尾帧满场金蓝璀璨残骸铺地，镜头急推至主角悬浮收印侧脸特写。

【全局】
UE5.4 Path Tracing，国风仙侠 CG，8K，HDR，柯达 5219 胶片颗粒，60fps。宏大神圣的九天混沌云海与悬浮仙山。极致高饱和玄金与星空蓝双色。全程无顿帧、无慢动作、无定格。伪一镜到底。

主角：黑发用玉簪束起，额头青色水滴状神纹，黑金战袍内衬星空蓝流光，全程悬浮高空，背后悬浮多柄玄金灵剑。
对手：成千上万只暗影能量体，粘稠黑色流体，核心暗红闪烁，永不停歇波浪式补位。

【铁律】
1. 0 帧起手，无铺垫、无平 A、无长前摇。
2. 3 秒一段，30 秒共 10 段，段内 2–3 个小技能融合，段间无缝。
3. 全程悬浮，脚不沾地。
4. 满屏特效：流体 60% + 粒子 25% + 水 15%。
5. 残骸永久保留。

【十段】
t0–3s 御剑封印控场链：金色灵符定住前排 + 灵剑贯穿。
t3–6s 涡旋分身绞杀链：灵力涡旋 + 万千剑影。
t6–9s 雷风双重天链：玄金天雷 + 九霄风刃。
t9–12s 冰火双极阵链：青蓝寒潮冻结后红金火焰融化炸裂。
t12–15s 召唤仙鹤大军链：满屏金色仙灵 + 仙鹤扑杀 + 御剑穿云。
t15–18s 气功月牙流：聚玄金光球化作巨型星空蓝月牙斩。
t18–21s 霸气须佐流：玄金流体覆盖全身，化作巨神兵骨架，灵压炸裂。
t21–24s 八卦万剑归宗：巨大八卦法阵 + 万剑齐落归一。
t24–27s 天外归墟黑洞：流光俯冲 + 黑洞吞噬 + 空间震爆。
t27–30s 无上大道终焉：法则汇聚，全屏终极湮灭，尾帧侧脸特写。

禁止文字水印、慢镜头、顿帧、站桩、普通攻击、主角落地、色彩杂乱、尾帧离场。`,
    notes: "原帖附完整十段分镜与负面提示词。作者约定：提示免费公开分享，使用请 @ 他，禁止售卖。",
  },
  {
    id: "aizc-spirits",
    title: "Wild Spirits 图鉴",
    kicker: "Episode 036",
    excerpt: "先给精怪一个名字和一句命运。再让它走进云峡、冰海或天河。",
    medium: "video",
    tags: ["东方", "奇幻"],
    style: "中国神话精怪",
    creatorId: "aizc",
    sourceUrl: "https://x.com/blade2019runner/status/2101328712004169820",
    covers: ["/covers/aizc-spirits.jpg", "/covers/aizc-spirits-b.jpg"],
    model: "Midjourney → Kling · 9:16",
    aspect: "9/16",
    featured: true,
    date: "2026-09-19",
    prompt: `Create a vertical 9:16 mythic creature plate in the Wild Spirits language: Chinese folklore, yokai taxonomy, and cinematic ink-and-mineral color.

Give the creature a ceremonial two-part name, then one irreversible fate-line. The name should sound like an epithet from a lost bestiary, not a game stat block. The fate-line must describe what the creature does when it moves — not what it looks like.

Name: 【精怪名，如：负莲象 / 燃翼龙 / 三生虬 / 祀行螭 / 碧瀑龙 / 星书鹿】
Fate-line: 【一句命运，如：It treads the clouded ravines; when the deity upon its back wakes, ten thousand flowers close.】

Visual system:
A colossal spirit-beast occupying a sacred Chinese landscape — clouded ravine, icy sea, jade-string abyss, thousand peaks, flying waterfall, or the River of Heaven. The creature is part animal, part ritual object, part weather. Scales, antlers, trunks, or coils should read as carved lacquer, wet ink, and living mineral at once.

Palette: oxidized bronze, cinnabar, malachite, lampblack, and one cold moonlight accent. Thick atmospheric fog, falling petals or ash, distant temple roofs swallowed by cloud. Monumental scale: a tiny priestess, boat, or stone gate gives the body its size.

Camera: slow ceremonial drift, as if documenting a living statue that has started to breathe. No modern city, no anime eyes, no cute chibi, no Western dragon wings unless the fate-line demands them.

Motion (image-to-video):
The creature performs one mythic action implied by the fate-line — a step that closes flowers, a wingbeat that burns the old moon, a coil that forgets a former life. Fog, spray, and ritual dust react. End before the action resolves.

Examples from Episode 036:
Lotus-Bearing Elephant: It treads the clouded ravines; when the deity upon its back wakes, ten thousand flowers close.
Ember-Winged Dragon: It dwells above an icy sea, burning the old moon with a beat of its wings.
Three-Lives Qiu: It coils around jade strings; when the song ends, each forgets its former life.
Star-Scribing Deer: It walks the River of Heaven, its antlers inscribing mortal fates.`,
    notes: "作者原话：提示词不如 moodboard。这套公开的命名 + 一句命运，就是 Wild Spirits 真正可复用的结构。静帧用风格参考，再送进 Kling。",
  },
  {
    id: "tong-date",
    title: "几分钟的约会",
    kicker: "零点以前",
    excerpt: "末班车驶进站台，她摘下帽子。一次靠近，一个吻。故事的第二页写在零点以前。",
    medium: "video",
    tags: ["日常", "胶片"],
    style: "车站爱情短片",
    creatorId: "tong",
    sourceUrl: "https://x.com/tngqingtng15022/status/2097379784406020173",
    covers: ["/covers/tong-date.jpg"],
    model: "Seedance · 16:9 · 30s",
    aspect: "16/9",
    featured: true,
    date: "2026-09-08",
    prompt: `30-second cinematic romantic short, 16:9, photorealistic live-action.

A last train pulls into a quiet urban elevated station just before midnight. Warm sodium and fluorescent lights against cold night air. Thin mist, wet platform tiles, a few distant passengers already gone.

A young East Asian woman waits alone near the yellow safety line, wearing a dark coat and a hat. The train slows, doors open, pale interior light spills onto the platform. She steps forward and takes off her hat. A young East Asian man steps off the train. They recognize each other without surprise — this meeting was arranged.

They walk toward each other. One close-up of her eyes, one of his hands. They come close. They kiss. Hold the kiss long enough for the platform to feel empty around them. A last wide shot: two figures on a nearly deserted platform, the train waiting with doors still open. The second page of the story is written before midnight.

Cinematic romance, film grain, shallow depth of field, motivated station lighting, realistic clothing and breath in cold air. Natural location sound only: train brakes, door chime, distant city. No dialogue, no narration, no text, no logos. Do not turn it into a music video. Do not add extra characters at the kiss.`,
    notes: "原帖给了完整故事卡，提示词全文未贴。作者后记：可惜结尾 bug 了。骨架按成片结构整理，可直接换角色参考。",
  },
  {
    id: "tong-train",
    title: "零点后的末班列车",
    kicker: "空间可以折叠",
    excerpt: "一趟失控的夜行列车，一场呼救，一场逆行。奔向她的方向从未改变。",
    medium: "video",
    tags: ["动作", "科幻"],
    style: "折叠空间救援",
    creatorId: "tong",
    sourceUrl: "https://x.com/tngqingtng15022/status/2100136445940027774",
    covers: ["/covers/tong-train.jpg"],
    model: "视频模型 · 16:9 · 约 60s",
    aspect: "16/9",
    date: "2026-09-16",
    prompt: `Cinematic night-train thriller, 16:9, photorealistic.

A runaway passenger train tears through a dark industrial corridor after midnight. Interior lights flicker. Metal screams. A woman is trapped inside a carriage as the space around her starts to fold — corridors compress, windows stack, the same aisle repeating at impossible angles.

Somewhere else on the line, a man receives a call for help. He starts running against the train’s direction. The city, the tracks, and the carriage interiors begin to overlap: he is moving through folded space, not along a single track. Every cut should still read as one continuous attempt to reach her.

Keep two identities locked. Do not swap faces. The emotional rule is simple: space can fold, the direction toward her never changes.

Style: wet asphalt, sodium light, cold blue sparks from the rails, handheld urgency mixed with a few precise slow pushes. Practical-feeling VFX, not neon magic. No dialogue except the initial call. No text, no logos, no horror gore.`,
    notes: "原帖只公开了故事卡。空间折叠是核心，不要写成普通火车追逐。",
  },
  {
    id: "tong-minute",
    title: "世界剩下一分钟",
    kicker: "你想留住谁",
    excerpt: "雨夜。最后一分钟里把一个人拉进怀里。情绪要细，不要灾难奇观。",
    medium: "video",
    tags: ["日常", "胶片"],
    style: "末日抒情短片",
    creatorId: "tong",
    sourceUrl: "https://x.com/tngqingtng15022/status/2101180313372352774",
    covers: ["/covers/tong-minute.jpg"],
    model: "Seedance · 16:9 · 30s",
    aspect: "16/9",
    date: "2026-09-19",
    prompt: `30-second cinematic short, 16:9.

The world has one minute left. Do not show exploding planets or giant countdowns. Show a rain-soaked city street at night, a young couple, and the feeling that time is running out.

He finds her in the rain. Streetlights smear. They hold each other. The camera stays close enough to read breath, wet hair, and the way a hand finds a coat collar. Distant city noise falls away. The last seconds should feel quiet, not spectacular.

Photorealistic live-action, motivated sodium and neon reflections on wet asphalt, shallow depth of field, film grain, natural rain physics. No dialogue, no countdown graphics, no text, no logos. The emotional progression must be delicate: recognition, reaching, holding, stillness.`,
    notes: "作者写：参考了 @im_shahid7 的提示词，自己调过。核心是情绪递进，不是末日奇观。",
  },
  {
    id: "tong-rain",
    title: "风过眉间",
    kicker: "未落的雨",
    excerpt: "眼底有光，也有未落的雨。湿空气贴在皮肤上，不要哭给镜头看。",
    medium: "image",
    tags: ["人像", "胶片"],
    style: "湿空气肖像",
    creatorId: "tong",
    sourceUrl: "https://x.com/tngqingtng15022/status/2097680719191646663",
    covers: ["/covers/tong-rain.jpg", "/covers/tong-rain-b.jpg"],
    model: "图像模型 · 9:16",
    aspect: "4/5",
    date: "2026-09-09",
    prompt: `Cinematic close portrait of an adult East Asian woman, 9:16.

Wind moves a few strands of hair across her brow. Her eyes hold light, and also rain that has not fallen yet. Skin slightly damp, natural pores, no beauty-filter smoothness. She does not cry, does not pose for the camera, does not smile for a commercial.

Soft overcast daylight or wet window light. Shallow depth of field. Muted film palette: cool skin, dark hair, a faint warm specular in the eyes. Background dissolves into fogged architecture or rain-soaked foliage.

The feeling is: 风过眉间，眼底有光，也有未落的雨.

Photorealistic editorial portrait, fine grain, restrained color, truthful anatomy. No text, no logo, no heavy makeup, no glam lighting.`,
    notes: "作者标明提示词来自 @GrayNoteLab。这句中文是成片的情绪锚点，换脸时先锁住它。",
  },
  {
    id: "larus-food",
    title: "食物改写字体",
    kicker: "Images 2.5",
    excerpt: "松饼压字，冰淇淋被挖走，果酱拖行，千层酥把字母分层。食物不装饰字，食物改变字。",
    medium: "image",
    tags: ["海报", "排版", "电商"],
    style: "食物物理字体",
    creatorId: "larus",
    sourceUrl: "https://x.com/MrLarus/status/2101325998075600974",
    covers: ["/covers/larus-food.jpg", "/covers/larus-food-b.jpg"],
    model: "GPT Images 2.5 · 9:16",
    aspect: "4/5",
    date: "2026-09-19",
    prompt: `Brand: [BRAND NAME]
Food: [FOOD / DRINK]
Headline: [1 SHORT WORD]
Physical Interaction: [PRESS / SCOOP / SMEAR / LAYER / other physical action]
Accent Color: [COLOR]
Product Name: [PRODUCT NAME]
Price: [PRICE]
Aspect Ratio: 9:16

Create a premium editorial food poster where real food physically interacts with and reshapes oversized typography, using a warm cream or ivory background, bold black Heavy Grotesk typography, photorealistic food materials, generous negative space, and a broken editorial grid inspired by high-end European café branding and contemporary magazine design.

The food must not simply overlap or sit beside the letters. Treat the typography and food as objects inside the same physical world. The selected interaction must visibly change the structure of the letters through believable physics.

Examples: PRESS, food weight compresses and locally deforms the typography; SCOOP, a real scoop removes material directly from a letter, leaving a matching cavity and revealing edible material inside; SMEAR, a knife drags food across the type, causing localized lateral stretching and shear only along the contact zone; LAYER, the typography contains real food layers, and one structural layer is physically pulled out and offset.

Keep the interaction localized, clear, and physically believable. Untouched parts of the typography should remain hard, clean, geometric, and readable. Use only one main physical mechanism per poster. Avoid random liquify effects, decorative overlap, generic 3D lettering, or digital-looking distortion.

Add small editorial information such as [INGREDIENTS], [OPENING HOURS], and [ADDRESS]. Use strong scale contrast rather than traditional menu rows.

Use bold Grotesk Sans Serif for the main typography, high-contrast Editorial Serif or Italic Serif for product names, quotes, or prices. Keep the color system minimal with a cream background, black typography, natural food colors, and one accent color.

The final poster should feel clever, physical, premium, and instantly understandable at thumbnail size. The key idea is simple: food does not decorate the typography, food physically changes it.`,
  },
  {
    id: "larus-blue",
    title: "东方诗境蓝",
    kicker: "BLUE DISTANCE",
    excerpt: "雾蓝留白、巨字、一句诗、一个微小红点。大空间，小事件。",
    medium: "image",
    tags: ["海报", "东方", "极简"],
    style: "诗词视觉转译",
    creatorId: "larus",
    sourceUrl: "https://x.com/MrLarus/status/2101304082027733466",
    covers: ["/covers/larus-blue.jpg", "/covers/larus-blue-b.jpg"],
    model: "GPT Images 2.5 · 9:16",
    aspect: "4/5",
    date: "2026-09-19",
    prompt: `【主题词】：{2–4 个中文，例如：浮光 / 云深 / 一色 / 潮生}
【诗词原句】：{填写对应古诗文原句}
【场景】：{水面 / 雾山 / 海天 / 镜面浅滩 / 其他东方自然空间}
【微小主体】：{人物 / 浮标 / 小舟 / 装置 / 其他}
【朱红点睛】：{红伞 / 红帽 / 红色织带 / 小型标记等}
【英文副题】：{填写简短英文标题}

用 Images 2.5 生成一张 9:16 东方诗境极简文化海报，将中国古典诗词的意境转译成现代编辑视觉。

整体采用雾蓝、冰蓝、浅青灰、月白、墨蓝组成的低饱和冷色体系，画面宁静、空灵、克制，具有东方极简与文化展览海报气质。

保留大面积空气感和负空间，主体不要占满画面。通过【场景】构建辽阔、安静、有距离感的空间，只保留一个主要视觉事件。加入【微小主体】，让它成为巨大空间中的小尺度视觉坐标。

整张画面只加入一处【朱红点睛】，面积保持很小，用来打破冷蓝色域并建立视觉焦点，不增加第二处明显高饱和颜色。

Typography 必须参与构图。主标题使用【主题词】，通过巨大字体、纵向排版、边缘裁切、错位或与景物穿插形成画面结构。加入较小的【诗词原句】，可使用竖排、边缘题记或细小编辑排版，不抢主标题。

加入少量英文信息：
“BLUE DISTANCE”
【英文副题】

以及极少量展览式日期或视觉研究信息，使用细衬线或极细现代字体，小字号、低信息密度。

整体强调明显的尺度反差：巨大中文主题字，极小自然或人物主体，微型诗句与英文信息，大面积蓝色留白。

画面质感保持真实、柔和、低反差、低饱和，可加入薄雾、空气透视、轻微水面反光或自然柔光。

避免 HDR、科技蓝、赛博朋克、重颗粒、做旧纸张、旅游宣传感、复杂古风符号堆叠和商业广告感。

核心视觉原则：大空间，小事件；大文字，小信息；冷蓝色域，一点朱红；诗词提供意境，现代排版完成视觉转译。`,
  },
  {
    id: "larus-paper",
    title: "大色域微场景",
    kicker: "东方文化海报",
    excerpt: "纸本色块负责空间。人物只占 2%–5%。远看极简，近看全是故事。",
    medium: "image",
    tags: ["海报", "东方", "拼贴"],
    style: "纸本色域编辑",
    creatorId: "larus",
    sourceUrl: "https://x.com/MrLarus/status/2099810103318733179",
    covers: ["/covers/larus-paper.jpg", "/covers/larus-paper-b.jpg"],
    model: "GPT Images 2.5 · 9:16",
    aspect: "4/5",
    featured: true,
    date: "2026-09-15",
    prompt: `【海报主题】
【主标题】
【主色域】
【微场景】
【人物动作】
【文化元素】
【活动信息】
【画幅比例】

设计一张具有现代东方编辑美学的文化活动海报，以「大色域 + 微场景」作为核心构成方法，并融合纸本拼贴、水彩与天然颜料的材料质感。

画面首先建立一个清晰而有视觉重量的【主色域】。使用大面积、不规则、具有自然边缘的纸本色块承担主要构图，根据【海报主题】让色块通过层叠、围合、错位、穿插、悬挂、延伸或负空间关系形成抽象空间。色块可以暗示山势、庭院、工坊、染布、陶窑、林地等，但不要直接画成普通写实场景。

纸本色块必须具有明显而高级的真实材料感：天然长短纤维、手工纸浆颗粒、水彩或矿物颜料沉积、轻微压痕、自然浓淡、大尺度色差与不规则撕纸边缘。材质丰富但整体保持干净、完整、哑光、有呼吸感。避免脏污、黄斑、严重褪色、随机斑驳、强噪点和廉价仿古效果。

大色域是画面的第一视觉。远看时应首先看到清楚的大形、色彩关系和空间结构，即使缩小成社交媒体信息流尺寸仍然具有明显识别度。

在大片色块形成的空间中加入一个尺度很小但叙事完整的【微场景】。人物与道具整体只占画面约 2%–5%，人物正在真实地执行【人物动作】，不直视镜头、不摆拍。微场景需要让观众靠近以后才发现。

根据主题自然加入少量【文化元素】。器物应真正参与场景，不要为了装饰而堆砌。

画面可以设置一个面积极小的视觉点睛色，通常控制在整体面积的 1%–3%。

主标题使用精致、克制的中文宋体或明朝体。标题字号保持中小尺度，不使用巨大 Typography，不让文字压过大色域。

整体阅读顺序：大片纸本色域与材质关系 → 微型人物场景与文化行为 → 主标题 → 小型活动信息。

避免：书籍封面既视感、巨大标题、传统水墨画、普通国风插画、写实摄影背景、PPT 式排版、商业广告感、元素堆砌、脏旧纸张、3D CGI、霓虹色、Logo、水印。`,
    notes: "作者示范四组：春山有信、冬窑新火、林下印记、靛色长日。换主题只改色域和微场景动作。",
  },
  {
    id: "larus-corner",
    title: "压角构图",
    kicker: "Editorial Graphic",
    excerpt: "四字拆开压在四边。主体从字形里长出来，字在主体后面。",
    medium: "image",
    tags: ["海报", "排版", "东方"],
    style: "压角展览海报",
    creatorId: "larus",
    sourceUrl: "https://x.com/MrLarus/status/2100931915935092779",
    covers: ["/covers/larus-corner.jpg", "/covers/larus-corner-b.jpg"],
    model: "GPT Image 2 · 9:16",
    aspect: "4/5",
    date: "2026-09-18",
    prompt: `【主题】：
【四字中文标题】：
【英文标题】：
【核心主体】：
【主体动作 / 姿态】：
【辅助视觉元素】：
【主色调】：
【点缀色】：
【展览日期 / 机构】：
【画面比例】：9:16

生成一张高审美东亚文化展览海报，采用「压角构图」与成熟 Editorial Graphic Design 视觉语言。整体不是普通主体加标题，而是让一个强主视觉、巨型中文字、边缘信息、辅助纹样和留白真正互相咬合。

主体占画面约 45%–60%，保持完整、清晰、有明显轮廓和视觉重量。

将【四字中文标题】拆开分布在画面四边与角落，但不要四字等大、等距或完全对称。选择 1–2 个字作为主要压角，明显放大并部分裁出画面，其余文字作为次级回应。大型中文字不是普通标题，而是版面结构的一部分，要与主体发生真实前后穿插，例如人物、动物、翅膀、角、绳索、枝条、衣袖、山体或其他主体轮廓从字形前后穿过，让“字在主体后方、主体又从字中长出来”。

英文标题、日期、机构、说明文字集中在 2–3 个边缘区域，可以混合横排、竖排、极小字号和不同方向排版。

整张海报只使用一套与主题直接相关的辅助视觉语言。背景使用具有文化出版物质感的艺术纸。色彩控制在 3–5 个核心颜色。

画面阅读顺序必须明确：第一眼看到强主体和巨大压角文字；第二眼发现主体与文字之间的遮挡、穿插和尺度关系；第三眼阅读英文、日期和边缘信息；最后才注意纸张纹理与辅助线稿。

即使去掉所有小字，画面本身也应该是一件完整成立的作品。`,
  },
  {
    id: "qyeah-angel",
    title: "天国阳台",
    kicker: "Grok Imagine",
    excerpt: "背对镜头的女天使站在白玉金雕阳台边缘，望向云海中央的太阳。",
    medium: "image",
    tags: ["奇幻", "人像"],
    style: "史诗天国写实",
    creatorId: "qyeah",
    sourceUrl: "https://x.com/QyeahDc/status/2101504500142059617",
    covers: ["/covers/qyeah-angel.jpg", "/covers/qyeah-angel-b.jpg"],
    model: "Grok Imagine · 宽幅",
    aspect: "16/9",
    date: "2026-09-20",
    prompt: `一幅史诗级电影感画面：从背后看一位美丽的女天使，站在高耸入云的圆形白玉金雕阳台边缘。她留着金色波浪长发，背后展开一对巨大华丽的白色羽毛翅膀，羽尖带细腻金边。她穿着象牙白丝绸长裙，金色刺绣，露背，高开衩露出修长双腿，长长的裙摆拖在地上，腰间佩戴精致金饰。她背对镜头，静静望向远方的太阳。

左右两侧是对称的天国宫殿，白大理石与象牙色石材，铺满巴洛克式黄金雕花、科林斯柱、螺旋楼梯和多层高塔，一直延伸进云层。前方是无边柔软的云海。天空正中央一轮耀眼金日照耀，放射强烈的神圣光芒与淡淡彩虹，上方是深蓝星空。体积感黄金时刻光线，空气中漂浮细碎金粉，神圣空灵，超精细，照片级写实，8K，宽幅电影构图。`,
  },
  {
    id: "qyeah-shanghai",
    title: "民国上海夜",
    kicker: "Noir 双重曝光",
    excerpt: "血红色旗袍、香烟、雨。少帅的身影从侧面叠进走廊。",
    medium: "image",
    tags: ["人像", "东方", "胶片"],
    style: "1930s 黑色电影",
    creatorId: "qyeah",
    sourceUrl: "https://x.com/QyeahDc/status/2101233684431188301",
    covers: ["/covers/qyeah-shanghai.jpg", "/covers/qyeah-shanghai-b.jpg"],
    model: "Grok Imagine · 16:9",
    aspect: "16/9",
    date: "2026-09-19",
    prompt: `电影级海报，无任何文字、无字母、无任何文字元素，纯视觉构图。1930年代上海风情与黑色电影质感。饱和温暖色调，以深血红色、琥珀金色和青绿色阴影为主，大雨倾盆，缭绕的香烟烟雾，复古台灯发出的昏黄温暖体积光，狭窄优雅的走廊空间，精致花纹墙纸，厚重天鹅绒窗帘轻轻飘动，电影颗粒感，丰富质感。

中心构图：一位25岁绝美中国女子，拥有狐媚上挑的丹凤眼，长而浓密的波浪黑发被夜风轻柔吹起并被光线照亮，瓷白无瑕的肌肤，鲜艳深红嘴唇微张，完美1930年代上海风情妆容。她优雅而悲伤地站在老法租界豪宅内，狭窄昏暗的走廊门口，斜靠在门框上，身后连接着被雨水打湿的小型屋顶阳台，身穿经典华丽的深血红色真丝旗袍，高领盘扣，精致银色凤凰刺绣，修身优雅剪裁，极高开叉露出穿着薄丝袜和细高跟鞋的修长美腿，奢华白色狐皮披肩从裸露的香肩和手臂上滑落。一手拿着红酒水晶杯，左手香烟烟雾优雅地缭绕在脸庞，表情充满诱惑力却又极度忧郁而认命。

半透明梦幻双重曝光记忆叠加效果：在昏暗走廊中温柔从侧面拥抱她的身影：一位32岁英俊的中国军阀少帅，身穿笔挺的1930年代深色军装，披着军用斗篷，佩戴勋章，一只强壮的手温柔搭在她的腰间，眼神充满深情却又悲伤。

透过打开的阳台门和雨痕斑斑的窗户可见背景：1930年代标志性的上海外滩夜景，天际线包括和平饭店独特的绿色金字塔屋顶、海关大楼高耸的钟楼、宏伟的殖民时期建筑，外滩霓虹灯闪烁，倒映在湿润的黄浦江面上，法租界狭窄巷弄下大雨倾盆。极致细节的面部、织物与纹理，情绪化的神光与边缘光，电影杰作，超现实写真，最佳质量，8k。`,
    notes: "作者标明这是早期 Grok Imagine 作品。去掉 --ar / --stylize 等模型后缀也能跑。",
  },
  {
    id: "hang-ui",
    title: "请看下集",
    kicker: "主页破框",
    excerpt: "人从头像圆洞里挤出来，站在黑色 UI 栏上，四枪打出四个字。",
    medium: "video",
    tags: ["日常", "信息设计"],
    style: "界面物理短片",
    creatorId: "hang",
    sourceUrl: "https://x.com/Astronaut_1216/status/2096882917545054609",
    covers: ["/covers/hang-ui.jpg"],
    model: "Seedance / H3 · 9:16 · 15s",
    aspect: "9/16",
    date: "2026-09-07",
    prompt: `15秒，竖屏 9:16。

以提供的个人主页截图作为视频的唯一视觉基础。输入截图本身从第一帧开始就完整铺满整个视频画面，四边贴合画面边缘，始终全屏显示，不留黑边，不留额外边框，不做缩放，不做平移，不做旋转，不做透视变化，不做重新构图。镜头全程完全固定。

不要重新设计页面，不要重绘成另一种界面风格。除人物和被人物直接作用到的文字之外，其他所有界面元素都保持原位。

将圆形头像中的成年男性作为唯一角色参照。角色必须让人一眼看出就是头像里的同一个男人。上半身服装必须严格延续头像中实际可见的上衣。头像中看不到的下半身，固定补全为蓝色牛仔裤。整个视频中不允许换装。

【0.0～2.8秒】
画面完全静止。只有圆形头像内部的人开始动。男人先看一眼圆形边缘，露出“洞口太小”的明确表情，然后用双手撑住头像圆框的左右边缘，用力往外挤。动作必须明确分步骤：先把头和一侧肩膀挤出，再把另一侧肩膀和胸口挤出，再拖出腰部，最后把双腿完全拖出来。头像圆框本身不变形、不破裂、不移动。

【2.8～3.8秒】
男人完整脱离头像后，跳到中部的黑色横向 UI 栏上，把黑条明确当作地面。落地必须有重量感：黑条先轻微下压再回弹，其他 UI 元素同步发生一次短暂轻微震动。注意，这是 UI 被震了一下，不是镜头抖动。

【3.8～9.2秒】
男人站在黑色横向 UI 栏上，用右手掏出一把手枪，逐段清理黑条上方的文字和数字。只允许清理文字与数字，不允许误伤图片、头像、图标和按钮轮廓。每次射击都必须：瞄准 → 开枪 → 文字出现裂纹 → 碎裂成实体碎片 → 向下坠落 → 留下真实空白。不要让文字凭空消失。

【9.2～10.8秒】
补枪清理零散残留，直到黑条上方出现一块完整可用的空白区域。

【10.8～12.6秒】
面向空白区域快速连续开 4 枪，一枪一个字，从左到右：
第1枪：请
第2枪：看
第3枪：下
第4枪：集
最终四个白色大字必须准确显示为：请看下集。

【12.6～15.0秒】
男人放下手枪，确认成果，再慢慢回头看向镜头，嘴角微微扬起。结尾构图必须同时包含：站在黑条上的男人、黑条上方的“请看下集”、仍然完整铺满画面的原始个人主页。`,
    notes: "阿杭整理的是一套导演四步法：先锁死舞台，再给演员做身份证，再把动作切成秒表，最后给每一步加力学。原提示词来自 @Linkc 对津軽作品的复盘。",
  },
  {
    id: "hang-hypit",
    title: "Hypit 换角克隆",
    kicker: "结构复用",
    excerpt: "克隆的不是某一帧，是一条视频背后的生产结构。换猫、换品、换台词。",
    medium: "video",
    tags: ["日常", "风格系统"],
    style: "可编辑视频程序",
    creatorId: "hang",
    sourceUrl: "https://x.com/Astronaut_1216/status/2099705516129992944",
    covers: ["/covers/hang-hypit.jpg"],
    model: "Hypit + GPT Image 2 + Seedance 2 Mini",
    aspect: "9/16",
    date: "2026-09-15",
    prompt: `/hypit 模仿这个 YouTube Shorts 视频，保留原视频的榜单结构、四个动作笑点和竖屏节奏，把角色全部换成照片里的两只猫。

可替换写法：
/hypit clone this video
保留“小猫求妈妈买猫粮”的剧情结构，把白猫换成我提供的柠檬帽橘猫，把原猫粮换成指定产品，台词改成新的口播句。

真正要锁住的不是画面风格，而是：
1. 语义段落（几个笑点 / 几个动作）
2. 角色与产品露出的位置
3. 字幕、音轨、排名动画的时间关系
4. 生成后仍能在时间轴里继续改的 Workflow

视频模型负责生成素材；Hypit 负责把 Script、Media、Semantic Time、Tracks、Graphics 和 Render 组织成一套可追踪、可修改、可复用的视频程序。Clone 的不是某一帧，是一条视频背后的生产结构。`,
    notes: "作者强调：偶尔抽中一个漂亮镜头不值钱，同一套结构能不能持续换角色、换产品、换文案才值钱。",
  },
];
