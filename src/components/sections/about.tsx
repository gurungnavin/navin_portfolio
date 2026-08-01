"use client";

import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";
import { about } from "@/content/about";

export function About() {
  return (
    <section id="about" className="relative border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="mb-12 font-mono text-xs tracking-widest text-muted-foreground">
            02 / ABOUT
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[38%_1fr] lg:gap-16">
          {/* photo */}
          <Reveal>
            <div className="relative">
              <div className="absolute -left-3 -top-3 z-10 font-mono text-[10px] tracking-widest text-muted-foreground">
                FIG.02 / {about.photo.label}
              </div>
              <div className="relative h-[380px] w-full overflow-hidden border border-border sm:h-[460px]">
                <Image
                  src={about.photo.src}
                  alt={about.photo.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 38vw"
                  className="object-cover object-top"
                />
                <div className="photo-grid pointer-events-none absolute inset-0 opacity-80" />
              </div>
              <div aria-hidden className="absolute -bottom-3 -right-3 -z-10 size-20 bg-primary/30" />
            </div>
          </Reveal>

          {/* text + data-sheet */}
          <div className="flex flex-col justify-center">
            <Reveal>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
                {about.heading}
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-6 space-y-4 text-muted-foreground">
                {about.bio.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </Reveal>

            {/* data-sheet */}
            <Reveal delay={0.2}>
              <dl className="mt-8 border border-border font-mono text-sm">
                {about.spec.map((row) => (
                  <div
                    key={row.key}
                    className="flex items-center justify-between border-b border-border px-4 py-2.5 last:border-b-0"
                  >
                    <dt className="text-muted-foreground">{row.key}</dt>
                    <dd>{row.value}</dd>
                  </div>
                ))}
                <div className="flex items-center justify-between px-4 py-2.5">
                  <dt className="text-muted-foreground">STATUS</dt>
                  <dd className="flex items-center gap-2">
                    <span className="relative flex size-2">
                      <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-75" />
                      <span className="relative inline-flex size-2 rounded-full bg-primary" />
                    </span>
                    {about.status}
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </div>

        {/* stat row */}
        <Reveal delay={0.1}>
          <div className="mt-16 grid grid-cols-3 gap-4 border-t border-border pt-10">
            {about.stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-bold sm:text-5xl">{s.value}</div>
                <div className="mt-1 font-mono text-xs text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}