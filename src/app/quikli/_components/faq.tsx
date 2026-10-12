"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Faq as FaqItem } from "../_content/support";

type FaqProps = {
  items: FaqItem[];
};

// 一度に1つだけ開くアコーディオン
export function Faq({ items }: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <ul className="border-t border-border">
      {items.map((item, index) => {
        const open = openIndex === index;
        const panelId = `${baseId}-panel-${index}`;
        return (
          <li key={item.q} className="border-b border-border">
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : index)}
              aria-expanded={open}
              aria-controls={panelId}
              className="group flex w-full items-center justify-between gap-6 py-6 text-left"
            >
              <span className="flex items-baseline gap-4">
                <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span
                  className={cn(
                    "text-lg font-bold tracking-tight transition-colors group-hover:text-primary",
                    open && "text-primary"
                  )}
                >
                  {item.q}
                </span>
              </span>
              <Plus
                className={cn(
                  "size-4 shrink-0 text-muted-foreground transition-transform duration-300",
                  open && "rotate-45 text-primary"
                )}
              />
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  id={panelId}
                  role="region"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pb-6 pl-10 leading-relaxed text-muted-foreground">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}