import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/aan_tourism_frontend/',
  build: {
    outDir: 'build',  // Ensure the output directory is 'build'
  },
})
