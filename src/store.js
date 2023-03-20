import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 999,
        shit: {
            name: 'shit233',
            money: 500,
        }
    },
    getters: {
        jiaYi:()=>{  //因为是计算属性，所以每变一次就-1，会导致cut 按钮按了没用，加一再减一
            console.log('加一')
            return store.state.count += 1
        }
    },
    mutations: {
        addCount(state, arg) {
            console.log(arg)
            state.count = arg
        },
        delCount(state, arg) {
            state.count = arg
        }
    },
    actions:{
        YiBu(context){
            setTimeout(() => {
                context.commit('addCount', ++store.state.count)
            }, 500);
        }
    }
})

export default store 