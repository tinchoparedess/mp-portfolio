// src/app/not-found.tsx
"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section text-center flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-3xl font-bold mb-4">404</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Esta página no existe o fue movida.
      </p>
      <Link
        href="/"
        className="btn btn-ghost btn-gold"
      >
        Volver al inicio
      </Link>
    </main>
  );
}
