import { Leaf, Heart, Shield } from 'lucide-react';

// Renovated Content - USP 3가지 (2026-01-30)
const features = [
  {
    icon: Leaf,
    title: '국립 치유의 숲',
    description: '188만 평 국립 양평 치유의 숲과 물리적으로 연결된 유일한 주거 단지. 12개 숲길이 내 집 정원처럼.',
  },
  {
    icon: Heart,
    title: '검증된 이웃',
    description: '이미 10가구가 함께하는 살아있는 마을. 텃세 없는 평화로운 커뮤니티에서 전원생활의 외로움을 덜어드립니다.',
  },
  {
    icon: Shield,
    title: '즉시 건축 가능',
    description: '토목,전기,수도,하수공사 100% 완료, 6m 단지 내 도로 완비. 여러분은 오직 회복에만 집중하시면 됩니다.',
  },
];

export default function IntroSection() {
  return (
    <section className="section bg-white">
      <div className="container-iaso">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-iaso-gold font-medium text-lg">Welcome to Iaso Forest</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
            치유의 숲에서 새로운 삶을 시작하세요
          </h2>
          <p className="text-iaso-text-light text-lg">
            이아소 포레스트는 그리스 신화 속 치유의 여신 '이아소(Iaso)'의 이름을 딴
            프리미엄 전원마을입니다. 자연과 함께하는 건강한 삶의 가치를 실현합니다.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card p-8 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-iaso-green-50 flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-iaso-green" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-iaso-text-light">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
