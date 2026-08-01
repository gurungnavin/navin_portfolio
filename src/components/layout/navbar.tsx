"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useSpring } from "motion/react";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { useLenis } from "lenis/react";
import { useMenu } from "@/components/layout/menu-provider";
import { SettingsMenu } from "@/components/theme/settings-menu";
import { navLinks } from "@/content/site";

export function Navbar() {
  const { setOpen } = useMenu();
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const pathname = usePathname();
  const lenis = useLenis();
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

  // smooth-scroll to a section; if not on home, navigate there first
  function handleSectionClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) {
    if (!href.startsWith("/#")) return; // real pages (e.g. /blog) navigate normally
    const id = href.replace("/#", "");
    if (pathname === "/") {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el && lenis) lenis.scrollTo(el);
      else el?.scrollIntoView({ behavior: "smooth" });
    }
    // if not on home, let Link navigate to /#id normally
  }

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
        <Link
          href="/#home"
          onClick={(e) => handleSectionClick(e, "/#home")}
          className="font-mono text-sm font-bold tracking-widest"
        >
          NG<span className="text-primary">.</span>
        </Link>

        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleSectionClick(e, link.href)}
                className="group flex items-baseline gap-1.5 font-mono text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <span className="text-[10px] text-primary/60">{link.num}</span>
                {link.label}
              </Link>
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