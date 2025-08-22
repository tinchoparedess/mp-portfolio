import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["600", "700"] });

export const metadata = {
  metadataBase: new URL("https://mp-portfolio-theta.vercel.app"), // luego cambiamos a tu dominio .me
  title: "Martín Paredes — Tarjeta Digital Minimalista",
  description: "Presentación personal elegante y minimalista.",
  openGraph: {
    type: "website",
    url: "https://mp-portfolio-theta.vercel.app",
    title: "Martín Paredes — Tarjeta Digital Minimalista",
    description: "Presentación personal elegante y minimalista.",
    images: [
      {
        url: "/og.jpg", // poné este archivo en /public
        width: 1200,
        height: 630,
        alt: "Martín Paredes — Portada",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Martín Paredes — Tarjeta Digital Minimalista",
    description: "Presentación personal elegante y minimalista.",
    images: ["/og.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100`}>
        {children}
      </body>
    </html>
  );
}
