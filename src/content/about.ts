export const about = {
  heading: "About",
  bio: [
    "I'm a full-stack developer focused on building fast, accessible web applications with clean architecture and thoughtful detail.",
    "I care about the craft — from type-safe APIs to smooth, intentional interfaces. Placeholder bio; swap this later.",
  ],
  photo: { src: "/photos/photo-01.jpg", alt: "Navin Gurung", label: "OPERATOR" },
  spec: [
    { key: "LOCATION", value: "Tokyo, JP" },
    { key: "FOCUS", value: "Full-Stack Development" },
    { key: "STACK", value: "React · FastAPI" },
    { key: "EXP", value: "3+ years" },
  ],
  status: "available for work",
  stats: [
    { value: "20+", label: "projects shipped" },
    { value: "3+", label: "years experience" },
    { value: "10+", label: "technologies" },
  ],
} as const;

export type About = typeof about;