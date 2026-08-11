"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  type Variants,
} from "motion/react";
import { ArrowDown } from "lucide-react";
import { useBoot } from "@/components/layout/boot-provider";
import { siteConfig } from "@/content/site";

const ROLES = ["Frontend Developer", "React Engineer", "Problem Solver"];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

function useTypewriter(words: string[], enabled: boolean) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || !enabled) return;
    const word = words[i % words.length];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && text === word) {
      t = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && text === "") {
      setDeleting(false);
      setI((v) => v + 1);
    } else {
      t = setTimeout(
        () =>
          setText(word.slice(0, deleting ? text.length - 1 : text.length + 1)),
        deleting ? 40 : 90,
      );
    }
    return () => clearTimeout(t);
  }, [text, deleting, i, words, reduce, enabled]);

  return reduce ? words[0] : text;
}

export function Hero() {
  const { booted } = useBoot();
  const reduce = useReducedMotion();
  const role = useTypewriter(ROLES, booted);
  const ref = useRef<HTMLElement>(null);

  // scroll parallax
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // cursor parallax
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 90, damping: 20 });
  const sy = useSpring(my, { stiffness: 90, damping: 20 });
  const sq1x = useTransform(sx, (v) => v * 34);
  const sq1y = useTransform(sy, (v) => v * 34);
  const sq2x = useTransform(sx, (v) => v * 20);
  const sq2y = useTransform(sy, (v) => v * 20);
  const sq3x = useTransform(sx, (v) => v * -26);
  const sq3y = useTransform(sy, (v) => v * -26);
  const gridX = useTransform(sx, (v) => v * 10);
  const gridMY = useTransform(sy, (v) => v * 10);

  function handleMouse(e: React.MouseEvent<HTMLElement>) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  const nameWords = siteConfig.name.split(" ");

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      className="relative flex min-h-screen items-center overflow-hidden py-28 lg:py-0"
    >
      {/* blueprint grid (parallax on scroll + cursor) */}
      <motion.div
        aria-hidden
        style={{ y: bgY, x: gridX, translateY: gridMY }}
        className="pointer-events-none absolute inset-0 -z-20"
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 40% 45%, black 30%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 40% 45%, black 30%, transparent 100%)",
            opacity: 0.6,
          }}
        />
      </motion.div>

      {/* accent squares (cursor parallax) */}
      <motion.div
        aria-hidden
        style={{ x: sq1x, y: sq1y }}
        className="pointer-events-none absolute right-[12%] top-[22%] -z-10 hidden size-28 bg-primary/80 sm:block"
      />
      <motion.div
        aria-hidden
        style={{ x: sq2x, y: sq2y }}
        className="pointer-events-none absolute right-[26%] top-[52%] -z-10 hidden size-16 bg-primary/40 sm:block"
      />
      <motion.div
        aria-hidden
        style={{ x: sq3x, y: sq3y }}
        className="pointer-events-none absolute bottom-[18%] right-[18%] -z-10 hidden size-20 border-2 border-primary sm:block"
      />

      {/* corner labels + crosshairs */}
      <span className="absolute left-6 top-16 z-10 hidden font-mono text-xs tracking-widest text-muted-foreground sm:block">
        // PORTFOLIO
      </span>
      <span className="absolute right-6 top-16 z-10 hidden font-mono text-xs tracking-widest text-muted-foreground sm:block">
        FIG.01 / HERO
      </span>
      <span className="pointer-events-none absolute left-6 top-28 hidden font-mono text-muted-foreground/50 sm:block">
        +
      </span>
      <span className="pointer-events-none absolute bottom-16 right-6 hidden font-mono text-muted-foreground/50 sm:block">
        +
      </span>

      {/* content */}
      <motion.div
        style={{ y: contentY, opacity: fade }}
        variants={container}
        initial="hidden"
        animate={booted ? "show" : "hidden"}
        className="mx-auto w-full max-w-7xl px-6"
      >
        <motion.p
          variants={item}
          className="mb-6 font-mono text-sm text-muted-foreground"
        >
          <span className="text-primary">&gt;</span> hello, world_
        </motion.p>

        <motion.h1
          variants={item}
          className="text-6xl font-bold leading-[0.92] tracking-tight sm:text-8xl lg:text-9xl"
        >
          {nameWords.map((word, i) => (
            <span
              key={i}
              className="block cursor-default transition-colors duration-300 hover:text-primary"
            >
              {word}
            </span>
          ))}
        </motion.h1>

        <motion.div
          variants={item}
          className="mt-6 flex min-h-8 items-center gap-2 font-mono text-lg text-muted-foreground sm:text-2xl"
        >
          <span className="text-primary">›</span>
          <span>{role}</span>
          <span className="ml-0.5 inline-block h-6 w-0.5 animate-pulse bg-primary" />
        </motion.div>

        <motion.p
          variants={item}
          className="mt-8 max-w-lg text-muted-foreground"
        >
          I build fast, accessible web applications with clean architecture and
          thoughtful detail. Placeholder tagline — swap this later.
        </motion.p>
      </motion.div>

      {/* scroll indicator */}
      <motion.div
        aria-hidden
        style={{ opacity: fade }}
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