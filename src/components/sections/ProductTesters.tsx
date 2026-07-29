import Image from "next/image";
import TextReveal from "./TextReveal";
import { PixelCanvas } from "@/components/ui/pixel-canvas";

const STEPS = [
  {
    number: 1,
    title: "Tester matching",
    description: "Testers selected by category, platform, and buying history.",
  },
  {
    number: 2,
    title: "Structured evaluation",
    description:
      "A consistent scorecard covering quality, packaging, and usability.",
  },
  {
    number: 3,
    title: "Feedback report",
    description:
      "A summary with prioritized product and listing improvements.",
  },
];

export default function ProductTesters() {
  return (
    <section id="testers" className="max-w-[1240px] mx-auto px-10 pt-24">
      <div className="relative overflow-hidden bg-ink rounded-[32px] p-8 md:p-14 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div className="absolute inset-0">
          <PixelCanvas
            colors={["#0f7a66", "#0c4a44", "#8fd8c4", "#a9832f"]}
            gap={8}
            speed={0.03}
            variant="glow"
            className="opacity-90"
          />
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
        />

        <div className="relative z-10 pointer-events-none">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-[11.5px] tracking-[0.16em] uppercase text-cream/70">
              Product Tester Program
            </span>
          </div>

          <TextReveal
            as="h2"
            className="mt-5 text-[46px] md:text-[52px] leading-[1.08] text-paper"
          >
            Genuine feedback from{" "}
            <span className="bg-gradient-to-r from-[#8fd8c4] to-accent bg-clip-text text-transparent">
              real testers
            </span>
          </TextReveal>

          <TextReveal
            as="p"
            className="mt-5 text-[16.5px] leading-[1.65] text-cream/70"
          >
            We match your product with vetted testers who use it and report
            back honestly. You get structured evaluations you can act on —
            quality issues, listing gaps, and what customers actually value.
          </TextReveal>

          <div className="mt-8 grid">
            {STEPS.map((step, i) => (
              <div key={step.number} className="relative flex gap-4 pb-7 last:pb-0">
                {/* Dotted connector to the next step */}
                {i < STEPS.length - 1 && (
                  <span
                    aria-hidden
                    className="absolute left-4.75 top-10 bottom-0 w-px border-l-2 border-dotted border-white/30"
                  />
                )}

                <span className="relative z-10 w-10 h-10 rounded-full bg-white text-ink text-[15px] font-semibold flex items-center justify-center flex-none shadow-[0_4px_14px_-4px_rgba(0,0,0,0.5)]">
                  {step.number}
                </span>

                <div className="pt-1.5">
                  <TextReveal
                    as="h3"
                    className="text-[15.5px] font-semibold text-paper"
                  >
                    {step.title}
                  </TextReveal>
                  <TextReveal
                    as="p"
                    className="text-[14px] text-cream/60 leading-[1.55] mt-1"
                  >
                    {step.description}
                  </TextReveal>
                </div>
              </div>
            ))}
          </div>

          {/* <p className="mt-7 text-[12.5px] leading-[1.6] text-cream/45 border-l-2 border-accent/40 pl-4 max-w-[460px]">
            Feedback is always independent and voluntary. We never guarantee,
            incentivize, or influence the content of any public review, in line
            with platform policies.
          </p> */}
        </div>

        <div className="relative z-10 grid grid-cols-2 gap-4 pointer-events-none">
          <div className="col-span-2 rounded-[22px] overflow-hidden ring-1 ring-white/12 shadow-[0_24px_50px_-24px_rgba(0,0,0,0.55)] aspect-[16/10]">
            <Image
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1100&q=80"
              alt="Customer unboxing a shipped product"
              width={1100}
              height={688}
              className="w-full h-full object-cover block"
            />
          </div>
          <div className="rounded-[22px] overflow-hidden ring-1 ring-white/12 shadow-[0_24px_50px_-24px_rgba(0,0,0,0.55)] aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80"
              alt="Product photography of a wristwatch"
              width={800}
              height={800}
              className="w-full h-full object-cover block"
            />
          </div>
          <div className="rounded-[22px] overflow-hidden ring-1 ring-white/12 shadow-[0_24px_50px_-24px_rgba(0,0,0,0.55)] aspect-square">
            <Image
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"
              alt="Product photography of a sneaker"
              width={800}
              height={800}
              className="w-full h-full object-cover block"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
