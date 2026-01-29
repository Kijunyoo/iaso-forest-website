import { Leaf, Heart, Shield } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: '자연 친화 환경',
    description: '울창한 숲과 맑은 공기, 자연이 선물하는 치유의 공간에서 새로운 삶을 시작하세요.',
  },
  {
    icon: Heart,
    title: '프리미엄 커뮤니티',
    description: '같은 가치를 공유하는 이웃들과 함께하는 풍요로운 전원생활을 경험하세요.',
  },
  {
    icon: Shield,
    title: '안정적 투자 가치',
    description: '검증된 입지와 체계적인 단지 관리로 미래 가치를 보장합니다.',
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
