import router from './index'
import store from '~/store'

router.beforeEach(async to => {
  let userInfo = null
  try {
    userInfo = await store.dispatch('auth/validateToken')
  } catch(error) {
    console.log(error)
  }

  if (to.meta.auth) {
    if (userInfo && userInfo.email === 'admin@kdt.com' && userInfo.displayName === 'admin') {
      return '/admin'
    }
    if (!userInfo) {
      return '/login'
    } 
  }
  if (userInfo && to.fullPath.includes('/login')) {
    return '/'
  }
  return true
})
