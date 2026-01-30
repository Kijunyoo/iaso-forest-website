import { Metadata } from 'next';
import PageHero from '@/components/common/PageHero';
import NaverMap from '@/components/location/NaverMap';
import InfrastructureList from '@/components/location/InfrastructureList';
import DevelopmentNews from '@/components/location/DevelopmentNews';
import CTABanner from '@/components/home/CTABanner';

export const metadata: Metadata = {
  title: '오시는 길 | Iaso Forest',
  description: '이아소 포레스트 오시는 길 안내. 경기도 양평군 양동면 금왕리 836-1. 동양평IC에서 차량 9분, 강남에서 1시간 거리.',
  openGraph: {
    title: '오시는 길 | Iaso Forest',
    description: '서울에서 1시간, 자연과 도시의 완벽한 균형. 국립 치유의 숲까지 도보 1분.',
  },
};

// 지도 마커 데이터
const mapMarkers = [
  {
    id: 'iaso',
    name: '이아소 포레스트',
    lat: 37.4836,
    lng: 127.5012,
    type: 'main' as const,
  },
  {
    id: 'healing_forest',
    name: '국립 양평 치유의 숲',
    lat: 37.485,
    lng: 127.503,
    type: 'nature' as const,
  },
  {
    id: 'dongyang_ic',
    name: '동양평IC',
    lat: 37.46,
    lng: 127.48,
    type: 'transport' as const,
  },
  {
    id: 'yangdong_station',
    name: '양동역',
    lat: 37.47,
    lng: 127.49,
    type: 'transport' as const,
  },
];

export default function LocationPage() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="오시는 길"
        subtitle="서울에서 1시간, 자연과 도시의 완벽한 균형"
        slim
      />

      {/* 기본 정보 */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-iaso-green-50 text-iaso-green px-4 py-2 rounded-full mb-6">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="font-medium">
                경기도 양평군 양동면 금왕리 836-1
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="p-6 bg-iaso-bg rounded-iaso">
                <div className="text-3xl font-bold text-iaso-green mb-2">9분</div>
                <div className="text-iaso-text">동양평IC에서</div>
              </div>
              <div className="p-6 bg-iaso-bg rounded-iaso">
                <div className="text-3xl font-bold text-iaso-green mb-2">1시간</div>
                <div className="text-iaso-text">강남에서</div>
              </div>
              <div className="p-6 bg-iaso-bg rounded-iaso">
                <div className="text-3xl font-bold text-iaso-green mb-2">1분</div>
                <div className="text-iaso-text">치유의 숲까지</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 광역 지도 */}
      <section className="py-12 bg-iaso-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-iaso-text mb-2">
              수도권 1시간 생활권
            </h2>
            <p className="text-iaso-text-light">
              영동고속도로 동양평IC에서 차량 9분
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <NaverMap
              center={{ lat: 37.4836, lng: 127.5012 }}
              zoom={11}
              markers={mapMarkers}
              height="450px"
              variant="wide"
            />
          </div>
        </div>
      </section>

      {/* 상세 지도 */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-iaso-text mb-2">
              국립 치유의 숲과 130m
            </h2>
            <p className="text-iaso-text-light">
              걸어서 1분이면 숲 입구에 닿을 수 있습니다
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <NaverMap
              center={{ lat: 37.4836, lng: 127.5012 }}
              zoom={16}
              markers={mapMarkers.slice(0, 2)}
              height="400px"
              variant="detail"
            />
          </div>
        </div>
      </section>

      {/* 인프라 목록 */}
      <InfrastructureList />

      {/* 개발 호재 */}
      <DevelopmentNews />

      {/* CTA 배너 */}
      <CTABanner />
    </>
  );
}
