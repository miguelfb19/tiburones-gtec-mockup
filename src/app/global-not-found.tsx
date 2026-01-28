// Import global styles and fonts
import "./[lang]/globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import Image from "next/image";
import { cookies } from "next/headers";
import { Button } from "@/components/ui/Button";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { notFoundContent } from "@/contants/not-found-content";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "404 - Página No Encontrada",
  description: "La página que buscas no existe.",
};

export default async function GlobalNotFound() {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme")?.value;
  const isDark = theme === "dark";

  const localeCookie = cookieStore.get("locale")?.value;
  const lang = localeCookie === "en" ? "en" : "es";
  const content = notFoundContent[lang];

  return (
    <html lang={lang} className={isDark ? "dark" : ""}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <main className="flex items-center justify-center min-h-screen px-6 overflow-hidden bg-background text-foreground">
            <div className="max-w-6xl mx-auto w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Contenido de texto */}
                <div className="space-y-6 text-center md:text-left order-2 md:order-1">
                  <div className="space-y-3">
                    <h1 className="text-6xl md:text-8xl font-bold bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                      404
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-semibold">
                      {content.title}
                    </h2>
                    <p className="text-muted-foreground">
                      {content.description}
                    </p>
                  </div>

                  {/* Acciones */}
                  <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                    <Button variant="solid">
                      <a href={`/${lang}`}>{content.backHome}</a>
                    </Button>
                    <Button variant="outline">
                      <a href={`/${lang}/contact`}>{content.contactSupport}</a>
                    </Button>
                  </div>

                  {/* Enlaces útiles */}
                  <div className="pt-4">
                    <p
                      className={`text-sm ${isDark ? "text-white" : "text-primary"} text-muted-foreground mb-3`}
                    >
                      {content.usefulLinks}
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center md:justify-start text-sm">
                      <a
                        href={`/${lang}/about-us`}
                        className="hover:underline transition-colors"
                      >
                        {content.links.about}
                      </a>
                      <span className="text-muted-foreground">•</span>
                      <a
                        href={`/${lang}/contact`}
                        className="hover:underline transition-colors"
                      >
                        {content.links.contact}
                      </a>
                      <span className="text-muted-foreground">•</span>
                      <a
                        href={`/${lang}`}
                        className="hover:underline transition-colors"
                      >
                        {content.links.services}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Imagen 404 */}
                <div className="relative w-full h-64 md:h-96 order-1 md:order-2">
                  <Image
                    src="/images/404.avif"
                    alt="Página no encontrada"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
