import { defineCollection, z } from "astro:content";

const konzerteCollection = defineCollection({
  type: "content",
  schema: z.object({
    titel: z.string(),
    datum: z.string().transform((str) => new Date(str)),
    ort: z.string(),
    text: z.string(),
  }),
});

export const collections = {
  konzerte: konzerteCollection,
};
