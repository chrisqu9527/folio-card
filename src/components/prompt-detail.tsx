import { ArrowUpRight, Check, Copy, Heart, LoaderCircle, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { creatorById, figureNo, type PromptEntry } from "@/data/catalog";
import { useFavorites } from "@/lib/favorites";
import { resolveTweetVideo, tweetIdFromUrl } from "@/lib/tweet-video";
import { cn } from "@/lib/utils";

type Props = {
  entry: PromptEntry | null;
  index: number;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const videoCache = new Map<string, string>();

export function PromptDetail({ entry, index, open, onOpenChange }: Props) {
  const [copied, setCopied] = useState(false);
  const [active, setActive] = useState(0);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [videoState, setVideoState] = useState<"idle" | "loading" | "ready" | "error">("idle");
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const toggle = useFavorites((s) => s.toggle);
  const favored = useFavorites((s) => (entry ? s.ids.includes(entry.id) : false));

  useEffect(() => {
    setActive(0);
    setCopied(false);
    setPlaying(false);
    setVideoUrl(null);
    setVideoState("idle");
  }, [entry?.id]);

  useEffect(() => {
    if (!open || !entry || entry.medium !== "video") return;
    const tweetId = tweetIdFromUrl(entry.sourceUrl);
    if (!tweetId) {
      setVideoState("error");
      return;
    }
    const cached = videoCache.get(tweetId);
    if (cached) {
      setVideoUrl(cached);
      setVideoState("ready");
      return;
    }
    let live = true;
    setVideoState("loading");
    void resolveTweetVideo({ data: { tweetId } })
      .then((result) => {
        if (!live) return;
        if (result?.url) {
          videoCache.set(tweetId, result.url);
          setVideoUrl(result.url);
          setVideoState("ready");
        } else {
          setVideoState("error");
        }
      })
      .catch(() => {
        if (live) setVideoState("error");
      });
    return () => {
      live = false;
    };
  }, [open, entry]);

  if (!entry) return null;
  const creator = creatorById[entry.creatorId];
  const cover = entry.covers[Math.min(active, entry.covers.length - 1)];
  const isVideo = entry.medium === "video";

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

  function startPlayback() {
    setPlaying(true);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="grid max-h-[min(94vh,960px)] grid-cols-1 overflow-hidden bg-surface p-0 lg:grid-cols-[minmax(0,1.15fr)_minmax(22rem,0.85fr)]">
        <div className="relative min-h-[46vh] bg-bg lg:min-h-0">
          {isVideo && playing && videoUrl ? (
            <video
              ref={videoRef}
              src={videoUrl}
              poster={cover}
              controls
              playsInline
              autoPlay
              onCanPlay={(event) => {
                void event.currentTarget.play().catch(() => undefined);
              }}
              className="absolute inset-0 size-full object-contain"
            />
          ) : (
            <>
              <img src={cover} alt={entry.title} className="absolute inset-0 size-full object-contain" />
              {isVideo && videoState !== "error" ? (
                <button
                  type="button"
                  onClick={startPlayback}
                  disabled={videoState === "loading"}
                  className="absolute inset-0 flex items-center justify-center"
                  aria-label="播放"
                >
                  <span className="flex size-16 items-center justify-center rounded-full bg-fg text-bg shadow-[var(--shadow-border-hover)]">
                    {videoState === "loading" ? (
                      <LoaderCircle className="size-7 animate-spin" />
                    ) : (
                      <Play className="size-7 fill-current" />
                    )}
                  </span>
                </button>
              ) : null}
            </>
          )}
          {isVideo && videoState === "error" ? (
            <a
              href={entry.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 rounded-full bg-fg px-4 py-2 text-sm text-bg"
            >
              到 X 播放原片
            </a>
          ) : null}
          {!isVideo && entry.covers.length > 1 ? (
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
              {entry.covers.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setActive(i)}
                  className={cn(
                    "size-2 rounded-full transition-colors",
                    i === active ? "bg-fg" : "bg-fg/35",
                  )}
                  aria-label={`图 ${i + 1}`}
                />
              ))}
            </div>
          ) : null}
        </div>
        <div className="flex max-h-[min(94vh,960px)] min-h-0 flex-col bg-surface">
          <div className="border-b border-border px-5 pt-6 pr-14 pb-4 sm:px-7">
            <p className="text-[11px] tracking-[0.18em] text-subtle uppercase">
              Fig. {figureNo(index)} · {isVideo ? "视频" : "图片"} · {entry.kicker}
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
              {entry.tags.map((item) => (
                <span
                  key={item}
                  className="rounded-full px-2.5 py-0.5 text-[11px] text-muted shadow-[0_0_0_1px_var(--color-border)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto px-5 py-4 sm:px-7">
            <p className="mb-2 text-[11px] tracking-[0.16em] text-subtle uppercase">提示词</p>
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
