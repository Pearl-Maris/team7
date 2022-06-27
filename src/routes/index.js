import { createRouter, createWebHistory } from 'vue-router'
import Home from './Home'
import About from './About'
import Login from './Login'
import Signup from './Signup'
import MyPage from './MyPage'
import EditDisplayName from './EditDisplayName'
import EditPassword from './EditPassword'

export default createRouter({
  history: createWebHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
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
      children: [
        {
          path: 'edit-name',
          component: EditDisplayName
        },
        {
          path: 'edit-password',
          component: EditPassword
        }
      ]
    },
    // {
    //   path: '/:notFound(.*)*',
    //   component: NotFound
    // },
  ]
})
