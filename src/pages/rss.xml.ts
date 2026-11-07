import type { APIRoute } from "astro"
import rss from "@astrojs/rss"
import { SITE } from "../consts"
import { entryHref, publishedEntries } from "../lib/utils"

export const GET: APIRoute = async ({ site }) => {
  const posts = await publishedEntries("blog")
  return rss({
    title: `${SITE.title} · 金融观察`,
    description: SITE.description,
    site: site!,
    customData: "<language>zh-CN</language>",
    items: posts.map(post => ({
      title: post.data.title,
      description: post.data.summary,
      pubDate: post.data.date,
      link: new URL(entryHref(post), site).href,
    })),
  })
}
