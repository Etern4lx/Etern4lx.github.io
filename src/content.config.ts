import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const writeups = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writeups' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    platform: z.enum([
      'HackTheBox',
      'TryHackMe',
      'VulnHub',
      'CTF',
      'Active Directory',
      'CVE / Research',
      'Personal Lab'
    ]).default('HackTheBox'),
    difficulty: z.enum(['Info', 'Easy', 'Medium', 'Hard', 'Insane']).default('Medium'),
    os: z.enum(['Linux', 'Windows', 'Android', 'Multi-OS', 'Cloud', 'N/A']).default('Linux'),
    tags: z.array(z.string()).default([]),
    targetIp: z.string().optional(),
    badge: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { writeups };
