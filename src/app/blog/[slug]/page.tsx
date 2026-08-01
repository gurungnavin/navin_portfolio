import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { siteConfig } from "@/content/site";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — ${siteConfig.name}`,
    description: post.description,
  };
}

function formatDate(date: string) {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <main className="mx-auto min-h-screen max-w-2xl px-6 pb-24 pt-32">
      <Link
        href="/blog"
        className="mb-12 inline-flex items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="size-3.5" />
        all posts
      </Link>

      <header className="mb-10 border-b border-border pb-8">
        <div className="mb-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
          {post.title}
        </h1>
        <div className="mt-4 flex items-center gap-3 font-mono text-xs text-muted-foreground">
          <span>{formatDate(post.date)}</span>
          <span>·</span>
          <span>{post.readingTime}</span>
        </div>
      </header>

      <article className="prose-blog">
        <MDXRemote source={post.content} />
      </article>
    </main>
  );
}