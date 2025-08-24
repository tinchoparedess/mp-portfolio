export default function ContactBar({
  whatsapp,
  email,
  phone,
}: {
  whatsapp?: string;
  email?: string;
  phone?: string;
}) {
  const waLink = whatsapp ? `https://wa.me/${whatsapp}` : "#";
  const mailLink = email ? `mailto:${email}` : "#";
  const telLink = phone ? `tel:${phone.replace(/\s+/g, "")}` : "#";

  const btn =
    "px-4 py-2 rounded-xl border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition";

  return (
    <div className="flex flex-wrap gap-3">
      <a className={`${btn} bg-black text-white dark:bg-[#C8A951] dark:text-black`} href={waLink} target="_blank" rel="noreferrer">WhatsApp</a>
      <a className={btn} href={mailLink}>Email</a>
      <a className={btn} href={telLink}>Llamar</a>
    </div>
  );
}
