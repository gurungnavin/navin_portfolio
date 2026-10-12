import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Footer } from "@/components/layout/footer";
import { LangSwitch } from "./lang-switch";
import type { Lang } from "../_content/config";

type DocShellProps = {
  lang: Lang;
  basePath: string;
  label: string;
  title: string;
  intro?: string;
  meta?: string;
  children: ReactNode;
};

// プライバシーポリシー・サポートページ共通のレイアウト
export function DocShell({ lang, basePath, label, title, intro, meta, children }: DocShellProps) {
  return (
    <>
      <main lang={lang} className="mx-auto min-h-screen w-full max-w-6xl px-6 pb-24 pt-32">
        <Reveal>
          <div className="mb-12 flex items-center justify-between gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="size-3.5" />
              back
            </Link>
            <LangSwitch current={lang} basePath={basePath} />
          </div>
        </Reveal>

        <header className="mb-16 max-w-3xl">
          <Reveal delay={0.05}>
            <p className="mb-3 font-mono text-xs tracking-widest text-muted-foreground">
              {"// QUIKLI · "}
              {label}
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">{title}</h1>
          </Reveal>
          {intro && (
            <Reveal delay={0.15}>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{intro}</p>
            </Reveal>
          )}
          {meta && (
            <Reveal delay={0.2}>
              <p className="mt-6 font-mono text-xs tracking-widest text-muted-foreground">{meta}</p>
            </Reveal>
          )}
        </header>

        {children}
      </main>
      <Footer />
    </>
  );
}