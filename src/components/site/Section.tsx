import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";

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
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} id={id} className={`relative ${className}`}>
      <div className="container-px mx-auto max-w-7xl py-24 md:py-32">
        {(eyebrow || title || intro) && (
          <div className="mb-16 grid gap-10 md:mb-20 md:grid-cols-12">
            <div className="md:col-span-5">
              {eyebrow && (
                <p className="eyebrow" data-reveal="fade">
                  {eyebrow}
                </p>
              )}
              {title && (
                <h2
                  data-reveal
                  style={{ ["--reveal-delay" as any]: "80ms" }}
                  className="mt-5 font-display text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.02] text-cream"
                >
                  {title}
                </h2>
              )}
            </div>
            {intro && (
              <div
                data-reveal
                style={{ ["--reveal-delay" as any]: "200ms" }}
                className="text-base leading-relaxed text-muted-foreground md:col-span-6 md:col-start-7 md:text-lg"
              >
                {intro}
              </div>
            )}
          </div>
        )}
        <div data-reveal style={{ ["--reveal-delay" as any]: "260ms" }}>
          {children}
        </div>
      </div>
    </section>
  );
}
