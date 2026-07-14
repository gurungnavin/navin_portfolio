"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { Button, buttonVariants, } from "@/components/ui/button";
import { Magnetic } from "@/components/motion/magnetic";
import { siteConfig } from "@/content/site";
import type { Variants } from "motion/react";

const ROLES = ["Full-Stack Developer", "React Engineer", "Problem Solver"];

function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const word = words[i % words.length];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && text === word) {
      t = setTimeout(() => setDeleting(true), 1600);
    } else if (deleting && text === "") {
      setDeleting(false);
      setI((v) => v + 1);
    } else {
      t = setTimeout(
        () => setText(word.slice(0, deleting ? text.length - 1 : text.length + 1)),
        deleting ? 45 : 95
      );
    }
    return () => clearTimeout(t);
  }, [text, deleting, i, words, reduce]);

  return reduce ? words[0] : text;
}

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};


function Cross({ className }: { className?: string }) {
  return (
    <span
      className={`pointer-events-none absolute font-mono text-muted-foreground/60 text-sm select-none ${className}`}
    >
      +
    </span>
  );
}

export function Hero() {
  const role = useTypewriter(ROLES);
  const reduce = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* blueprint grid */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black 40%, transparent 100%)",
          opacity: 0.5,
        }}
      />

      {/* registration crosshairs */}
      <Cross className="left-6 top-24" />
      <Cross className="right-6 top-24" />
      <Cross className="left-6 bottom-16" />
      <Cross className="right-6 bottom-16" />

      {/* corner mono labels */}
      <span className="absolute left-6 top-16 font-mono text-xs tracking-widest text-muted-foreground">
        // PORTFOLIO
      </span>
      <span className="absolute right-6 top-16 font-mono text-xs tracking-widest text-muted-foreground">
        FIG.01 / HERO
      </span>

      <motion.div
        variants={container}
        initial={reduce ? false : "hidden"}
        animate="show"
        className="mx-auto w-full max-w-5xl px-6"
      >
        <motion.p
          variants={item}
          className="mb-6 font-mono text-sm text-muted-foreground"
        >
          <span className="text-primary">&gt;</span> hello, world_
        </motion.p>

        <motion.h1
          variants={item}
          className="text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl"
        >
          {siteConfig.name}
        </motion.h1>

        <motion.div
          variants={item}
          className="mt-4 flex items-center gap-2 font-mono text-xl text-muted-foreground sm:text-2xl"
        >
          <span className="text-primary">›</span>
          <span>{role}</span>
          <span className="ml-0.5 inline-block h-6 w-0.5 animate-pulse bg-primary" />
        </motion.div>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-muted-foreground"
        >
          I build fast, accessible web applications with clean architecture and
          thoughtful detail. Placeholder tagline — swap this later.
        </motion.p>

        <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
          <Magnetic>
              <a href="#work" className={buttonVariants({ size: "lg" })}>
                View Work
              </a>
          </Magnetic>
          <Magnetic>
              <a href="#contact" className={buttonVariants({ size: "lg", variant: "outline" })}>
                Contact
              </a>
          </Magnetic>
        </motion.div>
      </motion.div>

      {/* scroll indicator */}
      <motion.div
        aria-hidden
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="size-4 animate-bounce text-muted-foreground" />
      </motion.div>
    </section>
  );
}