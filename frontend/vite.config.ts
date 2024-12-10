import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'

// .env-Datei laden
dotenv.config();

const port = parseInt(process.env.VITE_PORT || "5000", 10);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: port,
    strictPort: true,
  },
});