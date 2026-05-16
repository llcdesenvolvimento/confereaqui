import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
    allowedHosts: [".trycloudflare.com"],
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
  },
  build: {
    target: "es2020",
    minify: "esbuild",
    sourcemap: false,
    cssCodeSplit: true,
    reportCompressedSize: true,
    chunkSizeWarningLimit: 550,
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Core React dependencies - MUST load first
          if (id.includes("node_modules")) {
            if (
              id.includes("react") ||
              id.includes("react-dom") ||
              id.includes("react-router-dom")
            ) {
              return "vendor-react";
            }

            // UI components library
            if (id.includes("@radix-ui") || id.includes("lucide-react")) {
              return "vendor-ui";
            }

            // Data & async handling
            if (
              id.includes("@supabase") ||
              id.includes("@tanstack/react-query") ||
              id.includes("recharts")
            ) {
              return "vendor-data";
            }

            // Don't create a catch-all vendor-misc - let other deps go to app bundle
            // This prevents dependency order issues
          }

          // Page-specific code
          if (id.includes("/src/pages/")) {
            return "route-pages";
          }
        },
      },
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    process.env.ANALYZE === "true" &&
      visualizer({
        filename: "dist/stats.html",
        gzipSize: true,
        brotliSize: true,
        open: false,
      }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
