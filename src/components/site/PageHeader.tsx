import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";

export function PageHeader({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="relative isolate overflow-hidden border-b border-border pt-32 md:pt-40">
      <div className="absolute inset-0 -z-10 grid-bg opacity-50" />
      <div className="absolute -top-20 left-1/4 -z-10 h-72 w-72 rounded-full bg-accent/20 blur-[120px]" />
      <div className="absolute -bottom-32 right-0 -z-10 h-80 w-80 rounded-full bg-accent/10 blur-[140px]" />

      <div className="container-px mx-auto max-w-7xl pb-20 md:pb-28">
        <p data-reveal="fade" className="eyebrow">{eyebrow}</p>
        <h1
          data-reveal
          style={{ ["--reveal-delay" as never]: "120ms" }}
          className="mt-6 max-w-5xl font-display text-[clamp(2.5rem,7vw,6rem)] font-light leading-[0.95] tracking-tight text-foreground"
        >
          {title}
        </h1>
        {intro && (
          <div
            data-reveal
            style={{ ["--reveal-delay" as never]: "260ms" }}
            className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            {intro}
          </div>
        )}
        {children && (
          <div data-reveal style={{ ["--reveal-delay" as never]: "400ms" }} className="mt-10">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
