import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from "./router/index.js"
Vue.use(VueRouter)

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false



new Vue({
  router:router,
  render: h => h(App)
}).$mount('#app')
