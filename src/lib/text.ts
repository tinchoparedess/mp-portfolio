// src/lib/text.ts
export const cleanDashes = (s: string = "") =>
  s.replace(/\s*[–—]\s*/g, " ");
