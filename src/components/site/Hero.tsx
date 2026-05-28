import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-noir.jpg";
import { useReveal } from "@/hooks/use-reveal";

const stats = [
  ["Advisory", "Commercial-first"],
  ["Channel Partner", "Pan-India network"],
  ["Immersive", "VR · AV · Cinematic"],
  ["Based", "Mumbai, India"],
] as const;

export function Hero() {
  const ref = useReveal<HTMLElement>();
  return (
    <section
      ref={ref}
      id="top"
      className="vignette relative isolate overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src={heroImg}
          alt="Matte black commercial skyscraper lit with electric blue accent lighting"
          width={1920}
          height={1280}
          className="h-full w-full origin-center animate-kenburns object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.10_0_0/0.55)_0%,oklch(0.10_0_0/0.30)_45%,oklch(0.13_0_0/0.98)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(50%_60%_at_15%_30%,oklch(0.68_0.20_250/0.25),transparent_70%)]" />
        <div className="absolute inset-0 grid-bg opacity-30" />
      </div>

      <div className="container-px mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end pb-20 pt-36 md:pb-28 md:pt-40">
        <div className="max-w-5xl">
          <div className="mb-8 inline-flex items-center gap-3 border border-border bg-background/40 px-3 py-1.5 backdrop-blur-md" data-reveal="fade">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-glow" />
            <span className="text-[0.65rem] font-medium uppercase tracking-[0.25em] text-foreground/80">
              Commercial Real Estate · Channel Partner · Tech Advisory
            </span>
          </div>

          <h1
            data-reveal
            style={{ ["--reveal-delay" as never]: "120ms" }}
            className="font-display text-[clamp(2.75rem,8vw,7.5rem)] font-light leading-[0.92] tracking-tight text-foreground"
          >
            Redefining{" "}
            <span className="text-gradient">commercial</span>{" "}
            real estate experiences.
          </h1>

          <p
            data-reveal
            style={{ ["--reveal-delay" as never]: "300ms" }}
            className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            Commercial real estate advisory and immersive technology solutions designed for
            investors, developers and enterprise clients. From Grade-A offices to retail and
            mixed-use projects — experienced through VR, AV and cinematic presentation systems.
          </p>

          <div
            data-reveal
            style={{ ["--reveal-delay" as never]: "460ms" }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/projects"
              className="group relative inline-flex items-center gap-3 overflow-hidden border border-accent bg-accent px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              <span className="relative z-10">Explore Opportunities</span>
              <span aria-hidden className="relative z-10 transition-transform group-hover:translate-x-1">→</span>
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 border border-foreground/20 px-7 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-foreground transition-colors hover:border-foreground/60 hover:bg-foreground/5"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>

        <div
          data-reveal
          style={{ ["--reveal-delay" as never]: "620ms" }}
          className="mt-20 grid grid-cols-2 gap-px overflow-hidden border-y border-border bg-border/60 md:mt-28 md:grid-cols-4"
        >
          {stats.map(([k, v]) => (
            <div key={k} className="group bg-background/80 p-6 backdrop-blur-sm transition-colors hover:bg-card">
              <div className="eyebrow text-[0.6rem]">{k}</div>
              <div className="mt-2 font-display text-lg text-foreground transition-colors group-hover:text-accent">
                {v}
              </div>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#next"
        aria-label="Scroll"
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-[0.6rem] uppercase tracking-[0.3em] text-foreground/50 md:flex"
      >
        <span>Scroll</span>
        <span className="animate-pulse-down block h-8 w-px bg-accent/70" />
      </a>
    </section>
  );
}
