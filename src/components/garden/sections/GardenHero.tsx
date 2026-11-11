import Link from 'next/link';
import { HERO_COPY, GARDEN_URLS } from './copy';

interface GardenHeroProps {
  /** A5 채널 추가 버튼 표시 여부. 채널이 일반 방문자에게 열리지 않으면 false */
  showChannelButton?: boolean;
  applyHref?: string;
  channelHref?: string;
}

export default function GardenHero({
  showChannelButton = true,
  applyHref = GARDEN_URLS.apply,
  channelHref = GARDEN_URLS.channelGarden,
}: GardenHeroProps) {
  return (
    <section className="py-16 md:py-24 bg-iaso-beige-50">
      <div className="container-iaso text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-iaso-green leading-snug mb-6">
          {HERO_COPY.title.text}
        </h1>
        <p className="text-lg md:text-xl text-iaso-text leading-relaxed max-w-2xl mx-auto mb-6">
          {HERO_COPY.subtitle.text}
        </p>
        <p className="text-base md:text-lg text-iaso-text-light leading-relaxed max-w-2xl mx-auto mb-10">
          {HERO_COPY.notice.text}
        </p>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
          <Link
            href={applyHref}
            className="btn btn-primary min-h-14 text-lg px-8"
          >
            {HERO_COPY.applyButton.text}
          </Link>
          {showChannelButton && (
            <a
              href={channelHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline min-h-14 text-lg px-8"
            >
              {HERO_COPY.channelButton.text}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
