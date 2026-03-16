/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // enables class-based dark mode
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        profile_animate: {
          '0%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
          '100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
        },
      },
      animation: {
        profile: 'profile_animate 6s ease-in-out infinite 0.3s',
      },
    },
  },
  plugins: [],
};