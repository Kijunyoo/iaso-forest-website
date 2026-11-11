import { Fragment, type ReactNode } from 'react';
import { LegalDocument, LegalTable, type LegalArticleData } from '@/components/legal';
import type { LegalBlock, LegalDocumentSource } from './types';

/** **굵게** 표기만 해석한다 */
function renderInline(text: string): ReactNode {
  return text.split('**').map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : <Fragment key={i}>{part}</Fragment>,
  );
}

/** \n 을 줄바꿈으로 바꾼다 */
function renderLines(text: string): ReactNode {
  const lines = text.split('\n');
  return lines.map((line, i) => (
    <Fragment key={i}>
      {renderInline(line)}
      {i < lines.length - 1 && <br />}
    </Fragment>
  ));
}

function renderBlock(block: LegalBlock, index: number): ReactNode {
  switch (block.type) {
    case 'p':
      return <p key={index}>{renderInline(block.text)}</p>;
    case 'label':
      return (
        <p key={index} className="font-bold">
          {block.text}
        </p>
      );
    case 'ol':
      return (
        <ol key={index} className="list-decimal space-y-2 pl-6">
          {block.items.map((item) => (
            <li key={item}>{renderInline(item)}</li>
          ))}
        </ol>
      );
    case 'table':
      return (
        <LegalTable
          key={index}
          headers={block.headers}
          rows={block.rows.map((row) => row.map((cell) => renderLines(cell)))}
        />
      );
  }
}

function toArticles(doc: LegalDocumentSource): LegalArticleData[] {
  return doc.articles.map((a) => ({
    id: a.id,
    title: a.title,
    body: <>{a.body.map(renderBlock)}</>,
  }));
}

interface LegalPageProps {
  doc: LegalDocumentSource;
  tocLabel?: string;
}

/** 처리방침, 이용약관 공통 페이지 본문. S4 LegalDocument 에 src/content 데이터를 넘긴다 */
export default function LegalPage({ doc, tocLabel = '목차' }: LegalPageProps) {
  return (
    <>
      {/* 고정 헤더(투명, 흰 글자) 뒤 배경. 법정 문서 첫 화면이 흰색이라 헤더 글자가 보이도록 둔다 */}
      <div aria-hidden="true" className="h-20 bg-iaso-green-800" />
      <LegalDocument
        title={doc.title}
        intro={
          doc.intro ? doc.intro.map((p, i) => <p key={i}>{renderInline(p)}</p>) : undefined
        }
        tocLabel={tocLabel}
        articles={toArticles(doc)}
      />
    </>
  );
}
