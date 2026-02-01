'use client';

import { useState } from 'react';
import RSVPModal from '@/components/rsvp/RSVPModal';

export default function CTABanner() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-20 bg-gradient-to-r from-iaso-green to-iaso-green-400">
        <div className="container-iaso text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            지금 상담 예약하시면, 현장 방문 안내를 드립니다
          </h2>
          <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
            이아소 포레스트의 아름다운 자연환경과 프리미엄 시설을 직접 눈으로 확인하세요.
            전문 상담원이 1:1로 안내해 드립니다.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="btn bg-white text-iaso-green hover:bg-iaso-beige text-lg px-10 py-4 shadow-iaso-lg"
          >
            무료 상담 신청
          </button>
        </div>
      </section>

      <RSVPModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
