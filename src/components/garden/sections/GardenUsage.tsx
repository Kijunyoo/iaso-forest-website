import { USAGE_COPY } from './copy';

interface GardenUsageProps {
  /** 게시 직전 가동 확인이 안 된 조건부 문장 번호 (예 ['C5', 'C10', 'C11', 'C12']) */
  excludeIds?: string[];
}

export default function GardenUsage({ excludeIds = [] }: GardenUsageProps) {
  return (
    <section className="py-16 md:py-20 bg-iaso-bg">
      <div className="container-iaso">
        <h2 className="text-2xl md:text-3xl font-bold text-iaso-green leading-snug mb-10 text-center">
          {USAGE_COPY.title.text}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {USAGE_COPY.cards.map((card) => {
            const lines = card.lines.filter((l) => !excludeIds.includes(l.id));
            return (
              <article
                key={card.id}
                className="bg-white rounded-iaso shadow-iaso-sm p-6 md:p-8"
              >
                <h3 className="text-xl md:text-2xl font-bold text-iaso-text leading-snug mb-4">
                  {card.title.text}
                </h3>
                <ul className="space-y-3">
                  {lines.map((line) => (
                    <li
                      key={line.id}
                      className="text-base md:text-lg text-iaso-text leading-loose"
                    >
                      {line.text}
                    </li>
                  ))}
                </ul>
                {card.notes && (
                  <div className="mt-5 rounded-iaso bg-iaso-beige-100 border border-iaso-beige-300 p-4">
                    {card.notes.map((note) => (
                      <p
                        key={note.id}
                        className="text-base md:text-lg font-medium text-iaso-text leading-loose"
                      >
                        {note.text}
                      </p>
                    ))}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
