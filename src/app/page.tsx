import SectionTitle from "@/components/SectionTitle";
import ContactBar from "@/components/ContactBar";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: ["700"] });

export default function Page() {
  return (
    <div id="top" className="min-h-screen transition-colors">
      {/* Vignette sutil solo en oscuro */}
      <div
        aria-hidden
        className="fixed inset-0 -z-10 hidden dark:block"
        style={{
          background:
            "radial-gradient(900px 500px at 18% -10%, rgba(200,169,81,.16), transparent 60%), radial-gradient(900px 500px at 82% -18%, rgba(255,255,255,.06), transparent 60%)",
        }}
      />

      <main className="site-wrap">
        {/* HERO */}
        <section className="text-center space-y-6">
          <h1 className={`${playfair.className} text-4xl sm:text-5xl font-bold tracking-tight`}>
            Martín Paredes
          </h1>
          <p className="muted">“Piensa en grande, cree en grande.”</p>
          <div className="flex justify-center gap-3">
            <a href="#contacto" className="btn btn-primary">Conectemos</a>
            <a href="#quien-soy" className="btn btn-ghost">Conocer más</a>
          </div>
        </section>

        {/* QUIÉN SOY */}
        <section id="quien-soy" className="space-y-3">
          <div className="section-title">
            <h2>Quién soy</h2>
            <span className="divider" />
          </div>
          <p className="text-[15px] leading-7 muted">
            (placeholder) 3–5 líneas humanas, sin CV. Viajes, idiomas, curiosidad.
          </p>
        </section>

        {/* HIGHLIGHTS */}
        <section id="highlights" className="space-y-3">
          <div className="section-title">
            <h2>Highlights</h2>
            <span className="divider" />
          </div>
          <p className="section-note">Fortalezas en pocas palabras</p>
          <ul className="mt-2 grid gap-3 sm:grid-cols-3">
            {["Adaptabilidad", "Comunicación / Idiomas", "Hospitalidad con alma"].map((t) => (
              <li key={t} className="chip">{t}</li>
            ))}
          </ul>
        </section>

        {/* ESCENAS */}
        <section id="escenas" className="space-y-3">
          <div className="section-title">
            <h2>Escenas</h2>
            <span className="divider" />
          </div>
          <p className="section-note">Momentos que me formaron</p>

          <div className="mt-2 grid gap-6 sm:grid-cols-3 text-sm">
            {[
              { t: "Cortina d’Ampezzo", d: "(placeholder) Precisión y ritmo." },
              { t: "Irán", d: "(placeholder) Hospitalidad ancestral." },
              { t: "Cerdeña", d: "(placeholder) Calidez que vende." },
            ].map((x) => (
              <article key={x.t} className="card">
                <strong>{x.t}</strong>
                <p className="mt-1 muted">{x.d}</p>
              </article>
            ))}
          </div>
        </section>

        {/* VISIÓN */}
        <section id="vision" className="space-y-3">
          <div className="section-title">
            <h2>Visión</h2>
            <span className="divider" />
          </div>
          <p className="text-[15px] leading-7 muted">
            (placeholder) Hospitalidad minimalista, sofisticada y con alma. Breve y ambicioso.
          </p>
        </section>

        {/* IDEAS */}
        <section id="ideas" className="space-y-3">
          <div className="section-title">
            <h2>Ideas</h2>
            <span className="divider" />
          </div>
          <p className="section-note">Aforismos breves</p>
          <ul className="mt-2 grid gap-3">
            {[
              "“Viajar no es escapar, es entrenar el alma.”",
              "“La eficiencia permite la calidez.”",
            ].map((i) => (
              <li key={i} className="card text-sm">{i}</li>
            ))}
          </ul>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="space-y-3">
          <div className="section-title">
            <h2>Contacto</h2>
            <span className="divider" />
          </div>
          <p className="muted">Si esto te resonó, escribime.</p>
          <div className="mt-3">
            <ContactBar whatsapp="54911XXXXXXXX" email="tuemail@ejemplo.com" phone="+39 3XX XXX XXXX" />
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pt-10 text-center text-sm muted">
          <div className="border-t border-black/10 dark:border-white/10 pt-6">
            © {new Date().getFullYear()} <span className="gold">Martín Paredes</span> — Elegancia minimalista.
          </div>
        </footer>
      </main>
    </div>
  );
}
