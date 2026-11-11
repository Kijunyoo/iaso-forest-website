import { INTRO_COPY } from './copy';

export default function GardenIntro() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container-iaso max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-iaso-green leading-snug mb-8">
          {INTRO_COPY.title.text}
        </h2>
        <ul className="space-y-4">
          {INTRO_COPY.lines.map((line) => (
            <li
              key={line.id}
              className="text-lg md:text-xl text-iaso-text leading-loose"
            >
              {line.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
