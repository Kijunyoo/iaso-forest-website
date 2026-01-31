'use client';

import { useState } from 'react';
import RSVPModal from '@/components/rsvp/RSVPModal';

// Cloudinary 비디오 배경 및 포스터 이미지
const HERO_VIDEO = 'https://res.cloudinary.com/dp79vfxyf/video/upload/q_auto/v1769817027/iaso_forest/hero/hero_forest_bg.mp4';
const HERO_POSTER = 'https://res.cloudinary.com/dp79vfxyf/image/upload/q_auto,f_auto/v1768041699/iaso_forest/raw_materials/%EC%96%91%ED%8F%89_%EC%9D%B4%EC%95%84%EC%86%8C/auckbce2nunrd7syzx2w.jpg';

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={HERO_POSTER}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60" />

        {/* Content - 텍스트 그림자로 가독성 향상 */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in-up text-white"
            style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.9)' }}
          >
            숲이 건네는<br />
            가장 완벽한 쉼
          </h1>
          <p
            className="text-lg md:text-xl lg:text-2xl mb-10 opacity-90 animate-fade-in-up"
            style={{ animationDelay: '0.2s', textShadow: '1px 1px 6px rgba(0,0,0,0.8)' }}
          >
            대한민국 1호 국립 치유의 숲과 함께하는 프리미엄 전원생활
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn btn-primary text-lg px-8 py-4 shadow-lg"
            >
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

      <RSVPModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
