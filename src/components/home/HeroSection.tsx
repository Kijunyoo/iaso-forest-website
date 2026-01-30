'use client';

// Cloudinary 이미지 URL - story_healing 사용 (blur_score: 3187, 매우 선명)
// 기존 hero_drone (blur_score: 99)은 흐림 → 드론 촬영 후 교체 예정
const HERO_IMAGE = 'https://res.cloudinary.com/dp79vfxyf/image/upload/iaso_forest/story/story_healing.jpg';

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

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in-up">
          숲이 건네는<br />
          가장 완벽한 쉼
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-10 opacity-90 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          대한민국 1호 국립 치유의 숲과 함께하는 프리미엄 전원생활
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <button className="btn btn-primary text-lg px-8 py-4">
            상담 예약
          </button>
          <button
            onClick={scrollToContent}
            className="btn bg-white/20 backdrop-blur-sm text-white border-2 border-white/50 hover:bg-white hover:text-iaso-green text-lg px-8 py-4"
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
