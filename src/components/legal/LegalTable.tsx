import type { ReactNode } from 'react';

interface LegalTableProps {
  /** 표 설명. 생략 가능 */
  caption?: string;
  /** 머리 칸 문자열 */
  headers: string[];
  /** 행마다 칸 노드 배열. 줄바꿈이 필요한 칸은 노드 안에서 처리한다 */
  rows: ReactNode[][];
}

export default function LegalTable({ caption, headers, rows }: LegalTableProps) {
  return (
    <div className="overflow-x-auto rounded-iaso border border-iaso-beige-300">
      <table className="w-full min-w-[32rem] border-collapse text-left">
        {caption && <caption className="sr-only">{caption}</caption>}
        <thead className="bg-iaso-beige-100">
          <tr>
            {headers.map((h) => (
              <th
                key={h}
                scope="col"
                className="border-b border-iaso-beige-300 px-4 py-3 text-base md:text-lg font-bold text-iaso-text"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rIdx) => (
            <tr key={rIdx} className="align-top odd:bg-white even:bg-iaso-beige-50">
              {row.map((cell, cIdx) => (
                <td
                  key={cIdx}
                  className="border-b border-iaso-beige-200 px-4 py-3 text-base md:text-lg leading-loose text-iaso-text"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
