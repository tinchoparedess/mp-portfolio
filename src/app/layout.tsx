// src/app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Martín Paredes — Tarjeta Digital Minimalista",
  description: "Presentación personal elegante y minimalista.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* Aplica tema antes de hidratar (html y body) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function(){
  try {
    var saved = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var isDark = saved ? saved === 'dark' : prefersDark;
    var root = document.documentElement;
    var body = document.body;
    root.classList.toggle('dark', isDark);
    body.classList.toggle('dark', isDark);
  } catch(e){}
})();
`,
          }}
        />
      </head>
      <body className={`${inter.className} bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
