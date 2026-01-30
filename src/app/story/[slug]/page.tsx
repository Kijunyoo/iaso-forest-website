import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Calendar, ArrowLeft, Share2 } from 'lucide-react';
import CTABanner from '@/components/home/CTABanner';

// 게시글 데이터 (실제로는 DB에서 가져옴)
const articlesData: Record<
  string,
  {
    title: string;
    excerpt: string;
    category: string;
    date: string;
    image: string;
    content: string;
  }
> = {
  'how-to-start-country-house': {
    title: '전원주택 건축, 어디서부터 시작해야 할까?',
    excerpt:
      '막연한 전원주택의 꿈을 현실로 만드는 첫 걸음. 토지 선정부터 설계, 시공까지.',
    category: '가이드',
    date: '2026-01-30',
    image:
      'https://res.cloudinary.com/dp79vfxyf/image/upload/v1/aksys_maa_assets/iaso_village/iaso_modern_house',
    content: `
## 전원주택, 어디서부터 시작해야 할까요?

"은퇴 후에는 시골에서 살고 싶다"는 막연한 꿈을 가진 분들이 많습니다. 하지만 막상 실행에 옮기려면 무엇부터 해야 할지 막막합니다.

### 1단계: 지역 선정

전원주택 건축의 첫 단추는 **지역 선정**입니다. 고려해야 할 요소:

- **접근성**: 서울에서 1시간 이내가 적당합니다
- **생활 인프라**: 마트, 병원, 약국 등
- **자연환경**: 산, 숲, 하천 등
- **개발 호재**: 고속도로, 철도 등

### 2단계: 토지 매입

지역을 정했다면 토지를 찾아야 합니다.

- **지목 확인**: 대지, 전, 답, 임야 등
- **개발행위허가 가능 여부**: 건축 가능한 땅인지
- **농지전용 필요 여부**: 농지라면 별도 절차 필요

> **이아소의 장점**: 이미 농지전용과 개발행위허가가 완료되어 있습니다.

### 3단계: 설계 및 인허가

토지가 확보되면 설계를 시작합니다.

1. 건축사 선정
2. 기본 설계 및 실시 설계
3. 건축 허가 신청 (1~2개월 소요)

### 4단계: 시공

허가가 나면 본격적인 건축이 시작됩니다.

- 기초 공사: 2~3주
- 골조 공사: 4~6주
- 지붕 및 외장: 2~3주
- 내장 및 설비: 4~8주

총 **4~6개월** 정도 소요됩니다.

### 5단계: 입주

준공 검사 후 사용승인을 받으면 입주할 수 있습니다.

---

전원주택 건축이 복잡해 보이지만, 좋은 파트너와 함께라면 어렵지 않습니다. 이아소에서는 토지 매입부터 시공까지 원스톱으로 지원합니다.
    `,
  },
  'national-healing-forest': {
    title: '180만 평의 치유, 국립 양평 치유의 숲',
    excerpt:
      '이아소 마을에서 도보 1분. 12개의 테마 숲길과 다양한 치유 프로그램.',
    category: '정보',
    date: '2026-01-30',
    image:
      'https://res.cloudinary.com/dp79vfxyf/image/upload/v1/aksys_maa_assets/iaso_village/iaso_forest_entrance',
    content: `
## 국립 양평 치유의 숲

이아소 마을에서 **도보 1분(130m)** 거리에 있는 국립 양평 치유의 숲은 약 **180만 평(595ha)** 규모의 대한민국 대표 치유의 숲입니다.

### 12개 테마 숲길

다양한 테마의 숲길이 조성되어 있습니다:

- 치유숲길
- 명상숲길
- 건강숲길
- 생태숲길
- 모험숲길
- 가족숲길
- ...그 외 6개 숲길

### 치유 프로그램

산림청에서 운영하는 다양한 치유 프로그램:

- **숲 치유 프로그램**: 전문 치유지도사와 함께
- **명상 프로그램**: 숲 속 명상 데크에서
- **건강 프로그램**: 걷기, 스트레칭 등
- **계절 프로그램**: 봄꽃, 단풍, 설경 등

### 이용 안내

- **운영시간**: 09:00 ~ 18:00
- **입장료**: 무료
- **예약**: 일부 프로그램 사전 예약 필요

### 이아소와의 시너지

이아소에 살면 매일 이 숲을 '우리 집 앞마당'처럼 이용할 수 있습니다. 아침 산책, 저녁 운동, 주말 트레킹... 피톤치드 가득한 매일이 기다립니다.
    `,
  },
  '100-million-country-house': {
    title: '1억 대 전원주택, 현실적으로 가능할까?',
    excerpt:
      '15평형 실속형 전원주택으로 시작하는 현명한 선택.',
    category: '가이드',
    date: '2026-01-30',
    image:
      'https://res.cloudinary.com/dp79vfxyf/image/upload/v1/aksys_maa_assets/iaso_village/iaso_sample_house',
    content: `
## 1억 대 전원주택, 가능합니다

"전원주택은 비싸다"는 고정관념이 있습니다. 물론 대형 고급 주택은 수억 원이 들지만, **실속형 주택**은 1억 대에도 가능합니다.

### 15평형 실속형 주택

이아소에서 제안하는 15평형 실속형 주택:

| 항목 | 비용 |
|------|------|
| 토지 (약 100평) | 약 5,000~7,000만 원 |
| 건축비 (15평) | 약 3,500~4,500만 원 |
| **합계** | **약 8,500만 원~1.2억 원** |

### 경량철골 구조의 장점

- **공사 기간 단축**: 3~4개월
- **비용 절감**: 목조 대비 저렴
- **내구성**: 철골 구조로 튼튼
- **단열 성능**: 최신 단열재 적용

### 15평이면 충분할까?

부부 2인이 생활하기에 15평은 충분합니다:

- 거실 겸 식당: 8평
- 침실: 4평
- 욕실: 1.5평
- 주방: 1.5평

### 단계적 확장

처음에는 15평으로 시작하고, 나중에 증축하는 것도 방법입니다. 이아소에서는 증축을 고려한 설계도 지원합니다.

---

예산이 부담되신다면, 15평형 실속형으로 시작해보세요. 중요한 건 집의 크기가 아니라, **어디서 어떻게 사느냐**입니다.
    `,
  },
  'resident-interview-kim': {
    title: '입주민 인터뷰: "도시 생활 40년, 이제는 숲에서"',
    excerpt:
      '2022년 입주한 김OO 님의 이야기.',
    category: '인터뷰',
    date: '2026-01-30',
    image:
      'https://res.cloudinary.com/dp79vfxyf/image/upload/v1/aksys_maa_assets/iaso_village/iaso_terrace_view',
    content: `
## 입주민 인터뷰: 김OO 님

> "40년간 서울에서 살았어요. 이제는 숲에서 살고 싶었습니다."

### 이아소를 선택한 이유

**Q. 왜 이아소를 선택하셨나요?**

"여러 전원마을을 둘러봤어요. 그런데 이아소는 느낌이 달랐습니다. 무엇보다 **치유의 숲**이 바로 앞에 있다는 게 결정적이었어요. 그리고 이미 살고 계신 분들이 친절하게 맞아주셨어요."

### 실제 생활

**Q. 실제로 살아보니 어떠세요?**

"아침마다 숲을 산책해요. 도시에선 상상도 못했던 일이죠. 공기가 다릅니다. 새 소리에 깨고, 별을 보며 잠들어요. 처음엔 적응이 필요했지만, 지금은 도시로 돌아가라고 해도 안 갈 것 같아요."

**Q. 불편한 점은 없으세요?**

"솔직히 마트가 차로 5분 거리라 조금 불편하긴 해요. 하지만 그 정도는 감수할 만합니다. 도시의 편리함을 100% 기대하면 안 돼요. 대신 여기서만 누릴 수 있는 것들이 있으니까요."

### 예비 입주자에게

**Q. 이아소 입주를 고민하는 분들께 한마디**

"망설이지 마세요. 저도 3년을 고민했어요. 그런데 지금 생각하면 더 일찍 왔어야 했습니다. 건강할 때, 체력이 있을 때 시작하세요. 나이 들어서는 적응하기 어렵거든요."

---

*이 인터뷰는 실제 입주민의 동의를 받아 작성되었습니다.*
    `,
  },
  'heating-cost-reality': {
    title: '전원주택 난방비, 걱정되시나요?',
    excerpt:
      '전원주택 난방비에 대한 현실적인 데이터.',
    category: 'FAQ',
    date: '2026-01-30',
    image:
      'https://res.cloudinary.com/dp79vfxyf/image/upload/v1/aksys_maa_assets/iaso_village/iaso_living_room',
    content: `
## 전원주택 난방비, 현실은?

전원주택 하면 떠오르는 걱정 1순위: **난방비**. 과연 걱정할 만큼 비쌀까요?

### 실제 난방비 데이터

이아소 입주민들의 실제 겨울철(12~2월) 난방비:

| 평형 | 난방 방식 | 월 난방비 |
|------|----------|----------|
| 15평 | 심야전기 | 15~20만 원 |
| 25평 | 도시가스 | 20~25만 원 |
| 36평 | 심야전기 | 25~35만 원 |

### 아파트와 비교하면?

의외로 **아파트와 비슷하거나 오히려 저렴**합니다. 이유:

1. **최신 단열 공법**: 신축 주택은 단열 성능이 뛰어남
2. **창호 성능**: 3중 단열 유리 적용
3. **적정 규모**: 불필요하게 크지 않은 집

### 난방비 절감 방법

- **심야전기 활용**: 심야 시간대 축열
- **태양광 패널**: 전기 자급자족
- **지열 난방**: 초기 비용 있지만 장기적 절감
- **단열 보강**: 시공 시 단열에 투자

### 이아소의 난방 시스템

이아소에서는 다양한 난방 옵션을 제안합니다:

- 기본: 심야전기 보일러
- 옵션 1: 도시가스 보일러
- 옵션 2: 태양광 + 전기 보일러
- 옵션 3: 지열 히트펌프

---

결론: 전원주택 난방비, **걱정할 수준은 아닙니다**. 설계 단계에서 단열에 신경 쓰면 아파트 수준으로 유지할 수 있습니다.
    `,
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articlesData[slug];

  if (!article) {
    return {
      title: '글을 찾을 수 없습니다 | Iaso Forest',
    };
  }

  return {
    title: `${article.title} | Iaso Forest`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(articlesData).map((slug) => ({ slug }));
}

export default async function StoryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = articlesData[slug];

  if (!article) {
    notFound();
  }

  return (
    <>
      {/* Hero 이미지 */}
      <div className="relative h-[40vh] min-h-[300px]">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
      </div>

      {/* 콘텐츠 */}
      <article className="bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto -mt-24 relative z-10">
            {/* 헤더 */}
            <div className="bg-white rounded-t-iaso p-8 shadow-iaso">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-iaso-green-50 text-iaso-green text-sm font-medium rounded-full">
                  {article.category}
                </span>
                <span className="flex items-center gap-1 text-sm text-iaso-text-light">
                  <Calendar className="w-4 h-4" />
                  {article.date}
                </span>
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-iaso-text leading-tight">
                {article.title}
              </h1>
            </div>

            {/* 본문 */}
            <div className="bg-white p-8 pt-0 pb-16">
              <div
                className="prose prose-lg max-w-none prose-headings:text-iaso-text prose-p:text-iaso-text-light prose-a:text-iaso-green prose-strong:text-iaso-text prose-blockquote:border-iaso-green prose-blockquote:bg-iaso-beige-50 prose-blockquote:rounded-r-iaso prose-blockquote:py-2"
                dangerouslySetInnerHTML={{
                  __html: article.content
                    .replace(/^## /gm, '<h2>')
                    .replace(/^### /gm, '<h3>')
                    .replace(/\n\n/g, '</p><p>')
                    .replace(/<h2>/g, '</p><h2>')
                    .replace(/<h3>/g, '</p><h3>')
                    .replace(/\| /g, '<td>')
                    .replace(/> /gm, '<blockquote>')
                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    .replace(/---/g, '<hr />')
                    .replace(/- /gm, '<li>')
                    .replace(/<li>/g, '</li><li>')
                }}
              />
            </div>

            {/* 하단 네비게이션 */}
            <div className="border-t border-gray-200 p-8 flex items-center justify-between">
              <Link
                href="/story"
                className="inline-flex items-center gap-2 text-iaso-text-light hover:text-iaso-green transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                목록으로
              </Link>
              <button className="inline-flex items-center gap-2 text-iaso-text-light hover:text-iaso-green transition-colors">
                <Share2 className="w-4 h-4" />
                공유하기
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* CTA */}
      <CTABanner />
    </>
  );
}
