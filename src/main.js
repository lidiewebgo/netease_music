import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Tab, Tabs ,Toast } from 'vant';
Vue.config.productionTip = false
Vue.use(Tab)
Vue.use(Tabs)
Vue.prototype.$toast = Toast//全局挂在toast方法
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
