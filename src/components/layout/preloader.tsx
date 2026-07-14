"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const STORAGE_KEY = "visited";

const TESTS = [
  "theme system",
  "smooth scroll engine",
  "motion pipeline",
  "component registry",
  "route handlers",
  "content loader",
  "accent tokens",
  "grid renderer",
  "hero module",
  "portfolio boot",
];

const springy = {
  hidden: { opacity: 0, y: 60, scale: 0.7 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 320,
      damping: 12,
      delay: i * 0.08,
    },
  }),
};

export function Preloader() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(false);
  const [phase, setPhase] = useState<"boot" | "welcome">("boot");
  const [count, setCount] = useState(0);
  const [passed, setPassed] = useState(0);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    // if (sessionStorage.getItem(STORAGE_KEY) || reduce) return;
    if (reduce) return;
    setShow(true);
    document.body.style.overflow = "hidden";

    const duration = 5000;
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 2);
      setCount(Math.round(eased * 100));
      setPassed(Math.floor(eased * TESTS.length));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setCount(100);
        setPassed(TESTS.length);
        const toWelcome = setTimeout(() => setPhase("welcome"), 500);
        const toEnd = setTimeout(() => {
          // sessionStorage.setItem(STORAGE_KEY, "1");
          setShow(false);
          document.body.style.overflow = "";
        }, 500 + 2900);
        timers.current.push(toWelcome, toEnd);
      }
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      timers.current.forEach(clearTimeout);
      document.body.style.overflow = "";
    };
  }, [reduce]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col bg-background p-6 sm:p-10"
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex items-center justify-between font-mono text-xs tracking-widest text-muted-foreground">
            <span>// SYSTEM BOOT</span>
            <span>FIG.00</span>
          </div>

          <AnimatePresence mode="wait">
            {phase === "boot" ? (
              <motion.div
                key="boot"
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="flex flex-1 flex-col justify-center"
              >
                {/* big counter */}
                <div className="mb-8 flex items-end justify-between">
                  <span className="font-mono text-7xl font-bold tabular-nums leading-none sm:text-9xl">
                    {String(count).padStart(3, "0")}
                    <span className="text-primary">%</span>
                  </span>
                </div>
                <div className="mb-8 h-0.75 w-full bg-border">
                  <div
                    className="h-0.75 bg-primary transition-none"
                    style={{ width: `${count}%` }}
                  />
                </div>

                {/* test lines */}
                <div className="mx-auto w-full max-w-2xl space-y-1.5 font-mono text-xs sm:text-sm">
                  {TESTS.map((t, i) => (
                    <div
                      key={t}
                      className={`flex items-center gap-3 transition-opacity duration-200 ${
                        i < passed ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <span className="text-primary font-bold">PASS</span>
                      <span className="text-primary">✓</span>
                      <span className="text-muted-foreground">{t}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="welcome"
                className="flex flex-1 flex-col items-center justify-center gap-2"
              >
                <div className="flex gap-3 overflow-visible">
                  {"WELCOME".split("").map((ch, i) => (
                    <motion.span
                      key={i}
                      custom={i}
                      variants={springy}
                      initial="hidden"
                      animate="show"
                      className="text-5xl font-black tracking-tight text-primary sm:text-8xl"
                    >
                      {ch}
                    </motion.span>
                  ))}
                </div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 14,
                    delay: 0.8,
                  }}
                  className="font-mono text-sm tracking-[0.3em] text-muted-foreground sm:text-lg"
                >
                  TO MY PORTFOLIO
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="font-mono text-xs text-muted-foreground">
            navin gurung · portfolio
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}