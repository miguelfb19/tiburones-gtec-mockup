import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { CTA } from '@/components/sections/CTA';
import { Customers } from '@/components/sections/Customers';


export default function HomePage() {
  return (
    <main suppressHydrationWarning>
      <Hero />
      <Services />
      <Customers />
      <CTA />
    </main>
  );
}
