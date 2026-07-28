"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Us" },
  { href: "#testers", label: "Testers" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-100 transition-all duration-400 ${
        scrolled
          ? "bg-cream/70 backdrop-blur-xl border-b border-line/70"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="max-w-[1240px] mx-auto px-10 h-[72px] flex items-center justify-between gap-8">
        <a
          href="#top"
          className="text-[17px] font-bold tracking-[-0.02em] text-ink"
        >
          The Markgent<span className="text-accent">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-9">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[14.5px] text-nav hover:text-ink transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="bg-ink text-cream px-5 py-2.5 rounded-full text-[14px] font-medium hover:bg-ink-soft transition-colors"
        >
          Get in touch
        </a>
      </nav>
    </header>
  );
}
