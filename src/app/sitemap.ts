import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://tu-dominio.com"; // cámbialo

  return [
    { url: `${base}/`, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/#quien-soy`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/#highlights`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/#experiencias`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/#vision`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/#ideas`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/#voces`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/#contacto`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  ];
}
