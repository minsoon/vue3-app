# vue3-project
vue3 도입 가이드 문서 🤖


## vue3 버전 업데이트
```shell
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

```js
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
```js
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
 
~~**html-webpack-plugin** : index.html 설정 플러그인<br>~~
~~**uglifyjs-webpack-plugin** : 빌드시 파일 용량 줄여주는 도구~~

---
## vue3 릴리즈 내역
많은 면에 변화가 있지만 크게 속도 개선, 파일 용량 개선, Typescript 고도화가 크게 보임. 실제로 프로젝트 빌드 시 Vue2와 용량차이가 있다.


 > ### main.js 마운트 형태가 다름.
 ```js
import { createApp } from 'vue';
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

 ```

> ### 템플릿 생성 방식
Vue2에선 태그가 아무 기능을 수행하지 않아고 엘리먼트를 무조건 하나로 감싸줘야했지만 Vue3에선 무관하다고 한다.

```html
<template>
    <!-- <div> -->
        <h1></h1>
        <header>
            <h2></h2>
        </header>
        <footer></footer>
    <!-- </div> -->
</template>
```

> ### Lifecycle 변화
vue2는 data, method와 같은 위치에 선언하도록 되어있었으나 <br>
vue3에선 setup 내부에서 선언하도록 되었다. (기존에 사용되던 lifecycle hook은 대부분 유지)<br>

~~`beforeCreate`~~ -> use `setup()`<br>
~~`created`~~ -> use `setup()`<br>
`beforeMount` -> `onBeforeMount`<br>
`mounted` -> `onMounted`<br>
`beforeUpdate` -> `onBeforeUpdate`<br>
`updated` -> `onUpdated`<br>
`beforeDestroy` -> `onBeforeDestroy`<br>
`destroyed` ->  `onUnmounted`<br>
`errorCaptured` -> `onErrorCaptured`<br>
<br>

새로등록된 Hooke으로 디버깅용에 사용한다고한다.
`onRenderTracked`<br>
`onRenderTriggered`<br>

> ### 속성 사용의 변화
기존에는 옵션으로 있었던 computed, mounted 등이 이젠 선호하여 사용하도록 변경되었다.<br>

사용하는 것만 import하여 사용하도록 하는 철학이라고함..<br>

개인적으로 불편..(글로벌로 받아올 방법 찾아볼까함..)<br>

<br>

```js
import { onMounted, onUpdated, onUnmounted } from 'vue'

export default {
  setup() {
    onMounted(() => {
        ...
    })
    onUpdated(() => {
        ...
    })
    onUnmounted(() => {
        ...
    })
  }
}
```

> ### reactive(), ref(), toRef(), toRefs(), isRef()
`reactive()`, `ref()`는 반응성이며 변경이 가능한 객체이다.

`reactive()`는 2.x의 현재 `Vue.observable()` API와 동일하며 RxJS Observables과 혼동되지 않도록 이름을 변경했다고한다.

원본 자체의 객체를 사용하는 경우 `reactive()`를 사용하면 되지만 반환된 객체에 참조유지를 위해 객체를 해제하거나 펼치는 경우 `toRefs()`를 사용하며 반환되는 객체는 `ref()`로 변환된다.

`isRef()`는 어떤 유형의 값인지 확인하기 위한 객체이다.

`ref()` 객체는 원본 값을 value 속성에 담아두고 변경을 감시하며 'String, Number, BigInt, Boolean, Symbol, Null, Undefined' 7가지 유형으로 분리되며 value의 속성이 있어 변경시 value값을 변환 해야한다.
```js
import { ref, reactive, toRefs } from 'vue'

const useTorefs = () => {
    const data = reactive({ a: 0, b: 0 })
    return toRefs(data)
}

export default {
  setup() {
    const count = ref(0)
    const state = reactive({
        count: 0
    })
    const { a, b } = useTorefs()
    return {
        count,
        state,
        a,
        b
    }
  }
}
```
<br>

> ### CompositionAPI
CompositionAPI가 등장한 배경은 아래 이미지와 같이 규모가있는 컨포넌트 생성시, 상태 변수, 변수들의 메소드 바인딩, methods 선언, lifycycle hook 선언등 혼재되어 있는 구조가 생성되었지만 
구조의 가독성과 논리 보존하기 위한 방향으로 변화했다고함.

<img src="https://media.vlpt.us/images/bluestragglr/post/04f6bd1b-cf8b-40a2-97c8-f2ea41741225/Untitled%201.png">

#### 계산된 속성 : computed
기존에 옵션으로 있었던 computed, mounted 등이 이젠 선호하여 사용하도록 변경되었다.
```html
<template>
    <button @click="increment">
      countText: {{ countText }}
    </button>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  setup() {
    const count = ref(0)
    const countText = computed(() => count.value * 2)
    const increment = () => {
        count.value++
    }
    return {
        countText,
        increment
    }
  }
}
</script>
```

#### 감시자 : watchEffect
`watchEffect`는 반응형 상태에 따라 부수효과를 적용하고 자동으로 다시 적용시키는 API이다.

또한 실행 후에도 사용한 모든 반응 상태 속성을 종속성으로 추가하여 추적한다.

중지 시점은 마운트가 해제되면 자동으로 중지됩다고한다.

- 비동기로 개발 가능.
- `Hooks` 에서 적용 가능
- `onInvalidate`를 활용하여 무효화.
- `flush` 값에 따라 감시 시점 변경
- `onTrack`, `onTrigger` 감시자 디버깅용

```js
import { ref, watchEffect } from 'vue'

export default {
  name: 'About',
  setup() {
    const count = ref(0)
    setInterval(() => {
      count.value++
    }, 1000)
    const increment = () => {
      watchEffect(() => {
        document.body.innerHTML = `Change HTML${count.value}`
      })
    }
    return {
      count,
      increment
    }
  }
}
```

> 참고: watchEffect 는 2.x watch 옵션과 유사하지만 감시된 데이터 소스와 부수효과 콜백을 분리할 필요가 없습니다. Composition API는 2.x 옵션과 정확히 동일한 동작을 하는 watch 기능을 제공합니다.
 

#### 감시자 : watch
Vue2와 동일한 기능이며 문법만 달라졌다.
```js
import { ref, watch } from 'vue'

export default {
  name: 'About',
  setup() {
    const count = ref(0)
    watch(count, () => {
      console.log(count.value)
    })
    return {
      count
    }
  }
}
```

## 참고자료
- https://cli.vuejs.org/guide/mode-and-env.html#environment-variables
- https://github.com/vuejs/composition-api
- https://marc.dev/blog
- https://vue-composition-api-rfc.netlify.app/api.html#setup


## TODO
- env(환경변수) 설정시 BASE_URL은 변경이 불가능하다. 왜그런지 확인
- vuetify, axios, lodash 등 적용할 패키지 모듈화
  - `Vuetify`는 아직 Vue3에 대한 대응 준비중. 참고: https://www.notion.so/Coding-Guidelines-86c96a7da947421bb88515a966e71df0


