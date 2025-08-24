export default function SectionTitle({
  children,
  note,
}: {
  children: React.ReactNode;
  note?: string;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-end justify-between">
        <h2 className="text-xl font-semibold tracking-tight">
          {children}
        </h2>
        <span className="h-[2px] w-12 rounded-full bg-black/10 dark:bg-[#C8A951]/70" />
      </div>
      {note ? (
        <p className="text-[13px] leading-5 text-neutral-500 dark:text-neutral-400">
          {note}
        </p>
      ) : null}
    </div>
  );
}
