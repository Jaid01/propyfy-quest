import { Section } from "./Section";

const reasons = [
  {
    title: "Client-Focused Advisory",
    body: "We understand your business requirements before recommending opportunities.",
  },
  {
    title: "Modern Commercial Experiences",
    body: "Interactive, immersive project presentations built for modern decision-making.",
  },
  {
    title: "Premium Property Showcasing",
    body: "High-quality presentation standards that elevate project understanding and engagement.",
  },
  {
    title: "Commercial Market Expertise",
    body: "Focused understanding of commercial real estate trends, positioning and opportunities.",
  },
];

export function Why() {
  return (
    <Section
      id="why"
      eyebrow="Why PropyFy"
      title={
        <>
          Built for the people who <br />
          <em className="font-light italic text-gold">build, lease and invest.</em>
        </>
      }
    >
      <div className="grid gap-px border border-border bg-border/60 md:grid-cols-2 lg:grid-cols-4">
        {reasons.map((r, i) => (
          <div key={r.title} className="bg-background p-8 md:p-10">
            <span className="font-display text-sm tabular-nums text-gold">
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-4 font-display text-xl text-cream">{r.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
