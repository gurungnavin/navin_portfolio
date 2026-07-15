"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Settings, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useAccent } from "@/components/theme/color-provider";

const PRESETS = ["#f5c518", "#3b82f6", "#22c55e", "#ef4444", "#a855f7", "#f97316"];

export function SettingsMenu() {
  const [open, setOpen] = useState(false);
  const { accent, setAccent, reset } = useAccent();
  const { setTheme, resolvedTheme } = useTheme();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <motion.button
        onClick={() => setOpen((v) => !v)}
        aria-label="Settings"
        aria-expanded={open}
        whileHover={{ rotate: 90 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="flex size-9 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
      >
        <Settings className="size-4" />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "top right" }}
            className="absolute right-0 top-11 z-50 w-44 border border-border bg-card p-4"
          >
            <p className="mb-3 font-mono text-[10px] tracking-widest text-muted-foreground">
              // ACCENT
            </p>
            <div className="mb-4 grid grid-cols-3 gap-2">
              {PRESETS.map((c) => (
                <button
                  key={c}
                  onClick={() => setAccent(c)}
                  aria-label={`Accent ${c}`}
                  className="h-7 w-full border transition-transform hover:scale-105"
                  style={{
                    backgroundColor: c,
                    borderColor: accent === c ? "var(--foreground)" : "transparent",
                  }}
                />
              ))}
            </div>

            <div className="mb-4 flex items-center gap-2">
              <input
                type="color"
                value={accent}
                onChange={(e) => setAccent(e.target.value)}
                aria-label="Custom accent"
                className="size-7 cursor-pointer border border-border bg-transparent"
              />
              <button
                onClick={reset}
                className="font-mono text-xs text-muted-foreground hover:text-primary"
              >
                reset
              </button>
            </div>

            <p className="mb-2 font-mono text-[10px] tracking-widest text-muted-foreground">
              // THEME
            </p>
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="flex w-full items-center justify-between border border-border px-3 py-2 font-mono text-xs transition-colors hover:border-primary hover:text-primary"
            >
              <span>{resolvedTheme === "dark" ? "dark" : "light"}</span>
              {resolvedTheme === "dark" ? (
                <Moon className="size-3.5" />
              ) : (
                <Sun className="size-3.5" />
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}