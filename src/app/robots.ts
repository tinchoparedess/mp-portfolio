// src/app/robots.ts
import type { MetadataRoute } from "next";

const BASE_URL = "https://martinparedestestti.me";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Si querés bloquear algo:
      // disallow: ["/api/", "/drafts", "/admin"],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
