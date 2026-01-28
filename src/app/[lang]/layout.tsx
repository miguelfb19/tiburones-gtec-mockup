import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { TopMenu } from "@/components/layout/TopMenu";
import { locales, type Locale, getDictionary } from "@/lib/dictionaries";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GTEC - Google Cloud Partner | Soluciones de Software",
  description:
    "Partner oficial de Google especializado en Modernización Digital, Google Workspace, IA Generativa, Analítica de Datos y Servicios Administrados. Great Place to Work durante más de 5 años.",
  keywords: [
    "Google Cloud Partner",
    "Google Workspace",
    "IA Generativa",
    "Analítica de Datos",
    "Modernización Digital",
    "Servicios Administrados",
  ],
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <html lang={lang} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <TopMenu lang={lang as Locale} />
          {children}
          <ScrollToTop />
           <Footer dict={dict} />
        </ThemeProvider>
      </body>
    </html>
  );
}
