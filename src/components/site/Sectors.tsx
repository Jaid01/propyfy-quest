import { Section } from "./Section";

const sectors = [
  "Grade-A Office Spaces",
  "Retail & High-Street Projects",
  "Co-Working Spaces",
  "Mixed-Use Developments",
  "Hospitality Projects",
  "Commercial Investment Opportunities",
];

export function Sectors() {
  return (
    <Section
      id="sectors"
      eyebrow="Our Focus Sectors"
      title={
        <>
          Six sectors. One <em className="font-light italic text-gold">commercial</em> lens.
        </>
      }
      intro={
        <p>
          Specialised across the commercial spectrum — from headquarters-grade towers to
          high-street retail and yield-driven investments.
        </p>
      }
    >
      <div className="border-t border-border">
        {sectors.map((s, i) => (
          <a
            key={s}
            href="#contact"
            className="group flex items-center justify-between gap-6 border-b border-border py-6 transition-colors hover:bg-cream/[0.02] md:py-8"
          >
            <div className="flex items-baseline gap-6 md:gap-10">
              <span className="font-display text-sm tabular-nums text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-2xl text-cream transition-colors group-hover:text-gold md:text-4xl">
                {s}
              </span>
            </div>
            <span
              aria-hidden
              className="translate-x-0 text-cream/40 transition-all group-hover:translate-x-2 group-hover:text-gold"
            >
              →
            </span>
          </a>
        ))}
      </div>
    </Section>
  );
}
