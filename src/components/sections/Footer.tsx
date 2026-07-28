const COLUMNS = [
  {
    title: "Services",
    links: [
      "Branding",
      "Social Media Management",
      "Website Design",
      "Amazon PPC Management",
    ],
  },
  {
    title: "Company",
    links: ["Why Choose Us", "Product Testers", "Contact"],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-cream-soft/50">
      <div className="max-w-[1240px] mx-auto px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] gap-12">
          <div>
            <div className="text-[17px] font-bold tracking-[-0.02em] text-ink">
              The Markgent<span className="text-accent">.</span>
            </div>
            <p className="mt-3.5 text-[14.5px] leading-[1.6] text-body max-w-[320px]">
              Branding, marketing, content, and support for e-commerce brands
              across Amazon, Etsy, Walmart, and Shopify.
            </p>
          </div>

          {COLUMNS.map((column) => (
            <div key={column.title}>
              <div className="text-[12px] tracking-[0.16em] uppercase text-faint">
                {column.title}
              </div>
              <ul className="mt-4 grid gap-2.5">
                {column.links.map((link) => (
                  <li key={link}>
                    <span className="text-[14.5px] text-body">{link}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-7 border-t border-line flex flex-wrap items-center justify-between gap-4">
          <p className="text-[13px] text-faint">
            © {new Date().getFullYear()} The Markgent LLC. All rights reserved.
          </p>
          <p className="text-[13px] text-faint">
            hello@themarkgent.com
          </p>
        </div>
      </div>
    </footer>
  );
}
