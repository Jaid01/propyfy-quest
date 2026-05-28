import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Section } from "@/components/site/Section";
import { projects } from "@/lib/projects-data";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  component: ProjectPage,
  head: ({ loaderData, params }) => {
    const p = loaderData?.project;
    const title = p ? `${p.name} — PropyFy` : "Project — PropyFy";
    const description = p ? `${p.tagline} ${p.location}. ${p.size}.` : "Premium commercial project.";
    const url = `https://propyfy-quest.lovable.app/projects/${params.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  notFoundComponent: () => (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="text-center">
        <p className="eyebrow">Not found</p>
        <h1 className="mt-4 font-display text-4xl">Project not available</h1>
        <Link to="/projects" className="mt-8 inline-flex border border-accent bg-accent px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground">
          Back to projects
        </Link>
      </div>
    </main>
  ),
  errorComponent: ({ error, reset }) => (
    <main className="flex min-h-screen items-center justify-center px-4 text-center">
      <div>
        <h1 className="font-display text-3xl">Couldn't load project</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
        <button onClick={reset} className="mt-6 border border-accent bg-accent px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground">Retry</button>
      </div>
    </main>
  ),
});

function ProjectPage() {
  const { project } = Route.useLoaderData();

  return (
    <main>
      <PageHeader
        eyebrow={`${project.category} · ${project.location}`}
        title={<>{project.name}<br /><span className="text-gradient">{project.tagline}</span></>}
        intro={<p>{project.description}</p>}
      >
        <div className="flex flex-wrap gap-3">
          <Link to="/contact" className="inline-flex items-center gap-2 border border-accent bg-accent px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground">Schedule presentation →</Link>
          <a href="mailto:Zaid@PropyFy.in" className="inline-flex items-center gap-2 border border-border px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-foreground hover:bg-card">Request brochure</a>
        </div>
      </PageHeader>

      <Section>
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="relative aspect-[16/10] overflow-hidden border border-border bg-card">
              <div className="absolute inset-0 grid-bg opacity-50" />
              <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_50%,oklch(0.68_0.20_250/0.2),transparent_70%)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="eyebrow">Immersive preview</p>
                  <p className="mt-3 font-display text-2xl text-foreground">VR walkthrough · Coming soon</p>
                  <Link to="/immersive" className="mt-6 inline-flex border border-accent bg-accent px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground">
                    Explore Immersive Layer
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <p className="eyebrow">Investment highlights</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {project.highlights.map((h: string) => (
                  <li key={h} className="flex items-start gap-3 border border-border bg-card/40 p-4 text-sm text-foreground">
                    <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <p className="eyebrow">Amenities</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.amenities.map((a: string) => (
                  <span key={a} className="border border-border bg-card/40 px-3 py-1.5 text-xs text-foreground">{a}</span>
                ))}
              </div>
            </div>
          </div>

          <aside className="md:col-span-5">
            <div className="sticky top-28 border border-border bg-card/40 p-8">
              <p className="eyebrow">At a glance</p>
              <dl className="mt-6 divide-y divide-border">
                {[
                  ["Developer", project.developer],
                  ["Category", project.category],
                  ["Location", project.location],
                  ["Size", project.size],
                  ["Status", project.status],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-6 py-4 text-sm">
                    <dt className="text-muted-foreground">{k}</dt>
                    <dd className="text-right font-display text-foreground">{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 space-y-3">
                <Link to="/contact" className="block w-full border border-accent bg-accent px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground">Enquire now →</Link>
                <a href="tel:+918299808996" className="block w-full border border-border px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-foreground hover:bg-card">Call advisor</a>
              </div>
            </div>
          </aside>
        </div>
      </Section>

      <Section eyebrow="Related" title={<>More <span className="text-gradient">commercial</span> opportunities.</>}>
        <div className="grid gap-px border border-border bg-border/60 md:grid-cols-3">
          {projects.filter((p) => p.slug !== project.slug).slice(0, 3).map((p) => (
            <Link key={p.slug} to="/projects/$slug" params={{ slug: p.slug }} className="group bg-background p-8 transition-colors hover:bg-card">
              <span className="eyebrow">{p.category}</span>
              <h3 className="mt-4 font-display text-xl text-foreground group-hover:text-accent">{p.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.location}</p>
            </Link>
          ))}
        </div>
      </Section>
    </main>
  );
}
