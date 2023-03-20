import Vue from 'vue'
import App from './App.vue'
import store from './store.js'

Vue.config.productionTip = false

console.log(store.state.count)
// console.log(this.$store.getters.jiaYi);

new Vue({
  store:store,
  render: h => h(App),
}).$mount('#app')
