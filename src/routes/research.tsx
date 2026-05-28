import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/research")({
  component: ResearchPage,
  head: () => ({
    meta: [
      { title: "Research & Insights — PropyFy" },
      { name: "description", content: "Commercial real estate market reports, office and retail trends, investment insights and intelligence — published by the PropyFy research desk." },
      { property: "og:title", content: "Research & Insights — PropyFy" },
      { property: "og:description", content: "Commercial real estate market intelligence and reports." },
      { property: "og:url", content: "https://propyfy-quest.lovable.app/research" },
    ],
    links: [{ rel: "canonical", href: "https://propyfy-quest.lovable.app/research" }],
  }),
});

const categories = [
  "Commercial Real Estate",
  "Office Market Trends",
  "Retail Leasing Trends",
  "Investment Insights",
  "Market Reports",
  "Investor Intelligence",
];

const reports = [
  { t: "Mumbai Office Outlook 2026", c: "Office Market Trends", d: "Absorption, supply and rent trajectories across the MMR Grade-A office market." },
  { t: "High-Street Retail Pulse", c: "Retail Leasing Trends", d: "Brand expansion patterns and prime high-street rentals across Tier-1 cities." },
  { t: "Yield Compression in MMR", c: "Investment Insights", d: "How institutional capital is reshaping cap rates across MMR commercial assets." },
  { t: "Warehousing & Logistics Annual", c: "Market Reports", d: "Grade-A warehousing supply, occupier velocity and JNPT corridor dynamics." },
  { t: "Mixed-Use Districts in India", c: "Commercial Real Estate", d: "The rise of integrated commercial districts and what occupiers should expect." },
  { t: "Investor Sentiment Index", c: "Investor Intelligence", d: "Quarterly sentiment and intent tracking across HNI and institutional investors." },
];

function ResearchPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Research & Insights"
        title={<>Commercial real estate <span className="text-gradient">intelligence.</span></>}
        intro={<p>The PropyFy research desk publishes market reports, leasing trends and investor intelligence for commercial real estate decision-makers.</p>}
      />

      <Section>
        <div className="mb-12 flex flex-wrap gap-2 border-y border-border py-6">
          {categories.map((c) => (
            <span key={c} className="border border-border bg-card/40 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-foreground/80">
              {c}
            </span>
          ))}
        </div>

        <div className="grid gap-px border border-border bg-border/60 md:grid-cols-2 lg:grid-cols-3">
          {reports.map((r) => (
            <article key={r.t} className="group bg-background p-8 transition-colors hover:bg-card">
              <p className="eyebrow">{r.c}</p>
              <h3 className="mt-5 font-display text-xl text-foreground group-hover:text-accent">{r.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{r.d}</p>
              <div className="hairline my-6" />
              <a href="mailto:Zaid@PropyFy.in?subject=Research%20request" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground transition-colors group-hover:text-accent">
                Request report <span aria-hidden>→</span>
              </a>
            </article>
          ))}
        </div>
      </Section>
    </main>
  );
}
