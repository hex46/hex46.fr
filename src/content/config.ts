import { z, defineCollection } from "astro:content";

const meCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    altImage: z.string(),
  }),
});

const aboutCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
  }),
});

const projectsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    datetime: z.string(),
    time: z.string(),
    tags: z.array(z.string()).optional(),
    organisation: z.string().optional(),
    organisationUrl: z.string().optional(),
  }),
});

const socialsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    name: z.string(),
    url: z.string(),
  }),
});

const licenseCollection = defineCollection({
  type: "content",
  schema: z.object({}),
});

export const collections = {
  me: meCollection,
  about: aboutCollection,
  projects: projectsCollection,
  experiences: projectsCollection,
  socials: socialsCollection,
  license: licenseCollection,
};
