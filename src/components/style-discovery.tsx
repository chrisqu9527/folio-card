import { useMemo, useRef, useState } from "react";
import { ArrowRight, Check, Copy, Heart, SlidersHorizontal } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { promptByNo, type FolioPrompt } from "@/lib/folio";
import previews from "@/data/discovery-previews.json";
import {
  creationTasks,
  styleKits,
  composeStylePrompt,
  type CreationTask,
  type CreativeBrief,
  type StyleKit,
} from "@/lib/style-kits";

// A changed source automatically falls back to its full cover until previews are regenerated.
function previewCover(prompt: FolioPrompt) {
  const item = previews[prompt.no as keyof typeof previews];
  return item?.source === prompt.covers[0] ? item.preview : prompt.covers[0];
}

export function StyleDiscovery({
  saved,
  favorites,
  onFavorite,
  onLibrary,
  onPrompt,
  materialCount,
}: {
  saved: boolean;
  favorites: string[];
  onFavorite: (id: string) => void;
  onLibrary: (savedOnly?: boolean) => void;
  onPrompt: (prompt: FolioPrompt) => void;
  materialCount: number;
}) {
  const [task, setTask] = useState<CreationTask | "all">("all");
  const [selected, setSelected] = useState<StyleKit | null>(null);
  const [selectedTopic, setSelectedTopic] = useState("");
  const [compareOpen, setCompareOpen] = useState(false);
  const [comparison, setComparison] = useState<string[]>([]);
  const [comparisonTopic, setComparisonTopic] = useState("为什么冰会浮在水面上");
  const kits = useMemo(
    () =>
      styleKits.filter((k) =>
        saved ? favorites.includes(`kit:${k.id}`) : task === "all" || k.tasks.includes(task),
      ),
    [saved, favorites, task],
  );
  const savedMaterials = favorites.filter((id) => !id.startsWith("kit:")).length;
  function toggleCompare(id: string) {
    setComparison((ids) =>
      ids.includes(id) ? ids.filter((x) => x !== id) : ids.length < 3 ? [...ids, id] : ids,
    );
  }
  return (
    <div className="discovery">
      <section className={`discovery-intro ${saved ? "discovery-intro-saved" : ""}`}>
        <div>
          <p className="discovery-eyebrow">FOLIO · 画风灵感库</p>
          <h1>
            {saved ? (
              "你的常用画风，下次接着用。"
            ) : (
              <>
                <span>好画风，</span>
                <span>也要用得上。</span>
              </>
            )}
          </h1>
          <p>
            {saved
              ? "把适合自己的方案留在这里，换一个主题，延续同一种表达。"
              : "给文章配图，把知识画成漫画。找到喜欢的风格，看看它能做什么，再换上你的内容。"}
          </p>
          <div className="discovery-intro-actions">
            {!saved && (
              <a className="solid-button" href="#style-choices">
                按用途选画风 <ArrowRight />
              </a>
            )}
            <button className="discovery-link" onClick={() => onLibrary(saved)}>
              {saved ? `收藏的素材 · ${savedMaterials}` : `浏览 ${materialCount} 个素材`}
              <ArrowRight />
            </button>
          </div>
        </div>
        {!saved && (
          <div className="discovery-showcase" aria-label="库内画风精选">
            {[
              { no: "036", label: "把日常画成故事", kind: "叙事插画" },
              { no: "604", label: "让知识值得细看", kind: "自然图鉴" },
            ].map(({ no, label, kind }) => {
              const original = promptByNo(no)!;
              return (
                <button
                  key={no}
                  className={`showcase-piece showcase-${no}`}
                  onClick={() => onPrompt(original)}
                  aria-label={`查看 ${no} ${original.title}`}
                >
                  <div className="showcase-image">
                    <img
                      src={previewCover(original)}
                      alt={original.title}
                      fetchPriority={no === "036" ? "high" : "auto"}
                      width={no === "036" ? 941 : 1024}
                      height={no === "036" ? 1672 : 1024}
                    />
                  </div>
                  <span className="showcase-caption">
                    <span>
                      <strong>{label}</strong>
                      <small>
                        {kind} · #{no}
                      </small>
                    </span>
                    <ArrowRight aria-hidden="true" />
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </section>
      <div className="discovery-section-heading" id="style-choices">
        <div>
          <p className="discovery-eyebrow">{saved ? "YOUR COLLECTION" : "FIND YOUR STYLE"}</p>
          <h2>{saved ? "已收藏的方案" : "这次，你想做什么？"}</h2>
        </div>
        <p>{saved ? "收藏仅保存在当前浏览器。" : "从用途出发，找到适合你的表达。"}</p>
      </div>
      {!saved && (
        <nav className="creation-tasks" aria-label="想完成的创作">
          <button
            aria-pressed={task === "all"}
            className={task === "all" ? "is-active" : ""}
            onClick={() => setTask("all")}
          >
            <strong>全部画风</strong>
          </button>
          {creationTasks.map((t) => (
            <button
              key={t.id}
              aria-pressed={task === t.id}
              className={task === t.id ? "is-active" : ""}
              onClick={() => setTask(task === t.id ? "all" : t.id)}
            >
              <strong>{t.name}</strong>
            </button>
          ))}
        </nav>
      )}
      <div className="discovery-results-heading" aria-live="polite">
        <div>
          <p>
            {saved
              ? "已收藏的方案"
              : task === "all"
                ? "8 种精选方案 · 看示例，学用法"
                : `适合「${creationTasks.find((t) => t.id === task)?.name}」的画风`}
          </p>
        </div>
        {!saved && task !== "all" && (
          <button className="discovery-link" onClick={() => setTask("all")}>
            看全部 8 种
          </button>
        )}
      </div>
      {kits.length ? (
        <div className="kit-grid">
          {kits.map((kit) => (
            <KitCard
              key={kit.id}
              kit={kit}
              favorite={favorites.includes(`kit:${kit.id}`)}
              onFavorite={() => onFavorite(`kit:${kit.id}`)}
              onOpen={() => {
                setSelectedTopic("");
                setSelected(kit);
              }}
              compared={comparison.includes(kit.id)}
              compareDisabled={comparison.length === 3 && !comparison.includes(kit.id)}
              onCompare={() => toggleCompare(kit.id)}
            />
          ))}
        </div>
      ) : (
        <div className="folio-empty" role="status">
          <Heart />
          <h2>把喜欢的画风留在这里</h2>
          <p>在画风卡片上点一下爱心，下次直接打开方案，换上新主题。</p>
          <button
            className="solid-button"
            onClick={() => {
              setSelectedTopic("");
              setSelected(styleKits[0]);
            }}
          >
            先看看角色讲解漫画
          </button>
        </div>
      )}
      {!saved && (
        <div className="discovery-library-note">
          <div>
            <strong>想探索更多？</strong>
            <p>全部素材保留图像、视频、作者来源与原始提示词。</p>
          </div>
          <button className="outline-button" onClick={() => onLibrary()}>
            浏览全部素材
            <ArrowRight />
          </button>
        </div>
      )}
      {comparison.length > 0 && (
        <aside className="compare-tray" aria-label="画风对比选择">
          <div>
            <strong>已选 {comparison.length} / 3 种</strong>
            <span>同一个选题，看看不同的表达方式</span>
          </div>
          <button className="discovery-link" onClick={() => setComparison([])}>
            清空
          </button>
          <button
            className="solid-button"
            disabled={comparison.length < 2}
            onClick={() => setCompareOpen(true)}
          >
            比较画风
            <SlidersHorizontal />
          </button>
        </aside>
      )}
      <Dialog
        open={selected !== null}
        onOpenChange={(open) => {
          if (!open) setSelected(null);
        }}
      >
        <DialogContent className="kit-dialog">
          {selected && (
            <KitDetail
              key={selected.id}
              kit={selected}
              initialTopic={selectedTopic}
              favorite={favorites.includes(`kit:${selected.id}`)}
              onFavorite={() => onFavorite(`kit:${selected.id}`)}
            />
          )}
        </DialogContent>
      </Dialog>
      <Dialog open={compareOpen} onOpenChange={setCompareOpen}>
        <DialogContent className="compare-dialog">
          <DialogTitle>同一选题，可以怎么画？</DialogTitle>
          <DialogDescription>
            下面是表达方案对比。配图为库内原作，尚未按你的选题重新生成。
          </DialogDescription>
          <label className="brief-field">
            用一个选题来比较
            <input
              value={comparisonTopic}
              maxLength={120}
              onChange={(e) => setComparisonTopic(e.target.value)}
            />
          </label>
          <div className="comparison-grid">
            {comparison
              .map((id) => styleKits.find((k) => k.id === id)!)
              .map((kit) => (
                <article key={kit.id}>
                  <img
                    src={promptByNo(kit.sources[0])!.covers[0]}
                    alt={`${kit.name}的原作风格参考`}
                  />
                  <p className="sample-caption">原作风格参考 · 非本选题成品</p>
                  <h3>{kit.name}</h3>
                  <p>
                    <strong>{comparisonTopic.trim() || "你的选题"}</strong>
                  </p>
                  <p>{kit.layout}</p>
                  <dl>
                    <dt>适合产出</dt>
                    <dd>{kit.outputs.join(" / ")}</dd>
                    <dt>要准备</dt>
                    <dd>{kit.inputs}</dd>
                  </dl>
                  <button
                    className="solid-button"
                    onClick={() => {
                      setCompareOpen(false);
                      setSelectedTopic(comparisonTopic);
                      setSelected(kit);
                    }}
                  >
                    选这个方案
                    <ArrowRight />
                  </button>
                </article>
              ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function KitCard({
  kit,
  favorite,
  onFavorite,
  onOpen,
  compared,
  compareDisabled,
  onCompare,
}: {
  kit: StyleKit;
  favorite: boolean;
  onFavorite: () => void;
  onOpen: () => void;
  compared: boolean;
  compareDisabled: boolean;
  onCompare: () => void;
}) {
  const original = promptByNo(kit.sources[0])!;
  return (
    <article className="kit-card">
      <button className="kit-cover" onClick={onOpen} aria-label={`查看${kit.name}的应用示例`}>
        <img
          src={previewCover(original)}
          alt={`${original.title}，${kit.name}原作示例`}
          loading="lazy"
        />
        <span className="kit-cover-label">原作参考 · #{original.no}</span>
      </button>
      <div className="kit-card-head">
        <div>
          <button className="kit-title" onClick={onOpen}>
            {kit.name}
          </button>
          <span>{kit.tone}</span>
        </div>
        <button
          className={`folio-favorite ${favorite ? "is-active" : ""}`}
          onClick={onFavorite}
          aria-pressed={favorite}
          aria-label={`${favorite ? "取消收藏" : "收藏"}${kit.name}`}
        >
          <Heart />
        </button>
      </div>
      <div className="kit-card-body">
        <p>{kit.summary}</p>
        <div className="kit-outputs">
          {kit.outputs.map((o) => (
            <span key={o}>{o}</span>
          ))}
        </div>
        <div className="kit-card-actions">
          <button onClick={onOpen}>
            看示例与使用方法 <ArrowRight aria-hidden="true" />
          </button>
          <button
            aria-pressed={compared}
            aria-label={`${compared ? "移出对比" : "加入对比"}${kit.name}`}
            disabled={compareDisabled}
            onClick={onCompare}
          >
            {compared ? <Check /> : null}
            {compared ? "已选" : "对比"}
          </button>
        </div>
      </div>
    </article>
  );
}

function KitDetail({
  kit,
  favorite,
  onFavorite,
  initialTopic,
}: {
  kit: StyleKit;
  favorite: boolean;
  onFavorite: () => void;
  initialTopic: string;
}) {
  const [sourceNo, setSourceNo] = useState(kit.sources[0]);
  const [frame, setFrame] = useState(0);
  const [brief, setBrief] = useState<CreativeBrief>({
    topic: initialTopic,
    content: "",
    character: "",
    audience: "普通读者",
    ratio: "3:4 竖版",
  });
  const [draft, setDraft] = useState("");
  const [edited, setEdited] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const topicRef = useRef<HTMLInputElement>(null);
  const source = promptByNo(sourceNo)!;
  function update<K extends keyof CreativeBrief>(key: K, value: CreativeBrief[K]) {
    setBrief((prev) => ({ ...prev, [key]: value }));
    setEdited(true);
  }
  function goToForm() {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    topicRef.current?.focus({ preventScroll: true });
  }
  return (
    <div className="kit-detail-scroll">
      <div className="kit-detail-top">
        <section className="kit-original-gallery" aria-label="原作示例">
          <a
            href={source.covers[frame]}
            target="_blank"
            rel="noreferrer"
            aria-label="查看这张原作大图"
          >
            <img className="kit-original-image" src={source.covers[frame]} alt={source.title} />
          </a>
          <p className="sample-caption">
            原作者示例 · {source.title} · {frame + 1}/{source.covers.length} · 点图放大
          </p>
          <div className="kit-source-tabs">
            {kit.sources.map((no) => (
              <button
                key={no}
                aria-pressed={no === sourceNo}
                onClick={() => {
                  setSourceNo(no);
                  setFrame(0);
                }}
              >
                参考 #{no}
              </button>
            ))}
          </div>
          {source.covers.length > 1 && (
            <div className="folio-thumbnails">
              {source.covers.map((cover, i) => (
                <button
                  key={cover}
                  className={i === frame ? "is-active" : ""}
                  aria-pressed={i === frame}
                  aria-label={`查看第${i + 1}张原作`}
                  onClick={() => setFrame(i)}
                >
                  <img src={cover} alt="" />
                </button>
              ))}
            </div>
          )}
          <a className="discovery-link" href={source.sourceUrl} target="_blank" rel="noreferrer">
            @{source.creator.handle} · 查看原始来源
            <ArrowRight />
          </a>
        </section>
        <section className="kit-overview">
          <p className="discovery-eyebrow">精选画风方案 / {kit.tone}</p>
          <DialogTitle>{kit.name}</DialogTitle>
          <DialogDescription>{kit.summary}</DialogDescription>
          <dl className="kit-facts">
            <dt>能做什么</dt>
            <dd>{kit.outputs.join(" · ")}</dd>
            <dt>需要准备</dt>
            <dd>{kit.inputs}</dd>
            <dt>使用建议</dt>
            <dd>{kit.caution}</dd>
          </dl>
          <div className="kit-primary-actions">
            <button className="solid-button" onClick={goToForm}>
              用我的内容
              <ArrowRight />
            </button>
            <button className="outline-button" aria-pressed={favorite} onClick={onFavorite}>
              <Heart fill={favorite ? "currentColor" : "none"} />
              {favorite ? "已存为常用" : "存为常用"}
            </button>
          </div>
          <div className="kit-ideas">
            <h3>换个主题，还能这样用</h3>
            <p className="sample-caption">以下是选题与画面建议，未生成对应成品。</p>
            {kit.ideas.map((idea) => (
              <button
                key={idea.topic}
                onClick={() => {
                  setBrief((b) => ({ ...b, topic: idea.topic, content: idea.content }));
                  setEdited(true);
                  goToForm();
                }}
              >
                <span>{idea.topic}</span>
                <span>
                  填入示例
                  <ArrowRight />
                </span>
              </button>
            ))}
          </div>
        </section>
      </div>
      <section className="kit-adapt-section">
        <div className="kit-adapt-heading">
          <p className="discovery-eyebrow">把画风带到你的内容里</p>
          <h3>只需写清你想讲什么。</h3>
          <p>整理成可复制的提示词后，粘贴到你使用的生图工具；有角色参考图时一起上传。</p>
        </div>
        <form
          ref={formRef}
          className="kit-brief"
          onSubmit={(e) => {
            e.preventDefault();
            if (!brief.topic.trim() || !brief.content.trim()) return;
            setDraft(composeStylePrompt(kit, brief));
            setEdited(false);
          }}
        >
          <label className="brief-field">
            主题 <span>必填</span>
            <input
              aria-label="主题 必填"
              ref={topicRef}
              value={brief.topic}
              maxLength={120}
              required
              placeholder={`例如：${kit.ideas[0].topic}`}
              onChange={(e) => update("topic", e.target.value)}
            />
          </label>
          <label className="brief-field">
            要讲的内容 <span>必填</span>
            <textarea
              aria-label="要讲的内容 必填"
              rows={4}
              maxLength={6000}
              required
              value={brief.content}
              placeholder="写下已确认的要点、步骤或故事片段。你提供得越具体，画面安排就越明确。"
              onChange={(e) => update("content", e.target.value)}
            />
          </label>
          <div className="brief-options">
            <label className="brief-field">
              给谁看
              <select
                aria-label="给谁看"
                value={brief.audience}
                onChange={(e) => update("audience", e.target.value)}
              >
                <option>普通读者</option>
                <option>儿童与家长</option>
                <option>中学生</option>
                <option>有基础的专业读者</option>
              </select>
            </label>
            <label className="brief-field">
              画幅
              <select
                aria-label="画幅"
                value={brief.ratio}
                onChange={(e) => update("ratio", e.target.value)}
              >
                <option>3:4 竖版</option>
                <option>9:16 竖版</option>
                <option>1:1 方图</option>
                <option>16:9 横版</option>
              </select>
            </label>
          </div>
          <label className="brief-field">
            固定人物或栏目设定 <span>选填</span>
            <input
              aria-label="固定人物或栏目设定 选填"
              value={brief.character}
              maxLength={500}
              placeholder="例如：戴圆眼镜的讲解员，蓝色上衣；沿用上传的角色参考图"
              onChange={(e) => update("character", e.target.value)}
            />
          </label>
          <button
            className="solid-button"
            disabled={!brief.topic.trim() || !brief.content.trim()}
            type="submit"
          >
            {draft ? "更新适配提示词" : "生成适配提示词"}
            <ArrowRight />
          </button>
        </form>
        {draft && (
          <div className="adapted-result" aria-live="polite">
            <div className="folio-prompt-heading">
              <strong>你的适配提示词</strong>
              <span>FOLIO 改编稿</span>
            </div>
            {edited && (
              <p className="draft-notice">内容已修改，请先点击“更新适配提示词”，再复制。</p>
            )}
            <pre className="folio-prompt-text" tabIndex={0}>
              {draft}
            </pre>
            <CopyText text={draft} disabled={edited} label="复制适配提示词" />
          </div>
        )}
      </section>
      <details className="kit-source-details">
        <summary>查看原始提示词与来源 · #{source.no}</summary>
        <p>以下保留原作者原文，与上方 FOLIO 改编稿分开。</p>
        <pre className="folio-prompt-text" tabIndex={0}>
          {source.prompt}
        </pre>
        <CopyText text={source.prompt} label="复制原始提示词" />
        <p>{source.notes}</p>
        <a className="discovery-link" href={source.sourceUrl} target="_blank" rel="noreferrer">
          {source.creator.name} · 查看原帖
          <ArrowRight />
        </a>
      </details>
    </div>
  );
}

function CopyText({
  text,
  label,
  disabled = false,
}: {
  text: string;
  label: string;
  disabled?: boolean;
}) {
  const [copiedText, setCopiedText] = useState("");
  const [error, setError] = useState(false);
  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      setError(false);
    } catch {
      setError(true);
    }
  }
  const copied = copiedText === text;
  return (
    <>
      <button
        type="button"
        className="solid-button"
        disabled={disabled}
        onClick={() => void copy()}
      >
        {copied ? <Check /> : <Copy />}
        {copied ? "已复制" : label}
      </button>
      {error && <p role="alert">浏览器未允许复制，请选中上方文本后手动复制。</p>}
    </>
  );
}
