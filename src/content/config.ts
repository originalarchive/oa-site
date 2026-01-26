import { defineCollection, z } from "astro:content";

const articles = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({ // Added helper here too
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    // Allow local image OR Cloudinary URL string
    coverImage: z.union([image(), z.string()]).optional(), 
    tags: z.array(z.string()).optional(), // Changed to string for Obsidian flexibility
  }),
});

const photos = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    title: z.string(),
    weight: z.number().optional(),
    description: z.string().optional(),
    date: z.coerce.date().optional(),
    // Added .optional() to prevent build crashes
    thumbnail: image().optional(), 
    type: z.enum(["internal", "external"]).optional(),
    url: z.string().optional(),
    externalUrl: z.string().optional(),
  }),
});

const coffee = defineCollection({
  type: "content", // This allows us to use the Markdown body for Tasting Notes
  schema: z.object({
    name: z.string(),
    roaster: z.string(),
    roasterUrl: z.string().url().optional(), // New: Link to roaster
    origin: z.string(),
    region: z.string().optional(),
    producer: z.string().optional(),
    farm: z.string().optional(),
    variety: z.string().optional(),
    elevation: z.string().optional(),
    process: z.string().optional(),
    processDetails: z.string().optional(),
    roastDate: z.coerce.date().optional(), // New: Roast date
    dateBrewed: z.coerce.date(),
    brewMethod: z.string(),
    grindSize: z.string(),
    waterTemp: z.string().optional(),
    ratio: z.string().optional(),
    brewNotes: z.string().optional(), // New: Quick brew notes
    rating: z.object({
      flavor: z.number().min(0).max(5),
      body: z.number().min(0).max(5),
      acidity: z.number().min(0).max(5),
      overall: z.enum(["Don't buy", "It's OK", "Buy again", "TBC"]),
    }),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { articles, photos, coffee };