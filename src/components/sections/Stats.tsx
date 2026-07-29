const STATS = [
  { value: "140+", label: "Brands supported" },
  { value: "8", label: "Core service lines" },
  { value: "24h", label: "Response commitment" },
  { value: "100%", label: "In-house managed work" },
];

export default function Stats() {
  return (
    <section className="max-w-[1240px] mx-auto px-10 pb-6">
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
            <div key={stat.label} className="px-8 py-7 md:px-10">
              <div className="font-serif text-4xl md:text-5xl leading-none bg-gradient-to-r from-[#8fd8c4] to-paper bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-cream/70 mt-2.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
