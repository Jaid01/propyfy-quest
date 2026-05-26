import { useEffect, useState } from "react";

export function Nav() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#why", label: "Why PropyFy" },
    { href: "#sectors", label: "Sectors" },
    { href: "#process", label: "Process" },
  ];
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/60 bg-background/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div
        className={`container-px mx-auto flex max-w-7xl items-center justify-between transition-all duration-500 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        <a href="#top" className="group flex items-baseline gap-2">
          <span className="font-display text-2xl tracking-tight text-cream">PropyFy</span>
          <span className="h-1.5 w-1.5 rounded-full bg-gold transition-transform group-hover:scale-150" />
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-cream after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
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
