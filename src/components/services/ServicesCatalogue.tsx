"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SERVICES, type Service } from "@/lib/services";

gsap.registerPlugin(ScrollTrigger);

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const cardRef = useRef<HTMLElement | null>(null);
  const imageRef = useRef<HTMLDivElement | null>(null);
  const imageInnerRef = useRef<HTMLDivElement | null>(null);
  const dark = service.theme === "ink";
  const imageFirst = index % 2 === 1;

  useLayoutEffect(() => {
    const card = cardRef.current;
    if (!card || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.from(card, {
        opacity: 0,
        y: 70,
        rotateX: 4,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: card, start: "top 86%", once: true },
      });
      gsap.from(imageRef.current, {
        clipPath: "inset(12% 12% 12% 12% round 24px)",
        duration: 1.05,
        ease: "power3.out",
        scrollTrigger: { trigger: card, start: "top 82%", once: true },
      });
      gsap.matchMedia().add("(min-width: 1280px)", () => {
        gsap.fromTo(
          imageInnerRef.current,
          { yPercent: -7 },
          {
            yPercent: 7,
            ease: "none",
            scrollTrigger: { trigger: card, start: "top bottom", end: "bottom top", scrub: 0.7 },
          },
        );
      });
    }, card);

    return () => ctx.revert();
  }, []);

  return (
    <article
      ref={cardRef}
      id={service.slug}
      data-service-card
      data-service-index={index}
      className={`scroll-mt-32 overflow-hidden rounded-[22px] border p-4 sm:p-6 xl:min-h-[530px] xl:scroll-mt-36 xl:rounded-[28px] xl:p-9 ${
        dark ? "border-ink bg-ink text-paper" : "border-line-strong bg-paper text-ink"
      }`}
      style={{ perspective: 1000 }}
    >
      <div className="grid h-full items-center gap-6 sm:gap-8 xl:grid-cols-2 xl:gap-10">
        <div
          ref={imageRef}
          className={`relative min-h-[230px] overflow-hidden rounded-[18px] bg-image-bg sm:min-h-[340px] xl:min-h-[420px] xl:rounded-[22px] ${
            imageFirst ? "xl:order-1" : "xl:order-2"
          }`}
        >
          <div ref={imageInnerRef} className="absolute -inset-y-[10%] inset-x-0">
            <Image
              src={service.image}
              alt={`${service.name} service`}
              fill
              sizes="(max-width: 1024px) 100vw, 36vw"
              className="object-cover"
            />
          </div>
          <div aria-hidden className={`absolute inset-0 ${dark ? "bg-ink/12" : "bg-transparent"}`} />
        </div>

        <div className={imageFirst ? "xl:order-2" : "xl:order-1"}>
          <div className={`text-xs uppercase tracking-[0.18em] ${dark ? "text-cream/52" : "text-faint"}`}>
            {String(index + 1).padStart(2, "0")} &nbsp; {service.category}
          </div>
          <h2 className={`mt-4 text-[30px] leading-[1.06] sm:text-[40px] xl:mt-5 xl:text-[46px] ${dark ? "text-paper" : "text-ink"}`}>
            {service.name}
          </h2>
          <p className={`mt-6 text-[16px] leading-[1.72] sm:text-[17px] ${dark ? "text-cream/70" : "text-body"}`}>
            {service.description}
          </p>
          <ul className="mt-7 flex flex-wrap gap-2.5">
            {service.capabilities.map((capability) => (
              <li
                key={capability}
                className={`rounded-full border px-4 py-2 text-[13.5px] ${
                  dark ? "border-white/25 text-cream/78" : "border-line-strong text-nav"
                }`}
              >
                {capability}
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className={`group mt-9 inline-flex items-center gap-2 border-b pb-1 text-[15px] font-semibold transition-colors ${
              dark ? "border-cream/55 text-paper hover:border-white" : "border-ink text-ink hover:text-accent"
            }`}
          >
            {service.cta}
            <FiArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function ServicesCatalogue() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const layoutRef = useRef<HTMLDivElement | null>(null);
  const asideRef = useRef<HTMLElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);
  const indicatorRef = useRef<HTMLSpanElement | null>(null);

  useLayoutEffect(() => {
    const layout = layoutRef.current;
    const aside = asideRef.current;
    const cardsHost = cardsRef.current;
    if (!layout || !aside || !cardsHost) return;

    const cards = Array.from(cardsHost.querySelectorAll<HTMLElement>("[data-service-card]"));
    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      cards.forEach((card, index) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top 46%",
          end: "bottom 46%",
          onEnter: () => setActiveIndex(index),
          onEnterBack: () => setActiveIndex(index),
        });
      });

      mm.add("(min-width: 1280px)", () => {
        ScrollTrigger.create({
          trigger: layout,
          start: "top 112px",
          endTrigger: cardsHost,
          end: "bottom bottom",
          pin: aside,
          pinSpacing: false,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        });
      });
    }, layout);

    return () => {
      mm.revert();
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    const tab = tabRefs.current[activeIndex];
    const rail = tab?.parentElement;
    if (!tab || !rail) return;

    rail.scrollTo({
      left: tab.offsetLeft - rail.clientWidth / 2 + tab.clientWidth / 2,
      behavior: "smooth",
    });
  }, [activeIndex]);

  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return;

    let secondFrame = 0;
    const firstFrame = window.requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      secondFrame = window.requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ block: "start" });
      });
    });

    return () => {
      window.cancelAnimationFrame(firstFrame);
      window.cancelAnimationFrame(secondFrame);
    };
  }, []);

  useLayoutEffect(() => {
    const indicator = indicatorRef.current;
    if (!indicator) return;

    gsap.to(indicator, {
      y: activeIndex * 56,
      duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 0.45,
      ease: "power3.out",
      overwrite: true,
    });
  }, [activeIndex]);

  return (
    <section id="service-catalogue" className="mx-auto max-w-[1400px] scroll-mt-20 px-5 pb-8 pt-14 sm:px-8 sm:pt-20 xl:scroll-mt-24 xl:px-10 xl:pt-24">
      <div className="sticky top-[68px] z-30 -mx-5 mb-6 border-y border-line bg-cream/92 px-5 py-3 backdrop-blur-xl sm:-mx-8 sm:px-8 xl:hidden">
        <nav className="flex gap-2 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" aria-label="Services">
          {SERVICES.map((service, index) => (
            <a
              key={service.slug}
              ref={(el) => { tabRefs.current[index] = el; }}
              href={`#${service.slug}`}
              aria-current={activeIndex === index ? "true" : undefined}
              className={`flex-none rounded-full border px-4 py-2 text-sm transition-colors ${
                activeIndex === index ? "border-ink bg-ink text-paper" : "border-line-strong bg-paper/70 text-nav"
              }`}
            >
              {String(index + 1).padStart(2, "0")} {service.name}
            </a>
          ))}
        </nav>
      </div>

      <div ref={layoutRef} className="grid items-start gap-8 xl:grid-cols-[330px_minmax(0,1fr)] xl:gap-12">
        <aside ref={asideRef} className="hidden flex-col xl:flex">
          <div className="text-[12.5px] uppercase tracking-[0.18em] text-faint">All Services</div>
          <nav className="relative mt-6 border-l border-line-strong" aria-label="Services">
            <span
              ref={indicatorRef}
              aria-hidden
              className="absolute -left-px top-0 h-[56px] w-0.5 bg-ink"
            />
            {SERVICES.map((service, index) => (
              <a
                key={service.slug}
                href={`#${service.slug}`}
                aria-current={activeIndex === index ? "true" : undefined}
                className={`flex h-14 items-center gap-4 pl-6 text-[15px] transition-all ${
                  activeIndex === index ? "translate-x-1 font-semibold text-ink" : "text-muted hover:text-ink"
                }`}
              >
                <span className="w-6 flex-none text-xs text-faint">{String(index + 1).padStart(2, "0")}</span>
                <span>{service.name}</span>
              </a>
            ))}
          </nav>

          <div className="mt-7 rounded-[22px] bg-ink p-6 text-paper">
            <h2 className="text-xl text-paper">Not sure where to start?</h2>
            <p className="mt-3 text-[14px] leading-[1.65] text-cream/68">
              Book a free call and we&apos;ll recommend the service with the clearest next step for your store.
            </p>
            <a href="#contact" className="mt-5 inline-flex rounded-full bg-paper px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-white">
              Book a free call
            </a>
          </div>
        </aside>

        <div ref={cardsRef} className="grid gap-5 sm:gap-6 xl:gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
