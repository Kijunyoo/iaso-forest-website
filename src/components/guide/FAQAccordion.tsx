'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQ[] = [
  // 일반
  {
    category: '일반',
    question: '이아소 마을은 어디에 있나요?',
    answer:
      '경기도 양평군 양동면 금왕리 836-1에 위치해 있습니다. 동양평IC에서 차량으로 약 9분 거리이며, 강남에서 약 1시간이면 도착합니다. 국립 양평 치유의 숲과 불과 130m 거리로, 도보 1분이면 숲 입구에 닿을 수 있습니다.',
  },
  {
    category: '일반',
    question: '현재 몇 가구가 거주하고 있나요?',
    answer:
      '현재 8가구가 입주하여 평화롭게 생활하고 있습니다. 이미 형성된 커뮤니티가 있어 새로 입주하시는 분들도 외롭지 않게 전원생활을 시작하실 수 있습니다.',
  },
  {
    category: '일반',
    question: '단지 규모는 어떻게 되나요?',
    answer:
      '전체 약 8,200평 대지에 100~200평 규모의 필지로 구획되어 있습니다. 총 55세대 규모로 계획되어 있으며, 중소형(17, 25, 32평) 주택부터 대형 주택까지 다양한 선택이 가능합니다.',
  },
  {
    category: '일반',
    question: '토지만 구입할 수 있나요?',
    answer:
      '네, 가능합니다. 토지만 먼저 구입하시고 나중에 여건이 맞을 때 건축을 시작하셔도 됩니다. 많은 분들이 세컨하우스 목적으로 먼저 토지를 확보하신 후, 은퇴 시점에 맞춰 건축을 진행하시기도 합니다.',
  },
  // 비용
  {
    category: '비용',
    question: '필지 가격은 얼마인가요?',
    answer:
      '필지 크기와 위치에 따라 다르지만, 토지와 건물을 합쳐 1억 대 후반부터 3억 대 초반까지 다양한 가격대가 있습니다. 정확한 분양가는 현장 상담 시 상세히 안내해 드립니다.',
  },
  {
    category: '비용',
    question: '건축비는 얼마나 드나요?',
    answer:
      '평형과 마감재에 따라 다릅니다. 15평형 실속형(경량철골)은 약 3,500~4,500만원, 36평형 정통 목조/철골 구조는 1억 원 이상입니다. 이아소에서는 예산에 맞춘 맞춤형 건축 컨설팅을 제공합니다.',
  },
  {
    category: '비용',
    question: '관리비는 얼마인가요?',
    answer:
      '월 관리비는 약 10만원대로, 마을 공동 관리(제설, 제초, 공용 시설 관리)에 사용됩니다. 아파트 대비 저렴하면서도 쾌적한 환경을 유지할 수 있습니다.',
  },
  {
    category: '비용',
    question: '난방비는 많이 나오나요?',
    answer:
      '전원주택의 가장 큰 걱정 중 하나지만, 최신 단열 공법을 적용하면 아파트와 비슷하거나 오히려 적게 나옵니다. 15평형 기준 겨울철 월 15~20만원, 36평형 기준 월 25~35만원 정도입니다.',
  },
  // 절차
  {
    category: '절차',
    question: '계약부터 입주까지 얼마나 걸리나요?',
    answer:
      '건축 설계 및 인허가에 약 1~2개월, 건축 공사에 약 4~6개월이 소요됩니다. 총 6~8개월 정도로 예상하시면 됩니다. 토목 공사가 이미 완료되어 있어 다른 전원주택 단지보다 빠른 입주가 가능합니다.',
  },
  {
    category: '절차',
    question: '건축 허가는 어떻게 받나요?',
    answer:
      '건축 설계 후 양평군청에 건축 허가 신청을 합니다. 이아소에서는 허가 경험이 풍부한 건축사와 협력하여 신속한 인허가를 지원합니다. 일반적으로 1~2개월 내 허가가 완료됩니다.',
  },
  {
    category: '절차',
    question: '설계는 자유롭게 할 수 있나요?',
    answer:
      '네, 거주자의 취향과 예산에 맞춰 자유롭게 설계할 수 있습니다. 기성복처럼 정해진 집이 아니라, 나만의 맞춤 주택을 지을 수 있다는 것이 이아소의 장점입니다.',
  },
  // 세금/법률
  {
    category: '세금/법률',
    question: '1가구 2주택 세금 문제는 어떻게 되나요?',
    answer:
      '양평군은 조정대상지역이 아니므로 취득세 중과 대상이 아닙니다. 다만, 양도세의 경우 보유 기간, 거주 여부에 따라 달라지므로 구체적인 상황은 세무사 상담을 권장합니다.',
  },
  {
    category: '세금/법률',
    question: '농지로 되어 있는데 건축이 가능한가요?',
    answer:
      '이아소 마을은 이미 개발행위허가 및 농지전용이 완료된 상태입니다. 별도의 농지전용 절차 없이 바로 건축이 가능합니다. 이것이 이아소의 가장 큰 장점 중 하나입니다.',
  },
  {
    category: '세금/법률',
    question: '세컨하우스로 사용해도 되나요?',
    answer:
      "네, 세컨하우스(별장)로 사용하셔도 됩니다. 주중에는 도시에서, 주말에는 이아소에서 보내는 '5도 2촌' 라이프를 즐기시는 분들이 많습니다.",
  },
  {
    category: '세금/법률',
    question: '취득세 감면 혜택이 있나요?',
    answer:
      '귀농귀촌 요건을 충족하면 취득세 50% 감면 혜택을 받을 수 있습니다. 자세한 조건은 양평군청 또는 세무사 상담을 통해 확인하시기 바랍니다.',
  },
];

const categories = ['일반', '비용', '절차', '세금/법률'];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('일반');

  const filteredFAQs = faqData.filter((faq) => faq.category === selectedCategory);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-iaso-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block text-iaso-gold font-medium mb-4">FAQ</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-iaso-text mb-4">
            자주 묻는 질문
          </h2>
          <p className="text-iaso-text-light max-w-2xl mx-auto">
            전원주택에 대한 궁금증을 해결해 드립니다
          </p>
        </div>

        {/* 카테고리 탭 */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setOpenIndex(0);
              }}
              className={`px-5 py-2.5 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-iaso-green text-white shadow-iaso'
                  : 'bg-white text-iaso-text hover:bg-iaso-green-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 아코디언 */}
        <div className="max-w-3xl mx-auto space-y-4">
          {filteredFAQs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-iaso shadow-iaso-sm overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-iaso-text pr-4">
                  Q. {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-iaso-green flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-iaso-text-light leading-relaxed border-t border-gray-100 pt-4">
                  <span className="text-iaso-green font-medium">A. </span>
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
