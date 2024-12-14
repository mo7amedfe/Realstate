import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/Realstate/",
  build: {
    outDir: 'dist' // Ensure the output directory is 'dist'
  }
})
