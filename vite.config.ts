import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@assets": path.resolve(__dirname, "./src/assets"),
    },
  },
  publicDir: "public",
  assetsInclude: ["**/*.webp"],
  build: {
    assetsDir: "assets",
    modulePreload: false,
    rollupOptions:{
      output:{
        assetFileNames: 'assets/[name][extname]'
      }
    }
  },
});
