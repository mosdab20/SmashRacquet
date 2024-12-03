import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 45921, // Port für das Frontend
    host: 'delphinus.uberspace.de',
    proxy: {
      '/api': {
        target: 'http://delphinus.uberspace.de:45921', // Zieladresse des Backends
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // Entferne '/api' aus dem Pfad
      },
    },
  },
})
