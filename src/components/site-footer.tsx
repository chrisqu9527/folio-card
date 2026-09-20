import { ArrowUpRight } from "lucide-react";
import { creators } from "@/data/catalog";

export function SiteFooter() {
  return (
    <footer id="colophon" className="border-t border-fg bg-fg text-bg">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-serif text-4xl italic tracking-tight">FOLIO</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-bg/70">
              提示词图鉴是一份持续增补的公开存档。我们从创作者的时间线里整理可复用的视觉系统，保留原帖结构与署名，方便以后不断补充。
            </p>
            <p className="mt-6 text-[11px] tracking-[0.2em] text-bg/45 uppercase">
              Archive of reusable visual systems
            </p>
          </div>
          <div className="grid gap-10 sm:grid-cols-3 md:col-span-7">
            <div>
              <p className="text-[11px] tracking-[0.2em] text-bg/45 uppercase">图鉴</p>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li>
                  <a href="#archive" className="hover:text-bg/70">
                    全部图版
                  </a>
                </li>
                <li>
                  <a href="#archive" className="hover:text-bg/70">
                    图片提示词
                  </a>
                </li>
                <li>
                  <a href="#archive" className="hover:text-bg/70">
                    视频提示词
                  </a>
                </li>
                <li>
                  <a href="#creators" className="hover:text-bg/70">
                    创作者名录
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-[11px] tracking-[0.2em] text-bg/45 uppercase">来源</p>
              <ul className="mt-4 columns-2 gap-x-6 space-y-2.5 text-sm">
                {creators.map((c) => (
                  <li key={c.id} className="break-inside-avoid">
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 hover:text-bg/70"
                    >
                      @{c.handle}
                      <ArrowUpRight className="size-3.5 opacity-60" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[11px] tracking-[0.2em] text-bg/45 uppercase">体例</p>
              <ul className="mt-4 space-y-2.5 text-sm text-bg/70">
                <li>悬停阅读图版</li>
                <li>点击放大与复制</li>
                <li>按媒介 / 标签筛选</li>
                <li>本机收藏</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-14 h-px w-full bg-bg/15" />
        <div className="mt-8 flex flex-col gap-4 text-xs leading-relaxed text-bg/55 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-xl">
            提示词与配图版权归于原作者。本站只做编辑整理与署名引用，不转售提示词。使用时请保留来源，并遵循各作者在 X
            上的分享约定。
          </p>
          <p className="shrink-0 tracking-[0.14em] uppercase">
            © 2026 FOLIO · Vol. 02
          </p>
        </div>
      </div>
    </footer>
  );
}
