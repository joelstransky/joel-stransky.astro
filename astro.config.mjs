import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  output: "server",
  adapter: netlify(),
  server: {
    routes: {
      "/.well-known/atproto-did": "./src/pages/.well-known/atproto-did.astro",
    },
  },
});
