import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";

defineCollection({loader: glob({pattern: "**/*.md", base: "./src/data/acteurs"})});

export const collections ={ acteurs };