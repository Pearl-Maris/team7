<template>
  <header>
    <div class="inner">
      <div class="logo">
        <RouterLink to="/">
          Logo
        </RouterLink>
      </div>
      <div class="search">
        <input
          class="search-bar"
          type="text" 
          placeholder="어떤 상품을 찾으세요?" />
        <button class="btn btn-search">
          search
        </button>
      </div>
      <div class="ui-account">
        <template v-if="!login">
          <RouterLink
            to="/login">
            Login
          </RouterLink>
          <RouterLink
            to="/signup">
            Signup
          </RouterLink>
        </template>
        <template v-else>
          <RouterLink to="/my-page">
            My-Page
          </RouterLink>
          <RouterLink
            to="/"
            @click="logout">
            Logout
          </RouterLink>
        </template>
      </div>
    </div>
    <div class="path">
      <template>
        <!-- 현재 경로를 나타냄 -->
      </template>
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
  .search {
    display: flex;
    justify-content: center;
    align-items: center;
    &-bar {
      padding: 14px 70px 13px 20px;
      border-radius: 2rem;
      background-color: $color-primary;
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
