import { Metadata } from 'next';
import PageHero from '@/components/common/PageHero';
import { Play, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: '소식 | Iaso Forest - 영상 및 언론 보도',
  description:
    '이아소 포레스트 관련 영상과 언론 보도를 확인하세요. 마을 투어 영상, 치유의 숲 소개, 입주민 인터뷰 등.',
  openGraph: {
    title: '소식 | Iaso Forest',
    description: '이아소 포레스트 관련 영상과 미디어',
  },
};

// YouTube 영상 데이터
const youtubeVideos = [
  {
    id: 'W-2As4598Wk',
    title: '귀농귀촌TV - 우리함께 힐링해요',
    description: '치유의 숲과 함께하는 전원생활',
  },
  {
    id: 'QEjY5ASFleo',
    title: '양평 전원주택지 이아소전원마을',
    description: '마을 전체 투어 영상',
  },
  {
    id: 'BVGiVyaectE',
    title: '공식 양평 이아소마을 소개',
    description: '이아소 마을 공식 홍보 영상',
  },
  {
    id: 'lm9APhcbJBY',
    title: '용문/양동면 드론 풍경 (5K)',
    description: '드론으로 촬영한 양동면 풍경',
  },
  {
    id: 'U3ipyzWlheg',
    title: '치유의 숲을 품은 현장 스케치',
    description: '현장 방문 스케치 영상',
  },
];

// 블로그/언론 보도 데이터
const newsLinks = [
  {
    title: '양평 이아소 전원마을 - 국립 치유의 숲과 함께',
    source: '네이버 블로그',
    url: 'https://blog.naver.com/grr0529/222275809604',
    date: '2021.02',
  },
  {
    title: '1억대 실속형 전원주택 15평형 설계',
    source: '네이버 블로그',
    url: 'https://blog.naver.com/grr0529/222643094592',
    date: '2021.08',
  },
  {
    title: '36평형 샘플하우스 공개',
    source: '네이버 블로그',
    url: 'https://blog.naver.com/grr0529/222635618810',
    date: '2021.08',
  },
];

export default function NewsPage() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="소식"
        subtitle="이아소 포레스트의 다양한 이야기를 만나보세요"
        slim
      />

      {/* YouTube 영상 섹션 */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-iaso-gold font-medium mb-4">
              Video
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-iaso-text mb-4">
              영상으로 만나는 이아소
            </h2>
            <p className="text-iaso-text-light max-w-2xl mx-auto">
              마을 투어, 치유의 숲, 입주민 이야기를 영상으로 확인하세요
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {youtubeVideos.map((video) => (
              <div
                key={video.id}
                className="bg-iaso-bg rounded-iaso overflow-hidden shadow-iaso-sm hover:shadow-iaso transition-shadow"
              >
                {/* 썸네일 */}
                <div className="relative aspect-video bg-gray-200">
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <a
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors"
                  >
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-white ml-1" fill="white" />
                    </div>
                  </a>
                </div>

                {/* 정보 */}
                <div className="p-4">
                  <h3 className="font-bold text-iaso-text mb-1 line-clamp-1">
                    {video.title}
                  </h3>
                  <p className="text-sm text-iaso-text-light">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 블로그/언론 보도 섹션 */}
      <section className="py-16 md:py-24 bg-iaso-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-iaso-gold font-medium mb-4">
              Media
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-iaso-text mb-4">
              블로그 & 언론 보도
            </h2>
            <p className="text-iaso-text-light max-w-2xl mx-auto">
              이아소 포레스트에 대한 다양한 이야기
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {newsLinks.map((news, index) => (
              <a
                key={index}
                href={news.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white p-6 rounded-iaso shadow-iaso-sm hover:shadow-iaso transition-all hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-0.5 bg-iaso-green-50 text-iaso-green text-xs font-medium rounded">
                        {news.source}
                      </span>
                      <span className="text-xs text-iaso-text-light">
                        {news.date}
                      </span>
                    </div>
                    <h3 className="font-bold text-iaso-text">{news.title}</h3>
                  </div>
                  <ExternalLink className="w-5 h-5 text-iaso-text-light flex-shrink-0" />
                </div>
              </a>
            ))}
          </div>

          {/* 추가 콘텐츠 안내 */}
          <div className="mt-12 text-center">
            <p className="text-iaso-text-light mb-4">
              더 많은 소식은 공식 블로그에서 확인하세요
            </p>
            <a
              href="https://blog.naver.com/grr0529"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-iaso-green font-medium hover:underline"
            >
              네이버 블로그 바로가기
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
