"use client";

import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

/* ===================== DATA ===================== */
const EXPERIENCIAS = [
  {
    lugar: "Cortina d’Ampezzo",
    bandera: "🇮🇹",
    desc: "Un año en la montaña. Precisión, ritmo y elegancia alpina.",
    fotos: ["/exp/cortina1.jpg", "/exp/cortina2.jpg", "/exp/cortina3.jpg"],
  },
  {
    lugar: "Irán",
    bandera: "🇮🇷",
    desc: "Veinte días viajando en bus, té y poesía persa. Un baño espiritual.",
    fotos: ["/exp/iran1.jpg", "/exp/iran2.jpg", "/exp/iran3.jpg"],
  },
  {
    lugar: "Balcanes",
    bandera: "🇦🇱🇲🇪🇧🇦",
    desc: "Albania, Montenegro y Bosnia: caminos salvajes y hospitalidad cruda.",
    fotos: ["/exp/balcanes1.jpg", "/exp/balcanes2.jpg", "/exp/balcanes3.jpg"],
  },
  {
    lugar: "República Dominicana",
    bandera: "🇩🇴",
    desc: "Tres meses recorriendo la isla en autoestop. Caribe profundo.",
    fotos: [
      "/exp/republicadominicana1.jpg",
      "/exp/republicadominicana2.jpg",
      "/exp/republicadominicana3.jpg",
    ],
  },
  {
    lugar: "Argentina",
    bandera: "🇦🇷",
    desc: "El país entero a dedo. Conexión con lo simple y la aventura pura.",
    fotos: ["/exp/argentina1.jpg", "/exp/argentina2.jpg", "/exp/argentina3.jpg"],
  },
  {
    lugar: "Brasil",
    bandera: "🇧🇷",
    desc: "Aprendí portugués, hice amigos y cambié mi forma de ver la vida.",
    fotos: ["/exp/brasil1.jpg", "/exp/brasil2.jpg", "/exp/brasil3.jpg"],
  },
  {
    lugar: "Chile",
    bandera: "🇨🇱",
    desc: "Mi primer viaje en solitario, el comienzo de todo.",
    fotos: ["/exp/chile1.jpg", "/exp/chile2.jpg", "/exp/chile3.jpg"],
  },
];

/* ===================== AUTOPLAY SÓLIDO ===================== */
function AutoPlay(slider: any, interval = 3500) {
  let timer: any;
  let mouseOver = false;

  const clear = () => timer && clearTimeout(timer);
  const next = () => !mouseOver && slider.next();
  const start = () => {
    clear();
    timer = setTimeout(next, interval);
  };

  slider.on("created", () => {
    slider.container.addEventListener("mouseenter", () => {
      mouseOver = true;
      clear();
    });
    slider.container.addEventListener("mouseleave", () => {
      mouseOver = false;
      start();
    });
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) clear();
      else start();
    });
    start();
  });

  slider.on("dragStarted", clear);
  slider.on("animationEnded", start);
  slider.on("updated", start);
}

/* ===================== UI ===================== */
export default function Experiencias() {
  return (
    <section id="experiencias" className="section container-pro">
      <div className="text-center">
        <h2 className="section-title underline">Experiencias</h2>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 exp-grid">
        {EXPERIENCIAS.map((exp, i) => (
          <ExpCard key={i} exp={exp} />
        ))}
      </div>
    </section>
  );
}

function ExpCard({ exp }: { exp: (typeof EXPERIENCIAS)[0] }) {
  const [current, setCurrent] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      renderMode: "precision",
      slides: { perView: 1 },
      slideChanged(s) {
        setCurrent(s.track.details.rel);
      },
      created(s) {
        setCurrent(s.track.details.rel);
      },
    },
    [(s) => AutoPlay(s, 3500)]
  );

  return (
    <article className="panel max-w-md w-full p-5 lg:p-6 mx-auto">
      <header className="mb-4 text-center">
        <h3 className="text-lg font-semibold tracking-tight">
          <span className="mr-2">{exp.bandera}</span>
          {exp.lugar}
        </h3>
        <p className="text-sm text-muted-foreground mt-1">{exp.desc}</p>
      </header>

      <div className="relative">
        {/* Slider */}
        <div
          ref={sliderRef}
          className="keen-slider rounded-xl overflow-hidden border border-black/5 dark:border-white/10"
        >
          {exp.fotos.map((src, i) => (
            <div key={i} className="keen-slider__slide">
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 90vw, 500px"
                  className="object-cover"
                  priority={i === 0}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          aria-label="Anterior"
          onClick={() => instanceRef.current?.prev()}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 grid place-items-center w-9 h-9 rounded-full border border-white/15 bg-white/8 dark:bg-white/5 backdrop-blur hover:bg-white/15"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="currentColor"
              d="M15.5 5.5 9 12l6.5 6.5-1.4 1.4L6.2 12l7.9-7.9 1.4 1.4Z"
            />
          </svg>
        </button>
        <button
          aria-label="Siguiente"
          onClick={() => instanceRef.current?.next()}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 grid place-items-center w-9 h-9 rounded-full border border-white/15 bg-white/8 dark:bg-white/5 backdrop-blur hover:bg-white/15"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="currentColor"
              d="m8.5 5.5 1.4-1.4L17.8 12l-7.9 7.9-1.4-1.4L14 12 8.5 6.5Z"
            />
          </svg>
        </button>

        {/* Dots */}
        <div className="mt-3 flex items-center justify-center gap-2">
          {exp.fotos.map((_, i) => (
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
