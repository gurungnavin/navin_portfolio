export const siteConfig = {
  name: "Navin Gurung",
  role: "Full-Stack Developer",
  description: "Personal portfolio and blog.",
  url: "https://yourdomain.com",
  socials: {
    github: "https://github.com/gurungnavin",
    linkedin: "https://linkedin.com/in/yourhandle",
    email: "you@example.com",
  },
} as const;

export type SiteConfig = typeof siteConfig;
