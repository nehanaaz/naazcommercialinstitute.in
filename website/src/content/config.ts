import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blogs = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blogs" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z
      .enum(["About Us", "Donation", "Programs", "Education", "Partnership"])
      .default("Education"),
    keywords: z.string(),
    related: z.array(z.string()).optional(),
    createdAt: z.coerce.date(),
    lastUpdatedAt: z.coerce.date().optional(),
  }),
});

export const collections = { blogs };
