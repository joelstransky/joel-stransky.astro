import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify";
import mdx from "@astrojs/mdx";
import embeds from 'astro-embed/integration';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), embeds(), mdx()],
  output: "static",
  adapter: netlify(),
  server: {
    routes: {
      "/.well-known/atproto-did": "./src/pages/.well-known/atproto-did.astro",
    },
  },
});
