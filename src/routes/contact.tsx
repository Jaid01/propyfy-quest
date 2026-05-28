import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — PropyFy" },
      { name: "description", content: "Speak to a PropyFy advisor about commercial real estate opportunities, immersive presentations or channel partnerships. Mumbai, India." },
      { property: "og:title", content: "Contact — PropyFy" },
      { property: "og:description", content: "Schedule a consultation with PropyFy." },
      { property: "og:url", content: "https://propyfy-quest.lovable.app/contact" },
    ],
    links: [{ rel: "canonical", href: "https://propyfy-quest.lovable.app/contact" }],
  }),
});

const interests = [
  "Schedule consultation",
  "Request project presentation",
  "Book immersive experience",
  "Developer onboarding",
  "Investor enquiry",
  "Callback request",
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <main>
      <PageHeader
        eyebrow="Contact"
        title={<>Let's start a <span className="text-gradient">commercial</span> conversation.</>}
        intro={<p>Tell us what you're looking for — we'll route your enquiry to the right advisor and follow up within one business day.</p>}
      />

      <Section>
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            {submitted ? (
              <div className="border border-accent/40 bg-accent/5 p-10">
                <p className="eyebrow">Thank you</p>
                <h2 className="mt-4 font-display text-3xl text-foreground">We've received your enquiry.</h2>
                <p className="mt-3 text-muted-foreground">A PropyFy advisor will reach out within one business day. For urgent requests, call <a className="text-accent underline underline-offset-4" href="tel:+918299808996">+91 8299808996</a>.</p>
                <button onClick={() => setSubmitted(false)} className="mt-8 inline-flex items-center gap-2 border border-border px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-foreground hover:bg-card">
                  Send another →
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-6"
              >
                <Field label="Full name" name="name" required />
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Email" name="email" type="email" required />
                  <Field label="Phone" name="phone" type="tel" />
                </div>
                <Field label="Company" name="company" />

                <div>
                  <label className="eyebrow block">I'm interested in</label>
                  <select
                    name="interest"
                    required
                    defaultValue=""
                    className="mt-3 w-full border border-border bg-card/40 px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/60"
                  >
                    <option value="" disabled>Select an option</option>
                    {interests.map((i) => <option key={i} value={i}>{i}</option>)}
                  </select>
                </div>

                <div>
                  <label className="eyebrow block">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us about your requirement, project or investment thesis…"
                    className="mt-3 w-full resize-y border border-border bg-card/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/60"
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 border border-accent bg-accent px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent-foreground transition-transform hover:-translate-y-0.5"
                >
                  Send enquiry
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                </button>
                <p className="text-[0.7rem] text-muted-foreground">Note: this form is a UI prototype — backend lead capture ships in the next phase.</p>
              </form>
            )}
          </div>

          <aside className="md:col-span-5">
            <div className="space-y-10 border border-border bg-card/30 p-8 md:p-10">
              <div>
                <p className="eyebrow">Direct</p>
                <ul className="mt-5 space-y-3 text-base">
                  <li><a href="tel:+918299808996" className="text-foreground hover:text-accent">+91 8299808996</a></li>
                  <li><a href="mailto:Zaid@PropyFy.in" className="text-foreground hover:text-accent">Zaid@PropyFy.in</a></li>
                </ul>
              </div>
              <div>
                <p className="eyebrow">Studio</p>
                <p className="mt-5 text-foreground">Mount Mary, Bandra West</p>
                <p className="text-foreground">Mumbai, PIN-400050</p>
                <p className="mt-1 text-sm text-muted-foreground">By appointment</p>
              </div>
              <div>
                <p className="eyebrow">Working with PropyFy</p>
                <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                  <li>· Enterprise occupiers & corporates</li>
                  <li>· Institutional & HNI investors</li>
                  <li>· Developers & landowners</li>
                  <li>· Retail & hospitality brands</li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </Section>
    </main>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="eyebrow block" htmlFor={name}>{label}{required && " *"}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-3 w-full border border-border bg-card/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent/60"
      />
    </div>
  );
}
