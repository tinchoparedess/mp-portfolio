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
      <nav className="mx-auto max-w-4xl px-6 h-14 flex items-center justify-between">
        <a href="#top" className="font-semibold">Martín Paredes</a>

        {/* desktop */}
        <ul className="hidden sm:flex gap-6 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                className="relative inline-block hover:text-[#C8A951] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#C8A951] hover:after:w-full after:transition-all"
                href={l.href}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* mobile */}
        <button
          className="sm:hidden px-3 py-1 rounded-lg border border-neutral-300 hover:bg-neutral-100"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menú"
        >
          Menú
        </button>
      </nav>

      {/* panel mobile */}
      {open && (
        <ul className="sm:hidden mx-auto max-w-4xl px-6 pb-3 text-sm">
          {links.map((l) => (
            <li key={l.href} className="py-2 border-t border-black/10">
              <a href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
