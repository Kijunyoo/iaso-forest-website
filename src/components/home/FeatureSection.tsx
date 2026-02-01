// Renovated Content - 치유 중심 3대 철학 (2026-01-30)
const features = [
  {
    point: '숨쉬기',
    subtitle: 'Breathe',
    title: '188만 평의 피톤치드',
    description:
      '대한민국 1호 국립 치유의 숲이 선사하는 피톤치드 샤워. 집을 나서는 순간 시작되는 숲의 숨결이 당신의 일상이 됩니다.',
    image: 'https://res.cloudinary.com/dp79vfxyf/image/upload/v1768041700/iaso_forest/raw_materials/%EC%96%91%ED%8F%89_%EC%9D%B4%EC%95%84%EC%86%8C/m8frn3nmmb71cydnmmmc.jpg',
  },
  {
    point: '걷기',
    subtitle: 'Walk',
    title: '130m, 도보 2분',
    description:
      '12개의 테마별 치유 숲길, 총 13km. 매일 아침 문을 열면 시작되는 숲속 산책. 주말마다 멀리 떠나지 않아도 됩니다.',
    image: 'https://res.cloudinary.com/dp79vfxyf/image/upload/v1768041699/iaso_forest/raw_materials/%EC%96%91%ED%8F%89_%EC%9D%B4%EC%95%84%EC%86%8C/imtqwnrixgwz2pofl351.jpg',
  },
  {
    point: '머무르기',
    subtitle: 'Stay',
    title: '맞춤형 힐링 하우스',
    description:
      '정해진 평면도에 삶을 맞추지 마세요. 15평 미니멀 하우스부터 36평 프리미엄까지, 당신의 라이프스타일에 맞춘 집을 짓습니다.',
    image: 'https://res.cloudinary.com/dp79vfxyf/image/upload/v1768041701/iaso_forest/raw_materials/%EC%96%91%ED%8F%89_%EC%9D%B4%EC%95%84%EC%86%8C/kklltv5b2gzetfkckyb4.jpg',
  },
];

export default function FeatureSection() {
  return (
    <section className="section bg-iaso-bg">
      <div className="container-iaso">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-iaso-gold font-medium text-lg">회복의 철학</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            도시는 당신을 소모시켰습니다<br />
            <span className="text-iaso-green">이아소는 당신을 회복시킵니다</span>
          </h2>
        </div>

        {/* Feature Rows */}
        <div className="space-y-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col gap-8 items-center ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <span className="text-iaso-gold font-semibold text-lg">
                  {feature.point}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-6">
                  {feature.title}
                </h3>
                <p className="text-iaso-text-light text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Image */}
              <div className="flex-1 w-full">
                <div className="rounded-2xl overflow-hidden shadow-iaso-lg">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full aspect-[16/9] object-cover"
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
