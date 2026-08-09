"use client";

import { useEffect } from "react";

/**
 * Enables smooth scrolling only for in-page #anchor links.
 *
 * `scroll-behavior: smooth` cannot live on <html> permanently: it also animates
 * the scroll-to-top Next.js runs on every route change, which makes a freshly
 * opened page appear to scroll down into place. Instead the class is added at
 * the moment an anchor is clicked and removed once the scroll settles, so route
 * changes always render instantly from the top.
 */
export default function SmoothAnchors() {
  useEffect(() => {
    const root = document.documentElement;
    let timer: number | undefined;

    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const anchor = (event.target as Element | null)?.closest?.("a");
      const href = anchor?.getAttribute("href");
      if (!anchor || !href?.startsWith("#") || href === "#") return;

      root.classList.add("smooth-scroll");
      window.clearTimeout(timer);
      // Drop the class once the animated scroll has finished, so a later route
      // change is never caught mid-transition with smoothing still enabled.
      timer = window.setTimeout(() => root.classList.remove("smooth-scroll"), 1200);
    };

    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      window.clearTimeout(timer);
      root.classList.remove("smooth-scroll");
    };
  }, []);

  return null;
}
