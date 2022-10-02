import Admin from '@/views/Admin.vue'
import Login from '@/views/Login.vue'
import User from '@/views/User.vue'
import User_Index from '@/views/User_Index.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  {
    path: '/user', component: User, children: [
      { path: '/', redirect: 'index' },
      { path: 'index', component: User_Index }
    ]
  },
  { path: '/admin', component: Admin }
]

const router = new VueRouter({
  routes
})

export default router
