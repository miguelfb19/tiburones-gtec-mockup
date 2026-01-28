import { AboutHero } from "@/components/sections/about-us/AboutHero";
import { OurStory } from "@/components/sections/about-us/OurStory";
import { Mission } from "@/components/sections/about-us/Mission";
import { Values } from "@/components/sections/about-us/Values";
import { Team } from "@/components/sections/about-us/Team";
import { Timeline } from "@/components/sections/about-us/Timeline";
import { Stats } from "@/components/sections/about-us/Stats";
import { CTA } from "@/components/sections/CTA";
import { getDictionary, hasLocale, type Locale } from '@/lib/dictionaries';
import { notFound } from 'next/navigation';

export const metadata = {
  title: "Sobre Nosotros | GTEC",
  description:
    "Conoce más sobre GTEC, nuestra historia, misión, valores y el equipo que hace posible nuestras soluciones tecnológicas.",
};

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default async function AboutUsPage({ params }: PageProps) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang as Locale);

  return (
    <main suppressHydrationWarning>
      <AboutHero dict={dict} />
      <Stats dict={dict} />
      <OurStory dict={dict} />
      <Mission dict={dict} />
      <Values dict={dict} />
      <Timeline dict={dict} />
      <Team dict={dict} />
      <CTA dict={dict} />
    </main>
  );
}
