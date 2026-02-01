# Iaso Forest Website

치유와 힐링의 프리미엄 전원마을, **이아소 포레스트** 공식 웹사이트

## 🌲 프로젝트 개요

- **Domain:** [iasoforest.com](https://iasoforest.com)
- **Target:** 5060 액티브 시니어
- **Stack:** Next.js 14 + Tailwind CSS
- **Hosting:** Hostinger Business

## 🚀 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 환경 변수 설정

```bash
cp .env.example .env.local
```

### 3. 개발 서버 실행

```bash
npm run dev
```

[http://localhost:3000](http://localhost:3000) 에서 확인

### 4. 프로덕션 빌드

```bash
npm run build
```

## 📁 프로젝트 구조

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # 루트 레이아웃
│   ├── page.tsx            # 홈페이지
│   ├── about/              # 소개
│   ├── gallery/            # 갤러리
│   ├── story/              # 스토리 게시판
│   ├── news/               # 소식
│   ├── guide/              # 입주 가이드
│   └── location/           # 오시는 길
├── components/
│   ├── layout/             # Header, Footer, FAB
│   ├── home/               # 홈페이지 섹션들
│   ├── rsvp/               # 상담 예약 모달
│   └── ui/                 # 공통 UI 컴포넌트
└── lib/
    └── utils.ts            # 유틸리티 함수
```

## 🎨 디자인 시스템

### 브랜드 컬러

| Color | HEX | Usage |
|-------|-----|-------|
| Deep Green | `#2C5F2D` | Primary |
| Warm Beige | `#D4C4A8` | Secondary |
| Accent Gold | `#C9A96E` | Accent |
| Soft Mint | `#8FBC8F` | Tertiary |

### Tailwind 클래스

```jsx
// 버튼
<button className="btn btn-primary">상담 예약</button>

// 카드
<div className="card">...</div>

// 입력 필드
<input className="input" />
```

## 🔗 연동 서비스

- **Cloudinary:** 이미지 CDN (Cloud Name: `dp79vfxyf`)
- **n8n:** 상담 예약 폼 자동화
- **Google Sheets:** Lead 데이터 저장
- **Google Contacts:** 고객 주소록 동기화

---

**© 2026 Iaso Forest. Developed with Claude Code.**
