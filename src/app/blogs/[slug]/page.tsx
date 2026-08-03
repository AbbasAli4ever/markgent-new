import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogArticle from "@/components/blog/BlogArticle";
import Contact from "@/components/sections/Contact";
import CookieBanner from "@/components/sections/CookieBanner";
import Footer from "@/components/sections/Footer";
import Nav from "@/components/sections/Nav";
import { BLOG_POSTS, getBlogPost, getRelatedPosts } from "@/lib/blogs";

type BlogPageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return BLOG_POSTS.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Article Not Found | The Markgent LLC" };
  return {
    title: `${post.title} | The Markgent Blog`,
    description: post.description,
    openGraph: { title: post.title, description: post.description, type: "article", publishedTime: post.publishedAt, images: [{ url: post.image, alt: post.imageAlt }] },
  };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();
  return <><Nav /><main className="flex-1"><BlogArticle post={post} relatedPosts={getRelatedPosts(post)} /><Contact /></main><Footer /><CookieBanner /></>;
}
