import lobby from "@/assets/about-lobby.jpg";
import { Section } from "./Section";

const pillars = [
  "Commercial property advisory",
  "Immersive project presentations",
  "Investor-focused showcasing",
  "Premium client experiences",
  "Technology-driven visualization",
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About PropyFy"
      title={
        <>
          Commercial advisory <br />
          meets <em className="font-light italic text-gold">modern experience.</em>
        </>
      }
      intro={
        <>
          <p>
            PropyFy is a commercial real estate advisory and experience-focused firm helping
            clients discover, evaluate and understand commercial properties through modern
            and immersive presentation systems.
          </p>
          <p className="mt-4">
            We believe commercial real estate should be more than static brochures and
            traditional site visits.
          </p>
        </>
      }
    >
      <div className="grid gap-10 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-6">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={lobby}
              alt="Premium commercial building lobby with marble and brass"
              loading="lazy"
              width={1600}
              height={2000}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>
        </div>
        <div className="md:col-span-6 md:pt-10">
          <p className="eyebrow mb-6">Our approach combines</p>
          <ul className="divide-y divide-border border-y border-border">
            {pillars.map((p, i) => (
              <li
                key={p}
                className="flex items-baseline gap-6 py-5 transition-colors hover:bg-cream/[0.02]"
              >
                <span className="font-display text-sm tabular-nums text-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-xl text-cream md:text-2xl">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
