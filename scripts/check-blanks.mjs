#!/usr/bin/env node
// 빈칸 검사 장치 (S5, QA 기준서 QW-13).
//
// 사용: node scripts/check-blanks.mjs [검사할 폴더 또는 파일 ...]
//   인자가 없으면 저장소의 src/content 를 검사한다.
//   게시 직전에는 빌드 산출물도 검사한다: node scripts/check-blanks.mjs src/content out
//
// 빈칸 토큰: 대괄호로 둘러싼 문자열 중 한글을 포함하고 따옴표, 중첩 대괄호, 줄바꿈이 없는 것.
//   토큰의 정의는 src/content/settings.ts 한 곳에만 있다 (상호, 대표자, 사업자등록번호, 주소, 시행일 등).
//   영문으로 시작하는 토큰도 한글이 들어 있으면 위 규칙에 걸린다.
//
// 종료코드: 0 = 빈칸 없음, 1 = 빈칸 있음(토큰 목록 출력), 2 = 검사 대상 오류.

import { readdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const TEXT_EXT = new Set(['.ts', '.tsx', '.js', '.mjs', '.json', '.md', '.html', '.txt', '.xml']);
const TOKEN = /\[[^\[\]\n'"`\\]*[가-힣][^\[\]\n'"`\\]*\]/g;

function extOf(name) {
  const i = name.lastIndexOf('.');
  return i < 0 ? '' : name.slice(i).toLowerCase();
}

function collect(target, files) {
  const st = statSync(target);
  if (st.isDirectory()) {
    for (const name of readdirSync(target)) {
      if (name === 'node_modules' || name === '.git') continue;
      collect(join(target, name), files);
    }
  } else if (TEXT_EXT.has(extOf(target))) {
    files.push(target);
  }
}

const args = process.argv.slice(2);
if (args.includes('--help') || args.includes('-h')) {
  console.log('사용: node scripts/check-blanks.mjs [폴더 또는 파일 ...]  (기본 src/content)');
  process.exit(0);
}

const targets = args.length > 0 ? args.map((a) => resolve(a)) : [join(repoRoot, 'src', 'content')];
const files = [];
for (const t of targets) {
  try {
    collect(t, files);
  } catch (err) {
    console.error(`검사 대상을 읽을 수 없습니다: ${t} (${err.message})`);
    process.exit(2);
  }
}

if (files.length === 0) {
  console.error('검사할 파일이 0건입니다. 경로를 확인하십시오.');
  process.exit(2);
}

const found = [];
for (const file of files) {
  const lines = readFileSync(file, 'utf8').split(/\r?\n/);
  lines.forEach((line, idx) => {
    for (const m of line.matchAll(TOKEN)) {
      found.push({ file, line: idx + 1, token: m[0] });
    }
  });
}

if (found.length === 0) {
  console.log(`빈칸 0건 (파일 ${files.length}건 검사)`);
  process.exit(0);
}

console.log(`빈칸 ${found.length}건 (파일 ${files.length}건 검사)`);
for (const f of found) {
  console.log(`  ${relative(process.cwd(), f.file)}:${f.line}  ${f.token}`);
}
const unique = [...new Set(found.map((f) => f.token))];
console.log(`토큰 종류 ${unique.length}개:`);
for (const t of unique) {
  console.log(`  ${t}`);
}
process.exit(1);
