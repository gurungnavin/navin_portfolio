"use client";

import { ArrowUp } from "lucide-react";
import { useLenis } from "lenis/react";
import { siteConfig } from "@/content/site";

export function Footer() {
  const lenis = useLenis();

  const toTop = () => {
    if (lenis) lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8 font-mono text-xs text-muted-foreground">
        <span>
          © {new Date().getFullYear()} {siteConfig.name}
        </span>
        <span className="hidden sm:block">built with next.js</span>
        <button
          onClick={toTop}
          className="flex items-center gap-1.5 transition-colors hover:text-primary"
        >
          top
          <ArrowUp className="size-3.5" />
        </button>
      </div>
    </footer>
  );
}