type Props = { images: string[] };

export default function Gallery({ images }: Props) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {images.map((src, i) => (
        <div
          key={i}
          className="h-36 sm:h-40 md:h-48 rounded-xl border border-[#C8A951]/30 bg-neutral-100 overflow-hidden"
        >
          {/* Cuando tengas imágenes reales en /public, usá:
          <img src={src} alt="" className="w-full h-full object-cover" /> */}
        </div>
      ))}
    </div>
  );
}
