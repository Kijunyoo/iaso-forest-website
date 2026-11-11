'use client';

import type { FormEvent, ReactNode } from 'react';
import { APPLY_COPY } from './copy';

export type ApplyStatus =
  | 'idle'
  | 'submitting'
  | 'success'
  | 'failure'
  | 'consent-recheck';

export interface ApplyValues {
  name: string;
  phone: string;
  address: string;
  message: string;
}

export interface ApplyFieldErrors {
  name?: boolean;
  phone?: boolean;
  address?: boolean;
}

interface GardenApplyFormProps {
  status: ApplyStatus;
  values: ApplyValues;
  onChange: (field: keyof ApplyValues, value: string) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  /** 접수 실패, 동의 재확인 화면에서 입력 화면으로 돌아가는 동작 */
  onRetry: () => void;
  /** 동의 체크박스 블록 (ConsentBlock). S6 이 상태와 함께 넘긴다 */
  consentSlot: ReactNode;
  /** 필수 동의 3개가 모두 체크되지 않으면 true */
  submitDisabled: boolean;
  errors?: ApplyFieldErrors;
  /** H9 (숫자만 적으셔도 돼요)는 S6 가 숫자만 입력 보정을 구현한 경우에만 true */
  showPhoneHelp?: boolean;
  /** 접수 완료 화면에 채널 추가 버튼 등을 넣는 자리 */
  successExtra?: ReactNode;
}

const fieldClass = 'input min-h-12 text-base md:text-lg';
const errorFieldClass = 'border-iaso-gold-600 border-2';

function RequiredMark() {
  return (
    <span className="ml-1 font-bold text-iaso-gold-600" aria-hidden="true">
      *
    </span>
  );
}

function FieldError({ text }: { text: string }) {
  return (
    <p role="alert" className="mt-2 text-base md:text-lg font-semibold text-iaso-gold-600">
      {text}
    </p>
  );
}

export default function GardenApplyForm({
  status,
  values,
  onChange,
  onSubmit,
  onRetry,
  consentSlot,
  submitDisabled,
  errors = {},
  showPhoneHelp = true,
  successExtra,
}: GardenApplyFormProps) {
  const f = APPLY_COPY.fields;

  if (status === 'success') {
    return (
      <section className="py-12 md:py-16 bg-white">
        <div className="container-iaso max-w-xl text-center" role="status">
          <h2 className="text-2xl md:text-3xl font-bold text-iaso-green leading-snug mb-4">
            {APPLY_COPY.success.title.text}
          </h2>
          <p className="text-lg md:text-xl text-iaso-text leading-loose mb-8">
            {APPLY_COPY.success.text.text}
          </p>
          {successExtra}
        </div>
      </section>
    );
  }

  if (status === 'failure' || status === 'consent-recheck') {
    const msg =
      status === 'failure' ? APPLY_COPY.failure : APPLY_COPY.consentRecheck;
    return (
      <section className="py-12 md:py-16 bg-white">
        <div className="container-iaso max-w-xl text-center" role="alert">
          <h2 className="text-2xl md:text-3xl font-bold text-iaso-text leading-snug mb-4">
            {msg.title.text}
          </h2>
          <p className="text-lg md:text-xl text-iaso-text leading-loose mb-8">
            {msg.text.text}
          </p>
          <button
            type="button"
            onClick={onRetry}
            className="btn btn-primary min-h-14 w-full text-lg"
          >
            {APPLY_COPY.retryButton.text}
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container-iaso max-w-xl">
        <h1 className="text-3xl md:text-4xl font-bold text-iaso-green leading-snug mb-6">
          {APPLY_COPY.title.text}
        </h1>
        <div className="mb-8 space-y-2">
          {APPLY_COPY.guides.map((g) => (
            <p key={g.id} className="text-base md:text-lg text-iaso-text leading-loose">
              {g.text}
            </p>
          ))}
        </div>

        <form onSubmit={onSubmit} noValidate className="space-y-7">
          <div>
            <label htmlFor="garden-name" className="block mb-2 text-lg font-medium text-iaso-text">
              {f.name.label.text}
              <RequiredMark />
            </label>
            <input
              id="garden-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              className={`${fieldClass} ${errors.name ? errorFieldClass : ''}`}
              placeholder={f.name.placeholder.text}
              value={values.name}
              onChange={(e) => onChange('name', e.target.value)}
            />
            {errors.name && <FieldError text={APPLY_COPY.errors.name.text} />}
          </div>

          <div>
            <label htmlFor="garden-phone" className="block mb-2 text-lg font-medium text-iaso-text">
              {f.phone.label.text}
              <RequiredMark />
            </label>
            <input
              id="garden-phone"
              name="phone"
              type="tel"
              inputMode="tel"
              required
              autoComplete="tel"
              className={`${fieldClass} ${errors.phone ? errorFieldClass : ''}`}
              placeholder={f.phone.placeholder.text}
              value={values.phone}
              onChange={(e) => onChange('phone', e.target.value)}
            />
            {showPhoneHelp && (
              <p className="mt-2 text-base text-iaso-text-light leading-relaxed">
                {f.phone.help.text}
              </p>
            )}
            {errors.phone && <FieldError text={APPLY_COPY.errors.phone.text} />}
          </div>

          <div>
            <label htmlFor="garden-address" className="block mb-2 text-lg font-medium text-iaso-text">
              {f.address.label.text}
              <RequiredMark />
            </label>
            <input
              id="garden-address"
              name="address"
              type="text"
              required
              className={`${fieldClass} ${errors.address ? errorFieldClass : ''}`}
              placeholder={f.address.placeholder.text}
              value={values.address}
              onChange={(e) => onChange('address', e.target.value)}
            />
            <p className="mt-2 text-base text-iaso-text-light leading-relaxed">
              {f.address.help.text}
            </p>
            {errors.address && <FieldError text={APPLY_COPY.errors.address.text} />}
          </div>

          <div>
            <label htmlFor="garden-message" className="block mb-2 text-lg font-medium text-iaso-text">
              {f.message.label.text}
            </label>
            <textarea
              id="garden-message"
              name="message"
              className={`${fieldClass} min-h-32 resize-none`}
              placeholder={f.message.placeholder.text}
              value={values.message}
              onChange={(e) => onChange('message', e.target.value)}
            />
          </div>

          {consentSlot}

          <div>
            <button
              type="submit"
              disabled={submitDisabled || status === 'submitting'}
              className="btn btn-primary min-h-14 w-full text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {APPLY_COPY.submit.text}
            </button>
            <p className="mt-3 text-base md:text-lg text-iaso-text-light leading-loose text-center">
              {APPLY_COPY.submitHint.text}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
