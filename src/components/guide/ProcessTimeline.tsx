'use client';

import { FileText, ClipboardCheck, HardHat, Home } from 'lucide-react';

interface Step {
  number: number;
  title: string;
  icon: React.ReactNode;
  items: string[];
}

const steps: Step[] = [
  {
    number: 1,
    title: '계약',
    icon: <FileText className="w-8 h-8" />,
    items: [
      '현장 방문 및 상담',
      '필지 선택 및 계약',
      '계약금 납부 (통상 10%)',
      '잔금 일정 협의',
    ],
  },
  {
    number: 2,
    title: '인허가',
    icon: <ClipboardCheck className="w-8 h-8" />,
    items: [
      '건축 설계 의뢰 (건축사)',
      '건축 허가 신청 (양평군청)',
      '허가 완료 (약 1~2개월)',
    ],
  },
  {
    number: 3,
    title: '토목/건축',
    icon: <HardHat className="w-8 h-8" />,
    items: [
      '기초 공사 착수 (토목 이미 완료)',
      '골조 → 지붕 → 내외장',
      '설비 및 마감 공사',
      '공사 기간: 약 4~6개월',
    ],
  },
  {
    number: 4,
    title: '입주',
    icon: <Home className="w-8 h-8" />,
    items: [
      '준공 검사 (양평군청)',
      '사용승인서 발급',
      '소유권 보존등기',
      '입주 완료',
    ],
  },
];

export default function ProcessTimeline() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-iaso-gold font-medium mb-4">
            입주 절차
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-iaso-text mb-4">
            계약부터 입주까지, 6~8개월
          </h2>
          <p className="text-iaso-text-light max-w-2xl mx-auto">
            이미 토목 공사가 완료되어 다른 전원주택 단지보다 빠른 입주가 가능합니다
          </p>
        </div>

        {/* 타임라인 */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* 연결선 (데스크톱) */}
            <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-iaso-green-100" />

            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* 스텝 번호 & 아이콘 */}
                <div className="flex flex-col items-center mb-6">
                  <div className="relative z-10 w-24 h-24 bg-iaso-green rounded-full flex items-center justify-center text-white shadow-iaso">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-iaso-gold text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </div>
                </div>

                {/* 스텝 제목 */}
                <h3 className="text-xl font-bold text-iaso-text text-center mb-4">
                  Step {step.number}: {step.title}
                </h3>

                {/* 항목 리스트 */}
                <ul className="space-y-2">
                  {step.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-iaso-text-light text-sm"
                    >
                      <span className="text-iaso-green mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 추가 안내 */}
        <div className="mt-16 max-w-3xl mx-auto p-6 bg-iaso-beige-50 rounded-iaso text-center">
          <p className="text-iaso-text">
            <strong className="text-iaso-green">이아소의 장점:</strong> 농지전용 및 개발행위허가가
            이미 완료되어 별도의 복잡한 절차 없이 바로 건축을 시작할 수 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
