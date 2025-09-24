// src/app/error.tsx
"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  console.error(error);
  return (
    <main className="section container-pro text-center">
      <h1 className="section-title underline">Algo salió mal</h1>
      <p className="kicker">Hubo un error inesperado.</p>
      <div className="mt-6 flex justify-center gap-3">
        <button onClick={() => reset()} className="btn btn-ghost btn-gold">
          Reintentar
        </button>
        <a href="/" className="btn btn-ghost">Ir al inicio</a>
      </div>
    </main>
  );
}
