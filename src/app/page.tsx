import HeroSection from '@/components/home/HeroSection';
import IntroSection from '@/components/home/IntroSection';
import FeatureSection from '@/components/home/FeatureSection';
import GalleryPreview from '@/components/home/GalleryPreview';
import CTABanner from '@/components/home/CTABanner';

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <FeatureSection />
      <GalleryPreview />
      <CTABanner />
    </>
  );
}
