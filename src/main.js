import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'
import App from './App.vue'
import './assets/myGlobal.css'
import http from './request'
import router from './router'

Vue.config.productionTip = false

Vue.prototype.http = http;

Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
