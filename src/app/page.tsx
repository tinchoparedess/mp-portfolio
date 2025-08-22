"use client";

import { Playfair_Display } from "next/font/google";
import Card from "@/components/Card";
import ContactBar from "@/components/ContactBar";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["600", "700"] });

export default function Page() {
  return (
    <div className="container py-12 space-y-24">

      {/* HERO */}
      <section className="text-center space-y-6">
        <h1 className={`${playfair.className} text-4xl sm:text-5xl font-bold text-neutral-900`}>
          Tarjeta digital minimalista
        </h1>
        <p className="text-neutral-700">
          (Placeholder) Tu frase de presentación irá acá.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#proyectos" className="btn">Ver proyectos</a>
          <a href="#contacto" className="btn-outline">Contactar</a>
        </div>
      </section>

      {/* SOBRE MÍ */}
      <section id="sobre-mi" className="space-y-4">
        <h2 className={`${playfair.className} text-2xl font-bold text-neutral-900`}>Sobre mí</h2>
        <p className="text-neutral-700">
          (Placeholder) Breve intro. Después lo reemplazamos por tu bio real.
        </p>
      </section>

      {/* LOGROS */}
      <section id="logros" className="space-y-6">
        <h2 className={`${playfair.className} text-2xl font-bold text-neutral-900`}>Logros destacados</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          <Card title="Temporada Cortina" subtitle="Servicio y rotación" metric="+25% tips">
            Gestión de mesas y experiencia del cliente con foco en velocidad sin perder calidez.
          </Card>
          <Card title="Ocupación media" subtitle="Proyecto Operativo" metric="82%">
            Ajuste de turnos y flujo de reservas para picos de demanda.
          </Card>
          <Card title="NPS" subtitle="Satisfacción" metric="+1.2">
            Scripts de atención y cierres claros aumentaron la recomendación.
          </Card>
        </div>
      </section>

      {/* PROYECTOS */}
      <section id="proyectos" className="space-y-6">
        <h2 className={`${playfair.className} text-2xl font-bold text-neutral-900`}>Proyectos</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <Card title="Optimización de reservas" subtitle="Hospitality - Ops" metric="+18% rotación">
            Problema: cuellos de botella en hora pico.<br />
            Solución: layout, timing y pre-orden.<br />
            Resultado: más mesas atendidas con la misma gente.
          </Card>
          <Card title="Playbook de atención" subtitle="Servicio - Training" metric="-15% espera">
            Guiones cortos, órdenes claras, cierre de mesa con propuesta.<br />
            Mejora de tiempos y satisfacción.
          </Card>
        </div>
      </section>

      {/* VIAJES */}
      <section id="viajes" className="space-y-6">
        <h2 className={`${playfair.className} text-2xl font-bold text-neutral-900`}>Viajes & experiencias</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          <Card title="Irán" subtitle="Historia & espiritualidad">
            (Placeholder) Qué aprendiste que aplicás a la hospitalidad y proyectos.
          </Card>
          <Card title="Turquía" subtitle="Cultura & logística">
            (Placeholder) Aprendizajes prácticos.
          </Card>
          <Card title="Italia" subtitle="Temporadas exigentes">
            (Placeholder) Qué te dejó en operación y trato al cliente.
          </Card>
        </div>
      </section>

      {/* IDEAS */}
      <section id="ideas" className="space-y-6">
        <h2 className={`${playfair.className} text-2xl font-bold text-neutral-900`}>Ideas / Notas</h2>
        <div className="grid gap-6">
          <Card title="Experiencias con alma" subtitle="Ensayo corto">
            (Placeholder) Mini-ensayo. Después lo pasamos a MDX si querés escribir más.
          </Card>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="space-y-6">
        <h2 className={`${playfair.className} text-2xl font-bold text-neutral-900`}>Contacto</h2>
        <p className="text-neutral-700">Elegí el canal que prefieras. Respondo rápido.</p>
        <ContactBar whatsapp="5491122334455" email="martin@mail.com" phone="+39 333 444 5555" />
      </section>

      {/* FOOTER */}
      <footer className="pt-10 text-center text-sm text-neutral-500">
        <div className="border-t border-black/10 pt-6">
          © {new Date().getFullYear()} <span style={{ color: "var(--gold)" }}>Martín Paredes</span> — Elegancia minimalista.
        </div>
      </footer>
    </div>
  );
}
