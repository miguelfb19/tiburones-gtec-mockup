import { ContactMain } from '@/components/sections/contact/ContactMain';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contacto - GTEC | Google Cloud Partner",
  description: "Contáctanos para conocer más sobre nuestras soluciones de Google Cloud, Modernización Digital, IA Generativa y más.",
  keywords: ["Contacto GTEC", "Google Cloud Partner", "Soluciones empresariales"],
};

export default function ContactPage() {
  return (
    <main>
      <ContactMain />
    </main>
  );
}
