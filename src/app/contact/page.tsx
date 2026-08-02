import type { Metadata } from "next";
import { FiClock, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import ContactForm from "@/components/contact/ContactForm";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import CookieBanner from "@/components/sections/CookieBanner";
import HeroShaderBackdrop from "@/components/sections/HeroShaderBackdrop";
import TextReveal from "@/components/sections/TextReveal";

export const metadata: Metadata = {
  title: "Contact The Markgent LLC | Start a Project",
  description: "Contact The Markgent LLC about branding, marketing, content, e-commerce support, website design, product testing, or Amazon PPC services.",
};

const CONTACT_DETAILS = [
  { label: "Business email", value: "hello@themarkgent.com", href: "mailto:hello@themarkgent.com", Icon: FiMail },
  { label: "Phone", value: "Available by scheduled consultation", href: "mailto:hello@themarkgent.com?subject=Schedule%20a%20phone%20consultation", Icon: FiPhone },
  { label: "Business location", value: "United States — remote service business", Icon: FiMapPin },
  { label: "Business hours", value: "Inquiries accepted 24/7 · Response target within 24 hours", Icon: FiClock },
];

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section id="top" className="relative isolate overflow-hidden pt-28 sm:pt-36 xl:pt-44">
          <HeroShaderBackdrop />
          <div className="mx-auto max-w-[1240px] px-5 pb-16 sm:px-8 sm:pb-20 xl:px-10 xl:pb-28">
            <div className="grid items-start gap-10 xl:grid-cols-[0.82fr_1.18fr] xl:gap-16">
              <div className="lg:pb-8">
                <div className="text-[12.5px] uppercase tracking-[0.16em] text-faint">Contact us</div>
                <TextReveal as="h1" className="mt-4 text-[38px] leading-[1.05] text-ink sm:text-[52px] xl:text-[70px]">Let&apos;s talk about what your store needs next</TextReveal>
                <TextReveal as="p" delay={0.14} className="mt-6 max-w-[520px] text-[17px] leading-[1.7] text-body">
                  Share where your brand is today and what you want to improve. We&apos;ll respond with a practical next step, not a generic sales pitch.
                </TextReveal>

                <div className="mt-9 grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
                  {CONTACT_DETAILS.map(({ label, value, href, Icon }) => {
                    const content = (
                      <>
                        <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-accent/10 text-accent"><Icon className="h-4.5 w-4.5" /></span>
                        <span><span className="block text-xs uppercase tracking-[0.13em] text-faint">{label}</span><span className="mt-1 block text-[14px] leading-[1.5] text-ink">{value}</span></span>
                      </>
                    );
                    return href ? <a key={label} href={href} className="flex items-center gap-3 rounded-[16px] border border-line bg-paper/65 p-4 transition-colors hover:bg-paper">{content}</a> : <div key={label} className="flex items-center gap-3 rounded-[16px] border border-line bg-paper/65 p-4">{content}</div>;
                  })}
                </div>
              </div>

              <div className="xl:pt-[35px]">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-ink py-16 text-cream sm:py-20">
          <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-8 px-5 sm:px-8 lg:px-10">
            <div className="max-w-[700px]">
              <div className="text-xs uppercase tracking-[0.16em] text-cream/50">Before you write</div>
              <TextReveal as="h2" className="mt-3 text-[34px] leading-[1.12] text-paper sm:text-[44px]">A little context helps us give you a better first answer</TextReveal>
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-cream/72">
              <span className="rounded-full border border-white/20 px-4 py-2.5">Your store platform</span>
              <span className="rounded-full border border-white/20 px-4 py-2.5">Current challenge</span>
              <span className="rounded-full border border-white/20 px-4 py-2.5">Target timeline</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
