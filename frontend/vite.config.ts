// frontend/vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 5173,
    cors: true,
    proxy: {
      "/api": {
        target: "http://backend:3001", // backend service name in docker-compose
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
