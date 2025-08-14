// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/rest-countries-api/' : '/', 
  plugins: [react()],
  server: {
    // optional: auto-open the right path in dev
    open: command === 'serve' ? '/' : undefined,
  },
}))
