import Vue from 'vue'
import VueRouter from 'vue-router'
import Demo1 from '@/demo/Demo1.vue'
import Demo2 from '@/demo/Demo2.vue'
import Home from '@/Home.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/demo1',
      name: 'demo1',
      component: Demo1
    },
    {
      path: '/demo2',
      name: 'demo2',
      component: Demo2
    },
    {
      path: '*', // 捕获404
      component: Home
    }
  ]
})
