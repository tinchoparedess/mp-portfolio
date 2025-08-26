import Navbar from "@/components/Navbar";
<Navbar />

export default function Page() {
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
    <main className="container-pro">
      {/* HERO */}
      <section className="section">
        <div className="panel panel-hero text-center">
          <h1 className="hero-title">Martín Paredes</h1>
          <p className="kicker mt-2">“Piensa en grande, cree en grande.”</p>

          <div className="mt-7 flex items-center justify-center gap-3">
            <a href="#contacto" className="btn btn-primary">Conectemos</a>
            <a href="#quien-soy" className="btn btn-ghost">Conocer más</a>
          </div>
        </div>
      </section>

      {/* QUIÉN SOY */}
      <section id="quien-soy" className="section text-center">
        <h2 className="section-title">Quién soy</h2>
        <p className="kicker">Breve, humano, sin CV</p>
        <p className="lead mt-6 max-w-2xl mx-auto">
          (placeholder) 3–5 líneas humanas, sin CV. Viajes, idiomas, curiosidad.
        </p>
      </section>

      {/* HIGHLIGHTS */}
      <section id="highlights" className="section text-center">
        <h2 className="section-title">Highlights</h2>
        <p className="kicker">Fortalezas en pocas palabras</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {highlights.map((h) => (
            <div key={h} className="pill">{h}</div>
          ))}
        </div>
      </section>

      {/* ESCENAS */}
      <section id="escenas" className="section text-center">
        <h2 className="section-title">Escenas</h2>
        <p className="kicker">Momentos que me formaron</p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {escenas.map((e) => (
            <article key={e.titulo} className="card">
              <h3 className="card-title">{e.titulo}</h3>
              <p className="card-sub">{e.texto}</p>
            </article>
          ))}
        </div>
      </section>

      {/* VISIÓN */}
      <section id="vision" className="section text-center">
        <h2 className="section-title">Visión</h2>
        <p className="kicker">Breve y ambicioso</p>

        <div className="card mt-8 max-w-3xl mx-auto">
          (placeholder) Qué quiero crear: hospitalidad minimalista, sofisticada y con alma.
        </div>
      </section>

      {/* IDEAS */}
      <section id="ideas" className="section text-center">
        <h2 className="section-title">Ideas</h2>
        <p className="kicker">Aforismos breves</p>

        <div className="mt-8 space-y-4 max-w-3xl mx-auto">
          {ideas.map((q, i) => (
            <div key={i} className="card quote-bar">
              <span className="quote">“</span>{q}<span className="quote">”</span>
            </div>
          ))}
        </div>
      </section>

{/* CONTACTO */}
<section id="contacto" className="section text-center">
  <h2 className="section-title">Contacto</h2>
  <p className="kicker">Si esto te resonó, hablemos.</p>

  <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
    <a
      href="https://wa.me/5490000000000"
      target="_blank"
      className="btn btn-wa text-sm px-4 py-2"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.52 3.48A11.89 11.89 0 0 0 12.06 0C5.45 0 .06 5.39.06 12c0 2.12.55 4.19 1.59 6.03L0 24l6.19-1.62A11.92 11.92 0 0 0 12.06 24c6.61 0 11.94-5.39 11.94-12s-5.39-12-11.48-12Zm-5.58 17.13c-1.93 0-3.81-.57-5.43-1.65l-.39-.25-3.21.84.86-3.12-.27-.41a9.48 9.48 0 0 1-1.46-5.05c0-5.26 4.29-9.54 9.58-9.54 2.56 0 4.96 1 6.77 2.79a9.45 9.45 0 0 1 2.82 6.75c-.02 5.29-4.32 9.59-9.57 9.59Zm5.45-7.17c-.3-.15-1.76-.86-2.03-.96-.27-.1-.47-.15-.68.15s-.78.96-.95 1.15c-.18.2-.35.22-.65.07-.3-.15-1.28-.47-2.44-1.5-.9-.8-1.51-1.79-1.69-2.09-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.68-1.64-.93-2.24-.25-.6-.5-.5-.68-.51h-.58c-.2 0-.53.08-.81.38-.28.3-1.07 1.05-1.07 2.55 0 1.5 1.09 2.95 1.24 3.15.15.2 2.14 3.26 5.18 4.57.73.32 1.3.5 1.75.65.74.24 1.42.21 1.96.13.6-.09 1.76-.72 2.01-1.41.25-.68.25-1.26.18-1.38-.07-.13-.25-.2-.55-.35Z"/>
      </svg>
      <span>WhatsApp</span>
    </a>

    <a href="mailto:martin@example.com" className="btn btn-gold text-sm px-4 py-2">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12l-4 4-4-4m8-4l-4 4-4-4" />
      </svg>
      <span>Email</span>
    </a>

    <a href="tel:+5490000000000" className="btn btn-gold text-sm px-4 py-2">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h1.5a2 2 0 012 1.72l.3 2.45a2 2 0 01-.57 1.63l-1.2 1.2a16 16 0 006.36 6.36l1.2-1.2a2 2 0 011.63-.57l2.45.3a2 2 0 011.72 2V19a2 2 0 01-2 2h-1C8.49 21 3 15.51 3 9V7a2 2 0 012-2z" />
      </svg>
      <span>Llamar</span>
    </a>
  </div>
</section>


      <footer className="footer">© 2025 Martín Paredes — Elegancia minimalista.</footer>
    </main>
  );
}
