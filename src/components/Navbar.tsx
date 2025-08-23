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
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-black/10">
      <nav className="container h-14 flex items-center justify-between">
        <a href="#top" className="font-semibold">Martín Paredes</a>

        <ul className="hidden sm:flex gap-6 text-sm">
          {links.map(l => (
            <li key={l.href}><a className="nav-link" href={l.href}>{l.label}</a></li>
          ))}
        </ul>

        <button
          className="sm:hidden btn-outline"
          onClick={() => setOpen(v => !v)}
          aria-label="Abrir menú"
        >
          Menú
        </button>
      </nav>

      {open && (
        <ul className="sm:hidden container pb-3 text-sm">
          {links.map(l => (
            <li key={l.href} className="py-2 border-t border-black/10">
              <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
