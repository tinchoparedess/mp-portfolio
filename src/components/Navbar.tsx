"use client";
import ThemeToggle from "./ThemeToggle";

const items = [
  { href: "#quien-soy", label: "Quién soy" },
  { href: "#highlights", label: "Highlights" },
  { href: "#escenas", label: "Escenas" },
  { href: "#vision", label: "Visión" },
  { href: "#ideas", label: "Ideas" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/65 dark:bg-[#0B0B0C]/70 border-b border-black/10 dark:border-white/10">
      <nav className="mx-auto max-w-5xl px-6 h-14 flex items-center justify-between">
        <a href="#top" className="font-medium">Martín Paredes</a>

        <div className="hidden md:flex items-center gap-6 text-sm">
          {items.map((it) => (
            <a key={it.href} href={it.href} className="text-neutral-600 hover:text-black dark:text-neutral-300 dark:hover:text-white transition">
              {it.label}
            </a>
          ))}
        </div>

        <div className="ml-4">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
