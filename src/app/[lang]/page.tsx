import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { CTA } from '@/components/sections/CTA';
import { Customers } from '@/components/sections/Customers';
import { getDictionary, hasLocale, type Locale } from '@/lib/dictionaries';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default async function HomePage({ params }: PageProps) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang as Locale);

  return (
    <main suppressHydrationWarning>
      <Hero dict={dict} />
      <Services dict={dict} />
      <Customers dict={dict} />
      <CTA dict={dict} />
    </main>
  );
}
