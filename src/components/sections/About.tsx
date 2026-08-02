import Image from "next/image";
import TextReveal from "./TextReveal";

const VALUES = [
  "Integrity",
  "Transparency",
  "Accountability",
  "Craft",
  "Partnership",
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-[1240px] px-5 pt-16 sm:px-8 sm:pt-20 xl:px-10 xl:pt-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4.5">
        <div className="lg:col-span-8 relative overflow-hidden bg-paper border border-line rounded-3xl p-7 md:p-8">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-14 -bottom-16 w-56 h-56 rounded-full bg-accent/8 blur-3xl"
          />
          <div className="relative">
            <div className="text-[12.5px] tracking-[0.16em] uppercase text-faint">
              About Us
            </div>
            <TextReveal
              as="h2"
              className="mt-3.5 text-[34px] leading-[1.12] text-ink sm:text-[40px] xl:text-[46px]"
            >
              A focused agency for e-commerce operators
            </TextReveal>
            <TextReveal
              as="p"
              className="mt-5 text-lg leading-[1.65] text-body max-w-160"
            >
              The Markgent LLC is a US-registered digital marketing agency
              working exclusively with e-commerce brands. We combine
              creative, listing, advertising, and customer-support expertise
              so growing sellers can operate with the polish of a much
              larger company.
            </TextReveal>
          </div>
        </div>

        <div className="lg:col-span-4 relative overflow-hidden rounded-3xl border border-line min-h-55">
          <Image
            src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=900&q=80"
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 33vw"
            className="object-cover"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-linear-to-t from-ink/90 via-ink/35 to-transparent"
          />
          <div className="relative h-full flex flex-col justify-end p-6 md:p-7">
            <span className="inline-flex w-9 h-9 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm text-paper">
              <svg
                aria-hidden
                viewBox="0 0 24 24"
                fill="none"
                className="w-4.5 h-4.5"
              >
                <path
                  d="M12 2 3 6v6c0 5 3.8 8.4 9 10 5.2-1.6 9-5 9-10V6l-9-4Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <TextReveal as="h3" className="mt-4 text-xl text-paper">
              Our Mission
            </TextReveal>
            <TextReveal
              as="p"
              className="mt-2 text-[14.5px] leading-[1.6] text-cream/78"
            >
              To make professional marketing accessible to independent
              e-commerce sellers.
            </TextReveal>
          </div>
        </div>

        <div className="lg:col-span-4 relative overflow-hidden bg-ink rounded-3xl p-6 md:p-7">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 w-[55%] bg-linear-to-l from-accent/30 via-accent/5 to-transparent"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/25 to-transparent"
          />
          <span className="relative inline-flex w-9 h-9 items-center justify-center rounded-full bg-white/10 text-accent">
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              fill="none"
              className="w-4.5 h-4.5"
            >
              <path
                d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </span>
          <TextReveal as="h3" className="relative mt-4 text-xl text-paper">
            Our Vision
          </TextReveal>
          <TextReveal
            as="p"
            className="relative mt-2 text-[14.5px] leading-[1.6] text-cream/72"
          >
            To be the long-term growth partner brands keep as they scale
            across platforms.
          </TextReveal>
        </div>

        <div className="lg:col-span-8 relative overflow-hidden bg-paper border border-line rounded-3xl p-6 md:p-7">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-10 -bottom-12 w-40 h-40 rounded-full bg-accent/8 blur-3xl"
          />
          <TextReveal as="h3" className="relative text-xl text-ink">
            Our Values
          </TextReveal>
          <div className="relative mt-6 flex flex-col gap-3">
            {(["forward", "reverse"] as const).map((direction) => (
              <div
                key={direction}
                className="relative overflow-hidden py-1.5"
                style={{
                  maskImage:
                    "linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)",
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)",
                }}
              >
                <div className="flex h-9 w-max">
                  {[0, 1, 2, 3].map((row) => (
                    <ul
                      key={row}
                      aria-hidden={row > 0}
                      className={`flex h-9 shrink-0 items-center gap-3 pr-3 motion-reduce:animate-none ${
                        direction === "forward"
                          ? "animate-marquee"
                          : "animate-marquee-reverse"
                      }`}
                    >
                      {VALUES.map((value) => (
                        <li key={value} className="flex-none">
                          <span className="border border-line-strong bg-cream-card/60 rounded-full px-4 py-1.5 text-[13.5px] text-nav">
                            {value}
                          </span>
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
