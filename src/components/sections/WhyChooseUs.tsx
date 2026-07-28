"use client";

import Image from "next/image";
import { useState } from "react";
import TextReveal from "./TextReveal";

const REASONS = [
  {
    number: "01",
    title: "Experienced Team",
    description:
      "Specialists in marketplace operations, creative, and paid media.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1100&q=80",
  },
  {
    number: "02",
    title: "Customized Strategies",
    description:
      "Plans built around your catalogue, margins, and target platforms.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1100&q=80",
  },
  {
    number: "03",
    title: "Professional Communication",
    description:
      "One point of contact, clear reporting, replies within 24 hours.",
    image:
      "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=1100&q=80",
  },
  {
    number: "04",
    title: "Results-Driven Approach",
    description:
      "Every engagement is measured against agreed commercial goals.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1100&q=80",
  },
  {
    number: "05",
    title: "Affordable Solutions",
    description:
      "Transparent scopes and pricing that scale with your business.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1100&q=80",
  },
];

export default function WhyChooseUs() {
  const [active, setActive] = useState(0);

  return (
    <section id="why" className="max-w-[1240px] mx-auto px-10 pt-24">
      <div className="text-center">
        <div className="text-[12.5px] tracking-[0.16em] uppercase text-faint">
          Why Choose Us
        </div>
        <TextReveal
          as="h2"
          className="mt-3.5 text-[64px] max-w-[800px] mx-auto leading-[1.08] text-ink"
        >
          A partner that behaves like part of your team
        </TextReveal>
      </div>

      <div className="mt-14 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-16 items-stretch">
        {/* Image column — cross-fades with the hovered reason */}
        <div className="relative rounded-3xl overflow-hidden bg-image-bg min-h-[420px] lg:min-h-full ring-1 ring-line shadow-[0_30px_60px_-30px_rgba(6,45,42,0.35)]">
          {REASONS.map((reason, i) => (
            <Image
              key={reason.number}
              src={reason.image}
              alt={reason.title}
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className={`object-cover transition-all duration-700 ease-out ${
                i === active
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105"
              }`}
              priority={i === 0}
            />
          ))}

          {/* Caption overlay */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 via-ink/35 to-transparent p-7 pt-16">
            <div className="text-[11.5px] tracking-[0.16em] uppercase text-cream/60">
              {REASONS[active]!.number}
            </div>
            <div className="mt-1 text-xl text-paper font-semibold">
              {REASONS[active]!.title}
            </div>
          </div>
        </div>

        <div>
          <div
            className="relative grid gap-2"
            style={{ perspective: "1000px" }}
            onMouseLeave={() => setActive(0)}
          >
            {/* Curved arrows fanning from a shared origin to each row */}
            <svg
              aria-hidden
              className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
            >
              <defs>
                <marker
                  id="why-arrowhead"
                  viewBox="0 0 10 10"
                  refX="5"
                  refY="5"
                  markerWidth="14"
                  markerHeight="14"
                  markerUnits="userSpaceOnUse"
                  orient="auto-start-reverse"
                >
                  <path
                    d="M 2.5 1.5 L 7.5 5 L 2.5 8.5"
                    fill="none"
                    stroke="#0f7a66"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </marker>
              </defs>
              {REASONS.map((reason, i) => {
                const mid = (REASONS.length - 1) / 2;
                const t = Math.abs(i - mid) / mid;
                const isActive = i === active;
                // Stop short of the row's left edge; pull back further when the
                // row is hovered, since it scales outward.
                const endX =
                  Math.round(Math.pow(1 - t * t, 2.2) * 130) -
                  (isActive ? 26 : 18);
                // Each row is 100px tall (py-5 + content) plus 8px grid gap
                const rowH = 108;
                const y = i * rowH + rowH / 2;
                const originY = 2 * rowH + rowH / 2;
                return (
                  <path
                    key={reason.number}
                    d={`M -34 ${originY} C 10 ${originY}, ${endX - 44} ${y}, ${endX} ${y}`}
                    fill="none"
                    strokeWidth={isActive ? 1.5 : 1}
                    strokeDasharray="3 6"
                    markerEnd="url(#why-arrowhead)"
                    stroke="currentColor"
                    className={`transition-all duration-400 ${
                      isActive ? "text-accent" : "text-line-strong"
                    }`}
                  />
                );
              })}
              <circle
                cx="-34"
                cy={2 * 108 + 54}
                r="3.5"
                className="fill-accent"
              />
            </svg>

            {REASONS.map((reason, i) => {
              const isActive = i === active;
              // Arc offset: peaks at the middle item, flush at both ends
              const mid = (REASONS.length - 1) / 2;
              const t = Math.abs(i - mid) / mid;
              const arc = Math.round(Math.pow(1 - t * t, 2.2) * 130);
              return (
                <button
                  key={reason.number}
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  aria-current={isActive}
                  className={`group relative flex gap-5 rounded-full px-6 py-5 text-left outline-none transition-all duration-400 ease-out ${
                    isActive
                      ? "border border-white/60 bg-white/50 backdrop-blur-xl backdrop-saturate-150 shadow-[0_18px_40px_-18px_rgba(6,45,42,0.28)]"
                      : "border border-transparent bg-transparent"
                  }`}
                  style={{
                    transformStyle: "preserve-3d",
                    marginLeft: `${arc}px`,
                    transform: isActive
                      ? "rotateX(-3deg) translateZ(18px) scale(1.025)"
                      : "rotateX(0deg) translateZ(0)",
                  }}
                >
                  <span
                    className={`font-serif text-base w-7 flex-none pt-0.5 transition-colors duration-300 ${
                      isActive ? "text-accent" : "text-faint"
                    }`}
                  >
                    {reason.number}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-ink">
                      {reason.title}
                    </h3>
                    <p className="mt-1 text-[14.5px] leading-[1.55] text-body">
                      {reason.description}
                    </p>
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
