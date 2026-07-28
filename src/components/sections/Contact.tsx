import TextReveal from "./TextReveal";

const HIGHLIGHTS = [
  "Reply within 24 hours",
  "No obligation consultation",
  "Scoped, transparent pricing",
];

export default function Contact() {
  return (
    <section id="contact" className="max-w-[1240px] mx-auto px-10 pt-24 pb-24">
      <div className="rounded-[32px] border border-line bg-cream-card/60 px-8 py-14 md:px-16 md:py-20 text-center">
        <div className="text-[12.5px] tracking-[0.16em] uppercase text-faint">
          Get Started
        </div>

        <TextReveal
          as="h2"
          className="mt-3.5 text-[42px] md:text-[56px] leading-[1.08] text-ink max-w-[720px] mx-auto"
        >
          Tell us what you sell — we&apos;ll tell you what we&apos;d do
        </TextReveal>

        <TextReveal
          as="p"
          delay={0.15}
          className="mt-5 text-[16.5px] leading-[1.62] text-body max-w-[520px] mx-auto"
        >
          Share your catalogue and the platforms you sell on. We&apos;ll come
          back with a plain-language plan and a quote.
        </TextReveal>

        <div className="mt-9 flex gap-3.5 flex-wrap justify-center">
          <a
            href="mailto:hello@themarkgent.com"
            className="bg-ink text-cream px-8 py-[17px] rounded-full text-base font-medium hover:bg-ink-soft hover:text-white transition-colors"
          >
            Book a Free Consultation
          </a>
          <a
            href="mailto:hello@themarkgent.com"
            className="border border-ink text-ink px-8 py-[17px] rounded-full text-base font-medium hover:bg-cream-soft transition-colors"
          >
            hello@themarkgent.com
          </a>
        </div>

        <ul className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3">
          {HIGHLIGHTS.map((item) => (
            <li
              key={item}
              className="inline-flex items-center gap-2 text-[14px] text-muted"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
