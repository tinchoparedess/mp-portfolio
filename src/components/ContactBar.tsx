type Props = {
  whatsapp?: string; // "39XXXXXXXXX"
  email?: string;    // "tu-email@ejemplo.com"
  phone?: string;    // "+39XXXXXXXXX"
};

export default function ContactBar({ whatsapp, email, phone }: Props) {
  const waLink = whatsapp ? `https://wa.me/${whatsapp}` : "#";
  const mailLink = email ? `mailto:${email}` : "#";
  const phoneLink = phone ? `tel:${phone}` : "#";

  const btn = "px-4 py-2 rounded-xl border hover:bg-neutral-50 dark:hover:bg-neutral-900";
  return (
    <div className="flex flex-wrap gap-3">
      <a className={btn} href={waLink} target="_blank" rel="noreferrer">WhatsApp</a>
      <a className={btn} href={mailLink}>Email</a>
      <a className={btn} href={phoneLink}>Llamar</a>
    </div>
  );
}
