import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { Marquee } from "@/components/site/Marquee";
import experienceImg from "@/assets/experience-noir.jpg";
import lobbyImg from "@/assets/lobby-noir.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "PropyFy — Commercial Real Estate Advisory & Immersive Technology" },
      { name: "description", content: "Commercial real estate advisory and immersive technology solutions for investors, developers and enterprise clients. Grade-A offices, retail, mixed-use and investment projects." },
      { property: "og:title", content: "PropyFy — Redefining Commercial Real Estate" },
      { property: "og:description", content: "Advisory, channel partner and immersive proptech for premium commercial real estate." },
      { property: "og:url", content: "https://propyfy-quest.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://propyfy-quest.lovable.app/" }],
  }),
});

const pillars = [
  { n: "01", title: "Commercial Advisory", body: "Strategic advisory for offices, retail, mixed-use and investment-grade commercial assets.", to: "/services" },
  { n: "02", title: "Channel Partner Network", body: "Pan-India channel partner infrastructure across developers, occupiers and investors.", to: "/services" },
  { n: "03", title: "Immersive Experiences", body: "VR walkthroughs, AV experience centres and cinematic project showcases.", to: "/immersive" },
  { n: "04", title: "Technology Layer", body: "AI-powered recommendations, intelligent search and digital presentation ecosystem.", to: "/technology" },
];

const services = [
  "Commercial Property Advisory",
  "Office & Retail Space Consulting",
  "Commercial Leasing Support",
  "Investment Advisory",
  "VR Walkthrough Experiences",
  "Experience Centre Solutions",
  "Investor Presentation Systems",
  "Channel Partner Services",
];

function Index() {
  return (
    <main id="next">
      <Hero />
      <Marquee />

      {/* Pillars */}
      <Section
        eyebrow="The PropyFy Platform"
        title={<>An enterprise platform for <span className="text-gradient">modern commercial real estate.</span></>}
        intro={<p>Four integrated pillars built to help investors, developers and enterprise occupiers move faster and decide with confidence.</p>}
      >
        <div className="grid gap-px overflow-hidden border border-border bg-border/60 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <Link
              key={p.n}
              to={p.to}
              className="group relative bg-background p-8 transition-colors hover:bg-card md:p-10"
            >
              <div className="flex items-start justify-between">
                <span className="eyebrow">{p.n}</span>
                <span aria-hidden className="text-accent opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100">→</span>
              </div>
              <h3 className="mt-6 font-display text-xl text-foreground transition-colors group-hover:text-accent md:text-2xl">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* Experience Centre teaser */}
      <Section
        eyebrow="Immersive Experience"
        title={<>Experience commercial real estate <span className="text-gradient">differently.</span></>}
      >
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img src={experienceImg} alt="PropyFy AV experience centre with curved LED wall" width={1600} height={1000} loading="lazy" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="eyebrow">Experience Centre · Mumbai</p>
                <p className="mt-2 max-w-md font-display text-2xl text-foreground">Curved LED, spatial audio and immersive project storytelling — built for enterprise decision-making.</p>
              </div>
            </div>
          </div>
          <div className="md:col-span-5 md:pt-6">
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              From VR walkthroughs to cinematic project narratives, the PropyFy Experience Centre is engineered to help investors and enterprise occupiers truly understand a commercial asset before committing.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/experience-centre" className="inline-flex items-center gap-2 border border-accent bg-accent px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground">
                Visit the Centre →
              </Link>
              <Link to="/immersive" className="inline-flex items-center gap-2 border border-border px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-foreground hover:bg-card">
                Immersive Layer
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Services */}
      <Section
        eyebrow="What we do"
        title={<>A full-stack <span className="text-gradient">commercial</span> advisory.</>}
        intro={<p>Eight focused service lines across advisory, leasing, investment and immersive marketing — delivered as one integrated platform.</p>}
      >
        <div className="grid gap-px border border-border bg-border/60 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <div key={s} className="group bg-background p-6 transition-colors hover:bg-card">
              <span className="font-display text-xs tabular-nums text-accent">{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-4 font-display text-base text-foreground transition-colors group-hover:text-accent">{s}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <Link to="/services" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground hover:text-accent">
            See all services <span aria-hidden>→</span>
          </Link>
        </div>
      </Section>

      {/* About teaser */}
      <Section
        eyebrow="About PropyFy"
        title={<>Commercial advisory meets <span className="text-gradient">modern experience.</span></>}
      >
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden">
              <img src={lobbyImg} alt="Premium commercial lobby" width={1080} height={1600} loading="lazy" className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              PropyFy is built for the people who build, lease and invest in commercial real estate. We combine deep market expertise with a modern technology stack to make every step — discovery, evaluation, decision — clearer and faster.
            </p>
            <ul className="mt-10 divide-y divide-border border-y border-border">
              {[
                "Commercial-first advisory & channel partnership",
                "Pan-India developer & occupier relationships",
                "Immersive VR / AV presentation infrastructure",
                "Investor-grade analysis & deal structuring",
                "Technology-driven sales infrastructure",
              ].map((p, i) => (
                <li key={p} className="flex items-baseline gap-6 py-5">
                  <span className="font-display text-xs tabular-nums text-accent">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-display text-lg text-foreground md:text-xl">{p}</span>
                </li>
              ))}
            </ul>
            <Link to="/about" className="mt-10 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground hover:text-accent">
              About the company <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="relative isolate overflow-hidden border-y border-border">
        <div className="absolute inset-0 -z-10 grid-bg opacity-40" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_50%,oklch(0.68_0.20_250/0.18),transparent_70%)]" />
        <div className="container-px mx-auto max-w-7xl py-28 md:py-40">
          <div className="max-w-4xl">
            <p className="eyebrow">Get in touch</p>
            <h2 className="mt-6 font-display text-[clamp(2.25rem,5.5vw,5rem)] font-light leading-[1.02] tracking-tight text-foreground">
              Looking for the right{" "}
              <span className="text-gradient">commercial space?</span>
            </h2>
            <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
              Speak to an advisor, schedule a consultation, or visit the PropyFy Experience Centre in Mumbai.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link to="/contact" className="group inline-flex items-center gap-3 border border-accent bg-accent px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground transition-transform hover:-translate-y-0.5">
                Schedule Consultation
                <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <a href="mailto:Zaid@PropyFy.in" className="text-sm text-muted-foreground underline decoration-accent/40 underline-offset-8 hover:text-foreground">
                Zaid@PropyFy.in
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
