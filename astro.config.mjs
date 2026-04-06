import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://your-cloudflare-pages-site.pages.dev",
  output: "hybrid",

  markdown: {
    syntaxHighlight: "shiki",
  },

  adapter: cloudflare()
});