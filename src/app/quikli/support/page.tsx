import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { DocShell } from "../_components/doc-shell";
import { Faq } from "../_components/faq";
import { quikliApp, resolveLang } from "../_content/config";
import { support } from "../_content/support";

const BASE_PATH = "/quikli/support";
const PRIVACY_PATH = "/quikli/privacy-policy";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const doc = support[resolveLang((await searchParams).lang)];
  return {
    title: `${doc.title} — ${quikliApp.name}`,
    description: doc.intro,
    alternates: {
      canonical: BASE_PATH,
      languages: { en: BASE_PATH, ja: `${BASE_PATH}?lang=ja` },
    },
  };
}

export default async function SupportPage({ searchParams }: Props) {
  const lang = resolveLang((await searchParams).lang);
  const doc = support[lang];
  const privacyHref = lang === "en" ? PRIVACY_PATH : `${PRIVACY_PATH}?lang=${lang}`;

  const infoRows = [
    { label: doc.info.platformsLabel, value: quikliApp.platforms.join(" / ") },
    { label: doc.info.developerLabel, value: quikliApp.developer },
  ];

  return (
    <DocShell lang={lang} basePath={BASE_PATH} label={doc.label} title={doc.title} intro={doc.intro}>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_320px] lg:gap-16">
        {/* よくある質問 */}
        <section aria-labelledby="faq-title">
          <Reveal>
            <p className="mb-3 font-mono text-xs tracking-widest text-muted-foreground">01 /</p>
            <h2 id="faq-title" className="mb-8 text-2xl font-bold tracking-tight sm:text-3xl">
              {doc.faqTitle}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Faq items={doc.faqs} />
          </Reveal>
        </section>

        {/* サイドバー: お問い合わせ・アプリ情報 */}
        <aside className="flex flex-col gap-4 lg:sticky lg:top-28 lg:self-start">
          <Reveal delay={0.1}>
            <a
              href={`mailto:${quikliApp.supportEmail}`}
              className="group flex flex-col gap-6 border border-border p-6 transition-colors hover:border-primary"
            >
              <div className="flex items-start justify-between">
                <div className="flex size-11 items-center justify-center border border-border transition-colors group-hover:border-primary">
                  <Mail className="size-5 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
                <span className="font-mono text-[10px] tracking-widest text-muted-foreground/60">FIG.01</span>
              </div>
              <div>
                <p className="font-mono text-[10px] tracking-widest text-muted-foreground">
                  {doc.contact.title.toUpperCase()}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{doc.contact.body}</p>
                <p className="mt-4 flex items-center gap-1 text-lg font-bold tracking-tight transition-colors group-hover:text-primary">
                  {doc.contact.cta}
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </p>
              </div>
              <p className="border-t border-border pt-4 font-mono text-[11px] leading-relaxed text-muted-foreground">
                {doc.contact.note}
              </p>
            </a>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="border border-border p-6">
              <p className="mb-4 font-mono text-[10px] tracking-widest text-muted-foreground">
                {doc.info.title.toUpperCase()}
              </p>
              <dl className="flex flex-col gap-3 text-sm">
                {infoRows.map((row) => (
                  <div key={row.label} className="flex items-baseline justify-between gap-4">
                    <dt className="text-muted-foreground">{row.label}</dt>
                    <dd className="font-medium">{row.value}</dd>
                  </div>
                ))}
              </dl>
              <Link
                href={privacyHref}
                className="group mt-6 flex items-center justify-between border-t border-border pt-4 text-sm font-medium transition-colors hover:text-primary"
              >
                {doc.info.privacyLabel}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </aside>
      </div>
    </DocShell>
  );
}