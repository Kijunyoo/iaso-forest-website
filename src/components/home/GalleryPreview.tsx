import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// Cloudinary 이미지 URL - 고품질 이미지로 업데이트 (2026-01-30)
// 최적화: q_auto:best(최고품질), f_auto(WebP자동변환)
const images = [
  {
    src: 'https://res.cloudinary.com/dp79vfxyf/image/upload/q_auto:best,f_auto/iaso_forest/healing_forest/forest_scene_02.jpg',
    alt: '치유의 숲 풍경', // blur: 2865
  },
  {
    src: 'https://res.cloudinary.com/dp79vfxyf/image/upload/q_auto:best,f_auto/iaso_forest/healing_forest/trail_signpost_01.jpg',
    alt: '숲길 이정표', // blur: 2527
  },
  {
    src: 'https://res.cloudinary.com/dp79vfxyf/image/upload/q_auto:best,f_auto/iaso_forest/youtube_captures/forest_house_exterior_03.png',
    alt: '전원주택 외관', // blur: 1576
  },
  {
    src: 'https://res.cloudinary.com/dp79vfxyf/image/upload/q_auto:best,f_auto/iaso_forest/blog_extracted/jogamdo_aerial_view.jpg',
    alt: '마을 조감도',
  },
  {
    src: 'https://res.cloudinary.com/dp79vfxyf/image/upload/q_auto:best,f_auto/iaso_forest/healing_forest/forest_scene_01.jpg',
    alt: '숲속 풍경', // blur: 2374
  },
  {
    src: 'https://res.cloudinary.com/dp79vfxyf/image/upload/q_auto:best,f_auto/iaso_forest/blog_extracted/sample_house_exterior.png',
    alt: '샘플하우스',
  },
  {
    src: 'https://res.cloudinary.com/dp79vfxyf/image/upload/q_auto:best,f_auto/iaso_forest/healing_forest/trail_signpost_02.jpg',
    alt: '산책로', // blur: 2020
  },
  {
    src: 'https://res.cloudinary.com/dp79vfxyf/image/upload/q_auto:best,f_auto/iaso_forest/blog_extracted/jeonwon_village_aerial.jpg',
    alt: '전원마을 전경',
  },
];

export default function GalleryPreview() {
  return (
    <section className="section bg-white">
      <div className="container-iaso">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="text-iaso-gold font-medium text-lg">Gallery</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">
              이아소의 아름다운 공간들
            </h2>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-iaso-green font-medium mt-4 md:mt-0 hover:gap-3 transition-all"
          >
            전체 갤러리 보기 <ArrowRight size={20} />
          </Link>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
