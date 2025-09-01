import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
   // state 统一定义数据,类似于组件里面的data,所有在vuex中使用的变量都要在这里声明和初始化
  state: {
    count: 0,
    showNum:0,
  },
  getters: {
  },
  mutations: {
    // 不带参mutations
    add(state) {
      state.count++
    },
    // 带参数的mutations
    addN(state, step) {
      state.count += step
    },
    sub(state) {
      state.showNum--
    },
    subN(state, step) {
      state.showNum -= step
    }

  },
   actions: {
    addAsync(context) {
      setTimeout(() => {
        // 在 actions 中，不能直接修改 state 中的数据；
        // 必须通过 context.commit() 触发某个 mutation 才行
        context.commit('add')
      }, 1000)
    },
    addNAsync(context, step) {
      setTimeout(() => {
        context.commit('addN', step)
      }, 1000)
    },
  },
  modules: {
  },
   // getter方法模拟显示当前最新的值
  getters: {
    showNum(state) {
      return '当前最新的数量是【' + state.count + '】'
    }
  }
})
