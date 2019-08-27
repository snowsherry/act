import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import init from './init'
import * as filters from './filters';
Vue.config.productionTip = false
init();
//使Vue
/*设置全局的fliters*/
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
