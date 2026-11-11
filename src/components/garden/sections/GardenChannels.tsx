import { CHANNEL_COPY } from './copy';

export default function GardenChannels() {
  return (
    <section className="py-16 md:py-20 bg-iaso-beige-50">
      <div className="container-iaso max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-iaso-green leading-snug mb-8">
          {CHANNEL_COPY.title.text}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CHANNEL_COPY.channels.map((ch) => (
            <div
              key={ch.id}
              className="flex flex-col bg-white rounded-iaso shadow-iaso-sm p-6"
            >
              <h3 className="text-xl md:text-2xl font-bold text-iaso-text leading-snug mb-3">
                {ch.name.text}
              </h3>
              <p className="text-base md:text-lg text-iaso-text leading-loose mb-6">
                {ch.description.text}
              </p>
              <a
                href={ch.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary min-h-14 text-lg mt-auto"
              >
                {CHANNEL_COPY.button.text}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
