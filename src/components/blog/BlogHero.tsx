import HeroShaderBackdrop from "@/components/sections/HeroShaderBackdrop";
import TextReveal from "@/components/sections/TextReveal";

export default function BlogHero() {
  return (
    <section className="relative isolate flex min-h-[680px] w-full flex-col overflow-hidden sm:min-h-[720px]">
      <HeroShaderBackdrop />
      <div className="relative mx-auto flex w-full max-w-[1240px] flex-1 flex-col items-center justify-center px-5 pb-28 pt-32 text-center sm:px-8 sm:pb-32 sm:pt-40 xl:px-10 xl:pt-48">
        <div className="text-[12.5px] uppercase tracking-[0.17em] text-faint">Ideas for ambitious sellers</div>
        <TextReveal as="h1" className="mt-4 max-w-[980px] text-[40px] leading-[1.06] text-ink sm:text-[56px] md:text-[66px] xl:text-[78px]">
          Practical thinking for smarter e-commerce growth
        </TextReveal>
        <TextReveal as="p" delay={0.16} className="mt-6 max-w-[670px] text-[16px] leading-[1.7] text-body sm:text-lg">
          Clear, useful guidance on branding, marketplaces, content, customer experience, and the systems that turn good products into durable businesses.
        </TextReveal>
        <a href="#articles" className="mt-9 rounded-full bg-ink px-8 py-[17px] text-base font-medium text-cream transition-colors hover:bg-ink-soft hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
          Explore the articles
        </a>
      </div>
    </section>
  );
}
