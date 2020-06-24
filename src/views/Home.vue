<template>
  <h1>{{ title }}</h1>
  <button @click="increment">ref: {{ count }}</button><br />
  <button @click="increment">
    Count is: {{ state.text }}, double is: {{ state.double }}
  </button><br />
  {{ refTest.count }} / {{ reactiveTest.count }}<br />
  {{ testcomputed }}
</template>

<script>
import { ref, reactive, computed, watch } from 'vue'

export default {
  name: 'Home',
  setup() {
    const title = ref('HOME')
    const count = ref(0)
    const testCount = ref(0)
    const testcomputed = computed(() => testCount.value * 2)
    const state = reactive({
      text: `countText ${count.value}`,
      double: computed(() => count.value * 2)
    })
    const refTest = ref({
      count: 0
    })
    const reactiveTest = reactive({
      count: 0
    })
    const increment = () => {
      testCount.value++
      title.value = 'HOME' + count.value
      count.value++
      refTest.value.count++
      reactiveTest.count++
      state.text = `countText ${count.value}`
    }
    // watch((first, second) => {
    //   console.log(first, second)
    // })
    watch(count, (first, second) => {
      console.log(first, second)
    })
    watch(title, (first, second) => {
      console.log(first, second)
    })
    return {
      title,
      count,
      state,
      refTest,
      reactiveTest,
      increment,
      testcomputed
    }
  }
}
</script>
