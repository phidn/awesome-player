import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/awesome-player/',
  server: {
    port: 3005
  }
})
