<template>
  <h1>로그인</h1>
  <form
    class="login-form"
    @submit.prevent>
    <input
      v-model="email"
      class="user-id"
      type="text"
      placeholder="아이디 또는 이메일을 입력해주세요."
      required />
    
    <input
      v-model="password"
      class="user-password"
      type="password"
      placeholder="비밀번호를 입력해주세요."
      required />
    
    <input
      type="submit"
      value="로그인"
      @click="login" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: '123@123.com',
      password: 'test123123'
    }
  },
  methods: {
    async login() {
    await this.$store.dispatch('auth/login', this.$data)
    }
  }
}
</script>

<style lang="scss" scoped>
.login-form {
  display: flex;
  flex-direction: column;
}
input {
  width: 300px;
}
</style>
