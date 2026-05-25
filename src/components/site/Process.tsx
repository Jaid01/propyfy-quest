import experience from "@/assets/experience-centre.jpg";
import { Section } from "./Section";

const steps = [
  { t: "Understand Your Requirement", d: "We analyze your business and investment objectives." },
  { t: "Curate Suitable Opportunities", d: "We identify projects aligned with your goals." },
  { t: "Deliver Immersive Experiences", d: "Experience projects through modern presentation systems." },
  { t: "Support Better Decision-Making", d: "We assist clients throughout the evaluation and advisory process." },
];

export function Process() {
  return (
    <Section
      id="process"
      eyebrow="How We Work"
      title={
        <>
          A measured, <em className="font-light italic text-gold">cinematic</em> process.
        </>
      }
    >
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-6">
          <ol className="space-y-2">
            {steps.map((s, i) => (
              <li
                key={s.t}
                className="grid grid-cols-[auto_1fr] gap-6 border-t border-border py-6 last:border-b"
              >
                <span className="font-display text-sm tabular-nums text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-xl text-cream md:text-2xl">{s.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {s.d}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <div className="md:col-span-6">
          <div className="sticky top-24">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={experience}
                alt="PropyFy immersive experience centre with LED screen"
                loading="lazy"
                width={1600}
                height={1100}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background to-transparent p-6">
                <p className="eyebrow">Experience Centre</p>
                <p className="mt-2 font-display text-xl text-cream">
                  Cinematic showcases engineered for commercial decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
