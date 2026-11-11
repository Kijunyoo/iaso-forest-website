import type { Metadata } from 'next';
import LegalPage from '@/content/legal/LegalPage';
import { PRIVACY_POLICY } from '@/content/legal/privacy';

export const metadata: Metadata = {
  title: '개인정보 처리방침 | Iaso Forest',
  alternates: { canonical: '/privacy/' },
};

export default function PrivacyPage() {
  return <LegalPage doc={PRIVACY_POLICY} />;
}
