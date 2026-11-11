import type { ReactNode } from 'react';
import LegalToc from './LegalToc';
import LegalArticle from './LegalArticle';

export interface LegalArticleData {
  /** 앵커 id (예 article-1) */
  id: string;
  /** 조 제목 (예 제1조 (개인정보의 처리 목적)). S5 가 src/content/ 에서 넘긴다 */
  title: string;
  /** 조 본문. 문단, 목록, LegalTable 을 S5 가 구성해 넘긴다 */
  body: ReactNode;
}

interface LegalDocumentProps {
  /** 문서 제목 (예 개인정보 처리방침) */
  title: string;
  /** 시행일, 버전 등 제목 아래 한 줄. 생략 가능 */
  meta?: string;
  /** 서문 본문. 생략 가능 */
  intro?: ReactNode;
  /** 조 목차 제목 (예 목차). 생략하면 목차 제목 없이 표시 */
  tocLabel?: string;
  articles: LegalArticleData[];
}

export default function LegalDocument({
  title,
  meta,
  intro,
  tocLabel,
  articles,
}: LegalDocumentProps) {
  return (
    <article className="py-12 md:py-16 bg-white">
      <div className="container-iaso max-w-3xl">
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-iaso-green leading-snug mb-4">
            {title}
          </h1>
          {meta && (
            <p className="text-base md:text-lg text-iaso-text-light leading-loose">{meta}</p>
          )}
        </header>

        {intro && (
          <div className="mb-10 text-base md:text-lg text-iaso-text leading-loose space-y-4">
            {intro}
          </div>
        )}

        <LegalToc
          label={tocLabel}
          items={articles.map((a) => ({ id: a.id, title: a.title }))}
        />

        <div className="mt-12 space-y-12">
          {articles.map((a) => (
            <LegalArticle key={a.id} id={a.id} title={a.title}>
              {a.body}
            </LegalArticle>
          ))}
        </div>
      </div>
    </article>
  );
}
