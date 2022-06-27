import router from './index'
// import { mapActions } from 'vuex'
import store from '~/store'

// export default {
//   methods: {
//     ...mapActions('~/store/auth', [
//       'validateToken'
//     ])
//   }
// }

router.beforeEach(async to => {
  console.log(to)
  if (to.meta.auth) {
    const userInfo = await store.dispatch('auth/validateToken')
    console.log(userInfo)
    // if (userInfo.email === 'admin@kdt.com' && userInfo.displayName === 'admin') {
    //   return '/admin'
    // }
    if (userInfo && userInfo.email) {
      return true
    } 
      return '/login'
    }
  
  return true
})

