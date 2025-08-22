type Props = {
  whatsapp?: string; // "54911XXXXXXX"
  email?: string;    // "tu-email@ejemplo.com"
  phone?: string;    // "+39 3XX XXX XXXX"
};

export default function ContactBar({ whatsapp, email, phone }: Props) {
  const waLink = whatsapp ? `https://wa.me/${whatsapp}` : "#";
  const mailLink = email ? `mailto:${email}` : "#";
  const phoneLink = phone ? `tel:${phone}` : "#";

  return (
    <div className="flex flex-wrap gap-3">
      <a className="btn" href={waLink} target="_blank" rel="noreferrer">WhatsApp</a>
      <a className="btn-outline" href={mailLink}>Email</a>
      <a className="btn-outline" href={phoneLink}>Llamar</a>
    </div>
  );
}
