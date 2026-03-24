import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

const BASE_URL = "https://bbdbar.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/weddings`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/corporate`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/gallery`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/faq`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/inquire`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/blog`, changeFrequency: "monthly", priority: 0.6 },
  ];

  const posts = getAllPosts();
  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...blogRoutes];
}
