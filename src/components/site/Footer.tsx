import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="container-px mx-auto max-w-7xl pb-6">
      <div className="surface-card grid gap-10 p-8 md:grid-cols-12 md:p-12">
        <div className="md:col-span-5">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-foreground text-card">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M2 12V4l5-2 5 2v8" stroke="currentColor" strokeWidth="1.4"/>
                <path d="M5 12V7h4v5" stroke="currentColor" strokeWidth="1.4"/>
              </svg>
            </span>
            <span className="font-display text-sm font-semibold tracking-[0.18em]">PROPYFY</span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Commercial real estate advisory, channel partner network and immersive technology
            for investors, developers and enterprise clients.
          </p>
        </div>

        <div className="md:col-span-3">
          <p className="eyebrow mb-4">Platform</p>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/about" className="text-foreground hover:text-primary">About</Link></li>
            <li><Link to="/projects" className="text-foreground hover:text-primary">Catalog</Link></li>
            <li><Link to="/services" className="text-foreground hover:text-primary">Services</Link></li>
            <li><Link to="/experience-centre" className="text-foreground hover:text-primary">Experience Centre</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="eyebrow mb-4">Contact</p>
          <ul className="space-y-2.5 text-sm">
            <li><a href="tel:+918299808996" className="text-foreground hover:text-primary">+91 8299808996</a></li>
            <li><a href="mailto:Zaid@PropyFy.in" className="text-foreground hover:text-primary">Zaid@PropyFy.in</a></li>
            <li className="text-muted-foreground">Mount Mary, Bandra West, Mumbai 400050</li>
          </ul>
        </div>

        <div className="md:col-span-12 flex flex-col justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} PROPYFY. All rights reserved.</span>
          <span>Commercial Advisory · Channel Partner · Immersive Tech</span>
        </div>
      </div>
    </footer>
  );
}
