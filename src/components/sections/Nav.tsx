"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  // { href: "/#testers", label: "Product Testers" },
  // { href: "/#why", label: "Why Us" },
  // { href: "/#process", label: "Process" },
  { href: "/about", label: "About Us" },
  { href: "/blogs", label: "Blogs" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const drawerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key !== "Tab" || !drawerRef.current) return;
      const focusable = Array.from(drawerRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'));
      const first = focusable[0];
      const last = focusable.at(-1);
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-3 z-50 flex justify-center px-3 xl:top-4 xl:px-4">
      <div className="w-full max-w-290 rounded-full border border-white/40 bg-cream/80 backdrop-blur-xl backdrop-saturate-150 shadow-[0_20px_50px_-20px_rgba(6,45,42,0.35)] xl:bg-cream/70">
        <div className="flex h-14 items-center gap-2 px-3 sm:gap-3 sm:px-4 xl:h-17 xl:gap-10 xl:px-6">
          <Link href="/" className="flex flex-none items-center gap-2.5">
            <Image src="/logo.png" alt="The Markgent LLC" width={40} height={40} className="h-7 w-auto xl:h-8" priority />
          </Link>
          <nav className="ml-auto hidden items-center gap-7 xl:flex">
            {NAV_LINKS.map((link) => <Link key={link.href} href={link.href} className="text-[14.5px] text-nav transition-colors hover:text-ink">{link.label}</Link>)}
          </nav>
          <Link href="/contact" className="ml-auto flex-none rounded-full bg-ink px-4 py-2.5 text-[12px] font-medium text-cream transition-colors hover:bg-ink-soft hover:text-white sm:text-sm xl:ml-0 xl:px-5.5 xl:py-3 xl:text-[14.5px]">
            <span className="sm:hidden">Contact</span><span className="hidden sm:inline">Get a Free Consultation</span>
          </Link>
          <button type="button" aria-label="Open navigation" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(true)} className="flex h-10 w-10 flex-none items-center justify-center rounded-full border border-line-strong text-ink xl:hidden">
            <FiMenu className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className={`fixed inset-0 z-50 xl:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`} aria-hidden={!open}>
        <button tabIndex={open ? 0 : -1} aria-label="Close navigation" onClick={() => setOpen(false)} className={`absolute inset-0 bg-ink/35 backdrop-blur-sm transition-opacity ${open ? "opacity-100" : "opacity-0"}`} />
        <div ref={drawerRef} id="mobile-navigation" role="dialog" aria-modal="true" aria-label="Navigation" inert={!open} className={`absolute inset-y-0 right-0 flex w-[min(88vw,380px)] flex-col bg-paper p-5 shadow-2xl transition-transform duration-500 ease-out ${open ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex items-center justify-between">
            <Image src="/logo.png" alt="The Markgent LLC" width={40} height={40} className="h-8 w-auto" />
            <button ref={closeRef} type="button" aria-label="Close navigation" onClick={() => setOpen(false)} className="flex h-11 w-11 items-center justify-center rounded-full border border-line-strong text-ink"><FiX className="h-5 w-5" /></button>
          </div>
          <nav className="mt-10 grid" aria-label="Mobile navigation">
            {NAV_LINKS.map((link, index) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="flex items-center gap-4 border-b border-line py-4 text-xl font-semibold text-ink"><span className="text-xs font-normal text-faint">{String(index + 1).padStart(2, "0")}</span>{link.label}</Link>)}
          </nav>
          <Link href="/contact" onClick={() => setOpen(false)} className="mt-auto rounded-full bg-ink px-6 py-4 text-center font-semibold text-paper">Get a Free Consultation</Link>
        </div>
      </div>
    </header>
  );
}
