# vue3-project
vue3 도입 가이드 문서


## vue3 버전 업데이트
```
// 전역 @vue/cli 버전 체크 후 4.4.x 로 설치
npm install -g @vue/cli

// 프로젝트 설치
vue create yourProject
cd /yourProject

//베타 버전 설치
vue add vue-next
//
```
---
## wabpack 환경변수
```
.env                # loaded in all cases
.env.local          # loaded in all cases, ignored by git
.env.develop         # only loaded in specified develop
.env.[mode].local   # only loaded in specified mode, ignored by git
```

위와 같은 파일을 생성하면 사용가능함.

```
// package.json
...
  "scripts": {
    "develop": "vue-cli-service --mode develop"
    ...
  }
...
```
로컬서버 뛰울시 --mode [modeName] 으로 설정하면 됨.

환경변수 설정시 변수 명 앞에 항상 'VUE_APP_' 를 붙여주면 Vue CLI에서 내부적으로 웹팩 DefinePlugin을 활용하여 클라이언트 웹 자원에서 접근할 수 있다.

### 모드 설정
```
  // package.json
  ...
  "scripts": {
    "serve": "vue-cli-service serve --open",
    "develop": "vue-cli-service serve --open --mode develop",
    "build": "vue-cli-service build",
    "build:develop": "vue-cli-service build --mode develop"
    ...
  }
  ...
```

참고자료: https://cli.vuejs.org/guide/mode-and-env.html#environment-variables

---
## vue3 릴리즈 내역
 vendors.js 용량차이가 있음.(이미지)
 
 main.js 마운트 형태가 다름.(이미지)

 템플릿을 테그로 안감싸도댐.
```
<template>
    <h1></h1>
    <header>
        <h2></h2>
    </header>
    <footer></footer>
</template>
```

## TODO
- BASE_URL은 변경이 불가능하다. 왜그런지 확인
- vuetify, axios, lodash 등 적용할 패키지 모듈화


