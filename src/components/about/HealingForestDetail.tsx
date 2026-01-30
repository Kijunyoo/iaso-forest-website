'use client';

import Image from 'next/image';
import { TreePine, Route, Heart, Thermometer, Activity, Bike } from 'lucide-react';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Route className="w-6 h-6" />,
    title: '12개 테마 숲길',
    description: '초보자 산책로부터 등산로까지 다양한 난이도',
  },
  {
    icon: <Bike className="w-6 h-6" />,
    title: '30km 임도',
    description: '산악자전거(MTB)를 즐길 수 있는 임도',
  },
  {
    icon: <Thermometer className="w-6 h-6" />,
    title: '온열 치유실',
    description: '체온을 높여 면역력을 증진시키는 시설',
  },
  {
    icon: <Activity className="w-6 h-6" />,
    title: '건강 측정실',
    description: '정기적인 건강 상태 체크 인프라',
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: '전문 치유 프로그램',
    description: '생애 주기별 맞춤 치유 프로그램',
  },
  {
    icon: <TreePine className="w-6 h-6" />,
    title: '영구적 숲세권',
    description: '국가 지정 보호구역으로 개발 제한',
  },
];

export default function HealingForestDetail() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-iaso-green-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* 이미지 */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-iaso overflow-hidden shadow-iaso-lg">
                <Image
                  src="https://res.cloudinary.com/dp79vfxyf/image/upload/v1/aksys_maa_assets/iaso_village/iaso_trekking_path"
                  alt="국립 양평 치유의 숲 산책로"
                  fill
                  className="object-cover"
                />
              </div>
              {/* 거리 뱃지 */}
              <div className="absolute -bottom-4 -right-4 bg-iaso-green text-white px-6 py-3 rounded-full shadow-iaso-lg">
                <span className="text-2xl font-bold">130m</span>
                <span className="text-sm ml-1">도보 1분</span>
              </div>
            </div>

            {/* 콘텐츠 */}
            <div>
              <span className="inline-block text-iaso-gold font-medium mb-4">
                National Healing Forest
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-iaso-text mb-6 leading-tight">
                180만 평의 국립 치유의 숲,<br />
                우리 집 앞마당처럼
              </h2>
              <p className="text-iaso-text-light mb-8 leading-relaxed">
                경기도 양평군 양동면에 위치한 약 <strong>180만 평(595ha)</strong> 규모의
                국가 지정 치유의 숲입니다. 이아소 마을 정문에서 불과 130m 거리에
                숲 입구가 있어, 마치 단지의 정원처럼 매일 이용할 수 있습니다.
              </p>

              {/* 특징 그리드 */}
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div
                    key={feature.title}
                    className="flex items-start gap-3 p-3 bg-white rounded-lg shadow-sm"
                  >
                    <div className="p-2 bg-iaso-green-100 text-iaso-green rounded-lg flex-shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-iaso-text text-sm">
                        {feature.title}
                      </h4>
                      <p className="text-xs text-iaso-text-light mt-0.5">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 희소성 강조 */}
          <div className="mt-16 p-8 bg-iaso-green text-white rounded-iaso text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-3">
              영구적인 숲세권, 희소한 가치
            </h3>
            <p className="text-white/90 max-w-2xl mx-auto">
              국가 브랜드인 국립 치유의 숲과 맞닿아 있는 부지는 법적으로 추가 개발이 제한됩니다.
              이는 이아소 마을이 <strong>영원히 숲과 함께할 수 있는</strong> 독보적 희소성을 보장합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
