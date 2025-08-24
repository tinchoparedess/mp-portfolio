export default function Page() {
  // Datos mínimos para las secciones
  const highlights = ["Adaptabilidad", "Comunicación / Idiomas", "Hospitalidad con alma"];
  const escenas = [
    { titulo: "Cortina d’Ampezzo", texto: "(placeholder) Precisión y ritmo." },
    { titulo: "Irán", texto: "(placeholder) Hospitalidad ancestral." },
    { titulo: "Cerdeña", texto: "(placeholder) Calidez que vende." },
  ];
  const ideas = [
    "Viajar no es escapar, es entrenar el alma.",
    "La eficiencia permite la calidez.",
  ];

  return (
    <div className="mx-auto max-w-[1080px] px-6 py-16 space-y-28">
      {/* HERO — lujo silencioso */}
      <section
        id="hero"
        className="relative isolate overflow-hidden rounded-3xl px-6 py-24 sm:py-28"
      >
        {/* Gradiente base + halo dorado sutil */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[#0b0b0c] dark:bg-[#0b0b0c]" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1000px_600px_at_50%_-20%,rgba(200,169,107,0.12),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(800px_400px_at_50%_120%,rgba(226,192,125,0.10),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-0 -z-10 ring-1 ring-white/5 rounded-3xl" />

        <div className="text-center">
          <h1 className="font-serif text-5xl sm:text-6xl tracking-tight text-[#F5F3EE]">
            Martín Paredes
          </h1>

          <p className="mt-4 text-[18px] text-[#D6D2CB]">
            “Piensa en grande, cree en grande.”
          </p>

          {/* Línea dorada discreta bajo el título */}
          <div className="mx-auto mt-6 h-[2px] w-16 rounded-full bg-[var(--gold)]/70" />

          <div className="mt-10 flex items-center justify-center gap-3">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-[15px] font-medium
                         bg-black text-white ring-1 ring-white/10
                         hover:bg-[var(--gold)] hover:text-black hover:ring-[var(--gold)]
                         transition-colors"
            >
              Conectemos
            </a>
            <a
              href="#quien-soy"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-[15px] font-medium
                         bg-transparent text-[#F5F3EE] ring-1 ring-white/20
                         hover:ring-[var(--gold)] hover:text-[var(--gold)]
                         transition-colors"
            >
              Conocer más
            </a>
          </div>
        </div>
      </section>

      {/* QUIÉN SOY */}
      <section id="quien-soy" className="scroll-mt-24">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-serif text-2xl text-white">Quién soy</h2>
            <p className="mt-1 text-sm text-[#A7A7AA]">Breve, humano, sin CV</p>
          </div>
          {/* barra dorada decorativa en desktop */}
          <div className="hidden sm:block h-[2px] w-24 rounded-full bg-[var(--gold)]/70" />
        </div>

        <p className="mt-6 max-w-2xl text-[17px] leading-7 text-[#D6D2CB]">
          (placeholder) 3–5 líneas humanas, sin CV. Viajes, idiomas, curiosidad.
        </p>
      </section>

      {/* HIGHLIGHTS */}
      <section id="highlights" className="scroll-mt-24">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-serif text-2xl text-white">Highlights</h2>
            <p className="mt-1 text-sm text-[#A7A7AA]">Fortalezas en pocas palabras</p>
          </div>
          <div className="hidden sm:block h-[2px] w-24 rounded-full bg-[var(--gold)]/70" />
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {highlights.map((h) => (
            <div
              key={h}
              className="rounded-2xl border border-white/10 bg-[#1A1B1E] px-5 py-4 text-[15px] text-[#E7E6E2]
                         shadow-[0_8px_24px_rgba(0,0,0,.35)]
                         hover:border-[var(--gold)]/50 hover:shadow-[0_12px_32px_rgba(0,0,0,.45)]
                         transition-all"
            >
              {h}
            </div>
          ))}
        </div>
      </section>

      {/* ESCENAS */}
      <section id="escenas" className="scroll-mt-24">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-serif text-2xl text-white">Escenas</h2>
            <p className="mt-1 text-sm text-[#A7A7AA]">Momentos que me formaron</p>
          </div>
          <div className="hidden sm:block h-[2px] w-24 rounded-full bg-[var(--gold)]/70" />
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {escenas.map((e) => (
            <article
              key={e.titulo}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#141516]
                         shadow-[0_10px_30px_rgba(0,0,0,.35)] transition-all
                         hover:-translate-y-0.5 hover:border-[var(--gold)]/50"
            >
              {/* Overlay de luz muy leve */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(400px_220px_at_60%_20%,rgba(200,169,107,0.06),transparent_60%)]" />
              <div className="p-5">
                <h3 className="font-medium text-[17px] text-[#F5F3EE]">{e.titulo}</h3>
                <p className="mt-1 text-sm text-[#B8B6B2]">{e.texto}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* VISIÓN */}
      <section id="vision" className="scroll-mt-24">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-serif text-2xl text-white">Visión</h2>
            <p className="mt-1 text-sm text-[#A7A7AA]">Breve y ambicioso</p>
          </div>
          <div className="hidden sm:block h-[2px] w-24 rounded-full bg-[var(--gold)]/70" />
        </div>

        <div
          className="mt-8 rounded-2xl border border-white/10 bg-[#141516] p-6 text-[#D6D2CB]
                     shadow-[inset_0_0_0_1px_rgba(232,232,232,0.02),0_10px_30px_rgba(0,0,0,.35)]"
        >
          (placeholder) Qué quiero crear: hospitalidad minimalista, sofisticada y con alma.
        </div>
      </section>

      {/* IDEAS */}
      <section id="ideas" className="scroll-mt-24">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-serif text-2xl text-white">Ideas</h2>
            <p className="mt-1 text-sm text-[#A7A7AA]">Aforismos breves</p>
          </div>
          <div className="hidden sm:block h-[2px] w-24 rounded-full bg-[var(--gold)]/70" />
        </div>

        <div className="mt-8 space-y-4">
          {ideas.map((q, i) => (
            <div
              key={i}
              className="relative rounded-2xl border border-white/10 bg-[#141516] px-5 py-4 text-[#E7E6E2]
                         shadow-[0_8px_24px_rgba(0,0,0,.35)]"
            >
              <span className="mr-1 text-[var(--gold)]">“</span>
              {q}
              <span className="ml-1 text-[var(--gold)]">”</span>

              {/* subrayado dorado que aparece al hover */}
              <span className="pointer-events-none absolute -bottom-[1px] left-5 h-[2px] w-0 rounded-full bg-[var(--gold)]/80 transition-all duration-200 group-hover:w-1/2" />
            </div>
          ))}
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="scroll-mt-24">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-serif text-2xl text-white">Contacto</h2>
            <p className="mt-1 text-sm text-[#A7A7AA]">Si esto te resonó, hablemos.</p>
          </div>
          <div className="hidden sm:block h-[2px] w-24 rounded-full bg-[var(--gold)]/70" />
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://wa.me/5490000000000"
            target="_blank"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-[15px] font-medium
                       bg-[var(--gold)] text-black shadow-[0_8px_24px_rgba(0,0,0,.35)]
                       hover:brightness-110 transition"
          >
            WhatsApp
          </a>
          <a
            href="mailto:martin@example.com"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-[15px] font-medium
                       text-[#F5F3EE] ring-1 ring-white/20 hover:ring-[var(--gold)] hover:text-[var(--gold)]
                       transition"
          >
            Email
          </a>
          <a
            href="tel:+5490000000000"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-[15px] font-medium
                       text-[#F5F3EE] ring-1 ring-white/20 hover:ring-[var(--gold)] hover:text-[var(--gold)]
                       transition"
          >
            Llamar
          </a>
        </div>
      </section>

      {/* FOOTER simple */}
      <footer className="pt-6 text-sm text-[#8E8E92]">
        © 2025 Martín Paredes — Elegancia minimalista.
      </footer>
    </div>
  );
}
