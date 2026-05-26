export function CTA() {
  return (
    <section id="contact" className="relative isolate overflow-hidden border-y border-border">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_50%_0%,oklch(0.78_0.13_78/0.18),transparent_70%)]" />
      <div className="container-px mx-auto max-w-7xl py-28 md:py-40">
        <div className="max-w-4xl">
          <p className="eyebrow">Get in touch</p>
          <h2 className="mt-6 font-display text-[clamp(2.25rem,5.5vw,5rem)] leading-[1.02] text-cream">
            Looking for the right{" "}
            <em className="font-light italic text-gold">commercial space?</em>
          </h2>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Connect with PropyFy to explore premium commercial opportunities through modern
            advisory and immersive project experiences.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="mailto:Zaid@PropyFy.in"
              className="group inline-flex items-center gap-3 bg-gold px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-gold-foreground transition-transform hover:-translate-y-0.5"
            >
              Schedule Consultation
              <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="mailto:Zaid@PropyFy.in"
              className="text-sm text-muted-foreground underline decoration-gold/40 underline-offset-8 transition-colors hover:text-cream"
            >
              Zaid@PropyFy.in
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
