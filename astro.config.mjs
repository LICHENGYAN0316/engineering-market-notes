import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"

const owner = (process.env.GITHUB_REPOSITORY_OWNER || "LICHENGYAN0316").toLowerCase()
const repository = process.env.GITHUB_REPOSITORY?.split("/")[1] || "engineering-market-notes"

export default defineConfig({
  site: `https://${owner}.github.io`,
  base: repository.toLowerCase() === `${owner}.github.io` ? "/" : `/${repository}`,
  trailingSlash: "always",
  integrations: [sitemap()],
})
