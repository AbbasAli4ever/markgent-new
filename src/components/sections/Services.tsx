import TextReveal from "./TextReveal";
import Image from "next/image";
import {
  OrbitCardStack,
  type OrbitStackItem,
} from "@/components/ui/orbit-card-stack";

const SERVICES: OrbitStackItem[] = [
  {
    name: "Branding",
    role: "Identity",
    description:
      "Logo systems, colour and type direction, and packaging art that make your listings look established.",
    icon: "/badge.png",
    stat: "Identity",
  },
  {
    name: "Social Media Management",
    role: "Audience",
    description:
      "Full account management across the platforms your buyers actually use: content calendars, on-brand creative, scheduled posting, community replies, and month-over-month reporting on the follower and engagement growth it produces.",
    icon: "/content-management.png",
    stat: "Audience",
  },
  {
    name: "Product Tester Program",
    role: "Feedback",
    description:
      "We match your product with vetted testers who buy, use, and report back with structured evaluations — surfacing quality problems, packaging gaps, and listing mismatches before they turn into returns and one-star reviews.",
    icon: "/product-management.png",
    stat: "Testers",
  },
  {
    name: "Website Design",
    role: "Storefront",
    description:
      "Modern, responsive, SEO-aware sites and Shopify storefronts built to convert — clear product hierarchy, fast load times, trust signals in the right places, and a checkout path that does not lose people halfway through.",
    icon: "/graphic-design.png",
    stat: "Convert",
  },
  {
    name: "Content Writing",
    role: "Copy",
    description:
      "Listing copy, titles, bullets, A+ content, blogs, and product descriptions written to rank and to sell — keyword-informed without reading like keyword soup, and consistent in voice across every platform you sell on.",
    icon: "/ai-technology.png",
    stat: "Copy",
  },
  {
    name: "Product Photography & Editing",
    role: "Visuals",
    description:
      "Studio and lifestyle imagery, infographics, and platform-ready retouching that meets each marketplace's technical spec — white-background hero shots, scale and detail frames, and the comparison graphics that answer buyer questions.",
    icon: "/photo.png",
    stat: "Imagery",
  },
  {
    name: "Customer Feedback Management",
    role: "Support",
    description:
      "Inquiry handling, professional response templates, and review workflows that lift satisfaction scores — fast replies that protect your seller metrics, plus the pattern analysis that tells you what to fix in the product itself.",
    icon: "/review.png",
    stat: "Support",
  },
  {
    name: "Amazon PPC Management",
    role: "Paid Media",
    description:
      "Campaign architecture, keyword research, bid management, and negative-term hygiene focused on return on ad spend — not impressions. You get the weekly numbers and a plain explanation of what moved and why.",
    icon: "/cost-per-click.png",
    stat: "ROAS",
  },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-[1240px] px-5 pb-6 pt-16 sm:px-8 sm:pt-20 xl:px-10 xl:pt-24">
      <div className="flex items-end justify-between gap-10 flex-wrap">
        <div className="max-w-[620px]">
          <div className="text-[12.5px] tracking-[0.16em] uppercase text-faint">
            Our Services
          </div>
          <TextReveal
            as="h2"
            className="mt-3.5 text-[38px] leading-[1.08] text-ink sm:text-[48px] xl:text-[56px]"
          >
            Everything your store needs, handled by one team
          </TextReveal>
        </div>
        <TextReveal
          as="p"
          className="text-base leading-[1.6] text-body max-w-[330px]"
        >
          Pick a single service or combine them into a managed growth program
          built around your catalogue.
        </TextReveal>
      </div>

      <div className="-mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-6 [scrollbar-width:none] sm:-mx-8 sm:px-8 xl:hidden [&::-webkit-scrollbar]:hidden">
        {SERVICES.map((service) => (
          <article key={service.name} className="flex w-[min(84vw,340px)] flex-none snap-center flex-col rounded-[22px] border border-line bg-paper p-4 shadow-[0_12px_35px_-24px_rgba(6,45,42,0.32)]">
            <div className="relative flex aspect-[1.45] items-center justify-center overflow-hidden rounded-[16px] bg-cream-card/60">
              <Image src={service.icon!} alt="" width={96} height={96} className="h-20 w-20 object-contain" />
            </div>
            <div className="mt-5 text-xs uppercase tracking-[0.14em] text-faint">{service.role}</div>
            <h3 className="mt-2 text-xl text-ink">{service.name}</h3>
            <p className="mt-3 line-clamp-5 text-sm leading-[1.6] text-body">{service.description}</p>
          </article>
        ))}
      </div>

      <div className="-mt-12 hidden min-h-160 w-full xl:block">
        <OrbitCardStack
          items={SERVICES}
          defaultActiveIndex={4}
          spread={132}
          lift={40}
          cardClassName="text-ink shadow-[0_8px_32px_-8px_rgba(6,45,42,0.18)]"
        />
      </div>
    </section>
  );
}
