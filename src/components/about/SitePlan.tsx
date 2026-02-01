'use client';

import Image from 'next/image';
import { ZoomIn, Download } from 'lucide-react';
import { useState } from 'react';

export default function SitePlan() {
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <>
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-iaso-gold font-medium mb-4">
              Site Plan
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-iaso-text mb-4">
              단지 배치도
            </h2>
            <p className="text-iaso-text-light max-w-2xl mx-auto">
              전체 약 8,200평 대지에 100~200평 규모의 필지로 구획.
              총 60세대 규모의 프리미엄 전원마을.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div
              className="relative aspect-[16/10] rounded-iaso overflow-hidden shadow-iaso-lg cursor-pointer group"
              onClick={() => setIsZoomed(true)}
            >
              <Image
                src="https://res.cloudinary.com/dp79vfxyf/image/upload/v1769728111/iaso_forest/local_assets/oip_04.webp"
                alt="이아소 마을 단지 배치도"
                fill
                className="object-contain bg-white"
              />

              {/* 호버 오버레이 */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 px-6 py-3 rounded-full flex items-center gap-2">
                  <ZoomIn className="w-5 h-5 text-iaso-green" />
                  <span className="text-iaso-text font-medium">
                    클릭하여 확대
                  </span>
                </div>
              </div>
            </div>

            {/* 범례 */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-3 p-4 bg-iaso-bg rounded-iaso">
                <div className="w-4 h-4 bg-iaso-green rounded" />
                <span className="text-sm text-iaso-text">분양 가능</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-iaso-bg rounded-iaso">
                <div className="w-4 h-4 bg-gray-400 rounded" />
                <span className="text-sm text-iaso-text">분양 완료</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-iaso-bg rounded-iaso">
                <div className="w-4 h-4 bg-iaso-beige rounded" />
                <span className="text-sm text-iaso-text">공용 시설</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-iaso-bg rounded-iaso">
                <div className="w-4 h-4 bg-iaso-mint rounded" />
                <span className="text-sm text-iaso-text">녹지</span>
              </div>
            </div>

            {/* 단지 정보 */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-6 bg-iaso-green-50 rounded-iaso">
                <div className="text-2xl font-bold text-iaso-green">8,200평</div>
                <div className="text-sm text-iaso-text-light mt-1">총 대지면적</div>
              </div>
              <div className="p-6 bg-iaso-green-50 rounded-iaso">
                <div className="text-2xl font-bold text-iaso-green">60세대</div>
                <div className="text-sm text-iaso-text-light mt-1">총 세대수</div>
              </div>
              <div className="p-6 bg-iaso-green-50 rounded-iaso">
                <div className="text-2xl font-bold text-iaso-green">100~200평</div>
                <div className="text-sm text-iaso-text-light mt-1">필지 규모</div>
              </div>
              <div className="p-6 bg-iaso-green-50 rounded-iaso">
                <div className="text-2xl font-bold text-iaso-green">10가구</div>
                <div className="text-sm text-iaso-text-light mt-1">현재 입주</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 확대 모달 */}
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setIsZoomed(false)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setIsZoomed(false)}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="relative w-full max-w-6xl aspect-[16/10]">
            <Image
              src="https://res.cloudinary.com/dp79vfxyf/image/upload/v1769728111/iaso_forest/local_assets/oip_04.webp"
              alt="이아소 마을 단지 배치도 - 확대"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}
