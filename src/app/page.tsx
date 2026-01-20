import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { CTA } from '@/components/sections/CTA';

export default function HomePage() {
  return (
    <main className="bg-white">
      <Header />
      <Hero />
      <Services />
      <CTA />
      <Footer />
    </main>
  );
}
