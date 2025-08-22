type Props = {
    quote: string;
    author: string;
    role?: string;
  };
  
  export default function TestimonialCard({ quote, author, role }: Props) {
    return (
      <figure className="rounded-2xl border border-neutral-200/70 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5">
        <blockquote className="italic text-neutral-700 dark:text-neutral-300">“{quote}”</blockquote>
        <figcaption className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
          — <span className="font-medium">{author}</span>{role ? ` · ${role}` : ""}
        </figcaption>
      </figure>
    );
  }
  