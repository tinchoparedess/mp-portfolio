"use client";

import { Playfair_Display } from "next/font/google";
import Card from "@/components/Card";
import ContactBar from "@/components/ContactBar";
import TestimonialCard from "@/components/TestimonialCard";
import Gallery from "@/components/Gallery";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["600", "700"] });

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10 space-y-24">

      {/* HERO */}
      <section className="text-center space-y-6">
        <h1 className={`${playfair.className} text-4xl sm:text-5xl font-bold`}>
          Tarjeta digital minimalista
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          (Placeholder) Tu frase de presentación irá acá.
        </p>
        <div className="flex justify-center gap-4">
          <a href="#proyectos" className="px-4 py-2 rounded-lg bg-black text-white hover:bg-neutral-800 transition">
            Ver proyectos
          </a>
          <a href="#contacto" className="px-4 py-2 rounded-lg border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition">
            Contactar
          </a>
        </div>
      </section>

      {/* SOBRE MÍ */}
      <section id="sobre-mi" className="space-y-4">
        <h2 className={`${playfair.className} text-2xl font-bold`}>Sobre mí</h2>
        <p className="text-neutral-700 dark:text-neutral-300">
          (Placeholder) Breve intro. Después lo reemplazamos por tu bio real.
        </p>
      </section>

      {/* LOGROS */}
      <section id="logros" className="space-y-6">
        <h2 className={`${playfair.className} text-2xl font-bold`}>Logros destacados</h2>
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
        <h2 className={`${playfair.className} text-2xl font-bold`}>Proyectos</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <Card title="Optimización de reservas" subtitle="Hospitality - Ops" metric="+18% rotación">
            Problema: cuellos de botella en hora pico.
            <br />Solución: layout, timing y pre-orden.
            <br />Resultado: más mesas atendidas con la misma gente.
          </Card>
          <Card title="Playbook de atención" subtitle="Servicio - Training" metric="-15% espera">
            Guiones cortos, órdenes claras, cierre de mesa con propuesta.
            <br />Mejora de tiempos y satisfacción.
          </Card>
        </div>
      </section>

      {/* VIAJES */}
      <section id="viajes" className="space-y-6">
        <h2 className={`${playfair.className} text-2xl font-bold`}>Viajes & experiencias</h2>
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

      {/* TESTIMONIOS */}
      <section id="testimonios" className="space-y-6">
        <h2 className={`${playfair.className} text-2xl font-bold`}>Testimonios</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <TestimonialCard
            quote="Martín elevó la experiencia del cliente y los números al mismo tiempo."
            author="Nombre Apellido"
            role="Gerente, Restaurante X"
          />
          <TestimonialCard
            quote="Eficiencia operativa con calidez humana: una combinación rara."
            author="Nombre Apellido"
            role="Director, Hotel Y"
          />
        </div>
      </section>

      {/* GALERÍA */}
      <section id="galeria" className="space-y-6">
        <h2 className={`${playfair.className} text-2xl font-bold`}>Galería</h2>
        <Gallery images={["/img1.jpg", "/img2.jpg", "/img3.jpg", "/img4.jpg"]} />
        <p className="text-sm text-neutral-500">Cuando tengas tus fotos, las ponemos en <code>/public</code> y se ven acá.</p>
      </section>

      {/* IDEAS */}
      <section id="ideas" className="space-y-6">
        <h2 className={`${playfair.className} text-2xl font-bold`}>Ideas / Notas</h2>
        <div className="grid gap-6">
          <Card title="Experiencias con alma" subtitle="Ensayo corto">
            (Placeholder) Mini-ensayo. Después lo pasamos a MDX si querés escribir más.
          </Card>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="space-y-6">
        <h2 className={`${playfair.className} text-2xl font-bold`}>Contacto</h2>
        <p className="text-neutral-700 dark:text-neutral-300">Elegí el canal que prefieras. Respondo rápido.</p>
        <ContactBar whatsapp="5491122334455" email="martin@mail.com" phone="+39 333 444 5555" />
      </section>

      {/* FOOTER */}
      <footer className="pt-8 text-center text-sm text-neutral-500 dark:text-neutral-400">
        © 2025 Martín Paredes — Elegancia minimalista.
      </footer>
    </div>
  );
}
