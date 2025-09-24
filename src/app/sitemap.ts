// src/app/sitemap.ts
import type { MetadataRoute } from "next";

/**
 * Ajustá BASE_URL si cambiás el dominio.
 * También podés leer desde process.env.NEXT_PUBLIC_SITE_URL si lo preferís.
 */
const BASE_URL = "https://martinparedestestti.me";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    // Si en el futuro usás rutas por idioma, agregalas acá:
    // { url: `${BASE_URL}/en`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    // { url: `${BASE_URL}/pt`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    // { url: `${BASE_URL}/it`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
  ];

  return routes;
}
