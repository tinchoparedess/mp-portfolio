// src/app/error.tsx
"use client";

import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="section text-center flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-3xl font-bold mb-4">Algo salió mal</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Hubo un error inesperado. Intenta refrescar la página o volver al inicio.
      </p>
      <div className="flex gap-3">
        <button
          onClick={() => reset()}
          className="btn btn-ghost btn-gold"
        >
          Reintentar
        </button>
        <Link href="/" className="btn btn-ghost">
          Inicio
        </Link>
      </div>
    </main>
  );
}
