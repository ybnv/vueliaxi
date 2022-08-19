import Vue from 'vue'
import Router from 'vue-router'
import Text from '@/components/Text'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Shangp from '@/components/Shangp'
import User from '@/components/User'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Text',
      component: Text
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/shangp',
      name: 'Shangp',
      component: Shangp
    },
    {
      path: '/user',
      name: 'User',
      component: User
    }
    
  ]
})
