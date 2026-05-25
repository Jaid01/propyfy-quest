import { Section } from "./Section";

const services = [
  {
    n: "01",
    title: "Commercial Property Advisory",
    body: "Helping businesses and investors identify the right commercial opportunities.",
    points: ["Location intelligence", "Business goals alignment", "Investment potential", "Future growth"],
  },
  {
    n: "02",
    title: "Immersive Property Experiences",
    body: "Experience projects beyond brochures and walkthroughs.",
    points: ["VR walkthroughs", "Interactive presentations", "Cinematic showcases", "Digital experiences"],
  },
  {
    n: "03",
    title: "Investment & Leasing Support",
    body: "Professional support across the commercial decision journey.",
    points: ["Project comparisons", "Leasing discussions", "Investment opportunities", "Project understanding"],
  },
  {
    n: "04",
    title: "Experience Centre Presentations",
    body: "Modern AV and immersive presentation environments engineered for premium property experiences.",
    points: ["LED & projection", "Spatial audio", "Curated narrative", "Premium hospitality"],
  },
];

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="Our Services"
      title={
        <>
          A complete advisory <br />
          and <em className="font-light italic text-gold">experience</em> stack.
        </>
      }
      intro={
        <p>
          Four disciplines, one outcome — better commercial property decisions made with
          clarity, context and confidence.
        </p>
      }
    >
      <div className="grid gap-px overflow-hidden border border-border bg-border/60 md:grid-cols-2">
        {services.map((s) => (
          <article
            key={s.n}
            className="group relative bg-background p-8 transition-colors hover:bg-card md:p-12"
          >
            <div className="flex items-start justify-between">
              <span className="eyebrow">{s.n}</span>
              <span
                aria-hidden
                className="text-gold opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
              >
                →
              </span>
            </div>
            <h3 className="mt-6 font-display text-2xl text-cream md:text-3xl">{s.title}</h3>
            <p className="mt-3 max-w-md text-muted-foreground">{s.body}</p>
            <div className="hairline my-8" />
            <ul className="grid grid-cols-2 gap-3 text-sm text-muted-foreground">
              {s.points.map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-gold" />
                  {p}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
