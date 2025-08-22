"use client";

import { useState } from "react";

const links = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#logros", label: "Logros" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#viajes", label: "Viajes" },
  { href: "#ideas", label: "Ideas" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/70 dark:bg-neutral-950/60 backdrop-blur border-b border-neutral-200/60 dark:border-neutral-800">
      <nav className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#top" className="font-semibold">Martín Paredes</a>

        {/* desktop */}
        <ul className="hidden sm:flex gap-5 text-sm">
          {links.map(l => (
            <li key={l.href}>
              <a className="hover:opacity-70" href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>

        {/* mobile */}
        <button
          className="sm:hidden rounded-md border px-3 py-1"
          onClick={() => setOpen(v => !v)}
          aria-label="Abrir menú"
        >
          Menú
        </button>
      </nav>

      {/* panel mobile */}
      {open && (
        <ul className="sm:hidden max-w-4xl mx-auto px-6 pb-3 text-sm">
          {links.map(l => (
            <li key={l.href} className="py-1.5 border-t border-neutral-200/60 dark:border-neutral-800">
              <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
