"use client";

import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextReveal from "@/components/sections/TextReveal";

gsap.registerPlugin(ScrollTrigger);

type Differentiator = {
  title: string;
  eyebrow: string;
  description: string;
  proof: string;
  image: string;
};

const DIFFERENTIATORS: Differentiator[] = [
  { title: "E-commerce focus", eyebrow: "Specialized context", description: "Our work is shaped around marketplace realities: catalogue structure, platform requirements, conversion, advertising, and customer expectations.", proof: "Built around how online stores operate", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=85" },
  { title: "One connected team", eyebrow: "Less coordination", description: "Branding, content, paid media, product feedback, website work, and customer support stay aligned instead of moving in separate directions.", proof: "Eight specialist service lines", image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85" },
  { title: "Clear communication", eyebrow: "Always informed", description: "You get defined scopes, useful reporting, and a responsive point of contact who understands the account rather than passing messages between vendors.", proof: "24-hour response commitment", image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1400&q=85" },
  { title: "Work tied to outcomes", eyebrow: "Commercial thinking", description: "Decisions connect back to agreed goals, from improving customer confidence to strengthening campaign efficiency and marketplace performance.", proof: "Strategy before execution", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=85" },
];

export default function WhyMarkgent() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const itemRefs = useRef<Array<HTMLButtonElement | null>>([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      mm.add("(min-width: 1280px)", () => {
        gsap.from(itemRefs.current, { opacity: 0, x: 45, duration: 0.7, stagger: 0.11, ease: "power3.out", scrollTrigger: { trigger: section, start: "top 70%", once: true } });
      });
      mm.add("(max-width: 1279px)", () => {
        gsap.from(itemRefs.current, { opacity: 0, y: 24, duration: 0.65, stagger: 0.08, ease: "power3.out", scrollTrigger: { trigger: section, start: "top 78%", once: true } });
      });
    }, section);
    return () => { mm.revert(); ctx.revert(); };
  }, []);

  return (
    <section ref={sectionRef} id="why-markgent" className="bg-cream-soft py-20 md:py-28">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 xl:px-10">
        <div className="max-w-[780px]">
          <div className="text-[12.5px] uppercase tracking-[0.16em] text-faint">Why The Markgent LLC</div>
          <TextReveal as="h2" className="mt-4 text-[36px] leading-[1.08] text-ink sm:text-[48px] xl:text-[60px]">The depth of a specialist team, without the agency distance</TextReveal>
        </div>

        <div className="mt-10 grid overflow-hidden rounded-[24px] border border-line bg-paper shadow-[0_30px_65px_-38px_rgba(6,45,42,0.35)] sm:mt-14 xl:grid-cols-[1.02fr_0.98fr] xl:rounded-[28px]">
          <div className="relative min-h-[300px] overflow-hidden sm:min-h-[420px] xl:min-h-[660px]">
            {DIFFERENTIATORS.map((item, index) => (
              <Image
                key={item.title}
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 1024px) 100vw, 52vw"
                className={`object-cover transition-all duration-700 ${active === index ? "scale-100 opacity-100" : "scale-105 opacity-0"}`}
              />
            ))}
            <div aria-hidden className="absolute inset-0 bg-linear-to-t from-ink/85 via-ink/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
              <div className="text-xs uppercase tracking-[0.16em] text-cream/55">Operational proof</div>
              <div className="mt-2 max-w-[410px] text-2xl font-semibold text-paper sm:text-3xl">{DIFFERENTIATORS[active]!.proof}</div>
            </div>
          </div>

          <div className="divide-y divide-line">
            {DIFFERENTIATORS.map((item, index) => {
              const isActive = active === index;
              return (
                <button
                  key={item.title}
                  ref={(el) => { itemRefs.current[index] = el; }}
                  type="button"
                  aria-pressed={isActive}
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  onClick={() => setActive(index)}
                  className={`block w-full min-w-0 p-5 text-left outline-none transition-colors sm:p-8 ${isActive ? "bg-cream" : "bg-paper hover:bg-cream/50"}`}
                >
                  <div className="flex gap-5">
                    <span className={`pt-1 text-sm ${isActive ? "text-accent" : "text-faint"}`}>{String(index + 1).padStart(2, "0")}</span>
                    <div className="min-w-0">
                      <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-faint">{item.eyebrow}</span>
                      <h3 className="mt-1 text-xl text-ink sm:text-2xl">{item.title}</h3>
                      <div className={`grid transition-all duration-500 ${isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                        <p className="overflow-hidden pt-3 text-[14.5px] leading-[1.65] text-body">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
