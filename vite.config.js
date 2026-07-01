import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Using relative base ('./') so the build works on GitHub Pages
// project sites regardless of the repository name.
export default defineConfig({
  plugins: [react()],
  base: './',
})
