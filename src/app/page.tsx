"use client";

import Navbar from "@/components/Navbar";
import { useI18n } from "@/i18n/I18nProvider";
import GuestbookSection from "@/components/GuestbookSection";
import Experiencias from "@/components/Experiencias"; // 👈 agregado
import { useMemo } from "react";

export default function Page() {
  const { t, lang } = useI18n(); // lang: "es" | "en" | "pt" | "it"

  // --- WhatsApp message por idioma ---
  const waText = useMemo(() => {
    const byLang: Record<string, string> = {
      es: "Gracias por ponerte en contacto conmigo. Cuéntame en qué puedo ayudarte.",
      en: "Thank you for reaching out. Let me know how I can help you.",
      pt: "Obrigado por entrar em contato. Diga-me em que posso ajudar.",
      it: "Grazie per avermi contattato. Dimmi come posso aiutarti.",
    };
    return encodeURIComponent(byLang[lang] ?? byLang.es);
  }, [lang]);

  const WHATSAPP_NUMBER = "393481794230";
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`;

  // --- Highlights ---
  const highlights = [
    { title: "Adaptabilidad", desc: "Me integro a ritmos y contextos distintos sin perder calidad." },
    { title: "Comunicación / Idiomas", desc: "Aprender y expresarme en otros idiomas, escuchando primero para conectar mejor." },
    { title: "Servicio cálido", desc: "Atención humana y elegante, con detalles que hacen la diferencia." },
    { title: "Precisión / Ritmo", desc: "Organizar el tiempo, afinar el resultado." },
  ];

  // --- Escenas (placeholder) ---
  const escenas = [
    { titulo: "Cortina d’Ampezzo", texto: "(placeholder) Precisión y ritmo." },
    { titulo: "Irán", texto: "(placeholder) Hospitalidad ancestral." },
    { titulo: "Cerdeña", texto: "(placeholder) Calidez que vende." },
  ];

  // --- Ideas ---
  const ideas = [
    { title: "Crear sin ruido", copy: "Las obras verdaderas nacen de la claridad: espacios, proyectos y experiencias que permiten que lo esencial resuene." },
    { title: "Comodidad elevada", copy: "El lujo no está en el exceso, sino en hacer que cada detalle sirva a la grandeza de un propósito." },
    { title: "Elegancia como camino", copy: "Sobriedad con carácter: estilo que no distrae, acompaña y sostiene lo importante." },
    { title: "Inspiración que trasciende", copy: "Crear con horizonte alto: obras que dialogan con lo eterno y atraviesan épocas." },
    { title: "Prosperidad consciente", copy: "Expandir valor con intención: ideas, energía y riqueza que elevan a quienes caminan cerca." },
  ];

  return (
    <>
      {/* NAV */}
      <Navbar />

      {/* MAIN */}
      <main className="container-pro">
        {/* HERO */}
        <section id="hero" className="section text-center">
          <div className="panel panel-hero mx-auto max-w-3xl">
            <h1 className="hero-title">{t("hero_name")}</h1>
            <p className="kicker">{t("hero_quote")}</p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a href="#contacto" className="btn btn-primary"><span>{t("hero_connect")}</span></a>
              <a href="#quien-soy" className="btn btn-ghost btn-gold"><span>{t("hero_more")}</span></a>
            </div>
          </div>
        </section>

        {/* QUIÉN SOY */}
        <section id="quien-soy" className="section text-center">
          <h2 className="section-title">{t("who_title")}</h2>
          <span className="kicker" aria-hidden> </span>

          <div className="mx-auto mt-6 max-w-2xl">
            <p className="lead">
              Martín. Inquieto por naturaleza, curioso por elección. Persigo lo esencial:
              la elegancia que sirve, el detalle que habla. Creo en el arte de hacer las
              cosas bien, con calidez y conciencia.
            </p>
          </div>
        </section>

        {/* HIGHLIGHTS */}
        <section id="highlights" className="section text-center">
          <h2 className="section-title">{t("high_title")}</h2>
          <p className="kicker">{t("high_kicker")}</p>

          <div className="mx-auto mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 center-wide grid-equal">
            {highlights.map((h) => (
              <div key={h.title} className="card equal text-left">
                <div className="card-title">{h.title}</div>
                <div className="card-sub">{h.desc}</div>
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

          <div className="center-narrow">
            <ul className="vis-list mt-8">
              <li>
                <div className="vis-title">Horizontes nuevos</div>
                <div className="vis-copy">
                  Viajar es mi manera de aprender: vivir en primera persona, observar con
                  atención, construir criterio propio.
                </div>
              </li>
              <li>
                <div className="vis-title">Elegancia funcional</div>
                <div className="vis-copy">
                  La belleza está en lo esencial. Sin ruido, con intención clara y
                  resultados que trascienden.
                </div>
              </li>
              <li>
                <div className="vis-title">Escuchar antes de construir</div>
                <div className="vis-copy">
                  El verdadero valor nace al escuchar. Detectar la necesidad real es el
                  inicio de todo lo que tiene sentido.
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* IDEAS */}
        <section id="ideas" className="section text-center">
          <h2 className="section-title">{t("ideas_title")}</h2>
          <p className="kicker">{t("ideas_kicker")}</p>

          <div className="mx-auto mt-8 max-w-3xl grid grid-cols-1 gap-5">
            {ideas.map((item) => (
              <div key={item.title} className="card text-left">
                <div className="card-title">{item.title}</div>
                <div className="card-sub">{item.copy}</div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCIAS (nuevo) */}
        <Experiencias />

        {/* VOCES CERCANAS */}
        <GuestbookSection />

        {/* CONTACTO */}
        <section id="contacto" className="section text-center">
          <h2 className="section-title">{t("contact_title")}</h2>
          <p className="kicker">{t("contact_kicker")}</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {/* WhatsApp */}
            <a href={waHref} target="_blank" rel="noreferrer noopener" className="btn btn-wa">
              <span>{t("btn_whatsapp")}</span>
            </a>

            {/* Email */}
            <a href="mailto:tinchoparedess@gmail.com?subject=Contacto%20desde%20tu%20web" className="btn btn-ghost btn-gold">
              <span>{t("btn_email")}</span>
            </a>

            {/* Teléfono */}
            <a href="tel:+393481794230" className="btn btn-ghost btn-gold">
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
