import type { CollectionEntry } from "astro:content";

type BlogEntry = CollectionEntry<"blogs">;

export function getRelatedArticles(
  currentPost: BlogEntry,
  allPosts: BlogEntry[],
  limit = 3,
) {
  const now = Date.now();
  const relatedSlugs = new Set(currentPost.data.related ?? []);

  return allPosts
    .filter((post) => post.id !== currentPost.id)
    .map((post) => {
      let score = 0;

      if (relatedSlugs.has(post.id)) score += 100;
      if (post.data.category === currentPost.data.category) score += 10;

      const ageInDays = (now - post.data.createdAt.getTime()) / 86_400_000;

      score += Math.max(0, 30 - ageInDays);

      return { ...post, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ score, ...post }) => ({
      slug: post.id,
      category: post.data.category ?? "Education",
      title: post.data.title,
      description: post.data.description,
    }));
}

export function getRelatedBlogs(
  pages: string[] | undefined,
  posts: BlogEntry[],
) {
  const slugs = new Set(pages?.filter((e) => e.startsWith("/blogs")) ?? []);

  return posts
    .filter((post) => slugs.has(`/blogs/${post.id}`))
    .map((post) => ({
      link: `/blogs/${post.id}`,
      slug: post.id,
      category: post.data.category ?? "Education",
      title: getShortTitle(post.data.title),
      description: post.data.description,
    }));
}

function getShortTitle(title: string) {
  if (title.includes(":")) return title.split(":")[0];
  else if (title.includes("-")) return title.split("-")[0];
  else if (title.includes(".")) return title.split(".")[0];
  return title;
}
