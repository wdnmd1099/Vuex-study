<template>
   <div>
    <button @click="()=>{this.$store.state.count-=1}">cut，不变的话去看看store的getter 的 jiaYi</button>
    <p>{{ this.$store.state.count }}</p>

   <button @click="()=>{this.$store.dispatch('YiBu')}">0.5秒后加一(YiBu的Action使用)</button>

  </div>

</template>
  
<script>

export default {
  setup(props){
   
  }
}
</script>
  
<style lang="scss">

</style>
  