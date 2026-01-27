import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";
import {date} from "astro:schema";

const personnes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/personnes" }),
  schema: ({ image }) => z.object({
    nom: z.string(),
    role: z.string(),
    description: z.string(),
    age: z.number(),
    dateDeNaissance: date(),
    image: image().optional(),
    // Ajout d'un champ professions qui est un tableau d'énumérations et si un champ est mauvais, il n'est juste pas affiché
    professions: z.array(z.enum(["acteur", "réalisateur", "scénariste", "producteur"])).optional(),
  })
});

export const collections = { personnes };
