"use client";

import Navbar from "@/components/Navbar";
import { useI18n } from "@/i18n/I18nProvider";
import GuestbookSection from "@/components/GuestbookSection";
import Experiencias from "@/components/Experiencias";
import ValueList from "@/components/ValueList";
import { useMemo } from "react";

export default function Page() {
  const { t, lang } = useI18n(); // "es" | "en" | "pt" | "it"

  // WhatsApp message por idioma
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

  // Highlights
  const highlights = [
    { title: "Adaptabilidad", copy: "Me integro a ritmos y contextos distintos sin perder calidad." },
    { title: "Comunicación / Idiomas", copy: "Aprender y expresarme en otros idiomas, escuchando primero para conectar mejor." },
    { title: "Servicio cálido", copy: "Atención humana y elegante, con detalles que hacen la diferencia." },
    { title: "Precisión / Ritmo", copy: "Organizar el tiempo, afinar el resultado." },
  ];

  // Visión
  const vision = [
    { title: "Horizontes nuevos", copy: "Viajar es mi manera de aprender: vivir en primera persona, observar con atención, construir criterio propio." },
    { title: "Elegancia funcional", copy: "La belleza está en lo esencial. Sin ruido, con intención clara y resultados que trascienden." },
    { title: "Escuchar antes de construir", copy: "El verdadero valor nace al escuchar. Detectar la necesidad real es el inicio de todo lo que tiene sentido." },
  ];

  // Ideas
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
          <h2 className="section-title underline">{t("who_title")}</h2>
          <div className="mx-auto mt-6 max-w-2xl">
            <p className="lead">
              Martín. Inquieto por naturaleza, curioso por elección. Persigo lo
              esencial: la elegancia que sirve, el detalle que habla. Creo en el
              arte de hacer las cosas bien, con calidez y conciencia.
            </p>
          </div>
        </section>

        {/* HIGHLIGHTS (2 columnas) */}
        <section id="highlights" className="section text-center">
          <h2 className="section-title underline">{t("high_title")}</h2>
          <div className="center-narrow">
            <ValueList items={highlights} cols={2} />
          </div>
        </section>

        {/* EXPERIENCIAS */}
        <Experiencias />

        {/* VISIÓN */}
        <section id="vision" className="section text-center">
          <h2 className="section-title underline">{t("vision_title")}</h2>
          <div className="center-narrow">
            <ValueList items={vision} cols={1} />
          </div>
        </section>

        {/* IDEAS */}
        <section id="ideas" className="section text-center">
          <h2 className="section-title underline">{t("ideas_title")}</h2>
          <div className="center-narrow">
            <ValueList items={ideas} cols={1} />
          </div>
        </section>

        {/* VOCES CERCANAS */}
        <GuestbookSection />

        {/* CONTACTO */}
        <section id="contacto" className="section text-center">
          <h2 className="section-title underline">{t("contact_title")}</h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {/* WhatsApp */}
            <a href={waHref} target="_blank" rel="noreferrer noopener" className="btn btn-wa">
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M20.52 3.48A11.94 11.94 0 0 0 12.06 0C5.5 0 .2 5.29.2 11.83c0 2.08.54 4.09 1.56 5.88L0 24l6.5-1.69a11.78 11.78 0 0 0 5.56 1.42h.01c6.56 0 11.86-5.29 11.86-11.83 0-3.16-1.23-6.13-3.41-8.42Zm-8.46 18.2h-.01a9.8 9.8 0 0 1-4.99-1.36l-.36-.21-3.86 1 1.03-3.75-.24-.38a9.83 9.83 0 0 1-1.5-5.22c0-5.43 4.44-9.85 9.9-9.85 2.64 0 5.12 1.03 6.99 2.9a9.77 9.77 0 0 1 2.9 6.95c0 5.43-4.44 9.85-9.86 9.85Zm5.56-7.35c-.3-.16-1.77-.87-2.04-.96-.27-.1-.47-.15-.67.15-.2.31-.77.96-.94 1.16-.17.2-.35.22-.66.08-.3-.15-1.27-.46-2.42-1.47-.89-.77-1.49-1.73-1.67-2.03-.17-.31-.02-.47.13-.62.14-.14.31-.36.46-.54.15-.18.2-.31.3-.52.1-.2.05-.39-.02-.54-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51l-.57-.01c-.19 0-.5.07-.76.36-.26.31-.98.95-.98 2.32s1 .67 1.14.97c.14.31.88 1.68 2.13 2.74 1.47 1.22 2.72 1.59 3.03 1.77.31.16.49.15.67-.09.21-.23.78-.91.98-1.22.2-.31.42-.26.7-.16.3.1 1.87.88 2.19 1.04.31.16.51.23.58.36.07.13.07.75-.18 1.47Z"
                />
              </svg>
              <span>{t("btn_whatsapp")}</span>
            </a>

            {/* Email */}
            <a
              href="mailto:tinchoparedess@gmail.com?subject=Contacto%20desde%20tu%20web"
              className="btn btn-ghost btn-gold"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2v.01L12 13 4 6.01V6h16ZM4 18V8.24l7.4 6.17a1 1 0 0 0 1.2 0L20 8.24V18H4Z"
                />
              </svg>
              <span>{t("btn_email")}</span>
            </a>

            {/* Teléfono */}
            <a href="tel:+393481794230" className="btn btn-ghost btn-gold">
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
