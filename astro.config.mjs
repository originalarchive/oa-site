import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  // Change this to your primary custom domain
  site: "https://originalarchive.net", 
  integrations: [
    mdx(), 
    sitemap(),
    tailwind(),
  ],
});