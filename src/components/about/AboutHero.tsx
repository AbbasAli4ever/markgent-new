"use client";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import HeroShaderBackdrop from "@/components/sections/HeroShaderBackdrop";
import TextReveal from "@/components/sections/TextReveal";

const METRICS = [
  { value: "140+", label: "Brands supported" },
  { value: "8", label: "Specialist services" },
  { value: "24h", label: "Response commitment" },
  { value: "100%", label: "In-house managed" },
];

export default function AboutHero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const actionsRef = useRef<HTMLDivElement | null>(null);
  const metricsRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.from(actionsRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 0.45,
        ease: "power3.out",
      });
      gsap.from(metricsRef.current?.children ?? [], {
        opacity: 0,
        y: 34,
        duration: 0.75,
        stagger: 0.09,
        delay: 0.65,
        ease: "power3.out",
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative isolate flex min-h-screen w-full flex-col overflow-hidden"
    >
      <HeroShaderBackdrop />

      <div className="relative mx-auto flex w-full max-w-[1240px] flex-1 flex-col px-5 pb-10 pt-40 sm:px-8 md:pt-48 lg:px-10">
        <div className="flex flex-1 flex-col items-center justify-center text-center">
          <div className="text-[12.5px] uppercase tracking-[0.16em] text-faint">
            About The Markgent LLC
          </div>
          <TextReveal
            as="h1"
            className="mt-4 max-w-[960px] text-[44px] leading-[1.08] text-ink sm:text-[60px] lg:text-[76px]"
          >
            The growth team behind ambitious e-commerce brands
          </TextReveal>
          <TextReveal
            as="p"
            delay={0.16}
            className="mt-6 max-w-[680px] text-[17px] leading-[1.7] text-body md:text-lg"
          >
            We bring strategy, creative, marketplace execution, and customer
            support together so independent sellers can operate with the focus
            and polish of a much larger company.
          </TextReveal>

          <div ref={actionsRef} className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              href="/#contact"
              className="rounded-full bg-ink px-8 py-[17px] text-base font-medium text-cream transition-colors hover:bg-ink-soft hover:text-white"
            >
              Start a conversation
            </Link>
            <Link
              href="#purpose"
              className="rounded-full border border-ink bg-cream/35 px-8 py-[17px] text-base font-medium text-ink backdrop-blur-sm transition-colors hover:bg-cream-card"
            >
              Explore our purpose
            </Link>
          </div>
        </div>

        <div className="relative mt-14 overflow-hidden rounded-[28px] bg-ink shadow-[0_30px_60px_-30px_rgba(6,45,42,0.5)]">
          <div aria-hidden className="absolute inset-y-0 right-0 w-[45%] bg-linear-to-l from-accent/35 via-accent/10 to-transparent" />
          <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/25 to-transparent" />
          <div ref={metricsRef} className="relative grid grid-cols-2 divide-x divide-y divide-white/10 md:grid-cols-4 md:divide-y-0">
            {METRICS.map((metric) => (
              <div key={metric.label} className="px-5 py-6 text-left sm:px-8 md:px-9 md:py-7">
                <div className="text-3xl font-bold leading-none text-paper sm:text-4xl md:text-5xl">
                  {metric.value}
                </div>
                <div className="mt-2.5 text-xs text-cream/65 sm:text-sm">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
