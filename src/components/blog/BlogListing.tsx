"use client";

import { useMemo, useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import type { BlogPost } from "@/lib/blogs";
import BlogCard from "./BlogCard";

export default function BlogListing({ posts }: { posts: BlogPost[] }) {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.trim().toLowerCase();
  const filtered = useMemo(() => {
    if (!normalizedQuery) return posts;
    return posts.filter((post) => [post.title, post.category, post.excerpt].some((value) => value.toLowerCase().includes(normalizedQuery)));
  }, [normalizedQuery, posts]);

  const popular = (normalizedQuery ? filtered : posts.filter((post) => post.popular)).slice(0, 4);
  const latest = filtered;

  return (
    <section id="articles" className="relative z-10 -mt-16 rounded-t-[32px] bg-cream pb-20 pt-16 sm:-mt-20 sm:rounded-t-[44px] sm:pb-24 sm:pt-20 xl:pb-30">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 xl:px-10">
        <div className="flex flex-col gap-6 border-b border-line pb-9 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">The Markgent journal</div>
            <h2 className="mt-3 text-[34px] leading-none text-ink sm:text-[44px]">Ideas you can put to work</h2>
          </div>
          <label className="flex h-14 w-full items-center gap-3 rounded-full border border-line-strong bg-paper px-5 shadow-[0_12px_30px_-25px_rgba(6,45,42,0.55)] focus-within:border-accent focus-within:ring-2 focus-within:ring-accent/15 md:max-w-[390px]">
            <FiSearch className="h-5 w-5 flex-none text-muted" aria-hidden />
            <span className="sr-only">Search articles by title or category</span>
            <input value={query} onChange={(event) => setQuery(event.target.value)} type="search" placeholder="Search title, topic, or category" className="min-w-0 flex-1 bg-transparent text-sm text-ink outline-none placeholder:text-faint" />
            {query && <button type="button" onClick={() => setQuery("")} aria-label="Clear search" className="rounded-full p-1 text-muted transition-colors hover:bg-cream-card hover:text-ink"><FiX className="h-4 w-4" /></button>}
          </label>
        </div>

        {filtered.length === 0 ? (
          <div className="mt-12 rounded-[28px] border border-line bg-paper px-6 py-20 text-center">
            <h2 className="text-2xl text-ink">No articles found</h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-body">Try another title or category, or clear the search to browse all nine articles.</p>
            <button type="button" onClick={() => setQuery("")} className="mt-6 rounded-full bg-ink px-6 py-3 text-sm font-medium text-cream hover:bg-ink-soft">Clear search</button>
          </div>
        ) : (
          <>
            <div className="mt-14 flex items-end justify-between gap-5">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">What to read first</div>
                <h2 className="mt-2 text-[32px] leading-none text-ink sm:text-[40px]">{normalizedQuery ? "Top matches" : "Popular articles"}</h2>
              </div>
              <p className="hidden max-w-[330px] text-right text-sm leading-[1.6] text-muted md:block">Strategy and practical guidance for building a clearer, stronger e-commerce business.</p>
            </div>
            <div className="mt-7 grid gap-4 lg:grid-cols-[1.45fr_1fr]">
              {popular[0] && <BlogCard post={popular[0]} variant="featured" />}
              <div className="grid gap-4">{popular.slice(1).map((post) => <BlogCard key={post.slug} post={post} variant="compact" />)}</div>
            </div>

            <div className="mt-20 flex items-end justify-between gap-5 sm:mt-24">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">Fresh from the journal</div>
                <h2 className="mt-2 text-[32px] leading-none text-ink sm:text-[40px]">{normalizedQuery ? `${filtered.length} matching ${filtered.length === 1 ? "article" : "articles"}` : "Latest articles"}</h2>
              </div>
            </div>
            <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{latest.map((post) => <BlogCard key={post.slug} post={post} />)}</div>
          </>
        )}
      </div>
    </section>
  );
}
