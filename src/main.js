import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from "./router/index.js"
// import "./iconfont2/iconfont.css"
import "./iconfont2/iconfont.css"

Vue.use(VueRouter)
import store from "./store/index.js"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "./iconfont2/iconfont/iconfont.css";

Vue.use(ElementUI);
Vue.config.productionTip = false



new Vue({
  router:router,
  store,
  render: h => h(App)
}).$mount('#app')
