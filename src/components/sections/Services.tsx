import TextReveal from "./TextReveal";
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
    <section id="services" className="max-w-[1240px] mx-auto px-10 pt-24 pb-6">
      <div className="flex items-end justify-between gap-10 flex-wrap">
        <div className="max-w-[620px]">
          <div className="text-[12.5px] tracking-[0.16em] uppercase text-faint">
            Our Services
          </div>
          <TextReveal
            as="h2"
            className="mt-3.5 text-[56px] leading-[1.08] text-ink"
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

      <div className="-mt-12 min-h-160 w-full">
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
