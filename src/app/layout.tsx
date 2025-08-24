import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Martín Paredes — Tarjeta Digital Minimalista",
  description: "Presentación personal elegante y minimalista.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="bg-neutral-50 text-neutral-900 dark:bg-[#0B0B0C] dark:text-neutral-100">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
