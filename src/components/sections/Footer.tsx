import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import TextReveal from "./TextReveal";

const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "#top", Icon: FaLinkedinIn },
  { label: "Instagram", href: "#top", Icon: FaInstagram },
  { label: "Facebook", href: "#top", Icon: FaFacebookF },
];

const SERVICE_LINKS = [
  { href: "/#services", label: "Branding" },
  { href: "/#services", label: "Social Media Management" },
  { href: "/#testers", label: "Product Tester Program" },
  { href: "/#services", label: "Website Design" },
  { href: "/#services", label: "Content Writing" },
  { href: "/#services", label: "Amazon PPC Management" },
];

const COMPANY_LINKS = [
  { href: "/about", label: "About" },
  { href: "/#process", label: "Our Process" },
  { href: "/#contact", label: "Contact" },
];

const LEGAL_LINKS = [
  { href: "#top", label: "Privacy Policy" },
  { href: "#top", label: "Terms & Conditions" },
  { href: "#top", label: "Refund Policy" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="max-w-[1240px] mx-auto px-10 pt-17 pb-8.5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-11">
        <div>
          <Image
            src="/logo-light.png"
            alt="The Markgent LLC"
            width={40}
            height={40}
            className="h-9 w-auto"
          />
          <TextReveal
            as="p"
            className="mt-4 text-[14.5px] leading-[1.62] text-cream/70 max-w-80"
          >
            A digital marketing agency helping e-commerce brands grow through
            branding, marketing, content, and customer support services.
          </TextReveal>
          <div className="mt-5.5 flex gap-2.5">
            {SOCIAL_LINKS.map(({ label, href, Icon }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 border border-white/28 rounded-[10px] flex items-center justify-center text-cream hover:bg-white/12 transition-colors"
              >
                <Icon className="w-4 h-4" />
              </Link>
            ))}
          </div>
        </div>
        <div>
          <TextReveal
            as="div"
            className="text-xs tracking-[0.14em] uppercase text-cream/50"
          >
            Services
          </TextReveal>
          <div className="mt-4 grid gap-2.5 text-[14.5px]">
            {SERVICE_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-cream/82 hover:text-white transition-colors"
              >
                <TextReveal as="span" className="inline-block">
                  {link.label}
                </TextReveal>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <TextReveal
            as="div"
            className="text-xs tracking-[0.14em] uppercase text-cream/50"
          >
            Company
          </TextReveal>
          <div className="mt-4 grid gap-2.5 text-[14.5px]">
            {COMPANY_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-cream/82 hover:text-white transition-colors"
              >
                <TextReveal as="span" className="inline-block">
                  {link.label}
                </TextReveal>
              </a>
            ))}
          </div>
        </div>
        <div>
          <TextReveal
            as="div"
            className="text-xs tracking-[0.14em] uppercase text-cream/50"
          >
            Legal
          </TextReveal>
          <div className="mt-4 grid gap-2.5 text-[14.5px]">
            {LEGAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-cream/82 hover:text-white transition-colors"
              >
                <TextReveal as="span" className="inline-block">
                  {link.label}
                </TextReveal>
              </a>
            ))}
          </div>
          <div className="mt-4.5 border border-white/28 rounded-[10px] px-3 py-2.5 text-[12.5px] leading-[1.45] text-cream/70">
            Service-based business. No physical products are sold or shipped.
          </div>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto px-10 pb-10">
        <div className="border-t border-white/18 pt-5.5 flex justify-between gap-5 flex-wrap text-[13px] text-cream/60">
          <span>Copyright © The Markgent LLC. All rights reserved.</span>
          <span>Registered in the United States</span>
        </div>
      </div>
    </footer>
  );
}
