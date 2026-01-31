import { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/common/PageHero';
import { Calendar, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: '스토리 | Iaso Forest - 전원생활 가이드',
  description:
    '전원주택 건축 가이드, 치유의 숲 정보, 입주민 인터뷰 등 이아소 포레스트의 다양한 이야기를 만나보세요.',
  openGraph: {
    title: '스토리 | Iaso Forest',
    description: '전원생활에 대한 유익한 정보와 이야기',
  },
};

// 게시글 데이터 (Notion DB 연동)
// publicUrl: Notion 공개 페이지 URL (Share → Publish to web)
const articles = [
  {
    id: '1',
    title: '전원주택 건축, 어디서부터 시작해야 할까?',
    excerpt:
      '막연한 전원주택의 꿈을 현실로 만드는 첫 걸음. 토지 선정부터 설계, 시공까지 단계별 가이드를 알려드립니다.',
    category: '가이드',
    date: '2026-01-30',
    image:
      'https://res.cloudinary.com/dp79vfxyf/image/upload/v1769750064/iaso_forest/youtube_captures/forest_house_exterior_02.png',
    publicUrl: 'https://rapid-failing-716.notion.site/2f9c6b3caa5d800e4a443f16d9b35927',
  },
  {
    id: '2',
    title: '180만 평의 치유, 국립 양평 치유의 숲',
    excerpt:
      '이아소 마을에서 도보 1분. 12개의 테마 숲길과 다양한 치유 프로그램을 갖춘 국립 치유의 숲을 소개합니다.',
    category: '정보',
    date: '2026-01-30',
    image:
      'https://res.cloudinary.com/dp79vfxyf/image/upload/v1769743258/iaso_forest/healing_forest/forest_scene_01.jpg',
    publicUrl: 'https://rapid-failing-716.notion.site/180-2f9c6b3caa5d804e91f6d9b687bfc8e0',
  },
  {
    id: '3',
    title: '1억 대 전원주택, 현실적으로 가능할까?',
    excerpt:
      '15평형 실속형 전원주택으로 시작하는 현명한 선택. 경량철골 구조로 3,500~4,500만원에 가능한 내 집 마련.',
    category: '가이드',
    date: '2026-01-30',
    image:
      'https://res.cloudinary.com/dp79vfxyf/image/upload/v1769742023/iaso_forest/blog_extracted/sample_house_exterior.png',
    publicUrl: 'https://rapid-failing-716.notion.site/1-2f9c6b3caa5d8078bc4c77dcb03b4ae',
  },
  {
    id: '4',
    title: '입주민 인터뷰: "도시 생활 40년, 이제는 숲에서"',
    excerpt:
      '2022년 입주한 김OO 님의 이야기. 도시를 떠나 이아소에 정착하기까지의 여정과 현재의 삶.',
    category: '인터뷰',
    date: '2026-01-30',
    image:
      'https://res.cloudinary.com/dp79vfxyf/image/upload/v1769750044/iaso_forest/youtube_captures/ep275_scene_01.png',
    publicUrl: 'https://rapid-failing-716.notion.site/40-2f9c6b3caa5d804fb10f44b703c5315c',
  },
  {
    id: '5',
    title: '전원주택 난방비, 걱정되시나요?',
    excerpt:
      '전원주택 난방비에 대한 현실적인 데이터와 비용 절감 방법. 15평형 월 15~20만원으로 따뜻한 겨울 나기.',
    category: 'FAQ',
    date: '2026-01-30',
    image:
      'https://res.cloudinary.com/dp79vfxyf/image/upload/v1769750063/iaso_forest/youtube_captures/forest_house_interior_01.png',
    publicUrl: 'https://rapid-failing-716.notion.site/2f9c6b3caa5d809cb753d132f78d85ec',
  },
];

const categoryColors: Record<string, string> = {
  가이드: 'bg-blue-100 text-blue-700',
  정보: 'bg-green-100 text-green-700',
  인터뷰: 'bg-purple-100 text-purple-700',
  FAQ: 'bg-amber-100 text-amber-700',
};

export default function StoryPage() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="스토리"
        subtitle="전원생활에 대한 유익한 정보와 이야기"
        slim
      />

      {/* 게시글 목록 */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {articles.map((article) => (
              <a
                key={article.id}
                href={article.publicUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-iaso overflow-hidden shadow-iaso-sm hover:shadow-iaso-lg transition-all hover:-translate-y-1"
              >
                {/* 썸네일 */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* 콘텐츠 */}
                <div className="p-6">
                  {/* 카테고리 & 날짜 */}
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`px-2 py-0.5 text-xs font-medium rounded ${
                        categoryColors[article.category] ||
                        'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-iaso-text-light">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </span>
                  </div>

                  {/* 제목 */}
                  <h3 className="font-bold text-lg text-iaso-text mb-2 group-hover:text-iaso-green transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  {/* 발췌 */}
                  <p className="text-sm text-iaso-text-light line-clamp-2 mb-4">
                    {article.excerpt}
                  </p>

                  {/* 더보기 */}
                  <span className="inline-flex items-center gap-1 text-sm text-iaso-green font-medium group-hover:gap-2 transition-all">
                    자세히 보기
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 하단 CTA */}
      <section className="py-16 bg-iaso-bg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-iaso-text mb-4">
            더 궁금한 점이 있으신가요?
          </h2>
          <p className="text-iaso-text-light mb-8 max-w-2xl mx-auto">
            전원주택에 대한 모든 궁금증, 전문 상담원이 친절하게 답변해 드립니다.
          </p>
          <button className="btn bg-iaso-green text-white hover:bg-iaso-green-600 px-8 py-3 rounded-iaso shadow-iaso">
            상담 신청하기
          </button>
        </div>
      </section>
    </>
  );
}
