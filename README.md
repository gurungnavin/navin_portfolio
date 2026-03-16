# Vite 7 + React + Tailwind 4 Setup Guide

This guide walks through setting up a fresh Vite 7 + React project with Tailwind CSS 4 and `@tailwindcss/vite`.

## 1. Scaffold a Vite Project

```bash
npm create vite@latest .
```

- Select `React`.
- Choose `JavaScript` or `TypeScript`.
- Allow removal of existing files if prompted.

## 2. Downgrade Vite & React Plugin

```bash
npm install vite@7 @vitejs/plugin-react@5 --save-dev --legacy-peer-deps
```

This ensures compatibility with Tailwind 4.

## 3. Install Tailwind CSS

```bash
npm install -D tailwindcss@4 @tailwindcss/vite postcss autoprefixer --legacy-peer-deps
```

## 4. Configure Vite for Tailwind

Edit `vite.config.js`:

```js
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss()],
});
```

## 5. Setup Tailwind CSS in Your Project

Create `src/index.css`:

```css
@import "tailwindcss";
```

Import it in `src/main.jsx`:

```js
import './index.css';
```

## 6. Run the Development Server

```bash
npm run dev
```

Open the URL provided in your terminal to view the project.

## 7. Notes

- Use PowerShell or CMD on Windows to avoid CLI detection issues.
- Keep the `.git` folder to preserve your GitHub connection.
- For production builds:

```bash
npm run build
```

## 8. Optional: Testing Tailwind

Add the following in `App.jsx` to verify Tailwind is working:

```jsx
<h1 className="text-5xl text-blue-500">Tailwind is working!</h1>
```

