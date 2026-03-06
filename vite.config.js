import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/Portfolio",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
 server: {
    host: true,
    port: 5173,
    allowedHosts: [
      ".ngrok-free.dev"
    ],
    hmr: {
      clientPort: 443
    }
  }
})
