'use client';

import { Car, Train, ShoppingBag, Stethoscope, GraduationCap, TreePine } from 'lucide-react';

interface InfraItem {
  name: string;
  distance: string;
  detail?: string;
}

interface InfraCategory {
  category: string;
  icon: React.ReactNode;
  items: InfraItem[];
}

const infrastructureData: InfraCategory[] = [
  {
    category: '교통',
    icon: <Car className="w-6 h-6" />,
    items: [
      { name: '동양평IC', distance: '차량 10분', detail: '영동고속도로 진입' },
      { name: '양동역', distance: '차량 7분', detail: '무궁화호 청량리 50분' },
      { name: '양평역', distance: '차량 15분', detail: 'ITX-청춘, 무궁화호' },
      { name: '강남역', distance: '차량 60분', detail: '영동고속도로 경유' },
    ],
  },
  {
    category: '생활편의',
    icon: <ShoppingBag className="w-6 h-6" />,
    items: [
      { name: '하나로마트 양동점', distance: '차량 10분', detail: '대형마트' },
      { name: '양동면사무소', distance: '차량 10분', detail: '행정 서비스' },
      { name: '농협/신협', distance: '차량 10분', detail: '금융 서비스' },
      { name: '용문전통시장', distance: '차량 30분', detail: '5일장 (3, 8일)' },
    ],
  },
  {
    category: '의료',
    icon: <Stethoscope className="w-6 h-6" />,
    items: [
      { name: '양동 보건지소', distance: '도보 300m', detail: '1차 의료' },
      { name: '한의원', distance: '차량 5분', detail: '양동면 소재' },
      { name: '양평군 보건소', distance: '차량 10분', detail: '종합 보건' },
      { name: '원주세브란스병원', distance: '차량 30분', detail: '대형 종합병원' },
    ],
  },
  {
    category: '교육',
    icon: <GraduationCap className="w-6 h-6" />,
    items: [
      { name: '양동 유치원', distance: '차량 5분', detail: '공립 유치원' },
      { name: '양동 초등학교', distance: '차량 5분', detail: '공립 초등학교' },
      { name: '용문 중학교', distance: '차량 10분', detail: '공립 중학교' },
      { name: '용문 고등학교', distance: '차량 10분', detail: '공립 고등학교' },
    ],
  },
  {
    category: '자연/레저',
    icon: <TreePine className="w-6 h-6" />,
    items: [
      { name: '국립 양평 치유의 숲', distance: '도보 1분', detail: '180만평, 12개 테마 숲길' },
      { name: '용문산', distance: '차량 30분', detail: '해발 1,157m' },
      { name: '중미산 천문대', distance: '차량 30분', detail: '별자리 관측' },
      { name: '양평 물안개공원', distance: '차량 30분', detail: '수변 산책로' },
    ],
  },
];

export default function InfrastructureList() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-iaso-text mb-4">
            편리한 생활 인프라
          </h2>
          <p className="text-iaso-text-light max-w-2xl mx-auto">
            도심의 편리함을 그대로, 자연 속에서 누리는 편안한 일상
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {infrastructureData.map((category) => (
            <div
              key={category.category}
              className="bg-iaso-bg rounded-iaso p-6 shadow-iaso-sm hover:shadow-iaso transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-iaso-green-100 text-iaso-green rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-iaso-text">
                  {category.category}
                </h3>
              </div>

              <ul className="space-y-3">
                {category.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex items-start justify-between gap-2 text-sm"
                  >
                    <div>
                      <span className="font-medium text-iaso-text">
                        {item.name}
                      </span>
                      {item.detail && (
                        <span className="block text-iaso-text-light text-xs mt-0.5">
                          {item.detail}
                        </span>
                      )}
                    </div>
                    <span className="text-iaso-green font-medium whitespace-nowrap">
                      {item.distance}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
