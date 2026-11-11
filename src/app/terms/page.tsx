import type { Metadata } from 'next';
import LegalPage from '@/content/legal/LegalPage';
import { TERMS_OF_SERVICE } from '@/content/legal/terms';

export const metadata: Metadata = {
  title: '이용약관 | Iaso Forest',
  alternates: { canonical: '/terms/' },
};

export default function TermsPage() {
  return <LegalPage doc={TERMS_OF_SERVICE} />;
}
