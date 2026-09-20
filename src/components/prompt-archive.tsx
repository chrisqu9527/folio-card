import { Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import { PromptCard } from "@/components/prompt-card";
import { PromptDetail } from "@/components/prompt-detail";
import { Input } from "@/components/ui/input";
import { creatorById, creators, entries, TAGS, type Medium } from "@/data/catalog";
import { useFavorites } from "@/lib/favorites";
import { cn } from "@/lib/utils";

const MEDIUM_FILTERS: { id: "all" | Medium; label: string }[] = [
  { id: "all", label: "全部" },
  { id: "image", label: "图片" },
  { id: "video", label: "视频" },
];

type Props = {
  selectedId?: string;
  onSelect: (id?: string) => void;
};

export function PromptArchive({ selectedId, onSelect }: Props) {
  const [medium, setMedium] = useState<"all" | Medium>("all");
  const [tag, setTag] = useState<string | null>(null);
  const [creatorId, setCreatorId] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [onlyFav, setOnlyFav] = useState(false);
  const favIds = useFavorites((s) => s.ids);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return entries.filter((e) => {
      if (medium !== "all" && e.medium !== medium) return false;
      if (tag && !e.tags.includes(tag)) return false;
      if (creatorId && e.creatorId !== creatorId) return false;
      if (onlyFav && !favIds.includes(e.id)) return false;
      if (!q) return true;
      const creator = creatorById[e.creatorId];
      const hay = [
        e.title,
        e.kicker,
        e.excerpt,
        e.style,
        e.prompt,
        creator?.name,
        creator?.handle,
        ...e.tags,
      ]
        .join(" ")
        .toLowerCase();
      return hay.includes(q);
    });
  }, [medium, tag, creatorId, query, onlyFav, favIds]);

  const selected = entries.find((e) => e.id === selectedId) ?? null;
  const selectedIndex = selected ? entries.findIndex((e) => e.id === selected.id) : 0;

  return (
    <section id="archive" className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-[11px] tracking-[0.22em] text-muted uppercase">The Plates</p>
          <h2 className="mt-2 font-serif text-4xl tracking-tight sm:text-5xl">图鉴</h2>
        </div>
        <p className="text-sm text-muted">
          {filtered.length} / {entries.length} 条
        </p>
      </div>

      <div className="sticky top-14 z-30 -mx-4 mt-8 border-y border-border bg-bg/90 px-4 py-3 backdrop-blur-md sm:top-16 sm:mx-0 sm:rounded-lg sm:border sm:px-4">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          <div className="flex flex-wrap gap-1.5">
            {MEDIUM_FILTERS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setMedium(item.id)}
                className={cn(
                  "h-9 rounded-full px-3.5 text-sm transition-colors",
                  medium === item.id ? "bg-fg text-bg" : "text-muted hover:bg-surface-2 hover:text-fg",
                )}
              >
                {item.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setOnlyFav((v) => !v)}
              className={cn(
                "h-9 rounded-full px-3.5 text-sm transition-colors",
                onlyFav ? "bg-fg text-bg" : "text-muted hover:bg-surface-2 hover:text-fg",
              )}
            >
              收藏
            </button>
          </div>
          <div className="relative min-w-0 flex-1">
            <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-subtle" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="搜索标题、作者、风格或提示词"
              className="h-10 bg-surface pl-9"
            />
          </div>
        </div>
        <div className="mt-3 flex gap-1.5 overflow-x-auto pb-1">
          {creators.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setCreatorId((cur) => (cur === c.id ? null : c.id))}
              className={cn(
                "h-8 shrink-0 rounded-full px-3 text-xs transition-colors",
                creatorId === c.id
                  ? "bg-fg text-bg"
                  : "text-muted shadow-[0_0_0_1px_var(--color-border)] hover:text-fg",
              )}
            >
              {c.name}
            </button>
          ))}
        </div>
        <div className="mt-3 flex gap-1.5 overflow-x-auto pb-1">
          {TAGS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setTag((cur) => (cur === t ? null : t))}
              className={cn(
                "h-8 shrink-0 rounded-full px-3 text-xs transition-colors",
                tag === t
                  ? "bg-accent text-accent-fg"
                  : "text-muted shadow-[0_0_0_1px_var(--color-border)] hover:text-fg",
              )}
            >
              {t}
            </button>
          ))}
          {(tag || query || onlyFav || medium !== "all" || creatorId) && (
            <button
              type="button"
              onClick={() => {
                setTag(null);
                setQuery("");
                setOnlyFav(false);
                setMedium("all");
                setCreatorId(null);
              }}
              className="inline-flex h-8 shrink-0 items-center gap-1 px-2 text-xs text-muted hover:text-fg"
            >
              <X className="size-3.5" />
              清除
            </button>
          )}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="mt-16 text-center">
          <p className="font-serif text-2xl">没有对应的图版</p>
          <p className="mt-2 text-sm text-muted">换一个标签，或清除筛选后再看。</p>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((entry) => (
            <PromptCard
              key={entry.id}
              entry={entry}
              index={entries.findIndex((e) => e.id === entry.id)}
              onOpen={onSelect}
            />
          ))}
        </div>
      )}

      <PromptDetail
        entry={selected}
        index={selectedIndex}
        open={Boolean(selected)}
        onOpenChange={(next) => {
          if (!next) onSelect(undefined);
        }}
      />
    </section>
  );
}
