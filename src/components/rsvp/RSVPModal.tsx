'use client';

import { useState } from 'react';
import { X, Send, CheckCircle } from 'lucide-react';

interface RSVPModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RSVPModal({ isOpen, onClose }: RSVPModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    visitDate: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: n8n Webhook 연동
    // const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;
    // await fetch(webhookUrl, { method: 'POST', body: JSON.stringify(formData) });

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset and close after success
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ name: '', phone: '', email: '', visitDate: '', message: '' });
      onClose();
    }, 2000);
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
                  className="input"
                  placeholder="010-0000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 font-medium">이메일</label>
                <input
                  type="email"
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
                  className="input min-h-[100px] resize-none"
                  placeholder="궁금하신 점이 있으시면 남겨주세요."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
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

              <p className="text-sm text-iaso-text-light text-center">
                * 개인정보는 상담 목적으로만 사용됩니다.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
