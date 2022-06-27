<template>
  <h1>기본정보</h1>
  <form @submit.prevent>
    <div class="input-wraper">
      <div class="input-title">
        이름을 입력하세요.
      </div>
      <input
        v-model.trim="displayName"
        type="text"
        maxlength="20" />
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
      displayName: ''
    }
  },
  computed: {
    currentName() {
      return this.$store.state.auth.displayName
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
