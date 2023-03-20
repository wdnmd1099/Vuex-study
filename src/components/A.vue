<template>
  <div>
    <button @click="() => { this.$store.commit('addCount', ++this.$store.state.count) }">add</button>

    <p>显示仓库的state.count : {{ this.$store.state.count }}</p>

    <p>通过computed直接返回仓库的state.count : {{ shit123 }}</p>

    <p>调用仓库的getters 的 jiaYi {{ gettersJiaYi }}</p>

    <p>data里 return 的数据不会变：{{ zzz }}</p>

    <p>显示getters的计算属性 {{ this.$store.getters.jiaYi }}</p>
    
    
  </div>
</template>
  
<script>
export default {
  data(){
    return {
      zzz:this.$store.state.count,
    }
  },
  computed:{
    shit123(){
      return this.$store.state.count
    },
    gettersJiaYi(){
      return this.$store.getters.jiaYi
    }
  },


}
</script>
  
<style lang="scss"></style>
  