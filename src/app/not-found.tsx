// src/app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section container-pro text-center">
      <h1 className="section-title underline">404</h1>
      <p className="kicker">No encontramos lo que buscás.</p>
      <div className="mt-6">
        <Link href="/" className="btn btn-ghost btn-gold">Volver al inicio</Link>
      </div>
    </main>
  );
}
