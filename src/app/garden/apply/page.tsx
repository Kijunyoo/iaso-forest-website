import type { Metadata } from 'next';
import GardenApplyClient from '@/components/garden/apply/GardenApplyClient';

export const metadata: Metadata = {
  title: '정원 서비스 신청 | Iaso Forest',
  alternates: { canonical: '/garden/apply/' },
};

export default function GardenApplyPage() {
  return (
    <>
      {/* 고정 헤더(투명, 흰 글자) 뒤 배경. /garden/ 과 같은 방식 */}
      <div aria-hidden="true" className="h-20 bg-iaso-green-800" />
      <GardenApplyClient />
    </>
  );
}
