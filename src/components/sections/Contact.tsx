import TextReveal from "./TextReveal";
import { PixelCanvas } from "@/components/ui/pixel-canvas";

const HIGHLIGHTS = [
  "Reply within 24 hours",
  "No obligation consultation",
  "Scoped, transparent pricing",
];

export default function Contact() {
  return (
    <section id="contact" className="max-w-[1240px] mx-auto px-10 pt-24 pb-24">
      <div className="relative overflow-hidden rounded-[32px] bg-ink px-8 py-14 md:px-16 md:py-20 text-center">
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
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/25 to-transparent"
        />

        <div className="relative z-10 pointer-events-none">
          <div className="text-[12.5px] tracking-[0.16em] uppercase text-cream/55">
            Get Started
          </div>

          <TextReveal
            as="h2"
            className="mt-3.5 text-[42px] md:text-[56px] leading-[1.08] text-paper max-w-[720px] mx-auto"
          >
            Tell us what you sell — we&apos;ll tell you what we&apos;d do
          </TextReveal>

          <TextReveal
            as="p"
            delay={0.15}
            className="mt-5 text-[16.5px] leading-[1.62] text-cream/72 max-w-[520px] mx-auto"
          >
            Share your catalogue and the platforms you sell on. We&apos;ll
            come back with a plain-language plan and a quote.
          </TextReveal>

          <div className="mt-9 flex gap-3.5 flex-wrap justify-center">
            <a
              href="mailto:hello@themarkgent.com"
              className="pointer-events-auto bg-paper text-ink px-8 py-[17px] rounded-full text-base font-medium hover:bg-white transition-colors"
            >
              Book a Free Consultation
            </a>
            <a
              href="mailto:hello@themarkgent.com"
              className="pointer-events-auto border border-white/25 text-paper px-8 py-[17px] rounded-full text-base font-medium hover:bg-white/10 transition-colors"
            >
              hello@themarkgent.com
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3">
            {HIGHLIGHTS.map((item) => (
              <li
                key={item}
                className="inline-flex items-center gap-2 text-[14px] text-cream/72"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
