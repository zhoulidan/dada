import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/styles/style.scss'
import Vant from 'vant';
import 'vant/lib/index.css';
import '@/static/font/iconfont.css'

Vue.use(Vant);


Vue.prototype.$bus = new Vue()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
