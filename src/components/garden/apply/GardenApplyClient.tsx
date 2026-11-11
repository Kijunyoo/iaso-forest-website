'use client';

// 정원 신청 폼의 상태와 전송을 맡는 클라이언트 래퍼 (S4 GardenApplyForm 은 상태를 받기만 한다).
// 고지문과 체크박스 문구는 @/content/consent 에서 읽고, 이 파일에는 두지 않는다.

import { useCallback, useState, type FormEvent, type ReactNode } from 'react';
import { GardenApplyForm, ConsentBlock } from '@/components/garden/sections';
import type { ApplyFieldErrors, ApplyStatus, ApplyValues } from '@/components/garden/sections';
import { APPLY_COPY } from '@/components/garden/sections/copy';
import { GARDEN_CONSENTS, type ConsentDef } from '@/content/consent';
import { GARDEN_PUBLISH } from '@/content/publish';
import { LEAD_LIMITS, isValidPhone, submitLead, useConsentForm } from '@/lib/consent';

const EMPTY_VALUES: ApplyValues = { name: '', phone: '', address: '', message: '' };

const LIMITS: Record<keyof ApplyValues, number> = {
  name: LEAD_LIMITS.name,
  phone: LEAD_LIMITS.phone,
  address: LEAD_LIMITS.garden_location,
  message: LEAD_LIMITS.message,
};

// 이용약관 항목은 고지문 문자열이 없고 연결 문서만 있다 (S5 결과 7절 1). 내용 보기 안에 문서 링크를 둔다.
const TERMS_LINK_TEXT = '이용약관 전문 보기';

function termsLinkNotice(def: ConsentDef): ReactNode {
  if (!def.href) return undefined;
  return (
    <a
      href={def.href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-iaso-green underline underline-offset-4"
    >
      {TERMS_LINK_TEXT}
    </a>
  );
}

export default function GardenApplyClient() {
  const [status, setStatus] = useState<ApplyStatus>('idle');
  const [values, setValues] = useState<ApplyValues>(EMPTY_VALUES);
  const [errors, setErrors] = useState<ApplyFieldErrors>({});
  const consent = useConsentForm(GARDEN_CONSENTS, { linkNotice: termsLinkNotice });

  const onChange = useCallback((field: keyof ApplyValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value.slice(0, LIMITS[field]) }));
    setErrors((prev) => (field in prev ? { ...prev, [field]: false } : prev));
  }, []);

  const onSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (status === 'submitting' || !consent.requiredOk) return;

      const nextErrors: ApplyFieldErrors = {
        name: values.name.trim().length === 0,
        phone: !isValidPhone(values.phone),
        address: values.address.trim().length === 0,
      };
      setErrors(nextErrors);
      if (nextErrors.name || nextErrors.phone || nextErrors.address) return;

      setStatus('submitting');
      // 필수 동의가 없으면 submitLead 는 요청을 보내지 않고 'blocked' 를 돌려준다
      const outcome = await submitLead(
        'garden_apply',
        {
          name: values.name,
          phone: values.phone,
          message: values.message,
          garden_location: values.address,
        },
        GARDEN_CONSENTS,
        consent.checked,
      );

      if (outcome === 'success') {
        setStatus('success');
      } else if (outcome === 'consent-recheck' || outcome === 'blocked') {
        setStatus('consent-recheck');
      } else {
        // 입력값과 동의 체크는 그대로 둔다
        setStatus('failure');
      }
      window.scrollTo({ top: 0 });
    },
    [status, consent.requiredOk, consent.checked, values],
  );

  // 접수 실패, 동의 재확인 화면에서 입력 화면으로 돌아간다 (입력값 유지)
  const onRetry = useCallback(() => setStatus('idle'), []);

  // 채널 안내 문구(H21)는 게시 설정이 꺼져 있으면 보이지 않는다. S4 의 접수 완료 화면은 H21 을 항상 넣으므로
  // 꺼져 있을 때는 제목만 있는 접수 확인 화면을 쓴다.
  if (status === 'success' && !GARDEN_PUBLISH.showChannelCopy) {
    return (
      <section className="py-12 md:py-16 bg-white">
        <div className="container-iaso max-w-xl text-center" role="status">
          <h2 className="text-2xl md:text-3xl font-bold text-iaso-green leading-snug">
            {APPLY_COPY.success.title.text}
          </h2>
        </div>
      </section>
    );
  }

  return (
    <GardenApplyForm
      status={status}
      values={values}
      onChange={onChange}
      onSubmit={onSubmit}
      onRetry={onRetry}
      consentSlot={<ConsentBlock items={consent.items} />}
      submitDisabled={!consent.requiredOk}
      errors={errors}
      showPhoneHelp
    />
  );
}
