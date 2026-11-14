import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** 스토리 API 의 date 는 문자열 또는 Notion 날짜 객체 {start, end, time_zone} 로 온다. */
export type StoryDateValue =
  | string
  | { start?: string | null; end?: string | null; time_zone?: string | null }
  | null
  | undefined;

/** 문자열과 객체 둘 다 화면에 그릴 수 있는 문자열로 바꾼다. 없으면 빈 문자열. */
export function formatStoryDate(value: StoryDateValue): string {
  if (!value) return '';
  if (typeof value === 'string') return value;
  if (typeof value === 'object' && typeof value.start === 'string') {
    return value.end && value.end !== value.start
      ? `${value.start} ~ ${value.end}`
      : value.start;
  }
  return '';
}
