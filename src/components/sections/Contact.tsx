import TextReveal from "./TextReveal";
import { PixelCanvas } from "@/components/ui/pixel-canvas";

const HIGHLIGHTS = [
  "Reply within 24 hours",
  "No obligation consultation",
  "Scoped, transparent pricing",
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-[1240px] px-5 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-20 xl:px-10 xl:pb-24 xl:pt-24">
      <div className="relative overflow-hidden rounded-[24px] bg-ink px-5 py-12 text-center sm:px-8 sm:py-14 xl:rounded-[32px] xl:px-16 xl:py-20">
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
            className="mx-auto mt-3.5 max-w-[720px] text-[34px] leading-[1.08] text-paper sm:text-[44px] xl:text-[56px]"
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

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap xl:mt-9 xl:gap-3.5">
            <a
              href="mailto:director@themarkgentllc.com"
              className="pointer-events-auto rounded-full bg-paper px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-white sm:px-8 sm:py-[17px] sm:text-base"
            >
              Book a Free Consultation
            </a>
            <a
              href="mailto:director@themarkgentllc.com"
              className="pointer-events-auto break-all rounded-full border border-white/25 px-6 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-white/10 sm:px-8 sm:py-[17px] sm:text-base"
            >
              director@themarkgentllc.com
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
