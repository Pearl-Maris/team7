import { createStore } from 'vuex'
import auth from './auth'
import account from './account'
import admin from './admin'
import customer from './customer'

export default createStore({
  modules: {
    auth,
    account,
    admin,
    customer
  }
})
