import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import officeImg from "@/assets/catalog-office.jpg";
import warehouseImg from "@/assets/catalog-warehouse.jpg";
import landImg from "@/assets/catalog-land.jpg";
import processImg from "@/assets/process-building.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "PROPYFY — Commercial Real Estate for Business" },
      { name: "description", content: "Leasing, sale and sourcing of commercial property — Grade-A offices, warehouses and land plots across India." },
      { property: "og:title", content: "PROPYFY — Commercial Real Estate for Business" },
      { property: "og:description", content: "Commercial real estate advisory, channel partner and immersive technology for investors and enterprise clients." },
      { property: "og:url", content: "https://propyfy-quest.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://propyfy-quest.lovable.app/" }],
  }),
});

const stats = [
  { k: "10+", v: "Years on the market" },
  { k: "1000+", v: "Successful deals" },
  { k: "4000+", v: "Properties in our base" },
  { k: "95%", v: "Happy clients" },
];

const catalog = [
  { img: officeImg, title: "Office spaces", count: "4000+ properties", to: "/projects" },
  { img: warehouseImg, title: "Warehouses", count: "1000+ properties", to: "/projects" },
  { img: landImg, title: "Land plots", count: "2000+ properties", to: "/projects" },
];

const process = [
  { t: "Consultation & needs analysis", d: "We start by understanding what type of commercial property fits your business." },
  { t: "Search & shortlist", d: "We surface only verified properties that match your budget and goals." },
  { t: "Inspection & evaluation", d: "We arrange viewings and provide a full property breakdown." },
  { t: "Documents & due diligence", d: "Comprehensive review of every document and ownership chain." },
  { t: "Deal closing", d: "Full support from negotiation through to handover." },
];

const testimonials = [
  { name: "Ekaterina I.", role: "Founder, Lumen Retail", quote: "PROPYFY handled our office relocation end-to-end. Sharp shortlist, smooth paperwork, zero surprises." },
  { name: "Arjun M.", role: "MD, Northbridge Capital", quote: "The advisory and the immersive walkthroughs made our investor presentations dramatically faster." },
];

function Index() {
  return (
    <main>
      <Hero />

      {/* About + stats */}
      <Section variant="card">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <div className="eyebrow mb-3">About us</div>
            <h2 className="font-display text-3xl font-medium leading-tight text-foreground md:text-5xl">About PROPYFY</h2>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base">
              We are an expert commercial real estate advisory that helps businesses find the right
              property for lease or purchase. We provide an end-to-end service — from sourcing the
              ideal property through full legal support.
            </p>
          </div>
          <div className="md:col-span-6">
            <div className="grid grid-cols-2 gap-x-10 gap-y-8">
              {stats.map((s) => (
                <div key={s.k}>
                  <div className="font-display text-4xl font-medium text-foreground md:text-5xl">{s.k}</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-border pt-8 text-muted-foreground/80">
          {["ANAROCK", "JLL", "CBRE", "SAVILLS", "KNIGHT FRANK"].map((b) => (
            <span key={b} className="font-display text-sm tracking-[0.2em]">{b}</span>
          ))}
        </div>
      </Section>

      {/* Catalog */}
      <Section variant="card">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="eyebrow mb-3">Catalog</div>
            <h2 className="font-display text-3xl font-medium leading-tight text-foreground md:text-5xl">
              Property<br />catalog
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A broad selection of commercial real estate for your business.
            </p>
          </div>
          <div className="md:col-span-8 grid gap-4 sm:grid-cols-3">
            {catalog.map((c) => (
              <Link key={c.title} to={c.to} className="group overflow-hidden rounded-2xl bg-muted">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={c.img} alt={c.title} width={800} height={600} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-4">
                  <div className="font-display text-base text-foreground">{c.title}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{c.count}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-end gap-3">
          <button className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground hover:bg-muted" aria-label="Previous">←</button>
          <button className="grid h-10 w-10 place-items-center rounded-full border border-border text-foreground hover:bg-muted" aria-label="Next">→</button>
        </div>
      </Section>

      {/* Process */}
      <Section variant="card">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="eyebrow mb-3">How we work</div>
            <h2 className="font-display text-3xl font-medium leading-tight text-foreground md:text-5xl">How we work</h2>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              We made the process of working with us as simple and transparent as possible.
            </p>
            <div className="relative mt-8 overflow-hidden rounded-2xl">
              <img src={processImg} alt="Modern white commercial building" width={900} height={1100} loading="lazy" className="h-[420px] w-full object-cover" />
              <div className="absolute right-4 top-4 grid h-24 w-24 place-items-center rounded-full bg-card text-center text-[0.62rem] font-medium uppercase tracking-[0.12em] text-foreground shadow-lg">
                Free<br/>consultation
              </div>
            </div>
          </div>
          <div className="md:col-span-7">
            <ul className="divide-y divide-border">
              {process.map((p, i) => (
                <li key={p.t} className="flex gap-5 py-5 first:pt-0">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-foreground text-card text-sm font-medium">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <div className="font-display text-base text-foreground md:text-lg">{p.t}</div>
                    <p className="mt-1 text-sm text-muted-foreground">{p.d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section variant="card">
        <div className="eyebrow mb-3">Testimonials</div>
        <h2 className="font-display text-3xl font-medium leading-tight text-foreground md:text-5xl">What clients say</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-2xl bg-muted p-6 md:p-8">
              <span className="font-display text-3xl text-primary">“</span>
              <blockquote className="mt-2 text-sm leading-relaxed text-foreground md:text-base">{t.quote}</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-foreground text-card text-xs">{t.name[0]}</div>
                <div>
                  <div className="text-sm font-medium text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section variant="card">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <div className="eyebrow mb-3">Get in touch</div>
            <h2 className="font-display text-3xl font-medium leading-[1.05] text-foreground md:text-5xl">
              Let's discuss<br/>your project
            </h2>
            <p className="mt-5 max-w-md text-sm text-muted-foreground md:text-base">
              Questions, suggestions or ready to start? Leave your details and we'll be in touch shortly.
            </p>
          </div>
          <form className="md:col-span-5 space-y-3" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your name" className="w-full rounded-full border border-border bg-card px-5 py-3.5 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none" />
            <input type="tel" placeholder="Phone number" className="w-full rounded-full border border-border bg-card px-5 py-3.5 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none" />
            <button type="submit" className="btn-primary w-full justify-center">Send enquiry →</button>
            <p className="px-2 text-[0.7rem] text-muted-foreground">By submitting, you agree to our privacy policy.</p>
          </form>
        </div>
      </Section>
    </main>
  );
}
