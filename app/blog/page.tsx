import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Blue Bird Mobile Dessert Bar",
  description:
    "Tips, inspiration, and stories from the Blue Bird Mobile Dessert Bar — wedding dessert ideas, event planning advice, and behind-the-scenes looks at our mobile espresso bar.",
  alternates: { canonical: "https://bbdbar.com/blog" },
  openGraph: {
    title: "Blog | Blue Bird Mobile Dessert Bar",
    description:
      "Tips, inspiration, and stories from the Blue Bird Mobile Dessert Bar — wedding dessert ideas, event planning advice, and behind-the-scenes looks at our mobile espresso bar.",
    url: "https://bbdbar.com/blog",
    siteName: "Blue Bird Mobile Dessert Bar",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Blue Bird Mobile Dessert Bar",
    description:
      "Tips, inspiration, and stories from the Blue Bird Mobile Dessert Bar — wedding dessert ideas, event planning advice, and behind-the-scenes looks at our mobile espresso bar.",
  },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-[#494a52] mb-3">Blog</h1>
      <p className="text-lg text-gray-500 mb-12">
        Tips, inspiration, and stories from Blue Bird.
      </p>

      {posts.length === 0 ? (
        <p className="text-gray-500">No posts yet — check back soon.</p>
      ) : (
        <ul className="space-y-10">
          {posts.map((post) => (
            <li key={post.slug} className="border-b border-gray-100 pb-10">
              <time className="text-sm text-gray-400">{formatDate(post.date)}</time>
              <h2 className="text-2xl font-bold text-[#494a52] mt-1 mb-2">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-[#4178ac] transition-colors"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-3">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-sm font-semibold text-[#4178ac] hover:underline"
              >
                Read more →
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
