"use client";

import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextReveal from "@/components/sections/TextReveal";

gsap.registerPlugin(ScrollTrigger);

type Value = {
  name: string;
  principle: string;
  description: string;
};

const VALUES: Value[] = [
  { name: "Integrity", principle: "Do the right work", description: "We recommend what the business needs, communicate tradeoffs honestly, and protect the trust behind every brand." },
  { name: "Transparency", principle: "Make progress visible", description: "Clear scopes, plain-language reporting, and direct communication keep clients close to every meaningful decision." },
  { name: "Accountability", principle: "Own the outcome", description: "We take responsibility for the details, respond within the agreed rhythm, and measure work against commercial goals." },
  { name: "Craft", principle: "Care about the finish", description: "From a listing title to a campaign structure, every customer-facing detail should feel considered and consistent." },
  { name: "Partnership", principle: "Think beyond the task", description: "We learn the catalogue and operating context so our work supports the wider business, not just one isolated deliverable." },
];

export default function ValuesSection() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const detailRef = useRef<HTMLDivElement | null>(null);
  const rowRefs = useRef<Array<HTMLButtonElement | null>>([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.from(rowRefs.current, {
        opacity: 0,
        y: 34,
        duration: 0.75,
        stagger: 0.09,
        ease: "power3.out",
        scrollTrigger: { trigger: section, start: "top 72%", once: true },
      });
    }, section);
    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    if (!detailRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.fromTo(detailRef.current, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" });
  }, [active]);

  const value = VALUES[active]!;

  return (
    <section ref={sectionRef} id="values" className="py-20 md:py-28">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div className="text-[12.5px] uppercase tracking-[0.16em] text-faint">Our values</div>
            <TextReveal as="h2" className="mt-4 text-[42px] leading-[1.08] text-ink sm:text-[54px]">Principles that show up in the work</TextReveal>
            <TextReveal as="p" className="mt-5 max-w-[430px] text-base leading-[1.7] text-body">Values only matter when clients can feel them in communication, decisions, and delivery.</TextReveal>

            <div className="relative mt-9 min-h-[230px] overflow-hidden rounded-[24px] bg-ink p-7 text-paper sm:p-8">
              <Image
                src="/star-light.png"
                alt=""
                width={320}
                height={320}
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-20 h-auto w-[230px] opacity-20 mix-blend-screen sm:w-[280px]"
              />
              <div ref={detailRef} key={value.name} className="relative">
                <div className="text-xs uppercase tracking-[0.16em] text-cream/50">{String(active + 1).padStart(2, "0")} / {String(VALUES.length).padStart(2, "0")}</div>
                <h3 className="mt-5 text-2xl text-paper">{value.principle}</h3>
                <p className="mt-4 max-w-[390px] text-[15px] leading-[1.7] text-cream/70">{value.description}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-line-strong">
            {VALUES.map((item, index) => {
              const isActive = index === active;
              return (
                <button
                  key={item.name}
                  ref={(el) => { rowRefs.current[index] = el; }}
                  type="button"
                  aria-pressed={isActive}
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  onClick={() => setActive(index)}
                  className="group flex w-full items-center gap-5 border-b border-line-strong py-7 text-left outline-none sm:py-8"
                >
                  <span className={`text-sm transition-colors ${isActive ? "text-accent" : "text-faint"}`}>{String(index + 1).padStart(2, "0")}</span>
                  <span className={`flex-1 text-[28px] font-semibold transition-all sm:text-[36px] ${isActive ? "translate-x-2 text-ink" : "text-muted group-hover:text-ink"}`}>{item.name}</span>
                  <span aria-hidden className={`flex h-10 w-10 items-center justify-center rounded-full border text-xl transition-all ${isActive ? "rotate-45 border-ink bg-ink text-paper" : "border-line-strong text-ink"}`}>+</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
