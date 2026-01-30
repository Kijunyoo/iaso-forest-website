'use client';

import { TrendingUp, MapPin, TreePine } from 'lucide-react';

interface DevelopmentItem {
  title: string;
  icon: React.ReactNode;
  description: string;
  status: string;
  effect: string;
}

const developmentData: DevelopmentItem[] = [
  {
    title: '제2순환고속도로',
    icon: <TrendingUp className="w-8 h-8" />,
    description: '인천 ~ 양평 ~ 여주 ~ 이천 구간',
    status: '일부 구간 개통, 확장 진행 중',
    effect: '서울 → 양평 30분대 진입 가능',
  },
  {
    title: '송파-양평 고속도로',
    icon: <MapPin className="w-8 h-8" />,
    description: '송파 ~ 하남 ~ 광주 ~ 양평 구간',
    status: '계획 확정, 단계적 추진',
    effect: '강남권 직접 연결 40분대',
  },
  {
    title: '국립 치유의 숲 확장',
    icon: <TreePine className="w-8 h-8" />,
    description: '현재 180만평(595ha) 규모',
    status: '치유 시설 확충, 프로그램 다양화',
    effect: '주변 토지 가치 상승, 영구적 숲세권',
  },
];

export default function DevelopmentNews() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-iaso-green-50 to-iaso-beige-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-iaso-text mb-4">
            더 가까워지는 양평, 더 높아지는 가치
          </h2>
          <p className="text-iaso-text-light max-w-2xl mx-auto">
            개발 호재로 인해 양평의 접근성과 가치가 더욱 높아지고 있습니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {developmentData.map((item, index) => (
            <div
              key={item.title}
              className="bg-white rounded-iaso p-8 shadow-iaso hover:shadow-iaso-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-iaso-green-100 text-iaso-green rounded-full">
                  {item.icon}
                </div>
                <div>
                  <span className="text-iaso-green text-sm font-medium">
                    호재 {index + 1}
                  </span>
                  <h3 className="text-xl font-bold text-iaso-text">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-xs text-iaso-text-light uppercase tracking-wider">
                    구간
                  </span>
                  <p className="text-iaso-text font-medium">{item.description}</p>
                </div>

                <div>
                  <span className="text-xs text-iaso-text-light uppercase tracking-wider">
                    현황
                  </span>
                  <p className="text-iaso-text">{item.status}</p>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <span className="text-xs text-iaso-green uppercase tracking-wider font-medium">
                    기대 효과
                  </span>
                  <p className="text-iaso-green font-bold text-lg">{item.effect}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
