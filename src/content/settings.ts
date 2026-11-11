// 운영자 정보와 법정 문서 빈칸의 단일 원본 (S5, 2026-11-11).
//
// 아래 값 중 대괄호로 둘러싼 것은 "빈칸 토큰" 이다. 이아소마을 측 정보가 도착하면 S10 이 이 파일의 값만 치환한다.
// 법정 본문(legal/), 고지문(consent.ts), 푸터 표기(footer.ts)는 이 파일의 값을 {{키}} 자리표시로 불러 쓰므로
// 운영자 정보는 다른 어떤 파일에도 따로 적지 않는다 (QA 기준서 QW-13).
// 빈칸이 남아 있는지는 `npm run check-blanks` (scripts/check-blanks.mjs) 가 검사한다.

export interface OperatorSettings {
  /** 상호 */
  name: string;
  /** 대표자 */
  representative: string;
  /** 사업자등록번호 */
  businessNo: string;
  /** 주소 */
  address: string;
}

export interface LegalVariables {
  /** 처리방침과 약관의 시행일. 동의 기록의 consent_version 값으로도 쓴다 */
  effectiveDate: string;
  /** 서버 호스팅 재수탁자의 계약 법인명 */
  hostingerEntity: string;
  /** 서버가 있는 국가 */
  vpsCountry: string;
  /** Google 의 처리 국가 */
  googleCountry: string;
  /** 이용 통계 분석 도구 사용 여부 */
  analyticsUse: string;
}

export const OPERATOR: OperatorSettings = {
  name: '[이아소마을 상호]',
  representative: '[이아소마을 대표자]',
  businessNo: '[이아소마을 사업자등록번호]',
  address: '[이아소마을 주소]',
};

/** 운영 수탁자. 확정된 값이며 빈칸이 아니다 */
export const TRUSTEE = {
  name: '에이케이시스 주식회사',
  representativeTitle: '대표이사',
  representative: '유기준',
  businessNo: '264-81-18189',
} as const;

export const LEGAL_VARS: LegalVariables = {
  effectiveDate: '[시행일]',
  hostingerEntity: '[Hostinger 계약 법인명]',
  vpsCountry: '[VPS 서버 국가: 말레이시아 확인 필요]',
  googleCountry: '[Google 처리 국가]',
  analyticsUse: '[분석 도구 사용 여부]',
};

/** 본문 안 자리표시 {{키}} 와 값의 대응 */
const PLACEHOLDERS: Record<string, string> = {
  operatorName: OPERATOR.name,
  operatorRepresentative: OPERATOR.representative,
  operatorBusinessNo: OPERATOR.businessNo,
  operatorAddress: OPERATOR.address,
  effectiveDate: LEGAL_VARS.effectiveDate,
  hostingerEntity: LEGAL_VARS.hostingerEntity,
  vpsCountry: LEGAL_VARS.vpsCountry,
  googleCountry: LEGAL_VARS.googleCountry,
  analyticsUse: LEGAL_VARS.analyticsUse,
  trusteeName: TRUSTEE.name,
  trusteeRepresentativeTitle: TRUSTEE.representativeTitle,
  trusteeRepresentative: TRUSTEE.representative,
  trusteeBusinessNo: TRUSTEE.businessNo,
};

/** 문자열 안의 {{키}} 를 위 값으로 바꾼다. 모르는 키는 빌드를 멈추도록 예외를 던진다 */
export function fillVars(text: string): string {
  return text.replace(/\{\{(\w+)\}\}/g, (_, key: string) => {
    const value = PLACEHOLDERS[key];
    if (value === undefined) {
      throw new Error(`content: 알 수 없는 자리표시 {{${key}}}`);
    }
    return value;
  });
}
