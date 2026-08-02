"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We learn your products, margins, and goals in a free discovery call.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "A written plan with scope, channels, timelines, and success metrics.",
  },
  {
    number: "03",
    title: "Execution",
    description:
      "Our team delivers the creative, listings, campaigns, and support work.",
  },
  {
    number: "04",
    title: "Optimization",
    description: "We review performance data and refine what moves the numbers.",
  },
  {
    number: "05",
    title: "Ongoing Support",
    description:
      "Continuous management, reporting, and a contact who knows your account.",
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);
  const asideRef = useRef<HTMLParagraphElement | null>(null);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const lineRefs = useRef<Array<HTMLDivElement | null>>([]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      STEPS.forEach((_, i) => {
        const dot = stepRefs.current[i];
        const card = cardRefs.current[i];
        const direction = i % 2 === 0 ? -1 : 1;

        gsap.set(dot, { opacity: 0, scale: 0.4, transformOrigin: "50% 50%" });
        gsap.set(card, {
          opacity: 0,
          y: direction * 24,
          transformOrigin: "50% 50%",
        });
        if (lineRefs.current[i]) {
          gsap.set(lineRefs.current[i], { scaleX: 0, transformOrigin: "0% 50%" });
        }
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${STEPS.length * 500}`,
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
        },
      });

      STEPS.forEach((_, i) => {
        tl.to(
          stepRefs.current[i],
          { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.8)" },
          i === 0 ? 0 : ">-0.2"
        )
          .to(cardRefs.current[i], { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, "<")
          .to(
            lineRefs.current[i] ?? [],
            { scaleX: 1, duration: 1, ease: "power2.out" },
            "<"
          );
      });

      tl.to({}, { duration: 1.2 });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="mt-24 min-h-screen min-h-[100svh] bg-ink text-cream overflow-hidden"
    >
      <div className="mx-auto flex min-h-screen min-h-[100svh] max-w-[1240px] flex-col px-10 py-22">
        <div className="flex items-end justify-between gap-10 flex-wrap">
          <div ref={headingRef} className="max-w-[600px]">
            <div className="text-[12.5px] tracking-[0.16em] uppercase text-cream/55">
              Our Process
            </div>
            <h2 className="mt-3.5 text-[54px] leading-[1.08] text-paper">
              Five steps, no guesswork
            </h2>
          </div>
          <p
            ref={asideRef}
            className="text-base leading-[1.6] text-cream/72 max-w-[340px]"
          >
            The same disciplined sequence for every client, from first call to
            ongoing support.
          </p>
        </div>

        <div className="mt-24 hidden flex-1 lg:grid grid-cols-5 items-center py-24">
          {STEPS.map((step, i) => {
            const isBelow = i % 2 === 0;
            return (
              <div key={step.number} className="relative flex flex-col items-center">
                {!isBelow && (
                  <div
                    ref={(el) => {
                      cardRefs.current[i] = el;
                    }}
                    className="absolute bottom-full mb-7 w-[220px] text-center"
                  >
                    <h3 className="text-xl text-paper">{step.title}</h3>
                    <p className="mt-2 text-[14.5px] leading-[1.6] text-cream/72">
                      {step.description}
                    </p>
                  </div>
                )}

                {i < STEPS.length - 1 && (
                  <div
                    ref={(el) => {
                      lineRefs.current[i] = el;
                    }}
                    className="absolute top-6 left-1/2 w-full h-px bg-white/25"
                  />
                )}

                <div
                  ref={(el) => {
                    stepRefs.current[i] = el;
                  }}
                  className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-br from-accent to-ink-soft border border-white/30 flex items-center justify-center font-serif text-lg text-paper shadow-[0_10px_24px_-8px_rgba(15,122,102,0.6)]"
                >
                  {i + 1}
                </div>

                {isBelow && (
                  <div
                    ref={(el) => {
                      cardRefs.current[i] = el;
                    }}
                    className="absolute top-full mt-7 w-[220px] text-center"
                  >
                    <h3 className="text-xl text-paper">{step.title}</h3>
                    <p className="mt-2 text-[14.5px] leading-[1.6] text-cream/72">
                      {step.description}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-13.5 grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-5">
          {STEPS.map((step) => (
            <div key={step.number} className="border-t border-white/28 pt-5">
              <div className="font-serif text-[34px] text-white/45 leading-none">
                {step.number}
              </div>
              <h3 className="mt-3 text-xl text-paper">{step.title}</h3>
              <p className="mt-2 text-[14.5px] leading-[1.6] text-cream/72">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
