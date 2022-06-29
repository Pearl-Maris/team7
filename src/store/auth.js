import axios from 'axios'
import router from '~/routes'
import { API_HEADERS, END_POINT } from '~/api/api'

export default {
  namespaced: true,
  state() {
    return {
    email: '',
    displayName: '',
    profileImg: '',
    }
  },
  mutations: {
    // state 데이터 수정 (payload는 객체 데이터를 인수로 받음)
    setStates(state, payload) {
      for (const key in payload) {
        state[key] = payload[key]
      }
    }
  },
  actions: {
    // 회원가입
    async signup({ commit }, payload) {
      
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
        const { user, accessToken } = userInfo.data
        window.localStorage.setItem('accessToken', accessToken)
        commit('setStates', user)
      }
      catch(error) {
        console.log(error)
        // alert(error.response.data)
      }
    },

    // 로그인
    async login({ state, commit }, payload) {
      const { email, password } = payload
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
        const { user, accessToken } = userInfo.data
        commit('setStates', user)
        window.localStorage.setItem('accessToken', accessToken)
        router.push('/')
        return state
      }
      catch(error) {
        console.log(error)
        // alert(error.response.data)
      }
    },

    // 로그아웃
    async logout({ commit }) {
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
      window.localStorage.removeItem('accessToken')
    },

    // 인증 확인 (토큰 확인)
    async validateToken({ commit }) {
      const accessToken = window.localStorage.getItem('accessToken')
      if (!accessToken) throw ''
      try {const userInfo = await axios({
        url: `${END_POINT}/auth/me`,
        method: 'POST',
        headers: {...API_HEADERS, Authorization: `Bearer ${accessToken}`}
      })
      commit('setStates', userInfo.data)
      return userInfo.data
      } catch (error) {
        console.log(error)
      }
    },

    // 회원정보 수정
    async editUserInfo({ commit }, payload) {
      const accessToken = window.localStorage.getItem('accessToken')
      const { displayName, profileImgBase64, oldPassword,newPassword } = payload
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
      }
      catch(error) {
        console.log(error)
        // alert(error.response.data)
      }
    },
  }
}
