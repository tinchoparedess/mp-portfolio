type Props = { images: string[] };

export default function Gallery({ images }: Props) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {images.map((src, i) => (
        <div key={i} className="aspect-[4/3] overflow-hidden rounded-2xl border card">
          {/* Cuando subas imágenes reales en /public, reemplazá por:
             <img src={src} alt="" className="w-full h-full object-cover" /> */}
        </div>
      ))}
    </div>
  );
}
