"use client";

import Navbar from "@/components/Navbar";
import { useI18n } from "@/i18n/I18nProvider";
import GuestbookSection from "@/components/GuestbookSection"; // ⬅️ nuevo import

export default function Page() {
  const { t } = useI18n();

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
    <>
      {/* Barra de navegación */}
      <Navbar />

      {/* Contenido principal */}
      <main className="container-pro">
        {/* HERO */}
        <section id="hero" className="section text-center">
          <div className="panel panel-hero mx-auto max-w-3xl">
            <h1 className="hero-title">{t("hero_name")}</h1>
            <p className="kicker">{t("hero_quote")}</p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a href="#contacto" className="btn btn-primary">
                <span>{t("hero_connect")}</span>
              </a>
              <a href="#quien-soy" className="btn btn-ghost btn-gold">
                <span>{t("hero_more")}</span>
              </a>
            </div>
          </div>
        </section>

        {/* QUIÉN SOY */}
        <section id="quien-soy" className="section text-center">
          <h2 className="section-title">{t("who_title")}</h2>
          <p className="kicker">{t("who_kicker")}</p>

          <div className="mx-auto mt-6 max-w-2xl">
            <p className="lead">
              (placeholder) 3–5 líneas humanas, sin CV. Viajes, idiomas, curiosidad.
            </p>
          </div>
        </section>

        {/* HIGHLIGHTS */}
        <section id="highlights" className="section text-center">
          <h2 className="section-title">{t("high_title")}</h2>
          <p className="kicker">{t("high_kicker")}</p>

          <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-5 sm:grid-cols-3">
            {highlights.map((h) => (
              <div key={h} className="card text-sm">
                {h}
              </div>
            ))}
          </div>
        </section>

        {/* ESCENAS */}
        <section id="escenas" className="section text-center">
          <h2 className="section-title">{t("scenes_title")}</h2>
          <p className="kicker">{t("scenes_kicker")}</p>

          <div className="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-3">
            {escenas.map((e) => (
              <article key={e.titulo} className="card text-left">
                <div className="card-title">{e.titulo}</div>
                <div className="card-sub">{e.texto}</div>
              </article>
            ))}
          </div>
        </section>

        {/* VISIÓN */}
        <section id="vision" className="section text-center">
          <h2 className="section-title">{t("vision_title")}</h2>
          <p className="kicker">{t("vision_kicker")}</p>

          <div className="panel mx-auto mt-8 max-w-3xl">
            (placeholder) Qué quiero crear: hospitalidad minimalista, sofisticada y con alma.
          </div>
        </section>

        {/* IDEAS */}
        <section id="ideas" className="section text-center">
          <h2 className="section-title">{t("ideas_title")}</h2>
          <p className="kicker">{t("ideas_kicker")}</p>

          <div className="mx-auto mt-8 max-w-2xl space-y-4 text-left">
            {ideas.map((q, i) => (
              <div key={i} className="card">
                <span className="quote">“</span>
                {q}
                <span className="quote">”</span>
              </div>
            ))}
          </div>
        </section>

        {/* VOCES CERCANAS */}
        <GuestbookSection />

        {/* CONTACTO */}
        <section id="contacto" className="section text-center">
          <h2 className="section-title">{t("contact_title")}</h2>
          <p className="kicker">{t("contact_kicker")}</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {/* WhatsApp */}
            <a
              href="https://wa.me/5490000000000"
              target="_blank"
              rel="noreferrer"
              className="btn btn-wa"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M20.52 3.48A11.94 11.94 0 0 0 12.06 0C5.5 0 .2 5.29.2 11.83c0 2.08.54 4.09 1.56 5.88L0 24l6.5-1.69a11.78 11.78 0 0 0 5.56 1.42h.01c6.56 0 11.86-5.29 11.86-11.83 0-3.16-1.23-6.13-3.41-8.42Zm-8.46 18.2h-.01a9.8 9.8 0 0 1-4.99-1.36l-.36-.21-3.86 1 1.03-3.75-.24-.38a9.83 9.83 0 0 1-1.5-5.22c0-5.43 4.44-9.85 9.9-9.85 2.64 0 5.12 1.03 6.99 2.9a9.77 9.77 0 0 1 2.9 6.95c0 5.43-4.44 9.85-9.86 9.85Zm5.56-7.35c-.3-.16-1.77-.87-2.04-.96-.27-.1-.47-.15-.67.15-.2.31-.77.96-.94 1.16-.17.2-.35.22-.66.08-.3-.15-1.27-.46-2.42-1.47-.89-.77-1.49-1.73-1.67-2.03-.17-.31-.02-.47.13-.62.14-.14.31-.36.46-.54.15-.18.2-.31.3-.52.1-.2.05-.39-.02-.54-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51l-.57-.01c-.19 0-.5.07-.76.36-.26.31-.98.95-.98 2.32s1 .67 1.14.97c.14.31.88 1.68 2.13 2.74 1.47 1.22 2.72 1.59 3.03 1.77.31.16.49.15.67-.09.21-.23.78-.91.98-1.22.2-.31.42-.26.7-.16.3.1 1.87.88 2.19 1.04.31.16.51.23.58.36.07.13.07.75-.18 1.47Z"
                />
              </svg>
              <span>{t("btn_whatsapp")}</span>
            </a>

            {/* Email */}
            <a href="mailto:martin@example.com" className="btn btn-ghost btn-gold">
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2v.01L12 13 4 6.01V6h16ZM4 18V8.24l7.4 6.17a1 1 0 0 0 1.2 0L20 8.24V18H4Z"
                />
              </svg>
              <span>{t("btn_email")}</span>
            </a>

            {/* Teléfono */}
            <a href="tel:+5490000000000" className="btn btn-ghost btn-gold">
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C11.85 21 3 12.15 3 1a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2Z"
                />
              </svg>
              <span>{t("btn_call")}</span>
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer">{t("footer")}</footer>
      </main>
    </>
  );
}
