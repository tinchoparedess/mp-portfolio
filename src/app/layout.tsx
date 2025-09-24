// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { I18nProvider } from "@/i18n/I18nProvider";
import { Playfair_Display, Inter } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

/**
 * Ajustá el dominio si fuese necesario. Según tu plan, el objetivo es:
 * https://martinparedestestti.me
 */
const site = {
  url: "https://martinparedestestti.me",
  name: "Martín Paredes",
  title: "Martín Paredes — Elegancia minimalista",
  description:
    "Piensa en grande, cree en grande. Elegancia funcional, precisión y calidez al servicio de lo esencial.",
  ogImage: "/og.jpg",
  locale: "es_AR",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: "%s — Martín Paredes",
  },
  description: site.description,
  alternates: {
    canonical: site.url,
    languages: {
      "es-AR": site.url,
      // Si en el futuro usás rutas por idioma, acá apuntás a cada una:
      // en: `${site.url}/en`,
      // pt: `${site.url}/pt`,
      // it: `${site.url}/it`,
    },
  },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: site.title,
      },
    ],
    locale: site.locale,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: [site.ogImage],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
  // Si tenés /site.webmanifest, habilitalo:
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F5F3EE" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0B0C" },
  ],
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Martín Paredes",
    description: site.description,
    url: site.url,
    knowsLanguage: ["es", "en", "pt", "it"],
    jobTitle: "Creador / Host / Project Designer",
  };

  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable}`}>
        {/* Provider de idiomas para que useI18n funcione en toda la app */}
        <I18nProvider>
          {/* Structured Data */}
          <script
            type="application/ld+json"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
          />
          {/* Opcional: preload OG si querés evitar primer paint vacío en previews */}
          {/* <link rel="preload" as="image" href={site.ogImage} /> */}
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
