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
        {/* IZQUIERDA: toggle tema */}
        <div className="nav-left">
          <ThemeToggle />
        </div>

        {/* CENTRO (solo desktop): links */}
        <div className="nav-links">
          <Link href="#quien-soy" className="nav-link">
            <span>Quién soy</span>
            <span className="nav-underline" />
          </Link>
          <Link href="#highlights" className="nav-link">
            <span>Highlights</span>
            <span className="nav-underline" />
          </Link>
          <Link href="#vision" className="nav-link">
            <span>Visión</span>
            <span className="nav-underline" />
          </Link>
          <Link href="#notas" className="nav-link">
            <span>Notas</span>
            <span className="nav-underline" />
          </Link>
          <Link href="#ideas" className="nav-link">
            <span>Ideas</span>
            <span className="nav-underline" />
          </Link>
          <Link href="#contacto" className="nav-link">
            <span>Contacto</span>
            <span className="nav-underline" />
          </Link>
        </div>

        {/* DERECHA: idioma + hamburguesa */}
        <div className="nav-right">
          <LanguageSwitcher variant="button" />
          <button
            className="hamburger"
            aria-label="Abrir menú"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
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

        {/* idioma en formato pastillas dentro del drawer */}
        <div style={{ padding: "6px 6px 10px" }}>
          <LanguageSwitcher variant="pills" />
        </div>
      </div>
    </nav>
  );
}
