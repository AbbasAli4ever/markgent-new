import Image from "next/image";
import TextReveal from "./TextReveal";
import LogoMarquee from "./LogoMarquee";
import HeroShaderBackdrop from "./HeroShaderBackdrop";

const AVATARS = [
  "https://images.unsplash.com/photo-1632765854612-9b02b6ec2b15?q=80&w=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1546961329-78bef0414d7c?q=80&w=80&auto=format&fit=crop",
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate w-full overflow-hidden min-h-screen flex flex-col"
    >
      <HeroShaderBackdrop />

      <div className="mx-auto flex w-full max-w-[1240px] flex-1 flex-col items-center px-5 pb-12 pt-32 text-center sm:px-8 sm:pt-40 md:pt-44 xl:px-10 xl:pt-56 xl:pb-18">
        <TextReveal
        as="h1"
        className="max-w-[900px] text-[36px] leading-[1.12] text-ink sm:text-[48px] md:text-[58px] xl:max-w-none xl:text-[72px] xl:leading-[1.22]"
      >
        <span className="xl:whitespace-nowrap">Helping E&#8209;commerce</span>
        <br />
        <span className="xl:whitespace-nowrap">
          Brands Grow <span className="text-ink-soft">Smarter</span>
        </span>
      </TextReveal>

      <TextReveal
        as="p"
        delay={0.2}
        className="mt-5 max-w-[560px] text-[15px] leading-[1.65] text-body sm:text-base xl:mt-6 xl:text-lg xl:leading-[1.62]"
      >
        The Markgent LLC provides branding, marketing, content creation, and
        customer support solutions that help businesses grow across Amazon,
        Etsy, Walmart, Shopify, and other e-commerce platforms.
      </TextReveal>

      <div className="mt-7 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap xl:mt-9 xl:gap-3.5">
        <a
          href="#contact"
          className="rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-ink-soft hover:text-white sm:px-8 sm:py-[17px] sm:text-base"
        >
          Get a Free Consultation
        </a>
        <a
          href="#contact"
          className="rounded-full border border-ink bg-transparent px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-cream-card sm:px-8 sm:py-[17px] sm:text-base"
        >
          Contact Us
        </a>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-[11px] tracking-[0.02em] text-nav sm:text-[13px] xl:mt-7 xl:gap-2.5">
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

        <div className="mt-10 w-full overflow-hidden xl:mt-16">
          <div className="text-[12.5px] tracking-[0.14em] uppercase text-faint mb-6">
            We work across
          </div>
          <LogoMarquee />
        </div>
      </div>
    </section>
  );
}
