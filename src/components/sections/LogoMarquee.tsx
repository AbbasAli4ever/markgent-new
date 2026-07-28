import Image from "next/image";

const PLATFORMS = [
  { name: "Amazon", src: "/amazon.svg" },
  { name: "Etsy", src: "/etsy.svg" },
  { name: "Walmart", src: "/walmart.svg" },
  { name: "Shopify", src: "/shopify.svg" },
  { name: "eBay", src: "/ebay.svg" },
];

function Row({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <ul
      aria-hidden={ariaHidden}
      className="flex shrink-0 items-center gap-18 pr-18 animate-marquee motion-reduce:animate-none"
    >
      {PLATFORMS.map((platform) => (
        <li key={platform.name} className="flex-none">
          <Image
            src={platform.src}
            alt={ariaHidden ? "" : platform.name}
            width={80}
            height={80}
            className="h-16 w-16 md:h-20 md:w-20 object-contain opacity-45 transition-opacity duration-300 hover:opacity-100"
          />
        </li>
      ))}
    </ul>
  );
}

export default function LogoMarquee() {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, #000 12%, #000 88%, transparent)",
      }}
    >
      <div className="flex w-max">
        <Row />
        <Row ariaHidden />
        <Row ariaHidden />
        <Row ariaHidden />
      </div>
    </div>
  );
}
