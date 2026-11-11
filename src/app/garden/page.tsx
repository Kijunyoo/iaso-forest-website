import type { Metadata } from 'next';
import {
  GardenHero,
  GardenIntro,
  GardenUsage,
  GardenUpcoming,
  GardenSteps,
  GardenFaq,
  GardenChannels,
} from '@/components/garden/sections';
import {
  GARDEN_PUBLISH,
  CONDITIONAL_LINE_IDS,
  CHANNEL_STEP_IDS,
  CHANNEL_FAQ_IDS,
} from '@/content/publish';

export const metadata: Metadata = {
  title: '이아소 가든 | Iaso Forest',
  description: '마당 식물의 할 일과 기록을 카카오톡에서 한곳에 모아 볼 수 있어요.',
  alternates: { canonical: '/garden/' },
};

export default function GardenPage() {
  const { showConditionalLines, showChannelCopy } = GARDEN_PUBLISH;

  return (
    <>
      {/* 고정 헤더(투명, 흰 글자) 뒤 배경. 첫 화면이 밝은 색이라 헤더 글자가 보이도록 둔다 */}
      <div aria-hidden="true" className="h-20 bg-iaso-green-800" />

      {/* A 첫 화면. 신청 버튼은 /garden/apply/ 로 링크만 건다 */}
      <GardenHero showChannelButton={showChannelCopy} />
      {/* B 서비스 소개 */}
      <GardenIntro />
      {/* C 이렇게 쓰실 수 있어요. 조건부 문장은 게시 설정이 켜질 때만 */}
      <GardenUsage excludeIds={showConditionalLines ? [] : [...CONDITIONAL_LINE_IDS]} />
      {/* D 준비 중인 서비스 */}
      <GardenUpcoming />
      {/* E 이용 순서. 채널 문안 E3 는 게시 설정이 켜질 때만 */}
      <GardenSteps excludeIds={showChannelCopy ? [] : [...CHANNEL_STEP_IDS]} />
      {/* F 자주 묻는 질문. 채널 문안 F5, F6 은 게시 설정이 켜질 때만 */}
      <GardenFaq excludeIds={showChannelCopy ? [] : [...CHANNEL_FAQ_IDS]} />
      {/* G 채널 추가 안내. 게시 설정이 켜질 때만 */}
      {showChannelCopy && <GardenChannels />}
    </>
  );
}
