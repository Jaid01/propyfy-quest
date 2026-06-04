import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";

const links = [
  { to: "/about", label: "About" },
  { to: "/projects", label: "Catalog" },
  { to: "/services", label: "Services" },
  { to: "/experience-centre", label: "Experience" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => { setOpen(false); }, [path]);

  return (
    <header className="container-px mx-auto max-w-7xl pt-4 md:pt-6">
      <div className="surface-card flex items-center justify-between px-4 py-3 md:px-6 md:py-4">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-foreground text-card">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M2 12V4l5-2 5 2v8" stroke="currentColor" strokeWidth="1.4"/>
              <path d="M5 12V7h4v5" stroke="currentColor" strokeWidth="1.4"/>
            </svg>
          </span>
          <span className="leading-tight">
            <span className="block font-display text-sm font-semibold tracking-[0.18em] text-foreground">PROPYFY</span>
            <span className="block text-[0.6rem] uppercase tracking-[0.18em] text-muted-foreground">Commercial Real Estate</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: "text-foreground" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="text-sm transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/contact" className="hidden text-sm text-foreground hover:text-primary md:inline-flex">
            +91 8299808996
          </Link>
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-border lg:hidden"
          >
            <span className="relative block h-2.5 w-4">
              <span className={`absolute left-0 right-0 top-0 h-px bg-current transition-transform ${open ? "translate-y-[5px] rotate-45" : ""}`} />
              <span className={`absolute left-0 right-0 bottom-0 h-px bg-current transition-transform ${open ? "-translate-y-[5px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="surface-card mt-2 p-4 lg:hidden">
          <nav className="flex flex-col">
            {links.map((l) => (
              <Link key={l.to} to={l.to} className="border-b border-border py-3 font-display text-base text-foreground last:border-0 hover:text-primary">
                {l.label}
              </Link>
            ))}
            <Link to="/contact" className="btn-primary mt-4 justify-center">
              Schedule Consultation →
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
