import Link from 'next/link';
import { FAQ_COPY } from './copy';

interface GardenFaqProps {
  /** 채널이 열리지 않아 F5, F6 을 빼야 할 때 ['faq-ask'] */
  excludeIds?: string[];
}

export default function GardenFaq({ excludeIds = [] }: GardenFaqProps) {
  const items = FAQ_COPY.items.filter((i) => !excludeIds.includes(i.id));
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-iaso max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-iaso-green leading-snug mb-8">
          {FAQ_COPY.title.text}
        </h2>
        <dl className="space-y-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="rounded-iaso border border-iaso-beige-300 p-5 md:p-6"
            >
              <dt className="text-lg md:text-xl font-bold text-iaso-text leading-snug mb-3">
                {item.question.text}
              </dt>
              <dd className="text-base md:text-lg text-iaso-text leading-loose">
                {item.answer.text}
                {item.link && (
                  <>
                    <Link
                      href={item.link.href}
                      className="inline-flex items-center min-h-12 font-semibold text-iaso-green underline underline-offset-4"
                    >
                      {item.link.text}
                    </Link>
                    {item.link.suffix}
                  </>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
