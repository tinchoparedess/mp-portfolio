// middleware.ts
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const res = NextResponse.next();

  // Seguridad básica (no rompe nada)
  res.headers.set("X-Content-Type-Options", "nosniff");
  res.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  res.headers.set("X-Frame-Options", "SAMEORIGIN");
  res.headers.set("X-XSS-Protection", "0");
  // HSTS (solo tiene efecto en HTTPS; Vercel es HTTPS)
  res.headers.set("Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload");

  // Si más adelante querés CSP, lo agregamos con whitelist bien probada.
  // res.headers.set("Content-Security-Policy", "default-src 'self'; ...");

  return res;
}

// Opcional: sólo para rutas públicas (si quisieras excluir /api):
// export const config = { matcher: ["/((?!api).*)"] };
