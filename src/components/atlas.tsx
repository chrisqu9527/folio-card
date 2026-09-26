import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { Check, ChevronLeft, ChevronRight, Copy, ExternalLink, X } from "lucide-react";
import {
  categoryName,
  countMedium,
  filterPrompts,
  folio,
  parseNo,
  promptByNo,
  useName,
  type CategoryId,
  type FolioPrompt,
  type Medium,
  type UseId,
} from "@/lib/folio";

export function Atlas() {
  const [query, setQuery] = useState("");
  const [medium, setMedium] = useState<Medium>("image");
  const [category, setCategory] = useState<CategoryId | "all">("all");
  const [scene, setScene] = useState<UseId | "all">("all");
  const [selectedNo, setSelectedNo] = useState<string | null>(folio.prompts[0]?.no ?? null);
  const [copied, setCopied] = useState(false);
  const [missing, setMissing] = useState<string | null>(null);
  const detailRef = useRef<HTMLElement>(null);

  const results = useMemo(
    () => filterPrompts(query, category, medium, scene),
    [query, category, medium, scene],
  );
  const selected = results.find((p) => p.no === selectedNo) ?? results[0] ?? null;

  useEffect(() => {
    const fromHash = () => {
      const no = parseNo(decodeURIComponent(window.location.hash.replace("#", "")));
      if (!no) return;
      if (!promptByNo(no)) {
        setMissing(no);
        return;
      }
      setMissing(null);
      setQuery(no);
      setMedium(promptByNo(no)!.medium);
      setScene(promptByNo(no)!.use ?? "all");
      setCategory("all");
      setSelectedNo(no);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  function choose(p: FolioPrompt) {
    setSelectedNo(p.no);
    setMissing(null);
    const url = `${window.location.pathname}${window.location.search}#${p.no}`;
    window.history.replaceState(null, "", url);
    detailRef.current?.scrollIntoView({ block: "nearest" });
  }

  function onQuery(value: string) {
    setQuery(value);
    setCopied(false);
    const no = parseNo(value);
    if (!no) {
      setMissing(null);
      return;
    }
    const hit = promptByNo(no);
    if (!hit) {
      setMissing(no);
      setSelectedNo(null);
      return;
    }
    setMissing(null);
    setMedium(hit.medium);
    setScene(hit.use ?? "all");
    setCategory("all");
    setSelectedNo(no);
  }

  function pickMedium(next: Medium) {
    setMedium(next);
    setScene("all");
    setCopied(false);
    if (category !== "all" && countMedium(next, category) === 0) setCategory("all");
  }

  function pickScene(next: UseId | "all") {
    setScene(next);
    setCopied(false);
    if (category !== "all" && countMedium("video", category, next) === 0) setCategory("all");
  }

  async function copyPrompt(p: FolioPrompt) {
    try {
      await navigator.clipboard.writeText(p.prompt);
    } catch {
      const area = document.createElement("textarea");
      area.value = p.prompt;
      area.setAttribute("readonly", "");
      document.body.appendChild(area);
      area.select();
      document.execCommand("copy");
      area.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <div className="min-h-screen">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-6 sm:px-6 lg:py-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs tracking-widest text-subtle uppercase">FOLIO / X prompt atlas</p>
              <h1 className="mt-2 text-4xl text-fg sm:text-5xl">风格编号</h1>
            </div>
            <p className="hidden text-right font-mono text-xs text-subtle sm:block">
              {String(folio.count).padStart(3, "0")} frozen
            </p>
          </div>
          <p className="max-w-xl text-sm text-muted">
            图像和视频分开。输入编号会直接跳到那一条，再复制风格。编号已冻结，不会因为以后新增而改写。
          </p>
          <form
            className="flex flex-col gap-2 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              if (selected) void copyPrompt(selected);
            }}
          >
            <label className="sr-only" htmlFor="folio-q">
              编号或关键词
            </label>
            <input
              id="folio-q"
              value={query}
              onChange={(e) => onQuery(e.target.value)}
              inputMode="search"
              autoComplete="off"
              placeholder="输入编号，例如 016"
              className="h-12 w-full rounded-md border border-border bg-surface px-4 font-mono text-base text-fg outline-none placeholder:text-subtle focus:border-accent"
            />
            <button
              type="submit"
              disabled={!selected}
              className="h-12 shrink-0 rounded-md bg-accent px-5 text-sm font-medium text-accent-fg disabled:opacity-40"
            >
              {copied ? "已复制" : "复制这条"}
            </button>
          </form>
          {missing ? (
            <p className="font-mono text-sm text-danger">没有 {missing}。编号范围是 001–{String(folio.count).padStart(3, "0")}。</p>
          ) : null}
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
        <div className="grid grid-cols-2 gap-2">
          <MediumTab
            active={medium === "image"}
            onClick={() => pickMedium("image")}
            label="图像"
            count={countMedium("image")}
          />
          <MediumTab
            active={medium === "video"}
            onClick={() => pickMedium("video")}
            label="视频"
            count={countMedium("video")}
          />
        </div>
        {medium === "video" ? (
          <div className="mt-3 flex w-full min-w-0 max-w-full flex-nowrap gap-2 overflow-x-auto pb-2">
            <Chip active={scene === "all"} onClick={() => pickScene("all")}>
              全部场景 {countMedium("video")}
            </Chip>
            {folio.uses.map((u) => (
              <Chip key={u.id} active={scene === u.id} onClick={() => pickScene(u.id)}>
                {u.name} {countMedium("video", "all", u.id)}
              </Chip>
            ))}
          </div>
        ) : null}
        <div className="mt-3 flex w-full min-w-0 max-w-full flex-nowrap gap-2 overflow-x-auto pb-2">
          <Chip active={category === "all"} onClick={() => setCategory("all")}>
            全部 {countMedium(medium, "all", scene)}
          </Chip>
          {folio.categories.map((c) => {
            const n = countMedium(medium, c.id, scene);
            if (n === 0) return null;
            return (
              <Chip key={c.id} active={category === c.id} onClick={() => setCategory(c.id)}>
                {c.name} {n}
              </Chip>
            );
          })}
        </div>

        <div className="mt-4 grid min-w-0 items-start gap-6 lg:grid-cols-2">
          <ul className="order-2 min-w-0 divide-y divide-border border-y border-border lg:order-1">
            {results.length === 0 ? (
              <li className="py-10 text-sm text-muted">没有符合的风格。换一个编号，或清掉筛选。</li>
            ) : (
              results.map((p) => {
                const on = p.no === selected?.no;
                return (
                  <li key={p.no}>
                    <button
                      type="button"
                      onClick={() => choose(p)}
                      className={`flex w-full min-w-0 items-center gap-3 py-3 text-left ${on ? "text-fg" : "text-muted"}`}
                    >
                      <img
                        src={p.covers[0]}
                        alt=""
                        loading="lazy"
                        className="size-14 shrink-0 rounded-sm object-cover"
                      />
                      <span className={`w-10 shrink-0 font-mono text-sm ${on ? "text-accent" : "text-subtle"}`}>
                        {p.no}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className={`block truncate text-base ${on ? "text-fg" : ""}`}>{p.title}</span>
                        <span className="mt-0.5 block truncate text-xs text-subtle">
                          {p.use ? `${useName[p.use]} · ` : ""}
                          {p.style} · @{p.creator.handle}
                        </span>
                      </span>
                    </button>
                  </li>
                );
              })
            )}
          </ul>

          <article ref={detailRef} className="order-1 min-w-0 lg:sticky lg:top-4 lg:order-2">
            {selected ? (
              <PromptSheet key={selected.no} prompt={selected} copied={copied} onCopy={() => void copyPrompt(selected)} />
            ) : (
              <p className="rounded-lg border border-border bg-surface p-6 text-sm text-muted">选一条，或输入编号。</p>
            )}
          </article>
        </div>
      </div>
    </div>
  );
}

function MediumTab({
  active,
  onClick,
  label,
  count,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  count: number;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex h-11 items-center justify-between rounded-md px-4 text-sm ${
        active ? "bg-accent text-accent-fg" : "bg-surface-2 text-muted"
      }`}
    >
      <span>{label}</span>
      <span className="font-mono text-xs">{String(count).padStart(2, "0")}</span>
    </button>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`h-10 shrink-0 rounded-full px-3 text-sm ${
        active ? "bg-accent text-accent-fg" : "bg-surface-2 text-muted"
      }`}
    >
      {children}
    </button>
  );
}

function PromptSheet({
  prompt,
  copied,
  onCopy,
}: {
  prompt: FolioPrompt;
  copied: boolean;
  onCopy: () => void;
}) {
  const [frame, setFrame] = useState(0);
  const [open, setOpen] = useState(false);
  const covers = prompt.covers;
  const src = covers[frame] ?? covers[0];

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight") setFrame((n) => (n + 1) % covers.length);
      if (e.key === "ArrowLeft") setFrame((n) => (n - 1 + covers.length) % covers.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, covers.length]);

  return (
    <div className="rounded-lg border border-border bg-surface p-5">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="relative block w-full overflow-hidden rounded-md bg-bg"
      >
        <img src={src} alt={prompt.title} className="max-h-96 w-full object-contain" />
        <span className="absolute right-3 bottom-3 rounded-full bg-bg/80 px-3 py-1 font-mono text-xs text-fg">
          预览 {frame + 1}/{covers.length}
        </span>
      </button>
      {covers.length > 1 ? (
        <div className="mt-2 flex gap-2">
          {covers.map((cover, i) => (
            <button
              key={cover}
              type="button"
              onClick={() => setFrame(i)}
              className={`overflow-hidden rounded-sm ${i === frame ? "ring-2 ring-accent" : "opacity-60"}`}
            >
              <img src={cover} alt="" className="size-14 object-cover" />
            </button>
          ))}
        </div>
      ) : null}
      <p className="mt-4 font-mono text-xs tracking-widest text-subtle uppercase">
        {prompt.no} · {prompt.use ? `${useName[prompt.use]} · ` : ""}
        {categoryName[prompt.category]} · {prompt.medium === "image" ? "图像" : "视频"}
      </p>
      <h2 className="mt-2 text-3xl text-fg">{prompt.title}</h2>
      <p className="mt-2 text-sm text-muted">{prompt.style}</p>
      <p className="mt-3 text-sm text-fg">{prompt.excerpt}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={onCopy}
          className="inline-flex h-11 items-center gap-2 rounded-md bg-accent px-4 text-sm font-medium text-accent-fg"
        >
          {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
          {copied ? "已复制风格" : "复制提示词"}
        </button>
        <a
          href={prompt.sourceUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-11 items-center gap-2 rounded-md border border-border px-4 text-sm text-fg"
        >
          <ExternalLink className="size-4" />
          原帖 @{prompt.creator.handle}
        </a>
      </div>
      {prompt.slots.length > 0 ? (
        <p className="mt-4 text-sm text-muted">
          可替换：{prompt.slots.map((s) => `【${s}】`).join("、")}。只换槽位，其余句子留着。
        </p>
      ) : null}
      <pre className="mt-4 max-h-96 overflow-auto rounded-md bg-bg p-4 font-sans text-sm leading-relaxed whitespace-pre-wrap text-fg">
        {prompt.prompt}
      </pre>
      {prompt.notes ? <p className="mt-4 text-sm text-muted">{prompt.notes}</p> : null}
      <p className="mt-4 font-mono text-xs text-subtle">
        {prompt.creator.name}
        {prompt.model ? ` · ${prompt.model}` : ""} · {prompt.date}
      </p>
      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-bg/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${prompt.title} 图片预览`}
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 inline-flex size-11 items-center justify-center rounded-full bg-surface text-fg"
            aria-label="关闭预览"
          >
            <X className="size-4" />
          </button>
          {covers.length > 1 ? (
            <button
              type="button"
              aria-label="上一张"
              onClick={(e) => {
                e.stopPropagation();
                setFrame((n) => (n - 1 + covers.length) % covers.length);
              }}
              className="absolute left-3 inline-flex size-11 items-center justify-center rounded-full bg-surface text-fg"
            >
              <ChevronLeft className="size-5" />
            </button>
          ) : null}
          <img
            src={src}
            alt={prompt.title}
            onClick={(e) => e.stopPropagation()}
            className="max-h-full max-w-full object-contain"
          />
          {covers.length > 1 ? (
            <button
              type="button"
              aria-label="下一张"
              onClick={(e) => {
                e.stopPropagation();
                setFrame((n) => (n + 1) % covers.length);
              }}
              className="absolute right-3 inline-flex size-11 items-center justify-center rounded-full bg-surface text-fg"
            >
              <ChevronRight className="size-5" />
            </button>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
