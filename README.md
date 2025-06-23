# 🚀 Next.js 학습 정리

## 📅 학습 기간
2025년 3월 ~ 6월

## 🧩 주요 개념

- **렌더링 방식의 이해**  
  - CSR, SSR, SSG, ISR의 차이점 및 구현 방식 학습
  - `getServerSideProps`, `getStaticProps`, `revalidate` 사용법 숙지

- **Page Router → App Router 전환 흐름 학습**  
  - 페이지 라우팅의 구조적 차이 이해
  - `Layout`, `Loading`, `Error`, `Template` 파일 구성 실습

- **데이터 페칭과 캐시 전략**  
  - `fetch`의 cache/no-store 옵션, Dynamic Cache
  - Full Route Cache, Request Memoization 개념 적용

- **Streaming & Skeleton UI**  
  - React 18 기반의 스트리밍 렌더링 실습
  - 페이지/컴포넌트별 Skeleton UI 분할 적용

- **서버 액션(Server Actions)**  
  - Form 제출 처리, 리뷰 CRUD 구현
  - 클라이언트 컴포넌트와의 연동 실습

- **고급 라우팅**  
  - Parallel Routes, Intercept Routes, Modal Routes 이해 및 구현

- **성능 최적화 및 SEO**  
  - `next/image`로 이미지 최적화
  - 메타태그 설정을 통한 검색엔진 최적화 수행

- **실습 프로젝트**  
  - 한입북스(도서 리뷰 앱) 구축  
  - SSR + CSR 혼합 전략, API 연동, 리뷰 기능 구현

## 🛠️ 사용 기술
- Next.js 13~14 (App Router 기준)
- React 18
- TypeScript
- Tailwind CSS
- Vercel (배포)

## ✅ 전체 학습 흐름 요약

| 기간 | 내용 |
|------|------|
| 2025.3.5~3.18 | Page Router, 라우팅/Prefetch/API Routes 등 |
| 2025.4.10~4.23 | 사전 렌더링, SSR/SSG/ISR, App Router 도입 |
| 2025.4.28~5.2 | 데이터 페칭, 캐시 전략, Full Route Cache |
| 2025.5.6~5.23 | 서버 액션, 리뷰 작성/조회/삭제 구현 |
| 2025.5.26~5.30 | 모달/병렬 라우트/이미지 최적화/SEO |
| 2025.6.4 | 프로젝트 마무리 및 배포 |