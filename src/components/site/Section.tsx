import type { ReactNode } from "react";

interface SectionProps {
  eyebrow?: ReactNode;
  title?: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  variant?: "default" | "card";
  id?: string;
}

export function Section({ eyebrow, title, intro, children, variant = "default", id }: SectionProps) {
  if (variant === "card") {
    return (
      <section id={id} className="container-px mx-auto max-w-7xl py-3 md:py-4">
        <div className="surface-card p-7 md:p-12">
          {(eyebrow || title || intro) && (
            <header className="mb-8 md:mb-12">
              {eyebrow && <div className="eyebrow mb-3">{eyebrow}</div>}
              {title && (
                <h2 className="font-display text-[clamp(2rem,4.5vw,3.5rem)] font-medium leading-[1.05] tracking-tight text-foreground">
                  {title}
                </h2>
              )}
              {intro && <div className="mt-4 max-w-2xl text-sm text-muted-foreground md:text-base">{intro}</div>}
            </header>
          )}
          {children}
        </div>
      </section>
    );
  }

  return (
    <section id={id} className="container-px mx-auto max-w-7xl py-14 md:py-20">
      {(eyebrow || title || intro) && (
        <header className="mb-10 md:mb-14">
          {eyebrow && <div className="eyebrow mb-3">{eyebrow}</div>}
          {title && (
            <h2 className="font-display text-[clamp(2rem,5vw,4rem)] font-medium leading-[1.05] tracking-tight text-foreground">
              {title}
            </h2>
          )}
          {intro && <div className="mt-4 max-w-2xl text-sm text-muted-foreground md:text-base">{intro}</div>}
        </header>
      )}
      {children}
    </section>
  );
}
