<template>
  <header>
    <RouterLink to="/">
      Home.
    </RouterLink>
    <RouterLink to="/about">
      About.
    </RouterLink>
    <RouterLink
      v-if="!login"
      to="/login">
      Login.
    </RouterLink>
    <RouterLink
      v-if="!login"
      to="/signup">
      Signup.
    </RouterLink>
    <RouterLink to="/my-page">
      My-Page.
    </RouterLink>
    <RouterLink
      v-if="login"
      to="/"
      @click="logout">
      Logout.
    </RouterLink>
  </header>
</template>

<script>
export default {
  computed: {
    login() {
      return this.$store.state.auth.email
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logout')
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  padding: 20px 20px;
  border-bottom: 1px solid $color-primary;
  a {
    margin-right: 10px;
    line-height: 1;
  }
}
</style>
