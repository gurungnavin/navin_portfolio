"use client";

import { useEffect, useState, useCallback } from "react";
import {
  motion,
  useReducedMotion,
  AnimatePresence,
  type Variants,
} from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Download, Mail } from "lucide-react";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { useBoot } from "@/components/layout/boot-provider";
import { siteConfig } from "@/content/site";
import Image from "next/image";

const ROLES = ["Frontend Developer", "React Engineer", "Problem Solver"];

const SLIDES = [
  { id: 1, src: "/photos/navin-01.jpg", alt: "Navin Gurung" },
  { id: 2, src: "/photos/navin-02.jpg", alt: "Navin Gurung at work" },
  { id: 3, src: "/photos/navin-03.jpg", alt: "Navin Gurung portrait" },
];

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
  const [index, setIndex] = useState(0);

  const next = useCallback(() => setIndex((i) => (i + 1) % SLIDES.length), []);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length),
    [],
  );

  useEffect(() => {
    if (!booted || reduce) return;
    const t = setInterval(next, 4200);
    return () => clearInterval(t);
  }, [booted, reduce, next]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden py-28 lg:py-0"
    >
      <span className="absolute left-6 top-16 z-10 hidden font-mono text-xs tracking-widest text-muted-foreground sm:block">
        // PORTFOLIO
      </span>
      <span className="absolute right-6 top-16 z-10 hidden font-mono text-xs tracking-widest text-muted-foreground sm:block">
        FIG.01 / HERO
      </span>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-[50%_42%] lg:gap-12">
        <motion.div
          variants={container}
          initial="hidden"
          animate={booted ? "show" : "hidden"}
        >
          <motion.p
            variants={item}
            className="mb-5 font-mono text-sm text-muted-foreground"
          >
            <span className="text-primary">&gt;</span> hello, world_
          </motion.p>

          <motion.h1
            variants={item}
            className="text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl"
          >
            {siteConfig.name}
          </motion.h1>

          <motion.div
            variants={item}
            className="mt-4 flex min-h-7 items-center gap-2 font-mono text-lg text-muted-foreground sm:text-xl"
          >
            <span className="text-primary">›</span>
            <span>{role}</span>
            <span className="ml-0.5 inline-block h-5 w-0.5 animate-pulse bg-primary" />
          </motion.div>

          <motion.p
            variants={item}
            className="mt-6 max-w-md text-muted-foreground"
          >
            I build fast, accessible web applications with clean architecture
            and thoughtful detail. Placeholder tagline — swap this later.
          </motion.p>

          <motion.div variants={item} className="mt-8 space-y-5">
  {/* status */}
  <div className="flex items-center gap-2 font-mono text-xs">
    <span className="relative flex size-2">
      <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
      <span className="relative inline-flex size-2 rounded-full bg-primary" />
    </span>
    <span className="text-muted-foreground">available for work</span>
  </div>

  {/* socials + resume */}
  <div className="flex flex-wrap items-center gap-3">
    <a
      href="https://github.com/gurungnavin"
      target="_blank"
      rel="noreferrer"
      aria-label="GitHub"
      className="flex size-10 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
    >
      <IconBrandGithub className="size-4" />
    </a>
    <a
      href="https://linkedin.com/in/yourhandle"
      target="_blank"
      rel="noreferrer"
      aria-label="LinkedIn"
      className="flex size-10 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
    >
      <IconBrandLinkedin className="size-4" />
    </a>
    <a
      href="mailto:you@example.com"
      aria-label="Email"
      className="flex size-10 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
    >
      <Mail className="size-4" />
    </a>

    <a
      href="/resume.pdf"
      download
      className="flex h-10 items-center gap-2 border border-border px-4 font-mono text-xs transition-colors hover:border-primary hover:text-primary"
    >
      <Download className="size-3.5" />
      resume
    </a>
  </div>
</motion.div>
        </motion.div>

        {/* RIGHT — photo slider */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={booted ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          className="relative mx-5 h-[38vh] sm:mx-8 sm:h-[48vh] lg:mx-0 lg:h-[68vh]"
        >
          {/* accent squares — behind, offset */}
          <div
            aria-hidden
            className="absolute -left-5 top-6 -z-10 size-14 bg-primary sm:-left-8 sm:top-10 sm:size-24"
          />
          <div
            aria-hidden
            className="absolute -left-4 bottom-10 -z-10 size-10 bg-primary/60 sm:-left-10 sm:bottom-16 sm:size-16"
          />
          <div
            aria-hidden
            className="absolute -right-4 -top-4 -z-10 size-12 bg-primary/40 sm:-right-5 sm:-top-6 sm:size-20"
          />
          <div
            aria-hidden
            className="absolute -bottom-4 -left-4 size-14 border-2 border-primary sm:-bottom-8 sm:-left-8 sm:size-24"
          />

          {/* slides */}
          <div className="relative h-full w-full overflow-hidden">
            <AnimatePresence initial={false}>
              <motion.div
                key={SLIDES[index].id}
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={SLIDES[index].src}
                  alt={SLIDES[index].alt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-top"
                />
              </motion.div>
            </AnimatePresence>

            {/* grid overlay */}
            <div
              aria-hidden
              className="photo-grid pointer-events-none absolute inset-0"
              style={{
                backgroundImage:
                  "linear-gradient(to right, var(--background) 1px, transparent 1px), linear-gradient(to bottom, var(--background) 1px, transparent 1px)",
                backgroundSize: "33.333% 25%",
                opacity: 0.9,
              }}
            />
          </div>

          {/* controls */}
          <div className="absolute bottom-3 right-3 flex items-center gap-2 bg-background/90 px-2 py-1 backdrop-blur-sm lg:-bottom-4 lg:right-0 lg:bg-transparent lg:px-0 lg:py-0">
            <button
              onClick={prev}
              aria-label="Previous photo"
              className="flex size-9 items-center justify-center border border-border bg-background transition-colors hover:border-primary hover:text-primary"
            >
              <ArrowLeft className="size-4" />
            </button>
            <button
              onClick={next}
              aria-label="Next photo"
              className="flex size-9 items-center justify-center border border-border bg-background transition-colors hover:border-primary hover:text-primary"
            >
              <ArrowRight className="size-4" />
            </button>
            <span className="ml-2 font-mono text-xs text-muted-foreground tabular-nums">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(SLIDES.length).padStart(2, "0")}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
