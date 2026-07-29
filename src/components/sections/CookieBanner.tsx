"use client";

import { useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed left-6 right-6 bottom-6 z-60 flex justify-center pointer-events-none">
      <div className="pointer-events-auto max-w-[720px] w-full bg-paper border border-line-strong rounded-2xl shadow-[0_20px_50px_-20px_rgba(6,45,42,0.4)] px-5 py-4.5 flex items-center gap-4.5 flex-wrap">
        <p className="text-sm leading-[1.55] text-body flex-1 min-w-[320px]">
          We use cookies to understand site traffic and improve your
          experience. See our Privacy Policy for details.
        </p>
        <div className="flex gap-2.5">
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
