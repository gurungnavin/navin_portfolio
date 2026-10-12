"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { LANGS, type Lang } from "../_content/config";

const LABELS: Record<Lang, string> = { en: "EN", ja: "日本語" };

type LangSwitchProps = {
  current: Lang;
  basePath: string;
};

export function LangSwitch({ current, basePath }: LangSwitchProps) {
  return (
    <nav aria-label="Language" className="inline-flex border border-border p-1 font-mono text-xs">
      {LANGS.map((lang) => {
        const active = lang === current;
        return (
          <Link
            key={lang}
            href={lang === "en" ? basePath : `${basePath}?lang=${lang}`}
            hrefLang={lang}
            aria-current={active ? "page" : undefined}
            className={cn(
              "relative px-3 py-1.5 tracking-widest transition-colors",
              active ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
            )}
          >
            {/* 選択中の背景をスライドさせる */}
            {active && (
              <motion.span
                layoutId="quikli-lang-pill"
                className="absolute inset-0 bg-primary"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            <span className="relative">{LABELS[lang]}</span>
          </Link>
        );
      })}
    </nav>
  );
}