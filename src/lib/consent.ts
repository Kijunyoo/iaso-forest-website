'use client';

// 동의 상태, 전송 값 조립, 접수 전송 (분양 상담 폼, 정원 신청 폼 공통).
// 고지문과 체크박스 문구는 여기에 두지 않는다. @/content/consent 의 데이터를 읽기만 한다.
// 전송 규격은 n8n `[Iaso] Lead Intake v3` (S8 결과 1절).

import { useCallback, useMemo, useState, type ReactNode } from 'react';
import type { ConsentItem } from '@/components/garden/sections/ConsentBlock';
import { CONSENT_VERSION, noticeToText, type ConsentDef } from '@/content/consent';
import { LEAD_ENDPOINT, LEAD_TIMEOUT_MS } from '@/lib/endpoints';

export type LeadSource = 'website' | 'garden_apply';

/** 전송 결과. 'blocked' 는 필수 동의가 모자라 요청을 보내지 않은 경우다 */
export type SubmitOutcome = 'success' | 'consent-recheck' | 'failure' | 'blocked';

export type ConsentChecked = Record<string, boolean>;

export interface LeadFields {
  name: string;
  phone: string;
  email?: string;
  visit_date?: string;
  message?: string;
  /** 정원 신청 폼의 정원 소재지 */
  garden_location?: string;
}

/** 입력 길이 상한 (서버 검증과 같다, S8 결과 1절) */
export const LEAD_LIMITS = {
  name: 50,
  phone: 20,
  email: 100,
  message: 1000,
  garden_location: 100,
} as const;

/** 휴대전화번호가 숫자만 뽑아 9~11자리인지 (서버 검증과 같다) */
export function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/[^0-9]/g, '');
  return digits.length >= 9 && digits.length <= 11;
}

function allRequiredChecked(defs: ConsentDef[], checked: ConsentChecked): boolean {
  return defs.filter((d) => d.required).every((d) => checked[d.name] === true);
}

/**
 * 전송 본문을 만든다. 필수 동의가 하나라도 true 가 아니면 null 을 돌려준다 (전송 코드 경로 차단점).
 * 선택 동의의 전송 키는 부모(consent_marketing)가 아니라 하위 채널 3개이며, 부모가 체크된 경우에만 true 가 될 수 있다.
 */
export function buildLeadPayload(
  source: LeadSource,
  fields: LeadFields,
  defs: ConsentDef[],
  checked: ConsentChecked,
  now: Date = new Date(),
): Record<string, unknown> | null {
  if (!allRequiredChecked(defs, checked)) return null;

  const body: Record<string, unknown> = {
    name: fields.name.trim(),
    phone: fields.phone.trim(),
    email: fields.email && fields.email.trim() ? fields.email.trim() : null,
    visit_date: fields.visit_date ? fields.visit_date : null,
    message: fields.message && fields.message.trim() ? fields.message.trim() : null,
    source,
  };
  if (source === 'garden_apply') {
    body.garden_location = (fields.garden_location ?? '').trim();
  }

  const names = new Set<string>();
  const subNames = new Set<string>();
  for (const d of defs) {
    names.add(d.name);
    for (const s of d.subOptions ?? []) subNames.add(s.name);
  }
  // 필수 동의 키 (정의된 항목만 보낸다. consent_terms 는 정원 신청 폼에만 있다)
  for (const k of ['consent_privacy', 'consent_age14', 'consent_terms']) {
    if (names.has(k)) body[k] = checked[k] === true;
  }
  // 선택 동의 하위 채널 키
  subNames.forEach((k) => {
    body[k] = checked[k] === true;
  });

  body.consent_version = CONSENT_VERSION;
  body.consent_at = now.toISOString();
  return body;
}

/** 접수 전송. 필수 동의가 없으면 fetch 를 호출하지 않고 'blocked' 를 돌려준다 */
export async function submitLead(
  source: LeadSource,
  fields: LeadFields,
  defs: ConsentDef[],
  checked: ConsentChecked,
): Promise<SubmitOutcome> {
  const payload = buildLeadPayload(source, fields, defs, checked);
  if (payload === null) return 'blocked';

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), LEAD_TIMEOUT_MS);
  try {
    const res = await fetch(LEAD_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    let json: { success?: boolean; code?: string } | null = null;
    try {
      json = await res.json();
    } catch {
      json = null;
    }

    if (res.ok) {
      // 시트 또는 DB 중 하나 이상 저장되면 서버가 200 + success:true 를 준다
      return json && json.success === true ? 'success' : 'failure';
    }
    if (res.status === 400 && json && json.code === 'consent_required') {
      return 'consent-recheck';
    }
    // 400 invalid_request, 500 (시트와 DB 모두 실패), 그 밖의 응답
    return 'failure';
  } catch {
    return 'failure';
  } finally {
    clearTimeout(timer);
  }
}

interface UseConsentFormOptions {
  /** 고지문 문자열이 없고 연결 문서(href)만 있는 항목의 "내용 보기" 본문 (이용약관 링크 등) */
  linkNotice?: (def: ConsentDef) => ReactNode;
}

/**
 * 동의 체크 상태. 모든 항목 기본값은 미선택이다.
 * ConsentBlock 에 넘길 items 와 필수 동의 충족 여부를 돌려준다.
 */
export function useConsentForm(defs: ConsentDef[], options: UseConsentFormOptions = {}) {
  const [checked, setChecked] = useState<ConsentChecked>({});
  const { linkNotice } = options;

  const setItem = useCallback(
    (def: ConsentDef, value: boolean) => {
      setChecked((prev) => {
        const next = { ...prev, [def.name]: value };
        if (!value) {
          // 부모 선택 동의를 해제하면 하위 채널도 모두 해제한다
          for (const s of def.subOptions ?? []) next[s.name] = false;
        }
        return next;
      });
    },
    [],
  );

  const setSub = useCallback((def: ConsentDef, subName: string, value: boolean) => {
    setChecked((prev) => {
      const next = { ...prev, [subName]: value };
      // 하위 채널을 고르면 부모 동의도 함께 선택한 것으로 본다
      if (value) next[def.name] = true;
      return next;
    });
  }, []);

  const items: ConsentItem[] = useMemo(
    () =>
      defs.map((def) => ({
        name: def.name,
        badge: def.badge,
        label: def.label,
        required: def.required,
        checked: checked[def.name] === true,
        onChange: (v: boolean) => setItem(def, v),
        noticeLabel: def.noticeLabel,
        notice: def.notice ? noticeToText(def.notice) : linkNotice ? linkNotice(def) : undefined,
        subOptions: def.subOptions?.map((s) => ({
          name: s.name,
          label: s.label,
          checked: checked[s.name] === true,
          onChange: (v: boolean) => setSub(def, s.name, v),
        })),
      })),
    [defs, checked, linkNotice, setItem, setSub],
  );

  const requiredOk = allRequiredChecked(defs, checked);
  const reset = useCallback(() => setChecked({}), []);

  return { items, checked, requiredOk, reset };
}
