"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextReveal from "@/components/sections/TextReveal";

gsap.registerPlugin(ScrollTrigger);

export type LegalSection = {
  id: string;
  title: string;
  content: ReactNode;
};

type LegalDocumentProps = {
  eyebrow: string;
  title: string;
  summary: string;
  sections: LegalSection[];
};

export default function LegalDocument({ eyebrow, title, summary, sections }: LegalDocumentProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const layoutRef = useRef<HTMLElement | null>(null);
  const asideRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const indicatorRef = useRef<HTMLSpanElement | null>(null);
  const navItemRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const mobileItemRefs = useRef<Array<HTMLAnchorElement | null>>([]);

  useLayoutEffect(() => {
    const layout = layoutRef.current;
    const aside = asideRef.current;
    const content = contentRef.current;
    if (!layout || !aside || !content) return;

    const articles = Array.from(content.querySelectorAll<HTMLElement>("[data-legal-section]"));
    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      articles.forEach((article, index) => {
        ScrollTrigger.create({
          trigger: article,
          start: "top 42%",
          end: "bottom 42%",
          onEnter: () => setActiveIndex(index),
          onEnterBack: () => setActiveIndex(index),
        });
      });

      mm.add("(min-width: 1280px)", () => {
        ScrollTrigger.create({
          trigger: aside,
          start: "top 112px",
          endTrigger: content,
          end: "bottom bottom",
          pin: aside,
          pinSpacing: false,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        });
      });
    }, layout);

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, [sections]);

  useLayoutEffect(() => {
    const indicator = indicatorRef.current;
    const item = navItemRefs.current[activeIndex];
    if (!indicator || !item) return;

    gsap.to(indicator, {
      y: item.offsetTop,
      height: item.offsetHeight,
      duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 0.45,
      ease: "power3.out",
      overwrite: true,
    });
  }, [activeIndex]);

  useEffect(() => {
    const item = mobileItemRefs.current[activeIndex];
    const rail = item?.parentElement;
    if (!item || !rail) return;
    rail.scrollTo({ left: item.offsetLeft - rail.clientWidth / 2 + item.clientWidth / 2, behavior: "smooth" });
  }, [activeIndex]);

  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return;

    let secondFrame = 0;
    const firstFrame = window.requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      secondFrame = window.requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ block: "start" });
      });
    });

    return () => {
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
    };
  }, []);

  return (
    <main className="flex-1">
      <section id="top" className="border-b border-line bg-cream-soft pt-28 sm:pt-36 xl:pt-44">
        <div className="mx-auto max-w-[1240px] px-5 pb-12 sm:px-8 sm:pb-16 xl:px-10 xl:pb-20">
          <div className="text-[12.5px] uppercase tracking-[0.16em] text-faint">{eyebrow}</div>
          <TextReveal as="h1" className="mt-4 max-w-[900px] text-[38px] leading-[1.06] text-ink sm:text-[52px] xl:text-[68px]">{title}</TextReveal>
          <TextReveal as="p" delay={0.12} className="mt-6 max-w-[700px] text-[16px] leading-[1.72] text-body sm:text-[17px]">{summary}</TextReveal>
          <p className="mt-7 text-sm text-muted">Effective date: August 3, 2026</p>
        </div>
      </section>

      <div className="sticky top-[68px] z-30 border-y border-line bg-cream/95 px-5 py-3 backdrop-blur-xl sm:px-8 xl:hidden">
        <nav className="flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" aria-label={`${title} sections`}>
          {sections.map((section, index) => (
            <a key={section.id} ref={(element) => { mobileItemRefs.current[index] = element; }} href={`#${section.id}`} aria-current={activeIndex === index ? "true" : undefined} className={`flex-none rounded-full border px-4 py-2 text-sm transition-colors ${activeIndex === index ? "border-ink bg-ink text-paper" : "border-line-strong bg-paper text-nav"}`}>
              {String(index + 1).padStart(2, "0")} {section.title}
            </a>
          ))}
        </nav>
      </div>

      <section ref={layoutRef} className="mx-auto grid max-w-[1240px] items-start gap-10 px-5 py-12 sm:px-8 sm:py-16 xl:grid-cols-[280px_minmax(0,1fr)] xl:px-10 xl:py-24">
        <aside ref={asideRef} className="hidden self-start xl:block">
          <div className="text-xs uppercase tracking-[0.16em] text-faint">On this page</div>
          <nav className="relative mt-5 grid border-l border-line-strong" aria-label={`${title} sections`}>
            <span ref={indicatorRef} aria-hidden className="absolute -left-px top-0 h-10 w-0.5 bg-ink" />
            {sections.map((section, index) => (
              <a
                key={section.id}
                ref={(element) => { navItemRefs.current[index] = element; }}
                href={`#${section.id}`}
                aria-current={activeIndex === index ? "true" : undefined}
                className={`flex gap-3 py-2.5 pl-4 text-sm transition-all hover:text-ink ${activeIndex === index ? "translate-x-1 font-semibold text-ink" : "text-muted"}`}
              >
                <span className="text-faint">{String(index + 1).padStart(2, "0")}</span>
                {section.title}
              </a>
            ))}
          </nav>
          <Link href="/contact" className="mt-7 inline-flex rounded-full bg-ink px-5 py-3 text-sm font-semibold text-paper transition-colors hover:bg-ink-soft">Questions about this policy</Link>
        </aside>

        <div ref={contentRef} className="min-w-0 rounded-[20px] border border-line bg-paper px-5 py-2 sm:px-8 xl:rounded-[24px] xl:px-12">
          {sections.map((section, index) => (
            <article key={section.id} id={section.id} data-legal-section data-legal-index={index} className="scroll-mt-32 border-b border-line py-8 last:border-b-0 sm:py-10 xl:py-11">
              <h2 className="text-[22px] leading-tight text-ink sm:text-[28px] xl:text-[30px]">{section.title}</h2>
              <div className="legal-copy mt-5 space-y-4 text-[15px] leading-[1.75] text-body sm:text-base">{section.content}</div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
