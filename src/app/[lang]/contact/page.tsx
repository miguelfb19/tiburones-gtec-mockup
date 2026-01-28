import { ContactMain } from '@/components/sections/contact/ContactMain';
import { Metadata } from 'next';
import { hasLocale } from '@/lib/dictionaries';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: "Contacto - GTEC | Google Cloud Partner",
  description: "Contáctanos para conocer más sobre nuestras soluciones de Google Cloud, Modernización Digital, IA Generativa y más.",
  keywords: ["Contacto GTEC", "Google Cloud Partner", "Soluciones empresariales"],
};

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default async function ContactPage({ params }: PageProps) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  return (
    <main>
      <ContactMain />
    </main>
  );
}
