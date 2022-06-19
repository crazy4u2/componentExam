# project 신세계

???: 아 근데 이거 작전명이 뭐냐?
!!!: 신세계, 신세계 프로젝트입니다.
[신세계 프로젝트](https://www.youtube.com/watch?v=cLrWuLXymSc)

## 목적 및 작명 이유

- web 없는 회사에 web 을 만드는, 신세계를 만든다고 해서 신세계 프로젝트라 이름 지었음. (신세계 백화점 아님)
- 네이버 지식쇼핑 등 외부 마케팅에서 랜딩하는 역활
- 구매로 이어지게 하는 역활

## 일하는 방법

- 저장소 clone
- `yarn install`
- `yarn dev`

## git branch 전략

### main

- 운영용 브랜치

### develop

- 개발서버 (개발기간 중에는 stage 를 겸함)용 브랜치

### feature/

- [관련된 JIRA보드](https://bithumblive.atlassian.net/jira/software/projects/BWF/boards/35/roadmap)에서 에픽 혹은 task 별로 브랜치를 생성해서 해당 보드의 티켓번호를 조합해서 작업함

### merge 전략

- `feature` --> `develop` --> `main` 의 순서로 극단적인 단순함을 추구할 예정
- 실제 운영에 들어가면 더 복잡해질 수 있음.

## 기술사양

### Next.js

### React-query

### Recoil

- 이건 다른 가벼운 걸로 바꿔도 됨.

### AWS Amplify

- vercel 도입도 할 수 있음.

### styled-components

- 걍 익숙해서...

### Next-auth

- 시간이 없어서...

## 프로젝트 구조

- 작성중
