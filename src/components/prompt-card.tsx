import { Heart, Play } from "lucide-react";
import { creatorById, figureNo, type PromptEntry } from "@/data/catalog";
import { useFavorites } from "@/lib/favorites";
import { cn } from "@/lib/utils";

type Props = {
  entry: PromptEntry;
  index: number;
  onOpen: (id: string) => void;
};

export function PromptCard({ entry, index, onOpen }: Props) {
  const creator = creatorById[entry.creatorId];
  const favored = useFavorites((s) => s.ids.includes(entry.id));
  const toggle = useFavorites((s) => s.toggle);

  return (
    <article className="flex flex-col">
      <button
        type="button"
        onClick={() => onOpen(entry.id)}
        className="group relative block w-full text-left"
      >
        <div
          className={cn(
            "relative overflow-hidden rounded-lg bg-surface-2 shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-300 ease-out group-hover:-translate-y-1 group-hover:shadow-[var(--shadow-border-hover)]",
            entry.aspect === "16/9" && "aspect-video",
            entry.aspect === "9/16" && (entry.featured ? "aspect-[4/5] sm:aspect-[4/5]" : "aspect-[3/4]"),
            entry.aspect === "4/5" && "aspect-[4/5]",
            entry.aspect === "3/4" && "aspect-[3/4]",
          )}
        >
          <img
            src={entry.covers[0]}
            alt={entry.title}
            className="media-frame absolute inset-0 size-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
          />
          <div className="absolute inset-0 bg-fg/0 transition-colors duration-300 group-hover:bg-fg/28" />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 opacity-0 transition-[opacity,transform] duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 translate-y-2">
            <span className="text-[11px] tracking-[0.18em] text-bg uppercase">打开图版</span>
            {entry.medium === "video" ? (
              <span className="flex size-9 items-center justify-center rounded-full bg-bg/90 text-fg">
                <Play className="size-3.5 fill-current" />
              </span>
            ) : null}
          </div>
          {entry.medium === "video" ? (
            <span className="absolute top-3 left-3 rounded-full bg-fg/80 px-2.5 py-1 text-[10px] tracking-[0.16em] text-bg uppercase">
              视频
            </span>
          ) : null}
        </div>
      </button>
      <div className="mt-3 flex items-start justify-between gap-3">
        <button type="button" onClick={() => onOpen(entry.id)} className="min-w-0 text-left">
          <p className="text-[11px] tracking-[0.16em] text-subtle uppercase">
            Fig. {figureNo(index)} · {entry.kicker}
          </p>
          <h3 className="mt-1 font-serif text-xl leading-tight tracking-tight sm:text-2xl">
            {entry.title}
          </h3>
          <p className="mt-1 truncate text-sm text-muted">
            @{creator?.handle} · {entry.style}
          </p>
        </button>
        <button
          type="button"
          aria-label={favored ? "取消收藏" : "收藏"}
          onClick={() => toggle(entry.id)}
          className="relative flex size-11 shrink-0 items-center justify-center text-muted transition-colors hover:text-fg"
        >
          <Heart className={cn("size-4", favored && "fill-fg text-fg")} />
        </button>
      </div>
    </article>
  );
}
