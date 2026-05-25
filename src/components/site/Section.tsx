import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = "",
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative ${className}`}>
      <div className="container-px mx-auto max-w-7xl py-24 md:py-32">
        {(eyebrow || title || intro) && (
          <div className="mb-16 grid gap-10 md:mb-20 md:grid-cols-12">
            <div className="md:col-span-5">
              {eyebrow && <p className="eyebrow">{eyebrow}</p>}
              {title && (
                <h2 className="mt-5 font-display text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.02] text-cream">
                  {title}
                </h2>
              )}
            </div>
            {intro && (
              <div className="text-base leading-relaxed text-muted-foreground md:col-span-6 md:col-start-7 md:text-lg">
                {intro}
              </div>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
