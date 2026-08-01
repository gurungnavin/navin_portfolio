import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllPosts } from "@/lib/posts";
import { Reveal } from "@/components/motion/reveal";

function formatDate(date: string) {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function BlogPreview() {
  const posts = getAllPosts().slice(0, 3);
  if (posts.length === 0) return null;

  return (
    <section id="blog" className="relative border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="mb-4 font-mono text-xs tracking-widest text-muted-foreground">
            05 / BLOG
          </p>
        </Reveal>

        <div className="mb-12 flex items-end justify-between">
          <Reveal delay={0.1}>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Latest Writing
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <Link
              href="/blog"
              className="group flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              all posts
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <ul className="border-t border-border">
          {posts.map((post, i) => (
            <li key={post.slug} className="border-b border-border">
              <Reveal delay={i * 0.08}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:justify-between"
                >
                  <div className="max-w-xl">
                    <h3 className="text-xl font-bold tracking-tight transition-colors group-hover:text-primary">
                      {post.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {post.description}
                    </p>
                  </div>
                  <div className="shrink-0 font-mono text-xs text-muted-foreground sm:text-right">
                    {formatDate(post.date)} · {post.readingTime}
                  </div>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}