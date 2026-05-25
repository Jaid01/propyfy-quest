import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Why } from "@/components/site/Why";
import { Sectors } from "@/components/site/Sectors";
import { Process } from "@/components/site/Process";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "PropyFy — Commercial Real Estate Advisory & Immersive Experiences" },
      {
        name: "description",
        content:
          "PropyFy helps businesses and investors discover premium commercial spaces through advisory and immersive project experiences. Mumbai, India.",
      },
      { property: "og:title", content: "PropyFy — Commercial Real Estate, Reimagined" },
      {
        property: "og:description",
        content:
          "Premium commercial property advisory combined with immersive, cinematic project experiences.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="relative bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Why />
      <Sectors />
      <Process />
      <CTA />
      <Footer />
    </main>
  );
}
