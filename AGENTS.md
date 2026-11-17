# AGENTS.md - iaso-forest (분양 사이트 저장소)

이 파일은 프로젝트 진입 문서를 가리키는 짧은 안내다. 정본은 프로젝트 폴더의 문서다.

- 프로젝트 진입 문서: `/home/kjyoo/gdrive/05 Iaso Forest/AGENTS.md` (홈PC `H:\공유 드라이브\05 Iaso Forest\AGENTS.md`)
- 프로젝트 정본 `CLAUDE.md`: 같은 폴더
- 현재 동작 명세: 같은 폴더 `docs/CURRENT_SPEC.md`, 진단 보고서: `docs/AUDIT_REPORT.md`

## 이 저장소에서

- 스택: Next.js 14 정적 내보내기(`output: 'export'`), Tailwind, TypeScript. 코드 정본은 이 저장소 1곳이다.
- 설치와 검증: `npm ci`, `npx tsc --noEmit`, `npm run build` (종료코드 0 확인)
- 게시: Hostinger 가 `deploy` 브랜치를 빌드 없이 복사한다. **`bash scripts/publish-site.sh` 로만 게시하고, KJ 승인 없이 실행하지 않는다.** 로컬 `deploy` 브랜치는 원격에 push 하지 않는다.
- 하지 말 것: 비밀값 기재, 삭제, 임의 commit 과 push, 리드 웹훅 시험 POST.

## 개발 작업에 적용하는 스킬 10개 (단계별 완료 증거 표는 프로젝트 `AGENTS.md` 6절)

`context-engineering`, `spec-driven-development`, `planning-and-task-breakdown`, `incremental-implementation`, `test-driven-development`, `systematic-debugging`, `code-review-and-quality`, `security-and-hardening`, `verification-before-completion`, `git-workflow-and-versioning`

(`systematic-debugging`, `verification-before-completion` 은 2026-11-17 현재 서버 미설치. 프로젝트 `AGENTS.md` 6절 참고)
