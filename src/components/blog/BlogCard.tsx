import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import type { BlogPost } from "@/lib/blogs";

type BlogCardProps = {
  post: BlogPost;
  variant?: "featured" | "compact" | "grid";
};

export default function BlogCard({ post, variant = "grid" }: BlogCardProps) {
  if (variant === "compact") {
    return (
      <Link
        href={`/blogs/${post.slug}`}
        className="group grid grid-cols-[112px_1fr] gap-4 rounded-[20px] border border-line bg-paper p-3 transition duration-300 hover:-translate-y-1 hover:border-line-strong hover:shadow-[0_18px_45px_-28px_rgba(6,45,42,0.6)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:grid-cols-[150px_1fr]"
      >
        <div className="relative min-h-32 overflow-hidden rounded-[14px] bg-image-bg sm:min-h-36">
          <Image src={post.image} alt={post.imageAlt} fill sizes="(max-width: 640px) 112px, 150px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
        </div>
        <div className="flex min-w-0 flex-col py-1">
          <span className="text-[10px] font-semibold uppercase tracking-[0.13em] text-accent">{post.category}</span>
          <h3 className="mt-2 text-[17px] leading-[1.2] text-ink sm:text-xl">{post.title}</h3>
          <p className="mt-2 hidden text-[13px] leading-[1.55] text-body sm:line-clamp-2 sm:block">{post.excerpt}</p>
          <div className="mt-auto flex items-center justify-between gap-2 pt-3 text-[11px] text-muted">
            <time dateTime={post.publishedAt}>{post.displayDate}</time>
            <FiArrowUpRight className="h-4 w-4 flex-none text-ink transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>
        </div>
      </Link>
    );
  }

  const featured = variant === "featured";

  return (
    <Link
      href={`/blogs/${post.slug}`}
      className="group flex h-full flex-col rounded-[22px] border border-line bg-paper p-3 transition duration-300 hover:-translate-y-1 hover:border-line-strong hover:shadow-[0_22px_55px_-30px_rgba(6,45,42,0.65)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent sm:p-4"
    >
      <div className={`relative overflow-hidden rounded-[16px] bg-image-bg ${featured ? "aspect-[16/10] lg:aspect-[16/11]" : "aspect-[4/3]"}`}>
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          sizes={featured ? "(max-width: 1024px) 100vw, 58vw" : "(max-width: 768px) 100vw, 33vw"}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-cream/90 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-ink backdrop-blur-md">{post.category}</span>
      </div>
      <div className={featured ? "px-1 pb-2 pt-5 sm:px-2" : "px-1 pb-1 pt-4"}>
        <div className="flex items-center gap-2 text-[11px] text-muted sm:text-xs">
          <time dateTime={post.publishedAt}>{post.displayDate}</time>
          <span aria-hidden>•</span>
          <span>{post.readingTime}</span>
        </div>
        <div className="mt-2.5 flex items-start justify-between gap-4">
          <h3 className={`leading-[1.14] text-ink ${featured ? "text-2xl sm:text-3xl xl:text-[34px]" : "text-xl"}`}>{post.title}</h3>
          <FiArrowUpRight className="mt-1 h-5 w-5 flex-none text-ink transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>
        <p className={`mt-3 leading-[1.6] text-body ${featured ? "text-sm sm:text-base" : "line-clamp-2 text-sm"}`}>{post.excerpt}</p>
      </div>
    </Link>
  );
}
