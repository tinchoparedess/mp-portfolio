type CardProps = {
  title: string;
  subtitle?: string;
  metric?: string;
  children?: React.ReactNode;
};

export default function Card({ title, subtitle, metric, children }: CardProps) {
  return (
    <div className="card">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
          {subtitle && (
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-0.5">
              {subtitle}
            </p>
          )}
        </div>
        {metric && (
          <span className="px-2.5 py-1 text-xs rounded-full border"
                style={{ borderColor: "rgba(200,169,81,.5)", color: "var(--black)" }}>
            {metric}
          </span>
        )}
      </div>
      {children && <div className="mt-3 text-sm text-neutral-700 dark:text-neutral-300">{children}</div>}
    </div>
  );
}
