import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronLeft,
  ChevronRight,
  CircleHelp,
  Copy,
  Film,
  Github,
  Heart,
  Home,
  Image as ImageIcon,
  LayoutGrid,
  RotateCcw,
  Search,
  Shuffle,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useFavorites } from "@/lib/favorites";
import { brand } from "@/lib/brand";
import {
  categoryName,
  countMedium,
  filterPrompts,
  folio,
  parseNo,
  promptByNo,
  scenarioNames,
  useName,
  type CategoryId,
  type FolioPrompt,
  type Medium,
  type UseId,
} from "@/lib/folio";

type SortOrder = "collected" | "recommended" | "latest" | "number";
const REPO_URL = "https://github.com/chrisqu9527/folio-card";

export function Atlas() {
  const [query, setQuery] = useState("");
  const [medium, setMedium] = useState<Medium>("image");
  const [category, setCategory] = useState<CategoryId | "all">("all");
  const [scene, setScene] = useState<UseId | "all">("all");
  const [selected, setSelected] = useState<FolioPrompt | null>(null);
  const [sort, setSort] = useState<SortOrder>("collected");
  const [onlyFavorites, setOnlyFavorites] = useState(false);
  const [compact, setCompact] = useState(true);
  const [helpOpen, setHelpOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const copyTimer = useRef<number | undefined>(undefined);
  const copyRequest = useRef(0);
  const [missing, setMissing] = useState<string | null>(null);
  const [hydrated, setHydrated] = useState(false);
  const savedIds = useFavorites((state) => state.ids);
  const toggleFavorite = useFavorites((state) => state.toggle);
  const favoriteIds = useMemo(() => (hydrated ? savedIds : []), [hydrated, savedIds]);
  const columns = useColumnCount(compact);

  const results = useMemo(() => {
    const matches = filterPrompts(query, category, medium, scene).filter(
      (p) => !onlyFavorites || favoriteIds.includes(p.id),
    );
    if (sort === "collected") matches.sort((a, b) => Number(b.no) - Number(a.no));
    if (sort === "latest")
      matches.sort((a, b) => b.date.localeCompare(a.date) || Number(b.no) - Number(a.no));
    if (sort === "number") matches.sort((a, b) => Number(a.no) - Number(b.no));
    return matches;
  }, [query, category, medium, scene, sort, onlyFavorites, favoriteIds]);
  const masonry = useMemo(() => {
    const groups: FolioPrompt[][] = Array.from({ length: columns }, () => []);
    results.forEach((p, index) => groups[index % columns].push(p));
    return groups;
  }, [results, columns]);

  useEffect(() => {
    setHydrated(true);
    const fromHash = () => {
      let no: string | null;
      try {
        no = parseNo(decodeURIComponent(window.location.hash.slice(1)));
      } catch {
        return;
      }
      if (!no) return;
      const hit = promptByNo(no);
      setQuery(no);
      setMissing(hit ? null : no);
      if (hit) {
        setMedium(hit.medium);
        setCategory("all");
        setScene("all");
        setOnlyFavorites(false);
        setSelected(hit);
      }
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);
  useEffect(() => {
    setCopied(false);
    return () => {
      window.clearTimeout(copyTimer.current);
      copyTimer.current = undefined;
      copyRequest.current += 1;
    };
  }, [selected?.no]);

  function choose(p: FolioPrompt) {
    setSelected(p);
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}${window.location.search}#${p.no}`,
    );
  }
  function closeDetail() {
    setSelected(null);
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
  }
  function resetFilters() {
    setQuery("");
    setCategory("all");
    setScene("all");
    setOnlyFavorites(false);
    setMissing(null);
  }
  function pickMedium(next: Medium) {
    setMedium(next);
    resetFilters();
  }
  function onQuery(value: string) {
    setQuery(value);
    const no = parseNo(value);
    const hit = no ? promptByNo(no) : undefined;
    setMissing(no && !hit ? no : null);
    if (hit) {
      setMedium(hit.medium);
      setCategory("all");
      setScene("all");
      setOnlyFavorites(false);
    }
  }
  async function copyPrompt(p: FolioPrompt) {
    const request = ++copyRequest.current;
    try {
      await navigator.clipboard.writeText(p.prompt);
    } catch {
      const area = document.createElement("textarea");
      area.value = p.prompt;
      area.setAttribute("readonly", "");
      document.body.appendChild(area);
      area.select();
      const success = document.execCommand("copy");
      area.remove();
      if (!success) return;
    }
    if (request !== copyRequest.current) return;
    window.clearTimeout(copyTimer.current);
    setCopied(true);
    copyTimer.current = window.setTimeout(() => {
      setCopied(false);
      copyTimer.current = undefined;
    }, 1800);
  }

  return (
    <div className="folio-app">
      <h1 className="sr-only">{brand.name}</h1>
      <aside className="folio-rail" aria-label="主要导航">
        <button
          className="folio-logo"
          onClick={() => {
            pickMedium("image");
            closeDetail();
          }}
          aria-label={`${brand.name}首页`}
          title={brand.name}
        >
          <img src={brand.mark} alt="" width={44} height={44} />
        </button>
        <nav>
          <button
            className={`rail-button ${!onlyFavorites && medium === "image" ? "is-active" : ""}`}
            aria-label="图像风格库"
            title="图像风格"
            onClick={() => pickMedium("image")}
          >
            <Home />
          </button>
          <button
            className={`rail-button ${!onlyFavorites && medium === "video" ? "is-active" : ""}`}
            aria-label="视频风格库"
            title="视频风格"
            onClick={() => pickMedium("video")}
          >
            <Film />
          </button>
          <button
            className={`rail-button ${onlyFavorites ? "is-active" : ""}`}
            aria-label="我的收藏"
            title="我的收藏"
            onClick={() => {
              setOnlyFavorites(true);
              setQuery("");
              setCategory("all");
              setScene("all");
              setMissing(null);
            }}
          >
            <Heart />
          </button>
        </nav>
        <div className="folio-rail-bottom">
          <button className="rail-button" aria-label="使用指南" onClick={() => setHelpOpen(true)}>
            <CircleHelp />
          </button>
        </div>
      </aside>
      <div className="folio-workspace">
        <header className="folio-topbar">
          <button
            className="folio-mobile-brand"
            aria-label={`${brand.name}首页`}
            onClick={() => {
              pickMedium("image");
              closeDetail();
            }}
          >
            <img src={brand.mark} alt="" width={32} height={32} />
            <span>{brand.shortName}</span>
          </button>
          <nav className="folio-categories" aria-label="应用场景">
            <button
              className={category === "all" ? "is-active" : ""}
              onClick={() => {
                setCategory("all");
                setQuery("");
                setMissing(null);
              }}
            >
              全部
            </button>
            {folio.categories
              .filter((c) => c.id === category || countMedium(medium, c.id, scene) > 0)
              .map((c) => (
                <button
                  key={c.id}
                  className={category === c.id ? "is-active" : ""}
                  title={c.blurb}
                  aria-pressed={category === c.id}
                  onClick={() => {
                    setCategory(c.id);
                    setQuery("");
                    setMissing(null);
                  }}
                >
                  {c.name}
                </button>
              ))}
          </nav>
          <div className="folio-header-actions">
            <a
              className="icon-button"
              href={REPO_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub 开源仓库"
            >
              <Github />
            </a>
            <button className="solid-button" onClick={() => setHelpOpen(true)}>
              使用指南
            </button>
          </div>
        </header>
        <main className="folio-main">
          <section className="folio-toolbar" aria-label="搜索与筛选">
            <div className="folio-medium-tabs" aria-label="媒体类型">
              <button
                className={medium === "image" ? "is-active" : ""}
                aria-pressed={medium === "image"}
                onClick={() => pickMedium("image")}
              >
                <ImageIcon />
                图像风格
              </button>
              <button
                className={medium === "video" ? "is-active" : ""}
                aria-pressed={medium === "video"}
                onClick={() => pickMedium("video")}
              >
                <Film />
                视频风格
              </button>
            </div>
            <form
              className="folio-search"
              onSubmit={(e) => {
                e.preventDefault();
                if (results[0]) choose(results[0]);
              }}
            >
              <Search aria-hidden="true" />
              <label className="sr-only" htmlFor="folio-q">
                搜索场景、编号、风格或作者
              </label>
              <input
                id="folio-q"
                value={query}
                onChange={(e) => onQuery(e.target.value)}
                placeholder="搜索场景、编号、风格或作者"
                inputMode="search"
                autoComplete="off"
              />
              <span className="folio-result-count" aria-live="polite">
                共 {results.length} 个
              </span>
            </form>
            <div className="folio-controls">
              <button
                className={`icon-button ${onlyFavorites ? "is-active" : ""}`}
                aria-label={onlyFavorites ? "查看全部风格" : "只看收藏"}
                aria-pressed={onlyFavorites}
                title={onlyFavorites ? "查看全部风格" : "只看收藏"}
                onClick={() => setOnlyFavorites((v) => !v)}
              >
                <Heart />
              </button>
              <div className="folio-sort" aria-label="排序方式">
                {(
                  [
                    ["collected", "收录"],
                    ["recommended", "推荐"],
                    ["latest", "最新"],
                    ["number", "编号"],
                  ] as const
                ).map(([value, label]) => (
                  <button
                    key={value}
                    className={sort === value ? "is-active" : ""}
                    aria-pressed={sort === value}
                    onClick={() => setSort(value)}
                  >
                    {label}
                  </button>
                ))}
              </div>
              <button
                className="icon-button"
                aria-label="重置筛选"
                title="重置筛选"
                onClick={resetFilters}
              >
                <RotateCcw />
              </button>
              <button
                className={`icon-button ${compact ? "is-active" : ""}`}
                aria-label={compact ? "切换宽松布局" : "切换紧凑布局"}
                aria-pressed={compact}
                title={compact ? "切换宽松布局" : "切换紧凑布局"}
                onClick={() => setCompact((v) => !v)}
              >
                <LayoutGrid />
              </button>
            </div>
          </section>
          <p className="folio-scenario-note">
            {category === "all"
              ? "你想用画面做什么？按上方场景找灵感，也可以搜索具体的风格。"
              : folio.categories.find((c) => c.id === category)?.blurb}
          </p>
          {medium === "video" && (
            <nav className="folio-scenes" aria-label="视频形式">
              <button
                className={scene === "all" ? "is-active" : ""}
                onClick={() => {
                  setScene("all");
                  setQuery("");
                  setMissing(null);
                }}
              >
                全部形式
              </button>
              {folio.uses
                .filter((u) => u.id === scene || countMedium(medium, category, u.id) > 0)
                .map((u) => (
                  <button
                    key={u.id}
                    className={scene === u.id ? "is-active" : ""}
                    onClick={() => {
                      setScene(u.id);
                      setQuery("");
                      setMissing(null);
                    }}
                  >
                    {u.name}
                  </button>
                ))}
            </nav>
          )}
          {results.length ? (
            <div
              className="folio-masonry"
              style={{ "--folio-columns": columns } as CSSProperties}
              aria-label="风格图鉴"
            >
              {masonry.map((group, column) => (
                <div className="folio-column" key={column}>
                  {group.map((p, index) => (
                    <StyleCard
                      key={p.no}
                      prompt={p}
                      eager={index < 2}
                      favorite={favoriteIds.includes(p.id)}
                      onOpen={() => choose(p)}
                      onFavorite={() => toggleFavorite(p.id)}
                    />
                  ))}
                </div>
              ))}
            </div>
          ) : (
            <div className="folio-empty" role="status">
              <Search />
              <h2>
                {missing
                  ? `没有编号 ${missing}`
                  : onlyFavorites
                    ? "这里还没有收藏"
                    : "没有找到匹配的风格"}
              </h2>
              <p>
                {missing
                  ? `已有编号为 001–${String(folio.count).padStart(3, "0")}。试试其他编号。`
                  : onlyFavorites
                    ? "点击图片旁的爱心，把喜欢的风格留在这里。"
                    : "换一个关键词，或清除筛选再看看。"}
              </p>
              <button className="solid-button" onClick={resetFilters}>
                查看全部风格
              </button>
            </div>
          )}
        </main>
        <footer className="folio-bottom-bar">
          <div className="folio-footer-brand">
            <img src={brand.mark} alt="" width={40} height={40} />
            <div>
              <strong>
                {brand.name} · {folio.count} 个已编号风格
              </strong>
              <p>原始提示词与作者来源，一起保留。</p>
            </div>
          </div>
          <button
            className="solid-button"
            disabled={!results.length}
            onClick={() => choose(results[Math.floor(Math.random() * results.length)])}
          >
            <Shuffle />
            随机看一条
          </button>
        </footer>
      </div>
      <Dialog
        open={selected !== null}
        onOpenChange={(open) => {
          if (!open) closeDetail();
        }}
      >
        <DialogContent className="folio-detail-dialog">
          {selected && (
            <PromptSheet
              key={selected.no}
              prompt={selected}
              favorite={favoriteIds.includes(selected.id)}
              onFavorite={() => toggleFavorite(selected.id)}
              copied={copied}
              onCopy={() => void copyPrompt(selected)}
            />
          )}
        </DialogContent>
      </Dialog>
      <Dialog open={helpOpen} onOpenChange={setHelpOpen}>
        <DialogContent className="folio-help-dialog">
          <DialogTitle>把喜欢的风格，带到你的创作里</DialogTitle>
          <DialogDescription>{brand.name} · 图像与视频提示词编号库</DialogDescription>
          <ol>
            <li>
              <strong>先选用途。</strong>
              从你要完成的事出发找图；同一条可以用于多个场景。视频还能按形式细选。
            </li>
            <li>
              <strong>记住编号。</strong>输入 016、#16 或“风格16”，就能找到同一条。
            </li>
            <li>
              <strong>复制原文。</strong>打开图片，复制提示词；有【槽位】时，只替换主体。
            </li>
          </ol>
          <p>提示词和预览图归原作者。每条保留来源链接。收藏保存在当前浏览器。</p>
          <a
            className="solid-button"
            href={`${REPO_URL}/tree/main/skills/folio-style`}
            target="_blank"
            rel="noreferrer"
          >
            <Github />
            获取 FOLIO Skill
            <ArrowUpRight />
          </a>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function useColumnCount(compact: boolean) {
  const [count, setCount] = useState(4);
  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;
      const base = width >= 1500 ? 5 : width >= 1100 ? 4 : width >= 760 ? 3 : 2;
      setCount(compact ? base : Math.max(2, base - 1));
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [compact]);
  return count;
}

function StyleCard({
  prompt: p,
  eager,
  favorite,
  onOpen,
  onFavorite,
}: {
  prompt: FolioPrompt;
  eager: boolean;
  favorite: boolean;
  onOpen: () => void;
  onFavorite: () => void;
}) {
  return (
    <article className="folio-card" data-no={p.no}>
      <button className="folio-card-cover" onClick={onOpen} aria-label={`查看 ${p.no} ${p.title}`}>
        <img src={p.covers[0]} alt={p.title} loading={eager ? "eager" : "lazy"} decoding="async" />
        <span className="folio-card-number">{p.no}</span>
        {p.medium === "video" && (
          <span className="folio-video-marker">
            <Film />
            视频
          </span>
        )}
      </button>
      <div className="folio-card-info">
        <div className="folio-card-meta">
          <span>
            {categoryName[p.category]}
            {p.use ? ` · ${useName[p.use]}` : ""}
          </span>
          <span>{p.covers.length} 张</span>
        </div>
        <button className="folio-card-title" onClick={onOpen}>
          {p.title}
        </button>
        <div className="folio-card-credit">
          <span>@{p.creator.handle}</span>
          <button
            className={`folio-favorite ${favorite ? "is-active" : ""}`}
            aria-label={`${favorite ? "取消收藏" : "收藏"} ${p.no}`}
            aria-pressed={favorite}
            onClick={onFavorite}
          >
            <Heart />
          </button>
        </div>
      </div>
    </article>
  );
}

function PromptSheet({
  prompt: p,
  favorite,
  onFavorite,
  copied,
  onCopy,
}: {
  prompt: FolioPrompt;
  favorite: boolean;
  onFavorite: () => void;
  copied: boolean;
  onCopy: () => void;
}) {
  const [frame, setFrame] = useState(0);
  const [previewOpen, setPreviewOpen] = useState(false);
  const src = p.covers[frame] ?? p.covers[0];
  function next(delta: number) {
    setFrame((n) => (n + delta + p.covers.length) % p.covers.length);
  }
  return (
    <div className="folio-detail-layout">
      <div className="folio-detail-gallery">
        <Dialog open={previewOpen} onOpenChange={setPreviewOpen}>
          <DialogTrigger asChild>
            <button className="folio-detail-image" aria-label="放大图片">
              <img src={src} alt={p.title} />
              <span>
                查看原图 · {frame + 1}/{p.covers.length}
              </span>
            </button>
          </DialogTrigger>
          <DialogContent
            className="folio-lightbox"
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") next(1);
              if (e.key === "ArrowLeft") next(-1);
            }}
          >
            <DialogTitle className="sr-only">{p.title} 图片预览</DialogTitle>
            <DialogDescription className="sr-only">
              使用左右方向键切换图片，按 Escape 关闭。
            </DialogDescription>
            <img src={src} alt={p.title} />
            {p.covers.length > 1 && (
              <>
                <button
                  className="lightbox-prev icon-button"
                  aria-label="上一张"
                  onClick={() => next(-1)}
                >
                  <ChevronLeft />
                </button>
                <button
                  className="lightbox-next icon-button"
                  aria-label="下一张"
                  onClick={() => next(1)}
                >
                  <ChevronRight />
                </button>
              </>
            )}
          </DialogContent>
        </Dialog>
        {p.covers.length > 1 && (
          <div className="folio-thumbnails">
            {p.covers.map((cover, i) => (
              <button
                key={cover}
                className={i === frame ? "is-active" : ""}
                aria-label={`查看样张 ${i + 1}`}
                aria-pressed={i === frame}
                onClick={() => setFrame(i)}
              >
                <img src={cover} alt={`${p.title} 样张 ${i + 1}`} />
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="folio-detail-copy">
        <p className="folio-detail-kicker">
          {p.no} / {categoryName[p.category]} · {p.medium === "image" ? "图像" : "视频"}
          {p.use ? ` · ${useName[p.use]}` : ""}
        </p>
        <DialogTitle>{p.title}</DialogTitle>
        <DialogDescription>{p.style}</DialogDescription>
        <p className="folio-detail-excerpt">适用场景：{scenarioNames(p)}</p>
        <p className="folio-detail-excerpt">{p.excerpt}</p>
        <div className="folio-detail-actions">
          <button className="solid-button" onClick={onCopy}>
            {copied ? <Check /> : <Copy />}
            {copied ? "已复制提示词" : "复制提示词"}
          </button>
          <button
            className={`icon-button ${favorite ? "is-active" : ""}`}
            aria-label={favorite ? "取消收藏" : "收藏风格"}
            aria-pressed={favorite}
            onClick={onFavorite}
          >
            <Heart />
          </button>
        </div>
        <div className="folio-prompt-heading">
          <strong>原始提示词</strong>
          <span>{p.model ?? "原帖原文"}</span>
        </div>
        <pre className="folio-prompt-text">{p.prompt}</pre>
        {p.slots.length > 0 && (
          <p className="folio-detail-note">
            可替换：{p.slots.map((s) => `【${s}】`).join("、")}。只换槽位，其余句子保留。
          </p>
        )}
        {p.notes && <p className="folio-detail-note">{p.notes}</p>}
        <div className="folio-detail-source">
          <div>
            <strong>{p.creator.name}</strong>
            <span>
              @{p.creator.handle} · {p.date}
            </span>
          </div>
          <a href={p.sourceUrl} target="_blank" rel="noreferrer">
            查看原帖
            <ArrowUpRight />
          </a>
        </div>
      </div>
    </div>
  );
}
