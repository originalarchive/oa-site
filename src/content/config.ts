import { defineCollection, z } from "astro:content";

// Articles collection (replaces blog)
const articles = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    tags: z.array(z.enum(["coffee", "tech", "life", "photography"])).optional(),
  }),
});

// Photos collection

const photos = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({ // Add ({ image }) here
    title: z.string(),
    weight: z.number().optional(),
    description: z.string().optional(),
    date: z.coerce.date().optional(),
    thumbnail: image(),
    type: z.enum(["internal", "external"]).optional(),
    url: z.string().optional(),
    externalUrl: z.string().optional(),
  }),
});


// Coffee log collection
const coffee = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    roaster: z.string(),
    origin: z.string(),
    region: z.string().optional(),
    producer: z.string().optional(),
    farm: z.string().optional(),
    variety: z.string().optional(),
    elevation: z.string().optional(),
    process: z.string().optional(),
    processDetails: z.string().optional(),
    importPartner: z.string().optional(),
    harvest: z.string().optional(),
    arrivedUK: z.string().optional(),
    roastLevel: z.string().optional(),
    dateBrewed: z.coerce.date(),
    brewMethod: z.string(),
    grindSize: z.string(), // "22 clicks" for Commandante
    waterTemp: z.string().optional(),
    ratio: z.string().optional(),
    rating: z.object({
      flavor: z.number().min(1).max(5),
      body: z.number().min(1).max(5),
      acidity: z.number().min(1).max(5),
      overall: z.enum(["Don't buy", "Worth another shot", "Buy again"]),
    }),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { articles, photos, coffee };