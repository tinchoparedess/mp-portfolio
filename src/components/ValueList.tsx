"use client";

import Reveal from "@/components/Reveal";

type ValueListProps = {
  items: { title: string; copy: string }[];
  cols?: 1 | 2;
};

export default function ValueList({ items, cols = 1 }: ValueListProps) {
  return (
    <ul
      className={`vis-list mt-8 grid gap-6 ${
        cols === 2 ? "sm:grid-cols-2" : "sm:grid-cols-1"
      }`}
    >
      {items.map((item, i) => (
        <Reveal
          key={item.title}
          as="li"
          delay={i * 0.1} // aparece uno tras otro
        >
          <div className="vis-title">{item.title}</div>
          <div className="vis-copy">{item.copy}</div>
        </Reveal>
      ))}
    </ul>
  );
}
