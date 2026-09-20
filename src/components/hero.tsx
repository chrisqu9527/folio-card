import { ArrowDown } from "lucide-react";
import { entries, creators } from "@/data/catalog";

export function Hero() {
  const imageCount = entries.filter((e) => e.medium === "image").length;
  const videoCount = entries.filter((e) => e.medium === "video").length;

  return (
    <section className="relative mx-auto max-w-6xl px-4 pt-10 pb-16 sm:px-6 sm:pt-16 sm:pb-24">
      <p className="text-[11px] tracking-[0.28em] text-muted uppercase">
        Vol. 02 — 往期补档 · 2025冬–2026秋
      </p>
      <h1 className="mt-6 max-w-4xl font-serif text-[clamp(3.4rem,12vw,8.5rem)] leading-[0.88] tracking-[-0.04em]">
        FOLIO
      </h1>
      <p className="mt-3 font-serif text-[clamp(1.4rem,4vw,2.35rem)] italic text-accent">
        提示词图鉴
      </p>
      <div className="mt-8 max-w-xl text-base text-muted sm:text-lg">
        <p>
          一份给创作者用的编辑存档。收录二十位作者时间线上公开分享的图像与视频提示词——近期新作，以及往期可复用的视觉系统。
        </p>
      </div>
      <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 border-y border-border py-5">
        <div>
          <dt className="text-[11px] tracking-[0.16em] text-subtle uppercase">图版</dt>
          <dd className="mt-1 font-serif text-3xl tabular-nums">{entries.length}</dd>
        </div>
        <div>
          <dt className="text-[11px] tracking-[0.16em] text-subtle uppercase">创作者</dt>
          <dd className="mt-1 font-serif text-3xl tabular-nums">{creators.length}</dd>
        </div>
        <div>
          <dt className="text-[11px] tracking-[0.16em] text-subtle uppercase">媒介</dt>
          <dd className="mt-1 font-serif text-3xl">
            {imageCount}
            <span className="mx-1 text-subtle">/</span>
            {videoCount}
          </dd>
        </div>
      </dl>
      <a
        href="#archive"
        className="mt-10 inline-flex h-11 items-center gap-2 text-sm text-fg transition-opacity hover:opacity-70"
      >
        进入图鉴
        <ArrowDown className="size-4" />
      </a>
    </section>
  );
}
