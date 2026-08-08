/**
 * Canonical public origin, used for metadata, the sitemap, and robots.txt.
 * Set NEXT_PUBLIC_SITE_URL in the deployment environment once the live
 * domain is confirmed; the fallback keeps local builds working.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://themarkgent.com"
).replace(/\/$/, "");

/**
 * Public-facing contact address shown in page copy. Mirrors CONTACT_TO_EMAIL
 * so changing that env var updates the displayed address too; the fallback
 * keeps the text sensible if the variable is ever missing.
 */
export const CONTACT_EMAIL =
  process.env.CONTACT_TO_EMAIL?.trim() || "director@themarkgentllc.com";
