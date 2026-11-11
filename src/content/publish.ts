// 게시 설정 (S5, 2026-11-11). 기본값은 모두 "표시 안 함" 이다.
// 게시 시점 K1 단계에서 가동과 공개 상태를 확인한 뒤 해당 값만 true 로 바꾼다.
// 이 값은 /garden/ 페이지가 읽고, 신청 폼(S6)의 접수 완료 문구 H21 도 읽는다.

export interface GardenPublishSettings {
  showConditionalLines: boolean;
  showChannelCopy: boolean;
}

export const GARDEN_PUBLISH: GardenPublishSettings = {
  /**
   * 조건부 문장 C5, C10, C11, C12 (캘린더 개선 항목, 11-21 완료 예정분) 표시 여부.
   * K1 에서 A-10(C5), A-11(C10, C11, C12) 가동 합격을 확인하면 true.
   */
  showConditionalLines: false,
  /**
   * 카카오톡 채널 추가 문안(A5, E3, F5 와 F6, G0~G5 섹션, H21) 표시 여부.
   * K1 에서 채널 주소 2개가 일반 방문자에게 열리는 것을 확인하면 true.
   */
  showChannelCopy: false,
};

/** 조건부 문장 번호. showConditionalLines 가 false 이면 GardenUsage 에서 뺀다 */
export const CONDITIONAL_LINE_IDS = ['C5', 'C10', 'C11', 'C12'] as const;

/** 채널 문안 중 이미 컴포넌트가 번호로 거를 수 있는 것 */
export const CHANNEL_STEP_IDS = ['E3'] as const;
export const CHANNEL_FAQ_IDS = ['faq-ask'] as const;
