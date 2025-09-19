import { NextResponse } from "next/server";

export function GET() {
  const body = `
User-agent: *
Allow: /

Sitemap: https://tu-dominio.com/sitemap.xml
`.trim();

  return new NextResponse(body, {
    status: 200,
    headers: { "Content-Type": "text/plain" },
  });
}
