import { getCollection, type CollectionEntry } from "astro:content"

type Collection = "blog" | "projects"
export type Entry = CollectionEntry<Collection>

export function href(path = "") {
  return `${import.meta.env.BASE_URL.replace(/\/$/, "")}/${path}`
}

export function entryHref(entry: Entry) {
  return href(`${entry.collection}/${entry.id}/`)
}

export async function publishedEntries<T extends Collection>(collection: T) {
  return (await getCollection(collection, ({ data }) => !data.draft))
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime() || a.id.localeCompare(b.id))
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(date)
}
