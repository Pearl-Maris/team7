<template>
  <h1>비밀번호 변경</h1>
  <form @submit.prevent>
    <div class="input-wraper">
      <div class="input-title">
        현재 비밀번호<span>*</span>
      </div>
      <input
        v-model.trim="oldPassword"
        type="password"
        placeholder="현재 비밀번호를 입력하세요."
        minlength="8"
        required />
    </div>
    <div class="input-wraper">
      <div class="input-title">
        변경 비밀번호<span>*</span>
      </div>
      <input
        v-model.trim="newPassword"
        type="password"
        placeholder="비밀번호를 8자 이상 입력하세요."
        minlength="8"
        required />
    </div>
    <input
      type="submit"
      value="확인"
      class="btn"
      @click="edit" />
  </form>
</template>

<script>
export default {
    data() {
    return {
      oldPassword: '',
      newPassword: ''
    }
  },

  methods: {
    async edit() {
      await this.$store.dispatch('auth/editUserInfo', this.$data)
      this.$router.push('/my-page')
    }
  }
}
</script>
