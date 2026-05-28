import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Section } from "@/components/site/Section";
import experienceImg from "@/assets/experience-noir.jpg";

export const Route = createFileRoute("/immersive")({
  component: ImmersivePage,
  head: () => ({
    meta: [
      { title: "Immersive Layer — PropyFy" },
      { name: "description", content: "VR walkthroughs, AV experience rooms and cinematic project showcases — the immersive technology layer powering PropyFy's commercial real estate experiences." },
      { property: "og:title", content: "Immersive Layer — PropyFy" },
      { property: "og:description", content: "VR, AV and cinematic experiences for commercial real estate." },
      { property: "og:url", content: "https://propyfy-quest.lovable.app/immersive" },
    ],
    links: [{ rel: "canonical", href: "https://propyfy-quest.lovable.app/immersive" }],
  }),
});

const layers = [
  { n: "01", t: "Photoreal VR Walkthroughs", d: "Photoreal headset and web VR for under-construction and ready commercial assets, with interactive floorplans." },
  { n: "02", t: "Cinematic Project Showcases", d: "Long-form cinematic films built around the project narrative, from arrival sequence to investment thesis." },
  { n: "03", t: "Interactive Presentation Layer", d: "Touch-driven layered presentations spanning master plan, units, amenities, and investment scenarios." },
  { n: "04", t: "Live Data Overlays", d: "Real-time absorption, pricing and lease velocity overlays for investor conversations." },
];

function ImmersivePage() {
  return (
    <main>
      <PageHeader
        eyebrow="Immersive Layer"
        title={<>The future of commercial real estate <span className="text-gradient">presentation.</span></>}
        intro={<p>PropyFy's immersive layer transforms how investors, developers and enterprise occupiers experience commercial real estate — long before site visits begin.</p>}
      />

      <section className="relative isolate overflow-hidden border-b border-border">
        <div className="absolute inset-0 -z-10">
          <img src={experienceImg} alt="Curved LED wall inside the PropyFy experience centre" width={1920} height={1100} loading="lazy" className="h-full w-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/80" />
        </div>
        <div className="container-px mx-auto max-w-7xl py-32 md:py-40">
          <div className="max-w-3xl">
            <p className="eyebrow">In the room</p>
            <h2 className="mt-6 font-display text-[clamp(2rem,5vw,4rem)] font-light leading-[1.02] tracking-tight text-foreground">
              Step into the project before the project exists.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              Curved LED walls, spatial audio, and interactive VR — built to make commercial real estate decisions clearer, faster and more confident.
            </p>
          </div>
        </div>
      </section>

      <Section eyebrow="Layers" title={<>Four immersive <span className="text-gradient">capabilities.</span></>}>
        <div className="grid gap-px border border-border bg-border/60 md:grid-cols-2">
          {layers.map((l) => (
            <div key={l.n} className="bg-background p-8 md:p-10">
              <span className="font-display text-xs tabular-nums text-accent">{l.n}</span>
              <h3 className="mt-4 font-display text-2xl text-foreground">{l.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">{l.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-4">
          <Link to="/experience-centre" className="inline-flex items-center gap-2 border border-accent bg-accent px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground">Visit the Experience Centre →</Link>
          <Link to="/contact" className="inline-flex items-center gap-2 border border-border px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-foreground hover:bg-card">Book an immersive demo</Link>
        </div>
      </Section>
    </main>
  );
}
