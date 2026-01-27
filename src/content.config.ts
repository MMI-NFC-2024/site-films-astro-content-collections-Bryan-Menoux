import { glob } from "astro/loaders";
import { defineCollection, reference, z } from "astro:content";
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
    professions: z.array(z.enum(["acteur", "réalisateur", "scénariste", "producteur"])).optional(),
  })
});


const films = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/films" }),
  schema: ({ image }) => z.object({
    titre: z.string(),
    synopsis: z.string(),
    dateDeSortie: date(),
    image: image().optional(),
    genres: z.array(z.enum(["drame", "comédie", "action", "horreur", "science-fiction", "documentaire"])).optional(),
    pays_origine: z.array(z.enum(["France", "États-Unis", "Royaume-Uni", "Canada", "Allemagne", "Japon"])).optional(),
    realisateur: reference("personnes"),
    producteurs: z.array(reference("personnes")),
  })
});

export const collections = {
  personnes,
  films,
};