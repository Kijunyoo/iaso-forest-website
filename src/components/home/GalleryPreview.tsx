import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

// Cloudinary 이미지 URL
const images = [
  {
    src: 'https://res.cloudinary.com/dp79vfxyf/image/upload/v1768041702/iaso_forest/raw_materials/%EC%96%91%ED%8F%89_%EC%9D%B4%EC%95%84%EC%86%8C/auckbce2nunrd7syzx2w.jpg',
    alt: '단지 전경',
  },
  {
    src: 'https://res.cloudinary.com/dp79vfxyf/image/upload/v1768041700/iaso_forest/raw_materials/%EC%96%91%ED%8F%89_%EC%9D%B4%EC%95%84%EC%86%8C/s8sbl44pvztzcu1zxm5w.jpg',
    alt: '자연 환경',
  },
  {
    src: 'https://res.cloudinary.com/dp79vfxyf/image/upload/v1768041699/iaso_forest/raw_materials/%EC%96%91%ED%8F%89_%EC%9D%B4%EC%95%84%EC%86%8C/imtqwnrixgwz2pofl351.jpg',
    alt: '치유의 숲',
  },
  {
    src: 'https://res.cloudinary.com/dp79vfxyf/image/upload/v1768041696/iaso_forest/raw_materials/%EC%96%91%ED%8F%89_%EC%9D%B4%EC%95%84%EC%86%8C/h2doaffy1aa24uifuilh.jpg',
    alt: '주변 환경',
  },
  {
    src: 'https://res.cloudinary.com/dp79vfxyf/image/upload/v1768041698/iaso_forest/raw_materials/%EC%9D%B4%EC%95%84%EC%86%8C_%EC%A0%84%EC%9B%90%EB%A7%88%EC%9D%84/izr9a0alnlpxu4yahbfh.jpg',
    alt: '전원마을',
  },
  {
    src: 'https://res.cloudinary.com/dp79vfxyf/image/upload/v1768041694/iaso_forest/raw_materials/%EC%9D%B4%EC%95%84%EC%86%8C_%EC%A0%84%EC%9B%90%EB%A7%88%EC%9D%84/fensgkfv0wp4232cqxfq.jpg',
    alt: '커뮤니티',
  },
  {
    src: 'https://res.cloudinary.com/dp79vfxyf/image/upload/v1768041696/iaso_forest/raw_materials/%EC%96%91%ED%8F%89_%EC%9D%B4%EC%95%84%EC%86%8C/spxelojitik7nssmijl8.jpg',
    alt: '시설',
  },
  {
    src: 'https://res.cloudinary.com/dp79vfxyf/image/upload/v1768041695/iaso_forest/raw_materials/%EC%96%91%ED%8F%89_%EC%9D%B4%EC%95%84%EC%86%8C/je6ypklqlu6gljncivk0.jpg',
    alt: '풍경',
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
