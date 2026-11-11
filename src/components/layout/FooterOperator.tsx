import Link from 'next/link';

export interface FooterOperatorLink {
  href: string;
  label: string;
  /** 개인정보처리방침 링크는 굵게 표시 */
  bold?: boolean;
}

interface FooterOperatorProps {
  /** 운영자 표기 줄 (상호, 대표, 사업자등록번호, 주소). S5 가 src/content/ 설정에서 줄 단위로 만들어 넘긴다 */
  operatorLines: string[];
  /** 수탁 운영자 표기 줄. S5 가 src/content/ 에서 넘긴다 */
  trusteeLine: string;
  /** 처리방침, 이용약관 링크 */
  links: FooterOperatorLink[];
}

export default function FooterOperator({
  operatorLines,
  trusteeLine,
  links,
}: FooterOperatorProps) {
  return (
    <div className="border-t border-white/20 pt-8 mt-12 text-white/80">
      <div className="space-y-2 text-base leading-loose">
        {operatorLines.map((line) => (
          <p key={line}>{line}</p>
        ))}
        <p>{trusteeLine}</p>
      </div>
      <ul className="mt-4 flex flex-wrap items-center gap-x-6">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={
                link.bold
                  ? 'inline-flex min-h-12 items-center text-base font-bold text-white underline underline-offset-4 hover:text-iaso-gold transition-colors'
                  : 'inline-flex min-h-12 items-center text-base text-white/90 underline underline-offset-4 hover:text-iaso-gold transition-colors'
              }
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
