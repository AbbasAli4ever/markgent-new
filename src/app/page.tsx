import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import ProductTesters from "@/components/sections/ProductTesters";
import Process from "@/components/sections/Process";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import LogoMarquee from "@/components/sections/LogoMarquee";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import CookieBanner from "@/components/sections/CookieBanner";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Services />
        <ProductTesters />
        <WhyChooseUs />
        <Process />
        <About />
        <Testimonials show />
        {/* <LogoMarquee /> */}
        <Contact />
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
