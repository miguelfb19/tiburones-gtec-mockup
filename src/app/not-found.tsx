import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";

export default function NotFoundPage() {
  return (
    <main className="flex items-center justify-center h-screen px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Contenido de texto */}
          <div className="space-y-6 text-center md:text-left order-2 md:order-1">
            <div className="space-y-3">
              <h1 className="text-6xl md:text-8xl font-bold bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                404
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold">
                ¡Oops! Página no encontrada
              </h2>
              <p className="text-muted-foreground">
                Lo sentimos, la página que buscas no existe o ha sido movida.
              </p>
            </div>

            {/* Acciones */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Button>
                <Link href="/">Volver al inicio</Link>
              </Button>
              <Button variant="outline">
                <Link href="/contact">Contactar soporte</Link>
              </Button>
            </div>

            {/* Enlaces útiles */}
            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-3">
                Enlaces útiles:
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start text-sm">
                <Link 
                  href="/about-us" 
                  className="text-primary hover:underline transition-colors"
                >
                  Sobre nosotros
                </Link>
                <span className="text-muted-foreground">•</span>
                <Link 
                  href="/contact" 
                  className="text-primary hover:underline transition-colors"
                >
                  Contacto
                </Link>
                <span className="text-muted-foreground">•</span>
                <Link 
                  href="/" 
                  className="text-primary hover:underline transition-colors"
                >
                  Servicios
                </Link>
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
  );
}
