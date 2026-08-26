import { Metadata } from 'next';
import PageHero from '@/components/common/PageHero';
import StoryList from '@/components/story/StoryList';

// SEO Metadata (SSG - 빌드 시 생성)
export const metadata: Metadata = {
  title: '스토리 | Iaso Forest - 전원생활 가이드',
  description:
    '전원주택 건축 가이드, 치유의 숲 정보, 입주민 인터뷰 등 이아소 포레스트의 다양한 이야기를 만나보세요.',
  openGraph: {
    title: '스토리 | Iaso Forest',
    description: '전원생활에 대한 유익한 정보와 이야기',
  },
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

      {/* 게시글 목록 (CSR - 동적 로딩) */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <StoryList />
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
