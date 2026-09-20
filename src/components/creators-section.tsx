import { ArrowUpRight } from "lucide-react";
import { countByCreator, creators } from "@/data/catalog";

export function CreatorsSection() {
  return (
    <section id="creators" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className="text-[11px] tracking-[0.22em] text-muted uppercase">Contributors</p>
          <h2 className="mt-3 font-serif text-4xl tracking-tight sm:text-5xl">创作者</h2>
        </div>
        <p className="hidden max-w-xs text-right text-sm text-muted sm:block">
          本期从近帖回溯到 2025 冬。点进图鉴可按作者筛出整条时间线。
        </p>
      </div>
      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {creators.map((c) => (
          <a
            key={c.id}
            href={c.url}
            target="_blank"
            rel="noreferrer"
            className="group flex gap-4 rounded-lg bg-surface p-4 shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-200 ease-out hover:shadow-[var(--shadow-border-hover)]"
          >
            <img
              src={c.avatar}
              alt=""
              className="media-frame size-14 rounded-md object-cover"
            />
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-2">
                <p className="font-medium">{c.name}</p>
                <ArrowUpRight className="mt-0.5 size-4 text-subtle transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <p className="text-xs text-muted">@{c.handle}</p>
              <p className="mt-2 line-clamp-2 text-sm text-muted">{c.bio}</p>
              <p className="mt-3 text-[11px] tracking-[0.14em] text-subtle uppercase">
                {countByCreator(c.id)} 条图版
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
