type Props = {
  whatsapp?: string;
  email?: string;
  phone?: string;
};

export default function ContactBar({ whatsapp, email, phone }: Props) {
  const waLink = whatsapp ? `https://wa.me/${whatsapp}` : "#";
  const mailLink = email ? `mailto:${email}` : "#";
  const phoneLink = phone ? `tel:${phone}` : "#";

  return (
    <div className="flex flex-wrap gap-3">
      <a className="px-4 py-2 rounded-xl bg-black text-white hover:bg-[#C8A951] hover:text-black transition" href={waLink} target="_blank" rel="noreferrer">
        WhatsApp
      </a>
      <a className="px-4 py-2 rounded-xl border border-neutral-300 hover:border-[#C8A951] hover:bg-neutral-100 transition" href={mailLink}>
        Email
      </a>
      <a className="px-4 py-2 rounded-xl border border-neutral-300 hover:border-[#C8A951] hover:bg-neutral-100 transition" href={phoneLink}>
        Llamar
      </a>
    </div>
  );
}
