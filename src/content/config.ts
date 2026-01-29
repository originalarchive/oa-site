import { defineCollection, z } from "astro:content";

const articles = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    // Reverted to standard local image helper
    coverImage: image().optional(), 
    tags: z.array(z.string()).optional(),
  }),
});

const photos = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    title: z.string(),
    thumbnail: image(),
    weight: z.number().optional(), // Add this line!
    date: z.coerce.date().optional(),
    tags: z.array(z.string()).optional(),
    description: z.string().optional(),
    type: z.enum(["internal", "external"]).optional(),
    externalUrl: z.string().url().optional(),
  }),
});

const coffee = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    roaster: z.string(),
    roasterUrl: z.string().url().optional(),
    origin: z.string(),
    region: z.string().optional(),
    producer: z.string().optional(),
    farm: z.string().optional(),
    variety: z.string().optional(),
    elevation: z.string().optional(),
    process: z.string().optional(),
    processDetails: z.string().optional(),
    roastDate: z.coerce.date().optional(),
    dateBrewed: z.coerce.date(),
    brewMethod: z.string(),
    grindSize: z.string(),
    waterTemp: z.string().optional(),
    ratio: z.string().optional(),
    brewNotes: z.string().optional(),
    rating: z.object({
      flavor: z.number().min(0).max(5),
      body: z.number().min(0).max(5),
      acidity: z.number().min(0).max(5),
      overall: z.enum(["Meh", "Good", "Great", "TBC"]),
    }),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { articles, photos, coffee };