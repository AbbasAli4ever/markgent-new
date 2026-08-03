import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import HeroShaderBackdrop from "@/components/sections/HeroShaderBackdrop";
import type { BlogPost } from "@/lib/blogs";
import BlogCard from "./BlogCard";

type BlogArticleProps = { post: BlogPost; relatedPosts: BlogPost[] };

export default function BlogArticle({ post, relatedPosts }: BlogArticleProps) {
  return (
    <>
      <article>
        <header className="relative isolate overflow-hidden pb-16 pt-30 sm:pb-20 sm:pt-40 xl:pb-24 xl:pt-48">
          <HeroShaderBackdrop />
          <div className="relative mx-auto max-w-[1120px] px-5 sm:px-8 xl:px-10">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-muted sm:text-sm">
              <Link href="/" className="transition-colors hover:text-ink">Home</Link><span aria-hidden>/</span>
              <Link href="/blogs" className="transition-colors hover:text-ink">Blogs</Link><span aria-hidden>/</span>
              <span aria-current="page" className="max-w-[54ch] truncate text-ink">{post.title}</span>
            </nav>
            <div className="mt-10 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">{post.category}</div>
            <h1 className="mt-4 max-w-[1000px] text-[40px] leading-[1.07] text-ink sm:text-[56px] md:text-[66px] xl:text-[72px]">{post.title}</h1>
            <p className="mt-6 max-w-[760px] text-[17px] leading-[1.7] text-body sm:text-xl">{post.excerpt}</p>
            <div className="mt-7 flex flex-wrap items-center gap-3 text-sm text-muted">
              <time dateTime={post.publishedAt}>{post.displayDate}</time><span aria-hidden>•</span><span>{post.readingTime}</span><span aria-hidden>•</span><span>The Markgent team</span>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-[1240px] px-5 sm:px-8 xl:px-10">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[24px] bg-image-bg shadow-[0_35px_80px_-45px_rgba(6,45,42,0.65)] sm:aspect-[16/8] sm:rounded-[32px]">
            <Image src={post.image} alt={post.imageAlt} fill priority sizes="(max-width: 1240px) 100vw, 1160px" className="object-cover" />
          </div>
        </div>

        <div className="mx-auto max-w-[800px] px-5 py-16 sm:px-8 sm:py-20 xl:py-24">
          {post.content.map((block, index) => {
            if (block.type === "heading") return <h2 key={index} className="mb-5 mt-12 text-[29px] leading-[1.18] text-ink first:mt-0 sm:text-[36px]">{block.text}</h2>;
            if (block.type === "paragraph") return <p key={index} className="my-6 text-[16px] leading-[1.85] text-body sm:text-[18px]">{block.text}</p>;
            if (block.type === "bullets") {
              const List = block.ordered ? "ol" : "ul";
              return <List key={index} className={`my-7 grid gap-3 pl-6 text-[16px] leading-[1.75] text-body sm:text-[17px] ${block.ordered ? "list-decimal" : "list-disc marker:text-accent"}`}>{block.items.map((item) => <li key={item} className="pl-2">{item}</li>)}</List>;
            }
            if (block.type === "callout") return <aside key={index} className="my-10 rounded-[22px] border border-line-strong bg-cream-card px-6 py-7 sm:px-8"><div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-accent">{block.title}</div><p className="mt-3 text-[16px] leading-[1.75] text-ink sm:text-[17px]">{block.text}</p></aside>;
            return <figure key={index} className="my-12"><div className="relative aspect-[16/10] overflow-hidden rounded-[22px] bg-image-bg"><Image src={block.src} alt={block.alt} fill sizes="(max-width: 800px) 100vw, 736px" className="object-cover" /></div>{block.caption && <figcaption className="mt-3 text-center text-xs leading-5 text-muted">{block.caption}</figcaption>}</figure>;
          })}
          <div className="mt-14 border-t border-line pt-8">
            <Link href="/blogs" className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-accent"><FiArrowLeft className="h-4 w-4" />Back to all articles</Link>
          </div>
        </div>
      </article>

      <section aria-labelledby="related-heading" className="bg-cream-soft py-18 sm:py-22">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8 xl:px-10">
          <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">Keep exploring</div>
          <h2 id="related-heading" className="mt-2 text-[34px] leading-none text-ink sm:text-[42px]">Related articles</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{relatedPosts.map((related) => <BlogCard key={related.slug} post={related} />)}</div>
        </div>
      </section>
    </>
  );
}
