import type { ReactNode } from 'react';

export interface ConsentSubOption {
  name: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export interface ConsentItem {
  /** form 이름과 key 로 쓰는 값 (예 consent_terms) */
  name: string;
  /** 필수 또는 선택 표기. S5 가 src/content/ 에서 넘긴다 */
  badge: string;
  /** 체크박스 문구. 법정 문안이므로 S5 가 src/content/ 에서 그대로 넘긴다 */
  label: string;
  required: boolean;
  checked: boolean;
  onChange: (checked: boolean) => void;
  /** "내용 보기" 열기 문구. 고지문이 없는 항목은 생략 */
  noticeLabel?: string;
  /** 고지문 본문. src/content/ 데이터로 S5 가 만들고 S6 이 넘긴다 */
  notice?: ReactNode;
  /** 선택 동의의 수신 채널 체크박스 (문자, 카카오톡, 이메일) */
  subOptions?: ConsentSubOption[];
}

interface ConsentBlockProps {
  items: ConsentItem[];
  /** 블록 제목. 생략 가능 */
  legend?: string;
}

export default function ConsentBlock({ items, legend }: ConsentBlockProps) {
  return (
    <fieldset className="space-y-4">
      {legend && (
        <legend className="mb-2 text-lg font-bold text-iaso-text">{legend}</legend>
      )}
      {items.map((item) => (
        <div
          key={item.name}
          className="rounded-iaso border border-iaso-beige-300 bg-white p-3 md:p-4"
        >
          <label className="flex min-h-12 cursor-pointer items-center gap-3">
            <input
              type="checkbox"
              name={item.name}
              checked={item.checked}
              onChange={(e) => item.onChange(e.target.checked)}
              required={item.required}
              className="h-7 w-7 shrink-0 accent-iaso-green"
            />
            <span className="text-base md:text-lg leading-relaxed text-iaso-text">
              <span
                className={
                  item.required
                    ? 'mr-2 font-bold text-iaso-green'
                    : 'mr-2 font-bold text-iaso-text-light'
                }
              >
                {item.badge}
              </span>
              {item.label}
            </span>
          </label>

          {item.subOptions && item.subOptions.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-x-6 gap-y-1 pl-10">
              {item.subOptions.map((opt) => (
                <label
                  key={opt.name}
                  className="flex min-h-12 cursor-pointer items-center gap-2"
                >
                  <input
                    type="checkbox"
                    name={opt.name}
                    checked={opt.checked}
                    onChange={(e) => opt.onChange(e.target.checked)}
                    className="h-6 w-6 shrink-0 accent-iaso-green"
                  />
                  <span className="text-base md:text-lg text-iaso-text">{opt.label}</span>
                </label>
              ))}
            </div>
          )}

          {item.notice && (
            <details className="mt-2 pl-10">
              <summary className="flex min-h-12 cursor-pointer items-center font-semibold text-iaso-green underline underline-offset-4">
                {item.noticeLabel}
              </summary>
              <div className="mt-2 rounded-iaso bg-iaso-beige-50 p-4 text-base leading-loose text-iaso-text whitespace-pre-line">
                {item.notice}
              </div>
            </details>
          )}
        </div>
      ))}
    </fieldset>
  );
}
