import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { getAllPosts } from "@/lib/posts";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: `Blog — ${siteConfig.name}`,
  description: "Writing on development, design, and things I build.",
};

function formatDate(date: string) {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <main className="mx-auto min-h-screen max-w-4xl px-6 pb-24 pt-32">
      <Link
        href="/"
        className="mb-12 inline-flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="size-3.5" />
        back
      </Link>

      <p className="mb-3 font-mono text-xs tracking-widest text-muted-foreground">
        // BLOG
      </p>
      <h1 className="mb-12 text-4xl font-bold tracking-tight sm:text-6xl">
        Writing
      </h1>

      {posts.length === 0 ? (
        <p className="font-mono text-sm text-muted-foreground">
          No posts yet.
        </p>
      ) : (
        <ul className="border-t border-border">
          {posts.map((post) => (
            <li key={post.slug} className="border-b border-border">
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col gap-3 py-8 transition-colors sm:flex-row sm:items-baseline sm:justify-between"
              >
                <div className="max-w-xl">
                  <h2 className="text-2xl font-bold tracking-tight transition-colors group-hover:text-primary">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-muted-foreground">
                    {post.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="shrink-0 font-mono text-xs text-muted-foreground sm:text-right">
                  <div>{formatDate(post.date)}</div>
                  <div className="mt-1">{post.readingTime}</div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}