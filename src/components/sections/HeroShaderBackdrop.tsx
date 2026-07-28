"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { GradientPlane } from "@/components/ui/hero-geometric";

/**
 * Drives the render loop only while the hero is on screen. Without this the
 * shader keeps repainting behind later sections and contends with their
 * compositing work (notably the service cards' backdrop blur).
 */
function RenderGate({ active }: { active: boolean }) {
  const invalidate = useThree((state) => state.invalidate);

  useFrame(() => {
    if (active) invalidate();
  });

  useEffect(() => {
    if (active) invalidate();
  }, [active, invalidate]);

  return null;
}

/**
 * Animated gradient shader used as the hero backdrop.
 * Colours are drawn from the site palette: --color-ink and --color-cream.
 */
export default function HeroShaderBackdrop() {
  const hostRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = hostRef.current;
    if (!el) return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      typeof IntersectionObserver === "undefined"
    ) {
      setVisible(false);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry!.isIntersecting),
      { rootMargin: "80px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={hostRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10"
      style={{
        maskImage:
          "radial-gradient(120% 90% at 50% 0%, #000 30%, rgba(0,0,0,0.55) 58%, transparent 82%)",
        WebkitMaskImage:
          "radial-gradient(120% 90% at 50% 0%, #000 30%, rgba(0,0,0,0.55) 58%, transparent 82%)",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 1] }}
        dpr={[1, 1]}
        frameloop="demand"
        gl={{ antialias: false, alpha: true, powerPreference: "low-power" }}
      >
        <RenderGate active={visible} />
        <GradientPlane color1="#064d2a" color2="#FAFAF5" speed={1.5} />
      </Canvas>
    </div>
  );
}
