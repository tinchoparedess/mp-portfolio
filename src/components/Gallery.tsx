type Props = { images: string[] };

export default function Gallery({ images }: Props) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {images.map((src, i) => (
        <div key={i} className="aspect-[4/3] overflow-hidden rounded-2xl border border-neutral-200/70 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900">
          {/* si aún no tenés imágenes, dejamos cajas vacías elegantes */}
          {/* cuando tengas /public/img1.jpg, usa <img src="/img1.jpg" .../> */}
        </div>
      ))}
    </div>
  );
}
