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
        dates: z.string(),
        role: z.string(),
        projectType: z.string(),
        summary: z.string(),
        coverImage: z.string().optional().default(""),
        githubUrl: z.string().optional().default(""),
        demoUrl: z.string().optional().default(""),
        demoVideo: z.string().optional().default(""),
        presentationUrl: z.string().optional().default(""),
        technologies: z.array(z.string()),
        highlights: z
            .array(
                z.object({
                    title: z.string(),
                    items: z.array(z.string()),
                })
            )
            .optional(),
        resultImage: z
            .object({
                src: z.string(),
                alt: z.string(),
                caption: z.string().optional(),
            })
            .optional(),
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
