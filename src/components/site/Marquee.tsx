const ITEMS = [
  "Grade-A Offices",
  "Retail",
  "Investment",
  "Mixed-Use",
  "Hospitality",
  "Co-Working",
  "Mumbai",
  "Advisory",
  "Immersive",
];

export function Marquee() {
  return (
    <div
      aria-hidden
      className="relative isolate overflow-hidden border-y border-border bg-background py-8"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />
      <div className="flex w-max animate-marquee gap-16 whitespace-nowrap pr-16">
        {[...ITEMS, ...ITEMS, ...ITEMS].map((w, i) => (
          <span
            key={i}
            className="font-display text-3xl text-cream/40 md:text-5xl"
          >
            {w}
            <span className="ml-16 inline-block h-1.5 w-1.5 -translate-y-2 rounded-full bg-gold align-middle" />
          </span>
        ))}
      </div>
    </div>
  );
}
