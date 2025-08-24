export default function ContactBar({
  whatsapp,
  email,
  phone,
}: { whatsapp?: string; email?: string; phone?: string }) {
  const waLink = whatsapp ? `https://wa.me/${whatsapp}` : "#";
  const mailLink = email ? `mailto:${email}` : "#";
  const telLink = phone ? `tel:${phone}` : "#";

  const Btn = (props: any) => (
    <a
      {...props}
      className="rounded-2xl border px-4 py-2 text-sm
                 border-neutral-300 hover:bg-neutral-100
                 dark:border-[color-mix(in_srgb,var(--gold)_45%,transparent)]
                 dark:hover:bg-[rgba(200,169,81,0.06)]"
      style={{ ["--gold" as any]: "#c8a951" }}
    />
  );

  return (
    <div className="flex flex-wrap gap-3">
      <Btn href={waLink}>WhatsApp</Btn>
      <Btn href={mailLink}>Email</Btn>
      <Btn href={telLink}>Llamar</Btn>
    </div>
  );
}
