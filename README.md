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
## wabpack
### 환경변수
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

---
## vue.config
 ### plugin
 
**html-webpack-plugin** : index.html 설정 플러그인<br>
**uglifyjs-webpack-plugin** : 빌드시 파일 용량 줄여주는 도구


참고자료: https://cli.vuejs.org/guide/mode-and-env.html#environment-variables

---
## vue3 릴리즈 내역
속도 개선, 파일 용량 개선, Typescript 고도화
 - vendors.js 용량차이가 있음.
 - main.js 마운트 형태가 다름.
 ```
import { createApp } from 'vue';
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

 ```

 - 템플릿을 테그로 안감싸도댐.
```
<template>
    <h1></h1>
    <header>
        <h2></h2>
    </header>
    <footer></footer>
</template>
```

- Lifecycle 변화

### Lifecycle 변화
vue2는 data, method와 같은 위치에 선언하도록 되어있었으나 <br>
vue3에선 setup 내부에서 선언하도록 되었음.(기존에 사용되던 lifecycle hook은 대부분 유지)

### 속성 사용의 변화
기존에는 옵션으로 있었던 computed, mounted 등이 이젠 선호하여 사용하도록 변경됨<br>
사용하는 것만 import하여 사용하도록 하는 철학이라고함..<br>
개인적으로 불편..(글로벌로 받아올 방법 찾아볼까함..)

```
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onActivated, onDeactivated, onErrorCaptured } from 'vue'
    
    export default {
      setup() {
        onBeforeMount(() => {
          // ... 
        })
        onMounted(() => {
          // ... 
        })
        onBeforeUpdate(() => {
          // ... 
        })
        onUpdated(() => {
          // ... 
        })
        onBeforeUnmount(() => {
          // ... 
        })
        onUnmounted(() => {
          // ... 
        })
        onActivated(() => {
          // ... 
        })
        onDeactivated(() => {
          // ... 
        })
        onErrorCaptured(() => {
          // ... 
        })
      }
    }

```
- data, computed, methods 

### 속성 사용의 변화
기존에는 옵션으로 있었던 computed, mounted 등이 이젠 선호하여 사용하도록 변경됨

### CompositionAPI
CompositionAPI가 등장한 배경은 아래 이미지와 같이 규모가있는 컨포넌트 생성시, 상태 변수, 변수들의 메소드 바인딩, methods 선언, lifycycle hook 선언등 혼재되어 있는 구조가 생성되었지만 
구조의 가독성과 논리 보존하기 위한 방향으로 변화했다고함.
<img src="https://media.vlpt.us/images/bluestragglr/post/04f6bd1b-cf8b-40a2-97c8-f2ea41741225/Untitled%201.png">

## TODO
- env(환경변수) 설정시 BASE_URL은 변경이 불가능하다. 왜그런지 확인
- vuetify, axios, lodash 등 적용할 패키지 모듈화


