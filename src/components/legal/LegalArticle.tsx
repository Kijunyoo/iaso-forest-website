import type { ReactNode } from 'react';

interface LegalArticleProps {
  id: string;
  title: string;
  children: ReactNode;
}

export default function LegalArticle({ id, title, children }: LegalArticleProps) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="mb-4 border-b border-iaso-beige-300 pb-3 text-xl md:text-2xl font-bold text-iaso-text leading-snug">
        {title}
      </h2>
      <div className="space-y-4 text-base md:text-lg text-iaso-text leading-loose">
        {children}
      </div>
    </section>
  );
}
