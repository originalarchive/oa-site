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
  type: "content",
  schema: z.object({
    name: z.string(),
    roaster: z.string(),
    origin: z.string(),
    // ... all your other fields stay the same
    dateBrewed: z.coerce.date(),
    brewMethod: z.string(),
    grindSize: z.string(),
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