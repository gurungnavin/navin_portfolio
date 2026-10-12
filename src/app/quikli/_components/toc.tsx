"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useLenis } from "lenis/react";
import { cn } from "@/lib/utils";

type TocItem = { id: string; title: string };

type TocProps = {
  label: string;
  items: TocItem[];
};

// 固定ナビの高さ分ずらしてスクロール
const SCROLL_OFFSET = -96;

export function Toc({ label, items }: TocProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const [open, setOpen] = useState(false);
  const lenis = useLenis();

  // 表示中のセクションを監視してハイライト
  useEffect(() => {
    const sections = items
      .map(({ id }) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (lenis) lenis.scrollTo(el, { offset: SCROLL_OFFSET });
    else el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const activeIndex = Math.max(0, items.findIndex((i) => i.id === activeId));

  const list = (
    <ol className="flex flex-col">
      {items.map((item, index) => {
        const active = item.id === activeId;
        return (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => scrollTo(item.id)}
              aria-current={active ? "location" : undefined}
              className={cn(
                "relative flex w-full items-baseline gap-3 border-l py-2 pl-4 text-left text-sm transition-colors",
                active
                  ? "border-primary text-foreground"
                  : "border-border text-muted-foreground hover:text-foreground"
              )}
            >
              <span className="font-mono text-[10px] tracking-widest opacity-60">
                {String(index + 1).padStart(2, "0")}
              </span>
              {item.title}
            </button>
          </li>
        );
      })}
    </ol>
  );

  return (
    <>
      {/* PC: 左側に固定表示 */}
      <nav aria-label={label} className="sticky top-28 hidden lg:block">
        <p className="mb-4 font-mono text-xs tracking-widest text-muted-foreground">{label}</p>
        {list}
      </nav>

      {/* モバイル: 折りたたみ */}
      <nav aria-label={label} className="mb-10 border border-border lg:hidden">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
        >
          <span className="flex items-baseline gap-3 text-sm">
            <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
            {items[activeIndex]?.title ?? label}
          </span>
          <ChevronDown
            className={cn("size-4 shrink-0 text-muted-foreground transition-transform", open && "rotate-180")}
          />
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="border-t border-border px-4 py-2">{list}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}