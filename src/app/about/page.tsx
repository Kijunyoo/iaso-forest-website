import { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/common/PageHero';
import BrandStory from '@/components/about/BrandStory';
import SitePlan from '@/components/about/SitePlan';
import HealingForestDetail from '@/components/about/HealingForestDetail';
import USPSection from '@/components/about/USPSection';
import CTABanner from '@/components/home/CTABanner';

export const metadata: Metadata = {
  title: '소개 | Iaso Forest - 치유의 숲이 선물하는 전원생활',
  description:
    '그리스 신화 속 치유의 여신 이아소에서 유래한 이름. 국립 치유의 숲과 함께하는 프리미엄 전원마을, 이아소 포레스트를 소개합니다.',
  openGraph: {
    title: '소개 | Iaso Forest',
    description: '숲이 내린 처방, 이아소 마을. 치유와 회복의 공간.',
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        {/* 배경 이미지 */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://res.cloudinary.com/dp79vfxyf/image/upload/v1/aksys_maa_assets/iaso_village/iaso_landscape_aerial"
            alt="이아소 마을 항공뷰"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        </div>

        {/* 콘텐츠 */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
            숲이 내린 처방,<br />이아소 마을
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto animate-fade-in">
            그리스 신화 속 치유의 여신 &lsquo;이아소&rsquo;에서 유래한 이름.<br />
            국립 치유의 숲과 함께하는 회복의 공간.
          </p>
        </div>
      </section>

      {/* 입지 하이라이트 */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
              <div className="p-4 md:p-6">
                <div className="text-3xl md:text-4xl font-bold text-iaso-green mb-2">
                  1분
                </div>
                <div className="text-sm md:text-base text-iaso-text-light">
                  치유의 숲까지
                </div>
              </div>
              <div className="p-4 md:p-6">
                <div className="text-3xl md:text-4xl font-bold text-iaso-green mb-2">
                  9분
                </div>
                <div className="text-sm md:text-base text-iaso-text-light">
                  동양평IC에서
                </div>
              </div>
              <div className="p-4 md:p-6">
                <div className="text-3xl md:text-4xl font-bold text-iaso-green mb-2">
                  1시간
                </div>
                <div className="text-sm md:text-base text-iaso-text-light">
                  강남에서
                </div>
              </div>
              <div className="p-4 md:p-6">
                <div className="text-3xl md:text-4xl font-bold text-iaso-green mb-2">
                  8가구
                </div>
                <div className="text-sm md:text-base text-iaso-text-light">
                  현재 입주 중
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 브랜드 스토리 */}
      <BrandStory />

      {/* 단지 배치도 */}
      <SitePlan />

      {/* 치유의 숲 상세 정보 */}
      <HealingForestDetail />

      {/* Why IASO (USP) */}
      <USPSection />

      {/* CTA 배너 */}
      <CTABanner />
    </>
  );
}
