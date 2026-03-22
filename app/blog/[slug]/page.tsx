import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const posts = getAllPosts();
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Blue Bird Mobile Dessert Bar`,
    description: post.excerpt,
    alternates: { canonical: `https://bbdbar.com/blog/${slug}` },
    openGraph: {
      title: `${post.title} | Blue Bird Mobile Dessert Bar`,
      description: post.excerpt,
      url: `https://bbdbar.com/blog/${slug}`,
      siteName: "Blue Bird Mobile Dessert Bar",
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Blue Bird Mobile Dessert Bar`,
      description: post.excerpt,
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  let post;
  try {
    post = await getPostBySlug(slug);
  } catch {
    notFound();
  }

  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <Link
        href="/blog"
        className="text-sm text-[#4178ac] hover:underline mb-8 inline-block"
      >
        ← Back to Blog
      </Link>

      <article>
        <time className="text-sm text-gray-400">{formatDate(post.date)}</time>
        <h1 className="text-4xl font-bold text-[#494a52] mt-2 mb-8 leading-tight">
          {post.title}
        </h1>

        <div
          className="prose prose-gray max-w-none"
          dangerouslySetInnerHTML={{ __html: post.contentHtml! }}
        />
      </article>

      <div className="mt-16 pt-8 border-t border-gray-100 text-center">
        <p className="text-gray-600 mb-4">
          Ready to bring Blue Bird to your event?
        </p>
        <Link
          href="/inquire"
          className="inline-block px-6 py-3 rounded-full bg-[#4178ac] text-white font-semibold hover:bg-[#488be2] transition-colors"
        >
          Request a Quote
        </Link>
      </div>
    </main>
  );
}
