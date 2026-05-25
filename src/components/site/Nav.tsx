export function Nav() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#why", label: "Why PropyFy" },
    { href: "#sectors", label: "Sectors" },
    { href: "#process", label: "Process" },
  ];
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="container-px mx-auto flex h-20 max-w-7xl items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-2xl tracking-tight text-cream">PropyFy</span>
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-cream"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="group inline-flex items-center gap-2 border-b border-gold/40 pb-1 text-xs uppercase tracking-[0.2em] text-cream transition-colors hover:border-gold"
        >
          Book Consultation
          <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
        </a>
      </div>
    </header>
  );
}
