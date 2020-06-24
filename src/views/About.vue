<template>
  <div class="about">
    <h1 @click="increment">This is an about page {{ count }}</h1>
  </div>
</template>

<script>
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
</script>
