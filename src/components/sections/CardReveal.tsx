"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type CardRevealProps = {
  children: React.ReactNode;
  className?: string;
  index?: number;
};

export default function CardReveal({
  children,
  className,
  index = 0,
}: CardRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const direction = index % 2 === 0 ? -1 : 1;

    const ctx = gsap.context(() => {
      gsap.set(el, {
        opacity: 0,
        y: 90,
        rotate: direction * 8,
        rotateX: 20,
        transformOrigin: "50% 100%",
      });

      gsap.to(el, {
        opacity: 1,
        y: 0,
        rotate: 0,
        rotateX: 0,
        duration: 0.9,
        ease: "power3.out",
        delay: (index % 4) * 0.09,
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          once: true,
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [index]);

  return (
    <div ref={ref} className={className} style={{ perspective: 800 }}>
      {children}
    </div>
  );
}
