import { getAllPosts, getPostBySlug } from "@/app/data/post";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import "./markdown.css";
import remarkSmartpants from "remark-smartypants";
import rehypePrettyCode from "rehype-pretty-code";
import mdxComponents from "@/app/ui/blogs/mdx-components";
import { notFound } from "next/navigation";
export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const { post, content } = await getSourceData(slug);

  if (!post || !content) {
    return notFound();
  }

  return (
    <article className="max-w-3xl mx-auto py-8 w-full">
      <h1 className="text-4xl font-black leading-tight text-foreground mb-4">
        {post.meta.title}
      </h1>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
        {post.meta.date}
      </p>
      <div className="markdown prose dark:prose-invert">
        <MDXRemote
          source={content}
          components={{ a: Link, ...mdxComponents }}
          options={{
            mdxOptions: {
              useDynamicImport: true,
              remarkPlugins: [remarkSmartpants],
              rehypePlugins: [rehypePrettyCode],
            },
          }}
        />
      </div>
    </article>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

// Get MDX data for a specific slug
async function getSourceData(slug: string) {
  const post = await getPostBySlug(slug);
  if (!post) {
    return { post: null, content: null };
  }
  return { post, content: post.content };
}
