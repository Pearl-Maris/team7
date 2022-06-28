<template>
  <header>
    <div class="inner">
      <div class="logo">
        <RouterLink to="/">
          Logo
        </RouterLink>
      </div>
      <div class="ui-account">
        <RouterLink to="/about">
          About
        </RouterLink>
        <RouterLink
          v-if="!login"
          to="/login">
          Login
        </RouterLink>
        <RouterLink
          v-if="!login"
          to="/signup">
          Signup
        </RouterLink>
        <RouterLink to="/my-page">
          My-Page
        </RouterLink>
        <RouterLink
          v-if="login"
          to="/"
          @click="logout">
          Logout.
        </RouterLink>
      </div>
    </div>
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
  border-bottom: 1px solid #ddd;
  height:10rem;
  .inner{
    height:100%;
    display: flex;
    justify-content: space-between;
  }
  .logo {
    position:relative;
    height: 100%;
    a{
    font-size:4rem;
    line-height: 1;
    position: absolute;
    left:0;
    bottom: 0;
    margin: auto;
    top:50%;
    transform: translateY(-50%);
  }
  }
  .ui-account{
      display: flex;
      align-items: center;
        a{
          &:not(:last-child){
            margin-right:3rem;
          }
      }
  }
}
</style>
