type CardProps = {
  title: string;
  subtitle?: string;
  metric?: string;
  children?: React.ReactNode;
};

export default function Card({ title, subtitle, metric, children }: CardProps) {
  return (
    <div className="rounded-2xl border border-neutral-200/70 dark:border-neutral-800 bg-white/80 dark:bg-neutral-950/60 backdrop-blur p-5 hover:shadow-sm transition-shadow">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          {subtitle && (
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-0.5">
              {subtitle}
            </p>
          )}
        </div>
        {metric && (
          <span className="px-2.5 py-1 text-xs rounded-full border border-neutral-300/70 dark:border-neutral-700">
            {metric}
          </span>
        )}
      </div>
      {children && <div className="mt-3 text-sm">{children}</div>}
    </div>
  );
}
