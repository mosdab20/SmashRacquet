import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 45921, // Port für das Frontend
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:45921', // Zieladresse des Backends
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Entferne '/api' aus dem Pfad
      },
    },
  },
})
