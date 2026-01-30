'use client';

// Cloudinary 이미지 URL (blur_score: 1982.98 - 매우 선명)
// 최적화: e_improve(자동개선), q_auto:best(최고품질), f_auto(WebP자동변환)
const HERO_IMAGE = 'https://res.cloudinary.com/dp79vfxyf/image/upload/e_improve,q_auto:best,f_auto/v1768041699/iaso_forest/raw_materials/%EC%96%91%ED%8F%89_%EC%9D%B4%EC%95%84%EC%86%8C/imtqwnrixgwz2pofl351.jpg';

export default function HeroSection() {
  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${HERO_IMAGE}')`,
        }}
      />

      {/* Overlay - 배경 어둡게만 (프레임 없음) */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content - 텍스트 그림자로 가독성 향상 */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in-up text-white"
          style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)' }}
        >
          다시는 없을<br />
          좋은 전원주택지입니다
        </h1>
        <p
          className="text-lg md:text-xl lg:text-2xl mb-10 animate-fade-in-up text-white"
          style={{ animationDelay: '0.2s', textShadow: '1px 1px 6px rgba(0,0,0,0.8)' }}
        >
          치유와 힐링의 프리미엄 전원마을, 이아소 포레스트
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <button className="btn btn-primary text-lg px-8 py-4 shadow-lg">
            상담 예약
          </button>
          <button
            onClick={scrollToContent}
            className="btn bg-transparent text-white border-2 border-white hover:bg-white hover:text-iaso-green text-lg px-8 py-4 shadow-lg"
            style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.6)' }}
          >
            단지 둘러보기
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
}
