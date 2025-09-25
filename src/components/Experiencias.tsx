// src/components/Experiencias.tsx
"use client";

import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import { useI18n } from "@/i18n/I18nProvider";

/* ===================== DESCRIPCIONES POR IDIOMA ===================== */
const descByLang: Record<string, Record<string, string>> = {
  es: {
    cortina: "Un año en la montaña. Precisión, ritmo y elegancia alpina.",
    iran: "Veinte días viajando en bus, té y poesía persa. Un baño espiritual.",
    balcanes: "Albania, Montenegro y Bosnia: caminos salvajes y hospitalidad cruda.",
    republicadominicana: "Tres meses recorriendo la isla en autoestop. Caribe profundo.",
    argentina: "El país entero a dedo. Conexión con lo simple y la aventura pura.",
    brasil: "Aprendí portugués, hice amigos y cambié mi forma de ver la vida.",
    chile: "Mi primer viaje en solitario, el comienzo de todo.",
  },
  en: {
    cortina: "A year in the mountains. Precision, pace, alpine elegance.",
    iran: "Twenty days by bus—tea and Persian poetry. A spiritual bath.",
    balcanes: "Albania, Montenegro & Bosnia: raw roads and hospitality.",
    republicadominicana: "Three months hitchhiking the island. Deep Caribbean.",
    argentina: "The whole country hitchhiking. Pure adventure and simplicity.",
    brasil: "I learned Portuguese, made friends, and changed my outlook.",
    chile: "My first solo trip—the beginning of everything.",
  },
  pt: {
    cortina: "Um ano na montanha. Precisão, ritmo e elegância alpina.",
    iran: "Vinte dias de ônibus, chá e poesia persa. Um banho espiritual.",
    balcanes: "Albânia, Montenegro e Bósnia: estradas cruas e hospitalidade.",
    republicadominicana: "Três meses de carona pela ilha. Caribe profundo.",
    argentina: "O país inteiro de carona. Aventura pura e simplicidade.",
    brasil: "Aprendi português, fiz amigos e mudei meu olhar.",
    chile: "Minha primeira viagem solo. O começo de tudo.",
  },
  it: {
    cortina: "Un anno in montagna. Precisione, ritmo ed eleganza alpina.",
    iran: "Venti giorni in bus. Tè e poesia persiana. Un bagno spirituale.",
    balcanes: "Albania, Montenegro e Bosnia: strade crude e ospitalità.",
    republicadominicana: "Tre mesi in autostop per l’isola. Caraibi profondi.",
    argentina: "Tutto il Paese in autostop. Avventura pura e semplicità.",
    brasil: "Ho imparato il portoghese, fatto amici e cambiato sguardo.",
    chile: "Il mio primo viaggio in solitaria, l’inizio di tutto.",
  },
};

function AutoPlay(slider: any, interval = 3500) {
  let timer: any;
  let mouseOver = false;
  const clear = () => timer && clearTimeout(timer);
  const next = () => !mouseOver && slider.next();
  const start = () => { clear(); timer = setTimeout(next, interval); };

  slider.on("created", () => {
    slider.container.addEventListener("mouseenter", () => { mouseOver = true; clear(); });
    slider.container.addEventListener("mouseleave", () => { mouseOver = false; start(); });
    document.addEventListener("visibilitychange", () => { if (document.hidden) clear(); else start(); });
    start();
  });
  slider.on("dragStarted", clear);
  slider.on("animationEnded", start);
  slider.on("updated", start);
}

// Blur base (1x1 PNG transparente). Opcional: si tenés blurDataURL por imagen, reemplazalo.
const BLUR =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGP4BwQACgAB/xtfH9wAAAAASUVORK5CYII=";

export default function Experiencias() {
  const { t, lang } = useI18n();
  const get = (key: string) => (descByLang[lang] ?? descByLang.es)[key] ?? descByLang.es[key];

  const EXPERIENCIAS = [
    { lugar: "Cortina d’Ampezzo", key: "cortina", bandera: "🇮🇹",
      fotos: ["/exp/cortina1.jpg","/exp/cortina2.jpg","/exp/cortina3.jpg"] },
    { lugar: "Irán", key: "iran", bandera: "🇮🇷",
      fotos: ["/exp/iran1.jpg","/exp/iran2.jpg","/exp/iran3.jpg"] },
    { lugar: "Balcanes", key: "balcanes", bandera: "🇦🇱🇲🇪🇧🇦",
      fotos: ["/exp/balcanes1.jpg","/exp/balcanes2.jpg","/exp/balcanes3.jpg"] },
    { lugar: "República Dominicana", key: "republicadominicana", bandera: "🇩🇴",
      fotos: ["/exp/republicadominicana1.jpg","/exp/republicadominicana2.jpg","/exp/republicadominicana3.jpg"] },
    { lugar: "Argentina", key: "argentina", bandera: "🇦🇷",
      fotos: ["/exp/argentina1.jpg","/exp/argentina2.jpg","/exp/argentina3.jpg"] },
    { lugar: "Brasil", key: "brasil", bandera: "🇧🇷",
      fotos: ["/exp/brasil1.jpg","/exp/brasil2.jpg","/exp/brasil3.jpg"] },
    { lugar: "Chile", key: "chile", bandera: "🇨🇱",
      fotos: ["/exp/chile1.jpg","/exp/chile2.jpg","/exp/chile3.jpg"] },
  ];

  return (
    <section id="experiencias" className="section container-pro">
      <div className="text-center">
        <h2 className="section-title underline">{t("nav_experiencias")}</h2>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 exp-grid">
        {EXPERIENCIAS.map((exp, idx) => (
          <ExpCard
            key={idx}
            titulo={exp.lugar}
            desc={get(exp.key)}
            bandera={exp.bandera}
            fotos={exp.fotos}
            eager={idx === 0} // SOLO el primer card hace LCP
          />
        ))}
      </div>
    </section>
  );
}

function ExpCard({
  titulo,
  desc,
  bandera,
  fotos,
  eager,
}: {
  titulo: string;
  desc: string;
  bandera: string;
  fotos: string[];
  eager?: boolean;
}) {
  const [current, setCurrent] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      renderMode: "precision",
      slides: { perView: 1 },
      slideChanged(s) { setCurrent(s.track.details.rel); },
      created(s) { setCurrent(s.track.details.rel); },
    },
    [(s) => AutoPlay(s, 3500)]
  );

  return (
    <article className="panel max-w-md w-full p-5 lg:p-6 mx-auto">
      <header className="mb-4 text-center">
        <h3 className="text-lg font-semibold tracking-tight">
          <span className="mr-2">{bandera}</span>
          {titulo}
        </h3>
        <p className="text-sm text-muted-foreground mt-1">{desc}</p>
      </header>

      <div className="relative">
        <div
          ref={sliderRef}
          className="keen-slider rounded-xl overflow-hidden border border-black/5 dark:border-white/10"
        >
          {fotos.map((src, i) => (
            <div key={i} className="keen-slider__slide">
              <div className="relative w-full aspect-[3/4] sm:aspect-[4/3]">
                <Image
                  src={src}
                  alt=""
                  fill
                  // tamaños realistas: móvil 100vw, tablet 50vw, desktop ~480px
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
                  // Solo el primer slide del primer card es prioridad (LCP)
                  priority={!!eager && i === 0}
                  fetchPriority={eager && i === 0 ? "high" : "auto"}
                  placeholder="blur"
                  blurDataURL={BLUR}
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        <button
          aria-label="Anterior"
          onClick={() => instanceRef.current?.prev()}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 grid place-items-center w-9 h-9 rounded-full border border-white/15 bg-white/8 dark:bg-white/5 backdrop-blur hover:bg-white/15"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
            <path fill="currentColor" d="M15.5 5.5 9 12l6.5 6.5-1.4 1.4L6.2 12l7.9-7.9 1.4 1.4Z"/>
          </svg>
        </button>
        <button
          aria-label="Siguiente"
          onClick={() => instanceRef.current?.next()}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 grid place-items-center w-9 h-9 rounded-full border border-white/15 bg-white/8 dark:bg-white/5 backdrop-blur hover:bg-white/15"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
            <path fill="currentColor" d="m8.5 5.5 1.4-1.4L17.8 12l-7.9 7.9-1.4-1.4L14 12 8.5 6.5Z"/>
          </svg>
        </button>

        <div className="mt-3 flex items-center justify-center gap-2">
          {fotos.map((_, i) => (
            <button
              key={i}
              onClick={() => instanceRef.current?.moveToIdx(i)}
              aria-label={`Ir a foto ${i + 1}`}
              className="h-2 rounded-full transition-all"
              style={{
                width: i === current ? 18 : 6,
                background:
                  i === current
                    ? "linear-gradient(90deg, var(--gold-2), var(--gold-1))"
                    : "rgba(255,255,255,.25)",
              }}
            />
          ))}
        </div>
      </div>
    </article>
  );
}
