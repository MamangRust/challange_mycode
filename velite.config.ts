import { defineConfig, defineCollection, s } from "velite";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

const computedFields = <T extends { slug: string }>(data: T) => ({
    ...data,
    slugAsParams: data.slug.split("/").slice(1).join("/"),
});

const leetcode = defineCollection({
    name: "LeetCode",
    pattern: "leetcode/**/*.mdx",
    schema: s.object({
        slug: s.path(),
        title: s.string().max(80),
        difficulty: s.enum(["easy", "medium", "hard"]).optional(),
        tags: s.array(s.string()).optional(),
        date: s.isodate(),
        excerpt: s.string().max(300).optional(),
        readTime: s.string().optional(),
        published: s.boolean().default(true),
        body: s.mdx(),
    }).transform(computedFields),
});

const codewars = defineCollection({
    name: "Codewars",
    pattern: "codewars/**/*.mdx",
    schema: s.object({
        slug: s.path(),
        title: s.string().max(80),
        difficulty: s.enum(["easy", "medium", "hard"]).optional(),
        tags: s.array(s.string()).optional(),
        date: s.isodate(),
        excerpt: s.string().max(300).optional(),
        readTime: s.string().optional(),
        published: s.boolean().default(true),
        body: s.mdx(),
    }).transform(computedFields),
});

const hackerrank = defineCollection({
    name: "HackerRank",
    pattern: "hackerrank/**/*.mdx",
    schema: s.object({
        slug: s.path(),
        title: s.string().max(80),
        difficulty: s.enum(["easy", "medium", "hard"]).optional(),
        tags: s.array(s.string()).optional(),
        date: s.isodate(),
        excerpt: s.string().max(300).optional(),
        readTime: s.string().optional(),
        published: s.boolean().default(true),
        body: s.mdx(),
    }).transform(computedFields),
});

const exercism = defineCollection({
    name: "Exercism",
    pattern: "exercism/**/*.mdx",
    schema: s.object({
        slug: s.path(),
        title: s.string().max(80),
        difficulty: s.enum(["easy", "medium", "hard"]).optional(),
        tags: s.array(s.string()).optional(),
        date: s.isodate(),
        excerpt: s.string().max(300).optional(),
        readTime: s.string().optional(),
        published: s.boolean().default(true),
        body: s.mdx(),
    }).transform(computedFields),
});


export default defineConfig({
    root: "src/content",
    output: {
        data: ".velite",
        assets: "public/static",
        base: "/static/",
        name: "[name]-[hash:6].[ext]",
        clean: true,
    },
    collections: {
        leetcode,
        codewars,
        hackerrank,
        exercism,
    },
    mdx: {
        rehypePlugins: [
            rehypeSlug,
            [rehypePrettyCode, { theme: "dark-plus" }],
            [
                rehypeAutolinkHeadings,
                {
                    behavior: "wrap",
                    properties: {
                        className: ["subheading-anchor"],
                        ariaLabel: "Link to section",
                    },
                },
            ],
            rehypeKatex,
        ],
        remarkPlugins: [remarkMath],
    },
});
