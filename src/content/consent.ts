// 동의 체크박스 문구와 "내용 보기" 고지문 (초안 04_운영자표기_리드폼동의문구_초안.md 2.2, 2.3, 2.4, 3.2, 3.3절).
// 폼(S6)은 이 파일의 문자열만 읽고, 폼 파일에는 법정 문자열을 두지 않는다 (기획서 노드 S6 Ownership).
// 운영자 상호 등 빈칸은 ./settings.ts 값을 {{키}} 로 불러 쓴다. 문자열은 초안 그대로이며 새 문장을 쓰지 않았다.

import { fillVars, LEGAL_VARS } from './settings';

export interface ConsentNoticeRow {
  label: string;
  /** 줄바꿈은 \n */
  value: string;
}

export interface ConsentNotice {
  title: string;
  rows: ConsentNoticeRow[];
  /** 표 아래 덧붙는 문장. 없으면 생략 */
  footnote?: string;
}

export interface ConsentSubOptionDef {
  /** 전송 키 (consent_marketing_sms 등) */
  name: string;
  label: string;
}

export interface ConsentDef {
  /** 전송 키. 선택 동의는 하위 채널 키(subOptions[].name)를 값으로 보낸다 */
  name: string;
  /** 초안 표기 그대로 (필수) 또는 (선택) */
  badge: string;
  label: string;
  required: boolean;
  /** "내용 보기" 열기 문구. 고지문이 없고 연결 문서만 있는 항목도 있다 */
  noticeLabel?: string;
  notice?: ConsentNotice;
  /** 고지문 대신 연결할 문서 (이용약관). 04 초안에는 이용약관 내용 보기 의 고지문 문자열이 없다 */
  href?: string;
  subOptions?: ConsentSubOptionDef[];
}

function fillNotice(n: ConsentNotice): ConsentNotice {
  return {
    title: fillVars(n.title),
    rows: n.rows.map((r) => ({ label: fillVars(r.label), value: fillVars(r.value) })),
    footnote: n.footnote ? fillVars(n.footnote) : undefined,
  };
}

/** 고지문을 초안 코드 블록과 같은 평문으로 만든다 (QW-16 비교, 화면 pre-line 표시용) */
export function noticeToText(n: ConsentNotice): string {
  const body = n.rows.map((r) => `${r.label}  ${r.value}`).join('\n');
  return n.footnote ? `${n.title}\n\n${body}\n${n.footnote}` : `${n.title}\n\n${body}`;
}

const NOTICE_NOTICE_LABEL = '내용 보기';

/** 04 초안 2.3절: 분양 상담 예약 폼 개인정보 고지문 */
export const LEAD_PRIVACY_NOTICE: ConsentNotice = fillNotice({
  title: '개인정보 수집, 이용 안내',
  rows: [
    { label: '수집 목적', value: '분양 상담과 현장 방문 예약의 접수, 일정 안내, 상담' },
    { label: '수집 항목', value: '필수: 이름, 휴대전화번호, 방문 희망일 / 선택: 이메일 주소, 문의 내용' },
    { label: '보유 기간', value: '수집일부터 1년. 동의를 철회하시면 바로 파기합니다' },
    {
      label: '동의 거부',
      value:
        '동의하지 않으실 수 있습니다. 다만 동의하지 않으시면 웹사이트 예약이 접수되지 않으며, 전화(031-770-1880)로 상담 예약을 하실 수 있습니다',
    },
    {
      label: '처리 위탁',
      value:
        '{{trusteeName}}가 {{operatorName}}의 위탁을 받아 접수와 관리를 합니다.\n재수탁자와 국외 이전 사항은 개인정보처리방침 제5조, 제6조에 있습니다.',
    },
  ],
});

/** 04 초안 2.4절: 광고성 정보 수신 고지문 (분양 상담 폼, 정원 신청 폼 공통) */
export const MARKETING_NOTICE: ConsentNotice = fillNotice({
  title: '광고성 정보 수신 안내',
  rows: [
    { label: '목적', value: '분양 소식, 행사, 정원 서비스 안내 발송' },
    { label: '항목', value: '이름, 휴대전화번호, 이메일 주소' },
    { label: '보유 기간', value: '동의를 철회하실 때까지' },
  ],
  footnote:
    '동의하지 않으셔도 상담 예약은 그대로 접수됩니다. 수신 거부는 받으신 메시지의 안내나 info@iasoforest.com 으로 언제든지 하실 수 있습니다.',
});

/** 04 초안 3.3절: 정원 서비스 신청 폼 개인정보 고지문 */
export const GARDEN_PRIVACY_NOTICE: ConsentNotice = fillNotice({
  title: '개인정보 수집, 이용 안내',
  rows: [
    {
      label: '수집 목적',
      value:
        '정원 서비스 신청 접수와 제공(관리 일정 안내, 식물 정보 제공, 식물 식별과 진단, 기록 일지, 상담), 접수 안내 메시지 발송',
    },
    {
      label: '수집 항목',
      value:
        '필수: 이름, 휴대전화번호, 정원 소재지(시군, 읍면) / 선택: 신청 내용\n카카오톡 채널 이용 시: 채널 이용자 식별자, 이름, 사는 곳(시군, 읍면), 대화 내용, 식물 정보, 정원 사진과 영상',
    },
    { label: '보유 기간', value: '서비스 이용 종료를 요청하실 때까지. 1년간 이용 기록이 없으면 파기합니다' },
    {
      label: '동의 거부',
      value: '동의하지 않으실 수 있습니다. 다만 동의하지 않으시면 정원 서비스를 이용하실 수 없습니다',
    },
    {
      label: '처리 위탁',
      value:
        '{{trusteeName}}가 {{operatorName}}의 위탁을 받아 정원 서비스를 운영합니다.\n재수탁자와 국외 이전 사항은 개인정보처리방침 제5조, 제6조에 있습니다.',
    },
  ],
});

const MARKETING_SUB_OPTIONS: ConsentSubOptionDef[] = [
  { name: 'consent_marketing_sms', label: '문자' },
  { name: 'consent_marketing_kakao', label: '카카오톡' },
  { name: 'consent_marketing_email', label: '이메일' },
];

/** 04 초안 2.2절: 분양 상담 예약 폼 체크박스 (필수 2, 선택 1). 기본값은 모두 선택 안 함 */
export const LEAD_CONSENTS: ConsentDef[] = [
  {
    name: 'consent_privacy',
    badge: '(필수)',
    label: '개인정보 수집, 이용에 동의합니다.',
    required: true,
    noticeLabel: NOTICE_NOTICE_LABEL,
    notice: LEAD_PRIVACY_NOTICE,
  },
  {
    name: 'consent_age14',
    badge: '(필수)',
    label: '만 14세 이상입니다.',
    required: true,
  },
  {
    name: 'consent_marketing',
    badge: '(선택)',
    label: '분양 소식과 행사 안내를 받겠습니다.',
    required: false,
    noticeLabel: NOTICE_NOTICE_LABEL,
    notice: MARKETING_NOTICE,
    subOptions: MARKETING_SUB_OPTIONS,
  },
];

/** 04 초안 3.2절: 정원 서비스 신청 폼 체크박스 (필수 3, 선택 1). 기본값은 모두 선택 안 함 */
export const GARDEN_CONSENTS: ConsentDef[] = [
  {
    name: 'consent_terms',
    badge: '(필수)',
    label: '이용약관에 동의합니다.',
    required: true,
    noticeLabel: NOTICE_NOTICE_LABEL,
    href: '/terms/',
  },
  {
    name: 'consent_privacy',
    badge: '(필수)',
    label: '개인정보 수집, 이용에 동의합니다.',
    required: true,
    noticeLabel: NOTICE_NOTICE_LABEL,
    notice: GARDEN_PRIVACY_NOTICE,
  },
  {
    name: 'consent_age14',
    badge: '(필수)',
    label: '만 14세 이상입니다.',
    required: true,
  },
  {
    name: 'consent_marketing',
    badge: '(선택)',
    label: '정원 서비스 소식과 행사 안내를 받겠습니다.',
    required: false,
    noticeLabel: NOTICE_NOTICE_LABEL,
    notice: MARKETING_NOTICE,
    subOptions: MARKETING_SUB_OPTIONS,
  },
];

/** 동의 기록의 consent_version 값 (04 초안 2.5절: 처리방침 시행일) */
export const CONSENT_VERSION: string = LEGAL_VARS.effectiveDate;
