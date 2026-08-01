export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: "Frontend" | "Fullstack" | "Mobile" | "No-Code";
  stack: string[];
  year: string;
  role: string;
  image: string;
  liveUrl?: string;
  codeUrl?: string;
  sourceStatus?: "private" | "no-code" | "contributed";
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "project-alpha",
    title: "Project Alpha",
    tagline: "Full-stack SaaS dashboard",
    description:
      "A placeholder full-stack application with real-time data, auth, and a clean component system. Swap this description later.",
    category: "Fullstack",
    stack: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL"],
    year: "2025",
    role: "Solo Developer",
    image: "/projects/project-01.jpg",
    liveUrl: "https://example.com",
    codeUrl: "https://github.com/gurungnavin",
    featured: true,
  },
  {
    slug: "project-beta",
    title: "Project Beta",
    tagline: "Design-driven marketing site",
    description:
      "A placeholder frontend build focused on motion, performance, and accessibility. Swap this later.",
    category: "Frontend",
    stack: ["React", "Tailwind", "Motion"],
    year: "2025",
    role: "Frontend Developer",
    image: "/projects/project-02.jpg",
    liveUrl: "https://example.com",
    codeUrl: "https://github.com/gurungnavin",
  },
  {
    slug: "project-gamma",
    title: "Project Gamma",
    tagline: "Mobile-first commerce app",
    description:
      "A placeholder mobile-focused build. Swap this later.",
    category: "Mobile",
    stack: ["React Native", "Expo", "Node.js"],
    year: "2024",
    role: "Mobile Developer",
    image: "/projects/project-03.jpg",
    liveUrl: "https://example.com",
    sourceStatus: "private",
  },
  {
    slug: "project-delta",
    title: "Project Delta",
    tagline: "No-code automation platform",
    description:
      "A placeholder no-code build. Swap this later.",
    category: "No-Code",
    stack: ["Webflow", "Zapier", "Airtable"],
    year: "2024",
    role: "Builder",
    image: "/projects/project-04.jpg",
    liveUrl: "https://example.com",
    sourceStatus: "no-code",
  },
  {
    slug: "project-epsilon",
    title: "Project Epsilon",
    tagline: "Open-source contribution",
    description:
      "A placeholder contribution to a larger codebase. Swap this later.",
    category: "Fullstack",
    stack: ["TypeScript", "Docker", "PostgreSQL"],
    year: "2023",
    role: "Contributor",
    image: "/projects/project-05.jpg",
    liveUrl: "https://example.com",
    sourceStatus: "contributed",
  },
];