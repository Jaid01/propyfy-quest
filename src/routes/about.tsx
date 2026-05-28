import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Section } from "@/components/site/Section";
import lobbyImg from "@/assets/lobby-noir.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — PropyFy" },
      { name: "description", content: "PropyFy is a commercial real estate channel partner and technology advisory firm based in Mumbai. Built for investors, developers and enterprise occupiers." },
      { property: "og:title", content: "About — PropyFy" },
      { property: "og:description", content: "Commercial real estate advisory meets modern, immersive technology." },
      { property: "og:url", content: "https://propyfy-quest.lovable.app/about" },
    ],
    links: [{ rel: "canonical", href: "https://propyfy-quest.lovable.app/about" }],
  }),
});

const values = [
  { n: "01", t: "Commercial-first", d: "We focus exclusively on commercial real estate — offices, retail, mixed-use, hospitality and warehousing." },
  { n: "02", t: "Investor-aligned", d: "Our advisory is structured around the realities of yield, exit and risk that institutional capital cares about." },
  { n: "03", t: "Technology-native", d: "VR, AV, AI-driven recommendations and a modern presentation layer — built in, not bolted on." },
  { n: "04", t: "Experience-led", d: "We design the entire commercial decision journey as a premium, considered experience." },
];

function AboutPage() {
  return (
    <main>
      <PageHeader
        eyebrow="About PropyFy"
        title={<>A modern commercial real estate <span className="text-gradient">channel partner & tech advisory.</span></>}
        intro={<>
          <p>PropyFy is a Mumbai-headquartered commercial real estate advisory firm built for the next decade of investors, developers and enterprise occupiers. We combine deep market expertise with an immersive technology layer to make every commercial decision clearer and faster.</p>
        </>}
      />

      <Section
        eyebrow="What we stand for"
        title={<>Built on four <span className="text-gradient">non-negotiables.</span></>}
      >
        <div className="grid gap-px border border-border bg-border/60 md:grid-cols-2">
          {values.map((v) => (
            <div key={v.n} className="bg-background p-8 md:p-10">
              <span className="font-display text-xs tabular-nums text-accent">{v.n}</span>
              <h3 className="mt-4 font-display text-2xl text-foreground">{v.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">{v.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="The studio"
        title={<>An advisory studio, <span className="text-gradient">not a portal.</span></>}
        intro={<p>We work with a curated set of developers and clients at a time, so every engagement gets full attention from the leadership team.</p>}
      >
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img src={lobbyImg} alt="Commercial tower lobby" width={1080} height={1600} loading="lazy" className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="md:col-span-6 md:pt-6">
            <ul className="divide-y divide-border border-y border-border">
              {[
                ["Headquarters", "Mount Mary, Bandra West, Mumbai"],
                ["Founded", "Modern era of Indian proptech"],
                ["Geography", "Pan-India · MMR focused"],
                ["Sectors", "Office · Retail · Mixed-Use · Hospitality · Warehousing"],
                ["Experience Centre", "By appointment, Mumbai"],
              ].map(([k, v]) => (
                <li key={k} className="flex items-baseline justify-between gap-6 py-5">
                  <span className="eyebrow">{k}</span>
                  <span className="font-display text-base text-foreground md:text-lg">{v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </main>
  );
}
