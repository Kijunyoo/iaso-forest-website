import { Metadata } from 'next';
import PageHero from '@/components/common/PageHero';
import ProcessTimeline from '@/components/guide/ProcessTimeline';
import FAQAccordion from '@/components/guide/FAQAccordion';
import TaxBenefits from '@/components/guide/TaxBenefits';
import GovernmentSupport from '@/components/guide/GovernmentSupport';
import CTABanner from '@/components/home/CTABanner';

export const metadata: Metadata = {
  title: '입주 가이드 | Iaso Forest - 전원주택 FAQ',
  description:
    '이아소 포레스트 입주 가이드. 계약부터 입주까지 6~8개월. 전원주택 건축 비용, 난방비, 세금 혜택 등 자주 묻는 질문에 답합니다.',
  openGraph: {
    title: '입주 가이드 | Iaso Forest',
    description: '전원주택에 대한 모든 궁금증을 해결해 드립니다.',
  },
};

export default function GuidePage() {
  return (
    <>
      {/* Hero Section */}
      <PageHero
        title="입주 가이드"
        subtitle="전원주택에 대한 모든 궁금증을 해결해 드립니다"
        slim
      />

      {/* 입주 절차 타임라인 */}
      <ProcessTimeline />

      {/* FAQ 아코디언 */}
      <FAQAccordion />

      {/* 세금 혜택 */}
      <TaxBenefits />

      {/* 정부 지원 정책 */}
      <GovernmentSupport />

      {/* CTA 배너 */}
      <CTABanner />
    </>
  );
}
