import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-tower-light.jpg";

export function Hero() {
  return (
    <section className="container-px mx-auto max-w-7xl pt-6 md:pt-8">
      <div className="relative overflow-hidden rounded-[2rem] shadow-[0_30px_80px_-40px_rgba(20,40,80,0.45)]">
        <img
          src={heroImg}
          alt="Modern commercial tower against bright blue sky"
          width={1600}
          height={1000}
          className="h-[560px] w-full animate-kenburns object-cover md:h-[640px]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(10,30,60,0.65)_0%,rgba(10,30,60,0.25)_55%,transparent_85%)]" />

        <div className="absolute inset-0 flex flex-col justify-between p-7 md:p-12">
          <div className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.25em] text-white/80">
            <span className="rounded-full bg-white/15 px-2 py-1 backdrop-blur-md">02</span>
            <span className="rounded-full border border-white/30 px-3 py-1 backdrop-blur-md">Main Page</span>
          </div>

          <div className="max-w-2xl">
            <h1
              data-reveal
              className="font-display text-[clamp(2.5rem,7vw,5.5rem)] font-medium leading-[0.95] tracking-tight text-white"
            >
              Real Estate<br />for Business
            </h1>
            <p
              data-reveal
              style={{ ["--reveal-delay" as never]: "180ms" }}
              className="mt-5 max-w-md text-sm leading-relaxed text-white/85 md:text-base"
            >
              Leasing, sale and sourcing of commercial property —
              from Grade-A offices to warehouses and land plots across India.
            </p>
            <div
              data-reveal
              style={{ ["--reveal-delay" as never]: "320ms" }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Link to="/contact" className="btn-primary bg-card text-foreground hover:bg-white">
                Start working with us
                <span aria-hidden>→</span>
              </Link>
              <Link to="/projects" className="btn-ghost border-white/40 text-white hover:bg-white/10">
                View catalog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
