import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
      <h2 className="text-2xl font-bold">404 - Not Found</h2>
      <p>Could not find the requested blog post</p>
      <Link
        href="/blogs"
        className="text-blog-link hover:opacity-80 transition-opacity"
      >
        Return to Blogs
      </Link>
    </div>
  );
}
