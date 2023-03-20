<template>
  <div id="app">

    <A />
    <hr>
    <B /> 
  </div> 
</template>

<script>
import A from './components/A.vue'
import B from './components/B.vue'


export default {
  name: 'App',
  components: {
    A,
    B,
  },
  data(){
    return {
      count:10086,
      console,
    }
  },
}
</script>

<style lang="scss">

</style>
