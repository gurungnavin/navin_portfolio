import type { Metadata } from "next";
import { ArrowUpRight, Ban, Megaphone, Smartphone } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { DocShell } from "../_components/doc-shell";
import { Toc } from "../_components/toc";
import { quikliApp, resolveLang } from "../_content/config";
import { privacy, type Block } from "../_content/privacy";

const BASE_PATH = "/quikli/privacy-policy";
const SUMMARY_ICONS = [Smartphone, Ban, Megaphone];

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const doc = privacy[resolveLang((await searchParams).lang)];
  return {
    title: `${doc.title} — ${quikliApp.name}`,
    description: doc.intro,
    alternates: {
      canonical: BASE_PATH,
      languages: { en: BASE_PATH, ja: `${BASE_PATH}?lang=ja` },
    },
  };
}

function BlockView({ block }: { block: Block }) {
  if (Array.isArray(block)) {
    return (
      <ul className="flex flex-col gap-2">
        {block.map((item) => (
          <li key={item} className="flex gap-3">
            <span aria-hidden className="mt-2.5 size-1.5 shrink-0 bg-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }
  return <p>{block}</p>;
}

export default async function PrivacyPolicyPage({ searchParams }: Props) {
  const lang = resolveLang((await searchParams).lang);
  const doc = privacy[lang];

  return (
    <DocShell
      lang={lang}
      basePath={BASE_PATH}
      label={doc.label}
      title={doc.title}
      intro={doc.intro}
      meta={`${doc.updatedLabel}: ${quikliApp.lastUpdated}`}
    >
      {/* 概要カード */}
      <div className="mb-20 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {doc.summary.map((item, index) => {
          const Icon = SUMMARY_ICONS[index] ?? Smartphone;
          return (
            <Reveal key={item.title} delay={0.1 * index}>
              <div className="group flex h-full flex-col gap-6 border border-border p-6 transition-colors hover:border-primary">
                <div className="flex items-start justify-between">
                  <div className="flex size-11 items-center justify-center border border-border transition-colors group-hover:border-primary">
                    <Icon className="size-5 text-muted-foreground transition-colors group-hover:text-primary" />
                  </div>
                  <span className="font-mono text-[10px] tracking-widest text-muted-foreground/60">
                    {`FIG.${String(index + 1).padStart(2, "0")}`}
                  </span>
                </div>
                <div>
                  <p className="text-lg font-bold tracking-tight">{item.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[240px_1fr] lg:gap-16">
        <aside>
          <Toc label={doc.tocLabel} items={doc.sections.map(({ id, title }) => ({ id, title }))} />
        </aside>

        <div className="flex max-w-3xl flex-col">
          {doc.sections.map((section, index) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-28 border-t border-border py-10 first:border-t-0 first:pt-0"
            >
              <Reveal>
                <p className="mb-3 font-mono text-xs tracking-widest text-muted-foreground">
                  {`${String(index + 1).padStart(2, "0")} /`}
                </p>
                <h2 className="mb-6 text-2xl font-bold tracking-tight sm:text-3xl">{section.title}</h2>
                <div className="flex flex-col gap-4 leading-relaxed text-muted-foreground">
                  {section.blocks.map((block, i) => (
                    <BlockView key={i} block={block} />
                  ))}
                </div>

                {section.links && (
                  <div className="mt-6 flex flex-wrap gap-3">
                    {section.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex items-center gap-1.5 border border-border px-3 py-2 font-mono text-xs transition-colors hover:border-primary hover:text-primary"
                      >
                        {link.label}
                        <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </a>
                    ))}
                  </div>
                )}

                {section.id === "contact" && (
                  <a
                    href={`mailto:${quikliApp.supportEmail}`}
                    className="mt-6 inline-flex items-center gap-2 text-lg font-bold tracking-tight text-foreground transition-colors hover:text-primary"
                  >
                    {quikliApp.supportEmail}
                    <ArrowUpRight className="size-4" />
                  </a>
                )}
              </Reveal>
            </section>
          ))}
        </div>
      </div>
    </DocShell>
  );
}