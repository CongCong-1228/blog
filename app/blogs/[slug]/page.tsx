import { getAllPosts, getPostBySlug } from "@/app/data/post";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import "./markdown.css";
import remarkSmartpants from "remark-smartypants";
import rehypePrettyCode from "rehype-pretty-code";
import mdxComponents from "@/app/ui/blogs/mdx-components";
export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const { post, content } = await getSourceData(slug);

  let postComponents = {};
  try {
    postComponents = await import(
      "../../../posts/" + params.slug + "/components.tsx"
    );
  } catch (error: any) {
    if (!error || error.code !== "MODULE_NOT_FOUND") {
      throw error;
    }
  }

  if (!post || !content) {
    return <div>Post not found</div>;
  }

  return (
    <article className="max-w-3xl mx-auto py-8">
      <h1 className="text-4xl font-black leading-tight text-foreground mb-4">
        {post.meta.title}
      </h1>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
        {post.meta.date}
      </p>
      <div className="markdown prose dark:prose-invert">
        <MDXRemote
          source={content}
          components={{ a: Link, ...postComponents, ...mdxComponents }}
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
  try {
    const post = await getPostBySlug(slug);
    if (!post) {
      throw new Error("Post not found");
    }

    return { post, content: post.content };
  } catch (error) {
    console.error("Error getting source data:", error);
    return { post: null, content: null };
  }
}
