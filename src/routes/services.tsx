import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services — PropyFy" },
      { name: "description", content: "Commercial property advisory, leasing support, investment advisory, channel partner services, VR walkthroughs, experience centre solutions and enterprise presentation infrastructure." },
      { property: "og:title", content: "Services — PropyFy" },
      { property: "og:description", content: "End-to-end commercial real estate advisory and immersive technology services." },
      { property: "og:url", content: "https://propyfy-quest.lovable.app/services" },
    ],
    links: [{ rel: "canonical", href: "https://propyfy-quest.lovable.app/services" }],
  }),
});

const services = [
  { n: "01", t: "Commercial Property Advisory", d: "Strategic advisory across the commercial spectrum — from corporate HQ requirements to multi-asset portfolios.", points: ["Requirement mapping", "Location intelligence", "Comparative analysis", "Decision support"] },
  { n: "02", t: "Office & Retail Space Consulting", d: "Specialised consulting for Grade-A office and high-street retail occupiers.", points: ["Workplace strategy", "Catchment analysis", "Brand fit", "Site selection"] },
  { n: "03", t: "Commercial Leasing Support", d: "End-to-end leasing support for occupiers and developers, from term sheets to handover.", points: ["Term negotiation", "Documentation", "Fit-out coordination", "Renewals"] },
  { n: "04", t: "Investment Advisory", d: "Structured advisory for commercial investment — rental yield, capital appreciation and structured deals.", points: ["Yield underwriting", "Exit modelling", "Risk assessment", "Deal structuring"] },
  { n: "05", t: "VR Walkthrough Experiences", d: "Immersive VR walkthroughs of under-construction and ready commercial assets.", points: ["Photoreal VR", "Interactive layouts", "Headset & web", "Branded experiences"] },
  { n: "06", t: "Experience Centre Solutions", d: "Design and operate enterprise-grade AV experience centres for premium project marketing.", points: ["LED & projection", "Spatial audio", "Curated narrative", "Hospitality layer"] },
  { n: "07", t: "Investor Presentation Systems", d: "Cinematic investor presentation infrastructure built around the asset story.", points: ["Pitch architecture", "Financial visualisation", "Live data overlays", "Investor portal"] },
  { n: "08", t: "Channel Partner Services", d: "Pan-India channel partner network for developers seeking enterprise sales velocity.", points: ["Lead orchestration", "Closure support", "CRM-driven funnel", "Performance reporting"] },
  { n: "09", t: "Commercial Project Marketing", d: "Full-stack project marketing — brand, narrative, content and immersive activations.", points: ["Brand & narrative", "Content production", "Channel activation", "Lead pipelines"] },
  { n: "10", t: "Enterprise Presentation Infrastructure", d: "Turnkey presentation infrastructure for developers, family offices and institutional clients.", points: ["Showrooms", "Mobile demo kits", "Web + VR", "Operator training"] },
];

function ServicesPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Services"
        title={<>Ten disciplines. <span className="text-gradient">One advisory platform.</span></>}
        intro={<p>From commercial advisory to immersive presentation infrastructure, every PropyFy service is designed to make complex commercial decisions clearer and faster.</p>}
      >
        <Link to="/contact" className="inline-flex items-center gap-2 border border-accent bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground">
          Schedule a consultation →
        </Link>
      </PageHeader>

      <Section>
        <div className="grid gap-px overflow-hidden border border-border bg-border/60 md:grid-cols-2">
          {services.map((s) => (
            <article key={s.n} className="group relative bg-background p-8 transition-colors hover:bg-card md:p-12">
              <div className="flex items-start justify-between">
                <span className="eyebrow">{s.n}</span>
                <span aria-hidden className="text-accent opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100">→</span>
              </div>
              <h3 className="mt-6 font-display text-2xl text-foreground md:text-3xl">{s.t}</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">{s.d}</p>
              <div className="hairline my-8" />
              <ul className="grid grid-cols-2 gap-3 text-sm text-muted-foreground">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-accent" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>
    </main>
  );
}
