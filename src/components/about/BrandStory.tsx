'use client';

import Image from 'next/image';

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* 텍스트 영역 */}
            <div className="order-2 lg:order-1">
              <span className="inline-block text-iaso-gold font-medium mb-4">
                Brand Story
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-iaso-text mb-6 leading-tight">
                치유와 회복의 여신,<br />
                이아소(Iaso)
              </h2>
              <div className="prose prose-lg text-iaso-text-light space-y-4">
                <p>
                  오래 전, 그리스 신화 속 치유의 여신 이아소(Iaso)는
                  지친 영혼들을 위해 특별한 장소를 숨겨두었습니다.
                </p>
                <p>
                  국립 치유의 숲이 병풍처럼 감싸 안은 이곳은
                  여신 이아소가 숨겨둔 &lsquo;회복의 성소&rsquo;와 같습니다.
                </p>
                <p className="font-medium text-iaso-text">
                  이아소는 단순한 휴식이 아닙니다.<br />
                  지친 몸과 마음을 원래의 상태로 되돌리는
                  &lsquo;회복(Recuperation)&rsquo;입니다.
                </p>
              </div>

              {/* 그리스 신화 인용 */}
              <div className="mt-8 p-6 bg-iaso-beige-50 rounded-iaso border-l-4 border-iaso-gold">
                <p className="text-iaso-text italic">
                  &ldquo;이아소(Ἴασις)는 의술의 신 아스클레피오스의 딸로,
                  병을 낫게 하고 몸을 회복시키는 치유의 과정을 상징합니다.&rdquo;
                </p>
                <p className="text-sm text-iaso-text-light mt-2">
                  — 그리스 신화
                </p>
              </div>
            </div>

            {/* 이미지 영역 */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative aspect-[4/5] rounded-iaso overflow-hidden shadow-iaso-lg">
                <Image
                  src="https://res.cloudinary.com/dp79vfxyf/image/upload/v1/aksys_maa_assets/iaso_village/iaso_forest_entrance"
                  alt="이아소 마을 숲 입구"
                  fill
                  className="object-cover"
                />
              </div>
              {/* 장식 요소 */}
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-iaso-green-100 rounded-full -z-10" />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-iaso-beige-200 rounded-full -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
