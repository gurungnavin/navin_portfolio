import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "src/content/posts");

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  readingTime: string;
};

export type Post = PostMeta & {
  content: string;
};

function readingTime(content: string): string {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}

function getFiles(): string[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));
}

export function getAllPosts(): PostMeta[] {
  return getFiles()
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
      const { data, content } = matter(raw);
      return {
        slug,
        title: data.title ?? slug,
        description: data.description ?? "",
        date: data.date ?? "",
        tags: data.tags ?? [],
        readingTime: readingTime(content),
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1)); // newest first
}

export function getPostBySlug(slug: string): Post | null {
  const file = path.join(POSTS_DIR, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? "",
    date: data.date ?? "",
    tags: data.tags ?? [],
    readingTime: readingTime(content),
    content,
  };
}