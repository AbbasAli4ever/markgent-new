import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import PurposeSection from "@/components/about/PurposeSection";
import ValuesSection from "@/components/about/ValuesSection";
import WhyMarkgent from "@/components/about/WhyMarkgent";
import Nav from "@/components/sections/Nav";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import CookieBanner from "@/components/sections/CookieBanner";

export const metadata: Metadata = {
  title: "About The Markgent LLC | E-commerce Growth Partner",
  description: "Meet The Markgent LLC, a US-registered digital marketing agency bringing strategy, creative, marketplace execution, and customer support together for e-commerce brands.",
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <AboutHero />
        <PurposeSection />
        <ValuesSection />
        <WhyMarkgent />
        <Contact />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
