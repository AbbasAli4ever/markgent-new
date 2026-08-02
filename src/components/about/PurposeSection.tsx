"use client";

import Image from "next/image";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextReveal from "@/components/sections/TextReveal";

gsap.registerPlugin(ScrollTrigger);

const MISSION_TAGS = ["Accessible pricing", "Outcome-based", "No lock-in"];
const VISION_POINTS = [
  "Long-term retainers over one-off projects",
  "Systems the client owns, not rents",
  "Multi-platform expansion as brands mature",
];

export default function PurposeSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const missionRef = useRef<HTMLDivElement | null>(null);
  const visionRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      mm.add("(min-width: 1280px)", () => {
        gsap.fromTo(
          missionRef.current,
          { x: -70, rotateY: 5 },
          { x: 0, rotateY: 0, ease: "none", scrollTrigger: { trigger: section, start: "top 86%", end: "center center", scrub: 0.8 } },
        );
        gsap.fromTo(
          visionRef.current,
          { x: 70, rotateY: -5 },
          { x: 0, rotateY: 0, ease: "none", scrollTrigger: { trigger: section, start: "top 86%", end: "center center", scrub: 0.8 } },
        );
      });
    }, section);

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} id="purpose" className="py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 xl:px-10">
        <div className="mx-auto mb-12 max-w-[760px] text-center md:mb-16">
          <div className="text-[12.5px] uppercase tracking-[0.16em] text-faint">Purpose with direction</div>
          <TextReveal as="h2" className="mt-4 text-[36px] leading-[1.08] text-ink sm:text-[48px] xl:text-[60px]">
            Where we are going, and why the work matters
          </TextReveal>
        </div>

        <div className="grid gap-5 [perspective:1200px] xl:grid-cols-2">
          <div
            ref={missionRef}
            className="relative flex min-h-[520px] flex-col overflow-hidden rounded-[24px] bg-ink p-6 text-paper sm:min-h-[560px] sm:p-10 xl:min-h-[620px] xl:rounded-[30px] xl:p-12"
          >
            <Image
              src="/star-light.png"
              alt=""
              width={460}
              height={460}
              aria-hidden
              className="pointer-events-none absolute -bottom-24 -right-20 h-auto w-[330px] opacity-25 mix-blend-screen sm:w-[430px]"
            />
            <div className="relative flex h-full flex-1 flex-col">
              <div className="text-[13px] font-medium uppercase tracking-[0.2em] text-cream/55">Our Mission</div>
              <TextReveal
                as="h3"
                className="mt-8 max-w-[660px] text-[32px] font-medium leading-[1.12] text-paper [font-family:Georgia,serif] sm:text-[42px] xl:text-[52px]"
              >
                Make professional-grade marketing reachable for independent sellers
              </TextReveal>
              <TextReveal as="p" className="mt-8 max-w-[650px] text-[16px] leading-[1.75] text-cream/68 sm:text-lg">
                Enterprise brands buy their advantage: full creative teams, media buyers, and support desks. Our mission is to package that same capability into something a founder-led store can actually afford, with clear scopes, honest pricing, and work measured against commercial outcomes rather than activity reports.
              </TextReveal>
              <div className="mt-auto flex flex-wrap gap-3 pt-10">
                {MISSION_TAGS.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/30 px-5 py-2.5 text-sm text-cream/80 sm:text-base">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div
            ref={visionRef}
            className="relative flex min-h-[520px] flex-col overflow-hidden rounded-[24px] border border-line bg-paper p-6 text-ink sm:min-h-[560px] sm:p-10 xl:min-h-[620px] xl:rounded-[30px] xl:p-12"
          >
            <Image
              src="/star-green.png"
              alt=""
              width={460}
              height={460}
              aria-hidden
              className="pointer-events-none absolute -right-24 -top-24 h-auto w-[340px] opacity-[0.22] mix-blend-multiply sm:w-[440px]"
            />
            <div className="relative flex h-full flex-1 flex-col">
              <div className="text-[13px] font-medium uppercase tracking-[0.2em] text-faint">Our Vision</div>
              <TextReveal
                as="h3"
                className="mt-8 max-w-[660px] text-[32px] font-medium leading-[1.12] text-ink [font-family:Georgia,serif] sm:text-[42px] xl:text-[52px]"
              >
                Become the growth partner brands keep as they scale
              </TextReveal>
              <TextReveal as="p" className="mt-8 max-w-[650px] text-[16px] leading-[1.75] text-body sm:text-lg">
                Most agencies are a phase a company passes through. We want to be the exception: the partner still on the account at ten times the revenue, having grown the systems, creative, and support infrastructure alongside the business rather than handing it off at the first ceiling.
              </TextReveal>
              <ul className="mt-auto space-y-4 pt-10">
                {VISION_POINTS.map((point) => (
                  <li key={point} className="flex items-start gap-4 text-[15px] leading-[1.55] text-ink sm:text-base">
                    <span className="mt-2 h-2 w-2 flex-none rounded-full bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
