// S3 문안 (2026-11-11 Draft). 문안 수정 금지. 번호는 S3 근거표 번호와 같다.
// 조건부 문안 (C5, C10, C11, C12)과 채널 관련 문안은 excludeIds 로 뺄 수 있다.

export interface CopyLine {
  id: string;
  text: string;
}

export interface CardCopy {
  id: string;
  title: CopyLine;
  lines: CopyLine[];
  notes?: CopyLine[];
}

export interface FaqCopy {
  id: string;
  question: CopyLine;
  answer: CopyLine;
  /** F8 처럼 답 안에 링크 문구가 들어가는 경우 */
  link?: { text: string; href: string; suffix: string };
}

export const GARDEN_URLS = {
  apply: '/garden/apply/',
  privacy: '/privacy/',
  channelGarden: 'https://pf.kakao.com/_tssxeX',
  channelHelp: 'https://pf.kakao.com/_hxfxfxeX',
} as const;

export const HERO_COPY = {
  title: { id: 'A1', text: '카카오톡으로 챙기는 우리 집 정원' },
  subtitle: { id: 'A2', text: '마당 식물의 할 일과 기록을 카카오톡에서 한곳에 모아 볼 수 있어요.' },
  notice: { id: 'A3', text: '지금은 시범 운영 중이라 이용하실 수 있는 분이 한정돼 있어요.' },
  applyButton: { id: 'A4', text: '정원 서비스 신청하기' },
  channelButton: { id: 'A5', text: '카카오톡 채널 추가' },
};

export const INTRO_COPY = {
  title: { id: 'B1', text: '이아소 가든은 이런 서비스예요' },
  lines: [
    { id: 'B2', text: '양평, 여주, 홍천, 횡성의 정원을 가꾸는 분을 위한 서비스예요.' },
    { id: 'B3', text: '카카오톡 채널의 메뉴에서 바로 쓸 수 있어요.' },
    { id: 'B4', text: '이용료는 받지 않아요.' },
  ] as CopyLine[],
};

export const USAGE_COPY = {
  title: { id: 'C0', text: '이렇게 쓰실 수 있어요' },
  cards: [
    {
      id: 'card-today',
      title: { id: 'C1', text: '오늘 할 일' },
      lines: [{ id: 'C2', text: '오늘 마당에서 할 일을 한눈에 볼 수 있어요.' }],
    },
    {
      id: 'card-record',
      title: { id: 'C3', text: '식물 기록' },
      lines: [
        { id: 'C4', text: '식물 사진과 한 줄 일기를 남길 수 있어요.' },
        { id: 'C5', text: '여러 그루를 한 번에 골라 기록할 수도 있어요.' },
      ],
    },
    {
      id: 'card-calendar',
      title: { id: 'C6', text: '꽃달력' },
      lines: [{ id: 'C7', text: '내 식물이 꽃 피는 달을 달력으로 볼 수 있어요.' }],
    },
    {
      id: 'card-sick',
      title: { id: 'C8', text: '아픈 식물 살펴보기' },
      lines: [
        { id: 'C9', text: '아픈 식물 사진을 올리면 원인일 수 있는 것을 알려드려요.' },
        { id: 'C10', text: '지난 돌봄 기록과 날씨도 함께 살펴봐요.' },
        { id: 'C11', text: '2주 동안 해볼 만한 관리를 일정으로 알려드려요.' },
        { id: 'C12', text: '일정은 버튼 하나로 할 일에 넣을 수 있어요.' },
      ],
      notes: [
        { id: 'C13', text: '알려드리는 내용은 가능성이에요.' },
        { id: 'C14', text: '확정된 판단은 아니에요.' },
      ],
    },
  ] as CardCopy[],
};

export const UPCOMING_COPY = {
  title: { id: 'D0', text: '준비 중인 서비스' },
  badge: { id: 'D1', text: '준비 중' },
  lead: { id: 'D2', text: '우리 집 마당에 어울리는 정원을 미리 볼 수 있는 서비스를 준비하고 있어요.' },
  lines: [
    { id: 'D3', text: '마음에 드는 정원 사진을 고르고 마당 사진을 올려요.' },
    { id: 'D4', text: '우리 집 마당의 전과 후를 사진으로 볼 수 있어요.' },
    { id: 'D5', text: '고른 식물은 내 정원 달력에 한 번에 넣을 수 있어요.' },
  ] as CopyLine[],
  closing: { id: 'D6', text: '아직 준비 중이라 신청은 받지 않아요.' },
};

export const STEPS_COPY = {
  title: { id: 'E0', text: '이용 순서' },
  steps: [
    { id: 'E1', text: '아래 신청서를 적어요.' },
    { id: 'E2', text: '접수가 되면 화면에 확인 문구가 나와요.' },
    { id: 'E3', text: '카카오톡 채널 이아소 가든을 추가해요.' },
  ] as CopyLine[],
};

export const FAQ_COPY = {
  title: { id: 'F0', text: '자주 묻는 질문' },
  items: [
    {
      id: 'faq-cost',
      question: { id: 'F1', text: '비용이 드나요?' },
      answer: { id: 'F2', text: '이용료는 받지 않아요.' },
    },
    {
      id: 'faq-area',
      question: { id: 'F3', text: '어느 지역에서 쓸 수 있나요?' },
      answer: { id: 'F4', text: '양평, 여주, 홍천, 횡성의 정원을 대상으로 해요.' },
    },
    {
      id: 'faq-ask',
      question: { id: 'F5', text: '궁금한 점은 어디에 물어보나요?' },
      answer: { id: 'F6', text: '카카오톡 채널 이아소 가든도움으로 문의해 주세요.' },
    },
    {
      id: 'faq-privacy',
      question: { id: 'F7', text: '내 정보는 어떻게 쓰이나요?' },
      answer: { id: 'F8', text: '신청서 아래 동의 안내와 ' },
      link: { text: '개인정보처리방침', href: '/privacy/', suffix: '에서 볼 수 있어요.' },
    },
  ] as FaqCopy[],
};

export const CHANNEL_COPY = {
  title: { id: 'G0', text: '카카오톡 채널을 추가해 주세요' },
  channels: [
    {
      id: 'channel-garden',
      name: { id: 'G1', text: '이아소 가든' },
      description: { id: 'G2', text: '정원 서비스를 쓰는 채널이에요.' },
      href: GARDEN_URLS.channelGarden,
    },
    {
      id: 'channel-help',
      name: { id: 'G3', text: '이아소 가든도움' },
      description: { id: 'G4', text: '쓰다가 궁금한 점을 문의하는 채널이에요.' },
      href: GARDEN_URLS.channelHelp,
    },
  ],
  button: { id: 'G5', text: '채널 추가하기' },
};

export const APPLY_COPY = {
  title: { id: 'H1', text: '정원 서비스 신청' },
  guides: [
    { id: 'H2', text: '아래 내용을 적어 주세요.' },
    { id: 'H3', text: '별표(*)는 꼭 적어야 하는 항목이에요.' },
    { id: 'H4', text: '시범 운영 기간에는 신청하신 모든 분이 바로 이용하시지 못할 수 있어요.' },
  ] as CopyLine[],
  fields: {
    name: { label: { id: 'H5', text: '이름' }, placeholder: { id: 'H6', text: '홍길동' } },
    phone: {
      label: { id: 'H7', text: '휴대전화번호' },
      placeholder: { id: 'H8', text: '010-0000-0000' },
      help: { id: 'H9', text: '숫자만 적으셔도 돼요.' },
    },
    address: {
      label: { id: 'H10', text: '정원 소재지' },
      placeholder: { id: 'H11', text: '예: 양평군 양서면' },
      help: { id: 'H12', text: '시군과 읍면까지 적어 주세요.' },
    },
    message: {
      label: { id: 'H13', text: '신청 내용 (선택)' },
      placeholder: { id: 'H14', text: '궁금한 점이나 바라는 점을 편하게 적어 주세요.' },
    },
  },
  submit: { id: 'H15', text: '신청하기' },
  submitHint: { id: 'H16', text: '꼭 필요한 동의 3가지를 체크하시면 버튼이 눌러져요.' },
  errors: {
    name: { id: 'H17', text: '이름을 적어 주세요.' },
    phone: { id: 'H18', text: '휴대전화번호를 다시 확인해 주세요.' },
    address: { id: 'H19', text: '정원 소재지를 적어 주세요.' },
  },
  success: {
    title: { id: 'H20', text: '신청이 접수되었어요' },
    text: { id: 'H21', text: '카카오톡 채널 이아소 가든을 추가해 주세요.' },
  },
  failure: {
    title: { id: 'H22', text: '접수가 되지 않았어요' },
    text: { id: 'H23', text: '적으신 내용은 그대로 있어요. 잠시 뒤 다시 눌러 주세요.' },
  },
  consentRecheck: {
    title: { id: 'H24', text: '동의 내용을 다시 확인해 주세요' },
    text: { id: 'H25', text: '꼭 필요한 동의 3가지에 체크되어 있는지 봐 주세요.' },
  },
  retryButton: { id: 'H26', text: '다시 신청하기' },
};
