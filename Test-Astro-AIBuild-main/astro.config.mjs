import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import { d1, r2 } from "@emdash-cms/cloudflare";

const isCloudflare = Boolean(
  process.env.NODE_ENV === "production" ||
  process.env.CF_PAGES ||
  process.env.CLOUDFLARE_PAGES ||
  process.env.CF_ACCOUNT_ID ||
  process.env.CLOUDFLARE_ACCOUNT_ID,
);

const emdashModule = await import("emdash/astro");
const { default: emdash, local } = emdashModule;

const { sqlite } = !isCloudflare ? await import("emdash/db") : { sqlite: null };

const database = isCloudflare
  ? d1({ binding: "DB" })
  : sqlite({ url: "file:./data.db" });

const storage = isCloudflare
  ? r2({ binding: "MEDIA" })
  : local({
      directory: "./uploads",
      baseUrl: "/_emdash/api/media/file",
    });

export default defineConfig({
  output: isCloudflare ? "server" : "static",
  site: "https://your-cloudflare-pages-site.pages.dev",

  markdown: {
    syntaxHighlight: "shiki",
  },

  integrations: [
    emdash({
      database,
      storage,
    }),
  ],

  adapter: isCloudflare ? cloudflare() : undefined,

  vite: {
    ssr: {
      external: [
        "fs",
        "path",
        "util",
        "stream",
        "node:fs",
        "node:path",
        "node:module",
        "node:async_hooks",
        "better-sqlite3",
        "bindings",
        "file-uri-to-path",
      ],
    },
  },
});
