'use client';

import Image from 'next/image';
import { TreePine, Users, Building, MapPin } from 'lucide-react';

interface USPItem {
  point: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

const uspData: USPItem[] = [
  {
    point: 1,
    title: "국립 치유의 숲 '숲세권'",
    description:
      '문만 열면 바로 연결되는 등산로와 산책로. 피톤치드가 가득한 매일을 선물합니다. 180만 평 국립 치유의 숲이 도보 1분 거리에 있습니다.',
    icon: <TreePine className="w-8 h-8" />,
    image:
      'https://res.cloudinary.com/dp79vfxyf/image/upload/v1/iaso_forest/canva/map',
  },
  {
    point: 2,
    title: '10가구 이웃의 평화로운 마을',
    description:
      '혼자가 아닌 함께. 텃세 없는 따뜻한 커뮤니티가 안전한 전원생활을 지원합니다. 이미 형성된 커뮤니티에 편하게 합류하세요.',
    icon: <Users className="w-8 h-8" />,
    image:
      'https://res.cloudinary.com/dp79vfxyf/image/upload/v1/iaso_forest/canva/village_view_3',
  },
  {
    point: 3,
    title: '완료된 인프라, 즉시 건축 가능',
    description:
      '토목, 전기, 상수, 하수 공사 100% 완료, 6m 단지 도로 정비 완료. 농지전용 완료로 별도 절차 없이 바로 건축 가능. 실패 없는 안심 건축.',
    icon: <Building className="w-8 h-8" />,
    image:
      'https://res.cloudinary.com/dp79vfxyf/image/upload/v1/iaso_forest/canva/village_road_3',
  },
  {
    point: 4,
    title: '편리한 생활권 (동양평IC 9분)',
    description:
      '하나로마트, 한의원, 약국 인접. 강남까지 1시간, 도시와 자연의 균형. 청량리까지 무궁화호 50분.',
    icon: <MapPin className="w-8 h-8" />,
    image:
      'https://res.cloudinary.com/dp79vfxyf/image/upload/v1/iaso_forest/canva/village_view_5',
  },
];

export default function USPSection() {
  return (
    <section className="py-16 md:py-24 bg-iaso-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-iaso-gold font-medium mb-4">
            Why IASO
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-iaso-text">
            이아소만의 특별한 가치
          </h2>
        </div>

        <div className="space-y-16 md:space-y-24 max-w-6xl mx-auto">
          {uspData.map((item, index) => (
            <div
              key={item.point}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* 텍스트 */}
              <div className={index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-14 h-14 bg-iaso-green text-white rounded-full">
                    {item.icon}
                  </div>
                  <span className="text-iaso-green font-bold text-xl">
                    POINT {item.point}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-iaso-text mb-4">
                  {item.title}
                </h3>
                <p className="text-iaso-text-light text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* 이미지 */}
              <div className={index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}>
                <div className="relative aspect-video rounded-iaso overflow-hidden shadow-iaso-lg">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
