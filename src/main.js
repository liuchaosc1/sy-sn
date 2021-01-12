import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter)

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false
import homePage from"./components/homePage.vue"
const routes = [
	{path:'/',component:homePage},
	
]
const router = new VueRouter({
	routes:routes
})

new Vue({
  router:router,
  render: h => h(App)
}).$mount('#app')
