import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative base so the same build works on Netlify (/) and
// GitHub Pages project pages (/My-Portfolio/). Safe here: single
// page, hash anchors only, no client-side routing.
export default defineConfig({
  plugins: [react()],
  base: './',
});
