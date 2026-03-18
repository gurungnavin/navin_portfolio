/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // enables class-based dark mode
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inconsolata", "Poppins", "ui-sans-serif", "system-ui"], // default
        mono: ["Inconsolata", "ui-monospace", "monospace"], // for code if needed
      },
    },
  },
  plugins: [],
};
