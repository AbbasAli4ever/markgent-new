"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "markgent-cookie-consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  // Read on the client only, so the server-rendered markup stays consistent
  // and a stored choice keeps the banner from reappearing on every page.
  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  const dismiss = (choice: "accepted" | "declined") => {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // Storage unavailable (private mode) — banner returns next visit.
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="pointer-events-none fixed bottom-3 left-3 right-3 z-60 flex justify-center sm:bottom-6 sm:left-6 sm:right-6">
      <div className="pointer-events-auto flex w-full max-w-[720px] flex-col gap-3 rounded-2xl border border-line-strong bg-paper px-4 py-4 shadow-[0_20px_50px_-20px_rgba(6,45,42,0.4)] sm:flex-row sm:flex-wrap sm:items-center sm:gap-4.5 sm:px-5 sm:py-4.5">
        <p className="min-w-0 flex-1 text-[12.5px] leading-[1.5] text-body sm:text-sm sm:leading-[1.55]">
          This site uses essential technologies to deliver the experience. See
          our <Link href="/cookie-policy" className="font-semibold text-ink underline underline-offset-3">Cookie Policy</Link> for details.
        </p>
        <div className="flex justify-end gap-2.5">
          <button
            type="button"
            onClick={() => dismiss("declined")}
            className="border border-line-strong bg-transparent rounded-full px-4.5 py-2.5 text-sm text-ink font-sans cursor-pointer hover:bg-cream-card transition-colors"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => dismiss("accepted")}
            className="border-none bg-ink text-cream rounded-full px-5 py-2.5 text-sm font-sans cursor-pointer hover:bg-ink-soft transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
