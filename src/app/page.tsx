"use client";

import Navbar from "@/components/Navbar";
import { useI18n } from "@/i18n/I18nProvider";
// import GuestbookSection from "@/components/GuestbookSection"; // Oculto temporalmente
import Experiencias from "@/components/Experiencias";
import ValueList from "@/components/ValueList";
import Reveal from "@/components/Reveal";
import { useMemo } from "react";

export default function Page() {
  const { t, lang } = useI18n(); // "es" | "en" | "pt" | "it"

  // helper: traducción con fallback
  const tr = (k: string, fb: string) => {
    const v = t(k);
    return v && v !== k ? v : fb;
  };

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

  // === Textos largos por idioma (about + listas) ===
  const contentByLang = {
    es: {
      about:
        "Martín. Inquieto por naturaleza, curioso por elección. Persigo lo esencial: la elegancia que sirve, el detalle que habla. Creo en el arte de hacer las cosas bien, con calidez y conciencia.",
      highlights: [
        { title: "Adaptabilidad", copy: "Me integro a ritmos y contextos distintos sin perder calidad." },
        { title: "Comunicación / Idiomas", copy: "Aprender y expresarme en otros idiomas, escuchando primero para conectar mejor." },
        { title: "Servicio cálido", copy: "Atención humana y elegante, con detalles que hacen la diferencia." },
        { title: "Precisión / Ritmo", copy: "Organizar el tiempo, afinar el resultado." },
      ],
      vision: [
        { title: "Horizontes nuevos", copy: "Viajar es mi manera de aprender: vivir en primera persona, observar con atención, construir criterio propio." },
        { title: "Elegancia funcional", copy: "La belleza está en lo esencial. Sin ruido, con intención clara y resultados que trascienden." },
        { title: "Escuchar antes de construir", copy: "El verdadero valor nace al escuchar. Detectar la necesidad real es el inicio de todo lo que tiene sentido." },
      ],
      ideas: [
        { title: "Crear sin ruido", copy: "Las obras verdaderas nacen de la claridad: espacios, proyectos y experiencias que permiten que lo esencial resuene." },
        { title: "Comodidad elevada", copy: "El lujo no está en el exceso, sino en hacer que cada detalle sirva a la grandeza de un propósito." },
        { title: "Elegancia como camino", copy: "Sobriedad con carácter: estilo que no distrae, acompaña y sostiene lo importante." },
        { title: "Inspiración que trasciende", copy: "Crear con horizonte alto: obras que dialogan con lo eterno y atraviesan épocas." },
        { title: "Prosperidad consciente", copy: "Expandir valor con intención: ideas, energía y riqueza que elevan a quienes caminan cerca." },
      ],
    },
    en: {
      about:
        "Martín. Restless by nature, curious by choice. I pursue the essential: elegance that serves, details that speak. I believe in doing things well—with warmth and conscience.",
      highlights: [
        { title: "Adaptability", copy: "I adjust to different rhythms and contexts without losing quality." },
        { title: "Communication / Languages", copy: "Learning and expressing in other languages, listening first to connect better." },
        { title: "Warm service", copy: "Human, elegant attention—details that make the difference." },
        { title: "Precision / Pace", copy: "Time organization, tuned outcomes." },
      ],
      vision: [
        { title: "New horizons", copy: "Travel is how I learn: first-hand living, attentive observation, building my own criteria." },
        { title: "Functional elegance", copy: "Beauty lies in the essential. No noise, clear intent, results that last." },
        { title: "Listen before building", copy: "True value begins with listening. Seeing the real need is the start of anything meaningful." },
      ],
      ideas: [
        { title: "Create without noise", copy: "True works are born from clarity: spaces, projects and experiences where the essential resonates." },
        { title: "Elevated comfort", copy: "Luxury isn’t excess—every detail serves a greater purpose." },
        { title: "Elegance as a path", copy: "Sober character: style that doesn’t distract; it supports what matters." },
        { title: "Inspiration that endures", copy: "Build with a long horizon: works that converse with the timeless." },
        { title: "Conscious prosperity", copy: "Expand value with intention—ideas, energy and wealth that uplift those around." },
      ],
    },
    pt: {
      about:
        "Martín. Inquieto por natureza, curioso por escolha. Persigo o essencial: a elegância que serve, o detalhe que fala. Acredito em fazer bem feito, com calor e consciência.",
      highlights: [
        { title: "Adaptabilidade", copy: "Entro em diferentes ritmos e contextos sem perder qualidade." },
        { title: "Comunicação / Idiomas", copy: "Aprender e me expressar em outros idiomas, ouvindo primeiro para conectar melhor." },
        { title: "Atendimento caloroso", copy: "Atenção humana e elegante, com detalhes que fazem a diferença." },
        { title: "Precisão / Ritmo", copy: "Organizar o tempo, afinar o resultado." },
      ],
      vision: [
        { title: "Novos horizontes", copy: "Viajar é meu modo de aprender: viver em primeira pessoa, observar com atenção, construir critério próprio." },
        { title: "Elegância funcional", copy: "A beleza está no essencial. Sem ruído, com intenção clara e resultados que permanecem." },
        { title: "Ouvir antes de construir", copy: "O verdadeiro valor nasce ao ouvir. Ver a necessidade real é o começo do que faz sentido." },
      ],
      ideas: [
        { title: "Criar sem ruído", copy: "As obras verdadeiras nascem da clareza: espaços, projetos e experiências onde o essencial ressoa." },
        { title: "Conforto elevado", copy: "O luxo não é excesso—cada detalhe serve a um propósito maior." },
        { title: "Elegância como caminho", copy: "Sobriedade com caráter: estilo que não distrai; sustenta o importante." },
        { title: "Inspiração que atravessa", copy: "Criar com horizonte longo: obras que dialogam com o intemporal." },
        { title: "Prosperidade consciente", copy: "Expandir valor com intenção—ideias, energia e riqueza que elevam quem está por perto." },
      ],
    },
    it: {
      about:
        "Martín. Irrequieto per natura, curioso per scelta. Cerco l’essenziale: l’eleganza che serve, il dettaglio che parla. Credo nel fare bene, con calore e coscienza.",
      highlights: [
        { title: "Adattabilità", copy: "Mi integro in ritmi e contesti diversi senza perdere qualità." },
        { title: "Comunicazione / Lingue", copy: "Imparare ed esprimermi in altre lingue, ascoltando prima per connettere meglio." },
        { title: "Servizio caldo", copy: "Attenzione umana ed elegante—i dettagli fanno la differenza." },
        { title: "Precisione / Ritmo", copy: "Organizzare il tempo, affinare il risultato." },
      ],
      vision: [
        { title: "Nuovi orizzonti", copy: "Viaggiare è il mio modo di imparare: vivere in prima persona, osservare con attenzione, costruire criterio proprio." },
        { title: "Eleganza funzionale", copy: "La bellezza sta nell’essenziale. Niente rumore, intento chiaro, risultati che restano." },
        { title: "Ascoltare prima di costruire", copy: "Il vero valore nasce dall’ascolto. Vedere il bisogno reale è l’inizio di ciò che ha senso." },
      ],
      ideas: [
        { title: "Creare senza rumore", copy: "Le opere vere nascono dalla chiarezza: spazi, progetti ed esperienze dove l’essenziale risuona." },
        { title: "Comfort elevato", copy: "Il lusso non è eccesso—ogni dettaglio serve a uno scopo più grande." },
        { title: "Eleganza come via", copy: "Sobrietà con carattere: stile che non distrae; sostiene l’importante." },
        { title: "Ispirazione che resta", copy: "Creare con orizzonte lungo: opere che dialogano con il senza tempo." },
        { title: "Prosperità consapevole", copy: "Espandere valore con intenzione—idee, energia e ricchezza che elevano chi ti sta vicino." },
      ],
    },
  } as const;

  const { about, highlights, vision, ideas } =
    contentByLang[lang] ?? contentByLang.es;

  return (
    <>
      <Navbar />

      <main className="container-pro">
        {/* HERO */}
        <section id="hero" className="section text-center">
          <div className="panel panel-hero mx-auto max-w-3xl">
            <h1 className="hero-title">{tr("hero_name", "Martín Paredes")}</h1>
            <p className="kicker">
              {tr("hero_quote", "Elegancia funcional. Viajes, visión y creación.")}
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a href="#contacto" className="btn btn-primary">
                <span>{tr("hero_connect", "Conectar")}</span>
              </a>
              <a href="#quien-soy" className="btn btn-ghost btn-gold">
                <span>{tr("hero_more", "Explorar")}</span>
              </a>
            </div>
          </div>
        </section>

        {/* QUIÉN SOY */}
        <section id="quien-soy" className="section text-center">
          <Reveal as="h2" className="section-title underline">
            {t("who_title")}
          </Reveal>
          <span className="kicker" aria-hidden />
          <div className="mx-auto mt-6 max-w-2xl">
            <p className="lead">{about}</p>
          </div>
        </section>

        {/* HIGHLIGHTS */}
        <section id="highlights" className="section text-center">
          <Reveal as="h2" className="section-title underline">
            {t("high_title")}
          </Reveal>
          <p className="kicker">{t("high_kicker")}</p>
          <div className="center-narrow">
            <ValueList items={highlights} cols={2} />
          </div>
        </section>

        {/* EXPERIENCIAS */}
        <Experiencias />

        {/* VISIÓN */}
        <section id="vision" className="section text-center">
          <Reveal as="h2" className="section-title underline">
            {t("vision_title")}
          </Reveal>
          <span className="kicker" aria-hidden />
          <div className="center-narrow">
            <ValueList items={vision} cols={1} />
          </div>
        </section>

        {/* IDEAS */}
        <section id="ideas" className="section text-center">
          <Reveal as="h2" className="section-title underline">
            {t("ideas_title")}
          </Reveal>
          <p className="kicker">{t("ideas_kicker")}</p>
          <div className="center-narrow">
            <ValueList items={ideas} cols={1} />
          </div>
        </section>

        {/* VOCES CERCANAS — oculto temporalmente hasta tener 2–3 testimonios reales */}
        {/* <GuestbookSection /> */}

        {/* CONTACTO */}
        <section id="contacto" className="section text-center">
          <Reveal as="h2" className="section-title underline">
            {t("contact_title")}
          </Reveal>
          <p className="kicker">
            {tr("contact_kicker", "Si algo de lo que viste resuena, conectemos.")}
          </p>

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
            <a href="mailto:tinchoparedess@gmail.com?subject=Contacto%20desde%20tu%20web" className="btn btn-ghost btn-gold">
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

        <footer className="footer">
          {tr("footer", "Con base en Italia · ES/EN/PT/IT")}
        </footer>
      </main>
    </>
  );
}
