import path from "path";
import fs from "fs";
import matter from "gray-matter";

// 读取全部文章数据
const rootDirectory = path.join(process.cwd(), "posts");

export const getAllPosts = async () => {
  const posts = fs
    .readdirSync(rootDirectory, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((dir) => dir.name);

  const data = await Promise.all(
    posts.map(async (post) => {
      const postData = await getPostBySlug(post);
      return {
        slug: post,
        meta: {
          title: postData.meta.title,
          spoiler: postData.meta.spoiler,
          date: new Date(postData.meta.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          }),
        },
      };
    })
  );

  return data.sort((a, b) => Date.parse(b.meta.date) - Date.parse(a.meta.date));
};

export const getPostBySlug = async (slug: string) => {
  const filePath = path.join(rootDirectory, slug, "index.md");
  if (!fs.existsSync(filePath)) {
    return null;
  }
  try {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data: meta, content } = matter(fileContent);
    return {
      meta,
      content,
    };
  } catch (error) {
    console.error("Error reading file:", error);
    return null;
  }
};
