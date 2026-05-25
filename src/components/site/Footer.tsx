export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-px mx-auto max-w-7xl py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-3xl text-cream">PropyFy</span>
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Commercial Real Estate Advisory & Experience Partner. Helping businesses and
              investors discover commercial opportunities through immersive experiences and
              modern advisory solutions.
            </p>
          </div>
          <div className="md:col-span-3">
            <p className="eyebrow">Studio</p>
            <p className="mt-4 text-cream">Mumbai, India</p>
            <p className="mt-1 text-sm text-muted-foreground">By appointment</p>
          </div>
          <div className="md:col-span-4">
            <p className="eyebrow">Connect</p>
            <ul className="mt-4 space-y-2 text-cream">
              <li>
                <a href="mailto:hello@propyfy.com" className="hover:text-gold">
                  hello@propyfy.com
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold">
                  Schedule a consultation →
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-xs uppercase tracking-[0.2em] text-muted-foreground md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} PropyFy. All rights reserved.</span>
          <span>Commercial Real Estate · Advisory · Experiences</span>
        </div>
      </div>
    </footer>
  );
}
