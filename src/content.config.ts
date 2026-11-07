import { defineCollection } from "astro:content"
import { glob } from "astro/loaders"
import { z } from "astro/zod"

const article = z.object({
  title: z.string(),
  summary: z.string(),
  date: z.coerce.date(),
  tags: z.array(z.string()),
  draft: z.boolean().optional(),
})

const blog = defineCollection({
  loader: glob({
    pattern: "*/index.md",
    base: "./src/content/blog",
    generateId: ({ entry }) => entry.split("/")[0],
  }),
  schema: article.extend({
    label: z.string().optional(),
  }),
})

const projects = defineCollection({
  loader: glob({
    pattern: "*/index.md",
    base: "./src/content/projects",
    generateId: ({ entry }) => entry.split("/")[0],
  }),
  schema: article.extend({
    category: z.string().optional(),
    status: z.string().optional(),
    period: z.string().optional(),
    highlight: z.string().optional(),
    demoUrl: z.url({ protocol: /^https$/ }).optional(),
    repoUrl: z.url({ protocol: /^https$/ }).optional(),
  }),
})

export const collections = { blog, projects }
