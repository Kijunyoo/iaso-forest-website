import { UPCOMING_COPY } from './copy';

export default function GardenUpcoming() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-iaso max-w-3xl">
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-iaso-green leading-snug">
            {UPCOMING_COPY.title.text}
          </h2>
          <span className="inline-flex items-center rounded-full bg-iaso-gold text-white text-base font-semibold px-4 py-1">
            {UPCOMING_COPY.badge.text}
          </span>
        </div>
        <p className="text-lg md:text-xl text-iaso-text leading-loose mb-6">
          {UPCOMING_COPY.lead.text}
        </p>
        <ul className="space-y-3 mb-6">
          {UPCOMING_COPY.lines.map((line) => (
            <li
              key={line.id}
              className="text-base md:text-lg text-iaso-text leading-loose"
            >
              {line.text}
            </li>
          ))}
        </ul>
        <p className="text-base md:text-lg font-medium text-iaso-text-light leading-loose">
          {UPCOMING_COPY.closing.text}
        </p>
      </div>
    </section>
  );
}
