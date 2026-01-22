import { AboutHero } from "@/components/sections/about-us/AboutHero";
import { OurStory } from "@/components/sections/about-us/OurStory";
import { Mission } from "@/components/sections/about-us/Mission";
import { Values } from "@/components/sections/about-us/Values";
import { Team } from "@/components/sections/about-us/Team";
import { Timeline } from "@/components/sections/about-us/Timeline";
import { Stats } from "@/components/sections/about-us/Stats";
import { CTA } from "@/components/sections/CTA";

export const metadata = {
  title: "Sobre Nosotros | GTEC",
  description:
    "Conoce más sobre GTEC, nuestra historia, misión, valores y el equipo que hace posible nuestras soluciones tecnológicas.",
};

export default function AboutUsPage() {
  return (
    <main suppressHydrationWarning>
      <AboutHero />
      <Stats />
      <OurStory />
      <Mission />
      <Values />
      <Timeline />
      <Team />
      <CTA />
    </main>
  );
}
