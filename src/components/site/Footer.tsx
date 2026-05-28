import { Link } from "@tanstack/react-router";

const cols = [
  {
    title: "Platform",
    links: [
      { to: "/services", label: "Services" },
      { to: "/projects", label: "Projects" },
      { to: "/immersive", label: "Immersive" },
      { to: "/experience-centre", label: "Experience Centre" },
    ],
  },
  {
    title: "Intelligence",
    links: [
      { to: "/technology", label: "Technology" },
      { to: "/research", label: "Research & Insights" },
      { to: "/about", label: "About" },
      { to: "/contact", label: "Contact" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-border bg-background">
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
      <div className="absolute -bottom-40 left-1/2 -z-10 h-80 w-[120%] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />

      <div className="container-px mx-auto max-w-7xl py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span className="font-display text-lg font-semibold tracking-[0.2em]">PROPYFY</span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Commercial Real Estate Channel Partner & Tech Advisory Firm. Helping investors,
              developers and enterprise clients discover, evaluate and acquire premium
              commercial real estate through immersive technology.
            </p>
            <div className="mt-8 space-y-2 text-sm">
              <a href="tel:+918299808996" className="block text-foreground hover:text-accent">+91 8299808996</a>
              <a href="mailto:Zaid@PropyFy.in" className="block text-foreground hover:text-accent">Zaid@PropyFy.in</a>
              <p className="text-muted-foreground">Mount Mary, Bandra West, Mumbai PIN-400050</p>
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title} className="md:col-span-3">
              <p className="eyebrow">{c.title}</p>
              <ul className="mt-5 space-y-3">
                {c.links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-sm text-foreground/80 transition-colors hover:text-accent">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-1" />
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} PropyFy. All rights reserved.</span>
          <span>Commercial Advisory · Channel Partner · Immersive Tech</span>
        </div>
      </div>
    </footer>
  );
}
