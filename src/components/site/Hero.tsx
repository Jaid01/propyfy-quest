import heroImg from "@/assets/hero-tower.jpg";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Modern Grade-A commercial tower at dusk"
          width={1920}
          height={1280}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.13_0.018_180/0.85)_0%,oklch(0.13_0.018_180/0.55)_45%,oklch(0.13_0.018_180/0.95)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_30%,oklch(0.78_0.13_78/0.18),transparent_70%)]" />
      </div>

      <div className="container-px mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end pb-16 pt-40 md:pb-24">
        <div className="max-w-4xl">
          <p className="eyebrow mb-6">Commercial Real Estate · Mumbai</p>
          <h1 className="font-display text-[clamp(2.75rem,7vw,6.25rem)] leading-[0.95] text-cream">
            Redefining{" "}
            <em className="font-light italic text-gold">commercial</em>{" "}
            real estate experiences.
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            From Grade-A office spaces to retail developments and investment-focused projects,
            PropyFy combines advisory expertise with immersive showcasing to help businesses
            and investors make smarter property decisions.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#sectors"
              className="group inline-flex items-center gap-3 bg-gold px-7 py-4 text-xs font-medium uppercase tracking-[0.2em] text-gold-foreground transition-transform hover:-translate-y-0.5"
            >
              Explore Projects
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 border border-cream/30 px-7 py-4 text-xs font-medium uppercase tracking-[0.2em] text-cream transition-colors hover:border-cream hover:bg-cream/5"
            >
              Book Consultation
            </a>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden border-y border-border bg-border/60 md:mt-28 md:grid-cols-4">
          {[
            ["Advisory", "Commercial-first"],
            ["Immersive", "VR · Cinematic"],
            ["Sectors", "Office · Retail · Mixed-Use"],
            ["Based in", "Mumbai, India"],
          ].map(([k, v]) => (
            <div key={k} className="bg-background p-6">
              <div className="eyebrow text-[0.6rem]">{k}</div>
              <div className="mt-2 font-display text-lg text-cream">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
