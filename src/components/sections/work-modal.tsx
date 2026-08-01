"use client";

import { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { X, ExternalLink, Code2, Lock } from "lucide-react";
import { useLenis } from "lenis/react";
import { useWorksModal } from "@/components/sections/works-modal-context";

const SOURCE_LABEL: Record<string, string> = {
  private: "SOURCE — PRIVATE",
  "no-code": "NO-CODE BUILD",
  contributed: "CONTRIBUTED — CLOSED SOURCE",
};

export function WorkModal() {
  const { active, close } = useWorksModal();
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    if (active) {
      lenis.stop();
    } else {
      lenis.start();
    }
  }, [active, lenis]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [close]);

  return (
    <AnimatePresence>
      {active && (
        <div className="fixed inset-0 z-80 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            data-lenis-prevent
            className="no-scrollbar relative z-10 max-h-[88vh] w-full max-w-3xl overflow-y-auto border border-border bg-card"
          >
            <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-card/95 px-5 py-3 backdrop-blur">
              <span className="font-mono text-xs tracking-widest text-muted-foreground">
                {active.category} · {active.year}
              </span>
              <button
                onClick={close}
                aria-label="Close"
                className="flex size-8 items-center justify-center border border-border transition-colors hover:border-primary hover:text-primary"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="relative aspect-video w-full overflow-hidden border-b border-border">
              <Image
                src={active.image}
                alt={active.title}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
              <div className="photo-grid pointer-events-none absolute inset-0 opacity-50" />
            </div>

            <div className="space-y-6 p-6">
              <div>
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  {active.title}
                </h3>
                <p className="mt-1 font-mono text-sm text-muted-foreground">
                  {active.tagline}
                </p>
              </div>

              <p className="text-muted-foreground">{active.description}</p>

              <dl className="grid grid-cols-2 gap-px border border-border bg-border font-mono text-xs sm:grid-cols-3">
                <div className="bg-card p-3">
                  <dt className="text-muted-foreground">ROLE</dt>
                  <dd className="mt-1">{active.role}</dd>
                </div>
                <div className="bg-card p-3">
                  <dt className="text-muted-foreground">YEAR</dt>
                  <dd className="mt-1">{active.year}</dd>
                </div>
                <div className="bg-card p-3">
                  <dt className="text-muted-foreground">CATEGORY</dt>
                  <dd className="mt-1">{active.category}</dd>
                </div>
              </dl>

              <div className="flex flex-wrap gap-2">
                {active.stack.map((tech) => (
                  <span
                    key={tech}
                    className="border border-border px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 border-t border-border pt-5">
                {active.liveUrl && (
                  <a
                    href={active.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-primary px-4 py-2 font-mono text-xs text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    <ExternalLink className="size-3.5" />
                    View Live
                  </a>
                )}

                {active.codeUrl ? (
                  <a
                    href={active.codeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 border border-border px-4 py-2 font-mono text-xs transition-colors hover:border-primary hover:text-primary"
                  >
                    <Code2 className="size-3.5" />
                    View Code
                  </a>
                ) : (
                  active.sourceStatus && (
                    <span className="flex items-center gap-2 border border-dashed border-border px-4 py-2 font-mono text-[11px] text-muted-foreground">
                      <Lock className="size-3.5" />
                      {SOURCE_LABEL[active.sourceStatus]}
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
