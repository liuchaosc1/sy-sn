import Vue from 'vue'
import VueRouter from 'vue-router'
import shopitem from "../components/shop-item-componets/shop-item.vue"
import homePage from"../components/homePage.vue"
import appraise from "../components/appraise.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: '/shopitem',
    component: shopitem
  },
  {
    path:'/',
    component:homePage

  },
  {
    path: '/appraise',
    component:appraise
  }
  
]

const router = new VueRouter({
  routes
})

export default router
