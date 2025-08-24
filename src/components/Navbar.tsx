"use client";

import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/80 dark:bg-neutral-950/75 border-b border-black/10 dark:border-white/10">
      <nav className="mx-auto max-w-4xl h-14 px-6 flex items-center justify-between">
        <a href="#top" className="font-semibold tracking-tight hover:opacity-80">
          Martín Paredes
        </a>
        <div className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#quien-soy" className="hover:opacity-70">Quién soy</a>
          <a href="#highlights" className="hover:opacity-70">Highlights</a>
          <a href="#escenas" className="hover:opacity-70">Escenas</a>
          <a href="#vision" className="hover:opacity-70">Visión</a>
          <a href="#ideas" className="hover:opacity-70">Ideas</a>
          <a href="#contacto" className="hover:opacity-70">Contacto</a>
          <ThemeToggle />
        </div>
        <div className="sm:hidden"><ThemeToggle /></div>
      </nav>
    </header>
  );
}
