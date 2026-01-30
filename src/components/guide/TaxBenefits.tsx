'use client';

import { Check, Info } from 'lucide-react';

interface TaxBenefit {
  title: string;
  condition: string;
  benefit: string;
}

const taxBenefits: TaxBenefit[] = [
  {
    title: '취득세 감면',
    condition: '귀농귀촌 요건 충족',
    benefit: '취득세 50% 감면',
  },
  {
    title: '재산세 감면',
    condition: '농어촌주택, 일정 요건',
    benefit: '재산세 감면 가능',
  },
  {
    title: '양도세 비과세',
    condition: '1주택, 2년 거주, 12억 이하',
    benefit: '양도세 비과세',
  },
  {
    title: '농특세 면제',
    condition: '농지 취득 시',
    benefit: '농어촌특별세 면제',
  },
];

export default function TaxBenefits() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-iaso-gold font-medium mb-4">
            세금 혜택
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-iaso-text mb-4">
            알아두면 좋은 세금 혜택
          </h2>
          <p className="text-iaso-text-light max-w-2xl mx-auto">
            조건에 따라 다양한 세금 혜택을 받으실 수 있습니다
          </p>
        </div>

        {/* 테이블 (데스크톱) */}
        <div className="hidden md:block max-w-4xl mx-auto">
          <div className="bg-iaso-bg rounded-iaso overflow-hidden shadow-iaso">
            <table className="w-full">
              <thead>
                <tr className="bg-iaso-green text-white">
                  <th className="px-6 py-4 text-left font-medium">항목</th>
                  <th className="px-6 py-4 text-left font-medium">조건</th>
                  <th className="px-6 py-4 text-left font-medium">혜택</th>
                </tr>
              </thead>
              <tbody>
                {taxBenefits.map((item, index) => (
                  <tr
                    key={item.title}
                    className={index % 2 === 0 ? 'bg-white' : 'bg-iaso-beige-50'}
                  >
                    <td className="px-6 py-4 font-medium text-iaso-text">
                      {item.title}
                    </td>
                    <td className="px-6 py-4 text-iaso-text-light">
                      {item.condition}
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-2 text-iaso-green font-medium">
                        <Check className="w-4 h-4" />
                        {item.benefit}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 카드 (모바일) */}
        <div className="md:hidden space-y-4">
          {taxBenefits.map((item) => (
            <div
              key={item.title}
              className="bg-iaso-bg rounded-iaso p-5 shadow-iaso-sm"
            >
              <h3 className="font-bold text-iaso-text mb-3">{item.title}</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-iaso-text-light">조건</span>
                  <span className="text-iaso-text">{item.condition}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-iaso-text-light">혜택</span>
                  <span className="text-iaso-green font-medium">
                    {item.benefit}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 안내 문구 */}
        <div className="mt-10 max-w-3xl mx-auto p-5 bg-amber-50 border border-amber-200 rounded-iaso flex gap-4">
          <Info className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-amber-800">
            <p className="font-medium mb-1">안내</p>
            <p>
              세금 관련 사항은 개인별 상황에 따라 달라질 수 있습니다. 정확한 내용은
              반드시 세무 전문가와 상담하시기 바랍니다. 이아소에서 연계 세무사를
              소개해 드릴 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
