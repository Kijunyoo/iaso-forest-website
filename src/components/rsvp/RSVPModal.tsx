'use client';

import { useState } from 'react';
import { X, Send, CheckCircle, AlertCircle } from 'lucide-react';
import ConsentBlock from '@/components/garden/sections/ConsentBlock';
import { LEAD_CONSENTS } from '@/content/consent';
import { LEAD_LIMITS, isValidPhone, submitLead, useConsentForm } from '@/lib/consent';

interface RSVPModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RSVPModal({ isOpen, onClose }: RSVPModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isConsentRecheck, setIsConsentRecheck] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const consent = useConsentForm(LEAD_CONSENTS);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    visitDate: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting || !consent.requiredOk) return;
    if (!isValidPhone(formData.phone)) {
      setPhoneError(true);
      return;
    }
    setPhoneError(false);
    setIsSubmitting(true);
    setIsError(false);
    setIsConsentRecheck(false);

    // 필수 동의가 없으면 submitLead 는 요청을 보내지 않고 'blocked' 를 돌려준다
    const outcome = await submitLead(
      'website',
      {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        visit_date: formData.visitDate,
        message: formData.message,
      },
      LEAD_CONSENTS,
      consent.checked,
    );
    setIsSubmitting(false);

    if (outcome === 'success') {
      setIsSuccess(true);
      // Reset and close after success
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({ name: '', phone: '', email: '', visitDate: '', message: '' });
        consent.reset();
        onClose();
      }, 2000);
    } else if (outcome === 'consent-recheck' || outcome === 'blocked') {
      setIsConsentRecheck(true);
    } else {
      setIsError(true);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 animate-fade-in"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto shadow-iaso-lg animate-fade-in-up">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-iaso-beige-200">
          <h2 className="text-2xl font-bold text-iaso-green">상담 예약</h2>
          <button
            onClick={onClose}
            className="touch-target flex items-center justify-center text-iaso-text-light hover:text-iaso-text"
            aria-label="닫기"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {isSuccess ? (
            <div className="text-center py-8">
              <CheckCircle className="w-16 h-16 text-iaso-green mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">예약이 접수되었습니다!</h3>
              <p className="text-iaso-text-light">
                빠른 시일 내에 연락드리겠습니다.
              </p>
            </div>
          ) : isConsentRecheck ? (
            <div className="text-center py-8">
              <AlertCircle className="w-16 h-16 text-iaso-green mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">동의 내용을 다시 확인해 주세요</h3>
              <p className="text-iaso-text-light mb-4">
                꼭 필요한 동의 2가지에 체크되어 있는지 봐 주세요.
              </p>
              <button
                onClick={() => setIsConsentRecheck(false)}
                className="btn btn-secondary"
              >
                다시 시도
              </button>
            </div>
          ) : isError ? (
            <div className="text-center py-8">
              <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">접수에 실패했습니다</h3>
              <p className="text-iaso-text-light mb-4">
                잠시 후 다시 시도해주세요.
              </p>
              <button
                onClick={() => setIsError(false)}
                className="btn btn-secondary"
              >
                다시 시도
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label className="block mb-2 font-medium">
                  이름 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  maxLength={LEAD_LIMITS.name}
                  className="input"
                  placeholder="홍길동"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block mb-2 font-medium">
                  연락처 <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  maxLength={LEAD_LIMITS.phone}
                  className="input"
                  placeholder="010-0000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
                {phoneError && (
                  <p role="alert" className="mt-2 text-red-500">
                    연락처를 다시 확인해 주세요.
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 font-medium">이메일</label>
                <input
                  type="email"
                  maxLength={LEAD_LIMITS.email}
                  className="input"
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              {/* Visit Date */}
              <div>
                <label className="block mb-2 font-medium">
                  방문 희망일 <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  required
                  className="input"
                  value={formData.visitDate}
                  onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                />
              </div>

              {/* Message */}
              <div>
                <label className="block mb-2 font-medium">문의 내용</label>
                <textarea
                  maxLength={LEAD_LIMITS.message}
                  className="input min-h-[100px] resize-none"
                  placeholder="궁금하신 점이 있으시면 남겨주세요."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              {/* 동의 (고지문은 src/content/consent.ts 에서 읽는다) */}
              <ConsentBlock items={consent.items} />

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting || !consent.requiredOk}
                className="btn btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    접수 중...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send size={20} />
                    예약 신청하기
                  </span>
                )}
              </button>

            </form>
          )}
        </div>
      </div>
    </div>
  );
}
