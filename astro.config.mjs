import { defineConfig } from "astro/config";
import rehypeExternalLinks from "rehype-external-links";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://hex46.fr",
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          rel: ["noreferrer", "external"],
          target: "_blank",
        },
      ],
    ],
  },
  integrations: [sitemap()],
});
