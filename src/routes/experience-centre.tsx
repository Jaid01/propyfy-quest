import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Section } from "@/components/site/Section";
import experienceImg from "@/assets/experience-noir.jpg";

export const Route = createFileRoute("/experience-centre")({
  component: ExperienceCentrePage,
  head: () => ({
    meta: [
      { title: "Experience Centre — PropyFy" },
      { name: "description", content: "The PropyFy Experience Centre is a futuristic AV presentation room engineered for premium commercial real estate decisions. Curved LED wall, spatial audio and immersive storytelling." },
      { property: "og:title", content: "Experience Centre — PropyFy" },
      { property: "og:description", content: "Premium AV presentation room in Mumbai." },
      { property: "og:url", content: "https://propyfy-quest.lovable.app/experience-centre" },
    ],
    links: [{ rel: "canonical", href: "https://propyfy-quest.lovable.app/experience-centre" }],
  }),
});

const specs = [
  ["Display", "Curved LED video wall · 8K"],
  ["Audio", "Spatial audio · Multi-channel"],
  ["VR", "Headset & web walkthroughs"],
  ["Seating", "Boardroom & cinema modes"],
  ["Lighting", "Ambient adaptive system"],
  ["Hospitality", "Concierge & F&B service"],
];

function ExperienceCentrePage() {
  return (
    <main>
      <PageHeader
        eyebrow="Experience Centre · Mumbai"
        title={<>Experience commercial real estate <span className="text-gradient">differently.</span></>}
        intro={<p>An enterprise-grade AV presentation room built to immerse investors and occupiers in projects before site visits. By appointment only.</p>}
      >
        <Link to="/contact" className="inline-flex items-center gap-2 border border-accent bg-accent px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground">
          Book a session →
        </Link>
      </PageHeader>

      <Section>
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="relative aspect-[16/11] overflow-hidden border border-border">
              <img src={experienceImg} alt="PropyFy experience centre with curved LED wall and ambient blue lighting" width={1600} height={1100} loading="lazy" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
          </div>
          <aside className="md:col-span-5 md:pt-4">
            <p className="eyebrow">Centre specifications</p>
            <dl className="mt-6 divide-y divide-border border-y border-border">
              {specs.map(([k, v]) => (
                <div key={k} className="flex justify-between gap-6 py-4 text-sm">
                  <dt className="text-muted-foreground">{k}</dt>
                  <dd className="text-right font-display text-base text-foreground">{v}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </Section>
    </main>
  );
}
