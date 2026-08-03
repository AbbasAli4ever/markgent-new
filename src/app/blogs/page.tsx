import type { Metadata } from "next";
import BlogHero from "@/components/blog/BlogHero";
import BlogListing from "@/components/blog/BlogListing";
import CookieBanner from "@/components/sections/CookieBanner";
import Footer from "@/components/sections/Footer";
import Nav from "@/components/sections/Nav";
import { BLOG_POSTS } from "@/lib/blogs";

export const metadata: Metadata = {
  title: "E-commerce Growth Insights | The Markgent Blog",
  description: "Practical guidance on e-commerce growth, branding, marketplaces, advertising, content, product testing, customer support, and web design.",
  openGraph: { title: "The Markgent Blog", description: "Practical thinking for smarter e-commerce growth.", type: "website" },
};

export default function BlogsPage() {
  return <><Nav /><main className="flex-1"><BlogHero /><BlogListing posts={BLOG_POSTS} /></main><Footer /><CookieBanner /></>;
}
