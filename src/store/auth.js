import axios from 'axios'
import { API_HEADERS, END_POINT } from './api'

export default {
  namespaced: true,
  state() {
    return {
    email: '',
    displayName: '',
    profileImg: '',
    }
  },
  getters: {

  }, 
  mutations: {
    setStates(state, payload) {
      for (const key in payload) {
        state[key] = payload[key]
      }
    }
  },
  actions: {
    async signup({ state, commit }, payload) {
      
      const { email, password, displayName, profileImgBase64 } = payload
      try {
        const userInfo = await axios({
          url: `${END_POINT}/auth/signup`,
          method: 'POST',
          headers: API_HEADERS,
          data: {
            email,
            password,
            displayName,
            profileImgBase64
          }
        })
        console.log(userInfo)
        const { user, accessToken } = userInfo.data
        window.localStorage.setItem('accessToken', accessToken)
        commit('setStates', user)
        console.log(state)
      }
      catch(error) {
        console.log(error)
        // alert(error.response.data)
      }
    },
    async login({ state, commit }, payload) {
      const { email, password } = payload
      console.log(payload)
      try {
        const userInfo = await axios({
          url: `${END_POINT}/auth/login`,
          method: 'POST',
          headers: API_HEADERS,
          data: {
            email,
            password
          }
        })
        console.log(userInfo)
        const { user, accessToken } = userInfo.data
        commit('setStates', user)
        console.log(state)
        window.localStorage.setItem('accessToken', accessToken)
        return state
      }
      catch(error) {
        console.log(error)
        // alert(error.response.data)
      }
    },
    async logout({ state, commit }) {
      const accessToken = window.localStorage.getItem('accessToken')
      await axios({
        url: `${END_POINT}/auth/logout`,
        method: 'POST',
        headers: {...API_HEADERS, Authorization: `Bearer ${accessToken}`}
      })
      commit('setStates', {
        email: '',
        displayName: '',
        profileImg: '',
        })
      console.log(state)
    },
    async validateToken({ state, commit }) {
      const accessToken = window.localStorage.getItem('accessToken')
      console.log(accessToken)
      try {const userInfo = await axios({
        url: `${END_POINT}/auth/me`,
        method: 'POST',
        headers: {...API_HEADERS, Authorization: `Bearer ${accessToken}`}
      })
      commit('setStates', userInfo.data)
      console.log(state)
      return userInfo.data
      } catch (error) {
        console.log(error)
      }
    },
    async editUserInfo({ state, commit }, payload) {
      const accessToken = window.localStorage.getItem('accessToken')
      const { displayName, profileImgBase64, oldPassword,newPassword } = payload
      console.log(payload)
      try {
        const userInfo = await axios({
          url: `${END_POINT}/auth/user`,
          method: 'PUT',
          headers: {...API_HEADERS, Authorization: `Bearer ${accessToken}`},
          data: {
            displayName,
            profileImgBase64,
            oldPassword,
            newPassword
          }
        })
        const { user } = userInfo.data
        commit('setStates', user)
        console.log(state)
      }
      catch(error) {
        console.log(error)
        // alert(error.response.data)
      }
    },
  }
}
