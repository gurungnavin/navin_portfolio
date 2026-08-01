"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import { Mail, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { siteConfig } from "@/content/site";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const CHANNELS = [
  {
    fig: "FIG.01",
    label: "EMAIL",
    value: siteConfig.socials.email,
    href: `mailto:${siteConfig.socials.email}`,
    icon: Mail,
    external: false,
  },
  {
    fig: "FIG.02",
    label: "GITHUB",
    value: "@gurungnavin",
    href: siteConfig.socials.github,
    icon: IconBrandGithub,
    external: true,
  },
  {
    fig: "FIG.03",
    label: "LINKEDIN",
    value: "/navingurung",
    href: siteConfig.socials.linkedin,
    icon: IconBrandLinkedin,
    external: true,
  },
];

export function Contact() {
  const reduce = useReducedMotion();

  return (
    <section id="contact" className="relative border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="mb-4 font-mono text-xs tracking-widest text-muted-foreground">
            06 / CONTACT
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s build something
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mb-12 max-w-lg text-muted-foreground">
            Have a project in mind or just want to say hello? Reach out through
            any of these channels.
          </p>
        </Reveal>

        <motion.div
          variants={container}
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {CHANNELS.map((ch) => {
            const Icon = ch.icon;
            return (
              <motion.a
                key={ch.label}
                variants={item}
                href={ch.href}
                target={ch.external ? "_blank" : undefined}
                rel={ch.external ? "noreferrer" : undefined}
                className="group relative flex flex-col gap-6 border border-border p-6 transition-colors hover:border-primary"
              >
                <div className="flex items-start justify-between">
                  <div className="flex size-11 items-center justify-center border border-border transition-colors group-hover:border-primary">
                    <Icon className="size-5 text-muted-foreground transition-colors group-hover:text-primary" />
                  </div>
                  <span className="font-mono text-[10px] tracking-widest text-muted-foreground/60">
                    {ch.fig}
                  </span>
                </div>

                <div>
                  <p className="font-mono text-[10px] tracking-widest text-muted-foreground">
                    {ch.label}
                  </p>
                  <p className="mt-1 flex items-center gap-1 break-all text-lg font-bold tracking-tight transition-colors group-hover:text-primary">
                    {ch.value}
                    <ArrowUpRight className="size-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                  </p>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* availability */}
        <Reveal delay={0.2}>
          <div className="mt-10 flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            available for work — usually responds within 24h
          </div>
        </Reveal>
      </div>
    </section>
  );
}