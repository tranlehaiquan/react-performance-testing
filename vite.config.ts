import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import vercel from "vite-plugin-vercel";

const ENABLE_OPTIMISATIONS = true;
const ReactCompilerConfig = {};

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({ target: "react", autoCodeSplitting: true }),
    react({
      babel: {
        plugins: ENABLE_OPTIMISATIONS
          ? [["babel-plugin-react-compiler", ReactCompilerConfig]]
          : [],
      },
    }),
    tailwindcss(),
    vercel(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
