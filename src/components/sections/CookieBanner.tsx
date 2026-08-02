"use client";

import { useState } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="pointer-events-none fixed bottom-3 left-3 right-3 z-60 flex justify-center sm:bottom-6 sm:left-6 sm:right-6">
      <div className="pointer-events-auto flex w-full max-w-[720px] flex-col gap-3 rounded-2xl border border-line-strong bg-paper px-4 py-4 shadow-[0_20px_50px_-20px_rgba(6,45,42,0.4)] sm:flex-row sm:flex-wrap sm:items-center sm:gap-4.5 sm:px-5 sm:py-4.5">
        <p className="min-w-0 flex-1 text-[12.5px] leading-[1.5] text-body sm:text-sm sm:leading-[1.55]">
          This site uses essential technologies to deliver the experience. See
          our <Link href="/privacy-policy" className="font-semibold text-ink underline underline-offset-3">Privacy Policy</Link> for details.
        </p>
        <div className="flex justify-end gap-2.5">
          <button
            type="button"
            onClick={() => setVisible(false)}
            className="border border-line-strong bg-transparent rounded-full px-4.5 py-2.5 text-sm text-ink font-sans cursor-pointer hover:bg-cream-card transition-colors"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => setVisible(false)}
            className="border-none bg-ink text-cream rounded-full px-5 py-2.5 text-sm font-sans cursor-pointer hover:bg-ink-soft transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
