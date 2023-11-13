# 나는 솔로 정보 정리 프로젝트

## 사용기술

- Next.js 13 final version, tailwindcss, planetscale(MySQL DB), prisma(ORM), react-query

## 주요기능

- 풀스택 프로젝트
- SSG, CSR 구분하여 사용
- Next.js 13 app directory 사용에 맞춰 각종 라이브러리 연동(swr, react-query 등)
- 네이버 뉴스 연동(API조회 Limit(25,000/일)을 초과하기 않기 위한 ISR적용 1시간)
- 모바일 / 태블릿&PC 사이즈 반응형 처리
- 가능한 모든 영역에 Typescript 적용
- Naver Search Advisor 등록

## 해야할일

- ~~출연자 인스타 영역 추가~~
- ~~기수별 메인화면 이미지 -> 유튜브 영상~~
- ~~도메인 변경(iamsolo.kr)~~
- ~~방문자수 노출 추가~~
- ~~ga 추가~~
- ~~API 분기 .env.local로 처리~~
- https://pagespeed.web.dev/를 활용한 성능 개선
- 로그인/회원가입(Google oAuth, NextAuth)
- canonical(Naver 권장) tag 추가
- SEO처리
- 즐겨찾기 유도 기능 추가
- 공유하기 기능 추가
- 구글 애드센스 추가
- 기수별 게시판 or 한줄 코멘트 기능 추가
- 이미지 CDN처리(유로 서비스 사용? / imgbb)
- UI/UX변경
- 출연자별 상세페이지 추가
- 좋아요/싫어요
- 인기순위

## 프로젝트 관련 명령어

- db test data생성
  yarn prisma db seed
- DB 테이블 생성
  yarn prisma db push
- DB 테이블 정보 반영
  yarn prisma generate
- prisma studio 실행
  yarn prisma studio

## 진행하다 알게된 Tip

- png -> ico 파일 변환
  https://convertio.co/kr/png-ico/

## 참고자료

- Google oAuth
  https://console.cloud.google.com/
