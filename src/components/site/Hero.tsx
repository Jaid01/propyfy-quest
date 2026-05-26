import heroImg from "@/assets/hero-tower.jpg";
import { useReveal } from "@/hooks/use-reveal";

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
          alt="Modern Grade-A commercial tower at dusk"
          width={1920}
          height={1280}
          className="h-full w-full origin-center animate-kenburns object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.13_0.018_180/0.88)_0%,oklch(0.13_0.018_180/0.45)_45%,oklch(0.13_0.018_180/0.98)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_30%,oklch(0.78_0.13_78/0.22),transparent_70%)]" />
      </div>

      <div className="container-px mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end pb-16 pt-40 md:pb-24">
        <div className="max-w-5xl">
          <p className="eyebrow mb-6" data-reveal="fade">
            Commercial Real Estate · Mumbai
          </p>
          <h1
            data-reveal
            style={{ ["--reveal-delay" as any]: "120ms" }}
            className="font-display text-[clamp(2.75rem,8vw,7.5rem)] leading-[0.92] text-cream"
          >
            Redefining{" "}
            <em className="font-light italic text-gold">commercial</em>{" "}
            real estate experiences.
          </h1>
          <p
            data-reveal
            style={{ ["--reveal-delay" as any]: "300ms" }}
            className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            From Grade-A office spaces to retail developments and investment-focused projects,
            PropyFy combines advisory expertise with immersive showcasing to help businesses
            and investors make smarter property decisions.
          </p>

          <div
            data-reveal
            style={{ ["--reveal-delay" as any]: "460ms" }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#sectors"
              className="group relative inline-flex items-center gap-3 overflow-hidden bg-gold px-7 py-4 text-xs font-medium uppercase tracking-[0.2em] text-gold-foreground transition-transform hover:-translate-y-0.5"
            >
              <span className="relative z-10">Explore Projects</span>
              <span aria-hidden className="relative z-10 transition-transform group-hover:translate-x-1">→</span>
              <span className="absolute inset-0 -translate-x-full bg-cream/90 transition-transform duration-500 ease-out group-hover:translate-x-0" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 border border-cream/30 px-7 py-4 text-xs font-medium uppercase tracking-[0.2em] text-cream transition-colors hover:border-cream hover:bg-cream/5"
            >
              Book Consultation
            </a>
          </div>
        </div>

        <div
          data-reveal
          style={{ ["--reveal-delay" as any]: "620ms" }}
          className="mt-20 grid grid-cols-2 gap-px overflow-hidden border-y border-border bg-border/60 md:mt-28 md:grid-cols-4"
        >
          {[
            ["Advisory", "Commercial-first"],
            ["Immersive", "VR · Cinematic"],
            ["Sectors", "Office · Retail · Mixed-Use"],
            ["Based in", "Mumbai, India"],
          ].map(([k, v]) => (
            <div
              key={k}
              className="group bg-background p-6 transition-colors hover:bg-card"
            >
              <div className="eyebrow text-[0.6rem]">{k}</div>
              <div className="mt-2 font-display text-lg text-cream transition-colors group-hover:text-gold">
                {v}
              </div>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll"
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-[0.6rem] uppercase tracking-[0.3em] text-cream/60 md:flex"
      >
        <span>Scroll</span>
        <span className="animate-pulse-down block h-8 w-px bg-gold/70" />
      </a>
    </section>
  );
}
