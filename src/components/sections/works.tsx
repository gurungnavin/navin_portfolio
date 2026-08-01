"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { Plus } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { WorkModal } from "@/components/sections/work-modal";
import { useWorksModal } from "@/components/sections/works-modal-context";
import { projects, type Project } from "@/content/projects";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

function spanFor(featured?: boolean) {
  return featured ? "sm:col-span-2 sm:row-span-2" : "";
}

function Card({ project, index }: { project: Project; index: number }) {
  const { open } = useWorksModal();
  return (
    <motion.button
      variants={item}
      onClick={() => open(project)}
      className={`group relative flex cursor-pointer flex-col overflow-hidden border border-border text-left transition-colors hover:border-primary ${spanFor(
        project.featured
      )}`}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="photo-grid pointer-events-none absolute inset-0 opacity-60" />
        <div className="pointer-events-none absolute inset-0 bg-primary/0 transition-colors duration-300 group-hover:bg-primary/10" />
        <span className="absolute left-3 top-3 font-mono text-[10px] tracking-widest text-white/90 mix-blend-difference">
          FIG.0{index + 1}
        </span>
        <div className="absolute right-3 top-3 flex size-7 items-center justify-center border border-white/40 bg-black/20 backdrop-blur-sm transition-colors duration-300 group-hover:border-primary group-hover:bg-primary">
          <Plus className="size-4 text-white transition-colors group-hover:text-primary-foreground" />
        </div>
        <div className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-between bg-background/90 px-3 py-2 backdrop-blur-sm transition-transform duration-300 group-hover:translate-y-0">
          <span className="font-mono text-[10px] tracking-widest text-primary">
            VIEW DETAILS
          </span>
          <Plus className="size-3.5 text-primary" />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-center justify-between">
          <span className="border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground group-hover:border-primary group-hover:text-primary">
            {project.category}
          </span>
          <span className="font-mono text-[10px] text-muted-foreground">
            {project.year}
          </span>
        </div>

        <h3 className="mt-1 text-xl font-bold tracking-tight">{project.title}</h3>
        <p className="font-mono text-xs text-muted-foreground">{project.tagline}</p>

        <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-3 font-mono text-[10px] text-muted-foreground">
          {project.stack.slice(0, 4).map((tech, i, arr) => (
            <span key={tech} className="flex items-center gap-1.5">
              {tech}
              {i < arr.length - 1 && <span className="text-muted-foreground/40">·</span>}
            </span>
          ))}
        </div>
      </div>
    </motion.button>
  );
}

export function Works() {
  const reduce = useReducedMotion();

  return (
    <section id="work" className="relative border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="mb-4 font-mono text-xs tracking-widest text-muted-foreground">
            04 / WORK
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mb-12 text-3xl font-bold tracking-tight sm:text-5xl">
            Selected Projects
          </h2>
        </Reveal>

        <motion.div
          variants={container}
          initial={reduce ? false : "hidden"}
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, i) => (
            <Card key={project.slug} project={project} index={i} />
          ))}
        </motion.div>
      </div>

      <WorkModal />
    </section>
  );
}