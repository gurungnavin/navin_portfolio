export const siteConfig = {
  name: "Navin Gurung",
  role: "Software Engineer",
  description: "Personal portfolio and blog.",
  url: "https://navingurung.com",
  socials: {
    github: "https://github.com/gurungnavin",
    linkedin: "https://www.linkedin.com/in/navin-gurung-9021611b3/",
    tiktok: "https://www.tiktok.com/@lessbutbetter553",
    email: "navingurung865@gmail.com",
  },
} as const;

export type SiteConfig = typeof siteConfig;


export const navLinks = [
  { num: "01", label: "about", href: "/#about" },
  { num: "02", label: "skills", href: "/#skills" },
  { num: "03", label: "work", href: "/#work" },
  { num: "04", label: "blog", href: "/blog" },
  { num: "05", label: "contact", href: "/#contact" },
] as const;
