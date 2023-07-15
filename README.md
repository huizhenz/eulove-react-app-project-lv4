# React-App 개인 과제 Lv.4 'EULOVE'
> 유럽 여행에 대한 정보나 후기 등을 공유할 수 있는 웹 애플리케이션

## 1. 과제 소개
### 1-1. 배포 주소
>https://eulove.vercel.app/

### 1-2. 화면 구성
![Jul-14-2023 23-52-20](https://github.com/huizhenz/eulove-react-app-project-lv4/assets/133093192/2538ba05-4369-4c0f-b04c-3bf59f0f58b2)

### 1-3. 과제 기간
2023.07.10 - 2023.07.14

## 2. 주요 기능
### 2-1. 주요 기능
1. 메인페이지
  - 지도에서 국가명을 클릭하면 해당 국가의 페이지로 이동
2. 국가 별 페이지
  - 본문 리스트 조회
  - 본문 리스트 카테고리 별 필터 조회
  - 본문 상세 조회
  - 본문 추가
3. 본문 상세페이지
  - 본문 삭제
  - 본문 수정
  - 댓글 리스트 조회
  - 댓글 추가
  - 댓글 삭제
  - 댓글 수정 

### 2-2. 필수 요구사항
1. UI/UX
  - 창의적인 UI/UX
2. 필수 요구 사항
  - CRUD 기능
  - 동적 라우팅을 사용
  - 1개 이상의 `Custom Hook`을 구현
  - `Form`에 유효성 검증 기능을 적용
  - 버튼 컴포넌트 1개로 모든 버튼을 구현
  - `development` 환경에서만 `redux devtool`이 활성화 되도록 처리
  - 배포된 결과물에서는 `console.log()` 가 보이지 않도록 처리
  - `.env` 를 이용해서 API 서버의 URL 코드상에서 숨기도록 처리
3. API 명세서 (프로젝트 완료 후 작성)
4. 배포
  - json-server 서버 배포 - glitch
  - 리액트 프로젝트 배포 - vercel

### 2-3. 기술 스택
> Environment

<img src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white"/> <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"/>

> Config

<img src="https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white" />

> Development

<img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/> <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/> <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"/> <img src="https://img.shields.io/badge/-React%20Query-FF4154?style=for-the-badge&logo=react%20query&logoColor=white"/> <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" />

> Deployment

<img src="https://img.shields.io/badge/glitch-%233333FF.svg?style=for-the-badge&logo=glitch&logoColor=white" /> <img src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white"/> 

## 3. API 명세서
> https://huizhenz.notion.site/API-0d5b6c86beea4c08a730ab34a7c4e2ff?pvs=4
> ![8cfb686a-daa6-41f5-ac79-1e470d1ed9b6](https://github.com/huizhenz/eulove-react-app-project-lv4/assets/133093192/7dab8eec-5d1d-4145-af1e-0dbe31e72768)


## 4. 트러블 슈팅
1. 이미지들이 모여있는 assets 폴더를 public 폴더 안에 넣고 import 하고싶었는데 잘 안됨 => 결국 해결하지 못하고 assets 폴더는 src 폴더 내부에 있음
2. 댓글 수정시 댓글이 수정되긴하는데 렌더링되고 댓글을 useQuery로 조회할 시 수정된 댓글이 아닌 이전 댓글을 가져옴 => useQuery의 query key 값이 고유하지 않아서 생기는 문제였음 => 고유한 key 값으로 바꿔주니 해결됨
3. json-server 배포 어려웠음 => glitch로 배포하기 성공하긴 했지만 과정이 어려웠음
4. API 명세서 작성하는 거 잘 모르겠음 => 일단 작성하긴 했지만 여전히 잘 이해가지 않음
 
## 5. 추가하고 싶은 기능
1. 회원가입 / 로그인 / 로그아웃
2. 글 작성시 이미지파일 업로드
3. 다양한 애니메이션 효과
