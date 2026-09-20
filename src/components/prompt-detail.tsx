import { ArrowUpRight, Check, Copy, Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { creatorById, figureNo, type PromptEntry } from "@/data/catalog";
import { useFavorites } from "@/lib/favorites";
import { cn } from "@/lib/utils";

type Props = {
  entry: PromptEntry | null;
  index: number;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function PromptDetail({ entry, index, open, onOpenChange }: Props) {
  const [copied, setCopied] = useState(false);
  const [active, setActive] = useState(0);
  const toggle = useFavorites((s) => s.toggle);
  const favored = useFavorites((s) => (entry ? s.ids.includes(entry.id) : false));

  useEffect(() => {
    setActive(0);
    setCopied(false);
  }, [entry?.id]);

  if (!entry) return null;
  const creator = creatorById[entry.creatorId];
  const cover = entry.covers[Math.min(active, entry.covers.length - 1)];

  async function copyPrompt() {
    if (!entry) return;
    try {
      await navigator.clipboard.writeText(entry.prompt);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="grid max-h-[min(92vh,920px)] grid-cols-1 overflow-hidden bg-surface p-0 lg:grid-cols-[minmax(0,1.05fr)_minmax(20rem,0.95fr)]">
        <div className="relative min-h-[42vh] bg-fg lg:min-h-0">
          <img
            src={cover}
            alt={entry.title}
            className="absolute inset-0 size-full object-contain"
          />
          {entry.covers.length > 1 ? (
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
              {entry.covers.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setActive(i)}
                  className={cn(
                    "size-2 rounded-full transition-colors",
                    i === active ? "bg-bg" : "bg-bg/40",
                  )}
                  aria-label={`图 ${i + 1}`}
                />
              ))}
            </div>
          ) : null}
        </div>
        <div className="flex max-h-[min(92vh,920px)] min-h-0 flex-col bg-surface">
          <div className="border-b border-border px-5 pt-6 pr-14 pb-4 sm:px-7">
            <p className="text-[11px] tracking-[0.18em] text-subtle uppercase">
              Fig. {figureNo(index)} · {entry.medium === "video" ? "视频" : "图片"} · {entry.kicker}
            </p>
            <DialogTitle className="mt-2">{entry.title}</DialogTitle>
            <DialogDescription className="mt-2">{entry.excerpt}</DialogDescription>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-muted">
              <a
                href={creator?.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 hover:text-fg"
              >
                @{creator?.handle}
                <ArrowUpRight className="size-3.5" />
              </a>
              <span className="text-subtle">/</span>
              <span>{entry.style}</span>
              {entry.model ? (
                <>
                  <span className="text-subtle">/</span>
                  <span>{entry.model}</span>
                </>
              ) : null}
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {entry.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full px-2.5 py-0.5 text-[11px] text-muted shadow-[0_0_0_1px_var(--color-border)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto px-5 py-4 sm:px-7">
            <pre className="font-mono text-[12.5px] leading-relaxed whitespace-pre-wrap text-fg/90">
              {entry.prompt}
            </pre>
            {entry.notes ? (
              <p className="mt-5 border-t border-border pt-4 text-sm text-muted">{entry.notes}</p>
            ) : null}
          </div>
          <div className="flex items-center gap-2 border-t border-border px-5 py-3 sm:px-7">
            <button
              type="button"
              onClick={copyPrompt}
              className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-md bg-fg px-4 text-sm text-bg transition-opacity hover:opacity-90"
            >
              {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
              {copied ? "已复制" : "复制提示词"}
            </button>
            <button
              type="button"
              aria-label={favored ? "取消收藏" : "收藏"}
              onClick={() => toggle(entry.id)}
              className="flex size-11 items-center justify-center rounded-md shadow-[0_0_0_1px_var(--color-border)]"
            >
              <Heart className={cn("size-4", favored && "fill-fg")} />
            </button>
            <a
              href={entry.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="flex size-11 items-center justify-center rounded-md shadow-[0_0_0_1px_var(--color-border)]"
              aria-label="在 X 上查看原帖"
            >
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
