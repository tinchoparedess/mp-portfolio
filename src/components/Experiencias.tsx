"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

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

export default function Experiencias() {
  return (
    <section id="experiencias" className="section container-pro">
      <h2 className="section-title underline text-center">Experiencias</h2>

      {/* Grid; la última queda centrada si el total es impar (ver regla .exp-grid en global.css) */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 exp-grid">
        {EXPERIENCIAS.map((exp, i) => (
          <ExpCard key={i} exp={exp} />
        ))}
      </div>
    </section>
  );
}

function ExpCard({ exp }: { exp: (typeof EXPERIENCIAS)[0] }) {
  // Sin gesto de arrastre; solo flechas
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: { perView: 1 },
  });

  const prev = () => instanceRef.current?.prev();
  const next = () => instanceRef.current?.next();

  return (
    <article className="panel max-w-md w-full p-5 lg:p-6">
      {/* Texto */}
      <header className="mb-4 text-center">
        <h3 className="text-lg font-semibold tracking-tight">
          <span className="mr-2">{exp.bandera}</span>
          {exp.lugar}
        </h3>
        <p className="text-sm text-muted-foreground mt-1">{exp.desc}</p>
      </header>

      {/* Carrusel */}
      <div className="relative">
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
                  priority={false}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Flechas transparentes (minimal lujo) */}
        <button
          type="button"
          onClick={prev}
          aria-label="Anterior"
          className="absolute left-2 top-1/2 -translate-y-1/2 grid place-items-center w-9 h-9 rounded-full
                     bg-black/0 hover:bg-black/10 dark:hover:bg-white/10
                     border border-transparent hover:border-[color-mix(in_oklab,var(--gold-2),transparent)]
                     backdrop-blur-sm transition"
        >
          <ChevronLeft />
        </button>

        <button
          type="button"
          onClick={next}
          aria-label="Siguiente"
          className="absolute right-2 top-1/2 -translate-y-1/2 grid place-items-center w-9 h-9 rounded-full
                     bg-black/0 hover:bg-black/10 dark:hover:bg-white/10
                     border border-transparent hover:border-[color-mix(in_oklab,var(--gold-2),transparent)]
                     backdrop-blur-sm transition"
        >
          <ChevronRight />
        </button>
      </div>
    </article>
  );
}

/* Íconos minimalistas (SVG) */
function ChevronLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"
      />
    </svg>
  );
}
function ChevronRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M8.59 16.59 10 18l6-6-6-6-1.41 1.41L13.17 12z"
      />
    </svg>
  );
}
