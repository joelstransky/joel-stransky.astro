import { defineConfig, squooshImageService } from "astro/config";
import robots from "astro-robots";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://joelstranky.netlify.app",
  image: {
    service: squooshImageService()
  },
  integrations: [tailwind(), sitemap(), robots(), mdx()],
  output: "server",
  adapter: netlify()
});