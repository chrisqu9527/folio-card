import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "#archive", label: "图鉴" },
  { href: "#creators", label: "创作者" },
  { href: "#colophon", label: "关于" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:h-16 sm:px-6">
        <a href="#top" className="flex items-baseline gap-3">
          <span className="font-serif text-xl tracking-tight italic sm:text-2xl">FOLIO</span>
          <span className="hidden text-[11px] tracking-[0.22em] text-muted uppercase sm:inline">
            提示词图鉴
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted md:flex">
          {NAV.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-fg">
              {item.label}
            </a>
          ))}
          <span className="text-[11px] tracking-[0.18em] text-subtle uppercase">Vol. 02</span>
        </nav>
        <button
          type="button"
          className="relative flex size-11 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-label={open ? "关闭菜单" : "打开菜单"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      <div
        className={cn(
          "overflow-hidden border-t border-border md:hidden",
          open ? "max-h-48" : "max-h-0",
        )}
        style={{ transition: "max-height 250ms cubic-bezier(0.22, 1, 0.36, 1)" }}
      >
        <nav className="flex flex-col gap-1 px-4 py-3">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex h-11 items-center text-sm"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
