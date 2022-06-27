import { createStore } from 'vuex'
import heropy from './heropy'
import auth from './auth'

export default createStore({
  modules: {
    heropy,
    auth
  }
})
