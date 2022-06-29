import { createRouter, createWebHistory } from 'vue-router'
import Home from '~/views/Home'
import Login from '~/views/Login'
import Signup from '~/views/Signup'
import MyPage from '~/views/MyPage'
import UserUpdate from '~/views/MyPage/UserUpdate'
import UpdateDisplayName from '~/views/MyPage/UpdateDisplayName'
import UpdatePassword from '~/views/MyPage/UpdatePassword'
import Admin from '~/views/Admin'

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/signup',
      component: Signup
    },
    {
      path: '/my-page',
      component: MyPage,
      meta: { auth: true },
      redirect: '/my-page/update',
      children: [
        {
          path: 'update',
          component: UserUpdate
        },
        {
          path: 'edit-name',
          component: UpdateDisplayName
        },
        {
          path: 'edit-password',
          component: UpdatePassword
        }
      ]
    },
    {
      path: '/admin',
      component: Admin
    },
  ]
})
