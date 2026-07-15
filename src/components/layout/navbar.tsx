"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { useMenu } from "@/components/layout/menu-provider";
import { SettingsMenu } from "@/components/theme/settings-menu";
import { navLinks } from "@/content/site";

export function Navbar() {
  const { setOpen } = useMenu();
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-30 transition-colors duration-300 ${
        scrolled ? "border-b border-border bg-background/80 backdrop-blur-md" : ""
      }`}
    >
      <motion.div
        style={{ scaleX: progress }}
        className="absolute inset-x-0 top-0 h-[2px] origin-left bg-primary"
      />

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#home" className="font-mono text-sm font-bold tracking-widest">
          NG<span className="text-primary">.</span>
        </a>

        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group flex items-baseline gap-1.5 font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <span className="text-[10px] text-primary/60">{link.num}</span>
                {link.label}
              </a>
            ))}
          </nav>

          <SettingsMenu />

          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="flex size-9 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary lg:hidden"
          >
            <Menu className="size-4" />
          </button>
        </div>
      </div>
    </header>
  );
}