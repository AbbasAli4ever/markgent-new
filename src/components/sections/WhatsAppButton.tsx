import Image from "next/image";

const PHONE_DISPLAY = "+1 307 507 3828";
// wa.me expects digits only, no plus sign or separators.
const PHONE_E164 = "13075073828";
const PREFILLED_MESSAGE =
  "Hello The Markgent LLC, I'd like to discuss growing my e-commerce brand.";

const WHATSAPP_URL = `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(PREFILLED_MESSAGE)}`;

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with The Markgent LLC on WhatsApp at ${PHONE_DISPLAY}`}
      className="group fixed bottom-4 right-4 z-40 flex items-center gap-2.5 rounded-full sm:bottom-6 sm:right-6"
    >
      <span className="pointer-events-none hidden rounded-full border border-line bg-paper/95 px-3.5 py-2 text-[13px] font-semibold text-ink shadow-[0_10px_28px_-14px_rgba(6,45,42,0.5)] backdrop-blur-sm transition-opacity duration-300 sm:block sm:opacity-0 sm:group-hover:opacity-100">
        {PHONE_DISPLAY}
      </span>

      <span className="relative flex h-14 w-14 items-center justify-center sm:h-15 sm:w-15">
        <Image
          src="/whatsapp.png"
          alt=""
          width={60}
          height={60}
          className="relative h-full w-full rounded-full transition-transform duration-300 motion-safe:animate-wa-bump group-hover:scale-110"
        />
      </span>
    </a>
  );
}
