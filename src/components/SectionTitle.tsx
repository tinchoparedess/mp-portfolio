"use client";

export default function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div>
      <h2 className="text-xl md:text-2xl font-semibold tracking-tight">{title}</h2>
      {subtitle && (
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
          {subtitle}
        </p>
      )}
    </div>
  );
}
