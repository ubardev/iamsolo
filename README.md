# 나는 솔로 정보 정리 프로젝트

## 사용기술

- Next.js 13, tailwindcss, planetscale(MySQL DB), prisma(ORM), react-query

## 주요기능

- 풀스택 프로젝트
- SSG, CSR 구분하여 사용
- Next.js 13 app directory 사용에 맞춰 각종 라이브러리 연동(swr, react-query 등)
- 네이버 뉴스 연동(API조회 Limit(25,000/일)을 초과하기 않기 위한 ISR적용 1시간)
- 모바일 / 태블릿&PC 사이즈 반응형 처리
- 가능한 모든 영역에 Typescript 적용

## 해야할일

- 이미지 CDN처리(유로 서비스 사용?)
- 기수별 게시판 or 한줄 코멘트 기능 추가
- UI/UX변경
- 출연자별 상세페이지 추가
- 로그인/회원가입(Google oAuth, NextAuth)

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
