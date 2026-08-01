"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import {
  IconBrandReact,
  IconBrandNextjs,
  IconBrandTypescript,
  IconBrandJavascript,
  IconBrandTailwind,
  IconBrandNodejs,
  IconBrandPython,
  IconBrandDocker,
  IconBrandGit,
  IconBrandGithub,
  IconBolt,
  IconDatabase,
  IconCode,
  type IconProps,
} from "@tabler/icons-react";
import type { ComponentType } from "react";
import { Reveal } from "@/components/motion/reveal";
import { skills } from "@/content/skills";

const ICONS: Record<string, ComponentType<IconProps>> = {
  react: IconBrandReact,
  nextjs: IconBrandNextjs,
  typescript: IconBrandTypescript,
  javascript: IconBrandJavascript,
  tailwind: IconBrandTailwind,
  nodejs: IconBrandNodejs,
  python: IconBrandPython,
  fastapi: IconBolt,
  postgres: IconDatabase,
  docker: IconBrandDocker,
  git: IconBrandGit,
  github: IconBrandGithub,
};

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

export function Skills() {
  const reduce = useReducedMotion();

  return (
    <section id="skills" className="relative border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="mb-4 font-mono text-xs tracking-widest text-muted-foreground">
            03 / SKILLS
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mb-12 text-3xl font-bold tracking-tight sm:text-5xl">
            Tools &amp; Technologies
          </h2>
        </Reveal>

        <motion.ul
          variants={container}
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
        >
          {skills.map((skill) => {
            const Icon = ICONS[skill.icon] ?? IconCode;
            return (
              <motion.li
                key={skill.name}
                variants={item}
                className="group flex items-center gap-3 border border-border px-4 py-4 transition-colors hover:border-primary"
              >
                <Icon
                  className="size-6 shrink-0 text-muted-foreground transition-colors group-hover:text-primary"
                  stroke={1.5}
                />
                <span className="font-mono text-sm transition-colors group-hover:text-primary">
                  {skill.name}
                </span>
                <span className="ml-auto font-mono text-[10px] text-muted-foreground/50">
                  0{skills.indexOf(skill) + 1}
                </span>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}