import type { Metadata } from "next";
import ServicesCatalogue from "@/components/services/ServicesCatalogue";
import Nav from "@/components/sections/Nav";
import HeroShaderBackdrop from "@/components/sections/HeroShaderBackdrop";
import TextReveal from "@/components/sections/TextReveal";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import CookieBanner from "@/components/sections/CookieBanner";

export const metadata: Metadata = {
  title: "E-commerce Services | The Markgent LLC",
  description:
    "Explore branding, social media, product testing, website design, content, photography, customer feedback, and Amazon PPC services from The Markgent LLC.",
};

export default function ServicesPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section
          id="top"
          className="relative isolate flex min-h-screen w-full flex-col overflow-hidden"
        >
          <HeroShaderBackdrop />
          <div className="mx-auto flex w-full max-w-[1240px] flex-1 flex-col items-center justify-center px-5 pb-20 pt-44 text-center sm:px-8 md:pt-52 lg:px-10">
            <div className="text-[12.5px] uppercase tracking-[0.16em] text-faint">
              Our Services
            </div>
            <TextReveal
              as="h1"
              className="mt-4 max-w-[980px] text-[44px] leading-[1.08] text-ink sm:text-[60px] lg:text-[76px]"
            >
              Everything your store needs, handled by one team
            </TextReveal>
            <TextReveal
              as="p"
              delay={0.16}
              className="mt-6 max-w-[650px] text-[17px] leading-[1.7] text-body md:text-lg"
            >
              Choose one focused service or combine several into a connected
              growth program built around your catalogue, customers, and
              platforms.
            </TextReveal>
            <div className="mt-9 flex flex-wrap justify-center gap-3.5">
              <a
                href="#service-catalogue"
                className="rounded-full bg-ink px-8 py-[17px] text-base font-medium text-cream transition-colors hover:bg-ink-soft hover:text-white"
              >
                Explore our services
              </a>
              <a
                href="#contact"
                className="rounded-full border border-ink bg-cream/30 px-8 py-[17px] text-base font-medium text-ink backdrop-blur-sm transition-colors hover:bg-cream-card"
              >
                Get a Free Consultation
              </a>
            </div>

            <div className="mt-14 flex flex-wrap justify-center gap-x-8 gap-y-3 border-t border-line-strong/80 pt-6 text-[13px] text-nav sm:gap-x-12">
              <span>8 specialist services</span>
              <span>One accountable team</span>
              <span>Built for e-commerce</span>
            </div>
          </div>
        </section>

        <ServicesCatalogue />
        <Contact />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
