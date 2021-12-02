# mock-service

## 빠른 시작

### 컨테이너 생성

```
docker-compose up -d
```

위의 명령어를 입력해 docker image 생성 후 컨테이너를 생성합니다.

### 컨테이너 삭제

```
docker-compose down
```

위의 명령어를 입력해 컨테이너를 삭제합니다.

### API 요청

#### ping

http://localhost:3002/ping

## 개요

미완성된 service를 대신하여 더미 데이터를 제공합니다.

## 특이사항

1. 더미 데이터는 완성된 service와 동일한 interface로 제공됩니다.
1. api-gateway에서 필요에 따라 실제 service와 더미 데이터간 자유롭게 선택 할 수 있습니다.

## Stack

1. node:v14.16.1
1. npm
1. nest.js
1. vscode

## 시작하기

### 개발 환경

1. .env.dev 파일에 특이사항이 있는 경우 수정합니다.
1. VSCode 디버그 창 내부에 있는 NestJS start 버튼을 눌러 시작합니다.

### QA/production 환경

1. README.md 파일 내 환경변수 표를 참고해 자신의 서버 환경에 알맞은 OS 환경변수를 설정합니다.
1. `npm i && npm run start:prod` 명령을 이용해서 mock service를 시작합니다.

## 환경 변수

### 환경 변수 표 범례

| 구성 요소     | 설명                                                                          |
| ------------- | ----------------------------------------------------------------------------- |
| Variable      | 환경 변수 이름                                                                |
| dev           | 환경 변수가 개발 환경에서 사용되는지 여부                                     |
| qa/prod       | 환경 변수가 qa, production 환경에서 사용되는지 여부                           |
| Default value | 시스템 환경 변수를 사용해 환경 변수를 정하지 않았을 때 기본적으로 적용되는 값 |
| Example       | 환경 변수 값으로 들어갈 수 있는 예시의 나열                                   |
| Explanation   | 환경 변수에 대한 설명                                                         |

### 환경 변수 표

| Variable    | dev | qa/prod | Default value | Example                 | Explanation                                                                        |
| ----------- | :-: | :-----: | :-----------: | ----------------------- | ---------------------------------------------------------------------------------- |
| NODE_ENV    | ✅  |   ✅    |               | development, production | `NodeJS 실행 환경` 을 설정하는 값으로, 미리 선언한 npm 스크립트로 값이 설정됩니다. |
| STAGES      | 🚫  |   ✅    |               | qa, prod                | `k8s에서` 실행 환경에 맞는 svc를 연결 및 디버깅을 위해 사용되는 값입니다.          |
| SERVER_PORT | ✅  |   ✅    |     3000      | 3000,3002               | mock 서비스의 `HTTP Listen port` 값입니다.                                         |
