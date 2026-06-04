import type { ReactNode } from "react";

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
  return (
    <section className="container-px mx-auto max-w-7xl py-6 md:py-8">
      <div className="surface-card p-8 md:p-14">
        <p data-reveal="fade" className="eyebrow">{eyebrow}</p>
        <h1
          data-reveal
          style={{ ["--reveal-delay" as never]: "120ms" }}
          className="mt-5 max-w-4xl font-display text-[clamp(2.25rem,6vw,5rem)] font-medium leading-[0.98] tracking-tight text-foreground"
        >
          {title}
        </h1>
        {intro && (
          <div
            data-reveal
            style={{ ["--reveal-delay" as never]: "260ms" }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground"
          >
            {intro}
          </div>
        )}
        {children && (
          <div data-reveal style={{ ["--reveal-delay" as never]: "400ms" }} className="mt-8">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
