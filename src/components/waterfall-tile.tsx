import { Play } from "lucide-react";
import { creatorById, type PromptEntry } from "@/data/catalog";

type Props = {
  entry: PromptEntry;
  onOpen: (id: string) => void;
};

export function WaterfallTile({ entry, onOpen }: Props) {
  const creator = creatorById[entry.creatorId];

  return (
    <article className="mb-3 break-inside-avoid sm:mb-4">
      <button type="button" onClick={() => onOpen(entry.id)} className="group block w-full text-left">
        <span className="relative block overflow-hidden rounded-lg bg-surface-2 shadow-[var(--shadow-border)]">
          <img
            src={entry.covers[0]}
            alt={entry.title}
            className="media-frame block h-auto w-full"
            loading="lazy"
            decoding="async"
          />
          {entry.medium === "video" ? (
            <span className="absolute right-2.5 bottom-2.5 flex size-10 items-center justify-center rounded-full bg-bg/88 text-fg shadow-[var(--shadow-border)]">
              <Play className="size-3.5 fill-current" />
            </span>
          ) : null}
        </span>
        <span className="mt-2 block font-serif text-[17px] leading-snug tracking-tight">{entry.title}</span>
        <span className="mt-0.5 block truncate text-xs text-muted">
          @{creator?.handle}
          {entry.medium === "video" ? " · 视频" : ""}
        </span>
      </button>
    </article>
  );
}
