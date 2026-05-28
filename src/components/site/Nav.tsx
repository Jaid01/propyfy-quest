import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";

const links = [
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/immersive", label: "Immersive" },
  { to: "/experience-centre", label: "Experience Centre" },
  { to: "/technology", label: "Technology" },
  { to: "/research", label: "Research" },
  { to: "/about", label: "About" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [path]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/80 bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-px mx-auto flex h-16 max-w-7xl items-center justify-between md:h-20">
        <Link to="/" className="group flex items-center gap-2">
          <span className="relative inline-flex h-2 w-2 items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-accent" />
            <span className="absolute inset-0 animate-glow rounded-full bg-accent blur-md" />
          </span>
          <span className="font-display text-base font-semibold tracking-[0.18em] text-foreground">
            PROPYFY
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: "text-foreground" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="rounded-sm px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="group hidden items-center gap-2 border border-accent/60 bg-accent/10 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-foreground transition-all hover:bg-accent hover:text-accent-foreground md:inline-flex"
          >
            Schedule Consultation
            <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center border border-border text-foreground lg:hidden"
          >
            <span className="relative block h-2.5 w-4">
              <span className={`absolute left-0 right-0 top-0 h-px bg-current transition-transform ${open ? "translate-y-[5px] rotate-45" : ""}`} />
              <span className={`absolute left-0 right-0 bottom-0 h-px bg-current transition-transform ${open ? "-translate-y-[5px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile */}
      <div className={`overflow-hidden border-b border-border bg-background/95 backdrop-blur-xl transition-[max-height] duration-500 lg:hidden ${open ? "max-h-[480px]" : "max-h-0"}`}>
        <nav className="container-px mx-auto flex max-w-7xl flex-col py-4">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="border-b border-border/60 py-4 font-display text-lg text-foreground transition-colors hover:text-accent"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-4 inline-flex items-center justify-center gap-2 border border-accent bg-accent px-4 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-accent-foreground"
          >
            Schedule Consultation →
          </Link>
        </nav>
      </div>
    </header>
  );
}
