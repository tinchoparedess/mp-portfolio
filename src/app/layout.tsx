import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["600", "700"] });

export const metadata = {
  title: "Martín Paredes — Tarjeta Digital Minimalista",
  description: "Presentación personal elegante y minimalista.",
  metadataBase: new URL("https://martinparedestestti.me"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100`}>
        <a id="top" />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
