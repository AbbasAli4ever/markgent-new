const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#testers", label: "Product Testers" },
  { href: "#why", label: "Why Us" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
];

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <div className="w-full max-w-290 rounded-full border border-white/40 bg-cream/70 backdrop-blur-xl backdrop-saturate-150 shadow-[0_20px_50px_-20px_rgba(6,45,42,0.35)]">
        <div className="px-6 h-17 flex items-center gap-10">
          <a href="#top" className="flex items-center gap-2.5 flex-none">
            <span className="w-7.5 h-7.5 rounded-[9px] bg-ink text-cream flex items-center justify-center font-serif text-[17px] leading-none">
              M
            </span>
            <span className="font-serif text-xl text-ink tracking-[0.01em]">
              The Markgent<span className="text-faint"> LLC</span>
            </span>
          </a>
          <nav className="hidden md:flex gap-7 ml-auto items-center">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[14.5px] text-nav hover:text-ink transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="flex-none bg-ink text-cream px-5.5 py-3 rounded-full text-[14.5px] font-medium hover:bg-ink-soft hover:text-white transition-colors"
          >
            Get a Free Consultation
          </a>
        </div>
      </div>
    </header>
  );
}
