import { defineCollection } from "astro:content"
import { blogSchema } from "./content-schemas";
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/data/blog" }),
  schema: blogSchema,
})

export const collections = {blog};