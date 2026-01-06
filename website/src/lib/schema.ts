import type { CollectionEntry } from "astro:content";

type Blog = CollectionEntry<"blogs">;

export function getBlogSchema(
  post: Blog,
  url: string,
  siteName: string,
  logoUrl: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.data.title,
    description: post.data.description,
    keywords: post.data.keywords,
    datePublished: post.data.createdAt.toISOString(),
    dateModified: (
      post.data.lastUpdatedAt ?? post.data.createdAt
    ).toISOString(),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    author: {
      "@type": "Organization",
      name: siteName,
    },
    publisher: {
      "@type": "Organization",
      name: siteName,
      logo: {
        "@type": "ImageObject",
        url: logoUrl,
      },
    },
  };
}