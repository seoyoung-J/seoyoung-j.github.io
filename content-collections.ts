import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import remarkGfm from "remark-gfm";
import { z } from "zod";
import { remarkCodeMeta } from "./src/lib/remark-code-meta";

const posts = defineCollection({
    name: "posts",
    directory: "content",
    include: "**/*.mdx",
    exclude: "projects/**/*.mdx",
    schema: z.object({
        title: z.string(),
        publishedAt: z.string(),
        updatedAt: z.string().optional(),
        author: z.string().optional(),
        summary: z.string(),
        image: z.string().optional(),
        content: z.string(),
    }),
    transform: async (document, context) => {
        const mdx = await compileMDX(context, document, {
            remarkPlugins: [remarkGfm, remarkCodeMeta],
        });
        return {
        ...document,
            mdx,
        };
    },
});

const projects = defineCollection({
    name: "projects",
    directory: "content/projects",
    include: "*.mdx",
    schema: z.object({
        slug: z.string(),
        title: z.string(),
        status: z.string(),
        featured: z.boolean(),
        order: z.number(),
        showOnHome: z.boolean(),
        period: z.string(),
        summary: z.string(),
        highlight: z.string(),
        role: z.string(),
        teamSize: z.string(),
        projectType: z.string(),
        impact: z.string(),
        techStack: z.array(z.string()),
        image: z.string(),
        githubUrl: z.string().optional().default(""),
        demoUrl: z.string().optional().default(""),
        dates: z.string(),
        active: z.boolean(),
        description: z.string(),
        technologies: z.array(z.string()),
        links: z.array(z.object({
            type: z.string(),
            href: z.string(),
        })).default([]),
        video: z.string().optional().default(""),
        content: z.string(),
    }),
    transform: async (document, context) => {
        const mdx = await compileMDX(context, document, {
            remarkPlugins: [remarkGfm, remarkCodeMeta],
        });
        return {
            ...document,
            href: `/projects/${document.slug}`,
            mdx,
        };
    },
});

export default defineConfig({
    collections: [posts, projects],
});
