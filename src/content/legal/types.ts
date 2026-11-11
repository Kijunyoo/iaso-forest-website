import { fillVars } from '../settings';

/** 조 본문을 이루는 블록. 법정 문장은 초안 문자열 그대로 담고 화면 구성은 LegalBlocks 가 맡는다 */
export type LegalBlock =
  | { type: 'p'; text: string }
  /** 굵은 소제목 줄 (예 수탁자) */
  | { type: 'label'; text: string }
  | { type: 'ol'; items: string[] }
  /** 표. 칸 안의 줄바꿈은 \n */
  | { type: 'table'; headers: string[]; rows: string[][] };

export interface LegalArticleSource {
  /** 앵커 id (article-1 ...) */
  id: string;
  /** 조 제목. 초안의 ## 제목과 같은 문자열 */
  title: string;
  body: LegalBlock[];
}

export interface LegalDocumentSource {
  title: string;
  /** 서문. 문단 배열. 없으면 생략 */
  intro?: string[];
  articles: LegalArticleSource[];
}

function fillBlock(block: LegalBlock): LegalBlock {
  switch (block.type) {
    case 'p':
    case 'label':
      return { ...block, text: fillVars(block.text) };
    case 'ol':
      return { ...block, items: block.items.map(fillVars) };
    case 'table':
      return {
        ...block,
        headers: block.headers.map(fillVars),
        rows: block.rows.map((row) => row.map(fillVars)),
      };
  }
}

/** 문서 전체의 {{키}} 를 settings.ts 값으로 채운다 */
export function fillDocument(doc: LegalDocumentSource): LegalDocumentSource {
  return {
    title: doc.title,
    intro: doc.intro?.map(fillVars),
    articles: doc.articles.map((a) => ({
      id: a.id,
      title: fillVars(a.title),
      body: a.body.map(fillBlock),
    })),
  };
}
