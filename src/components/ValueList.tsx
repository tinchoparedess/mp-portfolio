"use client";

import Reveal from "@/components/Reveal";

type ValueListProps = {
  items: { title: string; copy: string }[];
  /** columnas en desktop: 1 o 2 (por defecto 1) */
  cols?: 1 | 2;
  /** retraso inicial para el primer ítem (s) */
  delayStart?: number;
  /** separación entre ítems (stagger, en s) */
  stagger?: number;
};

export default function ValueList({
  items,
  cols = 1,
  delayStart = 0.05,
  stagger = 0.06,
}: ValueListProps) {
  return (
    <ul
      className="vis-list"
      style={
        {
          // 👉 seteamos la cantidad de columnas en una CSS variable
          // para poder forzar 1 col en mobile desde el CSS global
          ["--cols" as any]:
            cols === 2 ? "repeat(2, minmax(0, 1fr))" : "repeat(1, minmax(0, 1fr))",
        } as React.CSSProperties
      }
    >
      {items.map((item, i) => (
        <Reveal key={item.title + i} as="li" delay={delayStart + i * stagger}>
          <div className="vis-title">{item.title}</div>
          <div className="vis-copy">{item.copy}</div>
        </Reveal>
      ))}
    </ul>
  );
}
