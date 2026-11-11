// 접수 웹훅 주소 단일 정의 (분양 상담 폼, 정원 신청 폼 공통).
// 규격은 n8n `[Iaso] Lead Intake v3` (S8 결과 1절). 시험 때는 빌드 환경변수
// NEXT_PUBLIC_LEAD_ENDPOINT 로 로컬 수신 서버 주소를 덮는다 (운영 웹훅으로 시험하지 않는다).

const DEFAULT_LEAD_ENDPOINT = 'https://n8n.kjyoo.cloud/webhook/iaso-lead-v3';

export const LEAD_ENDPOINT: string =
  process.env.NEXT_PUBLIC_LEAD_ENDPOINT || DEFAULT_LEAD_ENDPOINT;

/** 서버 응답은 보통 5~10초 걸린다 (S8 결과 1절). 클라이언트 대기는 30초 이상으로 둔다 */
export const LEAD_TIMEOUT_MS = 40000;
