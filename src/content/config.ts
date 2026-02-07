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
    thumbnail: image().optional(), // Reverting to image helper
    weight: z.number().optional(),
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
    roasterUrl: z.string().optional(), // Removed .url() to allow simple text
    origin: z.string(),
    region: z.string().optional(),
    producer: z.string().optional(),
    farm: z.string().optional(),
    variety: z.string().optional(),
    elevation: z.string().optional(),
    process: z.string().optional(),
    processDetails: z.string().optional(),
    roastDate: z.coerce.date(), // Required to match CMS
    status: z.string().optional(),
    dateBrewed: z.coerce.date().optional(), // NOW OPTIONAL: Won't crash build if empty
    brewMethod: z.string(),
    grindSize: z.string(),
    waterTemp: z.string().optional(),
    ratio: z.string().optional(),
    brewNotes: z.string().optional(),
    image: z.string().optional(),

        // NEW flat rating fields
    ratingFlavor: z.number().min(0).max(5),
    ratingBody: z.number().min(0).max(5),
    ratingAcidity: z.number().min(0).max(5),
    ratingOverall: z.enum(["Meh", "Good", "Great", "TBC"]),
    
    // OLD nested rating (make optional for backward compatibility)
    rating: z.object({
      flavor: z.number(),
      body: z.number(),
      acidity: z.number(),
      overall: z.string()
    }).optional(),
    
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false), // Added to match CMS toggle
    year: z.string().optional(), // Added to match CMS hidden field
  }),
});

export const collections = { articles, photos, coffee };