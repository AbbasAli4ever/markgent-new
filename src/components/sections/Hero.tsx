import Image from "next/image";
import TextReveal from "./TextReveal";
import LogoMarquee from "./LogoMarquee";
import HeroShaderBackdrop from "./HeroShaderBackdrop";

const AVATARS = [
  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=80&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80",
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate w-full overflow-hidden min-h-screen flex flex-col"
    >
      <HeroShaderBackdrop />

      <div className="max-w-[1240px] mx-auto px-10 pt-56 pb-28 flex flex-1 flex-col items-center text-center">
        <TextReveal
        as="h1"
        className="text-[34px] sm:text-[44px] lg:text-[72px] leading-[1.22] text-ink max-w-none"
      >
        <span className="whitespace-nowrap">Helping E&#8209;commerce</span>
        <br />
        <span className="whitespace-nowrap">
          Brands Grow <span className="text-ink-soft">Smarter</span>
        </span>
      </TextReveal>

      <TextReveal
        as="p"
        delay={0.2}
        className="mt-6 text-lg leading-[1.62] text-body max-w-[560px]"
      >
        The Markgent LLC provides branding, marketing, content creation, and
        customer support solutions that help businesses grow across Amazon,
        Etsy, Walmart, Shopify, and other e-commerce platforms.
      </TextReveal>

      <div className="mt-9 flex gap-3.5 flex-wrap justify-center">
        <a
          href="#contact"
          className="bg-ink text-cream px-8 py-[17px] rounded-full text-base font-medium hover:bg-ink-soft hover:text-white transition-colors"
        >
          Get a Free Consultation
        </a>
        <a
          href="#contact"
          className="border border-ink text-ink px-8 py-[17px] rounded-full text-base font-medium bg-transparent hover:bg-cream-card transition-colors"
        >
          Contact Us
        </a>
      </div>

      <div className="mt-7 inline-flex items-center gap-2.5 text-[13px] text-nav tracking-[0.02em]">
        <div className="flex -space-x-2">
          {AVATARS.map((src) => (
            <span
              key={src}
              className="w-6 h-6 rounded-full overflow-hidden ring-2 ring-cream block"
            >
              <Image
                src={src}
                alt=""
                width={24}
                height={24}
                className="w-full h-full object-cover"
              />
            </span>
          ))}
        </div>
        <span className="w-px h-3.5 bg-line-strong" />
        <TextReveal as="p" className="inline-block">
          140+ Managed Brands
        </TextReveal>
        <span className="w-px h-3.5 bg-line-strong" />
        <TextReveal as="p" className="inline-flex items-center gap-1">
          4.9 <span className="text-gold tracking-[1px]">★★★★★</span>
        </TextReveal>
      </div>

        <div className="mt-16 w-full">
          <div className="text-[12.5px] tracking-[0.14em] uppercase text-faint mb-6">
            We work across
          </div>
          <LogoMarquee />
        </div>
      </div>
    </section>
  );
}
