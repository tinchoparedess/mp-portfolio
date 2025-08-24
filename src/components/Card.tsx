type CardProps = {
  title: string;
  subtitle?: string;
  metric?: string;
  children?: React.ReactNode;
};

export default function Card({ title, subtitle, metric, children }: CardProps) {
  return (
    <div className="rounded-2xl bg-white p-5 border border-[#C8A951]/40 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
          {subtitle && <p className="text-sm text-neutral-600 mt-0.5">{subtitle}</p>}
        </div>
        {metric && (
          <span className="px-2.5 py-1 text-xs rounded-full border border-[#C8A951]/60 text-neutral-900">
            {metric}
          </span>
        )}
      </div>
      {children && <div className="mt-3 text-sm text-neutral-700">{children}</div>}
    </div>
  );
}
