<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <hr>
     <HelloWorld :msg="texte"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data() {
  return {
    texte:"hello world"
  }
  },
  components: {
    HelloWorld
  }
}
</script>
