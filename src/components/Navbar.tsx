"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav-glass">
      <div className="nav-inner">
        {/* Botón burger (móvil) */}
        <button
          className="hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Acciones (desktop) */}
        <div className="nav-actions">
          <ThemeToggle />
        </div>

        {/* Links desktop */}
        <div className="nav-links">
          <Link href="#quien-soy" className="nav-link">
            Quién soy
            <span className="nav-underline" />
          </Link>
          <Link href="#highlights" className="nav-link">
            Highlights
            <span className="nav-underline" />
          </Link>
          <Link href="#vision" className="nav-link">
            Visión
            <span className="nav-underline" />
          </Link>
          <Link href="#notas" className="nav-link">
            Notas
            <span className="nav-underline" />
          </Link>
          <Link href="#ideas" className="nav-link">
            Ideas
            <span className="nav-underline" />
          </Link>
          <Link href="#contacto" className="nav-link">
            Contacto
            <span className="nav-underline" />
          </Link>
        </div>

        {/* Switcher idiomas */}
        <LanguageSwitcher variant="button" />
      </div>

      {/* Drawer móvil */}
      <div className={`nav-drawer ${open ? "open" : ""}`}>
        <Link
          href="#quien-soy"
          className="drawer-link"
          onClick={() => setOpen(false)}
        >
          Quién soy
        </Link>
        <Link
          href="#highlights"
          className="drawer-link"
          onClick={() => setOpen(false)}
        >
          Highlights
        </Link>
        <Link
          href="#vision"
          className="drawer-link"
          onClick={() => setOpen(false)}
        >
          Visión
        </Link>
        <Link
          href="#notas"
          className="drawer-link"
          onClick={() => setOpen(false)}
        >
          Notas
        </Link>
        <Link
          href="#ideas"
          className="drawer-link"
          onClick={() => setOpen(false)}
        >
          Ideas
        </Link>
        <Link
          href="#contacto"
          className="drawer-link"
          onClick={() => setOpen(false)}
        >
          Contacto
        </Link>
        <div style={{ marginTop: 12 }}>
          <LanguageSwitcher variant="pills" />
        </div>
      </div>
    </nav>
  );
}
