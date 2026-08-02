"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

type TextRevealProps = {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  className?: string;
  delay?: number;
};

export default function TextReveal({
  children,
  as = "h2",
  className,
  delay = 0,
}: TextRevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      const split = SplitText.create(el, {
        type: "lines",
        linesClass: "line-reveal",
        mask: "lines",
      });

      gsap.set(split.lines, {
        opacity: 0,
        y: "60%",
        rotateX: -35,
        filter: "blur(14px)",
        transformOrigin: "50% 100% -20px",
      });

      gsap.to(split.lines, {
        opacity: 1,
        y: "0%",
        rotateX: 0,
        filter: "blur(0px)",
        duration: 1,
        ease: "power3.out",
        stagger: 0.09,
        delay,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [delay]);

  const Tag = as;

  return (
    <Tag
      ref={ref as never}
      className={className}
      style={{ perspective: 400 }}
    >
      {children}
    </Tag>
  );
}
