// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import { projectIntakeDevPlugin } from "./vite/project-intake-dev.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://primeaicorp.com",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss(), projectIntakeDevPlugin()],
  },
});
