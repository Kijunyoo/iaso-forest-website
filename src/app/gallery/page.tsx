'use client';

import { useState } from 'react';
import PageHero from '@/components/common/PageHero';
import GalleryGrid from '@/components/gallery/GalleryGrid';

// 갤러리 이미지 데이터
const galleryImages = [
  // 마을 전경
  {
    id: 'village-1',
    src: 'https://res.cloudinary.com/dp79vfxyf/image/upload/v1/iaso_forest/canva/village_plan',
    alt: '이아소 마을 조감도',
    category: 'village',
  },
  {
    id: 'village-2',
    src: 'https://res.cloudinary.com/dp79vfxyf/image/upload/v1/iaso_forest/canva/village_view_1',
    alt: '이아소 마을 조감도 (고화질)',
    category: 'village',
  },
  {
    id: 'village-3',
    src: 'https://res.cloudinary.com/dp79vfxyf/image/upload/v1/iaso_forest/canva/village_view',
    alt: '배산임수 항공뷰',
    category: 'village',
  },
  {
    id: 'village-4',
    src: 'https://res.cloudinary.com/dp79vfxyf/image/upload/v1/iaso_forest/canva/village_road',
    alt: '단지 진입로',
    category: 'village',
  },
  {
    id: 'village-5',
    src: 'https://res.cloudinary.com/dp79vfxyf/image/upload/v1/iaso_forest/canva/house_c',
    alt: '야간 조명',
    category: 'village',
  },

  // 샘플하우스
  {
    id: 'house-1',
    src: 'https://res.cloudinary.com/dp79vfxyf/image/upload/v1/iaso_forest/canva/house_2_1',
    alt: '현대식 외관',
    category: 'house',
  },
  {
    id: 'house-2',
    src: 'https://res.cloudinary.com/dp79vfxyf/image/upload/v1/iaso_forest/canva/house_3_3',
    alt: '샘플하우스 외관',
    category: 'house',
  },
  {
    id: 'house-3',
    src: 'https://res.cloudinary.com/dp79vfxyf/image/upload/v1/iaso_forest/canva/house_3_1',
    alt: '거실',
    category: 'house',
  },
  {
    id: 'house-4',
    src: 'https://res.cloudinary.com/dp79vfxyf/image/upload/v1/iaso_forest/canva/house_3_2',
    alt: '주방',
    category: 'house',
  },
  {
    id: 'house-5',
    src: 'https://res.cloudinary.com/dp79vfxyf/image/upload/v1/iaso_forest/canva/house_3_3',
    alt: '침실',
    category: 'house',
  },
  {
    id: 'house-6',
    src: 'https://res.cloudinary.com/dp79vfxyf/image/upload/v1/iaso_forest/canva/house_3_4',
    alt: '욕실',
    category: 'house',
  },
  {
    id: 'house-7',
    src: 'https://res.cloudinary.com/dp79vfxyf/image/upload/v1/iaso_forest/canva/house_3_5',
    alt: '다락방',
    category: 'house',
  },

  // 치유의 숲
  {
    id: 'forest-1',
    src: 'https://res.cloudinary.com/dp79vfxyf/image/upload/v1/iaso_forest/canva/forest_1',
    alt: '숲 입구',
    category: 'forest',
  },
  {
    id: 'forest-2',
    src: 'https://res.cloudinary.com/dp79vfxyf/image/upload/v1/iaso_forest/canva/forest_2',
    alt: '산책길',
    category: 'forest',
  },
  {
    id: 'forest-3',
    src: 'https://res.cloudinary.com/dp79vfxyf/image/upload/v1/iaso_forest/canva/forest_4',
    alt: '명상 데크',
    category: 'forest',
  },
  {
    id: 'forest-4',
    src: 'https://res.cloudinary.com/dp79vfxyf/image/upload/v1/iaso_forest/canva/stream_1',
    alt: '소하천 전경',
    category: 'forest',
  },
  {
    id: 'forest-5',
    src: 'https://res.cloudinary.com/dp79vfxyf/image/upload/v1/iaso_forest/canva/forest_8',
    alt: '단풍 풍경',
    category: 'forest',
  },

  // 커뮤니티
  {
    id: 'community-1',
    src: 'https://res.cloudinary.com/dp79vfxyf/image/upload/v1/iaso_forest/canva/village_plan',
    alt: '카페 예정지',
    category: 'community',
  },
  {
    id: 'community-2',
    src: 'https://res.cloudinary.com/dp79vfxyf/image/upload/v1/iaso_forest/canva/forest_7',
    alt: '중앙 산책로',
    category: 'community',
  },
  {
    id: 'community-3',
    src: 'https://res.cloudinary.com/dp79vfxyf/image/upload/v1/iaso_forest/canva/forest_9',
    alt: '정원 조경',
    category: 'community',
  },
  {
    id: 'community-4',
    src: 'https://res.cloudinary.com/dp79vfxyf/image/upload/v1/iaso_forest/canva/house_3_2',
    alt: '테라스 휴식 공간',
    category: 'community',
  },
];

const categories = [
  { id: 'all', label: '전체' },
  { id: 'village', label: '마을 전경' },
  { id: 'house', label: '샘플하우스' },
  { id: 'forest', label: '치유의 숲' },
  { id: 'community', label: '커뮤니티' },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="갤러리"
        subtitle="이아소 포레스트의 아름다운 순간들"
        slim
      />

      {/* 갤러리 섹션 */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* 카테고리 탭 */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-5 py-2.5 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-iaso-green text-white shadow-iaso'
                    : 'bg-iaso-bg text-iaso-text hover:bg-iaso-green-50'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* 이미지 그리드 */}
          <GalleryGrid
            images={galleryImages}
            selectedCategory={selectedCategory}
          />
        </div>
      </section>

      {/* 하단 CTA */}
      <section className="py-16 bg-iaso-bg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-iaso-text mb-4">
            사진으로는 다 담을 수 없는 감동
          </h2>
          <p className="text-iaso-text-light mb-8 max-w-2xl mx-auto">
            직접 방문하셔서 청정 자연의 공기와 숲의 품을 느껴보세요.
            현장 방문 예약을 도와드립니다.
          </p>
          <button className="btn bg-iaso-green text-white hover:bg-iaso-green-600 px-8 py-3 rounded-iaso shadow-iaso">
            현장 방문 예약
          </button>
        </div>
      </section>
    </>
  );
}
