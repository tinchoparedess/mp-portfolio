import type { Metadata, Viewport } from "next";
import "./globals.css";
import { I18nProvider } from "@/i18n/I18nProvider";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F5F3EE" },
    { media: "(prefers-color-scheme: dark)", color: "#0B0B0C" },
  ],
};

export const metadata: Metadata = {
  title: "Martín Paredes — Portfolio",
  description:
    "Elegancia minimalista orientada al detalle. Experiencia internacional, servicio cálido y precisión.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Martín Paredes — Portfolio",
    description:
      "Elegancia minimalista orientada al detalle. Experiencia internacional, servicio cálido y precisión.",
    url: "https://tudominio.com", // ⚠️ cambia al dominio final
    siteName: "Martín Paredes",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Martín Paredes",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Martín Paredes — Portfolio",
    description:
      "Elegancia minimalista orientada al detalle. Experiencia internacional, servicio cálido y precisión.",
    images: ["/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        {/* Provider envuelve TODO para que useI18n funcione */}
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
