import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://your-cloudflare-pages-site.pages.dev",
  markdown: {
    syntaxHighlight: "shiki",
  },
});
