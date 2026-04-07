import { defineConfig } from "astro/config";
import emdash, { local } from "emdash/astro";
import { sqlite } from "emdash/db";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://your-cloudflare-pages-site.pages.dev",

  markdown: {
    syntaxHighlight: "shiki",
  },

  integrations: [
    emdash({
      database: sqlite({ url: "file:./data.db" }),
      storage: local({
        directory: "./uploads",
        baseUrl: "/_emdash/api/media/file",
      }),
    }),
  ],

  adapter: cloudflare(),
});
