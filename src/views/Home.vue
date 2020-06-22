<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :msg="msg"/>
    <v-btn>test</v-btn>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data () {
    return {
      msg: 'test'
    }
  },
  mounted () {
    this.msg = process.env.VUE_APP_BASE_URL
    console.log(process.env)
  }
}
</script>
