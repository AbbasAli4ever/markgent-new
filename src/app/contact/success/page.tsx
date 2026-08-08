import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowRight, FiCheck, FiClock, FiMail } from "react-icons/fi";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import CookieBanner from "@/components/sections/CookieBanner";
import HeroShaderBackdrop from "@/components/sections/HeroShaderBackdrop";
import TextReveal from "@/components/sections/TextReveal";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Message Received | The Markgent LLC",
  description: "Thank you for contacting The Markgent LLC. We'll respond within one business day.",
  robots: { index: false, follow: true },
};

const NEXT_STEPS = [
  { Icon: FiMail, title: "We've received your details", text: "Your inquiry is with our team and nothing further is needed from you right now." },
  { Icon: FiClock, title: "You'll hear back within 24 hours", text: "We reply on business days with a practical next step, not a generic sales pitch." },
];

export default function ContactSuccessPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="relative isolate flex min-h-screen w-full flex-col overflow-hidden">
          <HeroShaderBackdrop />
          <div className="mx-auto flex w-full max-w-[1240px] flex-1 flex-col items-center justify-center px-5 pb-16 pt-32 text-center sm:px-8 sm:pt-40 xl:px-10 xl:pb-24 xl:pt-48">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/12 text-accent ring-1 ring-accent/25">
              <FiCheck className="h-8 w-8" />
            </span>

            <div className="mt-7 text-[12.5px] uppercase tracking-[0.16em] text-faint">Message sent</div>
            <TextReveal as="h1" className="mt-4 max-w-[900px] text-[38px] leading-[1.08] text-ink sm:text-[52px] md:text-[60px] xl:text-[70px]">
              Thank you — your message is on its way
            </TextReveal>
            <TextReveal as="p" delay={0.16} className="mt-6 max-w-[620px] text-[17px] leading-[1.7] text-body md:text-lg">
              We&apos;ve received your inquiry and a member of The Markgent team will get back to you shortly.
            </TextReveal>

            <div className="mt-10 flex flex-wrap justify-center gap-3.5">
              <Link href="/" className="group inline-flex items-center gap-2 rounded-full bg-ink px-8 py-[17px] text-base font-medium text-cream transition-colors hover:bg-ink-soft hover:text-white">
                Go to Home page
                <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link href="/services" className="rounded-full border border-ink bg-cream/30 px-8 py-[17px] text-base font-medium text-ink backdrop-blur-sm transition-colors hover:bg-cream-card">
                Explore our services
              </Link>
            </div>

            <div className="mt-14 grid w-full max-w-[820px] gap-4 sm:grid-cols-2">
              {NEXT_STEPS.map(({ Icon, title, text }) => (
                <div key={title} className="flex items-start gap-3.5 rounded-[18px] border border-line bg-paper/70 p-5 text-left backdrop-blur-sm">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                  <div>
                    <div className="text-[15px] font-semibold text-ink">{title}</div>
                    <p className="mt-1 text-[14px] leading-[1.6] text-body">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-10 text-sm text-muted">
              Need to add something?{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-ink underline underline-offset-4 transition-colors hover:text-accent">
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
