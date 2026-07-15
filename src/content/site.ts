export const siteConfig = {
  name: "Navin Gurung",
  role: "Front-End Developer",
  description: "Personal portfolio and blog.",
  url: "https://yourdomain.com",
  socials: {
    github: "https://github.com/gurungnavin",
    linkedin: "https://linkedin.com/in/yourhandle",
    email: "you@example.com",
  },
} as const;

export type SiteConfig = typeof siteConfig;


export const navLinks = [
  { num: "01", label: "about", href: "#about" },
  { num: "02", label: "skills", href: "#skills" },
  { num: "03", label: "work", href: "#work" },
  { num: "04", label: "blog", href: "/blog" },
  { num: "05", label: "contact", href: "#contact" },
] as const;
