import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/technology")({
  component: TechnologyPage,
  head: () => ({
    meta: [
      { title: "Technology — PropyFy" },
      { name: "description", content: "The PropTech stack behind PropyFy: AI-powered property recommendations, immersive presentation infrastructure, commercial analytics and a digital experience ecosystem." },
      { property: "og:title", content: "Technology — PropyFy" },
      { property: "og:description", content: "Modern PropTech infrastructure for commercial real estate." },
      { property: "og:url", content: "https://propyfy-quest.lovable.app/technology" },
    ],
    links: [{ rel: "canonical", href: "https://propyfy-quest.lovable.app/technology" }],
  }),
});

const stack = [
  { n: "01", t: "AI Recommendation Engine", d: "Machine learning models that match commercial requirements with curated opportunities across categories and geographies." },
  { n: "02", t: "Immersive VR Infrastructure", d: "End-to-end VR walkthrough pipeline — capture, build, distribute to headset and web." },
  { n: "03", t: "AV Experience Systems", d: "Integrated AV infrastructure powering the PropyFy Experience Centre and on-site activations." },
  { n: "04", t: "Commercial Analytics", d: "Live dashboards tracking absorption, pricing, lease velocity and investor sentiment." },
  { n: "05", t: "Digital Presentation Ecosystem", d: "Composable presentation layer used by sales teams, advisors and developer partners." },
  { n: "06", t: "Channel Partner CRM", d: "A purpose-built CRM connecting channel partners, developers and the PropyFy advisory desk." },
];

function TechnologyPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Technology"
        title={<>A modern <span className="text-gradient">PropTech</span> stack for commercial real estate.</>}
        intro={<p>PropyFy is built on a layered technology platform — from AI-driven discovery to immersive presentation and channel partner orchestration.</p>}
      >
        <Link to="/immersive" className="inline-flex items-center gap-2 border border-accent bg-accent px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground">
          See it in action →
        </Link>
      </PageHeader>

      <Section>
        <div className="grid gap-px border border-border bg-border/60 md:grid-cols-2 lg:grid-cols-3">
          {stack.map((s) => (
            <div key={s.n} className="group bg-background p-8 transition-colors hover:bg-card md:p-10">
              <span className="font-display text-xs tabular-nums text-accent">{s.n}</span>
              <h3 className="mt-4 font-display text-xl text-foreground group-hover:text-accent">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
