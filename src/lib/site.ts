/**
 * Canonical public origin, used for metadata, the sitemap, and robots.txt.
 * Set NEXT_PUBLIC_SITE_URL in the deployment environment once the live
 * domain is confirmed; the fallback keeps local builds working.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://themarkgent.com"
).replace(/\/$/, "");
