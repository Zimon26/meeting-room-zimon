import Admin from '@/views/Admin.vue'
import Login from '@/views/Login.vue'
import User from '@/views/User.vue'
import User_Index from '@/views/User_Index.vue'
import AddMeeting from '@/views/User_Index_inner/AddMeeting.vue'
import ConfigMeeting from '@/views/User_Index_inner/ConfigMeeting.vue'
import MeetingRecord from '@/views/User_Index_inner/MeetingRecord.vue'
import SearchMeeting from '@/views/User_Index_inner/SearchMeeting.vue'
import UserMessage from '@/views/User_Message/User_Message.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  {
    path: '/user', component: User, children: [
      { path: '/', redirect: 'index' },
      {
        // 这个地方不使用新页面路由，等完成了清除这个部分
        path: 'index', component: User_Index, children: [
          { path: 'AddMeeting', component: AddMeeting },
          { path: 'ConfigMeeting', component: ConfigMeeting },
          { path: 'SearchMeeting', component: SearchMeeting },
          { path: 'MeetingRecord', component: MeetingRecord },
        ]
      },
      {
        path: 'message', component: UserMessage
      }
    ]
  },
  { path: '/admin', component: Admin }
]

const router = new VueRouter({
  routes
})

export default router
