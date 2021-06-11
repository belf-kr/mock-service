# mock-service

미완성된 service를 대신하여 더미 데이터를 제공하는 서비스를 제공합니다.

1. 더미 데이터는 완성된 service와 동일한 interface로 제공됩니다.
1. 덕분에 api-gateway에서 필요에 따라 실제 service와 더미 데이터를 자유롭게 스위칭 할 수 있습니다.

# Stack

1. node:v14.16.1
1. vscode
1. nest.js
1. docker

# 빠른 시작

1. `npm i && npm run start:dev` 를 이용해 nestjs를 시작합니다.

# 환경 변수

| Variable    | dev | qa/prod | Default | Example                 | Usage                                                                     |
| ----------- | :-: | :-----: | :-----: | ----------------------- | ------------------------------------------------------------------------- |
| NODE_ENV    | ✅  |   ✅    |   🤷‍♂️    | development, production | `NodeJS 실행 환경` 을 설정하는 값 nestjs가 실행전에 값이 있어야 합니다.   |
| STAGES      | 🚫  |   ✅    |   🤷‍♂️    | qa, prod                | `k8s에서` 실행 환경에 맞는 svc를 연결 및 디버깅을 위해 사용되는 값입니다. |
| SERVER_PORT | ✅  |   🚫    |  3000   | 3000                    | `NodeJS 실행환경` 에서 API 서비스의 Listen port를 설정하기 위한 값입니다. |
