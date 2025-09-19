"use client";

import { motion, type Variants } from "framer-motion";
import React, { forwardRef } from "react";

type Props = {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
  id?: string;
  delay?: number;
  y?: number;
};

const variants: Variants = {
  hidden: { opacity: 0, y: 24, ["--u" as any]: 0 },   // <-- CSS var para el subrayado
  show: (customDelay = 0) => ({
    opacity: 1,
    y: 0,
    ["--u" as any]: 1,                                 // <-- pasa de 0 a 1
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      delay: customDelay,
    },
  }),
};

const Reveal = forwardRef<HTMLElement, Props>(function Reveal(
  { children, as: Tag = "section", className, id, delay = 0, y = 24 },
  ref
) {
  const MotionTag = motion(Tag) as any;

  return (
    <MotionTag
      ref={ref as any}
      id={id}
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.22 }}
      custom={delay}
    >
      {children}
    </MotionTag>
  );
});

export default Reveal;
