import { Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import { PromptDetail } from "@/components/prompt-detail";
import { WaterfallTile } from "@/components/waterfall-tile";
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

export function FolioFeed({ selectedId, onSelect }: Props) {
  const [medium, setMedium] = useState<"all" | Medium>("all");
  const [tag, setTag] = useState<string | null>(null);
  const [creatorId, setCreatorId] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [onlyFav, setOnlyFav] = useState(false);
  const favIds = useFavorites((s) => s.ids);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return entries.filter((entry) => {
      if (medium !== "all" && entry.medium !== medium) return false;
      if (tag && !entry.tags.includes(tag)) return false;
      if (creatorId && entry.creatorId !== creatorId) return false;
      if (onlyFav && !favIds.includes(entry.id)) return false;
      if (!q) return true;
      const creator = creatorById[entry.creatorId];
      const hay = [
        entry.title,
        entry.kicker,
        entry.excerpt,
        entry.style,
        entry.prompt,
        creator?.name,
        creator?.handle,
        ...entry.tags,
      ]
        .join(" ")
        .toLowerCase();
      return hay.includes(q);
    });
  }, [medium, tag, creatorId, query, onlyFav, favIds]);

  const selected = entries.find((entry) => entry.id === selectedId) ?? null;
  const selectedIndex = selected ? entries.findIndex((entry) => entry.id === selected.id) : 0;
  const filteredOn = Boolean(tag || query || onlyFav || medium !== "all" || creatorId);

  function clearFilters() {
    setTag(null);
    setQuery("");
    setOnlyFav(false);
    setMedium("all");
    setCreatorId(null);
  }

  return (
    <div id="top" className="min-h-dvh bg-bg text-fg">
      <header className="sticky top-0 z-40 border-b border-border bg-bg/92 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-3 py-3 sm:px-5">
          <div className="min-w-0">
            <p className="font-serif text-2xl leading-none tracking-tight italic sm:text-3xl">FOLIO</p>
            <p className="mt-1 text-[11px] tracking-[0.2em] text-muted uppercase">提示词图鉴</p>
          </div>
          <p className="shrink-0 font-mono text-xs tabular-nums text-subtle">
            {filtered.length}/{entries.length}
          </p>
        </div>
        <div className="mx-auto max-w-[1400px] px-3 pb-3 sm:px-5">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <div className="flex flex-wrap gap-1.5">
              {MEDIUM_FILTERS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setMedium(item.id)}
                  className={cn(
                    "h-11 rounded-full px-3.5 text-sm transition-colors",
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
                  "h-11 rounded-full px-3.5 text-sm transition-colors",
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
                className="h-11 bg-surface pl-9"
              />
            </div>
          </div>
          <div className="mt-2 flex gap-1.5 overflow-x-auto pb-0.5">
            {creators.map((creator) => (
              <button
                key={creator.id}
                type="button"
                onClick={() => setCreatorId((cur) => (cur === creator.id ? null : creator.id))}
                className={cn(
                  "h-10 shrink-0 rounded-full px-3 text-xs transition-colors",
                  creatorId === creator.id
                    ? "bg-fg text-bg"
                    : "text-muted shadow-[0_0_0_1px_var(--color-border)] hover:text-fg",
                )}
              >
                {creator.name}
              </button>
            ))}
          </div>
          <div className="mt-2 flex gap-1.5 overflow-x-auto pb-0.5">
            {TAGS.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setTag((cur) => (cur === item ? null : item))}
                className={cn(
                  "h-10 shrink-0 rounded-full px-3 text-xs transition-colors",
                  tag === item
                    ? "bg-accent text-accent-fg"
                    : "text-muted shadow-[0_0_0_1px_var(--color-border)] hover:text-fg",
                )}
              >
                {item}
              </button>
            ))}
            {filteredOn ? (
              <button
                type="button"
                onClick={clearFilters}
                className="inline-flex h-10 shrink-0 items-center gap-1 px-2 text-xs text-muted hover:text-fg"
              >
                <X className="size-3.5" />
                清除
              </button>
            ) : null}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1400px] px-3 py-4 sm:px-5 sm:py-6">
        {filtered.length === 0 ? (
          <div className="py-24 text-center">
            <p className="font-serif text-2xl">没有对应的图版</p>
            <p className="mt-2 text-sm text-muted">换一个标签，或清除筛选后再看。</p>
          </div>
        ) : (
          <div className="columns-2 gap-3 sm:columns-3 lg:columns-4 xl:columns-5">
            {filtered.map((entry) => (
              <WaterfallTile key={entry.id} entry={entry} onOpen={onSelect} />
            ))}
          </div>
        )}
      </main>

      <PromptDetail
        entry={selected}
        index={selectedIndex}
        open={Boolean(selected)}
        onOpenChange={(next) => {
          if (!next) onSelect(undefined);
        }}
      />
    </div>
  );
}
