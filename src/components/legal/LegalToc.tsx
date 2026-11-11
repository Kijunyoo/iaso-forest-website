interface LegalTocItem {
  id: string;
  title: string;
}

interface LegalTocProps {
  items: LegalTocItem[];
  label?: string;
}

export default function LegalToc({ items, label }: LegalTocProps) {
  return (
    <nav aria-label={label} className="rounded-iaso bg-iaso-beige-50 border border-iaso-beige-300 p-5 md:p-6">
      {label && (
        <p className="mb-3 text-lg font-bold text-iaso-text">{label}</p>
      )}
      <ol className="space-y-1">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="flex min-h-12 items-center text-base md:text-lg text-iaso-green underline underline-offset-4 leading-relaxed"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
