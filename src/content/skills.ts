export const skills = [
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "TypeScript", icon: "typescript" },
  { name: "JavaScript", icon: "javascript" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Python", icon: "python" },
  { name: "FastAPI", icon: "fastapi" },
  { name: "PostgreSQL", icon: "postgres" },
  { name: "Docker", icon: "docker" },
  { name: "Git", icon: "git" },
  { name: "GitHub", icon: "github" },
] as const;

export type Skill = (typeof skills)[number];