import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vite from 'vite-plugin-react-ping'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vite()],
  server: {
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
})
