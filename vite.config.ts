import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    // Local API routes (api/*.ts) are served by `vercel dev --listen 3000`
    // (the "portfolio-dev-with-api" launch config); production serves them
    // natively on Vercel.
    proxy: {
      "/api": "http://127.0.0.1:3000",
    },
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
