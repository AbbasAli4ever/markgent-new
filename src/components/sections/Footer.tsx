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
  { href: "/services#branding", label: "Branding" },
  { href: "/services#social-media-management", label: "Social Media Management" },
  { href: "/services#product-tester-program", label: "Product Tester Program" },
  { href: "/services#website-design", label: "Website Design" },
  { href: "/services#content-writing", label: "Content Writing" },
  { href: "/services#amazon-ppc-management", label: "Amazon PPC Management" },
];

const COMPANY_LINKS = [
  { href: "/about", label: "About" },
  { href: "/#process", label: "Our Process" },
  { href: "/contact", label: "Contact" },
];

const LEGAL_LINKS = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms & Conditions" },
  { href: "/refund-policy", label: "Refund Policy" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-10 px-5 pb-8 pt-14 sm:grid-cols-2 sm:px-8 xl:grid-cols-[1.4fr_1fr_1fr_1fr] xl:gap-11 xl:px-10 xl:pt-17 xl:pb-8.5">
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
            Legal
          </TextReveal>
          <div className="mt-4 grid gap-2.5 text-[14.5px]">
            {LEGAL_LINKS.map((link) => (
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
          <div className="mt-4.5 border border-white/28 rounded-[10px] px-3 py-2.5 text-[12.5px] leading-[1.45] text-cream/70">
            Service-based business. No physical products are sold or shipped.
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1240px] px-5 pb-8 sm:px-8 xl:px-10 xl:pb-10">
        <div className="flex flex-col gap-2 border-t border-white/18 pt-5.5 text-[12px] text-cream/60 sm:flex-row sm:flex-wrap sm:justify-between sm:gap-5 xl:text-[13px]">
          <span>Copyright © The Markgent LLC. All rights reserved.</span>
          <span>Registered in the United States</span>
        </div>
      </div>
    </footer>
  );
}
