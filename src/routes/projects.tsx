import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Section } from "@/components/site/Section";
import { projects, categories, type ProjectCategory } from "@/lib/projects-data";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
  head: () => ({
    meta: [
      { title: "Commercial Projects — PropyFy" },
      { name: "description", content: "Curated Grade-A commercial real estate projects across offices, retail, mixed-use, hospitality and warehousing — with immersive previews and advisory support." },
      { property: "og:title", content: "Commercial Projects — PropyFy" },
      { property: "og:description", content: "Premium commercial projects across Mumbai and India." },
      { property: "og:url", content: "https://propyfy-quest.lovable.app/projects" },
    ],
    links: [{ rel: "canonical", href: "https://propyfy-quest.lovable.app/projects" }],
  }),
});

function ProjectsPage() {
  const [active, setActive] = useState<ProjectCategory | "All">("All");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchCat = active === "All" || p.category === active;
      const matchQ = q.trim() === "" ||
        p.name.toLowerCase().includes(q.toLowerCase()) ||
        p.location.toLowerCase().includes(q.toLowerCase()) ||
        p.developer.toLowerCase().includes(q.toLowerCase());
      return matchCat && matchQ;
    });
  }, [active, q]);

  return (
    <main>
      <PageHeader
        eyebrow="Projects"
        title={<>Curated commercial <span className="text-gradient">opportunities.</span></>}
        intro={<p>Browse PropyFy's curated portfolio across office, retail, mixed-use, hospitality and warehousing. Every project ships with an immersive preview and a dedicated advisor.</p>}
      />

      <Section>
        {/* Filters */}
        <div className="mb-12 flex flex-col gap-6 border-y border-border py-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-2">
            {(["All", ...categories] as const).map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`border px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] transition-colors ${
                  active === c
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="relative md:w-72">
            <input
              type="search"
              placeholder="Search by name, location, developer…"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              className="w-full border border-border bg-card/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/60"
            />
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="border border-border py-24 text-center">
            <p className="font-display text-2xl text-foreground">No matching projects</p>
            <p className="mt-2 text-sm text-muted-foreground">Try a different category or search term.</p>
          </div>
        ) : (
          <div className="grid gap-px border border-border bg-border/60 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => (
              <Link
                key={p.slug}
                to="/projects/$slug"
                params={{ slug: p.slug }}
                className="group flex flex-col bg-background p-8 transition-colors hover:bg-card"
              >
                <div className="flex items-center justify-between">
                  <span className="eyebrow">{p.category}</span>
                  <span aria-hidden className="text-accent opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100">→</span>
                </div>
                <h3 className="mt-6 font-display text-2xl text-foreground transition-colors group-hover:text-accent">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.location}</p>
                <p className="mt-6 text-sm leading-relaxed text-foreground/80">{p.tagline}</p>
                <div className="mt-auto pt-8">
                  <div className="hairline mb-4" />
                  <div className="flex justify-between text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                    <span>{p.size}</span>
                    <span className="text-foreground/80">{p.status}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </Section>
    </main>
  );
}
