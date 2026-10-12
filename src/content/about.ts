export const about = {
  heading: "About",
   bio: [
    "I'm Navin, a Gurung from Pokhara, Nepal. I started out as a graphic designer in 2014, then moved to Japan in 2017, studying Japanese for two years and IT for three.",
    "Today I'm a software engineer with 2.5+ years of experience, building web and mobile apps end to end. I still bring a designer's eye to everything I ship.",
  ],
  links: {
    Gurung: {
      href: "https://en.wikipedia.org/wiki/Gurung_people",
      note: "The Gurung (Tamu) are an ethnic group from the hills of Gandaki Province, Nepal, known for their long service in the Gurkha regiments.",
    },
  },
  photo: { src: "/photos/navin-01.jpg", alt: "Navin Gurung" },
  spec: [
    { key: "FROM", value: "Pokhara, NP" },
    { key: "LOCATION", value: "Tokyo, JP" },
    { key: "FOCUS", value: "Full-Stack Development" },
    { key: "STACK", value: "Next.js · React Native · FastAPI" },
    { key: "EXP", value: "2.5+ years" },
  ],
  status: "open to opportunities",
  stats: [
    { value: "12+", label: "projects shipped" },
    { value: "2.5+", label: "years experience" },
    { value: "10+", label: "technologies" },
  ],
} as const;

export type About = typeof about;