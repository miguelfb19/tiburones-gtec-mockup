import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["es", "en"];
const defaultLocale = "es";

function getLocale(request: NextRequest): string {
  // Intentar obtener el idioma del header Accept-Language
  const acceptLanguage = request.headers.get("accept-language");

  if (acceptLanguage) {
    // Extraer el primer idioma preferido
    const preferredLang = acceptLanguage.split(",")[0].split("-")[0];
    
    // Verificar si es un idioma soportado
    if (locales.includes(preferredLang)) {
      return preferredLang;
    }
  }

  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignorar archivos estáticos y rutas de API
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/images") ||
    pathname.includes(".")
  ) {
    return;
  }

  // Verificar si la ruta ya tiene un locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirigir agregando el locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Coincidir con todas las rutas excepto las que comienzan con:
    // - _next
    // - api
    // - archivos estáticos
    "/((?!_next|api|images).*)",
  ],
};
