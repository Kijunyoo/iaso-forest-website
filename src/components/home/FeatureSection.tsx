// Cloudinary 이미지 URL
const features = [
  {
    point: 'POINT 1',
    title: '최적의 입지',
    description:
      '서울에서 1시간, 자연과 도시의 완벽한 균형. 제2영동고속도로 IC 10분 거리, 양평역 15분 거리로 접근성이 뛰어납니다.',
    image: 'https://res.cloudinary.com/dp79vfxyf/image/upload/v1768041700/iaso_forest/raw_materials/%EC%96%91%ED%8F%89_%EC%9D%B4%EC%95%84%EC%86%8C/m8frn3nmmb71cydnmmmc.jpg',
  },
  {
    point: 'POINT 2',
    title: '치유의 숲',
    description:
      '단지 내 3만평 규모의 치유의 숲이 조성되어 있습니다. 산책로, 명상 공간, 커뮤니티 가든에서 일상의 힐링을 경험하세요.',
    image: 'https://res.cloudinary.com/dp79vfxyf/image/upload/v1768041699/iaso_forest/raw_materials/%EC%96%91%ED%8F%89_%EC%9D%B4%EC%95%84%EC%86%8C/imtqwnrixgwz2pofl351.jpg',
  },
  {
    point: 'POINT 3',
    title: '프리미엄 설계',
    description:
      '국내 최고 건축 설계사와 함께한 맞춤형 주택 설계. 남향 배치, 탁 트인 조망, 에너지 효율을 고려한 스마트홈 시스템을 제공합니다.',
    image: 'https://res.cloudinary.com/dp79vfxyf/image/upload/v1768041701/iaso_forest/raw_materials/%EC%96%91%ED%8F%89_%EC%9D%B4%EC%95%84%EC%86%8C/kklltv5b2gzetfkckyb4.jpg',
  },
];

export default function FeatureSection() {
  return (
    <section className="section bg-iaso-bg">
      <div className="container-iaso">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-iaso-gold font-medium text-lg">Why IASO FOREST</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            이아소를 선택해야 하는 이유
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
                    className="w-full aspect-[4/3] object-cover"
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
