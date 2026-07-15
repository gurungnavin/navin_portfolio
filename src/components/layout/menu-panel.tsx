"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { useLenis } from "lenis/react";
import { useMenu } from "@/components/layout/menu-provider";
import { navLinks, siteConfig } from "@/content/site";

export function MenuPanel() {
  const { open, setOpen } = useMenu();
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    open ? lenis.stop() : lenis.start();
  }, [open, lenis]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [setOpen]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed right-0 top-0 z-50 flex h-full w-full flex-col border-l border-border bg-card p-8 sm:w-[400px]"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs tracking-widest text-muted-foreground">
                // MENU
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex size-9 items-center justify-center border border-border transition-colors hover:border-primary hover:text-primary"
              >
                <X className="size-4" />
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.2 + i * 0.07,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group flex items-baseline gap-4 border-b border-border py-3 transition-colors hover:border-primary"
                >
                  <span className="font-mono text-xs text-muted-foreground group-hover:text-primary">
                    {link.num}
                  </span>
                  <span className="text-3xl font-bold tracking-tight transition-colors group-hover:text-primary">
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </nav>

            <div className="font-mono text-xs text-muted-foreground">
              {siteConfig.name} · {siteConfig.role}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}