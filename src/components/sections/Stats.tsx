const STATS = [
  { value: "140+", label: "Brands supported" },
  { value: "8", label: "Core service lines" },
  { value: "24h", label: "Response commitment" },
  { value: "100%", label: "In-house managed work" },
];

export default function Stats() {
  return (
    <section className="mx-auto max-w-[1240px] px-5 pb-5 sm:px-8 xl:px-10 xl:pb-6">
      <div className="relative overflow-hidden rounded-[28px] bg-ink shadow-[0_30px_60px_-30px_rgba(6,45,42,0.5)]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-[45%] bg-gradient-to-l from-accent/35 via-accent/10 to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
        />

        <div className="relative grid grid-cols-2 md:grid-cols-4 divide-y divide-white/10 md:divide-y-0 md:divide-x md:divide-white/10">
          {STATS.map((stat) => (
            <div key={stat.label} className="min-w-0 px-4 py-5 sm:px-7 sm:py-6 xl:px-10 xl:py-7">
              <div className="bg-gradient-to-r from-[#8fd8c4] to-paper bg-clip-text font-serif text-3xl leading-none text-transparent sm:text-4xl xl:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2.5 text-xs leading-snug text-cream/70 sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
