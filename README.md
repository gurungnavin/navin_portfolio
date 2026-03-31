# React + Vite + Tailwind + GSAP

## Project setup

1. Create Vite project
   ```bash
   npm create vite@latest ./ -- --template react
   ```
   - `./` means use current directory
   - choose framework: React
   - choose variant: JavaScript

2. Install dependencies
   ```bash
   npm install
   ```

3. Start development server
   ```bash
   npm run dev
   ```

## Add animation libraries

Install GSAP and React Responsive:
```bash
npm install gsap @gsap/react react-responsive
```

> GSAP is lightweight and high-performance for smooth animations.

## Install Tailwind
- Install `tailwindcss` and `@tailwindcss/vite` via npm
```bash
npm install tailwind @tailwindcss/vite
```

- Configure the Vite plugin
Add the `@tailwindcss/vite` plugin to our Vite configuration.

```js
import { defineConfig } from 'vite'
→ import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
→    tailwindcss(),
  ],
})
```

- Import Tailwind CSS on our `Index.css`

```js
@import "tailwindcss";
```

