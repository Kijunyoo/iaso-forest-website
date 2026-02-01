'use client';

import { Banknote, Home, Percent, Users, ExternalLink } from 'lucide-react';

interface SupportItem {
  icon: React.ReactNode;
  title: string;
  amount: string;
  condition: string;
  source: string;
}

const supportData: SupportItem[] = [
  {
    icon: <Banknote className="w-6 h-6" />,
    title: '농촌주택개량사업 융자',
    amount: '최대 2.5억 원 (연 2.0%)',
    condition: '청년(40세 미만) 연 1.5% 적용',
    source: '농림축산식품부',
  },
  {
    icon: <Home className="w-6 h-6" />,
    title: '취득세 감면',
    amount: '최대 280만 원 면제',
    condition: '전용면적 150㎡ 이하 건축 시',
    source: '경기도청',
  },
  {
    icon: <Percent className="w-6 h-6" />,
    title: '세컨하우스 특례',
    amount: '1주택자 지위 유지',
    condition: '인구감소지역 내 주택 취득 시',
    source: '기획재정부 2026 세법',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: '귀농인 정착지원',
    amount: '1년간 무상 임대',
    condition: '양평군 예비 귀농인 대상',
    source: '양평군청',
  },
];

const additionalSupport = [
  {
    category: '경영 지원',
    items: [
      '경영안정 바우처: 고정비(전기·가스) 25만 원 지급',
      '중소기업 혁신바우처: 컨설팅·마케팅 최대 5,000만 원',
      '경기도 이차보전: 금리 0.3~2.0% 지원',
    ],
  },
  {
    category: '인건비 지원',
    items: [
      '시니어 인턴십: 1인당 최대 550만 원 (한국노인인력개발원)',
      '고령자 계속고용장려금: 월 30만 원, 최대 3년 (고용노동부)',
    ],
  },
];

export default function GovernmentSupport() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-iaso-beige-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-blue-600 font-medium mb-4">
            2026 정부지원
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-iaso-text mb-4">
            활용 가능한 정부 지원 정책
          </h2>
          <p className="text-iaso-text-light max-w-2xl mx-auto">
            귀농·귀촌 및 전원주택 건축 시 받을 수 있는 다양한 혜택을 안내합니다
          </p>
        </div>

        {/* 주요 지원 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {supportData.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-iaso p-6 shadow-iaso-sm hover:shadow-iaso transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                  {item.icon}
                </div>
              </div>
              <h3 className="font-bold text-iaso-text mb-2">{item.title}</h3>
              <p className="text-xl font-bold text-blue-600 mb-2">{item.amount}</p>
              <p className="text-sm text-iaso-text-light mb-3">{item.condition}</p>
              <p className="text-xs text-gray-400">출처: {item.source}</p>
            </div>
          ))}
        </div>

        {/* 추가 지원 */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {additionalSupport.map((section) => (
            <div key={section.category} className="bg-white rounded-iaso p-6 shadow-iaso-sm">
              <h3 className="font-bold text-iaso-text mb-4 pb-2 border-b border-gray-100">
                {section.category}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-iaso-text-light">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 안내 문구 */}
        <div className="mt-10 text-center">
          <p className="text-sm text-iaso-text-light mb-4">
            지원 정책은 변동될 수 있습니다. 상담 시 최신 정보를 안내해 드립니다.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-400">
            <a
              href="https://www.mafra.go.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-blue-500"
            >
              농림축산식품부 <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="https://www.gg.go.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-blue-500"
            >
              경기도청 <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="https://www.work24.go.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-blue-500"
            >
              고용24 <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
