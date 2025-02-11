import { getAllPosts } from "@/app/data/post";
import Link from "next/link";

export default async function BlogList() {
  const posts = await getAllPosts();
  return (
    <div className="flex flex-col gap-8 mt-4 items-center">
      {posts.map((post) => {
        return (
          <Link
            href={`/blogs/${post.slug}`}
            className="block py-4 min-w-[30%]"
            key={post.slug}
          >
            <article>
              <h2 className="text-blog-link text-[28px] font-black">
                {post.meta.title}
              </h2>
              <p className="text-[13px] text-gray-700 dark:text-gray-300">
                {post.meta.date}
              </p>
              <p className="mt-1">{post.meta.spoiler}</p>
            </article>
          </Link>
        );
      })}
    </div>
  );
}
