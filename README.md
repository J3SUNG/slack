# Slack

1. package.json

- npm init으로 생성
- npm i react react-dom
- npm i typescript @types/react @types/react-dom
- 설치 후 package-lock.json과 node_modules 폴더가 생성됨

2. .eslintrc

- eslint 설정 파일
- 코드 점검 도구, 직접 설정하면 팀원간 의견 충돌이 있으니 prettier에 위임
- npm i -D eslint

3. .prettierrc

- prettier 설정 파일
- 저장하면 알아서 코드를 수정해줌(에디터 설정 필요)
- npm i -D prettier eslint-plugin-prettier eslint-config-prettier

4. tsconfig.json

- 타입스크립트 설정
- 언어 문법과 자바스크립트 결과물이 어떻게 나와야하는지 설정하는 파일
- lib은 ES2020, DOM(브라우저), module은 esnext처럼 최신 설정이지만 target은 es5로 IE 브라우저에서도 돌아갈 수 있게 변환
- strict: true를 켜놓아야 타입 체킹을 해줘서 의미가 있음.

5. webpack.config.ts

- 웹팩 설정
- ts, css, json, 최신 문법 js 파일들을 하나로 합쳐줌.
- npm i -D webpack @types/webpack @types/node
- entry에서 파일을 선택하면 module에 정해진 rules대로 js로 변환하여 하나의 파일로 합쳐줌(output). plugins는 합치는 중 부가적인 효과를 줌
- ts는 babel-loader로, css는 style-loader와 css-loader를 통해 js로 변환
- babel에서는 @babel/preset-env(최신문법 변환) @babel/preset-react(리액트 jsx 변환), @babel/preset-typescript(타입스크립트 변환)
- npm i -D css-loader style-loader @babel/core babel-loader @babel/preset-env @babel/preset-react @babel/- preset-typescript
- publicPath가 /dist/고 [name].js에서 [name]이 entry에 적힌대로 app으로 바뀌어 /dist/app.js가 결과물이 됨.

6. index.html 작성

- 아이콘, 폰트, 파비콘같은 것은 슬랙에서 그대로 사용
- client.tsx에 간단한 tsx 작성
- #app 태그에 리액트가 렌더링됨.
- ./dist/app.js로 웹팩이 만들어낸 js파일 불러옴

7. tsconfig-for-webpack-config.json

- webpack할 때 webpack.config.ts를 인식 못하는 문제
- npm i cross-env
- package.json의 scripts의 build를 cross-env TS_NODE_PROJECT="tsconfig-for-webpack-config.json" webpack
- npm run build
- index.html 실행해보기

8. 웹팩 데브 서버 설치

- 개발용 서버인 devServer 옵션 추가(port는 3090, publicPath는 /dist/로)
- webpack serve할 때 webpack.config.ts를 인식 못하는 문제
- npm i -D ts-node webpack-dev-server @types/webpack-dev-server webpack-cli
- package.json의 scripts의 dev를 cross-env TS_NODE_PROJECT="tsconfig-for-webpack-config.json" webpack serve --env development
- npm run dev하면 localhost:3090에서 서버 실행됨.

9. hot reloading 설정

- npm i -D @pmmmwh/react-refresh-webpack-plugin react-refresh
- webpack의 babel-loader 안에 설정(env) 및 plugin으로 추가

10. fork-ts-checker-webpack-plugin

- webpack은 ts체크 후 eslint체크 후 빌드 시작
- ts랑 eslint는 동시에 체크하면 더 효율적
- 이 플러그인이 동시에 진행하게 해줌.

11. 폴더 구조 세팅

- 페이지들은 pages
- 페이지간 공통되는 틀은 layouts
- 개별 컴포넌트는 components
- 커스텀훅은 hooks, 기타 함수는 utils
- 각 컴포넌트는 컴포넌트 폴더 아래 index.tsx(JSX)와 styles.tsx(스타일링)

12. ts와 webpack에서 alias 지정

- npm i -D tsconfig-paths
- tsconfig에서 baseUrl와 paths 설정
- webpack에서는 resolve안에 alias 설정
- ../layouts/App같은 것을 @layouts/App으로 접근 가능

13. emotion 세팅

- styled components와 비슷하지만 설정이 간단함.
- npm i @emotion/react @emotion/styled
- npm i -D @emotion/babel-plugin (웹팩에 babel 설정 추가)
- 스타일드 컴포넌트로 만들 때 변수를 많이 만드는 셈이므로 & 같은 선택자 적극 활용해야 변수 이름짓기를 최소화할 수 있음.

14. @layouts/App 작성

- 리액트 라우터 적용하기
- npm i react-router react-router-dom
- npm i -D @types/react-router @types/react-router-dom
- client.tsx에서 App을 BrowserRouter로 감싸기
- @layouts/App에 Switch, Redirect, Route 넣기

15. @loadable/component

- 라우터를 코드스플리팅 해줌
- 회원가입 페이지에 접근한 사람은 회원가입 페이지에 필요한 JS만 받음
- npm i @loadable/component @types/loadable\_\_component
