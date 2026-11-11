// 푸터 운영자 표기와 카카오톡 채널 연결 (초안 04_운영자표기_리드폼동의문구_초안.md 1절).
// 운영자 값은 ./settings.ts 에서만 불러온다. 이 파일에는 상호, 대표자, 사업자등록번호, 주소를 적지 않는다.

import { OPERATOR, TRUSTEE } from './settings';

/** 운영자 표기 줄 (FooterOperator 의 operatorLines) */
export const FOOTER_OPERATOR_LINES: string[] = [
  `운영 ${OPERATOR.name} | 대표 ${OPERATOR.representative} | 사업자등록번호 ${OPERATOR.businessNo}`,
  `주소 ${OPERATOR.address}`,
];

/** 수탁자 표기 줄 (FooterOperator 의 trusteeLine) */
export const FOOTER_TRUSTEE_LINE: string = `웹사이트, 카카오톡 채널, 이아소 가든 정원 서비스 운영 수탁 ${TRUSTEE.name} (${TRUSTEE.representativeTitle} ${TRUSTEE.representative}, 사업자등록번호 ${TRUSTEE.businessNo})`;

/** 처리방침은 굵게 (04 초안 1절) */
export const FOOTER_LEGAL_LINKS = [
  { href: '/privacy/', label: '개인정보처리방침', bold: true },
  { href: '/terms/', label: '이용약관' },
];

/** 푸터 연락처 영역에 추가하는 카카오톡 채널 2개 (04 초안 1절 표) */
export const FOOTER_CHANNELS = [
  { label: '이아소 가든 (정원 서비스)', href: 'http://pf.kakao.com/_tssxeX' },
  { label: '이아소 가든도움 (이용 문의)', href: 'http://pf.kakao.com/_hxfxfxeX' },
];
